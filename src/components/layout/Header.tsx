const navItems = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Lịch sử', href: '#timeline' },
    { label: 'Vai trò', href: '#roles' },
    { label: 'Ý nghĩa', href: '#conclusion' },
]

export function Header() {
    return (
        <header className="sticky-header fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-cream/80">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary">
                        <span className="font-serif text-xl font-bold text-white">Đ</span>
                    </div>
                    <span className="hidden font-serif text-lg font-bold tracking-tight sm:block">Lịch Sử Đảng</span>
                </div>

                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#context"
                    className="rounded-eight bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-glow transition-all hover:bg-red-700"
                >
                    Khám Phá
                </a>
            </div>
        </header>
    )
}