import { motion } from 'framer-motion'
import { timelineItems } from '../../data/timeline'
import { SectionHeading } from '../ui/SectionHeading'

export function TimelineSection() {
    return (
        <section id="timeline" className="overflow-hidden border-y border-dark/5 bg-surface py-24">
            <div className="container mx-auto px-6">
                <SectionHeading
                    centered
                    title="Hành Trình 15 Năm Lãnh Đạo"
                    subtitle="Từng bước chuẩn bị cho sự bùng nổ của Cách mạng Tháng Tám"
                />

                <div className="timeline-line relative mt-20">
                    {timelineItems.map((item, idx) => {
                        const reverse = idx % 2 !== 0

                        return (
                            <motion.div
                                key={item.period}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: idx * 0.06 }}
                                className="relative z-10 mb-24 flex w-full flex-col items-center justify-between md:flex-row"
                            >
                                <div className={`md:w-5/12 ${reverse ? 'order-3 md:order-1' : 'order-2 md:order-1 mt-8 md:mt-0'}`}>
                                    {reverse ? (
                                        <img
                                            src={item.image}
                                            alt={item.imageAlt}
                                            className="rounded-eight border border-dark/5 shadow-md grayscale transition-transform duration-500 hover:scale-105"
                                        />
                                    ) : (
                                        <div
                                            className={`rounded-eight bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${reverse ? 'border-r-4 border-primary' : 'border-l-4 border-primary'
                                                }`}
                                        >
                                            <span className="mb-2 block text-xl font-bold text-primary">{item.period}</span>
                                            <h3 className="mb-4 text-2xl font-bold text-dark">{item.title}</h3>
                                            <p className="leading-relaxed text-gray-600">{item.description}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="order-1 flex justify-center md:order-2 md:w-1/12">
                                    <div className="h-6 w-6 rounded-full border-4 border-surface bg-primary ring-4 ring-primary/10" />
                                </div>

                                <div className={`md:w-5/12 ${reverse ? 'order-2 md:order-3 mt-8 md:mt-0' : 'order-3'}`}>
                                    {reverse ? (
                                        <div
                                            className={`rounded-eight bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${reverse ? 'border-r-4 border-primary' : 'border-l-4 border-primary'
                                                }`}
                                        >
                                            <span className="mb-2 block text-xl font-bold text-primary">{item.period}</span>
                                            <h3 className="mb-4 text-2xl font-bold text-dark">{item.title}</h3>
                                            <p className="leading-relaxed text-gray-600">{item.description}</p>
                                        </div>
                                    ) : (
                                        <img
                                            src={item.image}
                                            alt={item.imageAlt}
                                            className="rounded-eight border border-dark/5 shadow-md grayscale transition-transform duration-500 hover:scale-105"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}