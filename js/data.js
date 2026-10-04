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
  "pt1.1": { name: "motel putinha", cover: "", images: [
    "https://img.ge/i/tz76i10.png",
    "https://img.ge/i/JjjB527.png",
    "https://img.ge/i/tEDEL20.png",
    "https://img.ge/i/IU9Zt99.png"
  ] },
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
    { word: "gozando", romaji: "", meaning: "gozando / corriendose", distractors: ["durmiendo", "llorando", "riendo"] },
    { word: "por falar nisso", romaji: "", meaning: "por cierto / hablando de eso", distractors: ["de nada", "perdon", "hasta luego"] },
    { word: "chegou", romaji: "", meaning: "llego", distractors: ["salio", "espero", "volvio"] },
    { word: "hora", romaji: "", meaning: "hora", distractors: ["dia", "minuto", "semana"] },
    { word: "apresentar", romaji: "", meaning: "presentar", distractors: ["esconder", "olvidar", "ignorar"] },
    { word: "irmãs", romaji: "irmãs", meaning: "hermanas", distractors: ["amigas", "primas", "madres"] },
    { word: "não posso", romaji: "não posso", meaning: "no puedo", distractors: ["puedo", "quiero", "debo"] },
    { word: "deixar", romaji: "", meaning: "dejar", distractors: ["tomar", "traer", "guardar"] },
    { word: "elas", romaji: "", meaning: "ellas", distractors: ["ellos", "nosotros", "vosotros"] },
    { word: "conheçam", romaji: "conheçam", meaning: "conozcan", distractors: ["olviden", "eviten", "ignoren"] },
    { word: "pau", romaji: "", meaning: "pene", distractors: ["mano", "boca", "dedo"] },
    { word: "grande", romaji: "", meaning: "grande", distractors: ["pequeno", "fino", "corto"] },
    { word: "como", romaji: "", meaning: "como", distractors: ["sin", "contra", "sobre"] },
    { word: "meu", romaji: "", meaning: "mio", distractors: ["tuyo", "suyo", "nuestro"] },
    { word: "né", romaji: "né", meaning: "verdad? / no?", distractors: ["nunca", "siempre", "quiza"] },
    { word: "uma", romaji: "", meaning: "una", distractors: ["dos", "ninguna", "todas"] },
    { word: "delas", romaji: "", meaning: "de ellas", distractors: ["de ellos", "de nosotros", "de ti"] },
    { word: "casada", romaji: "", meaning: "casada", distractors: ["soltera", "divorciada", "viuda"] },
    { word: "mudar", romaji: "", meaning: "cambiar", distractors: ["quedar", "repetir", "olvidar"] },
    { word: "ideia", romaji: "ideia", meaning: "idea", distractors: ["duda", "miedo", "sueno"] },
    { word: "depois", romaji: "", meaning: "despues", distractors: ["antes", "ahora", "nunca"] },
    { word: "experimentar", romaji: "", meaning: "probar / experimentar", distractors: ["rechazar", "evitar", "ignorar"] },
    { word: "grosso", romaji: "", meaning: "grueso", distractors: ["fino", "suave", "corto"] },
    { word: "incrível", romaji: "incrível", meaning: "increible", distractors: ["normal", "malo", "aburrido"] },
    { word: "ótimo", romaji: "ótimo", meaning: "genial / optimo", distractors: ["malo", "regular", "terrible"] },
    { word: "saber", romaji: "", meaning: "saber", distractors: ["ignorar", "olvidar", "dudar"] },
    { word: "disso", romaji: "", meaning: "de eso", distractors: ["de esto", "de nada", "de todo"] },
    { word: "dia seguinte", romaji: "", meaning: "dia siguiente", distractors: ["hoy", "ayer", "manana"] },
    { word: "você", romaji: "você", meaning: "tu / usted", distractors: ["yo", "el", "nosotros"] },
    { word: "durma", romaji: "", meaning: "duerma / dormir", distractors: ["coma", "corra", "hable"] },
    { word: "negão", romaji: "negão", meaning: "negro (coloquial)", distractors: ["blanco", "amigo", "extranjero"] },
    { word: "isso mesmo", romaji: "", meaning: "exactamente / eso mismo", distractors: ["al reves", "nunca", "tal vez"] },
    { word: "fará", romaji: "fará", meaning: "hara", distractors: ["hizo", "hara no", "queria"] },
    { word: "esquecer", romaji: "", meaning: "olvidar", distractors: ["recordar", "guardar", "aprender"] },
    { word: "completamente", romaji: "", meaning: "completamente", distractors: ["un poco", "casi", "nunca"] },
    { word: "pequeno", romaji: "", meaning: "pequeno", distractors: ["grande", "largo", "grueso"] },
    { word: "certo", romaji: "", meaning: "de acuerdo / cierto", distractors: ["falso", "nunca", "quiza"] },
    { word: "mas", romaji: "", meaning: "pero", distractors: ["y", "o", "porque"] },
    { word: "só", romaji: "só", meaning: "solo", distractors: ["mucho", "nunca", "siempre"] },
    { word: "porque", romaji: "", meaning: "porque", distractors: ["aunque", "cuando", "donde"] },
    { word: "estou", romaji: "", meaning: "estoy", distractors: ["estuve", "estare", "soy"] },
    { word: "na seca", romaji: "", meaning: "en sequia / con ganas", distractors: ["satisfecha", "cansada", "ocupada"] },
    { word: "tá bom", romaji: "tá bom", meaning: "esta bien", distractors: ["esta mal", "nunca", "tal vez"] },
    { word: "ótima", romaji: "ótima", meaning: "excelente", distractors: ["mala", "regular", "pesima"] },
    { word: "escolha", romaji: "", meaning: "eleccion", distractors: ["error", "duda", "pregunta"] },
    { word: "se arrepender", romaji: "", meaning: "arrepentirse", distractors: ["alegrarse", "olvidar", "aceptar"] }
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
    { word: "国道", romaji: "kokudou", meaning: "carretera nacional", distractors: ["calle", "camino", "puente"] },
    { word: "細い", romaji: "hosoi", meaning: "estrecho / fino", distractors: ["grueso", "ancho", "largo"] },
    { word: "抜け道", romaji: "nukemichi", meaning: "atajo", distractors: ["calle principal", "tunel", "puente"] },
    { word: "君", romaji: "kimi", meaning: "tu", distractors: ["yo", "el", "ellos"] },
    { word: "呟く", romaji: "tsubuyaku", meaning: "murmurar", distractors: ["gritar", "cantar", "callar"] },
    { word: "恐い", romaji: "kowai", meaning: "miedo / aterrador", distractors: ["alegre", "tranquilo", "facil"] },
    { word: "何も無い", romaji: "nani mo nai", meaning: "no hay nada", distractors: ["hay mucho", "todo", "algo"] },
    { word: "見送る", romaji: "miokuru", meaning: "despedir", distractors: ["recibir", "abrazar", "llamar"] },
    { word: "言葉", romaji: "kotoba", meaning: "palabras", distractors: ["silencio", "gesto", "mirada"] },
    { word: "涙", romaji: "namida", meaning: "lagrimas", distractors: ["sonrisa", "sangre", "sudor"] },
    { word: "流れた", romaji: "nagareta", meaning: "fluyeron", distractors: ["se secaron", "pararon", "cayeron"] },
    { word: "つまらぬ", romaji: "tsumaranu", meaning: "trivial / sin importancia", distractors: ["importante", "serio", "grande"] },
    { word: "話", romaji: "hanashi", meaning: "conversacion / charla", distractors: ["silencio", "pelea", "carta"] },
    { word: "絶えず", romaji: "taezu", meaning: "sin cesar", distractors: ["a veces", "nunca", "raro"] },
    { word: "散らかる", romaji: "chirakaru", meaning: "estar desordenado", distractors: ["ordenado", "limpio", "vacio"] },
    { word: "部屋", romaji: "heya", meaning: "habitacion", distractors: ["cocina", "calle", "jardin"] },
    { word: "夢", romaji: "yume", meaning: "sueno", distractors: ["pesadilla", "realidad", "recuerdo"] },
    { word: "追う", romaji: "ou", meaning: "perseguir", distractors: ["huir", "esperar", "olvidar"] },
    { word: "恐れ", romaji: "osore", meaning: "miedo", distractors: ["valor", "alegria", "calma"] },
    { word: "生まれた", romaji: "umareta", meaning: "nacido", distractors: ["muerto", "crecido", "ido"] },
    { word: "街", romaji: "machi", meaning: "pueblo / ciudad", distractors: ["campo", "mar", "montana"] },
    { word: "サヨナラ", romaji: "sayonara", meaning: "adios", distractors: ["hola", "gracias", "perdon"] },
    { word: "決めた", romaji: "kimeta", meaning: "decidi", distractors: ["dude", "olvide", "espere"] },
    { word: "いつか", romaji: "itsuka", meaning: "algun dia", distractors: ["nunca", "ahora", "ayer"] },
    { word: "会いに来る", romaji: "ai ni kuru", meaning: "venir a ver", distractors: ["irse lejos", "olvidar", "esconderse"] },
    { word: "いつも", romaji: "itsumo", meaning: "siempre", distractors: ["nunca", "a veces", "raro"] },
    { word: "忘れない", romaji: "wasurenai", meaning: "no olvidar", distractors: ["olvidar", "recordar mal", "ignorar"] },
    { word: "手を振る", romaji: "te o furu", meaning: "saludar con la mano", distractors: ["aplaudir", "esconder", "senalar"] },
    { word: "瞳", romaji: "hitomi", meaning: "ojos / mirada", distractors: ["boca", "manos", "voz"] },
    { word: "ココロ", romaji: "kokoro", meaning: "corazon", distractors: ["cabeza", "mano", "cuerpo"] },
    { word: "誓う", romaji: "chikau", meaning: "jurar", distractors: ["mentir", "dudar", "olvidar"] },
    { word: "旅立つ", romaji: "tabidatsu", meaning: "partir de viaje", distractors: ["quedarse", "volver", "descansar"] },
    { word: "空", romaji: "sora", meaning: "cielo", distractors: ["tierra", "mar", "montana"] },
    { word: "出会い", romaji: "deai", meaning: "encuentro", distractors: ["despedida", "pelea", "silencio"] },
    { word: "別れ", romaji: "wakare", meaning: "despedida / separacion", distractors: ["encuentro", "abrazo", "reunion"] },
    { word: "青春", romaji: "seishun", meaning: "juventud", distractors: ["vejez", "infancia", "futuro"] },
    { word: "日々", romaji: "hibi", meaning: "dias / cotidianidad", distractors: ["noches", "anos", "minutos"] },
    { word: "全て", romaji: "subete", meaning: "todo", distractors: ["nada", "algo", "poco"] },
    { word: "描き", romaji: "egaki", meaning: "dibujar / pintar", distractors: ["borrar", "ocultar", "romper"] },
    { word: "互いに", romaji: "tagai ni", meaning: "mutuamente", distractors: ["solo", "aparte", "contra"] },
    { word: "花", romaji: "hana", meaning: "flor", distractors: ["arbol", "hoja", "fruta"] },
    { word: "綺麗", romaji: "kirei", meaning: "hermoso / limpio", distractors: ["feo", "sucio", "roto"] },
    { word: "咲かせ", romaji: "sakase", meaning: "hacer florecer", distractors: ["marchitar", "cortar", "esconder"] },
    { word: "共に", romaji: "tomo ni", meaning: "juntos", distractors: ["solo", "aparte", "despues"] },
    { word: "笑おう", romaji: "waraou", meaning: "riamos", distractors: ["lloremos", "callenos", "huyamos"] },
    { word: "胸", romaji: "mune", meaning: "pecho / corazon", distractors: ["espalda", "cabeza", "mano"] },
    { word: "道", romaji: "michi", meaning: "camino", distractors: ["muro", "casa", "rio"] },
    { word: "眠れぬ", romaji: "nemurenu", meaning: "sin poder dormir", distractors: ["dormido", "descansado", "tranquilo"] },
    { word: "夜", romaji: "yoru", meaning: "noche", distractors: ["dia", "manana", "tarde"] },
    { word: "叶いかけた", romaji: "kanaikaketa", meaning: "casi realizado", distractors: ["imposible", "olvidado", "roto"] },
    { word: "紡ぎだした", romaji: "tsumugidashita", meaning: "hilado / tejido", distractors: ["roto", "olvidado", "escondido"] },
    { word: "文字", romaji: "moji", meaning: "letras / caracteres", distractors: ["dibujos", "numeros solos", "silencio"] },
    { word: "狭間", romaji: "hazama", meaning: "entre / intermedio", distractors: ["centro", "borde", "afuera"] },
    { word: "揺れる", romaji: "yureru", meaning: "temblar / balancearse", distractors: ["quedarse quieto", "caer", "saltar"] },
    { word: "気紛れ", romaji: "kimagure", meaning: "capricho", distractors: ["constancia", "plan", "deber"] },
    { word: "時計", romaji: "tokei", meaning: "reloj", distractors: ["calendario", "brujula", "mapa"] },
    { word: "針", romaji: "hari", meaning: "aguja (del reloj)", distractors: ["esfera", "pila", "caja"] },
    { word: "雲", romaji: "kumo", meaning: "nube", distractors: ["sol", "estrella", "luna"] },
    { word: "明日", romaji: "asu", meaning: "manana", distractors: ["ayer", "hoy", "nunca"] },
    { word: "不安", romaji: "fuan", meaning: "ansiedad / inquietud", distractors: ["calma", "alegria", "confianza"] },
    { word: "思い返して", romaji: "omoikaeshite", meaning: "recordar / repasar", distractors: ["olvidar", "ignorar", "esconder"] },
    { word: "信じている", romaji: "shinjite iru", meaning: "creer / confiar", distractors: ["dudar", "odiar", "olvidar"] },
    { word: "儚き", romaji: "hakanaki", meaning: "efimero / fugaz", distractors: ["eterno", "fuerte", "solido"] },
    { word: "蒼き", romaji: "aoki", meaning: "azul (poetico)", distractors: ["rojo", "verde", "negro"] },
    { word: "変わらぬ", romaji: "kawaranu", meaning: "inmutable / que no cambia", distractors: ["cambiante", "nuevo", "roto"] },
    { word: "映して", romaji: "utsushite", meaning: "reflejar", distractors: ["ocultar", "borrar", "romper"] },
    { word: "飛べたら", romaji: "tobetara", meaning: "si pudiera volar", distractors: ["si cayera", "si corriera", "si nadara"] },
    { word: "高く", romaji: "takaku", meaning: "alto", distractors: ["bajo", "cerca", "lento"] },
    { word: "ツバサ", romaji: "tsubasa", meaning: "alas", distractors: ["patas", "manos", "ojos"] },
    { word: "広げて", romaji: "hirogete", meaning: "extender", distractors: ["cerrar", "guardar", "doblar"] },
    { word: "秋風", romaji: "akikaze", meaning: "viento de otono", distractors: ["viento de primavera", "lluvia", "nieve"] },
    { word: "越えて", romaji: "koete", meaning: "superar / cruzar", distractors: ["detenerse", "evitar", "caer"] },
    { word: "会えたなら", romaji: "aeta nara", meaning: "si pudieramos encontrarnos", distractors: ["si nos separáramos", "si olvidáramos", "si huyéramos"] }
  ]
};

const PARAGRAPHS = {
  "pt1.1": [
    {
      image: 0,
      label: "Imagen 1",
      lines: [
        "Certa noite em um motel:",
        "Sim mestre!! Me foda com força!!",
        "Arrebenta a minha buceta com esse pauzão preto!!",
        "Ahah, quer que os vizinhos te ouçam, sua putinha?"
      ]
    },
    {
      image: 1,
      label: "Imagen 2",
      lines: [
        "Eu vou gozar, caralho!",
        "Tome toda minha porra grossa, sua putinha!",
        "Consigo sentir a camisinha enchendo com a porra grossa desse pauzão preto",
        "Gozandoooo!!"
      ]
    },
    {
      image: 2,
      label: "Imagen 3",
      lines: [
        "Por falar nisso, Ichika…",
        "Chegou a hora de me apresentar as suas irmãs, não posso deixar que elas não conheçam um pau grande e preto como o meu, né?",
        "Siim, mestre!",
        "Uma delas não é casada?",
        "É sim, mas ela vai mudar de ideia depois de experimentar esse pau, grande, grosso e incrível.",
        "Ahah é ótimo saber disso."
      ]
    },
    {
      image: 3,
      label: "Imagen 4",
      lines: [
        "Dia seguinte:",
        "Você quer que eu durma com esse negão!?",
        "Isso mesmo. O mestre fará você esquecer completamente do pequeno Futaro-kun.",
        "Mestre!? Certo... mas isso é só porque estou na seca, tá bom!?",
        "Heh... ótima escolha, você não vai se arrepender disso."
      ]
    }
  ],
  "op-tsubasa": [
    {
      image: 0,
      label: "Letra (resumen)",
      lines: [
        "明け方過ぎの国道までの細い抜け道 君が呟く",
        "「恐いものなど何も無いよ」と見送る為の言葉に涙流れた",
        "夢追う事に恐れは無くて 生まれた街とサヨナラ決めた",
        "旅立つ空に 出会いと別れ 青春の日々 全てを描き",
        "いつか互いに大きな花を 綺麗な花を咲かせまた共に笑おう",
        "ツバサ広げて 秋風越えて 夢を手にして 会えたなら共に笑おう"
      ]
    }
  ]
};

const EXTRA_DISTRACTORS = ["casa", "comida", "agua", "fuego", "libro", "amigo", "noche", "dia", "grande", "pequeno", "rapido", "lento", "feliz", "triste"];
