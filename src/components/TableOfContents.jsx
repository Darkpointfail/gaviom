import { useEffect, useMemo, useState } from 'react'
import { extractHeadings } from '../blog/blogUtils.js'
import { useTranslation } from '../i18n/useTranslation.js'

export default function TableOfContents({ content }) {
  const { copy } = useTranslation()
  const [active, setActive] = useState('')
  const headings = useMemo(() => extractHeadings(content), [content])

  useEffect(() => {
    if (headings.length === 0) return undefined

    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean)

    if (els.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.target.id) setActive(e.target.id)
        })
      },
      { rootMargin: '-15% 0% -55% 0%', threshold: [0, 0.25, 0.5, 1] },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [content, headings])

  if (headings.length === 0) return null

  return (
    <nav aria-label={copy.blog.tocAria}>
      <p className="mb-4 font-mono text-xs text-cyan">{copy.blog.tocLabel}</p>
      <ul className="space-y-2 border-l border-border pl-4">
        {headings.map((h) => (
          <li
            key={h.id}
            style={{ paddingLeft: h.level === 3 ? '0.75rem' : 0 }}
          >
            <a
              href={`#${h.id}`}
              className={`font-body text-sm transition-colors duration-200 ${
                active === h.id
                  ? 'text-cyan'
                  : 'text-muted hover:text-white'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
