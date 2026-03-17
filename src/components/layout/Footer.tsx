const footerNav = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Vai trò', href: '#roles' },
    { label: 'Ý nghĩa', href: '#conclusion' },
]

export function Footer() {
    return (
        <footer className="border-t border-dark/5 bg-surface py-12">
            <div className="container mx-auto px-6 text-center">
                <p className="mb-4 text-sm tracking-wider text-gray-500">Tư liệu Lịch sử Cách mạng Việt Nam (1930 - 1945)</p>

                <div className="flex flex-wrap justify-center gap-6 text-gray-600">
                    {footerNav.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-semibold uppercase transition-colors hover:text-primary"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <p className="mt-8 text-xs text-gray-400">© 2026 Website Lịch Sử. Biên tập dựa trên tài liệu lịch sử chính thống.</p>
            </div>
        </footer>
    )
}