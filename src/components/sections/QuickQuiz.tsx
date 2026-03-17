import { useEffect, useMemo, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import quizJson from '../../data/quiz.json'

type AnswerOption = {
  text: string
  isCorrect: boolean
}

type QuizQuestion = {
  id: number
  chapterName: string
  context: string
  question: string
  answers: AnswerOption[]
}

type RankingEntry = {
  id?: string
  name: string
  time: number
  point: number
}

const quizData = quizJson

export function QuickQuiz() {
  const navigate = useNavigate()
  const [playerName, setPlayerName] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [isNameConfirmed, setIsNameConfirmed] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [points, setPoints] = useState(30)
  const [attempts, setAttempts] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [lastResult, setLastResult] = useState<'correct' | 'wrong' | null>(null)
  const [lastPenalty, setLastPenalty] = useState<number | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerOption | null>(null)
  const [showResultModal, setShowResultModal] = useState(false)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState<number | null>(null)
  const [isPosting, setIsPosting] = useState(false)
  const [postError, setPostError] = useState<string | null>(null)
  const [posted, setPosted] = useState(false)

  const rankingEndpoint = 'https://6727111d302d03037e6f3df4.mockapi.io/api/v1/ranking'

  const questions = useMemo<QuizQuestion[]>(() => {
    const allQuestions = quizData.chapters.flatMap((chapter) =>
      chapter.questions.map((question) => {
        // Shuffle options
        const shuffledAnswers = [...question.options]
          .map((option) => ({
            text: option.text,
            isCorrect: Boolean(option.is_correct),
          }))
          .sort(() => Math.random() - 0.5)

        return {
          id: question.id,
          chapterName: chapter.chapter_name,
          context: chapter.description,
          question: question.question,
          answers: shuffledAnswers,
        }
      }),
    )

    // Shuffle questions
    return allQuestions.sort(() => Math.random() - 0.5)
  }, [])

  useEffect(() => {
    const storedName = localStorage.getItem('quizPlayerName')
    if (storedName) {
      setPlayerName(storedName)
      setNameInput(storedName)
      setIsNameConfirmed(true)
    }
  }, [])

  useEffect(() => {
    if (!isNameConfirmed) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
    document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isNameConfirmed])

  const handleConfirmName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = nameInput.trim()
    if (!trimmed) return
    localStorage.setItem('quizPlayerName', trimmed)
    setPlayerName(trimmed)
    setIsNameConfirmed(true)
    if (!startTime) setStartTime(Date.now())
  }

  const rankingComparator = (a: RankingEntry, b: RankingEntry) => {
    if (a.point !== b.point) return b.point - a.point
    if (a.time !== b.time) return a.time - b.time
    return 0
  }

  const fetchRankingEntries = async (): Promise<RankingEntry[]> => {
    const response = await fetch(rankingEndpoint)
    if (!response.ok) {
      throw new Error('GET_FAILED')
    }
    const data = (await response.json()) as RankingEntry[]
    return data
  }

  const postResult = async (durationSeconds: number, totalPlays: number) => {
    if (isPosting) return
    setIsPosting(true)
    setPostError(null)

    try {
      const newEntry: RankingEntry = {
        name: playerName,
        time: durationSeconds,
        point: totalPlays,
      }

      const rankingEntries = await fetchRankingEntries()
      const sortedEntries = [...rankingEntries].sort(rankingComparator)
      const topEntries = sortedEntries.slice(0, 10)
      const worstTopEntry = topEntries[topEntries.length - 1]
      const qualifiesForTop10 =
        topEntries.length < 10 ||
        (worstTopEntry && rankingComparator(newEntry, worstTopEntry) < 0)

      if (!qualifiesForTop10) {
        setPosted(false)
        setPostError('Kết quả chưa lọt top 10 nên không được lưu.')
        return
      }

      if (topEntries.length >= 10 && worstTopEntry?.id) {
        await fetch(`${rankingEndpoint}/${worstTopEntry.id}`, {
          method: 'DELETE',
        })
      }

      const response = await fetch(rankingEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      })

      if (!response.ok) {
        throw new Error('POST_FAILED')
      }

      setPosted(true)
    } catch (error) {
      setPostError('Chưa thể gửi kết quả. Vui lòng thử lại sau.')
    } finally {
      setIsPosting(false)
    }
  }

  const finishGame = async (finalAttempts: number) => {
    if (isFinished) return
    const endTime = Date.now()
    const effectiveStart = startTime ?? endTime
    const durationSeconds = Math.max(
      1,
      Math.round((endTime - effectiveStart) / 1000),
    )

    setElapsedTime(durationSeconds)
    setIsFinished(true)
    setShowResultModal(true)
    await postResult(durationSeconds, finalAttempts)
  }

  const handleAnswer = async (answer: AnswerOption) => {
    if (isFinished) return
    if (hasAnswered) return
    if (!startTime) setStartTime(Date.now())

    const nextAttempts = attempts + 1
    setAttempts(nextAttempts)

    let nextPoints = points
    let penalty = 0
    if (answer.isCorrect) {
      setLastResult('correct')
      setLastPenalty(0)
    } else {
      penalty = Math.floor(Math.random() * 11) + 10
      nextPoints = Math.max(0, points - penalty)
      setLastResult('wrong')
      setLastPenalty(penalty)
      setPoints(nextPoints)
    }

    setSelectedAnswer(answer)
    setHasAnswered(true)

    if (nextPoints <= 0) {
      await finishGame(nextAttempts)
      return
    }
  }

  const handleNextQuestion = async () => {
    if (isFinished || !hasAnswered) return

    if (currentIndex >= questions.length - 1) {
      await finishGame(attempts)
      return
    }

    setCurrentIndex((prev) => prev + 1)
    setHasAnswered(false)
    setSelectedAnswer(null)
    setLastResult(null)
    setLastPenalty(null)
  }

  const currentQuestion = questions[currentIndex]
  const hasCompletedAll = attempts >= questions.length && points > 0

  return (
    <div className="w-full">
      {!isNameConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 px-4 backdrop-blur-sm">
          <form
            onSubmit={handleConfirmName}
            className="w-full max-w-md space-y-4 rounded-3xl border border-primary/20 bg-white p-8 text-center shadow-2xl"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Trắc nghiệm lịch sử</p>
            <h3 className="font-serif text-3xl font-bold text-dark mb-2">Nhập tên của bạn</h3>
            <p className="text-sm text-dark/70 mb-6">
              Kết quả của bạn sẽ được lưu lại cùng thời gian làm bài.
            </p>
            <input
              value={nameInput}
              onChange={(event) => setNameInput(event.target.value)}
              placeholder="Ví dụ: Nguyễn Văn A"
              className="w-full rounded-2xl border border-dark/10 px-5 py-4 text-sm focus:border-primary focus:outline-none mb-6"
              autoFocus
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="w-full rounded-xl border border-dark/10 px-5 py-4 text-sm font-bold text-dark transition hover:bg-dark/5"
                onClick={() => navigate('/')}
              >
                Quay lại
              </button>
              <button
                type="submit"
                className="w-full rounded-xl bg-accent px-5 py-4 text-sm font-bold text-[#1a201c] shadow-lg transition hover:bg-yellow-400"
              >
                Bắt đầu ngay
              </button>
            </div>
          </form>
        </div>
      )}

      {isNameConfirmed && currentQuestion && (
        <>
          {/* Main Quiz Container */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-dark/10">

            {/* Hero Section of Card */}
            <div className="p-8 md:p-12 border-b border-dark/5 bg-gradient-to-br from-white to-surface">
              <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Trắc Nghiệm Lịch Sử</span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4 leading-tight">
                Bạn hiểu rõ về giai đoạn 1930-1945 như thế nào?
              </h1>
              <p className="text-dark/60 text-lg">Kiểm tra kiến thức của bạn về Đảng Cộng sản Việt Nam và tiến trình giành độc lập dân tộc.</p>
            </div>

            {/* Progress Section */}
            <div className="px-8 md:px-12 py-6 bg-dark/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-primary font-semibold text-sm">Câu hỏi {currentIndex + 1}/{questions.length}</span>
                <span className="text-dark/40 text-sm font-medium">Hoàn thành {Math.round((currentIndex / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-dark/10 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-500"
                  style={{ width: `${(currentIndex / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Area */}
            <div className="p-8 md:p-12">
              <div className="mb-10">
                <h3 className="text-2xl font-serif font-bold text-dark leading-snug">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Multiple Choice Options */}
              <div className="grid gap-4">
                {currentQuestion.answers.map((answer, i) => {
                  const letters = ['A', 'B', 'C', 'D']
                  const isSelected = selectedAnswer?.text === answer.text
                  const isCorrect = isSelected && answer.isCorrect

                  let borderClass = 'border-dark/10'
                  let bgClass = 'bg-white hover:border-primary/40 hover:bg-primary/5'
                  let letterBg = 'bg-dark/5'
                  let letterText = 'text-dark/50'

                  if (isSelected) {
                    if (isCorrect) {
                      borderClass = 'border-emerald-500'
                      bgClass = 'bg-emerald-50'
                      letterBg = 'bg-emerald-500'
                      letterText = 'text-white'
                    } else {
                      borderClass = 'border-primary'
                      bgClass = 'bg-primary/5'
                      letterBg = 'bg-primary'
                      letterText = 'text-white'
                    }
                  } else if (hasAnswered && answer.isCorrect) {
                    borderClass = 'border-emerald-500'
                    letterBg = 'bg-emerald-500'
                    letterText = 'text-white'
                  }

                  return (
                    <button
                      key={answer.text}
                      type="button"
                      className={`group flex items-center p-5 text-left border-2 ${borderClass} ${bgClass} rounded-2xl transition-all duration-200`}
                      onClick={() => handleAnswer(answer)}
                      disabled={isFinished || hasAnswered}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-colors mr-5 ${letterBg} ${letterText} ${(!isSelected && !hasAnswered) ? 'group-hover:bg-primary group-hover:text-white' : ''}`}>
                        {letters[i]}
                      </div>
                      <span className={`text-lg font-medium transition-colors ${isSelected ? (isCorrect ? 'text-emerald-700' : 'text-primary') : 'text-dark/80 group-hover:text-primary'}`}>
                        {answer.text}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Feedback Message */}
              {lastResult && (
                <div className={`mt-8 px-6 py-5 rounded-xl border flex items-center gap-4 ${lastResult === 'correct' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                  <div className="flex-1">
                    <p className="font-bold text-lg mb-1">{lastResult === 'correct' ? 'Chính xác!' : 'Chưa chính xác.'}</p>
                    {lastResult === 'wrong' && <p className="opacity-90">Điểm bị trừ: {lastPenalty}</p>}
                  </div>
                </div>
              )}
            </div>

            {/* Quiz Footer / Stats */}
            <div className="bg-[#1B2B15] p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/5">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent">⭐</div>
                  <div className="flex flex-col">
                    <span className="text-white/60 text-xs uppercase tracking-wider">Điểm hiện tại</span>
                    <span className="text-white font-bold text-lg">{points}</span>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/10 mx-2"></div>
                <div className="flex items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/50">👤</div>
                  <div className="flex flex-col">
                    <span className="text-white/60 text-xs uppercase tracking-wider">Người chơi</span>
                    <span className="text-white font-bold text-lg truncate max-w-[150px]">{playerName || 'Khách'}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className={`w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-3 rounded-xl transition-all shadow-lg hover:shadow-accent/20 ${!hasAnswered ? 'opacity-50 grayscale-[0.8] cursor-not-allowed' : ''}`}
                onClick={handleNextQuestion}
                disabled={!hasAnswered}
              >
                {currentIndex >= questions.length - 1 ? 'Hoàn tất' : 'Tiếp Theo'}
              </button>
            </div>
          </div>

          {/* Decoration/Context Image Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/references" className="relative rounded-2xl overflow-hidden h-64 shadow-lg group block">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Tư liệu lịch sử"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbMExBXFcWRRDjc0d0ObVXeftt9A-1SbvHghv3vywGdJmMXHF0YZFgtGCBGSyQ-fjvdcMITxQP_0OpS0xC5pDXPP7ZPek8g45ID3BwXx11uBSqTjKD1lsIdBrUFdpUUpGDgSUtNJK0WqGjQ5sFNzbjQ8VzgjiI6AHc2Z6I8UPSI0jntgq5Kdakpig08VFg_-mwNVECVJMSiTJ1bJQFzeLkiY7rIcC3CKVIwmhKa2yOyjI9cZUGjIRJY-Q98AoWeBnHdGISM6ZSWP4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-serif font-bold text-2xl mb-2">Tư liệu lịch sử</h4>
                <p className="text-white/80 text-sm">Khám phá kho lưu trữ văn kiện Đảng qua các thời kỳ.</p>
              </div>
            </Link>

            <Link to="/ranking" className="relative rounded-2xl overflow-hidden h-64 shadow-lg group block">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Bảng xếp hạng"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZCcNx8cdBJpbMHkD4XIUAx0_bD5XWwgZGtBuSGa7znE4kf3GTIhxaJnLXCf7FD4Vvp0jzBCcHa_nb8lKHsYNt4swiw4enDOpjkOtCZz5BqUIaksprBHqyGTRhgHALYwJdSmmBXc0Hmx7L_s3MY4rcLMuRZwV6OD532Wpto1bfRhpg2uia9L3GQhPkLTh8B_YEydduVY534kxKo38yU235IdzWCeJ4O9MtsXFKbkX70E4_Rg82vkk4xKzHce0RvbQUEMTI9vAxqIs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-serif font-bold text-2xl mb-2">Bảng xếp hạng</h4>
                <p className="text-white/80 text-sm">Xem ai là người nắm vững lịch sử nước nhà nhất.</p>
              </div>
            </Link>
          </div>

          {/* Result Modal */}
          {isFinished && showResultModal && (
            <div className="fixed inset-0 z-[60] flex h-screen w-screen items-center justify-center bg-dark/70 px-4 backdrop-blur-sm">
              <div className="w-full max-w-lg space-y-4 rounded-3xl border border-primary/20 bg-white p-8 text-center shadow-2xl">
                <h3 className="font-serif text-3xl font-bold text-dark mt-2">
                  {hasCompletedAll ? 'Tuyệt vời!' : 'Chưa hoàn thành'}
                </h3>
                <p className="text-dark/60">
                  {hasCompletedAll
                    ? 'Bạn đã hoàn thành toàn bộ câu hỏi trắc nghiệm.'
                    : 'Bạn đã hết điểm trước khi hoàn thành bộ câu hỏi.'}
                </p>
                {elapsedTime !== null && (
                  <div className="bg-dark/5 rounded-2xl py-6 px-4 my-6 border border-dark/10">
                    <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-2">Thống kê</p>
                    <div className="flex justify-center gap-8">
                      <div>
                        <p className="text-2xl font-bold text-primary">{attempts}</p>
                        <p className="text-xs text-dark/60">Lượt trả lời</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-dark">{elapsedTime}s</p>
                        <p className="text-xs text-dark/60">Thời gian</p>
                      </div>
                    </div>
                  </div>
                )}
                {posted && (
                  <p className="text-sm font-medium text-emerald-600">
                    Thành tích của bạn đã được ghi nhận trên Bảng xếp hạng!
                  </p>
                )}
                {postError && (
                  <p className="text-sm font-medium text-red-600">{postError}</p>
                )}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mt-6">
                  <button
                    type="button"
                    className="rounded-xl border-2 border-primary/20 bg-white px-6 py-3.5 text-sm font-bold text-dark transition hover:border-primary/50"
                    onClick={() => setShowResultModal(false)}
                  >
                    Xem lại câu hỏi
                  </button>
                  <Link
                    to="/ranking"
                    className="rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-primary/90"
                  >
                    Xem bảng xếp hạng
                  </Link>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
