import { defineConfig } from "astro/config";

// Sitio 100 % estático. Se puede desplegar en dos sitios:
//
// - GitHub Pages de proyecto (por defecto):
//     base "/vida-plena-en-jesus/"  → https://cubasmx.github.io/vida-plena-en-jesus/
//
// - Raíz de un dominio propio (p. ej. vidaplenaenjesus.com en el VPS):
//     ASTRO_BASE=/ npm run build
//   Al usar la raíz, los enlaces y assets se generan desde "/", sin prefijo.
//
// `site` identifica el origen canónico (sitemap, canonical, og:url). El base de
// GitHub Pages se resuelve por separado en `base`.
const base = process.env.ASTRO_BASE || "/vida-plena-en-jesus/";

export default defineConfig({
  output: "static",
  site: "https://cubasmx.github.io",
  base,
});
