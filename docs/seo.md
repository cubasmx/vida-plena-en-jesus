# Estrategia SEO — vidaplenaenjesus.com

> Documento de trabajo para la nueva versión estática (Astro). Salida: 6 páginas.
> Datos de contacto y redes: `docs/imagenes.md`. Auditoría: `docs/analisis.md`.
> Autor: Marco (estrategia de marketing). Fecha: 2026-10-02.

---

## 0. Resumen ejecutivo

El sitio actual es invisible para Google por un `<meta name="robots" content="noindex">`.
Antes de cualquier táctica, la nueva versión debe **indexar**. Con eso resuelto, esta
estrategia ordena cuatro cosas: (1) a quién le hablamos y qué queremos que haga,
(2) metadatos únicos y locales, (3) estructura semántica y datos estructurados limpios
y (4) captación por WhatsApp con mensajes precargados por audiencia.

KPI principal: **conversaciones iniciadas por WhatsApp / correo**.
KPIs secundarios: impresiones y clics orgánicos en Search Console, altas a cursos,
visitas a la ficha de Google Business Profile.
Sin analítica no hay optimización: instalar una solución ligera y sin cookies
(Cloudflare Web Analytics o Umami autoalojado) al lanzar.

---

## 1. Estrategia: a quién le hablamos y qué buscamos

**Propuesta de valor (una frase):** Vida Plena en Jesús forma y acompaña a católicos
de Guadalajara para vivir y anunciar el Evangelio, desde la primera evangelización
(kerigma) hasta la formación de nuevos misioneros.

El sitio debe hablarle a cinco públicos, en este orden de prioridad comercial:

| Prioridad | Público | Qué busca | Página de entrada |
|---|---|---|---|
| 1 | **Matrimonios** (jóvenes y adultos) | Cursos y acompañamiento para su relación | Proyecto Familia |
| 2 | **Agentes de pastoral, religiosos, sacerdotes, seminaristas** | Formación y asesoría para procesos pastorales | Curso Internacional / Quiénes somos |
| 3 | **Jóvenes y adolescentes** | Encontrarse con Jesús, comunidad, misión de verano | Youth Project |
| 4 | **Colegios** (dirección, pastoral, docentes) | Retiros kerigmáticos para alumnos y claustro | Inicio → contacto directo |
| 5 | **Adultos en general** | Primera evangelización, retiros | Inicio / Quiénes somos |

**Acción principal (CTA primario):** iniciar conversación por **WhatsApp**.
**Acción secundaria:** escribir a **vidaplenaenjesusgdl@gmail.com**.
No hay backend ni formulario con servidor: el formulario de contacto se resuelve con
`mailto:` o con un enlace a WhatsApp (ver §6).

**Intención local:** toda la propuesta de valor se ancla en Guadalajara, Jalisco.
La organización es local y presencial (retiros, cursos, acompañamiento), así que
“Guadalajara”, “GDL” y “Jalisco” deben aparecer en títulos, encabezados y texto.
El sitio compite por búsquedas como:

- *retiros católicos Guadalajara*
- *cursos para matrimonios Guadalajara*
- *pastoral juvenil Guadalajara*
- *evangelización católica Guadalajara*
- *formación para agentes de pastoral Jalisco*
- *retiros para colegios Guadalajara*

---

## 2. Metadatos por página

Reglas: `title` ≤ 60 caracteres, `meta description` ≤ 155, únicos entre sí, con
intención local y marca al final. Slugs en minúsculas, con guiones y palabras clave
(se eliminan `/about-1`, `/general-6` y `/courses`).

### 2.1 Inicio — slug `/`

- **`title`** (49): `Vida Plena en Jesús | Evangelización católica GDL`
- **`meta description`** (148): `Organismo católico de evangelización en Guadalajara. Formación para adultos, matrimonios y jóvenes, retiros para colegios y acompañamiento pastoral.`
- **Open Graph:**
  - `og:type`: `website`
  - `og:title`: `Vida Plena en Jesús — evangelización católica en Guadalajara`
  - `og:description`: `Formamos y acompañamos a católicos en Guadalajara: cursos para matrimonios, jóvenes, adultos y retiros para colegios. Escríbenos por WhatsApp.`
  - `og:image`: `/images/hero.webp` (con `og:image:alt`: *Calle del Vaticano, imagen de portada de Vida Plena en Jesús*)
  - `og:locale`: `es_MX`

### 2.2 Quiénes somos — slug `/quienes-somos`

- **`title`** (47): `Quiénes somos | Vida Plena en Jesús Guadalajara`
- **`meta description`** (135): `Conoce la misión, visión y relación de Vida Plena en Jesús con la Arquidiócesis de Guadalajara y el Dicasterio de Nueva Evangelización.`
- **Open Graph:**
  - `og:type`: `website`
  - `og:title`: `Quiénes somos — Vida Plena en Jesús, Guadalajara`
  - `og:description`: `Somos un organismo laical de la Arquidiócesis de Guadalajara que evangeliza y forma nuevos evangelizadores por medio del kerigma.`
  - `og:image`: `/images/quienes-estudiantes.webp`
  - `og:locale`: `es_MX`

### 2.3 Equipo — slug `/equipo` (antes `/about-1`)

- **`title`** (50): `Equipo VPJ | Evangelizadores laicos en Guadalajara`
- **`meta description`** (136): `Conoce al equipo de Vida Plena en Jesús: Clara Macías, Ana Gabriela Gómez y los evangelizadores laicos a tiempo completo en Guadalajara.`
- **Open Graph:**
  - `og:type`: `website`
  - `og:title`: `Equipo VPJ — evangelizadores laicos en Guadalajara`
  - `og:description`: `Una familia evangelizadora integrada por nuestro asesor, el equipo de tiempo completo y la familia VPJ, al servicio del Evangelio.`
  - `og:image`: `/images/equipo-banner.webp`
  - `og:locale`: `es_MX`

### 2.4 Curso Internacional — slug `/curso-internacional` (antes `/general-6`)

> ⚠️ Pendiente de aclarar con el cliente: la página mezcla el título “PADRE NUESTRO”
> con contenido del retiro de Adviento. Los metadatos asumen que **Padre Nuestro** es
> el nombre del curso/retiro de Adviento. Si son dos cosas distintas, dividir en dos
> páginas y ajustar.

- **`title`** (55): `Curso Internacional Padre Nuestro | Vida Plena en Jesús`
- **`meta description`** (147): `Retiro de Adviento «Padre Nuestro» y curso internacional de evangelización en Guadalajara: semana de Adviento, retiro de un día o de fin de semana.`
- **Open Graph:**
  - `og:type`: `website`
  - `og:title`: `Curso Internacional «Padre Nuestro» — Vida Plena en Jesús`
  - `og:description`: `Vive el Adviento con esperanza: cinco temas, desde “En camino a Belén” hasta “Navidad, el nacimiento de nuestro Salvador”. Escríbenos por WhatsApp.`
  - `og:image`: `/images/curso-adviento.png`
  - `og:locale`: `es_MX`

### 2.5 Youth Project — slug `/youth-project` (antes `/courses`)

- **`title`** (47): `Youth Project | Jóvenes y misión en Guadalajara`
- **`meta description`** (138): `Cursos de primer anuncio y misión juvenil de Vida Plena en Jesús: Mi Primer Encuentro con Jesús, Heaven Sex o Mar Adentro, en Guadalajara.`
- **Open Graph:**
  - `og:type`: `website`
  - `og:title`: `Youth Project — jóvenes y misión en Guadalajara`
  - `og:description`: `Cursos de 72 horas para que los jóvenes tengan un encuentro personal con Jesús y vivan la misión. Incluye Mar Adentro, misión de verano.`
  - `og:image`: `/images/you-logo.png`
  - `og:locale`: `es_MX`

### 2.6 Proyecto Familia — slug `/proyecto-familia`

> Corrige el título descuadrado “FamilyProject”.

- **`title`** (45): `Proyecto Familia | Matrimonios en Guadalajara`
- **`meta description`** (131): `Cursos y acompañamiento para matrimonios: Job, Cinco Panes y Dos Peces, El Esposo y los Esposos, Nazareth, Bodas de Caná y Azarías.`
- **Open Graph:**
  - `og:type`: `website`
  - `og:title`: `Proyecto Familia — cursos para matrimonios en Guadalajara`
  - `og:description`: `Seis cursos para crecer en la espiritualidad de pareja, afrontar las crisis en unidad y poner a Jesús en el centro del matrimonio.`
  - `og:image`: `/images/familia-3.png`
  - `og:locale`: `es_MX`

**Globales (todas las páginas):** `og:site_name` = `Vida Plena en Jesús`,
`twitter:card` = `summary_large_image` (reutiliza `og:image`), `canonical` absoluto
(`https://vidaplenaenjesus.com/<slug>/`). El `title` de las `og:*` puede no coincidir
con el `title` SEO: en OG se premia el compartido, no el largo exacto.

---

## 3. Estructura de encabezados recomendada

Regla: **un solo `h1` por página**, con la keyword principal; `h2` para secciones y
`h3` para tarjetas/cursos/personas. No usar encabezados para maquetar.

### Inicio (`/`)
- `h1`: **Llamados a evangelizar en la Iglesia católica** (Guadalajara, Jalisco)
- `h2`: Quiénes somos
- `h2`: Qué ofrecemos
  - `h3`: Asesoría y acompañamiento en procesos pastorales
  - `h3`: Experiencias de primera evangelización
  - `h3`: Formación de nuevos predicadores y misioneros
  - `h3`: Predicación en eventos masivos
- `h2`: Nuestros programas
  - `h3`: Formación para adultos y agentes de pastoral
  - `h3`: Formación para matrimonios — Proyecto Familia
  - `h3`: Formación para adolescentes y jóvenes — Youth Project
  - `h3`: Retiros kerigmáticos para colegios
- `h2`: Contacto y ubicación

### Quiénes somos (`/quienes-somos`)
- `h1`: **Somos Vida Plena en Jesús, un organismo católico de evangelización en Guadalajara**
- `h2`: Nuestra misión
- `h2`: Nuestra visión
- `h2`: Nuestra relación con la Iglesia católica
  - `h3`: Arquidiócesis de Guadalajara
  - `h3`: Santa Sede, Vaticano

### Equipo (`/equipo`)
- `h1`: **Somos una familia evangelizadora**
- `h2`: Evangelizadores laicos a tiempo completo
  - `h3` (una por persona): Lic. Clara Macías — Fundadora y Directora; Lic. Ana Gabriela Gómez — Coordinadora Youth Project; José Manuel Mendoza — Administrador; y el resto del equipo.
- `h2`: Alianzas
  - `h3`: Centro Kerygma Internacional
  - `h3`: peregrinaciones.mx

### Curso Internacional (`/curso-internacional`)
- `h1`: **Curso Internacional «Padre Nuestro»: un retiro de Adviento en Guadalajara**
- `h2`: Objetivo
- `h2`: Modalidades del retiro
  - `h3`: Semana de Adviento (de lunes a viernes)
  - `h3`: Retiro de un día (sábado o domingo)
  - `h3`: Retiro de fin de semana
- `h2`: Temario
  - `h3`: Tema 1 — En camino a Belén
  - `h3`: Tema 2 — Camino de conversión
  - `h3`: Tema 3 — La gran espera: preparar el corazón con María
  - `h3`: Tema 4 — Navidad: el nacimiento de nuestro Salvador

> Corregir erratas del original: *“Internaciónal” → “Internacional”*,
> *“Aviento” → “Adviento”*, *“Intoducción” → “Introducción”*, *“1hra.” → “1 h”*.

### Youth Project (`/youth-project`)
- `h1`: **Youth Project: cursos de primer anuncio y misión para jóvenes**
- `h2`: Cursos
  - `h3` (uno por curso): Mi Primer Encuentro con Jesús; Amistad con Jesús; Tú eres precioso; 7 Jóvenes del Evangelio; Heaven Sex; Youth for Youth — todos con “Duración: 72 h”.
- `h2`: Mar Adentro — misión juvenil de verano

> Corregir erratas: *“A travéz” → “A través”*, *“el demonio” → “el demonio/mundo” redacción*, *“jesús”/“jovenes”* (tildes y mayúsculas).

### Proyecto Familia (`/proyecto-familia`)
- `h1`: **Proyecto Familia: cursos y acompañamiento para matrimonios en Guadalajara**
- `h2`: Nuestros cursos
  - `h3` (uno por curso): Curso Job; Cinco Panes y Dos Peces; El Esposo y los Esposos; Curso Nazareth; Curso Bodas de Caná; Curso Azarías
- `h2`: Escríbenos por WhatsApp

> Corregir errata de redacción: *“cuando llegan los cambios de pasara de otra”*.

---

## 4. Datos estructurados (JSON-LD)

**Problema actual:** dos objetos `WebSite` duplicados + un `LocalBusiness`, lo que genera
ambigüedad. **Solución:** un **único** bloque JSON-LD con un `@graph`, en el `<head>` de
todas las páginas. El `WebSite` se declara una sola vez. El `Organization` incluye los
datos de local (dirección y teléfono) para búsquedas locales y mapa.

Sustituir `https://vidaplenaenjesus.com` por el dominio final si cambia.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ReligiousOrganization", "LocalBusiness"],
      "@id": "https://vidaplenaenjesus.com/#organizacion",
      "name": "Vida Plena en Jesús",
      "alternateName": "VPJ",
      "url": "https://vidaplenaenjesus.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vidaplenaenjesus.com/images/logo-vpj.png"
      },
      "image": "https://vidaplenaenjesus.com/images/hero.webp",
      "description": "Organismo católico de evangelización en Guadalajara. Formación para adultos, matrimonios y jóvenes, retiros para colegios y acompañamiento pastoral.",
      "email": "vidaplenaenjesusgdl@gmail.com",
      "telephone": "+52 33 1790 8012",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Alemania, Av. 8 de Julio, Moderna",
        "addressLocality": "Guadalajara",
        "addressRegion": "Jalisco",
        "postalCode": "44190",
        "addressCountry": "MX"
      },
      "areaServed": [
        { "@type": "City", "name": "Guadalajara" },
        { "@type": "AdministrativeArea", "name": "Jalisco" }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+52 33 1790 8012",
        "email": "vidaplenaenjesusgdl@gmail.com",
        "availableLanguage": ["es"]
      },
      "sameAs": [
        "https://www.facebook.com/vidaplenaenjesusgdl",
        "https://www.instagram.com/vidaplenaenjesusgdl",
        "https://www.youtube.com/channel/UCv3UrUAx64H5tl-6N4qP78w"
      ],
      "founder": {
        "@type": "Person",
        "name": "Clara Macías"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://vidaplenaenjesus.com/#website",
      "url": "https://vidaplenaenjesus.com/",
      "name": "Vida Plena en Jesús",
      "inLanguage": "es-MX",
      "publisher": { "@id": "https://vidaplenaenjesus.com/#organizacion" }
    }
  ]
}
```

**Notas:**
- No añadir `geo`/`latitude`/`longitude` inventadas: obtener las coordenadas exactas
  del pin de Google Maps antes de publicar, si se quieren usar.
- No incluir `SearchAction`: el sitio no tiene buscador interno.
- `foundingDate`, `numberOfEmployees` y `openingHours` quedan pendientes de confirmar
  con el cliente; no inventarlos.
- Opcional por página: `BreadcrumbList` para las 6 páginas y `Course` para los cursos
  del Youth Project / Proyecto Familia. Valorar tras el lanzamiento; primero indexar.

---

## 5. `robots.txt`, `sitemap.xml` y el `noindex`

### 5.1 Eliminar el `noindex` (crítico)

El sitio Wix actual emite `<meta name="robots" content="noindex">`, por eso Google no
indexa ninguna página. En la versión Astro:

- **No** debe existir ninguna etiqueta `<meta name="robots" content="noindex">` en el
  HTML ni cabeceras `X-Robots-Tag: noindex`.
- Dejar el comportamiento por defecto (`index, follow`) o, en su caso, declarar
  explícitamente `<meta name="robots" content="index, follow, max-image-preview:large">`.
- Al publicar: pedir indexación en Search Console, enviar el sitemap y verificar con
  la inspección de URL que **no** aparece “Excluida por etiqueta noindex”.
- Revisar que el dominio canónico del proyecto sea el correcto (con/sin `www`) y
  redirigir 301 el resto. Mientras conviva el Wix viejo, usar `noindex` **solo** en el
  antiguo, nunca en el nuevo.

### 5.2 `robots.txt` (en `public/robots.txt`)

```
User-agent: *
Allow: /

Sitemap: https://vidaplenaenjesus.com/sitemap.xml
```

- `Allow: /` para todo el contenido público (incluidas `/images/`).
- Sin `Disallow`. No bloquear CSS, JS ni imágenes: Google necesita verlos.
- Si algún día hay páginas privadas, protegerlas con `noindex` (no con `Disallow`).

### 5.3 `sitemap.xml`

Generarlo automáticamente con `@astrojs/sitemap` a partir de las 6 rutas
(`site` configurado en `astro.config.mjs`). Contenido mínimo esperado:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://vidaplenaenjesus.com/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://vidaplenaenjesus.com/quienes-somos/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://vidaplenaenjesus.com/equipo/</loc><priority>0.6</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://vidaplenaenjesus.com/curso-internacional/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://vidaplenaenjesus.com/youth-project/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://vidaplenaenjesus.com/proyecto-familia/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
</urlset>
```

- URLs **absolutas** y con barra final (coherente con `canonical`).
- `lastmod` se añade automáticamente por `@astrojs/sitemap`; no ponerlo a mano.
- Redirecciones 301 desde las URLs viejas:
  `/about-1` → `/equipo/`, `/general-6` → `/curso-internacional/`,
  `/courses` → `/youth-project/`. (Se resuelven en el hosting/`_redirects`.)

---

## 6. Conversión y captación (WhatsApp / correo)

**Número único de WhatsApp:** `+52 33 1790 8012` → todos los enlaces usan
`https://wa.me/523317908012` (sin el `wa.link` corto del sitio viejo, que oculta el
destino y añade un salto).

### 6.1 Dónde colocar los CTA

| Ubicación | Tipo | Texto del botón |
|---|---|---|
| Cabecera fija | Botón verde persistente | `WhatsApp` / en móvil, icono + `Escríbenos` |
| Hero de Inicio | CTA primario + secundario | `Escríbenos por WhatsApp` / `Ver programas` |
| Franja bajo el hero | CTA de apoyo | `Agenda una asesoría pastoral` |
| Tarjetas de programa | CTA por audiencia | `Quiero info de matrimonios` / `…de jóvenes` / `…para colegios` / `Formación para adultos` |
| Sección Contacto | CTA grande + datos | `Enviar WhatsApp` + `vidaplenaenjesusgdl@gmail.com` |
| Flotante (móvil) | Botón redondo abajo a la derecha | Icono WhatsApp con `aria-label="Escríbenos por WhatsApp"` |
| Pie de página | Enlaces y redes | Iconos a Facebook, Instagram, YouTube |

Reglas de usabilidad: el flotante aparece tras el primer scroll y se oculta sobre el
formulario para no tapar; el botón de cabecera siempre visible en móvil; todos los CTA
llevan `rel="noopener"` y `target="_blank"`.

### 6.2 Enlaces `wa.me` con mensaje precargado (listos para pegar)

**General (cabecera, hero, flotante, contacto)**
```
https://wa.me/523317908012?text=Hola%2C%20vi%20su%20sitio%20web%20y%20quiero%20informaci%C3%B3n%20sobre%20Vida%20Plena%20en%20Jes%C3%BAs.
```

**Matrimonios → Proyecto Familia**
```
https://wa.me/523317908012?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20cursos%20para%20matrimonios%20%28Proyecto%20Familia%29.
```

**Jóvenes / adolescentes → Youth Project**
```
https://wa.me/523317908012?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Youth%20Project%20y%20la%20misi%C3%B3n%20Mar%20Adentro.
```

**Colegios → retiros kerigmáticos**
```
https://wa.me/523317908012?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20retiros%20kerigm%C3%A1ticos%20para%20colegios.
```

**Adultos / agentes de pastoral / religiosos**
```
https://wa.me/523317908012?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20formaci%C3%B3n%20para%20adultos%20y%20agentes%20de%20pastoral.
```

**Curso Internacional (Adviento «Padre Nuestro»)**
```
https://wa.me/523317908012?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Curso%20Internacional%20%28retiro%20%C2%ABPadre%20Nuestro%C2%BB%29.
```

**Correo:** además del WhatsApp, en cada página incluir
`mailto:vidaplenaenjesusgdl@gmail.com?subject=...` con asunto contextual, p. ej.
`?subject=Solicito%20informaci%C3%B3n%20sobre%20Proyecto%20Familia`.
Medir cada origen con eventos de analítica (clic en WhatsApp vs. clic en correo).

---

## 7. Quick wins de contenido local y enlaces salientes

1. **NAP visible y consistente** en el pie de todas las páginas:
   `Av. Alemania, Av. 8 de Julio, Moderna, 44190 Guadalajara, Jal.` +
   `+52 33 1790 8012` + `vidaplenaenjesusgdl@gmail.com`. Mismo formato que en la
   ficha de Google Business Profile.
2. **Ficha de Google Business Profile** (o reclamación de la existente): categoría
   “Organización religiosa”, dirección, teléfono, enlace al sitio nuevo y botón de
   WhatsApp. Es el mayor quick win local: aparece en Maps y en el paquete local.
3. **Párrafos con intención local** en Inicio y Quiénes somos:
   mencionar explícitamente “Guadalajara”, “Zapopan”, “Arquidiócesis de Guadalajara”
   y la cercanía a la colonia Moderna en vez de texto genérico.
4. **Enlaces internos** con anclas descriptivas entre las 6 páginas
   (p. ej. desde Inicio → `cursos para matrimonios en Guadalajara` → `/proyecto-familia/`).
   Enlazar también los programas sin página propia (Kerygma, School Project) a su
   página o a una sección con ancla, no a `#`.
5. **Enlaces salientes** (todos `rel="noopener"`, `target="_blank"`), útiles para
   confianza y para el grafo de entidades:
   - Facebook: `https://www.facebook.com/vidaplenaenjesusgdl`
   - Instagram: `https://www.instagram.com/vidaplenaenjesusgdl`
   - YouTube: `https://www.youtube.com/channel/UCv3UrUAx64H5tl-6N4qP78w`
   - Centro Kerygma Internacional (alianza, imagen `alianza-1.webp`)
   - peregrinaciones.mx (alianza, imagen `alianza-2.webp`)
   - Arquidiócesis de Guadalajara (contexto institucional, `arquidiocesis.webp`)
6. **Textos `alt` reales** en todas las imágenes (hoy hay `Captura de Pantalla…`).
   Ejemplos: *“Equipo de evangelizadores de Vida Plena en Jesús en Guadalajara”*,
   *“Calle del Vaticano, imagen de portada”*, *“Logo de Youth Project — Mar Adentro”*.
7. **Datos de negocio en el pie:** sustituir “© 2024 Creado por Gabriela Gómez” por
   `© 2026 Vida Plena en Jesús` + “Organismo de evangelización en Guadalajara, Jalisco”.
8. **Contenido pendiente que genera búsquedas:** crear páginas/secciones para
   *Proyecto Kerygma* y *School Project* (hoy son tarjetas sin destino), con sus
   propios metadatos cuando exista texto confirmado.
9. **Rendimiento = SEO:** imágenes WebP autoalojadas, sin JS salvo el menú móvil y
   `font-display: swap`. El sitio viejo cargaba 773 KB de markup y 77 scripts; la
   versión Astro debe quedar por debajo de 100 KB de HTML.

---

## 8. Checklist de lanzamiento

- [ ] `noindex` eliminado; `index, follow` en todas las páginas.
- [ ] 6 `title` y 6 `meta description` únicos (§2) revisados con su longitud.
- [ ] `canonical` absoluto con dominio final y redirecciones 301 de las URLs viejas.
- [ ] JSON-LD único con `@graph` (§4) validado en el Rich Results Test.
- [ ] `robots.txt` + `sitemap.xml` publicados y enviados a Search Console.
- [ ] botones de WhatsApp (§6) probados en móvil con el mensaje precargado correcto.
- [ ] Google Business Profile con NAP y enlace al sitio nuevo.
- [ ] analítica sin cookies instalada y eventos de clic a WhatsApp/correo.
