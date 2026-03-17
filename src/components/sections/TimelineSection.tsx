import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useRef, useState, type WheelEvent } from 'react'
import { timelineItems } from '../../data/timeline'
import { SectionHeading } from '../ui/SectionHeading'

export function TimelineSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [slideDirection, setSlideDirection] = useState<1 | -1>(1)
    const detailRef = useRef<HTMLDivElement | null>(null)
    const wheelLockRef = useRef(0)

    const activeItem = activeIndex === null ? null : timelineItems[activeIndex]

    const openDetail = (index: number) => {
        setSlideDirection(index >= (activeIndex ?? 0) ? 1 : -1)
        setActiveIndex(index)
        requestAnimationFrame(() => {
            detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
    }

    const changeActivePeriod = (direction: 1 | -1) => {
        if (activeIndex === null) {
            return
        }

        const next = Math.max(0, Math.min(timelineItems.length - 1, activeIndex + direction))
        if (next !== activeIndex) {
            setSlideDirection(direction)
            setActiveIndex(next)
        }
    }

    const handleDetailWheel = (event: WheelEvent<HTMLDivElement>) => {
        if (activeIndex === null) {
            return
        }

        const now = Date.now()
        const isLocked = now - wheelLockRef.current < 420
        const isSmallMove = Math.abs(event.deltaY) < 14
        if (isLocked || isSmallMove) {
            return
        }

        event.preventDefault()
        wheelLockRef.current = now
        changeActivePeriod(event.deltaY > 0 ? 1 : -1)
    }

    return (
        <section id="timeline" className="overflow-hidden border-y border-dark/5 bg-surface py-24">
            <div className="container mx-auto px-6">
                <SectionHeading
                    centered
                    title="Hành Trình 15 Năm Lãnh Đạo"
                    subtitle="Từng bước chuẩn bị cho sự bùng nổ của Cách mạng Tháng Tám"
                />

                <LayoutGroup id="timeline-mode">
                    <AnimatePresence mode="wait" initial={false}>
                        {activeItem ? (
                            <motion.div
                                key="timeline-horizontal"
                                ref={detailRef}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -18 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                onWheel={handleDetailWheel}
                                className="relative mt-16 ml-[calc(50%-50vw)] w-screen py-10"
                            >
                                <div className="w-full px-6 md:px-10">
                                    <div className="p-0">
                                        <div className="relative pb-6 pt-2">
                                            <motion.div
                                                layoutId="timeline-axis"
                                                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                                                className="pointer-events-none absolute left-0 right-0 top-7 h-px bg-primary/25"
                                                aria-hidden="true"
                                            />
                                            <div className="relative grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
                                    {timelineItems.map((item, idx) => {
                                        const isActive = idx === activeIndex

                                        return (
                                            <button
                                                key={item.period}
                                                type="button"
                                                onClick={() => openDetail(idx)}
                                                className="flex flex-col items-center"
                                                aria-label={`Chọn mốc ${item.period}`}
                                            >
                                                <span
                                                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold transition-all md:h-9 md:w-9 md:text-xs ${
                                                        isActive
                                                            ? 'scale-110 bg-primary text-white ring-4 ring-primary/25'
                                                            : 'bg-gray-300 text-gray-600 ring-2 ring-primary/10'
                                                    }`}
                                                >
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                                <span className={`mt-2 text-[10px] font-bold uppercase md:text-xs ${isActive ? 'text-primary' : 'text-gray-500'}`}>
                                                    {item.period}
                                                </span>
                                            </button>
                                        )
                                    })}
                                            </div>
                                        </div>

                                        <AnimatePresence mode="wait" initial={false} custom={slideDirection}>
                                            <motion.article
                                                key={activeItem.period}
                                                custom={slideDirection}
                                                initial={{ opacity: 0, x: slideDirection > 0 ? 90 : -90 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: slideDirection > 0 ? -90 : 90 }}
                                                transition={{ duration: 0.42, ease: 'easeOut' }}
                                                className="mt-8 space-y-8"
                                            >
                                                <div>
                                                    <div className="mb-4 flex items-center justify-between">
                                                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Tư liệu hình ảnh của mốc này</p>
                                                    </div>
                                                    <div className="grid gap-4 md:grid-cols-3">
                                                        {activeItem.gallery.map((image, imageIndex) => (
                                                            <div key={`${activeItem.period}-${imageIndex}`} className="group relative overflow-hidden rounded-eight border border-dark/10 shadow-md">
                                                                <img
                                                                    src={image}
                                                                    alt={`${activeItem.imageAlt} ${imageIndex + 1}`}
                                                                    className="h-52 w-full object-cover grayscale transition duration-500 group-hover:scale-105 md:h-64"
                                                                />
                                                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10">
                                                                    <p className="text-[11px] font-semibold uppercase tracking-wider text-white">
                                                                        {imageIndex === 0 ? activeItem.title : `Tư liệu ${activeItem.period} - ${imageIndex + 1}`}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-eight border border-dark/10 bg-white p-6 md:p-10">
                                                    <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-primary/6" aria-hidden="true" />
                                                    <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-primary">Giai đoạn {activeItem.period}</p>
                                                    <h3 className="relative mt-3 max-w-4xl font-serif text-4xl font-black leading-[1.08] text-dark md:text-6xl">
                                                        {activeItem.title}
                                                    </h3>
                                                    <div className="relative mt-8 space-y-6 text-lg leading-relaxed text-gray-700 md:text-2xl">
                                                        {activeItem.fullDescription.map((paragraph, paragraphIndex) => (
                                                            <p key={`${activeItem.period}-${paragraphIndex}`}>{paragraph}</p>
                                                        ))}
                                                    </div>
                                                    <div className="relative mt-8 border-t border-primary/15 pt-5">
                                                        <p className="text-base italic leading-relaxed text-gray-500">
                                                            Cuộn để chuyển mốc tiếp theo và tiếp tục khám phá diễn tiến lịch sử theo từng giai đoạn.
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.article>
                                        </AnimatePresence>

                                        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-dark/10 pt-6">
                                            <p className="text-sm font-medium text-gray-600">Cuộn chuột trong khung này để chuyển sang mốc trước hoặc mốc kế tiếp.</p>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => changeActivePeriod(-1)}
                                                    disabled={activeIndex === 0}
                                                    className="rounded-eight border border-dark/15 px-4 py-2 text-sm font-semibold text-dark transition disabled:cursor-not-allowed disabled:opacity-40 hover:border-primary hover:text-primary"
                                                >
                                                    Mốc trước
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => changeActivePeriod(1)}
                                                    disabled={activeIndex === timelineItems.length - 1}
                                                    className="rounded-eight bg-primary px-4 py-2 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-red-700"
                                                >
                                                    Mốc tiếp
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-5 text-center">
                                            <button
                                                type="button"
                                                onClick={() => setActiveIndex(null)}
                                                className="text-sm font-semibold uppercase tracking-wider text-primary transition hover:text-red-700"
                                            >
                                                Quay lại timeline dọc
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="timeline-overview"
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -18 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                className="relative mt-20"
                            >
                                <motion.div
                                    layoutId="timeline-axis"
                                    transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                                    aria-hidden="true"
                                    className="pointer-events-none absolute bottom-0 left-5 top-0 z-0 w-px bg-primary/30 md:left-1/2 md:-translate-x-1/2"
                                />
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
                                                        className="h-80 w-full rounded-eight border border-dark/5 object-cover shadow-md grayscale transition-transform duration-500 hover:scale-105 md:h-[32rem]"
                                                    />
                                                ) : (
                                                    <div
                                                        className={`rounded-eight bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${
                                                            reverse ? 'border-r-4 border-primary' : 'border-l-4 border-primary'
                                                        }`}
                                                    >
                                                        <span className="mb-2 block text-xl font-bold text-primary">{item.period}</span>
                                                        <h3 className="mb-4 text-2xl font-bold text-dark">{item.title}</h3>
                                                        <p className="leading-relaxed text-gray-600">{item.description}</p>
                                                        <button
                                                            type="button"
                                                            onClick={() => openDetail(idx)}
                                                            className="mt-6 inline-flex rounded-eight border border-primary px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white"
                                                        >
                                                            Xem chi tiết
                                                        </button>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="order-1 flex justify-center md:order-2 md:w-1/12">
                                                <button
                                                    type="button"
                                                    onClick={() => openDetail(idx)}
                                                    className="h-6 w-6 rounded-full border-4 border-surface bg-primary ring-4 ring-primary/10 transition-all hover:scale-110 hover:ring-primary/40"
                                                    aria-label={`Xem chi tiết giai đoạn ${item.period}`}
                                                />
                                            </div>

                                            <div className={`md:w-5/12 ${reverse ? 'order-2 md:order-3 mt-8 md:mt-0' : 'order-3'}`}>
                                                {reverse ? (
                                                    <div
                                                        className={`rounded-eight bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${
                                                            reverse ? 'border-r-4 border-primary' : 'border-l-4 border-primary'
                                                        }`}
                                                    >
                                                        <span className="mb-2 block text-xl font-bold text-primary">{item.period}</span>
                                                        <h3 className="mb-4 text-2xl font-bold text-dark">{item.title}</h3>
                                                        <p className="leading-relaxed text-gray-600">{item.description}</p>
                                                        <button
                                                            type="button"
                                                            onClick={() => openDetail(idx)}
                                                            className="mt-6 inline-flex rounded-eight border border-primary px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white"
                                                        >
                                                            Xem chi tiết
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <img
                                                        src={item.image}
                                                        alt={item.imageAlt}
                                                        className="h-80 w-full rounded-eight border border-dark/5 object-cover shadow-md grayscale transition-transform duration-500 hover:scale-105 md:h-[32rem]"
                                                    />
                                                )}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </LayoutGroup>
            </div>
        </section>
    )
}