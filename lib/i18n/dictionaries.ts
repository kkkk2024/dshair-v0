import type { Locale } from './config'

export type Dictionary = {
  ui: {
    announcement: string
    nav: {
      diy: string
      professional: string
      hairCare: string
      accessories: string
      services: string
      blog: string
      whyChooseUs: string
      about: string
      manufacturing: string
      tradeEnquiry: string
      searchPlaceholder: string
      popularSearches: string
      account: string
      // DIY Extensions
      diyClipIn: string
      diyClipInDesc: string
      diyWeft: string
      diyWeftDesc: string
      diyPonytail: string
      diyPonytailDesc: string
      diyFringes: string
      diyFringesDesc: string
      // Professional
      proTapeIn: string
      proTapeInDesc: string
      proKTip: string
      proKTipDesc: string
      proNano: string
      proNanoDesc: string
      proButterfly: string
      proButterflyDesc: string
      proToppers: string
      proToppersDesc: string
      // Hair Care
      careExtension: string
      careExtensionDesc: string
      // Accessories
      accSalonSupplies: string
      accSalonSuppliesDesc: string
      accTools: string
      accToolsDesc: string
      accHeated: string
      accHeatedDesc: string
      accStorage: string
      accStorageDesc: string
      // Services
      svcFindStylist: string
      svcFindStylistDesc: string
      svcColourMatch: string
      svcColourMatchDesc: string
      svcSolutions: string
      svcSolutionsDesc: string
      svcResources: string
      svcResourcesDesc: string
      svcTradeWholesale: string
      svcTradeWholesaleDesc: string
      svcWholesaleHub: string
      svcWholesaleHubDesc: string
      svcCalculator: string
      svcCalculatorDesc: string
      svcSpecs: string
      svcSpecsDesc: string
      svcSalonPartners: string
      svcSalonPartnersDesc: string
      svcAmbassador: string
      svcAmbassadorDesc: string
      svcAcademy: string
      svcAcademyDesc: string
    }
    footer: {
      newsletterTitle: string
      newsletterDesc: string
      emailPlaceholder: string
      subscribe: string
      subscribing: string
      thanks: string
      colShop: string
      colHelp: string
      colAbout: string
      colServices: string
      colForSalons: string
      colManufacturing: string
      shopDiy: string
      shopPro: string
      shopHairCare: string
      shopAccessories: string
      helpContact: string
      helpFaqs: string
      helpShipping: string
      helpReturns: string
      helpColourMatch: string
      aboutStory: string
      aboutPartners: string
      aboutWhy: string
      aboutBlog: string
      forWholesale: string
      forTradeAccount: string
      forSwitch: string
      forCalculator: string
      forWhatsApp: string
      manufWhyDirect: string
      brandDesc: string
      privacy: string
      terms: string
      cookies: string
      location: string
      manufLabel: string
      copyright: string
      company: string
    }
  }
  home: {
    heroEyebrow: string
    heroTitle: string
    heroSubtitle: string
    heroCtaPrimary: string
    heroCtaSecondary: string
    heroBadge: string
    trustTitle: string
    trustYears: string
    trustRemy: string
    trustFactory: string
    trustUK: string
    catTitle: string
    catSubtitle: string
    catTapeIn: string
    catTapeInDesc: string
    catNano: string
    catNanoDesc: string
    catKTip: string
    catKTipDesc: string
    catWeft: string
    catWeftDesc: string
    whyTitle: string
    whyIntro: string
    why1Title: string
    why1Body: string
    why2Title: string
    why2Body: string
    why3Title: string
    why3Body: string
    why4Title: string
    why4Body: string
    plTitle: string
    plBody: string
    plCta: string
    ctaTitle: string
    ctaBody: string
    ctaButton: string
  }
}

const en: Dictionary = {
  ui: {
    announcement:
      'Trade Supplier for UK & EU Salons | Factory-Direct Pricing | Private Label Available | 19+ Years Manufacturing',
    nav: {
      diy: 'DIY Extensions',
      professional: 'Professional',
      hairCare: 'Hair Care',
      accessories: 'Accessories',
      services: 'Services',
      blog: 'Blog',
      whyChooseUs: 'Why Choose Us',
      about: 'About Us',
      manufacturing: 'Manufacturing',
      tradeEnquiry: 'Trade Enquiry',
      searchPlaceholder: 'Search trade products & methods...',
      popularSearches: 'Popular Searches',
      account: 'Account',
      diyClipIn: 'Clip-In',
      diyClipInDesc: 'Easy to apply, natural look',
      diyWeft: 'Weft',
      diyWeftDesc: 'Add fullness effortlessly',
      diyPonytail: 'Ponytail',
      diyPonytailDesc: 'Instant volume and length',
      diyFringes: 'Fringes & Bangs',
      diyFringesDesc: 'Transform your look instantly',
      proTapeIn: 'Tape-In',
      proTapeInDesc: 'Professional grade tape-ins',
      proKTip: 'K-Tip Extensions',
      proKTipDesc: 'Keratin bonded tips',
      proNano: 'Nano Extensions',
      proNanoDesc: 'Nano ring extensions for fine hair',
      proButterfly: 'Butterfly Weft',
      proButterflyDesc: 'Lightweight volume',
      proToppers: 'Hair Toppers',
      proToppersDesc: 'Thinning hair solutions',
      careExtension: 'Extension Care',
      careExtensionDesc: 'Shampoo, conditioner, masks & brushes',
      accSalonSupplies: 'Salon Supplies',
      accSalonSuppliesDesc: 'Nano rings, tape tabs, clips & consumables',
      accTools: 'Extension Tools',
      accToolsDesc: 'Pliers, scissors, clips & installation kits',
      accHeated: 'Heated Styling',
      accHeatedDesc: 'Heated brushes, paddles & styling tools',
      accStorage: 'Storage',
      accStorageDesc: 'Extension storage bags & cases',
      svcFindStylist: 'Find a Stylist',
      svcFindStylistDesc: 'Locate certified professionals near you',
      svcColourMatch: 'Colour Match',
      svcColourMatchDesc: 'Find your perfect shade',
      svcSolutions: 'Solutions',
      svcSolutionsDesc: 'Complete hair extension packages for salons',
      svcResources: 'Resources',
      svcResourcesDesc: 'Expert guides, industry insights & product knowledge',
      svcTradeWholesale: 'Trade Wholesale',
      svcTradeWholesaleDesc: 'Wholesale hair extensions for UK salons',
      svcWholesaleHub: 'Wholesale UK SEO Hub',
      svcWholesaleHubDesc: 'UK salon wholesale and city pages',
      svcCalculator: 'Price Calculator',
      svcCalculatorDesc: 'Estimate your wholesale costs in seconds',
      svcSpecs: 'Extension Specs',
      svcSpecsDesc: 'Compare every extension method side-by-side',
      svcSalonPartners: 'Salon Partners',
      svcSalonPartnersDesc: 'Salon partner programme & benefits',
      svcAmbassador: 'Ambassador',
      svcAmbassadorDesc: 'Join our ambassador programme',
      svcAcademy: 'Academy',
      svcAcademyDesc: 'Professional training & certification',
    },
    footer: {
      newsletterTitle: 'Trade Updates for Salons',
      newsletterDesc:
        'Get trade pricing, new stock alerts, and private-label news — built for salon owners, not consumers.',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      subscribing: 'Subscribing...',
      thanks: 'Thanks for subscribing!',
      colShop: 'Shop',
      colHelp: 'Help',
      colAbout: 'About',
      colServices: 'Services',
      colForSalons: 'For Salons',
      colManufacturing: 'Manufacturing',
      shopDiy: 'DIY Extensions',
      shopPro: 'Professional Extensions',
      shopHairCare: 'Hair Care',
      shopAccessories: 'Accessories',
      helpContact: 'Contact Us',
      helpFaqs: 'FAQs',
      helpShipping: 'Shipping',
      helpReturns: 'Returns',
      helpColourMatch: 'Colour Match',
      aboutStory: 'Our Story',
      aboutPartners: 'Salon Partners',
      aboutWhy: 'Why Choose Us',
      aboutBlog: 'Blog',
      forWholesale: 'Wholesale Enquiry',
      forTradeAccount: 'Trade Account',
      forSwitch: 'Switch Your Trade Supplier',
      forCalculator: 'Trade Price Calculator',
      forWhatsApp: 'Contact → WhatsApp',
      manufWhyDirect: 'Why Manufacturer-Direct',
      brandDesc:
        'Factory-direct trade supplier of 100% Remy human hair extensions for UK & EU salons. Backed by 19 years of manufacturing. Our production arm: wigexporter.com.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      location: 'Manchester, UK · UK & EU Salon Trade · UK Warehouse Launching',
      manufLabel: 'Manufacturing: wigexporter.com',
      copyright: '© {year} D.S HAIR & BEAUTY. All rights reserved.',
      company: 'A trading brand of Kangde Health Technology Co., Ltd.',
    },
  },
  home: {
    heroEyebrow: 'UK & EU SALON TRADE SUPPLIER',
    heroTitle: 'Professional Hair Extensions, Directly from the Manufacturer',
    heroSubtitle:
      '100% Remy human hair for salons, stylists and trade buyers. Factory-direct pricing, private-label options, and a UK-based team that understands salon business.',
    heroCtaPrimary: 'Browse Trade Collections',
    heroCtaSecondary: 'Request Trade Enquiry',
    heroBadge: '100% Remy Human Hair · 19 Years Manufacturing',
    trustTitle: 'Trusted by salons across the UK & EU',
    trustYears: 'Years Manufacturing',
    trustRemy: 'Remy Human Hair',
    trustFactory: 'Factory-Direct',
    trustUK: 'UK-Based Company',
    catTitle: 'Extension methods for every salon service',
    catSubtitle:
      'From fast-turn tape-ins to premium bonded methods — professional ranges built for repeat client work.',
    catTapeIn: 'Tape-In',
    catTapeInDesc: 'Fast application, 6–8 week move-up. The salon workhorse.',
    catNano: 'Nano Ring',
    catNanoDesc: 'Tiny rings, no glue or heat. Ideal for fine hair.',
    catKTip: 'K-Tip',
    catKTipDesc: 'Keratin bonded tips for seamless, long-wear results.',
    catWeft: 'Weft & Toppers',
    catWeftDesc: 'Hand-tied volume and thinning-hair solutions.',
    whyTitle: 'Why salons trade with D.S Hair Beauty',
    whyIntro:
      'We are a UK-based company with our own manufacturing arm. That means you get manufacturer pricing, consistent Remy quality, and a team that speaks salon — not just logistics.',
    why1Title: 'A UK company you can actually reach',
    why1Body:
      'Our team is based in the UK. Trade enquiries, colour matching and re-orders are handled by people who understand your salon, not a distant call centre.',
    why2Title: 'Factory-direct, not reseller markup',
    why2Body:
      'Because we manufacture, you buy at manufacturer pricing. No middleman adding margin on top of margin.',
    why3Title: '100% Remy human hair, consistently',
    why3Body:
      'Remy cuticle-aligned hair behaves like natural hair — it blends, styles and lasts. We keep the grade consistent across every order.',
    why4Title: 'UK delivery from our Manchester warehouse',
    why4Body:
      'For UK orders we ship locally from our Manchester warehouse. For other markets we dispatch factory-direct with the fastest available express courier — so you can promise reliable fulfilment everywhere.',
    plTitle: 'Build your own brand with private label',
    plBody:
      'Launch extensions under your salon’s name — your logo, your colour ring, your packaging. We handle production so you own the margin and the client relationship.',
    plCta: 'Explore Private Label',
    ctaTitle: 'Ready to talk trade?',
    ctaBody:
      'Tell us your salon and the methods you sell. We’ll put together trade pricing and a sample plan that fits your clients.',
    ctaButton: 'Start a Trade Enquiry',
  },
}

const de: Dictionary = {
  ui: {
    announcement:
      'Großhandelslieferant für Salons in UK & EU | Fabrikpreise | Private Label verfügbar | 19+ Jahre Fertigung',
    nav: {
      diy: 'DIY Extensions',
      professional: 'Professional',
      hairCare: 'Hair Care',
      accessories: 'Zubehör',
      services: 'Services',
      blog: 'Blog',
      whyChooseUs: 'Warum wir',
      about: 'Über uns',
      manufacturing: 'Fertigung',
      tradeEnquiry: 'Handelsanfrage',
      searchPlaceholder: 'Handelsprodukte & Methoden suchen...',
      popularSearches: 'Beliebte Suchen',
      account: 'Konto',
      diyClipIn: 'Clip-In',
      diyClipInDesc: 'Einfach anzuwenden, natürlicher Look',
      diyWeft: 'Weft',
      diyWeftDesc: 'Mühelos mehr Fülle',
      diyPonytail: 'Ponytail',
      diyPonytailDesc: 'Sofortige Länge und Volumen',
      diyFringes: 'Pony & Bangs',
      diyFringesDesc: 'Verwandeln Sie Ihren Look im Handumdrehen',
      proTapeIn: 'Tape-In',
      proTapeInDesc: 'Professionelle Tape-Ins',
      proKTip: 'K-Tip Extensions',
      proKTipDesc: 'Keratinverklebte Spitzen',
      proNano: 'Nano Extensions',
      proNanoDesc: 'Nano-Ring Extensions für feines Haar',
      proButterfly: 'Butterfly Weft',
      proButterflyDesc: 'Leichtes Volumen',
      proToppers: 'Hair Toppers',
      proToppersDesc: 'Lösungen bei Haarausdünnung',
      careExtension: 'Extension Care',
      careExtensionDesc: 'Shampoo, Spülung, Masken & Bürsten',
      accSalonSupplies: 'Salonbedarf',
      accSalonSuppliesDesc: 'Nano-Ringe, Tape-Pads, Clips & Verbrauchsmaterial',
      accTools: 'Extension Werkzeug',
      accToolsDesc: 'Zangen, Scheren, Clips & Einbau-Sets',
      accHeated: 'Heißes Styling',
      accHeatedDesc: 'Heißluftbürsten, Paddel & Styling-Werkzeug',
      accStorage: 'Aufbewahrung',
      accStorageDesc: 'Aufbewahrungstaschen & -boxen für Extensions',
      svcFindStylist: 'Stylist finden',
      svcFindStylistDesc: 'Zertifizierte Fachleute in Ihrer Nähe finden',
      svcColourMatch: 'Farbabgleich',
      svcColourMatchDesc: 'Finden Sie Ihren perfekten Ton',
      svcSolutions: 'Lösungen',
      svcSolutionsDesc: 'Komplettpakete für Salons',
      svcResources: 'Wissensbasis',
      svcResourcesDesc: 'Expertenrat, Branchenwissen & Produktknow-how',
      svcTradeWholesale: 'Großhandel',
      svcTradeWholesaleDesc: 'Großhandel Extensions für UK-Salons',
      svcWholesaleHub: 'Wholesale UK Hub',
      svcWholesaleHubDesc: 'UK Salon-Großhandel und Stadtseiten',
      svcCalculator: 'Preisrechner',
      svcCalculatorDesc: 'Berechnen Sie Ihre Großhandelskosten in Sekunden',
      svcSpecs: 'Extension Specs',
      svcSpecsDesc: 'Alle Methoden im Vergleich',
      svcSalonPartners: 'Salon-Partner',
      svcSalonPartnersDesc: 'Partnerprogramm & Vorteile',
      svcAmbassador: 'Botschafter',
      svcAmbassadorDesc: 'Werden Sie Botschafter',
      svcAcademy: 'Akademie',
      svcAcademyDesc: 'Professionelle Ausbildung & Zertifizierung',
    },
    footer: {
      newsletterTitle: 'Branchen-News für Salons',
      newsletterDesc:
        'Erhalten Sie Großhandelspreise, Neuheiten zum Lagerbestand und Private-Label-News — gemacht für Saloninhaber, nicht für Endkunden.',
      emailPlaceholder: 'E-Mail eingeben',
      subscribe: 'Abonnieren',
      subscribing: 'Wird abonniert...',
      thanks: 'Danke fürs Abonnieren!',
      colShop: 'Shop',
      colHelp: 'Hilfe',
      colAbout: 'Über uns',
      colServices: 'Services',
      colForSalons: 'Für Salons',
      colManufacturing: 'Fertigung',
      shopDiy: 'DIY Extensions',
      shopPro: 'Professional Extensions',
      shopHairCare: 'Hair Care',
      shopAccessories: 'Zubehör',
      helpContact: 'Kontakt',
      helpFaqs: 'FAQs',
      helpShipping: 'Versand',
      helpReturns: 'Rückgaben',
      helpColourMatch: 'Farbabgleich',
      aboutStory: 'Unsere Geschichte',
      aboutPartners: 'Salon-Partner',
      aboutWhy: 'Warum wir',
      aboutBlog: 'Blog',
      forWholesale: 'Großhandelsanfrage',
      forTradeAccount: 'Handelskonto',
      forSwitch: 'Lieferanten wechseln',
      forCalculator: 'Preisrechner',
      forWhatsApp: 'Kontakt → WhatsApp',
      manufWhyDirect: 'Warum direkt vom Hersteller',
      brandDesc:
        'Fabrikdirekter Großhandelslieferant von 100% Remy Echthaar-Extensions für Salons in UK & EU. Gestützt auf 19 Jahre Fertigung. Unser Produktionsarm: wigexporter.com.',
      privacy: 'Datenschutz',
      terms: 'AGB',
      cookies: 'Cookie-Richtlinie',
      location: 'Manchester, UK · Salon-Handel UK & EU · UK-Lager in Eröffnung',
      manufLabel: 'Fertigung: wigexporter.com',
      copyright: '© {year} D.S HAIR & BEAUTY. Alle Rechte vorbehalten.',
      company: 'Eine Handelsmarke der Kangde Health Technology Co., Ltd.',
    },
  },
  home: {
    heroEyebrow: 'GROSSHANDELSLIEFERANT FÜR SALONS IN UK & EU',
    heroTitle: 'Professionelle Haar Extensions, direkt vom Hersteller',
    heroSubtitle:
      '100% Remy Echthaar für Salons, Stylisten und Handelskunden. Fabrikpreise, Private-Label-Optionen und ein UK-basiertes Team, das Salongeschäft versteht.',
    heroCtaPrimary: 'Handelskollektionen ansehen',
    heroCtaSecondary: 'Handelsanfrage senden',
    heroBadge: '100% Remy Echthaar · 19 Jahre Fertigung',
    trustTitle: 'Vertraut von Salons in ganz UK & EU',
    trustYears: 'Jahre Fertigung',
    trustRemy: 'Remy Echthaar',
    trustFactory: 'Direkt ab Werk',
    trustUK: 'UK-Unternehmen',
    catTitle: 'Extension-Methoden für jeden Salonservice',
    catSubtitle:
      'Von schnellen Tape-Ins bis zu Premium-Klebemethoden — professionelle Sortimente für wiederkehrende Kundenarbeit.',
    catTapeIn: 'Tape-In',
    catTapeInDesc: 'Schnelle Anwendung, 6–8 Wochen Nachsetzen. Das Salon-Arbeitspferd.',
    catNano: 'Nano Ring',
    catNanoDesc: 'Kleine Ringe, kein Kleber, keine Hitze. Ideal für feines Haar.',
    catKTip: 'K-Tip',
    catKTipDesc: 'Keratinverklebte Spitzen für nahtlose, langlebige Ergebnisse.',
    catWeft: 'Weft & Toppers',
    catWeftDesc: 'Handgebundenes Volumen und Lösungen bei Haarausdünnung.',
    whyTitle: 'Warum Salons mit D.S Hair Beauty handeln',
    whyIntro:
      'Wir sind ein UK-basiertes Unternehmen mit eigenem Fertigungsarm. Das bedeutet: Herstellerpreise, durchgängig Remy-Qualität und ein Team, das Salon spricht — nicht nur Logistik.',
    why1Title: 'Ein UK-Unternehmen, das Sie wirklich erreichen',
    why1Body:
      'Unser Team sitzt in UK. Handelsanfragen, Farbabgleich und Nachbestellungen laufen über Menschen, die Ihren Salon verstehen — kein entferntes Callcenter.',
    why2Title: 'Direkt ab Werk, ohne Wiederverkäufer-Aufschlag',
    why2Body:
      'Da wir fertigen, kaufen Sie zu Herstellerpreisen. Kein Zwischenhändler, der Marge auf Marge legt.',
    why3Title: 'Durchgängig 100% Remy Echthaar',
    why3Body:
      'Remy-Haar mit ausgerichteter Cuticula verhält sich wie natürliches Haar — es mischt, stylt und hält. Wir halten den Grad bei jeder Bestellung gleich.',
    why4Title: 'UK-Lieferung aus unserem Manchester-Lager',
    why4Body:
      'Für UK-Bestellungen liefern wir lokal aus unserem Manchester-Lager. Für andere Märkte versenden wir direkt ab Werk mit dem schnellsten verfügbaren Express-Versand — damit Sie überall verlässliche Lieferung versprechen können.',
    plTitle: 'Aufbau einer eigenen Marke mit Private Label',
    plBody:
      'Bringen Sie Extensions unter dem Namen Ihres Salons heraus — Ihr Logo, Ihr Farbring, Ihre Verpackung. Wir übernehmen die Produktion, damit Sie Marge und Kundenbeziehung besitzen.',
    plCta: 'Private Label entdecken',
    ctaTitle: 'Bereit, über Handel zu sprechen?',
    ctaBody:
      'Erzählen Sie uns von Ihrem Salon und den Methoden, die Sie verkaufen. Wir erstellen Handelspreise und einen Musterplan, der zu Ihren Kunden passt.',
    ctaButton: 'Handelsanfrage starten',
  },
}

const fr: Dictionary = {
  ui: {
    announcement:
      'Fournisseur de gros pour salons au Royaume-Uni et en UE | Prix usine | Private Label disponible | 19+ ans de fabrication',
    nav: {
      diy: 'Extensions DIY',
      professional: 'Professionnel',
      hairCare: 'Soin des cheveux',
      accessories: 'Accessoires',
      services: 'Services',
      blog: 'Blog',
      whyChooseUs: 'Pourquoi nous',
      about: 'À propos',
      manufacturing: 'Fabrication',
      tradeEnquiry: 'Demande pro',
      searchPlaceholder: 'Rechercher produits et méthodes...',
      popularSearches: 'Recherches fréquentes',
      account: 'Compte',
      diyClipIn: 'Clip-In',
      diyClipInDesc: 'Facile à poser, look naturel',
      diyWeft: 'Weft',
      diyWeftDesc: 'Plus de densité sans effort',
      diyPonytail: 'Queue de cheval',
      diyPonytailDesc: 'Longueur et volume instantanés',
      diyFringes: 'Frange & Bangs',
      diyFringesDesc: 'Transformez votre look instantanément',
      proTapeIn: 'Tape-In',
      proTapeInDesc: 'Tape-ins de grade professionnel',
      proKTip: 'Extensions K-Tip',
      proKTipDesc: 'Pointes liées à la kératine',
      proNano: 'Extensions Nano',
      proNanoDesc: 'Extensions à nano-anneaux pour cheveux fins',
      proButterfly: 'Butterfly Weft',
      proButterflyDesc: 'Volume léger',
      proToppers: 'Hair Toppers',
      proToppersDesc: 'Solutions contre la dégradation capillaire',
      careExtension: 'Soin Extensions',
      careExtensionDesc: 'Shampoing, après-shampoing, masques et brosses',
      accSalonSupplies: 'Fournitures salon',
      accSalonSuppliesDesc: 'Nano-anneaux, rubans adhésifs, clips et consommables',
      accTools: 'Outils extensions',
      accToolsDesc: 'Pinces, ciseaux, clips et kits de pose',
      accHeated: 'Styling chaud',
      accHeatedDesc: 'Brosses chauffantes, plaques et outils',
      accStorage: 'Rangement',
      accStorageDesc: 'Sacs et boîtes de rangement pour extensions',
      svcFindStylist: 'Trouver un styliste',
      svcFindStylistDesc: 'Localisez des professionnels certifiés près de vous',
      svcColourMatch: 'Mise en couleur',
      svcColourMatchDesc: 'Trouvez votre nuance parfaite',
      svcSolutions: 'Solutions',
      svcSolutionsDesc: 'Packs complets pour salons',
      svcResources: 'Ressources',
      svcResourcesDesc: 'Guides experts, analyses et savoir produit',
      svcTradeWholesale: 'Grossiste',
      svcTradeWholesaleDesc: 'Grossiste extensions pour salons UK',
      svcWholesaleHub: 'Hub Grossiste UK',
      svcWholesaleHubDesc: 'Grossiste salon UK et pages villes',
      svcCalculator: 'Calculateur de prix',
      svcCalculatorDesc: 'Estimez vos coûts de gros en quelques secondes',
      svcSpecs: 'Specs Extensions',
      svcSpecsDesc: 'Comparez chaque méthode côte à côte',
      svcSalonPartners: 'Partenaires salon',
      svcSalonPartnersDesc: 'Programme et avantages partenaires',
      svcAmbassador: 'Ambassadeur',
      svcAmbassadorDesc: 'Rejoignez notre programme ambassadeur',
      svcAcademy: 'Académie',
      svcAcademyDesc: 'Formation et certification professionnelles',
    },
    footer: {
      newsletterTitle: 'Actualités pro pour salons',
      newsletterDesc:
        'Recevez les prix de gros, les alertes de stock et les nouvelles private label — conçu pour les propriétaires de salon, pas les particuliers.',
      emailPlaceholder: 'Saisissez votre e-mail',
      subscribe: 'S’abonner',
      subscribing: 'Abonnement...',
      thanks: 'Merci de votre abonnement !',
      colShop: 'Boutique',
      colHelp: 'Aide',
      colAbout: 'À propos',
      colServices: 'Services',
      colForSalons: 'Pour les salons',
      colManufacturing: 'Fabrication',
      shopDiy: 'Extensions DIY',
      shopPro: 'Extensions professionnelles',
      shopHairCare: 'Soin des cheveux',
      shopAccessories: 'Accessoires',
      helpContact: 'Nous contacter',
      helpFaqs: 'FAQ',
      helpShipping: 'Livraison',
      helpReturns: 'Retours',
      helpColourMatch: 'Mise en couleur',
      aboutStory: 'Notre histoire',
      aboutPartners: 'Partenaires salon',
      aboutWhy: 'Pourquoi nous',
      aboutBlog: 'Blog',
      forWholesale: 'Demande de gros',
      forTradeAccount: 'Compte pro',
      forSwitch: 'Changer de fournisseur',
      forCalculator: 'Calculateur de prix',
      forWhatsApp: 'Contact → WhatsApp',
      manufWhyDirect: 'Pourquoi direct usine',
      brandDesc:
        'Fournisseur de gros direct usine d’extensions 100% Remy en cheveux humains pour salons au Royaume-Uni et en UE. Soutenu par 19 ans de fabrication. Notre bras de production : wigexporter.com.',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions de service',
      cookies: 'Politique cookies',
      location: 'Manchester, UK · Commerce salon UK & UE · Entrepôt UK en lancement',
      manufLabel: 'Fabrication : wigexporter.com',
      copyright: '© {year} D.S HAIR & BEAUTY. Tous droits réservés.',
      company: 'Une marque commerciale de Kangde Health Technology Co., Ltd.',
    },
  },
  home: {
    heroEyebrow: 'FOURNISSEUR DE GROS POUR SALONS AU ROYAUME-UNI ET EN UE',
    heroTitle: 'Extensions capillaires professionnelles, directement de l’usine',
    heroSubtitle:
      '100% de cheveux Remy humains pour salons, stylistes et acheteurs pro. Prix usine, options private label et une équipe basée au Royaume-Uni qui comprend le métier de salon.',
    heroCtaPrimary: 'Voir les collections pro',
    heroCtaSecondary: 'Demander un devis pro',
    heroBadge: '100% Remy humain · 19 ans de fabrication',
    trustTitle: 'La confiance des salons de tout le Royaume-Uni et de l’UE',
    trustYears: 'Années de fabrication',
    trustRemy: 'Cheveux Remy humains',
    trustFactory: 'Direct usine',
    trustUK: 'Société basée au UK',
    catTitle: 'Des méthodes pour chaque prestation salon',
    catSubtitle:
      'Des tape-ins rapides aux méthodes premium collées — des gammes pro conçues pour un travail client récurrent.',
    catTapeIn: 'Tape-In',
    catTapeInDesc: 'Pose rapide, repose 6–8 semaines. Le cheval de bataille du salon.',
    catNano: 'Nano Ring',
    catNanoDesc: 'Micro-anneaux, sans colle ni chaleur. Idéal cheveux fins.',
    catKTip: 'K-Tip',
    catKTipDesc: 'Pointes liées à la kératine pour un rendu invisible et durable.',
    catWeft: 'Weft & Toppers',
    catWeftDesc: 'Volume à la main et solutions contre la dégradation.',
    whyTitle: 'Pourquoi les salons travaillent avec D.S Hair Beauty',
    whyIntro:
      'Nous sommes une société basée au Royaume-Uni avec notre propre bras de fabrication. Vous obtenez des prix usine, une qualité Remy constante et une équipe qui parle salon — pas seulement logistique.',
    why1Title: 'Une société UK que vous pouvez vraiment joindre',
    why1Body:
      'Notre équipe est basée au Royaume-Uni. Demandes pro, mise en couleur et réapprovisionnements sont gérés par des personnes qui comprennent votre salon, pas un centre d’appels lointain.',
    why2Title: 'Direct usine, sans majoration revendeur',
    why2Body:
      'Comme nous fabriquons, vous achetez au prix usine. Pas d’intermédiaire ajoutant sa marge sur la marge.',
    why3Title: '100% Remy humain, en continu',
    why3Body:
      'Le cheveu Remy à cuticule alignée se comporte comme le cheveu naturel — il se fond, se coiffe et dure. Nous gardons le grade constant à chaque commande.',
    why4Title: 'Livraison UK depuis notre entrepôt de Manchester',
    why4Body:
      'Pour les commandes UK, nous expédions localement depuis notre entrepôt de Manchester. Pour les autres marchés, nous expédions direct usine avec le transporteur express le plus rapide — pour promettre partout une livraison fiable.',
    plTitle: 'Créez votre propre marque en private label',
    plBody:
      'Lancez des extensions sous le nom de votre salon — votre logo, votre anneau de couleurs, votre packaging. Nous gérons la production pour que vous possédiez la marge et la relation client.',
    plCta: 'Découvrir le Private Label',
    ctaTitle: 'Prêt à parler approvisionnement ?',
    ctaBody:
      'Parlez-nous de votre salon et des méthodes que vous vendez. Nous préparons des prix pro et un plan échantillon adapté à vos clientes.',
    ctaButton: 'Lancer une demande pro',
  },
}

const ar: Dictionary = {
  ui: {
    announcement:
      'مورد تجاري للصالونات في المملكة المتحدة والاتحاد الأوروبي | أسعار مباشرة من المصنع | توفر العلامة الخاصة | أكثر من 19 عامًا في التصنيع',
    nav: {
      diy: 'إضافات للاستخدام الذاتي',
      professional: 'احترافي',
      hairCare: 'العناية بالشعر',
      accessories: 'إكسسوارات',
      services: 'خدمات',
      blog: 'المدونة',
      whyChooseUs: 'لماذا نحن',
      about: 'من نحن',
      manufacturing: 'التصنيع',
      tradeEnquiry: 'استفسار تجاري',
      searchPlaceholder: 'ابحث عن المنتجات والطرق التجارية...',
      popularSearches: 'عمليات البحث الشائعة',
      account: 'الحساب',
      diyClipIn: 'كليب-إن',
      diyClipInDesc: 'سهل التطبيق، مظهر طبيعي',
      diyWeft: 'ويفت',
      diyWeftDesc: 'أضف الكثافة بسهولة',
      diyPonytail: 'ذيل حصان',
      diyPonytailDesc: 'طول وحجم فوري',
      diyFringes: 'غرة وبانغز',
      diyFringesDesc: 'غيري إطلالتك في لحظة',
      proTapeIn: 'تيب-إن',
      proTapeInDesc: 'تيب-إن بجودة احترافية',
      proKTip: 'إضافات كي-تيب',
      proKTipDesc: 'أطراف ملتصقة بالكيراتين',
      proNano: 'إضافات نانو',
      proNanoDesc: 'إضافات حلقية نانو للشعر الناعم',
      proButterfly: 'بترفلاي ويفت',
      proButterflyDesc: 'حجم خفيف',
      proToppers: 'توبيرز الشعر',
      proToppersDesc: 'حلول لتساقط الشعر',
      careExtension: 'العناية بالإضافات',
      careExtensionDesc: 'شامبو، بلسم، أقنعة وفرش',
      accSalonSupplies: 'مستلزمات الصالون',
      accSalonSuppliesDesc: 'حلقات نانو، شرائط لاصقة، مشابك ومستهلكات',
      accTools: 'أدوات الإضافات',
      accToolsDesc: 'كماشات، مقصات، مشابك ومجموعات تركيب',
      accHeated: 'تصفيف بالحرارة',
      accHeatedDesc: 'فرش حرارية ولوحات وأدوات',
      accStorage: 'تخزين',
      accStorageDesc: 'حقائب وصناديق تخزين الإضافات',
      svcFindStylist: 'ابحث عن مصفف',
      svcFindStylistDesc: 'حدد محترفين معتمدين بالقرب منك',
      svcColourMatch: 'مطابقة اللون',
      svcColourMatchDesc: 'اعثر على درجتك المثالية',
      svcSolutions: 'حلول',
      svcSolutionsDesc: 'باقات متكاملة للصالونات',
      svcResources: 'مصادر',
      svcResourcesDesc: 'أدلة خبراء ورؤى وخبرة المنتج',
      svcTradeWholesale: 'جملة',
      svcTradeWholesaleDesc: 'جملة الإضافات لصالونات المملكة المتحدة',
      svcWholesaleHub: 'مركز الجملة بالمملكة المتحدة',
      svcWholesaleHubDesc: 'جملة صالون المملكة المتحدة وصفحات المدن',
      svcCalculator: 'حاسبة الأسعار',
      svcCalculatorDesc: 'قدر تكاليف الجملة في ثوانٍ',
      svcSpecs: 'مواصفات الإضافات',
      svcSpecsDesc: 'قارن كل طريقة جنبًا إلى جنب',
      svcSalonPartners: 'شركاء الصالون',
      svcSalonPartnersDesc: 'برنامج وفوائد الشركاء',
      svcAmbassador: 'سفير',
      svcAmbassadorDesc: 'انضم لبرنامج السفراء',
      svcAcademy: 'الأكاديمية',
      svcAcademyDesc: 'تدريب واعتماد احترافي',
    },
    footer: {
      newsletterTitle: 'تحديثات تجارية للصالونات',
      newsletterDesc:
        'احصل على أسعار الجملة وتنبيهات المخزون وأخبار العلامة الخاصة — مصممة لأصحاب الصالونات، لا للمستهلكين.',
      emailPlaceholder: 'أدخل بريدك الإلكتروني',
      subscribe: 'اشترك',
      subscribing: 'جارٍ الاشتراك...',
      thanks: 'شكرًا لاشتراكك!',
      colShop: 'متجر',
      colHelp: 'مساعدة',
      colAbout: 'من نحن',
      colServices: 'خدمات',
      colForSalons: 'للصالونات',
      colManufacturing: 'التصنيع',
      shopDiy: 'إضافات للاستخدام الذاتي',
      shopPro: 'إضافات احترافية',
      shopHairCare: 'العناية بالشعر',
      shopAccessories: 'إكسسوارات',
      helpContact: 'تواصل معنا',
      helpFaqs: 'الأسئلة الشائعة',
      helpShipping: 'الشحن',
      helpReturns: 'الإرجاع',
      helpColourMatch: 'مطابقة اللون',
      aboutStory: 'قصتنا',
      aboutPartners: 'شركاء الصالون',
      aboutWhy: 'لماذا نحن',
      aboutBlog: 'المدونة',
      forWholesale: 'استفسار جملة',
      forTradeAccount: 'حساب تجاري',
      forSwitch: 'غيّر موردك التجاري',
      forCalculator: 'حاسبة أسعار الجملة',
      forWhatsApp: 'تواصل ← واتساب',
      manufWhyDirect: 'لماذا مباشرة من المصنع',
      brandDesc:
        'مورد تجاري مباشر من المصنع لإضافات شعر بشري ريمي 100% لصالونات المملكة المتحدة والاتحاد الأوروبي. مدعوم بـ 19 عامًا من التصنيع. ذراع الإنتاج لدينا: wigexporter.com.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      cookies: 'سياسة ملفات الارتباط',
      location: 'مانشستر، المملكة المتحدة · تجارة الصالونات في المملكة المتحدة والاتحاد الأوروبي · افتتاح المستودع البريطاني قريبًا',
      manufLabel: 'التصنيع: wigexporter.com',
      copyright: '© {year} D.S HAIR & BEAUTY. جميع الحقوق محفوظة.',
      company: 'علامة تجارية تابعة لشركة Kangde Health Technology Co., Ltd.',
    },
  },
  home: {
    heroEyebrow: 'مورد تجاري للصالونات في المملكة المتحدة والاتحاد الأوروبي',
    heroTitle: 'إضافات شعر احترافية، مباشرة من المصنع',
    heroSubtitle:
      'شعر بشري ريمي 100% للصالونات والمصففين والمشترين التجاريين. أسعار مباشرة من المصنع، خيارات العلامة الخاصة، وفريق متمركز في المملكة المتحدة يفهم عمل الصالون.',
    heroCtaPrimary: 'تصفح المجموعات التجارية',
    heroCtaSecondary: 'إرسال استفسار تجاري',
    heroBadge: 'شعر بشري ريمي 100% · أكثر من 19 عامًا في التصنيع',
    trustTitle: 'موثوق به من قبل صالونات في جميع أنحاء المملكة المتحدة والاتحاد الأوروبي',
    trustYears: 'سنوات التصنيع',
    trustRemy: 'شعر بشري ريمي',
    trustFactory: 'مباشرة من المصنع',
    trustUK: 'شركة مقرها المملكة المتحدة',
    catTitle: 'طرق الإضافات لكل خدمة صالون',
    catSubtitle:
      'من تيب-إن السريعة إلى الطرق الفاخرة الملصقة — تشكيلات احترافية مصممة للعمل المتكرر مع العملاء.',
    catTapeIn: 'تيب-إن',
    catTapeInDesc: 'تطبيق سريع، إعادة ضبط كل 6–8 أسابيع. العمل الأساسي للصالون.',
    catNano: 'نانو رينغ',
    catNanoDesc: 'حلقات صغيرة، بدون لاصق أو حرارة. مثالية للشعر الناعم.',
    catKTip: 'كي-تيب',
    catKTipDesc: 'أطراف ملتصقة بالكيراتين لنتائج سلسة تدوم طويلًا.',
    catWeft: 'ويفت وتوبيرز',
    catWeftDesc: 'حجم مربوط يدويًا وحلول لتساقط الشعر.',
    whyTitle: 'لماذا تتعامل الصالونات مع دي.إس هير بيوتي',
    whyIntro:
      'نحن شركة مقرها المملكة المتحدة ولدينا ذراع تصنيع خاص بنا. وهذا يعني أنك تحصل على أسعار المصنع، وجودة ريمي متسقة، وفريق يتحدث لغة الصالون — وليس فقط اللوجستيات.',
    why1Title: 'شركة في المملكة المتحدة يمكنك الوصول إليها فعليًا',
    why1Body:
      'فريقنا متمركز في المملكة المتحدة. استفسارات التجارة، ومطابقة الألوان، وإعادة الطلبات يتولاها أشخاص يفهمون صالونك، وليس مركز اتصال بعيدًا.',
    why2Title: 'مباشرة من المصنع، دون هامش موزع',
    why2Body:
      'بما أننا نصنع، تشتري بأسعار المصنع. لا يوجد وسيط يضيف هامشًا فوق هامش.',
    why3Title: 'شعر بشري ريمي 100%، بشكل متسق',
    why3Body:
      'شعر ريمي ذو القشور المتوائمة يتصرف مثل الشعر الطبيعي — يمتزج ويتصفف ويصمد. نحافظ على الدرجة ثابتة في كل طلب.',
    why4Title: 'توصيل في المملكة المتحدة من مستودع مانشستر لدينا',
    why4Body:
      'بالنسبة لطلبات المملكة المتحدة نشحن محليًا من مستودع مانشستر لدينا. بالنسبة للأسواق الأخرى نشحن مباشرة من المصنع مع أسرع شركة شحن سريع متاحة — حتى تتمكن من الوعد بتوريد موثوق في كل مكان.',
    plTitle: 'ابنِ علامتك التجارية الخاصة',
    plBody:
      'أطلق الإضافات باسم صالونك — شعارك، حلقة ألوانك، تغليفك. نحن نتولى الإنتاج حتى تمتلك الهامش وعلاقة العملاء.',
    plCta: 'استكشف العلامة الخاصة',
    ctaTitle: 'جاهز للحديث عن التجارة؟',
    ctaBody:
      'أخبرنا عن صالونك والطرق التي تبيعها. سنعد أسعار التجارة وخطة عينات تناسب عملاءك.',
    ctaButton: 'ابدأ استفسارًا تجاريًا',
  },
}

const sv: Dictionary = {
  ui: {
    announcement:
      'Partihandlare för salonger i Storbritannien & EU | Pris från fabrik | Private Label tillgängligt | 19+ års tillverkning',
    nav: {
      diy: 'DIY-extensions',
      professional: 'Professionellt',
      hairCare: 'Hårvård',
      accessories: 'Tillbehör',
      services: 'Tjänster',
      blog: 'Blogg',
      whyChooseUs: 'Varför oss',
      about: 'Om oss',
      manufacturing: 'Tillverkning',
      tradeEnquiry: 'Handelsförfrågan',
      searchPlaceholder: 'Sök handelsprodukter och metoder...',
      popularSearches: 'Populära sökningar',
      account: 'Konto',
      diyClipIn: 'Clip-In',
      diyClipInDesc: 'Enkel applicering, naturligt utseende',
      diyWeft: 'Weft',
      diyWeftDesc: 'Mer volym utan ansträngning',
      diyPonytail: 'Hästsvans',
      diyPonytailDesc: 'Omedelbar längd och volym',
      diyFringes: 'Fransar & Bangs',
      diyFringesDesc: 'Förvandla din look direkt',
      proTapeIn: 'Tape-In',
      proTapeInDesc: 'Professionella tape-ins',
      proKTip: 'K-Tip Extensions',
      proKTipDesc: 'Keratinlimmade spetsar',
      proNano: 'Nano Extensions',
      proNanoDesc: 'Nano-ring extensions för fint hår',
      proButterfly: 'Butterfly Weft',
      proButterflyDesc: 'Lättviktig volym',
      proToppers: 'Hair Toppers',
      proToppersDesc: 'Lösningar vid hårförtunning',
      careExtension: 'Extensionvård',
      careExtensionDesc: 'Schampo, balsam, masker och borstar',
      accSalonSupplies: 'Salongstillbehör',
      accSalonSuppliesDesc: 'Nano-ringar, tejp, clips och förbrukningsvaror',
      accTools: 'Extensionverktyg',
      accToolsDesc: 'Tänger, saxar, clips och monteringskit',
      accHeated: 'Värmestyling',
      accHeatedDesc: 'Värmeborstar, platta och verktyg',
      accStorage: 'Förvaring',
      accStorageDesc: 'Förvaringspåsar och fodral för extensions',
      svcFindStylist: 'Hitta en stylist',
      svcFindStylistDesc: 'Hitta certifierade proffs nära dig',
      svcColourMatch: 'Färgmatchning',
      svcColourMatchDesc: 'Hitta din perfekta nyans',
      svcSolutions: 'Lösningar',
      svcSolutionsDesc: 'Kompletta extensionspaket för salonger',
      svcResources: 'Resurser',
      svcResourcesDesc: 'Experthandböcker, branschinsikter och produktkunskap',
      svcTradeWholesale: 'Partihandel',
      svcTradeWholesaleDesc: 'Parti extensions för UK-salonger',
      svcWholesaleHub: 'Parti UK-hubb',
      svcWholesaleHubDesc: 'UK salonparti och stadssidor',
      svcCalculator: 'Priskalkylator',
      svcCalculatorDesc: 'Beräkna dina partikostnader på sekunder',
      svcSpecs: 'Extension Specs',
      svcSpecsDesc: 'Jämför varje metod sida vid sida',
      svcSalonPartners: 'Salongpartners',
      svcSalonPartnersDesc: 'Partnerprogram och förmåner',
      svcAmbassador: 'Ambassadör',
      svcAmbassadorDesc: 'Gå med i vårt ambassadörsprogram',
      svcAcademy: 'Akademi',
      svcAcademyDesc: 'Professionell utbildning och certifiering',
    },
    footer: {
      newsletterTitle: 'Branschnyheter för salonger',
      newsletterDesc:
        'Få partipriser, lageraviseringar och private-label-nyheter — byggt för salongägare, inte konsumenter.',
      emailPlaceholder: 'Ange din e-post',
      subscribe: 'Prenumerera',
      subscribing: 'Prenumererar...',
      thanks: 'Tack för din prenumeration!',
      colShop: 'Butik',
      colHelp: 'Hjälp',
      colAbout: 'Om oss',
      colServices: 'Tjänster',
      colForSalons: 'För salonger',
      colManufacturing: 'Tillverkning',
      shopDiy: 'DIY-extensions',
      shopPro: 'Professionella extensions',
      shopHairCare: 'Hårvård',
      shopAccessories: 'Tillbehör',
      helpContact: 'Kontakta oss',
      helpFaqs: 'Vanliga frågor',
      helpShipping: 'Frakt',
      helpReturns: 'Returer',
      helpColourMatch: 'Färgmatchning',
      aboutStory: 'Vår historia',
      aboutPartners: 'Salongpartners',
      aboutWhy: 'Varför oss',
      aboutBlog: 'Blogg',
      forWholesale: 'Partiförfrågan',
      forTradeAccount: 'Handelskonto',
      forSwitch: 'Byt handelsleverantör',
      forCalculator: 'Priskalkylator',
      forWhatsApp: 'Kontakt → WhatsApp',
      manufWhyDirect: 'Varför direkt från fabrik',
      brandDesc:
        'Partidirektleverantör av 100 % Remy människohårsextensions för salonger i Storbritannien & EU. Backad av 19 års tillverkning. Vår produktionsgren: wigexporter.com.',
      privacy: 'Integritetspolicy',
      terms: 'Användarvillkor',
      cookies: 'Cookiepolicy',
      location: 'Manchester, Storbritannien · Salonghandel Storbritannien & EU · UK-lager öppnas',
      manufLabel: 'Tillverkning: wigexporter.com',
      copyright: '© {year} D.S HAIR & BEAUTY. Alla rättigheter förbehållna.',
      company: 'Ett handelsvarumärke för Kangde Health Technology Co., Ltd.',
    },
  },
  home: {
    heroEyebrow: 'PARTIHANDLARE FÖR SALONGER I STORBRITANNIEN & EU',
    heroTitle: 'Professionella hårförlängningar, direkt från tillverkaren',
    heroSubtitle:
      '100 % Remy människohår för salonger, stylister och handelsköpare. Pris från fabrik, private-label-alternativ och ett team baserat i Storbritannien som förstår salongverksamhet.',
    heroCtaPrimary: 'Bläddra i handelskollektioner',
    heroCtaSecondary: 'Skicka handelsförfrågan',
    heroBadge: '100 % Remy människohår · 19 års tillverkning',
    trustTitle: 'Betrott av salonger i hela Storbritannien & EU',
    trustYears: 'År av tillverkning',
    trustRemy: 'Remy människohår',
    trustFactory: 'Direkt från fabrik',
    trustUK: 'Företag baserat i Storbritannien',
    catTitle: 'Extensionsmetoder för varje salongtjänst',
    catSubtitle:
      'Från snabba tape-in till premiumlimmade metoder — professionella sortiment byggda för återkommande kundarbete.',
    catTapeIn: 'Tape-In',
    catTapeInDesc: 'Snabb applicering, påfyllning var 6–8 vecka. Salongens arbetshäst.',
    catNano: 'Nano Ring',
    catNanoDesc: 'Små ringar, ingen lim eller värme. Idealisk för fint hår.',
    catKTip: 'K-Tip',
    catKTipDesc: 'Keratinlimmade spetsar för sömlösa, hållbara resultat.',
    catWeft: 'Weft & Toppers',
    catWeftDesc: 'Handbunden volym och lösningar vid hårförtunning.',
    whyTitle: 'Varför salonger handlar med D.S Hair Beauty',
    whyIntro:
      'Vi är ett företag baserat i Storbritannien med egen tillverkningsgren. Det betyder att du får fabrikspriser, konsekvent Remy-kvalitet och ett team som talar salong — inte bara logistik.',
    why1Title: 'Ett brittiskt företag du faktiskt kan nå',
    why1Body:
      'Vårt team är baserat i Storbritannien. Handelsförfrågningar, färgmatchning och återbeställningar hanteras av människor som förstår din salong, inte ett avlägset callcenter.',
    why2Title: 'Direkt från fabrik, utan återförsäljarmarginal',
    why2Body:
      'Eftersom vi tillverkar köper du till fabrikspris. Ingen mellanhand som lägger marginal på marginal.',
    why3Title: '100 % Remy människohår, konsekvent',
    why3Body:
      'Remy-hår med anpassad kutikula beter sig som naturligt hår — det smälter in, stylas och håller. Vi håller kvaliteten konstant i varje order.',
    why4Title: 'Leverans i Storbritannien från vårt Manchester-lager',
    why4Body:
      'För brittiska beställningar levererar vi lokalt från vårt Manchester-lager. För andra marknader skickar vi direkt från fabrik med snabbaste tillgängliga express — så att du kan lova pålitlig leverans överallt.',
    plTitle: 'Bygg ditt eget varumärke med private label',
    plBody:
      'Lansera extensions under din salongs namn — din logotyp, din färgring, ditt emballage. Vi sköter produktionen så att du äger marginalen och kundrelationen.',
    plCta: 'Utforska Private Label',
    ctaTitle: 'Redo att prata handel?',
    ctaBody:
      'Berätta om din salong och de metoder du säljer. Vi tar fram handelspriser och en provplan som passar dina kunder.',
    ctaButton: 'Starta en handelsförfrågan',
  },
}

const pl: Dictionary = {
  ui: {
    announcement:
      'Hurtownik dla salonów w Wielkiej Brytanii i UE | Ceny bezpośrednio z fabryki | Dostępny Private Label | 19+ lat produkcji',
    nav: {
      diy: 'Extensions DIY',
      professional: 'Profesjonalne',
      hairCare: 'Pielęgnacja',
      accessories: 'Akcesoria',
      services: 'Usługi',
      blog: 'Blog',
      whyChooseUs: 'Dlaczego my',
      about: 'O nas',
      manufacturing: 'Produkcja',
      tradeEnquiry: 'Zapytanie handlowe',
      searchPlaceholder: 'Szukaj produktów i metod...',
      popularSearches: 'Popularne wyszukiwania',
      account: 'Konto',
      diyClipIn: 'Clip-In',
      diyClipInDesc: 'Łatwa aplikacja, naturalny wygląd',
      diyWeft: 'Weft',
      diyWeftDesc: 'Dodaj objętość bez wysiłku',
      diyPonytail: 'Koński ogon',
      diyPonytailDesc: 'Natychmiastowa długość i objętość',
      diyFringes: 'Grzywka i Bangs',
      diyFringesDesc: 'Zmień swoją stylizację w mgnieniu oka',
      proTapeIn: 'Tape-In',
      proTapeInDesc: 'Taśmowe klasy profesjonalnej',
      proKTip: 'Extensions K-Tip',
      proKTipDesc: 'Końcówki klejone keratyną',
      proNano: 'Extensions Nano',
      proNanoDesc: 'Extensions na nano-pierścienie do cienkich włosów',
      proButterfly: 'Butterfly Weft',
      proButterflyDesc: 'Lekka objętość',
      proToppers: 'Hair Toppers',
      proToppersDesc: 'Rozwiązania przy przerzedzeniach',
      careExtension: 'Pielęgnacja Extensions',
      careExtensionDesc: 'Szampon, odżywka, maski i szczotki',
      accSalonSupplies: 'Wyposażenie salonu',
      accSalonSuppliesDesc: 'Nano-pierścienie, taśmy, clipsy i materiały',
      accTools: 'Narzędzia extensions',
      accToolsDesc: 'Obcęgi, nożyczki, clipsy i zestawy aplikacyjne',
      accHeated: 'Styling na ciepło',
      accHeatedDesc: 'Szczotki grzejące, prostownice i narzędzia',
      accStorage: 'Przechowywanie',
      accStorageDesc: 'Torby i pudełka do przechowywania extensions',
      svcFindStylist: 'Znajdź stylistę',
      svcFindStylistDesc: 'Znajdź certyfikowanych specjalistów w pobliżu',
      svcColourMatch: 'Dobór koloru',
      svcColourMatchDesc: 'Znajdź swój idealny odcień',
      svcSolutions: 'Rozwiązania',
      svcSolutionsDesc: 'Kompletne pakiety extensions dla salonów',
      svcResources: 'Zasoby',
      svcResourcesDesc: 'Poradniki ekspertów, wiedza branżowa i produktowa',
      svcTradeWholesale: 'Hurtownia',
      svcTradeWholesaleDesc: 'Hurt extensions dla salonów w UK',
      svcWholesaleHub: 'Hub Hurtowy UK',
      svcWholesaleHubDesc: 'Hurt salonów UK i strony miast',
      svcCalculator: 'Kalkulator cen',
      svcCalculatorDesc: 'Oszacuj koszty hurtu w sekundy',
      svcSpecs: 'Specyfikacja Extensions',
      svcSpecsDesc: 'Porównaj każdą metodę obok siebie',
      svcSalonPartners: 'Partnerzy salonów',
      svcSalonPartnersDesc: 'Program i korzyści dla partnerów',
      svcAmbassador: 'Ambasador',
      svcAmbassadorDesc: 'Dołącz do programu ambasadorskiego',
      svcAcademy: 'Akademia',
      svcAcademyDesc: 'Profesjonalne szkolenia i certyfikacja',
    },
    footer: {
      newsletterTitle: 'Aktualności handlowe dla salonów',
      newsletterDesc:
        'Otrzymuj ceny hurtowe, alerty o stanie magazynowym i nowości private label — stworzone dla właścicieli salonów, nie konsumentów.',
      emailPlaceholder: 'Wpisz swój e-mail',
      subscribe: 'Subskrybuj',
      subscribing: 'Subskrybowanie...',
      thanks: 'Dziękujemy za subskrypcję!',
      colShop: 'Sklep',
      colHelp: 'Pomoc',
      colAbout: 'O nas',
      colServices: 'Usługi',
      colForSalons: 'Dla salonów',
      colManufacturing: 'Produkcja',
      shopDiy: 'Extensions DIY',
      shopPro: 'Extensions profesjonalne',
      shopHairCare: 'Pielęgnacja',
      shopAccessories: 'Akcesoria',
      helpContact: 'Kontakt',
      helpFaqs: 'FAQ',
      helpShipping: 'Wysyłka',
      helpReturns: 'Zwroty',
      helpColourMatch: 'Dobór koloru',
      aboutStory: 'Nasza historia',
      aboutPartners: 'Partnerzy salonów',
      aboutWhy: 'Dlaczego my',
      aboutBlog: 'Blog',
      forWholesale: 'Zapytanie hurtowe',
      forTradeAccount: 'Konto handlowe',
      forSwitch: 'Zmień dostawcę',
      forCalculator: 'Kalkulator cen hurtowych',
      forWhatsApp: 'Kontakt → WhatsApp',
      manufWhyDirect: 'Dlaczego bezpośrednio z fabryki',
      brandDesc:
        'Bezpośredni hurtowy dostawca 100% ludzkich włosów Remy dla salonów w Wielkiej Brytanii i UE. Wspierany 19-letnim doświadczeniem w produkcji. Nasz dział produkcji: wigexporter.com.',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin',
      cookies: 'Polityka cookies',
      location: 'Manchester, Wielka Brytania · Handel salonowy w WB i UE · Otwarcie magazynu UK wkrótce',
      manufLabel: 'Produkcja: wigexporter.com',
      copyright: '© {year} D.S HAIR & BEAUTY. Wszelkie prawa zastrzeżone.',
      company: 'Marka handlowa Kangde Health Technology Co., Ltd.',
    },
  },
  home: {
    heroEyebrow: 'HURTOWNIK DLA SALONÓW W WIELKIEJ BRYTANII I UE',
    heroTitle: 'Profesjonalne przedłużenia włosów, bezpośrednio od producenta',
    heroSubtitle:
      '100% ludzkie włosy Remy dla salonów, stylistów i klientów handlowych. Ceny bezpośrednio z fabryki, opcje private label i zespół z bazą w Wielkiej Brytanii, który rozumie biznes salonowy.',
    heroCtaPrimary: 'Przeglądaj kolekcje hurtowe',
    heroCtaSecondary: 'Wyślij zapytanie handlowe',
    heroBadge: '100% ludzkie włosy Remy · 19 lat produkcji',
    trustTitle: 'Zaufanie salonów w całej Wielkiej Brytanii i UE',
    trustYears: 'Lat produkcji',
    trustRemy: 'Ludzkie włosy Remy',
    trustFactory: 'Bezpośrednio z fabryki',
    trustUK: 'Firma z siedzibą w Wielkiej Brytanii',
    catTitle: 'Metody extensions dla każdej usługi salonu',
    catSubtitle:
      'Od szybkich tape-in po premium metody klejone — profesjonalne gamy stworzone do powtarzalnej pracy z klientem.',
    catTapeIn: 'Tape-In',
    catTapeInDesc: 'Szybka aplikacja, uzupełnianie co 6–8 tygodni. Koń roboczy salonu.',
    catNano: 'Nano Ring',
    catNanoDesc: 'Małe pierścienie, bez kleju i ciepła. Idealne do cienkich włosów.',
    catKTip: 'K-Tip',
    catKTipDesc: 'Końcówki klejone keratyną dla płynnych, trwałych efektów.',
    catWeft: 'Weft i Toppers',
    catWeftDesc: 'Objętość wiązana ręcznie i rozwiązania przy przerzedzeniach.',
    whyTitle: 'Dlaczego salony handlują z D.S Hair Beauty',
    whyIntro:
      'Jesteśmy firmą z siedzibą w Wielkiej Brytanii z własnym zapleczem produkcyjnym. Oznacza to ceny fabryczne, stale wysoką jakość Remy i zespół, który mówi językiem salonu — nie tylko logistyki.',
    why1Title: 'Brytyjska firma, z którą naprawdę można się skontaktować',
    why1Body:
      'Nasz zespół ma bazę w Wielkiej Brytanii. Zapytania handlowe, dobór koloru i ponowne zamówienia obsługują ludzie, którzy rozumieją Twój salon, a nie odległe call center.',
    why2Title: 'Bezpośrednio z fabryki, bez marży pośrednika',
    why2Body:
      'Ponieważ sami produkujemy, kupujesz po cenach fabrycznych. Żaden pośrednik nie dokłada marży do marży.',
    why3Title: '100% ludzkie włosy Remy, stale',
    why3Body:
      'Włosy Remy z wyrównanymi łuskami zachowują się jak naturalne — wtapiają się, dają się stylizować i trzymają. Trzymamy ten sam gatunek w każdym zamówieniu.',
    why4Title: 'Dostawa w Wielkiej Brytanii z naszego magazynu w Manchesterze',
    why4Body:
      'Zamówienia brytyjskie wysyłamy lokalnie z naszego magazynu w Manchesterze. Na inne rynki wysyłamy bezpośrednio z fabryki najszybszym dostępnym kurierem express — byś mógł obiecywać niezawodną dostawę wszędzie.',
    plTitle: 'Stwórz własną markę z private label',
    plBody:
      'Wprowadź extensions pod nazwą swojego salonu — Twój logo, Twój pierścień kolorów, Twoje opakowanie. My przejmujemy produkcję, byś posiadał marżę i relację z klientem.',
    plCta: 'Poznaj Private Label',
    ctaTitle: 'Gotowy, by porozmawiać o handlu?',
    ctaBody:
      'Opowiedz nam o swoim salonie i metodach, które sprzedajesz. Przygotujemy ceny hurtowe i plan próbek dopasowany do Twoich klientek.',
    ctaButton: 'Rozpocznij zapytanie handlowe',
  },
}

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
