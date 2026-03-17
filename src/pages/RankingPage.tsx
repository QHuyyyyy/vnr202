import { useEffect, useState } from 'react'
import { SectionHeading } from '../components/sections/SectionHeading'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

interface RankingEntry {
    id: string
    rank: number
    name: string
    point: number
    time: number
    completedTime?: string
}

export function RankingPage() {
    const [ranking, setRanking] = useState<RankingEntry[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchRanking = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://6727111d302d03037e6f3df4.mockapi.io/api/v1/ranking')
                if (!response.ok) throw new Error('Failed to fetch ranking')

                const data = await response.json()
                // Sort by point (rounds) descending, then by time ascending if points are equal
                const sortedData = data.sort((a: any, b: any) => {
                    if (b.point !== a.point) {
                        return b.point - a.point // More rounds = higher rank
                    }
                    return a.time - b.time // Less time = higher rank
                })
                const processedData = sortedData.map((item: any, index: number) => {
                    // Convert time (seconds) to MM:SS format
                    const minutes = Math.floor(item.time / 60)
                    const seconds = item.time % 60
                    const completedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`

                    return {
                        ...item,
                        rank: index + 1,
                        completedTime,
                    }
                })
                setRanking(processedData)
                setError(null)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Lỗi tải dữ liệu')
                setRanking([])
            } finally {
                setLoading(false)
            }
        }

        fetchRanking()
    }, [])

    const getMedalIcon = (rank: number) => {
        if (rank === 1) return '🥇'
        if (rank === 2) return '🥈'
        if (rank === 3) return '🥉'
        return rank
    }

    const getRowStyles = (rank: number) => {
        if (rank === 1) return 'bg-gradient-to-r from-primary/10 to-primary/5'
        if (rank === 2) return 'bg-gradient-to-r from-primary/10 to-primary/5'
        if (rank === 3) return 'bg-gradient-to-r from-primary/10 to-primary/5'
        return 'hover:bg-dark/5'
    }

    const getRankBadgeColor = (rank: number) => {
        if (rank === 1) return 'text-primary font-bold'
        if (rank === 2) return 'text-accent font-semibold'
        if (rank === 3) return 'text-primary font-semibold'
        return 'text-dark/40 font-medium'
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-cream via-surface/50 to-white pt-24">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <SectionHeading
                        eyebrow="Thành tựu cộng đồng"
                        title="Bảng Xếp Hạng"
                        description="Những người dẫn đầu"
                    />

                    {loading && (
                        <div className="mt-16 text-center py-12">
                            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
                            <p className="text-dark/60">Đang tải dữ liệu...</p>
                        </div>
                    )}

                    {error && (
                        <div className="mt-16 rounded-2xl border border-primary/25 bg-accent/10 p-6 text-center text-primary">
                            <p className="font-medium">⚠️ {error}</p>
                        </div>
                    )}

                    {!loading && !error && ranking.length > 0 && (
                        <div className="mt-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-primary/10">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-primary to-primary/80 text-white">
                                            <th className="px-6 py-5 text-left font-semibold">Hạng</th>
                                            <th className="px-6 py-5 text-left font-semibold">Tên</th>
                                            <th className="px-6 py-5 text-center font-semibold">Tổng lượt</th>
                                            <th className="px-6 py-5 pr-6 text-right font-semibold">Thời gian hoàn thành</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ranking.map((entry) => (
                                            <tr
                                                key={entry.id}
                                                className={`border-b border-primary/10 transition ${getRowStyles(entry.rank)}`}
                                            >
                                                <td className={`px-6 py-7 text-lg ${getRankBadgeColor(entry.rank)}`}>
                                                    {getMedalIcon(entry.rank)}
                                                </td>
                                                <td className="px-6 py-7">
                                                    <p className="font-semibold text-dark">{entry.name}</p>
                                                </td>
                                                <td className="px-6 py-7 text-center">
                                                    <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm">
                                                        {entry.point.toLocaleString()}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-7 pr-6 text-right italic text-dark/60">{entry.completedTime}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Decorative gradient bar */}
                            <div className="h-1 w-full flex">
                                <div className="h-full flex-1 bg-primary/20"></div>
                                <div className="h-full flex-1 bg-primary/40"></div>
                                <div className="h-full flex-1 bg-primary/60"></div>
                                <div className="h-full flex-1 bg-primary/80"></div>
                                <div className="h-full flex-1 bg-primary"></div>
                            </div>
                        </div>
                    )}

                    {!loading && !error && ranking.length === 0 && (
                        <div className="mt-16 text-center py-12">
                            <p className="text-dark/60">Chưa có dữ liệu xếp hạng</p>
                        </div>
                    )}

                    <div className="mt-12 text-center">
                        <p className="text-sm text-dark/50 italic">
                            "Thứ hạng chỉ là con số, giá trị thực nằm ở những gì ta học được."
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
