import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import {
  getPostsByCategory,
  getAllCategories,
} from '../blog/useBlogPosts.js'
import BlogCard from '../components/BlogCard.jsx'
import CategoryFilter from '../components/CategoryFilter.jsx'
import SEOHead from '../components/SEOHead.jsx'
import { SITE_URL } from '../config/site.js'
import { useTranslation } from '../i18n/useTranslation.js'

export default function BlogCategory() {
  const { category } = useParams()
  const decoded = decodeURIComponent(category || '')
  const { lang, copy } = useTranslation()
  const posts = getPostsByCategory(decoded, lang)
  const categories = getAllCategories(lang)

  const categoryTitle = `${decoded}${copy.blog.categoryTitleSuffix}`
  const metaDesc = copy.blog.categoryMetaDescription.replace(
    '{{cat}}',
    decoded,
  )
  const categoryCountLabel =
    posts.length === 1
      ? copy.blog.categoryLineOne
      : copy.blog.categoryLineMany.replace('{{n}}', String(posts.length))

  return (
    <>
      <SEOHead
        title={categoryTitle}
        description={metaDesc}
        canonical={`${SITE_URL}/blog/categorie/${encodeURIComponent(decoded)}`}
        ogImage="/hero-ai.png"
        locale={lang === 'en' ? 'en_US' : 'fr_FR'}
      />

      <section className="mx-auto max-w-7xl px-6 pb-8 pt-32">
        <p className="mb-4 font-mono text-sm text-cyan">
          <Link to="/blog" className="hover:underline">
            {copy.blog.breadcrumbBlog}
          </Link>{' '}
          / {decoded}
        </p>
        <h1 className="font-display text-5xl text-white md:text-6xl">{decoded}</h1>
        <p className="mt-4 max-w-2xl font-body text-muted">{categoryCountLabel}</p>
      </section>

      <CategoryFilter categories={categories} />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-32 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </section>

      {posts.length === 0 && (
        <p className="mx-auto max-w-7xl px-6 pb-32 text-center text-muted">
          {copy.blog.categoryEmpty}{' '}
          <Link to="/blog" className="text-cyan hover:underline">
            {copy.blog.categoryBack}
          </Link>
        </p>
      )}
    </>
  )
}
