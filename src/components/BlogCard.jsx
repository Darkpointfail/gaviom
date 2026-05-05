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
        whileHover={{ y: -4 }}
        className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-violet"
      >
        <span className="w-fit rounded border border-cyan/30 px-2 py-1 font-mono text-xs text-cyan">
          {post.category}
        </span>

        <h2 className="font-display text-2xl leading-tight text-white transition-colors duration-200 group-hover:text-cyan">
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
