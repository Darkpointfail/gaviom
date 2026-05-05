import { getBookingLinkProps } from '../config/calendly.js'
import { useTranslation } from '../i18n/useTranslation.js'

export default function BlogCTA() {
  const booking = getBookingLinkProps()
  const { copy } = useTranslation()

  return (
    <div className="relative my-12 overflow-hidden rounded-2xl border border-violet/40 bg-surface p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(155,92,255,0.12),transparent_65%)]" />
      <div className="relative z-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-violet">
          {copy.blog.ctaKicker}
        </p>
        <h3 className="mb-3 font-display text-3xl text-white md:text-4xl">
          {copy.blog.ctaTitle}
        </h3>
        <p className="mb-6 font-body text-muted">{copy.blog.ctaLead}</p>
        <a
          {...booking}
          className="inline-flex items-center gap-2 rounded-lg border border-cyan bg-transparent px-6 py-3 font-mono text-sm text-cyan transition-all duration-300 hover:bg-cyan hover:text-bg"
        >
          {copy.blog.ctaButton}
        </a>
      </div>
    </div>
  )
}
