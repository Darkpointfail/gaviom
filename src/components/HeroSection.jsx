import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from '../i18n/useTranslation.js'
import { getBookingLinkProps } from '../config/calendly.js'

const fadeEase = [0.22, 1, 0.36, 1]

function HeroStatGrid({ cards, ariaLabel, reduced }) {
  if (!cards?.length) return null

  return (
    <div
      className="grid w-full max-w-md grid-cols-2 gap-3 lg:justify-self-end"
      aria-label={ariaLabel}
      role="group"
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduced ? 0 : 0.4,
            ease: fadeEase,
            delay: reduced ? 0 : index * 0.08,
          }}
          className="flex flex-col gap-2 rounded-xl border border-white/10 bg-transparent p-4 sm:p-5"
        >
          <span className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-none tracking-tight text-white">
            {card.value}
          </span>
          <span className="text-xs leading-snug text-white/40">{card.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default function HeroSection() {
  const bookingLink = getBookingLinkProps()
  const { copy } = useTranslation()
  const reduced = useReducedMotion()
  const statCards = copy.hero.statCards ?? []
  const statGridAria = copy.hero.statGridAria ?? ''

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : 0.08,
        delayChildren: reduced ? 0 : 0.04,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.45, ease: fadeEase },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-bg px-4 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-10%,rgba(91,140,255,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(91,140,255,0.06),transparent_60%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 grid max-w-5xl grid-cols-1 gap-y-8 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_minmax(260px,400px)] lg:gap-x-14 lg:gap-y-10 lg:items-start xl:max-w-none"
        >
          <motion.span
            variants={item}
            className="inline-flex font-mono text-xs text-accent lg:col-span-2"
          >
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 tracking-label shadow-lux-sm backdrop-blur-sm">
              {copy.hero.eyebrow}
            </span>
          </motion.span>

          <motion.h1
            variants={item}
            className="min-w-0 font-display text-[clamp(2.25rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.02em] text-fg md:text-8xl lg:col-start-1 lg:max-w-[min(100%,42rem)] xl:max-w-[min(100%,46rem)]"
          >
            {copy.hero.titleLine1}
            {copy.hero.titleLine2 ? (
              <>
                <br />
                <span
                  className={
                    copy.hero.titleEmphasis ? undefined : 'text-accent not-italic'
                  }
                >
                  {copy.hero.titleLine2}
                </span>
              </>
            ) : null}
            {copy.hero.titleEmphasis ? (
              <>
                <br />
                <em className="text-accent not-italic">{copy.hero.titleEmphasis}</em>
              </>
            ) : null}
          </motion.h1>

          <motion.div
            variants={item}
            className="lg:col-start-2 lg:row-start-2 lg:justify-self-end lg:self-start"
          >
            <HeroStatGrid
              cards={statCards}
              ariaLabel={statGridAria}
              reduced={reduced}
            />
          </motion.div>

          <motion.p
            variants={item}
            className="max-w-xl font-body text-lg font-light leading-[1.65] text-muted lg:col-start-1 xl:max-w-2xl"
          >
            {copy.hero.subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:col-start-1"
          >
            <motion.a
              {...bookingLink}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-3.5 font-body font-medium text-white shadow-lux-sm transition-all duration-300 hover:bg-[#4a7aef] hover:shadow-lux"
              whileHover={reduced ? undefined : { y: -1 }}
            >
              {copy.hero.ctaPrimary}
            </motion.a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.02] px-7 py-3.5 font-body text-fg/90 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-fg"
            >
              {copy.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.p variants={item} className="font-mono text-xs text-muted lg:col-start-1">
            {copy.hero.reassurance}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
