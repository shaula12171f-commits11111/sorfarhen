// Datos de galerías e imágenes
// Estructura: 10 galerías principales, cada una con hasta 5 subgalerías
// Fácil de ampliar: añade entradas a MAIN_GALLERIES, GALLERIES y FLASHCARDS

const MAIN_GALLERIES = [
  {
    id: "1",
    name: "quintiputas",
    active: true,
    subs: [
      { id: "1.1", name: "Próximamente", active: false },
      { id: "1.2", name: "Próximamente", active: false },
      { id: "1.3", name: "Próximamente", active: false },
      { id: "1.4", name: "Próximamente", active: false },
      { id: "1.5", name: "Próximamente", active: false }
    ]
  },
  {
    id: "2",
    name: "Historias cortas",
    active: true,
    subs: [
      { id: "2.1", name: "itsuki playera putona", active: true },
      { id: "2.2", name: "Próximamente", active: false },
      { id: "2.3", name: "Próximamente", active: false },
      { id: "2.4", name: "Próximamente", active: false },
      { id: "2.5", name: "Próximamente", active: false }
    ]
  },
  {
    id: "3",
    name: "Galería 3",
    active: false,
    subs: [
      { id: "3.1", name: "Próximamente", active: false },
      { id: "3.2", name: "Próximamente", active: false },
      { id: "3.3", name: "Próximamente", active: false },
      { id: "3.4", name: "Próximamente", active: false },
      { id: "3.5", name: "Próximamente", active: false }
    ]
  },
  {
    id: "4",
    name: "Galería 4",
    active: false,
    subs: [
      { id: "4.1", name: "Próximamente", active: false },
      { id: "4.2", name: "Próximamente", active: false },
      { id: "4.3", name: "Próximamente", active: false },
      { id: "4.4", name: "Próximamente", active: false },
      { id: "4.5", name: "Próximamente", active: false }
    ]
  },
  {
    id: "5",
    name: "Galería 5",
    active: false,
    subs: [
      { id: "5.1", name: "Próximamente", active: false },
      { id: "5.2", name: "Próximamente", active: false },
      { id: "5.3", name: "Próximamente", active: false },
      { id: "5.4", name: "Próximamente", active: false },
      { id: "5.5", name: "Próximamente", active: false }
    ]
  },
  {
    id: "6",
    name: "Galería 6",
    active: false,
    subs: [
      { id: "6.1", name: "Próximamente", active: false },
      { id: "6.2", name: "Próximamente", active: false },
      { id: "6.3", name: "Próximamente", active: false },
      { id: "6.4", name: "Próximamente", active: false },
      { id: "6.5", name: "Próximamente", active: false }
    ]
  },
  {
    id: "7",
    name: "Galería 7",
    active: false,
    subs: [
      { id: "7.1", name: "Próximamente", active: false },
      { id: "7.2", name: "Próximamente", active: false },
      { id: "7.3", name: "Próximamente", active: false },
      { id: "7.4", name: "Próximamente", active: false },
      { id: "7.5", name: "Próximamente", active: false }
    ]
  },
  {
    id: "8",
    name: "Galería 8",
    active: false,
    subs: [
      { id: "8.1", name: "Próximamente", active: false },
      { id: "8.2", name: "Próximamente", active: false },
      { id: "8.3", name: "Próximamente", active: false },
      { id: "8.4", name: "Próximamente", active: false },
      { id: "8.5", name: "Próximamente", active: false }
    ]
  },
  {
    id: "9",
    name: "Galería 9",
    active: false,
    subs: [
      { id: "9.1", name: "Próximamente", active: false },
      { id: "9.2", name: "Próximamente", active: false },
      { id: "9.3", name: "Próximamente", active: false },
      { id: "9.4", name: "Próximamente", active: false },
      { id: "9.5", name: "Próximamente", active: false }
    ]
  },
  {
    id: "10",
    name: "Galería 10",
    active: false,
    subs: [
      { id: "10.1", name: "Próximamente", active: false },
      { id: "10.2", name: "Próximamente", active: false },
      { id: "10.3", name: "Próximamente", active: false },
      { id: "10.4", name: "Próximamente", active: false },
      { id: "10.5", name: "Próximamente", active: false }
    ]
  }
];

// Subgalerías con imágenes
// cover: URL de portada (dejar vacío "" para usar automáticamente la primera imagen de images)
// TODO: añadir URLs de los nuevos paneles de habitación cuando el usuario las suba a un host
const GALLERIES = {
  "2.1": {
    name: "itsuki playera putona",
    cover: "",
    images: [
      "https://img.ge/i/wmODD63.png",
      "https://img.ge/i/oo9rL91.png"
    ]
  }
};

// Flashcards por subgalería
const FLASHCARDS = {
  "2.1": [
    // --- Panel playa (anteriores) ---
    {
      word: "見ないで",
      romaji: "minaite de",
      meaning: "no mires",
      distractors: ["no hables", "no toques", "no te vayas"]
    },
    {
      word: "正気",
      romaji: "shōki",
      meaning: "cuerdo / cordura",
      distractors: ["loco", "enfermo", "cansado"]
    },
    {
      word: "水着",
      romaji: "mizugi",
      meaning: "traje de baño",
      distractors: ["toalla", "sombrero", "gafas"]
    },
    {
      word: "忘れて",
      romaji: "wasurete",
      meaning: "olvidar (forma te)",
      distractors: ["recordar", "llevar", "comprar"]
    },
    {
      word: "予備",
      romaji: "yobi",
      meaning: "de repuesto / reserva",
      distractors: ["principal", "roto", "nuevo"]
    },
    {
      word: "波",
      romaji: "nami",
      meaning: "ola",
      distractors: ["viento", "lluvia", "sol"]
    },
    {
      word: "凄かった",
      romaji: "sugokatta",
      meaning: "fue increíble / genial",
      distractors: ["fue malo", "fue normal", "fue pequeño"]
    },
    {
      word: "隠せ",
      romaji: "kakuse",
      meaning: "cubre / esconde",
      distractors: ["muestra", "abre", "tira"]
    },
    {
      word: "前",
      romaji: "mae",
      meaning: "frente / delante",
      distractors: ["atrás", "lado", "arriba"]
    },
    {
      word: "お前",
      romaji: "omae",
      meaning: "tú (informal/rude)",
      distractors: ["yo", "él", "nosotros"]
    },
    // --- Nuevos paneles habitación ---
    {
      word: "結局",
      romaji: "kekkyoku",
      meaning: "al final / en definitiva",
      distractors: ["al principio", "de repente", "quizás"]
    },
    {
      word: "朝まで",
      romaji: "asa made",
      meaning: "hasta la mañana",
      distractors: ["hasta la noche", "todo el día", "un momento"]
    },
    {
      word: "しちゃった",
      romaji: "shichatta",
      meaning: "lo hicimos / acabamos haciéndolo",
      distractors: ["lo dejamos", "lo olvidamos", "lo intentamos"]
    },
    {
      word: "どうする",
      romaji: "dō suru",
      meaning: "¿qué hacemos?",
      distractors: ["¿quién eres?", "¿dónde vas?", "¿cuándo es?"]
    },
    {
      word: "もう一回",
      romaji: "mō ikkai",
      meaning: "una vez más",
      distractors: ["la última vez", "nunca más", "dos veces"]
    },
    {
      word: "学校",
      romaji: "gakkō",
      meaning: "escuela",
      distractors: ["casa", "trabajo", "hospital"]
    },
    {
      word: "遅れる",
      romaji: "okureru",
      meaning: "llegar tarde",
      distractors: ["llegar temprano", "salir", "correr"]
    },
    {
      word: "一緒に",
      romaji: "issho ni",
      meaning: "juntos",
      distractors: ["solo", "después", "antes"]
    },
    {
      word: "サボる",
      romaji: "saboru",
      meaning: "saltarse / faltar (a clase)",
      distractors: ["estudiar", "llegar", "aprobar"]
    },
    {
      word: "おいで",
      romaji: "oide",
      meaning: "ven aquí",
      distractors: ["vete", "espera", "duerme"]
    },
    {
      word: "いい加減に",
      romaji: "ii kagen ni",
      meaning: "ya basta / para de una vez",
      distractors: ["por favor", "de acuerdo", "con cuidado"]
    },
    {
      word: "やる気",
      romaji: "yaruki",
      meaning: "ganas / motivación",
      distractors: ["sueño", "hambre", "miedo"]
    },
    {
      word: "満々",
      romaji: "manman",
      meaning: "a tope / lleno de",
      distractors: ["vacío", "poco", "a medias"]
    },
    {
      word: "やめ",
      romaji: "yame",
      meaning: "para / deja de",
      distractors: ["sigue", "empieza", "mira"]
    },
    {
      word: "バレたら",
      romaji: "baretara",
      meaning: "si nos descubren",
      distractors: ["si ganamos", "si llueve", "si terminamos"]
    },
    {
      word: "あいつら",
      romaji: "aitsura",
      meaning: "ellos / ellas (informal)",
      distractors: ["nosotros", "tú", "nadie"]
    },
    {
      word: "みんなで",
      romaji: "minna de",
      meaning: "todos juntos / entre todos",
      distractors: ["solo yo", "de dos", "nadie"]
    }
  ]
};

const EXTRA_DISTRACTORS = [
  "casa", "comida", "agua", "fuego", "libro", "amigo", "noche", "día",
  "grande", "pequeño", "rápido", "lento", "feliz", "triste"
];