import { motion } from 'framer-motion'

type SectionHeadingProps = {
    title: string
    subtitle?: string
    centered?: boolean
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={centered ? 'text-center' : ''}
        >
            <h2 className="font-serif text-3xl font-bold text-dark md:text-5xl">{title}</h2>
            {subtitle ? <p className="mx-auto mt-4 max-w-2xl text-gray-600">{subtitle}</p> : null}
        </motion.div>
    )
}