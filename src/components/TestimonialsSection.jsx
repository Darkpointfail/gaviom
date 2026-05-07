import { useMemo } from 'react'
import { testimonialAssets } from '../data/assets.js'
import { useTranslation } from '../i18n/useTranslation.js'

export default function TestimonialsSection() {
  const { copy } = useTranslation()

  const items = useMemo(() => {
    return testimonialAssets.map((a, i) => ({
      ...a,
      ...copy.testimonials[i],
    }))
  }, [copy.testimonials])

  const loop = [...items, ...items]

  return (
    <section className="relative border-y border-white/[0.06] bg-bg py-28 md:py-32">
      <div className="mx-auto mb-14 max-w-7xl px-4 md:px-8">
        <p className="font-mono text-xs tracking-label text-accent">
          {copy.testimonialsSection.kicker}
        </p>
        <h2 className="mt-5 font-display text-4xl leading-[1.12] tracking-tight text-fg md:text-5xl">
          {copy.testimonialsSection.heading}
          <br />
          {copy.testimonialsSection.headingLine2}
        </h2>
      </div>

      <div className="group relative overflow-hidden">
        <div
          className="flex w-max gap-6 px-4 pb-2 pt-1 md:px-8 animate-scroll-x group-hover:[animation-play-state:paused]"
          style={{ willChange: 'transform' }}
        >
          {loop.map((t, i) => (
            <figure
              key={`${t.author}-${i}`}
              className="w-[min(92vw,380px)] shrink-0 rounded-xl border border-border bg-surface p-7 shadow-lux ring-1 ring-inset ring-white/[0.05]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft font-mono text-sm font-medium text-accent"
                  aria-hidden
                >
                  {t.initials}
                </div>
                <figcaption className="font-body text-sm text-fg">
                  <span className="block font-medium">{t.author}</span>
                  <span className="text-muted">{t.role}</span>
                </figcaption>
              </div>
              <blockquote className="mt-5 font-body text-base leading-relaxed text-fg/90">
                “{t.quote}”
              </blockquote>
              <p
                className="mt-4 font-mono text-xs tracking-wider text-accent"
                aria-label={copy.testimonialsSection.ratingAria}
              >
                ★★★★★
              </p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
