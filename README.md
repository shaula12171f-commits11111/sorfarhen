# Sorfarhen

Sistema de estudio de japonés con flashcards basado en imágenes de manga/hentai.

## Cómo usarlo

1. Abre la página en GitHub Pages (o localmente).
2. En la **pantalla principal** verás **10 galerías**.
3. Haz clic en una galería activa → aparecen sus **5 subgalerías** (con miniatura de portada).
4. Haz clic en una subgalería activa → elige:
   - **Ver hentai** → slideshow de imágenes.
   - **Ver flashcards** → bloques de 10 palabras.

### Flashcards (modo quiz)

- Palabra en japonés + botón 🔊 para escuchar.
- 4 opciones en español (1 correcta + 3 incorrectas).
- Correcta → siguiente. Incorrecta → romaji + audio.

## Estructura actual

| # | Galería principal | Subgalerías activas | Estado |
|---|-------------------|---------------------|--------|
| 1 | **quintiputas** | — | Activa (subs vacías) |
| 2 | **Historias cortas** | **itsuki playera putona 2.1** | Activa (~27 flashcards) |
| 3–10 | Galería N | — | Próximamente |

### Imágenes de 2.1 (por ahora solo playa)
- https://img.ge/i/wmODD63.png
- https://img.ge/i/oo9rL91.png

*Pendiente: URLs de los nuevos paneles de habitación (cuando se suban a un host).*

### Portadas
Campo `cover` vacío → usa `images[0]` como miniatura.

## Favicon
Letra **H** rosa (`favicon.svg`).

## Ampliar contenido

Edita `js/data.js` (GALLERIES, FLASHCARDS, MAIN_GALLERIES).

## GitHub Pages

**Settings → Pages** → branch `main` / `/ (root)`.

URL: `https://shaula12171f-commits11111.github.io/sorfarhen/`

## Historial

Ver **[CHANGELOG.md](CHANGELOG.md)**.
