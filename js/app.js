// app.js - Lógica principal

let currentGalleryId = null;
let currentMainId = null;
let currentImages = [];
let currentImgIndex = 0;
let currentCards = [];
let currentCardIndex = 0;
let currentBlockCards = [];
let currentBlockNum = 1;
let currentBlockStart = 0;
let currentBlockEnd = 0;
let totalBlocks = 1;
let showingRomaji = false;
let flashBackTarget = 'home';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function speakJapanese(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'ja-JP';
  utter.rate = 0.9;
  const voices = speechSynthesis.getVoices();
  const jaVoice = voices.find(v => v.lang.startsWith('ja'));
  if (jaVoice) utter.voice = jaVoice;
  speechSynthesis.speak(utter);
}

if (window.speechSynthesis) {
  speechSynthesis.onvoiceschanged = () => {};
}

function getCoverUrl(subId) {
  const gal = GALLERIES[subId];
  if (!gal) return null;
  if (gal.cover && gal.cover.trim() !== '') return gal.cover;
  if (gal.images && gal.images.length > 0) return gal.images[0];
  return null;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showHome() {
  showScreen('home-screen');
  currentGalleryId = null;
  currentMainId = null;
  flashBackTarget = 'home';
  renderTopCategories();
}

function renderTopCategories() {
  const container = document.getElementById('top-categories');
  container.innerHTML = '';
  TOP_CATEGORIES.forEach(cat => {
    const el = document.createElement('div');
    el.className = 'top-cat-card' + (cat.active ? '' : ' disabled');
    el.innerHTML = `
      <span class="top-cat-icon">${cat.icon}</span>
      <span class="top-cat-name">${cat.name}</span>
      <span class="top-cat-desc">${cat.desc}</span>
    `;
    if (cat.active) {
      el.addEventListener('click', () => {
        if (cat.id === 'hentai') openHentai();
        else if (cat.id === 'openings') openOpenings();
      });
    }
    container.appendChild(el);
  });
}

function openHentai() {
  flashBackTarget = 'hentai';
  renderMainGalleries();
  showScreen('hentai-screen');
}

function renderMainGalleries() {
  const container = document.getElementById('main-galleries');
  container.innerHTML = '';
  MAIN_GALLERIES.forEach(main => {
    const el = document.createElement('div');
    el.className = 'main-gallery-card' + (main.active ? '' : ' disabled');
    el.innerHTML = `
      <div class="main-card-inner">
        <span class="main-num">${main.id}</span>
        <span class="main-name">${main.name}</span>
        <span class="main-subs-count">${main.subs.length} subgalerías</span>
      </div>
    `;
    if (main.active) el.addEventListener('click', () => openSubs(main));
    container.appendChild(el);
  });
}

document.getElementById('btn-back-hentai').addEventListener('click', showHome);

function openOpenings() {
  flashBackTarget = 'openings';
  renderOpenings();
  showScreen('openings-screen');
}

function renderOpenings() {
  const container = document.getElementById('openings-list');
  container.innerHTML = '';
  OPENINGS.forEach((op, i) => {
    const el = document.createElement('div');
    el.className = 'opening-card' + (op.active ? '' : ' disabled');
    const cards = FLASHCARDS[op.id] || [];
    el.innerHTML = `
      <span class="op-num">${i + 1}</span>
      <div class="op-info">
        <span class="op-name">${op.name}</span>
        <span class="op-anime">${op.anime}</span>
        <span class="op-meta">${op.artist} · ${cards.length} palabras</span>
      </div>
    `;
    if (op.active) {
      el.addEventListener('click', () => {
        flashBackTarget = 'openings';
        openFlashcards(op.id, op.name);
      });
    }
    container.appendChild(el);
  });
}

document.getElementById('btn-back-openings').addEventListener('click', showHome);

function openSubs(main) {
  currentMainId = main.id;
  flashBackTarget = 'subs';
  document.getElementById('subs-title').textContent = main.name;
  const container = document.getElementById('sub-galleries');
  container.innerHTML = '';
  main.subs.forEach(sub => {
    const el = document.createElement('div');
    el.className = 'subcontainer' + (sub.active ? '' : ' is-disabled');
    const coverUrl = getCoverUrl(sub.id);
    const countText = (GALLERIES[sub.id] && GALLERIES[sub.id].images)
      ? `${GALLERIES[sub.id].images.length} imágenes` : '';
    const displayName = `${sub.name} ${sub.id}`;
    const coverHtml = coverUrl
      ? `<div class="sub-cover" style="background-image:url('${coverUrl}')"></div>`
      : `<div class="sub-cover sub-cover-empty"></div>`;
    el.innerHTML = `
      <div class="subcontainer-preview${sub.active ? '' : ' disabled'}">
        ${coverHtml}
        <div class="sub-info">
          <span class="sub-title">${displayName}</span>
          ${countText ? `<span class="sub-count">${countText}</span>` : ''}
        </div>
      </div>
    `;
    if (sub.active && GALLERIES[sub.id]) {
      el.addEventListener('click', () => {
        currentGalleryId = sub.id;
        document.getElementById('choice-title').textContent = sub.name;
        document.getElementById('choice-modal').classList.remove('hidden');
      });
    }
    container.appendChild(el);
  });
  showScreen('subs-screen');
}

document.getElementById('btn-back-subs').addEventListener('click', () => openHentai());

const choiceModal = document.getElementById('choice-modal');
document.getElementById('btn-close-choice').addEventListener('click', () => {
  choiceModal.classList.add('hidden');
});
choiceModal.addEventListener('click', (e) => {
  if (e.target === choiceModal) choiceModal.classList.add('hidden');
});

document.getElementById('btn-ver-hentai').addEventListener('click', () => {
  choiceModal.classList.add('hidden');
  openGallery(currentGalleryId);
});

function openGallery(id) {
  const gal = GALLERIES[id];
  if (!gal) return;
  currentImages = gal.images || [];
  currentImgIndex = 0;
  document.getElementById('gallery-title').textContent = gal.name;
  updateSlideshow();
  showScreen('gallery-screen');
}

function updateSlideshow() {
  const img = document.getElementById('slideshow-img');
  if (!currentImages.length) {
    img.removeAttribute('src');
    document.getElementById('img-counter').textContent = '0 / 0';
    return;
  }
  img.src = currentImages[currentImgIndex];
  document.getElementById('img-counter').textContent =
    `${currentImgIndex + 1} / ${currentImages.length}`;
}

document.getElementById('btn-prev-img').addEventListener('click', () => {
  if (!currentImages.length) return;
  currentImgIndex = (currentImgIndex - 1 + currentImages.length) % currentImages.length;
  updateSlideshow();
});
document.getElementById('btn-next-img').addEventListener('click', () => {
  if (!currentImages.length) return;
  currentImgIndex = (currentImgIndex + 1) % currentImages.length;
  updateSlideshow();
});
document.getElementById('slideshow-img').addEventListener('click', () => {
  if (!currentImages.length) return;
  currentImgIndex = (currentImgIndex + 1) % currentImages.length;
  updateSlideshow();
});

document.getElementById('btn-back-gallery').addEventListener('click', () => {
  if (currentMainId) {
    const main = MAIN_GALLERIES.find(m => m.id === currentMainId);
    if (main) openSubs(main);
    else openHentai();
  } else openHentai();
});

document.getElementById('btn-ver-flashcards').addEventListener('click', () => {
  choiceModal.classList.add('hidden');
  flashBackTarget = 'subs';
  openFlashcards(currentGalleryId, GALLERIES[currentGalleryId]?.name);
});

function openFlashcards(id, title) {
  const cards = FLASHCARDS[id] || [];
  currentCards = cards;
  currentGalleryId = id;
  document.getElementById('flash-title').textContent = title || id;
  renderBlocks(cards);
  showScreen('flashcards-screen');
}

function renderBlocks(cards) {
  const container = document.getElementById('blocks-container');
  container.innerHTML = '';
  const blockSize = 10;
  totalBlocks = Math.ceil(cards.length / blockSize) || 1;
  for (let i = 0; i < totalBlocks; i++) {
    const start = i * blockSize;
    const end = Math.min(start + blockSize, cards.length);
    const count = end - start;
    const blockEl = document.createElement('div');
    blockEl.className = 'block-card';
    blockEl.innerHTML = `<h3>Bloque ${i + 1}</h3><span>${count} palabras</span>`;
    blockEl.addEventListener('click', () => startQuiz(i + 1));
    container.appendChild(blockEl);
  }
}

function startQuiz(blockNum) {
  const blockSize = 10;
  currentBlockNum = blockNum;
  currentBlockStart = (blockNum - 1) * blockSize;
  currentBlockEnd = Math.min(currentBlockStart + blockSize, currentCards.length);
  const slice = currentCards.slice(currentBlockStart, currentBlockEnd);
  const isOpening = String(currentGalleryId || '').startsWith('op-');
  currentBlockCards = isOpening ? [...slice] : shuffle(slice);
  currentCardIndex = 0;

  document.getElementById('quiz-block-title').textContent = `Bloque ${blockNum}`;
  document.getElementById('block-done').classList.add('hidden');
  document.querySelector('.quiz-card').classList.remove('hidden');
  document.getElementById('btn-speak').style.display = 'inline-flex';

  showScreen('quiz-screen');
  showCard();
}

function showCard() {
  if (currentCardIndex >= currentBlockCards.length) {
    showBlockDone();
    return;
  }
  const card = currentBlockCards[currentCardIndex];
  showingRomaji = false;
  document.getElementById('quiz-word').textContent = card.word;
  document.getElementById('btn-speak').style.display = 'inline-flex';
  const romajiEl = document.getElementById('romaji-display');
  romajiEl.textContent = card.romaji;
  romajiEl.classList.add('hidden');
  const options = shuffle([card.meaning, ...card.distractors.slice(0, 3)]);
  const optsContainer = document.getElementById('options-container');
  optsContainer.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswer(btn, opt === card.meaning, card));
    optsContainer.appendChild(btn);
  });
  document.getElementById('btn-next-card').classList.add('hidden');
  document.getElementById('quiz-progress').textContent =
    `${currentCardIndex + 1} / ${currentBlockCards.length}`;
}

function showBlockDone() {
  document.querySelector('.quiz-card').classList.add('hidden');
  const done = document.getElementById('block-done');
  done.classList.remove('hidden');
  document.getElementById('done-subtitle').textContent =
    `Bloque ${currentBlockNum} de ${totalBlocks}`;
  document.getElementById('quiz-progress').textContent = 'Listo';

  const nextBtn = document.getElementById('btn-next-block');
  if (currentBlockNum < totalBlocks) {
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = `Siguiente mazo (Bloque ${currentBlockNum + 1})`;
  } else {
    nextBtn.classList.add('hidden');
  }
}

function handleAnswer(btn, isCorrect, card) {
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  if (isCorrect) {
    btn.classList.add('correct');
    setTimeout(() => {
      currentCardIndex++;
      showCard();
    }, 600);
  } else {
    btn.classList.add('wrong');
    showRomajiAndSpeak(card);
    document.querySelectorAll('.option-btn').forEach(b => {
      if (b.textContent === card.meaning) b.classList.add('correct');
    });
    document.getElementById('btn-next-card').classList.remove('hidden');
  }
}

function showRomajiAndSpeak(card) {
  const romajiEl = document.getElementById('romaji-display');
  romajiEl.textContent = card.romaji;
  romajiEl.classList.remove('hidden');
  showingRomaji = true;
  speakJapanese(card.word);
}

document.getElementById('btn-speak').addEventListener('click', (e) => {
  e.stopPropagation();
  if (currentCardIndex >= currentBlockCards.length) return;
  const card = currentBlockCards[currentCardIndex];
  if (card) speakJapanese(card.word);
});

document.getElementById('btn-next-card').addEventListener('click', () => {
  currentCardIndex++;
  showCard();
});

document.querySelector('.quiz-card').addEventListener('click', (e) => {
  if (e.target.classList.contains('option-btn') || e.target.id === 'btn-next-card' || e.target.id === 'btn-speak') return;
  if (currentCardIndex >= currentBlockCards.length) return;
  const card = currentBlockCards[currentCardIndex];
  if (!showingRomaji && card) showRomajiAndSpeak(card);
});

document.getElementById('btn-back-to-blocks').addEventListener('click', () => {
  showScreen('flashcards-screen');
});

document.getElementById('btn-repeat-block').addEventListener('click', () => {
  startQuiz(currentBlockNum);
});

document.getElementById('btn-next-block').addEventListener('click', () => {
  if (currentBlockNum < totalBlocks) startQuiz(currentBlockNum + 1);
});

document.getElementById('btn-done-to-blocks').addEventListener('click', () => {
  showScreen('flashcards-screen');
});

document.getElementById('btn-back-flash').addEventListener('click', () => {
  if (flashBackTarget === 'openings') openOpenings();
  else if (flashBackTarget === 'subs' && currentMainId) {
    const main = MAIN_GALLERIES.find(m => m.id === currentMainId);
    if (main) openSubs(main);
    else openHentai();
  } else if (flashBackTarget === 'hentai') openHentai();
  else showHome();
});

showHome();
