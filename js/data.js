// Datos de galerías e imágenes
// Fácil de ampliar: añade más entradas a GALLERIES y FLASHCARDS

const GALLERIES = {
  "1.1": {
    name: "itsuki playera putona",
    images: [
      // Placeholders - reemplaza con URLs reales de tus imágenes (o súbalas a /images/)
      "https://picsum.photos/seed/itsuki1/600/800",
      "https://picsum.photos/seed/itsuki2/600/800"
    ]
  }
  // Ejemplo para añadir más:
  // "1.2": { name: "otra serie", images: ["url1", "url2"] }
};

// Flashcards por galería
// Cada item: { word: "kanji/hiragana", romaji: "...", meaning: "traducción español", distractors: ["opc1", "opc2", "opc3"] }
const FLASHCARDS = {
  "1.1": [
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
      word: "波が",
      romaji: "nami ga",
      meaning: "la ola (sujeto)",
      distractors: ["el viento", "la arena", "el sol"]
    },
    {
      word: "お前",
      romaji: "omae",
      meaning: "tú (informal/rude)",
      distractors: ["yo", "él", "nosotros"]
    },
    {
      word: "持って来て",
      romaji: "motte kite",
      meaning: "traer (forma te)",
      distractors: ["llevarse", "dejar", "romper"]
    }
  ]
};

// Distractors genéricos extras por si se necesitan más (no usados aún)
const EXTRA_DISTRACTORS = [
  "casa", "comida", "agua", "fuego", "libro", "amigo", "noche", "día",
  "grande", "pequeño", "rápido", "lento", "feliz", "triste"
];