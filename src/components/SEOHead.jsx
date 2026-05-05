import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '../config/site.js'

function absUrl(pathOrUrl) {
  if (!pathOrUrl) return `${SITE_URL}/hero-ai.png`
  if (pathOrUrl.startsWith('http')) return pathOrUrl
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = '/hero-ai.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  locale = 'fr_FR',
}) {
  const imageUrl = absUrl(ogImage)

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="GAVIOM" />
      <meta property="og:locale" content={locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {author && <meta property="article:author" content={author} />}
    </Helmet>
  )
}
