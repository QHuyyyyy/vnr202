import { motion } from 'framer-motion'

const conclusionImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAMTDfO5gxiDNj5s_TM2SxIWOhYzxq6G5niTDPb0Rg4dtvDJn7HthWTRnCqIuuj_6BxhRNnnu4HSWQaIXngbHsKTnt_ywcS0Pvg0UvFh-YZ73WQT9DJlBfGtYR5PUP_jS_UjOPKIhWa9MKI0k1IPgOoE0cMNosQyx9LScfR8umb4z5avJ-abiIseJGcLrGxSqKDknC6vBOBLH-5r5t6FeHepqBynJEzLqa2VbY6VyQAHXjRUbs8uBIs7fwsse-2x7Plcz6gL1WlTtU'

export function ConclusionSection() {
    return (
        <section id="conclusion" className="relative bg-cream py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65 }}
                    className="flex flex-col items-stretch overflow-hidden rounded-eight border border-dark/5 bg-white shadow-2xl lg:flex-row"
                >
                    <div className="overflow-hidden lg:w-1/2">
                        <img
                            src={conclusionImage}
                            alt="Tuyên ngôn độc lập 1945"
                            className="h-full w-full object-cover opacity-90 grayscale transition-all duration-700 hover:grayscale-0"
                        />
                    </div>

                    <div className="flex flex-col justify-center bg-surface p-12 md:p-16 lg:w-1/2">
                        <h2 className="mb-6 font-serif text-3xl font-bold text-primary md:text-5xl">Ý Nghĩa Lịch Sử</h2>
                        <div className="space-y-6 text-lg leading-relaxed text-dark">
                            <p>
                                Thắng lợi của Cách mạng Tháng Tám năm 1945 là kết quả của quá trình chuẩn bị lâu dài, bền bỉ dưới sự
                                lãnh đạo tài tình của Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí Minh.
                            </p>
                            <p className="border-l-4 border-primary pl-4 font-bold text-gray-800">
                                Sự kiện này đã phá tan xiềng xích thực dân, phong kiến, mở ra một kỷ nguyên mới - kỷ nguyên Độc lập, Tự
                                do cho dân tộc Việt Nam.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-4">
                            <div className="h-px flex-grow bg-dark/10" />
                            <p className="text-sm font-bold uppercase tracking-widest text-primary">Việt Nam Độc Lập Đồng Minh</p>
                            <div className="h-px flex-grow bg-dark/10" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}