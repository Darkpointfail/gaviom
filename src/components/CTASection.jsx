import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from '../i18n/useTranslation.js'
import { getBookingLinkProps } from '../config/calendly.js'

export default function CTASection() {
  const reduced = useReducedMotion()
  const { copy } = useTranslation()
  const bookingLink = getBookingLinkProps()

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-bg px-4 py-28 md:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,92,255,0.35)_0%,transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="font-display text-[clamp(3rem,10vw,7rem)] leading-[0.95] text-white"
        >
          {copy.cta.titleLine1}
          <br />
          {copy.cta.titleLine2}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-8 max-w-xl font-body text-lg text-muted"
        >
          {copy.cta.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-12"
        >
          <motion.a
            {...bookingLink}
            className="inline-flex items-center justify-center rounded border-2 border-cyan px-10 py-5 font-mono text-base text-cyan transition-[box-shadow,transform] duration-300 hover:shadow-[0_0_40px_#00FFD1]"
            whileHover={reduced ? undefined : { scale: 1.04 }}
            style={{ willChange: 'transform' }}
          >
            {copy.cta.button}
          </motion.a>
        </motion.div>

        <p className="mt-8 whitespace-pre-wrap font-mono text-sm text-muted">
          {copy.cta.reassurance}
        </p>
      </div>
    </section>
  )
}
