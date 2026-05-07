import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/HeroSection.jsx'
import StatsSection from '../components/StatsSection.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import ProcessSection from '../components/ProcessSection.jsx'
import CaseStudiesSection from '../components/CaseStudiesSection.jsx'
import FormationsSection from '../components/FormationsSection.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import CTASection from '../components/CTASection.jsx'
import { useTranslation } from '../i18n/useTranslation.js'
import { SITE_URL } from '../config/site.js'

export default function LandingPage() {
  const { lang, copy } = useTranslation()
  const home = copy.home

  return (
    <main>
      <Helmet>
        <title>{home.title}</title>
        <meta name="description" content={home.description} />
        <meta property="og:title" content={home.ogTitle} />
        <meta property="og:description" content={home.ogDescription} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection key={lang} />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <FormationsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
