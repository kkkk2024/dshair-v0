import type { Locale } from "@/lib/i18n/config"

export interface WhyContent {
  metaTitle: string
  metaDescription: string
  badge: string
  heroTitle: string
  heroSubtitle: string
  ctaApply: string
  ctaWhatsApp: string
  compareTitle: string
  compareSubtitle: string
  compareUsLabel: string
  compareThemLabel: string
  comparisons: { title: string; us: string; them: string }[]
  promisesTitle: string
  promises: { title: string; desc: string }[]
  realTalkTitle: string
  realTalkParas: string[]
  realTalkCtaApply: string
  realTalkWhatsApp: string
  faqTitle: string
  faqSubtitle: string
  faqs: { q: string; a: string }[]
  toolkitTitle: string
  toolkitSubtitle: string
  toolkitComingSoon: string
  toolkitItems: { title: string; desc: string; linkLabel: string }[]
}

const WA_HREF =
  "https://wa.me/8613516946001?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20your%20salon%20trade%20program."

const COMPARE_EN = [
  {
    title: "Factory-direct pricing",
    us: "We own the production. No middlemen. You pay factory prices.",
    them: "Most UK suppliers are resellers. They mark up 30–60% before it reaches you.",
  },
  {
    title: "19 years in the industry",
    us: "We have been making hair extensions since 2007. We know quality inside out.",
    them: "New brands come and go. When they disappear, you are left holding stock your clients cannot reorder.",
  },
  {
    title: "Fast express UK & EU delivery",
    us: "We are based in Manchester. Orders ship factory-direct via express (3–5 days). Our UK warehouse is launching — until then all lines dispatch from our manufacturing partner.",
    them: "Imports from China take 2–4 weeks. If a colour is wrong, you wait another month.",
  },
  {
    title: "We will not disappear on you",
    us: "19 years. Same team. Same standards. When you need us, we answer.",
    them: "Suppliers disappear mid-season. Colour lines get discontinued. You scramble for replacements.",
  },
  {
    title: "Colour matching built in",
    us: "Custom colour matching — free salon visit in Manchester. We match your clients precisely.",
    them: "Most suppliers send standard swatches. You make it work or spend hours dyeing.",
  },
  {
    title: "No minimum order pressure",
    us: "Order what you need, when you need it. No over-stocking, no pressure.",
    them: "Some suppliers force minimum orders. You end up with stock sitting on the shelf.",
  },
]

const PROMISES_EN = [
  {
    title: "19 Years. Same Factory. Same You.",
    desc: "We have been in this business since 2007. We have survived market shifts, product trends, and supply chain disruptions — because our quality never compromised. When you partner with us, you know exactly who you are dealing with.",
  },
  {
    title: "100% Remy Human Hair. Always.",
    desc: "Cuticle-aligned, double-drawn, minimal shedding. Every batch is checked before it leaves our facility. No mixed quality. No surprises.",
  },
  {
    title: "We Answer. Within 2 Hours.",
    desc: "Not a ticketing system. Not a generic reply. When you message us, you get a real answer from someone who knows the product and knows your account.",
  },
  {
    title: "Factory-Direct. UK & EU Reach.",
    desc: "Express 3–5 day shipping across the UK & EU. Fast, reliable delivery from our factory to your salon. No cross-continental wait times.",
  },
]

const FAQS_EN = [
  {
    q: "What is the minimum order quantity?",
    a: "There is no minimum order pressure. Order as little or as much as you need. For most methods, a full head set is 100g, but we supply per pack so you can order exactly what your client needs.",
  },
  {
    q: "What are your payment terms?",
    a: "We offer flexible payment options for registered trade accounts. Standard terms are prepayment or 30-day net for approved accounts. Contact us to discuss terms suited to your salon's needs.",
  },
  {
    q: "How long does delivery take?",
    a: "Express 3–5 day factory-direct shipping across the UK & EU. Colour-matched or custom orders typically 3–5 business days. (UK warehouse launching.)",
  },
  {
    q: "What is your return / exchange policy for trade orders?",
    a: "We accept exchanges for manufacturing defects within 14 days. Cut or altered hair cannot be returned. If a colour match is wrong due to our error, we cover the replacement cost.",
  },
  {
    q: "Do you offer colour matching visits?",
    a: "Yes — free on-site colour consultation for salons in Greater Manchester. For other regions, we offer virtual colour matching via WhatsApp or email with photos.",
  },
  {
    q: "Can I order samples before committing to a full order?",
    a: "Absolutely. We offer sample packs for all methods. Contact us via the trade account form and we will send you a sample set at trade pricing.",
  },
  {
    q: "What methods do you supply?",
    a: "We supply full product lines in: Clip-In, Tape-In, Nano Ring (Micro Ring), K-Tip (I-Tip), Hand-Tied Weft, and Butterfly Weft — plus Hair Toppers and Ponytails. See our collections for the full range.",
  },
  {
    q: "Do you ship outside the UK?",
    a: "Yes — we ship throughout the EU and internationally. EU delivery is typically 3–5 business days. Contact us for a shipping quote on international orders.",
  },
]

const TOOLKIT_EN = [
  { title: "Product Range Guide", desc: "Full product line overview with available colours, weights, and methods. Share with your team.", linkLabel: "Open WhatsApp" },
  { title: "Colour Swatch Cards", desc: "Physical colour swatch cards for your salon. Display them for clients to see and touch before ordering.", linkLabel: "Open WhatsApp" },
  { title: "Sales Room Display Kit", desc: "A3 poster, product cards, and care instruction leaflets you can print and use in your salon.", linkLabel: "Open WhatsApp" },
  { title: "WhatsApp Business Support", desc: "Direct WhatsApp line for quick orders, colour queries, and urgent requests. We answer fast.", linkLabel: "Open WhatsApp" },
  { title: "Trade Account Application", desc: "Apply for dedicated trade pricing, extended payment terms, and priority stock access.", linkLabel: "Apply Now" },
  { title: "Ambassador Programme", desc: "For stylists with a strong following. Earn commission or get exclusive discounts on your own orders.", linkLabel: "Learn More" },
]

export const whyChooseUsContent: Record<Locale, WhyContent> = {
  en: {
    metaTitle: "Why Choose D.S Hair Beauty | UK Hair Extension Supplier",
    metaDescription:
      "19 years making Remy human hair extensions, factory-direct to your salon. Compare us vs typical UK suppliers — pricing, speed, colour matching and service.",
    badge: "Not just another supplier",
    heroTitle: "Why Salons Choose Us Over the Rest.",
    heroSubtitle:
      "19 years making hair extensions. Direct from our factory to your salon — with the service quality that other suppliers cannot match.",
    ctaApply: "Apply for Trade Account",
    ctaWhatsApp: "Chat on WhatsApp",
    compareTitle: "The Difference That Matters",
    compareSubtitle: "Honest comparison. No fluff. Here is what you get with us vs. the average UK supplier.",
    compareUsLabel: "With us:",
    compareThemLabel: "Typical UK supplier:",
    comparisons: COMPARE_EN,
    promisesTitle: "Four Things We Will Never Compromise On",
    promises: PROMISES_EN,
    realTalkTitle: "The Real Talk.",
    realTalkParas: [
      "We know UK salon owners get dozens of supplier emails every month. Everyone says they have the best quality. Everyone says they have competitive prices.",
      "Here is the difference with us: we have been in this industry long enough to know that the relationship matters as much as the product. A supplier who answers when you call, who sorts problems quickly, who does not disappear mid-season — that is worth more than the lowest unit price.",
      "19 years. We have seen the suppliers come and go. We are still here because we never treated our partners like disposable customers.",
      "Try us. One order. See the difference.",
    ],
    realTalkCtaApply: "Apply for Trade Account",
    realTalkWhatsApp: "Chat on WhatsApp",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Quick answers to the questions we get from salon owners most often.",
    faqs: FAQS_EN,
    toolkitTitle: "Salon Toolkit",
    toolkitSubtitle:
      "Everything you need to bring D.S Hair & Beauty into your salon — from product guides to sales materials.",
    toolkitComingSoon: "Coming Soon",
    toolkitItems: TOOLKIT_EN,
  },
  de: {
    metaTitle: "Warum D.S Hair Beauty wählen | UK Haarextensions-Lieferant",
    metaDescription:
      "19 Jahre Remy-Menschenhaar-Extensions, factory-direct in Ihren Salon. Vergleich mit typischen UK-Lieferanten — Preise, Speed, Farbabgleich, Service.",
    badge: "Nicht nur ein weiterer Lieferant",
    heroTitle: "Warum Salons uns anderen vorziehen.",
    heroSubtitle:
      "19 Jahre Haarverlängerungen. Direkt von unserer Fabrik in Ihren Salon – mit Servicequalität, die andere nicht bieten.",
    ctaApply: "Handelskonto beantragen",
    ctaWhatsApp: "WhatsApp chatten",
    compareTitle: "Der Unterschied, der zählt",
    compareSubtitle: "Ehrlicher Vergleich. Kein Blabla. Das bekommen Sie bei uns vs. einem durchschnittlichen UK-Lieferanten.",
    compareUsLabel: "Bei uns:",
    compareThemLabel: "Typischer UK-Lieferant:",
    comparisons: [
      {
        title: "Factory-direct Preise",
        us: "Wir besitzen die Produktion. Keine Zwischenhändler. Sie zahlen Fabrikpreise.",
        them: "Die meisten UK-Lieferanten sind Wiederverkäufer. Sie schlagen 30–60 % auf, bevor es bei Ihnen ankommt.",
      },
      {
        title: "19 Jahre in der Branche",
        us: "Wir stellen Haarverlängerungen seit 2007 her. Wir kennen Qualität in- und auswendig.",
        them: "Neue Marken kommen und gehen. Verschwinden sie, bleiben Sie mit Ware sitzen, die Ihre Kunden nicht nachbestellen können.",
      },
      {
        title: "Schneller Express-Versand UK & EU",
        us: "Wir sitzen in Manchester. Bestellungen gehen factory-direct per Express (3–5 Tage). Unser UK-Lager startet – bis dahin Versand vom Fertigungspartner.",
        them: "Importe aus China dauern 2–4 Wochen. Ist eine Farbe falsch, warten Sie einen weiteren Monat.",
      },
      {
        title: "Wir verschwinden nicht",
        us: "19 Jahre. Gleiches Team. Gleiche Standards. Wenn Sie uns brauchen, antworten wir.",
        them: "Lieferanten verschwinden mitten in der Saison. Farblinien werden eingestellt. Sie suchen Ersatz.",
      },
      {
        title: "Farbabgleich integriert",
        us: "Individueller Farbabgleich – kostenloser Salonbesuch in Manchester. Wir treffen Ihre Kunden exakt.",
        them: "Die meisten schicken Standard-Farbkarten. Sie basteln nach oder färben stundenlang.",
      },
      {
        title: "Kein Mindestmengen-Druck",
        us: "Bestellen Sie, was Sie brauchen, wann Sie es brauchen. Kein Überlagern, kein Druck.",
        them: "Manche erzwingen Mindestbestellungen. Sie enden mit Ware im Regal.",
      },
    ],
    promisesTitle: "Vier Dinge, bei denen wir nie Kompromisse eingehen",
    promises: [
      {
        title: "19 Jahre. Selbe Fabrik. Selber Sie.",
        desc: "Wir sind seit 2007 in diesem Geschäft. Wir überstanden Marktwechsel, Trends und Lieferkettenstörungen – weil unsere Qualität nie litt. Mit uns wissen Sie, mit wem Sie es zu tun haben.",
      },
      {
        title: "100 % Remy Menschenhaar. Immer.",
        desc: "Cuticula-ausgerichtet, double-drawn, minimaler Haarlaus. Jede Charge wird geprüft, bevor sie unser Haus verlässt. Keine gemischte Qualität.",
      },
      {
        title: "Wir antworten. Innerhalb 2 Stunden.",
        desc: "Kein Ticketsystem. Keine Standardantwort. Schreiben Sie uns, bekommen Sie eine echte Antwort von jemandem, der das Produkt und Ihr Konto kennt.",
      },
      {
        title: "Factory-Direct. UK & EU-Reichweite.",
        desc: "Express-Versand 3–5 Tage über UK & EU. Schnelle, verlässliche Lieferung von unserer Fabrik in Ihren Salon. Keine kontinentalen Wartezeiten.",
      },
    ],
    realTalkTitle: "Die ehrliche Rede.",
    realTalkParas: [
      "Wir wissen: UK-Salonbesitzer bekommen jeden Monat Dutzende Lieferanten-Mails. Jeder sagt, er habe die beste Qualität. Jeder sagt, er habe konkurrenzfähige Preise.",
      "Der Unterschied bei uns: Wir sind lange genug in der Branche, um zu wissen, dass die Beziehung so wichtig ist wie das Produkt. Ein Lieferant, der anruft, Probleme schnell löst und nicht mitten in der Saison verschwindet – das ist mehr wert als der niedrigste Stückpreis.",
      "19 Jahre. Wir sahen Lieferanten kommen und gehen. Wir sind noch da, weil wir Partner nie wie Wegwerfkunden behandelten.",
      "Probieren Sie uns. Eine Bestellung. Sehen Sie den Unterschied.",
    ],
    realTalkCtaApply: "Handelskonto beantragen",
    realTalkWhatsApp: "WhatsApp chatten",
    faqTitle: "Häufig gestellte Fragen",
    faqSubtitle: "Schnelle Antworten auf Fragen, die uns Salonbesitzer am häufigsten stellen.",
    faqs: [
      {
        q: "Wie ist die Mindestbestellmenge?",
        a: "Kein Mindestmengen-Druck. Bestellen Sie so viel oder wenig wie nötig. Bei den meisten Methoden ist ein voller Kopf 100 g, aber wir liefern pro Packung, sodass Sie genau das bestellen, was Ihr Kunde braucht.",
      },
      {
        q: "Wie sind Ihre Zahlungsbedingungen?",
        a: "Wir bieten flexible Optionen für registrierte Handelskonten. Standard: Vorauszahlung oder 30 Tage Netto für genehmigte Konten. Sprechen Sie mit uns.",
      },
      {
        q: "Wie lange dauert die Lieferung?",
        a: "Express 3–5 Tage factory-direct über UK & EU. Farbabgleich oder Sonderanfertigungen meist 3–5 Werktage. (UK-Lager startet.)",
      },
      {
        q: "Wie ist Ihre Rückgabe-/Umtauschpolitik für Handelsaufträge?",
        a: "Wir tauschen bei Produktionsfehlern innerhalb von 14 Tagen aus. Geschnittenes oder verändertes Haar kann nicht zurückgegeben werden. War der Farbabgleich unser Fehler, übernehmen wir die Ersatzkosten.",
      },
      {
        q: "Bieten Sie Farbabgleich-Besuche an?",
        a: "Ja – kostenlose Vor-Ort-Beratung für Salons in Greater Manchester. Andere Regionen: virtueller Farbabgleich per WhatsApp oder E-Mail mit Fotos.",
      },
      {
        q: "Kann ich Muster bestellen, bevor ich eine volle Order aufgebe?",
        a: "Absolut. Wir bieten Musterpakete für alle Methoden. Kontaktieren Sie uns über das Handelskonto-Formular, wir senden ein Set zum Handelspreis.",
      },
      {
        q: "Welche Methoden liefern Sie?",
        a: "Volle Linien: Clip-In, Tape-In, Nano Ring (Micro Ring), K-Tip (I-Tip), Hand-Tied Weft und Butterfly Weft – plus Hair Toppers und Ponytails. Siehe Kollektionen für die volle Palette.",
      },
      {
        q: "Liefern Sie außerhalb des UK?",
        a: "Ja – EU-weit und international. EU-Lieferung meist 3–5 Werktage. Kontaktieren Sie uns für ein Versandsangebot.",
      },
    ],
    toolkitTitle: "Salon-Werkzeugkasten",
    toolkitSubtitle: "Alles, um D.S Hair & Beauty in Ihren Salon zu holen – von Produktführern bis Verkaufsmaterial.",
    toolkitComingSoon: "Demnächst",
    toolkitItems: [
      { title: "Produktreihen-Führer", desc: "Überblick über alle Linien mit Farben, Gewichten und Methoden. Mit dem Team teilen.", linkLabel: "WhatsApp öffnen" },
      { title: "Farbkarten", desc: "Physische Farbkarten für Ihren Salon. Zeigen und anfassen vor der Bestellung.", linkLabel: "WhatsApp öffnen" },
      { title: "Verkaufsraum-Display-Set", desc: "A3-Poster, Produktkarten und Pflegeflyer zum Ausdrucken und Nutzen im Salon.", linkLabel: "WhatsApp öffnen" },
      { title: "WhatsApp Business Support", desc: "Direkte WhatsApp-Linie für schnelle Bestellungen, Farbfragen und Dringendes. Wir antworten schnell.", linkLabel: "WhatsApp öffnen" },
      { title: "Handelskonto beantragen", desc: "Dedizierte Handelspreise, längere Zahlungsziele und Prioritäts-Bestand beantragen.", linkLabel: "Jetzt beantragen" },
      { title: "Ambassador-Programm", desc: "Für Stylisten mit Reichweite. Provision oder exklusive Rabatte auf eigene Bestellungen.", linkLabel: "Mehr erfahren" },
    ],
  },
  fr: {
    metaTitle: "Pourquoi choisir D.S Hair Beauty | Fournisseur UK extensions",
    metaDescription:
      "19 ans de extensions cheveux Remy, factory-direct pour votre salon. Comparez-nous aux fournisseurs UK — prix, rapidité, couleur, service.",
    badge: "Pas un fournisseur comme les autres",
    heroTitle: "Pourquoi les salons nous préfèrent.",
    heroSubtitle:
      "19 ans à fabriquer des extensions. Direct de notre usine à votre salon — avec un service que les autres ne peuvent égaler.",
    ctaApply: "Demander un compte pro",
    ctaWhatsApp: "Discuter sur WhatsApp",
    compareTitle: "La différence qui compte",
    compareSubtitle: "Comparaison honnête. Sans fioritures. Ce que vous obtenez avec nous vs un fournisseur UK moyen.",
    compareUsLabel: "Avec nous :",
    compareThemLabel: "Fournisseur UK moyen :",
    comparisons: [
      {
        title: "Prix factory-direct",
        us: "Nous possédons la production. Pas d'intermédiaire. Vous payez le prix d'usine.",
        them: "La plupart des fournisseurs UK revendent. Ils majorent de 30–60 % avant que ça vous parvienne.",
      },
      {
        title: "19 ans dans le métier",
        us: "Nous fabriquons des extensions depuis 2007. Nous connaissons la qualité sur le bout des doigts.",
        them: "Les nouvelles marques vont et viennent. Quand elles disparaissent, vous gardez du stock invendable.",
      },
      {
        title: "Livraison express rapide UK & EU",
        us: "Basés à Manchester. Expédition factory-direct express (3–5 jours). Notre entrepôt UK ouvre — en attendant, envoi depuis notre partenaire.",
        them: "Les importations de Chine prennent 2–4 semaines. Si la couleur est fausse, un mois de plus.",
      },
      {
        title: "Nous ne disparaîtrons pas",
        us: "19 ans. Même équipe. Mêmes standards. Quand vous avez besoin de nous, nous répondons.",
        them: "Les fournisseurs disparaissent en pleine saison. Les couleurs sont abandonnées. Vous courez après des replacements.",
      },
      {
        title: "Colorimétrie intégrée",
        us: "Colorimétrie personnalisée — visite salon gratuite à Manchester. On match vos clientes précisément.",
        them: "La plupart envoient des nuanciers standard. À vous de faire, ou de teindre des heures.",
      },
      {
        title: "Pas de minimum imposé",
        us: "Commandez ce dont vous avez besoin, quand vous en avez besoin. Pas de surstock, pas de pression.",
        them: "Certains imposent des minimums. Vous finissez avec du stock sur l'étagère.",
      },
    ],
    promisesTitle: "Quatre choses sur lesquelles nous ne transigeons jamais",
    promises: [
      {
        title: "19 ans. Même usine. Même vous.",
        desc: "Nous sommes dans ce métier depuis 2007. Nous avons survécu aux changements de marché car notre qualité n'a jamais fléchi. Avec nous, vous savez à qui vous avez affaire.",
      },
      {
        title: "100 % cheveux Remy. Toujours.",
        desc: "Cuticule alignée, double-drawn, mue minimale. Chaque lot contrôlé avant expédition. Pas de qualité mélangée.",
      },
      {
        title: "Nous répondons. En 2 heures.",
        desc: "Pas un système de tickets. Une vraie réponse de quelqu'un qui connaît le produit et votre compte.",
      },
      {
        title: "Factory-direct. Portée UK & EU.",
        desc: "Expédition express 3–5 jours sur UK & EU. Livraison rapide de notre usine à votre salon. Pas d'attente intercontinentale.",
      },
    ],
    realTalkTitle: "La réalité.",
    realTalkParas: [
      "Nous savons que les saloniers UK reçoivent des dizaines de mails de fournisseurs chaque mois. Tous disent avoir la meilleure qualité. Tous disent avoir des prix compétitifs.",
      "La différence avec nous : nous sommes assez anciens dans le métier pour savoir que la relation compte autant que le produit. Un fournisseur qui répond, règle vite, ne disparaît pas en saison — ça vaut plus que le prix le plus bas.",
      "19 ans. Nous avons vu les fournisseurs venir et partir. Nous sommes encore là car nous n'avons jamais traité nos partenaires comme des clients jetables.",
      "Essayez-nous. Une commande. Voyez la différence.",
    ],
    realTalkCtaApply: "Demander un compte pro",
    realTalkWhatsApp: "Discuter sur WhatsApp",
    faqTitle: "Questions fréquentes",
    faqSubtitle: "Réponses rapides aux questions que nous recevons le plus des saloniers.",
    faqs: [
      { q: "Quelle est la quantité minimale de commande ?", a: "Aucune pression de minimum. Commandez peu ou beaucoup. Pour la plupart des méthodes, une tête complète = 100 g, mais nous vendons par pack pour commander exactement ce qu'il faut." },
      { q: "Quelles sont vos conditions de paiement ?", a: "Options flexibles pour comptes pro. Standard : prépaiement ou 30 jours net pour comptes approuvés. Contactez-nous." },
      { q: "Combien de temps pour la livraison ?", a: "Expédition express factory-direct 3–5 jours sur UK & EU. Colorimétrie ou sur-mesure : 3–5 jours ouvrés. (Entrepôt UK ouvre.)" },
      { q: "Quelle est votre politique de retour pour les commandes pro ?", a: "Échange pour défaut de fabrication sous 14 jours. Cheveux coupés/modifiés non retournables. Si la couleur est fausse par notre faute, nous couvrons le remplacement." },
      { q: "Proposez-vous des visites colorimétrie ?", a: "Oui — consultation gratuite sur place pour salons du Grand Manchester. Autres régions : colorimétrie virtuelle via WhatsApp ou e-mail avec photos." },
      { q: "Puis-je commander des échantillons avant ?", a: "Bien sûr. Nous proposons des packs échantillons pour toutes les méthodes. Contactez-nous via le formulaire, nous envoyons un set au prix pro." },
      { q: "Quelles méthodes fournissez-vous ?", a: "Gammes complètes : Clip-In, Tape-In, Nano Ring, K-Tip, Hand-Tied Weft et Butterfly Weft — plus Hair Toppers et Ponytails. Voir les collections." },
      { q: "Livrez-vous hors UK ?", a: "Oui — UE et international. Livraison UE typique 3–5 jours ouvrés. Contactez-nous pour un devis." },
    ],
    toolkitTitle: "Boîte à outils salon",
    toolkitSubtitle: "Tout pour amener D.S Hair & Beauty dans votre salon — guides produits et supports de vente.",
    toolkitComingSoon: "Bientôt",
    toolkitItems: [
      { title: "Guide des gammes", desc: "Vue d'ensemble avec couleurs, poids et méthodes. À partager avec l'équipe.", linkLabel: "Ouvrir WhatsApp" },
      { title: "Nuanciers couleur", desc: "Nuanciers physiques pour votre salon. À montrer et toucher avant commande.", linkLabel: "Ouvrir WhatsApp" },
      { title: "Kit d'affichage Salle de vente", desc: "Poster A3, cartes produits et fiches soin à imprimer.", linkLabel: "Ouvrir WhatsApp" },
      { title: "Support WhatsApp Business", desc: "Ligne directe pour commandes rapides, questions couleur et urgences. Réponse rapide.", linkLabel: "Ouvrir WhatsApp" },
      { title: "Demande de compte pro", desc: "Prix pro dédiés, délais de paiement étendus et accès prioritaire au stock.", linkLabel: "Demander" },
      { title: "Programme Ambassadeur", desc: "Pour stylistes avec audience. Commission ou remises exclusives sur vos commandes.", linkLabel: "En savoir plus" },
    ],
  },
  ar: {
    metaTitle: "لماذا تختار D.S Hair Beauty | مورد وصلات الشعر بريطانيا",
    metaDescription:
      "19 عاماً في صنع وصلات ريمي مباشرة من المصنع إلى صالونك. قارننا بموردي بريطانيا المعتادين — الأسعار والسرعة واللون والخدمة.",
    badge: "ليس مجرد مورد آخر",
    heroTitle: "لماذا تفضلنا الصالونات على غيرنا.",
    heroSubtitle: "19 عاماً في صنع الوصلات. مباشرة من مصنعنا إلى صالونك – بجودة خدمة لا يملكها غيرنا.",
    ctaApply: "اطلب حساباً تجارياً",
    ctaWhatsApp: "دردشة عبر واتساب",
    compareTitle: "الفرق الذي يهم",
    compareSubtitle: "مقارنة صريحة بلا تجميل. هذا ما تحصل عليه معنا مقابل مورد بريطاني متوسط.",
    compareUsLabel: "معنا:",
    compareThemLabel: "مورد بريطاني متوسط:",
    comparisons: [
      { title: "أسعار مباشرة من المصنع", us: "نحن نملك الإ production. بلا وسطاء. تدفع سعر المصنع.", them: "معظم موردي بريطانيا هم موزعون. يرفعون السعر 30–60% قبل أن يصلك." },
      { title: "19 عاماً في المجال", us: "نصنع الوصلات منذ 2007. نعرف الجودة غيباً.", them: "العلامات الجديدة تأتي وتذهب. حين تختفي، تبقى مع مخزون لا يطلبه عملاؤك." },
      { title: "شحن سريع لبريطانيا والاتحاد الأوروبي", us: "مقرنا مانشستر. الشحن مباشر من المصنع بسرعة (3–5 أيام). مستودعنا البريطاني قيد الإطلاق — حالياً من شريك التصنيع.", them: "واردات الصين تستغرق 2–4 أسابيع. إن أخطأ اللون، تنتظر شهراً آخر." },
      { title: "لن نختفي من أمامك", us: "19 عاماً. نفس الفريق. نفس المعايير. حين تحتاجنا نرد.", them: "الموردون يختفون في منتصف الموسم. تُوقف خطوط الألوان. تبحث عن بدائل." },
      { title: "مطابقة لون مدمجة", us: "مطابقة لون مخصصة — زيارة صالون مجانية في مانشستر. نطابق عميلاتك بدقة.", them: "معظمهم يرسلون بطاقات ألوان قياسية. تتدبر الأمر أو تصبغ ساعات." },
      { title: "بلا ضغط حد أدنى", us: "اطلب ما تحتاجه متى شئت. بلا تكديس بلا ضغط.", them: "بعضهم يفرض حداً أدنى. تبقى مع مخزون على الرف." },
    ],
    promisesTitle: "أربعة أمور لا نتنازل عنها",
    promises: [
      { title: "19 عاماً. نفس المصنع. نفسكم.", desc: "نحن في هذا العمل منذ 2007. صمدنا أمام تحولات السوق لأن جودتنا لم تتهاون. معنا تعرف تماماً مع من تتعامل." },
      { title: "شعر ريمي 100% دائماً.", desc: "قشرة متجانسة، double-drawn، تساقط أدنى. كل دفعة تُفحص قبل المغادرة. لا جودة مختلطة." },
      { title: "نحن نرد. خلال ساعتين.", desc: "لا نظام تذاكر. لا رد عام. حين تراسلنا تحصل على إجابة حقيقية ممن يعرف المنتج وحسابك." },
      { title: "مباشر من المصنع. وصول لبريطانيا والاتحاد الأوروبي.", desc: "شحن سريع 3–5 أيام عبر بريطانيا والاتحاد الأوروبي. من مصنعنا إلى صالونك. بلا انتظار عابر للقارات." },
    ],
    realTalkTitle: "الحقيقة.",
    realTalkParas: [
      "نعلم أن أصحاب الصالونات في بريطانيا يتلقون عشرات رسائل الموردين كل شهر. الكل يدعي أفضل جودة. الكل يدعي أسعاراً تنافسية.",
      "الفرق معنا: نحن في المجال منذ زمن كافٍ لنعرف أن العلاقة بأهمية المنتج. مورد يجيب عند اتصالك ويحل المشاكل سريعاً ولا يختفي في الموسم — أثمن من أرخص سعر.",
      "19 عاماً. رأينا الموردين يأتون ويذهبون. نحن باقون لأننا لم نعامل شركاءنا كعملاء يمكن التخلص منهم.",
      "جرّبنا. طلب واحد. وسترى الفرق.",
    ],
    realTalkCtaApply: "اطلب حساباً تجارياً",
    realTalkWhatsApp: "دردشة عبر واتساب",
    faqTitle: "أسئلة شائعة",
    faqSubtitle: "إجابات سريعة على أكثر ما يسألنا عنه أصحاب الصالونات.",
    faqs: [
      { q: "ما هي الكمية الدنيا للطلب؟", a: "بلا ضغط حد أدنى. اطلب قليلاً أو كثيراً. لمعظم الطرق، رأس كامل = 100 غ، لكننا نورّد بالحزمة لتطلب ما يحتاجه عميلك تماماً." },
      { q: "ما هي شروط الدفع؟", a: "خيارات مرنة للحسابات المسجلة. القياسي: دفع مقدّم أو 30 يوماً لمن يُ approved. تواصل معنا." },
      { q: "كم تستغرق الشحن؟", a: "شحن سريع مباشر 3–5 أيام لبريطانيا والاتحاد الأوروبي. مطابقة اللون أو المخصص: 3–5 أيام عمل. (مستودع بريطانيا قيد الإطلاق.)" },
      { q: "ما سياسة الإرجاع للطلبات التجارية؟", a: "نستبدل عند عيب مصنعي خلال 14 يوماً. الشعر المقصوص/المعدّل لا يُرجع. إن كان خطأ اللون منا، نتحمل تكلفة البديل." },
      { q: "هل تقدمون زيارات مطابقة لون؟", a: "نعم — استشارة مجانية في الموقع لصالونات مانشستر الكبرى. لمناطق أخرى: مطابقة افتراضية عبر واتساب أو إيميل بالصور." },
      { q: "هل يمكنني طلب عينات قبل الطلب الكامل؟", a: "بالتأكيد. نوفّر حزم عينات لكل الطرق. تواصل معنا عبر النموذج، نرسل مجموعة بسعر الجملة." },
      { q: "ما الطرق التي تورّدونها؟", a: "خطوط كاملة: Clip-In، Tape-In، Nano Ring، K-Tip، Hand-Tied Weft وButterfly Weft — plus Hair Toppers وPonytails. انظر المجموعات." },
      { q: "هل تشحنون خارج بريطانيا؟", a: "نعم — الاتحاد الأوروبي والعالم. تسليم الاتحاد الأوروبي نموذجياً 3–5 أيام عمل. تواصل معنا لعرض شحن." },
    ],
    toolkitTitle: "صندوق أدوات الصالون",
    toolkitSubtitle: "كل ما تحتاجه لإدخال D.S Hair & Beauty إلى صالونك — من أدلة المنتجات إلى مواد البيع.",
    toolkitComingSoon: "قريباً",
    toolkitItems: [
      { title: "دليل المجموعات", desc: "نظرة عامة على كل الخطوط مع الألوان والأوزان والطرق. شاركها مع فريقك.", linkLabel: "افتح واتساب" },
      { title: "بطاقات الألوان", desc: "بطاقات ألوان فيزيائية لصالونك. ليراها العملاء ويلمسوها قبل الطلب.", linkLabel: "افتح واتساب" },
      { title: "مجموعة عرض الغرفة", desc: "بوستر A3 وبطاقات منتجات وكتيبات عناية للطباعة.", linkLabel: "افتح واتساب" },
      { title: "دعم واتساب بزنس", desc: "خط مباشر للطلبات السريعة واستفسارات اللون. نرد سريعاً.", linkLabel: "افتح واتساب" },
      { title: "طلب حساب تجاري", desc: "أسعار جملة مخصصة وشروط دفع ممتدة ووصول أولوي للستوك.", linkLabel: "اطلب الآن" },
      { title: "برنامج السفير", desc: "للستايلست ذوي المتابعة. عمولة أو خصومات حصرية على طلباتك.", linkLabel: "اعرف المزيد" },
    ],
  },
  sv: {
    metaTitle: "Varför välja D.S Hair Beauty | UK hårförlängningsleverantör",
    metaDescription:
      "19 år med Remy hårförlängning, factory-direct till din salong. Jämför oss med typiska UK-leverantörer — pris, hastighet, färg, service.",
    badge: "Inte bara en leverantör till",
    heroTitle: "Varför salonger väljer oss framför andra.",
    heroSubtitle: "19 år med hårförlängning. Direkt från vår fabrik till din salong — med servicekvalitet andra inte når.",
    ctaApply: "Ansök om handelskonto",
    ctaWhatsApp: "Chatta på WhatsApp",
    compareTitle: "Skillnaden som spelar roll",
    compareSubtitle: "Ärlig jämförelse. Ingen fluff. Så här ser det ut med oss vs en genomsnittlig UK-leverantör.",
    compareUsLabel: "Med oss:",
    compareThemLabel: "Typisk UK-leverantör:",
    comparisons: [
      { title: "Factory-direct priser", us: "Vi äger produktionen. Inga mellanhänder. Du betalar fabrikspris.", them: "De flesta UK-leverantörer är återförsäljare. De påslår 30–60 % innan det når dig." },
      { title: "19 år i branschen", us: "Vi tillverkar förlängningar sedan 2007. Vi känner kvalitet in i minsta detalj.", them: "Nya varumärken kommer och går. Försvinner de, sitter du med lager kunderna inte kan köpa igen." },
      { title: "Snabb expressfrakt UK & EU", us: "Vi ligger i Manchester. Order skickas factory-direct express (3–5 dagar). Vårt UK-lager öppnar — tills dess från tillverkningspartnern.", them: "Import från Kina tar 2–4 veckor. Fel färg? Vänta en månad till." },
      { title: "Vi försvinner inte", us: "19 år. Samma team. Samma standard. När du behöver oss svarar vi.", them: "Leverantörer försvinner mitt i säsongen. Färglinjer läggs ner. Du letar ersättning." },
      { title: "Färgmatchning inbyggd", us: "Anpassad färgmatchning — gratis salongbesök i Manchester. Vi träffar dina kunder exakt.", them: "De flesta skickar standardnyanser. Du löser det eller färgar i timmar." },
      { title: "Inget minimikrav", us: "Beställ vad du behöver, när du behöver. Inget överlager, inget tryck.", them: "Vissa tvingar fram minimiorder. Du får lager på hyllan." },
    ],
    promisesTitle: "Fyra saker vi aldrig kompromissar om",
    promises: [
      { title: "19 år. Samma fabrik. Samma du.", desc: "Vi är i denna bransch sedan 2007. Vi överlevde marknadsskiften för att vår kvalitet aldrig vek. Med oss vet du exakt vem du har att göra med." },
      { title: "100 % Remy människohår. Alltid.", desc: "Cuticula-riktat, double-drawn, minimalt avfall. Varje batch kontrolleras innan den lämnar oss. Ingen blandad kvalitet." },
      { title: "Vi svarar. Inom 2 timmar.", desc: "Inget ärendesystem. Ett riktigt svar från någon som känner produkten och ditt konto." },
      { title: "Factory-direct. UK & EU räckvidd.", desc: "Express 3–5 dagar över UK & EU. Snabb leverans från fabrik till salong. Inga kontinentala väntetider." },
    ],
    realTalkTitle: "Det ärliga snack.",
    realTalkParas: [
      "Vi vet att UK-salongägare får dussintals leverantörsmejl varje månad. Alla säger sig ha bästa kvalitet. Alla säger sig ha konkurrenskraftiga priser.",
      "Skillnaden med oss: vi har varit med länge nog att veta att relationen räknas lika mycket som produkten. En leverantör som svarar, löser snabbt, inte försvinner mitt i säsongen — det är mer värt än det lägsta styckpriset.",
      "19 år. Vi har sett leverantörer komma och gå. Vi är kvar för att vi aldrig behandlade partners som engångskunder.",
      "Prova oss. En order. Se skillnaden.",
    ],
    realTalkCtaApply: "Ansök om handelskonto",
    realTalkWhatsApp: "Chatta på WhatsApp",
    faqTitle: "Vanliga frågor",
    faqSubtitle: "Snabba svar på det salongägare frågar oss oftast.",
    faqs: [
      { q: "Vad är minimikvantitet?", a: "Inget minimikrav. Beställ lite eller mycket. För de flesta metoder är ett helt huvud 100 g, men vi levererar per pack så du beställer exakt vad kunden behöver." },
      { q: "Vilka betalningsvillkor har ni?", a: "Flexibla alternativ för registrerade handelskonton. Standard: förskott eller 30 dagar netto för godkända konton. Kontakta oss." },
      { q: "Hur lång är leveransen?", a: "Express 3–5 dagar factory-direct över UK & EU. Färgmatchning eller special: 3–5 vardagar. (UK-lager öppnar.)" },
      { q: "Vad gäller retur för handelsordrar?", a: "Vi byter vid tillverkningsfel inom 14 dagar. Klippt/ändrat hår kan inte returneras. Fel färg från oss? Vi täcker ersättningen." },
      { q: "Erbjuder ni färgbesök?", a: "Ja — gratis platsbesök i Greater Manchester. Andra regioner: virtuell färgmatchning via WhatsApp eller e-post med foton." },
      { q: "Kan jag beställa prover först?", a: "Absolut. Vi erbjuder provpaket för alla metoder. Kontakta oss via formuläret, vi skickar ett set till handelspris." },
      { q: "Vilka metoder levererar ni?", a: "Hela linjer: Clip-In, Tape-In, Nano Ring, K-Tip, Hand-Tied Weft och Butterfly Weft — plus Hair Toppers och Ponytails. Se kollektioner." },
      { q: "Levererar ni utanför UK?", a: "Ja — EU och internationellt. EU-leverans typiskt 3–5 vardagar. Kontakta oss för fraktoffer." },
    ],
    toolkitTitle: "Salongverktyg",
    toolkitSubtitle: "Allt du behöver för att ta in D.S Hair & Beauty i din salong — från produktguider till säljmateral.",
    toolkitComingSoon: "Kommer snart",
    toolkitItems: [
      { title: "Produktguider", desc: "Översikt över alla linjer med färger, vikter och metoder. Dela med teamet.", linkLabel: "Öppna WhatsApp" },
      { title: "Färgkort", desc: "Fysiska färgkort för din salong. Visa och känn innan beställning.", linkLabel: "Öppna WhatsApp" },
      { title: "Visningskit", desc: "A3-poster, produktkort och vårdsedlar att skriva ut.", linkLabel: "Öppna WhatsApp" },
      { title: "WhatsApp Business-support", desc: "Direktlinje för snabba ordrar, färgfrågor och brådska. Snabbt svar.", linkLabel: "Öppna WhatsApp" },
      { title: "Ansök handelskonto", desc: "Dedikerade handelspriser, längre betalningsvillkor och prio-lager.", linkLabel: "Ansök nu" },
      { title: "Ambassadörsprogram", desc: "För stylister med följare. Provision eller exklusiva rabatter på dina ordrar.", linkLabel: "Läs mer" },
    ],
  },
  pl: {
    metaTitle: "Dlaczego wybrać D.S Hair Beauty | Dostawca przedłużania UK",
    metaDescription:
      "19 lat przedłużania włosów Remy, factory-direct do Twojego salonu. Porównaj nas z typowymi dostawcami UK — cena, szybkość, kolor, serwis.",
    badge: "Nie tylko kolejny dostawca",
    heroTitle: "Dlaczego salony wybierają nas zamiast innych.",
    heroSubtitle: "19 lat przedłużania włosów. Bezpośrednio z naszej fabryki do Twojego salonu — z jakością serwisu, której inni nie dorastają.",
    ctaApply: "Złóż wniosek o konto hurtowe",
    ctaWhatsApp: "Czat na WhatsApp",
    compareTitle: "Różnica, która ma znaczenie",
    compareSubtitle: "Szczera porównanie. Bez lukru. Co otrzymujesz u nas vs u przeciętnego dostawcy UK.",
    compareUsLabel: "U nas:",
    compareThemLabel: "Typowy dostawca UK:",
    comparisons: [
      { title: "Ceny factory-direct", us: "Posiadamy produkcję. Bez pośredników. Płacisz cenę fabryczną.", them: "Większość dostawców UK to odsprzedawcy. Podbijają cenę o 30–60% zanim dojdzie do Ciebie." },
      { title: "19 lat w branży", us: "Robimy przedłużenia od 2007. Znamy jakość od podszewki.", them: "Nowe marki przychodzą i odchodzą. Znikną — zostajesz z towarem, którego klient nie zamówi ponownie." },
      { title: "Szybka ekspresowa wysyłka UK & UE", us: "Jesteśmy w Manchesterze. Wysyłka factory-direct ekspresem (3–5 dni). Magazyn UK w przygotowaniu — na razie od partnera.", them: "Import z Chin trwa 2–4 tygodnie. Zły kolor? Czekasz kolejny miesiąc." },
      { title: "Nie znikniemy", us: "19 lat. To samo tempo. Te same standardy. Gdy nas potrzebujesz, odpowiadamy.", them: "Dostawcy znikają w środku sezonu. Linie kolorów przerywane. Szukasz zamienników." },
      { title: "Dobór koloru wbudowany", us: "Indywidualny dobór koloru — darmowa wizyta w salonie w Manchesterze. Trafiamy precyzyjnie.", them: "Większość wysyła standardowe wzorniki. Dopasowujesz sam lub godziny farbowania." },
      { title: "Brak presji minimum", us: "Zamów tyle, ile potrzebujesz, kiedy potrzebujesz. Bez przepełniania, bez presji.", them: "Niektórzy wymuszają min. zamówienia. Kończysz z towarem na półce." },
    ],
    promisesTitle: "Cztery rzeczy, na których nigdy nie ustępujemy",
    promises: [
      { title: "19 lat. Ta sama fabryka. Ten sam Ty.", desc: "Jesteśmy w tym od 2007. Przetrwaliśmy zmiany rynku, bo jakość nigdy nie ucierpiała. Z nami wiesz, z kim masz do czynienia." },
      { title: "100 % włosy Remy. Zawsze.", desc: "Wyrównane łuski, double-drawn, minimalne wypadanie. Każda partia sprawdzana przed wysyłką. Bez mieszanej jakości." },
      { title: "Odpowiadamy. W 2 godziny.", desc: "Bez systemu zgłoszeń. Prawdziwa odpowiedź od kogoś, kto zna produkt i Twoje konto." },
      { title: "Factory-direct. Zasięg UK & UE.", desc: "Ekspresowa wysyłka 3–5 dni po UK & UE. Szybka dostawa z fabryki do salonu. Bez międzykontynentalnego czekania." },
    ],
    realTalkTitle: "Szczera rozmowa.",
    realTalkParas: [
      "Wiemy, że właściciele salonów w UK dostają co miesiąc dziesiątki maili od dostawców. Każdy twierdzi, że ma najlepszą jakość. Każdy twierdzi, że ma konkurencyjne ceny.",
      "Różnica u nas: jesteśmy na tyle długo, by wiedzieć, że relacja liczy się tak samo jak produkt. Dostawca, który odbiera telefon, szybko rozwiązuje problemy i nie znika w sezonie — jest więcej wart niż najniższa cena.",
      "19 lat. Widzieliśmy dostawców przychodzących i odchodzących. Jesteśmy tu, bo nigdy nie traktowaliśmy partnerów jak jednorazowych klientów.",
      "Wypróbuj nas. Jedno zamówienie. Zobacz różnicę.",
    ],
    realTalkCtaApply: "Złóż wniosek o konto hurtowe",
    realTalkWhatsApp: "Czat na WhatsApp",
    faqTitle: "Najczęściej zadawane pytania",
    faqSubtitle: "Szybkie odpowiedzi na pytania, które najczęściej dostajemy od właścicieli salonów.",
    faqs: [
      { q: "Jaka jest minimalna ilość zamówienia?", a: "Brak presji minimum. Zamów mało lub dużo. Przy większości metod pełna głowa to 100 g, ale dostarczamy w paczkach, byś zamówił dokładnie to, czego potrzebuje klient." },
      { q: "Jakie są warunki płatności?", a: "Elastyczne opcje dla zarejestrowanych kont hurtowych. Standard: przedpłata lub 30 dni netto dla zatwierdzonych. Skontaktuj się z nami." },
      { q: "Jak długo trwa dostawa?", a: "Ekspresowa wysyłka factory-direct 3–5 dni po UK & UE. Dobór koloru lub niestandardowe: 3–5 dni roboczych. (Magazyn UK w przygotowaniu.)" },
      { q: "Jaka jest polityka zwrotów dla zamówień hurtowych?", a: "Wymieniamy przy wadach produkcyjnych w ciągu 14 dni. Obcięte/zmienione włosy nie podlegają zwrotowi. Błędny kolor z naszej winy? Pokrywamy koszt." },
      { q: "Czy oferujecie wizyty doboru koloru?", a: "Tak — darmowa konsultacja w salonie w Greater Manchester. Inne regiony: wirtualny dobór przez WhatsApp lub e-mail z fotami." },
      { q: "Czy mogę zamówić próbki przed pełnym zamówieniem?", a: "Jasne. Mamy pakiety próbek dla każdej metody. Napisz przez formularz, wyślemy zestaw w cenie hurtowej." },
      { q: "Jakie metody dostarczacie?", a: "Pełne linie: Clip-In, Tape-In, Nano Ring, K-Tip, Hand-Tied Weft i Butterfly Weft — plus Hair Toppers i Ponytails. Zobacz kolekcje." },
      { q: "Czy wysyłacie poza UK?", a: "Tak — UE i międzynarodowo. Dostawa UE zwykle 3–5 dni roboczych. Skontaktuj się o ofertę." },
    ],
    toolkitTitle: "Zestaw narzędzi salonu",
    toolkitSubtitle: "Wszystko, co potrzebne, by wprowadzić D.S Hair & Beauty do salonu — od przewodników po materiały sprzedażowe.",
    toolkitComingSoon: "Wkrótce",
    toolkitItems: [
      { title: "Przewodnik po liniach", desc: "Przegląd linii z kolorami, wagami i metodami. Udostępnij zespołowi.", linkLabel: "Otwórz WhatsApp" },
      { title: "Karty kolorów", desc: "Fizyczne karty kolorów do salonu. Pokaż i dotknij przed zamówieniem.", linkLabel: "Otwórz WhatsApp" },
      { title: "Kit ekspozycyjny", desc: "Plakat A3, karty produktów i ulotki pielęgnacji do wydruku.", linkLabel: "Otwórz WhatsApp" },
      { title: "Wsparcie WhatsApp Business", desc: "Bezpośrednia linia do szybkich zamówień i pytań o kolor. Szybka odpowiedź.", linkLabel: "Otwórz WhatsApp" },
      { title: "Wniosek o konto hurtowe", desc: "Dedykowane ceny, wydłużone terminy płatności i priorytetowy dostęp do stoku.", linkLabel: "Złóż wniosek" },
      { title: "Program Ambasadorski", desc: "Dla stylistów z zasięgiem. Prowizja lub ekskluzywne rabaty na własne zamówienia.", linkLabel: "Dowiedz się więcej" },
    ],
  },
}
