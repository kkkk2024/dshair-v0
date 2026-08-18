import type { Locale } from "../config"

export interface ResourceGuide {
  category: string
  title: string
  description: string
  readTime: string
  level: string
}

export interface ResourceInsight {
  label: string
  source: string
}

export interface ResourceCategory {
  title: string
  items: string[]
}

export interface ResourcesContent {
  metaTitle: string
  metaDescription: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  heroCta: string
  insightsTitle: string
  insightsSubtitle: string
  guidesTitle: string
  guidesSubtitle: string
  categoriesTitle: string
  categoriesSubtitle: string
  ctaTitle: string
  ctaSubtitle: string
  ctaContact: string
  ctaPartner: string
  expertGuides: ResourceGuide[]
  industryInsights: ResourceInsight[]
  knowledgeCategories: ResourceCategory[]
}

export const resourcesContent: Record<Locale, ResourcesContent> = {
  en: {
    metaTitle: "Hair Extension Resources & Guides | D.S HAIR & BEAUTY",
    metaDescription:
      "Free hair extension resources: installation guides, aftercare tips, colour-matching help, and salon business guides. Expert advice from 19 years in the industry.",
    heroBadge: "Expert Knowledge Hub",
    heroTitle: "Resources & Insights for Hair Extension Professionals",
    heroSubtitle:
      "Expert guides, industry data and product knowledge for salon professionals and procurement teams. Stay ahead in the hair extension industry.",
    heroCta: "Browse Expert Guides",
    insightsTitle: "Hair Extension Industry at a Glance",
    insightsSubtitle: "Key data for salon professionals and buyers",
    guidesTitle: "Expert Guides for Salon Professionals",
    guidesSubtitle:
      "Practical knowledge to help you offer better extension services, grow your salon business and stay ahead of the competition.",
    categoriesTitle: "Browse by Topic",
    categoriesSubtitle:
      "Curated knowledge across the key areas that matter to hair extension professionals.",
    ctaTitle: "Stay Ahead of the Industry",
    ctaSubtitle:
      "Follow D.S Hair & Beauty for the latest extension methods, product releases and industry insights — or reach out to discuss your salon's needs.",
    ctaContact: "Contact Our Team",
    ctaPartner: "Join Salon Partner Programme",
    expertGuides: [
      {
        category: "Extension Methods",
        title: "Tape-In vs K-Tip vs Weft: Which Method Is Right for Your Clients?",
        description:
          "A practical guide comparing tape-in, K-tip keratin and hand-tied weft extensions — covering client suitability, application time, cost and aftercare.",
        readTime: "8 min read",
        level: "All Levels",
      },
      {
        category: "Salon Business",
        title: "How to Add Hair Extensions to Your Salon Without Overstocking",
        description:
          "Smart inventory strategy for salons new to extensions. Learn how to start with minimal investment and scale as demand grows.",
        readTime: "6 min read",
        level: "Business",
      },
      {
        category: "Colour Matching",
        title: "The Complete Guide to Matching Hair Extensions to Natural Hair",
        description:
          "From identifying undertones to blending balayage clients — everything stylists need to know about achieving seamless colour matches.",
        readTime: "10 min read",
        level: "Advanced",
      },
      {
        category: "Aftercare",
        title: "Extension Aftercare: What Every Client Needs to Know",
        description:
          "A printable client guide covering washing, brushing, sleeping and maintaining tape-in, K-tip and weft extensions between appointments.",
        readTime: "5 min read",
        level: "Essential",
      },
    ],
    industryInsights: [
      { label: "UK Hair Extension Market Size", source: "Industry Report 2025" },
      { label: "Year-on-Year Growth in Weft Extensions", source: "UK Beauty Industry Data" },
      { label: "Average Extension Lifespan", source: "Professional Standard" },
      { label: "Clients Requesting Natural Colour", source: "D.S Hair Beauty Client Survey" },
    ],
    knowledgeCategories: [
      {
        title: "Extension Method Guides",
        items: [
          "Tape-In Application & Removal",
          "K-Tip Keratin Bonding Technique",
          "Nano Ring Installation",
          "Hand-Tied Weft Sewing-In",
          "Butterfly Weft for Volume",
        ],
      },
      {
        title: "Industry Insights",
        items: [
          "UK Hair Extension Market Trends 2025",
          "Why Remy Hair Matters",
          "The Rise of Weft Extensions in UK Salons",
          "Balayage Extensions: A Growing Demand",
        ],
      },
      {
        title: "Product Knowledge",
        items: [
          "Understanding Hair Grade & Quality",
          "100% Remy vs Non-Remy: What&apos;s the Difference?",
          "How to Care for Hair Extensions",
          "Storage & Longevity Tips",
        ],
      },
      {
        title: "FAQs & Troubleshooting",
        items: [
          "Client Suitability Assessment",
          "Common Extension Problems & Fixes",
          "Extension Removal Best Practices",
          "Aftercare Product Recommendations",
        ],
      },
    ],
  },
  de: {
    metaTitle: "Haarverlängerungs-Ressourcen & Ratgeber | D.S HAIR & BEAUTY",
    metaDescription:
      "Kostenlose Ressourcen zu Haarverlängerungen: Anleitungen zur Anwendung, Pflegetipps, Farbabstimmung und Salon-Business-Guides. Expertentipps aus 19 Jahren Branchenerfahrung.",
    heroBadge: "Experten-Wissenshub",
    heroTitle: "Ressourcen & Einblicke für Haarverlängerungs-Profis",
    heroSubtitle:
      "Expertenratgeber, Branchendaten und Produktwissen für Salonprofis und Beschaffungsteams. Bleiben Sie in der Haarverlängerungsbranche einen Schritt voraus.",
    heroCta: "Expertenratgeber durchsuchen",
    insightsTitle: "Die Haarverlängerungsbranche auf einen Blick",
    insightsSubtitle: "Wichtige Daten für Salonprofis und Einkäufer",
    guidesTitle: "Expertenratgeber für Salonprofis",
    guidesSubtitle:
      "Praktisches Wissen, mit dem Sie bessere Verlängerungs-Dienstleistungen anbieten, Ihr Salongeschäft ausbauen und der Konkurrenz vorausbleiben können.",
    categoriesTitle: "Nach Thema stöbern",
    categoriesSubtitle:
      "Kuratiertes Fachwissen in den Kernbereichen, die für Haarverlängerungs-Profis wichtig sind.",
    ctaTitle: "Bleiben Sie der Branche voraus",
    ctaSubtitle:
      "Folgen Sie D.S Hair & Beauty für die neuesten Verlängerungsmethoden, Produktneuheiten und Brancheneinblicke — oder kontaktieren Sie uns, um die Bedürfnisse Ihres Salons zu besprechen.",
    ctaContact: "Unser Team kontaktieren",
    ctaPartner: "Salon-Partnerprogramm beitreten",
    expertGuides: [
      {
        category: "Verlängerungsmethoden",
        title: "Tape-In vs. K-Tip vs. Weft: Welche Methode ist richtig für Ihre Kundinnen?",
        description:
          "Ein praktischer Leitfaden, der tape-in, K-tip Keratin und handgewebte Weft-Verlängerungen vergleicht — mit Blick auf Kundeneignung, Anwendungsdauer, Kosten und Pflege.",
        readTime: "8 Min. Lesezeit",
        level: "Alle Niveaus",
      },
      {
        category: "Salon-Business",
        title: "So ergänzen Sie Ihren Salon um Haarverlängerungen — ganz ohne Überbestand",
        description:
          "Eine schlaue Lagerstrategie für Salons, die neu im Bereich Verlängerungen sind. Erfahren Sie, wie Sie mit minimalem Aufwand starten und mit wachsender Nachfrage skalieren.",
        readTime: "6 Min. Lesezeit",
        level: "Business",
      },
      {
        category: "Farbabstimmung",
        title: "Der komplette Leitfaden zur Abstimmung von Haarverlängerungen auf Naturhaar",
        description:
          "Von der Bestimmung von Untertönen bis zum Verblenden von balayage-Kundinnen — alles, was Stylisten für nahtlose Farbabstimmungen wissen müssen.",
        readTime: "10 Min. Lesezeit",
        level: "Fortgeschritten",
      },
      {
        category: "Nachsorge",
        title: "Verlängerungs-Pflege: Was jede Kundin wissen muss",
        description:
          "Ein ausdruckbarer Kundenratgeber zu Waschen, Bürsten, Schlafen und Pflege von tape-in-, K-tip- und Weft-Verlängerungen zwischen den Terminen.",
        readTime: "5 Min. Lesezeit",
        level: "Grundlagen",
      },
    ],
    industryInsights: [
      { label: "Marktgröße der Haarverlängerungen in UK", source: "Branchenbericht 2025" },
      { label: "Jährliches Wachstum bei Weft-Verlängerungen", source: "UK-Schönheitsbranche Daten" },
      { label: "Durchschnittliche Lebensdauer von Verlängerungen", source: "Professioneller Standard" },
      { label: "Kundinnen, die natürliche Farbtöne wünschen", source: "D.S Hair Beauty Kundenumfrage" },
    ],
    knowledgeCategories: [
      {
        title: "Leitfäden zu Verlängerungsmethoden",
        items: [
          "Tape-In Anbringung & Entfernung",
          "K-Tip Keratin-Verbindungstechnik",
          "Nano Ring Installation",
          "Hand-Tied Weft Einnähen",
          "Butterfly Weft für Volumen",
        ],
      },
      {
        title: "Branchen-Einblicke",
        items: [
          "UK Haarverlängerungs-Markttrends 2025",
          "Warum Remy-Haar wichtig ist",
          "Der Aufstieg von Weft-Verlängerungen in UK-Salons",
          "balayage-Verlängerungen: Eine wachsende Nachfrage",
        ],
      },
      {
        title: "Produktwissen",
        items: [
          "Haarklassifizierung & Qualität verstehen",
          "100% Remy vs. Non-Remy: What&apos;s the Difference?",
          "So pflegen Sie Haarverlängerungen",
          "Lagerung & Haltbarkeitstipps",
        ],
      },
      {
        title: "FAQs & Fehlerbehebung",
        items: [
          "Eignungsprüfung für Kundinnen",
          "Häufige Verlängerungsprobleme & Lösungen",
          "Bewährte Praktiken zur Entfernung von Verlängerungen",
          "Empfehlungen für Pflegeprodukte",
        ],
      },
    ],
  },
  fr: {
    metaTitle: "Ressources & Guides sur les Extensions Capillaires | D.S HAIR & BEAUTY",
    metaDescription:
      "Ressources gratuites sur les extensions capillaires : guides d'installation, conseils d'entretien, aide pour l'appariement des couleurs et guides pour le business du salon. Conseils d'experts issus de 19 ans d'expérience.",
    heroBadge: "Centre de connaissances d'experts",
    heroTitle: "Ressources & analyses pour les professionnels des extensions capillaires",
    heroSubtitle:
      "Guides d'experts, données sectorielles et connaissances produit pour les professionnels du salon et les équipes d'achat. Restez à la pointe du secteur des extensions capillaires.",
    heroCta: "Parcourir les guides d'experts",
    insightsTitle: "L'industrie des extensions capillaires en un coup d'œil",
    insightsSubtitle: "Données clés pour les professionnels du salon et les acheteurs",
    guidesTitle: "Guides d'experts pour les professionnels du salon",
    guidesSubtitle:
      "Des connaissances pratiques pour vous aider à proposer de meilleurs services d'extensions, développer votre salon et devancer la concurrence.",
    categoriesTitle: "Parcourir par sujet",
    categoriesSubtitle:
      "Un savoir organisé couvrant les domaines clés qui comptent pour les professionnels des extensions capillaires.",
    ctaTitle: "Restez à la pointe du secteur",
    ctaSubtitle:
      "Suivez D.S Hair & Beauty pour les dernières méthodes d'extensions, les lancements produits et les analyses sectorielles — ou contactez-nous pour discuter des besoins de votre salon.",
    ctaContact: "Contacter notre équipe",
    ctaPartner: "Rejoindre le programme partenaire salon",
    expertGuides: [
      {
        category: "Méthodes d'extension",
        title: "Tape-In vs K-Tip vs Weft : quelle méthode choisir pour vos clientes ?",
        description:
          "Un guide pratique comparant les extensions tape-in, à kératine K-tip et à weft tissé main — avec la convenance pour la cliente, le temps de pose, le coût et l'entretien.",
        readTime: "8 min de lecture",
        level: "Tous niveaux",
      },
      {
        category: "Business du salon",
        title: "Comment ajouter les extensions capillaires à votre salon sans surstock",
        description:
          "Une stratégie de gestion des stocks intelligente pour les salons qui découvrent les extensions. Apprenez à démarrer avec un investissement minimal et à évoluer selon la demande.",
        readTime: "6 min de lecture",
        level: "Business",
      },
      {
        category: "Appariement des couleurs",
        title: "Le guide complet pour assortir les extensions aux cheveux naturels",
        description:
          "De l'identification des sous-tons au mélange des clientes balayage — tout ce que les stylistes doivent savoir pour des appariements de couleur parfaits.",
        readTime: "10 min de lecture",
        level: "Avancé",
      },
      {
        category: "Entretien",
        title: "Entretien des extensions : ce que chaque cliente doit savoir",
        description:
          "Un guide client imprimable couvrant le lavage, le brossage, le sommeil et l'entretien des extensions tape-in, K-tip et weft entre les rendez-vous.",
        readTime: "5 min de lecture",
        level: "Essentiel",
      },
    ],
    industryInsights: [
      { label: "Taille du marché des extensions au UK", source: "Rapport sectoriel 2025" },
      { label: "Croissance annuelle des extensions Weft", source: "Données de l'industrie beauté UK" },
      { label: "Durée de vie moyenne d'une extension", source: "Standard professionnel" },
      { label: "Clientes demandant une couleur naturelle", source: "Enquête client D.S Hair Beauty" },
    ],
    knowledgeCategories: [
      {
        title: "Guides des méthodes d'extension",
        items: [
          "Pose & retrait des Tape-In",
          "Technique de collage K-Tip à kératine",
          "Installation Nano Ring",
          "Couture des Hand-Tied Weft",
          "Butterfly Weft pour le volume",
        ],
      },
      {
        title: "Analyses sectorielles",
        items: [
          "Tendances du marché des extensions UK 2025",
          "Pourquoi les cheveux Remy comptent",
          "L'essor des extensions Weft dans les salons UK",
          "Extensions balayage : une demande croissante",
        ],
      },
      {
        title: "Connaissances produit",
        items: [
          "Comprendre le grade & la qualité des cheveux",
          "100% Remy vs Non-Remy : What&apos;s the Difference?",
          "Comment entretenir les extensions capillaires",
          "Conseils de stockage & de durabilité",
        ],
      },
      {
        title: "FAQ & dépannage",
        items: [
          "Évaluation de l'éligibilité des clientes",
          "Problèmes courants d'extension & solutions",
          "Bonnes pratiques pour le retrait des extensions",
          "Recommandations de produits d'entretien",
        ],
      },
    ],
  },
  ar: {
    metaTitle: "موارد وإرشادات الإكسسوارات الشعرية | D.S HAIR & BEAUTY",
    metaDescription:
      "موارد مجانية للإكسسوارات الشعرية: أدلة التركيب، ونصائح العناية، والمساعدة في مطابقة الألوان، وأدلة أعمال الصالون. نصائح خبراء من 19 عاماً في المجال.",
    heroBadge: "مركز معرفة الخبراء",
    heroTitle: "موارد ورؤى لمحترفي الإكسسوارات الشعرية",
    heroSubtitle:
      "أدلة خبراء وبيانات القطاع ومعارف المنتجات لعاملات الصالون وفرق المشتريات. كن سباقاً في مجال الإكسسوارات الشعرية.",
    heroCta: "تصفّح أدلة الخبراء",
    insightsTitle: "قطاع الإكسسوارات الشعرية في لمحة",
    insightsSubtitle: "بيانات أساسية لمحترفي الصالون والمشترين",
    guidesTitle: "أدلة خبراء لمحترفي الصالون",
    guidesSubtitle:
      "معرفة عملية تساعدك على تقديم خدمات إكسسوارات أفضل، وتنمية عمل صالونك، وسبق المنافسة.",
    categoriesTitle: "تصفّح حسب الموضوع",
    categoriesSubtitle:
      "معرفة منتقاة عبر المجالات الرئيسية التي تهم محترفي الإكسسوارات الشعرية.",
    ctaTitle: "كن سباقاً في القطاع",
    ctaSubtitle:
      "تابع D.S Hair & Beauty للاطلاع على أحدث طرق الإكسسوارات وإصدارات المنتجات ورؤى القطاع — أو تواصل معنا لمناقشة احتياجات صالونك.",
    ctaContact: "تواصل مع فريقنا",
    ctaPartner: "انضم إلى برنامج شركاء الصالون",
    expertGuides: [
      {
        category: "طرق الإكسسوارات",
        title: "Tape-In مقابل K-Tip مقابل Weft: أي طريقة تصلح لعميلاتك؟",
        description:
          "دليل عملي يقارن بين إكسسوارات tape-in، وK-tip الكيراتين، وweft المنسوج يدوياً — يغطي مدى ملاءمتها للعميلة، ووقت التركيب، والتكلفة، والعناية.",
        readTime: "8 دقائق قراءة",
        level: "جميع المستويات",
      },
      {
        category: "أعمال الصالون",
        title: "كيف تضيف الإكسسوارات الشعرية إلى صالونك دون مخزون زائد",
        description:
          "استراتيجية ذكية للمخزون للصالونات الجديدة في مجال الإكسسوارات. تعلّم كيف تبدأ باستثمار ضئيل وتتوسّع مع نمو الطلب.",
        readTime: "6 دقائق قراءة",
        level: "أعمال",
      },
      {
        category: "مطابقة الألوان",
        title: "الدليل الشامل لمطابقة الإكسسوارات مع الشعر الطبيعي",
        description:
          "من تحديد الدرجات اللونية إلى دمج عميلات balayage — كل ما يحتاجه مصففو الشعر لمطابقات لون سلسة.",
        readTime: "10 دقائق قراءة",
        level: "متقدم",
      },
      {
        category: "العناية",
        title: "العناية بالإكسسوارات: ما الذي يجب أن تعرفه كل عميلة",
        description:
          "دليل قابل للطباعة للعميلة يغطي الغسل، والتسريح، والنوم، والعناية بإكسسوارات tape-in وK-tip وweft بين المواعيد.",
        readTime: "5 دقائق قراءة",
        level: "أساسي",
      },
    ],
    industryInsights: [
      { label: "حجم سوق الإكسسوارات الشعرية في UK", source: "تقرير القطاع 2025" },
      { label: "النمو السنوي لإكسسوارات Weft", source: "بيانات صناعة التجميل UK" },
      { label: "متوسط عمر الإكسسوار", source: "المعيار المهني" },
      { label: "عميلات يطلبن لوناً طبيعياً", source: "استطلاع عملاء D.S Hair Beauty" },
    ],
    knowledgeCategories: [
      {
        title: "أدلة طرق الإكسسوارات",
        items: [
          "تركيب وإزالة Tape-In",
          "تقنية ربط K-Tip الكيراتيني",
          "تركيب Nano Ring",
          "خياطة Hand-Tied Weft",
          "Butterfly Weft لمزيد من الحجم",
        ],
      },
      {
        title: "رؤى القطاع",
        items: [
          "اتجاهات سوق الإكسسوارات في UK 2025",
          "لماذا يهم شعر Remy",
          "صعود إكسسوارات Weft في صالونات UK",
          "إكسسوارات balayage: طلب متزايد",
        ],
      },
      {
        title: "معرفة المنتج",
        items: [
          "فهم درجة وجودة الشعر",
          "100% Remy مقابل Non-Remy: What&apos;s the Difference?",
          "كيفية العناية بالإكسسوارات الشعرية",
          "نصائح التخزين والاستدامة",
        ],
      },
      {
        title: "الأسئلة الشائعة واستكشاف الأخطاء",
        items: [
          "تقييم ملاءمة العميلة",
          "مشكلات الإكسسوارات الشائعة وحلولها",
          "أفضل الممارسات لإزالة الإكسسوارات",
          "توصيات منتجات العناية",
        ],
      },
    ],
  },
  sv: {
    metaTitle: "Resurser & guider för hårförlängning | D.S HAIR & BEAUTY",
    metaDescription:
      "Gratis resurser för hårförlängning: installationsguider, skötselråd, hjälp med färgmatchning och salongsföretagsguider. Expertråd från 19 år i branschen.",
    heroBadge: "Expertkunskapsnav",
    heroTitle: "Resurser & insikter för proffs inom hårförlängning",
    heroSubtitle:
      "Expertguider, branschdata och produktkunskap för salongsproffs och inköpsteam. Håll dig före i hårförlängningsbranschen.",
    heroCta: "Bläddra bland expertguider",
    insightsTitle: "Hårförlängningsbranschen på ett ögonblick",
    insightsSubtitle: "Nyckeldata för salongsproffs och köpare",
    guidesTitle: "Expertguider för salongsproffs",
    guidesSubtitle:
      "Praktisk kunskap som hjälper dig erbjuda bättre förlängningstjänster, växa din salong och ligga steget före konkurrenterna.",
    categoriesTitle: "Bläddra efter ämne",
    categoriesSubtitle:
      "Kurerad kunskap inom nyckelområdena som betyder mest för proffs inom hårförlängning.",
    ctaTitle: "Håll dig före branschen",
    ctaSubtitle:
      "Följ D.S Hair & Beauty för de senaste förlängningsmetoderna, produktlanseringarna och branschinsikterna — eller hör av dig för att diskutera din salongs behov.",
    ctaContact: "Kontakta vårt team",
    ctaPartner: "Gå med i salongspartnerprogrammet",
    expertGuides: [
      {
        category: "Förlängningsmetoder",
        title: "Tape-In vs K-Tip vs Weft: Vilken metod passar dina kunder?",
        description:
          "En praktisk guide som jämför tape-in, K-tip keratin och handknutna weft-förlängningar — med fokus på kundlämplighet, appliceringstid, kostnad och eftervård.",
        readTime: "8 min läsning",
        level: "Alla nivåer",
      },
      {
        category: "Salongsföretag",
        title: "Så lägger du till hårförlängning i din salong utan överlager",
        description:
          "En smart lagerstrategi för salonger som är nya inom förlängning. Lär dig hur du startar med minimal investering och skalar upp i takt med efterfrågan.",
        readTime: "6 min läsning",
        level: "Företag",
      },
      {
        category: "Färgmatchning",
        title: "Den kompletta guiden för att matcha hårförlängning med naturligt hår",
        description:
          "Från att identifiera undertoner till att blanda balayage-kunder — allt stylister behöver veta för sömlösa färgmatchningar.",
        readTime: "10 min läsning",
        level: "Avancerad",
      },
      {
        category: "Eftervård",
        title: "Förlängningsvård: Vad varje kund behöver veta",
        description:
          "En utskriftsvänlig kundguide om tvätt, borstning, sömn och underhåll av tape-in-, K-tip- och weft-förlängningar mellan besöken.",
        readTime: "5 min läsning",
        level: "Grundläggande",
      },
    ],
    industryInsights: [
      { label: "Storlek på UK:s hårförlängningsmarknad", source: "Branschrapport 2025" },
      { label: "Årlig tillväxt för Weft-förlängningar", source: "UK:s skönhetsbranschdata" },
      { label: "Genomsnittlig livslängd för förlängning", source: "Professionell standard" },
      { label: "Kunder som önskar naturlig färg", source: "D.S Hair Beauty kundundersökning" },
    ],
    knowledgeCategories: [
      {
        title: "Guider för förlängningsmetoder",
        items: [
          "Tape-In applicering & borttagning",
          "K-Tip keratinfästningsteknik",
          "Nano Ring-installation",
          "Hand-Tied Weft infästning",
          "Butterfly Weft för volym",
        ],
      },
      {
        title: "Braninsikter",
        items: [
          "Trender på UK:s hårförlängningsmarknad 2025",
          "Varför Remy-hår spelar roll",
          "Weft-förlängningarnas uppgång i UK-salonger",
          "balayage-förlängningar: En växande efterfrågan",
        ],
      },
      {
        title: "Produktkunskap",
        items: [
          "Förstå hårkvalitet & kvalitetsgrad",
          "100% Remy vs Non-Remy: What&apos;s the Difference?",
          "Så tar du hand om hårförlängningar",
          "Förvaring & hållbarhetstips",
        ],
      },
      {
        title: "Vanliga frågor & felsökning",
        items: [
          "Bedömning av kundlämplighet",
          "Vanliga förlängningsproblem & lösningar",
          "Bästa praxis för borttagning av förlängningar",
          "Rekommendationer för eftervårdsprodukter",
        ],
      },
    ],
  },
  pl: {
    metaTitle: "Zasoby i poradniki o przedłużaniu włosów | D.S HAIR & BEAUTY",
    metaDescription:
      "Bezpłatne zasoby o przedłużaniu włosów: poradniki montażu, wskazówki pielęgnacyjne, pomoc w doborze koloru i przewodniki po biznesie salonu. Eksperckie porady z 19 lat doświadczenia w branży.",
    heroBadge: "Centrum wiedzy eksperckiej",
    heroTitle: "Zasoby i analizy dla specjalistów od przedłużania włosów",
    heroSubtitle:
      "Poradniki ekspertów, dane branżowe i wiedza o produktach dla profesjonalistów salonów i zespołów zakupowych. Wyprzedź konkurencję w branży przedłużania włosów.",
    heroCta: "Przeglądaj poradniki ekspertów",
    insightsTitle: "Branża przedłużania włosów w pigułce",
    insightsSubtitle: "Kluczowe dane dla profesjonalistów salonów i kupujących",
    guidesTitle: "Poradniki ekspertów dla profesjonalistów salonów",
    guidesSubtitle:
      "Praktyczna wiedza, która pomoże Ci oferować lepsze usługi przedłużania, rozwijać salon i wyprzedzać konkurencję.",
    categoriesTitle: "Przeglądaj według tematu",
    categoriesSubtitle:
      "Wyselekcjonowana wiedza z kluczowych obszarów ważnych dla specjalistów od przedłużania włosów.",
    ctaTitle: "Wyprzedź branżę",
    ctaSubtitle:
      "Śledź D.S Hair & Beauty, by poznawać najnowsze metody przedłużania, premiery produktów i analizy branżowe — lub skontaktuj się z nami, by omówić potrzeby Twojego salonu.",
    ctaContact: "Skontaktuj się z naszym zespołem",
    ctaPartner: "Dołącz do programu partnerskiego salonów",
    expertGuides: [
      {
        category: "Metody przedłużania",
        title: "Tape-In kontra K-Tip kontra Weft: Która metoda jest odpowiednia dla Twoich klientek?",
        description:
          "Praktyczny przewodnik porównujący przedłużenia tape-in, keratynowe K-tip i ręcznie tkane weft — obejmujący dopasowanie do klientki, czas aplikacji, koszt i pielęgnację.",
        readTime: "8 min czytania",
        level: "Wszystkie poziomy",
      },
      {
        category: "Biznes salonu",
        title: "Jak dodać przedłużanie włosów do swojego salonu bez nadwyżek magazynowych",
        description:
          "Mądra strategia zapasów dla salonów zaczynających przygodę z przedłużaniami. Dowiedz się, jak zacząć przy minimalnej inwestycji i skalować wraz ze wzrostem popytu.",
        readTime: "6 min czytania",
        level: "Biznes",
      },
      {
        category: "Dobór kolorów",
        title: "Kompletny przewodnik po dopasowywaniu przedłużeń do naturalnych włosów",
        description:
          "Od identyfikacji tonów podstawowych po łączenie u klientek balayage — wszystko, co styliści muszą wiedzieć o uzyskaniu płynnych dopasowań kolorów.",
        readTime: "10 min czytania",
        level: "Zaawansowany",
      },
      {
        category: "Pielęgnacja",
        title: "Pielęgnacja przedłużeń: Co każda klientka powinna wiedzieć",
        description:
          "Drukowalny przewodnik dla klientek obejmujący mycie, szczotkowanie, spanie i utrzymanie przedłużeń tape-in, K-tip i weft między wizytami.",
        readTime: "5 min czytania",
        level: "Podstawowy",
      },
    ],
    industryInsights: [
      { label: "Wielkość rynku przedłużania włosów w UK", source: "Raport branżowy 2025" },
      { label: "Roczny wzrost przedłużeń Weft", source: "Dane brytyjskiej branży beauty" },
      { label: "Średnia żywotność przedłużenia", source: "Standard zawodowy" },
      { label: "Klientki żądające naturalnego koloru", source: "Ankieta klientów D.S Hair Beauty" },
    ],
    knowledgeCategories: [
      {
        title: "Poradniki metod przedłużania",
        items: [
          "Nakładanie i usuwanie Tape-In",
          "Technika klejenia keratyną K-Tip",
          "Instalacja Nano Ring",
          "Wszywanie Hand-Tied Weft",
          "Butterfly Weft na objętość",
        ],
      },
      {
        title: "Analizy branżowe",
        items: [
          "Trendy rynku przedłużania włosów w UK 2025",
          "Dlaczego włosy Remy mają znaczenie",
          "Wzrost przedłużeń Weft w brytyjskich salonach",
          "Przedłużenia balayage: rosnące zapotrzebowanie",
        ],
      },
      {
        title: "Wiedza o produkcie",
        items: [
          "Zrozumienie klasy i jakości włosów",
          "100% Remy a Non-Remy: What&apos;s the Difference?",
          "Jak dbać o przedłużenia włosów",
          "Wskazówki dotyczące przechowywania i trwałości",
        ],
      },
      {
        title: "FAQ i rozwiązywanie problemów",
        items: [
          "Ocena przydatności dla klientki",
          "Typowe problemy z przedłużeniami i ich naprawa",
          "Najlepsze praktyki usuwania przedłużeń",
          "Rekomendacje produktów pielęgnacyjnych",
        ],
      },
    ],
  },
}

export function getResourcesContent(locale: Locale): ResourcesContent {
  return resourcesContent[locale] ?? resourcesContent.en
}
