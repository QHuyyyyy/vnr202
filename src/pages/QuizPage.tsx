import { QuickQuiz } from '../components/sections/QuickQuiz'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export function QuizPage() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-surface px-4 pb-16 pt-24 sm:px-8 lg:px-16">
                <div className="mx-auto flex max-w-6xl flex-col gap-10">
                <QuickQuiz />
                <Footer />
            </div>
        </div>
        </>
    )
}
