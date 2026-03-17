import { motion } from 'framer-motion'
import { roleItems } from '../../data/roles'
import { SectionHeading } from '../ui/SectionHeading'

export function RolesSection() {
    return (
        <section id="roles" className="bg-cream py-24">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <SectionHeading centered title="Vai Trò Của Đảng" />
                    <div className="mx-auto mt-6 h-1.5 w-24 bg-accent" />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {roleItems.map((item, idx) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className="group rounded-eight border border-dark/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/5 transition-colors duration-300 group-hover:bg-primary">
                                <svg className="h-8 w-8 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d={item.iconPath} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                            </div>

                            <h4 className="mb-4 text-xl font-bold text-dark">{item.title}</h4>
                            <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}