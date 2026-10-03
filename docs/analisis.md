# Análisis del sitio actual — vidaplenaenjesus.com

> Auditoría hecha el 2026-10-02 por Julio (coordinador). Datos medidos, no estimados.

## Qué es

- Sitio **Wix** (`generator: Wix.com Website Builder`, `siteRevision 124`).
- 6 páginas reales + un menú "More".
- Idioma: español (México). Organización católica de evangelización en Guadalajara.

| Página | URL actual | Título real |
|---|---|---|
| Inicio | `/` | Inicio \| Vida Plena en Jesús |
| Quiénes somos | `/quienes-somos` | Quienes somos \| Vida Plena en Jesús |
| Equipo VPJ | `/about-1` | Equipo VPJ \| Vida Plena en Jesús |
| Curso Internacional | `/general-6` | Curso Internacional \| Vida Plena en Jesús |
| Youth Project | `/courses` | Youth Project \| Vida Plena en Jesús |
| Proyecto Familia | `/proyecto-familia` | FamilyProject (sin sufijo de marca) |

## Métricas medidas

| Métrica | Valor |
|---|---|
| HTML solo (sin JS/CSS/imágenes) | **713 KB** |
| TTFB | 0.15 s |
| `<script>` en el DOM renderizado | **77** |
| Bloques `<style>` + hojas externas | 32 + 1 |
| Familias tipográficas Wix | 6+ (din-next, avenir, helvetica, rubik…) |
| Imágenes | *hotlink* a `static.wixstatic.com` con tamaño fijo en URL |
| Móvil a 390 px | **se corta horizontalmente** (diseño fijo ~980 px) |

## Problemas, por severidad

1. 🔴 **`<meta name="robots" content="noindex">`** → Google no indexa el sitio. Es el
   problema más grave para un organismo que quiere captar.
2. 🔴 **Móvil roto**: scroll horizontal y contenido cortado a 390 px
   (ver `docs/home-mobile.png`).
3. 🔴 **773 KB de markup + 77 scripts** para ~600 palabras. Penaliza Core Web Vitals.
4. 🟠 **SEO básico ausente**: sin `meta description`, sin `og:image`, `og:title` genérico,
   dos objetos `WebSite` duplicados + `LocalBusiness` en JSON-LD, URLs sin significado
   (`/about-1`, `/general-6`, `/courses`).
5. 🟠 **Título de página descuadrado**: `/proyecto-familia` se titula "FamilyProject".
6. 🟠 **Accesibilidad**: fotos del equipo con nombres tipo
   `Captura de Pantalla 2024-06-13 a la(s) 1.jpg` (mal `alt`); h1 con `font-size:91px`
   inline en el hero.
7. 🟡 **Erratas de contenido**: "kerigmatica", "Intoducción", "Aviento", "1hra",
   "Curso Internaciónal".
8. 🟡 **Formulario y mapa** atados a Wix; en estático hay que resolverlos aparte.
9. 🟡 **Contenido sin usarse**: los botones "Quienes somos / Nuestro equipo" no apuntan
   a nada útil; "Proyecto Kerygma" y "School Project" no tienen página propia aunque son
   tarjetas de "Programas".

## Lo que se conserva

- Identidad visual: azul pizarra `#616B87`, grises claros y blanco; logotipo VPJ (rojo)
  y los cuatro sub-logotipos (Kerygma, Familia, Youth, School).
- Estructura de contenido y los cuatro programas de evangelización.
- Datos de contacto reales (ver `docs/imagenes.md` / `content.json`).

## Decisiones tomadas con Julio (2026-10-02)

- **Repo**: `cubasmx/vida-plena-en-jesus` (**público**).
- **Alcance**: las **6 páginas** completas.
- **Contacto**: **WhatsApp + mailto**, sin backend.
- **Stack**: Astro estático (igual que `veia-landing`), HTML/CSS propios, imágenes
  autoalojadas en WebP, sin JS salvo el menú móvil.
