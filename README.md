# Vida Plena en Jesús — sitio web (v1)

Reconstrucción estática de **vidaplenaenjesus.com**, el sitio del organismo
católico de evangelización **Vida Plena en Jesús** (Guadalajara, Jalisco).

El sitio actual está hecho en Wix y arrastra problemas graves: está marcado con
`<meta name="robots" content="noindex">` (Google no lo indexa), se rompe en móvil
(scroll horizontal a 390 px) y entrega ~713 KB de HTML con 77 scripts para ~600
palabras. Esta v1 reescribe las **6 páginas** en **Astro estático**, con HTML y CSS
propios, sin backend y con imágenes autoalojadas en WebP.

- **Stack:** Astro 5 (`output: "static"`), TypeScript estricto, fuentes
  autoalojadas con `@fontsource-variable` (Plus Jakarta Sans + Inter).
- **Contacto:** botones de WhatsApp y `mailto:`, sin formulario ni servidor.
- **Diseño:** ver `docs/diseno.md` y `docs/diseno-tokens.css`.
- **Contenido:** ver `docs/contenido-limpio.md` y `src/data/content.json`.

## Páginas

| # | Página | Ruta | Contenido v1 |
|---|---|---|---|
| 1 | Inicio | `/` | Hero (lema + cita Jn 10,10), intro, "Ofrecemos" (4 servicios), 4 programas de evangelización (Kerygma, Familia, Youth, School) y contacto. |
| 2 | Quiénes somos | `/quienes-somos` | Somos VPJ, Misión, Visión y relación con la Iglesia Católica (Arquidiócesis de Guadalajara y Santa Sede/Vaticano). |
| 3 | Equipo VPJ | `/equipo` | Somos familia evangelizadora (Mc 3,13), asesor + equipo de tiempo completo (fichas nombre/cargo) y Alianzas. |
| 4 | Curso Internacional | `/curso-internacional` | Retiro de Adviento: objetivo, 3 modalidades, CTA WhatsApp y los 4 temas. *(Contenido por aclarar — ver Pendientes.)* |
| 5 | Youth Project | `/youth-project` | 6 cursos de 72 hrs (Mi Primer Encuentro, Amistad con Jesús, Tú eres Precioso, 7 Jóvenes del Evangelio, Heaven Sex, Youth for Youth) + misión "Mar Adentro". |
| 6 | Proyecto Familia | `/proyecto-familia` | Proceso Family Project + 6 cursos (Job, Cinco panes y dos peces, El Esposo y los esposos, Nazareth, Bodas de Caná, Azarías). |

Las 4 tarjetas de "Programas" del Inicio incluyen **Proyecto Kerygma** y
**School Project**, que no tienen página propia en la v1.

## Estructura del proyecto

```
vida-plena-en-jesus/
├── .github/workflows/deploy.yml   # CI: build + deploy a GitHub Pages
├── docs/                          # análisis, alcance, diseño, contenido, SEO
├── public/
│   └── images/                    # imágenes optimizadas (WebP/PNG), autoalojadas
├── src/
│   ├── components/                # cabecera, pie, tarjetas, botones…
│   ├── data/content.json          # fuente de verdad del contenido
│   ├── layouts/                   # Base.astro (head, fuentes, header/footer)
│   ├── pages/                     # 6 páginas + 404
│   └── styles/                    # tokens y estilos globales
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Requisitos

- Node.js **20 o superior** (el workflow usa Node 20).
- npm (el despliegue usa `npm ci` sobre `package-lock.json`).

## Comandos

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # genera el sitio estático en ./dist
npm run preview  # sirve ./dist localmente para revisar el build
```

> La primera vez hay que generar `package-lock.json` con `npm install` y
> **commitearlo**: el workflow de Pages ejecuta `npm ci`, que lo requiere.

## Despliegue

### GitHub Pages (por defecto)

El repo es público (`cubasmx/vida-plena-en-jesus`) y la rama de publicación es
`main`. El workflow `.github/workflows/deploy.yml` se dispara con `push` a `main`
o manualmente (`workflow_dispatch`), compila con Node 20 y publica `./dist` con
las GitHub Actions oficiales de Pages (`configure-pages`, `upload-pages-artifact`,
`deploy-pages`).

El `base` por defecto es `/vida-plena-en-jesus/`, así que el sitio queda en:

```
https://cubasmx.github.io/vida-plena-en-jesus/
```

**Requisito de una sola vez:** activar Pages en *Settings → Pages → Build and
deployment → Source: **GitHub Actions***. Sin ese ajuste el workflow no publica.

### VPS / dominio propio (opcional)

Para servir el sitio en la raíz de `vidaplenaenjesus.com` (p. ej. desde Caddy en
el VPS), basta compilar sin el prefijo de Pages y subir `./dist`:

```bash
ASTRO_BASE=/ npm run build
# copiar ./dist al docroot del dominio
```

El mismo comando sirve para previsualizar la variante de dominio con
`npm run preview` después del build.

## Pendientes de contenido

Los siguientes puntos no bloquean el desarrollo pero **deben confirmarse con el
cliente antes de publicar** (detalle en `docs/contenido-limpio.md`):

- **Mapeo de fotos del equipo ↔ nombre.** La correspondencia de las 8 fichas se
  dedujo por parecido y orden del DOM (`docs/equipo.png`). Confirmar antes de
  publicar. Además, el *asesor* que menciona el texto no aparece con nombre ni
  foto en el original.
- **Erratas corregidas.** Se enmendaron erratas evidentes ("kerigmatica",
  "Intoducción", "Aviento", "1hra", "Curso Internaciónal", "Belen", "A travéz",
  "Azarias"…). Revisar y aprobar la lista completa.
- **Página "Curso Internacional" ambigua.** El rótulo dice **"PADRE NUESTRO"**
  pero todo el cuerpo describe un **retiro de Adviento** (objetivo, modalidades y
  temario de Adviento). En v1 se reproduce tal cual; aclarar si son dos cursos
  distintos o un único retiro.
- **Autorización de imágenes.** Confirmar que el cliente autoriza las fotos
  descargadas de `static.wixstatic.com` y las de nombre de persona
  (`curso-jaclyn`, `curso-cristina`, `curso-suzanne`, `curso-maria`), que en el
  original no tienen pie ni texto.
- **Pie de página.** Definir año vigente y titularidad del crédito actual
  ("© 2024 Creado por Gabriela Gómez").
- **Proyecto Kerygma y School Project.** No tienen página propia en v1; se
  muestran como tarjetas de "Programas" en el Inicio, sin destino. Definir si
  tendrán página o enlace.
- **Menú "More" del Wix.** Se eliminó; confirmar que no contenía contenido útil.
- **Formulario de contacto.** Se sustituye por WhatsApp + `mailto:`; confirmar
  que es aceptable perder el formulario original.
