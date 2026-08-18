import type { Locale } from "../config"

export interface CompareRow { feature: string; competitor: string; ds: string }
export interface PainPoint { title: string; body: string }
export interface ValueBlock { title: string; desc: string }
export interface SwitchContent {
  metaTitle: string
  metaDescription: string
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  heroCtaPrimary: string
  heroCtaSecondary: string
  whyTitle: string
  whySubtitle: string
  painPoints: PainPoint[]
  compareTitle: string
  compareSubtitle: string
  compareHeaderFeature: string
  compareHeaderCompetitor: string
  compareHeaderDs: string
  compareRows: CompareRow[]
  valueBlocks: ValueBlock[]
  ctaTitle: string
  ctaSubtitle: string
  ctaPrimary: string
  ctaSecondary: string
  manufacturingArmLabel: string
  whatsappHeroMsg: string
  whatsappCtaMsg: string
}
export const switchContent: Record<Locale, SwitchContent> = {
  en: {
    metaTitle: "Switch to a Manufacturer-Direct Hair Extension Supplier | D.S HAIR & BEAUTY",
    metaDescription: "Tired of reselling someone else's brand? Switch to D.S Hair & Beauty — a factory-direct trade supplier with private label, better margins and 19 years of manufacturing.",
    heroEyebrow: "For Salon Owners Re-thinking Their Supplier",
    heroTitle: "A Manufacturer-Direct Alternative Built for Salons, Not Consumers",
    heroSubtitle: "Same salon-grade 100% Remy human hair, but sourced factory-direct. Higher margins, private label options, and a partner who grows with your salon instead of competing with it.",
    heroCtaPrimary: "Compare Trade Pricing",
    heroCtaSecondary: "WhatsApp Us",
    whyTitle: "Why Salons Switch to a Manufacturer-Direct Partner",
    whySubtitle: "Consumer brands build their own name. We help you build yours.",
    painPoints: [
      { title: "Your clients ask for a brand-name product by name", body: "That means they see the price online. You become a fitting service, not a brand. We help salons create their own line so clients book with you, not a product." },
      { title: "Margins are being squeezed", body: "Brand-name wholesale leaves little room. Factory-direct pricing means you control your retail price and protect your profit." },
      { title: "You're locked into one brand's range", body: "If they discontinue a shade or method, you're stuck. We supply across methods and can customise colours and packaging." },
    ],
    compareTitle: "Retail-Brand Supplier vs D.S Hair & Beauty",
    compareSubtitle: "We are not a retail brand. We are the factory-backed trade arm that helps salons keep the margin.",
    compareHeaderFeature: "Feature",
    compareHeaderCompetitor: "Retail-Brand Supplier",
    compareHeaderDs: "D.S Hair & Beauty",
    compareRows: [
      { feature: "Who owns the brand?", competitor: "The supplier's brand", ds: "Your salon keeps the margin and identity" },
      { feature: "Pricing structure", competitor: "Retail-premium wholesale", ds: "Factory-direct trade pricing" },
      { feature: "Private label", competitor: "Not available", ds: "Available — build your own line" },
      { feature: "Product origin", competitor: "Sourced via brand channels", ds: "Factory-direct, 19 years manufacturing" },
      { feature: "UK delivery", competitor: "Depends on supplier", ds: "Selected lines from Manchester stock; full range express 3–5 days" },
      { feature: "Account manager", competitor: "Brand rep", ds: "Direct contact with Caro Chen / production" },
    ],
    valueBlocks: [
      { title: "Better Margin", desc: "Factory-direct pricing gives you room to set competitive salon prices without eating your profit." },
      { title: "Consistent Quality", desc: "19 years of manufacturing. Cuticle-aligned Remy hair. Shipment 50 matches shipment 1." },
      { title: "Reliable Supply", desc: "Selected lines ship from Manchester stock; full range via express DHL/UPS to the UK." },
      { title: "Private Label", desc: "Build your own extension brand with custom packaging, shades, and labelling." },
    ],
    ctaTitle: "Ready to Stop Reselling Someone Else's Brand?",
    ctaSubtitle: "Apply for a trade account and we'll send you a digital colour catalogue plus tailored trade pricing. No minimum first order.",
    ctaPrimary: "Apply for Trade Account",
    ctaSecondary: "Chat on WhatsApp",
    manufacturingArmLabel: "Manufacturing arm:",
    whatsappHeroMsg: "Hi! I'm a salon owner looking for a manufacturer-direct hair extension supplier.",
    whatsappCtaMsg: "Hi! I'm interested in switching to a manufacturer-direct hair extension supplier for my salon.",
  },
  de: {
    metaTitle: "Wechseln Sie zu einem herstellerdirekten Haarverlängerungs-Lieferanten | D.S HAIR & BEAUTY",
    metaDescription: "Müde, die Marke eines anderen zu verkaufen? Wechseln Sie zu D.S Hair & Beauty — ein herstellerdirecter Handelslieferant mit Private Label, besseren Margen und 19 Jahren Fertigung.",
    heroEyebrow: "Für Saloninhaber, die ihren Lieferanten überdenken",
    heroTitle: "Eine herstellerdirecte Alternative — gebaut für Salons, nicht für Verbraucher",
    heroSubtitle: "Dieselbe salonfähige 100% Remy Echthaar, aber herstellerdirect bezogen. Höhere Margen, Private-Label-Optionen und ein Partner, der mit Ihrem Salon wächst, statt mit ihm zu konkurrieren.",
    heroCtaPrimary: "Handelspreise vergleichen",
    heroCtaSecondary: "WhatsApp schreiben",
    whyTitle: "Warum Salons zu einem herstellerdirecten Partner wechseln",
    whySubtitle: "Verbrauchermarken bauen ihren eigenen Namen auf. Wir helfen Ihnen, Ihren aufzubauen.",
    painPoints: [
      { title: "Ihre Kunden fragen namentlich nach einer Markenware", body: "Das bedeutet, sie sehen den Preis online. Sie werden zum Anpassungs-Service, nicht zur Marke. Wir helfen Salons, ihre eigene Linie zu schaffen, damit Kunden bei Ihnen buchen, nicht bei einem Produkt." },
      { title: "Margen werden gedrückt", body: "Marken-Großhandel lässt wenig Spielraum. Herstellerdirecte Preise bedeuten, Sie kontrollieren Ihren Verkaufspreis und schützen Ihren Gewinn." },
      { title: "Sie sind an das Sortiment einer Marke gebunden", body: "Stellen sie eine Nuance oder Methode ein, sind Sie festgefahren. Wir liefern über Methoden hinweg und können Farben und Verpackung anpassen." },
    ],
    compareTitle: "Einzelhandels-Markenlieferant vs D.S Hair & Beauty",
    compareSubtitle: "Wir sind keine Einzelhandelsmarke. Wir sind der werksunterstützte Handelsarm, der Salons die Marge hält.",
    compareHeaderFeature: "Merkmal",
    compareHeaderCompetitor: "Einzelhandels-Markenlieferant",
    compareHeaderDs: "D.S Hair & Beauty",
    compareRows: [
      { feature: "Wem gehört die Marke?", competitor: "Die Marke des Lieferanten", ds: "Ihr Salon behält Marge und Identität" },
      { feature: "Preisstruktur", competitor: "Einzelhandels-Aufpreis-Großhandel", ds: "Herstellerdirecte Handelspreise" },
      { feature: "Private Label", competitor: "Nicht verfügbar", ds: "Verfügbar — bauen Sie Ihre eigene Linie" },
      { feature: "Produkturpsrung", competitor: "Über Markenkanäle bezogen", ds: "Herstellerdirect, 19 Jahre Fertigung" },
      { feature: "UK-Lieferung", competitor: "Hängt vom Lieferanten ab", ds: "Ausgewählte Linien ab Manchester-Lager; gesamtes Sortiment Express 3–5 Tage" },
      { feature: "Key-Account-Manager", competitor: "Markenvertreter", ds: "Direkter Kontakt mit Caro Chen / Produktion" },
    ],
    valueBlocks: [
      { title: "Bessere Marge", desc: "Herstellerdirecte Preise geben Ihnen Raum, wettbewerbsfähige Salonpreise festzulegen, ohne Ihren Gewinn aufzufressen." },
      { title: "Durchgehende Qualität", desc: "19 Jahre Fertigung. Cuticula-ausgerichtetes Remy-Haar. Lieferung 50 gleicht Lieferung 1." },
      { title: "Verlässliche Versorgung", desc: "Ausgewählte Linien ab Manchester-Lager; gesamtes Sortiment per Express DHL/UPS nach UK." },
      { title: "Private Label", desc: "Bauen Sie Ihre eigene Extensions-Marke mit individueller Verpackung, Nuancen und Beschriftung." },
    ],
    ctaTitle: "Bereit, aufzuhören, die Marke eines anderen zu verkaufen?",
    ctaSubtitle: "Beantragen Sie ein Handelskonto und wir senden Ihnen einen digitalen Farbkatalog plus maßgeschneiderte Handelspreise. Keine Mindestbestellung für den Start.",
    ctaPrimary: "Handelskonto beantragen",
    ctaSecondary: "Chat auf WhatsApp",
    manufacturingArmLabel: "Fertigungsarm:",
    whatsappHeroMsg: "Hallo! Ich bin Saloninhaber und suche einen herstellerdirecten Haarverlängerungs-Lieferanten.",
    whatsappCtaMsg: "Hallo! Ich interessiere mich für den Wechsel zu einem herstellerdirecten Haarverlängerungs-Lieferanten für meinen Salon.",
  },
  fr: {
    metaTitle: "Passer à un fournisseur d'extensions direct usine | D.S HAIR & BEAUTY",
    metaDescription: "Marre de revendre la marque d'un autre ? Passez à D.S Hair & Beauty — un fournisseur pro direct usine avec private label, meilleures marges et 19 ans de fabrication.",
    heroEyebrow: "Pour les patrons de salon qui repensent leur fournisseur",
    heroTitle: "Une alternative direct usine conçue pour les salons, pas pour les consommateurs",
    heroSubtitle: "Même extensions 100% Remy de qualité salon, mais sourcées direct usine. Meilleures marges, options private label, et un partenaire qui grandit avec votre salon au lieu de concurrencer.",
    heroCtaPrimary: "Comparer les tarifs pro",
    heroCtaSecondary: "WhatsApp",
    whyTitle: "Pourquoi les salons passent à un partenaire direct usine",
    whySubtitle: "Les marques grand public construisent leur propre nom. Nous vous aidons à construire le vôtre.",
    painPoints: [
      { title: "Vos clientes demandent une marque par son nom", body: "Cela signifie qu'elles voient le prix en ligne. Vous devenez un service de pose, pas une marque. Nous aidons les salons à créer leur propre ligne pour que les clientes réservent avec vous, pas un produit." },
      { title: "Les marges sont comprimées", body: "Le grossisme de marque laisse peu de place. Les prix direct usine vous permettent de fixer votre prix de vente et de protéger votre profit." },
      { title: "Vous êtes enfermé dans la gamme d'une marque", body: "S'ils arrêtent une nuance ou une méthode, vous êtes bloqué. Nous fournissons toutes méthodes et pouvons personnaliser couleurs et packaging." },
    ],
    compareTitle: "Fournisseur de marque retail vs D.S Hair & Beauty",
    compareSubtitle: "Nous ne sommes pas une marque retail. Nous sommes le bras pro soutenu par l'usine qui aide les salons à garder la marge.",
    compareHeaderFeature: "Critère",
    compareHeaderCompetitor: "Fournisseur de marque retail",
    compareHeaderDs: "D.S Hair & Beauty",
    compareRows: [
      { feature: "À qui appartient la marque ?", competitor: "La marque du fournisseur", ds: "Votre salon garde la marge et l'identité" },
      { feature: "Structure de prix", competitor: "Grossisme avec surcoût retail", ds: "Tarifs pro direct usine" },
      { feature: "Private label", competitor: "Indisponible", ds: "Disponible — créez votre propre ligne" },
      { feature: "Origine produit", competitor: "Sourcée via canaux de marque", ds: "Direct usine, 19 ans de fabrication" },
      { feature: "Livraison UK", competitor: "Dépend du fournisseur", ds: "Lignes sélectionnées depuis stock Manchester ; gamme complète express 3–5 jours" },
      { feature: "Chargé de compte", competitor: "Représentant de marque", ds: "Contact direct avec Caro Chen / production" },
    ],
    valueBlocks: [
      { title: "Meilleure marge", desc: "Les prix direct usine vous laissent la place de fixer des prix salon compétitifs sans manger votre profit." },
      { title: "Qualité constante", desc: "19 ans de fabrication. Remy à cuticules alignées. L'envoi 50 égal l'envoi 1." },
      { title: "Approvisionnement fiable", desc: "Lignes sélectionnées expédiées depuis stock Manchester ; gamme complète en express DHL/UPS vers le UK." },
      { title: "Private label", desc: "Créez votre propre marque d'extensions avec packaging, nuances et étiquetage personnalisés." },
    ],
    ctaTitle: "Prêt à arrêter de revendre la marque d'un autre ?",
    ctaSubtitle: "Demandez un compte pro et nous vous enverrons un catalogue couleur numérique plus des tarifs pro personnalisés. Aucune commande minimale au démarrage.",
    ctaPrimary: "Demander un compte pro",
    ctaSecondary: "Discuter sur WhatsApp",
    manufacturingArmLabel: "Bras de fabrication :",
    whatsappHeroMsg: "Bonjour ! Je suis patron de salon et cherche un fournisseur d'extensions direct usine.",
    whatsappCtaMsg: "Bonjour ! Je souhaite passer à un fournisseur d'extensions direct usine pour mon salon.",
  },
  ar: {
    metaTitle: "انتقل إلى مورد إكسسوارات شعر مباشر من المصنع | D.S HAIR & BEAUTY",
    metaDescription: "سئمت إعادة بيع علامة غيرك؟ انتقل إلى D.S Hair & Beauty — مورد جملة مباشر من المصنع مع علامة خاصة، هوامش أفضل و19 عامًا من التصنيع.",
    heroEyebrow: "لأصحاب الصالونات الذين يعيدون النظر في موردهم",
    heroTitle: "بديل مباشر من المصنع مصمم للصالونات، لا للمستهلكين",
    heroSubtitle: "نفس الإكسسوارات الاحترافية 100% Remy من شعر طبيعي، لكن مصدرها مباشر من المصنع. هوامش أعلى، خيارات علامة خاصة، وشريك ينمو مع صالونك بدلًا من منافسته.",
    heroCtaPrimary: "قارن أسعار الجملة",
    heroCtaSecondary: "راسلنا على WhatsApp",
    whyTitle: "لماذا ينتقل الصالونات إلى شريك مباشر من المصنع",
    whySubtitle: "العلامات الاستهلاكية تبني اسمها. نحن نساعدك على بناء اسمك.",
    painPoints: [
      { title: "عملاؤك يطلبون منتج علامة باسمه", body: "هذا يعني أنهم يرون السعر على الإنترنت. تصبح مجرد خدمة تركيب، لا علامة. نساعد الصالونات على إنشاء خطها الخاص ليحجز العملاء معك، لا مع منتج." },
      { title: "الهوامش تضيق", body: "جملة العلامات يترك مساحة ضئيلة. الأسعار المباشرة من المصنع تعني أنك تتحكم بسعر البيع وتحمي ربحك." },
      { title: "أنت مقيد بنطاق علامة واحدة", body: "إذا أوقفوا درجة أو طريقة، تورطت. نحن نورد عبر كل الطرق ويمكننا تخصيص الألوان والتغليف." },
    ],
    compareTitle: "مورد علامة تجزئة مقابل D.S Hair & Beauty",
    compareSubtitle: "نحن لسنا علامة تجزئة. نحن الذراع التجارية المدعومة من المصنع التي تساعد الصالونات على الاحتفاظ بالهامش.",
    compareHeaderFeature: "المعيار",
    compareHeaderCompetitor: "مورد علامة تجزئة",
    compareHeaderDs: "D.S Hair & Beauty",
    compareRows: [
      { feature: "من يملك العلامة؟", competitor: "علامة المورد", ds: "صالونك يحتفظ بالهامش والهوية" },
      { feature: "بنية السعر", competitor: "جملة بزيادة تجزئة", ds: "أسعار جملة مباشرة من المصنع" },
      { feature: "علامة خاصة", competitor: "غير متاحة", ds: "متاحة — ابنِ خطك الخاص" },
      { feature: "منشأ المنتج", competitor: "مُستأمن عبر قنوات العلامة", ds: "مباشر من المصنع، 19 عامًا من التصنيع" },
      { feature: "تسليم UK", competitor: "حسب المورد", ds: "خطوط مختارة من مخزن Manchester؛ كامل النطاق اكسبرس 3–5 أيام" },
      { feature: "مدير حساب", competitor: "ممثل العلامة", ds: "تواصل مباشر مع Caro Chen / الإنتاج" },
    ],
    valueBlocks: [
      { title: "هامش أفضل", desc: "الأسعار المباشرة من المصنع تتيح لك تحديد أسعار صالون تنافسية دون التهام ربحك." },
      { title: "جودة متسقة", desc: "19 عامًا من التصنيع. شعر Remy بقصور متجهة. الشحنة 50 تساوي الشحنة 1." },
      { title: "توريد موثوق", desc: "خطوط مختارة تُشحن من مخزن Manchester؛ كامل النطاق عبر DHL/UPS اكسبرس إلى UK." },
      { title: "علامة خاصة", desc: "ابنِ علامة إكسسواراتك الخاصة مع تغليف وألوان ووسم مخصص." },
    ],
    ctaTitle: "جاهز للتوقف عن إعادة بيع علامة غيرك؟",
    ctaSubtitle: "قدّم طلب حساب جملة وسنرسل لك كتالوج ألوان رقمي plus أسعار جملة مخصصة. لا حد أدنى للطلب الأول.",
    ctaPrimary: "طلب حساب جملة",
    ctaSecondary: "دردشة على WhatsApp",
    manufacturingArmLabel: "الذراع التصنيعي:",
    whatsappHeroMsg: "مرحبًا! أنا صاحب صالون وأبحث عن مورد إكسسوارات شعر مباشر من المصنع.",
    whatsappCtaMsg: "مرحبًا! أرغب في التحول إلى مورد إكسسوارات شعر مباشر من المصنع لصالوني.",
  },
  sv: {
    metaTitle: "Byt till en leverantör av hårförlängning direkt från fabrik | D.S HAIR & BEAUTY",
    metaDescription: "Trött på att sälja någon annans varumärke? Byt till D.S Hair & Beauty — en partileverantör direkt från fabrik med private label, bättre marginaler och 19 års tillverkning.",
    heroEyebrow: "För salongsägare som tänker om sin leverantör",
    heroTitle: "Ett alternativ direkt från fabrik byggt för salonger, inte konsumenter",
    heroSubtitle: "Samma salongsklassade 100% Remy äkta hår, men inköpt direkt från fabrik. Högre marginaler, private label-alternativ, och en partner som växer med din salong istället för att konkurrera.",
    heroCtaPrimary: "Jämför partipriser",
    heroCtaSecondary: "WhatsApp oss",
    whyTitle: "Varför salonger byter till en partner direkt från fabrik",
    whySubtitle: "Konsumentvarumärken bygger sitt eget namn. Vi hjälper dig bygga ditt.",
    painPoints: [
      { title: "Dina kunder ber om ett varumärke vid namn", body: "Det betyder att de ser priset online. Du blir en påsättningsservice, inte ett varumärke. Vi hjälper salonger skapa sin egen linje så kunder bokar hos dig, inte en produkt." },
      { title: "Marginalerna pressas", body: "Varumärkesgrossist lämnar lite utrymme. Priser direkt från fabrik innebär att du styr ditt försäljningspris och skyddar vinsten." },
      { title: "Du är låst vid ett varumärkes sortiment", body: "Lägger de ner en nyans eller metod, sitter du fast. Vi levererar över metoder och kan anpassa färger och förpackning." },
    ],
    compareTitle: "Återförsäljarvarumärke vs D.S Hair & Beauty",
    compareSubtitle: "Vi är inte ett återförsäljarvarumärke. Vi är den fabriksstödda partnern som hjälper salonger behålla marginalen.",
    compareHeaderFeature: "Egenskap",
    compareHeaderCompetitor: "Återförsäljarvarumärke",
    compareHeaderDs: "D.S Hair & Beauty",
    compareRows: [
      { feature: "Vem äger varumärket?", competitor: "Leverantörens varumärke", ds: "Din salong behåller marginal och identitet" },
      { feature: "Prissättning", competitor: "Återförsäljar-påslag grossist", ds: "Partipriser direkt från fabrik" },
      { feature: "Private label", competitor: "Inte tillgängligt", ds: "Tillgängligt — bygg din egen linje" },
      { feature: "Produktursprung", competitor: "Inköpt via varumärkeskanaler", ds: "Direkt från fabrik, 19 års tillverkning" },
      { feature: "UK-leverans", competitor: "Beror på leverantör", ds: "Utvalda linjer från Manchester-lager; hela sortimentet express 3–5 dagar" },
      { feature: "Kontaktansvarig", competitor: "Varumärkesrepresentant", ds: "Direkt kontakt med Caro Chen / produktion" },
    ],
    valueBlocks: [
      { title: "Bättre marginal", desc: "Priser direkt från fabrik ger dig utrymme att sätta konkurrenskraftiga salongspriser utan att äta upp vinsten." },
      { title: "Konsekvent kvalitet", desc: "19 års tillverkning. Remy med åt samma håll riktade fjäll. Leverans 50 motsvarar leverans 1." },
      { title: "Tillförlitlig leverans", desc: "Utvalda linjer skickas från Manchester-lager; hela sortimentet via express DHL/UPS till UK." },
      { title: "Private label", desc: "Bygg ditt eget förlängningsvarumärke med anpassad förpackning, nyanser och märkning." },
    ],
    ctaTitle: "Redo att sluta sälja någon annans varumärke?",
    ctaSubtitle: "Ansök om ett partikonto så skickar vi en digital färgkatalog plus skräddarsydda partipriser. Inget minimi för första ordern.",
    ctaPrimary: "Ansök om partikonto",
    ctaSecondary: "Chatta på WhatsApp",
    manufacturingArmLabel: "Tillverkningsgren:",
    whatsappHeroMsg: "Hej! Jag är salongsägare och söker en leverantör av hårförlängning direkt från fabrik.",
    whatsappCtaMsg: "Hej! Jag är intresserad av att byta till en leverantör av hårförlängning direkt från fabrik för min salong.",
  },
  pl: {
    metaTitle: "Przejdź na dostawcę przedłużeń bezpośrednio od producenta | D.S HAIR & BEAUTY",
    metaDescription: "Masz dość odsprzedawania cudzej marki? Przejdź do D.S Hair & Beauty — hurtowego dostawcy bezpośrednio od producenta z private label, lepszymi marżami i 19-letnim doświadczeniem.",
    heroEyebrow: "Dla właścicieli salonów przemyślających dostawcę",
    heroTitle: "Alternatywa bezpośrednio od producenta — zbudowana dla salonów, nie konsumentów",
    heroSubtitle: "To samo salonowe 100% Remy z prawdziwego włosa, ale pozyskiwane bezpośrednio od producenta. Wyższe marże, opcje private label i partner, który rośnie z Twoim salonem zamiast z nim konkurować.",
    heroCtaPrimary: "Porównaj ceny hurtowe",
    heroCtaSecondary: "WhatsApp",
    whyTitle: "Dlaczego salony przechodzą na partnera bezpośrednio od producenta",
    whySubtitle: "Marki konsumenckie budują własną nazwę. My pomagamy zbudować Twoją.",
    painPoints: [
      { title: "Twoje klientki proszą o markę po nazwie", body: "To oznacza, że widzą cenę online. Stajesz się usługą nakładania, nie marką. Pomagamy salonom stworzyć własną linię, by klientki rezerwowały u Ciebie, nie u produktu." },
      { title: "Marże są zaciskane", body: "Hurt markowy zostawia mało miejsca. Ceny bezpośrednio od producenta oznaczają, że kontrolujesz cenę sprzedaży i chronisz zysk." },
      { title: "Jesteś zamknięty w ofercie jednej marki", body: "Jeśli wycofają odcień lub metodę, masz problem. Dostarczamy każdą metodę i możemy dostosować kolory i opakowania." },
    ],
    compareTitle: "Dostawca marki retail vs D.S Hair & Beauty",
    compareSubtitle: "Nie jesteśmy marką retail. Jesteśmy wspieranym przez fabrykę ramieniem hurtowym, które pomaga salonom zachować marżę.",
    compareHeaderFeature: "Cecha",
    compareHeaderCompetitor: "Dostawca marki retail",
    compareHeaderDs: "D.S Hair & Beauty",
    compareRows: [
      { feature: "Kto jest właścicielem marki?", competitor: "Marka dostawcy", ds: "Twój salon zachowuje marżę i tożsamość" },
      { feature: "Struktura cen", competitor: "Hurt z marżą retail", ds: "Ceny hurtowe bezpośrednio od producenta" },
      { feature: "Private label", competitor: "Niedostępne", ds: "Dostępne — zbuduj własną linię" },
      { feature: "Pochodzenie produktu", competitor: "Pozyskiwane przez kanały marki", ds: "Bezpośrednio od producenta, 19 lat produkcji" },
      { feature: "Dostawa UK", competitor: "Zależy od dostawcy", ds: "Wybrane linie z magazynu Manchester; pełna gama ekspres 3–5 dni" },
      { feature: "Opiekun konta", competitor: "Przedstawiciel marki", ds: "Bezpośredni kontakt z Caro Chen / produkcją" },
    ],
    valueBlocks: [
      { title: "Lepsza marża", desc: "Ceny bezpośrednio od producenta dają Ci miejsce na konkurencyjne ceny salonowe bez zjadania zysku." },
      { title: "Stała jakość", desc: "19 lat produkcji. Remy z ułożonymi łuskami. Wysyłka 50 równa wysyłce 1." },
      { title: "Niezawodne zaopatrzenie", desc: "Wybrane linie wysyłane z magazynu Manchester; pełna gama przez ekspres DHL/UPS do UK." },
      { title: "Private label", desc: "Zbuduj własną markę przedłużeń z niestandardowym opakowaniem, odcieniami i oznaczeniami." },
    ],
    ctaTitle: "Gotów przestać odsprzedawać cudzą markę?",
    ctaSubtitle: "Złóż wniosek o konto hurtowe, a wyślemy cyfrowy katalog kolorów plus dopasowane ceny hurtowe. Brak minimum przy pierwszym zamówieniu.",
    ctaPrimary: "Złóż wniosek o konto hurtowe",
    ctaSecondary: "Czat na WhatsApp",
    manufacturingArmLabel: "Ramię produkcyjne:",
    whatsappHeroMsg: "Cześć! Jestem właścicielem salonu i szukam dostawcy przedłużeń bezpośrednio od producenta.",
    whatsappCtaMsg: "Cześć! Chcę przejść na dostawcę przedłużeń bezpośrednio od producenta dla mojego salonu.",
  },
}

export function getSwitchContent(locale: Locale): SwitchContent {
  return switchContent[locale] ?? switchContent.en
}
