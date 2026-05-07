import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/useTranslation.js'

export default function FeaturedCard({ post }) {
  const { lang, copy } = useTranslation()

  if (!post) return null

  const readingLabel = copy.blog.featuredReading.replace(
    '{{n}}',
    String(post.readingTime),
  )

  return (
    <section className="mx-auto mb-16 max-w-7xl px-6">
      <Link to={`/blog/${post.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl border border-border bg-surface/90 p-8 shadow-lux ring-1 ring-inset ring-white/[0.05] md:grid md:grid-cols-[1.2fr_1fr] md:gap-12 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/15 opacity-80" />
          <div className="relative z-[1]">
            <span className="mb-4 inline-block rounded border border-accent/40 px-2 py-1 font-mono text-xs uppercase tracking-wider text-accent">
              {copy.blog.featuredLabel}
            </span>
            <h2 className="font-display text-4xl leading-none text-fg transition-colors group-hover:text-accent md:text-5xl">
              {post.title}
            </h2>
            <p className="mt-6 font-body text-lg text-muted">{post.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs text-muted/70">
              <span>{post.category}</span>
              <span>·</span>
              <span>
                {new Date(post.date).toLocaleDateString(
                  lang === 'en' ? 'en-US' : 'fr-FR',
                  {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  },
                )}
              </span>
              <span>·</span>
              <span>{readingLabel}</span>
            </div>
          </div>
          <div className="relative z-[1] mt-8 flex items-end md:mt-0 md:justify-end">
            <span className="font-mono text-sm text-accent transition group-hover:translate-x-1">
              {copy.blog.readArticle}
            </span>
          </div>
        </article>
      </Link>
    </section>
  )
}
