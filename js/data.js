// Datos de galerias, openings e imagenes

const TOP_CATEGORIES = [
  { id: "hentai", name: "Galerias hentai", desc: "Manga / hentai + flashcards (JP)", icon: "🖼️", active: true },
  { id: "hentai-pt", name: "Galerias hentai PT", desc: "Manga / hentai + flashcards (portugues)", icon: "🇧🇷", active: true },
  { id: "openings", name: "Openings", desc: "Vocabulario de openings de anime", icon: "🎵", active: true }
];

const OPENINGS = [
  { id: "op-dark-seeks-light", name: "Dark seeks light", anime: "Sicario isekai (Ansatsusha)", artist: "ニノミヤユイ", active: true },
  { id: "op-nanatsu-1", name: "熱情のスペクトラム", anime: "Nanatsu no Taizai OP1", artist: "いきものがかり", active: true },
  { id: "op-tsubasa", name: "ツバサ", anime: "Mushoku Tensei (Nanahoshi cover)", artist: "ナナホシ / UNDERGRAPH", active: true }
];

const MAIN_GALLERIES = [
  { id: "1", name: "quintiputas", active: true, subs: [
    { id: "1.1", name: "Proximamente", active: false }, { id: "1.2", name: "Proximamente", active: false },
    { id: "1.3", name: "Proximamente", active: false }, { id: "1.4", name: "Proximamente", active: false },
    { id: "1.5", name: "Proximamente", active: false }
  ]},
  { id: "2", name: "Historias cortas", active: true, subs: [
    { id: "2.1", name: "itsuki playera putona", active: true },
    { id: "2.2", name: "ichika putona sexo de chill", active: true },
    { id: "2.3", name: "Proximamente", active: false }, { id: "2.4", name: "Proximamente", active: false },
    { id: "2.5", name: "Proximamente", active: false }
  ]},
  { id: "3", name: "Galeria 3", active: false, subs: [
    { id: "3.1", name: "Proximamente", active: false }, { id: "3.2", name: "Proximamente", active: false },
    { id: "3.3", name: "Proximamente", active: false }, { id: "3.4", name: "Proximamente", active: false },
    { id: "3.5", name: "Proximamente", active: false }
  ]}
];

const MAIN_GALLERIES_PT = [
  { id: "pt1", name: "quintiputas", active: true, subs: [
    { id: "pt1.1", name: "motel putinha", active: true },
    { id: "pt1.2", name: "Proximamente", active: false },
    { id: "pt1.3", name: "Proximamente", active: false },
    { id: "pt1.4", name: "Proximamente", active: false },
    { id: "pt1.5", name: "Proximamente", active: false }
  ]},
  { id: "pt2", name: "Galeria 2", active: false, subs: [
    { id: "pt2.1", name: "Proximamente", active: false },
    { id: "pt2.2", name: "Proximamente", active: false },
    { id: "pt2.3", name: "Proximamente", active: false },
    { id: "pt2.4", name: "Proximamente", active: false },
    { id: "pt2.5", name: "Proximamente", active: false }
  ]}
];

const GALLERIES = {
  "pt1.1": { name: "motel putinha", cover: "", images: ["https://img.ge/i/tz76i10.png", "https://img.ge/i/JjjB527.png"] },
  "2.1": { name: "itsuki playera putona", cover: "", images: ["https://img.ge/i/wmODD63.png", "https://img.ge/i/oo9rL91.png"] },
  "2.2": { name: "ichika putona sexo de chill", cover: "", images: ["https://img.ge/i/6ot6t26.png", "https://img.ge/i/dazsg51.png"] }
};

const FLASHCARDS = {
  "2.1": [
    { word: "見ないで", romaji: "minaite de", meaning: "no mires", distractors: ["no hables", "no toques", "no te vayas"] },
    { word: "正気", romaji: "shoki", meaning: "cuerdo / cordura", distractors: ["loco", "enfermo", "cansado"] },
    { word: "水着", romaji: "mizugi", meaning: "traje de bano", distractors: ["toalla", "sombrero", "gafas"] },
    { word: "忘れて", romaji: "wasurete", meaning: "olvidar (forma te)", distractors: ["recordar", "llevar", "comprar"] },
    { word: "予備", romaji: "yobi", meaning: "de repuesto", distractors: ["principal", "roto", "nuevo"] },
    { word: "波", romaji: "nami", meaning: "ola", distractors: ["viento", "lluvia", "sol"] },
    { word: "凄かった", romaji: "sugokatta", meaning: "fue increible", distractors: ["fue malo", "fue normal", "fue pequeno"] },
    { word: "隠せ", romaji: "kakuse", meaning: "cubre / esconde", distractors: ["muestra", "abre", "tira"] },
    { word: "前", romaji: "mae", meaning: "frente / delante", distractors: ["atras", "lado", "arriba"] },
    { word: "お前", romaji: "omae", meaning: "tu (informal)", distractors: ["yo", "el", "nosotros"] },
    { word: "持って来て", romaji: "motte kite", meaning: "traer", distractors: ["llevarse", "dejar", "romper"] }
  ],
  "2.2": [
    { word: "結局", romaji: "kekkyoku", meaning: "al final", distractors: ["al principio", "de repente", "quizas"] },
    { word: "朝まで", romaji: "asa made", meaning: "hasta la manana", distractors: ["hasta la noche", "todo el dia", "un momento"] },
    { word: "しちゃった", romaji: "shichatta", meaning: "lo hicimos", distractors: ["lo dejamos", "lo olvidamos", "lo intentamos"] },
    { word: "どうする", romaji: "do suru", meaning: "que hacemos?", distractors: ["quien eres?", "donde vas?", "cuando es?"] },
    { word: "もう一回", romaji: "mo ikkai", meaning: "una vez mas", distractors: ["la ultima vez", "nunca mas", "dos veces"] },
    { word: "学校", romaji: "gakko", meaning: "escuela", distractors: ["casa", "trabajo", "hospital"] },
    { word: "遅れる", romaji: "okureru", meaning: "llegar tarde", distractors: ["llegar temprano", "salir", "correr"] },
    { word: "一緒に", romaji: "issho ni", meaning: "juntos", distractors: ["solo", "despues", "antes"] },
    { word: "サボる", romaji: "saboru", meaning: "saltarse", distractors: ["estudiar", "llegar", "aprobar"] },
    { word: "おいで", romaji: "oide", meaning: "ven aqui", distractors: ["vete", "espera", "duerme"] },
    { word: "やる気", romaji: "yaruki", meaning: "ganas", distractors: ["sueno", "hambre", "miedo"] },
    { word: "やめ", romaji: "yame", meaning: "para", distractors: ["sigue", "empieza", "mira"] },
    { word: "バレたら", romaji: "baretara", meaning: "si nos descubren", distractors: ["si ganamos", "si llueve", "si terminamos"] },
    { word: "みんなで", romaji: "minna de", meaning: "todos juntos", distractors: ["solo yo", "de dos", "nadie"] }
  ],
  "pt1.1": [
    { word: "certa", romaji: "", meaning: "cierta / una", distractors: ["falsa", "otra", "ninguna"] },
    { word: "noite", romaji: "", meaning: "noche", distractors: ["dia", "tarde", "manana"] },
    { word: "em", romaji: "", meaning: "en", distractors: ["de", "con", "por"] },
    { word: "um", romaji: "", meaning: "un", distractors: ["una", "el", "algun"] },
    { word: "motel", romaji: "", meaning: "motel", distractors: ["hotel", "casa", "calle"] },
    { word: "sim", romaji: "", meaning: "si", distractors: ["no", "tal vez", "nunca"] },
    { word: "mestre", romaji: "", meaning: "amo / maestro", distractors: ["sirviente", "amigo", "enemigo"] },
    { word: "me foda", romaji: "", meaning: "follame", distractors: ["besame", "dejame", "esperame"] },
    { word: "com", romaji: "", meaning: "con", distractors: ["sin", "para", "sobre"] },
    { word: "força", romaji: "força", meaning: "fuerza", distractors: ["suavidad", "miedo", "calma"] },
    { word: "arrebenta", romaji: "", meaning: "destroza / rompe", distractors: ["acaricia", "besa", "mira"] },
    { word: "a", romaji: "", meaning: "a / la", distractors: ["de", "en", "por"] },
    { word: "minha", romaji: "", meaning: "mi / mia", distractors: ["tu", "su", "nuestra"] },
    { word: "buceta", romaji: "", meaning: "cono / vagina", distractors: ["boca", "mano", "pecho"] },
    { word: "esse", romaji: "", meaning: "ese", distractors: ["este", "aquel", "otro"] },
    { word: "pauzão", romaji: "pauzão", meaning: "pene grande / pollon", distractors: ["dedo", "lengua", "juguete"] },
    { word: "preto", romaji: "", meaning: "negro", distractors: ["blanco", "rojo", "azul"] },
    { word: "quer", romaji: "", meaning: "quieres", distractors: ["puedes", "debes", "sabes"] },
    { word: "que", romaji: "", meaning: "que", distractors: ["cual", "quien", "donde"] },
    { word: "os", romaji: "", meaning: "los", distractors: ["las", "unos", "mis"] },
    { word: "vizinhos", romaji: "", meaning: "vecinos", distractors: ["amigos", "padres", "extranjeros"] },
    { word: "te", romaji: "", meaning: "te", distractors: ["me", "se", "nos"] },
    { word: "ouçam", romaji: "ouçam", meaning: "oigan", distractors: ["vean", "toquen", "ignoren"] },
    { word: "sua", romaji: "", meaning: "tu / suya", distractors: ["mi", "nuestra", "su"] },
    { word: "putinha", romaji: "", meaning: "putita", distractors: ["senora", "amiga", "hermana"] },
    { word: "eu", romaji: "", meaning: "yo", distractors: ["tu", "el", "nosotros"] },
    { word: "vou", romaji: "", meaning: "voy", distractors: ["vienes", "viene", "vamos"] },
    { word: "gozar", romaji: "", meaning: "correrme / gozar", distractors: ["dormir", "comer", "parar"] },
    { word: "caralho", romaji: "", meaning: "carajo", distractors: ["por favor", "gracias", "perdon"] },
    { word: "tome", romaji: "", meaning: "toma", distractors: ["dale", "deja", "guarda"] },
    { word: "toda", romaji: "", meaning: "toda", distractors: ["media", "poca", "ninguna"] },
    { word: "porra", romaji: "", meaning: "leche / semen", distractors: ["agua", "sangre", "sudor"] },
    { word: "grossa", romaji: "", meaning: "gruesa", distractors: ["fina", "suave", "corta"] },
    { word: "consigo", romaji: "", meaning: "consigo", distractors: ["no puedo", "quiero", "intento"] },
    { word: "sentir", romaji: "", meaning: "sentir", distractors: ["ver", "oir", "tocar"] },
    { word: "camisinha", romaji: "", meaning: "condon", distractors: ["camiseta", "toalla", "sabanas"] },
    { word: "enchendo", romaji: "", meaning: "llenando", distractors: ["vaciando", "limpiando", "cerrando"] },
    { word: "desse", romaji: "", meaning: "de ese", distractors: ["de este", "de aquel", "de otro"] },
    { word: "gozando", romaji: "", meaning: "gozando / corriendose", distractors: ["durmiendo", "llorando", "riendo"] }
  ],
  "op-dark-seeks-light": [
    { word: "不平等", romaji: "fubyodo", meaning: "desigualdad", distractors: ["igualdad", "paz", "libertad"] },
    { word: "生", romaji: "sei", meaning: "vida", distractors: ["muerte", "sueno", "tiempo"] },
    { word: "密かに", romaji: "hisoka ni", meaning: "en secreto", distractors: ["abiertamente", "rapido", "juntos"] },
    { word: "正義", romaji: "seigi", meaning: "justicia", distractors: ["maldad", "mentira", "odio"] },
    { word: "未来", romaji: "mirai", meaning: "futuro", distractors: ["pasado", "presente", "historia"] },
    { word: "運命", romaji: "unmei", meaning: "destino", distractors: ["azar", "eleccion", "pasado"] },
    { word: "暗闇", romaji: "kurayami", meaning: "oscuridad", distractors: ["luz", "brillo", "dia"] },
    { word: "絶望", romaji: "zetsubo", meaning: "desesperacion", distractors: ["esperanza", "alegria", "paz"] },
    { word: "叫ぶ", romaji: "sakebu", meaning: "gritar", distractors: ["susurrar", "callar", "reír"] }
  ],
  "op-nanatsu-1": [
    { word: "鳴りやまぬ", romaji: "nariyamanu", meaning: "que no cesa", distractors: ["que para", "silencioso", "debil"] },
    { word: "愛", romaji: "ai", meaning: "amor", distractors: ["odio", "miedo", "ira"] },
    { word: "叫ぶ", romaji: "sakebu", meaning: "gritar", distractors: ["susurrar", "callar", "cantar"] },
    { word: "すべて", romaji: "subete", meaning: "todo", distractors: ["nada", "algo", "poco"] },
    { word: "希望", romaji: "kibo", meaning: "esperanza", distractors: ["desesperacion", "miedo", "duda"] },
    { word: "僕", romaji: "boku", meaning: "yo", distractors: ["tu", "el", "nosotros"] },
    { word: "生きる", romaji: "ikiru", meaning: "vivir", distractors: ["morir", "dormir", "huir"] },
    { word: "夢", romaji: "yume", meaning: "sueno", distractors: ["pesadilla", "realidad", "recuerdo"] },
    { word: "世界", romaji: "sekai", meaning: "mundo", distractors: ["pais", "ciudad", "casa"] },
    { word: "諦めぬ", romaji: "akiramenu", meaning: "no rendirse", distractors: ["rendirse", "huir", "olvidar"] }
  ],
  "op-tsubasa": [
    { word: "明け方", romaji: "akegata", meaning: "amanecer", distractors: ["atardecer", "noche", "mediodia"] },
    { word: "君", romaji: "kimi", meaning: "tu", distractors: ["yo", "el", "ellos"] },
    { word: "涙", romaji: "namida", meaning: "lagrimas", distractors: ["sonrisa", "sangre", "sudor"] },
    { word: "夢", romaji: "yume", meaning: "sueno", distractors: ["pesadilla", "realidad", "recuerdo"] },
    { word: "サヨナラ", romaji: "sayonara", meaning: "adios", distractors: ["hola", "gracias", "perdon"] },
    { word: "空", romaji: "sora", meaning: "cielo", distractors: ["tierra", "mar", "montana"] },
    { word: "花", romaji: "hana", meaning: "flor", distractors: ["arbol", "hoja", "fruta"] },
    { word: "ツバサ", romaji: "tsubasa", meaning: "alas", distractors: ["patas", "manos", "ojos"] },
    { word: "広げて", romaji: "hirogete", meaning: "extender", distractors: ["cerrar", "guardar", "doblar"] },
    { word: "会えたなら", romaji: "aeta nara", meaning: "si pudieramos encontrarnos", distractors: ["si nos separáramos", "si olvidáramos", "si huyéramos"] }
  ]
};

const EXTRA_DISTRACTORS = ["casa", "comida", "agua", "fuego", "libro", "amigo", "noche", "dia", "grande", "pequeno", "rapido", "lento", "feliz", "triste"];
