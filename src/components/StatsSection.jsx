import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from '../i18n/useTranslation.js'

const fadeEase = [0.22, 1, 0.36, 1]

export default function StatsSection() {
  const { copy } = useTranslation()
  const reduced = useReducedMotion()

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.45, ease: fadeEase },
    viewport: { once: true, margin: '-50px' },
  }

  return (
    <section className="border-y border-white/[0.05] bg-surface px-4 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          {...fadeUp}
          className="mx-auto max-w-2xl text-center font-display text-3xl leading-tight text-fg md:text-4xl"
        >
          {copy.stats.heading}
        </motion.h2>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {copy.stats.items.map((item, i) => (
            <motion.div
              key={`${item.audience ?? ''}-${item.value}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.45,
                ease: fadeEase,
                delay: reduced ? 0 : i * 0.08,
              }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col items-center text-center"
            >
              {item.audience ? (
                <p className="mb-2 max-w-[200px] font-mono text-[10px] font-medium uppercase tracking-label text-accent">
                  {item.audience}
                </p>
              ) : null}
              <p className="font-display text-7xl text-accent md:text-8xl">
                {item.value}
              </p>
              <p className="mt-3 max-w-[220px] font-body text-sm leading-snug text-muted">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.45, ease: fadeEase }}
          viewport={{ once: true, margin: '-50px' }}
          className="mx-auto mt-10 max-w-2xl text-center font-body leading-relaxed text-muted"
        >
          {copy.stats.closing}
        </motion.p>
      </div>
    </section>
  )
}
