# Sorfarhen

Sistema de estudio de japonés con flashcards basado en imágenes de manga/hentai.

## Cómo usarlo

1. Abre la página en GitHub Pages (o localmente).
2. En la **pantalla principal** verás **10 galerías**.
3. Haz clic en una galería activa → aparecen sus **5 subgalerías** (con miniatura de portada).
4. Haz clic en una subgalería activa → elige:
   - **Ver hentai** → slideshow de imágenes (clic en imagen o flechas para avanzar).
   - **Ver flashcards** → bloques de 10 palabras.

### Flashcards (modo quiz)

- Sale la **palabra en japonés** arriba + botón 🔊 al lado para **escuchar** cuando quieras.
- 4 opciones en español (1 correcta + 3 incorrectas, al azar).
- **Correcta** → pasa a la siguiente.
- **Incorrecta** → muestra el **romaji** + reproduce audio (TTS japonés).
- Clic **fuera** de los botones (en la tarjeta) también muestra la lectura + audio.
- Botón **Siguiente** aparece solo tras un error.

## Estructura actual

| # | Galería principal | Subgalerías activas | Estado |
|---|-------------------|---------------------|--------|
| 1 | **quintiputas** | — | Activa (subs vacías) |
| 2 | **Historias cortas** | **itsuki playera putona 2.1** | Activa (2 imágenes) |
| 3–10 | Galería N | — | Próximamente |

### Imágenes de 2.1 (itsuki playera putona)
- https://img.ge/i/wmODD63.png
- https://img.ge/i/oo9rL91.png

### Portadas de subgalerías
En `GALLERIES` cada entrada tiene un campo `cover`.
- Si `cover` está vacío (`""`), se usa automáticamente la **primera imagen** de `images` como miniatura.
- Puedes poner una URL propia en `cover` cuando quieras una portada distinta.

## Favicon

Letra **H** rosa en la pestaña del navegador (`favicon.svg`).

## Ampliar contenido

Edita `js/data.js`:

### Activar una galería principal
Cambia `active: true` en `MAIN_GALLERIES`.

### Añadir subgalería con imágenes
```js
GALLERIES["1.1"] = {
  name: "nombre",
  cover: "",          // vacío = usa images[0]
  images: ["url1", "url2"]
};
// Y en MAIN_GALLERIES pon active: true en ese sub
```

### Añadir flashcards
```js
FLASHCARDS["2.1"].push({
  word: "水",
  romaji: "mizu",
  meaning: "agua",
  distractors: ["fuego", "tierra", "aire"]
});
```

## GitHub Pages

**Settings → Pages** → Source: branch `main` / folder `/ (root)`.

URL: `https://shaula12171f-commits11111.github.io/sorfarhen/`

## Historial de cambios

Ver **[CHANGELOG.md](CHANGELOG.md)** para fechas, horas y cómo volver a una versión anterior.

## Notas

- El audio usa la API de síntesis de voz del navegador (ja-JP).
- Botón de altavoz al lado de la palabra en cada flashcard.
- Diseñado para móvil y escritorio.
