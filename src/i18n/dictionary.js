/** @typedef {'fr'|'en'} Locale */

export const dictionary = {
  fr: {
    home: {
      title: 'GAVIOM Advisory, Conseil et déploiement IA',
      description:
        'Nous accompagnons les professionnels qui veulent intégrer l’IA sans se perdre dans la technique. Stratégie, automatisation opérationnelle et formations. Premiers gains souvent visibles sous trois semaines.',
      ogTitle: 'GAVIOM Advisory, Conseil et déploiement IA',
      ogDescription:
        'Cabinet de conseil qui exécute : diagnostic, déploiement dans vos outils, formations optionnelles. Méthode GAVIOM.',
    },
    nav: {
      services: 'Services',
      process: 'Méthode',
      work: 'Réalisations',
      blog: 'Ressources',
      formations: 'Formations',
      contact: 'Contact',
      cta: 'Réserver un appel',
      ariaNav: 'Navigation principale',
    },
    lang: { fr: 'FR', en: 'EN', aria: 'Choisir la langue' },
    hero: {
      eyebrow: 'Cabinet de conseil qui exécute · Fondé en 2026',
      titleLine1: 'Stratégie et déploiement,',
      titleLine2: 'vous récupérez du temps.',
      titleEmphasis: '',
      subtitle:
        "GAVIOM Advisory accompagne les professionnels qui veulent intégrer l'IA dans leur activité sans se perdre dans la technique. Pas de rapport sans suite : on priorise, on automatise, vous voyez des effets dès les trois premières semaines. Auto-entrepreneurs, PME, cabinets médicaux : une même exigence, des cas d'usage présentés avec vos réalités.",
      ctaPrimary: 'Demander un audit gratuit →',
      ctaSecondary: 'Découvrir nos services ↓',
      reassurance:
        '✓ Réponse sous 24h · ✓ Sans engagement · ✓ Résultats en 3 semaines',
      statGridAria: 'Chiffres clés',
      statCards: [
        {
          id: 'admin',
          value: '40%',
          label: 'du temps perdu en admin avant notre intervention',
        },
        {
          id: 'deploy',
          value: '3 sem.',
          label: 'délai moyen de déploiement, intégré à vos outils',
        },
        {
          id: 'hours',
          value: '10h',
          label: 'récupérées par semaine en moyenne après déploiement',
        },
        {
          id: 'audit',
          value: '0€',
          label: 'si vous ne poursuivez pas après l’audit',
        },
      ],
    },
    stats: {
      heading: 'Le même problème, trois visages : le temps qui file.',
      items: [
        {
          audience: 'Indépendants',
          value: '15h',
          label:
            'perdues en moyenne chaque semaine entre admin, relances et gestion, quand tout repose sur une seule personne',
        },
        {
          audience: 'PME',
          value: '40%',
          label:
            "du temps d'équipe absorbé par des tâches répétitives que des workflows bien cadrés peuvent déléguer à l'IA",
        },
        {
          audience: 'Cabinets',
          value: '30%',
          label:
            'de rendez-vous impactés lorsque rappels et confirmations ne sont pas automatisés de bout en bout',
        },
      ],
      closing:
        "Nos clients ne nous ont pas engagés pour un slide deck. Ils nous ont engagés parce qu'on relie le diagnostic à quelque chose qui tourne vraiment dans leurs outils.",
    },
    services: {
      kicker: 'Nos services',
      heading: "L'IA qui travaille pour vous,",
      headingLine2: 'pas contre votre agenda.',
      intro:
        "Cabinet de conseil qui exécute : on ne vous livre pas une liste de recommandations puis disparaît. On identifie les leviers, on automatise jusqu'en production dans vos outils, et vous choisissez d'ajouter des formations quand vous le souhaitez.",
      audiences: [
        {
          title: 'Auto-entrepreneurs',
          description: 'Seul face à tout : admin, clients, croissance',
        },
        {
          title: 'PME 5 à 50 salariés',
          description: 'Des process à huilier, une équipe à faire gagner en temps',
        },
        {
          title: 'Cabinets médicaux',
          description:
            'Vétérinaires, dentistes, médecins, la santé mérite mieux que l’Excel',
        },
      ],
      cards: [
        {
          step: 'Étape 1',
          badge: 'Gratuit',
          title: 'Audit IA, on trouve où vous perdez du temps',
          description:
            'On cartographie vos processus et on identifie exactement quoi automatiser en premier pour un impact immédiat. Pas de jargon, pas de rapport de 80 pages.',
          tags: ['Auto-entrepreneur', 'PME', 'Cabinet médical'],
          includes: [
            'Audit de vos processus clés',
            'Top 3 des automatisations prioritaires',
            'ROI estimé par action',
            'Roadmap personnalisée 3 mois',
          ],
          footnote:
            '100% gratuit. On ne vous facture que si vous décidez d’aller de l’avant.',
          reassurance: 'Sans engagement, réponse sous 24h',
          highlighted: false,
        },
        {
          step: 'Étape 2',
          badge: 'Le plus choisi',
          title: 'On automatise pour vous, vous récupérez des heures',
          description:
            'On déploie le workflow IA identifié lors de l’audit, on l’intègre à vos outils existants et on forme votre équipe. Déployé en 3 semaines, rien à configurer de votre côté.',
          tags: ['PME', 'Cabinet médical', 'Indépendant ambitieux'],
          includes: [
            '1 workflow IA complet (RDV, relances, dossiers…)',
            'Intégration à vos outils actuels',
            'Formation équipe incluse (1h)',
            '30j de support post-déploiement',
            'Satisfait ou remboursé',
          ],
          footnote: '',
          reassurance: '',
          highlighted: true,
          priceFrom: 'À partir de 3 500 € TTC',
          priceNote:
            'Périmètre et maintenance précisés après l’audit gratuit (souvent un forfait mensuel pour le suivi).',
        },
      ],
      formationTeaser: {
        kicker: 'Option complémentaire',
        title: 'Formations : le même partenaire, les mêmes équipes',
        body: 'Après l’implémentation ou en parallèle, vous pouvez monter en compétence sans changer d’interlocuteur. Atelier, programme praticien, programme équipes et certification : tout est regroupé dans une seule section, avec des tarifs indicatifs visibles.',
        cta: 'Voir les formats et les prix →',
        href: '#formations',
      },
    },
    process: {
      kicker: '[ NOTRE MÉTHODE ]',
      heading: 'La méthode GAVIOM.',
      lead:
        'Six phases structurées pour une transformation IA durable, mesurable et ancrée dans votre façon de travailler, seul ou avec une petite équipe.',
      hint:
        'Les étapes défilent en boucle · faites glisser pour explorer (ou réduire les animations dans les réglages du système).',
      steps: [
        {
          letter: 'G',
          number: '01',
          name: 'Gap Analysis',
          description:
            'Cartographie complète de vos processus actuels. Identification des inefficacités et tâches chronophages qui freinent votre croissance.',
          imageAlt:
            'Cartographie des processus et analyse des écarts, phase Gap Analysis.',
        },
        {
          letter: 'A',
          number: '02',
          name: 'AI Mapping',
          description:
            "Identification précise des opportunités d'automatisation à fort ROI dans votre contexte métier spécifique.",
          imageAlt:
            "Repérage des cas d'usage IA à fort impact, phase AI Mapping.",
        },
        {
          letter: 'V',
          number: '03',
          name: 'Value Modeling',
          description:
            "Quantification du ROI avant toute implémentation. Vous savez exactement ce que chaque euro investi va vous rapporter.",
          imageAlt:
            'Modélisation de la valeur et du retour sur investissement, phase Value Modeling.',
        },
        {
          letter: 'I',
          number: '04',
          name: 'Implementation',
          description:
            'Déploiement agile en 3 semaines maximum, intégré à vos outils existants sans disruption opérationnelle.',
          imageAlt:
            'Mise en production et intégration, phase Implementation.',
        },
        {
          letter: 'O',
          number: '05',
          name: 'Optimization',
          description:
            'Monitoring continu des workflows déployés. Ajustements et évolutions au fil de vos besoins.',
          imageAlt:
            'Optimisation et suivi des flux automatisés, phase Optimization.',
        },
        {
          letter: 'M',
          number: '06',
          name: 'Mastery',
          description:
            'Renforcement de vos compétences pour une adoption réelle et une autonomie progressive sur l’IA, vous et, si besoin, vos collaborateurs.',
          imageAlt:
            'Montée en compétences et autonomie sur l’IA, phase Mastery.',
        },
      ],
    },
    casesSection: {
      kicker: '[ RÉALISATIONS ]',
      heading: 'Un cas par univers,',
      headingLine2: 'même méthode.',
      lead: 'Vétérinaire, PME ou indépendant : chaque mission inclut une lecture ROI que vous pouvez retracer.',
      viewCase: '→ Discutons de votre cas',
    },
    cases: [
      {
        tag: 'Santé animale · Clinique vétérinaire · Paris',
        metric: '+12h',
        metricLabel: 'récupérées par semaine',
        description:
          'Automatisation des rappels de vaccination et prise de RDV 24h/24. L’équipe soignante se concentre sur les patients présents.',
        results: [
          '−40% de no-shows',
          'RDV disponibles 24h/24',
          '0 appel administratif manqué',
        ],
      },
      {
        tag: 'PME · Services B2B · Île-de-France (mission anonymisée)',
        metric: '−35%',
        metricLabel: 'de temps sur le traitement des demandes entrantes',
        description:
          'Qualification des messages clients, brouillons de réponses et mise à jour du CRM. L’équipe reprend les comptes à fort potentiel au lieu de trier sa boîte mail.',
        results: [
          'Première réponse sous 2 h en journée',
          'Pipeline sans message “oublié”',
          'Même stack qu’avant, enrichie',
        ],
      },
      {
        tag: 'Indépendant · Consultant · Grand Ouest (mission anonymisée)',
        metric: '6h',
        metricLabel: 'libérées par semaine sur propositions et suivis',
        description:
          'Synthèses de brief, plans d’atelier et relances post-échange à partir des notes et emails. Fini les soirées à refaire des comptes rendus depuis zéro.',
        results: [
          'Proposition type en moins de 20 min',
          'Relances jamais oubliées',
          'Ton et style du consultant préservés',
        ],
      },
    ],
    formationsSection: {
      kicker: '[ FORMATIONS ]',
      heading: 'Trois formats,',
      headingLine2: 'un seul fil : votre métier.',
      lead:
        'Offre complémentaire à l’implémentation : pas de “troisième étape” floue sur le site, uniquement des parcours clairs avec des prix indicatifs. Même équipe, même exigence que sur le déploiement.',
      trainings: [
        {
          format: 'Atelier découverte',
          tag: 'MISE À NIVEAU · DEMI-JOURNÉE',
          duration: '4 h · Présentiel ou visio',
          audience: 'Solo ou groupe restreint (jusqu’à 8 personnes)',
          description:
            'Comprendre l’IA sans jargon, arbitrer vos priorités et cadrer ce qui est raisonnable pour votre secteur. Idéal avant ou juste après une phase de déploiement.',
          outcomes: [
            'Fondamentaux et limites comprises',
            "Cas d'usage réalistes pour votre activité",
            'Feuille de route claire pour la suite',
          ],
          highlighted: false,
          priceFrom: '800 € la demi-journée',
          priceNote:
            '4 h + préparation. Jusqu’à 8 personnes incluses, puis +100 € par personne supplémentaire.',
        },
        {
          format: 'Programme praticien',
          tag: 'AU QUOTIDIEN · SESSIONS COURTES',
          duration: 'Plusieurs semaines · 60 à 90 min par session',
          audience: 'Indépendant ou équipe réduite',
          description:
            'Intégrer l’IA dans votre flux réel : rendez-vous, admin, suivi client, contenu. Chaque session se termine par un livrable utilisable immédiatement.',
          outcomes: [
            'Outils calés sur votre métier',
            'Tâches répétitives allégées',
            'Autonomie progressive sur vos prompts et workflows',
          ],
          highlighted: true,
          priceFrom: '3 200 € en forfait programme',
          priceNote: '400 € par session à l’unité.',
        },
        {
          format: 'Programme équipes',
          tag: '5 À 30 PERSONNES',
          duration: 'Programme sur 3 mois · Atelier dirigeants inclus',
          audience: 'PME et cabinets qui veulent ancrer l’IA dans les habitudes',
          description:
            'Atelier dirigeants, puis rythme sur trois mois avec cas pratiques tirés de vos dossiers réels. Gouvernance légère, référent interne formé. Certification IA Métier en option, tarif affiché.',
          outcomes: [
            'Même vocabulaire métier pour toute l’équipe',
            'Cadre simple pour continuer sans nous',
            'Référent interne outillé en fin de programme',
          ],
          highlighted: false,
          priceFrom: '6 500 € sur 3 mois',
          priceNote:
            'Atelier dirigeants et montée en compétence du référent inclus. Certification IA Métier : +1 500 € par personne en option.',
        },
      ],
    },
    testimonialsSection: {
      kicker: '[ TÉMOIGNAGES ]',
      heading: 'Ils parlent de résultats,',
      headingLine2: 'pas de technologie.',
      ratingAria: 'Note 5 sur 5',
    },
    testimonials: [
      {
        quote:
          'GAVIOM ne nous a pas vendu un outil. Ils ont compris notre métier et livré quelque chose qui fonctionne vraiment.',
        role: 'Clinique du Parc · Lyon',
      },
      {
        quote:
          "L'accompagnement stratégique nous a permis de prioriser les bons investissements avant de déployer quoi que ce soit.",
        role: 'Directrice · Clinique équine',
      },
      {
        quote:
          'Une équipe qui parle business avant de parler technique, exactement ce qu’il nous fallait.',
        role: 'Vétérinaire libéral · Île-de-France',
      },
      {
        quote:
          'ROI documenté, méthode comprise, et des processus qui tiennent dans la durée.',
        role: 'Gérant · Structure multi-sites',
      },
    ],
    cta: {
      titleLine1: 'Votre concurrent',
      titleLine2: 'utilise déjà l’IA.',
      subLead:
        "30 minutes pour évaluer votre potentiel IA. On vous dit ce qu'on peut faire, et ce qu'on ne peut pas. Pas de jargon, pas de promesses vides.",
      button: 'Réserver un appel stratégique →',
      reassurance:
        '✓ Gratuit  ·  ✓ Sans engagement  ·  ✓ Réponse sous 24h',
      mailSubject: 'Appel stratégique GAVIOM',
    },
    blog: {
      indexMetaTitle: 'Ressources & veille IA | GAVIOM Advisory',
      indexMetaDescription:
        'Analyses, retours terrain et guides pratiques sur la transformation IA. Expertise issue de nos missions de conseil.',
      kicker: '[ RESSOURCES & VEILLE IA ]',
      indexTitle: 'L’IA en pratique.',
      indexLead:
        'Analyses, retours terrain et guides pratiques rédigés par nos consultants. Pas du contenu générique, de l’expertise issue de nos missions.',
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
      breadcrumbBlog: 'Ressources',
      categoryTitleSuffix: ' | GAVIOM Advisory',
      categoryMetaDescription:
        'Articles sur {{cat}}, transformation IA et mise en œuvre.',
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
      tagline: 'Cabinet de conseil qui exécute votre transformation IA',
      colServices: 'Services',
      colContact: 'Contact',
      serviceAudit: 'Audit & Stratégie',
      serviceTransform: 'Transformation IA',
      serviceTraining: 'Formations',
      bookCall: 'Réserver un appel',
      linkedinLabel: 'LinkedIn GAVIOM',
      legalNotice: 'Mentions légales',
      privacy: 'Politique de confidentialité',
    },
  },

  en: {
    home: {
      title: 'GAVIOM Advisory, AI strategy and delivery',
      description:
        'We help professionals adopt AI without drowning in tech. Strategy, hands-on automation, and optional training. Early wins often within three weeks.',
      ogTitle: 'GAVIOM Advisory, AI strategy and delivery',
      ogDescription:
        'Consulting that ships: diagnosis, deployment in your stack, optional training. The GAVIOM method.',
    },
    nav: {
      services: 'Services',
      process: 'Method',
      work: 'Results',
      blog: 'Resources',
      formations: 'Training',
      contact: 'Contact',
      cta: 'Book a call',
      ariaNav: 'Main navigation',
    },
    lang: { fr: 'FR', en: 'EN', aria: 'Choose language' },
    hero: {
      eyebrow: 'Consulting that ships · Est. 2026',
      titleLine1: 'Strategy and deployment,',
      titleLine2: 'you get time back.',
      titleEmphasis: '',
      subtitle:
        'GAVIOM Advisory works with professionals who want AI in their business without getting lost in the stack. No deck-and-disappear: we prioritize, we automate, you see impact within three weeks. Solopreneurs, SMBs, medical practices: one standard of work, examples that match how you operate.',
      ctaPrimary: 'Request a free audit →',
      ctaSecondary: 'Explore our services ↓',
      reassurance:
        '✓ Reply within 24h · ✓ No commitment · ✓ Results in 3 weeks',
      statGridAria: 'Key figures',
      statCards: [
        {
          id: 'admin',
          value: '40%',
          label: 'of time lost on admin before we intervene',
        },
        {
          id: 'deploy',
          value: '3 wks.',
          label: 'average deployment time, integrated with your tools',
        },
        {
          id: 'hours',
          value: '10h',
          label: 'reclaimed per week on average after rollout',
        },
        {
          id: 'audit',
          value: '€0',
          label: 'if you do not proceed after the audit',
        },
      ],
    },
    stats: {
      heading: 'Same problem, three faces: time slipping away.',
      items: [
        {
          audience: 'Solopreneurs',
          value: '15h',
          label:
            'lost each week on admin, follow-ups, and ops when everything sits on one person',
        },
        {
          audience: 'SMBs',
          value: '40%',
          label:
            'of team time on repetitive work that well-designed workflows can hand off to AI',
        },
        {
          audience: 'Practices',
          value: '30%',
          label:
            'of appointments at risk when reminders and confirmations are not end-to-end automated',
        },
      ],
      closing:
        'Our clients did not hire us for a slide deck. They hired us because we connect diagnosis to something that actually runs in their tools.',
    },
    services: {
      kicker: 'Our services',
      heading: 'AI that works for you,',
      headingLine2: 'not against your calendar.',
      intro:
        'Consulting that ships: we do not hand you recommendations and vanish. We find the levers, automate through production in your stack, and you add training when it makes sense.',
      audiences: [
        {
          title: 'Solopreneurs & freelancers',
          description: 'Juggling admin, clients, and growth on your own',
        },
        {
          title: 'SMBs (5–50 people)',
          description: 'Processes to tighten, teams to give time back to',
        },
        {
          title: 'Medical practices',
          description:
            'Vets, dentists, physicians, care deserves better than spreadsheets',
        },
      ],
      cards: [
        {
          step: 'Step 1',
          badge: 'Free',
          title: 'AI audit, where your time really goes',
          description:
            'We map how you work and pinpoint what to automate first for immediate impact. No jargon, no 80-page deck.',
          tags: ['Solopreneur', 'SMB', 'Medical practice'],
          includes: [
            'Audit of your key processes',
            'Top 3 priority automations',
            'Estimated ROI per action',
            'Personalized 3-month roadmap',
          ],
          footnote:
            '100% free. You only pay if you choose to move forward.',
          reassurance: 'No commitment · reply within 24h',
          highlighted: false,
        },
        {
          step: 'Step 2',
          badge: 'Most chosen',
          title: 'We automate for you, you get hours back',
          description:
            'We ship the workflow from the audit, plug it into your existing tools, and train your team. Live in three weeks, nothing for you to wire up.',
          tags: ['SMB', 'Medical practice', 'Ambitious independents'],
          includes: [
            'One full AI workflow (booking, follow-ups, files…)',
            'Integration with your current stack',
            'Team training included (1h)',
            '30 days post-launch support',
            'Satisfaction or money back',
          ],
          footnote: '',
          reassurance: '',
          highlighted: true,
          priceFrom: 'From €3,500 (indicative)',
          priceNote:
            'Scope and maintenance are defined after the free audit (often a monthly retainer for ongoing care).',
        },
      ],
      formationTeaser: {
        kicker: 'Optional add-on',
        title: 'Training: same partner, same team',
        body: 'After implementation or in parallel, you can upskill without switching vendors. Workshop, practitioner track, team program and certification live in one section, with indicative pricing on the page.',
        cta: 'See formats and pricing →',
        href: '#formations',
      },
    },
    process: {
      kicker: '[ OUR METHOD ]',
      heading: 'The GAVIOM method.',
      lead:
        'Six structured phases for durable, measurable AI change that fits how you work, solo or with a small team.',
      hint:
        'Steps loop continuously · drag to explore (or enable “Reduce motion” in system settings).',
      steps: [
        {
          letter: 'G',
          number: '01',
          name: 'Gap Analysis',
          description:
            'Full mapping of how you work today. We surface inefficiencies and time sinks that cap your growth.',
          imageAlt:
            'Process mapping and gap analysis, Gap Analysis phase.',
        },
        {
          letter: 'A',
          number: '02',
          name: 'AI Mapping',
          description:
            'Pinpoint high-ROI automation opportunities in your specific operating context.',
          imageAlt:
            'Targeting high-impact AI use cases, AI Mapping phase.',
        },
        {
          letter: 'V',
          number: '03',
          name: 'Value Modeling',
          description:
            'Quantify ROI before implementation. You know what every euro should return.',
          imageAlt:
            'ROI and value modeling, Value Modeling phase.',
        },
        {
          letter: 'I',
          number: '04',
          name: 'Implementation',
          description:
            'Agile deployment in three weeks or less, integrated with your tools and minimal operational disruption.',
          imageAlt:
            'Shipping and integration, Implementation phase.',
        },
        {
          letter: 'O',
          number: '05',
          name: 'Optimization',
          description:
            'Continuous monitoring of deployed workflows. Iteration as your needs evolve.',
          imageAlt:
            'Monitoring and tuning, Optimization phase.',
        },
        {
          letter: 'M',
          number: '06',
          name: 'Mastery',
          description:
            'Build real proficiency and growing self-sufficiency with AI, for you and, when relevant, the people you work with.',
          imageAlt:
            'Upskilling and autonomy with AI, Mastery phase.',
        },
      ],
    },
    casesSection: {
      kicker: '[ RESULTS ]',
      heading: 'One story per world,',
      headingLine2: 'same method.',
      lead: 'Veterinary, SMB, or independent: every engagement includes a ROI narrative you can trace.',
      viewCase: '→ Discuss your case',
    },
    cases: [
      {
        tag: 'Animal health · Veterinary clinic · Paris',
        metric: '+12h',
        metricLabel: 'reclaimed per week',
        description:
          'Automated vaccination reminders and 24/7 booking. Clinical staff focus on patients in the room.',
        results: [
          '−40% no-shows',
          'Bookings 24/7',
          'Zero missed admin calls',
        ],
      },
      {
        tag: 'SMB · B2B services · Greater Paris (anonymized)',
        metric: '−35%',
        metricLabel: 'less time on inbound requests',
        description:
          'Triage for client messages, draft replies, and CRM updates. The team chases high-value accounts instead of living in the inbox.',
        results: [
          'First response under 2h during the day',
          'Pipeline without “forgotten” threads',
          'Same stack as before, augmented',
        ],
      },
      {
        tag: 'Independent · Consultant · Western France (anonymized)',
        metric: '6h',
        metricLabel: 'saved weekly on proposals and follow-ups',
        description:
          'Brief summaries, workshop outlines, and post-call follow-ups from notes and email. No more rebuilding reports from scratch at night.',
        results: [
          'Proposal drafts in under 20 minutes',
          'Follow-ups never slip',
          'Voice and tone stay yours',
        ],
      },
    ],
    formationsSection: {
      kicker: '[ TRAINING ]',
      heading: 'Three formats,',
      headingLine2: 'one thread: your craft.',
      lead:
        'Optional complement to implementation: no fuzzy “third step” on the site, only clear tracks with indicative pricing. Same team and bar as delivery.',
      trainings: [
        {
          format: 'Discovery workshop',
          tag: 'FOUNDATIONS · HALF DAY',
          duration: '4h · In person or video',
          audience: 'Solo or small group (up to 8 people)',
          description:
            'Understand AI without buzzwords, set priorities, and calibrate what is realistic for your sector. Ideal before or right after a deployment wave.',
          outcomes: [
            'Limits and capabilities spelled out',
            'Realistic use cases for your work',
            'A clear roadmap for what comes next',
          ],
          highlighted: false,
          priceFrom: '€800 half day',
          priceNote:
            '4h delivery plus prep. Up to 8 people included, then +€100 per additional attendee.',
        },
        {
          format: 'Practitioner track',
          tag: 'DAY-TO-DAY · SHORT SESSIONS',
          duration: 'Several weeks · 60–90 min per session',
          audience: 'Solo or lean team',
          description:
            'Embed AI in your real flow: scheduling, admin, client follow-up, content. Each session ends with a deliverable you can use immediately.',
          outcomes: [
            'Tools tuned to your practice',
            'Less repetitive busywork',
            'Growing autonomy on prompts and workflows',
          ],
          highlighted: true,
          priceFrom: '€3,200 program package',
          priceNote: '€400 per session when booked individually.',
        },
        {
          format: 'Team program',
          tag: '5 TO 30 PEOPLE',
          duration: '3-month cadence · Leadership workshop included',
          audience: 'SMBs and practices that want habits, not one-off demos',
          description:
            'Leadership workshop, then a three-month rhythm with cases drawn from real files. Light governance and a trained internal lead. Optional professional certification, priced clearly.',
          outcomes: [
            'Shared vocabulary across the team',
            'Simple frame to continue without us',
            'Internal lead equipped by the end of the program',
          ],
          highlighted: false,
          priceFrom: '€6,500 over 3 months',
          priceNote:
            'Leadership workshop and internal-lead upskilling included. Professional AI certification: +€1,500 per person (optional).',
        },
      ],
    },
    testimonialsSection: {
      kicker: '[ TESTIMONIALS ]',
      heading: 'They cite outcomes,',
      headingLine2: 'not tech stacks.',
      ratingAria: '5 out of 5 stars',
    },
    testimonials: [
      {
        quote:
          'GAVIOM did not sell us a tool. They understood our practice and shipped something that actually works.',
        role: 'Clinique du Parc · Lyon',
      },
      {
        quote:
          'The strategic lens helped us invest in the right places before writing a single line of production code.',
        role: 'Practice director · Equine clinic',
      },
      {
        quote:
          'Business first, technology second, exactly what we needed.',
        role: 'Independent veterinarian · Paris region',
      },
      {
        quote:
          'Documented ROI, clear method, processes that still hold six months later.',
        role: 'Owner · Multi-site group',
      },
    ],
    cta: {
      titleLine1: 'Your competitor',
      titleLine2: 'already uses AI.',
      subLead:
        'Thirty minutes to assess your AI potential. We will be clear about what we can, and cannot, do. No jargon, no empty promises.',
      button: 'Book a strategy call →',
      reassurance:
        '✓ Free  ·  ✓ No commitment  ·  ✓ Reply within 24h',
      mailSubject: 'GAVIOM strategy call',
    },
    blog: {
      indexMetaTitle: 'Resources & AI intelligence | GAVIOM Advisory',
      indexMetaDescription:
        'Analysis, field notes, and practical guides on AI transformation, from our consulting work.',
      kicker: '[ RESOURCES & AI INTELLIGENCE ]',
      indexTitle: 'AI in practice.',
      indexLead:
        'Analysis, field notes, and practical guides written by our consultants, expertise from real engagements, not generic content.',
      featuredLabel: 'Featured',
      readArticle: 'Read article →',
      filterAll: 'All',
      cardReading: '{{n}} min',
      featuredReading: '{{n}} min read',
      articleReading: '{{n}} min read',
      relatedTitle: 'Related articles',
      tocLabel: '[ CONTENTS ]',
      tocAria: 'On this page',
      notFoundTitle: 'Article not found',
      notFoundBody: 'This content does not exist or has been moved.',
      backToBlog: '← Back to resources',
      allArticles: '← All articles',
      breadcrumbBlog: 'Resources',
      categoryTitleSuffix: ' | GAVIOM Advisory',
      categoryMetaDescription:
        'Articles about {{cat}}, AI transformation and delivery.',
      categoryLineOne: '1 article in this category.',
      categoryLineMany: '{{n}} articles in this category.',
      categoryEmpty: 'No articles in this category.',
      categoryBack: 'Back to resources',
      ctaKicker: '[ DOES THIS SOUND FAMILIAR? ]',
      ctaTitle: 'We can automate it for you.',
      ctaLead: '30 minutes to assess your case. No commitment.',
      ctaButton: 'Book a call →',
    },
    footer: {
      tagline: 'Consulting firm that ships your AI transformation',
      colServices: 'Services',
      colContact: 'Contact',
      serviceAudit: 'Audit & strategy',
      serviceTransform: 'AI transformation',
      serviceTraining: 'Training',
      bookCall: 'Book a call',
      linkedinLabel: 'GAVIOM on LinkedIn',
      legalNotice: 'Legal notice',
      privacy: 'Privacy policy',
    },
  },
}
