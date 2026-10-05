# AI Lab · Lớp học tương tác 3D

Lớp học 3D bằng Three.js và Vite giúp sinh viên khám phá tám chủ đề về trí tuệ nhân tạo, kiểm chứng đầu ra và sử dụng AI có trách nhiệm. Người chơi có thể chọn avatar, di chuyển, trò chuyện theo phòng, xem tranh, chơi quiz, ngồi vào ghế và cùng tham gia bài kiểm tra 15 phút.

## Chạy bản trực tuyến

1. Tạo dự án Supabase. Trong **Authentication → Providers**, bật **Anonymous Sign-Ins**.
2. Với dự án mới, chạy lần lượt các migration trong `supabase/migrations` theo thứ tự tên file. Với dự án đã cài trước đó, chạy thêm [migration avatar và reset bảng xếp hạng](supabase/migrations/20261006_avatar_profiles.sql), sau đó chạy [migration nội dung AI](supabase/migrations/20261006_ai_classroom_content.sql). Migration nội dung AI đưa bài kiểm tra về trạng thái chờ và xóa kết quả của lượt hiện tại để tránh thay câu hỏi giữa lúc đang thi.
3. Tạo `.env` từ `.env.example` và điền URL cùng **publishable key**. Không đưa `service_role` hoặc secret key vào ứng dụng trình duyệt. Các biến `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` cũng được hỗ trợ.
4. Chạy:

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

## Nguồn nội dung AI

Các tranh là đồ họa vector được vẽ trực tiếp trong ứng dụng để hiển thị ổn định và tránh lỗi chữ. Nội dung được biên soạn từ các nguồn chính thức:

- [UNESCO · AI trong giáo dục](https://www.unesco.org/en/digital-education/artificial-intelligence)
- [UNESCO · Khung năng lực AI cho học sinh, sinh viên](https://www.unesco.org/en/articles/ai-competency-framework-students?hub=84624)
- [UNESCO · Hướng dẫn AI tạo sinh trong giáo dục và nghiên cứu](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research?hub=394)
- [NIST · AI đáng tin cậy và có trách nhiệm](https://www.nist.gov/trustworthy-and-responsible-ai)
- [NIST · Khung quản trị rủi ro AI](https://www.nist.gov/itl/ai-risk-management-framework)
- [WHO · Đạo đức và quản trị AI cho sức khỏe](https://www.who.int/publications/i/item/9789240029200)
- [NASA · Artificial Intelligence](https://www.nasa.gov/artificial-intelligence/)

Sprite Flappy Bird có giấy phép MIT nằm trong `public/flappy`.
