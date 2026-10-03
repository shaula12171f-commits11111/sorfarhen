// Datos de galerías, openings e imágenes

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
  },
  {
    id: "op-tsubasa",
    name: "ツバサ",
    anime: "Mushoku Tensei (Nanahoshi cover)",
    artist: "ナナホシ / UNDERGRAPH",
    active: true
  }
];

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

  "op-nanatsu-1": [
    { word: "鳴りやまぬ", romaji: "nariyamanu", meaning: "que no cesa / incesante", distractors: ["que para", "silencioso", "débil"] },
    { word: "愛", romaji: "ai", meaning: "amor", distractors: ["odio", "miedo", "ira"] },
    { word: "叫ぶ", romaji: "sakebu", meaning: "gritar / clamar", distractors: ["susurrar", "callar", "cantar"] },
    { word: "すべて", romaji: "subete", meaning: "todo / todas las cosas", distractors: ["nada", "algo", "poco"] },
    { word: "抱いて", romaji: "daite", meaning: "abrazar (forma te)", distractors: ["soltar", "empujar", "mirar"] },
    { word: "ここ", romaji: "koko", meaning: "aquí", distractors: ["allí", "allá", "ningún sitio"] },
    { word: "いる", romaji: "iru", meaning: "estar / existir (seres vivos)", distractors: ["ir", "venir", "dormir"] },
    { word: "光", romaji: "hikari", meaning: "luz", distractors: ["oscuridad", "sombra", "noche"] },
    { word: "そこ", romaji: "soko", meaning: "ahí / ese lugar", distractors: ["aquí", "allá", "ningún sitio"] },
    { word: "ある", romaji: "aru", meaning: "haber / existir (cosas)", distractors: ["no haber", "romper", "crear"] },
    { word: "ゆずれない", romaji: "yuzurenai", meaning: "no ceder / innegociable", distractors: ["ceder", "abandonar", "olvidar"] },
    { word: "想い", romaji: "omoi", meaning: "sentimientos / deseos", distractors: ["olvido", "silencio", "duda"] },
    { word: "架けて", romaji: "kakete", meaning: "apostar / poner en juego", distractors: ["quitar", "guardar", "esconder"] },
    { word: "希望", romaji: "kibō", meaning: "esperanza", distractors: ["desesperación", "miedo", "duda"] },
    { word: "果て", romaji: "hate", meaning: "extremo / confín / final", distractors: ["inicio", "centro", "mitad"] },
    { word: "僕", romaji: "boku", meaning: "yo (informal masculino)", distractors: ["tú", "él", "nosotros"] },
    { word: "生きる", romaji: "ikiru", meaning: "vivir", distractors: ["morir", "dormir", "huir"] },
    { word: "夢", romaji: "yume", meaning: "sueño", distractors: ["pesadilla", "realidad", "recuerdo"] },
    { word: "つないだ", romaji: "tsunaida", meaning: "conectó / unió", distractors: ["rompió", "separó", "olvidó"] },
    { word: "君", romaji: "kimi", meaning: "tú (cercano)", distractors: ["yo", "él", "ellos"] },
    { word: "始まり", romaji: "hajimari", meaning: "comienzo / inicio", distractors: ["final", "medio", "pausa"] },
    { word: "いつか", romaji: "itsuka", meaning: "algún día", distractors: ["nunca", "siempre", "ahora"] },
    { word: "僕ら", romaji: "bokura", meaning: "nosotros", distractors: ["vosotros", "ellos", "yo solo"] },
    { word: "手", romaji: "te", meaning: "mano", distractors: ["pie", "ojo", "cabeza"] },
    { word: "生み出す", romaji: "umidasu", meaning: "crear / dar a luz", distractors: ["destruir", "ocultar", "copiar"] },
    { word: "優しい", romaji: "yasashii", meaning: "amable / gentil", distractors: ["cruel", "frío", "duro"] },
    { word: "声", romaji: "koe", meaning: "voz", distractors: ["eco", "ruido", "silencio"] },
    { word: "きっと", romaji: "kitto", meaning: "seguro / sin duda", distractors: ["quizás", "nunca", "apenas"] },
    { word: "世界", romaji: "sekai", meaning: "mundo", distractors: ["país", "ciudad", "casa"] },
    { word: "変えられる", romaji: "kaerareru", meaning: "poder cambiar", distractors: ["romper", "congelar", "ignorar"] },
    { word: "誰も", romaji: "dare mo", meaning: "nadie / cualquiera", distractors: ["todos juntos", "solo yo", "ellos"] },
    { word: "ひとりきり", romaji: "hitorikiri", meaning: "completamente solo", distractors: ["acompañado", "en grupo", "en pareja"] },
    { word: "起ち上がれ", romaji: "tachiagare", meaning: "levantarse (imperativo)", distractors: ["sentarse", "caer", "dormir"] },
    { word: "しない", romaji: "shinai", meaning: "no hacer", distractors: ["hacer", "intentar", "poder"] },
    { word: "たがいに", romaji: "tagai ni", meaning: "mutuamente / el uno al otro", distractors: ["solo", "contra", "sin"] },
    { word: "伸ばして", romaji: "nobashite", meaning: "extender / alcanzar (forma te)", distractors: ["retirar", "cerrar", "esconder"] },
    { word: "限界", romaji: "genkai", meaning: "límite", distractors: ["inicio", "centro", "infinito"] },
    { word: "越えた", romaji: "koeta", meaning: "superó / cruzó", distractors: ["quedó", "cayó", "paró"] },
    { word: "明日", romaji: "ashita", meaning: "mañana", distractors: ["ayer", "hoy", "noche"] },
    { word: "ぶつかりあって", romaji: "butsukariatte", meaning: "chocando / enfrentándose", distractors: ["evitándose", "ignorándose", "huyendo"] },
    { word: "わかりあう", romaji: "wakariau", meaning: "entenderse mutuamente", distractors: ["pelear", "ignorar", "odiar"] },
    { word: "つくりだす", romaji: "tsukuridasu", meaning: "crear / producir", distractors: ["destruir", "copiar", "ocultar"] },
    { word: "認めぬ", romaji: "akiramenu", meaning: "no rendirse", distractors: ["rendirse", "huir", "olvidar"] },
    { word: "悲しみ", romaji: "kanashimi", meaning: "tristeza", distractors: ["alegría", "ira", "miedo"] },
    { word: "怒り", romaji: "ikari", meaning: "ira / rabia", distractors: ["paz", "alegría", "amor"] }
  ],

  // Tsubasa — Nanahoshi (Mushoku) · orden de la letra
  "op-tsubasa": [
    { word: "明け方", romaji: "akegata", meaning: "amanecer / alba", distractors: ["atardecer", "noche", "mediodía"] },
    { word: "過ぎ", romaji: "sugi", meaning: "pasado / después de", distractors: ["antes", "durante", "ahora"] },
    { word: "国道", romaji: "kokudō", meaning: "carretera nacional", distractors: ["calle", "camino", "autopista"] },
    { word: "細い", romaji: "hosoi", meaning: "estrecho / fino", distractors: ["ancho", "grueso", "corto"] },
    { word: "抜け道", romaji: "nukemichi", meaning: "atajo / pasaje", distractors: ["callejón sin salida", "autopista", "puente"] },
    { word: "君", romaji: "kimi", meaning: "tú (cercano)", distractors: ["yo", "él", "ellos"] },
    { word: "呟く", romaji: "tsubuyaku", meaning: "murmurar", distractors: ["gritar", "cantar", "callar"] },
    { word: "恐い", romaji: "kowai", meaning: "aterrador / miedo", distractors: ["divertido", "bonito", "tranquilo"] },
    { word: "何も無い", romaji: "nanimo nai", meaning: "no hay nada", distractors: ["hay de todo", "sobra", "falta"] },
    { word: "見送る", romaji: "miokuru", meaning: "despedir / acompañar hasta", distractors: ["recibir", "llamar", "esperar"] },
    { word: "言葉", romaji: "kotoba", meaning: "palabra / palabras", distractors: ["silencio", "gesto", "ruido"] },
    { word: "涙", romaji: "namida", meaning: "lágrimas", distractors: ["sonrisa", "sangre", "sudor"] },
    { word: "流れた", romaji: "nagareta", meaning: "fluyeron / corrieron", distractors: ["se secaron", "pararon", "subieron"] },
    { word: "つまらぬ", romaji: "tsumaranu", meaning: "trivial / aburrido", distractors: ["importante", "interesante", "serio"] },
    { word: "話", romaji: "hanashi", meaning: "conversación / charla", distractors: ["pelea", "silencio", "carta"] },
    { word: "絶えず", romaji: "taezu", meaning: "sin cesar / constantemente", distractors: ["a veces", "nunca", "raramente"] },
    { word: "散らかる", romaji: "chirakaru", meaning: "estar desordenado", distractors: ["ordenado", "limpio", "vacío"] },
    { word: "部屋", romaji: "heya", meaning: "habitación", distractors: ["cocina", "calle", "jardín"] },
    { word: "笑いあえてた", romaji: "waraiaeteta", meaning: "podíamos reír juntos", distractors: ["llorábamos", "peleábamos", "callábamos"] },
    { word: "夢", romaji: "yume", meaning: "sueño", distractors: ["pesadilla", "realidad", "recuerdo"] },
    { word: "追う", romaji: "ou", meaning: "perseguir / seguir", distractors: ["huir", "evitar", "olvidar"] },
    { word: "恐れ", romaji: "osore", meaning: "miedo / temor", distractors: ["valor", "alegría", "calma"] },
    { word: "無くて", romaji: "nakute", meaning: "sin / no habiendo", distractors: ["con", "teniendo", "siendo"] },
    { word: "生まれた", romaji: "umareta", meaning: "nació / nacido", distractors: ["murió", "creció", "llegó"] },
    { word: "街", romaji: "machi", meaning: "ciudad / pueblo", distractors: ["país", "montaña", "mar"] },
    { word: "サヨナラ", romaji: "sayonara", meaning: "adiós", distractors: ["hola", "gracias", "perdón"] },
    { word: "決めた", romaji: "kimeta", meaning: "decidió", distractors: ["dudó", "olvidó", "cambió"] },
    { word: "いつか", romaji: "itsuka", meaning: "algún día", distractors: ["nunca", "siempre", "ahora"] },
    { word: "会いに来る", romaji: "ai ni kuru", meaning: "venir a ver / a encontrarse", distractors: ["irse lejos", "llamar", "escribir"] },
    { word: "いつも", romaji: "itsumo", meaning: "siempre", distractors: ["nunca", "a veces", "raramente"] },
    { word: "忘れない", romaji: "wasurenai", meaning: "no olvidar", distractors: ["olvidar", "recordar mal", "ignorar"] },
    { word: "手を振る", romaji: "te wo furu", meaning: "agitar la mano / despedir", distractors: ["aplaudir", "señalar", "cerrar"] },
    { word: "瞳", romaji: "hitomi", meaning: "ojos / mirada", distractors: ["boca", "oreja", "mano"] },
    { word: "言えずに", romaji: "iezu ni", meaning: "sin poder decir", distractors: ["diciendo", "gritando", "escribiendo"] },
    { word: "ココロ", romaji: "kokoro", meaning: "corazón / mente", distractors: ["cuerpo", "cabeza", "voz"] },
    { word: "中", romaji: "naka", meaning: "dentro / interior", distractors: ["fuera", "arriba", "abajo"] },
    { word: "誓う", romaji: "chikau", meaning: "jurar / prometer", distractors: ["mentir", "dudar", "negar"] },
    { word: "旅立つ", romaji: "tabidatsu", meaning: "partir / emprender viaje", distractors: ["llegar", "quedarse", "regresar"] },
    { word: "空", romaji: "sora", meaning: "cielo", distractors: ["tierra", "mar", "montaña"] },
    { word: "出会い", romaji: "deai", meaning: "encuentro", distractors: ["despedida", "pelea", "olvido"] },
    { word: "別れ", romaji: "wakare", meaning: "separación / despedida", distractors: ["encuentro", "unión", "inicio"] },
    { word: "青春", romaji: "seishun", meaning: "juventud", distractors: ["vejez", "infancia", "muerte"] },
    { word: "日々", romaji: "hibi", meaning: "días / cotidianidad", distractors: ["noches", "años", "segundos"] },
    { word: "全て", romaji: "subete", meaning: "todo", distractors: ["nada", "poco", "algo"] },
    { word: "描き", romaji: "egaki", meaning: "dibujar / pintar", distractors: ["borrar", "ocultar", "romper"] },
    { word: "互いに", romaji: "tagai ni", meaning: "mutuamente", distractors: ["solo", "contra", "sin"] },
    { word: "大きな", romaji: "ōkina", meaning: "grande", distractors: ["pequeño", "fino", "corto"] },
    { word: "花", romaji: "hana", meaning: "flor", distractors: ["árbol", "hoja", "fruta"] },
    { word: "綺麗な", romaji: "kirei na", meaning: "bonita / hermosa", distractors: ["fea", "sucia", "rota"] },
    { word: "咲かせ", romaji: "sakase", meaning: "hacer florecer", distractors: ["marchitar", "cortar", "esconder"] },
    { word: "共に", romaji: "tomo ni", meaning: "juntos", distractors: ["solo", "separados", "después"] },
    { word: "笑おう", romaji: "waraou", meaning: "riamos (voluntativo)", distractors: ["lloremos", "pelemos", "calleemos"] },
    { word: "あの日", romaji: "ano hi", meaning: "aquel día", distractors: ["hoy", "mañana", "anoche"] },
    { word: "胸", romaji: "mune", meaning: "pecho / corazón", distractors: ["espalda", "mano", "cabeza"] },
    { word: "あて無く", romaji: "ate naku", meaning: "sin rumbo", distractors: ["con meta", "directo", "seguro"] },
    { word: "続く", romaji: "tsuzuku", meaning: "continuar", distractors: ["parar", "empezar", "terminar"] },
    { word: "道", romaji: "michi", meaning: "camino", distractors: ["casa", "puente", "muro"] },
    { word: "眠れぬ", romaji: "nemurenu", meaning: "que no puede dormir", distractors: ["dormilón", "despierto feliz", "cansado"] },
    { word: "夜", romaji: "yoru", meaning: "noche", distractors: ["día", "mañana", "tarde"] },
    { word: "連なる", romaji: "tsuranaru", meaning: "encadenarse / alinearse", distractors: ["separarse", "romper", "parar"] },
    { word: "叶いかけた", romaji: "kanai kaketa", meaning: "casi cumplido (sueño)", distractors: ["imposible", "olvidado", "roto"] },
    { word: "紡ぎだした", romaji: "tsumugi dashita", meaning: "hilar / tejer (palabras)", distractors: ["borrar", "romper", "ocultar"] },
    { word: "文字", romaji: "moji", meaning: "letras / caracteres", distractors: ["números", "dibujos", "sonidos"] },
    { word: "狭間", romaji: "hazama", meaning: "espacio entre / intersticio", distractors: ["centro", "borde", "cima"] },
    { word: "揺れる", romaji: "yureru", meaning: "temblar / oscilar", distractors: ["quedarse quieto", "caer", "volar"] },
    { word: "気魘れ", romaji: "kimagure", meaning: "capricho / antojo", distractors: ["plan fijo", "deber", "costumbre"] },
    { word: "日替わり", romaji: "higawari", meaning: "que cambia cada día", distractors: ["fijo", "semanal", "eterno"] },
    { word: "時計", romaji: "tokei", meaning: "reloj", distractors: ["calendario", "brújula", "mapa"] },
    { word: "針", romaji: "hari", meaning: "aguja (del reloj)", distractors: ["esfera", "cuerda", "pila"] },
    { word: "流れる", romaji: "nagareru", meaning: "fluir / pasar", distractors: ["detenerse", "subir", "congelar"] },
    { word: "雲", romaji: "kumo", meaning: "nube", distractors: ["sol", "estrella", "lluvia"] },
    { word: "明日", romaji: "asu", meaning: "mañana", distractors: ["ayer", "hoy", "noche"] },
    { word: "誓えど", romaji: "chikaedo", meaning: "aunque jure", distractors: ["si niega", "cuando olvida", "sin prometer"] },
    { word: "置いてかれてる", romaji: "oite kareteru", meaning: "dejado atrás", distractors: ["llevado", "protegido", "cercano"] },
    { word: "不安", romaji: "fuan", meaning: "inquietud / ansiedad", distractors: ["calma", "confianza", "alegría"] },
    { word: "よぎる", romaji: "yogiru", meaning: "pasar por (la mente)", distractors: ["quedarse", "olvidar", "ignorar"] },
    { word: "その度", romaji: "sono tabi", meaning: "cada vez", distractors: ["nunca", "una vez", "a veces"] },
    { word: "思い返して", romaji: "omoikaeshite", meaning: "recordar / repasar en la mente", distractors: ["olvidar", "ignorar", "borrar"] },
    { word: "集め", romaji: "atsume", meaning: "reunir / juntar", distractors: ["dispersar", "tirar", "ocultar"] },
    { word: "声枯らす", romaji: "koe karasu", meaning: "quedarse sin voz", distractors: ["cantar fuerte", "susurrar", "callar"] },
    { word: "今も", romaji: "ima mo", meaning: "aún ahora", distractors: ["nunca", "antes", "después"] },
    { word: "信じている", romaji: "shinjite iru", meaning: "creer / confiar", distractors: ["dudar", "negar", "odiar"] },
    { word: "帰らぬ", romaji: "kaeranu", meaning: "que no vuelve", distractors: ["que vuelve", "eterno", "pasajero"] },
    { word: "傻き", romaji: "hakanaki", meaning: "efímero / fugaz", distractors: ["eterno", "sólido", "fuerte"] },
    { word: "蒼き", romaji: "aoki", meaning: "azul / azulado", distractors: ["rojo", "blanco", "negro"] },
    { word: "変わらぬ", romaji: "kawaranu", meaning: "que no cambia", distractors: ["cambiante", "nuevo", "viejo"] },
    { word: "映して", romaji: "utsushite", meaning: "reflejar / proyectar", distractors: ["ocultar", "borrar", "romper"] },
    { word: "上手く", romaji: "umaku", meaning: "bien / hábilmente", distractors: ["mal", "torpe", "lento"] },
    { word: "飛べたら", romaji: "tobetara", meaning: "si pudiera volar", distractors: ["si cayera", "si corriera", "si nadara"] },
    { word: "高く", romaji: "takaku", meaning: "alto", distractors: ["bajo", "cerca", "lejos"] },
    { word: "ツバサ", romaji: "tsubasa", meaning: "alas", distractors: ["patas", "manos", "ojos"] },
    { word: "広げて", romaji: "hirogete", meaning: "extender / desplegar", distractors: ["cerrar", "guardar", "doblar"] },
    { word: "秋風", romaji: "akikaze", meaning: "viento de otoño", distractors: ["viento de primavera", "lluvia", "nieve"] },
    { word: "超えて", romaji: "koete", meaning: "superar / cruzar", distractors: ["quedarse", "evitar", "parar"] },
    { word: "手にして", romaji: "te ni shite", meaning: "teniendo en la mano / consiguiendo", distractors: ["perdiendo", "buscando", "esperando"] },
    { word: "会えたなら", romaji: "aeta nara", meaning: "si pudiéramos encontrarnos", distractors: ["si nos separáramos", "si olvidáramos", "si huyéramos"] }
  ]
};

const EXTRA_DISTRACTORS = [
  "casa", "comida", "agua", "fuego", "libro", "amigo", "noche", "día",
  "grande", "pequeño", "rápido", "lento", "feliz", "triste"
];
