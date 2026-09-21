import type { Locale } from "@/lib/i18n/config"

export interface TwFormLabels {
  name: string
  namePh: string
  salon: string
  salonPh: string
  email: string
  emailPh: string
  message: string
  messagePh: string
  submit: string
  submitting: string
  successTitle: string
  successBody: string
  successWhatsApp: string
  footWhatsApp: string
  footNote: string
}

export interface TradeWholesaleContent {
  metaTitle: string
  metaDescription: string
  badge: string
  heroTitle: string
  heroSubtitle: string
  ctaOpenAccount: string
  ctaWhatsApp: string
  stats: { stat: string; label: string }[]
  whyTitle: string
  whySubtitle: string
  whyItems: { title: string; description: string }[]
  rangeTitle: string
  rangeSubtitle: string
  rangeCols: { type: string; min: string; lead: string }
  rangeRows: { type: string; minimum: string; leadTime: string }[]
  rangeFootnote: string
  stepsTitle: string
  stepsSubtitle: string
  steps: { num: string; title: string; desc: string }[]
  trust: { title: string; desc: string }[]
  ctaTitle: string
  ctaSubtitle: string
  ctaEmailLine: string
  form: TwFormLabels
  // Optional B2B conversion-boost sections (populated for `en`; other locales
  // fall back to the English copy in the client so the type stays satisfied).
  sampleProgram?: {
    title: string
    subtitle: string
    items: { title: string; desc: string }[]
    ctaLabel: string
  }
  pricing?: {
    title: string
    subtitle: string
    tiers: { name: string; volume: string; benefit: string }[]
    footnote: string
  }
  cases?: {
    title: string
    subtitle: string
    items: { salon: string; location: string; tag: string; quote: string; metric: string }[]
  }
  faq?: { title: string; items: { q: string; a: string }[] }
}

const WHY_EN: { title: string; description: string }[] = [
  {
    title: "100% Remy Human Hair",
    description:
      "Ethically sourced, consistent quality. Every strand is cuticle-aligned for a natural, seamless blend with your clients' hair.",
  },
  {
    title: "Full Product Range",
    description:
      "Tape-In, K-Tip, Weft, Butterfly Weft, Hair Toppers & Accessories. One supplier for every method your salon offers.",
  },
  {
    title: "Factory-Direct & Express Delivery",
    description:
      "The full range ships factory-direct via express (3–5 days). No cross-continental wait times.",
  },
  {
    title: "Trade Accounts Available",
    description:
      "Dedicated wholesale pricing for registered salons. No middlemen, no inflated retail prices — straight from the source.",
  },
]

const RANGE_EN: { type: string; minimum: string; leadTime: string }[] = [
  { type: "Tape-In", minimum: "10 sets", leadTime: "Express 3–5 days" },
  { type: "K-Tip", minimum: "50 grams", leadTime: "Express 3–5 days" },
  { type: "Weft", minimum: "3 pieces", leadTime: "Express 3–5 days" },
  { type: "Butterfly Weft", minimum: "3 pieces", leadTime: "Express 3–5 days" },
  { type: "Hair Toppers", minimum: "1 piece", leadTime: "Express 3–5 days" },
]

const STEPS_EN: { num: string; title: string; desc: string }[] = [
  {
    num: "01",
    title: "Contact Us with Your Salon Details",
    desc: "Send us your salon name, location, and a brief intro. Takes 2 minutes via the form below or WhatsApp.",
  },
  {
    num: "02",
    title: "We Set Up Your Trade Account",
    desc: "We create your trade account and you can order a sample pack (sample price + shipping at buyer's cost) so you can feel the quality before ordering.",
  },
  {
    num: "03",
    title: "Order Online with Trade Pricing",
    desc: "Access your exclusive trade prices, place orders anytime, and get dedicated support from a real person.",
  },
]

const TRUST_EN: { title: string; desc: string }[] = [
  { title: "Salon-Trusted", desc: "50+ UK & EU salons reorder with us" },
  { title: "Professional Grade", desc: "100% Remy, cuticle-aligned hair" },
  { title: "Express Shipping", desc: "Ships in 3–5 days via DHL/UPS" },
]

export const tradeWholesaleContent: Record<Locale, TradeWholesaleContent> = {
  en: {
    metaTitle: "Wholesale Hair Extensions for UK Salons | Trade Account | D.S Hair Beauty",
    metaDescription:
      "Open a trade account with D.S Hair Beauty. 100% Remy human hair extensions at wholesale prices. Tape-In, K-Tip, Weft, Butterfly Weft & Toppers. Factory-direct express UK shipping (3–5 days).",
    badge: "Salon Supply Partner",
    heroTitle: "Your Salon's Supply Chain, Simplified",
    heroSubtitle:
      "Factory-direct Remy hair extensions for professional UK & EU salons. One partner, every product type, zero middlemen. Join 50+ UK & EU salons who stock with us — with private label options.",
    ctaOpenAccount: "Open Your Trade Account",
    ctaWhatsApp: "Chat on WhatsApp",
    stats: [
      { stat: "19+", label: "Years Industry Experience" },
      { stat: "100%", label: "Remy Human Hair" },
      { stat: "3–5 Days", label: "Express UK Shipping" },
      { stat: "No Min.", label: "First Order Required" },
    ],
    whyTitle: "Why Salons Choose Us",
    whySubtitle: "Not just a supplier — a long-term partner who understands the salon business.",
    whyItems: WHY_EN,
    rangeTitle: "Product Range Overview",
    rangeSubtitle:
      "From Tape-In to Butterfly Weft — everything your salon needs, in stock and ready to dispatch.",
    rangeCols: { type: "Product Type", min: "Minimum Order", lead: "Typical Lead Time" },
    rangeRows: RANGE_EN,
    rangeFootnote: "Need something not listed? Contact us — we may be able to source it.",
    stepsTitle: "How to Open a Trade Account",
    stepsSubtitle: "Simple, fast, no commitment required to apply.",
    steps: STEPS_EN,
    trust: TRUST_EN,
    ctaTitle: "Open Your Trade Account Today",
    ctaSubtitle: "Fill in the form below — we will respond within 24 hours with your trade pricing.",
    ctaEmailLine: "Or email us directly: info@dshairbeauty.co.uk",
    form: {
      name: "Your Name *",
      namePh: "First & Last Name",
      salon: "Salon Name *",
      salonPh: "e.g. The Hair Studio",
      email: "Email Address *",
      emailPh: "you@yoursalon.co.uk",
      message: "Message (optional)",
      messagePh: "Tell us about your salon, the extension methods you offer, or any questions you have...",
      submit: "Open My Trade Account",
      submitting: "Submitting...",
      successTitle: "Application Received!",
      successBody: "Thank you — we will send your trade price list within 24 hours.",
      successWhatsApp: "Follow Up on WhatsApp",
      footWhatsApp: "Message us on WhatsApp",
      footNote: "— we respond within 2 hours.",
    },
    sampleProgram: {
      title: "Try Before You Stock — Trade Sample Pack",
      subtitle:
        "Feel the quality and see the shade range before you commit. Every new trade partner can order a sample pack (sample price + shipping at buyer's cost).",
      items: [
        { title: "Welcome Swatch Pack", desc: "Best-selling Remy shades across Tape-In, K-Tip, Weft & Topper — so your team can feel cuticle-aligned quality." },
        { title: "Colour Ring Loan", desc: "Borrow our 40+ shade ring for in-salon colour matching with your clients." },
        { title: "No-Risk First Order", desc: "Start with a single piece. No minimum order — you pay trade price from your very first weft." },
      ],
      ctaLabel: "Request Your Sample Pack",
    },
    pricing: {
      title: "Transparent Trade Pricing That Scales",
      subtitle:
        "The more you stock, the more you save. No hidden fees, no middlemen — straight factory-direct trade pricing.",
      tiers: [
        { name: "Starter", volume: "1–9 units", benefit: "Trade price from your first piece. Perfect to trial with real clients." },
        { name: "Salon", volume: "10–49 units", benefit: "Extra volume discount + priority dispatch on popular shades." },
        { name: "Pro", volume: "50–99 units", benefit: "Deeper discount + reserved stock for your best-selling lengths." },
        { name: "Partner", volume: "100+ units", benefit: "Top tier + dedicated account manager + Net-30 terms available." },
      ],
      footnote:
        "Exact trade prices are shared in your personal price list after you open an account — request it within 24 hours.",
    },
    cases: {
      title: "Salons Growing With D.S Hair Beauty",
      subtitle: "Real trade partners who switched to factory-direct Remy and never looked back.",
      items: [
        { salon: "Headlites", location: "Sweden · 4-city salon chain", tag: "A+ Partner", quote: "Factory-direct Remy with consistent shade match across all four of our locations — finally a supplier we trust.", metric: "4 locations · private label in progress" },
        { salon: "Salon Partner", location: "United Kingdom", tag: "Boutique Studio", quote: "Switched from a retail brand to trade pricing. Same quality, far better margin on every extension service.", metric: "Higher per-service margin" },
        { salon: "Salon Partner", location: "Dublin, IE", tag: "Multi-chair Salon", quote: "The sample pack sold my team in a day. Reorders arrive in 3–5 days, so we hold less stock.", metric: "Faster rebooking, less tied-up cash" },
      ],
    },
    faq: {
      title: "Trade Account FAQ",
      items: [
        { q: "What is the minimum order for trade?", a: "There is no minimum order. You can start with a single piece and still pay trade price — ideal for trying a new method with a real client." },
        { q: "How fast is delivery to the UK & EU?", a: "The full range ships factory-direct via express courier in 3–5 days (DHL/UPS). Reorder as needed without holding large stock." },
        { q: "Do you offer private label?", a: "Yes. Private label is available for trade accounts — your salon or brand on the packaging. Ask us for the setup." },
        { q: "Can I get samples before committing?", a: "Absolutely. Every new trade partner can request a sample pack (sample price + shipping at buyer's cost) with swatches and a piece to feel. We want you confident before you stock." },
        { q: "What hair quality do you supply?", a: "100% Remy human hair, cuticle-aligned, in 40+ shades including balayage and ombre — the same grade every reorder." },
        { q: "How do I open a trade account?", a: "Fill the form below or message us on WhatsApp. Most applications are approved same day, and your trade price list lands within 24 hours." },
      ],
    },
  },
  de: {
    metaTitle: "Großhandel Haarverlängerungen für UK-Salons | Handelskonto | D.S Hair Beauty",
    metaDescription:
      "Eröffnen Sie ein Handelskonto bei D.S Hair Beauty. 100 % Remy Menschenhaar zu Großhandelspreisen. Tape-In, K-Tip, Weft, Butterfly Weft & Toppers. Factory-direct Express-Versand UK (3–5 Tage).",
    badge: "Salon-Lieferpartner",
    heroTitle: "Ihre Salon-Lieferkette, vereinfacht",
    heroSubtitle:
      "Factory-direct Remy-Haarverlängerungen für professionelle Salons in UK & EU. Ein Partner, jede Produktart, keine Zwischenhändler. Schließen Sie sich 50+ Salons in UK & EU an – mit Private-Label-Option.",
    ctaOpenAccount: "Handelskonto eröffnen",
    ctaWhatsApp: "WhatsApp chatten",
    stats: [
      { stat: "19+", label: "Jahre Branchenerfahrung" },
      { stat: "100 %", label: "Remy Menschenhaar" },
      { stat: "3–5 Tage", label: "Express-Versand UK" },
      { stat: "Kein Min.", label: "Erstbestellung nötig" },
    ],
    whyTitle: "Warum Salons uns wählen",
    whySubtitle: "Nicht nur ein Lieferant — ein langfristiger Partner, der das Salongeschäft versteht.",
    whyItems: [
      {
        title: "100 % Remy Menschenhaar",
        description:
          "Ethisch bezogen, gleichbleibende Qualität. Jedes Haar ist cuticula-ausgerichtet für eine natürliche, nahtlose Mischung mit den Haaren Ihrer Kunden.",
      },
      {
        title: "Komplettes Sortiment",
        description:
          "Tape-In, K-Tip, Weft, Butterfly Weft, Hair Toppers & Zubehör. Ein Lieferant für jede Methode Ihres Salons.",
      },
      {
        title: "Factory-Direct & Express Delivery",
        description:
          "Das gesamte Sortiment wird factory-direct per Express (3–5 Tage) versandt. Keine kontinentalen Wartezeiten.",
      },
      {
        title: "Handelskonten verfügbar",
        description:
          "Feste Großhandelspreise für registrierte Salons. Keine Zwischenhändler, keine aufgeblähten Einzelhandelspreise – direkt von der Quelle.",
      },
    ],
    rangeTitle: "Sortimentsübersicht",
    rangeSubtitle: "Von Tape-In bis Butterfly Weft – alles, was Ihr Salon braucht, am Lager und versandbereit.",
    rangeCols: { type: "Produktart", min: "Mindestbestellmenge", lead: "Typische Lieferzeit" },
    rangeRows: RANGE_EN,
    rangeFootnote: "Etwas nicht gelistet? Kontaktieren Sie uns – wir können es möglicherweise beschaffen.",
    stepsTitle: "So eröffnen Sie ein Handelskonto",
    stepsSubtitle: "Einfach, schnell, ohne Verpflichtung zur Bewerbung.",
    steps: [
      {
        num: "01",
        title: "Kontaktieren Sie uns mit Ihren Salondaten",
        desc: "Senden Sie uns Salonname, Standort und eine kurze Vorstellung. Dauert 2 Minuten über das Formular unten oder WhatsApp.",
      },
      {
        num: "02",
        title: "Wir richten Ihr Handelskonto ein",
        desc: "Wir erstellen Ihr Handelskonto und senden ein Willkommens-Musterpaket, damit Sie die Qualität vor der Bestellung spüren.",
      },
      {
        num: "03",
        title: "Online mit Handelspreisen bestellen",
        desc: "Greifen Sie auf Ihre exklusiven Handelspreise zu, bestellen Sie jederzeit und erhalten Sie persönlichen Support.",
      },
    ],
    trust: [
      { title: "Salon-Vertraut", desc: "50+ UK- & EU-Salons bestellen nach" },
      { title: "Profi-Qualität", desc: "100 % Remy, cuticula-ausgerichtet" },
      { title: "Express-Versand", desc: "Versand in 3–5 Tagen via DHL/UPS" },
    ],
    ctaTitle: "Eröffnen Sie heute Ihr Handelskonto",
    ctaSubtitle: "Füllen Sie das Formular aus – wir antworten innerhalb von 24 Stunden mit Ihren Handelspreisen.",
    ctaEmailLine: "Oder mailen Sie uns direkt: info@dshairbeauty.co.uk",
    form: {
      name: "Ihr Name *",
      namePh: "Vor- & Nachname",
      salon: "Salonname *",
      salonPh: "z. B. The Hair Studio",
      email: "E-Mail-Adresse *",
      emailPh: "sie@ihrsalon.co.uk",
      message: "Nachricht (optional)",
      messagePh: "Erzählen Sie uns von Ihrem Salon, den Methoden oder Fragen...",
      submit: "Mein Handelskonto eröffnen",
      submitting: "Wird gesendet...",
      successTitle: "Bewerbung erhalten!",
      successBody: "Danke – wir senden Ihre Handelspreisliste innerhalb von 24 Stunden.",
      successWhatsApp: "Auf WhatsApp nachhaken",
      footWhatsApp: "Schreiben Sie uns auf WhatsApp",
      footNote: "— wir antworten innerhalb von 2 Stunden.",
    },
  },
  fr: {
    metaTitle: "Extensions grossistes pour salons UK | Compte pro | D.S Hair Beauty",
    metaDescription:
      "Ouvrez un compte pro chez D.S Hair Beauty. Extensions 100 % cheveux humains Remy au prix de gros. Tape-In, K-Tip, Weft, Butterfly Weft & Toppers. Expédition express factory-direct UK (3–5 jours).",
    badge: "Partenaire approvisionnement salon",
    heroTitle: "Votre chaîne d'approvisionnement, simplifiée",
    heroSubtitle:
      "Extensions Remy factory-direct pour salons pro UK & EU. Un partenaire, chaque méthode, zéro intermédiaire. Rejoignez 50+ salons UK & EU – avec option marque blanche.",
    ctaOpenAccount: "Ouvrir votre compte pro",
    ctaWhatsApp: "Discuter sur WhatsApp",
    stats: [
      { stat: "19+", label: "Ans d'expérience" },
      { stat: "100 %", label: "Cheveux Remy" },
      { stat: "3–5 jours", label: "Expédition express UK" },
      { stat: "Aucun min.", label: "1re commande requise" },
    ],
    whyTitle: "Pourquoi les salons nous choisissent",
    whySubtitle: "Pas seulement un fournisseur — un partenaire à long terme qui comprend le métier.",
    whyItems: [
      {
        title: "100 % cheveux humains Remy",
        description:
          "Sourcing éthique, qualité constante. Chaque mèche est à cuticule alignée pour un mélange naturel et invisible.",
      },
      {
        title: "Gammes complètes",
        description:
          "Tape-In, K-Tip, Weft, Butterfly Weft, Hair Toppers et accessoires. Un seul fournisseur pour chaque méthode.",
      },
      {
        title: "Factory-direct & livraison express",
        description:
          "Toute la gamme est expédiée factory-direct en express (3–5 jours). Pas d'attente intercontinentale.",
      },
      {
        title: "Comptes pro disponibles",
        description:
          "Prix de gros dédiés aux salons inscrits. Pas d'intermédiaire, pas de prix retail gonflés — direct à la source.",
      },
    ],
    rangeTitle: "Aperçu de la gamme",
    rangeSubtitle: "Du Tape-In au Butterfly Weft — tout ce dont votre salon a besoin, en stock et prêt à expédier.",
    rangeCols: { type: "Type de produit", min: "Commande min.", lead: "Délai typique" },
    rangeRows: RANGE_EN,
    rangeFootnote: "Besoin d'un article non listé ? Contactez-nous — nous pouvons peut-être le sourcer.",
    stepsTitle: "Comment ouvrir un compte pro",
    stepsSubtitle: "Simple, rapide, sans engagement pour postuler.",
    steps: [
      {
        num: "01",
        title: "Contactez-nous avec les infos de votre salon",
        desc: "Envoyez nom, lieu et courte présentation. 2 minutes via le formulaire ou WhatsApp.",
      },
      {
        num: "02",
        title: "Nous créons votre compte pro",
        desc: "Nous créons votre compte et vous pouvez commander un échantillon (prix d'échantillon + livraison à la charge de l'acheteur) pour tester la qualité avant de commander.",
      },
      {
        num: "03",
        title: "Commandez en ligne aux prix pro",
        desc: "Accédez à vos prix exclusifs, commandez à tout moment, avec un support dédié.",
      },
    ],
    trust: [
      { title: "Salons satisfaits", desc: "50+ salons UK & UE nous recommandent" },
      { title: "Qualité pro", desc: "100 % Remy, à cuticule alignée" },
      { title: "Expédition express", desc: "Expédié en 3–5 jours via DHL/UPS" },
    ],
    ctaTitle: "Ouvrez votre compte pro dès aujourd'hui",
    ctaSubtitle: "Remplissez le formulaire — nous répondons sous 24 h avec vos prix de gros.",
    ctaEmailLine: "Ou écrivez-nous directement : info@dshairbeauty.co.uk",
    form: {
      name: "Votre nom *",
      namePh: "Prénom & nom",
      salon: "Nom du salon *",
      salonPh: "ex. The Hair Studio",
      email: "Adresse e-mail *",
      emailPh: "vous@votresalon.fr",
      message: "Message (facultatif)",
      messagePh: "Parlez-nous de votre salon, méthodes ou questions...",
      submit: "Ouvrir mon compte pro",
      submitting: "Envoi en cours...",
      successTitle: "Candidature reçue !",
      successBody: "Merci — nous envoyons votre grille tarifaire sous 24 h.",
      successWhatsApp: "Suivi sur WhatsApp",
      footWhatsApp: "Écrivez-nous sur WhatsApp",
      footNote: "— nous répondons sous 2 h.",
    },
  },
  ar: {
    metaTitle: "جملة وصلات الشعر لصالونات بريطانيا | حساب تجاري | D.S Hair Beauty",
    metaDescription:
      "افتح حساباً تجارياً مع D.S Hair Beauty. وصلات شعر بشرية ريمي 100% بأسعار الجملة. تيب-إن، كي-تيب، ويفت، باترفلاي ويفت وتوبيرز. شحن سريع مباشر من المصنع (3–5 أيام).",
    badge: "شريك توريد الصالونات",
    heroTitle: "سلسلة توريد صالونك، مبسطة",
    heroSubtitle:
      "وصلات شعر ريمي مباشرة من المصنع لصالونات بريطانيا والاتحاد الأوروبي المحترفة. شريك واحد، كل الطرق، بلا وسطاء. انضم إلى أكثر من 50 صالوناً في بريطانيا والاتحاد الأوروبي – مع خيار العلامة الخاصة.",
    ctaOpenAccount: "افتح حسابك التجاري",
    ctaWhatsApp: "دردشة عبر واتساب",
    stats: [
      { stat: "19+", label: "سنوات خبرة" },
      { stat: "100%", label: "شعر ريمي" },
      { stat: "3–5 أيام", label: "شحن سريع بريطانيا" },
      { stat: "لا حد أدنى", label: "لأول طلب" },
    ],
    whyTitle: "لماذا تختارنا الصالونات",
    whySubtitle: "ليس مجرد مورد – شريك طويل الأمد يفهم عمل الصالون.",
    whyItems: [
      {
        title: "شعر بشري ريمي 100%",
        description:
          "مصدر أخلاقي وجودة ثابتة. كل خصلة متجانسة القشرة لامتزاج طبيعي مع شعر عملائك.",
      },
      {
        title: "مجموعة كاملة",
        description:
          "تيب-إن، كي-تيب، ويفت، باترفلاي ويفت، توبيرز وإكسسوارات. مورد واحد لكل طريقة يقدمها صالونك.",
      },
      {
        title: "مباشر من المصنع وشحن سريع",
        description:
          "يُشحن كامل المجموعة مباشرة من المصنع بسرعة (3–5 أيام). لا فترات انتظار عابرة للقارات.",
      },
      {
        title: "حسابات تجارية متاحة",
        description:
          "أسعار جملة مخصصة للصالونات المسجلة. بلا وسطاء ولا أسعار تجزئة مبالغ فيها – مباشرة من المصدر.",
      },
    ],
    rangeTitle: "نظرة عامة على المجموعة",
    rangeSubtitle: "من تيب-إن إلى باترفلاي ويفت – كل ما يحتاجه صالونك، متوفر وجاهز للشحن.",
    rangeCols: { type: "نوع المنتج", min: "الحد الأدنى للطلب", lead: "مدة التوريد المعتادة" },
    rangeRows: RANGE_EN,
    rangeFootnote: "تحتاج شيئاً غير مدرج؟ تواصل معنا – قد نتمكن من توفيره.",
    stepsTitle: "كيف تفتح حساباً تجارياً",
    stepsSubtitle: "بسيط وسريع، بلا التزام للتقديم.",
    steps: [
      {
        num: "01",
        title: "تواصل معنا ببيانات صالونك",
        desc: "أرسل اسم الصالون والموقع وتعريفاً موجزاً. يستغرق دقيقتين عبر النموذج أو واتساب.",
      },
      {
        num: "02",
        title: "ننشئ حسابك التجاري",
        desc: "ننشئ حسابك ويمكنك طلب عينة (سعر العينة + الشحن على حساب المشتري) لتشعر بالجودة قبل الطلب.",
      },
      {
        num: "03",
        title: "اطلب عبر الإنترنت بأسعار الجملة",
        desc: "ادخل إلى أسعارك الحصرية، اطلب في أي وقت، مع دعم مخصص من شخص حقيقي.",
      },
    ],
    trust: [
      { title: "موثوق به من الصالونات", desc: "50+ صالوناً في UK والاتحاد الأوروبي" },
      { title: "درجة احترافية", desc: "ريمي 100% بقشرة متجانسة" },
      { title: "شحن سريع", desc: "يُشحن خلال 3–5 أيام عبر DHL/UPS" },
    ],
    ctaTitle: "افتح حسابك التجاري اليوم",
    ctaSubtitle: "املأ النموذج أدناه – سنرد خلال 24 ساعة بأسعار الجملة.",
    ctaEmailLine: "أو راسلنا مباشرة: info@dshairbeauty.co.uk",
    form: {
      name: "اسمك *",
      namePh: "الاسم الأول والأخير",
      salon: "اسم الصالون *",
      salonPh: "مثال: The Hair Studio",
      email: "البريد الإلكتروني *",
      emailPh: "you@yoursalon.co.uk",
      message: "رسالة (اختياري)",
      messagePh: "أخبرنا عن صالونك أو الطرق أو أسئلتك...",
      submit: "افتح حسابي التجاري",
      submitting: "جارٍ الإرسال...",
      successTitle: "تم استلام الطلب!",
      successBody: "شكراً – سنرسل قائمة أسعار الجملة خلال 24 ساعة.",
      successWhatsApp: "متابعة عبر واتساب",
      footWhatsApp: "راسلنا على واتساب",
      footNote: "— نرد خلال ساعتين.",
    },
  },
  sv: {
    metaTitle: "Partihandel hårförlängning för UK-salonger | Handelskonto | D.S Hair Beauty",
    metaDescription:
      "Öppna ett handelskonto hos D.S Hair Beauty. 100 % Remy människohår till partipriser. Tape-In, K-Tip, Weft, Butterfly Weft & Toppers. Factory-direct expressfrakt UK (3–5 dagar).",
    badge: "Salongens leveranspartner",
    heroTitle: "Din salongs leveranskedja, förenklad",
    heroSubtitle:
      "Remy-hårförlängning factory-direct för proffssalonger i Storbritannien & EU. En partner, varje metod, noll mellanhänder. Gå med 50+ salonger i UK & EU – med privatlabel-alternativ.",
    ctaOpenAccount: "Öppna ditt handelskonto",
    ctaWhatsApp: "Chatta på WhatsApp",
    stats: [
      { stat: "19+", label: "År i branschen" },
      { stat: "100 %", label: "Remy människohår" },
      { stat: "3–5 dagar", label: "Expressfrakt UK" },
      { stat: "Inget min.", label: "Första ordern krävs" },
    ],
    whyTitle: "Varför salonger väljer oss",
    whySubtitle: "Inte bara en leverantör — en långsiktig partner som förstår salongverksamhet.",
    whyItems: [
      {
        title: "100 % Remy människohår",
        description:
          "Etiskt upphandlat, jämn kvalitet. Varje strå är cuticula-riktat för en naturlig, sömlös blandning.",
      },
      {
        title: "Komplett sortiment",
        description:
          "Tape-In, K-Tip, Weft, Butterfly Weft, Hair Toppers & tillbehör. En leverantör för varje metod.",
      },
      {
        title: "Factory-direct & expressleverans",
        description:
          "Hela sortimentet skeppas factory-direct med express (3–5 dagar). Inga kontinentala väntetider.",
      },
      {
        title: "Handelskonton tillgängliga",
        description:
          "Fast partipris för registrerade salonger. Inga mellanhänder, inga uppblåsta butikspriser – direkt från källan.",
      },
    ],
    rangeTitle: "Sortimentsöversikt",
    rangeSubtitle: "Från Tape-In till Butterfly Weft – allt din salong behöver, i lager och redo att skickas.",
    rangeCols: { type: "Produkttyp", min: "Minimiorder", lead: "Typisk ledtid" },
    rangeRows: RANGE_EN,
    rangeFootnote: "Behöver du något som inte listas? Kontakta oss – vi kanske kan fixa det.",
    stepsTitle: "Så öppnar du ett handelskonto",
    stepsSubtitle: "Enkelt, snabbt, inget åtagande för att ansöka.",
    steps: [
      {
        num: "01",
        title: "Kontakta oss med din salongs info",
        desc: "Skicka salongsnamn, plats och kort intro. Tar 2 minuter via formuläret eller WhatsApp.",
      },
      {
        num: "02",
        title: "Vi skapar ditt handelskonto",
        desc: "Vi skapar kontot och skickar ett välkomstprovpaket så du känner kvaliteten innan du beställer.",
      },
      {
        num: "03",
        title: "Beställ online till handelspris",
        desc: "Få dina exklusiva handelspriser, beställ när som helst, med dedikerat stöd.",
      },
    ],
    trust: [
      { title: "Salongstrott", desc: "50+ UK- & EU-salonger handlar hos oss" },
      { title: "Proffskvalitet", desc: "100 % Remy, cuticula-riktat" },
      { title: "Expressfrakt", desc: "Skickas på 3–5 dagar via DHL/UPS" },
    ],
    ctaTitle: "Öppna ditt handelskonto idag",
    ctaSubtitle: "Fyll i formuläret – vi svarar inom 24 timmar med dina handelspriser.",
    ctaEmailLine: "Eller maila oss direkt: info@dshairbeauty.co.uk",
    form: {
      name: "Ditt namn *",
      namePh: "För- och efternamn",
      salon: "Salongens namn *",
      salonPh: "t.ex. The Hair Studio",
      email: "E-postadress *",
      emailPh: "du@dinsalong.se",
      message: "Meddelande (valfritt)",
      messagePh: "Berätta om din salong, metoder eller frågor...",
      submit: "Öppna mitt handelskonto",
      submitting: "Skickar...",
      successTitle: "Ansökan mottagen!",
      successBody: "Tack – vi skickar din handelsprislista inom 24 timmar.",
      successWhatsApp: "Följ upp på WhatsApp",
      footWhatsApp: "Skriv till oss på WhatsApp",
      footNote: "— vi svarar inom 2 timmar.",
    },
  },
  pl: {
    metaTitle: "Hurtowe przedłużanie włosów dla salonów UK | Konto hurtowe | D.S Hair Beauty",
    metaDescription:
      "Otwórz konto hurtowe w D.S Hair Beauty. 100 % włosy Remy po cenach hurtowych. Tape-In, K-Tip, Weft, Butterfly Weft i Toppers. Ekspresowa wysyłka factory-direct UK (3–5 dni).",
    badge: "Partner zaopatrzenia salonu",
    heroTitle: "Łańcuch dostaw Twojego salonu, uproszczony",
    heroSubtitle:
      "Włosy Remy factory-direct dla profesjonalnych salonów w UK i UE. Jeden partner, każda metoda, zero pośredników. Dołącz do 50+ salonów w UK i UE – z opcją prywatnej marki.",
    ctaOpenAccount: "Otwórz konto hurtowe",
    ctaWhatsApp: "Czat na WhatsApp",
    stats: [
      { stat: "19+", label: "Lat doświadczenia" },
      { stat: "100 %", label: "Włosy Remy" },
      { stat: "3–5 dni", label: "Ekspresowa wysyłka UK" },
      { stat: "Brak min.", label: "Pierwsze zamówienie" },
    ],
    whyTitle: "Dlaczego salony wybierają nas",
    whySubtitle: "Nie tylko dostawca — długoterminowy partner rozumiejący biznes salonu.",
    whyItems: [
      {
        title: "100 % włosy Remy",
        description:
          "Etyczne źródło, stała jakość. Każde włókno ma wyrównane łuski dla naturalnego, niewidocznego połączenia.",
      },
      {
        title: "Pełna gama",
        description: "Tape-In, K-Tip, Weft, Butterfly Weft, Hair Toppers i akcesoria. Jeden dostawca dla każdej metody.",
      },
      {
        title: "Factory-direct i ekspresowa wysyłka",
        description:
          "Cała gama wysyłana jest factory-direct ekspresem (3–5 dni). Bez międzykontynentalnego czekania.",
      },
      {
        title: "Konta hurtowe dostępne",
        description:
          "Dedykowane ceny hurtowe dla zarejestrowanych salonów. Bez pośredników, bez zawyżonych cen – prosto od źródła.",
      },
    ],
    rangeTitle: "Przegląd asortymentu",
    rangeSubtitle: "Od Tape-In do Butterfly Weft – wszystko, czego potrzebuje Twój salon, w ofercie i gotowe do szybkiej wysyłki.",
    rangeCols: { type: "Typ produktu", min: "Minimalne zamówienie", lead: "Typowy czas" },
    rangeRows: RANGE_EN,
    rangeFootnote: "Czegoś brakuje? Skontaktuj się z nami – być może to znajdziemy.",
    stepsTitle: "Jak otworzyć konto hurtowe",
    stepsSubtitle: "Prosto, szybko, bez zobowiązania do zgłoszenia.",
    steps: [
      {
        num: "01",
        title: "Napisz do nas z danymi salonu",
        desc: "Wyślij nazwę salonu, lokalizację i krótki opis. Zajmuje 2 minuty przez formularz lub WhatsApp.",
      },
      {
        num: "02",
        title: "Zakładamy Twoje konto hurtowe",
        desc: "Tworzymy konto i wysyłamy paczkę próbek powitalnych, byś poczuł jakość przed zamówieniem.",
      },
      {
        num: "03",
        title: "Zamawiaj online w cenach hurtowych",
        desc: "Otrzymaj ekskluzywne ceny, zamawiaj kiedy chcesz, z dedykowanym wsparciem.",
      },
    ],
    trust: [
      { title: "Zaufane przez salony", desc: "50+ salonów z UK i UE u nas zamawia" },
      { title: "Jakość pro", desc: "100 % Remy, wyrównane łuski" },
      { title: "Ekspresowa wysyłka", desc: "Wysyłka w 3–5 dni przez DHL/UPS" },
    ],
    ctaTitle: "Otwórz konto hurtowe już dziś",
    ctaSubtitle: "Wypełnij formularz – odpowiemy w ciągu 24 godzin z cenami hurtowymi.",
    ctaEmailLine: "Lub napisz do nas bezpośrednio: info@dshairbeauty.co.uk",
    form: {
      name: "Twoje imię i nazwisko *",
      namePh: "Imię i nazwisko",
      salon: "Nazwa salonu *",
      salonPh: "np. The Hair Studio",
      email: "Adres e-mail *",
      emailPh: "ty@twójslon.pl",
      message: "Wiadomość (opcjonalnie)",
      messagePh: "Opowiedz o salonie, metodach lub pytaniach...",
      submit: "Otwórz moje konto hurtowe",
      submitting: "Wysyłanie...",
      successTitle: "Zgłoszenie otrzymane!",
      successBody: "Dziękujemy – wyślemy cennik hurtowy w ciągu 24 godzin.",
      successWhatsApp: "Dopytaj na WhatsApp",
      footWhatsApp: "Napisz do nas na WhatsApp",
      footNote: "— odpowiadamy w ciągu 2 godzin.",
    },
  },
}
