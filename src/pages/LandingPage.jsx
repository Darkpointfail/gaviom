import HeroSection from '../components/HeroSection.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import ProcessSection from '../components/ProcessSection.jsx'
import CaseStudiesSection from '../components/CaseStudiesSection.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import CTASection from '../components/CTASection.jsx'
import { useTranslation } from '../i18n/useTranslation.js'

export default function LandingPage() {
  const { lang } = useTranslation()

  return (
    <main>
      <HeroSection key={lang} />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
