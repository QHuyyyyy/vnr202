import image1 from '../assets/image.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image12 from '../assets/image12.png'
import image13 from '../assets/image13.png'
import image22 from '../assets/image22.png'
import image23 from '../assets/image23.png'
import image32 from '../assets/image32.png'
import image33 from '../assets/image33.png'
import image42 from '../assets/image42.png'
import image43 from '../assets/image43.png'
import image5 from '../assets/image5.png'
import image52 from '../assets/image52.png'
import image53 from '../assets/image53.png'
import image6 from '../assets/image6.png'
import image62 from '../assets/image62.png'
import image63 from '../assets/image63.png'
import image7 from '../assets/image7.png'
import image72 from '../assets/image72.png'
import image73 from '../assets/image73.png'
import image8 from '../assets/image8.png'
import image82 from '../assets/image82.png'
import image83 from '../assets/image83.png'
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
        title: 'Thành lập Đảng và Cao trào Xô viết Nghệ - Tĩnh',
        description:
            'Tháng 2/1930, Đảng được thành lập tại Hương Cảng. Ngay sau đó lãnh đạo phong trào cách mạng 1930-1931 bùng nổ mạnh mẽ, đỉnh cao là Xô viết Nghệ - Tĩnh, khẳng định năng lực lãnh đạo và liên minh công - nông.',
        fullDescription: [
            'Tháng 2 năm 1930, tại Hương Cảng (Trung Quốc), dưới sự chủ trì của Nguyễn Ái Quốc, Hội nghị hợp nhất các tổ chức cộng sản đã quyết định thành lập Đảng Cộng sản Việt Nam. Hội nghị thông qua các văn kiện quan trọng như Chánh cương vắn tắt và Sách lược vắn tắt, xác định mục tiêu cơ bản của cách mạng Việt Nam là đánh đổ đế quốc và phong kiến, thực hiện độc lập dân tộc.',
            'Ngay sau khi ra đời, Đảng đã lãnh đạo phong trào cách mạng 1930–1931 bùng nổ mạnh mẽ trên phạm vi cả nước. Đỉnh cao của phong trào là Xô viết Nghệ - Tĩnh, nơi công nhân và nông dân đã phối hợp đấu tranh quyết liệt chống thực dân Pháp và tay sai phong kiến.',
            `Phong trào Xô viết Nghệ - Tĩnh có ý nghĩa đặc biệt quan trọng:
Khẳng định năng lực lãnh đạo và quyền lãnh đạo của Đảng đối với phong trào cách mạng.
Lần đầu tiên hình thành liên minh công – nông trong đấu tranh cách mạng.
Xuất hiện hình thức chính quyền cách mạng sơ khai của nhân dân lao động.
Để lại nhiều bài học kinh nghiệm về tổ chức quần chúng và đấu tranh cách mạng cho các giai đoạn sau.
                Tháng 10 năm 1930, Hội nghị Trung ương lần thứ nhất thông qua Luận cương chính trị do Trần Phú dự thảo, đổi tên Đảng thành Đảng Cộng sản Đông Dương và tiếp tục xác định nhiệm vụ đánh đổ đế quốc và phong kiến.
`,
        ],
        image: image1,
        gallery: [image1, image12, image13],
        imageAlt: 'Xô viết Nghệ Tĩnh',
    },
    {
        period: '1932-1935',
        title: ' Đấu tranh khôi phục tổ chức và phong trào cách mạng',
        description:
            'Dưới chính sách khủng bố trắng, Đảng viên vẫn kiên cường đấu tranh trong các nhà tù. Đến năm 1935, Đại hội Đảng lần thứ I tại Ma Cao đánh dấu sự phục hồi hoàn toàn hệ thống tổ chức Đảng.',
        fullDescription: [
            'Sau cao trào 1930–1931, thực dân Pháp tiến hành chính sách “khủng bố trắng” nhằm đàn áp phong trào cách mạng. Nhiều cán bộ, đảng viên bị bắt, hệ thống tổ chức của Đảng bị tổn thất nghiêm trọng.',
            'Tuy nhiên, các đảng viên cộng sản vẫn kiên cường đấu tranh, đặc biệt trong các nhà tù như Hỏa Lò, Côn Đảo, Khám Lớn, biến nhà tù thành trường học cách mạng, tiếp tục truyền bá tư tưởng cách mạng và củng cố tổ chức.',
            'Năm 1932, Đảng đề ra Chương trình hành động nhằm khôi phục hệ thống tổ chức và gây dựng lại phong trào cách mạng. Đến tháng 3 năm 1935, Đại hội đại biểu lần thứ I của Đảng tại Ma Cao được tổ chức, đánh dấu sự phục hồi của hệ thống tổ chức Đảng từ Trung ương đến địa phương.',
        ],
        image: image2,
        gallery: [image2, image23, image22],
        imageAlt: 'Khôi phục tổ chức',
    },
    {
        period: '1936-1939',
        title: ' Cao trào đấu tranh dân chủ và xây dựng mặt trận dân tộc',
        description:
            'Đảng điều chỉnh chiến lược, thành lập Mặt trận Dân chủ Đông Dương, tập trung đòi tự do, dân chủ, cơm áo, hòa bình. Sử dụng nhiều hình thức đấu tranh linh hoạt như báo chí, nghị trường.',
        fullDescription: [
            'Trước tình hình chủ nghĩa phát xít trỗi dậy trên thế giới và nguy cơ chiến tranh, Đảng đã kịp thời điều chỉnh chiến lược cách mạng. Nhiệm vụ trước mắt được xác định là chống phát xít, chống chiến tranh, chống phản động thuộc địa, đòi tự do, dân chủ, cơm áo và hòa bình.',
            'Trong giai đoạn này, Đảng chủ trương sử dụng nhiều hình thức đấu tranh linh hoạt như công khai, nửa công khai, hợp pháp và nửa hợp pháp, kết hợp với hoạt động bí mật.',
            'Đảng chủ trương thành lập Mặt trận nhân dân phản đế rộng rãi, sau đó phát triển thành Mặt trận Dân chủ Đông Dương, nhằm tập hợp mọi lực lượng yêu nước không phân biệt giai cấp, tôn giáo hay xu hướng chính trị.',
            'Các hoạt động đấu tranh tiêu biểu bao gồm: Tổ chức các cuộc mít tinh, biểu tình, hội họp, Thu thập “dân nguyện”, Hoạt động báo chí, tuyên truyền, Tham gia đấu tranh nghị trường thông qua các cuộc tranh cử vào Viện dân biểu.',
            'Qua đó, Đảng đã tập hợp được một lực lượng chính trị đông đảo từ nhiều tầng lớp xã hội, khẳng định vai trò lãnh đạo đối với phong trào dân tộc.'
        ],
        image: image3,
        gallery: [image3, image32, image33],
        imageAlt: 'Phong trào dân chủ',
    },
    {
        period: '1939-1945',
        title: 'Chuyển hướng và Tổng khởi nghĩa',
        description:
            'Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu. Thành lập Mặt trận Việt Minh, xây dựng lực lượng vũ trang và tiến tới Tổng khởi nghĩa tháng 8/1945.',
        fullDescription: [
            'Khi Chiến tranh thế giới thứ hai bùng nổ, tình hình quốc tế và trong nước có nhiều biến động. Đảng đã kịp thời chuyển hướng chiến lược cách mạng, xác định nhiệm vụ giải phóng dân tộc là nhiệm vụ hàng đầu.',
            'Các Hội nghị Trung ương 6, 7 và đặc biệt là Hội nghị Trung ương 8 (5/1941) do Nguyễn Ái Quốc chủ trì đã hoàn chỉnh đường lối cách mạng giải phóng dân tộc và quyết định thành lập Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh).Đảng đã tích cực chuẩn bị các điều kiện cho cuộc khởi nghĩa:',
            'Xây dựng lực lượng chính trị: Phát triển mạnh các tổ chức Cứu quốc, tập hợp đông đảo quần chúng tham gia phong trào cách mạng.',
            'Xây dựng lực lượng vũ trang: Thành lập Cứu quốc quân; thành lập Đội Việt Nam Tuyên truyền Giải phóng quân (22/12/1944) - tiền thân của Quân đội nhân dân Việt Nam.',
            'Xây dựng căn cứ địa cách mạng: Đảng xây dựng các căn cứ cách mạng như Bắc Sơn - Võ Nhai, Cao Bằng, tiến tới thành lập Khu giải phóng Việt Bắc (1945).',
            'Tập dượt khởi nghĩa: Sau sự kiện Nhật đảo chính Pháp (3/1945), Đảng ra chỉ thị "Nhật - Pháp bắn nhau và hành động của chúng ta", phát động cao trào kháng Nhật cứu nước và tiến hành khởi nghĩa từng phần ở nhiều địa phương.',
            'Khi thời cơ cách mạng xuất hiện vào tháng 8/1945, Đảng đã nhanh chóng phát động Tổng khởi nghĩa trên toàn quốc, giành chính quyền về tay nhân dân.Ngày 2/9/1945, Chủ tịch Hồ Chí Minh tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa, mở ra kỷ nguyên độc lập cho dân tộc',
        ],
        image: image4,
        gallery: [image4, image42, image43],
        imageAlt: 'Chuẩn bị tổng khởi nghĩa',
    },
    {
        period: "1945-1946",
        title: "Xây dựng chính quyền cách mạng và bảo vệ nền độc lập",
        description: "Sau Cách mạng Tháng Tám, chính quyền non trẻ đối mặt với thù trong giặc ngoài, tập trung củng cố chính quyền và bảo vệ nền độc lập.",
        fullDescription: [
            "Sau thắng lợi của Cách mạng Tháng Tám, nước Việt Nam Dân chủ Cộng hòa ra đời trong bối cảnh vô cùng khó khăn: nạn đói, nạn dốt và sự đe dọa từ thực dân Pháp cùng các lực lượng phản động.",
            "Đảng Cộng sản Đông Dương đã ban hành Chỉ thị \"Kháng chiến và kiến quốc\" (25/11/1945), xác định bốn nhiệm vụ: củng cố chính quyền, chống thực dân Pháp, bài trừ nội phản và cải thiện đời sống nhân dân.",
            "Nhiệm vụ trọng tâm là củng cố chính quyền cách mạng, đồng thời chuẩn bị kháng chiến lâu dài.",
            "Các hoạt động tiêu biểu gồm: tổ chức Tổng tuyển cử (1/1946), thành lập Chính phủ chính thức, phát động phong trào \"Hũ gạo cứu đói\", \"Tuần lễ vàng\".",
            "Ký Hiệp định Sơ bộ (6/3/1946) để hòa hoãn với Pháp nhằm tranh thủ thời gian chuẩn bị lực lượng.",
            "Kết quả: giữ vững chính quyền cách mạng, tạo tiền đề cho kháng chiến lâu dài."
        ],
        image: image5,
        gallery: [image5, image52, image53],
        imageAlt: "Xây dựng chính quyền sau Cách mạng Tháng Tám"
    },
    {
        period: "1946-1954",
        title: "Kháng chiến chống thực dân Pháp",
        description: "Toàn quốc kháng chiến chống Pháp với đường lối toàn dân, toàn diện, trường kỳ và tự lực cánh sinh.",
        fullDescription: [
            "Thực dân Pháp bội ước, tấn công nước ta, buộc toàn dân đứng lên kháng chiến từ ngày 19/12/1946.",
            "Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến, khẳng định quyết tâm bảo vệ Tổ quốc.",
            "“Bất kỳ đàn ông, đàn bà, bất kỳ người già, người trẻ, không chia tôn giáo, đảng phải, dân tộc. Hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp để cứu Tổ quốc.”",
            "Đảng xác định đường lối kháng chiến: toàn dân, toàn diện, trường kỳ và tự lực cánh sinh.",
            "Đại hội II (1951) đưa Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam.",
            "Các chiến dịch lớn: Việt Bắc Thu-Đông(1947), Biên giới (1950), Hòa Bình (1951), Tây Bắc (1952), Thượng Lào (1953).",
            "Thực hiện cải cách ruộng đất (1953) nhằm huy động sức dân cho kháng chiến.",
            "Đỉnh cao là chiến thắng Điện Biên Phủ (1954).",
            "Kết quả: ký Hiệp định Giơ-ne-vơ, kết thúc chiến tranh, tạo tiền đề cho phong trào giải phóng dân tộc trên thế giới."
        ],
        image: image6,
        gallery: [image6, image62, image63],
        imageAlt: "Kháng chiến chống Pháp"
    },
    {
        period: "1954-1965",
        title: "Xây dựng CNXH ở miền Bắc và đấu tranh ở miền Nam",
        description: "Đất nước tạm thời chia cắt, miền Bắc xây dựng CNXH, miền Nam đấu tranh chống Mỹ và chính quyền tay sai.",
        fullDescription: [
            "Sau Hiệp định Giơ-ne-vơ, đất nước chia cắt tại vĩ tuyến 17.",
            "Miền Bắc tiến hành xây dựng chủ nghĩa xã hội trong điều kiện kinh tế còn khó khăn.",
            "Miền Nam trở thành thuộc địa kiểu mới của Mỹ.",
            "Đại hội III (1960) xác định hai chiến lược cách mạng song song ở hai miền. Cách mạng XHCN ở miền Bắc và Cách mạng dân tộc dân chủ nhân dân ở miền Nam. Miền Bắc đóng vai trò quyết định nhất, miền Nam đóng vai trò quyết định trực tiếp đối với sự nghiệp giải phóng dân tộc.",
            "Miền Bắc: hoàn thành cải cách ruộng đất, khôi phục kinh tế, thực hiện kế hoạch 5 năm lần thứ nhất.",
            "Miền Nam: Nghị quyết Trung ương 15 (1959) dẫn đến phong trào Đồng khởi (1960).",
            "Thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam.",
            "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ.",
            "Kết quả: miền Bắc trở thành hậu phương vững chắc, miền Nam giữ thế tiến công."
        ],
        image: image7,
        gallery: [image7, image72, image73],
        imageAlt: "Xây dựng miền Bắc và đấu tranh miền Nam"
    },
    {
        period: "1965-1975",
        title: "Kháng chiến chống Mỹ và giải phóng miền Nam",
        description: "Cuộc kháng chiến chống Mỹ diễn ra ác liệt, kết thúc bằng thắng lợi hoàn toàn năm 1975.",
        fullDescription: [
            "Mỹ tiến hành chiến lược \"Chiến tranh cục bộ\"(1965-1968) rồi \"Việt Nam hóa chiến tranh\"(1969-1975).",
            "Đảng đề ra quyết tâm đánh thắng Mỹ, bảo vệ miền Bắc và giải phóng miền Nam.",
            "Miền Bắc vừa sản xuất vừa chiến đấu, chi viện cho miền Nam.",
            "Các sự kiện tiêu biểu: Tổng tiến công Tết Mậu Thân (1968).",
            "Chiến thắng \"Điện Biên Phủ trên không\" (1972).",
            "Ký Hiệp định Pari (1973), Mỹ rút quân.",
            "Chiến dịch Hồ Chí Minh (30/4/1975) giải phóng hoàn toàn miền Nam.",
            "Kết quả: thống nhất đất nước, mở ra kỷ nguyên độc lập và đi lên CNXH."
        ],
        image: image83,
        gallery: [image8, image82, image83],
        imageAlt: "Giải phóng miền Nam"
    }

]