# QA de diseño — vidaplenaenjesus.com

Revisión visual por página y tamaño (desktop 1440 / tablet 768 / mobile 390) sobre
las capturas de `/tmp/opencode/vp/qa/`. Alcance: jerarquía, tipografía, contraste,
espaciado/márgenes, alineación, imágenes y coherencia entre páginas y estados.
No se editó código.

> Nota de método: las capturas son *full-page* con imágenes `loading="lazy"`.
> Las zonas blancas en tarjetas/galerías bajo el pliegue suelen ser artefacto de
> captura (la imagen aún no cargaba), no un fallo real. Se marcan como "(a confirmar)".

## Hallazgos (ordenados por severidad)

| # | Página · tamaño | Qué se ve | Sev. | Causa probable (archivo · clase) | Arreglo propuesto |
|---|-----------------|-----------|------|----------------------------------|-------------------|
| 1 | `youth` · desktop, tablet y mobile | `h1` **"Youth Project"** casi invisible: azul marino oscuro sobre el hero azul oscuro; solo se lee "Mi Primer encuentro con Jesús". | **Alta** | `.hero-youth` fija `color:#fff` pero el `h1` global (`global.css` → `h1 { color: var(--vpj-text) }`) gana por regla directa. `youth-project.astro` `.hero-youth__contenido h1` (líneas 100‑104) no declara `color`. | Añadir `color: var(--vpj-text-on-dark)` a `.hero-youth__contenido h1`. |
| 2 | `equipo` · desktop y mobile | **Banda azul oscura "vacía"** justo bajo "Somos familia evangelizadora". El texto del versículo (Mc. 3, 13) existe pero es azul sobre azul. | **Alta** | `equipo.astro` línea 14 usa `<p class="versiculo">`, que hereda el fondo `--vpj-primary-dark` de `componentes.css` `.versiculo` (líneas 71‑76), pero el estilo scoped `equipo.astro` `.versiculo` (línea 94) impone `color: var(--vpj-primary-dark)`. | No reutilizar `.versiculo` global para la cita inline: crear clase propia con `color: var(--vpj-text-on-dark)`, o eliminar el override. |
| 3 | `home` · desktop y tablet | Botón secundario del hero **"Nuestro equipo"** con contraste bajo (texto y borde `--vpj-primary` #616b87 sobre foto oscura). | **Media** | `global.css` `.boton--secundario` (color/borde oscuros) aplicado dentro de `.hero` (`index.astro`). | Variante clara para heroes: texto blanco, borde `rgba(255,255,255,.7)` y fondo translúcido. |
| 4 | `home` · tablet (768) | Menú del header con **todos los enlaces partidos en dos líneas** ("Quiénes / somos", "Equipo / VPJ", "Curso / Internacional", "Youth / Project"). | **Media** | `Header.astro`: la nav se muestra a 768 sin caber; falta colapsar a menú hamburguesa o reducir hasta ≥1024. | Mantener hamburguesa hasta ≥1024 o usar `white-space: nowrap` + espaciado menor. |
| 5 | `youth` · todos | El logo del hero (`you-logo.png`) trae **fondo blanco**: caja blanca dura sobre el azul marino. | **Media** | `youth-project.astro` `.hero-youth__logo` (líneas 95‑98). | Usar PNG/SVG con transparencia, o darle una tarjeta blanca intencional y coherente. |
| 6 | `equipo` · desktop y tablet | Segunda fila de retratos **sin foto** (José Ángel Romero, Juan Pablo Becerra, Clara Cecilia Parra); en mobile sí aparecen. | Media (a confirmar) | `equipo.astro` `.ficha img` + `loading="lazy"`; probable artefacto de captura. | Verificar que los `.webp` existan y confirmar con captura sin lazy / `loading="eager"` en pruebas. |
| 7 | `curso` · todos | **Duplicación de título**: eyebrow "CURSO INTERNACIONAL" + `h1` "Curso Internacional" idénticos y seguidos; el subtítulo "PADRE NUESTRO" va en texto plano sin estilo. | Baja | `curso-internacional.astro` líneas 28‑31. | Cambiar el eyebrow (p. ej. "Formación") o quitar el `h1` duplicado; estilizar el subtítulo como `.hero__sub`. |
| 8 | `curso` · desktop y tablet | Galería de imágenes **sin radio ni formato uniforme**; en la captura solo cargan 2 y deja un gran hueco a la derecha. | Baja | `.grid` (4 col a 1440) + `galeria.map(...)` sin CSS propio en `curso-internacional.astro` (líneas 90‑103). | Grid de 2‑3 columnas, `img` con `border-radius` y `aspect-ratio` común. |
| 9 | `curso` · todos | **Hueco vertical grande** entre el banner del hero y "Objetivo:" (dos `.seccion` consecutivas suman su padding). | Baja | `curso-internacional.astro` secciones de líneas 26 y 43. | Unir en una sola sección o reducir el `padding-block` intermedio. |
| 10 | `equipo` / `curso` / `home` · todos | **Radios inconsistentes**: banner de `equipo` con `radius-lg`, banner de `curso` y fotos de galería a escuadra, hero sin radio. | Baja | `equipo.astro` `.banner` vs `curso-internacional.astro` `img` sin regla; `global.css`. | Definir un radio de imagen único (token) y aplicarlo a banners y galerías. |
| 11 | `youth` · mobile | Tarjetas 3‑6 con áreas blancas de imagen. | Baja (a confirmar) | `grid--cursos .tarjeta img` con `aspect-ratio` reservado + lazy en captura. | Confirmar en navegador; si persiste, revisar rutas/`srcset`. |

## Lo que está bien

- **Tipografía y tokens**: escala fluida (`--vpj-text-*`) y pareja Plus Jakarta / Inter
  bien aplicadas; jerarquía `h1`→`h2`→`h3` clara en todas las páginas.
- **Home**: hero legible pese al velo, y el versículo azul oscuro (banda *full-width*
  de verdad) tiene el contraste correcto — justo lo que falla en `equipo`.
- **Footer**: idéntico y coherente en las 7 páginas, con buen contraste blanco sobre azul.
- **404**: mensaje claro y CTAs bien jerarquizados y contrastados.
- **`familia`**: CTA de WhatsApp con buen contraste y agrupación; tarjetas de cursos alineadas.
- **`quienes`**: misión/visión en dos tarjetas equilibradas y galería a todo el ancho.
- **Botones**: altura mínima 44 px y estados `:focus-visible` correctos en todo el sitio.
