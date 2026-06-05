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
      'Minh chứng bằng 12 trang tài liệu chi tiết từng bước thao tác'
    ],
    pages: 12, folder: 'bai1_muc14'
  },
  {
    id: 2,
    source: 'Bài tập 2 · Mục 2.4',
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    doc: 'assets/docs/baitap2_muc24.docx',
    summary: 'Báo cáo tìm kiếm tài liệu về tối ưu thuật toán hồi quy logistic trong Học Máy, kèm danh mục nguồn và bảng đánh giá độ tin cậy.',
    highlights: [
      'Chủ đề: tối ưu hồi quy logistic trong Machine Learning',
      'Kết hợp nguồn học thuật, sách chuyên khảo, tài liệu scikit-learn và TensorFlow',
      'Đánh giá từng nguồn theo tác giả, cơ quan xuất bản, phương pháp và tính cập nhật',
      'Kết luận về tầm quan trọng của việc kết hợp lý thuyết nền tảng với thực hành'
    ],
    pages: 4, folder: 'bai2_muc24'
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
    pages: 9, folder: 'bai3_muc34'
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
    pages: 6, folder: 'bai4_muc44'
  },
  {
    id: 5,
    source: 'Bài tập 2 · Mục 5.4',
    title: 'Sáng tạo nội dung số với AI tạo sinh',
    doc: 'assets/docs/baitap2_muc54.docx',
    summary: 'Xây dựng blog “5 Cách AI Đang Thay Đổi Việc Học Của Sinh Viên” kết hợp Claude, Bing Image Creator và Canva AI để tạo nội dung hoàn chỉnh.',
    highlights: [
      'Claude: lên dàn bài, viết nháp, đặt tiêu đề và chỉnh giọng văn phù hợp đối tượng',
      'Bing Image Creator: tạo thumbnail và ảnh minh họa phong cách xanh – trắng',
      'Canva AI: thiết kế banner, tagline và infographic tóm tắt bài viết',
      'Nội dung cuối được chỉnh sửa lại bằng trải nghiệm cá nhân và tư duy phản biện'
    ],
    pages: 14, folder: 'bai5_muc54'
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
    pages: 7, folder: 'bai6_muc64'
  }
];


const list = document.getElementById('work-list');
list.innerHTML = works.map((w, i) =>
  '<div class="work-item" id="item-' + w.id + '">' +
    '<div class="work-trigger" data-id="' + w.id + '">' +
      '<div class="work-num">0' + (i+1) + '</div>' +
      '<div class="work-info">' +
        '<div class="work-source">' + w.source + '</div>' +
        '<div class="work-name">' + w.title + '</div>' +
        '<div class="work-desc">' + w.summary + '</div>' +
      '</div>' +
      '<div class="work-meta">' +
        '<span class="work-img-badge">📄 Word</span>' +
        '<button class="work-open-btn">&rarr;</button>' +
      '</div>' +
    '</div>' +
  '</div>'
).join('');

list.addEventListener('click', e => {
  const trigger = e.target.closest('.work-trigger');
  if (trigger) openDoc(Number(trigger.dataset.id));
});

const docPage     = document.getElementById('doc-page');
const docBack     = document.getElementById('doc-back');
const docSource   = document.getElementById('doc-source');
const docDl       = document.getElementById('doc-dl');
const docLabel    = document.getElementById('doc-label');
const docTitle    = document.getElementById('doc-title');
const docSummary  = document.getElementById('doc-summary');
const docSteps    = document.getElementById('doc-steps');
const docImages   = document.getElementById('doc-images');
const docEmpty    = document.getElementById('doc-empty');
const docEmptyDl  = document.getElementById('doc-empty-dl');
const docFooterDl = document.getElementById('doc-footer-dl');

const docRenderLoading = document.getElementById('doc-render-loading');
const docRender        = document.getElementById('doc-render');

async function openDoc(id) {
  const w = works.find(x => x.id === id);
  if (!w) return;

  // Điền thông tin header
  docSource.textContent  = w.source;
  docDl.href             = w.doc;
  docLabel.textContent   = w.source;
  docTitle.textContent   = w.title;
  docSummary.textContent = w.summary;
  docFooterDl.href       = w.doc;
  docEmptyDl.href        = w.doc;

  docSteps.innerHTML = '<p class="doc-steps-title">Nội dung thực hiện</p>' +
    w.highlights.map((h, i) =>
      '<div class="doc-step">' +
        '<div class="doc-step-num">' + (i+1) + '</div>' +
        '<div class="doc-step-text">' + h + '</div>' +
      '</div>'
    ).join('');

  // Reset trạng thái
  docImages.style.display        = 'none';
  docEmpty.style.display         = 'none';
  docRender.style.display        = 'none';
  docRender.innerHTML            = '';
  docRenderLoading.style.display = 'flex';

  // Mở overlay
  docPage.classList.add('open');
  docPage.setAttribute('aria-hidden', 'false');
  docPage.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  // Fetch file Word rồi render bằng mammoth
  try {
    const res = await fetch(w.doc);
    if (!res.ok) throw new Error('Không tải được file (' + res.status + ')');
    const buf = await res.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer: buf });
    docRender.innerHTML            = result.value;
    docRenderLoading.style.display = 'none';
    docRender.style.display        = 'block';
  } catch (err) {
    console.error('[openDoc]', err);
    docRenderLoading.style.display = 'none';
    docEmpty.style.display         = 'block';
    document.querySelector('#doc-empty p').textContent =
      'Không thể tải tài liệu: ' + (err.message || 'lỗi không xác định');
  }
}

function closeDoc() {
  docPage.classList.remove('open');
  docPage.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

docBack.addEventListener('click', closeDoc);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && docPage.classList.contains('open')) closeDoc();
});

/* ── ANIMATED COUNTER khi scroll đến Tổng kết ── */
const counters = document.querySelectorAll('.rs-num[data-target]');
if (counters.length) {
  const countObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      const duration = 1200;
      const step = Math.ceil(target / (duration / 16));
      let cur = 0;
      const tick = () => {
        cur = Math.min(cur + step, target);
        el.textContent = cur;
        if (cur < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => countObs.observe(c));
}

const hamburger = document.querySelector('.hamburger');
const navMobile = document.getElementById('nav-mobile');
hamburger.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});
navMobile.addEventListener('click', e => {
  if (e.target.tagName === 'A') navMobile.classList.remove('open');
});
