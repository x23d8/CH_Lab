const lessons = [
  {
    title: 'AI trong lớp học', category: 'Con người làm chủ công nghệ', theme: 'classroom', poster: 'AI + LEARNING',
    note: 'AI có thể hỗ trợ học tập, nhưng mục tiêu, quyết định và trách nhiệm vẫn thuộc về con người.',
    points: ['Dùng AI để gợi ý, giải thích và luyện tập.', 'Tự suy nghĩ trước khi chấp nhận câu trả lời.', 'Giảng viên và sinh viên cùng đặt quy tắc sử dụng rõ ràng.'],
    sourceLabel: 'UNESCO · Trí tuệ nhân tạo trong giáo dục', sourceUrl: 'https://www.unesco.org/en/digital-education/artificial-intelligence',
  },
  {
    title: 'Năng lực AI của sinh viên', category: 'Hiểu · Dùng · Sáng tạo', theme: 'competency', poster: 'HUMAN  ETHICS  TECH  DESIGN',
    note: 'Năng lực AI gồm tư duy lấy con người làm trung tâm, đạo đức, kỹ thuật ứng dụng và thiết kế hệ thống.',
    points: ['Hiểu AI có thể và không thể làm gì.', 'Áp dụng AI đúng bối cảnh và có trách nhiệm.', 'Sáng tạo giải pháp nhưng vẫn giữ quyền kiểm soát của con người.'],
    sourceLabel: 'UNESCO · Khung năng lực AI cho học sinh, sinh viên', sourceUrl: 'https://www.unesco.org/en/articles/ai-competency-framework-students?hub=84624',
  },
  {
    title: 'AI học từ dữ liệu', category: 'Dữ liệu và mô hình', theme: 'data', poster: 'DATA  >  MODEL  >  CHECK',
    note: 'Mô hình AI tìm quy luật trong dữ liệu. Chất lượng dữ liệu ảnh hưởng trực tiếp đến độ chính xác và tính công bằng của kết quả.',
    points: ['Dữ liệu thiếu hoặc lệch có thể tạo kết quả sai lệch.', 'Kết quả tốt trong bài thử chưa chắc đúng ở mọi tình huống.', 'Luôn kiểm tra mô hình với dữ liệu phù hợp mục đích sử dụng.'],
    sourceLabel: 'NIST · Nền tảng và đo lường AI', sourceUrl: 'https://www.nist.gov/fundamental-ai',
  },
  {
    title: 'AI tạo sinh có kiểm chứng', category: 'Hỏi rõ · Kiểm tra kỹ', theme: 'verify', poster: 'PROMPT  >  OUTPUT  >  VERIFY',
    note: 'AI tạo sinh có thể viết nội dung thuyết phục nhưng vẫn có thể bịa dữ kiện, thiếu ngữ cảnh hoặc dẫn nguồn không tồn tại.',
    points: ['Viết yêu cầu có mục tiêu và bối cảnh rõ.', 'Đối chiếu dữ kiện bằng nguồn đáng tin cậy.', 'Nêu rõ phần nào có AI hỗ trợ khi quy định yêu cầu.'],
    sourceLabel: 'UNESCO · Hướng dẫn AI tạo sinh trong giáo dục', sourceUrl: 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research?hub=394',
  },
  {
    title: 'AI đáng tin cậy', category: 'An toàn và trách nhiệm', theme: 'trust', poster: 'SAFE  FAIR  PRIVATE  CLEAR',
    note: 'Một hệ thống AI đáng tin cậy cần chính xác trong bối cảnh sử dụng, an toàn, minh bạch, bảo vệ riêng tư và giảm thiên lệch có hại.',
    points: ['Không nhập dữ liệu cá nhân hoặc bí mật khi chưa được phép.', 'Tìm dấu hiệu thiên lệch giữa các nhóm người dùng.', 'Cần biết giới hạn và lý do đằng sau quyết định quan trọng.'],
    sourceLabel: 'NIST · AI đáng tin cậy và có trách nhiệm', sourceUrl: 'https://www.nist.gov/trustworthy-and-responsible-ai',
  },
  {
    title: 'Quản trị rủi ro AI', category: 'Bốn bước liên tục', theme: 'risk', poster: 'GOVERN  MAP  MEASURE  MANAGE',
    note: 'Khung quản trị rủi ro AI của NIST tổ chức công việc thành bốn chức năng liên kết: Govern, Map, Measure và Manage.',
    points: ['Govern: phân công trách nhiệm và nguyên tắc.', 'Map: hiểu bối cảnh, người bị ảnh hưởng và rủi ro.', 'Measure và Manage: đo, ưu tiên rồi xử lý rủi ro.'],
    sourceLabel: 'NIST · Khung quản trị rủi ro AI', sourceUrl: 'https://www.nist.gov/itl/ai-risk-management-framework',
  },
  {
    title: 'AI vì sức khỏe con người', category: 'Đạo đức trong thực tế', theme: 'health', poster: 'HUMAN + AI  /  HEALTH',
    note: 'AI có thể hỗ trợ y tế, nhưng phải bảo vệ quyền tự chủ, sự an toàn, riêng tư và lợi ích của người bệnh.',
    points: ['Chuyên gia chịu trách nhiệm cho quyết định cuối cùng.', 'Dữ liệu sức khỏe cần được bảo vệ nghiêm ngặt.', 'Lợi ích và rủi ro phải được đánh giá cho từng nhóm người.'],
    sourceLabel: 'WHO · Đạo đức và quản trị AI cho sức khỏe', sourceUrl: 'https://www.who.int/publications/i/item/9789240029200',
  },
  {
    title: 'AI trong khoa học không gian', category: 'Từ dữ liệu đến khám phá', theme: 'space', poster: 'AI FOR SCIENCE  /  NASA',
    note: 'NASA dùng AI để phân tích ảnh vệ tinh, tìm mẫu trong dữ liệu khoa học và hỗ trợ phương tiện tự hành khám phá những nơi xa xôi.',
    points: ['AI giúp xử lý lượng dữ liệu lớn nhanh hơn.', 'Xe tự hành cần thích nghi khi tín hiệu điều khiển bị trễ.', 'Nhà khoa học vẫn kiểm tra và diễn giải kết quả.'],
    sourceLabel: 'NASA · Artificial Intelligence', sourceUrl: 'https://www.nasa.gov/artificial-intelligence/',
  },
];

const palette = {
  ink: '#163d55', navy: '#102f46', blue: '#63b7d5', mint: '#7bc5aa', yellow: '#ffd166',
  coral: '#f07f72', cream: '#fff9e8', white: '#ffffff', purple: '#8d86d8',
};
const fill = (ctx, color) => { ctx.fillStyle = color; };
function stroke(ctx, color, width = 4) { ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; }
function roundRect(ctx, x, y, width, height, radius, color) { ctx.beginPath(); ctx.roundRect(x, y, width, height, radius); fill(ctx, color); ctx.fill(); }
function circle(ctx, x, y, radius, color) { ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); fill(ctx, color); ctx.fill(); }
function line(ctx, points, color, width = 4) { ctx.beginPath(); ctx.moveTo(...points[0]); points.slice(1).forEach(point => ctx.lineTo(...point)); stroke(ctx, color, width); ctx.stroke(); }
function label(ctx, value, x, y, size = 24, color = palette.ink, align = 'center') {
  ctx.font = `800 ${size}px "Trebuchet MS", Arial, sans-serif`; ctx.textAlign = align; ctx.textBaseline = 'middle'; fill(ctx, color); ctx.fillText(value, x, y);
}
function node(ctx, x, y, color, radius = 24) { circle(ctx, x, y, radius, color); circle(ctx, x, y, radius * .36, palette.cream); }
function arrow(ctx, x1, y1, x2, y2, color = palette.ink) {
  line(ctx, [[x1, y1], [x2, y2]], color, 7);
  const angle = Math.atan2(y2 - y1, x2 - x1); const length = 16;
  line(ctx, [[x2, y2], [x2 - Math.cos(angle - .55) * length, y2 - Math.sin(angle - .55) * length]], color, 7);
  line(ctx, [[x2, y2], [x2 - Math.cos(angle + .55) * length, y2 - Math.sin(angle + .55) * length]], color, 7);
}
function drawHuman(ctx, x, y, color = palette.coral) {
  circle(ctx, x, y - 52, 22, color); roundRect(ctx, x - 28, y - 23, 56, 74, 23, color);
  line(ctx, [[x - 18, y + 46], [x - 31, y + 92]], palette.ink, 9); line(ctx, [[x + 18, y + 46], [x + 31, y + 92]], palette.ink, 9);
}
function drawChip(ctx, x, y, size = 108, color = palette.blue) {
  roundRect(ctx, x - size / 2, y - size / 2, size, size, 20, color); roundRect(ctx, x - size * .28, y - size * .28, size * .56, size * .56, 13, palette.navy);
  for (let i = -1; i <= 1; i++) {
    line(ctx, [[x - size / 2 - 14, y + i * size * .25], [x - size / 2, y + i * size * .25]], palette.ink, 5);
    line(ctx, [[x + size / 2, y + i * size * .25], [x + size / 2 + 14, y + i * size * .25]], palette.ink, 5);
    line(ctx, [[x + i * size * .25, y - size / 2 - 14], [x + i * size * .25, y - size / 2]], palette.ink, 5);
    line(ctx, [[x + i * size * .25, y + size / 2], [x + i * size * .25, y + size / 2 + 14]], palette.ink, 5);
  }
  label(ctx, 'AI', x, y + 1, Math.round(size * .32), palette.white);
}

function drawTheme(ctx, theme) {
  if (theme === 'classroom') {
    roundRect(ctx, 55, 96, 530, 278, 30, '#dff2eb'); drawHuman(ctx, 160, 218); drawChip(ctx, 447, 213, 126);
    arrow(ctx, 235, 204, 360, 204, palette.purple); arrow(ctx, 360, 252, 235, 252, palette.mint);
    label(ctx, 'ASK', 296, 181, 18, palette.purple); label(ctx, 'CHECK', 296, 277, 18, palette.mint);
  } else if (theme === 'competency') {
    [['HUMAN', palette.coral], ['ETHICS', palette.yellow], ['TECH', palette.blue], ['DESIGN', palette.mint]].forEach(([value, color], index) => {
      const x = 55 + (index % 2) * 267; const y = 98 + Math.floor(index / 2) * 142;
      roundRect(ctx, x, y, 252, 126, 24, color); node(ctx, x + 52, y + 63, palette.cream, 28); label(ctx, value, x + 100, y + 63, 24, palette.navy, 'left');
    });
  } else if (theme === 'data') {
    [[135, 'DATA', palette.yellow], [320, 'MODEL', palette.blue], [505, 'CHECK', palette.mint]].forEach(([x, value, color]) => {
      roundRect(ctx, x - 65, 139, 130, 150, 26, color); node(ctx, x, 190, palette.cream, 31); label(ctx, value, x, 254, 21);
    });
    arrow(ctx, 205, 214, 250, 214, palette.purple); arrow(ctx, 390, 214, 435, 214, palette.purple);
    line(ctx, [[108, 324], [532, 324]], palette.ink, 6); [108, 214, 320, 426, 532].forEach((x, i) => circle(ctx, x, 324 - [16, -6, 12, -13, 8][i], 8, palette.coral));
  } else if (theme === 'verify') {
    [[120, 'PROMPT', palette.yellow], [320, 'OUTPUT', palette.blue], [520, 'VERIFY', palette.mint]].forEach(([x, value, color]) => { circle(ctx, x, 215, 68, color); label(ctx, value, x, 215, 20); });
    arrow(ctx, 194, 215, 240, 215, palette.purple); arrow(ctx, 394, 215, 440, 215, palette.purple); line(ctx, [[489, 211], [514, 236], [553, 183]], palette.white, 12);
  } else if (theme === 'trust') {
    drawChip(ctx, 320, 214, 116, palette.purple);
    [[145, 135, 'SAFE', palette.coral], [495, 135, 'FAIR', palette.yellow], [145, 302, 'PRIVATE', palette.blue], [495, 302, 'CLEAR', palette.mint]].forEach(([x, y, value, color]) => {
      line(ctx, [[320, 214], [x, y]], '#aacbd2', 5); roundRect(ctx, x - 65, y - 31, 130, 62, 18, color); label(ctx, value, x, y, 18);
    });
  } else if (theme === 'risk') {
    [['GOVERN', palette.coral], ['MAP', palette.yellow], ['MEASURE', palette.blue], ['MANAGE', palette.mint]].forEach(([value, color], index) => {
      const angle = -Math.PI / 2 + index * Math.PI / 2; const x = 320 + Math.cos(angle) * 148; const y = 222 + Math.sin(angle) * 112;
      roundRect(ctx, x - 72, y - 32, 144, 64, 18, color); label(ctx, value, x, y, 18);
    });
    circle(ctx, 320, 222, 48, palette.navy); label(ctx, 'RISK', 320, 222, 21, palette.white);
  } else if (theme === 'health') {
    roundRect(ctx, 70, 112, 500, 242, 32, '#dff2eb'); drawHuman(ctx, 175, 218); drawChip(ctx, 465, 214, 108);
    line(ctx, [[236, 220], [267, 220], [282, 192], [303, 250], [325, 205], [344, 220], [397, 220]], palette.coral, 7);
  } else if (theme === 'space') {
    fill(ctx, palette.navy); ctx.fillRect(38, 82, 564, 292);
    [[78, 119], [553, 134], [490, 318], [172, 330], [342, 112]].forEach(([x, y], i) => circle(ctx, x, y, i % 2 ? 3 : 5, palette.yellow));
    circle(ctx, 482, 207, 70, '#d88869'); circle(ctx, 461, 185, 15, '#b86458'); circle(ctx, 510, 228, 11, '#b86458');
    roundRect(ctx, 135, 218, 116, 58, 16, palette.cream); circle(ctx, 158, 288, 21, palette.ink); circle(ctx, 228, 288, 21, palette.ink);
    line(ctx, [[192, 218], [192, 165], [229, 147]], palette.cream, 7); circle(ctx, 238, 143, 10, palette.yellow);
    line(ctx, [[263, 194], [376, 173]], palette.blue, 4); line(ctx, [[263, 215], [389, 215]], palette.blue, 4); line(ctx, [[263, 236], [376, 257]], palette.blue, 4);
  }
}

function makePainting(lesson, index) {
  const canvas = document.createElement('canvas'); canvas.width = 640; canvas.height = 480; const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 640, 480); gradient.addColorStop(0, '#fff8dd'); gradient.addColorStop(1, '#cce9df');
  fill(ctx, gradient); ctx.fillRect(0, 0, 640, 480); circle(ctx, 590, 35, 95, 'rgba(255,255,255,.55)'); circle(ctx, 48, 425, 100, 'rgba(99,183,213,.12)');
  roundRect(ctx, 24, 20, 174, 42, 21, palette.white); label(ctx, `AI LAB  /  0${index + 1}`, 111, 41, 17, palette.navy); label(ctx, 'LEARN  TEST  CREATE', 614, 41, 14, palette.ink, 'right');
  drawTheme(ctx, lesson.theme); fill(ctx, palette.navy); ctx.fillRect(0, 415, 640, 65); fill(ctx, palette.yellow); ctx.fillRect(0, 415, 640, 6); label(ctx, lesson.poster, 320, 450, 25, palette.white);
  return canvas;
}

export const artworks = lessons.map((lesson, index) => ({ ...lesson, canvas: makePainting(lesson, index) }));
