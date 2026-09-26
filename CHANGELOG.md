# Changelog — Sorfarhen

Registro de cambios con fecha/hora (UTC) y cómo volver a una versión anterior.

---

## Cómo volver a una versión anterior (respaldo)

Cada cambio se guarda como un **commit** en GitHub. Para restaurar una versión:

1. Ve a: https://github.com/shaula12171f-commits11111/sorfarhen/commits/main
2. Busca el commit de la fecha que quieres.
3. Abre el commit → botón **Browse files** (o copia el SHA).
4. Opción fácil: en GitHub, usa **Revert** en el commit si está disponible.
5. Desde terminal (si clonas el repo):
   ```bash
   git clone https://github.com/shaula12171f-commits11111/sorfarhen.git
   cd sorfarhen
   git checkout <SHA-del-commit>   # ver archivos de esa versión
   # o para volver permanentemente:
   git revert <SHA>   # o git reset --hard <SHA> (cuidado)
   git push
   ```

Los SHA de cada entrada están abajo para que puedas copiarlos.

---

## [2026-09-26 12:31 UTC] — Estructura 10 galerías + imágenes reales 1.1

**Commit:** `888661c9ca44d6bcc7d254f050a99bf0682c4d30` (y anteriores de esta sesión)

### Cambios
- Pantalla principal ahora muestra **10 galerías** (Historias cortas + Galería 2–10).
- Cada galería principal tiene **5 subgalerías**.
- Solo activa: **1. Historias cortas** → sub **1.1 itsuki playera putona**.
- Imágenes reales de 1.1:
  - https://img.ge/i/wmODD63.png
  - https://img.ge/i/oo9rL91.png
- Navegación: Home → Subgalerías → Modal (Ver hentai / Ver flashcards).
- Actualizado `index.html`, `js/data.js`, `js/app.js`, `css/style.css`, `README.md`.
- Creado este `CHANGELOG.md`.

### Archivos tocados
- `index.html`
- `js/data.js`
- `js/app.js`
- `css/style.css`
- `README.md`
- `CHANGELOG.md` (nuevo)

---

## [2026-09-26 ~12:19–12:21 UTC] — Versión inicial

**Commits base:** desde creación del repo hasta `96fb67deaa25dfaca249c4c6013994c97dd02817`

### Cambios
- Primera versión del sistema de estudio.
- Un solo bloque “Historias cortas” con 5 subcontenedores.
- Solo 1.1 activo (imágenes placeholder picsum).
- Flashcards en modo quiz (palabra + 4 opciones).
- Slideshow + TTS japonés.

---

*Se añade una entrada nueva en este archivo en cada cambio importante.*
