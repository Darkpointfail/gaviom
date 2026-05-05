import { Link } from 'react-router-dom'
import { getRelatedPosts } from '../blog/useBlogPosts.js'
import { useTranslation } from '../i18n/useTranslation.js'

export default function RelatedPosts({ currentPost }) {
  const { copy } = useTranslation()
  const related = getRelatedPosts(currentPost, 3)
  if (related.length === 0) return null

  return (
    <section className="mt-20 border-t border-border pt-16">
      <h2 className="mb-8 font-display text-3xl text-white md:text-4xl">
        {copy.blog.relatedTitle}
      </h2>
      <ul className="grid gap-6 md:grid-cols-3">
        {related.map((p) => (
          <li key={p.slug}>
            <Link
              to={`/blog/${p.slug}`}
              className="group block rounded-xl border border-border bg-surface/80 p-5 transition hover:border-violet"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-cyan">
                {p.category}
              </span>
              <h3 className="mt-2 font-display text-xl text-white transition group-hover:text-cyan">
                {p.title}
              </h3>
              <p className="mt-2 line-clamp-2 font-body text-sm text-muted">
                {p.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
