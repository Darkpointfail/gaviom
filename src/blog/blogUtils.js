import matter from 'gray-matter'
import { marked } from 'marked'

const modules = import.meta.glob('./posts/*/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

marked.use({
  gfm: true,
})

/** @typedef {'fr'|'en'} BlogLang */

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** Ajoute id aux <h2> et <h3> pour ancrage TOC */
export function addHeadingIds(html) {
  return html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (match, level, inner) => {
    const plain = inner.replace(/<[^>]+>/g, '').trim()
    const id = slugify(plain)
    return `<h${level} id="${id}">${inner}</h${level}>`
  })
}

export function extractHeadings(markdown) {
  const re = /^(#{2,3})\s+(.+)$/gm
  const headings = []
  let m
  while ((m = re.exec(markdown)) !== null) {
    const hashes = m[1]
    const text = m[2].trim()
    const level = hashes.length
    headings.push({
      level,
      text,
      id: slugify(text),
    })
  }
  return headings
}

export function parseMarkdownToHtml(markdown) {
  const raw = marked.parse(markdown, { async: false })
  return addHeadingIds(raw)
}

function parseAll() {
  return Object.entries(modules).map(([filepath, raw]) => {
    const langMatch = filepath.match(/posts\/(fr|en)\//)
    const lang = langMatch?.[1] || 'fr'
    const { data, content } = matter(raw)
    const slug =
      data.slug || filepath.split('/').pop().replace('.md', '')
    return { ...data, slug, content, lang }
  })
}

let cache
function allPostsUnsorted() {
  if (!cache) cache = parseAll()
  return cache
}

function sortedPosts(list) {
  return [...list].sort((a, b) => new Date(b.date) - new Date(a.date))
}

/** @param {BlogLang} lang */
export function getAllPosts(lang) {
  return sortedPosts(allPostsUnsorted().filter((p) => p.lang === lang))
}

/**
 * Article dans la langue demandée ; sinon même slug dans l’autre langue (repli).
 * @param {BlogLang} lang
 */
export function getPostBySlug(slug, lang) {
  const primary = getAllPosts(lang).find((p) => p.slug === slug)
  if (primary) return primary
  const fallbackLang = lang === 'en' ? 'fr' : 'en'
  return getAllPosts(fallbackLang).find((p) => p.slug === slug) ?? null
}

/** @param {BlogLang} lang */
export function getPostsByCategory(category, lang) {
  return getAllPosts(lang).filter((p) => p.category === category)
}

/** @param {BlogLang} lang */
export function getFeaturedPosts(lang) {
  return getAllPosts(lang).filter((p) => p.featured)
}

/** @param {BlogLang} lang */
export function getAllCategories(lang) {
  const set = new Set()
  getAllPosts(lang).forEach((p) => {
    if (p.category) set.add(p.category)
  })
  return [...set].sort()
}

export function getRelatedPosts(currentPost, limit = 3) {
  const lang = currentPost.lang || 'fr'
  const all = getAllPosts(lang).filter((p) => p.slug !== currentPost.slug)
  const sameCat = all.filter((p) => p.category === currentPost.category)
  const rest = all.filter((p) => p.category !== currentPost.category)
  return [...sameCat, ...rest].slice(0, limit)
}
