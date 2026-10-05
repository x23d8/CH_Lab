const source = 'Bộ câu hỏi HCM202 · Văn hóa và con người';

export const examQuestions = [
  {
    id: 'culture-origin', source,
    question: 'Hồ Chí Minh cho rằng: “Vì ... loài người mới sáng tạo và phát minh ra ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật, những công cụ cho sinh hoạt hằng ngày về mặc, ăn, ở và các phương thức sử dụng.” Chọn phương án đúng điền vào chỗ trống.',
    options: ['Lẽ sinh tồn cũng như mục đích của cuộc sống', 'Nhu cầu đời sống và tinh thần', 'Mục đích phát triển và sinh tồn', 'Cuộc sống'], answer: 0,
  },
  {
    id: 'five-culture-points', source,
    question: 'Nội dung nào đúng về năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc theo tư tưởng Hồ Chí Minh?',
    options: ['Xây dựng luân lý, tâm lý, xã hội, chính trị, kinh tế', 'Xây dựng luân lý, tâm lý, xã hội, chính trị, luật pháp', 'Xây dựng luân lý, tâm lý, xã hội, chính trị, khoa học'], answer: 0,
  },
  {
    id: 'culture-economy-politics', source,
    question: 'Theo Hồ Chí Minh, mối quan hệ giữa văn hóa với kinh tế và chính trị như thế nào?',
    options: ['Văn hóa đứng ngoài kinh tế', 'Văn hóa đứng ngoài chính trị', 'Văn hóa không thể đứng ngoài mà phải ở trong kinh tế và chính trị', 'Văn hóa đứng ngoài kinh tế và chính trị'], answer: 2,
  },
  {
    id: 'culture-goal-motivation', source, question: 'Hồ Chí Minh cho rằng:',
    options: ['Văn hóa vừa là mục tiêu, vừa là động lực của cách mạng', 'Văn hóa vừa là cơ sở, vừa là động lực của cách mạng', 'Văn hóa vừa là mục tiêu, vừa là nhân tố quyết định của cách mạng'], answer: 0,
  },
  {
    id: 'culture-characteristics', source,
    question: 'Trong các luận điểm sau đây về văn hóa, luận điểm nào Hồ Chí Minh nói về tính chất của nền văn hóa?',
    options: ['Phải nâng cao trình độ văn hóa của nhân dân', 'Phải xây dựng một nền văn hóa dân tộc, khoa học và đại chúng', 'Văn hóa cũng là một mặt trận', 'Xây dựng chính trị dân quyền'], answer: 1,
  },
  {
    id: 'culture-functions', source, question: 'Theo tư tưởng Hồ Chí Minh, văn hóa có mấy chức năng chủ yếu?',
    options: ['Hai', 'Ba', 'Bốn', 'Năm'], answer: 1,
  },
  {
    id: 'human-concept', source,
    question: 'Nhận định nào sau đây đúng với khái niệm con người trong tư tưởng Hồ Chí Minh?',
    options: ['Dùng để chỉ con người chung chung', 'Dùng để chỉ một cộng đồng người', 'Dùng để chỉ con người cụ thể gắn với hoàn cảnh lịch sử cụ thể', 'Dùng để chỉ con người trừu tượng'], answer: 2,
  },
  {
    id: 'socialist-human', source, question: 'Theo Hồ Chí Minh, “Muốn xây dựng chủ nghĩa xã hội, trước hết cần có...”',
    options: ['Con người xã hội chủ nghĩa', 'Khoa học xã hội tiên tiến', 'Công nông nghiệp hiện đại', 'Nền kinh tế phát triển'], answer: 0,
  },
  {
    id: 'planting-people', source,
    question: 'Theo Hồ Chí Minh, để thực hiện chiến lược “trồng người”, cần có nhiều biện pháp, nhưng biện pháp quan trọng bậc nhất là:',
    options: ['Giáo dục – đào tạo', 'Thuyết phục – nêu gương', 'Cảm hóa – động viên', 'Ép buộc – cưỡng chế'], answer: 0,
  },
  {
    id: 'new-socialist-human', source,
    question: 'Theo tư tưởng Hồ Chí Minh, con người mới xã hội chủ nghĩa là con người:',
    options: ['Kế thừa những giá trị tốt đẹp của con người truyền thống', 'Phá bỏ những truyền thống cũ', 'Hình thành những phẩm chất mới xã hội chủ nghĩa', 'Kế thừa những giá trị tốt đẹp của con người truyền thống, hình thành những phẩm chất mới xã hội chủ nghĩa'], answer: 3,
  },
];

export const publicExamQuestions = examQuestions.map(({ id, source: questionSource, question, options }) => ({
  id, source: questionSource, question, options,
}));
