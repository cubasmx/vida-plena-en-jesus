# Alcance — v1 de vidaplenaenjesus.com (Astro estático)

> Basado en `docs/analisis.md` y `docs/contenido-original/`. Decisiones cerradas con Julio
> el 2026-10-02. Este documento define **qué se construye**, **qué queda fuera** y
> **cómo se da por terminado**.

## 1. Alcance

Reconstrucción en **Astro estático** (HTML/CSS propios, sin JS salvo el menú móvil) de las
**6 páginas**, misma identidad visual (azul pizarra `#616B87`, grises, logotipo VPJ rojo)
y mismo contenido, con imágenes autoalojadas en WebP/PNG desde `public/images/`.

| # | Página | URL propuesta | Contenido v1 |
|---|---|---|---|
| 1 | Inicio | `/` | Hero (lema + cita Jn 10,10), ofrecemos (4 servicios), 4 programas de evangelización (Kerygma, Familia, Youth, School), sección de contacto. Botones "Quienes somos" → `/quienes-somos` y "Nuestro equipo" → `/equipo`. |
| 2 | Quiénes somos | `/quienes-somos` | "Somos VPJ", Misión, Visión, relación con la Iglesia Católica (Arquidiócesis de Guadalajara y Santa Sede/Vaticano). |
| 3 | Equipo VPJ | `/equipo` | "Somos familia evangelizadora" (Mc 3,13), asesor + equipo de tiempo completo (9 fichas nombre/cargo), sección Alianzas. |
| 4 | Curso Internacional | `/curso-internacional` | Bloque "PADRE NUESTRO" + retiro de Adviento: objetivo, 3 modalidades, CTA WhatsApp y los 4 temas. *(Contenido por aclarar — ver §5.)* |
| 5 | Youth Project | `/youth-project` | 6 cursos de 72 hrs (Mi Primer Encuentro, Amistad con Jesús, Tú eres Precioso, 7 Jóvenes del Evangelio, Heaven Sex, Youth for Youth) + misión "Mar Adentro". |
| 6 | Proyecto Familia | `/proyecto-familia` | "Proceso Family Project" + 6 cursos (Job, Cinco panes y dos peces, El Esposo y los esposos, Nazareth, Bodas de Caná, Azarías). |

**Componentes comunes a todas las páginas**

- Cabecera con logotipo VPJ + menú móvil (botón hamburguesa, navegación por teclado).
- Pie con contacto (dirección, teléfono, correo) y enlaces a redes (Facebook, Instagram, YouTube).
- Formulario de contacto sustituido por **botones WhatsApp** (`https://wa.me/523317908012`)
  y **mailto** (`mailto:vidaplenaenjesusgdl@gmail.com`).

## 2. Fuera de alcance (v1)

- Blog / noticias.
- Tienda / carrito de compras.
- Login de usuarios o área privada.
- Panel de administración.
- Multi-idioma (solo español-MX).
- CMS o backend (cero servidor; 100 % estático).
- Mapa embebido interactivo y formulario de Wix (se reemplazan por contacto plano + WhatsApp).
- Páginas propias para "Proyecto Kerygma" y "School Project" (quedan como tarjetas de programas en Inicio).

## 3. Prioridades (si hay que recortar)

- **P0 — núcleo:** las 6 páginas con su contenido real, navegación, contacto (WhatsApp/mailto),
  `noindex` eliminado, `title`/`meta description`, `sitemap.xml` + `robots.txt`.
- **P1 — calidad:** imágenes WebP con `width`/`height` y `loading="lazy"`, accesibilidad
  (contraste AA, teclado, un solo `<h1>`, `alt` correctos), móvil sin scroll horizontal.
- **P2 — pulido:** `og:`/JSON-LD, favicon, `404`, revisión fina de erratas de contenido,
  optimización de peso por página (objetivo < 60 KB).

## 4. Criterios de aceptación / Definition of Done

1. **Build:** `npm run build` termina sin errores y genera las 6 páginas estáticas.
2. **Móvil:** sin scroll horizontal a 360 px; menú móvil funcional (abre/cierra, navegable con teclado).
3. **Peso:** HTML + CSS + JS por página < **60 KB** (referencia actual: 713 KB).
4. **Imágenes:** en WebP (o PNG para logos), con `width` y `height`, y `loading="lazy"`
   en todas salvo el `hero` de Inicio (que carga con prioridad).
5. **SEO por página:** `title` y `meta description` únicos y descriptivos; sin
   `<meta name="robots" content="noindex">`; `sitemap.xml` con las 6 URLs y `robots.txt` correctos.
6. **Estructura:** un solo `<h1>` por página y jerarquía de encabezados coherente (h1 → h2 → h3).
7. **Accesibilidad:** contraste mínimo AA (4.5:1 texto, 3:1 grandes) y navegación completa por teclado.
8. **Contacto:** botones de WhatsApp y correo enlazan a las URLs reales y abren la app correspondiente.
9. **Enlaces internos:** todos los enlaces del menú y los CTAs apuntan a páginas existentes (sin enlaces rotos).

## 5. Riesgos / dependencias

- **Contenido por confirmar con el cliente** (erratas del original):
  "kerigmatica" → "kerigmática", "Intoducción" → "Introducción", "Aviento" → "Adviento",
  "1hra" → "1 h", "Curso Internaciónal" → "Curso Internacional".
- **Curso Internacional mezclado:** la página junta el título "PADRE NUESTRO" con un retiro de
  Adviento. **Aclarar con el cliente** si son dos cursos distintos o un único retiro; en v1 se
  reproduce el contenido tal cual, pendiente de definición.
- **Mapeo de fotos del equipo:** la correspondencia foto ↔ nombre (9 fichas) se dedujo por
  parecido/orden del DOM. **Confirmar con el cliente antes de publicar**.
- **Fotos/autorización de uso:** confirmar que el cliente autoriza las imágenes descargadas de
  `static.wixstatic.com` para el sitio nuevo.
- **Proyecto Kerygma y School Project** no tienen página propia; se muestran como tarjetas en
  Inicio sin destino (o enlazando al programa principal si el cliente lo define).

## 6. Entregable final

- Repo público en GitHub: `cubasmx/vida-plena-en-jesus` con el proyecto Astro.
- `README.md` con instrucciones de instalación y build.
- Despliegue opcional en **GitHub Pages** (base `/vida-plena-en-jesus/` configurada en
  `astro.config.mjs`), listo para apuntar el dominio `vidaplenaenjesus.com` cuando el cliente lo pida.
