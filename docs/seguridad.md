# Revisión de seguridad y privacidad — pre-publicación

> Repo `~/repos/vida-plena-en-jesus` → público `cubasmx/vida-plena-en-jesus`.
> Fecha: 2026-10-02 · Responsable: Alex (ciberseguridad VEIA).
> Alcance: secretos, superficie estática, enlaces/formularios, dependencias,
> GitHub Pages y licencias. **No se imprime ningún valor de secreto.**

No hay credenciales, tokens, claves, `.env` ni PEM. El mayor riesgo es
legal/privacidad (fotos y nombres de personas reales, imágenes de origen Wix sin
licencia acreditada) y la exposición interna de `docs/` en un repo público. El
despliegue tiene permisos correctos; conviene fijar acciones y activar Pages a
mano. `noindex` eliminado y sin trackers.

## 1. Secretos y datos sensibles

- Sin `.env`, `.pem`, `.key`, tokens ni API keys. Escaneo de patrones
  (`api_key|secret|token|password|Bearer|AKIA|ghp_|sk-…`) sin hallazgos.
- **No hay historial git** (la carpeta aún no es repo): nada que limpiar en
  commits. Al inicializar, ampliar `.gitignore` (hoy solo ignora `node_modules/`,
  `dist/`, `.astro/`, `*.log`) con `.env*`, `*.local`, `*.key`, `*.pem`.
- Contacto público intencional (`src/data/content.json`, repetido en `docs/`):
  `vidaplenaenjesusgdl@gmail.com`, `+52 33 1790 8012`, dirección y WhatsApp. Ya
  eran públicos en Wix; confirmar que siguen siendo de uso público.
- **Datos de terceros**: los `alt` de `src/pages/curso-internacional.astro`
  nombran a personas reales («Jaclyn», «Cristina», «Suzanne», «María») junto a
  sus fotos (`public/images/curso-*.webp`). Igual con `equipo-*` y `quienes-*`.
- **Exposición interna en `docs/`**: `analisis.md` («Auditoría hecha por Julio»,
  «Decisiones tomadas con Julio»), `alcance.md`, `contenido-limpio.md`
  («Responsable: Sole (contenidos VEIA)») y capturas `docs/*.png` revelan
  cliente, relación con la agencia y proceso interno.

## 2. Superficie estática

- **`noindex` eliminado ✅**: `src/layouts/Base.astro` emite
  `<meta name="robots" content="index, follow, max-image-preview:large">`; el
  build (`dist/`) lo confirma en todas las páginas. Sin `X-Robots-Tag`.
- `public/robots.txt`: `Allow: /` + sitemap a
  `https://cubasmx.github.io/vida-plena-en-jesus/sitemap.xml`. Correcto.
- `public/sitemap.xml`: 6 URLs reales (sin 404). Correcto.
- **JSON-LD** (`Base.astro`): publica `email`, `telephone`, dirección, `founder`
  «Clara Macías» y redes (`sameAs`). Datos de negocio ya públicos, pero el
  cliente debe validarlos (sobre todo el nombre de la fundadora).
- **Incoherencia de dominio**: `astro.config.mjs` fija `site:
  "https://cubasmx.github.io"`. En dominio propio, canonical, `og:url`,
  JSON-LD, sitemap y robots seguirán apuntando a GitHub Pages (SEO, no seguridad).
- Sin `.map`, sin `dist/` commiteado (ignorado) ni `.astro/`.

## 3. Enlaces salientes y formularios

- Sin `<form>`, `<iframe>`, trackers ni scripts de terceros. Único JS: menú móvil
  inline en `Header.astro`; no hay `<script src>` externo (verificado en `dist/`).
  Solo se enlazan `wa.me`, Facebook, Instagram, YouTube y `schema.org`.
- Redes del pie (`Footer.astro`): `target="_blank" rel="noopener noreferrer"` ✅.
- WhatsApp con `target="_blank"` pero **solo `rel="noopener"`** en
  `src/pages/index.astro:118` y `src/components/Header.astro:44` → añadir `noreferrer`.
- `src/pages/curso-internacional.astro:50,80`: `rel="noopener"` sin
  `target="_blank"` (misma pestaña; inconsistente, no riesgo).
- `mailto:` y `tel:` correctos, apuntan al contacto institucional.

## 4. Dependencias

`npm audit --omit=dev` (Astro 5.18.2; declara `^5.13.0`):

| Paquete | Sev. | Nota |
|---|---|---|
| astro | **critical** | XSS (define:vars, spread props, slot, view transitions), SSRF, RCE en AVIF, bypass de `base` |
| sharp | high | libvips/libheif (CVE-2026-33327/33328/35590/35591, GHSA-g89c, GHSA-2jg2) |
| http-cache-semantics | high | divulgación entre usuarios por `max-stale` |
| esbuild | low | lectura de ficheros en dev server (solo Windows) |

**4 vulnerabilidades (1 crítica, 2 altas, 1 baja).** Mitigante: sitio 100 %
estático, sin SSR, islas ni entrada de usuario → XSS/SSRF no explotables en Pages;
el riesgo real es la máquina de build/dev. `npm audit fix --force` instala
`astro@7.3.5` (breaking): hacerlo a conciencia, recompilar y revalidar.

## 5. GitHub Pages / despliegue

`.github/workflows/deploy.yml`:

- Permisos **mínimos y correctos ✅** (`contents: read`, `pages: write`,
  `id-token: write`) y `concurrency` con `cancel-in-progress: false` ✅.
- Acciones oficiales pero fijadas a etiqueta mayor (`checkout@v4`,
  `setup-node@v4`, `configure-pages@v5`, `upload-pages-artifact@v3`,
  `deploy-pages@v4`): etiqueta mutable = riesgo de cadena de suministro. Fijar a
  **SHA de commit** y activar Dependabot.
- `npm ci` + Node 20 reproducibles vía `package-lock.json` ✅. Sin secretos ✅.
- **Acción manual requerida**: *Settings → Pages → Source: GitHub Actions*; sin
  eso no publica. Añadir **protección de rama `main`**.

## 6. Licencia y atribución

- Pie `«© 2024 Creado por Gabriela Gómez»` (`content.json`), pero el equipo lista
  a «Lic. Ana Gabriela Gómez — Coord. Youth Project». Confirmar **titular, año
  vigente (2026) y si el crédito es correcto** (la nota `footer.nota` ya lo advierte).
- **Imágenes**: `docs/imagenes.md` indica descarga desde `static.wixstatic.com`.
  Confirmar derechos: stock (`you-*`, `familia-*`, `ofrece-*`, `hero/vaticano`),
  escudo de la **Arquidiócesis de Guadalajara**, logos de alianzas (**Centro
  Kerygma**, **peregrinaciones.mx**) y canal de **YouTube**. Marcas y logotipos
  de terceros no son libres por defecto.
- **No existe `LICENSE`**: definir licencia del código (o «Todos los derechos
  reservados») y atribución de contenidos/fotos.
- Imágenes optimizadas **sin EXIF/GPS** (verificado con Pillow) ✅.

## Bloqueantes para publicar

1. **Consentimiento de personas reales**: no publicar fotos + nombres de
   `equipo-*`, `curso-jaclyn/cristina/suzanne/maria` ni `quienes-*` sin
   autorización del cliente y de las personas retratadas.
2. **Derechos de imágenes y marcas**: confirmar licencia de las imágenes de Wix,
   escudo de la Arquidiócesis, logos de alianzas y canal de YouTube.
3. **Titularidad del pie**: resolver «© 2024 Creado por Gabriela Gómez».
4. **`docs/` internos**: sacar de la publicación las notas de trabajo y capturas
   con nombres internos/cliente, o pasar el repo a privado.

## Recomendaciones

- Actualizar Astro/sharp (crítico + altos) y recompilar.
- Fijar GitHub Actions a SHA de commit; activar Dependabot.
- Activar Pages (Source: GitHub Actions) y protección de rama `main`.
- Añadir `.env*`, `*.local`, `*.key`, `*.pem` a `.gitignore`.
- Unificar `rel="noopener noreferrer"` en todo `target="_blank"` y añadir
  `target`/`rel` a los WhatsApp de `curso-internacional.astro`.
- Usar `vidaplenaenjesus.com` como `site` en domain propio (canonical, og,
  JSON-LD, sitemap, robots).
- Validar con el cliente email/teléfono/dirección del JSON-LD.
- Añadir `LICENSE` (o aviso de derechos reservados) y atribución de stock.
