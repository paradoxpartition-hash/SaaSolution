export const locales = ["es", "en", "nl", "de"] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  nl: "Nederlands",
  de: "Deutsch"
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export const countryNames: Record<Locale, Record<string, string>> = {
  es: { Spain: "España", Paraguay: "Paraguay", Philippines: "Filipinas" },
  en: { Spain: "Spain", Paraguay: "Paraguay", Philippines: "Philippines" },
  nl: { Spain: "Spanje", Paraguay: "Paraguay", Philippines: "Filipijnen" },
  de: { Spain: "Spanien", Paraguay: "Paraguay", Philippines: "Philippinen" }
};

export const common = {
  es: {
    footer: "© 2026 SaaSolution SL. Una empresa de Paradox FZCO. Todos los derechos reservados.",
    emailUs: "Escríbenos",
    language: "Idioma",
    languageNote: "Idioma detectado automáticamente por ubicación, navegador o dominio."
  },
  en: {
    footer: "© 2026 SaaSolution SL. A Paradox FZCO company. All rights reserved.",
    emailUs: "Email us",
    language: "Language",
    languageNote: "Language is detected automatically from location, browser, or domain."
  },
  nl: {
    footer: "© 2026 SaaSolution SL. Een bedrijf van Paradox FZCO. Alle rechten voorbehouden.",
    emailUs: "Mail ons",
    language: "Taal",
    languageNote: "Taal wordt automatisch gekozen via locatie, browser of domein."
  },
  de: {
    footer: "© 2026 SaaSolution SL. Ein Unternehmen von Paradox FZCO. Alle Rechte vorbehalten.",
    emailUs: "E-Mail senden",
    language: "Sprache",
    languageNote: "Die Sprache wird automatisch über Standort, Browser oder Domain erkannt."
  }
} satisfies Record<Locale, Record<string, string>>;

export const homeContent = {
  es: {
    heroSubtitle: "Software que mueve resultados.",
    showcaseTitle: "Vitrina de proyectos de SaaSolution SL",
    ecosystem: "Ecosistema de productos en vivo",
    featuredSystem: "Sistema destacado",
    productLayer: "Capa operativa de producto",
    chips: ["IA de flujos", "Automatización", "Paneles"],
    projectTags: {
      Mithaq: "Prenupcial y testamento islámico digital",
      PriorityPlanR: "Planificación y agenda inteligente",
      Viyra: "Automatización internacional de flujos",
      "First Line AI": "Automatización de soporte con agentes IA",
      "Smart NFC Guest Pass": "Acceso digital de invitados",
      "Delicious Fitness": "Comida social y meal prep"
    }
  },
  en: {
    heroSubtitle: "Software that moves the needle.",
    showcaseTitle: "SaaSolution SL Project Showcase",
    ecosystem: "Live Product Ecosystem",
    featuredSystem: "Featured System",
    productLayer: "Product Operating Layer",
    chips: ["Workflow AI", "Automation", "Dashboards"],
    projectTags: {
      Mithaq: "Digital Islamic Prenup & Will",
      PriorityPlanR: "Smart Planning & Scheduling",
      Viyra: "International workflow automation",
      "First Line AI": "AI Agent Support Automation",
      "Smart NFC Guest Pass": "Digital Guest Access",
      "Delicious Fitness": "Social Food & Meal Prep"
    }
  },
  nl: {
    heroSubtitle: "Software die merkbaar verschil maakt.",
    showcaseTitle: "SaaSolution SL projectoverzicht",
    ecosystem: "Live productecosysteem",
    featuredSystem: "Uitgelicht systeem",
    productLayer: "Product operating layer",
    chips: ["Workflow-AI", "Automatisering", "Dashboards"],
    projectTags: {
      Mithaq: "Digitaal islamitisch huwelijkscontract en testament",
      PriorityPlanR: "Slim plannen en roosteren",
      Viyra: "Internationale workflowautomatisering",
      "First Line AI": "Supportautomatisering met AI-agenten",
      "Smart NFC Guest Pass": "Digitale gasttoegang",
      "Delicious Fitness": "Social food en meal prep"
    }
  },
  de: {
    heroSubtitle: "Software, die Ergebnisse bewegt.",
    showcaseTitle: "SaaSolution SL Projektübersicht",
    ecosystem: "Live-Produktökosystem",
    featuredSystem: "Ausgewähltes System",
    productLayer: "Produktbetriebsebene",
    chips: ["Workflow-KI", "Automatisierung", "Dashboards"],
    projectTags: {
      Mithaq: "Digitaler islamischer Ehevertrag und Testament",
      PriorityPlanR: "Intelligente Planung und Terminierung",
      Viyra: "Internationale Workflow-Automatisierung",
      "First Line AI": "Supportautomatisierung mit KI-Agenten",
      "Smart NFC Guest Pass": "Digitaler Gästezugang",
      "Delicious Fitness": "Social Food und Meal Prep"
    }
  }
} satisfies Record<Locale, {
  heroSubtitle: string;
  showcaseTitle: string;
  ecosystem: string;
  featuredSystem: string;
  productLayer: string;
  chips: string[];
  projectTags: Record<string, string>;
}>;

export const storyContent = {
  es: {
    methodLabel: "- Método SaaSolutions",
    partnerCta: "Colabora con nosotros",
    supportRunning: "El soporte actual se gestiona desde",
    supportOnCall: "El soporte de guardia está en",
    readingLocalTime: "Leyendo hora local...",
    active: "Activo",
    onCall: "Guardia",
    presenceLabel: "- Presencia global",
    officesTitle: "Tres oficinas.",
    officesBody: "El soporte sigue a la oficina cuya jornada local está activa ahora.",
    followSun: "Follow-the-sun - soporte 24/7",
    coverageLabel: "- Cobertura de 24 horas visualizada",
    supportCountry: "País de soporte actual",
    localTime: "hora local",
    slides: [
      ["Sobre SaaSolutions", "Somos SaaSolutions: un estudio de ingenieros y diseñadores que lanza productos cinematográficos para empresas ambiciosas. Desde comercio hasta agentes IA y hardware conectado, construimos lo que tus clientes no dejan de comentar."],
      ["Plataformas AI-first", "Creamos software que combina automatización, arquitectura cloud moderna y flujos de trabajo impulsados por IA."],
      ["Cómo convertimos un brief\nen un lanzamiento destacado.", "El Método SaaSolutions"],
      ["Seis productos.\nUna obsesión por el oficio.", "Cada línea de código, cada pixel y cada interacción están diseñados para que tus clientes sientan algo. Esto es lo que estamos lanzando ahora."],
      ["Colabora con nosotros", "Estamos abiertos a alianzas, pilotos y despliegues internacionales con empresas, gobiernos, operadores y partners tecnológicos."]
    ],
    methodSteps: [
      ["Descubrir", "Auditamos, entrevistamos y ponemos a prueba el brief. Sales con claridad, no con una presentación más."],
      ["Diseñar", "Prototipos de alta fidelidad conectados a datos reales. Cada interacción se defiende con investigación."],
      ["Construir", "Demos semanales. Despliegues en producción desde la primera semana. Sin grandes sorpresas finales."],
      ["Escalar", "Seguimos como partner: rendimiento, crecimiento y expansión a nuevos mercados."]
    ]
  },
  en: {
    methodLabel: "- The SaaSolutions Method",
    partnerCta: "Partner with us",
    supportRunning: "Current support is running from",
    supportOnCall: "Current support is on-call from",
    readingLocalTime: "Reading local time...",
    active: "Active",
    onCall: "On-call",
    presenceLabel: "- Global Presence",
    officesTitle: "Three offices.",
    officesBody: "Support follows the office whose local workday is active now.",
    followSun: "Follow-the-sun - 24/7 support",
    coverageLabel: "- 24-hour coverage, visualized",
    supportCountry: "Current support country",
    localTime: "local time",
    slides: [
      ["About SaaSolutions", "We are SaaSolutions — a studio of engineers and designers shipping cinematic products for ambitious companies. From commerce to AI agents to connected hardware, we build the things your customers can't stop talking about."],
      ["AI-First Platforms", "We create software that combines automation, modern cloud architecture and AI-driven workflows."],
      ["How we turn a brief\ninto a breakout.", "The SaaSolutions Method"],
      ["Six products.\nOne obsession with craft.", "Every line of code, every pixel, every interaction — engineered to make your customers feel something. Here's what we're shipping right now."],
      ["Partner With Us", "We are open to partnerships, pilots and international deployment opportunities with enterprises, governments, operators and technology partners."]
    ],
    methodSteps: [
      ["Discover", "We audit, interview, and pressure-test your brief. You walk out with a clarity document, not a slide deck."],
      ["Design", "High-fidelity prototypes wired to real data. Every interaction defended with research."],
      ["Build", "Weekly demos. Production deploys from week one. No 'big reveal' surprises."],
      ["Scale", "We stay on as a partner - performance tuning, growth loops, and expansion into new markets."]
    ]
  },
  nl: {
    methodLabel: "- De SaaSolutions methode",
    partnerCta: "Werk met ons samen",
    supportRunning: "Huidige support draait vanuit",
    supportOnCall: "Huidige support is stand-by vanuit",
    readingLocalTime: "Lokale tijd lezen...",
    active: "Actief",
    onCall: "Stand-by",
    presenceLabel: "- Wereldwijde aanwezigheid",
    officesTitle: "Drie kantoren.",
    officesBody: "Support volgt het kantoor waarvan de lokale werkdag nu actief is.",
    followSun: "Follow-the-sun - 24/7 support",
    coverageLabel: "- 24-uurs dekking in beeld",
    supportCountry: "Huidig supportland",
    localTime: "lokale tijd",
    slides: [
      ["Over SaaSolutions", "Wij zijn SaaSolutions: een studio van engineers en designers die filmische producten bouwen voor ambitieuze bedrijven. Van commerce tot AI-agenten en connected hardware: wij bouwen wat klanten blijven bespreken."],
      ["AI-first platforms", "We maken software die automatisering, moderne cloudarchitectuur en AI-gedreven workflows combineert."],
      ["Hoe we een briefing\nomzetten in doorbraak.", "De SaaSolutions methode"],
      ["Zes producten.\nEen obsessie voor vakwerk.", "Elke regel code, elke pixel en elke interactie is gemaakt om klanten iets te laten voelen. Dit bouwen we nu."],
      ["Werk met ons samen", "We staan open voor partnerships, pilots en internationale uitrol met bedrijven, overheden, operators en technologiepartners."]
    ],
    methodSteps: [
      ["Ontdekken", "We auditen, interviewen en testen je briefing. Je krijgt helderheid, geen extra slidedeck."],
      ["Ontwerpen", "High-fidelity prototypes met echte data. Elke interactie wordt onderbouwd met onderzoek."],
      ["Bouwen", "Wekelijkse demo's. Productie-deploys vanaf week een. Geen grote onthulling aan het einde."],
      ["Schalen", "We blijven partner voor performance, groei en uitbreiding naar nieuwe markten."]
    ]
  },
  de: {
    methodLabel: "- Die SaaSolutions Methode",
    partnerCta: "Mit uns arbeiten",
    supportRunning: "Aktueller Support läuft aus",
    supportOnCall: "Aktueller Bereitschaftssupport aus",
    readingLocalTime: "Lokale Zeit wird gelesen...",
    active: "Aktiv",
    onCall: "Bereitschaft",
    presenceLabel: "- Globale Präsenz",
    officesTitle: "Drei Büros.",
    officesBody: "Der Support folgt dem Büro, dessen lokaler Arbeitstag gerade aktiv ist.",
    followSun: "Follow-the-sun - 24/7 Support",
    coverageLabel: "- 24-Stunden-Abdeckung visualisiert",
    supportCountry: "Aktuelles Support-Land",
    localTime: "Ortszeit",
    slides: [
      ["Über SaaSolutions", "Wir sind SaaSolutions: ein Studio aus Engineers und Designern, das cineastische Produkte für ambitionierte Unternehmen liefert. Von Commerce über KI-Agenten bis zu vernetzter Hardware bauen wir Dinge, über die Kunden sprechen."],
      ["AI-first Plattformen", "Wir entwickeln Software, die Automatisierung, moderne Cloud-Architektur und KI-gestützte Workflows verbindet."],
      ["Wie wir ein Briefing\nin einen Durchbruch verwandeln.", "Die SaaSolutions Methode"],
      ["Sechs Produkte.\nEine Obsession für Handwerk.", "Jede Codezeile, jeder Pixel und jede Interaktion ist darauf ausgelegt, bei Kunden Wirkung zu erzeugen. Das liefern wir gerade."],
      ["Mit uns arbeiten", "Wir sind offen für Partnerschaften, Piloten und internationale Deployments mit Unternehmen, Regierungen, Betreibern und Technologiepartnern."]
    ],
    methodSteps: [
      ["Entdecken", "Wir auditieren, interviewen und prüfen dein Briefing. Am Ende steht Klarheit statt Foliensatz."],
      ["Designen", "High-Fidelity-Prototypen mit echten Daten. Jede Interaktion ist durch Research begründet."],
      ["Bauen", "Wöchentliche Demos. Produktiv-Deployments ab Woche eins. Keine große Überraschung am Ende."],
      ["Skalieren", "Wir bleiben Partner für Performance, Growth-Loops und Expansion in neue Märkte."]
    ]
  }
} satisfies Record<Locale, Record<string, string | string[][]>>;

export const footerContent = {
  es: {
    headline: "Software práctico para mercados internacionales.",
    body: "SaaSolutions construye y opera productos de software prácticos para empresas, gobiernos y mercados internacionales.",
    aria: "Enlaces de pie de página",
    groups: [
      ["Empresa", ["Sobre nosotros", "Misión y visión", "Carreras / Vacantes", "Partners", "Contacto"]],
      ["Productos", ["PriorityPlanR", "Mithaq", "First Line AI", "Delicious Fitness", "Smart NFC"]],
      ["Recursos", ["Blog", "Centro de ayuda", "Documentación", "API", "Soporte"]],
      ["Legal", ["Privacidad", "Términos y condiciones", "Cookies", "Acuerdo de procesamiento de datos", "Seguridad"]],
      ["Social", ["LinkedIn", "Instagram", "YouTube", "X"]]
    ]
  },
  en: {
    headline: "Practical software for international markets.",
    body: "SaaSolutions builds and operates practical software products for businesses, governments, and international markets.",
    aria: "Footer links",
    groups: [
      ["Company", ["About", "Mission & Vision", "Careers / Vacancies", "Partners", "Contact"]],
      ["Products", ["PriorityPlanR", "Mithaq", "First Line AI", "Delicious Fitness", "Smart NFC"]],
      ["Resources", ["Blog", "Help Center", "Documentation", "API", "Support"]],
      ["Legal", ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Data Processing Agreement", "Security"]],
      ["Social", ["LinkedIn", "Instagram", "YouTube", "X"]]
    ]
  },
  nl: {
    headline: "Praktische software voor internationale markten.",
    body: "SaaSolutions bouwt en beheert praktische softwareproducten voor bedrijven, overheden en internationale markten.",
    aria: "Footerlinks",
    groups: [
      ["Bedrijf", ["Over ons", "Missie en visie", "Carrières / Vacatures", "Partners", "Contact"]],
      ["Producten", ["PriorityPlanR", "Mithaq", "First Line AI", "Delicious Fitness", "Smart NFC"]],
      ["Resources", ["Blog", "Helpcenter", "Documentatie", "API", "Support"]],
      ["Juridisch", ["Privacybeleid", "Voorwaarden", "Cookiebeleid", "Verwerkersovereenkomst", "Beveiliging"]],
      ["Sociaal", ["LinkedIn", "Instagram", "YouTube", "X"]]
    ]
  },
  de: {
    headline: "Praktische Software für internationale Märkte.",
    body: "SaaSolutions entwickelt und betreibt praktische Softwareprodukte für Unternehmen, Regierungen und internationale Märkte.",
    aria: "Footer-Links",
    groups: [
      ["Unternehmen", ["Über uns", "Mission und Vision", "Karriere / Stellen", "Partner", "Kontakt"]],
      ["Produkte", ["PriorityPlanR", "Mithaq", "First Line AI", "Delicious Fitness", "Smart NFC"]],
      ["Ressourcen", ["Blog", "Help Center", "Dokumentation", "API", "Support"]],
      ["Rechtliches", ["Datenschutz", "AGB", "Cookie-Richtlinie", "Auftragsverarbeitung", "Sicherheit"]],
      ["Social", ["LinkedIn", "Instagram", "YouTube", "X"]]
    ]
  }
} satisfies Record<Locale, { headline: string; body: string; aria: string; groups: [string, string[]][] }>;

export const partnersContent = {
  es: {
    startProject: "- Empezar un proyecto",
    titleA: "Construyamos algo ",
    titleB: "digno de conversación.",
    body: "Cuéntanos el producto que tienes en mente. Te responderá un fundador, no un bot comercial, en un día hábil.",
    signal: "La señal - mensual",
    signalBody: "Un email útil al mes. Lanzamientos, experimentos y herramientas que no dejamos de usar. Sin relleno.",
    subscribe: "Suscribirse",
    emailPlaceholder: "tu@empresa.com",
    formTitle: "Formulario para empezar un proyecto",
    name: "Tu nombre",
    workEmail: "Email de trabajo",
    company: "Empresa (opcional)",
    projectType: "Tipo de proyecto",
    budget: "Presupuesto (opcional)",
    message: "Cuéntanos sobre ello",
    messagePlaceholder: "¿Qué estás construyendo? ¿Para quién? ¿Cuál es la fecha límite?",
    consent: "Al enviar, aceptas que te contactemos sobre tu consulta.",
    send: "Enviar mensaje",
    projectTypes: ["Plataforma web", "App móvil", "Agente IA", "Hardware + web", "Sistema de diseño", "Otro"],
    steps: [["Llamada de descubrimiento", "30 min, gratis, sin pitch"], ["Propuesta", "Alcance y precio en 5 días hábiles"], ["Kickoff", "Demos semanales desde la primera semana"]]
  },
  en: {
    startProject: "- Start a project",
    titleA: "Let's build something ",
    titleB: "worth talking about.",
    body: "Tell us about the product you have in mind. You'll hear back from a founder, not a sales bot, within one business day.",
    signal: "The signal - monthly",
    signalBody: "One sharp email a month. Product launches, experiments, and tools we can't stop using. No fluff.",
    subscribe: "Subscribe",
    emailPlaceholder: "you@company.com",
    formTitle: "Start a project form",
    name: "Your name",
    workEmail: "Work email",
    company: "Company (optional)",
    projectType: "Project type",
    budget: "Budget (optional)",
    message: "Tell us about it",
    messagePlaceholder: "What are you building? Who is it for? What's the deadline?",
    consent: "By submitting, you agree to be contacted about your inquiry.",
    send: "Send message",
    projectTypes: ["Web Platform", "Mobile App", "AI Agent", "Hardware + Web", "Design System", "Other"],
    steps: [["Discovery call", "30 min, free, no pitch"], ["Proposal", "Scoped and priced in 5 business days"], ["Kickoff", "Weekly demos from week one"]]
  },
  nl: {
    startProject: "- Start een project",
    titleA: "Laten we iets bouwen ",
    titleB: "waar mensen over praten.",
    body: "Vertel ons over het product dat je in gedachten hebt. Binnen een werkdag hoor je van een founder, niet van een salesbot.",
    signal: "Het signaal - maandelijks",
    signalBody: "Een scherpe mail per maand. Lanceringen, experimenten en tools die we blijven gebruiken. Geen opvulling.",
    subscribe: "Inschrijven",
    emailPlaceholder: "jij@bedrijf.com",
    formTitle: "Projectformulier",
    name: "Je naam",
    workEmail: "Werkmail",
    company: "Bedrijf (optioneel)",
    projectType: "Projecttype",
    budget: "Budget (optioneel)",
    message: "Vertel ons erover",
    messagePlaceholder: "Wat bouw je? Voor wie? Wat is de deadline?",
    consent: "Door te verzenden ga je akkoord dat we contact opnemen over je aanvraag.",
    send: "Bericht sturen",
    projectTypes: ["Webplatform", "Mobiele app", "AI-agent", "Hardware + web", "Designsysteem", "Anders"],
    steps: [["Discovery call", "30 min, gratis, geen pitch"], ["Voorstel", "Scope en prijs binnen 5 werkdagen"], ["Kickoff", "Wekelijkse demo's vanaf week een"]]
  },
  de: {
    startProject: "- Projekt starten",
    titleA: "Lass uns etwas bauen, ",
    titleB: "über das man spricht.",
    body: "Erzähl uns von deinem Produkt. Innerhalb eines Arbeitstags meldet sich ein Founder, kein Sales-Bot.",
    signal: "Das Signal - monatlich",
    signalBody: "Eine starke Mail pro Monat. Launches, Experimente und Tools, die wir ständig nutzen. Kein Füllmaterial.",
    subscribe: "Abonnieren",
    emailPlaceholder: "du@firma.com",
    formTitle: "Projektformular",
    name: "Dein Name",
    workEmail: "Arbeits-E-Mail",
    company: "Unternehmen (optional)",
    projectType: "Projekttyp",
    budget: "Budget (optional)",
    message: "Erzähl uns davon",
    messagePlaceholder: "Was baust du? Für wen? Was ist die Deadline?",
    consent: "Mit dem Absenden stimmst du zu, dass wir dich zu deiner Anfrage kontaktieren.",
    send: "Nachricht senden",
    projectTypes: ["Webplattform", "Mobile App", "KI-Agent", "Hardware + Web", "Designsystem", "Andere"],
    steps: [["Discovery Call", "30 Min., kostenlos, kein Pitch"], ["Angebot", "Scope und Preis in 5 Arbeitstagen"], ["Kickoff", "Wöchentliche Demos ab Woche eins"]]
  }
} satisfies Record<Locale, Record<string, string | string[] | string[][]>>;

export const careersContent = {
  es: {
    openApplication: "Solicitud abierta",
    capabilitiesLabel: "- Capacidades",
    heroTitle: "Un estudio full-stack.",
    heroKicker: "Un equipo. Todas las disciplinas.",
    heroBody: "No pasamos el trabajo entre silos. Diseñadores, ingenieros y estrategas se sientan en la misma mesa para que tu producto salga sin compromisos.",
    vacanciesLabel: "- Vacantes",
    vacanciesTitle: "Contratamos en tres ubicaciones.",
    vacanciesBody: "Estamos formando tres pods de producto: Ceuta HQ, Asunción y Cebu City. Cada ubicación tendrá tres desarrolladores full-stack y un lead. Ceuta HQ también aloja el puesto de HR y operaciones.",
    detailsCta: "Ver más detalles",
    totals: ["Vacantes full-stack", "Engineering leads", "HR admin en Ceuta HQ"],
    capabilityItems: [
      ["Plataformas web y móviles", "React, Next.js y apps nativas de producción, diseñadas para escalar y encantar."],
      ["Agentes IA y automatización", "Flujos LLM, agentes de voz y copilotos internos que se lanzan de verdad."],
      ["Estrategia de producto", "De descubrimiento 0-a-1 a lanzamiento con sprints lean que comprimen trimestres en semanas."],
      ["Sistemas de diseño", "UI kits con motion y tokens para mantener tu marca consistente en cada superficie."],
      ["Cloud y DevOps", "Infraestructura segura y observable en AWS, GCP y edge."],
      ["Growth engineering", "Experimentos A/B, analytics y conversión integrados en cada release."]
    ],
    roles: {
      fullStack: ["Desarrollador Full-Stack", "Ingeniería", "Construye features, integraciones, paneles y sistemas internos en el portfolio de SaaSolutions."],
      lead: ["Engineering Lead", "Liderazgo", "Responsable del ritmo de entrega, calidad de código, dirección técnica y mentoría del pod."],
      hr: ["HR & Operations Admin", "Operaciones HQ", "Gestiona recruiting, onboarding, documentación HR y operaciones de personas desde Ceuta HQ."]
    },
    locations: {
      ceuta: ["Sede global", "Híbrido / horario Europa"],
      asuncion: ["Hub Americas", "Híbrido / horario LATAM"],
      cebu: ["Hub soporte APAC", "Híbrido / horario APAC"]
    }
  },
  en: {
    openApplication: "Open application",
    capabilitiesLabel: "- Capabilities",
    heroTitle: "A full-stack studio.",
    heroKicker: "One team. Every discipline.",
    heroBody: "We don't hand off between silos. Designers, engineers, and strategists sit at the same table, so your product ships without compromise.",
    vacanciesLabel: "- Vacancies",
    vacanciesTitle: "Hiring across three locations.",
    vacanciesBody: "We are building three focused product pods: Ceuta HQ, Asuncion, and Cebu City. Every location gets three full-stack developers and one lead. Ceuta HQ also hosts the HR and operations admin role.",
    detailsCta: "Check for more details",
    totals: ["Full-stack vacancies", "Engineering leads", "Ceuta HQ HR admin"],
    capabilityItems: [
      ["Web & Mobile Platforms", "Production-grade React, Next.js, and native apps engineered for scale and designed for delight."],
      ["AI Agents & Automation", "Custom LLM workflows, voice agents, and internal copilots that actually ship, not demos."],
      ["Product Strategy", "From 0-to-1 discovery to launch, we run lean sprints that compress quarters into weeks."],
      ["Design Systems", "Motion-rich, token-driven UI kits that keep your brand consistent across every surface."],
      ["Cloud & DevOps", "Secure, observable infrastructure across AWS, GCP, and the edge, built to sleep through 3AM."],
      ["Growth Engineering", "A/B experiments, analytics pipelines, and conversion optimization wired into every release."]
    ],
    roles: {
      fullStack: ["Full-Stack Developer", "Engineering", "Build product features, integrations, dashboards, and internal systems across the SaaSolutions product portfolio."],
      lead: ["Engineering Lead", "Leadership", "Own delivery rhythm, code quality, technical direction, and mentoring for the local engineering pod."],
      hr: ["HR & Operations Admin", "HQ Operations", "Handle recruiting coordination, onboarding, HR paperwork, team records, and cross-office people operations from Ceuta HQ."]
    },
    locations: {
      ceuta: ["Global Headquarters", "Hybrid / Europe hours"],
      asuncion: ["Americas Hub", "Hybrid / LATAM hours"],
      cebu: ["APAC Support Hub", "Hybrid / APAC hours"]
    }
  },
  nl: {
    openApplication: "Open sollicitatie",
    capabilitiesLabel: "- Mogelijkheden",
    heroTitle: "Een full-stack studio.",
    heroKicker: "Eén team. Elke discipline.",
    heroBody: "We dragen niet over tussen silo's. Designers, engineers en strategen zitten aan dezelfde tafel, zodat je product zonder compromis live gaat.",
    vacanciesLabel: "- Vacatures",
    vacanciesTitle: "We werven op drie locaties.",
    vacanciesBody: "We bouwen drie productpods: Ceuta HQ, Asuncion en Cebu City. Elke locatie krijgt drie full-stack developers en een lead. Ceuta HQ heeft ook de HR- en operationsrol.",
    detailsCta: "Meer details bekijken",
    totals: ["Full-stack vacatures", "Engineering leads", "Ceuta HQ HR admin"],
    capabilityItems: [
      ["Web- en mobiele platformen", "Productiewaardige React, Next.js en native apps, gebouwd voor schaal en gebruiksplezier."],
      ["AI-agenten en automatisering", "LLM-workflows, voice agents en interne copilots die echt live gaan."],
      ["Productstrategie", "Van 0-naar-1 discovery tot launch met lean sprints die kwartalen in weken persen."],
      ["Designsystemen", "UI kits met motion en tokens die je merk consistent houden."],
      ["Cloud en DevOps", "Veilige, observeerbare infrastructuur op AWS, GCP en edge."],
      ["Growth engineering", "A/B-experimenten, analytics en conversie-optimalisatie in elke release."]
    ],
    roles: {
      fullStack: ["Full-Stack Developer", "Engineering", "Bouw features, integraties, dashboards en interne systemen voor het SaaSolutions portfolio."],
      lead: ["Engineering Lead", "Leiderschap", "Eigenaarschap over ritme, codekwaliteit, technische richting en mentoring van de lokale pod."],
      hr: ["HR & Operations Admin", "HQ Operations", "Beheer recruiting, onboarding, HR-documentatie en people operations vanuit Ceuta HQ."]
    },
    locations: {
      ceuta: ["Wereldwijde hoofdzetel", "Hybride / Europese uren"],
      asuncion: ["Americas Hub", "Hybride / LATAM-uren"],
      cebu: ["APAC Support Hub", "Hybride / APAC-uren"]
    }
  },
  de: {
    openApplication: "Initiativbewerbung",
    capabilitiesLabel: "- Fähigkeiten",
    heroTitle: "Ein Full-Stack-Studio.",
    heroKicker: "Ein Team. Jede Disziplin.",
    heroBody: "Wir übergeben nicht zwischen Silos. Designer, Engineers und Strategen sitzen am selben Tisch, damit dein Produkt ohne Kompromisse live geht.",
    vacanciesLabel: "- Stellen",
    vacanciesTitle: "Wir stellen an drei Standorten ein.",
    vacanciesBody: "Wir bauen drei fokussierte Produktpods: Ceuta HQ, Asuncion und Cebu City. Jeder Standort bekommt drei Full-Stack Developer und einen Lead. Ceuta HQ hostet zusätzlich HR und Operations.",
    detailsCta: "Mehr Details ansehen",
    totals: ["Full-Stack-Stellen", "Engineering Leads", "Ceuta HQ HR Admin"],
    capabilityItems: [
      ["Web- und Mobile-Plattformen", "Produktionsreife React-, Next.js- und native Apps, gebaut für Skalierung und starke UX."],
      ["KI-Agenten und Automatisierung", "LLM-Workflows, Voice Agents und interne Copilots, die wirklich live gehen."],
      ["Produktstrategie", "Von 0-zu-1 Discovery bis Launch mit Lean Sprints, die Quartale auf Wochen verkürzen."],
      ["Designsysteme", "Motion- und tokenbasierte UI Kits für konsistente Markenauftritte."],
      ["Cloud und DevOps", "Sichere, beobachtbare Infrastruktur auf AWS, GCP und Edge."],
      ["Growth Engineering", "A/B-Experimente, Analytics und Conversion-Optimierung in jedem Release."]
    ],
    roles: {
      fullStack: ["Full-Stack Developer", "Engineering", "Baue Features, Integrationen, Dashboards und interne Systeme im SaaSolutions Portfolio."],
      lead: ["Engineering Lead", "Leadership", "Verantworte Lieferrhythmus, Codequalität, technische Richtung und Mentoring des lokalen Pods."],
      hr: ["HR & Operations Admin", "HQ Operations", "Koordiniere Recruiting, Onboarding, HR-Unterlagen und People Operations aus Ceuta HQ."]
    },
    locations: {
      ceuta: ["Globale Zentrale", "Hybrid / Europa-Zeiten"],
      asuncion: ["Americas Hub", "Hybrid / LATAM-Zeiten"],
      cebu: ["APAC Support Hub", "Hybrid / APAC-Zeiten"]
    }
  }
} satisfies Record<Locale, {
  openApplication: string;
  capabilitiesLabel: string;
  heroTitle: string;
  heroKicker: string;
  heroBody: string;
  vacanciesLabel: string;
  vacanciesTitle: string;
  vacanciesBody: string;
  detailsCta: string;
  totals: string[];
  capabilityItems: string[][];
  roles: Record<string, string[]>;
  locations: Record<string, string[]>;
}>;

export const rolePageContent = {
  es: {
    back: "Volver a carreras",
    emailApplication: "Enviar solicitud",
    roleDetails: "- Detalles del puesto",
    sections: ["Qué harás", "Perfil ideal", "Beneficios"],
    workHours: "Horario",
    requirements: "Requisitos",
    compensation: "Compensación y beneficios",
    applyNow: "- Solicita ahora",
    sendProfile: "Envía tu perfil.",
    applyBody: "Añade tus datos y sube tu CV. El formulario estático abre un borrador de email para SaaSolution SL; adjunta el CV seleccionado antes de enviarlo.",
    fullName: "Nombre completo",
    email: "Email",
    portfolio: "LinkedIn o portfolio",
    currentLocation: "Ubicación actual",
    resumeUpload: "Subir CV",
    resumeHint: "PDF, DOC o DOCX preferido.",
    why: "¿Por qué este puesto?",
    whyPlaceholder: "Cuéntanos qué has construido, cuáles son tus fortalezas y por qué encaja este puesto.",
    sendApplication: "Enviar solicitud",
    placeholders: ["Jane Doe", "jane@email.com", "https://...", "Ciudad, país"]
  },
  en: {
    back: "Back to careers",
    emailApplication: "Email application",
    roleDetails: "- Role details",
    sections: ["What you will do", "Who fits well", "Benefits"],
    workHours: "Work hours",
    requirements: "Requirements",
    compensation: "Compensation & benefits",
    applyNow: "- Apply now",
    sendProfile: "Send your profile.",
    applyBody: "Add your details and upload your resume. The current static form opens an email draft to SaaSolution SL; attach the selected resume file before sending.",
    fullName: "Full name",
    email: "Email",
    portfolio: "LinkedIn or portfolio",
    currentLocation: "Current location",
    resumeUpload: "Resume upload",
    resumeHint: "PDF, DOC, or DOCX preferred.",
    why: "Why this role?",
    whyPlaceholder: "Tell us what you have built, what you are strong at, and why this role fits.",
    sendApplication: "Send application",
    placeholders: ["Jane Doe", "jane@email.com", "https://...", "City, country"]
  },
  nl: {
    back: "Terug naar carrières",
    emailApplication: "Sollicitatie mailen",
    roleDetails: "- Functiedetails",
    sections: ["Wat je gaat doen", "Wie goed past", "Voordelen"],
    workHours: "Werkuren",
    requirements: "Vereisten",
    compensation: "Vergoeding en voordelen",
    applyNow: "- Solliciteer nu",
    sendProfile: "Stuur je profiel.",
    applyBody: "Vul je gegevens in en upload je cv. Dit statische formulier opent een e-mailconcept voor SaaSolution SL; voeg het gekozen cv-bestand toe voordat je verzendt.",
    fullName: "Volledige naam",
    email: "E-mail",
    portfolio: "LinkedIn of portfolio",
    currentLocation: "Huidige locatie",
    resumeUpload: "Cv uploaden",
    resumeHint: "PDF, DOC of DOCX heeft de voorkeur.",
    why: "Waarom deze rol?",
    whyPlaceholder: "Vertel wat je hebt gebouwd, waar je sterk in bent en waarom deze rol past.",
    sendApplication: "Sollicitatie versturen",
    placeholders: ["Jane Doe", "jane@email.com", "https://...", "Stad, land"]
  },
  de: {
    back: "Zurück zu Karriere",
    emailApplication: "Bewerbung mailen",
    roleDetails: "- Rollendetails",
    sections: ["Was du tun wirst", "Wer gut passt", "Benefits"],
    workHours: "Arbeitszeiten",
    requirements: "Anforderungen",
    compensation: "Vergütung und Benefits",
    applyNow: "- Jetzt bewerben",
    sendProfile: "Sende dein Profil.",
    applyBody: "Füge deine Daten hinzu und lade deinen Lebenslauf hoch. Das statische Formular öffnet einen E-Mail-Entwurf an SaaSolution SL; hänge die ausgewählte Datei vor dem Senden an.",
    fullName: "Vollständiger Name",
    email: "E-Mail",
    portfolio: "LinkedIn oder Portfolio",
    currentLocation: "Aktueller Standort",
    resumeUpload: "Lebenslauf hochladen",
    resumeHint: "PDF, DOC oder DOCX bevorzugt.",
    why: "Warum diese Rolle?",
    whyPlaceholder: "Erzähl uns, was du gebaut hast, worin du stark bist und warum diese Rolle passt.",
    sendApplication: "Bewerbung senden",
    placeholders: ["Jane Doe", "jane@email.com", "https://...", "Stadt, Land"]
  }
} satisfies Record<Locale, Record<string, string | string[]>>;

export const shareContent = {
  es: {
    title: "Compartir esta vacante",
    body: "Envía este puesto a un candidato, partner o alguien de tu red.",
    share: "Compartir",
    text: "Este puesto de SaaSolution SL podría encajar bien:"
  },
  en: {
    title: "Share this vacancy",
    body: "Send this role to a candidate, partner, or someone in your network.",
    share: "Share",
    text: "This SaaSolution SL role could be a strong fit:"
  },
  nl: {
    title: "Deel deze vacature",
    body: "Stuur deze rol naar een kandidaat, partner of iemand in je netwerk.",
    share: "Delen",
    text: "Deze rol bij SaaSolution SL kan goed passen:"
  },
  de: {
    title: "Diese Stelle teilen",
    body: "Sende diese Rolle an Kandidaten, Partner oder jemanden aus deinem Netzwerk.",
    share: "Teilen",
    text: "Diese Rolle bei SaaSolution SL könnte gut passen:"
  }
} satisfies Record<Locale, Record<string, string>>;
