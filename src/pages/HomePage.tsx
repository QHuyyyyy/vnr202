import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { VideoSection } from "../components/sections/VideoSection";
import { ConclusionSection } from '../components/sections/ConclusionSection'
import { ContextSection } from '../components/sections/ContextSection'
import { HeroSection } from '../components/sections/HeroSection'
import { RolesSection } from '../components/sections/RolesSection'
import { TimelineSection } from '../components/sections/TimelineSection'

export function HomePage() {
    return (
        <div className="bg-cream text-dark">
            <Header />
            <main>
                <HeroSection />
                <ContextSection />
                <TimelineSection />
                <RolesSection />
                <VideoSection />
                <ConclusionSection />
            </main>
            <Footer />
        </div>
    )
}
