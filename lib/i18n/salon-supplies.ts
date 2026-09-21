import type { Locale } from './config'

export type SalonProductContent = {
  breadcrumbSupplies: string
  backToSupplies: string
  postageNote: string
  onePerSalon: string
  savePercent: (n: number) => string
  freeShippingNote: string
  keyFeatures: string
  whatIncluded: string
  weight: string
  monthlyUsage: string
  margin: string
  forLabel: string
  buyNow: (price: number) => string
  whatsappUs: string
  freeUkDelivery: string
  dispatchesNextDay: string
  tryBeforeTitle: string
  tryBeforeText: string
  getFreeSample: string
  whatsappMsg: (name: string) => string
}

export type SalonSuppliesContent = {
  metaTitle: string
  metaDescription: string
  heroBadge: string
  heroTitle1: string
  heroTitle2: string
  heroSubtitle: string
  shopBundles: string
  freeSample: string
  trustBadges: string[]
  sampleCtaTitle: string
  sampleCtaText: string
  sampleCtaButton: string
  bundlesEyebrow: string
  bundlesTitle: string
  bundlesText: string
  singlesEyebrow: string
  singlesTitle: string
  singlesText: string
  whyTitle: string
  whyText: string
  whyItems: { title: string; desc: string }[]
  faqTitle: string
  faqs: { q: string; a: string }[]
  waTitle: string
  waText: string
  waButton: string
  waWhatsappMsg: string
  cardDetails: string
  cardWhatsapp: string
  cardFree: string
  cardWhatsappMsg: (name: string) => string
  product: SalonProductContent
}

const en: SalonSuppliesContent = {
  metaTitle: 'Salon Consumables & Hair Extension Tools | Wholesale Supplies UK | D.S Hair Beauty',
  metaDescription:
    'Professional hair extension consumables for UK salons. Nano rings, tape tabs, sectioning clips, keratin glue & more. Quality supplies at factory prices. Express delivery. Trade pricing available.',
  heroBadge: 'New — Salon Consumables Range',
  heroTitle1: 'Extension Tools',
  heroTitle2: '& Consumables',
  heroSubtitle:
    'Professional-grade nano rings, tape tabs, tools & supplies for UK extension technicians. Quality products at honest prices — delivered to your salon.',
  shopBundles: 'Shop Bundles',
  freeSample: 'Sample Pack',
  trustBadges: ['Fast UK Delivery', 'Quality Guaranteed', 'Express 3–5 Day Dispatch', 'Factory-Direct Prices'],
  sampleCtaTitle: 'Try Before You Buy',
  sampleCtaText: 'Order a sample pack — sample price + £4.00 postage, both at your cost.',
  sampleCtaButton: 'Order Sample Pack',
  bundlesEyebrow: 'Bundles',
  bundlesTitle: 'Save More with Bundles',
  bundlesText:
    'Curated kits designed for real salon workflows. Everything you need in one box — and cheaper than buying separately.',
  singlesEyebrow: 'Individual Products',
  singlesTitle: 'Top Up Your Kit',
  singlesText: 'Already have your toolkit? Restock individual items as you need them. No minimum order.',
  whyTitle: 'Why Salon Owners Choose Us',
  whyText: "We are not just another supplier. We are a partner who understands your business.",
  whyItems: [
    {
      title: 'Save 30-60% vs High-Street Brands',
      desc: 'Same quality nano rings and tape tabs — at less than half the price of premium brands. Your profit margin is our priority.',
    },
    {
      title: 'No Minimum Order',
      desc: 'Order one pack or one hundred. We serve independent technicians and salon chains with the same care.',
    },
    {
      title: 'Real Human Support',
      desc: 'WhatsApp us anytime. We answer in minutes, not days. Because when you are mid-installation and short on supplies, you need answers now.',
    },
    {
      title: 'Express Dispatch',
      desc: 'Orders ship via express (3–5 days), UK-wide. Your supplies when you need them.',
    },
    {
      title: 'Quality Checked',
      desc: 'Every batch tested. Nano rings clamp flat. Tape tabs stick. We use the products ourselves before shipping to you.',
    },
    {
      title: 'Subscribe & Save',
      desc: 'Set up monthly auto-delivery on your restock pack. Never run out mid-appointment again.',
    },
  ],
  faqTitle: 'Frequently Asked Questions',
  faqs: [
    {
      q: 'How quickly will I receive my order?',
      a: 'Orders ship via express (3–5 days) across the UK. factory-direct express 3–5 day delivery. Tracked delivery on every order.',
    },
    {
      q: 'What if I am unhappy with the quality?',
      a: 'We stand by our products. If anything falls short of your expectations, contact us within 14 days for a full refund or replacement — no questions asked.',
    },
    {
      q: 'Do you offer trade accounts or wholesale pricing?',
      a: 'Yes! All our prices already include trade-level margins. For bulk orders (100+ units), contact us on WhatsApp for custom wholesale pricing.',
    },
    {
      q: 'Can I get a sample before placing a large order?',
      a: 'Yes — order our sample pack at the top of this page: sample price + £2.95 postage, both at your cost. Test the quality yourself.'
    },
    {
      q: 'How do nano rings compare between non-silicone and silicone-lined?',
      a: 'Non-silicone rings are our standard option — great for most hair types. Silicone-lined rings add extra grip and are gentler on fine, fragile, or slippery hair. Many technicians stock both.',
    },
  ],
  waTitle: 'Need Advice? WhatsApp Us',
  waText: 'Not sure which products to order? Want a custom quote for your salon? Message us on WhatsApp — we reply within minutes.',
  waButton: 'Chat on WhatsApp',
  waWhatsappMsg: 'Hi D.S HAIR & BEAUTY! I have a question about salon consumables.',
  cardDetails: 'Details',
  cardWhatsapp: 'WhatsApp',
  cardFree: 'SAMPLE',
  cardWhatsappMsg: (name) => `Hi! I'm interested in the ${name}. Can you help me order?`,
  product: {
    breadcrumbSupplies: 'Salon Supplies',
    backToSupplies: 'Back to all supplies',
    postageNote: '+ £4.00 postage',
    onePerSalon: 'One per salon. Limited time offer.',
    savePercent: (n) => `Save ${n}%`,
    freeShippingNote: 'Price includes tracked UK shipping',
    keyFeatures: 'Key Features',
    whatIncluded: 'What is Included',
    weight: 'Weight',
    monthlyUsage: 'Monthly Usage',
    margin: 'Margin',
    forLabel: 'For',
    buyNow: (price) => `Buy Now — £${price}`,
    whatsappUs: 'WhatsApp Us',
    freeUkDelivery: 'UK delivery',
    dispatchesNextDay: 'Dispatches next working day',
    tryBeforeTitle: 'Want to try before buying?',
    tryBeforeText: 'Order your sample pack. Test our quality in your own salon — sample price + £4.00 postage, at your cost.',
    getFreeSample: 'Get Sample Pack',
    whatsappMsg: (name) => `Hi! I'd like to order: ${name}. Can you help me?`,
  },
}

const de: SalonSuppliesContent = {
  metaTitle: 'Salon-Verbrauchsmaterial & Extension-Werkzeuge | Großhandel UK | D.S Hair Beauty',
  metaDescription:
    'Professionelle Extension-Verbrauchsmaterialien für UK-Salons. Nano-Ringe, Tape-Tabs, Clips, Keratin-Kleber & mehr. Qualität zu Fabrikpreisen. Gratis Versand. Handelspreise.',
  heroBadge: 'Neu — Salon-Verbrauchsmaterialien',
  heroTitle1: 'Extension-Werkzeuge',
  heroTitle2: '& Verbrauchsmaterial',
  heroSubtitle:
    'Professionelle Nano-Ringe, Tape-Tabs, Werkzeuge & Zubehör für Extension-Techniker in UK. Qualitätsprodukte zu fairen Preisen — direkt in Ihren Salon geliefert.',
  shopBundles: 'Bundles shoppen',
  freeSample: 'Musterpaket',
  trustBadges: ['Schneller UK-Versand', 'Qualität garantiert', 'Express-Versand 3–5 Tage', 'Fabrikpreise'],
  sampleCtaTitle: 'Testen Sie vor dem Kauf',
  sampleCtaText: 'Bestellen Sie ein Musterpaket — Musterpreis + £4,00 Porto, beides auf Ihre Kosten.',
  sampleCtaButton: 'Musterpaket bestellen',
  bundlesEyebrow: 'Bundles',
  bundlesTitle: 'Mehr sparen mit Bundles',
  bundlesText:
    'Kuratierte Sets für den echten Salon-Alltag. Alles, was Sie brauchen, in einer Box — und günstiger als einzeln gekauft.',
  singlesEyebrow: 'Einzelprodukte',
  singlesTitle: 'Ihr Set auffüllen',
  singlesText: 'Schon ausgestattet? Einzelne Artikel nach Bedarf nachbestellen. Keine Mindestmenge.',
  whyTitle: 'Warum Saloninhaber uns wählen',
  whyText: 'Wir sind nicht nur ein Lieferant. Wir sind ein Partner, der Ihr Geschäft versteht.',
  whyItems: [
    {
      title: '30–60 % sparen gegenüber High-Street-Marken',
      desc: 'Gleiche Qualität bei Nano-Ringen und Tape-Tabs — für weniger als die Hälfte des Preises von Premium-Marken. Ihre Marge ist unsere Priorität.',
    },
    {
      title: 'Keine Mindestbestellung',
      desc: 'Bestellen Sie ein Paket oder hundert. Wir betreuen Einzeltechniker und Salonketten mit derselben Sorgfalt.',
    },
    {
      title: 'Echter menschlicher Support',
      desc: 'WhatsApp uns jederzeit. Wir antworten in Minuten, nicht Tagen. Denn wenn Sie mitten in einer Anwendung sind und Zubehör fehlt, brauchen Sie sofort Antwort.',
    },
    {
      title: 'Express-Versand',
      desc: 'Bestellungen per Express (3–5 Tage) im gesamten UK. Ihr Zubehör, wenn Sie es brauchen.',
    },
    {
      title: 'Qualität geprüft',
      desc: 'Jede Charge getestet. Nano-Ringe klemmen flach. Tape-Tabs halten. Wir nutzen die Produkte selbst, bevor wir sie an Sie versenden.',
    },
    {
      title: 'Abo & sparen',
      desc: 'Richten Sie eine monatliche Auto-Lieferung für Ihr Nachbestell-Paket ein. Nie wieder mitten im Termin ohne Vorrat.',
    },
  ],
  faqTitle: 'Häufig gestellte Fragen',
  faqs: [
    {
      q: 'Wie schnell erhalte ich meine Bestellung?',
      a: 'Bestellungen werden per Express (3–5 Tage) im gesamten UK versendet. Sendungsverfolgung bei jeder Bestellung.',
    },
    {
      q: 'Was, wenn ich mit der Qualität unzufrieden bin?',
      a: 'Wir stehen zu unseren Produkten. Wenn etwas Ihren Erwartungen nicht entspricht, kontaktieren Sie uns innerhalb von 14 Tagen für volle Erstattung oder Ersatz — ohne Fragen.',
    },
    {
      q: 'Bieten Sie Handelskonten oder Großhandelspreise?',
      a: 'Ja! Alle unsere Preise enthalten bereits Handelsmargen. Für Großbestellungen (100+ Einheiten) kontaktieren Sie uns per WhatsApp für individuelle Großhandelspreise.',
    },
    {
      q: 'Kann ich vor einer großen Bestellung eine Probe erhalten?',
      a: 'Ja — bestellen Sie oben auf dieser Seite unser Musterpaket: Musterpreis + £2,95 Porto, beides auf Ihre Kosten. Testen Sie die Qualität selbst.'
    },
    {
      q: 'Wie unterscheiden sich nicht-silikonnierte und silikonbeschichtete Nano-Ringe?',
      a: 'Nicht-silikonnierte Ringe sind unsere Standardoption — gut für die meisten Haartypen. Silikonbeschichtete Ringe bieten mehr Griff und sind schonender bei feinem, fragil em oder rutschigem Haar. Viele Techniker führen beide.',
    },
  ],
  waTitle: 'Brauchen Sie Beratung? WhatsApp uns',
  waText: 'Nicht sicher, welche Produkte Sie bestellen sollen? Ein individuelles Angebot für Ihren Salon? Schreiben Sie uns auf WhatsApp — wir antworten innerhalb von Minuten.',
  waButton: 'Chat auf WhatsApp',
  waWhatsappMsg: 'Hallo D.S HAIR & BEAUTY! Ich habe eine Frage zu Salon-Verbrauchsmaterialien.',
  cardDetails: 'Details',
  cardWhatsapp: 'WhatsApp',
  cardFree: 'MUSTER',
  cardWhatsappMsg: (name) => `Hallo! Ich interessiere mich für ${name}. Können Sie mir bei der Bestellung helfen?`,
  product: {
    breadcrumbSupplies: 'Salon-Verbrauchsmaterial',
    backToSupplies: 'Zurück zu allen Artikeln',
    postageNote: '+ 4,00 £ Porto',
    onePerSalon: 'Eine pro Salon. Limitiertes Angebot.',
    savePercent: (n) => `Sparen ${n}%`,
    freeShippingNote: 'Preis inkl. versicherter UK-Versand',
    keyFeatures: 'Merkmale',
    whatIncluded: 'Lieferumfang',
    weight: 'Gewicht',
    monthlyUsage: 'Monatlicher Verbrauch',
    margin: 'Marge',
    forLabel: 'Für',
    buyNow: (price) => `Jetzt kaufen — ${price} £`,
    whatsappUs: 'WhatsApp uns',
    freeUkDelivery: 'UK-Versand',
    dispatchesNextDay: 'Versand am nächsten Werktag',
    tryBeforeTitle: 'Möchten Sie vor dem Kauf testen?',
    tryBeforeText: 'Bestellen Sie Ihr Musterpaket. Testen Sie unsere Qualität in Ihrem Salon — Musterpreis + 4,00 £ Porto, auf Ihre Kosten.',
    getFreeSample: 'Musterpaket bestellen',
    whatsappMsg: (name) => `Hallo! Ich möchte bestellen: ${name}. Können Sie helfen?`,
  },
}

const fr: SalonSuppliesContent = {
  metaTitle: 'Consommables Salon & Outils Extensions | Grossiste UK | D.S Hair Beauty',
  metaDescription:
    'Consommables professionnels pour salons extensions au UK. Anneaux nano, tabs adhésifs, clips, colle kératine & plus. Qualité aux prix usine. Livraison gratuite. Tarifs pro.',
  heroBadge: 'Nouveau — Gamme Consommables Salon',
  heroTitle1: 'Outils Extensions',
  heroTitle2: '& Consommables',
  heroSubtitle:
    'Anneaux nano, tabs adhésifs, outils & fournitures professionnels pour technicien·nes extensions au UK. Des produits de qualité à prix honnêtes — livrés dans votre salon.',
  shopBundles: 'Voir les packs',
  freeSample: 'Échantillon',
  trustBadges: ['Livraison UK rapide', 'Qualité garantie', 'Expédition express 3–5 j', 'Prix usine'],
  sampleCtaTitle: 'Essayez avant d’acheter',
  sampleCtaText: 'Commandez un pack échantillon — prix de l’échantillon + £4,00 de port, à votre charge.',
  sampleCtaButton: 'Commander l’échantillon',
  bundlesEyebrow: 'Packs',
  bundlesTitle: 'Économisez avec les packs',
  bundlesText:
    'Des kits pensés pour le vrai travail en salon. Tout ce qu’il vous faut dans une seule box — et moins cher qu’à l’unité.',
  singlesEyebrow: 'Produits individuels',
  singlesTitle: 'Réapprovisionnez votre kit',
  singlesText: 'Vous avez déjà votre trousse ? Restockez les articles un par un selon vos besoins. Sans commande minimum.',
  whyTitle: 'Pourquoi les salon choisissent nous',
  whyText: 'Nous ne sommes pas qu’un fournisseur. Nous sommes un partenaire qui comprend votre métier.',
  whyItems: [
    {
      title: 'Économisez 30-60 % vs marques grand public',
      desc: 'Même qualité d’anneaux nano et tabs adhésifs — à moins de la moitié du prix des marques premium. Votre marge est notre priorité.',
    },
    {
      title: 'Sans commande minimum',
      desc: 'Commandez un pack ou cent. Nous servons technicien·nes indépendant·es et chaînes de salons avec le même soin.',
    },
    {
      title: 'Un vrai support humain',
      desc: 'WhatsApp nous quand vous voulez. Nous répondons en minutes, pas en jours. Car quand vous êtes en pleine pose et à court de fournitures, il vous faut une réponse maintenant.',
    },
    {
      title: 'Expédition express',
      desc: 'Commandes expédiées en express (3–5 jours) dans tout le UK. Vos fournitures quand vous en avez besoin.',
    },
    {
      title: 'Qualité contrôlée',
      desc: 'Chaque lot testé. Les anneaux nano serrent à plat. Les tabs adhèrent. Nous utilisons les produits nous-mêmes avant de vous les expédier.',
    },
    {
      title: 'Abonnement & économies',
      desc: 'Mettez en place une livraison auto mensuelle pour votre pack de réappro. Plus jamais en panne en plein rendez-vous.',
    },
  ],
  faqTitle: 'Questions fréquentes',
  faqs: [
    {
      q: 'Comment recevrai-je ma commande rapidement ?',
      a: 'Les commandes sont expédiées en express (3–5 jours) dans tout le UK. Suivi sur chaque commande.',
    },
    {
      q: 'Et si je ne suis pas satisfait de la qualité ?',
      a: 'Nous garantissons nos produits. Si quelque chose ne répond pas à vos attentes, contactez-nous sous 14 jours pour remboursement ou échange intégral — sans question.',
    },
    {
      q: 'Proposez-vous des comptes pro ou prix grossistes ?',
      a: 'Oui ! Tous nos prix incluent déjà des marges pro. Pour les commandes en gros (100+ unités), contactez-nous sur WhatsApp pour un tarif personnalisé.',
    },
    {
      q: 'Puis-je avoir un échantillon avant une grosse commande ?',
      a: 'Oui — commandez notre pack échantillon en haut de page : prix de l’échantillon + £2,95 de port, à votre charge. Testez la qualité vous-même.'
    },
    {
      q: 'Différence entre anneaux nano sans et avec silicone ?',
      a: 'Les anneaux sans silicone sont notre option standard — parfaits pour la plupart des types de cheveux. Les anneaux silicone ajoutent de la prise et sont plus doux sur les cheveux fins, fragiles ou glissants. Beaucoup de technicien·nes ont les deux.',
    },
  ],
  waTitle: 'Besoin de conseil ? WhatsApp nous',
  waText: 'Vous ne savez pas quels produits commander ? Un devis personnalisé pour votre salon ? Écrivez-nous sur WhatsApp — nous répondons en minutes.',
  waButton: 'Discuter sur WhatsApp',
  waWhatsappMsg: 'Bonjour D.S HAIR & BEAUTY ! J\'ai une question sur les consommables salon.',
  cardDetails: 'Détails',
  cardWhatsapp: 'WhatsApp',
  cardFree: 'ÉCHANTILLON',
  cardWhatsappMsg: (name) => `Bonjour ! Je suis intéressé(e) par ${name}. Pouvez-vous m'aider à commander ?`,
  product: {
    breadcrumbSupplies: 'Consommables salon',
    backToSupplies: 'Retour à tous les articles',
    postageNote: '+ 4,00 £ de port',
    onePerSalon: 'Un par salon. Offre à durée limitée.',
    savePercent: (n) => `Économisez ${n}%`,
    freeShippingNote: 'Prix incluant la livraison suivie UK',
    keyFeatures: 'Caractéristiques clés',
    whatIncluded: 'Ce qui est inclus',
    weight: 'Poids',
    monthlyUsage: 'Usage mensuel',
    margin: 'Marge',
    forLabel: 'Pour',
    buyNow: (price) => `Acheter — ${price} £`,
    whatsappUs: 'WhatsApp nous',
    freeUkDelivery: 'Livraison UK',
    dispatchesNextDay: 'Expédié le jour ouvré suivant',
    tryBeforeTitle: 'Vous voulez essayer avant d’acheter ?',
    tryBeforeText: 'Commandez votre pack échantillon. Testez notre qualité dans votre salon — prix de l’échantillon + 4,00 £ de port, à votre charge.',
    getFreeSample: 'Commander le pack échantillon',
    whatsappMsg: (name) => `Bonjour ! Je souhaite commander : ${name}. Pouvez-vous m'aider ?`,
  },
}

const ar: SalonSuppliesContent = {
  metaTitle: 'لوازم الصالون وأدوات الإكسسوارات | جملة UK | D.S Hair Beauty',
  metaDescription:
    'لوازم إكسسوارات احترافية للصالونات في UK. حلقات نانو وأشرطة لاصقة ومشابك وغراء كيراتين وأكثر. جودة بأسعار المصنع. توصيل مجاني. أسعار تجارية.',
  heroBadge: 'جديد — لوازم الصالون الاستهلاكية',
  heroTitle1: 'أدوات الإكسسوارات',
  heroTitle2: '& المستلزمات',
  heroSubtitle:
    'حلقات نانو احترافية وأشرطة لاصقة وأدوات ومستلزمات لفنيّ الإكسسوارات في UK. منتجات عالية الجودة بأسعار منصفة — تُسلّم إلى صالونك.',
  shopBundles: 'تسوق الباقات',
  freeSample: 'عينة (بالسعر)',
  trustBadges: ['توصيل سريع UK', 'جودة مضمونة', 'شحن سريع 3–5 أيام', 'أسعار المصنع'],
  sampleCtaTitle: 'جرّب قبل أن تشتري',
  sampleCtaText: 'اطلب باقة عينات — سعر العينة + £4.00 شحن، على حسابك.',
  sampleCtaButton: 'اطلب باقة العينات',
  bundlesEyebrow: 'الباقات',
  bundlesTitle: 'وفّر أكثر مع الباقات',
  bundlesText: 'مجموعات منتقاة لتناسب عمل الصالون الفعلي. كل ما تحتاجه في صندوق واحد — وأرخص من الشراء منفردًا.',
  singlesEyebrow: 'منتجات فردية',
  singlesTitle: 'أعِد تعبئة صندوقك',
  singlesText: 'صندوقك جاهز؟ أعد شراء القطع الفردية حسب الحاجة. بدون حد أدنى للطلب.',
  whyTitle: 'لماذا يختارنا أصحاب الصالونات',
  whyText: 'نحن لسنا مجرد مورّد. نحن شريك يفهم عملك.',
  whyItems: [
    {
      title: 'وفّر 30-60% مقارنة بالماركات الشهيرة',
      desc: 'نفس جودة حلقات النانو والأشرطة اللاصقة — بأقل من نصف سعر الماركات الفاخرة. هامش ربحك هو أولويتنا.',
    },
    {
      title: 'بدون حد أدنى للطلب',
      desc: 'اطلب علبة واحدة أو مئة. نخدم الفنيين المستقلين وسلاسل الصالونات بنفس العناية.',
    },
    {
      title: 'دعم بشري حقيقي',
      desc: 'راسلنا على واتساب في أي وقت. نرد خلال دقائق لا أيام. لأنك عندما تكون في منتصف التركيب وتنفد من المستلزمات، تحتاج إجابة الآن.',
    },
    {
      title: 'شحن سريع',
      desc: 'الطلبات تُشحن سريعًا (3–5 أيام) في كافة أنحاء UK. مستلزماتك عندما تحتاجها.',
    },
    {
      title: 'جودة مفحوصة',
      desc: 'كل دفعة مُختبَرة. حلقات النانو تُغلق بشكل مسطح. الأشرطة اللاصقة تثبت. نستخدم المنتجات بأنفسنا قبل شحنها إليك.',
    },
    {
      title: 'اشترك ووفّر',
      desc: 'فعّل توصيلاً تلقائيًا شهريًا لحزمة إعادة التخزين. لن ينفد المخزون في منتصف الموعد مجددًا.',
    },
  ],
  faqTitle: 'الأسئلة الشائعة',
  faqs: [
    {
      q: 'كم تستغرق مدة استلام طلبي؟',
      a: 'تُشحن الطلبات سريعًا (3–5 أيام) في كافة أنحاء UK. مخزن UK قيد التشغيل — توصيل سريع 3–5 أيام. تتبّع لكل طلب.',
    },
    {
      q: 'ماذا لو لم أكن راضيًا عن الجودة؟',
      a: 'نحن نضمن منتجاتنا. إذا لم يرق أي شيء لتوقعاتك، تواصل معنا خلال 14 يومًا لاسترداد كامل أو استبدال — دون أسئلة.',
    },
    {
      q: 'هل تقدّمون حسابات تجارية أو أسعار جملة؟',
      a: 'نعم! جميع أسعارنا تشمل بالفعل هوامش تجارية. للطلبات بالجملة (100+ وحدة)، راسلنا على واتساب لأسعار جملة مخصصة.',
    },
    {
      q: 'هل يمكنني الحصول على عينة قبل طلب كبير؟',
      a: 'نعم — اطلب باقة العينات أعلى الصفحة: سعر العينة + £2.95 شحن، على حسابك. جرّب الجودة بنفسك.'
    },
    {
      q: 'ما الفرق بين حلقات النانو غير المبطّنة والملبّسة بالسيليكون؟',
      a: 'الحلقات غير المبطّنة هي خيارنا القياسي — مناسبة لمعظم أنواع الشعر. الحلقات المبطّنة بالسيليكون توفر تماسكًا إضافيًا وألطف على الشعر الناعم أو الهش أو الزلق. يخزن الكثير من الفنيين النوعين.',
    },
  ],
  waTitle: 'تحتاج استشارة؟ راسلنا على واتساب',
  waText: 'غير متأكد أي منتجات تطلب؟ تريد عرضًا مخصصًا لصالونك؟ راسلنا على واتساب — نرد خلال دقائق.',
  waButton: 'دردشة على واتساب',
  waWhatsappMsg: 'مرحبًا D.S HAIR & BEAUTY! لدي سؤال حول لوازم الصالون.',
  cardDetails: 'التفاصيل',
  cardWhatsapp: 'واتساب',
  cardFree: 'عينة',
  cardWhatsappMsg: (name) => `مرحبًا! أنا مهتم بـ ${name}. هل يمكنك مساعدتي في الطلب؟`,
  product: {
    breadcrumbSupplies: 'لوازم الصالون',
    backToSupplies: 'العودة إلى كل اللوازم',
    postageNote: '+ 4.00 £ شحن',
    onePerSalon: 'واحد لكل صالون. عرض لفترة محدودة.',
    savePercent: (n) => `وفّر ${n}%`,
    freeShippingNote: 'السعر يشمل توصيلاً متتبعاً UK',
    keyFeatures: 'المزايا الرئيسية',
    whatIncluded: 'ما هو مشمول',
    weight: 'الوزن',
    monthlyUsage: 'الاستخدام الشهري',
    margin: 'الهامش',
    forLabel: 'لـ',
    buyNow: (price) => `اشترِ الآن — ${price} £`,
    whatsappUs: 'راسلنا واتساب',
    freeUkDelivery: 'توصيل UK',
    dispatchesNextDay: 'يُشحن في يوم العمل التالي',
    tryBeforeTitle: 'تريد التجربة قبل الشراء؟',
    tryBeforeText: 'اطلب باقة العينات. جرّب جودتنا — سعر العينة + 4.00 £ شحن، على حسابك.',
    getFreeSample: 'اطلب باقة العينات',
    whatsappMsg: (name) => `مرحبًا! أود الطلب: ${name}. هل يمكنك المساعدة؟`,
  },
}

const sv: SalonSuppliesContent = {
  metaTitle: 'Salongförbrukning & Extensionsverktyg | Parti UK | D.S Hair Beauty',
  metaDescription:
    'Professionella extensionsförbrukning för UK-salonger. Nano-ringar, tejp-tabs, clips, keratinlim & mer. Kvalitet till fabrikspriser. Gratis frakt. Handelspriser.',
  heroBadge: 'Nytt — Salongförbrukning',
  heroTitle1: 'Extensionsverktyg',
  heroTitle2: '& förbrukning',
  heroSubtitle:
    'Professionella nano-ringar, tejp-tabs, verktyg & tillbehör för extensions-tekniker i UK. Kvalitetsprodukter till ärliga priser — levererade till din salong.',
  shopBundles: 'Handla bundles',
  freeSample: 'Provpaket',
  trustBadges: ['Snabb UK-frakt', 'Kvalitet garanterad', 'Express 3–5 dagar', 'Fabrikspriser'],
  sampleCtaTitle: 'Testa innan du köper',
  sampleCtaText: 'Beställ ett provpaket — provpris + £4,00 i porto, båda på din bekostnad.',
  sampleCtaButton: 'Beställ provpaket',
  bundlesEyebrow: 'Bundles',
  bundlesTitle: 'Spara mer med bundles',
  bundlesText: 'Kurerade kit för riktiga salongflöden. Allt du behöver i en låda — och billigare än att köpa separat.',
  singlesEyebrow: 'Enskilda produkter',
  singlesTitle: 'Fyll på din kit',
  singlesText: 'Har du redan din utrustning? Fyll på enskilda artiklar efter behov. Inget minimiköp.',
  whyTitle: 'Varför salongägare väljer oss',
  whyText: 'Vi är inte bara en leverantör. Vi är en partner som förstår din verksamhet.',
  whyItems: [
    {
      title: 'Spara 30–60 % mot high-street-varumärken',
      desc: 'Samma kvalitet på nano-ringar och tejp-tabs — till mindre än hälften av premiummärkenas pris. Din marginal är vår prioritet.',
    },
    {
      title: 'Inget minimiköp',
      desc: 'Beställ en förpackning eller hundra. Vi betjänar oberoende tekniker och salongkedjor med samma omsorg.',
    },
    {
      title: 'Verklig mänsklig support',
      desc: 'WhatsApp oss när som helst. Vi svarar på minuter, inte dagar. För när du är mitt i en applicering och saknar tillbehör behöver du svar nu.',
    },
    {
      title: 'Expressleverans',
      desc: 'Beställningar skickas express (3–5 dagar) i hela UK. Dina tillbehör när du behöver dem.',
    },
    {
      title: 'Kvalitet kontrollerad',
      desc: 'Varje batch testad. Nano-ringar klämmer platt. Tejp-tabs fäster. Vi använder produkterna själva innan vi skickar dem till dig.',
    },
    {
      title: 'Prenumerera & spara',
      desc: 'Sätt upp månatlig autoleverans för din påfyllnadspaket. Aldrig mer slut mitt i en behandling.',
    },
  ],
  faqTitle: 'Vanliga frågor',
  faqs: [
    {
      q: 'Hur snabbt får jag min beställning?',
      a: 'Beställningar skickas express (3–5 dagar) i hela UK. Spårning på varje beställning.',
    },
    {
      q: 'Vad om jag inte är nöjd med kvaliteten?',
      a: 'Vi står för våra produkter. Om något inte möter dina förväntningar, kontakta oss inom 14 dagar för full återbetalning eller ersättning — utan frågor.',
    },
    {
      q: 'Erbjuder ni handelskonton eller partipriser?',
      a: 'Ja! Alla våra priser inkluderar redan handelsmarginaler. För partibeställningar (100+ enheter), kontakta oss på WhatsApp för anpassade partipriser.',
    },
    {
      q: 'Kan jag få ett prov innan en stor beställning?',
      a: 'Ja — beställ vårt provpaket högst upp på sidan: provpris + £2,95 i porto, båda på din bekostnad. Testa kvaliteten själv.'
    },
    {
      q: 'Hur skiljer sig nano-ringar utan och med silikon?',
      a: 'Ringar utan silikon är vårt standardval — bra för de flesta hårtyper. Silikonklädda ringar ger extra grepp och är skonsammare för fint, skört eller glatt hår. Många tekniker har båda.',
    },
  ],
  waTitle: 'Behöver råd? WhatsApp oss',
  waText: 'Osäker på vilka produkter du ska beställa? Vill ha en offert för din salong? Skriv till oss på WhatsApp — vi svarar inom minuter.',
  waButton: 'Chatta på WhatsApp',
  waWhatsappMsg: 'Hej D.S HAIR & BEAUTY! Jag har en fråga om salongsförbrukning.',
  cardDetails: 'Detaljer',
  cardWhatsapp: 'WhatsApp',
  cardFree: 'MUSTER',
  cardWhatsappMsg: (name) => `Hej! Jag är intresserad av ${name}. Kan du hjälpa mig att beställa?`,
  product: {
    breadcrumbSupplies: 'Salongtillbehör',
    backToSupplies: 'Tillbaka till alla tillbehör',
    postageNote: '+ 4,00 £ porto',
    onePerSalon: 'En per salong. Tidsbegränsat erbjudande.',
    savePercent: (n) => `Spara ${n}%`,
    freeShippingNote: 'Priset inkluderar spårad UK-frakt',
    keyFeatures: 'Huvudfunktioner',
    whatIncluded: 'Vad som ingår',
    weight: 'Vikt',
    monthlyUsage: 'Månatlig användning',
    margin: 'Marginal',
    forLabel: 'För',
    buyNow: (price) => `Köp nu — ${price} £`,
    whatsappUs: 'WhatsApp oss',
    freeUkDelivery: 'UK-frakt',
    dispatchesNextDay: 'Skickas nästa arbetsdag',
    tryBeforeTitle: 'Vill du testa innan du köper?',
    tryBeforeText: 'Beställ ditt provpaket. Testa vår kvalitet i din salong — provpris + 4,00 £ i porto, på din bekostnad.',
    getFreeSample: 'Beställ provpaket',
    whatsappMsg: (name) => `Hej! Jag vill beställa: ${name}. Kan du hjälpa mig?`,
  },
}

const pl: SalonSuppliesContent = {
  metaTitle: 'Materiały eksploatacyjne & narzędzia do extensions | Hurt UK | D.S Hair Beauty',
  metaDescription:
    'Profesjonalne materiały do extensions dla salonów w UK. Pierścienie nano, taśmy, klipsi, klej keratynowy i więcej. Jakość w cenach fabrycznych. Darmowa dostawa. Ceny hurtowe.',
  heroBadge: 'Nowość — Materiały eksploatacyjne',
  heroTitle1: 'Narzędzia do extensions',
  heroTitle2: '& materiały',
  heroSubtitle:
    'Profesjonalne pierścienie nano, taśmy, narzędzia i akcesoria dla stylistów extensions w UK. Produkty wysokiej jakości w uczciwych cenach — dowożone do Twojego salonu.',
  shopBundles: 'Kup pakiety',
  freeSample: 'Zestaw próbek',
  trustBadges: ['Szybka dostawa UK', 'Gwarancja jakości', 'Ekspres 3–5 dni', 'Ceny fabryczne'],
  sampleCtaTitle: 'Wypróbuj zanim kupisz',
  sampleCtaText: 'Zamów zestaw próbek — cena próbki + £4,00 za przesyłkę, obie na Twój koszt.',
  sampleCtaButton: 'Zamów zestaw próbek',
  bundlesEyebrow: 'Pakiety',
  bundlesTitle: 'Oszczędzaj z pakietami',
  bundlesText: 'Kurate zestawy na potrzeby prawdziwej pracy w salonie. Wszystko, czego potrzebujesz, w jednym pudełku — i taniej niż osobno.',
  singlesEyebrow: 'Produkty pojedyncze',
  singlesTitle: 'Uzupełnij swój zestaw',
  singlesText: 'Masz już zestaw? Dokupuj pojedyncze artykuły w miarę potrzeb. Bez minimum zamówienia.',
  whyTitle: 'Dlaczego właściciele salonów wybierają nas',
  whyText: 'Nie jesteśmy tylko dostawcą. Jesteśmy partnerem, który rozumie Twój biznes.',
  whyItems: [
    {
      title: 'Oszczędzaj 30–60% vs marki z high-street',
      desc: 'Ta sama jakość pierścieni nano i taśm — za mniej niż połowę ceny marek premium. Twoja marża to nasz priorytet.',
    },
    {
      title: 'Bez minimum zamówienia',
      desc: 'Zamów jedno opakowanie lub sto. Obsługujemy niezależnych stylistów i sieci salonów z tą samą troską.',
    },
    {
      title: 'Prawdziwe ludzkie wsparcie',
      desc: 'Napisz do nas na WhatsApp w dowolnym momencie. Odpowiadamy w minutach, nie w dniach. Bo gdy jesteś w trakcie aplikacji i brakuje Ci materiałów, potrzebujesz odpowiedzi teraz.',
    },
    {
      title: 'Ekspresowa wysyłka',
      desc: 'Zamówienia wysyłane ekspresem (3–5 dni) w całym UK. Twoje materiały, gdy ich potrzebujesz.',
    },
    {
      title: 'Jakość sprawdzona',
      desc: 'Każda partia przetestowana. Pierścienie nano zaciskają się płasko. Taśmy trzymają. Sami używamy produktów, zanim wyślemy je do Ciebie.',
    },
    {
      title: 'Subskrybuj i oszczędzaj',
      desc: 'Ustaw comiesięczną automatyczną dostawę dla pakietu uzupełniającego. Nigdy więcej brak zapasów w trakcie wizyty.',
    },
  ],
  faqTitle: 'Często zadawane pytania',
  faqs: [
    {
      q: 'Jak szybko otrzymam zamówienie?',
      a: 'Zamówienia wysyłane ekspresem (3–5 dni) w całym UK. Śledzenie każdego zamówienia.',
    },
    {
      q: 'Co jeśli nie jestem zadowolony z jakości?',
      a: 'Gwarantujemy nasze produkty. Jeśli cokolwiek nie spełni oczekiwań, skontaktuj się z nami w ciągu 14 dni w celu pełnego zwrotu lub wymiany — bez pytań.',
    },
    {
      q: 'Czy oferujecie konta handlowe lub ceny hurtowe?',
      a: 'Tak! Wszystkie nasze ceny zawierają już marże handlowe. Przy zamówieniach hurtowych (100+ szt.) napisz do nas na WhatsApp po indywidualną cenę.',
    },
    {
      q: 'Czy mogę otrzymać próbkę przed dużym zamówieniem?',
      a: 'Tak — zamów nasz zestaw próbek na górze strony: cena próbki + £2,95 za przesyłkę, obie na Twój koszt. Sprawdź jakość sam.'
    },
    {
      q: 'Jaka jest różnica między pierścieniami nano bez i z silikonem?',
      a: 'Pierścienie bez silikonu to nasz standard — świetne dla większości typów włosów. Pierścienie z silikonem dają lepszą przyczepność i są łagodniejsze dla cienkich, delikatnych lub śliskich włosów. Wielu stylistów ma oba.',
    },
  ],
  waTitle: 'Potrzebujesz porady? Napisz na WhatsApp',
  waText: 'Nie wiesz, jakie produkty zamówić? Chcesz indywidualną wycenę dla salonu? Napisz do nas na WhatsApp — odpowiadamy w minuty.',
  waButton: 'Pisz na WhatsApp',
  waWhatsappMsg: 'Cześć D.S HAIR & BEAUTY! Mam pytanie o materiały eksploatacyjne.',
  cardDetails: 'Szczegóły',
  cardWhatsapp: 'WhatsApp',
  cardFree: 'PRÓBKA',
  cardWhatsappMsg: (name) => `Cześć! Interesuje mnie ${name}. Czy możesz pomóc mi zamówić?`,
  product: {
    breadcrumbSupplies: 'Materiały salonu',
    backToSupplies: 'Wstecz do wszystkich produktów',
    postageNote: '+ 4,00 £ przesyłki',
    onePerSalon: 'Jeden na salon. Oferta limitowana.',
    savePercent: (n) => `Oszczędzasz ${n}%`,
    freeShippingNote: 'Cena zawiera śledzoną dostawę UK',
    keyFeatures: 'Kluczowe cechy',
    whatIncluded: 'Co jest w zestawie',
    weight: 'Waga',
    monthlyUsage: 'Miesięczne zużycie',
    margin: 'Marża',
    forLabel: 'Dla',
    buyNow: (price) => `Kup teraz — ${price} £`,
    whatsappUs: 'WhatsApp my',
    freeUkDelivery: 'Dostawa UK',
    dispatchesNextDay: 'Wysyłka następnego dnia roboczego',
    tryBeforeTitle: 'Chcesz wypróbować przed zakupem?',
    tryBeforeText: 'Zamów zestaw próbek. Sprawdź jakość we własnym salonie — cena próbki + 4,00 £ przesyłki, na Twój koszt.',
    getFreeSample: 'Zamów zestaw próbek',
    whatsappMsg: (name) => `Cześć! Chcę zamówić: ${name}. Czy możesz pomóc?`,
  },
}

const salonSuppliesContent: Record<Locale, SalonSuppliesContent> = { en, de, fr, ar, sv, pl }

export function getSalonSuppliesContent(locale: Locale): SalonSuppliesContent {
  return salonSuppliesContent[locale] ?? salonSuppliesContent.en
}
