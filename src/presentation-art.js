const lessons = [
  {
    title: 'Văn hóa ⇄ Con người', category: 'Luận điểm trung tâm', theme: 'cycle',
    note: 'Con người sáng tạo văn hóa; văn hóa định hướng và bồi dưỡng con người. Khi phát triển, con người lại tiếp tục làm giàu đời sống văn hóa.',
    points: ['Quan hệ này diễn ra theo hai chiều.', 'Xây dựng văn hóa bắt đầu từ xây dựng con người toàn diện.'],
    slide: '02', source: 'Slide 2 · Giáo trình Tư tưởng Hồ Chí Minh 2019, Chương VI',
  },
  {
    title: 'Văn hóa trong đời sống', category: 'Khái niệm', theme: 'scope',
    note: 'Văn hóa rộng hơn văn nghệ: hiện diện trong phương thức sinh hoạt, đời sống tinh thần, giáo dục và cách con người dùng công cụ.',
    points: ['Nghĩa rộng: những sáng tạo và phương thức sinh hoạt.', 'Nghĩa hẹp: đời sống tinh thần của xã hội.', 'Giáo dục và công cụ cũng là những góc nhìn về văn hóa.'],
    slide: '03', source: 'Slide 3 · Giáo trình 2019, tr. 119–120',
  },
  {
    title: 'Có gốc để hội nhập', category: 'Văn hóa và xã hội', theme: 'roots',
    note: 'Văn hóa gắn với chính trị, kinh tế và xã hội. Giữ bản sắc dân tộc đi cùng việc tiếp thu có chọn lọc tinh hoa của nhân loại.',
    points: ['Kinh tế tạo điều kiện vật chất; văn hóa tác động trở lại bằng tri thức, kỷ luật và đạo đức.', 'Bản sắc và hội nhập có thể cùng phát triển.'],
    slide: '04', source: 'Slide 4 · Giáo trình 2019, tr. 120–122',
  },
  {
    title: 'Bốn vai trò của văn hóa', category: 'Giá trị và hành động', theme: 'roles',
    note: 'Văn hóa là mục tiêu, động lực, một mặt trận và phải phục vụ nhân dân. Giá trị văn hóa cần đi vào đời sống thực.',
    points: ['Mục tiêu: hướng tới đời sống tốt đẹp.', 'Động lực: khơi dậy tri thức, phẩm giá và sáng tạo.', 'Mặt trận: bồi đắp cái tốt, khắc phục cái lạc hậu.', 'Phục vụ nhân dân: xuất phát từ đời sống và nâng cao đời sống.'],
    slide: '05', source: 'Slide 5 · Giáo trình 2019, tr. 122–124',
  },
  {
    title: 'Nền văn hóa mới', category: 'Ba tính chất', theme: 'three',
    note: 'Nền văn hóa mới được khái quát bằng ba tính chất: dân tộc, khoa học và đại chúng.',
    points: ['Dân tộc: giữ bản sắc và năng lực tự chủ.', 'Khoa học: tiến bộ, có căn cứ, chống lạc hậu.', 'Đại chúng: do nhân dân xây dựng và phục vụ nhân dân.'],
    slide: '06', source: 'Slide 6 · Giáo trình 2019, tr. 124–125',
  },
  {
    title: 'Con người toàn diện', category: 'Quan niệm về con người', theme: 'whole',
    note: 'Con người là con người cụ thể trong gia đình, nhà trường, cộng đồng và xã hội; phát triển cả trí lực, tâm lực và thể lực.',
    points: ['Không chỉ đánh giá bằng một phẩm chất hay một kỹ năng.', 'Điều kiện sống và các quan hệ xã hội góp phần hình thành hành vi.'],
    slide: '07', source: 'Slide 7 · Giáo trình 2019, tr. 138–139',
  },
  {
    title: 'Mục tiêu và động lực', category: 'Hai chiều phát triển', theme: 'people',
    note: 'Con người là mục tiêu vì phát triển hướng đến tự do, hạnh phúc; đồng thời là động lực vì nhân dân chủ động lao động và sáng tạo.',
    points: ['Phát triển vì con người.', 'Phát triển bằng sức người.'],
    slide: '08', source: 'Slide 8 · Giáo trình 2019, tr. 139–140',
  },
  {
    title: 'Trồng người từ việc nhỏ', category: 'Vận dụng với sinh viên', theme: 'planting',
    note: '“Trồng người” là công việc lâu dài: phẩm chất và năng lực cùng phát triển, bắt đầu từ những hành vi học tập có thể kiểm chứng.',
    points: ['Học có nguồn và kiểm chứng thông tin.', 'Nói có trách nhiệm, giao tiếp tôn trọng.', 'Làm có kỷ luật, minh bạch khi dùng AI.', 'Dùng năng lực để góp ích cho cộng đồng.'],
    slide: '09–10', source: 'Slide 9–10 · Giáo trình 2019, tr. 140–144',
  },
];

const colors = {
  ink: '#426d70', dark: '#355f65', mint: '#65a988', mintLight: '#b4d9b9',
  yellow: '#f3c85c', coral: '#df816d', blue: '#81bdd0', cream: '#fff7df',
};

function fill(c, color) { c.fillStyle = color; }
function stroke(c, color, width = 4) { c.strokeStyle = color; c.lineWidth = width; c.lineCap = 'round'; c.lineJoin = 'round'; }
function circle(c, x, y, r, color) { c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); fill(c, color); c.fill(); }
function roundRect(c, x, y, w, h, r, color) { c.beginPath(); c.roundRect(x, y, w, h, r); fill(c, color); c.fill(); }
function line(c, points, color, width = 4) { c.beginPath(); c.moveTo(...points[0]); points.slice(1).forEach(p => c.lineTo(...p)); stroke(c, color, width); c.stroke(); }
function text(c, value, x, y, size = 38, color = colors.dark, align = 'center') {
  c.font = `800 ${size}px "Trebuchet MS", Arial, sans-serif`;
  c.textAlign = align; c.textBaseline = 'middle'; fill(c, color); c.fillText(value, x, y);
}
function leaf(c, x, y, angle, color, scale = 1) {
  c.save(); c.translate(x, y); c.rotate(angle);
  c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(-28 * scale, -29 * scale, 0, -57 * scale); c.quadraticCurveTo(27 * scale, -24 * scale, 0, 0);
  fill(c, color); c.fill(); c.restore();
}
function book(c, x, y, scale = 1) {
  c.save(); c.translate(x, y); c.scale(scale, scale);
  c.beginPath(); c.moveTo(0, 18); c.quadraticCurveTo(-58, -15, -120, 6); c.lineTo(-120, 72); c.quadraticCurveTo(-55, 55, 0, 88); c.quadraticCurveTo(55, 55, 120, 72); c.lineTo(120, 6); c.quadraticCurveTo(58, -15, 0, 18);
  fill(c, colors.cream); c.fill(); stroke(c, colors.dark, 5); c.stroke();
  line(c, [[0, 18], [0, 87]], colors.coral, 5);
  c.restore();
}
function arrow(c, x, y, angle, color = colors.coral, scale = 1) {
  c.save(); c.translate(x, y); c.rotate(angle); c.scale(scale, scale);
  line(c, [[-38, 0], [30, 0]], color, 8);
  line(c, [[12, -17], [31, 0], [12, 17]], color, 8);
  c.restore();
}

function icon(c, kind, x, y, scale = 1, color = colors.dark) {
  c.save(); c.translate(x, y); c.scale(scale, scale);
  if (kind === 'book') {
    book(c, 0, -34, .29);
  } else if (kind === 'sprout') {
    line(c, [[0, 34], [0, -19]], color, 8);
    leaf(c, -16, 1, -.7, colors.mint, .55);
    leaf(c, 18, -6, .7, '#8ecaa1', .55);
    line(c, [[-28, 35], [29, 35]], color, 6);
  } else if (kind === 'globe') {
    circle(c, 0, 0, 37, '#e9f5ec');
    c.beginPath(); c.arc(0, 0, 37, 0, Math.PI * 2); stroke(c, color, 5); c.stroke();
    c.beginPath(); c.ellipse(0, 0, 15, 37, 0, 0, Math.PI * 2); stroke(c, color, 4); c.stroke();
    line(c, [[-36, 0], [36, 0]], color, 4);
  } else if (kind === 'pencil') {
    c.rotate(-.6);
    roundRect(c, -10, -38, 20, 68, 4, colors.yellow);
    line(c, [[-10, -24], [10, -24]], color, 3);
    c.beginPath(); c.moveTo(-10, 30); c.lineTo(0, 46); c.lineTo(10, 30); c.closePath(); fill(c, '#e8a881'); c.fill();
  } else if (kind === 'gear') {
    for (let i = 0; i < 8; i++) {
      c.save(); c.rotate(i * Math.PI / 4); roundRect(c, -6, -45, 12, 24, 2, color); c.restore();
    }
    circle(c, 0, 0, 31, color); circle(c, 0, 0, 14, '#fff9e9');
  } else if (kind === 'target') {
    [38, 26, 12].forEach((r, i) => { c.beginPath(); c.arc(0, 0, r, 0, Math.PI * 2); stroke(c, i === 2 ? colors.coral : color, 5); c.stroke(); });
  } else if (kind === 'shield') {
    c.beginPath(); c.moveTo(0, -43); c.lineTo(34, -27); c.lineTo(29, 19); c.quadraticCurveTo(18, 36, 0, 45); c.quadraticCurveTo(-18, 36, -29, 19); c.lineTo(-34, -27); c.closePath(); fill(c, '#f7e1ba'); c.fill(); stroke(c, color, 5); c.stroke();
    line(c, [[-16, 0], [-3, 13], [19, -14]], colors.mint, 7);
  } else if (kind === 'light') {
    circle(c, 0, -13, 27, '#ffe3a2');
    c.beginPath(); c.arc(0, -13, 27, Math.PI * 1.1, Math.PI * 1.9); stroke(c, color, 5); c.stroke();
    line(c, [[-13, 13], [-10, 28], [10, 28], [13, 13]], color, 5);
    line(c, [[-10, 37], [10, 37]], color, 5);
  } else if (kind === 'heart') {
    c.beginPath(); c.moveTo(0, 35); c.bezierCurveTo(-52, 6, -42, -34, -14, -30); c.bezierCurveTo(0, -29, 0, -15, 0, -15); c.bezierCurveTo(0, -15, 0, -29, 14, -30); c.bezierCurveTo(42, -34, 52, 6, 0, 35); c.closePath(); fill(c, colors.coral); c.fill();
  } else if (kind === 'magnify') {
    c.beginPath(); c.arc(-8, -10, 25, 0, Math.PI * 2); stroke(c, color, 6); c.stroke();
    line(c, [[10, 9], [39, 39]], color, 8);
  } else if (kind === 'speech') {
    roundRect(c, -39, -32, 78, 57, 18, '#fff9e8');
    c.beginPath(); c.moveTo(-14, 23); c.lineTo(-24, 39); c.lineTo(0, 24); c.closePath(); fill(c, '#fff9e8'); c.fill();
    [-19, 0, 19].forEach(px => circle(c, px, -4, 4, color));
  } else if (kind === 'clock') {
    circle(c, 0, 0, 37, '#fff9e8');
    c.beginPath(); c.arc(0, 0, 37, 0, Math.PI * 2); stroke(c, color, 5); c.stroke();
    line(c, [[0, -24], [0, 0], [17, 11]], color, 5);
  } else if (kind === 'network') {
    [[0, -31], [-31, 22], [31, 22]].forEach(([px, py]) => circle(c, px, py, 13, colors.mint));
    line(c, [[0, -18], [-23, 10]], color, 5); line(c, [[0, -18], [23, 10]], color, 5); line(c, [[-18, 22], [18, 22]], color, 5);
  } else if (kind === 'weave') {
    [-18, 0, 18].forEach((px, i) => {
      c.beginPath(); c.moveTo(px, -30); c.lineTo(px + 16, 0); c.lineTo(px, 30); c.lineTo(px - 16, 0); c.closePath();
      fill(c, [colors.coral, colors.yellow, colors.mint][i]); c.fill();
    });
    line(c, [[-42, -36], [42, -36]], color, 4);
    line(c, [[-42, 36], [42, 36]], color, 4);
  } else if (kind === 'dumbbell') {
    line(c, [[-35, 0], [35, 0]], color, 8);
    roundRect(c, -43, -24, 14, 48, 5, colors.mint);
    roundRect(c, -30, -17, 10, 34, 4, colors.dark);
    roundRect(c, 20, -17, 10, 34, 4, colors.dark);
    roundRect(c, 29, -24, 14, 48, 5, colors.mint);
  }
  c.restore();
}

function drawTheme(c, theme) {
  if (theme === 'cycle') {
    roundRect(c, 52, 104, 222, 265, 28, '#e4f0dd');
    roundRect(c, 366, 104, 222, 265, 28, '#f9e7cf');
    circle(c, 163, 210, 71, '#c3dec9'); circle(c, 477, 210, 71, '#f3cc9c');
    icon(c, 'book', 163, 208, 1.25); icon(c, 'sprout', 477, 207, 1.25);
    text(c, 'VĂN HÓA', 163, 312, 27); text(c, 'CON NGƯỜI', 477, 312, 25);
    arrow(c, 320, 178, 0, colors.coral, .76);
    arrow(c, 320, 283, Math.PI, colors.mint, .76);
    text(c, 'SÁNG TẠO', 320, 123, 16, colors.coral);
    text(c, 'BỒI DƯỠNG', 320, 340, 16, colors.mint);
  } else if (theme === 'scope') {
    const cards = [
      [48, 98, '#f9e6c1', 'globe', 'NGHĨA RỘNG', 'Cách sống'],
      [332, 98, '#d6eadd', 'heart', 'NGHĨA HẸP', 'Tinh thần'],
      [48, 253, '#d6e9ed', 'book', 'GIÁO DỤC', 'Học và đọc'],
      [332, 253, '#f5ded0', 'gear', 'CÔNG CỤ', 'Cách sử dụng'],
    ];
    cards.forEach(([x, y, bg, symbol, label, detail]) => {
      roundRect(c, x, y, 260, 132, 22, bg);
      circle(c, x + 62, y + 65, 49, '#fff9e9');
      icon(c, symbol, x + 62, y + 65, .72);
      text(c, label, x + 125, y + 52, 23, colors.dark, 'left');
      text(c, detail, x + 125, y + 82, 20, colors.ink, 'left');
    });
  } else if (theme === 'roots') {
    roundRect(c, 48, 101, 544, 250, 28, '#e5eee0');
    line(c, [[320, 326], [320, 213]], '#916d53', 23);
    line(c, [[320, 253], [251, 199]], '#916d53', 11);
    line(c, [[320, 249], [390, 189]], '#916d53', 11);
    [[237, 192, '#8fc5a4'], [285, 158, '#acd4b2'], [348, 158, '#badca9'], [404, 192, '#8fc5a4']].forEach(([x, y, color]) => circle(c, x, y, 46, color));
    line(c, [[320, 328], [269, 359], [217, 359]], '#916d53', 8);
    line(c, [[320, 328], [371, 359], [423, 359]], '#916d53', 8);
    roundRect(c, 61, 215, 172, 61, 18, '#fff9e9'); text(c, 'BẢN SẮC', 147, 246, 24);
    roundRect(c, 408, 215, 172, 61, 18, '#fff9e9'); text(c, 'TINH HOA', 494, 246, 24);
    text(c, 'CHÍNH TRỊ  •  KINH TẾ  •  XÃ HỘI', 320, 389, 22);
  } else if (theme === 'roles') {
    const cards = [
      [45, 94, '#f9e3b9', 'target', 'MỤC TIÊU', 'Đời sống tốt đẹp'],
      [328, 94, '#d4e9dd', 'light', 'ĐỘNG LỰC', 'Tri thức · sáng tạo'],
      [45, 251, '#d3e8ec', 'shield', 'MẶT TRẬN', 'Bồi đắp cái tốt'],
      [328, 251, '#f5ddd2', 'heart', 'VÌ NHÂN DÂN', 'Từ đời sống mà ra'],
    ];
    cards.forEach(([x, y, bg, symbol, label, detail]) => {
      roundRect(c, x, y, 267, 137, 22, bg);
      circle(c, x + 65, y + 67, 48, '#fff9e9');
      icon(c, symbol, x + 65, y + 67, .73);
      text(c, label, x + 128, y + 54, 22, colors.dark, 'left');
      text(c, detail, x + 128, y + 85, 16, colors.ink, 'left');
    });
  } else if (theme === 'three') {
    const columns = [
      [49, '#f5ded1', 'weave', 'DÂN TỘC', 'Bản sắc · tự chủ'],
      [242, '#d4e8ec', 'magnify', 'KHOA HỌC', 'Tiến bộ · lý lẽ'],
      [435, '#e0ebd0', 'book', 'ĐẠI CHÚNG', 'Dễ tiếp cận'],
    ];
    columns.forEach(([x, bg, symbol, label, detail]) => {
      roundRect(c, x, 104, 156, 267, 27, bg);
      circle(c, x + 78, 191, 63, '#fff9e9');
      icon(c, symbol, x + 78, 190, 1.06);
      text(c, label, x + 78, 287, 22);
      text(c, detail, x + 78, 328, 15, colors.ink);
    });
    line(c, [[90, 391], [550, 391]], colors.dark, 5);
  } else if (theme === 'whole') {
    roundRect(c, 47, 100, 546, 258, 30, '#e2eddf');
    line(c, [[320, 181], [195, 275], [445, 275], [320, 181]], '#82b69e', 9);
    [[320, 169, '#cfe5ed', 'TRÍ', 'book'], [195, 284, '#f5ded0', 'TÂM', 'heart'], [445, 284, '#e4e9bb', 'THỂ', 'dumbbell']].forEach(([x, y, bg, label, symbol]) => {
      circle(c, x, y, 77, bg); circle(c, x, y - 18, 35, '#fff9e9');
      icon(c, symbol, x, y - 18, .55);
      text(c, label, x, y + 39, 26);
    });
    text(c, 'GIA ĐÌNH  ·  CỘNG ĐỒNG  ·  XÃ HỘI', 320, 391, 20);
  } else if (theme === 'people') {
    roundRect(c, 52, 112, 225, 253, 28, '#f7e5cd');
    roundRect(c, 363, 112, 225, 253, 28, '#d9eadd');
    circle(c, 164, 209, 65, '#fff9e9'); icon(c, 'heart', 164, 209, 1.13);
    circle(c, 476, 209, 65, '#fff9e9'); icon(c, 'gear', 476, 209, 1.04);
    text(c, 'MỤC TIÊU', 164, 306, 25); text(c, 'ĐỘNG LỰC', 476, 306, 25);
    arrow(c, 320, 185, 0, colors.coral, .76); arrow(c, 320, 280, Math.PI, colors.mint, .76);
    text(c, 'VÌ CON NGƯỜI  ⇄  BẰNG SỨC NGƯỜI', 320, 391, 24);
  } else if (theme === 'planting') {
    const habits = [
      [48, 102, '#d7e9eb', 'book', ['HỌC CÓ NGUỒN']],
      [330, 102, '#f6e5c2', 'speech', ['NÓI CÓ', 'TRÁCH NHIỆM']],
      [48, 251, '#f6ded4', 'clock', ['LÀM CÓ', 'KỶ LUẬT']],
      [330, 251, '#dcebd6', 'network', ['VÌ CỘNG ĐỒNG']],
    ];
    habits.forEach(([x, y, bg, symbol, lines]) => {
      roundRect(c, x, y, 261, 133, 22, bg);
      circle(c, x + 60, y + 65, 47, '#fff9e9');
      icon(c, symbol, x + 60, y + 65, .7);
      lines.forEach((label, i) => text(c, label, x + 119, y + 67 + (i - (lines.length - 1) / 2) * 24, 18, colors.dark, 'left'));
    });
    text(c, 'HỒNG + CHUYÊN  ·  BẮT ĐẦU TỪ VIỆC NHỎ', 320, 402, 20);
  }
}

function makePainting(lesson) {
  const canvas = document.createElement('canvas'); canvas.width = 640; canvas.height = 480;
  const c = canvas.getContext('2d');
  const background = c.createLinearGradient(0, 0, 640, 480);
  background.addColorStop(0, '#f5edcf'); background.addColorStop(1, '#c9e4d3');
  fill(c, background); c.fillRect(0, 0, 640, 480);
  circle(c, 584, 43, 108, '#fff8e2'); circle(c, 76, 437, 108, '#d7ebdf');
  roundRect(c, 25, 19, 226, 42, 21, '#fff9e9');
  text(c, `SƠ ĐỒ TỪ SLIDE ${lesson.slide}`, 138, 40, 18, colors.dark);
  text(c, 'HCM202', 579, 40, 18, colors.ink);
  drawTheme(c, lesson.theme);
  fill(c, '#3f7974'); c.fillRect(0, 416, 640, 64);
  fill(c, '#f1c46a'); c.fillRect(0, 416, 640, 6);
  c.font = '800 29px "Trebuchet MS", Arial, sans-serif';
  c.textAlign = 'center'; c.textBaseline = 'middle'; fill(c, '#fff9e7');
  c.fillText(lesson.title.toUpperCase(), 320, 450, 590);
  c.globalAlpha = .08;
  for (let i = 0; i < 900; i++) { fill(c, i % 2 ? '#fff' : colors.dark); c.fillRect((i * 193 + 41) % 640, (i * 137 + 29) % 480, 2, 2); }
  c.globalAlpha = 1;
  return canvas;
}

export const artworks = lessons.map(lesson => ({ ...lesson, canvas: makePainting(lesson) }));
