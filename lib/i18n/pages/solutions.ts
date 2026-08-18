import type { Locale } from "../config"

export interface SolutionPackage {
  title: string
  description: string
  includes: string[]
  level: string
  price: string
  tag: string
  href: string
}
export interface SolutionService { title: string; description: string }
export interface SolutionsContent {
  metaTitle: string
  metaDescription: string
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  heroCta: string
  packagesTitle: string
  packagesSubtitle: string
  includesLabel: string
  viewProductsLabel: string
  servicesTitle: string
  servicesSubtitle: string
  joinProgrammeLabel: string
  ctaTitle: string
  ctaSubtitle: string
  ctaPrimary: string
  ctaSecondary: string
  packages: SolutionPackage[]
  services: SolutionService[]
}
export const solutionsContent: Record<Locale, SolutionsContent> = {
  en: {
    metaTitle: "Hair Extension Salon Solutions | Kits & Packages | D.S HAIR & BEAUTY",
    metaDescription: "Complete hair extension packages for professional salons. Starter kits to full method bundles, trade pricing, no minimums. Everything your salon needs to offer premium extensions.",
    heroEyebrow: "Salon Extension Solutions",
    heroTitle: "Complete Hair Extension Packages for Professional Salons",
    heroSubtitle: "Everything your salon needs to offer premium hair extension services — from starter kits to full method bundles. Trade pricing. No minimums.",
    heroCta: "Browse Extension Packages",
    packagesTitle: "Salon Extension Packages",
    packagesSubtitle: "Ready-to-go bundles covering every extension method. Everything included — so you can focus on your clients.",
    includesLabel: "What's Included:",
    viewProductsLabel: "View Products",
    servicesTitle: "More Than Just Products",
    servicesSubtitle: "We support salon partners with the services and knowledge needed to build a successful extension business.",
    joinProgrammeLabel: "Join Salon Partner Programme",
    ctaTitle: "Ready to Build Your Extension Offering?",
    ctaSubtitle: "Join 100+ UK salons already partnered with D.S Hair & Beauty. Get trade pricing, free colour matching, and dedicated support.",
    ctaPrimary: "Join Salon Partner Programme",
    ctaSecondary: "Browse All Professional Products",
    packages: [
      { title: "Tape-In Starter Kit", description: "Everything needed to offer professional tape-in extensions in-salon. Includes tape-ins, adhesive, pliers, tension comb, and care range.", includes: ["Tape-In Extensions (20 straps)", "Professional Tape Adhesive", "Tape-In Application Pliers", "Tension Combs", "Sulfate-Free Shampoo & Conditioner", "Tape Remover"], level: "Beginner", price: "From £280 trade", tag: "Most Popular", href: "/collections/tape-in" },
      { title: "Hand-Tied Weft Bundle", description: "Complete weft extension package for salons ready to offer the premium hand-tied method. Includes wefts, beads, tools and aftercare.", includes: ["Hand-Tied Wefts (3 bundles)", "Micro Beads & Liners", "Pull-Through Tool", "Bead Crimp Pliers", "Extension-Safe Brush", "Colour-Protect Mask"], level: "Advanced", price: "From £450 trade", tag: "Premium", href: "/collections/weft" },
      { title: "Balayage Colour Kit", description: "Matched balayage wefts and tapes ready to install — no salon colour matching needed. Instant premium results for your clients.", includes: ["Balayage Hand-Tied Wefts", "Balayage Tape-Ins", "Blending Brushes", "Toning Serum", "Colour-Protect Shampoo"], level: "All Levels", price: "From £320 trade", tag: "Trending", href: "/collections/butterfly-weft" },
      { title: "Full Extension Method Set", description: "One salon-ready bundle covering Tape-In, K-Tip, Nano Ring and Weft methods. Perfect for salons expanding their service offering.", includes: ["Tape-In (20 straps)", "K-Tip Extensions (100 strands)", "Nano Ring Beads (500pc)", "Hand-Tied Weft (2 bundles)", "All Application Tools", "Aftercare Starter Pack"], level: "Full Service", price: "From £680 trade", tag: "Best Value", href: "/collections/professional" },
    ],
    services: [
      { title: "Colour Matching Service", description: "Free in-salon or virtual colour matching consultation. We help you find the perfect match for every client — every time." },
      { title: "Tool & Equipment Packages", description: "Professional-grade application tools, styling brushes and salon storage. Everything extension stylists need in one place." },
      { title: "Method Training Referrals", description: "We connect salon partners with certified training courses for advanced extension methods. Upskill your team with confidence." },
      { title: "Reorder Bundles", description: "Easy restocking bundles for ongoing salon supply. Order the same combination each time — consistent quality, every batch." },
    ],
  },
  de: {
    metaTitle: "Haarverlängerungs-Salonlösungen | Kits & Pakete | D.S HAIR & BEAUTY",
    metaDescription: "Komplettpakete für Haarverlängerungen für professionelle Salons. Von Starter-Sets bis zu vollständigen Methoden-Bundles, Handelspreise, keine Mindestmengen. Alles, was Ihr Salon braucht.",
    heroEyebrow: "Salon-Erweiterungslösungen",
    heroTitle: "Komplette Haarverlängerungs-Pakete für professionelle Salons",
    heroSubtitle: "Alles, was Ihr Salon braucht, um hochwertige Haarverlängerungs-Services anzubieten – von Starter-Sets bis zu vollständigen Methoden-Bundles. Handelspreise. Keine Mindestmengen.",
    heroCta: "Erweiterungs-Pakete ansehen",
    packagesTitle: "Salon-Erweiterungspakete",
    packagesSubtitle: "Sofort einsatzbereite Bundles für jede Extensions-Methode. Alles inklusive – damit Sie sich auf Ihre Kunden konzentrieren können.",
    includesLabel: "Enthalten:",
    viewProductsLabel: "Produkte ansehen",
    servicesTitle: "Mehr als nur Produkte",
    servicesSubtitle: "Wir unterstützen Salon-Partner mit den Services und dem Wissen, die für ein erfolgreiches Extensions-Geschäft nötig sind.",
    joinProgrammeLabel: "Salon-Partnerprogramm beitreten",
    ctaTitle: "Bereit, Ihr Extensions-Angebot aufzubauen?",
    ctaSubtitle: "Schließen Sie sich 100+ UK-Salons an, die bereits mit D.S Hair & Beauty partnern. Erhalten Sie Handelspreise, kostenloses Farbabgleichen und persönliche Unterstützung.",
    ctaPrimary: "Salon-Partnerprogramm beitreten",
    ctaSecondary: "Alle professionellen Produkte ansehen",
    packages: [
      { title: "Tape-In Starter Kit", description: "Alles, was Sie brauchen, um professionelle Tape-In Extensions im Salon anzubieten. Enthält Tape-Ins, Kleber, Zange, Spannkamm und Pflegeserie.", includes: ["Tape-In Extensions (20 Streifen)", "Professioneller Tape-Kleber", "Tape-In Applikationszange", "Spannkämme", "Sulfatfreies Shampoo & Conditioner", "Tape-Entferner"], level: "Anfänger", price: "From £280 trade", tag: "Beliebteste", href: "/collections/tape-in" },
      { title: "Hand-Tied Weft Bundle", description: "Komplettes Weft-Extensions-Paket für Salons, die die hochwertige handgebundene Methode anbieten wollen. Enthält Wefts, Perlen, Werkzeuge und Aftercare.", includes: ["Handgebundene Wefts (3 Bündel)", "Mikro-Perlen & Futterale", "Durchzieh-Werkzeug", "Perlen-Crimpzange", "Erweiterungssichere Bürste", "Farb-Schutzmaske"], level: "Fortgeschritten", price: "From £450 trade", tag: "Premium", href: "/collections/weft" },
      { title: "Balayage Colour Kit", description: "Abgestimmte Balayage-Wefts und Tapes zur sofortigen Installation – kein Salon-Farabgleich nötig. Sofortige Premium-Ergebnisse für Ihre Kunden.", includes: ["Handgebundene Balayage-Wefts", "Balayage Tape-Ins", "Mischpinsel", "Tonungs-Serum", "Farb-Schutz-Shampoo"], level: "Alle Level", price: "From £320 trade", tag: "Trend", href: "/collections/butterfly-weft" },
      { title: "Full Extension Method Set", description: "Ein salonbereites Bundle, das Tape-In, K-Tip, Nano Ring und Weft abdeckt. Perfekt für Salons, die ihr Serviceangebot erweitern.", includes: ["Tape-In (20 Streifen)", "K-Tip Extensions (100 Strähnen)", "Nano-Ring Perlen (500 Stk.)", "Handgebundener Weft (2 Bündel)", "Alle Applikationswerkzeuge", "Aftercare-Starter-Set"], level: "Vollservice", price: "From £680 trade", tag: "Bestes Preis-Leistung", href: "/collections/professional" },
    ],
    services: [
      { title: "Colour Matching Service", description: "Kostenlose Farbabgleich-Beratung im Salon oder virtuell. Wir helfen Ihnen, den perfekten Ton für jeden Kunden zu finden – jedes Mal." },
      { title: "Tool & Equipment Packages", description: "Professionelle Applikationswerkzeuge, Styling-Bürsten und Salon-Lagerung. Alles, was Extensions-Stylisten an einem Ort brauchen." },
      { title: "Method Training Referrals", description: "Wir verbinden Salon-Partner mit zertifizierten Schulungskursen für fortgeschrittene Extensions-Methoden. Schule Sie Ihr Team mit Sicherheit weiter." },
      { title: "Reorder Bundles", description: "Einfache Nachbestell-Bundles für laufende Salon-Versorgung. Bestellen Sie jedes Mal dieselbe Kombination – gleichbleibende Qualität, jede Charge." },
    ],
  },
  fr: {
    metaTitle: "Solutions Extensions pour Salons | Kits & Packages | D.S HAIR & BEAUTY",
    metaDescription: "Packages complets d'extensions pour salons professionnels. Du kit de démarrage au bundle complet, tarifs professionnels, sans minimum. Tout ce dont votre salon a besoin.",
    heroEyebrow: "Solutions Extensions Salon",
    heroTitle: "Packages complets d'extensions pour salons professionnels",
    heroSubtitle: "Tout ce dont votre salon a besoin pour proposer des services d'extensions premium — des kits de démarrage aux bundles complets. Tarifs pro. Sans minimum.",
    heroCta: "Voir les packages d'extensions",
    packagesTitle: "Packages d'extensions salon",
    packagesSubtitle: "Des bundles prêts à l'emploi couvrant chaque méthode d'extension. Tout est inclus — pour que vous vous concentriez sur vos clients.",
    includesLabel: "Inclus :",
    viewProductsLabel: "Voir les produits",
    servicesTitle: "Bien plus que des produits",
    servicesSubtitle: "Nous soutenons les salon partenaires avec les services et le savoir nécessaires pour bâtir une activité d'extensions réussie.",
    joinProgrammeLabel: "Rejoindre le programme salon partenaire",
    ctaTitle: "Prêt à construire votre offre d'extensions ?",
    ctaSubtitle: "Rejoignez 100+ salons au Royaume-Uni déjà partenaires de D.S Hair & Beauty. Tarifs pro, colorimétrie gratuite et support dédié.",
    ctaPrimary: "Rejoindre le programme salon partenaire",
    ctaSecondary: "Voir tous les produits pro",
    packages: [
      { title: "Tape-In Starter Kit", description: "Tout ce qu'il faut pour proposer des extensions Tape-In pro en salon. Comprend tapes, adhésif, pince, peigne de tension et gamme de soin.", includes: ["Extensions Tape-In (20 bandes)", "Adhésif Tape-In pro", "Pince d'application Tape-In", "Peignes de tension", "Shampooing & après-shampooing sans sulfates", "Décolleur de tape"], level: "Débutant", price: "From £280 trade", tag: "Le plus populaire", href: "/collections/tape-in" },
      { title: "Hand-Tied Weft Bundle", description: "Package de weft complet pour salons prêts à proposer la méthode premium hand-tied. Comprend wefts, perles, outils et après-soin.", includes: ["Wefts hand-tied (3 paquets)", "Perles micro & doublures", "Outil de passage", "Pince à sertir les perles", "Brosse sûre pour extensions", "Masque protecteur couleur"], level: "Avancé", price: "From £450 trade", tag: "Premium", href: "/collections/weft" },
      { title: "Balayage Colour Kit", description: "Wefts et tapes balayage assortis prêts à poser — sans colorimétrie en salon. Résultats premium instantanés pour vos clientes.", includes: ["Wefts hand-tied Balayage", "Tape-Ins Balayage", "Pinceaux de mélange", "Sérum tonalisant", "Shampooing protecteur couleur"], level: "Tous niveaux", price: "From £320 trade", tag: "Tendance", href: "/collections/butterfly-weft" },
      { title: "Full Extension Method Set", description: "Un bundle salon prêt à l'emploi couvrant Tape-In, K-Tip, Nano Ring et Weft. Parfait pour les salons qui étendent leur offre.", includes: ["Tape-In (20 bandes)", "Extensions K-Tip (100 mèches)", "Perles Nano Ring (500 pcs)", "Weft hand-tied (2 paquets)", "Tous les outils d'application", "Kit de démarrage après-soin"], level: "Service complet", price: "From £680 trade", tag: "Meilleur rapport", href: "/collections/professional" },
    ],
    services: [
      { title: "Colour Matching Service", description: "Consultation colorimétrie gratuite en salon ou virtuelle. Nous vous aidons à trouver la teinte parfaite pour chaque cliente — à chaque fois." },
      { title: "Tool & Equipment Packages", description: "Outils d'application pro, brosses de styling et rangement salon. Tout ce dont les stylistes extensions ont besoin, au même endroit." },
      { title: "Method Training Referrals", description: "Nous mettons les salon partenaires en relation avec des formations certifiées pour méthodes avancées. Monter en compétence en confiance." },
      { title: "Reorder Bundles", description: "Bundles de réapprovisionnement simples pour l'approvisionnement continu du salon. Commandez la même combinaison à chaque fois — qualité constante." },
    ],
  },
  ar: {
    metaTitle: "حلول إكسسوارات الشعر للصالونات | مجموعات وكيتات | D.S HAIR & BEAUTY",
    metaDescription: "حزم كاملة لإكسسوارات الشعر للصالونات الاحترافية. من كيتات البدء إلى حزم الطرق الكاملة، أسعار الجملة، بلا حد أدنى. كل ما يحتاجه صالونك.",
    heroEyebrow: "حلول إكسسوارات الصالون",
    heroTitle: "حزم إكسسوارات شعر كاملة للصالونات الاحترافية",
    heroSubtitle: "كل ما يحتاجه صالونك لتقديم خدمات إكسسوارات شعر متميزة — من كيتات البدء إلى الحزم الكاملة. أسعار الجملة. بلا حد أدنى.",
    heroCta: "تصفح حزم الإكسسوارات",
    packagesTitle: "حزم إكسسوارات الصالون",
    packagesSubtitle: "حزم جاهزة تغطي كل طريقة من طرق الإكسسوارات. كل شيء مشمول — لتتمكن من التركيز على عملائك.",
    includesLabel: "المشمولات:",
    viewProductsLabel: "عرض المنتجات",
    servicesTitle: "أكثر من مجرد منتجات",
    servicesSubtitle: "نحن ندعم شركاء الصالون بالخدمات والمعرفة اللازمة لبناء نشاط ناجح للإكسسوارات.",
    joinProgrammeLabel: "انضم لبرنامج شركاء الصالون",
    ctaTitle: "جاهز لبناء عرض الإكسسوارات لديك؟",
    ctaSubtitle: "انضم إلى أكثر من 100 صالون في بريطانيا شريكة بالفعل مع D.S Hair & Beauty. احصل على أسعار الجملة، مطابقة لون مجانية، ودعم مخصص.",
    ctaPrimary: "انضم لبرنامج شركاء الصالون",
    ctaSecondary: "تصفح كل المنتجات الاحترافية",
    packages: [
      { title: "Tape-In Starter Kit", description: "كل ما تحتاجه لتقديم إكسسوارات Tape-In احترافية داخل الصالون. تشمل تيب-إن، لاصق، ملقط، مشط توتر، ومجموعة عناية.", includes: ["إكسسوارات Tape-In (20 شريط)", "لاصق Tape-In احترافي", "ملقط تطبيق Tape-In", "أمشاط توتر", "شامبو وبلسم خالٍ من الكبريتات", "مزيل التيب"], level: "مبتدئ", price: "From £280 trade", tag: "الأكثر شعبية", href: "/collections/tape-in" },
      { title: "Hand-Tied Weft Bundle", description: "حزمة وي كاملة للصالونات الجاهزة لتقديم الطريقة المميزة hand-tied. تشمل وي، خرز، أدوات، وعناية لاحقة.", includes: ["وي hand-tied (3 حزم)", "خرز ميكرو وبطانات", "أداة سحب", "ملقط كبس الخرز", "فرشاة آمنة للإكسسوارات", "قناع حماية اللون"], level: "متقدم", price: "From £450 trade", tag: "بريميوم", href: "/collections/weft" },
      { title: "Balayage Colour Kit", description: "وي وتيب Balayage متطابقة جاهزة للتركيب — بلا حاجة لمطابقة لون في الصالون. نتائج مميزة فورية لعملائك.", includes: ["وي hand-tied Balayage", "Tape-Ins Balayage", "فرشاة مزج", "سيروم تونر", "شامبو حماية اللون"], level: "كل المستويات", price: "From £320 trade", tag: "رائج", href: "/collections/butterfly-weft" },
      { title: "Full Extension Method Set", description: "حزمة جاهزة للصالون تغطي Tape-In وK-Tip وNano Ring والوي. مثالية للصالونات التي توسع عرضها.", includes: ["Tape-In (20 شريط)", "إكسسوارات K-Tip (100 خصلة)", "خرز Nano Ring (500 قطعة)", "وي hand-tied (حزمتان)", "كل أدوات التطبيق", "حزمة بدء العناية اللاحقة"], level: "خدمة كاملة", price: "From £680 trade", tag: "أفضل قيمة", href: "/collections/professional" },
    ],
    services: [
      { title: "Colour Matching Service", description: "استشارة مطابقة لون مجانية داخل الصالون أو افتراضية. نساعدك في إيجاد الدرجة المثالية لكل عميلة — في كل مرة." },
      { title: "Tool & Equipment Packages", description: "أدوات تطبيق احترافية، فرشاة تصفيف، وتخزين الصالون. كل ما يحتاجه مصففو الإكسسوارات في مكان واحد." },
      { title: "Method Training Referrals", description: "نربط شركاء الصالون بدورات تدريب معتمدة للطرق المتقدمة. ارفع كفاءة فريقك بثقة." },
      { title: "Reorder Bundles", description: "حزم إعادة طلب سهلة للتوريد المستمر للصالون. اطلب نفس التركيبة في كل مرة — جودة ثابتة، كل شحنة." },
    ],
  },
  sv: {
    metaTitle: "Hårförlängningslösningar för salonger | Kit & paket | D.S HAIR & BEAUTY",
    metaDescription: "Kompletta hårförlängningspaket för professionella salonger. Från startkit till kompletta metodpaket, partipriser, inget minimi. Allt din salong behöver.",
    heroEyebrow: "Salongens förlängningslösningar",
    heroTitle: "Kompletta hårförlängningspaket för professionella salonger",
    heroSubtitle: "Allt din salong behöver för att erbjuda premium hårförlängningstjänster — från startkit till kompletta metodpaket. Partipriser. Inget minimi.",
    heroCta: "Bläddra i förlängningspaket",
    packagesTitle: "Salongens förlängningspaket",
    packagesSubtitle: "Färdiga paket som täcker varje förlängningsmetod. Allt ingår — så att du kan fokusera på dina kunder.",
    includesLabel: "Ingår:",
    viewProductsLabel: "Visa produkter",
    servicesTitle: "Mer än bara produkter",
    servicesSubtitle: "Vi stöttar salongspartners med tjänster och kunskap som behövs för en framgångsrik förlängningsverksamhet.",
    joinProgrammeLabel: "Gå med i salongspartnersprogrammet",
    ctaTitle: "Redo att bygga upp ditt förlängningsutbud?",
    ctaSubtitle: "Gå med 100+ brittiska salonger som redan samarbetar med D.S Hair & Beauty. Få partipriser, gratis färgmatchning och dedikerat stöd.",
    ctaPrimary: "Gå med i salongspartnersprogrammet",
    ctaSecondary: "Bläddra i alla professionella produkter",
    packages: [
      { title: "Tape-In Starter Kit", description: "Allt som behövs för att erbjuda professionella Tape-In-förlängningar i salongen. Inkluderar tejp, lim, tång, spänningkam och vårdserie.", includes: ["Tape-In Extensions (20 remsor)", "Professionellt tejplim", "Tape-In applikationstång", "Spänningskammar", "Sulfatfritt schampo & balsam", "Tejpborttagare"], level: "Nybörjare", price: "From £280 trade", tag: "Populärast", href: "/collections/tape-in" },
      { title: "Hand-Tied Weft Bundle", description: "Komplett weft-paket för salonger redo att erbjuda den premium hand-tied-metoden. Inkluderar wefts, pärlor, verktyg och aftercare.", includes: ["Hand-tied Wefts (3 buntar)", "Mikropärlor & fodral", "Dragverktyg", "Pärltång", "Extensions-säker borste", "Färgskyddande mask"], level: "Avancerad", price: "From £450 trade", tag: "Premium", href: "/collections/weft" },
      { title: "Balayage Colour Kit", description: "Matchade balayage-wefts och tejp redo att montera — ingen salongsfärgmatchning behövs. Omedelbara premiumresultat för dina kunder.", includes: ["Hand-tied Balayage Wefts", "Balayage Tape-Ins", "Blandningspenslar", "Toningsserum", "Färgskyddande schampo"], level: "Alla nivåer", price: "From £320 trade", tag: "Trendigt", href: "/collections/butterfly-weft" },
      { title: "Full Extension Method Set", description: "Ett salongsklart paket som täcker Tape-In, K-Tip, Nano Ring och Weft. Perfekt för salonger som utökar sitt utbud.", includes: ["Tape-In (20 remsor)", "K-Tip Extensions (100 strån)", "Nano Ring-pärlor (500 st)", "Hand-tied Weft (2 buntar)", "Alla applikationsverktyg", "Aftercare-startpaket"], level: "Helservice", price: "From £680 trade", tag: "Bästa värde", href: "/collections/professional" },
    ],
    services: [
      { title: "Colour Matching Service", description: "Gratis färgmatchning i salongen eller virtuellt. Vi hjälper dig hitta den perfekta nyansen för varje kund — varje gång." },
      { title: "Tool & Equipment Packages", description: "Professionella applikationsverktyg, stylingsborstar och salongsförvaring. Allt extensions-stylister behöver på ett ställe." },
      { title: "Method Training Referrals", description: "Vi kopplar salongspartners till certifierade utbildningar för avancerade metoder. Vidareutbilda ditt team med trygghet." },
      { title: "Reorder Bundles", description: "Enkla påfyllnadspaket för löpande salongsförsörjning. Beställ samma kombination varje gång — konsekvent kvalitet, varje sändning." },
    ],
  },
  pl: {
    metaTitle: "Rozwiązania przedłużania włosów dla salonów | Zestawy i pakiety | D.S HAIR & BEAUTY",
    metaDescription: "Kompletne pakiety przedłużania włosów dla profesjonalnych salonów. Od zestawów startowych po pełne pakiety metod, ceny hurtowe, bez minimum. Wszystko, czego potrzebuje Twój salon.",
    heroEyebrow: "Rozwiązania przedłużania dla salonów",
    heroTitle: "Kompletne pakiety przedłużania włosów dla profesjonalnych salonów",
    heroSubtitle: "Wszystko, czego potrzebuje Twój salon, by oferować premium usługi przedłużania — od zestawów startowych po pełne pakiety metod. Ceny hurtowe. Bez minimum.",
    heroCta: "Przeglądaj pakiety przedłużania",
    packagesTitle: "Pakiety przedłużania dla salonów",
    packagesSubtitle: "Gotowe zestawy obejmujące każdą metodę przedłużania. Wszystko w cenie — byś mógł skupić się na klientach.",
    includesLabel: "W zestawie:",
    viewProductsLabel: "Zobacz produkty",
    servicesTitle: "Więcej niż produkty",
    servicesSubtitle: "Wspieramy partnerów salonów usługami i wiedzą niezbędną do zbudowania udanego biznesu przedłużania.",
    joinProgrammeLabel: "Dołącz do programu partnerskiego salonów",
    ctaTitle: "Gotów zbudować swoją ofertę przedłużania?",
    ctaSubtitle: "Dołącz do 100+ brytyjskich salonów już współpracujących z D.S Hair & Beauty. Otrzymaj ceny hurtowe, darmowe dobieranie koloru i dedykowane wsparcie.",
    ctaPrimary: "Dołącz do programu partnerskiego salonów",
    ctaSecondary: "Przeglądaj wszystkie produkty profesjonalne",
    packages: [
      { title: "Tape-In Starter Kit", description: "Wszystko, co potrzebne, by oferować profesjonalne przedłużenia Tape-In w salonie. Zawiera tape-in, klej, obcęgi, grzebień napięciowy i linię pielęgnacji.", includes: ["Przedłużenia Tape-In (20 pasków)", "Profesjonalny klej do taśm", "Obcęgi aplikacyjne Tape-In", "Grzebienie napięciowe", "Szampon i odżywka bez siarczanów", "Usuwacz taśm"], level: "Początkujący", price: "From £280 trade", tag: "Najpopularniejszy", href: "/collections/tape-in" },
      { title: "Hand-Tied Weft Bundle", description: "Kompletny pakiet weft dla salonów gotowych zaoferować premium metodę hand-tied. Zawiera wefty, koraliki, narzędzia i aftercare.", includes: ["Wefty hand-tied (3 pakiety)", "Mikrokoraliki i wkładki", "Narzędzie przeciągające", "Obcęgi do koralików", "Bezpieczna dla przedłużeń szczotka", "Maska ochronna koloru"], level: "Zaawansowany", price: "From £450 trade", tag: "Premium", href: "/collections/weft" },
      { title: "Balayage Colour Kit", description: "Dopasowane wefty i taśmy balayage gotowe do montażu — bez dobierania koloru w salonie. Natychmiastowe premium efekty dla klientów.", includes: ["Wefty hand-tied Balayage", "Tape-Ins Balayage", "Pędzle do mieszania", "Serum tonujące", "Szampon ochronny koloru"], level: "Wszystkie poziomy", price: "From £320 trade", tag: "Popularne", href: "/collections/butterfly-weft" },
      { title: "Full Extension Method Set", description: "Jeden gotowy dla salonu zestaw obejmujący Tape-In, K-Tip, Nano Ring i Weft. Idealny dla salonów rozszerzających ofertę.", includes: ["Tape-In (20 pasków)", "Przedłużenia K-Tip (100 pasm)", "Koraliki Nano Ring (500 szt.)", "Weft hand-tied (2 pakiety)", "Wszystkie narzędzia aplikacyjne", "Zestaw startowy aftercare"], level: "Pełny serwis", price: "From £680 trade", tag: "Najlepsza wartość", href: "/collections/professional" },
    ],
    services: [
      { title: "Colour Matching Service", description: "Bezpłatna konsultacja doboru koloru w salonie lub wirtualnie. Pomagamy znaleźć idealny odcień dla każdej klientki — za każdym razem." },
      { title: "Tool & Equipment Packages", description: "Profesjonalne narzędzia aplikacyjne, szczotki do stylizacji i przechowywanie salonowe. Wszystko, czego potrzebują styliści przedłużeń, w jednym miejscu." },
      { title: "Method Training Referrals", description: "Łączymy partnerów salonów z certyfikowanymi kursami zaawansowanych metod. Podnieście kwalifikacje zespołu z pewnością." },
      { title: "Reorder Bundles", description: "Proste zestawy uzupełniające do ciągłych dostaw salonu. Zamawiaj tę samą kombinację za każdym razem — stała jakość, każda partia." },
    ],
  },
}

export function getSolutionsContent(locale: Locale): SolutionsContent {
  return solutionsContent[locale] ?? solutionsContent.en
}
