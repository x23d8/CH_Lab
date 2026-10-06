# Văn hóa từ ta · Lớp học tương tác HCM202

Lớp học 3D bằng Three.js và Vite chuyển nội dung bài thuyết trình **“Văn hóa và con người trong tư tưởng Hồ Chí Minh”** thành tám trạm khám phá. Thông điệp xuyên suốt là **“Văn hóa từ ta – Con người vì cộng đồng”**. Người chơi có thể chọn avatar, di chuyển, trò chuyện theo phòng, xem ảnh tư liệu, chơi quiz, ngồi vào ghế và cùng tham gia bài kiểm tra 15 phút.

## Chạy bản trực tuyến

1. Tạo dự án Supabase. Trong **Authentication → Providers**, bật **Anonymous Sign-Ins**.
2. Với dự án mới, chạy lần lượt các migration trong `supabase/migrations` theo thứ tự tên file.
3. Với dự án đã cài trước đó, chạy thêm [migration nội dung HCM202 mới nhất](supabase/migrations/20261006_z_hcm202_showcase_content.sql). Migration đưa bài kiểm tra về trạng thái chờ và xóa kết quả của lượt hiện tại để tránh thay câu hỏi giữa lúc đang thi.
4. Tạo `.env` từ `.env.example` và điền URL cùng **publishable key**. Không đưa `service_role` hoặc secret key vào ứng dụng trình duyệt. Các biến `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` cũng được hỗ trợ.
5. Chạy:

```bash
npm install
npm run dev
```

Khi triển khai Vercel, đặt `VITE_SUPABASE_URL` và `VITE_SUPABASE_PUBLISHABLE_KEY` trong **Project Settings → Environment Variables**. Lệnh build là `npm run build`, thư mục đầu ra là `dist`.

## Phòng học và bài kiểm tra

- Tối đa **10 người trong một phòng**, tính cả giảng viên. Người tiếp theo được xếp vào phòng mới. Mỗi phòng có trạng thái 3D, Presence, chuyển động và chat riêng.
- Tên chính xác `NHOM3HCM202AI1802` nhận vai trò giảng viên. Đây là quy ước trình diễn, không phải cơ chế xác thực cho một kỳ thi chính thức.
- Sinh viên tới gần ghế rồi nhấn `E` hoặc nhấp ghế. Khi giảng viên mở bài, mọi sinh viên đang ngồi ở tất cả phòng được ghi nhận cho cùng một lượt và dùng thời gian máy chủ.
- Bài kiểm tra có **10 câu**. Supabase chấm bài và xếp theo số câu đúng, sau đó theo thời gian nộp. Giảng viên có thể kết thúc bài hoặc reset bảng xếp hạng.
- Chat dùng Realtime Broadcast và chỉ giữ tối đa 60 tin trong RAM của mỗi trình duyệt. Tin nhắn mất khi tải lại, thoát trang hoặc chuyển phòng.
- Chạy `npm run test:online` để kiểm tra toàn bộ chuỗi migration và luồng thi trên PostgreSQL thu gọn. Bản LAN chạy bằng `npm run dev:lan`; dùng `npm run test:lan` để kiểm tra máy chủ LAN.

## Điều khiển

- `W A S D` hoặc phím mũi tên: di chuyển.
- Kéo chuột hoặc chạm kéo: đổi góc nhìn. Cuộn hoặc chụm hai ngón: phóng to, thu nhỏ.
- Nhấp tranh hoặc TV để xem nội dung, hoặc tới gần rồi nhấn `E`.
- Trên điện thoại, dùng joystick ở góc dưới trái.

## Nguồn nội dung và ảnh tư liệu

Nội dung tám trạm bám theo bộ thuyết trình và kịch bản trong `D:\HCM202_TT_Templates_FA26_Updated\05_Showcase_Slides_Script`. Giao diện không hiển thị dòng trích dẫn slide hoặc số trang; mỗi ảnh vẫn có liên kết đến trang nguồn chính thức.

Ảnh trong `public/hcm-gallery` được lấy từ các bài viết và không gian trưng bày chính thức của Bảo tàng Hồ Chí Minh:

- [Phong cách làm việc của Chủ tịch Hồ Chí Minh](https://baotanghochiminh.vn/gia-tri-phong-cach-lam-viec-cua-chu-tich-ho-chi-minh-doi-voi-cong-tac-xay-dung-chinh-don-dang-hien-nay.htm)
- [Học tập tấm gương làm việc trách nhiệm, khoa học, đổi mới](https://baotanghochiminh.vn/hoc-tap-tam-guong-lam-viec-trach-nhiem-khoa-hoc-doi-moi-cua-chu-tich-ho-chi-minh.htm)
- [Chủ tịch Hồ Chí Minh càng giản dị càng vĩ đại](https://baotanghochiminh.vn/chu-tich-ho-chi-minh-cang-gian-di-cang-vi-dai.htm)
- [Trưng bày chuyên đề “Hồ Chí Minh – Chân dung một con người”](https://baotanghochiminh.vn/bao-tang-ho-chi-minh-khai-mac-trung-bay-chuyen-de-ho-chi-minh-chan-dung-mot-con-nguoi.htm)

Sprite Flappy Bird có giấy phép MIT nằm trong `public/flappy`.
