import { useEffect, useMemo, useRef, useState } from 'react'
import { processAssets } from '../data/assets.js'
import { useTranslation } from '../i18n/useTranslation.js'

function normalizeLoop(rail) {
  const half = rail.scrollWidth / 2
  if (half <= 0) return
  let x = rail.scrollLeft
  while (x >= half - 0.5) x -= half
  while (x < 0) x += half
  rail.scrollLeft = x
}

export default function ProcessSection() {
  const { copy } = useTranslation()
  const railRef = useRef(null)
  const draggingRef = useRef(false)
  const inertiaRef = useRef(0)
  const prefersReducedRef = useRef(false)
  const pointerStartXRef = useRef(0)
  const scrollStartRef = useRef(0)
  const lastSampleRef = useRef({ t: 0, x: 0 })
  const velocityRef = useRef(0)
  const lastTsRef = useRef(0)
  const [grabbing, setGrabbing] = useState(false)

  const steps = useMemo(() => {
    return processAssets.map((p, i) => ({
      ...p,
      ...copy.process.steps[i],
    }))
  }, [copy.process.steps])

  const loop = useMemo(() => [...steps, ...steps], [steps])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return undefined

    const track = rail.querySelector('.process-marquee-track')
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const readAutoSpeedPxPerSec = () => {
      const raw = getComputedStyle(rail).getPropertyValue('--process-auto-px-per-sec')
      const v = Number.parseFloat(String(raw).trim())
      return Number.isFinite(v) && v > 0 ? v : 18
    }

    const syncReduced = () => {
      prefersReducedRef.current = mq.matches
      inertiaRef.current = 0
      draggingRef.current = false
      setGrabbing(false)
    }

    const seedScroll = () => {
      const half = rail.scrollWidth / 2
      if (half > 0) rail.scrollLeft = half * 0.25
      normalizeLoop(rail)
    }

    syncReduced()
    seedScroll()

    let rafId = 0
    const tick = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts
      const dt = Math.min(40, ts - lastTsRef.current)
      lastTsRef.current = ts

      if (!prefersReducedRef.current && !draggingRef.current) {
        if (Math.abs(inertiaRef.current) > 0.12) {
          rail.scrollLeft += inertiaRef.current * dt
          inertiaRef.current *= Math.pow(0.91, dt / 16)
        } else {
          inertiaRef.current = 0
          const pxPerSec = readAutoSpeedPxPerSec()
          rail.scrollLeft += (pxPerSec * dt) / 1000
        }
        normalizeLoop(rail)
      }

      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const onPointerDown = (e) => {
      if (prefersReducedRef.current) return
      if (e.pointerType === 'mouse' && e.button !== 0) return
      draggingRef.current = true
      inertiaRef.current = 0
      pointerStartXRef.current = e.clientX
      scrollStartRef.current = rail.scrollLeft
      lastSampleRef.current = { t: performance.now(), x: e.clientX }
      velocityRef.current = 0
      setGrabbing(true)
      rail.setPointerCapture(e.pointerId)
    }

    const onPointerMove = (e) => {
      if (prefersReducedRef.current || !draggingRef.current) return
      if (e.cancelable) e.preventDefault()
      const dx = e.clientX - pointerStartXRef.current
      rail.scrollLeft = scrollStartRef.current - dx
      normalizeLoop(rail)

      const now = performance.now()
      const prev = lastSampleRef.current
      const dt = now - prev.t
      if (dt > 0) {
        velocityRef.current = -(e.clientX - prev.x) / dt
      }
      lastSampleRef.current = { t: now, x: e.clientX }
    }

    const endPointer = (e) => {
      if (!draggingRef.current) return
      draggingRef.current = false
      setGrabbing(false)
      try {
        rail.releasePointerCapture(e.pointerId)
      } catch {
        /* ignore */
      }
      if (!prefersReducedRef.current) {
        inertiaRef.current = Math.max(-2.6, Math.min(2.6, velocityRef.current))
      }
    }

    const onPointerUp = (e) => {
      endPointer(e)
    }

    const onPointerCancel = (e) => {
      if (draggingRef.current) {
        inertiaRef.current = 0
        endPointer(e)
      }
    }

    const onPointerLeave = (e) => {
      if (draggingRef.current && e.buttons === 0) {
        endPointer(e)
      }
    }

    const onScrollPassive = () => {
      normalizeLoop(rail)
    }

    const onReducedPreferenceChange = () => {
      syncReduced()
      seedScroll()
    }
    mq.addEventListener('change', onReducedPreferenceChange)

    rail.addEventListener('pointerdown', onPointerDown)
    rail.addEventListener('pointermove', onPointerMove, { passive: false })
    rail.addEventListener('pointerup', onPointerUp)
    rail.addEventListener('pointercancel', onPointerCancel)
    rail.addEventListener('pointerleave', onPointerLeave)
    rail.addEventListener('scroll', onScrollPassive, { passive: true })

    const ro = new ResizeObserver(() => {
      normalizeLoop(rail)
    })
    ro.observe(track || rail)

    return () => {
      mq.removeEventListener('change', onReducedPreferenceChange)
      cancelAnimationFrame(rafId)
      rail.removeEventListener('pointerdown', onPointerDown)
      rail.removeEventListener('pointermove', onPointerMove)
      rail.removeEventListener('pointerup', onPointerUp)
      rail.removeEventListener('pointercancel', onPointerCancel)
      rail.removeEventListener('pointerleave', onPointerLeave)
      rail.removeEventListener('scroll', onScrollPassive)
      ro.disconnect()
    }
  }, [])

  return (
    <section
      id="process"
      className="relative scroll-mt-24 bg-bg px-4 py-28 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(200px,280px)_1fr] lg:items-start lg:gap-14 xl:gap-16">
        <header className="max-w-xl lg:sticky lg:top-28 lg:max-w-none lg:self-start">
          <p className="font-mono text-xs tracking-label text-accent">{copy.process.kicker}</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.12] tracking-tight text-fg md:text-5xl">
            {copy.process.heading}
          </h2>
          <p className="mt-6 font-body leading-relaxed text-muted">
            {copy.process.lead}
          </p>
          <p className="mt-6 hidden font-mono text-xs leading-relaxed text-muted lg:block">
            {copy.process.hint}
          </p>
        </header>

        <div className="relative min-w-0">
          <div className="relative process-marquee-wrap pb-4 pt-1">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-bg to-transparent md:w-12"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-bg to-transparent md:w-12"
              aria-hidden
            />
            <div
              ref={railRef}
              className={
                grabbing
                  ? 'process-marquee-rail process-marquee-rail--grab'
                  : 'process-marquee-rail'
              }
              role="list"
              aria-label={copy.process.heading}
            >
              <div className="process-marquee-track">
                {loop.map((step, i) => (
                  <div
                    key={`${step.key}-${i}`}
                    role="listitem"
                    className="process-marquee-item w-[min(calc(100vw-3rem),420px)] shrink-0 sm:w-[400px]"
                  >
                    <StepCard step={step} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step }) {
  return (
    <article className="relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-lux ring-1 ring-inset ring-white/[0.05] sm:min-h-[480px]">
      <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden bg-bg sm:aspect-[5/3]">
        <img
          src={step.image}
          alt={step.imageAlt}
          width={960}
          height={600}
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative flex flex-1 flex-col justify-end gap-2 px-6 pb-8 pt-6">
        <span
          className="pointer-events-none absolute bottom-20 right-3 font-display text-[clamp(4.5rem,20vw,9rem)] leading-none text-accent/10 sm:right-5"
          aria-hidden
        >
          {step.number}
        </span>
        <span className="relative z-[1] font-display text-4xl text-accent">{step.letter}</span>
        <h3 className="relative z-[1] font-display text-2xl text-fg">{step.name}</h3>
        <p className="relative z-[1] font-body text-sm leading-relaxed text-muted">
          {step.description}
        </p>
      </div>
    </article>
  )
}
