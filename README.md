# Sorfarhen

Sistema de estudio de japonés con flashcards basado en imágenes de manga/hentai.

## Cómo usarlo

1. Abre la página en GitHub Pages (o localmente).
2. En la **pantalla principal** verás **10 galerías**.
3. Haz clic en una galería activa (ej. **Historias cortas**) → aparecen sus **5 subgalerías**.
4. Haz clic en una subgalería activa (ej. **1.1 itsuki playera putona**) → elige:
   - **Ver hentai** → slideshow de imágenes (clic en imagen o flechas para avanzar).
   - **Ver flashcards** → bloques de 10 palabras.

### Flashcards (modo quiz)

- Sale la **palabra en japonés** arriba.
- 4 opciones en español (1 correcta + 3 incorrectas, al azar).
- **Correcta** → pasa a la siguiente.
- **Incorrecta** → muestra el **romaji** + reproduce audio (TTS japonés).
- Clic **fuera** de los botones (en la tarjeta) también muestra la lectura + audio.
- Botón **Siguiente** aparece solo tras un error.

## Estructura actual

| Galería principal | Subgalerías | Estado |
|-------------------|-------------|--------|
| 1. Historias cortas | 1.1 itsuki playera putona | Activa (2 imágenes reales) |
| 2–10 | 5 cada una | Próximamente |

### Imágenes de 1.1
- https://img.ge/i/wmODD63.png
- https://img.ge/i/oo9rL91.png

## Ampliar contenido

Edita `js/data.js`:

### Activar una galería principal
Cambia `active: true` en `MAIN_GALLERIES`.

### Añadir imágenes / subgalería
```js
GALLERIES["1.2"] = {
  name: "nombre",
  images: ["url1", "url2"]
};
// Y en MAIN_GALLERIES[0].subs pon active: true para ese id
```

### Añadir flashcards
```js
FLASHCARDS["1.1"].push({
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
- Diseñado para móvil y escritorio.
