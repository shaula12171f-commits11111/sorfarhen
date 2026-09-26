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
   git checkout <SHA-del-commit>
   git revert <SHA>   # o git reset --hard <SHA> (cuidado)
   git push
   ```

---

## [2026-09-26 12:51 UTC] — Botón de audio al lado de la palabra

**Commits:** `8423687e`, `3bda42e9`, `3d6c3d98`

### Cambios
- Botón 🔊 junto a la palabra japonesa en cada flashcard.
- Puedes escuchar la pronunciación en cualquier momento (no solo al fallar).
- Estilo circular rosa, hover con glow.

### Archivos tocados
- `index.html`, `js/app.js`, `css/style.css`, `README.md`, `CHANGELOG.md`

---

## [2026-09-26 12:41 UTC] — Estilo + swap galerías + portadas + nombre con id al final

**Commits:** `b5acd2c5`, `f65142c1`, `2ddc8300`, `0f943a0b`

### Cambios
- Cards más redondeadas, miniaturas de portada, id al final del nombre.
- Galería 1 = quintiputas, Galería 2 = Historias cortas (itsuki en 2.1).

---

## [2026-09-26 12:31 UTC] — Estructura 10 galerías + imágenes reales

---

## [2026-09-26 ~12:19 UTC] — Versión inicial

---

*Se añade una entrada nueva en este archivo en cada cambio importante.*
