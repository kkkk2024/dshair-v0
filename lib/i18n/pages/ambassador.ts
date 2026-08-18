import type { Locale } from "../config"

export interface AmbassadorStat {
  stat: string
  label: string
}
export interface AmbassadorStep {
  num: string
  title: string
  desc: string
}
export interface AmbassadorTier {
  name: string
  tagline: string
  commission: string
  requirements: string[]
  benefits: string[]
  popular: boolean
  nextLevel: string | null
}
export interface AmbassadorExample {
  salon: string
  orders: string
  commission: string
  tier: string
}
export interface AmbassadorFaq {
  q: string
  a: string
}
export interface AmbassadorContent {
  metaTitle: string
  metaDescription: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  applyCta: string
  learnTradeCta: string
  stats: AmbassadorStat[]
  howTitle: string
  howSubtitle: string
  howItWorks: AmbassadorStep[]
  tiersTitle: string
  tiersSubtitle: string
  tiers: AmbassadorTier[]
  popularBadge: string
  commissionLabel: string
  requirementsLabel: string
  benefitsLabel: string
  earningsTitle: string
  earningsSubtitle: string
  referralExamples: AmbassadorExample[]
  earningsNote: string
  faqTitle: string
  faqs: AmbassadorFaq[]
  applyTitle: string
  applySubtitle: string
  successTitle: string
  successMsg1: string
  successMsg2: string
  exploreCta: string
  nameLabel: string
  salonNameLabel: string
  emailLabel: string
  phoneLabel: string
  locationLabel: string
  referralLabel: string
  referralOptionPlaceholder: string
  referralOptions: string[]
  notesLabel: string
  notesPlaceholder: string
  submitBtn: string
  submittingBtn: string
  waCtaLabel: string
  waCtaLink: string
}

export const ambassadorContent: Record<Locale, AmbassadorContent> = {
  en: {
    metaTitle: "Become a Hair Extension Brand Ambassador | D.S HAIR & BEAUTY",
    metaDescription:
      "Join the D.S HAIR ambassador programme. Earn commission, get free extensions, and grow your audience. Open to UK-based stylists, content creators & salon professionals.",
    heroBadge: "Ambassador Programme",
    heroTitle: "Earn Commission While Helping Salons Thrive",
    heroSubtitle:
      "Join the D.S Hair & Beauty Ambassador Programme. Share quality hair extensions with other salons. Earn commission on every order they place. No cap, no limit.",
    applyCta: "Apply Now",
    learnTradeCta: "Learn About Trade Account",
    stats: [
      { stat: "0%", label: "Programme Fee" },
      { stat: "8%", label: "Max Commission" },
      { stat: "∞", label: "No Order Cap" },
      { stat: "24hr", label: "Payout Processing" },
    ],
    howTitle: "How It Works",
    howSubtitle: "Simple. Share your code. Earn commission. Level up.",
    howItWorks: [
      { num: "01", title: "Apply for Trade Account", desc: "Register as a D.S Hair & Beauty partner. Takes 2 minutes." },
      { num: "02", title: "Join Ambassador Programme", desc: "Opt-in when applying or anytime from your account dashboard." },
      { num: "03", title: "Get Your Referral Code", desc: "Receive a unique code (e.g., CAROSALON) to share with other salons." },
      { num: "04", title: "Share & Earn Commission", desc: "Other salons use your code when ordering. You earn commission on every order." },
      { num: "05", title: "Level Up", desc: "More referrals = higher tier = more benefits. Climb from Bronze to Gold." },
    ],
    tiersTitle: "Ambassador Tiers",
    tiersSubtitle: "Start at Bronze, climb to Silver and Gold. More referrals = more rewards.",
    tiers: [
      {
        name: "Bronze",
        tagline: "Start Your Journey",
        commission: "3%",
        requirements: ["Registered Trade Account", "First order completed"],
        benefits: ["Wholesale trade pricing", "Access to all products", "Basic support"],
        popular: false,
        nextLevel: "Silver",
      },
      {
        name: "Silver",
        tagline: "Growing Partner",
        commission: "5%",
        requirements: ["Registered Trade Account", "£500+ cumulative orders", "Join Ambassador Programme"],
        benefits: [
          "Everything in Bronze",
          "10% discount on your orders",
          "Priority support",
          "Early access to new products",
          "5% commission on referrals",
        ],
        popular: true,
        nextLevel: "Gold",
      },
      {
        name: "Gold",
        tagline: "Top Partner",
        commission: "8%",
        requirements: ["Registered Trade Account", "£2,000+ cumulative orders", "3+ successful referrals", "Active on social media"],
        benefits: [
          "Everything in Silver",
          "15% discount on orders",
          "Dedicated account manager",
          "Free digital colour catalogue",
          "Featured on our website",
          "Invitation to annual event",
          "8% commission on referrals",
        ],
        popular: false,
        nextLevel: null,
      },
    ],
    popularBadge: "Most Popular",
    commissionLabel: "Commission Rate",
    requirementsLabel: "Requirements",
    benefitsLabel: "Benefits",
    earningsTitle: "What Could You Earn?",
    earningsSubtitle: "Realistic examples based on average order values of £150-200 per referral.",
    referralExamples: [
      { salon: "Example Salon A", orders: "3 orders in month", commission: "£45 earned", tier: "Bronze" },
      { salon: "Example Salon B", orders: "8 orders in month", commission: "£180 earned", tier: "Silver" },
      { salon: "Example Salon C", orders: "15 orders in month", commission: "£480 earned", tier: "Gold" },
    ],
    earningsNote:
      "* These are illustrative examples. Actual earnings depend on referral volume and order value. Top Ambassadors earn £500-1000+ per month.",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "How does the referral programme work?", a: "When you join our Ambassador Programme, you receive a unique referral code. Share this code with other salon owners or stylists. When they place an order using your code, you earn commission on that order. No limit — earn as much as you refer!" },
      { q: "Is there a cost to join?", a: "No. The Ambassador Programme is completely free to join. You just need an active Trade Account with D.S Hair & Beauty." },
      { q: "When do I receive my commission?", a: "Commissions are calculated monthly and paid via bank transfer or PayPal within 14 days of month end. Minimum payout threshold is £25." },
      { q: "Can I refer my own salon?", a: "No, you cannot earn commission on your own orders. The programme is designed to help you introduce new salons to D.S Hair & Beauty." },
      { q: "What if a referred salon returns products?", a: "If a referred order results in a refund, the commission on that order will be deducted from your next payout." },
      { q: "How do I track my referrals and earnings?", a: "Your Ambassador dashboard shows your referral code, all orders placed with your code, and your commission history. Access it anytime from your Trade Account." },
    ],
    applyTitle: "Ready to Become an Ambassador?",
    applySubtitle: "Apply for your Trade Account and opt-in to the Ambassador Programme in one step.",
    successTitle: "Application Received!",
    successMsg1: "Thank you — we will be in touch within 24 hours.",
    successMsg2: "Check your email for your Trade Account details and Ambassador Programme information.",
    exploreCta: "Explore Trade Account Benefits",
    nameLabel: "Your Name *",
    salonNameLabel: "Salon Name *",
    emailLabel: "Email Address *",
    phoneLabel: "WhatsApp / Phone *",
    locationLabel: "Salon Location *",
    referralLabel: "How many salons/stylists could you potentially refer?",
    referralOptionPlaceholder: "Select range",
    referralOptions: ["1-5", "5-20", "20-50", "50+"],
    notesLabel: "Anything else?",
    notesPlaceholder: "Tell us about your salon network or any questions...",
    submitBtn: "Apply for Trade Account & Ambassador Programme",
    submittingBtn: "Submitting...",
    waCtaLabel: "Prefer to chat first?",
    waCtaLink: "Message us on WhatsApp",
  },
  de: {
    metaTitle: "Werden Sie Markenbotschafter für Haarverlängerungen | D.S HAIR & BEAUTY",
    metaDescription:
      "Treten Sie dem D.S HAIR Botschafterprogramm bei. Verdienen Sie Provision, erhalten Sie kostenlose Extensions und wachsen Sie. Offen für Stylisten, Content-Ersteller & Salonprofis in UK.",
    heroBadge: "Botschafterprogramm",
    heroTitle: "Verdienen Sie Provision, während Sie Salons zum Erfolg verhelfen",
    heroSubtitle:
      "Treten Sie dem D.S Hair & Beauty Botschafterprogramm bei. Teilen Sie hochwertige Haarverlängerungen mit anderen Salons. Verdienen Sie Provision auf jede Bestellung, die sie aufgeben. Kein Limit.",
    applyCta: "Jetzt bewerben",
    learnTradeCta: "Mehr über das Trade-Konto erfahren",
    stats: [
      { stat: "0%", label: "Programmgebühr" },
      { stat: "8%", label: "Maximale Provision" },
      { stat: "∞", label: "Kein Bestelllimit" },
      { stat: "24hr", label: "Auszahlungsbearbeitung" },
    ],
    howTitle: "So funktioniert's",
    howSubtitle: "Einfach. Teilen Sie Ihren Code. Verdienen Sie Provision. Steigen Sie auf.",
    howItWorks: [
      { num: "01", title: "Trade-Konto beantragen", desc: "Registrieren Sie sich als D.S Hair & Beauty Partner. Dauert 2 Minuten." },
      { num: "02", title: "Botschafterprogramm beitreten", desc: "Opt-in bei der Bewerbung oder jederzeit über Ihr Kontodashboard." },
      { num: "03", title: "Erhalten Sie Ihren Empfehlungscode", desc: "Erhalten Sie einen einzigartigen Code (z. B. CAROSALON), um ihn mit anderen Salons zu teilen." },
      { num: "04", title: "Teilen & Provision verdienen", desc: "Andere Salons verwenden Ihren Code bei der Bestellung. Sie verdienen Provision auf jede Bestellung." },
      { num: "05", title: "Steigen Sie auf", desc: "Mehr Empfehlungen = höhere Stufe = mehr Vorteile. Steigen Sie von Bronze zu Gold auf." },
    ],
    tiersTitle: "Botschafter-Stufen",
    tiersSubtitle: "Beginnen Sie bei Bronze, steigen Sie zu Silber und Gold auf. Mehr Empfehlungen = mehr Belohnungen.",
    tiers: [
      {
        name: "Bronze",
        tagline: "Starten Sie Ihre Reise",
        commission: "3%",
        requirements: ["Registriertes Trade-Konto", "Erste Bestellung abgeschlossen"],
        benefits: ["Großhandels-Preise", "Zugang zu allen Produkten", "Basis-Support"],
        popular: false,
        nextLevel: "Silver",
      },
      {
        name: "Silver",
        tagline: "Wachsender Partner",
        commission: "5%",
        requirements: ["Registriertes Trade-Konto", "£500+ kumulierte Bestellungen", "Botschafterprogramm beitreten"],
        benefits: [
          "Alles aus Bronze",
          "10% Rabatt auf Ihre Bestellungen",
          "Priorisierter Support",
          "Früher Zugang zu neuen Produkten",
          "5% Provision auf Empfehlungen",
        ],
        popular: true,
        nextLevel: "Gold",
      },
      {
        name: "Gold",
        tagline: "Top-Partner",
        commission: "8%",
        requirements: ["Registriertes Trade-Konto", "£2,000+ kumulierte Bestellungen", "3+ erfolgreiche Empfehlungen", "Aktiv in sozialen Medien"],
        benefits: [
          "Alles aus Silber",
          "15% Rabatt auf Bestellungen",
          "Dedizierter Account-Manager",
          "Kostenloser digitaler Farbkatalog",
          "Vorgestellt auf unserer Website",
          "Einladung zum jährlichen Event",
          "8% Provision auf Empfehlungen",
        ],
        popular: false,
        nextLevel: null,
      },
    ],
    popularBadge: "Am beliebtesten",
    commissionLabel: "Provisionssatz",
    requirementsLabel: "Voraussetzungen",
    benefitsLabel: "Vorteile",
    earningsTitle: "Was könnten Sie verdienen?",
    earningsSubtitle: "Realistische Beispiele basierend auf durchschnittlichen Bestellwerten von £150-200 pro Empfehlung.",
    referralExamples: [
      { salon: "Beispiel Salon A", orders: "3 Bestellungen im Monat", commission: "£45 verdient", tier: "Bronze" },
      { salon: "Beispiel Salon B", orders: "8 Bestellungen im Monat", commission: "£180 verdient", tier: "Silver" },
      { salon: "Beispiel Salon C", orders: "15 Bestellungen im Monat", commission: "£480 verdient", tier: "Gold" },
    ],
    earningsNote:
      "* Dies sind illustrative Beispiele. Die tatsächlichen Einnahmen hängen von Empfehlungsvolumen und Bestellwert ab. Top-Botschafter verdienen £500-1000+ pro Monat.",
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      { q: "Wie funktioniert das Empfehlungsprogramm?", a: "Wenn Sie unserem Botschafterprogramm beitreten, erhalten Sie einen einzigartigen Empfehlungscode. Teilen Sie diesen Code mit anderen Saloninhabern oder Stylisten. Wenn sie eine Bestellung mit Ihrem Code aufgeben, verdienen Sie Provision auf diese Bestellung. Kein Limit — verdienen Sie so viel wie Sie empfehlen!" },
      { q: "Kostet die Teilnahme etwas?", a: "Nein. Das Botschafterprogramm ist völlig kostenlos. Sie benötigen nur ein aktives Trade-Konto bei D.S Hair & Beauty." },
      { q: "Wann erhalte ich meine Provision?", a: "Provisionen werden monatlich berechnet und per Banküberweisung oder PayPal innerhalb von 14 days nach Monatsende ausgezahlt. Die Mindestauszahlung beträgt £25." },
      { q: "Kann ich meinen eigenen Salon empfehlen?", a: "Nein, Sie können keine Provision auf Ihre eigenen Bestellungen verdienen. Das Programm soll Ihnen helfen, neue Salons für D.S Hair & Beauty zu gewinnen." },
      { q: "Was, wenn ein empfohlener Salon Produkte zurückgibt?", a: "Führt eine empfohlene Bestellung zu einer Rückerstattung, wird die Provision für diese Bestellung von Ihrer nächsten Auszahlung abgezogen." },
      { q: "Wie verfolge ich meine Empfehlungen und Einnahmen?", a: "Ihr Botschafter-Dashboard zeigt Ihren Empfehlungscode, alle mit Ihrem Code getätigten Bestellungen und Ihre Provisionshistorie. Greifen Sie jederzeit über Ihr Trade-Konto darauf zu." },
    ],
    applyTitle: "Bereit, Botschafter zu werden?",
    applySubtitle: "Beantragen Sie Ihr Trade-Konto und melden Sie sich in einem Schritt für das Botschafterprogramm an.",
    successTitle: "Bewerbung erhalten!",
    successMsg1: "Vielen Dank — wir melden uns innerhalb von 24 Stunden.",
    successMsg2: "Prüfen Sie Ihre E-Mails für Ihre Trade-Konto-Daten und die Botschafterprogramm-Informationen.",
    exploreCta: "Trade-Konto-Vorteile entdecken",
    nameLabel: "Ihr Name *",
    salonNameLabel: "Salonname *",
    emailLabel: "E-Mail-Adresse *",
    phoneLabel: "WhatsApp / Telefon *",
    locationLabel: "Salonstandort *",
    referralLabel: "Wie viele Salons/Stylisten könnten Sie potenziell empfehlen?",
    referralOptionPlaceholder: "Bereich auswählen",
    referralOptions: ["1-5", "5-20", "20-50", "50+"],
    notesLabel: "Noch etwas?",
    notesPlaceholder: "Erzählen Sie uns von Ihrem Salonnetzwerk oder stellen Sie Fragen...",
    submitBtn: "Trade-Konto & Botschafterprogramm beantragen",
    submittingBtn: "Wird gesendet...",
    waCtaLabel: "Lieber zuerst chatten?",
    waCtaLink: "Schreiben Sie uns auf WhatsApp",
  },
  fr: {
    metaTitle: "Devenez ambassadeur de extensions capillaires | D.S HAIR & BEAUTY",
    metaDescription:
      "Rejoignez le programme d'ambassadeurs D.S HAIR. Gagnez des commissions, obtenez des extensions gratuites et développez votre audience. Ouvert aux stylistes, créateurs de contenu et professionnels de salon au Royaume-Uni.",
    heroBadge: "Programme Ambassadeur",
    heroTitle: "Gagnez des commissions tout en aidant les salons à prospérer",
    heroSubtitle:
      "Rejoignez le programme d'ambassadeurs D.S Hair & Beauty. Partagez des extensions capillaires de qualité avec d'autres salons. Gagnez une commission sur chaque commande qu'ils passent. Sans plafond, sans limite.",
    applyCta: "Postuler maintenant",
    learnTradeCta: "En savoir plus sur le compte Trade",
    stats: [
      { stat: "0%", label: "Frais du programme" },
      { stat: "8%", label: "Commission max." },
      { stat: "∞", label: "Aucun plafond de commande" },
      { stat: "24hr", label: "Traitement du paiement" },
    ],
    howTitle: "Comment ça marche",
    howSubtitle: "Simple. Partagez votre code. Gagnez des commissions. Gravissez les échelons.",
    howItWorks: [
      { num: "01", title: "Demander un compte Trade", desc: "Inscrivez-vous comme partenaire D.S Hair & Beauty. Prend 2 minutes." },
      { num: "02", title: "Rejoindre le programme Ambassadeur", desc: "Optez pour le programme lors de votre candidature ou à tout moment depuis votre tableau de bord." },
      { num: "03", title: "Obtenez votre code de parrainage", desc: "Recevez un code unique (ex. CAROSALON) à partager avec d'autres salons." },
      { num: "04", title: "Partagez et gagnez des commissions", desc: "D'autres salons utilisent votre code lors de leur commande. Vous gagnez une commission sur chaque commande." },
      { num: "05", title: "Gravissez les échelons", desc: "Plus de parrainages = niveau supérieur = plus d'avantages. Passez de Bronze à Gold." },
    ],
    tiersTitle: "Niveaux d'ambassadeur",
    tiersSubtitle: "Commencez en Bronze, gravissez vers Silver et Gold. Plus de parrainages = plus de récompenses.",
    tiers: [
      {
        name: "Bronze",
        tagline: "Démarrez votre parcours",
        commission: "3%",
        requirements: ["Compte Trade enregistré", "Première commande passée"],
        benefits: ["Tarifs de gros", "Accès à tous les produits", "Support de base"],
        popular: false,
        nextLevel: "Silver",
      },
      {
        name: "Silver",
        tagline: "Partenaire en croissance",
        commission: "5%",
        requirements: ["Compte Trade enregistré", "£500+ de commandes cumulées", "Rejoindre le programme Ambassadeur"],
        benefits: [
          "Tout ce qui est inclus dans Bronze",
          "10% de remise sur vos commandes",
          "Support prioritaire",
          "Accès anticipé aux nouveaux produits",
          "5% de commission sur les parrainages",
        ],
        popular: true,
        nextLevel: "Gold",
      },
      {
        name: "Gold",
        tagline: "Partenaire premium",
        commission: "8%",
        requirements: ["Compte Trade enregistré", "£2,000+ de commandes cumulées", "3+ parrainages réussis", "Actif sur les réseaux sociaux"],
        benefits: [
          "Tout ce qui est inclus dans Silver",
          "15% de remise sur les commandes",
          "Gestionnaire de compte dédié",
          "Catalogue de couleurs numérique gratuit",
          "Mis en avant sur notre site web",
          "Invitation à l'événement annuel",
          "8% de commission sur les parrainages",
        ],
        popular: false,
        nextLevel: null,
      },
    ],
    popularBadge: "Le plus populaire",
    commissionLabel: "Taux de commission",
    requirementsLabel: "Prérequis",
    benefitsLabel: "Avantages",
    earningsTitle: "Que pourriez-vous gagner ?",
    earningsSubtitle: "Exemples réalistes basés sur des valeurs de commande moyennes de £150-200 par parrainage.",
    referralExamples: [
      { salon: "Salon exemple A", orders: "3 commandes dans le mois", commission: "£45 gagnés", tier: "Bronze" },
      { salon: "Salon exemple B", orders: "8 commandes dans le mois", commission: "£180 gagnés", tier: "Silver" },
      { salon: "Salon exemple C", orders: "15 commandes dans le mois", commission: "£480 gagnés", tier: "Gold" },
    ],
    earningsNote:
      "* Ce sont des exemples illustratifs. Les gains réels dépendent du volume de parrainage et de la valeur des commandes. Les meilleurs ambassadeurs gagnent £500-1000+ par mois.",
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "Comment fonctionne le programme de parrainage ?", a: "Lorsque vous rejoignez notre programme d'ambassadeurs, vous recevez un code de parrainage unique. Partagez ce code avec d'autres propriétaires de salon ou stylistes. Lorsqu'ils passent une commande avec votre code, vous gagnez une commission sur cette commande. Sans limite — gagnez autant que vous parrainez !" },
      { q: "Y a-t-il un coût pour rejoindre ?", a: "Non. Le programme d'ambassadeurs est entièrement gratuit. Il vous faut simplement un compte Trade actif chez D.S Hair & Beauty." },
      { q: "Quand reçois-je ma commission ?", a: "Les commissions sont calculées mensuellement et payées par virement bancaire ou PayPal sous 14 days après la fin du mois. Le seuil de paiement minimum est de £25." },
      { q: "Puis-je parrainer mon propre salon ?", a: "Non, vous ne pouvez pas gagner de commission sur vos propres commandes. Le programme est conçu pour vous aider à présenter de nouveaux salons à D.S Hair & Beauty." },
      { q: "Que se passe-t-il si un salon parrainé retourne des produits ?", a: "Si une commande parrainée entraîne un remboursement, la commission sur cette commande sera déduite de votre prochain paiement." },
      { q: "Comment suivre mes parrainages et mes gains ?", a: "Votre tableau de bord d'ambassadeur affiche votre code de parrainage, toutes les commandes passées avec votre code et votre historique de commissions. Y accédez à tout moment depuis votre compte Trade." },
    ],
    applyTitle: "Prêt à devenir ambassadeur ?",
    applySubtitle: "Demandez votre compte Trade et optez pour le programme d'ambassadeurs en une seule étape.",
    successTitle: "Candidature reçue !",
    successMsg1: "Merci — nous vous contacterons sous 24 heures.",
    successMsg2: "Consultez votre e-mail pour les détails de votre compte Trade et les informations du programme d'ambassadeurs.",
    exploreCta: "Découvrir les avantages du compte Trade",
    nameLabel: "Votre nom *",
    salonNameLabel: "Nom du salon *",
    emailLabel: "Adresse e-mail *",
    phoneLabel: "WhatsApp / Téléphone *",
    locationLabel: "Emplacement du salon *",
    referralLabel: "Combien de salons/stylistes pourriez-vous potentiellement parrainer ?",
    referralOptionPlaceholder: "Sélectionner une plage",
    referralOptions: ["1-5", "5-20", "20-50", "50+"],
    notesLabel: "Autre chose ?",
    notesPlaceholder: "Parlez-nous de votre réseau de salon ou posez vos questions...",
    submitBtn: "Demander un compte Trade et le programme d'ambassadeurs",
    submittingBtn: "Envoi en cours...",
    waCtaLabel: "Préférez-vous discuter d'abord ?",
    waCtaLink: "Écrivez-nous sur WhatsApp",
  },
  ar: {
    metaTitle: "كن سفيرًا لعلامة تجارية لإضافات الشعر | D.S HAIR & BEAUTY",
    metaDescription:
      "انضم إلى برنامج سفراء D.S HAIR. احصل على عمولة، وتمتع بإضافات مجانية، ونمّي جمهورك. متاح لصالونات تصفيف الشعر ومبدعي المحتوى والمحترفين في المملكة المتحدة.",
    heroBadge: "برنامج السفراء",
    heroTitle: "اكسب عمولة بينما تساعد الصالونات على الازدهار",
    heroSubtitle:
      "انضم إلى برنامج سفراء D.S Hair & Beauty. شارك إضافات شعر عالية الجودة مع صالونات أخرى. احصل على عمولة عن كل طلب يقدمونه. بلا سقف، بلا حدود.",
    applyCta: "قدّم الآن",
    learnTradeCta: "تعرّف على حساب التجارة",
    stats: [
      { stat: "0%", label: "رسوم البرنامج" },
      { stat: "8%", label: "أقصى عمولة" },
      { stat: "∞", label: "بلا سقف للطلب" },
      { stat: "24hr", label: "معالجة الدفع" },
    ],
    howTitle: "كيف يعمل",
    howSubtitle: "بسيط. شارك رمزك. احصل على عمولة. ترقّى.",
    howItWorks: [
      { num: "01", title: "طلب حساب التجارة", desc: "سجّل كشريك لـ D.S Hair & Beauty. يستغرق دقيقتين." },
      { num: "02", title: "انضم لبرنامج السفراء", desc: "اختر الانضمام عند التقديم أو في أي وقت من لوحة حسابك." },
      { num: "03", title: "احصل على رمز الإحالة", desc: "تلقَّ رمزًا فريدًا (مثلًا CAROSALON) لمشاركته مع صالونات أخرى." },
      { num: "04", title: "شارك واكسب عمولة", desc: "تستخدم الصالونات الأخرى رمزك عند الطلب. تكسب عمولة عن كل طلب." },
      { num: "05", title: "ترقّى", desc: "مزيد من الإحالات = مستوى أعلى = مزيد من المزايا. اصعد من Bronze إلى Gold." },
    ],
    tiersTitle: "مستويات السفراء",
    tiersSubtitle: "ابدأ من Bronze، وارتقِ إلى Silver وGold. مزيد من الإحالات = مزيد من المكافآت.",
    tiers: [
      {
        name: "Bronze",
        tagline: "ابدأ رحلتك",
        commission: "3%",
        requirements: ["حساب تجارة مسجّل", "إتمام الطلب الأول"],
        benefits: ["أسعار الجملة", "الوصول إلى جميع المنتجات", "دعم أساسي"],
        popular: false,
        nextLevel: "Silver",
      },
      {
        name: "Silver",
        tagline: "شريك نامٍ",
        commission: "5%",
        requirements: ["حساب تجارة مسجّل", "£500+ طلبات تراكمية", "الانضمام لبرنامج السفراء"],
        benefits: [
          "كل ما في Bronze",
          "خصم 10% على طلباتك",
          "دعم ذو أولوية",
          "وصول مبكر للمنتجات الجديدة",
          "عمولة 5% على الإحالات",
        ],
        popular: true,
        nextLevel: "Gold",
      },
      {
        name: "Gold",
        tagline: "الشريك الأفضل",
        commission: "8%",
        requirements: ["حساب تجارة مسجّل", "£2,000+ طلبات تراكمية", "3+ إحالات ناجحة", "نشط على وسائل التواصل"],
        benefits: [
          "كل ما في Silver",
          "خصم 15% على الطلبات",
          "مدير حساب مخصص",
          "كتالوج ألوان رقمي مجاني",
          "مُدرج في موقعنا",
          "دعوة للحدث السنوي",
          "عمولة 8% على الإحالات",
        ],
        popular: false,
        nextLevel: null,
      },
    ],
    popularBadge: "الأكثر شيوعًا",
    commissionLabel: "نسبة العمولة",
    requirementsLabel: "المتطلبات",
    benefitsLabel: "المزايا",
    earningsTitle: "كم يمكنك أن تكسب؟",
    earningsSubtitle: "أمثلة واقعية مبنية على متوسط قيم الطلبات £150-200 لكل إحالة.",
    referralExamples: [
      { salon: "صالون مثال أ", orders: "3 طلبات في الشهر", commission: "£45 مكتسبة", tier: "Bronze" },
      { salon: "صالون مثال ب", orders: "8 طلبات في الشهر", commission: "£180 مكتسبة", tier: "Silver" },
      { salon: "صالون مثال ج", orders: "15 طلبًا في الشهر", commission: "£480 مكتسبة", tier: "Gold" },
    ],
    earningsNote:
      "* هذه أمثلة توضيحية. تعتمد الأرباح الفعلية على حجم الإحالات وقيمة الطلب. يكسب كبار السفراء £500-1000+ شهريًا.",
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { q: "كيف يعمل برنامج الإحالة؟", a: "عند انضمامك لبرنامج السفراء، تتلقى رمز إحالة فريدًا. شارك هذا الرمز مع أصحاب الصالونات أو المصففين الآخرين. عندما يقدمون طلبًا برمزك، تكسب عمولة عن هذا الطلب. بلا حدود — اكسب بقدر ما تحيل!" },
      { q: "هل هناك تكلفة للانضمام؟", a: "لا. برنامج السفراء مجاني تمامًا. كل ما تحتاجه هو حساب Trade نشط لدى D.S Hair & Beauty." },
      { q: "متى أتلقى عمولتي؟", a: "تُحتسب العمولات شهريًا وتُدفع عبر التحويل البنكي أو PayPal خلال 14 days من نهاية الشهر. الحد الأدنى للدفع هو £25." },
      { q: "هل يمكنني إحالة صالوني الخاص؟", a: "لا، لا يمكنك كسب عمولة على طلباتك الخاصة. البرنامج مصمم لمساعدتك على تعريف صالونات جديدة بـ D.S Hair & Beauty." },
      { q: "ماذا لو أعاد صالون محالٍ منتجات؟", a: "إذا أدى طلب محالٍ إلى استرداد، تُخصم عمولة ذلك الطلب من دفعتك التالية." },
      { q: "كيف أتتبع إحالاتي وأرباحي؟", a: "يعرض لوحة تحكم السفراء رمز الإحالة الخاص بك، وجميع الطلبات المقدمة برمزك، وتاريخ عمولاتك. يمكنك الوصول إليها في أي وقت من حساب Trade الخاص بك." },
    ],
    applyTitle: "جاهز لتصبح سفيرًا؟",
    applySubtitle: "قدّم طلب حساب Trade الخاص بك وانضم لبرنامج السفراء في خطوة واحدة.",
    successTitle: "تم استلام الطلب!",
    successMsg1: "شكرًا لك — سنتواصل معك خلال 24 ساعة.",
    successMsg2: "تفقّد بريدك الإلكتروني للحصول على تفاصيل حساب Trade ومعلومات برنامج السفراء.",
    exploreCta: "استكشف مزايا حساب التجارة",
    nameLabel: "اسمك *",
    salonNameLabel: "اسم الصالون *",
    emailLabel: "البريد الإلكتروني *",
    phoneLabel: "WhatsApp / الهاتف *",
    locationLabel: "موقع الصالون *",
    referralLabel: "كم صالونًا/مصففًا يمكنك إحالته محتملًا؟",
    referralOptionPlaceholder: "اختر النطاق",
    referralOptions: ["1-5", "5-20", "20-50", "50+"],
    notesLabel: "أي شيء آخر؟",
    notesPlaceholder: "أخبرنا عن شبكة صالونك أو أي أسئلة...",
    submitBtn: "قدّم طلب حساب Trade وبرنامج السفراء",
    submittingBtn: "جارٍ الإرسال...",
    waCtaLabel: "تفضّل الدردشة أولًا؟",
    waCtaLink: "راسلنا على WhatsApp",
  },
  sv: {
    metaTitle: "Bli varumärkesambassadör för hårförlängning | D.S HAIR & BEAUTY",
    metaDescription:
      "Gå med i D.S HAIR ambassadörsprogrammet. Tjäna provision, få gratis extensions och väx din publik. Öppet för frisörer, innehållsskapare & salongproffs i Storbritannien.",
    heroBadge: "Ambassadörsprogram",
    heroTitle: "Tjäna provision samtidigt som du hjälper salonger att blomstra",
    heroSubtitle:
      "Gå med i D.S Hair & Beauty ambassadörsprogrammet. Dela kvalitetshårförlängningar med andra salonger. Tjäna provision på varje order de lägger. Inget tak, ingen gräns.",
    applyCta: "Ansök nu",
    learnTradeCta: "Läs mer om Trade-konto",
    stats: [
      { stat: "0%", label: "Programavgift" },
      { stat: "8%", label: "Max provision" },
      { stat: "∞", label: "Inget ordertak" },
      { stat: "24hr", label: "Utbetalningshantering" },
    ],
    howTitle: "Så här fungerar det",
    howSubtitle: "Enkelt. Dela din kod. Tjäna provision. Gå upp i nivå.",
    howItWorks: [
      { num: "01", title: "Ansök om Trade-konto", desc: "Registrera dig som partner till D.S Hair & Beauty. Tar 2 minuter." },
      { num: "02", title: "Gå med i ambassadörsprogrammet", desc: "Välj till vid ansökan eller när som helst från din kontopanel." },
      { num: "03", title: "Få din remisskod", desc: "Få en unik kod (t.ex. CAROSALON) att dela med andra salonger." },
      { num: "04", title: "Dela & tjäna provision", desc: "Andra salonger använder din kod vid beställning. Du tjänar provision på varje order." },
      { num: "05", title: "Gå upp i nivå", desc: "Fler remisser = högre nivå = fler förmåner. Klättra från Bronze till Gold." },
    ],
    tiersTitle: "Ambassadörsnivåer",
    tiersSubtitle: "Börja på Bronze, klättra till Silver och Gold. Fler remisser = fler belöningar.",
    tiers: [
      {
        name: "Bronze",
        tagline: "Påbörja din resa",
        commission: "3%",
        requirements: ["Registrerat Trade-konto", "Första ordern slutförd"],
        benefits: ["Partipriser", "Tillgång till alla produkter", "Grundläggande support"],
        popular: false,
        nextLevel: "Silver",
      },
      {
        name: "Silver",
        tagline: "Växande partner",
        commission: "5%",
        requirements: ["Registrerat Trade-konto", "£500+ ackumulerade ordrar", "Gå med i ambassadörsprogrammet"],
        benefits: [
          "Allt i Bronze",
          "10% rabatt på dina ordrar",
          "Prioriterad support",
          "Tidig tillgång till nya produkter",
          "5% provision på remisser",
        ],
        popular: true,
        nextLevel: "Gold",
      },
      {
        name: "Gold",
        tagline: "Topppartner",
        commission: "8%",
        requirements: ["Registrerat Trade-konto", "£2,000+ ackumulerade ordrar", "3+ lyckade remisser", "Aktiv på sociala medier"],
        benefits: [
          "Allt i Silver",
          "15% rabatt på ordrar",
          "Dedikerad kontohanterare",
          "Gratis digital färgkatalog",
          "Visas på vår webbplats",
          "Inbjudan till årligt evenemang",
          "8% provision på remisser",
        ],
        popular: false,
        nextLevel: null,
      },
    ],
    popularBadge: "Mest populär",
    commissionLabel: "Provisionsnivå",
    requirementsLabel: "Krav",
    benefitsLabel: "Förmåner",
    earningsTitle: "Vad skulle du kunna tjäna?",
    earningsSubtitle: "Realistiska exempel baserade på genomsnittliga ordervärden på £150-200 per remiss.",
    referralExamples: [
      { salon: "Exempelsalong A", orders: "3 ordrar på en månad", commission: "£45 intjänat", tier: "Bronze" },
      { salon: "Exempelsalong B", orders: "8 ordrar på en månad", commission: "£180 intjänat", tier: "Silver" },
      { salon: "Exempelsalong C", orders: "15 ordrar på en månad", commission: "£480 intjänat", tier: "Gold" },
    ],
    earningsNote:
      "* Detta är illustrativa exempel. Faktiska intäkter beror på remissvolym och ordervärde. Toppambassadörer tjänar £500-1000+ per månad.",
    faqTitle: "Vanliga frågor",
    faqs: [
      { q: "Hur fungerar remissprogrammet?", a: "När du går med i vårt ambassadörsprogram får du en unik remisskod. Dela denna kod med andra salongsägare eller frisörer. När de lägger en order med din kod tjänar du provision på den ordern. Ingen gräns — tjäna så mycket du remitterar!" },
      { q: "Kostar det något att gå med?", a: "Nej. Ambassadörsprogrammet är helt gratis. Du behöver bara ett aktivt Trade-konto hos D.S Hair & Beauty." },
      { q: "När får jag min provision?", a: "Provisioner beräknas månatligen och betalas via banköverföring eller PayPal inom 14 days från månadens slut. Minsta utbetalningsgräns är £25." },
      { q: "Kan jag remittera min egen salong?", a: "Nej, du kan inte tjäna provision på dina egna ordrar. Programmet är utformat för att hjälpa dig introducera nya salonger till D.S Hair & Beauty." },
      { q: "Vad händer om en remitterad salong returnerar produkter?", a: "Om en remitterad order leder till återbetalning dras provisionen för den ordern från din nästa utbetalning." },
      { q: "Hur följer jag mina remisser och intäkter?", a: "Din ambassadörspanel visar din remisskod, alla ordrar placerade med din kod och din provisionshistorik. Få åtkomst när som helst från ditt Trade-konto." },
    ],
    applyTitle: "Redo att bli ambassadör?",
    applySubtitle: "Ansök om ditt Trade-konto och välj till ambassadörsprogrammet i ett steg.",
    successTitle: "Ansökan mottagen!",
    successMsg1: "Tack — vi hör av oss inom 24 timmar.",
    successMsg2: "Kolla din e-post för dina Trade-kontouppgifter och information om ambassadörsprogrammet.",
    exploreCta: "Utforska Trade-kontoförmåner",
    nameLabel: "Ditt namn *",
    salonNameLabel: "Salongens namn *",
    emailLabel: "E-postadress *",
    phoneLabel: "WhatsApp / Telefon *",
    locationLabel: "Salongens plats *",
    referralLabel: "Hur många salonger/frisörer skulle du potentiellt kunna remittera?",
    referralOptionPlaceholder: "Välj intervall",
    referralOptions: ["1-5", "5-20", "20-50", "50+"],
    notesLabel: "Något annat?",
    notesPlaceholder: "Berätta om ditt salongsnätverk eller ställ dina frågor...",
    submitBtn: "Ansök om Trade-konto & ambassadörsprogram",
    submittingBtn: "Skickar...",
    waCtaLabel: "Föredrar du att chatta först?",
    waCtaLink: "Meddela oss på WhatsApp",
  },
  pl: {
    metaTitle: "Zostań ambasadorem marki przedłużeń włosów | D.S HAIR & BEAUTY",
    metaDescription:
      "Dołącz do programu ambasadorów D.S HAIR. Zarabiaj prowizję, otrzymuj darmowe przedłużenia i powiększaj swoją publiczność. Otwarty dla brytyjskich stylistów, twórców treści i profesjonalistów z salonów.",
    heroBadge: "Program Ambasadorski",
    heroTitle: "Zarabiaj prowizję, pomagając salonom się rozwijać",
    heroSubtitle:
      "Dołącz do programu ambasadorów D.S Hair & Beauty. Dziel się jakościowymi przedłużeniami włosów z innymi salonami. Zarabiaj prowizję od każdego złożonego przez nie zamówienia. Bez limitu, bez ograniczeń.",
    applyCta: "Aplikuj teraz",
    learnTradeCta: "Dowiedz się więcej o koncie Trade",
    stats: [
      { stat: "0%", label: "Opłata programowa" },
      { stat: "8%", label: "Maks. prowizja" },
      { stat: "∞", label: "Brak limitu zamówień" },
      { stat: "24hr", label: "Czas wypłaty" },
    ],
    howTitle: "Jak to działa",
    howSubtitle: "Prosto. Udostępnij swój kod. Zarabiaj prowizję. Awansuj.",
    howItWorks: [
      { num: "01", title: "Złóż wniosek o konto Trade", desc: "Zarejestruj się jako partner D.S Hair & Beauty. Zajmuje 2 minuty." },
      { num: "02", title: "Dołącz do programu ambasadorskiego", desc: "Zapisz się przy składaniu wniosku lub w dowolnym momencie z poziomu panelu konta." },
      { num: "03", title: "Otrzymaj swój kod polecający", desc: "Otrzymaj unikalny kod (np. CAROSALON) do udostępnienia innym salonom." },
      { num: "04", title: "Udostępniaj i zarabiaj prowizję", desc: "Inne salony używają Twojego kodu przy zamawianiu. Zarabiasz prowizję od każdego zamówienia." },
      { num: "05", title: "Awansuj", desc: "Więcej poleceń = wyższy poziom = więcej korzyści. Wspinaj się od Bronze do Gold." },
    ],
    tiersTitle: "Poziomy Ambasadora",
    tiersSubtitle: "Zacznij od Bronze, awansuj do Silver i Gold. Więcej poleceń = więcej nagród.",
    tiers: [
      {
        name: "Bronze",
        tagline: "Rozpocznij swoją podróż",
        commission: "3%",
        requirements: ["Zarejestrowane konto Trade", "Pierwsze zamówienie zrealizowane"],
        benefits: ["Ceny hurtowe", "Dostęp do wszystkich produktów", "Podstawowe wsparcie"],
        popular: false,
        nextLevel: "Silver",
      },
      {
        name: "Silver",
        tagline: "Rozwijający się partner",
        commission: "5%",
        requirements: ["Zarejestrowane konto Trade", "£500+ skumulowanych zamówień", "Dołącz do programu ambasadorskiego"],
        benefits: [
          "Wszystko z Bronze",
          "10% zniżki na Twoje zamówienia",
          "Priorytetowe wsparcie",
          "Wczesny dostęp do nowych produktów",
          "5% prowizji od poleceń",
        ],
        popular: true,
        nextLevel: "Gold",
      },
      {
        name: "Gold",
        tagline: "Partner Top",
        commission: "8%",
        requirements: ["Zarejestrowane konto Trade", "£2,000+ skumulowanych zamówień", "3+ udanych poleceń", "Aktywny w mediach społecznościowych"],
        benefits: [
          "Wszystko z Silver",
          "15% zniżki na zamówienia",
          "Dedykowany opiekun konta",
          "Darmowy cyfrowy katalog kolorów",
          "Wyróżniony na naszej stronie",
          "Zaproszenie na coroczne wydarzenie",
          "8% prowizji od poleceń",
        ],
        popular: false,
        nextLevel: null,
      },
    ],
    popularBadge: "Najpopularniejszy",
    commissionLabel: "Stawka prowizji",
    requirementsLabel: "Wymagania",
    benefitsLabel: "Korzyści",
    earningsTitle: "Co mógłbyś zarobić?",
    earningsSubtitle: "Realistyczne przykłady oparte na średniej wartości zamówień £150-200 na polecenie.",
    referralExamples: [
      { salon: "Przykładowy Salon A", orders: "3 zamówienia w miesiącu", commission: "£45 zarobione", tier: "Bronze" },
      { salon: "Przykładowy Salon B", orders: "8 zamówień w miesiącu", commission: "£180 zarobione", tier: "Silver" },
      { salon: "Przykładowy Salon C", orders: "15 zamówień w miesiącu", commission: "£480 zarobione", tier: "Gold" },
    ],
    earningsNote:
      "* To przykłady poglądowe. Rzeczywiste zarobki zależą od liczby poleceń i wartości zamówień. Najlepsi ambasadorzy zarabiają £500-1000+ miesięcznie.",
    faqTitle: "Często zadawane pytania",
    faqs: [
      { q: "Jak działa program poleceń?", a: "Gdy dołączasz do naszego programu ambasadorskiego, otrzymujesz unikalny kod polecający. Udostępnij ten kod innym właścicielom salonów lub stylistom. Gdy złożą zamówienie z Twoim kodem, zarabiasz prowizję od tego zamówienia. Bez limitu — zarabiaj tyle, ile polecisz!" },
      { q: "Czy udział kosztuje?", a: "Nie. Program ambasadorski jest całkowicie darmowy. Wystarczy aktywne konto Trade w D.S Hair & Beauty." },
      { q: "Kiedy otrzymam prowizję?", a: "Prowizje są liczone miesięcznie i wypłacane przelewem bankowym lub przez PayPal w ciągu 14 days od końca miesiąca. Minimalny próg wypłaty to £25." },
      { q: "Czy mogę polecić swój własny salon?", a: "Nie, nie możesz zarabiać prowizji od własnych zamówień. Program ma na celu pomóc Ci zaprezentować D.S Hair & Beauty nowym salonom." },
      { q: "Co jeśli polecony salon zwróci produkty?", a: "Jeśli polecone zamówienie kończy się zwrotem, prowizja od tego zamówienia zostanie odjęta od Twojej następnej wypłaty." },
      { q: "Jak śledzić moje polecenia i zarobki?", a: "Twój panel ambasadora pokazuje Twój kod polecający, wszystkie zamówienia złożone z Twoim kodem i historię prowizji. Uzyskaj dostęp w dowolnym momencie ze swojego konta Trade." },
    ],
    applyTitle: "Gotów zostać ambasadorem?",
    applySubtitle: "Złóż wniosek o konto Trade i zapisz się do programu ambasadorskiego w jednym kroku.",
    successTitle: "Wniosek otrzymany!",
    successMsg1: "Dziękujemy — skontaktujemy się w ciągu 24 godzin.",
    successMsg2: "Sprawdź swoją skrzynkę e-mail, aby otrzymać dane konta Trade oraz informacje o programie ambasadorskim.",
    exploreCta: "Poznaj korzyści konta Trade",
    nameLabel: "Twoje imię *",
    salonNameLabel: "Nazwa salonu *",
    emailLabel: "Adres e-mail *",
    phoneLabel: "WhatsApp / Telefon *",
    locationLabel: "Lokalizacja salonu *",
    referralLabel: "Ile salonów/stylistów mógłbyś potencjalnie polecić?",
    referralOptionPlaceholder: "Wybierz zakres",
    referralOptions: ["1-5", "5-20", "20-50", "50+"],
    notesLabel: "Coś jeszcze?",
    notesPlaceholder: "Opowiedz nam o swojej sieci salonów lub zadaj pytania...",
    submitBtn: "Złóż wniosek o konto Trade i program ambasadorski",
    submittingBtn: "Wysyłanie...",
    waCtaLabel: "Wolisz najpierw porozmawiać?",
    waCtaLink: "Napisz do nas na WhatsApp",
  },
}

export function getAmbassadorContent(locale: Locale): AmbassadorContent {
  return ambassadorContent[locale] ?? ambassadorContent.en
}
