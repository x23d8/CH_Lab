export const examQuestions = [
  {
    id: 'source',
    source: 'Slide 3, 10',
    question: 'Một bạn dùng AI tóm tắt tài liệu rồi đăng bài với tên mình nhưng không kiểm tra nguồn. Cách sửa nào phù hợp nhất với “học có nguồn” và văn hóa số?',
    options: [
      'Chỉ thêm dòng “có dùng AI”, giữ mọi thông tin như cũ.',
      'Kiểm tra tác giả, trang và bối cảnh của từng luận điểm; sửa phần sai và ghi rõ AI đã hỗ trợ ở đâu.',
      'Xóa mọi tài liệu gốc để bài viết ngắn hơn.',
      'Đăng ngay vì AI thường tổng hợp nhanh hơn người đọc.',
    ],
    answer: 1,
  },
  {
    id: 'identity',
    source: 'Slide 4, 6',
    question: 'Lớp thiết kế triển lãm giao lưu quốc tế. Phương án nào vừa giữ bản sắc vừa tiếp thu tinh hoa, đồng thời thể hiện tính khoa học?',
    options: [
      'Sao chép trọn bộ triển lãm nước ngoài để tiết kiệm thời gian.',
      'Chỉ dùng biểu tượng quen thuộc, không cần giải thích nguồn gốc.',
      'Chọn chất liệu văn hóa Việt có nguồn xác thực, tiếp nhận cách trình bày tốt từ bên ngoài và giải thích lý do lựa chọn.',
      'Bỏ nội dung Việt Nam vì người xem quốc tế có thể chưa biết.',
    ],
    answer: 2,
  },
  {
    id: 'roles',
    source: 'Slide 5, 6',
    question: 'Một chiến dịch đọc sách chỉ trưng bày áp phích đẹp nhưng người học khó tiếp cận sách. Cách cải tiến nào vận dụng đồng thời vai trò “phục vụ nhân dân” và tính đại chúng?',
    options: [
      'Khảo sát nhu cầu, mở điểm mượn sách dễ tiếp cận và để người học góp ý sau khi sử dụng.',
      'Tăng số áp phích để mọi người nhìn thấy nhiều hơn.',
      'Chỉ mời người đã đọc nhiều sách tham gia.',
      'Dùng khẩu hiệu dài hơn để truyền đạt đủ lý thuyết.',
    ],
    answer: 0,
  },
  {
    id: 'whole',
    source: 'Slide 7–9',
    question: 'Một sinh viên đạt điểm chuyên môn cao nhưng thường xuyên sao chép bài nhóm và kiệt sức. Kế hoạch nào gần nhất với phát triển con người toàn diện và “hồng” đi cùng “chuyên”?',
    options: [
      'Tăng giờ học chuyên môn và bỏ mọi hoạt động khác.',
      'Chỉ yêu cầu xin lỗi, không cần thay đổi cách làm việc.',
      'Giữ thành tích hiện tại vì kết quả là tiêu chí duy nhất.',
      'Rèn năng lực chuyên môn, cam kết làm việc trung thực và xây dựng nhịp học nghỉ hợp lý.',
    ],
    answer: 3,
  },
  {
    id: 'community',
    source: 'Slide 8, 10',
    question: 'Nhóm phát hiện một thông tin sai đang lan trong cộng đồng lớp. Hành động nào thể hiện con người vừa là chủ thể tạo văn hóa vừa chịu trách nhiệm với cộng đồng?',
    options: [
      'Chia sẻ tiếp để nhiều người tự đánh giá.',
      'Im lặng vì việc kiểm chứng chỉ thuộc người quản trị.',
      'Kiểm chứng bằng nguồn tin cậy, đính chính tôn trọng người khác và rút kinh nghiệm cho lần đăng sau.',
      'Công kích người đăng để mọi người chú ý đến vấn đề.',
    ],
    answer: 2,
  },
];

export const publicExamQuestions = examQuestions.map(({ id, source, question, options }) => ({ id, source, question, options }));
