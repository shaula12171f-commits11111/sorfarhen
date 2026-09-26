// app.js - Lógica principal del sistema de estudio

let currentGalleryId = null;
let currentMainId = null;
let currentImages = [];
let currentImgIndex = 0;
let currentCards = [];
let currentCardIndex = 0;
let currentBlockCards = [];
let showingRomaji = false;

// --- Utilidades ---
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

/** Devuelve la URL de portada de una subgalería.
 *  Si cover está vacío/ausente, usa la primera imagen de images.
 */
function getCoverUrl(subId) {
  const gal = GALLERIES[subId];
  if (!gal) return null;
  if (gal.cover && gal.cover.trim() !== '') return gal.cover;
  if (gal.images && gal.images.length > 0) return gal.images[0];
  return null;
}

// --- Navegación de pantallas ---
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showHome() {
  showScreen('home-screen');
  currentGalleryId = null;
  currentMainId = null;
  renderMainGalleries();
}

// --- Render galerías principales (10) ---
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
    if (main.active) {
      el.addEventListener('click', () => openSubs(main));
    }
    container.appendChild(el);
  });
}

// --- Pantalla de subgalerías ---
function openSubs(main) {
  currentMainId = main.id;
  document.getElementById('subs-title').textContent = main.name;
  const container = document.getElementById('sub-galleries');
  container.innerHTML = '';
  main.subs.forEach(sub => {
    const el = document.createElement('div');
    el.className = 'subcontainer' + (sub.active ? '' : ' is-disabled');

    const coverUrl = getCoverUrl(sub.id);
    const countText = (GALLERIES[sub.id] && GALLERIES[sub.id].images)
      ? `${GALLERIES[sub.id].images.length} imágenes`
      : '';

    // Nombre con el id al FINAL: "itsuki playera putona 2.1"
    const displayName = `${sub.name} ${sub.id}`;

    let coverHtml = '';
    if (coverUrl) {
      coverHtml = `<div class="sub-cover" style="background-image:url('${coverUrl}')"></div>`;
    } else {
      coverHtml = `<div class="sub-cover sub-cover-empty"></div>`;
    }

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

document.getElementById('btn-back-subs').addEventListener('click', showHome);

// --- Modal de elección ---
const choiceModal = document.getElementById('choice-modal');

document.getElementById('btn-close-choice').addEventListener('click', () => {
  choiceModal.classList.add('hidden');
});

choiceModal.addEventListener('click', (e) => {
  if (e.target === choiceModal) choiceModal.classList.add('hidden');
});

// --- Ver hentai (slideshow) ---
document.getElementById('btn-ver-hentai').addEventListener('click', () => {
  choiceModal.classList.add('hidden');
  openGallery(currentGalleryId);
});

function openGallery(id) {
  const gal = GALLERIES[id];
  if (!gal) return;
  currentImages = gal.images;
  currentImgIndex = 0;
  document.getElementById('gallery-title').textContent = gal.name;
  updateSlideshow();
  showScreen('gallery-screen');
}

function updateSlideshow() {
  const img = document.getElementById('slideshow-img');
  img.src = currentImages[currentImgIndex];
  document.getElementById('img-counter').textContent =
    `${currentImgIndex + 1} / ${currentImages.length}`;
}

document.getElementById('btn-prev-img').addEventListener('click', () => {
  if (currentImages.length === 0) return;
  currentImgIndex = (currentImgIndex - 1 + currentImages.length) % currentImages.length;
  updateSlideshow();
});

document.getElementById('btn-next-img').addEventListener('click', () => {
  if (currentImages.length === 0) return;
  currentImgIndex = (currentImgIndex + 1) % currentImages.length;
  updateSlideshow();
});

document.getElementById('slideshow-img').addEventListener('click', () => {
  if (currentImages.length === 0) return;
  currentImgIndex = (currentImgIndex + 1) % currentImages.length;
  updateSlideshow();
});

document.getElementById('btn-back-gallery').addEventListener('click', () => {
  if (currentMainId) {
    const main = MAIN_GALLERIES.find(m => m.id === currentMainId);
    if (main) openSubs(main);
    else showHome();
  } else {
    showHome();
  }
});

// --- Ver flashcards ---
document.getElementById('btn-ver-flashcards').addEventListener('click', () => {
  choiceModal.classList.add('hidden');
  openFlashcards(currentGalleryId);
});

function openFlashcards(id) {
  const cards = FLASHCARDS[id] || [];
  currentCards = cards;
  document.getElementById('flash-title').textContent = GALLERIES[id]?.name || id;
  document.getElementById('quiz-area').classList.add('hidden');
  document.getElementById('blocks-container').classList.remove('hidden');
  renderBlocks(cards);
  showScreen('flashcards-screen');
}

function renderBlocks(cards) {
  const container = document.getElementById('blocks-container');
  container.innerHTML = '';
  const blockSize = 10;
  const numBlocks = Math.ceil(cards.length / blockSize) || 1;

  for (let i = 0; i < numBlocks; i++) {
    const start = i * blockSize;
    const end = Math.min(start + blockSize, cards.length);
    const count = end - start;
    const blockEl = document.createElement('div');
    blockEl.className = 'block-card';
    blockEl.innerHTML = `
      <h3>Bloque ${i + 1}</h3>
      <span>${count} palabras</span>
    `;
    blockEl.addEventListener('click', () => startQuiz(cards.slice(start, end), i + 1));
    container.appendChild(blockEl);
  }
}

function startQuiz(blockCards, blockNum) {
  currentBlockCards = shuffle(blockCards);
  currentCardIndex = 0;
  document.getElementById('blocks-container').classList.add('hidden');
  document.getElementById('quiz-area').classList.remove('hidden');
  document.getElementById('quiz-progress').textContent = `Bloque ${blockNum}`;
  showCard();
}

function showCard() {
  if (currentCardIndex >= currentBlockCards.length) {
    document.getElementById('quiz-word').textContent = '¡Bloque completado!';
    document.getElementById('romaji-display').classList.add('hidden');
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('btn-next-card').classList.add('hidden');
    return;
  }

  const card = currentBlockCards[currentCardIndex];
  showingRomaji = false;

  document.getElementById('quiz-word').textContent = card.word;
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

document.getElementById('btn-next-card').addEventListener('click', () => {
  currentCardIndex++;
  showCard();
});

document.querySelector('.quiz-card').addEventListener('click', (e) => {
  if (e.target.classList.contains('option-btn') || e.target.id === 'btn-next-card') return;
  if (currentCardIndex >= currentBlockCards.length) return;
  const card = currentBlockCards[currentCardIndex];
  if (!showingRomaji && card) {
    showRomajiAndSpeak(card);
  }
});

document.getElementById('btn-back-to-blocks').addEventListener('click', () => {
  document.getElementById('quiz-area').classList.add('hidden');
  document.getElementById('blocks-container').classList.remove('hidden');
});

document.getElementById('btn-back-flash').addEventListener('click', () => {
  if (currentMainId) {
    const main = MAIN_GALLERIES.find(m => m.id === currentMainId);
    if (main) openSubs(main);
    else showHome();
  } else {
    showHome();
  }
});

// Inicial
showHome();