import { useEffect, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPostBySlug, parseMarkdownToHtml } from '../blog/useBlogPosts.js'
import SEOHead from '../components/SEOHead.jsx'
import TableOfContents from '../components/TableOfContents.jsx'
import RelatedPosts from '../components/RelatedPosts.jsx'
import BlogCTA from '../components/BlogCTA.jsx'
import { SITE_URL } from '../config/site.js'
import { useTranslation } from '../i18n/useTranslation.js'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const proseRef = useRef(null)
  const { lang, copy } = useTranslation()
  const post = getPostBySlug(slug, lang)

  useEffect(() => {
    const root = proseRef.current
    if (!root) return undefined

    const onClick = (e) => {
      const anchor = e.target?.closest?.('a')
      if (!anchor || !root.contains(anchor)) return
      const href = anchor.getAttribute('href')
      if (
        !href ||
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#')
      ) {
        return
      }
      if (href.startsWith('/')) {
        e.preventDefault()
        navigate(href)
      }
    }

    root.addEventListener('click', onClick)
    return () => root.removeEventListener('click', onClick)
  }, [navigate, post?.slug])

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl text-fg">{copy.blog.notFoundTitle}</h1>
        <p className="mt-4 text-muted">{copy.blog.notFoundBody}</p>
        <Link
          to="/blog"
          className="mt-8 inline-block font-mono text-accent hover:underline"
        >
          {copy.blog.backToBlog}
        </Link>
      </div>
    )
  }

  const htmlContent = parseMarkdownToHtml(post.content)
  const canonical = `${SITE_URL}/blog/${post.slug}`
  const og = post.ogImage || '/hero-ai.png'
  const dateLocale = lang === 'en' ? 'en-US' : 'fr-FR'
  const readingLabel = copy.blog.articleReading.replace(
    '{{n}}',
    String(post.readingTime),
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GAVIOM',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    image: og.startsWith('http') ? og : `${SITE_URL}${og}`,
    url: canonical,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    inLanguage: lang === 'en' ? 'en-US' : 'fr-FR',
  }

  return (
    <>
      <SEOHead
        title={post.seoTitle || post.title}
        description={post.description}
        canonical={canonical}
        ogImage={og}
        type="article"
        publishedTime={post.date}
        modifiedTime={post.updatedAt || post.date}
        author={post.author}
        locale={lang === 'en' ? 'en_US' : 'fr_FR'}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 pb-24 pt-32 lg:grid-cols-[1fr_280px]"
        key={`${slug}-${lang}`}
      >
        <main>
          <header className="mb-12">
            <span className="inline-block rounded border border-accent/30 px-2 py-1 font-mono text-xs text-accent">
              {post.category}
            </span>
            <h1 className="mt-6 mb-6 font-display text-5xl leading-none text-fg md:text-7xl">
              {post.title}
            </h1>
            <p className="mb-8 font-body text-xl text-muted">{post.description}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-border py-4 font-mono text-xs text-muted/60">
              <span>
                {post.author} · {post.authorRole}
              </span>
              <span className="hidden sm:inline">·</span>
              <span>
                {new Date(post.date).toLocaleDateString(dateLocale, {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span>·</span>
              <span>{readingLabel}</span>
            </div>
          </header>

          <div
            ref={proseRef}
            className="prose-axiom"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <BlogCTA />

          <RelatedPosts currentPost={post} />

          <p className="mt-12">
            <Link
              to="/blog"
              className="font-mono text-sm text-accent hover:underline"
            >
              {copy.blog.allArticles}
            </Link>
          </p>
        </main>

        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <TableOfContents content={post.content} />
          </div>
        </aside>
      </div>
    </>
  )
}
