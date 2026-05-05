/** URL canonique du site (SEO, Open Graph, sitemap). Surcharge possible : `VITE_SITE_URL` */
export const SITE_URL = (
  typeof import.meta.env.VITE_SITE_URL === 'string'
    ? import.meta.env.VITE_SITE_URL
    : 'https://axiom.ai'
).replace(/\/$/, '')
