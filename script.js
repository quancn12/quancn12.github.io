const exercises = [
  {
    id: 'bai-1',
    order: 'Bài 1',
    source: 'Bài tập 1 - mục 1.4',
    title: 'Thao tác cơ bản với tệp tin và thư mục',
    doc: 'assets/docs/baitap1_muc14.docx',
    cover: 'assets/images/bai1_muc14/05.png',
    summary:
      'Thực hành tạo thư mục, tạo và đổi tên tệp, sao chép, di chuyển, xóa, xóa vĩnh viễn và khôi phục tệp trong Recycle Bin.',
    highlights: [
      'Mở File Explorer và làm việc với ổ đĩa D.',
      'Tạo thư mục ThucHanh_tensinhvien và thư mục con TaiLieu.',
      'Đặt quy tắc tên tệp để dễ quản lý như GhiChuQuanTrong.txt và DiChuyen.txt.',
      'Minh chứng bằng chuỗi ảnh chụp các thao tác trên Windows.'
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
    id: 'bai-2',
    order: 'Bài 2',
    source: 'Bài tập 2 - mục 2.4',
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    doc: 'assets/docs/baitap2_muc24.docx',
    cover: 'assets/images/assignment.png',
    summary:
      'Báo cáo tìm kiếm tài liệu về tối ưu thuật toán hồi quy logistic trong Học Máy, kèm danh mục nguồn và bảng đánh giá độ tin cậy.',
    highlights: [
      'Chủ đề: tối ưu hồi quy logistic trong Machine Learning.',
      'Kết hợp nguồn học thuật, sách chuyên khảo, tài liệu scikit-learn, TensorFlow và nguồn mở.',
      'Đánh giá nguồn theo tác giả, cơ quan xuất bản, phương pháp, trích dẫn và tính cập nhật.',
      'Kết luận nhấn mạnh việc kết hợp lý thuyết nền tảng với thực hành bằng công cụ.'
    ],
    images: []
  },
  {
    id: 'bai-3',
    order: 'Bài 3',
    source: 'Bài tập 2 - mục 3.4',
    title: 'Viết Prompt hiệu quả cho tác vụ học tập',
    doc: 'assets/docs/baitap2_muc34.docx',
    cover: 'assets/images/bai3_muc34/01.png',
    summary:
      'So sánh prompt cơ bản, prompt cải tiến và prompt nâng cao cho các tác vụ tóm tắt tài liệu, giải thích khái niệm và tạo câu hỏi ôn tập.',
    highlights: [
      'Thiết lập vai trò cho AI như giáo sư, giáo viên hoặc nhà nghiên cứu.',
      'Chia nhỏ yêu cầu theo bước để câu trả lời có cấu trúc hơn.',
      'Đặt giới hạn đầu ra, đối tượng người học và tiêu chí đánh giá.',
      'Rút ra rằng prompt càng cụ thể thì kết quả càng gần mục đích học tập.'
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
    id: 'bai-4',
    order: 'Bài 4',
    source: 'Bài tập 3 - mục 4.4',
    title: 'Hợp tác trực tuyến và quản lý dự án nhóm',
    doc: 'assets/docs/baitap3_muc44.docx',
    cover: 'assets/images/bai4_muc44/01.png',
    summary:
      'Báo cáo cá nhân về dự án Field Trip, sử dụng Trello, Google Docs, Google Drive và Zalo để phối hợp công việc.',
    highlights: [
      'Trello dùng để lập timeline, gắn thành viên, tạo checklist và deadline.',
      'Google Docs hỗ trợ cùng soạn thảo và theo dõi lịch sử phiên bản.',
      'Google Drive được tổ chức theo thư mục Field_Trip, Cá nhân, Kế hoạch và Nội dung.',
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
    id: 'bai-5',
    order: 'Bài 5',
    source: 'Bài tập 2 - mục 5.4',
    title: 'Sử dụng AI tạo sinh để sáng tạo nội dung số',
    doc: 'assets/docs/baitap2_muc54.docx',
    cover: 'assets/images/bai5_muc54/03.png',
    summary:
      'Dự án blog "5 Cách AI Đang Thay Đổi Việc Học Của Sinh Viên", kết hợp Claude, Bing Image Creator và Canva AI.',
    highlights: [
      'Claude hỗ trợ lên dàn bài, viết nháp, tạo tiêu đề và chỉnh giọng văn.',
      'Bing Image Creator tạo thumbnail và ảnh minh họa theo phong cách xanh trắng.',
      'Canva AI hỗ trợ thiết kế banner, tagline và infographic tóm tắt.',
      'Nội dung cuối cùng được chỉnh sửa lại bằng trải nghiệm cá nhân và đặt câu hỏi phản biện.'
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
    id: 'bai-6',
    order: 'Bài 6',
    source: 'Bài tập 4 - mục 6.4',
    title: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
    doc: 'assets/docs/baitap4_muc64.docx',
    cover: 'assets/images/bai6_muc64/01.png',
    summary:
      'Nghiên cứu chính sách, thực hành một nhiệm vụ học tập với AI và xây dựng bộ nguyên tắc cá nhân về sử dụng AI minh bạch.',
    highlights: [
      'So sánh chính sách AI giữa ĐHQGHN/UET, ĐH Bách Khoa HN, MIT và NUS.',
      'Ghi lại prompt dùng cho bài luận về biến đổi khí hậu và an ninh lương thực.',
      'Kiểm chứng lại số liệu AI cung cấp bằng nguồn đáng tin cậy.',
      'Đề xuất nguyên tắc: tư duy trước, kiểm chứng, khai báo, viết lại bằng giọng của mình.'
    ],
    images: ['assets/images/bai6_muc64/01.png']
  }
];

const projectGrid = document.querySelector('#project-grid');
const detailsRoot = document.querySelector('#exercise-details');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('#main-nav');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
const closeLightboxButton = lightbox.querySelector('.lightbox-close');

function renderProjectCards() {
  projectGrid.innerHTML = exercises
    .map(
      (exercise) => `
        <article class="project-card">
          <img src="${exercise.cover}" alt="Minh chung ${exercise.order}" loading="lazy">
          <div class="project-card-content">
            <span class="project-meta">${exercise.source}</span>
            <h3>${exercise.title}</h3>
            <p>${exercise.summary}</p>
            <div class="project-links">
              <a class="text-link" href="#${exercise.id}">Xem chi tiết</a>
              <a class="text-link" href="${exercise.doc}">Tải file Word</a>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderDetails() {
  detailsRoot.innerHTML = exercises
    .map((exercise) => {
      const gallery =
        exercise.images.length > 0
          ? `<div class="gallery">
              ${exercise.images
                .map(
                  (src, index) => `
                    <button type="button" data-image="${src}" data-caption="${exercise.order} - Ảnh minh chứng ${index + 1}">
                      <img src="${src}" alt="${exercise.order} ảnh minh chứng ${index + 1}" loading="lazy">
                    </button>
                  `
                )
                .join('')}
            </div>`
          : `<div class="empty-gallery">File Word của bài này không có ảnh nhúng, phần minh chứng nằm trong bảng đánh giá và nội dung báo cáo.</div>`;

      return `
        <article class="exercise-detail" id="${exercise.id}">
          <div>
            <span class="detail-label">${exercise.source}</span>
            <h3>${exercise.order}. ${exercise.title}</h3>
            <p>${exercise.summary}</p>
            <ul class="detail-list">
              ${exercise.highlights.map((item) => `<li>${item}</li>`).join('')}
            </ul>
            <a class="button" href="${exercise.doc}">Tải bài làm Word</a>
          </div>
          <div>
            ${gallery}
          </div>
        </article>
      `;
    })
    .join('');
}

function openLightbox(src, caption) {
  lightboxImage.src = src;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
}

renderProjectCards();
renderDetails();

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

detailsRoot.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-image]');
  if (!button) return;
  openLightbox(button.dataset.image, button.dataset.caption);
});

closeLightboxButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
    closeLightbox();
  }
});
