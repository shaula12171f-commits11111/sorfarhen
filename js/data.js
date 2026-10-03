// Datos de galerías, openings e imágenes

// Pantalla de entrada: dos categorías grandes
const TOP_CATEGORIES = [
  {
    id: "hentai",
    name: "Galerías hentai",
    desc: "Manga / hentai + flashcards",
    icon: "🖼️",
    active: true
  },
  {
    id: "openings",
    name: "Openings",
    desc: "Vocabulario de openings de anime",
    icon: "🎵",
    active: true
  }
];

// Openings (orden: primero Dark seeks light, luego Nanatsu OP1)
const OPENINGS = [
  {
    id: "op-dark-seeks-light",
    name: "Dark seeks light",
    anime: "Sicario isekai (Ansatsusha)",
    artist: "ニノミヤユイ",
    active: true
  },
  {
    id: "op-nanatsu-1",
    name: "熱情のスペクトラム",
    anime: "Nanatsu no Taizai OP1",
    artist: "いきものがかり",
    active: true
  }
];

// Galerías hentai (igual que antes)
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
      { id: "2.2", name: "ichika putona sexo de chill", active: true },
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

const GALLERIES = {
  "2.1": {
    name: "itsuki playera putona",
    cover: "",
    images: [
      "https://img.ge/i/wmODD63.png",
      "https://img.ge/i/oo9rL91.png"
    ]
  },
  "2.2": {
    name: "ichika putona sexo de chill",
    cover: "",
    images: [
      "https://img.ge/i/6ot6t26.png",
      "https://img.ge/i/dazsg51.png"
    ]
  }
};

const FLASHCARDS = {
  "2.1": [
    { word: "見ないで", romaji: "minaite de", meaning: "no mires", distractors: ["no hables", "no toques", "no te vayas"] },
    { word: "正気", romaji: "shōki", meaning: "cuerdo / cordura", distractors: ["loco", "enfermo", "cansado"] },
    { word: "水着", romaji: "mizugi", meaning: "traje de baño", distractors: ["toalla", "sombrero", "gafas"] },
    { word: "忘れて", romaji: "wasurete", meaning: "olvidar (forma te)", distractors: ["recordar", "llevar", "comprar"] },
    { word: "予備", romaji: "yobi", meaning: "de repuesto / reserva", distractors: ["principal", "roto", "nuevo"] },
    { word: "波", romaji: "nami", meaning: "ola", distractors: ["viento", "lluvia", "sol"] },
    { word: "凄かった", romaji: "sugokatta", meaning: "fue increíble / genial", distractors: ["fue malo", "fue normal", "fue pequeño"] },
    { word: "隠せ", romaji: "kakuse", meaning: "cubre / esconde", distractors: ["muestra", "abre", "tira"] },
    { word: "前", romaji: "mae", meaning: "frente / delante", distractors: ["atrás", "lado", "arriba"] },
    { word: "波が", romaji: "nami ga", meaning: "la ola (sujeto)", distractors: ["el viento", "la arena", "el sol"] },
    { word: "お前", romaji: "omae", meaning: "tú (informal/rude)", distractors: ["yo", "él", "nosotros"] },
    { word: "持って来て", romaji: "motte kite", meaning: "traer (forma te)", distractors: ["llevarse", "dejar", "romper"] }
  ],
  "2.2": [
    { word: "結局", romaji: "kekkyoku", meaning: "al final / en definitiva", distractors: ["al principio", "de repente", "quizás"] },
    { word: "朝まで", romaji: "asa made", meaning: "hasta la mañana", distractors: ["hasta la noche", "todo el día", "un momento"] },
    { word: "しちゃった", romaji: "shichatta", meaning: "lo hicimos / acabamos haciéndolo", distractors: ["lo dejamos", "lo olvidamos", "lo intentamos"] },
    { word: "どうする", romaji: "dō suru", meaning: "¿qué hacemos?", distractors: ["¿quién eres?", "¿dónde vas?", "¿cuándo es?"] },
    { word: "もう一回", romaji: "mō ikkai", meaning: "una vez más", distractors: ["la última vez", "nunca más", "dos veces"] },
    { word: "学校", romaji: "gakkō", meaning: "escuela", distractors: ["casa", "trabajo", "hospital"] },
    { word: "遅れる", romaji: "okureru", meaning: "llegar tarde", distractors: ["llegar temprano", "salir", "correr"] },
    { word: "一緒に", romaji: "issho ni", meaning: "juntos", distractors: ["solo", "después", "antes"] },
    { word: "サボる", romaji: "saboru", meaning: "saltarse / faltar (a clase)", distractors: ["estudiar", "llegar", "aprobar"] },
    { word: "おいで", romaji: "oide", meaning: "ven aquí", distractors: ["vete", "espera", "duerme"] },
    { word: "いい加減に", romaji: "ii kagen ni", meaning: "ya basta / para de una vez", distractors: ["por favor", "de acuerdo", "con cuidado"] },
    { word: "やる気", romaji: "yaruki", meaning: "ganas / motivación", distractors: ["sueño", "hambre", "miedo"] },
    { word: "満々", romaji: "manman", meaning: "a tope / lleno de", distractors: ["vacío", "poco", "a medias"] },
    { word: "やめ", romaji: "yame", meaning: "para / deja de", distractors: ["sigue", "empieza", "mira"] },
    { word: "バレたら", romaji: "baretara", meaning: "si nos descubren", distractors: ["si ganamos", "si llueve", "si terminamos"] },
    { word: "あいつら", romaji: "aitsura", meaning: "ellos / ellas (informal)", distractors: ["nosotros", "tú", "nadie"] },
    { word: "みんなで", romaji: "minna de", meaning: "todos juntos / entre todos", distractors: ["solo yo", "de dos", "nadie"] }
  ],

  // --- Opening: Dark seeks light ---
  "op-dark-seeks-light": [
    { word: "不平等", romaji: "fubyōdō", meaning: "desigualdad / injusto", distractors: ["igualdad", "paz", "libertad"] },
    { word: "生", romaji: "sei", meaning: "vida / existencia", distractors: ["muerte", "sueño", "tiempo"] },
    { word: "密かに", romaji: "hisoka ni", meaning: "en secreto / a escondidas", distractors: ["abiertamente", "rápido", "juntos"] },
    { word: "狂乱", romaji: "kyōran", meaning: "frenesí / locura", distractors: ["calma", "silencio", "orden"] },
    { word: "正義", romaji: "seigi", meaning: "justicia", distractors: ["maldad", "mentira", "odio"] },
    { word: "独善", romaji: "dokuzen", meaning: "autocomplacencia / fariseísmo", distractors: ["humildad", "bondad", "duda"] },
    { word: "未来", romaji: "mirai", meaning: "futuro", distractors: ["pasado", "presente", "historia"] },
    { word: "名誉", romaji: "meiyo", meaning: "honor / gloria", distractors: ["vergüenza", "odio", "miedo"] },
    { word: "愛情", romaji: "aijō", meaning: "amor / cariño", distractors: ["odio", "indiferencia", "ira"] },
    { word: "生命", romaji: "inochi", meaning: "vida (vital)", distractors: ["muerte", "alma", "cuerpo"] },
    { word: "意味", romaji: "imi", meaning: "significado / sentido", distractors: ["ruido", "error", "vacío"] },
    { word: "倫理", romaji: "rinri", meaning: "ética / moral", distractors: ["ley", "juego", "arte"] },
    { word: "理想", romaji: "risō", meaning: "ideal", distractors: ["realidad", "mentira", "sueño"] },
    { word: "幻想", romaji: "gensō", meaning: "ilusión / fantasía", distractors: ["verdad", "hecho", "prueba"] },
    { word: "運命", romaji: "unmei", meaning: "destino", distractors: ["azar", "elección", "pasado"] },
    { word: "暗闇", romaji: "kurayami", meaning: "oscuridad", distractors: ["luz", "brillo", "día"] },
    { word: "殺す", romaji: "korosu", meaning: "matar", distractors: ["salvar", "curar", "proteger"] },
    { word: "痛み", romaji: "itami", meaning: "dolor", distractors: ["placer", "alegría", "calma"] },
    { word: "絶望", romaji: "zetsubō", meaning: "desesperación", distractors: ["esperanza", "alegría", "paz"] },
    { word: "叫ぶ", romaji: "sakebu", meaning: "gritar / clamar", distractors: ["susurrar", "callar", "reír"] }
  ],

  // --- Opening: Nanatsu no Taizai OP1 ---
  "op-nanatsu-1": [
    { word: "愛", romaji: "ai", meaning: "amor", distractors: ["odio", "miedo", "ira"] },
    { word: "叫ぶ", romaji: "sakebu", meaning: "gritar", distractors: ["susurrar", "callar", "cantar"] },
    { word: "光", romaji: "hikari", meaning: "luz", distractors: ["oscuridad", "sombra", "noche"] },
    { word: "想い", romaji: "omoi", meaning: "sentimientos / deseos", distractors: ["pensamiento frío", "olvido", "silencio"] },
    { word: "希望", romaji: "kibō", meaning: "esperanza", distractors: ["desesperación", "miedo", "duda"] },
    { word: "夢", romaji: "yume", meaning: "sueño", distractors: ["pesadilla", "realidad", "recuerdo"] },
    { word: "始まり", romaji: "hajimari", meaning: "comienzo / inicio", distractors: ["final", "medio", "pausa"] },
    { word: "優しい", romaji: "yasashii", meaning: "amable / gentil", distractors: ["cruel", "frío", "duro"] },
    { word: "声", romaji: "koe", meaning: "voz", distractors: ["eco", "ruido", "silencio"] },
    { word: "世界", romaji: "sekai", meaning: "mundo", distractors: ["país", "ciudad", "casa"] },
    { word: "限界", romaji: "genkai", meaning: "límite", distractors: ["inicio", "centro", "infinito"] },
    { word: "明日", romaji: "ashita", meaning: "mañana", distractors: ["ayer", "hoy", "noche"] },
    { word: "誕めぬ", romaji: "akiramenu", meaning: "no rendirse", distractors: ["rendirse", "huir", "olvidar"] },
    { word: "悲しみ", romaji: "kanashimi", meaning: "tristeza", distractors: ["alegría", "ira", "miedo"] },
    { word: "怒り", romaji: "ikari", meaning: "ira / rabia", distractors: ["paz", "alegría", "amor"] },
    { word: "手", romaji: "te", meaning: "mano", distractors: ["pie", "ojo", "cabeza"] },
    { word: "生きる", romaji: "ikiru", meaning: "vivir", distractors: ["morir", "dormir", "correr"] },
    { word: "越えた", romaji: "koeta", meaning: "superó / cruzó", distractors: ["quedó", "cayó", "paró"] }
  ]
};

const EXTRA_DISTRACTORS = [
  "casa", "comida", "agua", "fuego", "libro", "amigo", "noche", "día",
  "grande", "pequeño", "rápido", "lento", "feliz", "triste"
];