const works = [
  {
    id: 1,
    title: 'Thao tác cơ bản với tệp tin và thư mục',
    source: 'Bài tập 1 · Mục 1.4',
    doc: 'assets/docs/baitap1_muc14.docx',
    cover: 'assets/images/bai1_muc14/05.png',
    summary:
      'Thực hành tạo thư mục, đặt tên tệp theo quy tắc, sao chép, di chuyển, xóa và khôi phục tệp trong Recycle Bin — toàn bộ trên hệ điều hành Windows.',
    highlights: [
      'Mở File Explorer, điều hướng trong ổ đĩa D và tạo cây thư mục ThucHanh.',
      'Đặt quy tắc đặt tên nhất quán: GhiChuQuanTrong.txt, DiChuyen.txt…',
      'Thực hành copy, cut, paste, rename, delete và restore từ Recycle Bin.',
      'Ghi lại toàn bộ quá trình bằng chuỗi ảnh chụp màn hình minh chứng.'
    ],
    images: [
      'assets/images/bai1_muc14/03.png',
      'assets/images/bai1_muc14/05.png',
      'assets/images/bai1_muc14/07.png',
      'assets/images/bai1_muc14/08.png',
      'assets/images/bai1_muc14/09.png',
      'assets/images/bai1_muc14/10.png',
      'assets/images/bai1_muc14/11.png',
      'assets/images/bai1_muc14/12.png',
      'assets/images/bai1_muc14/13.png',
      'assets/images/bai1_muc14/15.png',
      'assets/images/bai1_muc14/16.png',
      'assets/images/bai1_muc14/17.png'
    ]
  },
  {
    id: 2,
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    source: 'Bài tập 2 · Mục 2.4',
    doc: 'assets/docs/baitap2_muc24.docx',
    cover: null,
    summary:
      'Báo cáo tìm kiếm tài liệu về tối ưu thuật toán hồi quy logistic trong Học Máy, kèm danh mục nguồn và bảng đánh giá độ tin cậy.',
    highlights: [
      'Chủ đề: tối ưu hồi quy logistic trong Machine Learning.',
      'Kết hợp nguồn học thuật, sách, tài liệu scikit-learn, TensorFlow và mã nguồn mở.',
      'Đánh giá nguồn theo tác giả, cơ quan xuất bản, phương pháp và tính cập nhật.',
      'Kết luận nhấn mạnh tầm quan trọng của việc kết hợp lý thuyết với thực hành.'
    ],
    images: []
  },
  {
    id: 3,
    title: 'Viết Prompt hiệu quả cho tác vụ học tập',
    source: 'Bài tập 2 · Mục 3.4',
    doc: 'assets/docs/baitap2_muc34.docx',
    cover: 'assets/images/bai3_muc34/01.png',
    summary:
      'So sánh prompt cơ bản, prompt cải tiến và prompt nâng cao cho tác vụ tóm tắt tài liệu, giải thích khái niệm và tạo câu hỏi ôn tập.',
    highlights: [
      'Thiết lập vai trò cho AI: giáo sư, gia sư hoặc nhà nghiên cứu.',
      'Chia nhỏ yêu cầu theo bước để câu trả lời có cấu trúc hơn.',
      'Đặt giới hạn đầu ra, xác định đối tượng người học và tiêu chí đánh giá.',
      'Kết luận: prompt càng cụ thể thì kết quả càng sát mục đích học tập.'
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
    title: 'Hợp tác trực tuyến và quản lý dự án nhóm',
    source: 'Bài tập 3 · Mục 4.4',
    doc: 'assets/docs/baitap3_muc44.docx',
    cover: 'assets/images/bai4_muc44/01.png',
    summary:
      'Báo cáo cá nhân về dự án Field Trip — sử dụng Trello, Google Docs, Google Drive và Zalo để phối hợp và theo dõi tiến độ nhóm.',
    highlights: [
      'Trello: tạo timeline, gắn thành viên, checklist và deadline cho từng task.',
      'Google Docs: cùng soạn thảo và theo dõi lịch sử chỉnh sửa theo thời gian thực.',
      'Google Drive: tổ chức thư mục Field_Trip / Cá nhân / Kế hoạch / Nội dung.',
      'Phân tích thách thức về kỹ thuật, tương tác nhóm và quản lý thời gian.'
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
    title: 'Sử dụng AI tạo sinh để sáng tạo nội dung số',
    source: 'Bài tập 2 · Mục 5.4',
    doc: 'assets/docs/baitap2_muc54.docx',
    cover: 'assets/images/bai5_muc54/03.png',
    summary:
      'Xây dựng blog "5 Cách AI Đang Thay Đổi Việc Học Của Sinh Viên", kết hợp Claude, Bing Image Creator và Canva AI để tạo nội dung hoàn chỉnh.',
    highlights: [
      'Claude: lên dàn bài, viết nháp, đặt tiêu đề và chỉnh giọng văn phù hợp đối tượng.',
      'Bing Image Creator: tạo thumbnail và ảnh minh họa theo phong cách xanh – trắng.',
      'Canva AI: thiết kế banner, tagline và infographic tóm tắt bài viết.',
      'Nội dung cuối được chỉnh sửa lại bằng trải nghiệm cá nhân và tư duy phản biện.'
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
    title: 'Sử dụng AI có trách nhiệm trong học tập',
    source: 'Bài tập 4 · Mục 6.4',
    doc: 'assets/docs/baitap4_muc64.docx',
    cover: 'assets/images/bai6_muc64/01.png',
    summary:
      'Nghiên cứu chính sách AI tại các trường đại học, thực hành với AI có ghi chép prompt và xây dựng bộ nguyên tắc sử dụng AI minh bạch của cá nhân.',
    highlights: [
      'So sánh chính sách AI giữa ĐHQGHN/UET, Bách Khoa HN, MIT và NUS.',
      'Ghi lại toàn bộ prompt dùng cho bài luận về biến đổi khí hậu và an ninh lương thực.',
      'Kiểm chứng lại số liệu AI cung cấp bằng nguồn đáng tin cậy.',
      'Bộ nguyên tắc cá nhân: tư duy trước, kiểm chứng, khai báo, viết lại bằng giọng riêng.'
    ],
    images: ['assets/images/bai6_muc64/01.png']
  }
];

/* ── EMOJI fallback khi không có ảnh ── */
const EMOJI_MAP = ['📁', '🔍', '🤖', '🤝', '✨', '⚖️'];

/* ── Render cards ── */
const worksGrid = document.getElementById('works-grid');

worksGrid.innerHTML = works.map((w, i) => {
  const thumb = w.cover
    ? `<img class="work-thumb" src="${w.cover}" alt="${w.title}" loading="lazy">`
    : `<div class="work-thumb-placeholder">${EMOJI_MAP[i] || '📄'}</div>`;

  const imgCount = w.images.length > 0
    ? `${w.images.length} ảnh minh chứng`
    : 'Xem file Word';

  return `
    <article class="work-card" data-id="${w.id}" tabindex="0" role="button" aria-label="Mở ${w.title}">
      ${thumb}
      <div class="work-body">
        <p class="work-num">${w.source}</p>
        <h3 class="work-title">${w.title}</h3>
        <p class="work-summary">${w.summary}</p>
        <div class="work-footer">
          <span class="work-img-count">${imgCount}</span>
          <span class="work-arrow">→</span>
        </div>
      </div>
    </article>
  `;
}).join('');

/* ── Modal logic ── */
const modal       = document.getElementById('modal');
const modalClose  = document.getElementById('modal-close');
const modalLabel  = document.getElementById('modal-label');
const modalTitle  = document.getElementById('modal-title');
const modalSummary    = document.getElementById('modal-summary');
const modalHighlights = document.getElementById('modal-highlights');
const modalDownload   = document.getElementById('modal-download');
const modalGallery    = document.getElementById('modal-gallery');
const modalNoImg      = document.getElementById('modal-no-img');
const galleryImg      = document.getElementById('gallery-img');
const galleryPrev     = document.getElementById('gallery-prev');
const galleryNext     = document.getElementById('gallery-next');
const galleryCounter  = document.getElementById('gallery-counter');
const galleryThumbs   = document.getElementById('gallery-thumbs');

let currentImages = [];
let currentIndex  = 0;

function showImage(index) {
  if (!currentImages.length) return;
  currentIndex = Math.max(0, Math.min(index, currentImages.length - 1));
  galleryImg.src = currentImages[currentIndex];
  galleryImg.alt = `Ảnh minh chứng ${currentIndex + 1}`;
  galleryCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
  galleryPrev.disabled = currentIndex === 0;
  galleryNext.disabled = currentIndex === currentImages.length - 1;

  // update active thumb
  galleryThumbs.querySelectorAll('button').forEach((btn, i) => {
    btn.classList.toggle('active', i === currentIndex);
  });
  // scroll thumb into view
  const activeThumb = galleryThumbs.children[currentIndex];
  if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
}

function openModal(id) {
  const work = works.find(w => w.id === id);
  if (!work) return;

  modalLabel.textContent = work.source;
  modalTitle.textContent = work.title;
  modalSummary.textContent = work.summary;
  modalHighlights.innerHTML = work.highlights.map(h => `<li>${h}</li>`).join('');
  modalDownload.href = work.doc;

  currentImages = work.images;

  if (currentImages.length > 0) {
    modalGallery.style.display = '';
    modalNoImg.style.display = 'none';

    // build thumbnails
    galleryThumbs.innerHTML = currentImages.map((src, i) => `
      <button data-index="${i}">
        <img src="${src}" alt="Thumb ${i + 1}" loading="lazy">
      </button>
    `).join('');

    showImage(0);
  } else {
    modalGallery.style.display = 'none';
    modalNoImg.style.display = '';
  }

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ── Events: open cards ── */
worksGrid.addEventListener('click', e => {
  const card = e.target.closest('.work-card');
  if (card) openModal(Number(card.dataset.id));
});
worksGrid.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    const card = e.target.closest('.work-card');
    if (card) { e.preventDefault(); openModal(Number(card.dataset.id)); }
  }
});

/* ── Events: gallery nav ── */
galleryPrev.addEventListener('click', () => showImage(currentIndex - 1));
galleryNext.addEventListener('click', () => showImage(currentIndex + 1));
galleryThumbs.addEventListener('click', e => {
  const btn = e.target.closest('button[data-index]');
  if (btn) showImage(Number(btn.dataset.index));
});

/* ── Events: close modal ── */
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft')  showImage(currentIndex - 1);
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
});

/* ── Mobile nav toggle ── */
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
});
mainNav.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
