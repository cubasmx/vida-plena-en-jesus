# Sistema de diseño — Vida Plena en Jesús (v2)

> Versión nueva del sitio `vidaplenaenjesus.com`. Objetivo: **conservar la identidad**
> (azul pizarra `#616B87`, grises claros, blanco, logotipo rojo VPJ) y verse **más limpio y
> actual** que el Wix, con enfoque **mobile-first**.
>
> Todos los valores son medidos o derivados de: `docs/analisis.md`,
> `docs/home-desktop.png` (1440 px), `docs/home-mobile.png` (390 px), `docs/equipo.png` y
> los PNG de marca en `public/images/`. Los colores de marca se tomaron por muestreo de
> píxeles, no a ojo.

Referencia lista para usar: `docs/diseno-tokens.css` (copia de los tokens de este documento).

---

## 1. Paleta

### 1.1 Tokens base

| Token | Hex | Uso | Origen |
|---|---|---|---|
| `--vpj-primary` | `#616B87` | Azul pizarra de marca: cabeceras de sección, botón primario, enlaces, bordes activos | Identidad declarada en `analisis.md`; muestreado en la banda de "Ofrecemos" (`#576e89`–`#5d768c`) |
| `--vpj-primary-dark` | `#34476A` | **Cabecera** y pie; fondos de máxima jerarquía | Muestreado de la barra superior del sitio actual (`#34476a`) |
| `--vpj-primary-700` | `#4E5872` | Hover/active del botón primario; textos sobre fondos claros | Derivado de `--vpj-primary` |
| `--vpj-primary-100` | `#E8ECF2` | Fondo suave de tarjetas, hover secundario, chips | Derivado |
| `--vpj-accent` | `#9A1B26` | Rojo del logotipo VPJ: acentos, reglas, subrayados, foco de marca | Muestreado del logo (`#991b26`) |
| `--vpj-accent-dark` | `#7D141D` | Hover del acento; texto rojo sobre fondos claros | Derivado |
| `--vpj-bg` | `#FFFFFF` | Fondo base | Sitio actual |
| `--vpj-bg-alt` | `#F4F6F9` | Secciones alternas (Quiénes somos, contacto) | Derivado del gris Wix |
| `--vpj-bg-slate` | `#D8DCE2` | Banda de transición / fondo de rejilla "Ofrecemos" | Muestreado (`#d8dce2`) |
| `--vpj-surface` | `#FFFFFF` | Superficie de tarjeta | — |
| `--vpj-border` | `#D6DBE4` | Bordes, separadores, inputs | Derivado |
| `--vpj-border-strong` | `#BFC7D4` | Bordes con foco/estado activo | Derivado |
| `--vpj-text` | `#23262E` | Texto principal | — |
| `--vpj-text-muted` | `#5C6370` | Texto secundario, pies de foto, cargos | — |
| `--vpj-text-on-dark` | `#FFFFFF` | Texto sobre cabecera/pie/fondos oscuros | — |
| `--vpj-white-72` | `rgba(255,255,255,.72)` | Texto secundario sobre fondo oscuro | — |
| `--vpj-whatsapp` | `#25D366` | Verde WhatsApp (marca, FAB) | Marca WhatsApp |
| `--vpj-whatsapp-dark` | `#0B6E5F` | Fondo de botón WhatsApp con texto claro (AA) | Derivado para cumplir contraste |
| `--vpj-overlay` | `rgba(35,38,46,.60)` | Velo sobre imágenes de hero/banners | — |

### 1.2 Acentos por programa (sub-logotipos)

Cada programa conserva su color, tomado de los PNG de `public/images/prog-*.png`.
Se usan como **borde superior de tarjeta, chip o icono**, nunca como único portador de
información (siempre acompañado del nombre).

| Token | Hex | Programa |
|---|---|---|
| `--vpj-prog-kerygma` | `#5B9FD0` | Proyecto Kerygma (azul) |
| `--vpj-prog-familia` | `#E04020` | Proyecto Familia (rojo-naranja) |
| `--vpj-prog-youth` | `#90B010` | Youth Project (verde) |
| `--vpj-prog-school` | `#A01010` | School Project (rojo) |

### 1.3 Justificación

- Se mantiene `#616B87` como color dominante porque es el que el público ya asocia a VPJ;
  se oscurece a `#34476A` **solo** en cabecera y pie para dar contraste y anclar la marca
  (el sitio actual ya usaba ese navy en la barra).
- Los grises (`#F4F6F9`, `#D8DCE2`) reproducen los fondos claros del Wix pero con pasos
  más controlados, para separar secciones sin bordes.
- El rojo `#9A1B26` sale del propio logotipo y se reserva para **acento**, no para
  grandes superficies: así el sitio no se vuelve rojo y el rojo sigue significando "VPJ".

### 1.4 Contrastes verificados (WCAG 2.1)

| Combinación | Ratio | Cumple |
|---|---|---|
| `--vpj-text` `#23262E` sobre blanco | 14.9:1 | AA / AAA texto normal |
| `--vpj-text-muted` `#5C6370` sobre blanco | 6.0:1 | AA |
| `#FFFFFF` sobre `--vpj-primary` `#616B87` | 5.3:1 | AA texto normal |
| `#FFFFFF` sobre `--vpj-primary-dark` `#34476A` | 9.3:1 | AA / AAA |
| `--vpj-accent` `#9A1B26` sobre blanco | 8.2:1 | AA / AAA |
| `--vpj-white-72` `rgba(255,255,255,.72)` sobre `#34476A` | ≈6.8:1 | AA |
| `#0B3D2E` sobre `--vpj-whatsapp` `#25D366` | 6.2:1 | AA |
| `#FFFFFF` sobre `--vpj-whatsapp-dark` `#0B6E5F` | 6.2:1 | AA |

> ⚠️ `#FFFFFF` sobre `#25D366` da 1.98:1 (insuficiente): **no usar texto blanco sobre el
> verde WhatsApp**. Para texto usar `#0B3D2E` sobre `#25D366`, o blanco sobre
> `--vpj-whatsapp-dark` `#0B6E5F`.

---

## 2. Tipografía

### 2.1 Familias

| Rol | Familia | Pesos | Motivo |
|---|---|---|---|
| Títulos / display | **Plus Jakarta Sans** (variable) | 500, 600, 700, 800 | Geométrica-humanista, cálida y actual; reproduce el aire de las cabeceras bold del Wix sin su rigidez |
| Cuerpo / UI | **Inter** (variable) | 400, 500, 600 | Máxima legibilidad en pantalla, cobertura completa de español (áéíóúñ¿¡) |

Alternativa si se quiere **una sola familia**: Plus Jakarta Sans para todo (ahorra ~40 KB).

### 2.2 Self-hosting (sin Google Fonts en runtime)

Instalar por npm y empaquetar desde Astro (nada de `<link>` a `fonts.googleapis.com`):

```bash
npm i @fontsource-variable/plus-jakarta-sans @fontsource-variable/inter
```

```js
// src/layouts/Base.astro (frontmatter)
import '@fontsource-variable/plus-jakarta-sans'; // subsets latin + latin-ext
import '@fontsource-variable/inter';
```

- Servir **woff2** desde el propio dominio, con `font-display: swap`.
- Preload solo de los dos ficheros críticos (títulos 700 y cuerpo 400), que vienen del
  `@fontsource-variable` como un único woff2 por subset.
- `@font-face` con `unicode-range` para `latin` + `latin-ext` (acentos del español).
- Fallback local: `'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`.

### 2.3 Escala de tamaños

Base fluida con `clamp` para no saltar entre breakpoints.

| Token | Fórmula | Rango effective | Uso |
|---|---|---|---|
| `--vpj-text-xs` | `0.8125rem` | 13px | Metadatos, pies de foto, badges |
| `--vpj-text-sm` | `0.9375rem` | 15px | Texto secundario, nav apretada |
| `--vpj-text-base` | `1.0625rem` | 17px | Cuerpo (mínimo en móvil) |
| `--vpj-text-lg` | `1.25rem` | 20px | Entradillas / lead |
| `--vpj-text-xl` | `1.5rem` | 24px | H3, títulos de tarjeta |
| `--vpj-text-2xl` | `clamp(1.75rem, 1.4rem + 1.6vw, 2.375rem)` | 28→38px | H2 |
| `--vpj-text-3xl` | `clamp(2rem, 1.4rem + 2.6vw, 3rem)` | 32→48px | H1 de página |
| `--vpj-text-display` | `clamp(2.25rem, 1.5rem + 3.4vw, 3.75rem)` | 36→60px | H1 del hero |

### 2.4 Pesos, interlineado, tracking y mayúsculas

| Nivel | Peso | Line-height | Letter-spacing | Transformación |
|---|---|---|---|---|
| Hero H1 | 800 | 1.05 | `-0.02em` | Sentence case |
| H1 página | 700 | 1.1 | `-0.02em` | Sentence case |
| H2 | 700 | 1.2 | `-0.015em` | Sentence case |
| H3 / título tarjeta | 600 | 1.25 | `-0.01em` | Sentence case |
| Eyebrow / kicker | 600 | 1.2 | `0.08em` | UPPERCASE |
| Lead | 400 | 1.6 | `0` | Sentence case |
| Cuerpo | 400 | 1.6 | `0` | Sentence case |
| Small / legal | 400 | 1.45 | `0.01em` | Sentence case |
| Botón | 600 | 1 | `0.01em` | Sentence case |

Reglas:
- **Mayúsculas solo** en eyebrows/kickers y, opcionalmente, en botones cortos. Nunca en
  párrafos ni títulos largos (daña legibilidad y el tono cercano de la marca).
- Los títulos van en **sentence case** ("Somos familia evangelizadora", no "SOMOS FAMILIA…").
- Máximo **65 caracteres** por línea de cuerpo (`max-width: 65ch`).

---

## 3. Espaciado y grid

### 3.1 Escala de espaciado (base 4 px)

| Token | rem | px |
|---|---|---|
| `--vpj-space-1` | `0.25rem` | 4 |
| `--vpj-space-2` | `0.5rem` | 8 |
| `--vpj-space-3` | `0.75rem` | 12 |
| `--vpj-space-4` | `1rem` | 16 |
| `--vpj-space-5` | `1.5rem` | 24 |
| `--vpj-space-6` | `2rem` | 32 |
| `--vpj-space-7` | `3rem` | 48 |
| `--vpj-space-8` | `4rem` | 64 |
| `--vpj-space-9` | `6rem` | 96 |
| `--vpj-space-10` | `8rem` | 128 |

### 3.2 Anchos y ritmo vertical

| Token | Valor | Uso |
|---|---|---|
| `--vpj-container` | `72rem` (1152px) | Ancho máximo de contenido |
| `--vpj-container-wide` | `80rem` (1280px) | Hero, bandas a sangre |
| `--vpj-container-narrow` | `46rem` (736px) | Texto corrido, formularios |
| `--vpj-gutter` | `1.25rem` móvil / `2rem` ≥768 / `2.5rem` ≥1024 | Padding lateral del contenedor |
| `--vpj-section-y` | `clamp(3.5rem, 2rem + 6vw, 6rem)` | Padding vertical de sección (56→96px) |

### 3.3 Grid y columnas

- Rejilla de 4 columnas móvil → 8 en tablet (≥768) → 12 en desktop (≥1024).
- `gap`: `1rem` (16px) móvil / `1.5rem` (24px) ≥768.
- Rejillas concretas:
  - "Ofrecemos": 1 col → 2 cols ≥480 → 4 cols ≥1024.
  - Equipo: 2 cols → 3 cols ≥768 → 4 cols ≥1024.
  - Programas: 1 col → 2 cols ≥768.
  - Pie: 1 col → 2 cols ≥768 → 4 cols ≥1024.

### 3.4 Breakpoints

| Token | min-width | Objetivo |
|---|---|---|
| `--vpj-bp-sm` | `360px` | Móvil mínimo soportado (sin scroll horizontal) |
| `--vpj-bp-md` | `768px` | Tablet |
| `--vpj-bp-lg` | `1024px` | Desktop |
| `--vpj-bp-xl` | `1440px` | Desktop ancho |

Se implementan con `@media (min-width: …)` (mobile-first). El layout debe funcionar sin
scroll horizontal a **360 px**.

---

## 4. Componentes

Radio y sombra compartidos:

| Token | Valor |
|---|---|
| `--vpj-radius-sm` | `8px` (botones, inputs) |
| `--vpj-radius-md` | `12px` (tarjetas, imágenes) |
| `--vpj-radius-lg` | `16px` (tarjetas de programa, hero) |
| `--vpj-radius-pill` | `999px` (chips, FAB) |
| `--vpj-shadow-sm` | `0 1px 2px rgba(35,38,46,.06)` |
| `--vpj-shadow-md` | `0 4px 16px rgba(35,38,46,.10)` |
| `--vpj-shadow-lg` | `0 12px 32px rgba(35,38,46,.16)` |

---

### 4.1 Cabecera + menú móvil

**Móvil (<768px)**
- Alto **64px**, fondo `--vpj-primary-dark` `#34476A`, sin sticky (para no comer pantalla).
- Logo VPJ a 40px de alto (PNG con transparencia).
- Botón hamburguesa **44×44px**, icono `currentColor` blanco, `aria-label="Abrir menú"`.
- Menú: panel a pantalla completa que baja desde arriba, fondo `#34476A`, opacidad de
  transición 200ms.
  - Enlaces `--vpj-text-lg` (20px) / 600, blanco, alto de fila **56px**, separador
    `rgba(255,255,255,.12)`.
  - Cierre con botón X 44×44 arriba a la derecha; cierra con `Esc` y al navegar.
  - Bloquea scroll del `body` mientras está abierto; foco atrapado dentro del panel.
- Estados de enlace: normal blanco; hover/focus `#E8ECF2`; activo `#FFFFFF` + barra
  inferior de 2px `--vpj-accent`.

**Desktop (≥768px)**
- Alto **80px**, fondo `#34476A`; sticky con `--vpj-shadow-md` al hacer scroll.
- Logo 48px; nav a la derecha, enlaces 16px/600, `gap: 32px`.
- Hover: subrayado 2px `--vpj-primary` con `text-underline-offset: 6px`.
- Página activa: subrayado 2px `--vpj-accent` + `aria-current="page"`.

---

### 4.2 Hero (Inicio)

- Ancho `--vpj-container-wide`, imagen full-bleed 16:9 con `object-position` centrado.
- Alto mínimo: **70vh** móvil / **88vh** desktop (`max-height: 820px`).
- **Velo obligatorio** para contraste: degradado
  `linear-gradient(180deg, rgba(35,38,46,.30) 0%, var(--vpj-overlay) 100%)`.
- Contenido alineado a la izquierda en desktop, centrado en móvil; `max-width: 40rem`.
- Kicker / eyebrow: `--vpj-text-xs`, mayúsculas, `letter-spacing:.08em`, color `#E8ECF2`.
- H1: `--vpj-text-display` (36→60px), peso 800, blanco.
- Subtexto: `--vpj-text-lg`, blanco a 92%.
- Dos botones: primario claro + secundario con borde blanco (ver 4.12).

---

### 4.3 Banda de versículo

- Fondo `linear-gradient(90deg, #34476A 0%, #616B87 100%)`; padding `24px` móvil / `32px`
  desktop; texto centrado.
- Cita en `--vpj-text-xl` (24px) / 600, blanco, comillas decorativas al 20% de opacidad.
- Referencia ("Jn 10, 10") en `--vpj-text-xs`, mayúsculas, `letter-spacing:.08em`,
  color `#E8ECF2`.
- Sin imagen de fondo (evita el problema de contraste del sitio actual).

---

### 4.4 Bloques de texto

- Contenedor `--vpj-container-narrow`, centrado.
- H2 (`--vpj-text-2xl`) con **regla de acento**: barra de `4px × 48px`, `--vpj-accent`,
  `border-radius: 2px`, `margin-bottom: 16px`.
- Lead `--vpj-text-lg` en `--vpj-text-muted`; cuerpo `--vpj-text-base` en `--vpj-text`,
  `line-height:1.6`, `max-width:65ch`.
- Versículo suelto: mismo bloque, en cursiva y `--vpj-text-muted`.

---

### 4.5 Rejilla "Ofrecemos"

- Fondo de sección `--vpj-bg-slate` `#D8DCE2`; título H2 centrado.
- Grid 1/2/4 columnas (ver 3.3), `gap: 16px`.
- Tarjeta: superficie blanca, `--vpj-radius-md`, `overflow: hidden`,
  `--vpj-shadow-sm`.
  - Imagen 4:3 arriba (`aspect-ratio: 4/3`, `object-fit: cover`).
  - Cuerpo: padding `16px`, título `--vpj-text-base`/600 (2 líneas máx.), texto opcional
    `--vpj-text-sm` en `--vpj-text-muted`.
- Estados: reposo sombra-sm; hover `translateY(-2px)` + `--vpj-shadow-md` (respetando
  `prefers-reduced-motion`); foco anillo visible si es enlace.

---

### 4.6 Tarjetas de programa

- Grid 1 col móvil / 2 cols ≥768; `gap: 24px`.
- Tarjeta: blanca, `--vpj-radius-lg`, `padding: 24px` (32px ≥1024),
  `border: 1px solid var(--vpj-border)`, `--vpj-shadow-sm`.
- **Borde superior de 4px** con el color del programa (`--vpj-prog-*`).
- Layout: logo circular 96px arriba/izquierda + contenido. Móvil apilado; desktop
  logo a la izquierda, texto a la derecha.
  - Logo: PNG `prog-*.png` con `width/height` explícitos (evita CLS), `border-radius: 50%`.
  - H3 `--vpj-text-xl`/700.
  - "Dirigido a": etiqueta `--vpj-text-xs` mayúsculas + valor `--vpj-text-sm` muted.
  - Enlace "Leer más": `--vpj-primary`, 600, con flecha `→` que se desplaza 4px en hover.
- Estados: hover `border-color: var(--vpj-primary)` + `--vpj-shadow-md`; foco visible en
  el enlace.

### 4.7 Ficha de persona (Equipo)

- Grid 2/3/4 columnas; `gap: 24px`; fondo de sección `--vpj-bg-alt`.
- Foto `aspect-ratio: 1/1`, `object-fit: cover`, `--vpj-radius-md`.
  - Las fotos actuales traen fondo gris claro: colocarlas sobre `#F4F6F9` para homogeneizar.
- Nombre: `--vpj-text-base`/600, `margin-top: 12px`.
- Cargo: `--vpj-text-sm`, `--vpj-text-muted`.
- Opcional: chip con iniciales o sub-logo del área, `--vpj-radius-pill`.
- Hover (si la ficha enlaza): foto `scale(1.02)` + sombra; sin hover en touch.

---

### 4.8 Tarjeta de curso

- Imagen 16:9 arriba (`aspect-ratio: 16/9`, `object-fit: cover`, `--vpj-radius-md` superior).
- Badge de fecha/eyebrow: `--vpj-radius-pill`, fondo `--vpj-accent`, texto blanco
  `--vpj-text-xs`/600, posicionado sobre la imagen (esquina superior izquierda).
- Título H3 `--vpj-text-xl`/700; descripción `--vpj-text-sm` muted.
- CTA "Más información" como botón secundario o enlace con flecha.
- Grid: 1 col móvil → 2 cols ≥768 → 3 cols ≥1024 (según nº de cursos).

---

### 4.9 Sección de contacto

- Fondo `--vpj-bg-alt`; 1 col móvil → 2 cols ≥1024 (info izquierda, CTA derecha).
- Lista de datos con icono SVG 24px + texto:
  - Dirección, teléfono (`tel:+523317908012`), correo (`mailto:`), horario si aplica.
  - Iconos en `--vpj-primary`; texto `--vpj-text-base`; enlaces con subrayado en hover.
- **Sin formulario con backend**: sustituir por dos CTA grandes — botón WhatsApp y
  botón "Enviar correo" (`mailto:`) — más el teléfono como enlace.
- Redes sociales: fila de iconos 24px, targets 44×44.
- Mapa: **imagen estática** del mapa que enlaza a Google Maps, o `iframe` con
  `loading="lazy"` (nunca cargarlo al inicio). Reservar `aspect-ratio` para evitar CLS.
- FAB WhatsApp flotante: círculo 56px, `--vpj-whatsapp`, icono blanco (excepción de marca,
  ver 6), esquina inferior derecha, `z-index` sobre el contenido, `aria-label="Escríbenos
  por WhatsApp"`.

---

### 4.10 Pie

- Fondo `--vpj-primary-dark` `#34476A`; padding `48px` móvil → `64px` desktop.
- 1 col → 2 cols ≥768 → 4 cols ≥1024:
  1. Logo 40px + frase corta (`--vpj-white-72`).
  2. Navegación (enlaces blancos, hover `#E8ECF2`).
  3. Programas.
  4. Contacto + iconos sociales.
- Títulos de columna: `--vpj-text-xs` mayúsculas, `letter-spacing:.08em`, `#E8ECF2`.
- Barra inferior: separador `rgba(255,255,255,.12)`, texto legal `--vpj-text-xs`
  `--vpj-white-72`. Corregir el crédito actual ("© 2024 Creado por Gabriela Gómez") con el
  año vigente y sin nombre propio salvo que el cliente lo pida.
- Iconos sociales: SVG inline 24px (ver sección 5), `gap: 16px`, targets 44×44.

---

### 4.11 Botones

| Variante | Fondo | Texto | Borde | Hover | Active |
|---|---|---|---|---|---|
| Primario | `--vpj-primary` `#616B87` | `#FFFFFF` | ninguno | `#4E5872` | `translateY(1px)` |
| Secundario | transparente | `--vpj-primary` | `2px solid #616B87` | fondo `#E8ECF2` | `translateY(1px)` |
| WhatsApp | `#25D366` | `#0B3D2E` (AA) | ninguno | `#1FBE57` | `translateY(1px)` |
| Sobre oscuro | transparente | `#FFFFFF` | `2px solid #FFFFFF` | fondo `rgba(255,255,255,.14)` | `translateY(1px)` |
| Enlace | — | `--vpj-primary` | — | subrayado | — |

Métricas comunes: `padding: 12px 24px` (`0.75rem 1.5rem`), `border-radius: 8px`,
`font-size: 16px`, `font-weight: 600`, `min-height: 44px`, `gap: 8px` si lleva icono.
- **Foco**: `outline: 3px solid rgba(97,107,135,.55)` con `outline-offset: 2px`
  (sobre fondo oscuro, `outline-color: #FFFFFF`). Nunca `outline: none`.
- **Disabled**: opacidad 40%, `cursor: not-allowed`, sin hover.
- Ícono opcional a 18px, alineado ópticamente.

---

## 5. Iconografía

**Recomendación: reemplazar los PNG sociales por SVG inline. No reusar los PNG.**

- Los PNG actuales (`social-*.png`, 16–48 px) se ven borrosos en retina, no se pueden
  recolorear y añaden 4 peticiones. Los SVG inline: nítidos, heredan `currentColor`
  (blancos en el pie, pizarra en contacto), ~0.5 KB cada uno, sin peticiones extra.
- Fuente de paths: **Simple Icons** (CC0) para Facebook, Instagram, YouTube y WhatsApp;
  **Lucide** (MIT) para iconos de contacto (pin, teléfono, sobre, reloj, flecha).
- Especificación: viewBox 24×24, `fill`/`stroke: currentColor`, trazo 1.75–2px en iconos
  de línea, tamaño renderizado 24px (18px dentro de botones), alineados a una caja de
  44×44 como target táctil.
- Accesibilidad: iconos decorativos con `aria-hidden="true"`; iconos que son el único
  contenido de un enlace llevan `aria-label` en el `<a>`.
- WhatsApp: usar glifo de marca en el FAB (blanco sobre verde, excepción de logotipo);
  en listas de contacto usar el mismo path en `currentColor`.
- Conservar los PNG sociales solo como fallback/`og:image` si hacen falta.

---

## 6. Accesibilidad visual

1. **Contraste mínimo AA**: texto normal ≥ 4.5:1; texto grande (≥24px o ≥18.66px en bold)
   y elementos de interfaz ≥ 3:1. Los pares de la sección 1.4 ya cumplen; verificar
   cualquier texto sobre imagen con el velo correspondiente.
2. **Texto sobre imágenes**: siempre velo (`--vpj-overlay` mínimo en la zona de texto).
   Prohibido texto blanco sobre foto sin tratamiento.
3. **Foco visible**: anillo de 3px con `outline-offset:2px` en todos los elementos
   interactivos; en cabecera/pie el foco usa blanco. Nunca eliminar el contorno.
4. **Tamaños táctiles**: mínimo **44×44px** con separación ≥8px; enlaces del menú móvil a
   56px de alto.
5. **Tamaño de texto**: cuerpo ≥17px; nada por debajo de 13px; respetar el zoom hasta 200%
   sin scroll horizontal.
6. **No depender solo del color**: los acentos de programa llevan siempre el nombre;
   los estados (error/éxito/activo) añaden icono o subrayado, no solo color.
7. **Movimiento**: animaciones ≤200ms; respetar `prefers-reduced-motion: reduce`
   desactivando `translate/scale`.
8. **Fotos del equipo con `alt` real**: "Retrato de Lic. Clara Macías, Fundadora &
   Directora", nunca el nombre del archivo.
9. **Semántica**: un solo `h1` por página, jerarquía sin saltos, skip-link "Saltar al
   contenido" visible al foco.

---

## 7. Reglas de imagen

### 7.1 Proporciones y tamaños

| Tipo | Proporción | Tamaño entrega (mín – ideal) | Formato | `object-fit` |
|---|---|---|---|---|
| Hero / banners | **16:9** | 1600×900 – 2400×1350 | WebP q=80 | cover, `object-position` ajustado |
| Banda ancha (Quiénes, Familia, Youth) | **21:9** o 3:1 | 1600×600 – 2100×900 | WebP q=80 | cover |
| Tarjetas "Ofrecemos" | **4:3** | 800×600 – 1200×900 | WebP q=80 | cover |
| Retrato de equipo | **1:1** | 600×600 – 900×900 | WebP q=80 | cover (rostro centrado) |
| Tarjeta de curso | **16:9** | 800×450 – 1200×675 | WebP q=80 | cover |
| Sub-logos de programa | **1:1** | 240×240 (render 96–120px, 2x) | PNG/WebP | contain |
| Logo VPJ cabecera | libre | render 40–48px, archivo ≥96px | PNG | contain |

- `srcset` + `sizes` en todas las imágenes de contenido; AVIF opcional como primera fuente.
- Siempre declarar `width`/`height` o `aspect-ratio` para evitar CLS.
- Imágenes bajo el pliegue: `loading="lazy"` + `decoding="async"`. La del hero **no** se
  difiere; puede usar `fetchpriority="high"`.

### 7.2 Tratamiento

- Radios coherentes: `12px` en imágenes de tarjeta, `16px` en hero/banners.
- Sin sombras duras sobre fotos; profundidad solo en el contenedor.
- Velo `rgba(35,38,46,.60)` cuando haya texto encima (hero y banners).
- Homogeneizar retratos: todas las fotos de equipo provienen de fondos distintos; se
  muestran sobre `#F4F6F9` y con el mismo recorte cuadrado centrado en el rostro.
- Los sub-logos circulares se presentan sobre blanco, con `padding` interno para que
  respiren dentro del círculo.
- Optimización de referencia: máximo 1600px de ancho, q=82, WebP (como ya se hizo en
  `public/images/`, 63 MB → 3.6 MB).
- Mantener `alt` descriptivo en español; imágenes puramente decorativas con `alt=""`.

---

## Anexo — mapa de tokens a CSS

Los tokens están listos para copiar en `docs/diseno-tokens.css` y consumir desde
`src/styles/`. Convención: prefijo `--vpj-`, todo en `:root`, sin colores ni medidas
"mágicas" en los componentes.

Pendiente de confirmar con el cliente (no bloquea el sistema): mapeo foto↔nombre del
equipo y si "Proyecto Kerygma" / "School Project" tendrán página propia.
