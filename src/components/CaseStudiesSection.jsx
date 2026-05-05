import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { caseAssets } from '../data/assets.js'
import { useAnimatedMetric } from '../hooks/useAnimatedMetric'
import { useTranslation } from '../i18n/useTranslation.js'

function MetricStudy({ study, align }) {
  const { ref, value } = useAnimatedMetric(study.metricValue)

  const prefix = study.metricSign === 'negative' ? '−' : '+'

  return (
    <article ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-12%' }}
        transition={{ duration: 0.6 }}
        className={`flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-surface md:min-h-[380px] md:flex ${
          align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        <div
          className={`relative min-h-[220px] flex-1 bg-gradient-to-br ${study.gradient}`}
        >
          <img
            src={study.image}
            alt={study.imageAlt}
            width={960}
            height={640}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-bg/50 via-transparent to-bg/70 mix-blend-multiply"
            aria-hidden
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-40 mix-blend-soft-light`}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'b\'%3E%3CfeGaussianBlur stdDeviation=\'40\'/%3E%3C/filter%3E%3Ccircle cx=\'120\' cy=\'100\' r=\'90\' fill=\'%2300FFD1\' filter=\'url(%23b)\' opacity=\'0.2\'/%3E%3Ccircle cx=\'300\' cy=\'260\' r=\'110\' fill=\'%239B5CFF\' filter=\'url(%23b)\' opacity=\'0.22\'/%3E%3C/svg%3E')] bg-cover bg-center opacity-60 mix-blend-screen"
            aria-hidden
          />
        </div>

        <div className="relative flex flex-1 flex-col justify-center gap-6 p-8 md:p-12">
          <span className="inline-flex w-fit rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted">
            {study.industry}
          </span>
          <div>
            <p className="font-display text-5xl leading-none text-cyan md:text-7xl">
              {prefix}
              {value}
              {study.metricSuffix}
            </p>
            <p className="mt-2 font-mono text-sm text-muted">{study.metricLine}</p>
          </div>
          <div>
            <h3 className="font-display text-3xl text-white">{study.clientName}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted md:text-base">
              {study.description}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan hover:underline"
          >
            {study.viewCaseLabel}
          </a>
        </div>
      </motion.div>
    </article>
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
      className="scroll-mt-24 bg-bg px-4 py-24 md:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
            {copy.casesSection.kicker}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl text-white md:text-6xl">
            {copy.casesSection.heading}
          </h2>
        </div>

        {caseStudies.map((study, i) => (
          <MetricStudy
            key={study.key}
            study={study}
            align={i % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  )
}
