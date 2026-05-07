import {
  getAllPosts,
  getFeaturedPosts,
  getAllCategories,
} from '../blog/useBlogPosts.js'
import BlogCard from '../components/BlogCard.jsx'
import FeaturedCard from '../components/FeaturedCard.jsx'
import CategoryFilter from '../components/CategoryFilter.jsx'
import SEOHead from '../components/SEOHead.jsx'
import { SITE_URL } from '../config/site.js'
import { useTranslation } from '../i18n/useTranslation.js'

export default function BlogIndex() {
  const { lang, copy } = useTranslation()
  const posts = getAllPosts(lang)
  const featuredList = getFeaturedPosts(lang)
  const featured = featuredList[0]
  const rest = featured
    ? posts.filter((p) => p.slug !== featured.slug)
    : posts
  const categories = getAllCategories(lang)

  return (
    <main className="relative z-0 min-h-svh" key={lang}>
      <SEOHead
        title={copy.blog.indexMetaTitle}
        description={copy.blog.indexMetaDescription}
        canonical={`${SITE_URL}/blog`}
        ogImage="/hero-ai.png"
        locale={lang === 'en' ? 'en_US' : 'fr_FR'}
      />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-32">
        <p className="mb-4 font-mono text-sm text-accent">{copy.blog.kicker}</p>
        <h1 className="mb-6 font-display text-6xl text-fg md:text-7xl">
          {copy.blog.indexTitle}
        </h1>
        <p className="font-body text-xl text-muted max-w-2xl">
          {copy.blog.indexLead}
        </p>
      </section>

      {featured && <FeaturedCard post={featured} />}

      <CategoryFilter categories={categories} />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-32 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <div key={post.slug}>
            <BlogCard post={post} />
          </div>
        ))}
      </section>
    </main>
  )
}
