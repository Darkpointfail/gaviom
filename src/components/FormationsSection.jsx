import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from '../i18n/useTranslation.js'

const fadeEase = [0.22, 1, 0.36, 1]

export default function FormationsSection() {
  const { copy } = useTranslation()
  const reduced = useReducedMotion()
  const f = copy.formationsSection

  return (
    <section
      id="formations"
      className="scroll-mt-24 border-y border-white/[0.06] bg-surface px-4 py-28 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs tracking-label text-accent">{f.kicker}</p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight text-fg md:text-5xl">
          {f.heading}
          <br />
          {f.headingLine2}
        </h2>
        <p className="mt-6 max-w-xl font-body leading-relaxed text-muted">{f.lead}</p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {f.trainings.map((t, index) => (
            <motion.article
              key={t.format}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.45,
                ease: fadeEase,
                delay: reduced ? 0 : index * 0.08,
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={reduced ? undefined : { y: -3, transition: { duration: 0.2 } }}
              className={`flex flex-col rounded-2xl border p-8 shadow-lux ring-1 ring-inset ring-white/[0.05] ${
                t.highlighted
                  ? 'border-accent/40 bg-accent-soft'
                  : 'border-border bg-bg'
              }`}
            >
              <p className="font-mono text-[10px] font-medium uppercase tracking-label text-accent">
                {t.tag}
              </p>
              <h3 className="mt-3 font-display text-2xl text-fg">{t.format}</h3>
              <p className="mt-2 font-mono text-xs text-muted">{t.duration}</p>
              <p className="mt-1 font-body text-sm text-muted">{t.audience}</p>
              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-muted">
                {t.description}
              </p>
              <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                {t.outcomes.map((o) => (
                  <li key={o} className="flex gap-2 font-body text-sm text-fg">
                    <span className="text-accent" aria-hidden>
                      ·
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
              {t.priceFrom ? (
                <p className="mt-5 font-display text-base text-fg">{t.priceFrom}</p>
              ) : null}
              {t.priceNote ? (
                <p className="mt-2 font-body text-xs text-muted">{t.priceNote}</p>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
