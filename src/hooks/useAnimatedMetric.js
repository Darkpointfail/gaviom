import { useEffect, useRef, useState } from 'react'

export function useAnimatedMetric(target, enabled = true, durationMs = 1600) {
  const [value, setValue] = useState(() => {
    if (!enabled) return target
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return target
    }
    return 0
  })
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!enabled) return undefined

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduced) return undefined

    const el = ref.current
    if (!el) return undefined

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()

        const tick = (now) => {
          const t = Math.min(1, (now - start) / durationMs)
          const eased = 1 - (1 - t) ** 3
          setValue(Math.round(target * eased))
          if (t < 1) requestAnimationFrame(tick)
          else setValue(target)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [target, enabled, durationMs])

  return { ref, value }
}
