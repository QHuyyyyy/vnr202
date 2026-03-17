export type RoleItem = {
    title: string
    description: string
    iconPath: string
}

export const roleItems: RoleItem[] = [
    {
        title: 'Hoạch định chiến lược',
        description: 'Đề ra đường lối đúng đắn, đặt giải phóng dân tộc là nhiệm vụ hàng đầu từ năm 1939.',
        iconPath:
            'M9 20l-5.447-2.724A2 2 0 013 15.487V6a2 2 0 011.106-1.789l5.447-2.724a2 2 0 011.894 0l5.447 2.724A2 2 0 0118 6v9.487a2 2 0 01-1.106 1.789L11.447 20a2 2 0 01-1.894 0z',
    },
    {
        title: 'Xây dựng lực lượng',
        description: 'Tổ chức quần chúng rộng khắp, xây dựng lực lượng vũ trang và căn cứ địa cách mạng.',
        iconPath:
            'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    },
    {
        title: 'Đoàn kết dân tộc',
        description: 'Mở rộng khối đoàn kết dân tộc thông qua Mặt trận Việt Minh, huy động sức mạnh toàn dân.',
        iconPath:
            'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    },
    {
        title: 'Nắm bắt thời cơ',
        description: 'Phân tích đúng tình hình, phát động Tổng khởi nghĩa kịp thời khi thời cơ ngàn năm có một xuất hiện.',
        iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
]