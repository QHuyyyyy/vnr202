import { motion } from 'framer-motion'
import conclusionImage from '../../assets/conclusion.png'

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
                                Thắng lợi của Cách mạng Tháng Tám và đỉnh cao là thắng lợi của cuộc kháng chiến chống Mỹ, cứu nước năm 1975 là kết quả của quá trình lãnh đạo đúng đắn, lâu dài của Đảng Cộng sản Việt Nam.
                                <br />
                                Sự nghiệp cách mạng trong giai đoạn 1930–1975 đã:
                                Đập tan ách thống trị của thực dân, phong kiến và đế quốc.
                                Giành và giữ vững chính quyền, bảo vệ thành quả cách mạng.
                                Hoàn thành sự nghiệp giải phóng dân tộc, thống nhất đất nước qua Chiến tranh Việt Nam.
                            </p>
                            <p className="border-l-4 border-primary pl-4 font-bold text-gray-800">
                                Qua đó, mở ra một kỷ nguyên mới cho dân tộc Việt Nam: kỷ nguyên độc lập, tự do và thống nhất đất nước, tiến lên xây dựng chủ nghĩa xã hội
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
