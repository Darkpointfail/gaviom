import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from '../i18n/useTranslation.js'

export default function CategoryFilter({ categories }) {
  const { copy } = useTranslation()
  const { pathname } = useLocation()
  const onCategoryPage = pathname.includes('/blog/categorie/')

  return (
    <div className="mx-auto mb-12 flex max-w-7xl flex-wrap items-center gap-3 px-6">
      <Link
        to="/blog"
        className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${
          !onCategoryPage
            ? 'border-cyan bg-cyan/10 text-cyan'
            : 'border-border text-muted hover:border-cyan/50 hover:text-white'
        }`}
      >
        {copy.blog.filterAll}
      </Link>
      {categories.map((cat) => {
        const href = `/blog/categorie/${encodeURIComponent(cat)}`
        const active = pathname === href
        return (
          <Link
            key={cat}
            to={href}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${
              active
                ? 'border-cyan bg-cyan/10 text-cyan'
                : 'border-border text-muted hover:border-cyan/50 hover:text-white'
            }`}
          >
            {cat}
          </Link>
        )
      })}
    </div>
  )
}
