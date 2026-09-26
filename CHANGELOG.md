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

## [2026-09-26 12:41 UTC] — Estilo + swap galerías + portadas + nombre con id al final

**Commits principales de esta sesión:**
- `b5acd2c5a86195182e796a36e46a4d64b6cd3c30` (data)
- `f65142c140fbf92b8a32caff21f9838588e2b931` (app)
- `2ddc83000ad5a1931b6c4668c922e14e62376314` (css)
- `0f943a0b4b3a85bb763d14be666efff936e955e2` (readme)

### Cambios
- **Más estilo**: cards menos cuadradas, más redondeadas, sombras suaves, hover con scale, gradientes.
- **Miniatura de portada** en cada subgalería activa.
  - Campo `cover` en `GALLERIES` (vacío por defecto).
  - Si `cover` está vacío → se usa la **primera imagen** de `images`.
- El número de subgalería va al **final** del nombre: `itsuki playera putona 2.1`.
- **Intercambio de galerías**:
  - Galería 1 = **quintiputas** (activa, subs vacías)
  - Galería 2 = **Historias cortas** (activa)
- Contenido itsuki movido de 1.1 → **2.1** (imágenes + flashcards).

### Archivos tocados
- `js/data.js`
- `js/app.js`
- `css/style.css`
- `README.md`
- `CHANGELOG.md`

---

## [2026-09-26 12:31 UTC] — Estructura 10 galerías + imágenes reales 1.1

**Commit:** `888661c9ca44d6bcc7d254f050a99bf0682c4d30` (y anteriores de esa sesión)

### Cambios
- Pantalla principal con **10 galerías**.
- Cada una con **5 subgalerías**.
- Solo activa: 1. Historias cortas → 1.1 itsuki playera putona.
- Imágenes reales de 1.1.
- Creado `CHANGELOG.md`.

---

## [2026-09-26 ~12:19–12:21 UTC] — Versión inicial

**Commits base:** hasta `96fb67deaa25dfaca249c4c6013994c97dd02817`

### Cambios
- Primera versión del sistema.
- Un bloque “Historias cortas” con 5 subcontenedores.
- Flashcards modo quiz + slideshow + TTS.

---

*Se añade una entrada nueva en este archivo en cada cambio importante.*
