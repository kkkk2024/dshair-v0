import type { Locale } from "@/lib/i18n/config"

export interface SpFormLabels {
  title: string
  subtitle: string
  name: string
  namePh: string
  salon: string
  salonPh: string
  location: string
  locationPh: string
  email: string
  emailPh: string
  phone: string
  phonePh: string
  methodsLabel: string
  methodOptions: string[]
  spendLabel: string
  spendOptions: { value: string; label: string }[]
  serveHeader: string
  currentSupplierLabel: string
  currentSupplierPh: string
  currentSupplierHint: string
  foundLabel: string
  foundOptions: { value: string; label: string }[]
  instagramLabel: string
  instagramPh: string
  instagramHint: string
  notesLabel: string
  notesPh: string
  submit: string
  submitting: string
  successTitle: string
  successBody: string
  successNote: string
  successWhatsApp: string
  footWhatsApp: string
  footNote: string
}

export interface SalonPartnerContent {
  metaTitle: string
  metaDescription: string
  badge: string
  heroTitle: string
  heroSubtitle: string
  ctaApply: string
  ctaWhatsApp: string
  ambassadorCta: string
  stats: { stat: string; label: string }[]
  benefitsTitle: string
  benefitsSubtitle: string
  benefits: { title: string; desc: string; highlight: boolean }[]
  productsTitle: string
  productsSubtitle: string
  products: { name: string; tag: string; desc: string }[]
  productsCta: string
  productsNote: string
  stepsTitle: string
  stepsSubtitle: string
  steps: { num: string; title: string; desc: string }[]
  form: SpFormLabels
}

const PRODUCTS_EN = [
  { name: "Hand-Tied Weft", tag: "Most Requested", desc: "Ultra-thin, flat lay. Perfect for fine and medium hair. White salon clients love the invisible result." },
  { name: "Balayage Weft", tag: "Trending", desc: "Custom balayage colour blending. Ready to install — no additional colouring needed at the salon." },
  { name: "Nano Ring Extensions", tag: "Best Seller", desc: "No heat, no glue. One of the most popular professional methods for salons." },
  { name: "Tape-In Extensions", tag: "Classic", desc: "Quick application, seamless blend. Our pro-grade tape lasts 6–8 weeks with proper care." },
  { name: "K-Tip Keratin Extensions", tag: "Premium", desc: "Individual strand application for a completely natural result. 100% Remy cuticle-aligned." },
  { name: "Hair Topper", tag: "Specialist", desc: "Crown coverage for thinning hair. Rapidly growing demand — an underserved niche." },
]

const BENEFITS_EN = [
  { title: "Wholesale Trade Pricing", desc: "30–50% below retail. Direct factory pricing with no middlemen.", highlight: false },
  { title: "Free Digital Colour Catalogue", desc: "Every new salon partner receives our full digital colour catalogue — 40+ shades, completely free, accessible instantly.", highlight: false },
  { title: "UK Stock + Express Factory-Direct", desc: "UK warehouse launching, plus factory-direct express (3–5 days) for the full range. No waiting weeks for stock.", highlight: false },
  { title: "Custom Colour Matching", desc: "Our specialist provides a free digital colour-matching consultation. We match your clients precisely, remotely or on request.", highlight: false },
  { title: "No Minimum Order to Start", desc: "Start small, scale as you grow. No pressure to over-stock. Order what you need, when you need it.", highlight: false },
  { title: "Priority Access to New Stock", desc: "Partners get first access to new hand-tied wefts, balayage blends, and seasonal colours before general release.", highlight: false },
  { title: "Ambassador Programme", desc: "Refer other salons and earn commission. Bronze, Silver, and Gold tiers with increasing rewards.", highlight: true },
]

const STEPS_EN = [
  { num: "01", title: "Fill in the Application", desc: "Tell us about your salon — name, location, and the methods you specialise in. Takes 2 minutes." },
  { num: "02", title: "We Review & Contact You", desc: "We respond within 24 hours via WhatsApp or email with your trade price list." },
  { num: "03", title: "Receive Your Welcome Kit", desc: "Your digital colour catalogue and tailored trade pricing are sent right away, with a dedicated WhatsApp contact for ongoing support." },
  { num: "04", title: "Start Supplying Your Clients", desc: "Place orders as you need them. No minimum, no pressure. We grow with you." },
]

const METHOD_OPTIONS_EN = ["Hand-Tied Weft", "Nano Ring", "Tape-In", "K-Tip", "Balayage", "Clip-In"]
const SPEND_EN = [
  { value: "", label: "Select range" },
  { value: "under-500", label: "Under £500" },
  { value: "500-1500", label: "£500 – £1,500" },
  { value: "1500-5000", label: "£1,500 – £5,000" },
  { value: "over-5000", label: "Over £5,000" },
]
const FOUND_EN = [
  { value: "", label: "Select one" },
  { value: "google", label: "Google Search" },
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "referral", label: "Word of Mouth / Referral" },
  { value: "trade-show", label: "Trade Show / Event" },
  { value: "other", label: "Other" },
]

export const salonPartnerContent: Record<Locale, SalonPartnerContent> = {
  en: {
    metaTitle: "Salon Partner Programme | Trade Hair Extensions | D.S Hair Beauty",
    metaDescription:
      "Join the D.S Hair Beauty Salon Partner Programme. Wholesale Remy hair extensions for UK & EU salons. Trade pricing, no minimums, free digital colour catalogue, express factory-direct supply.",
    badge: "Salon Partner Programme",
    heroTitle: "Your Trade Hair Extension Supplier. Trade Prices. No Minimums.",
    heroSubtitle:
      "Join our growing UK & EU network of professional salons. Get wholesale pricing on 100% Remy human hair extensions — with express factory-direct supply (3–5 days) and select UK-stocked lines.",
    ctaApply: "Apply for Trade Account",
    ctaWhatsApp: "WhatsApp Us First",
    ambassadorCta: "Learn More →",
    stats: [
      { stat: "19+", label: "Years Supply Experience" },
      { stat: "£0", label: "Minimum First Order" },
      { stat: "3–5 Days", label: "Express UK Shipping" },
      { stat: "Free", label: "Digital Colour Catalogue" },
    ],
    benefitsTitle: "What You Get as a Partner",
    benefitsSubtitle: "More than a supplier. A business partner who wants your salon to succeed.",
    benefits: BENEFITS_EN,
    productsTitle: "Products for Professional Salons",
    productsSubtitle: "Specialising in the methods Manchester's white hair salons demand most.",
    products: PRODUCTS_EN,
    productsCta: "Browse All Professional Products",
    productsNote: "Trade pricing available after account approval",
    stepsTitle: "How to Get Started",
    stepsSubtitle: "Simple, fast, no commitment required to apply.",
    steps: STEPS_EN,
    form: {
      title: "Apply for a Trade Account",
      subtitle: "Fill in the form below — we will be in touch within 24 hours with your trade price list.",
      name: "Your Name *",
      namePh: "First & Last Name",
      salon: "Salon Name *",
      salonPh: "e.g. The Hair Studio",
      location: "Salon Location *",
      locationPh: "e.g. Didsbury, Manchester / Salford",
      email: "Email Address *",
      emailPh: "you@yoursalon.co.uk",
      phone: "WhatsApp / Phone *",
      phonePh: "+44 7xxx xxxxxx",
      methodsLabel: "Extension Methods You Offer",
      methodOptions: METHOD_OPTIONS_EN,
      spendLabel: "Estimated Monthly Spend on Hair Extensions",
      spendOptions: SPEND_EN,
      serveHeader: "Help us serve you better",
      currentSupplierLabel: "Current Supplier",
      currentSupplierPh: "e.g. Gold Hair / Great Lengths / None yet",
      currentSupplierHint: "Helps us understand your current setup",
      foundLabel: "How did you find us?",
      foundOptions: FOUND_EN,
      instagramLabel: "Salon Instagram (optional)",
      instagramPh: "@yoursalon",
      instagramHint: "We will follow you back — let's connect",
      notesLabel: "Anything else you would like us to know?",
      notesPh: "Questions, specific needs, or anything you want us to know...",
      submit: "Submit Application",
      submitting: "Submitting...",
      successTitle: "Application Received!",
      successBody: "Thank you — we will send your trade price list within 24 hours.",
      successNote: "For faster response, message us directly on WhatsApp:",
      successWhatsApp: "Follow Up on WhatsApp",
      footWhatsApp: "Message us on WhatsApp",
      footNote: "— we respond within 2 hours.",
    },
  },
  de: {
    metaTitle: "Salon-Partner-Programm | Handelswimpern | D.S Hair Beauty",
    metaDescription:
      "Treten Sie dem D.S Hair Beauty Salon-Partner-Programm bei. Remy-Haarverlängerungen für UK- & EU-Salons. Handelspreise, keine Mindestmengen, kostenloser Farbkatalog, Express-Factory-Direct.",
    badge: "Salon-Partner-Programm",
    heroTitle: "Ihr Handelslieferant für Haarverlängerungen. Handelspreise. Keine Mindestmengen.",
    heroSubtitle:
      "Treten Sie unserem wachsenden UK- & EU-Netzwerk professioneller Salons bei. Erhalten Sie Großhandelspreise für 100 % Remy-Menschenhaar – mit Express-Factory-Direct (3–5 Tage) und ausgewählten UK-lagernden Linien.",
    ctaApply: "Handelskonto beantragen",
    ctaWhatsApp: "WhatsApp zuerst",
    ambassadorCta: "Mehr erfahren →",
    stats: [
      { stat: "19+", label: "Jahre Belieferung" },
      { stat: "£0", label: "Mindest-Erstbestellung" },
      { stat: "3–5 Tage", label: "Express-Versand UK" },
      { stat: "Kostenlos", label: "Digitaler Farbkatalog" },
    ],
    benefitsTitle: "Was Sie als Partner bekommen",
    benefitsSubtitle: "Mehr als ein Lieferant. Ein Geschäftspartner, der Ihren Salon zum Erfolg führen will.",
    benefits: [
      { title: "Großhandels-Handelspreise", desc: "30–50 % unter Retail. Direkte Fabrikpreise ohne Zwischenhändler.", highlight: false },
      { title: "Kostenloser digitaler Farbkatalog", desc: "Jeder neue Salonpartner erhält unseren vollen digitalen Farbkatalog — 40+ Schattierungen, völlig kostenlos, sofort verfügbar.", highlight: false },
      { title: "UK-Lager + Express Factory-Direct", desc: "UK-Lager im Aufbau, plus Factory-Direct-Express (3–5 Tage) für die volle Palette. Kein Wochenlanges Warten.", highlight: false },
      { title: "Individuelle Farbabstimmung", desc: "Unsere Spezialistin bietet eine kostenlose digitale Farbabstimmung. Wir treffen Ihre Kunden präzise, remote oder auf Wunsch.", highlight: false },
      { title: "Kein Mindestbestellwert zum Start", desc: "Klein anfangen, mit dem Wachstum skalieren. Kein Überlagerungsdruck. Bestellen Sie, was Sie brauchen.", highlight: false },
      { title: "Vorrang bei Neuem Stock", desc: "Partner erhalten zuerst Zugriff auf neue Hand-Tied Wefts, Balayage-Mischungen und Saisonfarben vor der allgemeinen Freigabe.", highlight: false },
      { title: "Ambassador-Programm", desc: "Empfehlen Sie andere Salons und verdienen Sie Provision. Bronze-, Silber- und Gold-Stufen mit wachsenden Belohnungen.", highlight: true },
    ],
    productsTitle: "Produkte für professionelle Salons",
    productsSubtitle: "Spezialisiert auf die Methoden, die Manchesters weißhaarige Salons am meisten fordern.",
    products: [
      { name: "Hand-Tied Weft", tag: "Am meisten angefragt", desc: "Ultradünn, flach. Perfekt für feines und mittleres Haar. Kunden lieben das unsichtbare Ergebnis." },
      { name: "Balayage Weft", tag: "Im Trend", desc: "Individuelle Balayage-Farbmischung. Fertig zum Einbauen — keine zusätzliche Färbung nötig." },
      { name: "Nano Ring Extensions", tag: "Bestseller", desc: "Keine Hitze, kein Kleber. Eine der beliebtesten Profi-Methoden für Salons." },
      { name: "Tape-In Extensions", tag: "Klassisch", desc: "Schnelle Anwendung, nahtlose Mischung. Unser Pro-Tape hält bei pfleglicher Behandlung 6–8 Wochen." },
      { name: "K-Tip Keratin Extensions", tag: "Premium", desc: "Einzelstrang-Anwendung für ein völlig natürliches Ergebnis. 100 % Remy cuticula-ausgerichtet." },
      { name: "Hair Topper", tag: "Spezial", desc: "Kronenabdeckung für dünner werdendes Haar. Schnell wachsende Nachfrage — eine Nische." },
    ],
    productsCta: "Alle professionellen Produkte ansehen",
    productsNote: "Handelspreise nach Konto-Freigabe verfügbar",
    stepsTitle: "So starten Sie",
    stepsSubtitle: "Einfach, schnell, ohne Verpflichtung zur Bewerbung.",
    steps: [
      { num: "01", title: "Füllen Sie die Bewerbung aus", desc: "Erzählen Sie uns von Ihrem Salon — Name, Standort und Methoden. Dauert 2 Minuten." },
      { num: "02", title: "Wir prüfen und kontaktieren Sie", desc: "Wir antworten innerhalb von 24 Stunden per WhatsApp oder E-Mail mit Ihrer Handelspreisliste." },
      { num: "03", title: "Erhalten Sie Ihr Willkommenspaket", desc: "Ihr digitaler Farbkatalog und maßgeschneiderte Handelspreise werden sofort gesendet, mit dedizierter WhatsApp-Kontakt." },
      { num: "04", title: "Beginnen Sie mit der Belieferung", desc: "Bestellen Sie nach Bedarf. Kein Minimum, kein Druck. Wir wachsen mit Ihnen." },
    ],
    form: {
      title: "Handelskonto beantragen",
      subtitle: "Füllen Sie das Formular aus – wir melden uns innerhalb von 24 Stunden mit Ihrer Handelspreisliste.",
      name: "Ihr Name *",
      namePh: "Vor- & Nachname",
      salon: "Salonname *",
      salonPh: "z. B. The Hair Studio",
      location: "Salonstandort *",
      locationPh: "z. B. Didsbury, Manchester / Salford",
      email: "E-Mail-Adresse *",
      emailPh: "sie@ihrsalon.co.uk",
      phone: "WhatsApp / Telefon *",
      phonePh: "+44 7xxx xxxxxx",
      methodsLabel: "Angebotene Extension-Methoden",
      methodOptions: METHOD_OPTIONS_EN,
      spendLabel: "Geschätzter monatlicher Haarverlängerungs-Umsatz",
      spendOptions: [
        { value: "", label: "Bereich wählen" },
        { value: "under-500", label: "Unter £500" },
        { value: "500-1500", label: "£500 – £1.500" },
        { value: "1500-5000", label: "£1.500 – £5.000" },
        { value: "over-5000", label: "Über £5.000" },
      ],
      serveHeader: "Helfen Sie uns, Sie besser zu bedienen",
      currentSupplierLabel: "Aktueller Lieferant",
      currentSupplierPh: "z. B. Gold Hair / Great Lengths / Noch keiner",
      currentSupplierHint: "Hilft uns, Ihr Setup zu verstehen",
      foundLabel: "Wie haben Sie uns gefunden?",
      foundOptions: [
        { value: "", label: "Bitte wählen" },
        { value: "google", label: "Google Suche" },
        { value: "instagram", label: "Instagram" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "referral", label: "Mundpropaganda / Empfehlung" },
        { value: "trade-show", label: "Messe / Event" },
        { value: "other", label: "Anderes" },
      ],
      instagramLabel: "Salon Instagram (optional)",
      instagramPh: "@ihrsalon",
      instagramHint: "Wir folgen zurück — verbinden wir uns",
      notesLabel: "Sonst noch etwas?",
      notesPh: "Fragen, spezielle Bedarfe oder alles, was wir wissen sollen...",
      submit: "Bewerbung absenden",
      submitting: "Wird gesendet...",
      successTitle: "Bewerbung erhalten!",
      successBody: "Danke – wir senden Ihre Handelspreisliste innerhalb von 24 Stunden.",
      successNote: "Für schnellere Antwort schreiben Sie uns direkt auf WhatsApp:",
      successWhatsApp: "Auf WhatsApp nachhaken",
      footWhatsApp: "Schreiben Sie uns auf WhatsApp",
      footNote: "— wir antworten innerhalb von 2 Stunden.",
    },
  },
  fr: {
    metaTitle: "Programme Partenaire Salon | Extensions pro | D.S Hair Beauty",
    metaDescription:
      "Rejoignez le Programme Partenaire Salon D.S Hair Beauty. Extensions Remy pour salons UK & UE. Prix pro, sans minimum, catalogue couleur gratuit, expédition express factory-direct.",
    badge: "Programme Partenaire Salon",
    heroTitle: "Votre fournisseur pro d'extensions. Prix pro. Sans minimum.",
    heroSubtitle:
      "Rejoignez notre réseau grandissant de salons pro UK & UE. Prix de gros sur cheveux Remy 100 % — avec expédition express factory-direct (3–5 jours) et lignes stockées UK.",
    ctaApply: "Demander un compte pro",
    ctaWhatsApp: "WhatsApp d'abord",
    ambassadorCta: "En savoir plus →",
    stats: [
      { stat: "19+", label: "Ans d'approvisionnement" },
      { stat: "£0", label: "1re commande min." },
      { stat: "3–5 jours", label: "Express UK" },
      { stat: "Gratuit", label: "Catalogue couleur" },
    ],
    benefitsTitle: "Ce que vous obtenez en tant que partenaire",
    benefitsSubtitle: "Plus qu'un fournisseur. Un partenaire qui veut la réussite de votre salon.",
    benefits: [
      { title: "Prix de gros pro", desc: "30–50 % sous le détail. Prix usine directs, sans intermédiaire.", highlight: false },
      { title: "Catalogue couleur numérique gratuit", desc: "Chaque nouveau partenaire reçoit notre catalogue couleur complet — 40+ teintes, gratuit, accès immédiat.", highlight: false },
      { title: "Stock UK + express factory-direct", desc: "Entrepôt UK en cours, plus express factory-direct (3–5 jours) pour toute la gamme. Pas d'attente de semaines.", highlight: false },
      { title: "Colorimétrie personnalisée", desc: "Notre spécialiste propose une consultation colorimétrie numérique gratuite. On match vos clientes précisément.", highlight: false },
      { title: "Aucune commande min. au départ", desc: "Démarrez petit, évoluez. Pas de surstock, pas de pression. Commandez ce dont vous avez besoin.", highlight: false },
      { title: "Accès prioritaire aux nouveautés", desc: "Les partenaires reçoivent en premier les nouveaux wefts, mélanges balayage et couleurs saisonnières.", highlight: false },
      { title: "Programme Ambassadeur", desc: "Parrainez d'autres salons et gagnez une commission. Paliers Bronze, Argent, Or avec récompenses croissantes.", highlight: true },
    ],
    productsTitle: "Produits pour salons pro",
    productsSubtitle: "Spécialisé dans les méthodes que demandent le plus les salons à cheveux blancs de Manchester.",
    products: [
      { name: "Hand-Tied Weft", tag: "Le plus demandé", desc: "Ultra-fin, plat. Parfait pour cheveux fins et moyens. Résultat invisible apprécié." },
      { name: "Balayage Weft", tag: "Tendance", desc: "Mélange balayage personnalisé. Prêt à poser — pas de coloration supplémentaire." },
      { name: "Nano Ring Extensions", tag: "Best-seller", desc: "Sans chaleur, sans colle. Une des méthodes pro les plus populaires." },
      { name: "Tape-In Extensions", tag: "Classique", desc: "Pose rapide, mélange invisible. Notre ruban pro tient 6–8 semaines bien entretenu." },
      { name: "K-Tip Keratin Extensions", tag: "Premium", desc: "Pose mèche par mèche pour un résultat naturel. 100 % Remy à cuticule alignée." },
      { name: "Hair Topper", tag: "Spécialiste", desc: "Couverture du sommet pour cheveux clairsemés. Demande en forte croissance — une niche." },
    ],
    productsCta: "Voir tous les produits pro",
    productsNote: "Tarifs pro disponibles après validation du compte",
    stepsTitle: "Comment démarrer",
    stepsSubtitle: "Simple, rapide, sans engagement pour postuler.",
    steps: [
      { num: "01", title: "Remplissez la candidature", desc: "Parlez-nous de votre salon — nom, lieu, méthodes. 2 minutes." },
      { num: "02", title: "Nous examinons et vous contactons", desc: "Nous répondons sous 24 h via WhatsApp ou e-mail avec votre grille tarifaire." },
      { num: "03", title: "Recevez votre kit d'accueil", desc: "Votre catalogue couleur et prix dédiés sont envoyés aussitôt, avec contact WhatsApp dédié." },
      { num: "04", title: "Commencez à approvisionner", desc: "Commandez selon vos besoins. Pas de minimum, pas de pression. Nous grandissons avec vous." },
    ],
    form: {
      title: "Demander un compte pro",
      subtitle: "Remplissez le formulaire — nous répondons sous 24 h avec votre grille tarifaire.",
      name: "Votre nom *",
      namePh: "Prénom & nom",
      salon: "Nom du salon *",
      salonPh: "ex. The Hair Studio",
      location: "Emplacement du salon *",
      locationPh: "ex. Didsbury, Manchester / Salford",
      email: "Adresse e-mail *",
      emailPh: "vous@votresalon.fr",
      phone: "WhatsApp / Téléphone *",
      phonePh: "+44 7xxx xxxxxx",
      methodsLabel: "Méthodes d'extensions proposées",
      methodOptions: METHOD_OPTIONS_EN,
      spendLabel: "Dépense mensuelle estimée en extensions",
      spendOptions: [
        { value: "", label: "Choisir une fourchette" },
        { value: "under-500", label: "Moins de £500" },
        { value: "500-1500", label: "£500 – £1 500" },
        { value: "1500-5000", label: "£1 500 – £5 000" },
        { value: "over-5000", label: "Plus de £5 000" },
      ],
      serveHeader: "Aidez-nous à mieux vous servir",
      currentSupplierLabel: "Fournisseur actuel",
      currentSupplierPh: "ex. Gold Hair / Great Lengths / Aucun",
      currentSupplierHint: "Nous aide à comprendre votre setup",
      foundLabel: "Comment nous avez-vous trouvés ?",
      foundOptions: [
        { value: "", label: "Choisir" },
        { value: "google", label: "Recherche Google" },
        { value: "instagram", label: "Instagram" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "referral", label: "Bouche-à-oreille" },
        { value: "trade-show", label: "Salon / Événement" },
        { value: "other", label: "Autre" },
      ],
      instagramLabel: "Instagram du salon (optionnel)",
      instagramPh: "@votresalon",
      instagramHint: "Nous vous suivrons en retour — connectons-nous",
      notesLabel: "Autre chose à nous dire ?",
      notesPh: "Questions, besoins spécifiques, ou tout ce que vous voulez nous dire...",
      submit: "Envoyer la candidature",
      submitting: "Envoi en cours...",
      successTitle: "Candidature reçue !",
      successBody: "Merci — nous envoyons votre grille tarifaire sous 24 h.",
      successNote: "Pour réponse plus rapide, écrivez-nous sur WhatsApp :",
      successWhatsApp: "Suivi sur WhatsApp",
      footWhatsApp: "Écrivez-nous sur WhatsApp",
      footNote: "— nous répondons sous 2 h.",
    },
  },
  ar: {
    metaTitle: "برنامج شركاء الصالونات | وصلات شعر تجارية | D.S Hair Beauty",
    metaDescription:
      "انضم إلى برنامج شركاء صالون D.S Hair Beauty. وصلات ريمي لصالونات بريطانيا والاتحاد الأوروبي. أسعار جملة، بلا حد أدنى، كتالوج ألوان مجاني، شحن سريع مباشر من المصنع.",
    badge: "برنامج شركاء الصالونات",
    heroTitle: "مورد وصلات الشعر التجاري. أسعار الجملة. بلا حد أدنى.",
    heroSubtitle:
      "انضم إلى شبكتنا المتنامية من الصالونات المحترفة في بريطانيا والاتحاد الأوروبي. احصل على أسعار الجملة لشعر ريمي 100% — مع شحن سريع مباشر من المصنع (3–5 أيام) وخطوط مخزنة في بريطانيا.",
    ctaApply: "اطلب حساباً تجارياً",
    ctaWhatsApp: "واتساب أولاً",
    ambassadorCta: "اعرف المزيد ←",
    stats: [
      { stat: "19+", label: "سنوات توريد" },
      { stat: "£0", label: "حد أدنى لأول طلب" },
      { stat: "3–5 أيام", label: "شحن سريع بريطانيا" },
      { stat: "مجاني", label: "كتالوج ألوان رقمي" },
    ],
    benefitsTitle: "ماذا تحصل كشريك",
    benefitsSubtitle: "ليس مجرد مورد. شريك يريد نجاح صالونك.",
    benefits: [
      { title: "أسعار جملة تجارية", desc: "أقل 30–50% من التجزئة. أسعار مصنع مباشرة بلا وسطاء.", highlight: false },
      { title: "كتالوج ألوان رقمي مجاني", desc: "كل شريك صالون جديد يحصل على كتالوج الألوان الرقمي الكامل — 40+ درجة، مجاني تماماً، متاح فوراً.", highlight: false },
      { title: "ستوك بريطاني + مباشر من المصنع", desc: "مستودع بريطاني قيد الإطلاق، plus شحن سريع مباشر (3–5 أيام) لكامل المجموعة. لا انتظار أسابيع.", highlight: false },
      { title: "مطابقة لون مخصصة", desc: "تقدم أخصائيتنا استشارة مطابقة لون رقمية مجانية. نطابق عميلاتك بدقة، عن بُعد أو عند الطلب.", highlight: false },
      { title: "بلا حد أدنى للبدء", desc: "ابدأ صغيراً، وسّع مع نموك. بلا ضغط تكديس. اطلب ما تحتاجه.", highlight: false },
      { title: "وصول أولوي للستوك الجديد", desc: "يحصل الشركاء أولاً على الويفات المربوطة يدوياً والخلطات البالاياج والألوان الموسمية قبل الإصدار العام.", highlight: false },
      { title: "برنامج السفير", desc: "أحِل صالونات أخرى واكسب عمولة. مستويات برونز وفضي وذهبي بمكافآت متزايدة.", highlight: true },
    ],
    productsTitle: "منتجات للصالونات المحترفة",
    productsSubtitle: "متخصصون في الطرق التي يطلبها أكثر صالونات مانشستر ذات الشعر الأبيض.",
    products: [
      { name: "Hand-Tied Weft", tag: "الأكثر طلباً", desc: "شديدة الرقة ومسطحة. مثالية للشعر الناعم والمتوسط. النتيجة غير المرئية التي يحبها العملاء." },
      { name: "Balayage Weft", tag: "رائج", desc: "مزج لون بالاياج مخصص. جاهز للتركيب — بلا حاجة لتلوين إضافي." },
      { name: "Nano Ring Extensions", tag: "الأكثر مبيعاً", desc: "بلا حرارة بلا صمغ. من أكثر الطرق المهنية شعبية للصالونات." },
      { name: "Tape-In Extensions", tag: "كلاسيكي", desc: "تركيب سريع، امتزاز سلس. شريطنا الاحترافي يدوم 6–8 أسابيع مع العناية." },
      { name: "K-Tip Keratin Extensions", tag: "بريميوم", desc: "تركيب خصلة بخصله لنتيجة طبيعية تماماً. ريمي 100% بقشرة متجانسة." },
      { name: "Hair Topper", tag: "متخصص", desc: "تغطية قمة الرأس للشعر المتناثر. طلب متنامٍ — نيوش لم تُخدم." },
    ],
    productsCta: "تصفح كل المنتجات المهنية",
    productsNote: "أسعار الجملة متاحة بعد اعتماد الحساب",
    stepsTitle: "كيف تبدأ",
    stepsSubtitle: "بسيط وسريع، بلا التزام للتقديم.",
    steps: [
      { num: "01", title: "املأ الطلب", desc: "أخبرنا عن صالونك — الاسم والموقع والطرق. يستغرق دقيقتين." },
      { num: "02", title: "نراجع ونتواصل معك", desc: "نرد خلال 24 ساعة عبر واتساب أو إيميل بقائمة أسعار الجملة." },
      { num: "03", title: "استلم حقيبة الترحيب", desc: "يُرسل كتالوج الألوان الرقمي وأسعارك المخصصة فوراً، مع رقم واتساب مخصص للدعم." },
      { num: "04", title: "ابدأ توريد عملائك", desc: "اطلب حسب الحاجة. بلا حد أدنى بلا ضغط. ننمو معك." },
    ],
    form: {
      title: "اطلب حساباً تجارياً",
      subtitle: "املأ النموذج — سنتواصل خلال 24 ساعة بقائمة أسعار الجملة.",
      name: "اسمك *",
      namePh: "الاسم الأول والأخير",
      salon: "اسم الصالون *",
      salonPh: "مثال: The Hair Studio",
      location: "موقع الصالون *",
      locationPh: "مثال: Didsbury, Manchester / Salford",
      email: "البريد الإلكتروني *",
      emailPh: "you@yoursalon.co.uk",
      phone: "واتساب / هاتف *",
      phonePh: "+44 7xxx xxxxxx",
      methodsLabel: "طرق الوصلات التي تقدمها",
      methodOptions: METHOD_OPTIONS_EN,
      spendLabel: "الإنفاق الشهري المقدر على الوصلات",
      spendOptions: [
        { value: "", label: "اختر نطاقاً" },
        { value: "under-500", label: "أقل من £500" },
        { value: "500-1500", label: "£500 – £1,500" },
        { value: "1500-5000", label: "£1,500 – £5,000" },
        { value: "over-5000", label: "أكثر من £5,000" },
      ],
      serveHeader: "ساعدنا في خدمتك بشكل أفضل",
      currentSupplierLabel: "المورد الحالي",
      currentSupplierPh: "مثال: Gold Hair / Great Lengths / لا شيء بعد",
      currentSupplierHint: "يساعدنا في فهم وضعك الحالي",
      foundLabel: "كيف وجدتنا؟",
      foundOptions: [
        { value: "", label: "اختر واحداً" },
        { value: "google", label: "بحث Google" },
        { value: "instagram", label: "Instagram" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "referral", label: "الإحالة الشفوية" },
        { value: "trade-show", label: "معرض / فعالية" },
        { value: "other", label: "أخرى" },
      ],
      instagramLabel: "إنستغرام الصالون (اختياري)",
      instagramPh: "@yoursalon",
      instagramHint: "سنتابعك بالمقابل — لنترتبط",
      notesLabel: "أي شيء آخر تريد أن تعرفنا به؟",
      notesPh: "أسئلة أو احتياجات محددة أو أي شيء...",
      submit: "إرسال الطلب",
      submitting: "جارٍ الإرسال...",
      successTitle: "تم استلام الطلب!",
      successBody: "شكراً — سنرسل قائمة أسعار الجملة خلال 24 ساعة.",
      successNote: "لرد أسرع، راسلنا مباشرة على واتساب:",
      successWhatsApp: "متابعة عبر واتساب",
      footWhatsApp: "راسلنا على واتساب",
      footNote: "— نرد خلال ساعتين.",
    },
  },
  sv: {
    metaTitle: "Salongpartnerprogram | Handelsförlängning | D.S Hair Beauty",
    metaDescription:
      "Gå med i D.S Hair Beauty Salongpartnerprogram. Remy-förlängning för UK- & EU-salonger. Handelspriser, inget minimum, gratis färgkatalog, express factory-direct.",
    badge: "Salongpartnerprogram",
    heroTitle: "Din handelsleverantör för hårförlängning. Handelspriser. Inga minimier.",
    heroSubtitle:
      "Gå med i vårt växande nätverk av proffssalonger i Storbritannien & EU. Få partipriser på 100 % Remy — med express factory-direct (3–5 dagar) och utvalda UK-lagerlinjer.",
    ctaApply: "Ansök om handelskonto",
    ctaWhatsApp: "WhatsApp först",
    ambassadorCta: "Läs mer →",
    stats: [
      { stat: "19+", label: "År av leverans" },
      { stat: "£0", label: "Minimiförsta order" },
      { stat: "3–5 dagar", label: "Express UK" },
      { stat: "Gratis", label: "Digital färgkatalog" },
    ],
    benefitsTitle: "Vad du får som partner",
    benefitsSubtitle: "Mer än en leverantör. En affärspartner som vill att din salong ska lyckas.",
    benefits: [
      { title: "Partipriser", desc: "30–50 % under butik. Direkta fabrikspriser utan mellanhänder.", highlight: false },
      { title: "Gratis digital färgkatalog", desc: "Varje ny salongpartner får vår fulla digitala färgkatalog — 40+ nyanser, helt gratis, direkt tillgänglig.", highlight: false },
      { title: "UK-lager + express factory-direct", desc: "UK-lager öppnar, plus factory-direct express (3–5 dagar) för hela sortimentet. Ingen veckoväntan.", highlight: false },
      { title: "Anpassad färgmatchning", desc: "Vår specialist ger gratis digital färgmatchning. Vi träffar dina kunder exakt, på distans eller på begäran.", highlight: false },
      { title: "Inget minimi att börja", desc: "Börja smått, skala när du växer. Inget överlagerstryck. Beställ vad du behöver.", highlight: false },
      { title: "Företräde till nytt lager", desc: "Partner får först tillgång till nya hand-tied wefts, balayage-blandningar och säsongsfärger före release.", highlight: false },
      { title: "Ambassadörsprogram", desc: "Hänvisa andra salonger och tjäna provision. Brons-, silver- och guldnivåer med växande belöningar.", highlight: true },
    ],
    productsTitle: "Produkter för proffssalonger",
    productsSubtitle: "Specialiserad på metoderna Manchesters vitahårssalonger efterfrågar mest.",
    products: [
      { name: "Hand-Tied Weft", tag: "Mest efterfrågad", desc: "Ultra-tunn, platt. Perfekt för fint och medelhår. Osynligt resultat kunder älskar." },
      { name: "Balayage Weft", tag: "Trendigt", desc: "Anpassad balayage-färgblandning. Klar att montera — ingen extra färgning behövs." },
      { name: "Nano Ring Extensions", tag: "Bästsäljare", desc: "Ingen värme, inget lim. En av de populäraste proffsmetoderna." },
      { name: "Tape-In Extensions", tag: "Klassisk", desc: "Snabb applicering, sömlös blandning. Vårt pro-tejp håller 6–8 veckor vid vård." },
      { name: "K-Tip Keratin Extensions", tag: "Premium", desc: "Strå-för-strå-applicering för helt naturligt resultat. 100 % Remy cuticula-riktat." },
      { name: "Hair Topper", tag: "Specialist", desc: "Kron-täckning för tunnare hår. Snabbt växande efterfrågan — en nisch." },
    ],
    productsCta: "Bläddra alla proffsprodukter",
    productsNote: "Partipriser tillgängliga efter kontogodkännande",
    stepsTitle: "Så kommer du igång",
    stepsSubtitle: "Enkelt, snabbt, inget åtagande för att ansöka.",
    steps: [
      { num: "01", title: "Fyll i ansökan", desc: "Berätta om din salong — namn, plats och metoder. Tar 2 minuter." },
      { num: "02", title: "Vi granskar och kontaktar dig", desc: "Vi svarar inom 24 timmar via WhatsApp eller e-post med din prislista." },
      { num: "03", title: "Få din välkomstkit", desc: "Din digitala färgkatalog och skräddarsydda priser skickas direkt, med dedikerad WhatsApp-kontakt." },
      { num: "04", title: "Börja försörja dina kunder", desc: "Beställ efter behov. Inget minimum, inget tryck. Vi växer med dig." },
    ],
    form: {
      title: "Ansök om handelskonto",
      subtitle: "Fyll i formuläret — vi hör av oss inom 24 timmar med din prislista.",
      name: "Ditt namn *",
      namePh: "För- och efternamn",
      salon: "Salongens namn *",
      salonPh: "t.ex. The Hair Studio",
      location: "Salongens plats *",
      locationPh: "t.ex. Didsbury, Manchester / Salford",
      email: "E-postadress *",
      emailPh: "du@dinsalong.se",
      phone: "WhatsApp / Telefon *",
      phonePh: "+44 7xxx xxxxxx",
      methodsLabel: "Extension-metoder du erbjuder",
      methodOptions: METHOD_OPTIONS_EN,
      spendLabel: "Uppskattad månatlig spend på förlängning",
      spendOptions: [
        { value: "", label: "Välj intervall" },
        { value: "under-500", label: "Under £500" },
        { value: "500-1500", label: "£500 – £1 500" },
        { value: "1500-5000", label: "£1 500 – £5 000" },
        { value: "over-5000", label: "Över £5 000" },
      ],
      serveHeader: "Hjälp oss serve dig bättre",
      currentSupplierLabel: "Nuvarande leverantör",
      currentSupplierPh: "t.ex. Gold Hair / Great Lengths / Ingen än",
      currentSupplierHint: "Hjälper oss förstå din setup",
      foundLabel: "Hur hittade du oss?",
      foundOptions: [
        { value: "", label: "Välj en" },
        { value: "google", label: "Google-sök" },
        { value: "instagram", label: "Instagram" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "referral", label: "Mun-till-mun" },
        { value: "trade-show", label: "Mässa / Event" },
        { value: "other", label: "Annat" },
      ],
      instagramLabel: "Salong Instagram (valfritt)",
      instagramPh: "@dinsalong",
      instagramHint: "Vi följer tillbaka — hör av dig",
      notesLabel: "Något mer du vill berätta?",
      notesPh: "Frågor, specifika behov eller något du vill säga...",
      submit: "Skicka ansökan",
      submitting: "Skickar...",
      successTitle: "Ansökan mottagen!",
      successBody: "Tack — vi skickar din prislista inom 24 timmar.",
      successNote: "För snabbare svar, skriv till oss på WhatsApp:",
      successWhatsApp: "Följ upp på WhatsApp",
      footWhatsApp: "Skriv till oss på WhatsApp",
      footNote: "— vi svarar inom 2 timmar.",
    },
  },
  pl: {
    metaTitle: "Program Partner Salonu | Handel przedłużeniami | D.S Hair Beauty",
    metaDescription:
      "Dołącz do Programu Partnera Salonu D.S Hair Beauty. Przedłużanie Remy dla salonów UK i UE. Ceny hurtowe, brak minimów, darmowy katalog kolorów, ekspresowa wysyłka factory-direct.",
    badge: "Program Partnera Salonu",
    heroTitle: "Twój handlowy dostawca przedłużania. Ceny hurtowe. Bez minimów.",
    heroSubtitle:
      "Dołącz do rosnącej sieci profesjonalnych salonów w UK i UE. Ceny hurtowe za 100 % Remy — z ekspresową wysyłką factory-direct (3–5 dni) i wybranymi liniami magazynowanymi w UK.",
    ctaApply: "Złóż wniosek o konto hurtowe",
    ctaWhatsApp: "WhatsApp najpierw",
    ambassadorCta: "Dowiedz się więcej →",
    stats: [
      { stat: "19+", label: "Lat dostaw" },
      { stat: "£0", label: "Min. pierwsze zamówienie" },
      { stat: "3–5 dni", label: "Ekspres UK" },
      { stat: "Darmowy", label: "Katalog kolorów" },
    ],
    benefitsTitle: "Co zyskujesz jako partner",
    benefitsSubtitle: "Więcej niż dostawca. Partner biznesowy, który chce sukcesu Twojego salonu.",
    benefits: [
      { title: "Hurtowe ceny handlowe", desc: "30–50 % poniżej detalu. Bezpośrednie ceny fabryczne bez pośredników.", highlight: false },
      { title: "Darmowy cyfrowy katalog kolorów", desc: "Każdy nowy partner otrzymuje pełny katalog — 40+ odcieni, całkowicie za darmo, od razu dostępny.", highlight: false },
      { title: "Magazyn UK + ekspres factory-direct", desc: "Magazyn UK w przygotowaniu, plus ekspres factory-direct (3–5 dni) na całą gamę. Bez tygodni czekania.", highlight: false },
      { title: "Dobór koloru na zamówienie", desc: "Nasza specjalistka robi darmową cyfrową konsultację koloru. Trafiamy precyzyjnie, zdalnie lub na życzenie.", highlight: false },
      { title: "Brak minimum na start", desc: "Zacznij małe, skaluj wraz ze wzrostem. Bez presji przepełnienia. Zamów, czego potrzebujesz.", highlight: false },
      { title: "Priorytetowy dostęp do nowości", desc: "Partnerzy pierwsi dostają nowe hand-tied wefty, mieszanki balayage i kolory sezonowe przed premierą.", highlight: false },
      { title: "Program Ambasadorski", desc: "Polecaj inne salony i zarabiaj prowizję. Poziomy Brązowy, Srebrny, Złoty z rosnącymi nagrodami.", highlight: true },
    ],
    productsTitle: "Produkty dla salonów profesjonalnych",
    productsSubtitle: "Specjalizacja w metodach, których najbardziej domagają się salony z jasnymi włosami w Manchesterze.",
    products: [
      { name: "Hand-Tied Weft", tag: "Najczęściej zamawiany", desc: "Ultracienki, płaski. Idealny dla cienkich i średnich włosów. Klientki kochają niewidoczny efekt." },
      { name: "Balayage Weft", tag: "Trendy", desc: "Indywidualne mieszanie balayage. Gotowe do montażu — bez dodatkowego farbowania." },
      { name: "Nano Ring Extensions", tag: "Bestseller", desc: "Bez ciepła, bez kleju. Jedna z najpopularniejszych metod zawodowych." },
      { name: "Tape-In Extensions", tag: "Klasyk", desc: "Szybka aplikacja, niewidoczne połączenie. Nasza taśma pro trzyma 6–8 tygodni przy pielęgnacji." },
      { name: "K-Tip Keratin Extensions", tag: "Premium", desc: "Aplikacja pasmami dla całkowicie naturalnego efektu. 100 % Remy, wyrównane łuski." },
      { name: "Hair Topper", tag: "Specjalistyczny", desc: "Pokrycie czubka dla przerzedzonych włosów. Szybko rosnący popyt — nisza." },
    ],
    productsCta: "Przeglądaj wszystkie produkty pro",
    productsNote: "Ceny hurtowe dostępne po zatwierdzeniu konta",
    stepsTitle: "Jak zacząć",
    stepsSubtitle: "Prosto, szybko, bez zobowiązania do zgłoszenia.",
    steps: [
      { num: "01", title: "Wypełnij zgłoszenie", desc: "Opowiedz o salonie — nazwa, lokalizacja, metody. Zajmuje 2 minuty." },
      { num: "02", title: "Sprawdzamy i kontaktujemy", desc: "Odpowiadamy w ciągu 24 godzin przez WhatsApp lub e-mail z cennikiem." },
      { num: "03", title: "Otrzymaj zestaw powitalny", desc: "Katalog cyfrowy i ceny wysyłane od razu, z dedykowanym kontaktem WhatsApp." },
      { num: "04", title: "Zacznij zaopatrywać klientów", desc: "Zamawiaj wg potrzeb. Bez minimum, bez presji. Rośniemy z Tobą." },
    ],
    form: {
      title: "Złóż wniosek o konto hurtowe",
      subtitle: "Wypełnij formularz — odezwiemy się w ciągu 24 godzin z cennikiem.",
      name: "Twoje imię i nazwisko *",
      namePh: "Imię i nazwisko",
      salon: "Nazwa salonu *",
      salonPh: "np. The Hair Studio",
      location: "Lokalizacja salonu *",
      locationPh: "np. Didsbury, Manchester / Salford",
      email: "Adres e-mail *",
      emailPh: "ty@twójslon.pl",
      phone: "WhatsApp / Telefon *",
      phonePh: "+44 7xxx xxxxxx",
      methodsLabel: "Metody przedłużania, które oferujesz",
      methodOptions: METHOD_OPTIONS_EN,
      spendLabel: "Szacowane miesięczne wydatki na przedłużanie",
      spendOptions: [
        { value: "", label: "Wybierz zakres" },
        { value: "under-500", label: "Poniżej £500" },
        { value: "500-1500", label: "£500 – £1 500" },
        { value: "1500-5000", label: "£1 500 – £5 000" },
        { value: "over-5000", label: "Powyżej £5 000" },
      ],
      serveHeader: "Pomóż nam lepiej Ci służyć",
      currentSupplierLabel: "Obecny dostawca",
      currentSupplierPh: "np. Gold Hair / Great Lengths / Jeszcze żaden",
      currentSupplierHint: "Pomaga nam zrozumieć Twoją sytuację",
      foundLabel: "Jak nas znalazłeś?",
      foundOptions: [
        { value: "", label: "Wybierz" },
        { value: "google", label: "Wyszukiwanie Google" },
        { value: "instagram", label: "Instagram" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "referral", label: "Polecenie" },
        { value: "trade-show", label: "Targi / Wydarzenie" },
        { value: "other", label: "Inne" },
      ],
      instagramLabel: "Salon Instagram (opcjonalnie)",
      instagramPh: "@twójslon",
      instagramHint: "Odpiszemy obserwacją — połączmy się",
      notesLabel: "Coś jeszcze, co chcesz nam przekazać?",
      notesPh: "Pytania, specyficzne potrzeby lub cokolwiek...",
      submit: "Wyślij wniosek",
      submitting: "Wysyłanie...",
      successTitle: "Wniosek otrzymany!",
      successBody: "Dziękujemy — wyślemy cennik w ciągu 24 godzin.",
      successNote: "Dla szybszej odpowiedzi napisz do nas na WhatsApp:",
      successWhatsApp: "Dopytaj na WhatsApp",
      footWhatsApp: "Napisz do nas na WhatsApp",
      footNote: "— odpowiadamy w ciągu 2 godzin.",
    },
  },
}
