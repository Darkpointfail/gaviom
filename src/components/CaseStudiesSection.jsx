import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { caseAssets } from '../data/assets.js'
import { useTranslation } from '../i18n/useTranslation.js'

const fadeEase = [0.22, 1, 0.36, 1]

function CaseStudyCard({ study, align }) {
  const reduced = useReducedMotion()

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: reduced ? 0 : 0.45, ease: fadeEase }}
      className={`flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-lux ring-1 ring-inset ring-white/[0.05] md:min-h-[320px] md:flex ${
        align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div
        className={`relative min-h-[200px] flex-1 bg-gradient-to-br ${study.gradient}`}
      >
        <img
          src={study.image}
          alt=""
          width={960}
          height={640}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-bg/40 via-transparent to-bg/50"
          aria-hidden
        />
      </div>

      <div className="relative flex flex-1 flex-col justify-center gap-5 p-8 md:p-10">
        <span className="inline-flex w-fit rounded-full border border-border bg-bg px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
          {study.tag}
        </span>
        <div>
          <p className="font-display text-5xl leading-none text-accent md:text-6xl">
            {study.metric}
          </p>
          <p className="mt-2 font-body text-sm text-muted">{study.metricLabel}</p>
        </div>
        <p className="font-body text-sm leading-relaxed text-muted md:text-base">
          {study.description}
        </p>
        <ul className="flex flex-col gap-1.5">
          {study.results.map((r) => (
            <li key={r} className="flex gap-2 font-body text-sm text-fg">
              <span className="text-accent" aria-hidden>
                ✓
              </span>
              {r}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-2 font-mono text-sm text-accent hover:underline"
        >
          {study.viewCaseLabel}
        </a>
      </div>
    </motion.article>
  )
}

export default function CaseStudiesSection() {
  const { copy } = useTranslation()

  const caseStudies = useMemo(() => {
    return caseAssets.map((c, i) => ({
      ...c,
      ...copy.cases[i],
      viewCaseLabel: copy.casesSection.viewCase,
    }))
  }, [copy.cases, copy.casesSection.viewCase])

  return (
    <section
      id="realisations"
      className="scroll-mt-24 bg-bg px-4 py-28 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-14">
        <div>
          <p className="font-mono text-xs tracking-label text-accent">{copy.casesSection.kicker}</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight text-fg md:text-5xl">
            {copy.casesSection.heading}
            <br />
            {copy.casesSection.headingLine2}
          </h2>
          <p className="mt-4 max-w-xl font-body text-muted">{copy.casesSection.lead}</p>
        </div>

        {caseStudies.map((study, i) => (
          <CaseStudyCard
            key={study.key}
            study={study}
            align={i % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  )
}
