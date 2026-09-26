# Sorfarhen

Sistema de estudio de japonés con flashcards basado en imágenes de manga/hentai.

## Cómo usarlo

1. Abre la página en GitHub Pages (o localmente).
2. En **Historias cortas** haz clic en un subcontenedor (ej. **1.1 itsuki playera putona**).
3. Elige:
   - **Ver hentai** → slideshow de imágenes (clic en imagen o flechas para avanzar).
   - **Ver flashcards** → bloques de 10 palabras.

### Flashcards (modo quiz)

- Sale la **palabra en japonés** arriba.
- 4 opciones en español (1 correcta + 3 incorrectas, al azar).
- **Correcta** → pasa a la siguiente.
- **Incorrecta** → muestra el **romaji** + reproduce audio (TTS japonés).
- Clic **fuera** de los botones (en la tarjeta) también muestra la lectura + audio.
- Botón **Siguiente** aparece solo tras un error.

## Ampliar contenido

Edita `js/data.js`:

### Añadir imágenes a una galería
```js
GALLERIES["1.1"].images.push("url-de-tu-imagen.jpg");
```

### Añadir nueva subgalería
```js
GALLERIES["1.2"] = {
  name: "nombre de la serie",
  images: ["url1", "url2"]
};

FLASHCARDS["1.2"] = [
  {
    word: "水",
    romaji: "mizu",
    meaning: "agua",
    distractors: ["fuego", "tierra", "aire"]
  }
  // ... más
];
```

Luego añade el subcontenedor correspondiente en `index.html`.

### Añadir flashcards a 1.1
Solo agrega objetos al array `FLASHCARDS["1.1"]`.

## GitHub Pages

Ve a **Settings → Pages** del repositorio y elige la rama `main` / carpeta `/ (root)`.
La URL será algo como:  
`https://shaula12171f-commits11111.github.io/sorfarhen/`

## Notas

- Las imágenes actuales son placeholders (picsum). Sustitúyelas por las tuyas.
- El audio usa la API de síntesis de voz del navegador (ja-JP).
- Diseñado para móvil y escritorio.
