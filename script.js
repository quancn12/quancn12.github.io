const works = [
  {
    id: 1,
    source: 'Bai tap 1 - Muc 1.4',
    title: 'Thao tac co ban voi tep tin va thu muc',
    doc: 'assets/docs/baitap1_muc14.docx',
    summary: 'Thuc hanh tao thu muc, dat ten tep theo quy tac, sao chep, di chuyen, xoa va khoi phuc tep trong Recycle Bin tren Windows.',
    highlights: [
      'Tao cay thu muc ThucHanh_tensinhvien va thu muc con TaiLieu tren o dia D',
      'Ap dung quy tac dat ten nhat quan: GhiChuQuanTrong.txt, DiChuyen.txt...',
      'Thuc hanh copy, cut, paste, rename, delete va restore tu Recycle Bin',
      'Minh chung bang 12 trang tai lieu chi tiet tung buoc thao tac'
    ],
    pages: 12,
    folder: 'bai1_muc14'
  },
  {
    id: 2,
    source: 'Bai tap 2 - Muc 2.4',
    title: 'Tim kiem va danh gia thong tin hoc thuat',
    doc: 'assets/docs/baitap2_muc24.docx',
    summary: 'Bao cao tim kiem tai lieu ve toi uu thuat toan hoi quy logistic trong Hoc May, kem danh muc nguon va bang danh gia do tin cay.',
    highlights: [
      'Chu de: toi uu hoi quy logistic trong Machine Learning',
      'Ket hop nguon hoc thuat, sach chuyen khao, tai lieu scikit-learn va TensorFlow',
      'Danh gia tung nguon theo tac gia, co quan xuat ban, phuong phap va tinh cap nhat',
      'Ket luan ve tam quan trong cua viec ket hop ly thuyet nen tang voi thuc hanh'
    ],
    pages: 4,
    folder: 'bai2_muc24'
  },
  {
    id: 3,
    source: 'Bai tap 2 - Muc 3.4',
    title: 'Viet Prompt hieu qua cho tac vu hoc tap',
    doc: 'assets/docs/baitap2_muc34.docx',
    summary: 'So sanh 3 cap do prompt - co ban, cai tien, nang cao - cho cac tac vu tom tat tai lieu, giai thich khai niem va tao cau hoi on tap.',
    highlights: [
      'Thiet lap vai tro cho AI: giao su, gia su hoac nha nghien cuu',
      'Chia nho yeu cau theo buoc de cau tra loi co cau truc ro hon',
      'Dat gioi han dau ra, xac dinh doi tuong va tieu chi danh gia chat luong',
      'Ket luan: prompt cang cu the thi ket qua cang sat muc dich hoc tap'
    ],
    pages: 9,
    folder: 'bai3_muc34'
  },
  {
    id: 4,
    source: 'Bai tap 3 - Muc 4.4',
    title: 'Hop tac truc tuyen va quan ly du an nhom',
    doc: 'assets/docs/baitap3_muc44.docx',
    summary: 'Bao cao ca nhan ve du an Field Trip - su dung Trello, Google Docs, Google Drive va Zalo de phan cong, theo doi tien do va phoi hop nhom.',
    highlights: [
      'Trello: tao timeline, gan thanh vien, checklist va deadline cho tung task',
      'Google Docs: cung soan thao va theo doi lich su chinh sua theo thoi gian thuc',
      'Google Drive: to chuc thu muc Field_Trip / Ca nhan / Ke hoach / Noi dung',
      'Phan tich thach thuc ve ky thuat, tuong tac nhom va quan ly thoi gian'
    ],
    pages: 6,
    folder: 'bai4_muc44'
  },
  {
    id: 5,
    source: 'Bai tap 2 - Muc 5.4',
    title: 'Sang tao noi dung so voi AI tao sinh',
    doc: 'assets/docs/baitap2_muc54.docx',
    summary: 'Xay dung blog "5 Cach AI Dang Thay Doi Viec Hoc Cua Sinh Vien" ket hop Claude, Bing Image Creator va Canva AI de tao noi dung hoan chinh.',
    highlights: [
      'Claude: len dan bai, viet nhap, dat tieu de va chinh giong van phu hop doi tuong',
      'Bing Image Creator: tao thumbnail va anh minh hoa phong cach xanh - trang',
      'Canva AI: thiet ke banner, tagline va infographic tom tat bai viet',
      'Noi dung cuoi duoc chinh sua lai bang trai nghiem ca nhan va tu duy phan bien'
    ],
    pages: 14,
    folder: 'bai5_muc54'
  },
  {
    id: 6,
    source: 'Bai tap 4 - Muc 6.4',
    title: 'Su dung AI co trach nhiem trong hoc tap',
    doc: 'assets/docs/baitap4_muc64.docx',
    summary: 'Nghien cuu chinh sach AI tai cac truong dai hoc, thuc hanh voi AI co ghi chep prompt day du va xay dung bo nguyen tac su dung AI minh bach ca nhan.',
    highlights: [
      'So sanh chinh sach AI giua DHQGHN/UET, Bach Khoa HN, MIT va NUS',
      'Ghi lai toan bo prompt dung cho bai luan ve bien doi khi hau va an ninh luong thuc',
      'Kiem chung lai so lieu AI cung cap bang nguon dang tin cay doc lap',
      'Bo nguyen tac ca nhan: tu duy truoc - kiem chung - khai bao - viet bang giong rieng'
    ],
    pages: 7,
    folder: 'bai6_muc64'
  }
];

// Generate image paths from page count
works.forEach(w => {
  w.images = Array.from({length: w.pages}, (_, i) =>
    `assets/images/${w.folder}/page_${String(i+1).padStart(2,'0')}.png`
  );
});

/* BUILD WORK LIST */
const list = document.getElementById('work-list');

list.innerHTML = works.map((w, i) => {
  const PREVIEW_COUNT = 4;
  const thumbsHtml = w.images.slice(0, PREVIEW_COUNT).map(src =>
    `<div class="preview-thumb"><img src="${src}" alt="" loading="lazy"></div>`
  ).join('') +
  (w.images.length > PREVIEW_COUNT
    ? `<div class="preview-more" data-id="${w.id}">
         <span>+${w.images.length - PREVIEW_COUNT}</span>
         <span>trang</span>
       </div>`
    : '');

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
          <span class="work-img-badge">${w.pages} trang</span>
          <button class="work-open-btn" aria-label="Mo ${w.title}">&#8594;</button>
        </div>
      </div>
      <div class="work-preview" id="preview-${w.id}">
        <div class="work-preview-inner">${thumbsHtml}</div>
        <button class="work-preview-open-btn" data-id="${w.id}">Xem toan bo bai lam &#8594;</button>
      </div>
    </div>
  `;
}).join('');

/* CLICK EVENTS */
list.addEventListener('click', e => {
  const openBtn = e.target.closest('.work-preview-open-btn');
  const moreBtn = e.target.closest('.preview-more');
  const trigger = e.target.closest('.work-trigger');

  if (openBtn || moreBtn) {
    openDoc(Number((openBtn || moreBtn).dataset.id));
    return;
  }
  if (trigger) {
    const id = Number(trigger.dataset.id);
    const preview = document.getElementById('preview-' + id);
    if (!preview) { openDoc(id); return; }
    const isOpen = preview.classList.toggle('open');
    trigger.querySelector('.work-open-btn').textContent = isOpen ? '↑' : '→';
  }
});

/* DOC PAGE */
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

function openDoc(id) {
  const w = works.find(x => x.id === id);
  if (!w) return;

  docSource.textContent  = w.source;
  docDl.href             = w.doc;
  docLabel.textContent   = w.source;
  docTitle.textContent   = w.title;
  docSummary.textContent = w.summary;
  docFooterDl.href       = w.doc;
  docEmptyDl.href        = w.doc;

  docSteps.innerHTML =
    '<p class="doc-steps-title">Noi dung thuc hien</p>' +
    w.highlights.map((h, i) =>
      '<div class="doc-step"><div class="doc-step-num">' + (i+1) + '</div><div class="doc-step-text">' + h + '</div></div>'
    ).join('');

  if (w.images.length > 0) {
    docEmpty.style.display  = 'none';
    docImages.style.display = 'flex';
    docImages.innerHTML = w.images.map((src, i) =>
      '<div class="doc-img-block">' +
        '<p class="doc-img-caption">Trang ' + (i+1) + ' / ' + w.images.length + '</p>' +
        '<div class="doc-img-wrap"><img src="' + src + '" alt="Trang ' + (i+1) + '" loading="lazy"></div>' +
      '</div>'
    ).join('');
  } else {
    docImages.style.display = 'none';
    docEmpty.style.display  = 'block';
  }

  docPage.classList.add('open');
  docPage.setAttribute('aria-hidden', 'false');
  docPage.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeDoc() {
  docPage.classList.remove('open');
  docPage.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

docBack.addEventListener('click', closeDoc);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (zoom.classList.contains('open')) zoom.classList.remove('open');
    else if (docPage.classList.contains('open')) closeDoc();
  }
});

/* ZOOM */
const zoom = document.createElement('div');
zoom.className = 'zoom-overlay';
zoom.innerHTML = '<button class="zoom-close" aria-label="Dong">x</button><img src="" alt="">';
document.body.appendChild(zoom);
const zoomImg = zoom.querySelector('img');

docImages.addEventListener('click', e => {
  const img = e.target.closest('img');
  if (!img) return;
  zoomImg.src = img.src;
  zoom.classList.add('open');
});
zoom.addEventListener('click', e => {
  if (e.target === zoom || e.target.closest('.zoom-close')) zoom.classList.remove('open');
});

/* MOBILE NAV */
const hamburger = document.querySelector('.hamburger');
const navMobile = document.getElementById('nav-mobile');
hamburger.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});
navMobile.addEventListener('click', e => {
  if (e.target.tagName === 'A') navMobile.classList.remove('open');
});