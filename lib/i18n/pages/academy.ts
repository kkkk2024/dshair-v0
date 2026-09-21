import type { Locale } from "../config"

export interface AcademyFeature {
  title: string
  description: string
}
export interface AcademyCredential {
  title: string
  description: string
}
export interface SpecFaq {
  q: string
  a: string
}
export interface AcademyContent {
  metaTitle: string
  metaDescription: string
  heroBadge: string
  heroTitleLine1: string
  heroTitleHighlight: string
  heroSubtitle: string
  waitlistCta: string
  learnMoreCta: string
  poweredByLabel: string
  partner1Name: string
  partner1Sub: string
  partnerWithLabel: string
  partner2Name: string
  partner2Sub: string
  whyTitle: string
  whySubtitle: string
  features: AcademyFeature[]
  storyEyebrow: string
  storyTitle: string
  storyParas: string[]
  credentialsTitle: string
  credentials: AcademyCredential[]
  waitlistTitle: string
  waitlistSubtitle: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  submitBtn: string
  submittingBtn: string
  privacyNote: string
  successTitle: string
  successMsg: string
  successContactLabel: string
  successContactEmail: string
  faqTitle: string
  faqs: SpecFaq[]
}

export const academyContent: Record<Locale, AcademyContent> = {
  en: {
    metaTitle: "Salon Partner Programme | D.S HAIR & BEAUTY",
    metaDescription:
      "Factory-direct salon partner programme for UK & EU salons. Private label support, product knowledge and trade pricing — backed by 19 years of hair extension manufacturing.",
    heroBadge: "Coming Soon — Salon Partner Programme",
    heroTitleLine1: "Build a Profitable",
    heroTitleHighlight: "Extension Service.",
    heroSubtitle:
      "A factory-direct partner programme for salon owners — private label support, product knowledge and trade pricing, backed by 19 years of hair extension manufacturing.",
    waitlistCta: "Join the Waitlist",
    learnMoreCta: "Learn More",
    poweredByLabel: "Programme By",
    partner1Name: "D.S HAIR & BEAUTY",
    partner1Sub: "Factory-Direct · 19 Years",
    partnerWithLabel: "For",
    partner2Name: "Salon Owners",
    partner2Sub: "UK & EU · Private Label",
    whyTitle: "Why This Programme Is Different",
    whySubtitle:
      "A practical partner programme — product knowledge, private label support and trade pricing for salons that want to build a profitable extension service.",
    features: [
      { title: "Private Label Support", description: "Launch your own extension line with our private label service. We handle manufacturing so you can focus on your salon brand." },
      { title: "Product Knowledge", description: "Get the technical details that matter — hair grades, weft types, colour matching and application methods — so you can advise clients with confidence." },
      { title: "Trade Pricing", description: "Wholesale pricing structured for salons. The more you reorder, the better your margin." },
      { title: "Priority Reorder Support", description: "Dedicated support for repeat orders. Tell us your shade mix and volumes; we keep your line moving." },
      { title: "Factory-Direct Supply", description: "Order straight from our manufacturing partner. Shorter lead times and consistent batch quality across reorders." },
      { title: "Salon Partner Community", description: "Join a network of UK & EU salon partners sharing colour trends, display ideas and growth playbooks." },
    ],
    storyEyebrow: "Our Approach",
    storyTitle: "Built on 19 Years of Manufacturing",
    storyParas: [
      "D.S. Hair & Beauty has spent 19 years manufacturing hair extensions for salons and brands across the UK & EU — building the supply chain, quality control and private label capability that salon partners rely on today.",
      "We are a factory-direct supplier, not a training academy. Our focus is helping salon owners build a profitable extension service with reliable supply, private label support and trade pricing.",
      "The Salon Partner Programme is how we work with a smaller group of salons more closely — sharing product knowledge and priority support as your extension service grows.",
    ],
    credentialsTitle: "What You Get",
    credentials: [
      { title: "Factory-Direct", description: "19 years manufacturing Remy hair extensions" },
      { title: "Private Label Ready", description: "Your brand, our production line" },
      { title: "UK & EU Supply", description: "Express 3–5 day delivery from our manufacturing partner" },
    ],
    waitlistTitle: "Join the Waitlist",
    waitlistSubtitle:
      "Be the first to know when the programme opens. Early waitlist members receive priority access and exclusive launch offers.",
    nameLabel: "Your Name",
    namePlaceholder: "First & Last Name",
    emailLabel: "Email Address",
    emailPlaceholder: "you@yoursalon.co.uk",
    submitBtn: "Join the Waitlist",
    submittingBtn: "Submitting...",
    privacyNote: "We respect your privacy. No spam, ever.",
    successTitle: "You're on the List!",
    successMsg:
      "Thank you for joining our waitlist. We will notify you as soon as the Salon Partner Programme opens for enrollment.",
    successContactLabel: "Questions? Contact us at",
    successContactEmail: "partners@dshairbeauty.co.uk",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "When does the programme open?", a: "We are finalising the structure and onboarding. Join the waitlist to be notified first." },
      { q: "Is this a training course?", a: "No. This is a supply and brand partnership, not a certification course. We share product knowledge to support your salon, not formal training." },
      { q: "Do I need to buy a minimum order?", a: "Trade pricing applies from your first wholesale order. Speak to us about starter volumes that suit a single salon." },
      { q: "How is support delivered?", a: "Through your dedicated partner contact — reorder support, shade planning and product questions, by email and WhatsApp." },
    ],
  },
  de: {
    metaTitle: "Salon-Partnerprogramm | D.S HAIR & BEAUTY",
    metaDescription: "Factory-direct Partnerprogramm für Salons in UK & EU. Private-Label-Unterstützung, Produktwissen und Handelspreise — gestützt auf 19 Jahre Haarverlängerungsfertigung.",
    heroBadge: "Demnächst — Salon-Partnerprogramm",
    heroTitleLine1: "Aufbau eines profitablen",
    heroTitleHighlight: "Extensions-Service.",
    heroSubtitle: "Ein factory-direct Partnerprogramm für Saloninhaber — Private-Label-Unterstützung, Produktwissen und Handelspreise, gestützt auf 19 Jahre Haarverlängerungsfertigung.",
    waitlistCta: "Warteliste beitreten",
    learnMoreCta: "Mehr erfahren",
    poweredByLabel: "Programm von",
    partner1Name: "D.S HAIR & BEAUTY",
    partner1Sub: "Factory-Direct · 19 Jahre",
    partnerWithLabel: "Für",
    partner2Name: "Saloninhaber",
    partner2Sub: "UK & EU · Private Label",
    whyTitle: "Warum dieses Programm anders ist",
    whySubtitle: "Ein praktisches Partnerprogramm — Produktwissen, Private-Label-Unterstützung und Handelspreise für Salons, die einen profitablen Extensions-Service aufbauen wollen.",
    features: [
      { title: "Private-Label-Unterstützung", description: "Starten Sie Ihre eigene Extensions-Linie mit unserem Private-Label-Service. Wir übernehmen die Fertigung, damit Sie sich auf Ihre Salonmarke konzentrieren können." },
      { title: "Produktwissen", description: "Erhalten Sie die wichtigen technischen Details — Haarqualitäten, Weft-Typen, Farbanpassung und Applikationsmethoden — damit Sie Kunden sicher beraten können." },
      { title: "Handelspreise", description: "Großhandelspreise, strukturiert für Salons. Je öfter Sie nachbestellen, desto besser Ihre Marge." },
      { title: "Vorrang-Nachbestellung", description: "Dedizierter Support für Folgebestellungen. Sagen Sie uns Ihre Farbmischung und Mengen; wir halten Ihre Linie am Laufen." },
      { title: "Factory-Direct-Lieferung", description: "Bestellen Sie direkt von unserem Fertigungspartner. Kürzere Lieferzeiten und gleichbleibende Chargenqualität bei Nachbestellungen." },
      { title: "Salon-Partner-Community", description: "Werden Sie Teil eines Netzwerks aus UK- & EU-Salonpartnern, die Farbtrends, Präsentationsideen und Wachstumsstrategien teilen." },
    ],
    storyEyebrow: "Unser Ansatz",
    storyTitle: "Aufgebaut auf 19 Jahren Fertigung",
    storyParas: [
      "D.S. Hair & Beauty fertigt seit 19 Jahren Haarverlängerungen für Salons und Marken in UK & EU — und hat die Lieferkette, Qualitätskontrolle und Private-Label-Fähigkeit aufgebaut, auf die sich Salonpartner heute verlassen.",
      "Wir sind ein factory-direct Lieferant, keine Ausbildungsakademie. Unser Fokus liegt darauf, Saloninhabern mit zuverlässiger Lieferung, Private-Label-Unterstützung und Handelspreisen einen profitablen Extensions-Service aufzubauen.",
      "Das Salon-Partnerprogramm ist unsere Art, mit einer kleineren Gruppe von Salons enger zusammenzuarbeiten — wir teilen Produktwissen und Vorrang-Support, während Ihr Extensions-Service wächst.",
    ],
    credentialsTitle: "Was Sie erhalten",
    credentials: [
      { title: "Factory-Direct", description: "19 Jahre Fertigung von Remy-Haarverlängerungen" },
      { title: "Private-Label-bereit", description: "Ihre Marke, unsere Produktionslinie" },
      { title: "UK- & EU-Lieferung", description: "Expressversand 3–5 Tage von unserem Fertigungspartner" },
    ],
    waitlistTitle: "Warteliste beitreten",
    waitlistSubtitle: "Erfahre als Erster, wenn das Programm öffnet. Frühe Mitglieder der Warteliste erhalten Vorrang-Zugang und exklusive Startangebote.",
    nameLabel: "Dein Name",
    namePlaceholder: "Vor- & Nachname",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "du@deinsalon.co.uk",
    submitBtn: "Warteliste beitreten",
    submittingBtn: "Wird gesendet...",
    privacyNote: "Wir respektieren deine Privatsphäre. Kein Spam, nie.",
    successTitle: "Du bist auf der Liste!",
    successMsg: "Danke, dass du unserer Warteliste beigetreten bist. Wir benachrichtigen dich, sobald das Salon-Partnerprogramm für Einschreibungen öffnet.",
    successContactLabel: "Fragen? Kontaktiere uns unter",
    successContactEmail: "partners@dshairbeauty.co.uk",
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      { q: "Wann öffnet das Programm?", a: "Wir finalisieren derzeit Struktur und Onboarding. Tritt der Warteliste bei, um zuerst benachrichtigt zu werden." },
      { q: "Ist das ein Ausbildungskurs?", a: "Nein. Dies ist eine Liefer- und Markenpartnerschaft, kein Zertifizierungskurs. Wir vermitteln Produktwissen zur Unterstützung Ihres Salons, keine formale Ausbildung." },
      { q: "Muss ich eine Mindestbestellung kaufen?", a: "Handelspreise gelten ab Ihrer ersten Großhandelsbestellung. Sprechen Sie mit uns über Einstiegsvolumen für einen einzelnen Salon." },
      { q: "Wie wird der Support geliefert?", a: "Über Ihren dedizierten Partnerkontakt — Nachbestell-Support, Farbplanung und Produktfragen per E-Mail und WhatsApp." },
    ],
  },
  fr: {
    metaTitle: "Programme partenaire salon | D.S HAIR & BEAUTY",
    metaDescription: "Programme partenaire factory-direct pour salons au UK & UE. Support private label, connaissance produit et prix de gros — soutenu par 19 ans de fabrication d'extensions.",
    heroBadge: "Bientôt — Programme partenaire salon",
    heroTitleLine1: "Bâtissez un service",
    heroTitleHighlight: "Extensions rentable.",
    heroSubtitle: "Un programme partenaire factory-direct pour les propriétaires de salon — support private label, connaissance produit et prix de gros, soutenu par 19 ans de fabrication d'extensions.",
    waitlistCta: "Rejoindre la liste d'attente",
    learnMoreCta: "En savoir plus",
    poweredByLabel: "Programme par",
    partner1Name: "D.S HAIR & BEAUTY",
    partner1Sub: "Factory-Direct · 19 ans",
    partnerWithLabel: "Pour",
    partner2Name: "Propriétaires de salon",
    partner2Sub: "UK & UE · Private Label",
    whyTitle: "Pourquoi ce programme est différent",
    whySubtitle: "Un programme partenaire pratique — connaissance produit, support private label et prix de gros pour les salons qui veulent bâtir un service d'extensions rentable.",
    features: [
      { title: "Support Private Label", description: "Lancez votre propre ligne d'extensions avec notre service private label. Nous gérons la fabrication pour que vous puissiez vous concentrer sur la marque de votre salon." },
      { title: "Connaissance Produit", description: "Obtenez les détails techniques qui comptent — qualités de cheveux, types de weft, correspondance des couleurs et méthodes d'application — pour conseiller vos clientes en toute confiance." },
      { title: "Prix de Gros", description: "Tarifs de gros structurés pour les salons. Plus vous réapprovisionnez, meilleure est votre marge." },
      { title: "Support Prioritaire de Réapprovisionnement", description: "Un support dédié pour les commandes répétées. Indiquez-nous vos mélanges de teintes et volumes ; nous maintenons votre ligne en mouvement." },
      { title: "Approvisionnement Factory-Direct", description: "Commandez directement auprès de notre partenaire de fabrication. Délais plus courts et qualité de lot cohérente sur les réapprovisionnements." },
      { title: "Communauté de Partenaires Salon", description: "Rejoignez un réseau de partenaires salon UK & UE partageant tendances de couleurs, idées d'affichage et méthodes de croissance." },
    ],
    storyEyebrow: "Notre approche",
    storyTitle: "Bâti sur 19 ans de fabrication",
    storyParas: [
      "D.S. Hair & Beauty fabrique des extensions capillaires depuis 19 ans pour les salons et marques du UK & de l'UE — développant la chaîne d'approvisionnement, le contrôle qualité et la capacité private label sur lesquels les partenaires salon s'appuient aujourd'hui.",
      "Nous sommes un fournisseur factory-direct, pas une académie de formation. Notre focus est d'aider les propriétaires de salon à bâtir un service d'extensions rentable avec une livraison fiable, un support private label et des prix de gros.",
      "Le Programme Partenaire Salon est notre façon de travailler plus étroitement avec un groupe restreint de salons — en partageant la connaissance produit et un support prioritaire à mesure que votre service d'extensions se développe.",
    ],
    credentialsTitle: "Ce que vous obtenez",
    credentials: [
      { title: "Factory-Direct", description: "19 ans de fabrication d'extensions Remy" },
      { title: "Prêt pour Private Label", description: "Votre marque, notre ligne de production" },
      { title: "Livraison UK & UE", description: "Livraison express 3–5 jours depuis notre partenaire de fabrication" },
    ],
    waitlistTitle: "Rejoindre la liste d'attente",
    waitlistSubtitle: "Soyez les premiers informés à l'ouverture du programme. Les membres précoces de la liste d'attente bénéficient d'un accès prioritaire et d'offres de lancement exclusives.",
    nameLabel: "Votre nom",
    namePlaceholder: "Prénom & Nom",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "vous@votresalon.co.uk",
    submitBtn: "Rejoindre la liste d'attente",
    submittingBtn: "Envoi en cours...",
    privacyNote: "Nous respectons votre vie privée. Aucun spam, jamais.",
    successTitle: "Vous êtes sur la liste !",
    successMsg: "Merci de vous être inscrit à notre liste d'attente. Nous vous informerons dès l'ouverture du programme partenaire aux inscriptions.",
    successContactLabel: "Des questions ? Contactez-nous à",
    successContactEmail: "partners@dshairbeauty.co.uk",
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "Quand le programme ouvre-t-il ?", a: "Nous finalisons la structure et l'onboarding. Rejoignez la liste d'attente pour être informé en premier." },
      { q: "Est-ce un cours de formation ?", a: "Non. C'est un partenariat d'approvisionnement et de marque, pas un cours de certification. Nous partageons la connaissance produit pour soutenir votre salon, pas une formation formelle." },
      { q: "Dois-je acheter une commande minimum ?", a: "Les prix de gros s'appliquent dès votre première commande de gros. Parlez-nous des volumes de démarrage adaptés à un salon unique." },
      { q: "Comment le support est-il assuré ?", a: "Via votre contact partenaire dédié — support de réapprovisionnement, planification des couleurs et questions produit, par e-mail et WhatsApp." },
    ],
  },
  ar: {
    metaTitle: "برنامج شركاء الصالون | D.S HAIR & BEAUTY",
    metaDescription: "برنامج شريك مباشر من المصنع لصالونات UK & UE. دعم العلامة الخاصة والمعرفة بالمنتج وأسعار الجملة — مدعوم بـ 19 عامًا من تصنيع إكسسوارات الشعر.",
    heroBadge: "قريباً — برنامج شركاء الصالون",
    heroTitleLine1: "ابنِ خدمة",
    heroTitleHighlight: "إكسسوارات مربحة.",
    heroSubtitle: "برنامج شريك مباشر من المصنع لأصحاب الصالونات — دعم العلامة الخاصة والمعرفة بالمنتج وأسعار الجملة — مدعوم بـ 19 عامًا من تصنيع إكسسوارات الشعر.",
    waitlistCta: "انضم لقائمة الانتظار",
    learnMoreCta: "اعرف المزيد",
    poweredByLabel: "البرنامج من",
    partner1Name: "D.S HAIR & BEAUTY",
    partner1Sub: "مباشر من المصنع · 19 عاماً",
    partnerWithLabel: "لـ",
    partner2Name: "أصحاب الصالونات",
    partner2Sub: "UK & UE · علامة خاصة",
    whyTitle: "لماذا يختلف هذا البرنامج",
    whySubtitle: "برنامج شريك عملي — معرفة بالمنتج ودعم العلامة الخاصة وأسعار الجملة للصالونات التي تريد بناء خدمة إكسسوارات مربحة.",
    features: [
      { title: "دعم العلامة الخاصة", description: "أطلق خط إكسسواراتك الخاص بخدمة العلامة الخاصة لدينا. نحن نتولى التصنيع حتى تتمكن من التركيز على علامة صالونك التجارية." },
      { title: "معرفة بالمنتج", description: "احصل على التفاصيل الفنية المهمة — درجات الشعر وأنواع الويفت ومطابقة الألوان وطرق التطبيق — لتتمكن من إرشاد العملاء بثقة." },
      { title: "أسعار الجملة", description: "أسعار الجملة مصممة للصالونات. كلما زادت إعادة طلبك، زاد هامش ربحك." },
      { title: "دعم أولوية إعادة الطلب", description: "دعم مخصص للطلبات المتكررة. أخبرنا بخلطات ألوانك وأحجامك؛ نحن نبقي خطك متحركاً." },
      { title: "توريد مباشر من المصنع", description: "اطلب مباشرة من شريك التصنيع لدينا. أوقات تسليم أقصر وجودة دفعة متسقة عبر إعادة الطلبات." },
      { title: "مجتمع شركاء الصالون", description: "انضم إلى شبكة من شركاء الصالونات في UK & UE يشاركون اتجاهات الألوان وأفكار العرض وطرق النمو." },
    ],
    storyEyebrow: "نهجنا",
    storyTitle: "مبني على 19 عاماً من التصنيع",
    storyParas: [
      "تصنّع D.S. Hair & Beauty إكسسوارات الشعر منذ 19 عاماً لصالونات وعلامات تجارية في UK & UE — بناء سلسلة التوريد وضبط الجودة وقدرة العلامة الخاصة التي يعتمد عليها شركاء الصالونات اليوم.",
      "نحن مورّد مباشر من المصنع، وليس أكاديمية تدريب. تركيزنا مساعدة أصحاب الصالونات على بناء خدمة إكسسوارات مربحة بتوريد موثوق ودعم علامة خاصة وأسعار جملة.",
      "برنامج شركاء الصالون هو طريقتنا في العمل بشكل أوثق مع مجموعة أصغر من الصالونات — نشارك المعرفة بالمنتج ودعماً ذا أولوية مع نمو خدمة إكسسواراتك.",
    ],
    credentialsTitle: "ماذا تحصل",
    credentials: [
      { title: "مباشر من المصنع", description: "19 عاماً من تصنيع إكسسوارات Remy" },
      { title: "جاهز للعلامة الخاصة", description: "علامتك، خط إنتاجنا" },
      { title: "توريد UK & UE", description: "شحن سريع 3–5 أيام من شريك التصنيع لدينا" },
    ],
    waitlistTitle: "انضم لقائمة الانتظار",
    waitlistSubtitle: "كن أول من يعلم عند افتتاح البرنامج. يحصل أعضاء قائمة الانتظار المبكرون على وصول ذي أولوية وعروض إطلاق حصرية.",
    nameLabel: "اسمك",
    namePlaceholder: "الاسم الأول والاسم الأخير",
    emailLabel: "عنوان البريد الإلكتروني",
    emailPlaceholder: "you@yoursalon.co.uk",
    submitBtn: "انضم لقائمة الانتظار",
    submittingBtn: "جارٍ الإرسال...",
    privacyNote: "نحترم خصوصيتك. لا رسائل مزعجة، أبداً.",
    successTitle: "أنت على القائمة!",
    successMsg: "شكراً لانضمامك إلى قائمة الانتظار. سنخطرك فور افتتاح برنامج شركاء الصالون للتسجيل.",
    successContactLabel: "أسئلة؟ تواصل معنا على",
    successContactEmail: "partners@dshairbeauty.co.uk",
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { q: "متى يُفتح البرنامج؟", a: "نحن نعمل على وضع اللمسات الأخيرة على الهيكل والإعداد. انضم إلى قائمة الانتظار لتصلك الإشعارات أولاً." },
      { q: "هل هذا كورس تدريبي؟", a: "لا. هذه شراكة توريد وعلامة تجارية، وليست كورس شهادة. نحن نشارك المعرفة بالمنتج لدعم صالونك، لا تدريباً رسمياً." },
      { q: "هل أحتاج لشراء طلب أدنى؟", a: "تنطبق أسعار الجملة من أول طلب جملة لك. تحدث معنا عن أحجام البداية المناسبة لصالون واحد." },
      { q: "كيف يُقدَّم الدعم؟", a: "عبر جهة اتصال شريك مخصصة لك — دعم إعادة الطلب وتخطيط الألوان وأسئلة المنتج عبر البريد الإلكتروني وواتساب." },
    ],
  },
  sv: {
    metaTitle: "Salongpartnerprogram | D.S HAIR & BEAUTY",
    metaDescription: "Factory-direct partnerprogram för salonger i UK & EU. Private label-stöd, produktkunskap och partipriser — backat av 19 års tillverkning av hårförlängningar.",
    heroBadge: "Kommer snart — Salongpartnerprogram",
    heroTitleLine1: "Bygg en lönsam",
    heroTitleHighlight: "förlängningstjänst.",
    heroSubtitle: "Ett factory-direct partnerprogram för salongägare — private label-stöd, produktkunskap och partipriser, backat av 19 års tillverkning av hårförlängningar.",
    waitlistCta: "Gå med i väntelistan",
    learnMoreCta: "Läs mer",
    poweredByLabel: "Program av",
    partner1Name: "D.S HAIR & BEAUTY",
    partner1Sub: "Factory-Direct · 19 år",
    partnerWithLabel: "För",
    partner2Name: "Salongägare",
    partner2Sub: "UK & EU · Private Label",
    whyTitle: "Varför detta program är annorlunda",
    whySubtitle: "Ett praktiskt partnerprogram — produktkunskap, private label-stöd och partipriser för salonger som vill bygga en lönsam förlängningstjänst.",
    features: [
      { title: "Private Label-stöd", description: "Lansera din egen förlängningslinje med vår private label-tjänst. Vi sköter tillverkningen så att du kan fokusera på din salongs varumärke." },
      { title: "Produktkunskap", description: "Få de tekniska detaljer som spelar roll — harkvaliteter, weft-typer, färgmatchning och applikationsmetoder — så att du kan rådge kunder med trygghet." },
      { title: "Partipriser", description: "Partipriser strukturerade för salonger. Ju mer du beställer på nytt, desto bättre marginal." },
      { title: "Prioriterad återbeställning", description: "Dedikerat stöd för återkommande ordrar. Säg oss din färgblandning och volym; vi håller din linje i rörelse." },
      { title: "Factory-Direct-försörjning", description: "Beställ direkt från vår tillverkningspartner. Kortare ledtider och konsekvent batchkvalitet vid återbeställningar." },
      { title: "Salongpartner-community", description: "Gå med i ett nätverk av UK- & EU-salongpartners som delar färgtrender, displayidéer och tillväxtmetoder." },
    ],
    storyEyebrow: "Vårt tillvägagångssätt",
    storyTitle: "Byggt på 19 års tillverkning",
    storyParas: [
      "D.S. Hair & Beauty har tillverkat hårförlängningar i 19 år för salonger och varumärken i UK & EU — och byggt upp leveranskedjan, kvalitetskontrollen och private label-förmågan som salongpartners förlitar sig på idag.",
      "Vi är en factory-direct-leverantör, inte en utbildningsakademi. Vårt fokus är att hjälpa salongägare bygga en lönsam förlängningstjänst med pålitlig leverans, private label-stöd och partipriser.",
      "Salongpartnerprogrammet är vårt sätt att arbeta närmare med en mindre grupp salonger — vi delar produktkunskap och prioriterat stöd i takt med att din förlängningstjänst växer.",
    ],
    credentialsTitle: "Vad du får",
    credentials: [
      { title: "Factory-Direct", description: "19 års tillverkning av Remy-förlängningar" },
      { title: "Private Label-redo", description: "Ditt varumärke, vår produktionslinje" },
      { title: "UK- & EU-leverans", description: "Expressfrakt 3–5 dagar från vår tillverkningspartner" },
    ],
    waitlistTitle: "Gå med i väntelistan",
    waitlistSubtitle: "Var först att få veta när programmet öppnar. Tidiga medlemmar i väntelistan får prioritetsåtkomst och exklusiva lanserbjudanden.",
    nameLabel: "Ditt namn",
    namePlaceholder: "För- och efternamn",
    emailLabel: "E-postadress",
    emailPlaceholder: "du@dinsalong.co.uk",
    submitBtn: "Gå med i väntelistan",
    submittingBtn: "Skickar...",
    privacyNote: "Vi respekterar din integritet. Inga spam, någonsin.",
    successTitle: "Du är med på listan!",
    successMsg: "Tack för att du gick med i vår väntelista. Vi meddelar dig så snart salongpartnerprogrammet öppnar för anmälan.",
    successContactLabel: "Frågor? Kontakta oss på",
    successContactEmail: "partners@dshairbeauty.co.uk",
    faqTitle: "Vanliga frågor",
    faqs: [
      { q: "När öppnar programmet?", a: "Vi färdigställer för närvarande strukturen och onboardingen. Gå med i väntelistan för att bli underrättad först." },
      { q: "Är detta en utbildningskurs?", a: "Nej. Detta är ett leverans- och varumärkespartnerskap, inte en certifieringskurs. Vi delar produktkunskap för att stötta din salong, ingen formell utbildning." },
      { q: "Måste jag köpa ett minimibeställning?", a: "Partipriser gäller från din första partiorder. Prata med oss om startvolymer som passar en enskild salong." },
      { q: "Hur levereras supporten?", a: "Genom din dedikerade partnerkontakt — återbeställningsstöd, färgplanering och produktfrågor via e-post och WhatsApp." },
    ],
  },
  pl: {
    metaTitle: "Program Partnerski Salonów | D.S HAIR & BEAUTY",
    metaDescription: "Program partnerski factory-direct dla salonów w UK & UE. Wsparcie private label, wiedza o produktach i ceny hurtowe — oparte na 19 latach produkcji przedłużeń włosów.",
    heroBadge: "Wkrótce — Program Partnerski Salonów",
    heroTitleLine1: "Zbuduj dochodową",
    heroTitleHighlight: "usługę przedłużania.",
    heroSubtitle: "Program partnerski factory-direct dla właścicieli salonów — wsparcie private label, wiedza o produktach i ceny hurtowe — oparte na 19 latach produkcji przedłużeń włosów.",
    waitlistCta: "Dołącz do listy oczekujących",
    learnMoreCta: "Dowiedz się więcej",
    poweredByLabel: "Program przez",
    partner1Name: "D.S HAIR & BEAUTY",
    partner1Sub: "Factory-Direct · 19 lat",
    partnerWithLabel: "Dla",
    partner2Name: "Właściciele salonów",
    partner2Sub: "UK & UE · Private Label",
    whyTitle: "Dlaczego ten program jest inny",
    whySubtitle: "Praktyczny program partnerski — wiedza o produktach, wsparcie private label i ceny hurtowe dla salonów, które chcą zbudować dochodową usługę przedłużania.",
    features: [
      { title: "Wsparcie Private Label", description: "Uruchom własną linię przedłużeń dzięki naszej usłudze private label. My zajmujemy się produkcją, abyś mógł skupić się na marce swojego salonu." },
      { title: "Wiedza o Produktach", description: "Poznaj istotne szczegóły techniczne — klasy włosów, typy weft, dobór kolorów i metody aplikacji — aby z pewnością doradzać klientkom." },
      { title: "Ceny Hurtowe", description: "Ceny hurtowe ustrukturyzowane dla salonów. Im częściej zamawiasz ponownie, tym lepsza Twoja marża." },
      { title: "Priorytetowe Ponowne Zamawianie", description: "Dedykowane wsparcie dla zamówień powtarzanych. Podaj nam mieszanki odcieni i wolumeny; utrzymamy Twoją linię w ruchu." },
      { title: "Zaopatrzenie Factory-Direct", description: "Zamawiaj bezpośrednio od naszego partnera produkcyjnego. Krótsze czasy realizacji i spójna jakość partii przy ponownych zamówieniach." },
      { title: "Społeczność Partnerów Salonów", description: "Dołącz do sieci partnerów salonów z UK & UE dzielących się trendami kolorystycznymi, pomysłami na ekspozycję i strategiami wzrostu." },
    ],
    storyEyebrow: "Nasze podejście",
    storyTitle: "Oparte na 19 latach produkcji",
    storyParas: [
      "D.S. Hair & Beauty produkuje przedłużenia włosów od 19 lat dla salonów i marek w UK & UE — budując łańcuch dostaw, kontrolę jakości i możliwości private label, na których polegają dziś partnerzy salonów.",
      "Jesteśmy dostawcą factory-direct, a nie akademią szkoleniową. Naszym celem jest pomoc właścicielom salonów w budowie dochodowej usługi przedłużania dzięki niezawodnemu zaopatrzeniu, wsparciu private label i cenom hurtowym.",
      "Program Partnerski Salonów to nasz sposób na bliższą współpracę z mniejszą grupą salonów — dzielimy się wiedzą o produktach i priorytetowym wsparciem, gdy Twoja usługa przedłużania rośnie.",
    ],
    credentialsTitle: "Co otrzymujesz",
    credentials: [
      { title: "Factory-Direct", description: "19 lat produkcji przedłużeń Remy" },
      { title: "Gotowe na Private Label", description: "Twoja marka, nasza linia produkcyjna" },
      { title: "Dostawa UK & UE", description: "Ekspresowa wysyłka 3–5 dni od naszego partnera produkcyjnego" },
    ],
    waitlistTitle: "Dołącz do listy oczekujących",
    waitlistSubtitle: "Dowiedz się jako pierwszy, kiedy otworzy się program. Wcześni członkowie listy oczekujących otrzymują priorytetowy dostęp i ekskluzywne oferty premierowe.",
    nameLabel: "Twoje imię i nazwisko",
    namePlaceholder: "Imię i nazwisko",
    emailLabel: "Adres e-mail",
    emailPlaceholder: "ty@twójsalon.co.uk",
    submitBtn: "Dołącz do listy oczekujących",
    submittingBtn: "Wysyłanie...",
    privacyNote: "Szanujemy Twoją prywatność. Żadnego spamu, nigdy.",
    successTitle: "Jesteś na liście!",
    successMsg: "Dziękujemy za dołączenie do naszej listy oczekujących. Powiadomimy Cię, gdy tylko program partnerski otworzy się na zapisy.",
    successContactLabel: "Pytania? Skontaktuj się z nami pod",
    successContactEmail: "partners@dshairbeauty.co.uk",
    faqTitle: "Często zadawane pytania",
    faqs: [
      { q: "Kiedy otwiera się program?", a: "Obecnie finalizujemy strukturę i onboarding. Dołącz do listy oczekujących, aby otrzymywać powiadomienia jako pierwszy." },
      { q: "Czy to kurs szkoleniowy?", a: "Nie. To partnerstwo zaopatrzenia i marki, a nie kurs certyfikacyjny. Dzielimy się wiedzą o produktach, by wspierać Twój salon, bez formalnego szkolenia." },
      { q: "Czy muszę kupić zamówienie minimalne?", a: "Ceny hurtowe obowiązują od Twojego pierwszego zamówienia hurtowego. Porozmawiaj z nami o wolumenach startowych dla pojedynczego salonu." },
      { q: "Jak realizowane jest wsparcie?", a: "Przez Twój dedykowany kontakt partnerski — wsparcie ponownego zamawiania, planowanie kolorów i pytania o produkty przez e-mail i WhatsApp." },
    ],
  },
}

export function getAcademyContent(locale: Locale): AcademyContent {
  return academyContent[locale] ?? academyContent.en
}
