import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const postsRoot = path.join(root, 'src/blog/posts')
const outPath = path.join(root, 'public/sitemap.xml')
const robotsPath = path.join(root, 'public/robots.txt')
const envPath = path.join(root, '.env')

if (fs.existsSync(envPath)) {
  const raw = fs.readFileSync(envPath, 'utf8')
  for (const line of raw.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const m = trimmed.match(/^VITE_SITE_URL=(.+)$/)
    if (m) process.env.VITE_SITE_URL = m[1].replace(/^['"]|['"]$/g, '')
  }
}

const BASE_URL = (process.env.VITE_SITE_URL || 'https://gaviom.com').replace(
  /\/$/,
  '',
)

/** Chemins des .md sous posts/fr et posts/en, une entrée sitemap par slug unique */
function collectMarkdownPaths() {
  const out = []
  if (!fs.existsSync(postsRoot)) return out
  for (const lang of ['fr', 'en']) {
    const dir = path.join(postsRoot, lang)
    if (!fs.existsSync(dir)) continue
    for (const f of fs.readdirSync(dir)) {
      if (f.endsWith('.md')) out.push(path.join(dir, f))
    }
  }
  return out
}

const seenSlugs = new Set()
const postUrls = collectMarkdownPaths()
  .map((filePath) => {
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(raw)
    const slug = data.slug || path.basename(filePath, '.md')
    if (seenSlugs.has(slug)) return ''
    seenSlugs.add(slug)
    const lastmod =
      data.updatedAt || data.date || new Date().toISOString().slice(0, 10)
    return `  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  })
  .filter(Boolean)
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
${postUrls}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, sitemap, 'utf8')
fs.writeFileSync(robotsPath, robots, 'utf8')
console.log('sitemap.xml ->', outPath)
console.log('robots.txt ->', robotsPath)
