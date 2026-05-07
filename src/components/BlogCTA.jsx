import { getBookingLinkProps } from '../config/calendly.js'
import { useTranslation } from '../i18n/useTranslation.js'

export default function BlogCTA() {
  const booking = getBookingLinkProps()
  const { copy } = useTranslation()

  return (
    <div className="relative my-12 overflow-hidden rounded-2xl border border-accent/30 bg-accent-soft p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,140,255,0.14),transparent_65%)]" />
      <div className="relative z-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
          {copy.blog.ctaKicker}
        </p>
        <h3 className="mb-3 font-display text-3xl text-fg md:text-4xl">
          {copy.blog.ctaTitle}
        </h3>
        <p className="mb-6 font-body text-muted">{copy.blog.ctaLead}</p>
        <a
          {...booking}
          className="inline-flex items-center gap-2 rounded-lg border border-accent bg-white px-6 py-3 font-mono text-sm text-accent transition-all duration-300 hover:bg-accent hover:text-white"
        >
          {copy.blog.ctaButton}
        </a>
      </div>
    </div>
  )
}
