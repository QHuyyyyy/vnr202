import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

import contextImage from '../../assets/context.jpg'

export function ContextSection() {
    return (
        <section id="context" className="relative bg-cream py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-16 lg:flex-row">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:w-1/2"
                    >
                        <SectionHeading title="Bối Cảnh Lịch Sử" />
                        <div className="mb-8 mt-6 h-1.5 w-20 bg-primary" />
                        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                            <p>
                                Đầu thế kỷ XX, Việt Nam nằm dưới sự đô hộ của thực dân Pháp. Các phong trào yêu nước theo khuynh hướng
                                phong kiến hay tư sản đều lâm vào tình trạng khủng hoảng bế tắc về đường lối cứu nước và giai cấp lãnh
                                đạo.
                            </p>
                            <p>
                                Sự ra đời của Đảng Cộng sản Việt Nam vào đầu năm 1930 là một bước ngoặt lịch sử vĩ đại, chấm dứt cuộc
                                khủng hoảng kéo dài nhiều năm. Đảng đã mở ra một con đường mới: kết hợp độc lập dân tộc với chủ nghĩa
                                xã hội.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        className="relative lg:w-1/2"
                    >
                        <div className="absolute -inset-4 -z-10 rounded-eight bg-primary/5 blur-2xl" />
                        <img
                            src={contextImage}
                            alt="Bối cảnh lịch sử Việt Nam 1930"
                            className="rounded-eight border border-dark/10 shadow-2xl grayscale transition-all duration-500 hover:grayscale-0"
                        />
                        <div className="absolute -bottom-6 -right-6 hidden rounded-eight border border-dark/5 bg-white p-6 shadow-xl md:block">
                            <p className="font-bold italic text-accent">Đoàn kết, đoàn kết, đại đoàn kết...</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
