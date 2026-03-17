import image1 from '../assets/image.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import conclusionImage from '../assets/conclusion.png'
import contextImage from '../assets/context.jpg'
import heroImage from '../assets/hero.png'

export type TimelineItem = {
    period: string
    title: string
    description: string
    fullDescription: string[]
    image: string
    gallery: string[]
    imageAlt: string
}

export const timelineItems: TimelineItem[] = [
    {
        period: '1930-1931',
        title: 'Ra đời và Cao trào Xô viết Nghệ - Tĩnh',
        description:
            'Tháng 2/1930, Đảng được thành lập tại Hương Cảng. Ngay sau đó lãnh đạo phong trào cách mạng 1930-1931 bùng nổ mạnh mẽ, đỉnh cao là Xô viết Nghệ - Tĩnh, khẳng định năng lực lãnh đạo và liên minh công - nông.',
        fullDescription: [
            'Sự kiện thành lập Đảng Cộng sản Việt Nam đầu năm 1930 đã thống nhất các tổ chức cộng sản, mở ra bước ngoặt lịch sử cho phong trào giải phóng dân tộc. Cương lĩnh chính trị đầu tiên xác định rõ nhiệm vụ giải phóng dân tộc gắn với quyền lợi của công nhân và nông dân.',
            'Trong cao trào 1930-1931, đặc biệt tại Nghệ An và Hà Tĩnh, quần chúng đã lập nên nhiều hình thức chính quyền cách mạng sơ khai. Các cuộc đấu tranh liên tục, từ bãi công đến biểu tình chính trị, cho thấy năng lực tổ chức và lãnh đạo thực tiễn của Đảng ngay từ buổi đầu.',
            'Dù bị đàn áp khốc liệt, phong trào đã để lại bài học chiến lược về xây dựng liên minh công nông, vai trò của tổ chức cơ sở và phương pháp vận động quần chúng. Đây là nền tảng quan trọng cho các giai đoạn phát triển tiếp theo của cách mạng Việt Nam.',
        ],
        image: image1,
        gallery: [image1, contextImage, heroImage],
        imageAlt: 'Xô viết Nghệ Tĩnh',
    },
    {
        period: '1932-1935',
        title: 'Khôi phục tổ chức Đảng',
        description:
            'Dưới chính sách khủng bố trắng, Đảng viên vẫn kiên cường đấu tranh trong các nhà tù. Đến năm 1935, Đại hội Đảng lần thứ I tại Ma Cao đánh dấu sự phục hồi hoàn toàn hệ thống tổ chức Đảng.',
        fullDescription: [
            'Sau tổn thất nặng nề từ phong trào 1930-1931, công tác khôi phục tổ chức được tiến hành trong điều kiện cực kỳ khó khăn. Nhiều cơ sở bí mật được nối lại, đường dây liên lạc giữa các xứ ủy dần được củng cố, bảo đảm sự chỉ đạo thống nhất từ trung ương đến địa phương.',
            'Các chiến sĩ cách mạng trong nhà tù đế quốc biến nhà tù thành trường học cách mạng, giữ vững khí tiết và truyền bá lý tưởng cho lớp đảng viên trẻ. Đây là nguồn nhân lực và tinh thần quan trọng cho quá trình tái thiết phong trào.',
            'Đại hội Đảng lần thứ I năm 1935 tại Ma Cao đánh dấu bước phục hồi toàn diện cả về tổ chức, đường lối và phương thức hoạt động. Từ đây, Đảng bước vào giai đoạn mới với nền tảng chính trị vững hơn và tầm nhìn chiến lược rõ ràng hơn.',
        ],
        image: image2,
        gallery: [image2, conclusionImage, image1],
        imageAlt: 'Khôi phục tổ chức',
    },
    {
        period: '1936-1939',
        title: 'Cao trào Dân chủ',
        description:
            'Đảng điều chỉnh chiến lược, thành lập Mặt trận Dân chủ Đông Dương, tập trung đòi tự do, dân chủ, cơm áo, hòa bình. Sử dụng nhiều hình thức đấu tranh linh hoạt như báo chí, nghị trường.',
        fullDescription: [
            'Trong bối cảnh quốc tế thay đổi, Đảng kịp thời điều chỉnh sách lược, đề ra nhiệm vụ trước mắt phù hợp là chống phản động thuộc địa, chống chiến tranh, đòi dân sinh dân chủ. Đây là bước phát triển quan trọng về tư duy chiến lược và nghệ thuật lãnh đạo.',
            'Mặt trận Dân chủ Đông Dương được hình thành nhằm tập hợp lực lượng rộng rãi trong xã hội, thu hút trí thức, tiểu tư sản, công nhân, nông dân và nhiều tầng lớp yêu nước. Hoạt động công khai, nửa công khai như báo chí, diễn thuyết, vận động nghị trường được khai thác hiệu quả.',
            'Giai đoạn này đã rèn luyện đội ngũ cán bộ, mở rộng ảnh hưởng chính trị của Đảng và chuẩn bị lực lượng quần chúng to lớn cho cuộc đấu tranh giành chính quyền về sau.',
        ],
        image: image3,
        gallery: [image3, image2, contextImage],
        imageAlt: 'Phong trào dân chủ',
    },
    {
        period: '1939-1945',
        title: 'Chuyển hướng và Tổng khởi nghĩa',
        description:
            'Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu. Thành lập Mặt trận Việt Minh, xây dựng lực lượng vũ trang và tiến tới Tổng khởi nghĩa tháng 8/1945.',
        fullDescription: [
            'Khi Chiến tranh thế giới thứ hai bùng nổ, Đảng nhanh chóng chuyển hướng chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu. Hội nghị Trung ương 8 năm 1941 do lãnh tụ Nguyễn Ái Quốc chủ trì đã hoàn thiện đường lối cách mạng giải phóng dân tộc phù hợp với tình hình mới.',
            'Mặt trận Việt Minh ra đời, phong trào cứu quốc phát triển mạnh ở cả thành thị và nông thôn. Các đội tự vệ, du kích và lực lượng vũ trang cách mạng được xây dựng, tạo thế và lực cho cuộc nổi dậy toàn quốc.',
            'Khi thời cơ lịch sử xuất hiện vào tháng 8/1945, Đảng đã lãnh đạo toàn dân tổng khởi nghĩa giành chính quyền thắng lợi trong cả nước. Đây là kết quả của cả một quá trình chuẩn bị bền bỉ, linh hoạt và quyết đoán về chính trị, tổ chức và lực lượng.',
        ],
        image: image4,
        gallery: [image4, heroImage, conclusionImage],
        imageAlt: 'Chuẩn bị tổng khởi nghĩa',
    },
]