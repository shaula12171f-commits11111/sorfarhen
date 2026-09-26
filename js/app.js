// app.js - Lógica principal del sistema de estudio

let currentGalleryId = null;
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
  // Intentar voz japonesa si existe
  const voices = speechSynthesis.getVoices();
  const jaVoice = voices.find(v => v.lang.startsWith('ja'));
  if (jaVoice) utter.voice = jaVoice;
  speechSynthesis.speak(utter);
}

// Cargar voces (algunos navegadores las cargan async)
if (window.speechSynthesis) {
  speechSynthesis.onvoiceschanged = () => {};
}

// --- Navegación de pantallas ---
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showHome() {
  showScreen('home-screen');
  currentGalleryId = null;
}

// --- Modal de elección ---
const choiceModal = document.getElementById('choice-modal');
const choiceTitle = document.getElementById('choice-title');

document.querySelectorAll('.subcontainer').forEach(el => {
  el.addEventListener('click', () => {
    const id = el.dataset.gallery;
    const name = el.dataset.name;
    if (!GALLERIES[id]) return; // deshabilitado
    currentGalleryId = id;
    choiceTitle.textContent = name;
    choiceModal.classList.remove('hidden');
  });
});

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

// Click en la imagen también avanza
document.getElementById('slideshow-img').addEventListener('click', () => {
  if (currentImages.length === 0) return;
  currentImgIndex = (currentImgIndex + 1) % currentImages.length;
  updateSlideshow();
});

document.getElementById('btn-back-gallery').addEventListener('click', showHome);

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
    // Fin del bloque
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

  // Opciones: 1 correcta + 3 distractores, mezcladas
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
  // Deshabilitar todos
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

  if (isCorrect) {
    btn.classList.add('correct');
    // Avanzar automáticamente tras breve delay
    setTimeout(() => {
      currentCardIndex++;
      showCard();
    }, 600);
  } else {
    btn.classList.add('wrong');
    // Mostrar romaji + audio
    showRomajiAndSpeak(card);
    // Marcar la correcta
    document.querySelectorAll('.option-btn').forEach(b => {
      if (b.textContent === card.meaning) b.classList.add('correct');
    });
    // Mostrar botón siguiente
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

// Botón siguiente (solo aparece tras error)
document.getElementById('btn-next-card').addEventListener('click', () => {
  currentCardIndex++;
  showCard();
});

// Click fuera del botón siguiente (en el área de la card) también muestra lectura
document.querySelector('.quiz-card').addEventListener('click', (e) => {
  // Si ya respondió mal y el romaji no está visible, o si click fuera de botones
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

document.getElementById('btn-back-flash').addEventListener('click', showHome);

// Inicial
showHome();