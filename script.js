const works = [
  {
    id: 1,
    source: 'Bài tập 1 · Mục 1.4',
    title: 'Thao tác cơ bản với tệp tin và thư mục',
    doc: 'assets/docs/baitap1_muc14.docx',
    summary: 'Thực hành tạo thư mục, đặt tên tệp theo quy tắc, sao chép, di chuyển, xóa và khôi phục tệp trong Recycle Bin trên Windows.',
    highlights: [
      'Tạo cây thư mục ThucHanh_tensinhvien và thư mục con TaiLieu trên ổ đĩa D',
      'Áp dụng quy tắc đặt tên nhất quán: GhiChuQuanTrong.txt, DiChuyen.txt…',
      'Thực hành copy, cut, paste, rename, delete và restore từ Recycle Bin',
      'Ghi lại toàn bộ quá trình bằng 17 ảnh chụp màn hình theo thứ tự thao tác'
    ],
    images: [
      'assets/images/bai1_muc14/01.png',
      'assets/images/bai1_muc14/02.png',
      'assets/images/bai1_muc14/03.png',
      'assets/images/bai1_muc14/04.png',
      'assets/images/bai1_muc14/05.png',
      'assets/images/bai1_muc14/06.png',
      'assets/images/bai1_muc14/07.png',
      'assets/images/bai1_muc14/08.png',
      'assets/images/bai1_muc14/09.png',
      'assets/images/bai1_muc14/10.png',
      'assets/images/bai1_muc14/11.png',
      'assets/images/bai1_muc14/12.png',
      'assets/images/bai1_muc14/13.png',
      'assets/images/bai1_muc14/14.png',
      'assets/images/bai1_muc14/15.png',
      'assets/images/bai1_muc14/16.png',
      'assets/images/bai1_muc14/17.png'
    ]
  },
  {
    id: 2,
    source: 'Bài tập 2 · Mục 2.4',
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    doc: 'assets/docs/baitap2_muc24.docx',
    summary: 'Báo cáo tìm kiếm tài liệu về tối ưu thuật toán hồi quy logistic trong Học Máy, kèm danh mục nguồn và bảng đánh giá độ tin cậy theo nhiều tiêu chí.',
    highlights: [
      'Chủ đề: tối ưu hồi quy logistic trong Machine Learning',
      'Kết hợp nguồn học thuật, sách chuyên khảo, tài liệu scikit-learn và TensorFlow',
      'Đánh giá từng nguồn theo tác giả, cơ quan xuất bản, phương pháp và tính cập nhật',
      'Kết luận về tầm quan trọng của việc kết hợp lý thuyết nền tảng với thực hành'
    ],
    images: []
  },
  {
    id: 3,
    source: 'Bài tập 2 · Mục 3.4',
    title: 'Viết Prompt hiệu quả cho tác vụ học tập',
    doc: 'assets/docs/baitap2_muc34.docx',
    summary: 'So sánh 3 cấp độ prompt — cơ bản, cải tiến, nâng cao — cho các tác vụ tóm tắt tài liệu, giải thích khái niệm và tạo câu hỏi ôn tập.',
    highlights: [
      'Thiết lập vai trò cho AI: giáo sư, gia sư hoặc nhà nghiên cứu',
      'Chia nhỏ yêu cầu theo bước để câu trả lời có cấu trúc rõ hơn',
      'Đặt giới hạn đầu ra, xác định đối tượng và tiêu chí đánh giá chất lượng',
      'Kết luận: prompt càng cụ thể thì kết quả càng sát mục đích học tập'
    ],
    images: [
      'assets/images/bai3_muc34/01.png',
      'assets/images/bai3_muc34/02.png',
      'assets/images/bai3_muc34/03.png',
      'assets/images/bai3_muc34/04.png',
      'assets/images/bai3_muc34/05.png',
      'assets/images/bai3_muc34/06.png',
      'assets/images/bai3_muc34/07.png',
      'assets/images/bai3_muc34/08.png',
      'assets/images/bai3_muc34/09.png'
    ]
  },
  {
    id: 4,
    source: 'Bài tập 3 · Mục 4.4',
    title: 'Hợp tác trực tuyến và quản lý dự án nhóm',
    doc: 'assets/docs/baitap3_muc44.docx',
    summary: 'Báo cáo cá nhân về dự án Field Trip — sử dụng Trello, Google Docs, Google Drive và Zalo để phân công, theo dõi tiến độ và phối hợp nhóm.',
    highlights: [
      'Trello: tạo timeline, gắn thành viên, checklist và deadline cho từng task',
      'Google Docs: cùng soạn thảo và theo dõi lịch sử chỉnh sửa theo thời gian thực',
      'Google Drive: tổ chức thư mục Field_Trip / Cá nhân / Kế hoạch / Nội dung',
      'Phân tích thách thức về kỹ thuật, tương tác nhóm và quản lý thời gian'
    ],
    images: [
      'assets/images/bai4_muc44/01.png',
      'assets/images/bai4_muc44/02.png',
      'assets/images/bai4_muc44/03.png',
      'assets/images/bai4_muc44/04.png',
      'assets/images/bai4_muc44/05.png'
    ]
  },
  {
    id: 5,
    source: 'Bài tập 2 · Mục 5.4',
    title: 'Sáng tạo nội dung số với AI tạo sinh',
    doc: 'assets/docs/baitap2_muc54.docx',
    summary: 'Xây dựng blog "5 Cách AI Đang Thay Đổi Việc Học Của Sinh Viên" kết hợp Claude, Bing Image Creator và Canva AI trong toàn bộ quy trình sản xuất.',
    highlights: [
      'Claude: lên dàn bài, viết nháp, đặt tiêu đề và chỉnh giọng văn phù hợp đối tượng',
      'Bing Image Creator: tạo thumbnail và ảnh minh họa phong cách xanh – trắng',
      'Canva AI: thiết kế banner, tagline và infographic tóm tắt bài viết',
      'Nội dung cuối được chỉnh sửa lại bằng trải nghiệm cá nhân và tư duy phản biện'
    ],
    images: [
      'assets/images/bai5_muc54/01.png',
      'assets/images/bai5_muc54/02.png',
      'assets/images/bai5_muc54/03.png',
      'assets/images/bai5_muc54/04.jpeg',
      'assets/images/bai5_muc54/05.png',
      'assets/images/bai5_muc54/06.png',
      'assets/images/bai5_muc54/07.png'
    ]
  },
  {
    id: 6,
    source: 'Bài tập 4 · Mục 6.4',
    title: 'Sử dụng AI có trách nhiệm trong học tập',
    doc: 'assets/docs/baitap4_muc64.docx',
    summary: 'Nghiên cứu chính sách AI tại các trường đại học, thực hành với AI có ghi chép prompt đầy đủ và xây dựng bộ nguyên tắc sử dụng AI minh bạch cá nhân.',
    highlights: [
      'So sánh chính sách AI giữa ĐHQGHN/UET, Bách Khoa HN, MIT và NUS',
      'Ghi lại toàn bộ prompt dùng cho bài luận về biến đổi khí hậu và an ninh lương thực',
      'Kiểm chứng lại số liệu AI cung cấp bằng nguồn đáng tin cậy độc lập',
      'Bộ nguyên tắc cá nhân: tư duy trước – kiểm chứng – khai báo – viết bằng giọng riêng'
    ],
    images: [
      'assets/images/bai6_muc64/01.png'
    ]
  }
];

/* ─── BUILD WORK LIST ─── */
const list = document.getElementById('work-list');

list.innerHTML = works.map((w, i) => {
  const PREVIEW_COUNT = 5;
  const hasImages = w.images.length > 0;

  const thumbsHtml = hasImages
    ? w.images.slice(0, PREVIEW_COUNT).map(src =>
        `<div class="preview-thumb"><img src="${src}" alt="" loading="lazy"></div>`
      ).join('') +
      (w.images.length > PREVIEW_COUNT
        ? `<div class="preview-more" data-id="${w.id}">
             <span>+${w.images.length - PREVIEW_COUNT}</span>
             <span>ảnh nữa</span>
           </div>`
        : '')
    : '';

  const badge = hasImages
    ? `<span class="work-img-badge">${w.images.length} ảnh</span>`
    : `<span class="work-img-badge">Word only</span>`;

  return `
    <div class="work-item" id="item-${w.id}">
      <div class="work-trigger" data-id="${w.id}">
        <div class="work-num">0${i + 1}</div>
        <div class="work-info">
          <div class="work-source">${w.source}</div>
          <div class="work-name">${w.title}</div>
          <div class="work-desc">${w.summary}</div>
        </div>
        <div class="work-meta">
          ${badge}
          <button class="work-open-btn" aria-label="Mở ${w.title}">→</button>
        </div>
      </div>
      ${hasImages ? `
      <div class="work-preview" id="preview-${w.id}">
        <div class="work-preview-inner">
          ${thumbsHtml}
        </div>
        <button class="work-preview-open-btn" data-id="${w.id}">
          Xem toàn bộ bài làm →
        </button>
      </div>` : ''}
    </div>
  `;
}).join('');

/* ─── TOGGLE PREVIEW STRIP ─── */
list.addEventListener('click', e => {
  const trigger = e.target.closest('.work-trigger');
  const openBtn = e.target.closest('.work-preview-open-btn');
  const moreBtn = e.target.closest('.preview-more');
  const openBtnWork = e.target.closest('.work-open-btn');

  if (openBtn || moreBtn) {
    const id = Number((openBtn || moreBtn).dataset.id);
    openModal(id);
    return;
  }

  if (trigger) {
    const id = Number(trigger.dataset.id);
    const preview = document.getElementById(`preview-${id}`);
    if (!preview) { openModal(id); return; }
    const isOpen = preview.classList.toggle('open');
    trigger.querySelector('.work-open-btn').textContent = isOpen ? '↑' : '→';
  }
});

/* ─── MODAL ─── */
const modal      = document.getElementById('modal');
const backdrop   = document.getElementById('modal-backdrop');
const mBadge     = document.getElementById('modal-badge');
const mTopTitle  = document.getElementById('modal-topbar-title');
const mTitle     = document.getElementById('modal-title');
const mSummary   = document.getElementById('modal-summary');
const mHl        = document.getElementById('modal-hl');
const mPages     = document.getElementById('modal-pages');
const mEmpty     = document.getElementById('modal-empty');
const mDl        = document.getElementById('modal-dl');
const mEmptyDl   = document.getElementById('modal-empty-dl');
const mX         = document.getElementById('modal-x');

function openModal(id) {
  const w = works.find(x => x.id === id);
  if (!w) return;

  mBadge.textContent    = w.source;
  mTopTitle.textContent = w.title;
  mTitle.textContent    = w.title;
  mSummary.textContent  = w.summary;
  mDl.href              = w.doc;
  mEmptyDl.href         = w.doc;
  mHl.innerHTML = w.highlights.map(h => `<li>${h}</li>`).join('');

  if (w.images.length > 0) {
    mEmpty.style.display = 'none';
    mPages.style.display = 'flex';
    mPages.innerHTML = w.images.map((src, i) => `
      <div>
        <div class="page-label">Trang ${i + 1} / ${w.images.length}</div>
        <div class="page-img-wrap">
          <img src="${src}" alt="Trang ${i + 1}" loading="lazy">
        </div>
      </div>
    `).join('');
  } else {
    mPages.style.display = 'none';
    mEmpty.style.display = 'block';
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // scroll modal body to top
  document.querySelector('.modal-body').scrollTop = 0;
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

mX.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

/* ─── ZOOM IN on image click ─── */
const zoom = document.createElement('div');
zoom.className = 'zoom-overlay';
zoom.innerHTML = '<button class="zoom-close" aria-label="Đóng">✕</button><img src="" alt="">';
document.body.appendChild(zoom);
const zoomImg = zoom.querySelector('img');

document.getElementById('modal-pages').addEventListener('click', e => {
  const img = e.target.closest('img');
  if (!img) return;
  zoomImg.src = img.src;
  zoom.classList.add('open');
});
zoom.addEventListener('click', e => {
  if (e.target === zoom || e.target.closest('.zoom-close')) {
    zoom.classList.remove('open');
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') zoom.classList.remove('open');
});

/* ─── MOBILE NAV ─── */
const hamburger = document.querySelector('.hamburger');
const navMobile = document.getElementById('nav-mobile');
hamburger.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});
navMobile.addEventListener('click', e => {
  if (e.target.tagName === 'A') navMobile.classList.remove('open');
});
