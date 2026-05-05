/** Chemins fichiers & métriques — textes dans src/i18n/dictionary.js */

export const serviceAssets = [
  { id: '01', icon: 'bolt' },
  { id: '02', icon: 'link' },
  { id: '03', icon: 'brain' },
  { id: '04', icon: 'chart' },
  { id: '05', icon: 'shield' },
  { id: '06', icon: 'rocket' },
]

export const processAssets = [
  { key: 'audit', image: '/process-audit.png' },
  { key: 'design', image: '/process-design.png' },
  { key: 'build', image: '/process-build.png' },
  { key: 'scale', image: '/process-scale.png' },
]

export const caseAssets = [
  {
    key: 'industry',
    metricValue: 340,
    metricSuffix: '%',
    gradient: 'from-cyan/30 via-violet/40 to-bg',
    image: '/case-industry.png',
    metricSign: 'positive',
  },
  {
    key: 'finance',
    metricValue: 78,
    metricSuffix: '%',
    gradient: 'from-violet/35 via-cyan/25 to-bg',
    image: '/case-finance.png',
    metricSign: 'negative',
  },
]

export const testimonialAssets = [
  { initials: 'PG', author: 'Patrick G.' },
  { initials: 'IM', author: 'Isabelle M.' },
  { initials: 'SL', author: 'Sarah L.' },
  { initials: 'JM', author: 'Julien M.' },
]
