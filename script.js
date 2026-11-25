(() => {
  'use strict';

  const destinations = {
    'raja-ampat': {
      title: 'Raja Ampat', location: 'Papua Barat Daya', category: 'Alam & pantai', duration: '4–5 hari', bestTime: 'Cek musim laut lokal',
      description: 'Kepulauan dengan lanskap karst, perairan tropis, dan keanekaragaman hayati laut. Cocok untuk perjalanan yang lebih lambat, eksplorasi bahari, dan menikmati alam dengan penuh tanggung jawab.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Raja_Ampat,_West_Papua,_Indonesia.jpg?width=1200',
      activities: ['Menikmati lanskap pulau karst', 'Snorkeling bersama pemandu berizin', 'Mengenal budaya kampung setempat', 'Menjelajah dengan operator lokal'],
      note: 'Periksa izin masuk kawasan konservasi, kondisi laut, transportasi antarpulau, dan panduan keselamatan dari sumber resmi sebelum berangkat.', query: 'Raja Ampat pariwisata resmi'
    },
    bira: {
      title: 'Pantai Tanjung Bira', location: 'Bulukumba, Sulawesi Selatan', category: 'Alam & pantai', duration: '2–3 hari', bestTime: 'Musim kering; cek cuaca laut',
      description: 'Pantai di ujung selatan Sulawesi yang dikenal dengan pasir putih halus dan gradasi laut biru jernih. Kunjungan bisa dipadukan dengan aktivitas bahari serta mengenal tradisi pembuatan kapal pinisi di kawasan sekitar.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tanjung_Bira_Sulawesi_Selatan.jpg?width=1200',
      activities: ['Bersantai di pantai pasir putih', 'Snorkeling atau menyelam bersama operator tepercaya', 'Menjelajah Pulau Liukang Loe', 'Mengenal tradisi kapal pinisi di Tana Beru'],
      note: 'Periksa cuaca dan kondisi laut, aturan kawasan, tarif terbaru, serta ketersediaan transportasi sebelum berangkat. Hormati lingkungan pantai dan arahan warga setempat.', query: 'Pantai Tanjung Bira Indonesia Travel resmi'
    },
    borobudur: {
      title: 'Candi Borobudur', location: 'Magelang, Jawa Tengah', category: 'Budaya & sejarah', duration: '1–2 hari', bestTime: 'Pagi hari, sesuai aturan',
      description: 'Situs warisan dunia dengan arsitektur monumental dan relief yang sarat makna. Kunjungan dapat dipadukan dengan mengenal desa, kuliner, dan kerajinan lokal di sekitar Magelang.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indonesia_Borobudur_Temple.jpg?width=1200',
      activities: ['Mengikuti tur interpretasi sejarah', 'Menjelajahi kawasan sekitar', 'Mencicipi kuliner Magelang', 'Mengenal kerajinan lokal'],
      note: 'Aturan naik ke struktur candi, kuota, tiket, serta jam kunjungan dapat berubah. Pastikan informasi dari pengelola resmi.', query: 'Candi Borobudur pengelola resmi tiket'
    },
    bromo: {
      title: 'Gunung Bromo', location: 'Jawa Timur', category: 'Petualangan', duration: '2–3 hari', bestTime: 'Cek cuaca dan status kawasan',
      description: 'Bentang pegunungan dengan lautan pasir dan pemandangan matahari terbit. Rencanakan perjalanan dengan operator tepercaya dan ikuti arahan petugas kawasan.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise_at_Mount_Bromo.jpg?width=1200',
      activities: ['Menikmati pemandangan dari titik resmi', 'Belajar geologi dan lanskap vulkanik', 'Mencoba hidangan lokal', 'Menggunakan pemandu atau operator tepercaya'],
      note: 'Gunung berapi merupakan kawasan alam yang dinamis. Selalu periksa status aktivitas, cuaca, penutupan jalur, dan arahan otoritas sebelum berkunjung.', query: 'Taman Nasional Bromo Tengger Semeru resmi'
    },
    'labuan-bajo': {
      title: 'Labuan Bajo', location: 'Flores, Nusa Tenggara Timur', category: 'Alam & pantai', duration: '3 hari', bestTime: 'Cek musim dan cuaca laut',
      description: 'Gerbang untuk mengenal pulau-pulau di sekitar Flores, lanskap bukit, dan ekosistem bahari. Sisihkan waktu untuk memahami aturan konservasi dan budaya lokal.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Komodo_Islands_-_view_from_Labuan_Bajo.jpg?width=1200',
      activities: ['Menikmati panorama pesisir', 'Memilih tur kapal berizin', 'Mengenal produk dan kuliner Flores', 'Mengikuti aturan kawasan konservasi'],
      note: 'Kondisi laut, akses kawasan, kuota, serta aturan untuk berinteraksi dengan satwa bisa berubah. Ikuti panduan resmi dan operator berizin.', query: 'Labuan Bajo pariwisata resmi'
    },
    ubud: {
      title: 'Ubud', location: 'Bali', category: 'Budaya & alam', duration: '2–3 hari', bestTime: 'Pagi atau sore yang sejuk',
      description: 'Ubud memadukan seni, kerajinan, kuliner, dan lanskap hijau. Kunjungan bermakna dapat dilakukan dengan mendukung usaha lokal serta menghormati ruang sakral dan kebiasaan masyarakat.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tegalalang_Rice_Terraces.jpg?width=1200',
      activities: ['Mengunjungi studio seni dan kerajinan', 'Menikmati makanan khas Bali', 'Berjalan di kawasan sawah yang terbuka untuk publik', 'Mempelajari etika saat memasuki pura'],
      note: 'Hormati upacara dan area sakral, tanyakan izin sebelum mengambil foto, serta periksa jam operasional dan aturan pengelola destinasi.', query: 'Ubud pariwisata resmi Bali'
    },
    yogyakarta: {
      title: 'Yogyakarta', location: 'Daerah Istimewa Yogyakarta', category: 'Kuliner & kota', duration: '1–2 hari', bestTime: 'Pagi dan sore',
      description: 'Kota yang dikenal dengan tradisi, seni, kuliner, dan situs bersejarah. Susun rute yang menggabungkan tempat budaya dengan usaha lokal agar perjalanan lebih beragam.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Malioboro_Street,_Yogyakarta.JPG?width=1200',
      activities: ['Menjelajah kawasan bersejarah', 'Mencoba kuliner khas', 'Melihat karya perajin lokal', 'Menggunakan transportasi lokal secara bijak'],
      note: 'Cek jam operasional, aturan saat memasuki situs budaya, dan jadwal transportasi langsung kepada pengelola atau penyedia resmi.', query: 'pariwisata Yogyakarta situs resmi'
    }
  };

  const eventGuides = {
    bali: {
      title: 'Panduan menyaksikan tradisi Bali',
      body: 'Upacara dan perayaan di Bali mengikuti kalender serta tradisi setempat. Kenali aturan berpakaian, area yang boleh dimasuki, dan arahan panitia atau pemangku setempat. Hindari menghalangi prosesi, minta izin sebelum memotret orang, serta pilih pemandu lokal yang memahami konteks budaya.',
      query: 'Dinas Pariwisata Bali situs resmi kalender kegiatan'
    },
    heritage: {
      title: 'Panduan wisata warisan budaya',
      body: 'Situs bersejarah dapat memiliki aturan pelestarian, jalur khusus, dan batas jumlah pengunjung. Periksa tiket dan jam masuk dari pengelola, jangan menyentuh relief atau benda bersejarah, dan pertimbangkan pemandu berlisensi untuk memahami konteks situs.',
      query: 'Indonesia travel official heritage destinations'
    },
    kuliner: {
      title: 'Susun rute rasa lokal',
      body: 'Pilih beberapa tempat makan lokal dalam satu area agar perjalanan lebih nyaman. Tanyakan bahan atau tingkat kepedasan jika diperlukan, patuhi kebiasaan setempat, jaga kebersihan, dan utamakan usaha lokal yang menerangkan bahan serta proses penyajiannya.',
      query: 'Indonesia travel official culinary tourism'
    }
  };

  const safeText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  if (window.AOS) {
    window.AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 45, disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches });
  } else {
    document.querySelectorAll('[data-aos]').forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
  }

  window.addEventListener('load', () => {
    if (window.bootstrap && document.body) {
      const existing = bootstrap.ScrollSpy.getInstance(document.body);
      if (existing) existing.refresh();
      else new bootstrap.ScrollSpy(document.body, { target: '#mainNavbar', rootMargin: '0px 0px -35%', smoothScroll: true });
    }
  });

  const heroImage = document.querySelector('.hero-image');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ticking = false;
  const updateParallax = () => {
    if (!heroImage || reduceMotion || window.innerWidth < 768) { ticking = false; return; }
    const hero = document.querySelector('.hero-section');
    if (!hero) { ticking = false; return; }
    const rect = hero.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const offset = Math.max(-65, Math.min(65, (rect.top * -0.12)));
      heroImage.style.setProperty('--parallax-y', `${offset}px`);
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(updateParallax); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', updateParallax, { passive: true });
  updateParallax();

  const destinationModal = document.getElementById('destinationModal');
  let selectedDestinationKey = '';
  document.querySelectorAll('[data-destination]').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.getAttribute('data-destination');
      const data = destinations[key];
      if (!data) return;
      selectedDestinationKey = key;
      safeText('destinationModalTitle', data.title);
      safeText('modalDestinationLocation', ` ${data.location}`);
      const locEl = document.getElementById('modalDestinationLocation');
      if (locEl) locEl.innerHTML = '<i class="bi bi-geo-alt" aria-hidden="true"></i> ' + data.location;
      safeText('modalDestinationDescription', data.description);
      safeText('modalDestinationCategory', data.category);
      safeText('modalDestinationDuration', data.duration);
      safeText('modalDestinationBestTime', data.bestTime);
      safeText('modalDestinationNote', data.note);
      const image = document.getElementById('modalDestinationImage');
      if (image) { image.src = data.image; image.alt = `Pemandangan ${data.title}`; }
      const list = document.getElementById('modalDestinationActivities');
      if (list) {
        list.replaceChildren();
        data.activities.forEach(activity => {
          const li = document.createElement('li');
          const icon = document.createElement('i'); icon.className = 'bi bi-check-circle-fill'; icon.setAttribute('aria-hidden', 'true');
          li.append(icon, document.createTextNode(activity)); list.append(li);
        });
      }
      const searchLink = document.getElementById('officialSearchLink');
      if (searchLink) searchLink.href = `https://www.google.com/search?q=${encodeURIComponent(data.query)}`;
    });
  });

  const askAboutDestination = document.getElementById('askAboutDestination');
  if (askAboutDestination) askAboutDestination.addEventListener('click', () => {
    const data = destinations[selectedDestinationKey];
    if (!data) return;

    const topic = document.getElementById('contactTopic');
    const message = document.getElementById('contactMessage');
    if (topic) topic.value = data.category === 'Alam & pantai' ? 'Destinasi alam dan pantai' : data.category === 'Budaya & sejarah' ? 'Budaya dan sejarah' : data.category === 'Petualangan' ? 'Petualangan dan pegunungan' : 'Kuliner dan kota';
    if (message) message.value = `Saya tertarik mencari informasi tentang ${data.title}. Mohon panduan untuk merencanakan kunjungan.`;

    const goToContact = () => {
      const contactSection = document.getElementById('kontak');
      contactSection?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      window.setTimeout(() => document.getElementById('contactName')?.focus({ preventScroll: true }), reduceMotion ? 0 : 550);
    };

    if (destinationModal && window.bootstrap) {
      destinationModal.addEventListener('hidden.bs.modal', goToContact, { once: true });
      bootstrap.Modal.getOrCreateInstance(destinationModal).hide();
    } else {
      goToContact();
    }
  });

  const searchForm = document.getElementById('destinationSearch');
  const keywordInput = document.getElementById('destinationKeyword');
  const categorySelect = document.getElementById('destinationCategory');
  const durationSelect = document.getElementById('destinationDuration');
  const destinationItems = Array.from(document.querySelectorAll('.destination-item'));
  const emptyState = document.getElementById('emptyDestinations');
  const searchFeedback = document.getElementById('searchFeedback');
  const applyFilters = () => {
    const keyword = (keywordInput?.value || '').trim().toLowerCase();
    const category = categorySelect?.value || 'all';
    const duration = durationSelect?.value || 'all';
    let visible = 0;
    destinationItems.forEach(item => {
      const haystack = `${item.dataset.search || ''} ${item.innerText || ''}`.toLowerCase();
      const matches = (!keyword || haystack.includes(keyword)) && (category === 'all' || item.dataset.category === category) && (duration === 'all' || item.dataset.duration === duration);
      item.classList.toggle('d-none', !matches);
      if (matches) visible++;
    });
    emptyState?.classList.toggle('d-none', visible > 0);
    if (searchFeedback) searchFeedback.textContent = keyword || category !== 'all' || duration !== 'all' ? `${visible} destinasi cocok dengan pilihan Anda.` : '';
    if (window.AOS) window.AOS.refreshHard();
  };
  if (searchForm) searchForm.addEventListener('submit', event => { event.preventDefault(); applyFilters(); document.getElementById('destinasi')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); });
  [keywordInput, categorySelect, durationSelect].forEach(control => control?.addEventListener('change', applyFilters));
  if (keywordInput) keywordInput.addEventListener('input', () => { if (!keywordInput.value.trim()) applyFilters(); });
  document.getElementById('resetSearch')?.addEventListener('click', () => {
    if (keywordInput) keywordInput.value = '';
    if (categorySelect) categorySelect.value = 'all';
    if (durationSelect) durationSelect.value = 'all';
    applyFilters();
  });

  document.querySelectorAll('[data-save]').forEach(button => {
    button.addEventListener('click', () => {
      const saved = button.classList.toggle('is-saved');
      button.setAttribute('aria-pressed', String(saved));
      const icon = button.querySelector('i');
      if (icon) icon.className = saved ? 'bi bi-heart-fill' : 'bi bi-heart';
      const name = destinations[button.dataset.save]?.title || 'Destinasi';
      button.setAttribute('aria-label', saved ? `${name} ditandai sebagai favorit` : `Tandai ${name} sebagai favorit`);
    });
  });

  const eventModal = document.getElementById('eventModal');
  document.querySelectorAll('[data-event]').forEach(button => button.addEventListener('click', () => {
    const data = eventGuides[button.dataset.event];
    if (!data) return;
    safeText('eventModalTitle', data.title);
    safeText('eventModalBody', data.body);
    const link = document.getElementById('eventOfficialLink');
    if (link) link.href = `https://www.google.com/search?q=${encodeURIComponent(data.query)}`;
    if (window.bootstrap && eventModal) bootstrap.Modal.getOrCreateInstance(eventModal).show();
  }));

  const galleryModal = document.getElementById('galleryModal');
  document.querySelectorAll('[data-gallery-image]').forEach(button => button.addEventListener('click', () => {
    const image = document.getElementById('galleryModalImage');
    if (image) { image.src = button.dataset.galleryImage; image.alt = button.dataset.galleryCaption || 'Foto perjalanan'; }
    safeText('galleryModalCaption', button.dataset.galleryCaption || 'Galeri Balvi Pariwisata');
    if (window.bootstrap && galleryModal) bootstrap.Modal.getOrCreateInstance(galleryModal).show();
  }));
  galleryModal?.addEventListener('hidden.bs.modal', () => { const image = document.getElementById('galleryModalImage'); if (image) image.removeAttribute('src'); });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    contactForm.classList.add('was-validated');
    if (!contactForm.checkValidity()) {
      contactForm.querySelector(':invalid')?.focus();
      document.getElementById('formSuccess')?.classList.add('d-none');
      return;
    }
    document.getElementById('formSuccess')?.classList.remove('d-none');
    document.getElementById('formSuccess')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
  });

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) newsletterForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!newsletterForm.checkValidity()) { newsletterForm.reportValidity(); return; }
    const feedback = document.getElementById('newsletterFeedback');
    if (feedback) feedback.textContent = 'Terima kasih! Form ini hanya simulasi front-end.';
    newsletterForm.reset();
  });

  const backToTop = document.getElementById('backToTop');
  const updateBackToTop = () => backToTop?.classList.toggle('is-visible', window.scrollY > 550);
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
  document.querySelectorAll('#navbarContent .nav-link, #navbarContent .nav-cta').forEach(link => link.addEventListener('click', () => {
    const collapseElement = document.getElementById('navbarContent');
    if (collapseElement?.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(collapseElement).hide();
  }));

  safeText('currentYear', String(new Date().getFullYear()));
})();