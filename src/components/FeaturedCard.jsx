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
        <article className="relative overflow-hidden rounded-2xl border border-border bg-surface/90 p-8 md:grid md:grid-cols-[1.2fr_1fr] md:gap-12 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-violet/15 opacity-70" />
          <div className="relative z-[1]">
            <span className="mb-4 inline-block rounded border border-cyan/40 px-2 py-1 font-mono text-xs uppercase tracking-wider text-cyan">
              {copy.blog.featuredLabel}
            </span>
            <h2 className="font-display text-4xl leading-none text-white transition-colors group-hover:text-cyan md:text-5xl">
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
            <span className="font-mono text-sm text-cyan transition group-hover:translate-x-1">
              {copy.blog.readArticle}
            </span>
          </div>
        </article>
      </Link>
    </section>
  )
}
