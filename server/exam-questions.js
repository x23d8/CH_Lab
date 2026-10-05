const source = 'AI Lab · Kiến thức AI có trách nhiệm';

export const examQuestions = [
  {
    id: 'ai-role', source,
    question: 'Mô tả nào đúng nhất về hệ thống AI hiện nay?',
    options: ['Luôn suy nghĩ và hiểu như con người', 'Tìm quy luật từ dữ liệu để tạo dự đoán hoặc nội dung', 'Luôn biết sự kiện mới nhất', 'Không bao giờ mắc lỗi'],
    answer: 1,
  },
  {
    id: 'ai-data-quality', source,
    question: 'Yếu tố nào giúp giảm nguy cơ mô hình đưa ra kết quả sai lệch?',
    options: ['Dùng càng ít dữ liệu càng tốt', 'Chỉ dùng dữ liệu từ một nhóm', 'Dữ liệu phù hợp, có chất lượng và đại diện cho bối cảnh sử dụng', 'Bỏ qua bước thử nghiệm'],
    answer: 2,
  },
  {
    id: 'ai-verify', source,
    question: 'Khi AI tạo sinh nêu một dữ kiện quan trọng, bạn nên làm gì trước khi sử dụng?',
    options: ['Tin ngay vì câu trả lời trôi chảy', 'Đối chiếu với nguồn chính thức hoặc nguồn đáng tin cậy', 'Chỉ kiểm tra chính tả', 'Xóa tên công cụ AI'],
    answer: 1,
  },
  {
    id: 'ai-privacy', source,
    question: 'Cách dùng AI nào bảo vệ dữ liệu cá nhân tốt nhất?',
    options: ['Không nhập dữ liệu nhạy cảm; chỉ dùng thông tin cần thiết và được phép', 'Dán toàn bộ hồ sơ để AI hiểu rõ hơn', 'Chia sẻ mật khẩu cho nhóm', 'Đăng công khai nội dung đầu vào'],
    answer: 0,
  },
  {
    id: 'ai-bias', source,
    question: 'Dấu hiệu nào cho thấy cần kiểm tra thiên lệch của hệ thống AI?',
    options: ['Giao diện có màu tối', 'Kết quả bất lợi lặp lại với một nhóm người dùng', 'Mô hình trả lời nhanh', 'Ứng dụng có nhiều nút'],
    answer: 1,
  },
  {
    id: 'ai-transparency', source,
    question: 'Minh bạch trong một hệ thống AI hỗ trợ quyết định quan trọng có nghĩa là gì?',
    options: ['Giấu toàn bộ giới hạn của mô hình', 'Chỉ công bố tên sản phẩm', 'Cho biết AI được dùng ở đâu, giới hạn và căn cứ chính của kết quả', 'Luôn hiển thị mã nguồn đầy đủ cho mọi người'],
    answer: 2,
  },
  {
    id: 'ai-rmf', source,
    question: 'Bộ nào gồm bốn chức năng của Khung quản trị rủi ro AI NIST?',
    options: ['Plan, Build, Sell, Repeat', 'Govern, Map, Measure, Manage', 'Read, Write, Test, Delete', 'Ask, Answer, Copy, Share'],
    answer: 1,
  },
  {
    id: 'ai-human-oversight', source,
    question: 'Trong lớp học, cơ chế giám sát của con người nên được thực hiện thế nào?',
    options: ['Để AI tự quyết định điểm cuối cùng trong mọi trường hợp', 'Giảng viên và sinh viên kiểm tra đầu ra, nêu giới hạn và chịu trách nhiệm sử dụng', 'Không cần giải thích khi dùng AI', 'Chỉ kiểm tra khi hệ thống ngừng hoạt động'],
    answer: 1,
  },
  {
    id: 'ai-health', source,
    question: 'Nguyên tắc phù hợp khi dùng AI trong y tế là gì?',
    options: ['Bảo vệ quyền tự chủ, an toàn và riêng tư của người bệnh', 'Thay thế mọi quyết định chuyên môn bằng AI', 'Dùng dữ liệu sức khỏe cho mọi mục đích', 'Không cần đánh giá tác động giữa các nhóm'],
    answer: 0,
  },
  {
    id: 'ai-space', source,
    question: 'AI hỗ trợ các nhiệm vụ không gian của NASA theo cách nào?',
    options: ['Làm tín hiệu truyền nhanh hơn ánh sáng', 'Đảm bảo không bao giờ có lỗi', 'Loại bỏ vai trò của nhà khoa học', 'Phân tích dữ liệu lớn và hỗ trợ phương tiện tự hành'],
    answer: 3,
  },
];

export const publicExamQuestions = examQuestions.map(({ id, question, options }) => ({ id, question, options }));
