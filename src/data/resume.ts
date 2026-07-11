export type Locale = 'en' | 'fr';

export type ResumeContent = {
  locale: Locale;
  htmlLang: string;
  urlPath: string;
  alternatePath: string;
  alternateLabel: string;
  metaDescription: string;
  title: string;
  nav: {
    profile: string;
    impact: string;
    value: string;
    experience: string;
    contact: string;
  };
  hero: {
    greeting: string;
    headline: string;
    availability: string;
    contactCta: string;
    resumeCta: string;
  };
  profile: {
    heading: string;
    title: string;
    body: string;
  };
  impact: {
    heading: string;
    items: Array<{ value: string; label: string }>;
  };
  value: {
    heading: string;
    subtitle: string;
    items: Array<{ title: string; body: string }>;
  };
  experience: {
    heading: string;
    subtitle: string;
    items: Array<{
      company: string;
      period: string;
      role: string;
      body: string;
      bullets?: string[];
    }>;
  };
  certifications: {
    heading: string;
    items: string[];
  };
  contact: {
    heading: string;
    body: string;
    location: string;
    email: string;
    website: string;
    resumePath: string;
  };
};

const sharedImpact = {
  revenue: '100M€',
  scans: '100k+',
  squad: '7+'
};

export const resume: Record<Locale, ResumeContent> = {
  en: {
    locale: 'en',
    htmlLang: 'en',
    urlPath: '/',
    alternatePath: '/index_fr.html',
    alternateLabel: 'Version française',
    metaDescription:
      'Antoine Chédebois resume, remote-first Senior Software Engineer / Tech Lead, ex-Amazon, AWS, e-commerce and logistics platforms',
    title: 'Antoine Chédebois - Senior Software Engineer / Tech Lead',
    nav: {
      profile: 'Profile',
      impact: 'Impact',
      value: 'Scope',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I am Antoine Chédebois',
      headline:
        'Senior Software Engineer / Tech Lea | AWS Specialist | Ex-Amazon | E-commerce & logistics platforms',
      availability:
        'Open to Senior Software Engineer, Staff Engineer, Tech Lead or Engineering Lead roles.',
      contactCta: 'Contact me',
      resumeCta: 'Download resume'
    },
    profile: {
      heading: 'Profile',
      title: 'Senior Software Engineer / Tech Lead',
      body:
        'Ex-Amazon Senior Software Engineer and Tech Lead with 25+ years of experience designing, delivering and operating critical cloud-native web platforms. I work best in remote-first, international teams where ownership, delivery quality and production reliability matter. Currently Engineering Squad Leader at Kingfisher, leading a squad responsible for a high-traffic retail e-commerce platform generating 100M€+ annual revenue.'
    },
    impact: {
      heading: 'Impact',
      items: [
        { value: sharedImpact.revenue, label: 'annual retail platform revenue' },
        { value: sharedImpact.scans, label: 'scans/day logistics workflow' },
        { value: sharedImpact.squad, label: 'engineers in my squad' }
      ]
    },
    value: {
      heading: 'What I Bring',
      subtitle: 'Senior, leader and production-focused scope.',
      items: [
        {
          title: 'Critical platforms',
          body:
            'Design, delivery and operation of e-commerce, logistics and business web platforms with traffic, reliability and maintainability constraints.'
        },
        {
          title: 'Remote leadership',
          body:
            'Distributed-team coordination, mentoring, Scrum rituals, async communication and alignment across product, frontend, backend, cloud and third-party systems.'
        },
        {
          title: 'Cloud & production',
          body:
            'AWS serverless and web architectures, CI/CD, observability, production reliability, Terraform, GitLab CI, Datadog/New Relic and operational best practices.'
        },
        {
          title: 'Sustainable delivery',
          body:
            'Code quality, testing, useful documentation, continuous improvement and pragmatic technical decisions to move fast without degrading the platform.'
        },
        {
          title: 'Modern stack',
          body:
            'TypeScript, Vue/Nuxt, React, Python, PHP/Symfony, REST/GraphQL, PostgreSQL, DynamoDB, AWS Lambda, SQS, SNS, API Gateway and RDS.'
        },
        {
          title: 'Certifications',
          body:
            '5 AWS certifications, Scrum.org Product Owner, Scrum Master and Scrum Developer certifications, backed by hands-on agile delivery experience.'
        }
      ]
    },
    experience: {
      heading: 'Experience',
      subtitle: 'Recent roles and technical scope.',
      items: [
        {
          company: 'Kingfisher',
          period: '2026 - Present',
          role: 'Engineering Squad Leader',
          body:
            'Manager of 7+ software and quality engineers. Leading a squad responsible for a high-traffic e-commerce platform generating 100M€+ annual revenue.',
          bullets: [
            'Delivery, technical leadership, CI/CD, production reliability and observability.',
            'Coordination across frontend, backend, cloud and third-party systems.',
            'Stack: AWS, GitLab CI, Vue/Nuxt/Alokai, Adobe Commerce, Terraform, Jira, Confluence, Datadog/New Relic.'
          ]
        },
        {
          company: 'Amazon',
          period: '2020 - 2026',
          role: 'Senior Developer / Tech Lead / DevOps - International environment',
          body:
            'Built and operated worldwide internal applications for high-volume logistics workflows in a full-remote international team.',
          bullets: [
            'Led technical delivery for a 5-engineer team.',
            'Designed AWS serverless architectures using Lambda, API Gateway, SQS, SNS, DynamoDB, RDS and CloudWatch.',
            'Delivered production-grade tools supporting parcel return workflows at 100k+ scans/day.',
            'Contributed to recruitment loops and engineering quality practices.'
          ]
        },
        {
          company: 'French Army',
          period: '2017 - 2020',
          role: 'Lead Developer - Web Dev Team',
          body:
            'Technical leader for web application design and delivery in a 5-engineer team. Environment: Angular, React, Material, Bootstrap, TypeScript, Symfony, RESTful APIs, Debian, Scrum, Jira, Confluence, GitLab, Docker and Artifactory.'
        },
        {
          company: 'Essonne Department Council',
          period: '2016 - 2017',
          role: 'Web Developer / Lead Dev / Project Manager',
          body:
            'Created web portals dedicated to employees and citizens. Environment: CakePHP, ElasticSearch, Bootstrap, JQuery, PostgreSQL and Oracle.'
        },
        {
          company: 'Belair Informatique',
          period: '2012 - 2016',
          role: 'Web Developer / Project Manager',
          body:
            'Created websites, web portals and extranet applications for customers using MVC, HTML5, CSS3, Bootstrap, PHP5 and XML web services.'
        },
        {
          company: 'Cotep',
          period: '2002 - 2012',
          role: 'Web Developer / Webmaster / Pre-sales Engineer',
          body:
            'Created and maintained internet, intranet and extranet applications. Produced technical and economic documentation for national and international tenders.'
        }
      ]
    },
    certifications: {
      heading: 'Certifications & Training',
      items: [
        'AWS Certified AI Practitioner (2025)',
        'AWS Solutions Architect Associate (2024)',
        'AWS Certified Developer Associate (2020)',
        'AWS Certified Cloud Practitioner (2020 & 2024)',
        'Professional Scrum Product Owner I (2019)',
        'Professional Scrum Master I (2019)',
        'Professional Scrum Developer I (2019)',
        'Symfony and advanced PHP trainings (2018)'
      ]
    },
    contact: {
      heading: 'Contact',
      body:
        'I am looking for an international environment where I can contribute to critical web platforms with technical ownership, AWS cloud engineering, sustainable delivery and operational excellence.',
      location: 'France / CET timezone / Remote-first',
      email: 'antoinechedebois@gmail.com',
      website: 'https://www.antoinechedebois.com',
      resumePath: '/assets/pdf/CV_Antoine_CHEDEBOIS_GB.pdf'
    }
  },
  fr: {
    locale: 'fr',
    htmlLang: 'fr',
    urlPath: '/index_fr.html',
    alternatePath: '/',
    alternateLabel: 'English version',
    metaDescription:
      "CV d'Antoine Chédebois, Senior Software Engineer / Tech Lead remote-first, ex-Amazon, AWS, plateformes e-commerce et logistique",
    title: 'Antoine Chédebois - Senior Software Engineer / Tech Lead',
    nav: {
      profile: 'Profil',
      impact: 'Impact',
      value: 'Scope',
      experience: 'Expérience',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Bonjour, je suis Antoine Chédebois',
      headline:
        'Senior Software Engineer / Tech Lead | Ex-Amazon | AWS Spécialiste | Plateformes e-commerce & logistique',
      availability:
        'Ouvert à des postes de Senior Software Engineer, Staff Engineer, Tech Lead ou Engineering Lead.',
      contactCta: 'Me contacter',
      resumeCta: 'Télécharger le CV'
    },
    profile: {
      heading: 'Profil',
      title: 'Senior Software Engineer / Tech Lead',
      body:
        "Senior Software Engineer et Tech Lead ex-Amazon avec 25+ ans d'expérience dans la conception, le delivery et l'exploitation de plateformes web critiques cloud-native. J'aime travailler dans des équipes remote-first internationales, avec un haut niveau d'autonomie, de qualité de delivery et de fiabilité en production. Actuellement Engineering Squad Leader chez Kingfisher, je pilote une équipe en charge d'une plateforme e-commerce retail à fort trafic générant 100M€+ de chiffre d'affaires annuel."
    },
    impact: {
      heading: 'Impact',
      items: [
        { value: sharedImpact.revenue, label: 'CA annuel plateforme retail' },
        { value: sharedImpact.scans, label: 'scans/jour workflow logistique' },
        { value: sharedImpact.squad, label: 'engineers dans ma squad' }
      ]
    },
    value: {
      heading: "Ce que j'apporte",
      subtitle: 'Scope senior, leadership et production.',
      items: [
        {
          title: 'Plateformes critiques',
          body:
            'Conception, delivery et exploitation de plateformes web e-commerce, logistique et métier, avec contraintes de trafic, fiabilité et maintenabilité.'
        },
        {
          title: 'Leadership remote',
          body:
            "Coordination d'équipes distribuées, mentoring, rituels Scrum, communication asynchrone et alignement entre produit, frontend, backend, cloud et systèmes tiers."
        },
        {
          title: 'Cloud & production',
          body:
            "Architectures AWS serverless et web, CI/CD, observabilité, fiabilité de production, Terraform, GitLab CI, Datadog/New Relic et bonnes pratiques d'exploitation."
        },
        {
          title: 'Delivery durable',
          body:
            'Qualité de code, tests, documentation utile, amélioration continue et décisions techniques pragmatiques pour livrer vite sans dégrader la plateforme.'
        },
        {
          title: 'Stack moderne',
          body:
            'TypeScript, Vue/Nuxt, React, Python, PHP/Symfony, REST/GraphQL, PostgreSQL, DynamoDB, AWS Lambda, SQS, SNS, API Gateway et RDS.'
        },
        {
          title: 'Certifications',
          body:
            '5 certifications AWS, certifications Scrum.org Product Owner, Scrum Master et Scrum Developer, avec une expérience terrain en delivery agile.'
        }
      ]
    },
    experience: {
      heading: 'Expérience',
      subtitle: 'Rôles récents et périmètre technique.',
      items: [
        {
          company: 'Kingfisher',
          period: '2026 - Présent',
          role: 'Engineering Squad Leader',
          body:
            "Manager d'une squad de 7+ software et quality engineers. Manager d'une équipe en charge d'un site e-commerce à fort trafic générant 100M€+ de chiffre d'affaires annuel.",
          bullets: [
            'Delivery, leadership technique, CI/CD, fiabilité de production et observabilité.',
            'Coordination entre équipes frontend, backend, cloud et systèmes tiers.',
            'Stack: AWS, GitLab CI, Vue/Nuxt/Alokai, Adobe Commerce, Terraform, Jira, Confluence, Datadog/New Relic.'
          ]
        },
        {
          company: 'Amazon',
          period: '2020 - 2026',
          role: 'Senior Developer / Tech Lead / DevOps - équipe internationale',
          body:
            "Construction et exploitation d'applications internes mondiales pour des workflows logistiques à fort volume, dans une équipe internationale full-remote.",
          bullets: [
            "Leadership technique d'une équipe de 5 engineers.",
            'Architectures AWS serverless avec Lambda, API Gateway, SQS, SNS, DynamoDB, RDS et CloudWatch.',
            'Outils de production pour workflows de retour colis à 100k+ scans/jour.',
            'Contribution aux boucles de recrutement et aux pratiques de qualité engineering.'
          ]
        },
        {
          company: 'Ministère des Armées',
          period: '2017 - 2020',
          role: 'Lead Developer - équipe web',
          body:
            'Référent technique sur la conception et le delivery d’applications web dans une équipe de 5 engineers. Environnement: Angular, React, Material, Bootstrap, TypeScript, Symfony, API RESTful, Debian, Scrum, Jira, Confluence, GitLab, Docker et Artifactory.'
        },
        {
          company: 'Conseil Départemental 91',
          period: '2016 - 2017',
          role: 'Développeur Web / Lead Dev / Chef de projet',
          body:
            'Réalisation d’applications web métier pour les agents et usagers du département. Environnement: CakePHP, ElasticSearch, Bootstrap, JQuery, PostgreSQL et Oracle.'
        },
        {
          company: 'Belair Informatique',
          period: '2012 - 2016',
          role: 'Développeur Web / Chef de projet',
          body:
            'Réalisation de sites web, portails web et applications extranet pour des clients, avec MVC, HTML5, CSS3, Bootstrap, PHP5 et web services XML.'
        },
        {
          company: 'Cotep',
          period: '2002 - 2012',
          role: 'Développeur Web / Webmaster / Ingénieur avant-vente',
          body:
            "Création et maintenance d'applications internet, intranet et extranet. Production de dossiers techniques et économiques pour appels d'offres nationaux et internationaux."
        }
      ]
    },
    certifications: {
      heading: 'Certifications & formation',
      items: [
        'AWS Certified AI Practitioner (2025)',
        'AWS Solutions Architect Associate (2024)',
        'AWS Certified Developer Associate (2020)',
        'AWS Certified Cloud Practitioner (2020 & 2024)',
        'Professional Scrum Product Owner I (2019)',
        'Professional Scrum Master I (2019)',
        'Professional Scrum Developer I (2019)',
        'Formations Symfony et PHP avancé (2018)'
      ]
    },
    contact: {
      heading: 'Contact',
      body:
        'Je recherche un environnement international où contribuer à des plateformes web critiques, avec ownership technique, cloud AWS, delivery durable et excellence opérationnelle.',
      location: 'France / fuseau CET / remote-first',
      email: 'antoinechedebois@gmail.com',
      website: 'https://www.antoinechedebois.com',
      resumePath: '/assets/pdf/CV_Antoine_Chedebois.pdf'
    }
  }
};
