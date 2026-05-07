import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from '../i18n/useTranslation.js'
import { getBookingLinkProps } from '../config/calendly.js'

const fadeEase = [0.22, 1, 0.36, 1]

export default function CTASection() {
  const reduced = useReducedMotion()
  const { copy } = useTranslation()
  const bookingLink = getBookingLinkProps()

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.45, ease: fadeEase },
    viewport: { once: true, margin: '-50px' },
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-elevated px-4 py-32 md:px-8 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,140,255,0.22)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.04]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-5xl text-center">
        <motion.h2
          {...fadeUp}
          className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] text-white"
        >
          {copy.cta.titleLine1}
          <br />
          {copy.cta.titleLine2}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: reduced ? 0 : 0.45, ease: fadeEase, delay: 0.06 }}
          className="mx-auto mt-6 max-w-lg font-body text-xl leading-relaxed text-white/70"
        >
          {copy.cta.subLead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: reduced ? 0 : 0.45, ease: fadeEase, delay: 0.12 }}
          className="mt-12"
        >
          <motion.a
            {...bookingLink}
            className="inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 font-body text-base font-semibold shadow-lux-sm transition hover:bg-zinc-100 hover:shadow-lux"
            style={{ color: '#09090b' }}
            whileHover={reduced ? undefined : { y: -2 }}
          >
            {copy.cta.button}
          </motion.a>
        </motion.div>

        <p className="mt-8 whitespace-pre-wrap font-mono text-sm text-white/55">
          {copy.cta.reassurance}
        </p>
      </div>
    </section>
  )
}
