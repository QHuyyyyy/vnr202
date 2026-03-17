import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { QuizPage } from './pages/QuizPage'
import { RankingPage } from './pages/RankingPage'
import { ReferencesPage } from './pages/ReferencesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/references" element={<ReferencesPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
