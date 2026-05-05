import { useCallback, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { serviceAssets } from '../data/assets.js'
import { useTranslation } from '../i18n/useTranslation.js'

function ServiceIcon({ name }) {
  const common = 'h-6 w-6 text-cyan'
  switch (name) {
    case 'bolt':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" strokeLinejoin="round" />
        </svg>
      )
    case 'link':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M10 13a5 5 0 010-7l1-1a5 5 0 017 7l-1 1M14 11a5 5 0 010 7l-1 1a5 5 0 01-7-7l1-1" strokeLinecap="round" />
        </svg>
      )
    case 'brain':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 5c-1.5-2-4-2-5 0-1 2 0 4 2 5M12 5c1.5-2 4-2 5 0 1 2 0 4-2 5M12 5v14M9 19c-3 0-5-2-4-5M15 19c3 0 5-2 4-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'chart':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M4 19h16M7 15v4M12 11v8M17 7v12" strokeLinecap="round" />
        </svg>
      )
    case 'shield':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z" strokeLinejoin="round" />
        </svg>
      )
    case 'rocket':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 3s4 4 4 9a4 4 0 11-8 0c0-5 4-9 4-9zM12 14v3M9 21h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}

function ServiceCard({ service, index }) {
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const reduced = useReducedMotion()

  const onMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPos({ x, y })
  }, [])

  return (
    <motion.article
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.55, delay: reduced ? 0 : index * 0.08 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 md:p-8"
      style={{
        '--mouse-x': `${pos.x}%`,
        '--mouse-y': `${pos.y}%`,
      }}
      onMouseMove={onMove}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0,255,209,0.08), transparent 40%), radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(155,92,255,0.12), transparent 45%)',
        }}
      />
      <span className="font-mono text-5xl text-violet/30">{service.id}</span>
      <div className="relative mt-4 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <ServiceIcon name={service.icon} />
          <h3 className="font-display text-2xl tracking-wide text-white md:text-3xl">
            {service.title}
          </h3>
        </div>
        <p className="font-body text-sm leading-relaxed text-muted md:text-base">
          {service.description}
        </p>
      </div>
    </motion.article>
  )
}

export default function ServicesSection() {
  const { copy } = useTranslation()

  const services = useMemo(() => {
    return serviceAssets.map((a, i) => ({
      ...a,
      ...copy.services.items[i],
    }))
  }, [copy.services.items])

  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-bg px-4 py-24 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {copy.services.kicker}
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-5xl text-white md:text-6xl">
          {copy.services.heading}
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
