# QA de UX / accesibilidad — vidaplenaenjesus.com

Revisión visual de las capturas en `/tmp/opencode/vp/qa/` (home, quienes, equipo,
curso, youth, familia, 404 en mobile 390 / tablet 768 / desktop 1440), sin editar
código. Fecha: 2026-10-02. Autor: Nia.

Dato de partida (aportado, no re-medido): **cero desbordes horizontales** en las
21 combinaciones (`scrollWidth == clientWidth`).

## Hallazgos

### 🔴 Alta / bloqueador

| Página | Tamaño | Qué pasa | Causa probable | Arreglo propuesto |
|---|---|---|---|---|
| `equipo` | todos (390/768/1440) | El versículo del hero es **invisible**: se ve un rectángulo azul marino vacío bajo el título y un hueco grande. | `equipo.astro:14` reutiliza `<p class="versiculo">`. `.versiculo` de `componentes.css:71-76` pinta fondo `--vpj-primary-dark`; el `<style>` scoped de la página (`equipo.astro:89-95`) sobreescribe el color a `--vpj-primary-dark` → texto y fondo idénticos (1:1). | No reutilizar `.versiculo` para una línea inline: clase propia con `background: transparent; color: var(--vpj-text-muted); padding-block: 0; text-align: left`. Alternativa en scoped: `background: none; padding: 0`. |
| `youth-project` | todos | El `h1` "Youth Project" queda **ilegible** sobre el hero azul (contraste ≈1:1); el subtítulo blanco sí se lee. | `.hero-youth { color:#fff }` (`youth-project.astro:83`) no vence a `h1 { color: var(--vpj-text) }` de `global.css:174`: una regla directa sobre `h1` pesa más que la herencia, y el `h1` no declara color. | Añadir `.hero-youth__contenido h1 { color: var(--vpj-text-on-dark) }` (o `color: inherit`). |

### 🟠 Media

| Página | Tamaño | Qué pasa | Causa probable | Arreglo propuesto |
|---|---|---|---|---|
| Cabecera (todas) | tablet 768 | El menú no cabe: el `nav` cae a segunda fila y las etiquetas se **parten a mitad** ("Quiénes / somos", "Curso / Internacional", "Proyecto / Familia"); el header crece y desordena la lectura. Sin scroll horizontal. | `Header.astro:111-117`: a ≥768 se muestra el nav completo con `gap:1.5rem` y fuente 17px. A 768 el ancho útil (~704 px) es menor que la suma de ítems + CTA (~950-1000 px), así que `flex-wrap` del header lo baja de fila y el texto se parte. | Subir el menú horizontal a ≥1024 (mantener hamburguesa en 768) o reducir `gap`/tamaño de fuente y acortar etiquetas. |
| Global (todas) | foco | El anillo de foco es débil: `rgba(97,107,135,.55)` da ≈**2.2:1 sobre blanco** y ≈**1.4:1 sobre el azul de la cabecera**. En la cabecera no hay override a blanco (el footer sí). | `global.css:90` y `:205`; `Header.astro` no define `:focus-visible`. El `<button>` del menú tampoco (solo `.boton` tiene regla). | Usar anillo opaco de alto contraste: `#34476a` sobre fondos claros y `#fff` sobre oscuros; añadir `:focus-visible` a los enlaces/botón del header. |

### 🟡 Baja

| Página | Tamaño | Qué pasa | Causa probable | Arreglo propuesto |
|---|---|---|---|---|
| `curso-internacional` | todos | Los ítems del **"Temario"** parecen cajas/botones clicables pero no lo son; invitan a tocar. | `curso-internacional.astro:60-68` usa `<article class="tarjeta">` (borde + sombra de tarjeta) sin enlace. | Estilo más neutro (sin borde/sombra fuerte) o convertirlos en enlaces reales si debían serlo. |
| `curso-internacional`, `equipo` | todos | Banner principal con `loading="lazy"`: retrasa el LCP de la imagen de portada. | `curso-internacional.astro:37` y `equipo.astro:32` marcan `loading="lazy"` en imágenes sobre el pliegue. | `loading="eager" fetchpriority="high"` en el banner/hero principal. |

> **Nota — no es un fallo:** en varias capturas de detalle hay huecos blancos donde
> debería ir una foto (equipo-desktop fila 2, youth-mobile tarjetas 3-6, galería de
> curso). Coinciden con imágenes `loading="lazy"` fuera del viewport que no se
> pintaron al capturar; donde sí cargaron se ven completas. Conviene confirmarlo en
> el navegador antes de tocar nada.

## Accesibilidad: lo que ya cumple

- `lang="es"`, `viewport`, landmark `<main id="contenido">` y **skip link** funcional (`Base.astro:153-157`).
- **Zonas táctiles ≥24 px**: botones/CTA `min-height:44px` (`global.css:261`), iconos sociales 44×44 (`Footer.astro:253`), hamburguesa ≈40×32. Ningún control por debajo del umbral.
- **Foco visible** en el pie con anillo blanco sobre azul (`Footer.astro:282-285`).
- **Contrastes correctos** en la mayoría: cuerpo `#23262e` sobre blanco (≈15:1), texto atenuado `#5c6370` sobre blanco (≈5.9:1), textos sobre azul oscuro en blanco/`--vpj-primary-100`.
- `prefers-reduced-motion` respetado (`global.css:142-151`); `text-wrap: balance` en titulares; `overflow-wrap: break-word` evita palabras cortadas.
- Imágenes con `alt` descriptivo y `width`/`height` declarados (evita CLS).
