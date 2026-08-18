import type { Locale } from "@/lib/i18n/config"

export interface AboutContent {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  heroTitle: string
  heroSubtitle: string
  ctaPrimary: string
  ctaPrimaryHref: string
  ctaSecondary: string
  ctaSecondaryHref: string
  stats: { stat: string; label: string }[]
  founderEyebrow: string
  founderTitle: string
  founderParas: string[]
  founderPoints: string[]
  timeline: { year: string; title: string; desc: string }[]
  timelineTitle: string
  valuesEyebrow: string
  valuesTitle: string
  valuesSubtitle: string
  values: { title: string; desc: string }[]
  testimonialQuote: string
  testimonialAuthor: string
  ctaTitle: string
  ctaSubtitle: string
  ctaApply: string
  ctaBrowse: string
  ctaBrowseHref: string
}

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    metaTitle: "About Us | D.S HAIR & BEAUTY – Manchester's Premier Hair Extension Supplier",
    metaDescription:
      "19 years of hair extension expertise. D.S HAIR & BEAUTY is Manchester's trusted wholesale supplier of 100% Remy human hair extensions for professional salons.",
    eyebrow: "Our Story",
    heroTitle: "19 Years of Hair.\nOne Obsession: Your Results.",
    heroSubtitle:
      "From China's hair manufacturing heartland to Manchester's finest salons — we bridge the gap between factory quality and salon excellence.",
    ctaPrimary: "Become a Salon Partner",
    ctaPrimaryHref: "/salon-partners",
    ctaSecondary: "Get in Touch",
    ctaSecondaryHref: "/contact",
    stats: [
      { stat: "19+", label: "Years in the Industry" },
      { stat: "100%", label: "Remy Human Hair" },
      { stat: "50+", label: "Colours & Lengths" },
      { stat: "3–5d", label: "Express Delivery" },
    ],
    founderEyebrow: "The Founder",
    founderTitle: "Built on 19 Years of Real Industry Experience",
    founderParas: [
      "D.S HAIR & BEAUTY was founded by a hair industry specialist with over 19 years of experience in Remy human hair sourcing and export. Having spent nearly two decades working directly with China's leading hair manufacturers and supplying to UK markets, our founder saw a clear gap: Manchester's professional salons needed a local, reliable, and truly knowledgeable supplier.",
      "Most suppliers are middlemen. We are not. Our direct factory relationships mean you get better quality, more consistent colour matching, and faster supply — at trade prices that make your salon business more profitable.",
      "We specialise in the products that white hair salons in Manchester actually need: hand-tied wefts, balayage extensions, nano rings, and tape-ins — the methods that demand the best human hair to deliver results your clients will rave about.",
    ],
    founderPoints: [
      "Direct factory relationships in China",
      "Specialist in hand-tied & tape-in wefts",
      "Free colour matching for every salon",
      "Factory-direct express supply",
      "Custom balayage & colour blending",
      "Professional consumables included",
    ],
    timeline: [
      { year: "2007", title: "Started in the industry", desc: "Began supplying Remy human hair to UK wholesalers, building deep factory relationships in China's hair capital." },
      { year: "2015", title: "First direct UK salon clients", desc: "Started working directly with professional salons, cutting out middlemen and delivering better quality at lower prices." },
      { year: "2022", title: "D.S HAIR & BEAUTY founded", desc: "Launched as a dedicated UK brand, combining 15 years of supply chain expertise with a professional salon-first approach." },
      { year: "2026", title: "Manchester Salon Partner Launch", desc: "Launched our Manchester-based salon partner programme, supplying hand-tied wefts, balayage extensions, and professional consumables to salons across the UK & EU." },
    ],
    timelineTitle: "Our Journey",
    valuesEyebrow: "Why Salons Choose Us",
    valuesTitle: "Why Salons Choose Us",
    valuesSubtitle: "We are not just a supplier. We are your hair extension partner.",
    values: [
      { title: "19 Years of Expertise", desc: "Since 2007, we have built deep relationships with China's top Remy hair manufacturers — giving our salon partners access to factory-direct quality at wholesale prices." },
      { title: "100% Remy Human Hair", desc: "Every strand is ethically sourced, cuticle-aligned, and quality-checked before it reaches your salon. No synthetic blends, no shortcuts." },
      { title: "Factory-Direct, Express Supply", desc: "We serve salons across the UK & EU with factory-direct pricing. Selected UK warehouse launching + express 3–5 day shipping on the full range." },
      { title: "Salon Partner Programme", desc: "Join our growing network of professional salons across the UK & EU. Trade pricing, free digital colour catalogue, and dedicated support." },
    ],
    testimonialQuote:
      "The hand-tied wefts from DS Hair are honestly the best I've worked with in 10 years. The colour matching is spot on and delivery is always fast and reliable. My clients love the results.",
    testimonialAuthor: "— Hair Extension Specialist, Manchester",
    ctaTitle: "Ready to Partner With Us?",
    ctaSubtitle:
      "Join our growing network of UK & EU salons working with DS Hair & Beauty. Apply for your trade account today — free digital colour catalogue included with your first order.",
    ctaApply: "Apply for Trade Account",
    ctaBrowse: "Browse Professional Products",
    ctaBrowseHref: "/collections/professional",
  },

  de: {
    metaTitle: "Über Uns | D.S HAIR & BEAUTY – Premium Haarverlängerungen aus Manchester",
    metaDescription:
      "19 Jahre Erfahrung mit Haarverlängerungen. D.S HAIR & BEAUTY ist der vertrauenswürdige Großhändler in Manchester für 100 % echtes Remy-Menschenhaar für professionelle Salons.",
    eyebrow: "Unsere Geschichte",
    heroTitle: "19 Jahre Haar.\nEine Leidenschaft: Ihr Ergebnis.",
    heroSubtitle:
      "Vom Zentrum der Haarproduktion in China bis zu Manchesters besten Salons – wir verbinden Fabrikqualität mit Salon-Exzellenz.",
    ctaPrimary: "Werden Sie Partner-Salon",
    ctaPrimaryHref: "/salon-partners",
    ctaSecondary: "Kontakt aufnehmen",
    ctaSecondaryHref: "/contact",
    stats: [
      { stat: "19+", label: "Jahre Erfahrung" },
      { stat: "100%", label: "Remy Menschenhaar" },
      { stat: "50+", label: "Farben & Längen" },
      { stat: "3–5 T", label: "Express-Lieferung" },
    ],
    founderEyebrow: "Die Gründerin",
    founderTitle: "Aufgebaut auf 19 Jahren echter Branchenerfahrung",
    founderParas: [
      "D.S HAIR & BEAUTY wurde von einer Haar-Expertin mit über 19 Jahren Erfahrung im Einkauf und Export von Remy-Menschenhaar gegründet. Nach fast zwei Jahrzehnten direkter Zusammenarbeit mit Chinas führenden Haarmanufakturen und der Belieferung des britischen Marktes erkannte unsere Gründerin eine klare Lücke: Die professionellen Salons in Manchester brauchten einen lokalen, verlässlichen und wirklich kompetenten Lieferanten.",
      "Die meisten Anbieter sind Zwischenhändler. Wir nicht. Unsere direkten Fabrikbeziehungen bedeuten bessere Qualität, gleichmäßigere Farbabstimmung und schnellere Lieferung – zu Großhandelspreisen, die Ihr Salon-Geschäft profitabler machen.",
      "Wir spezialisieren uns auf die Produkte, die helle Haarsalons in Manchester wirklich brauchen: handgebundene Wefts, Balayage-Extensions, Nano-Ringe und Tape-Ins – die Methoden, die das beste Menschenhaar verlangen, um Ergebnisse zu liefern, von denen Ihre Kunden schwärmen.",
    ],
    founderPoints: [
      "Direkte Fabrikbeziehungen in China",
      "Spezialist für handgebundene & Tape-In-Wefts",
      "Kostenlose Farbabstimmung für jeden Salon",
      "Fabrikdirekter Express-Versand",
      "Individuelles Balayage & Farbmischen",
      "Professionelles Verbrauchsmaterial inklusive",
    ],
    timeline: [
      { year: "2007", title: "Start in der Branche", desc: "Beginn der Belieferung britischer Großhändler mit Remy-Menschenhaar und Aufbau tiefer Fabrikbeziehungen im chinesischen Haarzentrum." },
      { year: "2015", title: "Erste direkte Salon-Kunden in UK", desc: "Direkte Zusammenarbeit mit professionellen Salons, Wegfall von Zwischenhändlern und bessere Qualität zu niedrigeren Preisen." },
      { year: "2022", title: "D.S HAIR & BEAUTY gegründet", desc: "Start als dedizierte UK-Marke, die 15 Jahre Lieferketten-Kompetenz mit einem salonorientierten Ansatz verbindet." },
      { year: "2026", title: "Partner-Programm Manchester gestartet", desc: "Start unseres Partner-Programms mit Sitz in Manchester – handgebundene Wefts, Balayage-Extensions und Profi-Verbrauchsmaterial für Salons in ganz UK & EU." },
    ],
    timelineTitle: "Unser Weg",
    valuesEyebrow: "Warum Salons uns wählen",
    valuesTitle: "Warum Salons uns wählen",
    valuesSubtitle: "Wir sind nicht nur ein Lieferant. Wir sind Ihr Haarverlängerungs-Partner.",
    values: [
      { title: "19 Jahre Erfahrung", desc: "Seit 2007 pflegen wir tiefe Beziehungen zu Chinas Top-Herstellern für Remy-Haar – unseren Partner-Salons gibt das Zugang zu Fabrikqualität zu Großhandelspreisen." },
      { title: "100 % Remy Menschenhaar", desc: "Jede Strähne stammt aus ethischer Quelle, ist cuticula-ausgerichtet und wird geprüft, bevor sie Ihr Salon erreicht. Keine Synthetikmischungen, keine Abkürzungen." },
      { title: "Fabrikdirekt, Express-Versand", desc: "Wir beliefern Salons in ganz UK & EU zu Fabrikpreisen. Ausgewähltes UK-Lager eröffnet + Express-Versand (3–5 Tage) für das gesamte Sortiment." },
      { title: "Partner-Programm", desc: "Treten Sie unserem wachsenden Netzwerk professioneller Salons in UK & EU bei. Großhandelspreise, kostenloser digitaler Farbkatalog und persönliche Betreuung." },
    ],
    testimonialQuote:
      "Die handgebundenen Wefts von DS Hair sind ehrlich gesagt die besten, mit denen ich seit 10 Jahren gearbeitet habe. Die Farbabstimmung stimmt genau und die Lieferung ist immer schnell und verlässlich. Meine Kunden lieben das Ergebnis.",
    testimonialAuthor: "— Haarverlängerungs-Spezialistin, Manchester",
    ctaTitle: "Bereit, mit uns zu kooperieren?",
    ctaSubtitle:
      "Werden Sie Teil unseres wachsenden Netzwerks britischer und europäischer Salons. Beantragen Sie noch heute Ihr Handelskonto – der kostenlose digitale Farbkatalog ist bei Ihrer ersten Bestellung dabei.",
    ctaApply: "Handelskonto beantragen",
    ctaBrowse: "Professionelle Produkte ansehen",
    ctaBrowseHref: "/collections/professional",
  },

  fr: {
    metaTitle: "À propos | D.S HAIR & BEAUTY – Fournisseur premium d'extensions à Manchester",
    metaDescription:
      "19 ans d'expertise en extensions capillaires. D.S HAIR & BEAUTY est le fournisseur grossiste de confiance à Manchester pour les extensions 100 % cheveux humains Remy destinées aux salons professionnels.",
    eyebrow: "Notre histoire",
    heroTitle: "19 ans de cheveux.\nUne obsession : votre résultat.",
    heroSubtitle:
      "Du berceau de la fabrication capillaire en Chine aux meilleurs salons de Manchester – nous relions la qualité d'usine à l'excellence du salon.",
    ctaPrimary: "Devenez salon partenaire",
    ctaPrimaryHref: "/salon-partners",
    ctaSecondary: "Contactez-nous",
    ctaSecondaryHref: "/contact",
    stats: [
      { stat: "19+", label: "Années d'expérience" },
      { stat: "100%", label: "Cheveux humains Remy" },
      { stat: "50+", label: "Couleurs & longueurs" },
      { stat: "3–5 j", label: "Livraison express" },
    ],
    founderEyebrow: "La fondatrice",
    founderTitle: "Bâti sur 19 ans d'expérience réelle dans le secteur",
    founderParas: [
      "D.S HAIR & BEAUTY a été fondé par une spécialiste de la coiffure avec plus de 19 ans d'expérience dans l'approvisionnement et l'exportation de cheveux humains Remy. Après près de deux décennies à travailler directement avec les principaux fabricants chinois et à fournir le marché britannique, notre fondatrice a identifié une lacune évidente : les salons professionnels de Manchester avaient besoin d'un fournisseur local, fiable et véritablement compétent.",
      "La plupart des fournisseurs sont des intermédiaires. Pas nous. Nos relations directes avec les usines vous offrent une meilleure qualité, une correspondance des couleurs plus fiable et un approvisionnement plus rapide – à des prix de gros qui rendent votre salon plus rentable.",
      "Nous sommes spécialisés dans les produits dont les salons à cheveux clairs de Manchester ont réellement besoin : wefts liés main, extensions balayage, nano-anneaux et tape-ins – les techniques qui exigent le meilleur cheveu humain pour des résultats dont vos clientes raffolent.",
    ],
    founderPoints: [
      "Relations directes avec les usines en Chine",
      "Spécialiste des wefts liés main et tape-in",
      "Mise en couleur gratuite pour chaque salon",
      "Approvisionnement express direct usine",
      "Balayage personnalisé et mélange des couleurs",
      "Consommables professionnels inclus",
    ],
    timeline: [
      { year: "2007", title: "Début dans le secteur", desc: "Début de la fourniture de cheveux Remy aux grossistes britanniques, création de relations solides avec les usines du berceau chinois du cheveu." },
      { year: "2015", title: "Premiers salons britanniques directs", desc: "Collaboration directe avec des salons professionnels, suppression des intermédiaires et meilleure qualité à des prix plus bas." },
      { year: "2022", title: "Création de D.S HAIR & BEAUTY", desc: "Lancement en tant que marque britannique dédiée, combinant 15 ans d'expertise de la chaîne d'approvisionnement à une approche salon d'abord." },
      { year: "2026", title: "Lancement du programme partenaire Manchester", desc: "Lancement de notre programme partenaire basé à Manchester, fournissant wefts liés main, extensions balayage et consommables professionnels aux salons de tout le Royaume-Uni et de l'UE." },
    ],
    timelineTitle: "Notre parcours",
    valuesEyebrow: "Pourquoi les salons nous choisissent",
    valuesTitle: "Pourquoi les salons nous choisissent",
    valuesSubtitle: "Nous ne sommes pas qu'un fournisseur. Nous sommes votre partenaire extensions.",
    values: [
      { title: "19 ans d'expertise", desc: "Depuis 2007, nous entretenons des relations solides avec les meilleurs fabricants Remy de Chine – donnant à nos salons partenaires accès à une qualité directe usine à prix de gros." },
      { title: "100 % cheveux humains Remy", desc: "Chaque mèche est éthiquement sourcée, à cuticule alignée et contrôlée avant d'atteindre votre salon. Aucun mélange synthétique, aucun raccourci." },
      { title: "Direct usine, livraison express", desc: "Nous desservons les salons de tout le Royaume-Uni et de l'UE à des prix direct usine. Entrepôt britannique sélectionné en cours d'ouverture + livraison express 3–5 jours sur toute la gamme." },
      { title: "Programme partenaire", desc: "Rejoignez notre réseau croissant de salons professionnels au Royaume-Uni et dans l'UE. Prix de gros, catalogue couleurs numérique gratuit et support dédié." },
    ],
    testimonialQuote:
      "Les wefts liés main de DS Hair sont honnêtement les meilleurs avec lesquels j'ai travaillé en 10 ans. La correspondance des couleurs est parfaite et la livraison est toujours rapide et fiable. Mes clientes adorent le résultat.",
    testimonialAuthor: "— Spécialiste extensions, Manchester",
    ctaTitle: "Prêt à nous rejoindre ?",
    ctaSubtitle:
      "Rejoignez notre réseau grandissant de salons britanniques et européens. Demandez votre compte professionnel dès aujourd'hui – le catalogue couleurs numérique gratuit est offert dès votre première commande.",
    ctaApply: "Demander un compte pro",
    ctaBrowse: "Voir les produits pro",
    ctaBrowseHref: "/collections/professional",
  },

  ar: {
    metaTitle: "من نحن | D.S HAIR & BEAUTY – مورد وصلات الشعر المتميز في مانشستر",
    metaDescription:
      "19 عاماً من الخبرة في وصلات الشعر. D.S HAIR & BEAUTY هو المورد بالجملة الموثوق في مانشستر لوصلات الشعر البشري ريمي 100% للصالونات الاحترافية.",
    eyebrow: "قصتنا",
    heroTitle: "19 عاماً من الشعر.\nهوس واحد: نتيجتك.",
    heroSubtitle:
      "من معقل صناعة الشعر في الصين إلى أرقى صالونات مانشستر – نربط جودة المصنع بتميز الصالون.",
    ctaPrimary: "كن صالوناً شريكاً",
    ctaPrimaryHref: "/salon-partners",
    ctaSecondary: "تواصل معنا",
    ctaSecondaryHref: "/contact",
    stats: [
      { stat: "19+", label: "سنوات في المجال" },
      { stat: "100%", label: "شعر بشري ريمي" },
      { stat: "50+", label: "ألوان وأطوال" },
      { stat: "3–5 ي", label: "توصيل سريع" },
    ],
    founderEyebrow: "المؤسِسة",
    founderTitle: "مبني على 19 عاماً من خبرة حقيقية في المجال",
    founderParas: [
      "تأسست D.S HAIR & BEAUTY على يد خبيرة في الشعر تتمتع بأكثر من 19 عاماً من الخبرة في توريد وتصدير شعر ريمي البشري. بعد ما يقرب من عقدين من العمل المباشر مع كبار مصنّعي الشعر في الصين وتوريد السوق البريطانية، لاحظت مؤسستنا فجوة واضحة: صالونات مانشستر الاحترافية كانت تحتاج إلى مورد محلي موثوق وذي خبرة حقيقية.",
      "معظم الموردين هم وسطاء. نحن لسنا كذلك. علاقاتنا المباشرة مع المصانع تعني جودة أفضل، وتطابق ألوان أكثر اتساقاً، وتوريداً أسرع – بأسعار الجملة التي تجعل صالونك أكثر ربحية.",
      "نحن متخصصون في المنتجات التي يحتاجها صالونات الشعر الفاتح في مانشستر فعلاً: الويفات المربوطة يدوياً، وصلات البالاياج، والحلقات النانوية، والتيب-إن – التقنيات التي تتطلب أفضل شعر بشري لتحقيق نتائج يتحدث عنها عملاؤك.",
    ],
    founderPoints: [
      "علاقات مباشرة مع المصانع في الصين",
      "متخصصون في الويفات المربوطة يدوياً والتيب-إن",
      "مطابقة ألوان مجانية لكل صالون",
      "توريد سريع مباشر من المصنع",
      "بالاياج مخصص ودمج ألوان",
      "مستهلكات احترافية مشمولة",
    ],
    timeline: [
      { year: "2007", title: "البداية في المجال", desc: "بدأنا بتوريد شعر ريمي للجملة في بريطانيا، وبناء علاقات عميقة مع مصانع معقل صناعة الشعر في الصين." },
      { year: "2015", title: "أول عملاء صالونات مباشرين في بريطانيا", desc: "بدأنا العمل مباشرة مع الصالونات الاحترافية، وإلغاء الوسطاء وتقديم جودة أفضل بأسعار أقل." },
      { year: "2022", title: "تأسيس D.S HAIR & BEAUTY", desc: "إطلاق العلامة البريطانية المخصصة، التي تجمع 15 عاماً من خبرة سلسلة التوريد مع نهج يحترم الصالون أولاً." },
      { year: "2026", title: "إطلاق برنامج شركاء مانشستر", desc: "إطلاق برنامج الشراكة ومقره مانشستر، لتوريد الويفات المربوطة يدوياً وصلات البالاياج والمستهلكات الاحترافية لصالونات في بريطانيا والاتحاد الأوروبي." },
    ],
    timelineTitle: "مسيرتنا",
    valuesEyebrow: "لماذا يختارنا الصالونات",
    valuesTitle: "لماذا يختارنا الصالونات",
    valuesSubtitle: "نحن لسنا مجرد مورد. نحن شريكك في وصلات الشعر.",
    values: [
      { title: "19 عاماً من الخبرة", desc: "منذ 2007، بنينا علاقات عميقة مع أفضل مصنّعي ريمي في الصين – مما يمنح صالوناتنا الشريكة وصولاً إلى جودة مباشرة من المصنع بأسعار الجملة." },
      { title: "100% شعر بشري ريمي", desc: "كل خصلة مصدرها أخلاقي، ومحاذاة القشرة، وفحصها قبل وصولها إلى صالونك. لا مزيج صناعي، لا اختصارات." },
      { title: "مباشر من المصنع، توصيل سريع", desc: "نخدم الصالونات في بريطانيا والاتحاد الأوروبي بأسعار مباشرة من المصنع. مستودع بريطاني مختار قيد الإطلاق + شحن سريع 3–5 أيام لكامل التشكيلة." },
      { title: "برنامج الشراكة", desc: "انضم إلى شبكتنا المتنامية من الصالونات الاحترافية في بريطانيا والاتحاد الأوروبي. أسعار الجملة، كتالوج ألوان رقمي مجاني، ودعم مخصص." },
    ],
    testimonialQuote:
      "ويفات DS Hair المربوطة يدوياً هي بصراحة الأفضل التي عملت معها في 10 سنوات. مطابقة الألوان دقيقة والتوصيل سريع وموثوق دائماً. عملاءنا يحبون النتيجة.",
    testimonialAuthor: "— أخصائية وصلات شعر، مانشستر",
    ctaTitle: "هل أنت مستعد للشراكة معنا؟",
    ctaSubtitle:
      "انضم إلى شبكتنا المتنامية من صالونات بريطانيا والاتحاد الأوروبي. اطلب حسابك التجاري اليوم – كتالوج الألوان الرقمي المجاني مشمول مع طلبك الأول.",
    ctaApply: "اطلب حساباً تجارياً",
    ctaBrowse: "تصفح المنتجات الاحترافية",
    ctaBrowseHref: "/collections/professional",
  },

  sv: {
    metaTitle: "Om oss | D.S HAIR & BEAUTY – Manchesters premium leverantör av hårförlängning",
    metaDescription:
      "19 års erfarenhet av hårförlängning. D.S HAIR & BEAUTY är den betrodda grossisten i Manchester för 100 % äkta Remy-människohår för professionella salonger.",
    eyebrow: "Vår historia",
    heroTitle: "19 år av hår.\nEn besatthet: ditt resultat.",
    heroSubtitle:
      "Från Kinas hjärta för hårtillverkning till Manchesters bästa salonger – vi förenar fabrikskvalitet med salongsexcellens.",
    ctaPrimary: "Bli salongspartner",
    ctaPrimaryHref: "/salon-partners",
    ctaSecondary: "Kontakta oss",
    ctaSecondaryHref: "/contact",
    stats: [
      { stat: "19+", label: "År i branschen" },
      { stat: "100%", label: "Remy människohår" },
      { stat: "50+", label: "Färger & längder" },
      { stat: "3–5 d", label: "Expressleverans" },
    ],
    founderEyebrow: "Grundaren",
    founderTitle: "Byggt på 19 års verklig branscherfarenhet",
    founderParas: [
      "D.S HAIR & BEAUTY grundades av en hårexpert med över 19 års erfarenhet av inköp och export av Remy-människohår. Efter nästan två decennier av direkt samarbete med Kinas ledande hårtillverkare och leverans till den brittiska marknaden såg vår grundare ett tydligt gap: Manchesters professionella salonger behövde en lokal, pålitlig och verkligt kunnig leverantör.",
      "De flesta leverantörer är mellanhänder. Vi inte. Våra direkta fabriksrelationer ger bättre kvalitet, mer konsekvent färgmatchning och snabbare leverans – till grossistpriser som gör din salong mer lönsam.",
      "Vi specialiserar oss på de produkter som salonger med ljust hår i Manchester faktiskt behöver: handbundna wefts, balayage-förlängningar, nano-ringar och tape-ins – metoderna som kräver det bästa människohåret för resultat dina kunder kommer älska.",
    ],
    founderPoints: [
      "Direkta fabriksrelationer i Kina",
      "Specialist på handbundna & tape-in-wefts",
      "Gratis färgmatchning för varje salong",
      "Fabriksdirect expressleverans",
      "Anpassad balayage & färgblandning",
      "Professionella förbrukningsvaror ingår",
    ],
    timeline: [
      { year: "2007", title: "Start i branschen", desc: "Började leverera Remy-människohår till brittiska grossister och byggde djupa fabriksrelationer i Kinas hårcentrum." },
      { year: "2015", title: "Första direkta salongkunderna i Storbritannien", desc: "Började arbeta direkt med professionella salonger, skar bort mellanhänderna och levererade bättre kvalitet till lägre priser." },
      { year: "2022", title: "D.S HAIR & BEAUTY grundas", desc: "Lanserades som ett dedikerat brittiskt varumärke som kombinerar 15 års leverantörskedje-expertis med en salong-först-metod." },
      { year: "2026", title: "Manchester partnerprogram lanseras", desc: "Lanserade vårt partnerprogram baserat i Manchester, med handbundna wefts, balayage-förlängningar och proffsförbrukningsvaror till salonger i hela Storbritannien & EU." },
    ],
    timelineTitle: "Vår resa",
    valuesEyebrow: "Varför salonger väljer oss",
    valuesTitle: "Varför salonger väljer oss",
    valuesSubtitle: "Vi är inte bara en leverantör. Vi är din hårförlängnings-partner.",
    values: [
      { title: "19 års erfarenhet", desc: "Sedan 2007 har vi byggt djupa relationer med Kinas bästa Remy-tillverkare – vilket ger våra salongspartners tillgång till fabrikskvalitet till grossistpriser." },
      { title: "100 % Remy människohår", desc: "Varje strå är etiskt sourcat, cuticula-arrangerat och kvalitetskontrollerat innan det når din salong. Inga syntetblandningar, inga genvägar." },
      { title: "Fabriksdirect, expressleverans", desc: "Vi betjänar salonger i hela Storbritannien & EU till fabrikspriser. Utvalt brittiskt lager öppnar snart + expressleverans 3–5 dagar för hela sortimentet." },
      { title: "Partnerprogram", desc: "Gå med i vårt växande nätverk av professionella salonger i Storbritannien & EU. Grossistpriser, gratis digital färgkatalog och dedikerat stöd." },
    ],
    testimonialQuote:
      "De handbundna wefts från DS Hair är ärligt talat de bästa jag arbetat med på 10 år. Färgmatchningen är prickfri och leveransen är alltid snabb och pålitlig. Mina kunder älskar resultatet.",
    testimonialAuthor: "— Hårförlängningsexpert, Manchester",
    ctaTitle: "Redo att samarbeta med oss?",
    ctaSubtitle:
      "Gå med i vårt växande nätverk av brittiska och europeiska salonger. Ansök om ditt handelskonto idag – gratis digital färgkatalog ingår vid din första order.",
    ctaApply: "Ansök om handelskonto",
    ctaBrowse: "Bläddra bland proffsprodukter",
    ctaBrowseHref: "/collections/professional",
  },

  pl: {
    metaTitle: "O nas | D.S HAIR & BEAUTY – premium dostawca przedłużania włosów w Manchesterze",
    metaDescription:
      "19 lat doświadczenia w przedłużaniu włosów. D.S HAIR & BEAUTY to zaufany hurtownik w Manchesterze oferujący 100% prawdziwych włosów Remy dla profesjonalnych salonów.",
    eyebrow: "Nasza historia",
    heroTitle: "19 lat włosów.\nJedna obsesja: Twój efekt.",
    heroSubtitle:
      "Od serca produkcji włosów w Chinach po najlepsze salony Manchesteru – łączymy jakość fabryczną z doskonałością salonu.",
    ctaPrimary: "Zostań salonem partnerskim",
    ctaPrimaryHref: "/salon-partners",
    ctaSecondary: "Skontaktuj się",
    ctaSecondaryHref: "/contact",
    stats: [
      { stat: "19+", label: "Lat doświadczenia" },
      { stat: "100%", label: "Włosy Remy" },
      { stat: "50+", label: "Kolory i długości" },
      { stat: "3–5 d", label: "Ekspresowa dostawa" },
    ],
    founderEyebrow: "Założycielka",
    founderTitle: "Oparte na 19 latach prawdziwego doświadczenia",
    founderParas: [
      "D.S HAIR & BEAUTY zostało założone przez ekspertkę z ponad 19-letnim doświadczeniem w zaopatrywaniu i eksporcie włosów Remy. Po niemal dwóch dekadach bezpośredniej współpracy z czołowymi chińskimi producentami i dostawach na rynek brytyjski, nasza założycielka dostrzegła wyraźną lukę: profesjonalne salony w Manchesterze potrzebowały lokalnego, rzetelnego i naprawdę kompetentnego dostawcy.",
      "Większość dostawców to pośrednicy. My nie. Nasze bezpośrednie relacje z fabrykami oznaczają lepszą jakość, bardziej spójne dopasowanie kolorów i szybsze dostawy – w cenach hurtowych, które czynią Twój salon bardziej zyskownym.",
      "Specjalizujemy się w produktach, których salony z jasnymi włosami w Manchesterze naprawdę potrzebują: wefty wiązane ręcznie, przedłużenia balayage, nano-ringi i tape-in – metodach wymagających najlepszych włosów ludzkich dla efektów, które zachwycą Twoich klientów.",
    ],
    founderPoints: [
      "Bezpośrednie relacje z fabrykami w Chinach",
      "Specjaliści od weftów wiązanych ręcznie i tape-in",
      "Bezpłatne dobieranie kolorów dla każdego salonu",
      "Ekspresowa dostawa bezpośrednio z fabryki",
      "Niestandardowe balayage i mieszanie kolorów",
      "Materiały eksploatacyjne w cenie",
    ],
    timeline: [
      { year: "2007", title: "Początek w branży", desc: "Rozpoczęcie dostaw włosów Remy do brytyjskich hurtowników i budowanie głębokich relacji z fabrykami w chińskim zagłębiu włosów." },
      { year: "2015", title: "Pierwsi bezpośredni klienci-salony w UK", desc: "Rozpoczęcie bezpośredniej współpracy z profesjonalnymi salonami, wyeliminowanie pośredników i lepsza jakość w niższych cenach." },
      { year: "2022", title: "Powstanie D.S HAIR & BEAUTY", desc: "Uruchomienie jako dedykowana brytyjska marka łącząca 15 lat wiedzy o łańcuchu dostaw z podejściem salon-najpierw." },
      { year: "2026", title: "Start programu partnerskiego Manchester", desc: "Uruchomienie naszego programu partnerskiego z siedzibą w Manchesterze, dostarczającego wefty wiązane ręcznie, przedłużenia balayage i materiały eksploatacyjne salonom w całym Zjednoczonym Królestwie i UE." },
    ],
    timelineTitle: "Nasza droga",
    valuesEyebrow: "Dlaczego salony wybierają nas",
    valuesTitle: "Dlaczego salony wybierają nas",
    valuesSubtitle: "Nie jesteśmy tylko dostawcą. Jesteśmy Twoim partnerem w przedłużaniu włosów.",
    values: [
      { title: "19 lat doświadczenia", desc: "Od 2007 budujemy głębokie relacje z czołowymi producentami Remy w Chinach – dając naszym salonom partnerskim dostęp do jakości bezpośrednio z fabryki w cenach hurtowych." },
      { title: "100% włosy Remy", desc: "Każdy pasmo pochodzi z etycznego źródła, ma wyrównane łuski i jest sprawdzane przed trafieniem do Twojego salonu. Żadnych mieszanek syntetycznych, żadnych skrótów." },
      { title: "Bezpośrednio z fabryki, ekspresowa dostawa", desc: "Obsługujemy salony w całym Zjednoczonym Królestwie i UE w cenach fabrycznych. Wybrane magazyny w UK w otwarciu + ekspresowa dostawa 3–5 dni na cały asortyment." },
      { title: "Program partnerski", desc: "Dołącz do naszej rosnącej sieci profesjonalnych salonów w Zjednoczonym Królestwie i UE. Ceny hurtowe, bezpłatny cyfrowy katalog kolorów i dedykowane wsparcie." },
    ],
    testimonialQuote:
      "Wefty wiązane ręcznie od DS Hair to szczerze najlepsze, z jakimi pracowałam od 10 lat. Dobór kolorów jest idealny, a dostawa zawsze szybka i niezawodna. Moi klienci kochają efekt.",
    testimonialAuthor: "— Specjalistka od przedłużania, Manchester",
    ctaTitle: "Gotów do współpracy?",
    ctaSubtitle:
      "Dołącz do naszej rosnącej sieci brytyjskich i europejskich salonów. Złóż wniosek o konto hurtowe już dziś – bezpłatny cyfrowy katalog kolorów w cenie pierwszego zamówienia.",
    ctaApply: "Złóż wniosek o konto hurtowe",
    ctaBrowse: "Przeglądaj produkty profesjonalne",
    ctaBrowseHref: "/collections/professional",
  },
}
