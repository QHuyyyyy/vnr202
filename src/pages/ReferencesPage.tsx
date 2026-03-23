import { SectionHeading } from '../components/sections/SectionHeading'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export function ReferencesPage() {
  const notebookLmUrl = 'https://media.licdn.com/dms/image/v2/D4E22AQFE-2b_cINqaA/feedshare-shrink_800/B4EZhm_JHyHIAk-/0/1754074485601?e=2147483647&v=beta&t=8phLRCRsF_dsD4vDtvKPsahYm8ii1bHrCkwVmiuzTBI'
  const gptUrl = 'https://images.seeklogo.com/logo-png/46/1/chatgpt-logo-png_seeklogo-465219.png'
  const stitchUrl = 'https://learnai.tw/wp-content/uploads/2025/06/Google-Stitch-Logo.png'

  return (
    <>
      <Header />
      <div className="min-h-screen bg-surface px-4 pb-8 pt-24 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <SectionHeading
            eyebrow="Nguồn tham khảo"
            title="Tham khảo & Công cụ hỗ trợ"
            description="Tổng hợp tài liệu, video và các công cụ AI đã hỗ trợ trong quá trình xây dựng nội dung và giao diện."
          />

          <section className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-primary/20 bg-white/80 p-5 shadow-lg shadow-primary/10">
              <h3 className="text-lg font-semibold text-dark">Tài liệu tham khảo</h3>
              <ul className="mt-4 space-y-4 text-sm text-dark/70 overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: '380px' }}>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">
                  <div className="flex min-w-0 flex-col">

                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://noichinh.vn/nghien-cuu-trao-doi/201309/xay-dung-va-bao-ve-chinh-quyen-sau-cach-mang-thang-tam-292407/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://noichinh.vn/nghien-cuu-trao-doi/201309/xay-dung-va-bao-ve-chinh-quyen-sau-cach-mang-thang-tam-292407/
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://www.hcmcpv.org.vn/tin-tuc/hai-cuoc-khang-phap-cua-dan-toc-viet-nam-1491883502"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.hcmcpv.org.vn/tin-tuc/hai-cuoc-khang-phap-cua-dan-toc-viet-nam-1491883502
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://nhandan.vn/giai-cap-nong-dan-gop-phan-lam-nen-chien-thang-lich-su-post533564.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://nhandan.vn/giai-cap-nong-dan-gop-phan-lam-nen-chien-thang-lich-su-post533564.html
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href=" https://sjc.ussh.vnu.edu.vn/vi/nghien-cuu-khoa-hoc/chuong-trinh-de-tai-du-an/mon-su-viet-nam-giai-doan-1954-1975-15.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://sjc.ussh.vnu.edu.vn/vi/nghien-cuu-khoa-hoc/chuong-trinh-de-tai-du-an/mon-su-viet-nam-giai-doan-1954-1975-15.html
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://nhandan.vn/special/visaolavituyen17/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://nhandan.vn/special/visaolavituyen17/index.html
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://sjc.ussh.vnu.edu.vn/vi/nghien-cuu-khoa-hoc/chuong-trinh-de-tai-du-an/mon-su-viet-nam-giai-doan-1954-1975-15.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://sjc.ussh.vnu.edu.vn/vi/nghien-cuu-khoa-hoc/chuong-trinh-de-tai-du-an/mon-su-viet-nam-giai-doan-1954-1975-15.html
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/ngay-3-2-1930-buoc-ngoat-lich-su-cua-cach-mang-viet-nam-684714"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/ngay-3-2-1930-buoc-ngoat-lich-su-cua-cach-mang-viet-nam-684714
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://baochinhphu.vn/nguyen-ai-quoc-va-hoi-nghi-trung-uong-thang-10-1930-10280772.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://baochinhphu.vn/nguyen-ai-quoc-va-hoi-nghi-trung-uong-thang-10-1930-10280772.html
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://www.tapchicongsan.org.vn/web/guest/chinh-tri-xay-dung-dang/-/2018/825332/hoat-dong-cua-dong-chi-phan-dang-luu-trong-qua-trinh-xay-dung%2C-phat-trien-to-chuc-dang-va-phong-trao-cach-mang-o-trung-ky.aspx"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.tapchicongsan.org.vn/web/guest/chinh-tri-xay-dung-dang/-/2018/825332/hoat-dong-cua-dong-chi-phan-dang-luu-trong-qua-trinh-xay-dung%2C-phat-trien-to-chuc-dang-va-phong-trao-cach-mang-o-trung-ky.aspx
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://tapchilichsudang.vn/chu-truong-cua-dang-cong-san-dong-duong-trong-xay-dung-luc-luong-cach-mang-giai-doan-1936-1939.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://tapchilichsudang.vn/chu-truong-cua-dang-cong-san-dong-duong-trong-xay-dung-luc-luong-cach-mang-giai-doan-1936-1939.html
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://daibieunhandan.vn/y-chi-ban-linh-va-khat-vong-doc-lap-dan-toc-bai-1-chu-truong-chuyen-huong-chi-dao-chien-luoc-10383903.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://daibieunhandan.vn/y-chi-ban-linh-va-khat-vong-doc-lap-dan-toc-bai-1-chu-truong-chuyen-huong-chi-dao-chien-luoc-10383903.html
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://youtu.be/TnQYFiXX1Zg?si=nOP7ACDO_ASOBgLZ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://youtu.be/TnQYFiXX1Zg?si=nOP7ACDO_ASOBgLZ
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://dinhdoclap.gov.vn/#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://dinhdoclap.gov.vn/#
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://vtv.vn/chinh-tri/xe-tang-tien-vao-dinh-doc-lap-thoi-khac-hoa-binh-sau-21-nam-dat-nuoc-chia-cat-20250426221314741.htm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://vtv.vn/chinh-tri/xe-tang-tien-vao-dinh-doc-lap-thoi-khac-hoa-binh-sau-21-nam-dat-nuoc-chia-cat-20250426221314741.htm
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://youtu.be/nYHJ0ahv96s"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://youtu.be/nYHJ0ahv96s
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-surface/60 p-4">

                  <div className="flex min-w-0 flex-col">
                    <p>Nguồn Nhạc</p>
                    <a
                      className="mt-1 break-all text-primary underline-offset-4 hover:underline decoration-primary/40"
                      href="https://www.youtube.com/watch?v=pR06brbzXoA&list=RDpR06brbzXoA&start_radio=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.youtube.com/watch?v=pR06brbzXoA&list=RDpR06brbzXoA&start_radio=1
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-white/80 p-5 shadow-lg shadow-primary/10">
              <h3 className="text-lg font-semibold text-dark">Công cụ AI hỗ trợ</h3>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl border border-primary/15 bg-surface/60 p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-dark">NotebookLM</p>
                      <p className="mt-1 text-sm text-dark/70">
                        Tra cứu nội dung học phần Lịch Sử Đảng và tổng hợp ghi chú.
                      </p>
                    </div>
                    <div className="flex items-center justify-center rounded-xl border border-dashed border-primary/50 bg-white/70 p-2 text-xs text-dark/40 shadow-sm shadow-primary/10">
                      {notebookLmUrl ? (
                        <img
                          src={notebookLmUrl}
                          alt="NotebookLM"
                          className="h-auto w-auto max-h-20 max-w-24 object-contain"
                        />
                      ) : (
                        'Khung ảnh'
                      )}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/15 bg-surface/60 p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-dark">GPT-5.2-Codex</p>
                      <p className="mt-1 text-sm text-dark/70">
                        Hỗ trợ tạo nội dung và cấu trúc giao diện cho trang web.
                      </p>
                    </div>
                    <div className="flex items-center justify-center rounded-xl border border-dashed border-primary/50 bg-white/70 p-2 text-xs text-dark/40 shadow-sm shadow-primary/10">
                      {gptUrl ? (
                        <img
                          src={gptUrl}
                          alt="GPT-5.2-Codex"
                          className="h-auto w-auto max-h-20 max-w-24 object-contain"
                        />
                      ) : (
                        'Khung ảnh'
                      )}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/15 bg-surface/60 p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-dark">Stitch with Google</p>
                      <p className="mt-1 text-sm text-dark/70">
                        Phác thảo giao diện, bố cục và gợi ý phong cách thẩm mỹ.
                      </p>
                    </div>
                    <div className="flex items-center justify-center rounded-xl border border-dashed border-primary/50 bg-white/70 p-2 text-xs text-dark/40 shadow-sm shadow-primary/10">
                      {stitchUrl ? (
                        <img
                          src={stitchUrl}
                          alt="Stitch with Google"
                          className="h-auto w-auto max-h-20 max-w-24 object-contain"
                        />
                      ) : (
                        'Khung ảnh'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  )
}
