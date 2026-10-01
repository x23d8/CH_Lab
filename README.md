# Lớp học Màu Nắng

Lớp học 3D bằng Three.js và Vite. Người chơi khám phá tám tranh về bài thuyết trình *Văn hóa và con người trong tư tưởng Hồ Chí Minh*, ngồi vào ghế và tham gia bài kiểm tra 15 phút. TV trong lớp mở quiz riêng với sprite chim và ống từ [samuelcust/flappy-bird-assets](https://github.com/samuelcust/flappy-bird-assets); không sử dụng âm thanh.

## Chạy bản trực tuyến

1. Tạo dự án Supabase. Trong **Authentication → Providers**, bật **Anonymous Sign-Ins**.
2. Trong **SQL Editor**, chạy toàn bộ [migration lớp học](supabase/migrations/20261001_online_classroom.sql) một lần. Ứng dụng dùng các kênh `private: true` và chính sách truy cập trong migration. Có thể để **Allow public access** bật; tắt tùy chọn này nếu muốn toàn bộ dự án chỉ cho phép kênh riêng, không cho tạo kênh công khai.
3. Tạo `.env` từ `.env.example` và điền URL cùng **publishable key** của dự án. Không đưa `service_role` hoặc secret key vào ứng dụng trình duyệt. `.env` hiện có với tên `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` cũng được hỗ trợ.
4. Chạy:

```bash
npm install
npm run dev
```

Mở địa chỉ Vite in trong terminal. Khi triển khai Vercel, đặt `VITE_SUPABASE_URL` và `VITE_SUPABASE_PUBLISHABLE_KEY` trong **Project Settings → Environment Variables**, rồi build lại; lệnh build là `npm run build`, thư mục đầu ra là `dist`. Có thể dùng cùng một dự án Supabase cho bản chạy tại máy và bản Vercel để dùng chung phòng và bài kiểm tra.

## Phòng, người chơi và bài kiểm tra

- Tối đa **10 người trong một phòng**, tính cả giảng viên. Người thứ 11 được xếp vào phòng tiếp theo. Mỗi phòng có không gian 3D riêng; vị trí và hoạt ảnh nhân vật chỉ phát trong phòng đó để giảm lưu lượng.
- Góc trên hiển thị tổng số người đang trực tuyến, số sinh viên đã ngồi và số người trong phòng hiện tại. Người đóng trang hết hiệu lực sau tối đa khoảng 60 giây nếu tín hiệu rời phòng không gửi kịp.
- Mở ô `?` để đặt tên. Tên chính xác `NHOM3HCM202AI1802` nhận vai trò giảng viên. Mã vai trò này là quy ước lớp học, không phải cơ chế bảo mật cho một kỳ thi chính thức.
- Sinh viên tới gần ghế rồi nhấn `E` hoặc nhấp ghế. Giảng viên nhấn **Mở kiểm tra 15 phút**; **tất cả sinh viên đang ngồi ở mọi phòng** được ghi nhận cho cùng một lượt và có cùng thời điểm bắt đầu/kết thúc theo đồng hồ máy chủ. Phòng không có giảng viên vẫn nhận bài.
- Nộp đủ năm câu trắc nghiệm trước khi hết giờ. Supabase chấm bài và xếp hạng chung mọi phòng: số câu đúng cao hơn đứng trước, sau đó tới thời gian làm bài ngắn hơn. Ba hạng đầu được tô vàng, bạc, đồng. Bài chưa nộp khi hết giờ được tính 0 điểm.
- Để thử nhiều người, dùng các trình duyệt/profiles hoặc thiết bị khác nhau. Các tab cùng profile chia sẻ phiên đăng nhập ẩn danh và được tính là **một người chơi**.

Vị trí nhân vật truyền qua Supabase Realtime Broadcast với giới hạn tối đa 4 cập nhật/giây khi di chuyển và tự giảm nhịp khi số người/phòng tăng; Presence giữ danh sách người trong từng phòng. Việc phân phòng, ghế, đồng hồ và điểm số được xử lý bằng hàm Postgres trong migration. Khi 10 người cùng di chuyển liên tục, gói Supabase Free có thể chạm giới hạn Realtime; nên đo tải trên dự án thật và dùng gói có hạn mức phù hợp. Chạy `npm run test:online` để thử migration và luồng kiểm tra trên PostgreSQL thu gọn. Bản LAN cũ vẫn có thể chạy riêng bằng `npm run dev:lan`; `npm run test:lan` kiểm tra luồng LAN.

## Điều khiển

- `W A S D` hoặc phím mũi tên: di chuyển.
- Kéo chuột hoặc chạm kéo: đổi góc nhìn. Cuộn hoặc chụm hai ngón: phóng to, thu nhỏ.
- Nhấp tranh hoặc TV để xem nội dung, hoặc tới gần rồi nhấn `E`.
- Trên điện thoại, dùng joystick ở góc dưới trái.

Nội dung tranh và quiz được biên soạn từ `HCM202_AI1802_Nhom03_05_ShowcaseSlides_v1.0.pptx` và `HCM202_AI1802_Nhom03_05_ShowcaseScript_v1.0.docx` trong `D:\HCM202_TT_Templates_FA26_Updated\05_Showcase_Slides_Script`. Tranh là infographic vật thể và sơ đồ, không có hình người hay chân dung lãnh tụ. Sprite Flappy Bird cùng giấy phép MIT nằm trong `public/flappy`.
