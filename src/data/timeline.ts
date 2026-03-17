export type TimelineItem = {
    period: string
    title: string
    description: string
    image: string
    imageAlt: string
}

import image1 from '../assets/image.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

export const timelineItems: TimelineItem[] = [
    {
        period: '1930-1931',
        title: 'Ra đời và Cao trào Xô viết Nghệ - Tĩnh',
        description:
            'Tháng 2/1930, Đảng được thành lập tại Hương Cảng. Ngay sau đó lãnh đạo phong trào cách mạng 1930-1931 bùng nổ mạnh mẽ, đỉnh cao là Xô viết Nghệ - Tĩnh, khẳng định năng lực lãnh đạo và liên minh công - nông.',
        image: image1,
        imageAlt: 'Xô viết Nghệ Tĩnh',
    },
    {
        period: '1932-1935',
        title: 'Khôi phục tổ chức Đảng',
        description:
            'Dưới chính sách khủng bố trắng, Đảng viên vẫn kiên cường đấu tranh trong các nhà tù. Đến năm 1935, Đại hội Đảng lần thứ I tại Ma Cao đánh dấu sự phục hồi hoàn toàn hệ thống tổ chức Đảng.',
        image: image2,
        imageAlt: 'Khôi phục tổ chức',
    },
    {
        period: '1936-1939',
        title: 'Cao trào Dân chủ',
        description:
            'Đảng điều chỉnh chiến lược, thành lập Mặt trận Dân chủ Đông Dương, tập trung đòi tự do, dân chủ, cơm áo, hòa bình. Sử dụng nhiều hình thức đấu tranh linh hoạt như báo chí, nghị trường.',
        image: image3,
        imageAlt: 'Phong trào dân chủ',
    },
    {
        period: '1939-1945',
        title: 'Chuyển hướng và Tổng khởi nghĩa',
        description:
            'Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu. Thành lập Mặt trận Việt Minh, xây dựng lực lượng vũ trang và tiến tới Tổng khởi nghĩa tháng 8/1945.',
        image: image4,
        imageAlt: 'Chuẩn bị tổng khởi nghĩa',
    },
]