/** @typedef {'fr'|'en'} Locale */

export const dictionary = {
  fr: {
    nav: {
      services: 'Services',
      process: 'Process',
      work: 'Réalisations',
      blog: 'Blog',
      contact: 'Contact',
      cta: 'Réserver un appel',
      ariaNav: 'Navigation principale',
    },
    lang: { fr: 'FR', en: 'EN', aria: 'Choisir la langue' },
    hero: {
      badgeSuffix: 'AI STUDIO',
      titleLines: [
        ['Automatisez', 'vos', 'opérations.'],
        ['Scalez', 'votre', 'business.'],
      ],
      subtitle: 'Agents IA · Automatisation · Intégrations métier',
      ctaExpert: 'Parler à un expert →',
      ctaWork: 'Voir nos réalisations ↓',
      visualCaption: '// Agents · pipelines · production',
      visualAlt:
        'Visualisation abstraite : réseau d’agents IA, flux de données et orchestration de workflows métiers.',
    },
    services: {
      kicker: '// Capacités',
      heading: 'Des briques IA pensées pour la production.',
      items: [
        {
          title: 'Agents IA sur-mesure',
          description:
            'Automatisez vos processus métier avec des agents qui travaillent 24h/24.',
        },
        {
          title: 'Intégrations & API',
          description:
            'Connectez vos outils existants à des workflows intelligents.',
        },
        {
          title: 'Fine-tuning & RAG',
          description:
            'Des modèles entraînés sur votre data, pour vos cas d’usage.',
        },
        {
          title: 'Dashboards analytiques',
          description: 'Visualisez vos données IA en temps réel.',
        },
        {
          title: 'AI Ops & sécurité',
          description:
            'Déployez en production avec gouvernance et monitoring.',
        },
        {
          title: 'Stratégie IA',
          description:
            'Audit, roadmap et accompagnement de votre transformation.',
        },
      ],
    },
    process: {
      kicker: '// Méthode',
      heading: 'Un processus calibré pour scaler vite.',
      hint:
        'Les étapes défilent en boucle · survol ou focus pour mettre en pause (ou réduire les animations dans les réglages du système).',
      steps: [
        {
          title: 'AUDIT',
          description:
            'On cartographie vos processus et identifions les opportunités IA.',
          imageAlt:
            'Cartographie de processus et identification des leviers IA — phase audit.',
        },
        {
          title: 'DESIGN',
          description:
            'Architecture de la solution, choix des modèles, UX des agents.',
          imageAlt:
            'Architecture logicielle et conception UX des agents — phase design.',
        },
        {
          title: 'BUILD',
          description:
            'Développement agile en sprints de 2 semaines, itérations rapides.',
          imageAlt:
            'Construction itérative et intégration des briques IA — phase build.',
        },
        {
          title: 'SCALE',
          description:
            'Déploiement, monitoring, optimisation continue.',
          imageAlt:
            'Montée en charge, supervision et amélioration continue — phase scale.',
        },
      ],
    },
    casesSection: {
      kicker: '// Réalisations',
      heading: 'Impact mesurable, pas du storytelling.',
      viewCase: '→ Découvrir vos solutions personnalisées',
    },
    cases: [
      {
        industry: 'Industrie',
        clientName: 'Nexus Manufacturing',
        description:
          'Orchestration IA des lignes de production et prévision des arrêts.',
        imageAlt:
          'Usine intelligente, lignes de production et flux de données prédictifs — secteur industriel.',
        metricLine: 'de productivité',
      },
      {
        industry: 'Finance',
        clientName: 'Helix Capital',
        description:
          'Agents documentaires et conformité pour un cabinet multi-sites.',
        imageAlt:
          'Marchés, liquidité et conformité documentaire — secteur finance et capital.',
        metricLine: 'sur le temps de traitement',
      },
    ],
    testimonialsSection: {
      kicker: '// Preuve sociale',
      heading: 'Ils parlent de résultats.',
      ratingAria: 'Note 5 sur 5',
    },
    testimonials: [
      {
        quote:
          "L'agent IA qu'ils ont construit a remplacé 3 ETP en 6 semaines.",
        role: 'CEO · Startup',
      },
      {
        quote:
          'Une équipe qui parle business avant de parler technique.',
        role: 'Courtière immobilière indépendante',
      },
      {
        quote:
          'Roadmap claire, livraisons toutes les deux semaines — rare dans l’IA.',
        role: 'CTO · Fintech',
      },
      {
        quote:
          'Sécurité et gouvernance au niveau enterprise, sans sacrifier la vitesse.',
        role: 'CISO · Retail',
      },
    ],
    cta: {
      titleLine1: 'Votre concurrent',
      titleLine2: 'utilise déjà l’IA.',
      sub:
        'Parlons de ce qu’on peut faire ensemble en 30 minutes.',
      button: 'Réserver un appel stratégique →',
      reassurance:
        '✓ Gratuit   ✓ Sans engagement   ✓ Réponse sous 24h',
      mailSubject: 'Appel stratégique GAVIOM',
    },
    blog: {
      indexMetaTitle: 'Blog IA & Automatisation | GAVIOM',
      indexMetaDescription:
        'Stratégies, cas concrets et guides techniques sur l’IA en entreprise. Rédigés par nos experts.',
      kicker: '[ RESSOURCES ]',
      indexTitle: 'L’IA en pratique.',
      indexLead:
        'Guides concrets, retours d’expérience et analyses pour intégrer l’IA dans votre entreprise.',
      featuredLabel: 'À la une',
      readArticle: 'Lire l’article →',
      filterAll: 'Tous',
      cardReading: '{{n}} min',
      featuredReading: '{{n}} min de lecture',
      articleReading: '{{n}} min de lecture',
      relatedTitle: 'Articles liés',
      tocLabel: '[ SOMMAIRE ]',
      tocAria: 'Sommaire de la page',
      notFoundTitle: 'Article introuvable',
      notFoundBody: 'Ce contenu n’existe pas ou a été déplacé.',
      backToBlog: '← Retour au blog',
      allArticles: '← Tous les articles',
      breadcrumbBlog: 'Blog',
      categoryTitleSuffix: ' | Blog GAVIOM',
      categoryMetaDescription:
        'Articles sur {{cat}} — IA, automatisation et mise en production.',
      categoryLineOne: '1 article dans cette catégorie.',
      categoryLineMany: '{{n}} articles dans cette catégorie.',
      categoryEmpty: 'Aucun article dans cette catégorie.',
      categoryBack: 'Retour au blog',
      ctaKicker: '[ VOUS RECONNAISSEZ CE PROBLÈME ? ]',
      ctaTitle: 'On peut l’automatiser pour vous.',
      ctaLead: '30 minutes pour évaluer votre cas. Sans engagement.',
      ctaButton: 'Réserver un appel →',
    },
    footer: {
      todoNote: '// TODO: Adresse / SIRET si besoin',
      navHeading: 'Navigation',
      legalHeading: 'Légalement',
      legalNotice: 'Mentions légales',
      privacy: 'Confidentialité',
      rights: 'Tous droits réservés.',
    },
  },

  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      work: 'Work',
      blog: 'Blog',
      contact: 'Contact',
      cta: 'Book a call',
      ariaNav: 'Main navigation',
    },
    lang: { fr: 'FR', en: 'EN', aria: 'Choose language' },
    hero: {
      badgeSuffix: 'AI STUDIO',
      titleLines: [
        ['Automate', 'your', 'operations.'],
        ['Scale', 'your', 'business.'],
      ],
      subtitle: 'AI agents · Automation · Business integrations',
      ctaExpert: 'Talk to an expert →',
      ctaWork: 'See our work ↓',
      visualCaption: '// Agents · pipelines · production',
      visualAlt:
        'Abstract visualization: AI agent network, data flows, and business workflow orchestration.',
    },
    services: {
      kicker: '// Capabilities',
      heading: 'AI building blocks built for production.',
      items: [
        {
          title: 'Custom AI agents',
          description:
            'Automate core workflows with agents that run around the clock.',
        },
        {
          title: 'Integrations & APIs',
          description:
            'Connect your existing stack to intelligent workflows.',
        },
        {
          title: 'Fine-tuning & RAG',
          description:
            'Models trained on your data for your real-world use cases.',
        },
        {
          title: 'Analytics dashboards',
          description: 'Monitor your AI signals in real time.',
        },
        {
          title: 'AI Ops & security',
          description:
            'Ship to production with governance and observability.',
        },
        {
          title: 'AI strategy',
          description:
            'Assessment, roadmap, and hands-on transformation support.',
        },
      ],
    },
    process: {
      kicker: '// Method',
      heading: 'A process tuned for fast scale.',
      hint:
        'Steps loop continuously · hover or focus to pause (or enable “Reduce motion” in system settings).',
      steps: [
        {
          title: 'AUDIT',
          description:
            'We map your processes and uncover high-impact AI opportunities.',
          imageAlt:
            'Process mapping and AI opportunity discovery — audit phase.',
        },
        {
          title: 'DESIGN',
          description:
            'Solution architecture, model choices, and agent UX.',
          imageAlt:
            'Solution architecture and agent UX design — design phase.',
        },
        {
          title: 'BUILD',
          description:
            'Agile delivery in two-week sprints with rapid iterations.',
          imageAlt:
            'Iterative build and integration of AI components — build phase.',
        },
        {
          title: 'SCALE',
          description:
            'Rollout, monitoring, and continuous optimization.',
          imageAlt:
            'Scaling, observability, and continuous improvement — scale phase.',
        },
      ],
    },
    casesSection: {
      kicker: '// Case studies',
      heading: 'Measured impact, not storytelling.',
      viewCase: '→ Discover your tailored solutions',
    },
    cases: [
      {
        industry: 'Manufacturing',
        clientName: 'Nexus Manufacturing',
        description:
          'AI orchestration for production lines and downtime forecasting.',
        imageAlt:
          'Smart factory, production lines, and predictive data flows — manufacturing.',
        metricLine: 'in productivity',
      },
      {
        industry: 'Finance',
        clientName: 'Helix Capital',
        description:
          'Document agents and compliance for a multi-site firm.',
        imageAlt:
          'Markets, liquidity, and document compliance — finance.',
        metricLine: 'in processing time',
      },
    ],
    testimonialsSection: {
      kicker: '// Social proof',
      heading: 'They talk outcomes.',
      ratingAria: '5 out of 5 stars',
    },
    testimonials: [
      {
        quote:
          'The AI agent they shipped replaced three FTEs in six weeks.',
        role: 'COO · SaaS scale-up',
      },
      {
        quote:
          'A team that speaks business before technology.',
        role: 'CEO · Industrial group',
      },
      {
        quote:
          'Clear roadmap, deliveries every two weeks — rare in AI.',
        role: 'CTO · Fintech',
      },
      {
        quote:
          'Enterprise-grade security and governance without slowing down.',
        role: 'CISO · Retail',
      },
    ],
    cta: {
      titleLine1: 'Your competitor',
      titleLine2: 'already uses AI.',
      sub: 'Let’s discuss what we can do together in 30 minutes.',
      button: 'Book a strategy call →',
      reassurance:
        '✓ Free   ✓ No commitment   ✓ Reply within 24h',
      mailSubject: 'GAVIOM strategy call',
    },
    blog: {
      indexMetaTitle: 'AI & Automation Blog | GAVIOM',
      indexMetaDescription:
        'Strategy, real-world examples, and technical guides on enterprise AI — written by our team.',
      kicker: '[ RESOURCES ]',
      indexTitle: 'AI in practice.',
      indexLead:
        'Practical guides, lessons learned, and analysis to ship AI inside your organization.',
      featuredLabel: 'Featured',
      readArticle: 'Read article →',
      filterAll: 'All',
      cardReading: '{{n}} min read',
      featuredReading: '{{n}} min read',
      articleReading: '{{n}} min read',
      relatedTitle: 'Related articles',
      tocLabel: '[ CONTENTS ]',
      tocAria: 'On this page',
      notFoundTitle: 'Article not found',
      notFoundBody: 'This content does not exist or has been moved.',
      backToBlog: '← Back to blog',
      allArticles: '← All articles',
      breadcrumbBlog: 'Blog',
      categoryTitleSuffix: ' | GAVIOM Blog',
      categoryMetaDescription:
        'Articles about {{cat}} — AI, automation, and shipping to production.',
      categoryLineOne: '1 article in this category.',
      categoryLineMany: '{{n}} articles in this category.',
      categoryEmpty: 'No articles in this category.',
      categoryBack: 'Back to blog',
      ctaKicker: '[ DOES THIS SOUND FAMILIAR? ]',
      ctaTitle: 'We can automate it for you.',
      ctaLead: '30 minutes to assess your case. No commitment.',
      ctaButton: 'Book a call →',
    },
    footer: {
      todoNote: '// TODO: Address / registration if needed',
      navHeading: 'Navigation',
      legalHeading: 'Legal',
      legalNotice: 'Legal notice',
      privacy: 'Privacy',
      rights: 'All rights reserved.',
    },
  },
}
