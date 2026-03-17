import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Trắc nghiệm', href: '/quiz' },
    { label: 'Bảng xếp hạng', href: '/ranking' },
    { label: 'Tham khảo', href: '/references' },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    // Function to handle the logo click -> go to home
    const isHome = location.pathname === '/'

    return (
        <header className="sticky-header fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-cream/90 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary">
                        <span className="font-serif text-xl font-bold text-white">Đ</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif text-lg font-bold tracking-tight md:text-xl">Lịch Sử Đảng</span>
                        <span className="text-[10px] font-medium uppercase tracking-widest text-primary/80">1930 - 1945</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary ${
                                location.pathname === item.href ? 'text-primary' : 'text-dark/80'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-4 md:flex">
                    {isHome && (
                        <a
                            href="#context"
                            className="rounded-eight bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-glow transition-all hover:bg-red-700"
                        >
                            Khám Phá
                        </a>
                    )}
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    type="button"
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-0.5 w-6 transition-all duration-300 ${
                            isMenuOpen ? 'translate-y-2 rotate-45 bg-primary' : 'bg-dark'
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 transition-all duration-300 ${
                            isMenuOpen ? 'opacity-0' : 'bg-dark'
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 transition-all duration-300 ${
                            isMenuOpen ? '-translate-y-2 -rotate-45 bg-primary' : 'bg-dark'
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-cream border-b border-primary/10 shadow-lg md:hidden"
                    >
                        <nav className="flex flex-col px-6 py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`py-4 text-base font-semibold uppercase tracking-wider border-b border-dark/5 transition-colors hover:text-primary ${
                                        location.pathname === item.href ? 'text-primary' : 'text-dark/80'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            {isHome && (
                                <a
                                    href="#context"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="mt-6 block rounded-eight bg-primary px-5 py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-red-700"
                                >
                                    Khám Phá Hành Trình
                                </a>
                            )}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}