import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from '../i18n/useTranslation.js'

const fadeEase = [0.22, 1, 0.36, 1]

export default function ServicesSection() {
  const { copy } = useTranslation()
  const reduced = useReducedMotion()
  const { services: s } = copy

  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-bg px-4 py-28 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs tracking-label text-accent">{s.kicker}</p>
        <h2 className="mt-5 font-display text-4xl leading-[1.12] tracking-tight text-fg md:text-5xl">
          {s.heading}
          <br />
          {s.headingLine2}
        </h2>
        <p className="mt-6 max-w-3xl font-body text-lg font-light leading-relaxed text-muted">
          {s.intro}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {s.audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.45,
                ease: fadeEase,
                delay: reduced ? 0 : i * 0.06,
              }}
              viewport={{ once: true, margin: '-40px' }}
              className="rounded-xl border border-border bg-surface/80 p-5 shadow-lux-sm ring-1 ring-inset ring-white/[0.04]"
            >
              <p className="font-display text-lg text-fg">{a.title}</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div
          className={`mt-16 grid gap-8 ${s.cards.length === 2 ? 'mx-auto max-w-5xl lg:grid-cols-2' : 'lg:grid-cols-3'}`}
        >
          {s.cards.map((card, index) => (
            <motion.article
              key={card.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.45,
                ease: fadeEase,
                delay: reduced ? 0 : index * 0.08,
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={reduced ? undefined : { y: -3, transition: { duration: 0.2 } }}
              className={`flex flex-col rounded-2xl border bg-surface p-8 shadow-lux ring-1 ring-inset ring-white/[0.05] ${
                card.highlighted
                  ? 'border-accent/40 bg-accent-soft'
                  : 'border-border'
              }`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] font-medium uppercase tracking-label text-muted">
                  {card.step}
                </span>
                {card.badge ? (
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${
                      card.badge === 'Gratuit' || card.badge === 'Free'
                        ? 'bg-emerald-500/15 text-emerald-400'
                        : 'bg-accent/20 text-accent'
                    }`}
                  >
                    {card.badge}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 font-display text-xl leading-snug text-fg md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-muted md:text-base">
                {card.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-bg/50 px-2 py-1 font-mono text-[10px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                {card.includes.map((line) => (
                  <li key={line} className="flex gap-2 font-body text-sm text-fg">
                    <span className="text-accent" aria-hidden>
                      ·
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              {card.footnote ? (
                <p className="mt-5 font-body text-sm italic leading-relaxed text-muted">
                  {card.footnote}
                </p>
              ) : null}
              {card.reassurance ? (
                <p className="mt-3 font-mono text-xs text-accent">{card.reassurance}</p>
              ) : null}
              {card.priceFrom ? (
                <p className="mt-5 border-t border-border pt-5 font-display text-lg text-fg">
                  {card.priceFrom}
                </p>
              ) : null}
              {card.priceNote ? (
                <p className="mt-2 font-body text-xs leading-relaxed text-muted">{card.priceNote}</p>
              ) : null}
            </motion.article>
          ))}
        </div>

        {s.formationTeaser ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.45, ease: fadeEase }}
            viewport={{ once: true, margin: '-40px' }}
            className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-surface/60 p-8 text-center shadow-lux-sm ring-1 ring-inset ring-white/[0.04]"
          >
            <p className="font-mono text-[10px] font-medium uppercase tracking-label text-accent">
              {s.formationTeaser.kicker}
            </p>
            <h3 className="mt-3 font-display text-xl text-fg md:text-2xl">{s.formationTeaser.title}</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted md:text-base">
              {s.formationTeaser.body}
            </p>
            <a
              href={s.formationTeaser.href}
              className="mt-6 inline-flex font-mono text-sm text-accent hover:underline"
            >
              {s.formationTeaser.cta}
            </a>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
