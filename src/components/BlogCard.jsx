import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from '../i18n/useTranslation.js'

export default function BlogCard({ post }) {
  const { lang, copy } = useTranslation()
  const readingLabel = copy.blog.cardReading.replace(
    '{{n}}',
    String(post.readingTime),
  )

  return (
    <Link to={`/blog/${post.slug}`} className="block h-full">
      <motion.article
        whileHover={{ y: -3 }}
        className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-surface p-6 shadow-lux-sm ring-1 ring-inset ring-white/[0.04] transition-all duration-300 hover:border-accent/50 hover:shadow-lux"
      >
        <span className="w-fit rounded border border-accent/30 px-2 py-1 font-mono text-xs text-accent">
          {post.category}
        </span>

        <h2 className="font-display text-2xl leading-tight text-fg transition-colors duration-200 group-hover:text-accent">
          {post.title}
        </h2>

        <p className="line-clamp-3 flex-1 font-body text-sm text-muted">
          {post.description}
        </p>

        <div className="flex items-center justify-between border-t border-border pt-2 font-mono text-xs text-muted/60">
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
          <span>{readingLabel}</span>
        </div>
      </motion.article>
    </Link>
  )
}
