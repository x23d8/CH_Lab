const museumPhotoArticle = 'https://baotanghochiminh.vn/chu-tich-ho-chi-minh-cang-gian-di-cang-vi-dai.htm';
const museumWorkArticle = 'https://baotanghochiminh.vn/gia-tri-phong-cach-lam-viec-cua-chu-tich-ho-chi-minh-doi-voi-cong-tac-xay-dung-chinh-don-dang-hien-nay.htm';
const museumStudentArticle = 'https://baotanghochiminh.vn/hoc-tap-tam-guong-lam-viec-trach-nhiem-khoa-hoc-doi-moi-cua-chu-tich-ho-chi-minh.htm';
const museumCultureArticle = 'https://baotanghochiminh.vn/bao-tang-ho-chi-minh-khai-mac-trung-bay-chuyen-de-ho-chi-minh-chan-dung-mot-con-nguoi.htm';

export const artworks = [
  {
    title: 'Văn hóa là gì?',
    category: 'Một hệ thống giá trị do con người sáng tạo',
    imageUrl: '/hcm-gallery/08-van-hoa.jpg',
    imageAlt: 'Không gian trưng bày về văn hóa tại Bảo tàng Hồ Chí Minh',
    note: 'Văn hóa không chỉ là văn nghệ. Đó còn là cách con người sống, học tập, tổ chức xã hội và tạo ra những giá trị phục vụ đời sống.',
    points: [
      'Theo nghĩa rộng, văn hóa bao gồm toàn bộ những giá trị vật chất và tinh thần do con người sáng tạo.',
      'Theo nghĩa hẹp, văn hóa gắn với đời sống tinh thần và các hoạt động sáng tạo.',
      'Văn hóa còn được nhìn từ giáo dục, học vấn và những công cụ con người dùng trong đời sống.',
    ],
    sourceLabel: 'Bảo tàng Hồ Chí Minh · Trưng bày chuyên đề về văn hóa',
    sourceUrl: museumCultureArticle,
  },
  {
    title: 'Văn hóa trong đời sống',
    category: 'Văn hóa ⇄ Chính trị · Kinh tế · Xã hội',
    imageUrl: '/hcm-gallery/01-lam-viec.jpg',
    imageAlt: 'Chủ tịch Hồ Chí Minh làm việc tại Phủ Chủ tịch',
    note: 'Văn hóa không đứng ngoài đời sống. Nó gắn chặt với chính trị, kinh tế và xã hội, đồng thời góp phần định hướng cách con người lao động và ứng xử.',
    points: [
      'Phát triển văn hóa cần đi cùng với phát triển kinh tế, chính trị và xã hội.',
      'Bản sắc dân tộc là nền tảng để cộng đồng nhận ra mình và giữ cốt cách riêng.',
      'Tiếp thu tinh hoa nhân loại cần có chọn lọc, phù hợp với điều kiện và giá trị của dân tộc.',
    ],
    sourceLabel: 'Bảo tàng Hồ Chí Minh · Tư liệu về phong cách làm việc',
    sourceUrl: museumWorkArticle,
  },
  {
    title: 'Bốn vai trò của văn hóa',
    category: 'Mục tiêu · Động lực · Mặt trận · Phục vụ nhân dân',
    imageUrl: '/hcm-gallery/06-thieu-nhi.jpg',
    imageAlt: 'Chủ tịch Hồ Chí Minh chăm sóc một em nhỏ',
    note: 'Văn hóa hướng tới cuộc sống tốt đẹp, khơi dậy sức mạnh hành động, đấu tranh với điều lạc hậu và cuối cùng phải phục vụ con người.',
    points: [
      'Là mục tiêu: hướng tới đời sống có tri thức, đạo đức và nhân văn.',
      'Là động lực và mặt trận: tạo sức mạnh tinh thần, bảo vệ cái đúng và cái tiến bộ.',
      'Phục vụ nhân dân: sản phẩm văn hóa cần dễ tiếp cận và giúp đời sống con người tốt hơn.',
    ],
    sourceLabel: 'Bảo tàng Hồ Chí Minh · Tư liệu ảnh về đời sống giản dị',
    sourceUrl: museumPhotoArticle,
  },
  {
    title: 'Nền văn hóa mới',
    category: 'Dân tộc · Khoa học · Đại chúng',
    imageUrl: '/hcm-gallery/07-trien-lam.jpg',
    imageAlt: 'Hiện vật trong không gian trưng bày của Bảo tàng Hồ Chí Minh',
    note: 'Nền văn hóa mới vừa giữ cốt cách dân tộc, vừa tiến bộ và có căn cứ khoa học, vừa do nhân dân xây dựng và phục vụ đông đảo nhân dân.',
    points: [
      'Dân tộc: gìn giữ bản sắc và phát huy những giá trị tốt đẹp của Việt Nam.',
      'Khoa học: chống mê tín, lạc hậu; hướng tới tiến bộ và những điều có căn cứ.',
      'Đại chúng: để mọi người được tham gia sáng tạo, tiếp cận và thụ hưởng văn hóa.',
    ],
    sourceLabel: 'Bảo tàng Hồ Chí Minh · Không gian trưng bày chuyên đề',
    sourceUrl: museumCultureArticle,
  },
  {
    title: 'Con người cụ thể, toàn diện',
    category: 'Trí tuệ · Tâm hồn · Thể lực · Quan hệ xã hội',
    imageUrl: '/hcm-gallery/05-ren-luyen.jpg',
    imageAlt: 'Chủ tịch Hồ Chí Minh rèn luyện thể thao cùng cán bộ',
    note: 'Con người luôn sống trong hoàn cảnh lịch sử và những mối quan hệ cụ thể. Phát triển con người vì thế cần chăm lo đồng thời nhiều mặt.',
    points: [
      'Bồi dưỡng tri thức và năng lực suy nghĩ độc lập.',
      'Rèn luyện đạo đức, cảm xúc, lối sống và trách nhiệm với người khác.',
      'Chăm sóc thể lực, sức khỏe và khả năng tham gia đời sống cộng đồng.',
    ],
    sourceLabel: 'Bảo tàng Hồ Chí Minh · Tư liệu rèn luyện thân thể',
    sourceUrl: museumPhotoArticle,
  },
  {
    title: 'Con người là mục tiêu và động lực',
    category: 'Phát triển vì con người · Phát triển bằng sức người',
    imageUrl: '/hcm-gallery/02-doc-sach.jpg',
    imageAlt: 'Chủ tịch Hồ Chí Minh cùng cán bộ vượt suối trong kháng chiến',
    note: 'Mọi sự phát triển phải hướng tới tự do, hạnh phúc và sự trưởng thành của con người; chính con người cũng là chủ thể tạo nên sự thay đổi đó.',
    points: [
      'Là mục tiêu: thành quả phát triển phải nâng cao đời sống vật chất và tinh thần của con người.',
      'Là động lực: sức dân, trí tuệ, lao động và tinh thần đoàn kết tạo ra tiến bộ.',
      'Tôn trọng con người cũng có nghĩa là tạo điều kiện để mỗi người chủ động đóng góp.',
    ],
    sourceLabel: 'Bảo tàng Hồ Chí Minh · Tư liệu hoạt động cùng cán bộ',
    sourceUrl: museumPhotoArticle,
  },
  {
    title: 'Chiến lược “trồng người”',
    category: 'Hồng + Chuyên · Tự rèn luyện + Môi trường',
    imageUrl: '/hcm-gallery/03-hoc-sinh.jpg',
    imageAlt: 'Chủ tịch Hồ Chí Minh với học sinh Trường Trưng Vương, Hà Nội',
    note: 'Bồi dưỡng con người là công việc lâu dài. Phẩm chất tốt cần đi cùng năng lực, còn nỗ lực cá nhân cần được nâng đỡ bởi giáo dục và môi trường lành mạnh.',
    points: [
      '“Hồng” định hướng lý tưởng, đạo đức, lối sống và trách nhiệm.',
      '“Chuyên” gồm tri thức, kỹ năng, tác phong và khả năng hoàn thành công việc.',
      'Giáo dục, tổ chức, cơ chế, dân chủ, nêu gương và phong trào cùng tạo môi trường rèn luyện.',
    ],
    sourceLabel: 'Bảo tàng Hồ Chí Minh · Tư liệu Chủ tịch Hồ Chí Minh với học sinh',
    sourceUrl: museumStudentArticle,
  },
  {
    title: 'Từ tư tưởng đến hành động sinh viên',
    category: 'Văn hóa từ ta · Con người vì cộng đồng',
    imageUrl: '/hcm-gallery/04-cong-dong.jpg',
    imageAlt: 'Chủ tịch Hồ Chí Minh rèn luyện cùng các cán bộ trong chiến khu',
    note: 'Giá trị văn hóa trở nên sống động khi được thể hiện bằng hành vi hằng ngày trong lớp học, trên mạng và trong cộng đồng.',
    points: [
      'Học có nguồn: kiểm chứng, ghi nguồn và minh bạch khi dùng công cụ hỗ trợ.',
      'Nói có trách nhiệm, làm có kỷ luật: tôn trọng người khác và hoàn thành phần việc đã cam kết.',
      'Sống vì cộng đồng: chủ động góp sức, chia sẻ điều hữu ích và bảo vệ môi trường chung.',
    ],
    sourceLabel: 'Bảo tàng Hồ Chí Minh · Tư liệu rèn luyện tập thể',
    sourceUrl: museumPhotoArticle,
  },
];
