# Văn hóa từ ta

**Lớp học tương tác 3D · HCM202**

*Văn hóa từ ta – Con người vì cộng đồng*

Một không gian học tập 3D chuyển nội dung **“Văn hóa và con người trong tư tưởng Hồ Chí Minh”** thành tám trạm khám phá. Người học chọn nhân vật, di chuyển trong lớp, tìm hiểu tư liệu, trao đổi theo phòng và tham gia bài kiểm tra cùng giảng viên.

![Ảnh chụp lớp học 3D HCM202](docs/classroom.png)

<sub>Ảnh chụp từ ứng dụng khi chạy cục bộ.</sub>

**Công nghệ:** Three.js · Vite · Supabase Realtime · PostgreSQL

## Trải nghiệm trong lớp học

| Khám phá | Tương tác | Học cùng nhau |
| --- | --- | --- |
| Tám trạm nội dung, tranh và ảnh tư liệu có liên kết đến nguồn | Chọn avatar, di chuyển, đổi góc nhìn, ngồi vào ghế và chơi quiz | Phòng học tối đa 10 người, chat theo phòng và bài kiểm tra 15 phút |

## Bắt đầu nhanh

**Yêu cầu:** Node.js `^20.19.0` hoặc `>=22.12.0`, npm và một dự án Supabase.

1. Trong Supabase, bật **Anonymous Sign-Ins** tại **Authentication → Providers**.
2. Chạy các tệp trong [`supabase/migrations`](supabase/migrations) theo thứ tự tên tệp nếu tạo cơ sở dữ liệu mới.
3. Tạo `.env` từ [`.env.example`](.env.example), rồi điền URL và **publishable key** của dự án:

   ```dotenv
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key
   ```

4. Cài đặt và chạy ứng dụng:

   ```bash
   npm ci
   npm run dev
   ```

Mở địa chỉ Vite hiển thị trong terminal. Ứng dụng cũng hỗ trợ tên biến `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Chỉ dùng **publishable key** trên trình duyệt; không đưa `service_role` hoặc secret key vào `.env` của ứng dụng này.

<details>
<summary>Đã có cơ sở dữ liệu từ phiên bản trước?</summary>

Chạy [migration nội dung HCM202](supabase/migrations/20261006_z_hcm202_showcase_content.sql), sau đó chạy [migration điểm vào lớp và trạng thái ghế](supabase/migrations/20261006_zz_spawn_seat_recovery.sql). Migration thứ hai đặt điểm vào lớp ở vùng trống và đưa nhân vật ra lối đi khi đứng dậy.

</details>

## Cách sử dụng

| Thao tác | Điều khiển |
| --- | --- |
| Di chuyển | `W`, `A`, `S`, `D` hoặc phím mũi tên |
| Đổi góc nhìn | Kéo chuột hoặc chạm kéo |
| Phóng to, thu nhỏ | Cuộn chuột hoặc chụm hai ngón |
| Xem nội dung | Nhấp tranh hoặc TV; có thể tới gần rồi nhấn `E` |
| Di chuyển trên điện thoại | Joystick ở góc dưới bên trái |
| Ngồi vào ghế | Tới gần và nhấn `E` hoặc nhấp ghế |

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

