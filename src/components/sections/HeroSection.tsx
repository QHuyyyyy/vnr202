import { motion } from 'framer-motion'

const heroImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD3RhepO6iz7-QaY2xHQtNrxaBjY2kIqf0TqV5QZpz_q93B5d57TJNsgpwhztG6lZWt1YUFDsQmfUzqIbMHJOVMu1J0vlo2vGpCCqLOXAY1cP7VHCkssnVPDJhDxhsOGaFLDw3T0f1E3Oc-9_fPQeFcRub5tl5ln_TzXGTTvusfaEuw4ttZrz4-UnV8LbdPOsCBfSqShc8qs6Ns6-G9UQk2_DHk5-Y3khu_a7VygeqU01bB_hGB5p444LdmcPVNHPE2Bb8yZmkD07M'

export function HeroSection() {
    return (
        <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-cream/20 via-cream/55 to-cream" aria-hidden="true" />

            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
                className="relative z-20 mx-auto max-w-5xl px-6 pb-16 pt-28 text-center md:pt-32"
            >
                <span className="inline-block rounded-full border border-primary px-4 py-1 text-sm font-semibold uppercase tracking-widest text-primary">
                    Trang Lịch Sử Việt Nam
                </span>

                <h1 className="mb-8 mt-6 font-serif text-5xl font-black uppercase leading-[1] md:leading-[1.1] lg:leading-[1.2] text-dark drop-shadow-sm md:text-6xl lg:text-7xl">
                    Sự Ra Đời Và Lãnh Đạo Đấu Tranh
                    <br />
                    <span className="text-primary italic">Giành Chính Quyền</span>
                    <br />
                    Của Đảng Cộng Sản Việt Nam (1930-1945)
                </h1>

                <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
                    Từ khi ra đời năm 1930 đến thắng lợi của Cách mạng Tháng Tám 1945, Đảng đã lãnh đạo nhân dân từng bước xây
                    dựng lực lượng, chuẩn bị và nắm bắt thời cơ để giành chính quyền về tay nhân dân.
                </p>

                <a
                    href="#context"
                    className="group inline-flex flex-col items-center gap-2 text-primary transition-colors duration-300 hover:text-dark"
                >
                    <span className="text-sm font-bold uppercase tracking-widest">Khám phá hành trình</span>
                    <svg className="h-8 w-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                </a>
            </motion.div>
        </section>
    )
}
