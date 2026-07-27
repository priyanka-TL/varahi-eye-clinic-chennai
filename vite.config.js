import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE_URL, SITE_NAME } from './src/config/site.js'

// Injects site-wide Open Graph / Twitter Card tags into the static
// index.html at build time, reading from the same SITE_URL used by every
// page's <Seo> component. Non-JS crawlers (Facebook, WhatsApp, X, LinkedIn)
// only ever see this static HTML, so these tags exist here as the fallback
// social-preview representation of the whole site. Google itself does
// execute JS and picks up each page's own react-helmet-async tags, so
// there's no per-page canonical here — only per-page <Seo> canonicals.
const injectBaseMeta = () => ({
  name: 'inject-base-meta',
  transformIndexHtml(html) {
    const tags = `
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  <meta property="og:title" content="${SITE_NAME} | Best Eye Care Clinic in T. Nagar, Chennai" />
  <meta property="og:description" content="Trusted eye clinic in T. Nagar, Chennai offering cataract surgery, glaucoma management, diabetic eye screening & computer vision care." />
  <meta property="og:url" content="${SITE_URL}/" />
  <meta property="og:image" content="${SITE_URL}/og-image.jpg" />
  <meta property="og:locale" content="en_IN" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${SITE_NAME} | Best Eye Care Clinic in T. Nagar, Chennai" />
  <meta name="twitter:description" content="Trusted eye clinic in T. Nagar, Chennai offering cataract surgery, glaucoma management, diabetic eye screening & computer vision care." />
  <meta name="twitter:image" content="${SITE_URL}/og-image.jpg" />
</head>`;
    return html.replace('</head>', tags);
  },
});

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/varahi-eye-clinic-chennai/' : '/',
  plugins: [react(), injectBaseMeta()],
}))
