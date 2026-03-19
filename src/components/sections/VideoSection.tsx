import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

export function VideoSection() {
    return (
        <section className="bg-cream pb-24">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <SectionHeading
                        centered
                        title="Tư Liệu Học Tập"
                        subtitle="Video tham khảo về giai đoạn lịch sử 1930 - 1975"
                    />
                    <div className="mx-auto mt-6 h-1.5 w-24 bg-accent" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65 }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="relative w-full rounded-eight overflow-hidden shadow-2xl border border-dark/10" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            className="absolute left-0 top-0 h-full w-full"
                            src="https://firebasestorage.googleapis.com/v0/b/capstone-4a900.firebasestorage.app/o/Dinh%20%C4%90%E1%BB%99c%20L%E1%BA%ADp.mp4?alt=media&token=86faa86a-95bd-41da-a516-454013789835"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}