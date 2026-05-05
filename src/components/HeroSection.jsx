import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../data/content'
import { useTranslation } from '../i18n/useTranslation.js'
import { getBookingLinkProps } from '../config/calendly.js'

const grainStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
}

export default function HeroSection() {
  const bookingLink = getBookingLinkProps()
  const { copy } = useTranslation()
  const [typed, setTyped] = useState('')
  const reduced = useReducedMotion()

  const subtitle = copy.hero.subtitle
  const titleLines = copy.hero.titleLines

  useEffect(() => {
    if (reduced) return undefined
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setTyped(subtitle.slice(0, i))
      if (i >= subtitle.length) window.clearInterval(id)
    }, 42)
    return () => window.clearInterval(id)
  }, [subtitle, reduced])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: reduced ? 0 : 0.12 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-bg px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]"
        style={{ ...grainStyle, backgroundSize: '180px 180px' }}
        aria-hidden
      />

      <div className="absolute left-4 top-28 z-10 md:left-8 md:top-32">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 border border-border bg-surface/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:text-xs"
        >
          <span
            className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"
            aria-hidden
          />
          [ {site.name} {copy.hero.badgeSuffix} ]
        </motion.div>
      </div>

      <div className="relative z-[1] mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl pt-11 max-md:pt-12"
        >
          <div className="font-display leading-[0.9] text-white">
            {titleLines.map((line, li) => (
              <div key={li} className="flex flex-wrap gap-x-4 gap-y-2">
                {line.map((word, wi) => (
                  <motion.span
                    key={`${li}-${wi}-${word}`}
                    variants={item}
                    className="inline-block text-[clamp(2rem,7vw,7.75rem)] tracking-tight md:text-[clamp(2.35rem,8vw,9rem)]"
                    style={{ willChange: 'transform, opacity' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>

          <motion.p
            variants={item}
            className="mt-8 min-h-[1.5em] font-mono text-sm text-muted md:text-base"
          >
            {reduced ? subtitle : typed}
            {!reduced && (
              <span className="ml-1 inline-block h-4 w-px animate-pulse bg-cyan align-middle" />
            )}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              {...bookingLink}
              className="inline-flex items-center justify-center rounded border border-cyan bg-cyan/10 px-8 py-4 font-mono text-sm text-cyan transition hover:bg-cyan/20"
              animate={
                reduced
                  ? undefined
                  : { scale: [1, 1.03, 1] }
              }
              transition={
                reduced
                  ? undefined
                  : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
              }
              style={{ willChange: 'transform' }}
            >
              {copy.hero.ctaExpert}
            </motion.a>
            <a
              href="#realisations"
              className="font-mono text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              {copy.hero.ctaWork}
            </a>
          </motion.div>
        </motion.div>

        <HeroAiVisual reduced={reduced} />
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <motion.div
            className="h-14 w-px origin-top bg-gradient-to-b from-cyan to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: reduced ? 1 : [0, 1, 0] }}
            transition={
              reduced
                ? undefined
                : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        </div>
      </motion.div>
    </section>
  )
}

function HeroAiVisual({ reduced }) {
  const { copy } = useTranslation()
  const idle = !reduced

  return (
    <motion.div
      initial={{ opacity: 0, x: reduced ? 0 : 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
    >
      <motion.div
        className="relative aspect-[4/5] min-h-[280px] w-full overflow-hidden rounded-2xl border border-border/70 md:aspect-[3/4] md:min-h-0 lg:h-[min(72vh,620px)] lg:max-h-[620px]"
        animate={
          idle
            ? {
                y: [0, -12, 0],
                boxShadow: [
                  '0 0 70px -28px rgba(0,255,209,0.35)',
                  '0 0 110px -18px rgba(155,92,255,0.42)',
                  '0 0 70px -28px rgba(0,255,209,0.35)',
                ],
              }
            : undefined
        }
        transition={{
          y: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
          boxShadow: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ willChange: 'transform' }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <motion.div
            className="h-full w-full origin-center"
            animate={
              idle
                ? { scale: [1.06, 1.14, 1.06], rotate: [0, 0.6, 0] }
                : undefined
            }
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform' }}
          >
            <img
              src="/hero-ai.png"
              alt={copy.hero.visualAlt}
              className="h-full w-full object-cover object-center"
              width={900}
              height={1125}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
          aria-hidden
        >
          <motion.div
            className="absolute inset-y-[-20%] left-0 w-[45%] rotate-[18deg] bg-gradient-to-r from-transparent via-cyan/25 to-transparent opacity-70 blur-md"
            animate={idle ? { x: ['-60%', '220%'] } : undefined}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 2.2,
            }}
          />
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-90 md:opacity-100"
          aria-hidden
          animate={idle ? { opacity: [0.82, 0.95, 0.82] } : undefined}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-violet/15"
          aria-hidden
          animate={
            idle ? { opacity: [0.65, 1, 0.65] } : undefined
          }
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]"
          aria-hidden
        />
      </motion.div>
      <motion.p
        className="mt-4 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted lg:block"
        animate={idle ? { opacity: [0.55, 1, 0.55] } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {copy.hero.visualCaption}
      </motion.p>
    </motion.div>
  )
}
