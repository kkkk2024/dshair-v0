import type { Locale } from "@/lib/i18n/config"

// Content module for the "How to Choose a Hair Extension Supplier" blog post.
// All visible copy is externalised here so the page can be rendered in any of
// the 6 locales with an identical layout. English is the source of truth.

export interface HowToChooseHairExtensionSupplierContent {
  seoTitle: string
  seoDescription: string
  navHome: string
  navBlog: string
  navCurrent: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  heroPrimaryLabel: string
  heroPrimaryHref: string
  heroSecondaryLabel: string
  heroSecondaryHref: string
  whyHeading: string
  whyP1: string
  whyP2Lead: string
  whyP2Strong: string
  whyP2Outro: string
  heroImageSrc: string
  heroImageAlt: string
  keyFactorsHeading: string
  qualityHeading: string
  qualityP: string
  qualityCards: { tone: "green" | "amber" | "red"; label: string; text: string }[]
  qualityP2: string
  colourHeading: string
  colourP1: string
  colourP2: string
  rangeHeading: string
  rangeP1: string
  rangeP2: string
  leadTimeHeading: string
  leadTimeP1: string
  leadTimeP2: string
  supportHeading: string
  supportP: string
  factoryHeading: string
  factoryP1: string
  factoryP2Strong: string
  factoryP2Body: string
  factoryTiers: { label: string; text: string }[]
  factoryP3Strong: string
  factoryP3Body: string
  moqHeading: string
  moqP: string
  moqCards: { label: string; text: string }[]
  testingHeading: string
  testingP: string
  tests: { label: string; text: string }[]
  visitHeading: string
  visitP: string
  visitItems: { item: string; detail: string }[]
  redFlagsHeading: string
  redFlagsP: string
  redFlags: { flag: string; detail: string }[]
  questionsHeading: string
  questionsP: string
  questions: string[]
  ukHeading: string
  ukP: string
  ukPoints: { label: string; text: string }[]
  ukP2: string
  faqHeading: string
  faqs: { q: string; a: string }[]
  ctaBoxTitle: string
  ctaBoxBody: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
  internal1Label: string
  internal1Title: string
  internal1Href: string
  internal2Label: string
  internal2Title: string
  internal2Href: string
  backLabel: string
}

const en: HowToChooseHairExtensionSupplierContent = {
  seoTitle: "How to Choose a Hair Extension Supplier for Your Salon | D.S Hair Beauty",
  seoDescription:
    "Choosing the right trade hair extension supplier can make or break your salon business. Learn the key factors to evaluate suppliers, spot red flags, and find a UK partner you can rely on.",
  navHome: "Home",
  navBlog: "Blog",
  navCurrent: "How to Choose a Hair Extension Supplier",
  heroBadge: "Trade Guide",
  heroTitle: "How to Choose a Hair Extension Supplier for Your Salon",
  heroSubtitle:
    "The right supplier means consistent quality, reliable stock, and a partner who understands the UK salon trade. Here is everything you need to know before you commit.",
  heroPrimaryLabel: "Open Trade Account",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "Browse Products",
  heroSecondaryHref: "/collections/tape-in",
  whyHeading: "Why Your Choice of Supplier Matters",
  whyP1:
    "Hair extensions are one of the most profitable salon services — but only when they are done right. A poor-quality weft, a mismatched colour, or a supplier who cannot deliver on time does not just cost you money; it costs you clients. In a relationship-driven industry, your reputation rides on the products you use.",
  whyP2Lead: "That is why choosing the right ",
  whyP2Strong: "trade hair extension supplier",
  whyP2Outro:
    " is one of the most important business decisions you will make. Whether you run a busy Manchester city salon or a boutique studio in Leeds, the supplier you work with shapes every extension appointment you book.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "Professional salon consultation for hair extensions",
  keyFactorsHeading: "Key Factors to Evaluate a Hair Extension Supplier",
  qualityHeading: "1. Hair Quality: Remy vs. Virgin vs. Non-Remy",
  qualityP:
    "The hair extension industry uses three quality classifications — and understanding them is the single most important factor in supplier selection:",
  qualityCards: [
    {
      tone: "green",
      label: "Virgin Remy Hair",
      text: "Collected from a single donor. Never chemically processed, coloured, or permed. Cuticles fully intact and aligned. This is the highest grade — used for premium custom colour work. Expect to pay 40–60% more than standard Remy. Lifespan: 18–24 months with care.",
    },
    {
      tone: "amber",
      label: "Standard Remy Hair",
      text: "Cuticles intact and aligned. May have undergone gentle processing (colouring, texturising). This is the industry standard for professional trade extensions. Represents 80%+ of trade-grade hair sold to UK salons. Lifespan: 12–18 months.",
    },
    {
      tone: "red",
      label: "Non-Remy Hair",
      text: "Collected from multiple donors — often from brushes, salon floors, or temple offerings. Cuticles stripped via acid bath. Coated in silicone to appear shiny. The silicone washes out in 2–4 shampoos. Lifespan: 1–3 months before matting. Found in budget retail extensions. Never acceptable for professional salon use.",
    },
  ],
  qualityP2:
    "Always ask your supplier to specify: “Is this Virgin Remy, standard Remy, or non-Remy?” A legitimate trade supplier will answer immediately. Evasion is a red flag.",
  colourHeading: "2. Colour Consistency Across Batches",
  colourP1:
    "Clients return every 6–8 weeks for repositioning or reapplication. If your next batch of extensions looks different from the last, you will spend hours colour-matching — or worse, lose the client.",
  colourP2:
    "Ask suppliers for samples from different production batches before committing. Consistent colour matching across orders is a sign of a quality manufacturer, not just a trader.",
  rangeHeading: "3. Range of Colours and Lengths",
  rangeP1:
    "Your clients are diverse. A good supplier should offer at minimum 30+ shades across all extension types, including multi-tonal and balayage options. Lengths should range from 14\" to 28\".",
  rangeP2:
    "At D.S Hair Beauty, we stock 40+ shades across Clip-In, Tape-In, K-Tip, Weft, Butterfly Weft, and Nano Ring — all in 100% Remy human hair. If your current supplier cannot meet your colour range, they are limiting your salon revenue.",
  leadTimeHeading: "4. Lead Time and Reliability",
  leadTimeP1:
    "UK salons work to appointment schedules. When a client books in for a full-head K-tip application and your supplier tells you the stock is delayed, you face two bad options: disappoint the client or source emergency stock elsewhere.",
  leadTimeP2:
    "Look for suppliers with UK-based stock or fast international shipping (5–10 working days). D.S Hair Beauty ships factory-direct with express 3–5 day delivery — because we know your appointments do not wait.",
  supportHeading: "5. Trade Support and Account Management",
  supportP:
    "A transactional supplier who only sends you an invoice is not a partner. Look for suppliers who offer trade accounts with net-30 terms, dedicated account managers, and responsive support via WhatsApp or email. At D.S Hair Beauty, trade accounts receive priority dispatch, volume discounts, and direct access to our team.",
  factoryHeading: "Understanding How Chinese Hair Extension Factories Work",
  factoryP1:
    "Over 90% of the world's Remy human hair originates from China and India, and the majority of processing takes place in Chinese manufacturing hubs — primarily in Xuchang (Henan province), known as the global centre of the human hair trade. Understanding how these factories operate helps you evaluate suppliers more effectively.",
  factoryP2Strong: "The factory hierarchy:",
  factoryP2Body:
    " Not every supplier who calls themselves a “factory” is one. The Chinese hair extension supply chain has three tiers:",
  factoryTiers: [
    {
      label: "Tier 1: Raw hair collectors and processors",
      text: "These facilities collect raw hair, sort it by length and quality, wash and de-lice it, and perform the initial cuticle alignment. They sell bulk hair to manufacturers. Fewer than 20 facilities of this scale exist globally.",
    },
    {
      label: "Tier 2: Weft and tip manufacturers",
      text: "These factories take processed Remy hair and produce the finished extension products — sewing wefts, applying keratin tips, making tape panels, creating nano rings. They often employ 50–200 workers. This is the tier most “factory-direct” trade suppliers operate at.",
    },
    {
      label: "Tier 3: Trading companies and distributors",
      text: "These businesses buy from Tier 2 manufacturers, brand the products, and sell to salons — often with value added through UK stockholding, colour matching services, and trade account management. Many UK salon suppliers operate primarily at this tier.",
    },
  ],
  factoryP3Strong: "Why this matters for your supplier decision:",
  factoryP3Body:
    " A Tier 2 manufacturer may offer lower unit prices but typically requires large minimum order quantities (MOQs) and provides limited ongoing support. A Tier 3 UK-based distributor adds a margin but absorbs the logistics, stockholding, currency risk, and quality control burden. For most independent UK salons, the Tier 3 model delivers better overall value despite the higher unit cost — because the distributor handles the parts of the supply chain that are expensive and risky for a salon to manage alone.",
  moqHeading: "MOQ Negotiation: What Salon Owners Need to Know",
  moqP:
    "Minimum Order Quantity (MOQ) is one of the first barriers salon owners encounter when approaching manufacturers or large distributors. Here is how to navigate it:",
  moqCards: [
    {
      label: "Typical MOQ by supplier type",
      text: "Direct Chinese factories: 50–200 sets per colour per order. UK-based distributors: often no MOQ, or as low as 5–10 sets. Blended suppliers (factory with UK warehouse): typically 10–30 sets.",
    },
    {
      label: "How to negotiate lower MOQs",
      text: "Start with a sample order (1–3 sets) to test quality. Once satisfied, propose a staggered commitment: “We will start with 20 sets this month, with a commitment to 50 sets per month within 6 months if quality and delivery are consistent.” Suppliers value predictable volume over one-time large orders.",
    },
    {
      label: "The mixed-order strategy",
      text: "Ask if the MOQ applies per product SKU or per order total. A supplier with a 30-set MOQ may accept 10 tape-in, 10 weft, and 10 nano ring in a single order if the total meets the threshold. This allows you to stock variety without overcommitting to any single product type.",
    },
  ],
  testingHeading: "Quality Testing Methods for Salon Owners",
  testingP: "Before committing to a supplier, perform these five practical tests on sample wefts:",
  tests: [
    {
      label: "The Cuticle Direction Test:",
      text: "Run your thumb and forefinger along a strand from root to tip — it should feel smooth. Run it from tip to root — it should feel slightly rough. If it feels the same in both directions, the cuticle has been stripped. This test alone identifies non-Remy hair in seconds.",
    },
    {
      label: "The Wash Test:",
      text: "Shampoo and condition a sample weft 5–6 times over a week. Observe after drying. Remy hair should remain smooth, shiny, and tangle-free. Non-Remy hair will begin to mat, lose shine, and feel rough.",
    },
    {
      label: "The Shedding Test:",
      text: "Hold a weft by both ends and gently shake it. High-quality wefts should shed fewer than 3–5 strands. If a cloud of hair falls out, the weft construction is poor.",
    },
    {
      label: "The Colour Match Test:",
      text: "Order the same shade from two different batches (separated by at least 2 weeks). Place them side by side under salon lighting. Batch-to-batch colour consistency is the hallmark of a quality manufacturer.",
    },
    {
      label: "The Heat Test:",
      text: "Apply a straightening iron at 180°C to a few strands of the sample. Quality Remy hair should withstand heat styling without burning, smoking, or developing a plastic-like smell. Any of these reactions indicates synthetic blending or heavy chemical processing.",
    },
  ],
  visitHeading: "Factory Visit Checklist (If You Source Direct)",
  visitP:
    "If you are considering visiting a manufacturer in China or India — or if you are auditing a UK-based supplier's facility — here is what to verify in person:",
  visitItems: [
    {
      item: "Worker conditions and wages",
      detail: "Ethical sourcing matters. Well-treated workers produce more consistent quality. Look for ventilated workspaces, reasonable working hours, and fair compensation structures.",
    },
    {
      item: "Raw hair storage",
      detail: "Proper storage means temperature-controlled, ventilated rooms. Raw hair stored in damp or hot conditions develops odour and structural damage before processing.",
    },
    {
      item: "Sorting process",
      detail: "Watch how hair is sorted by length and quality. Consistent sorting = consistent finished product. Random or casual sorting indicates poor quality control.",
    },
    {
      item: "Cuticle alignment process",
      detail: "For Remy hair, the factory must have a process to ensure all cuticles face the same direction before wefting. Ask to see this step — it is the single most important quality determinant.",
    },
    {
      item: "Weft sewing quality",
      detail: "Inspect the tension and spacing of the sewing line. Loose or uneven stitching causes shedding. Double-stitched wefts are more durable than single-stitched.",
    },
    {
      item: "Colour processing area",
      detail: "Ask about their colour formulation system. Professional factories use spectrophotometers and maintained shade libraries — they do not eyeball colours.",
    },
    {
      item: "Quality control checkpoint",
      detail: "Look for a dedicated QC station where finished products are inspected for shedding, colour accuracy, and weight consistency before packaging.",
    },
  ],
  redFlagsHeading: "Red Flags to Watch Out For",
  redFlagsP: "Spotting a poor supplier before you commit saves months of frustration. Here are the warning signs:",
  redFlags: [
    {
      flag: "Prices too low to be credible",
      detail: "If a wholesale price seems impossibly low, the hair is almost certainly non-Remy or heavily processed. You will pay more in client complaints than you save.",
    },
    {
      flag: "No physical samples available",
      detail: "Legitimate suppliers are happy to send sample wefts. If a supplier refuses or only sends photos, walk away.",
    },
    {
      flag: "Vague or copy-heavy product descriptions",
      detail: "Quality suppliers invest in accurate colour profiles and technical specifications. Vague descriptions mean they do not know their own product.",
    },
    {
      flag: "No trade account terms",
      detail: "If they only sell at full retail without any professional discount, they are targeting consumers, not salons — which suggests they have no understanding of the trade market.",
    },
    {
      flag: "Slow or non-existent customer support",
      detail: "Test their response time before committing. A supplier who takes 3 days to reply to an enquiry will be worse when you have an urgent order problem.",
    },
  ],
  questionsHeading: "Questions to Ask Before You Commit",
  questionsP:
    "Send these questions in your initial enquiry. How a supplier responds tells you everything about what working with them will be like:",
  questions: [
    "What percentage of your hair is Remy? Can you provide certification?",
    "Do you hold UK-based stock, and what are your standard dispatch times?",
    "What is your minimum order quantity for trade accounts?",
    "Do you offer volume discounts, and what are your trade pricing tiers?",
    "Can I order samples before placing a full order?",
    "What is your returns or quality dispute policy?",
    "Do you offer credit terms (e.g. net-30) for established trade accounts?",
    "What aftercare or education resources do you provide to salons?",
  ],
  ukHeading: "Why UK-Based Suppliers Are Often the Better Choice",
  ukP:
    "It is tempting to source directly from manufacturers overseas for the lowest unit price. But for UK salons, a UK-based supplier often delivers more value:",
  ukPoints: [
    {
      label: "Faster dispatch",
      text: "— UK stock means next-day or 2-day delivery vs. 2–4 weeks from Asia",
    },
    {
      label: "No customs delays or import duty",
      text: "— which can add 20% to your cost and 3–5 days to delivery",
    },
    {
      label: "Colour matching you can trust",
      text: "— UK suppliers understand the UK market palette and can advise on shades that British clients actually want",
    },
    {
      label: "Account management in your time zone",
      text: "— a WhatsApp message at 9am gets a reply at 9am, not the next business day",
    },
    {
      label: "Regulatory confidence",
      text: "— UK-based suppliers comply with UK trading standards and product safety regulations",
    },
  ],
  ukP2:
    "D.S Hair Beauty is a factory-direct manufacturer with 19 years in the hair extension industry. We supply salons across the UK with Remy human hair extensions via factory-direct express 3–5 day shipping, with trade accounts, no minimum order quantities, and direct manufacturer support.",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      q: "Should I buy directly from a Chinese factory or use a UK-based supplier?",
      a: "For most independent UK salons, a UK-based supplier delivers better overall value. While factory-direct pricing may be 20–35% lower per unit, you absorb logistics costs, import duties (20% VAT on imports), customs clearance delays, currency fluctuation risk, and quality control responsibility. If your monthly extension volume exceeds 100 sets, factory-direct sourcing may become cost-effective. Below that threshold, a UK supplier who holds stock and manages the supply chain typically provides better reliability at a reasonable premium.",
    },
    {
      q: "What paperwork should I expect from a legitimate trade supplier?",
      a: "A professional trade supplier should provide: (1) a trade account application form, (2) a wholesale price list (typically 30–50% below retail), (3) certificates of authenticity for Remy classification (mill test reports or supplier declarations), (4) Cosmetic Product Safety Reports for bonded/taped products, and (5) a terms and conditions document covering returns, quality disputes, and payment terms. If a supplier cannot produce any of these, proceed with caution.",
    },
    {
      q: "How do I test a new supplier before committing to a large order?",
      a: "The “small order audit” method: place an initial order for 3–5 sets in different shades and types. Evaluate: (1) communication responsiveness during the ordering process, (2) accuracy of delivery timeframe, (3) packaging quality, (4) colour accuracy, (5) hair quality using the five tests described above. Use one set on a trusted client and monitor the result over 4–6 weeks. Only scale up your order volume after this real-world validation.",
    },
    {
      q: "What payment terms should I negotiate?",
      a: "New trade accounts typically start on pro-forma (payment before dispatch). After 3–6 months of consistent ordering, negotiate net-30 terms (payment due 30 days after invoice). Some suppliers offer net-15 as a compromise. For large orders (over £1,000), ask about staged payments: 50% upfront, 50% on dispatch. Avoid any supplier demanding 100% upfront payment via unsecured methods like bank transfer to a personal account — use credit card or PayPal for initial orders where chargeback protection exists.",
    },
    {
      q: "How often should I re-evaluate my supplier relationship?",
      a: "Annually, at minimum. Review: order accuracy rate, delivery reliability, quality consistency, pricing competitiveness, and responsiveness. The hair extension supply market shifts — new manufacturers enter, currency rates change, and a supplier who was excellent two years ago may have declined. Maintain relationships with 2–3 approved suppliers rather than relying on a single source. This provides backup options and keeps your primary supplier motivated to maintain service levels.",
    },
  ],
  ctaBoxTitle: "Ready to Find Your Ideal UK Trade Supplier?",
  ctaBoxBody:
    "D.S Hair Beauty supplies 100% Remy human hair extensions to UK salons at trade prices. Open a free trade account and get your first sample order today.",
  ctaPrimaryLabel: "Open a Trade Account →",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Browse Products",
  ctaSecondaryHref: "/collections/tape-in",
  internal1Label: "Next Article",
  internal1Title: "Wholesale Hair Extensions UK: A Salon Owner's Guide",
  internal1Href: "/blog/wholesale-hair-extensions-uk",
  internal2Label: "Related Guide",
  internal2Title: "Hair Extension Types Explained: A Complete Guide",
  internal2Href: "/blog/hair-extension-types-guide",
  backLabel: "Back to Blog",
}

const de: HowToChooseHairExtensionSupplierContent = {
  seoTitle: "So wählen Sie einen Haarverlängerungs-Lieferanten für Ihren Salon | D.S Hair Beauty",
  seoDescription:
    "Die Wahl des richtigen Trade-Lieferanten für Haarverlängerungen kann Ihr Salon-Geschäft entscheiden. Lernen Sie die wichtigsten Bewertungskriterien kennen, erkennen Sie Warnsignale und finden Sie einen UK-Partner, auf den Sie sich verlassen können.",
  navHome: "Startseite",
  navBlog: "Blog",
  navCurrent: "So wählen Sie einen Haarverlängerungs-Lieferanten",
  heroBadge: "Trade-Guide",
  heroTitle: "So wählen Sie einen Haarverlängerungs-Lieferanten für Ihren Salon",
  heroSubtitle:
    "Der richtige Lieferant bedeutet gleichbleibende Qualität, zuverlässige Lagerbestände und einen Partner, der den Salon-Trade in Großbritannien versteht. Hier finden Sie alles, was Sie vor Ihrer Entscheidung wissen müssen.",
  heroPrimaryLabel: "Trade-Konto eröffnen",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "Produkte ansehen",
  heroSecondaryHref: "/collections/tape-in",
  whyHeading: "Warum Ihre Lieferantenwahl entscheidend ist",
  whyP1:
    "Haarverlängerungen gehören zu den profitabelsten Salon-Dienstleistungen — aber nur, wenn sie richtig gemacht werden. Eine minderwertige Weft, ein falsch abgestimmter Farbton oder ein Lieferant, der nicht pünktlich liefert, kostet Sie nicht nur Geld, sondern auch Kunden. In einer beziehungsorientierten Branche steht Ihr Ruf auf den Produkten, die Sie verwenden.",
  whyP2Lead: "Deshalb ist die Wahl des richtigen ",
  whyP2Strong: "Trade-Lieferanten für Haarverlängerungen",
  whyP2Outro:
    " eine der wichtigsten Geschäftsentscheidungen, die Sie treffen werden. Ob Sie einen vielbeschäftigten Salon im Manchesterer Stadtzentrum oder ein Boutique-Studio in Leeds führen — der Lieferant, mit dem Sie arbeiten, prägt jeden Verlängerungstermin, den Sie buchen.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "Professionelle Salon-Beratung für Haarverlängerungen",
  keyFactorsHeading: "Wichtige Kriterien zur Bewertung eines Haarverlängerungs-Lieferanten",
  qualityHeading: "1. Haarqualität: Remy vs. Virgin vs. Non-Remy",
  qualityP:
    "Die Haarverlängerungs-Branche verwendet drei Qualitätsklassifizierungen — und sie zu verstehen ist der mit Abstand wichtigste Faktor bei der Lieferantenauswahl:",
  qualityCards: [
    {
      tone: "green",
      label: "Virgin Remy Hair",
      text: "Von einer einzelnen Spenderin gewonnen. Niemals chemisch behandelt, gefärbt oder dauergewellt. Nagelhaut vollständig intakt und ausgerichtet. Das ist die höchste Qualitätsstufe — verwendet für hochwertige individuelle Farbarbeiten. Rechnen Sie mit 40–60% höheren Kosten als bei Standard-Remy. Lebensdauer: 18–24 Monate bei richtiger Pflege.",
    },
    {
      tone: "amber",
      label: "Standard Remy Hair",
      text: "Nagelhaut intakt und ausgerichtet. Kann einer sanften Verarbeitung (Färben, Texturieren) unterzogen worden sein. Das ist der Industriestandard für professionelle Trade-Verlängerungen. Macht über 80% des an UK-Salons verkauften Trade-Haares aus. Lebensdauer: 12–18 Monate.",
    },
    {
      tone: "red",
      label: "Non-Remy Hair",
      text: "Von mehreren Spenderinnen gewonnen — oft von Bürsten, Salonböden oder Tempelspenden. Nagelhaut durch Säurebad entfernt. Mit Silikon beschichtet, um glänzend zu wirken. Das Silikon wäscht sich nach 2–4 Haarwäschen aus. Lebensdauer: 1–3 Monate bis zur Verfilzung. Findet sich in günstigen Retail-Verlängerungen. Für den professionellen Saloneinsatz niemals akzeptabel.",
    },
  ],
  qualityP2:
    "Fragen Sie Ihren Lieferanten immer: „Ist das Virgin Remy, Standard-Remy oder Non-Remy?“ Ein seriöser Trade-Lieferant antwortet sofort. Ausweichen ist ein Warnsignal.",
  colourHeading: "2. Farbkonsistenz über Chargen hinweg",
  colourP1:
    "Kundinnen kehren alle 6–8 Wochen zum Nachsetzen oder Neuansetzen zurück. Wenn Ihre nächste Charge Verlängerungen anders aussieht als die letzte, verbringen Sie Stunden mit Farbabstimmung — oder verlieren im schlimmsten Fall die Kundin.",
  colourP2:
    "Bitten Sie Lieferanten vor der Entscheidung um Muster aus verschiedenen Produktionschargen. Konsistente Farbabstimmung über Bestellungen hinweg ist ein Zeichen für einen Qualitätshersteller, nicht nur einen Händler.",
  rangeHeading: "3. Farb- und Längensortiment",
  rangeP1:
    "Ihre Kundinnen sind vielfältig. Ein guter Lieferant sollte mindestens 30+ Farbtöne über alle Verlängerungsarten anbieten, einschließlich mehrtoniger und Balayage-Optionen. Die Längen sollten von 14\" bis 28\" reichen.",
  rangeP2:
    "Bei D.S Hair Beauty führen wir 40+ Farbtöne über Clip-In, Tape-In, K-Tip, Weft, Butterfly Weft und Nano Ring — alles aus 100% Remy-Echthaar. Wenn Ihr aktueller Lieferant Ihr Farbsortiment nicht abdecken kann, begrenzt er den Umsatz Ihres Salons.",
  leadTimeHeading: "4. Lieferzeit und Zuverlässigkeit",
  leadTimeP1:
    "Salons in Großbritannien arbeiten nach Terminplänen. Wenn eine Kundin eine Full-Head-K-tip-Anwendung bucht und Ihr Lieferant Ihnen mitteilt, dass sich der Bestand verzögert, haben Sie zwei schlechte Optionen: die Kundin enttäuschen oder Notbestände woanders beschaffen.",
  leadTimeP2:
    "Achten Sie auf Lieferanten mit UK-Lagerbestand oder schnellem internationalem Versand (5–10 Werktage). D.S Hair Beauty liefert per Express in 3–5 Tagen direkt ab Werk — weil wir wissen, dass Ihre Termine nicht warten.",
  supportHeading: "5. Trade-Support und Account-Management",
  supportP:
    "Ein transaktionaler Lieferant, der Ihnen nur eine Rechnung schickt, ist kein Partner. Achten Sie auf Lieferanten, die Trade-Konten mit net-30-Konditionen, eigene Account-Manager und reaktionsschnellen Support per WhatsApp oder E-Mail anbieten. Bei D.S Hair Beauty erhalten Trade-Konten bevorzugten Versand, Mengenrabatte und direkten Zugang zu unserem Team.",
  factoryHeading: "So arbeiten chinesische Haarverlängerungs-Fabriken",
  factoryP1:
    "Über 90% des weltweiten Remy-Echthaars stammt aus China und Indien, und der Großteil der Verarbeitung erfolgt in chinesischen Produktionszentren — vor allem in Xuchang (Provinz Henan), bekannt als globales Zentrum des Echthaar-Handels. Zu verstehen, wie diese Fabriken arbeiten, hilft Ihnen, Lieferanten besser zu bewerten.",
  factoryP2Strong: "Die Fabrik-Hierarchie:",
  factoryP2Body:
    " Nicht jeder, der sich „Fabrik“ nennt, ist eine. Die chinesische Lieferkette für Haarverlängerungen hat drei Ebenen:",
  factoryTiers: [
    {
      label: "Tier 1: Sammler und Verarbeiter von Rohhaar",
      text: "Diese Betriebe sammeln Rohhaar, sortieren es nach Länge und Qualität, waschen und entlausen es und führen die anfängliche Nagelhaut-Ausrichtung durch. Sie verkaufen Haar in großen Mengen an Hersteller. Weltweit gibt es weniger als 20 Betriebe dieser Größenordnung.",
    },
    {
      label: "Tier 2: Weft- und Spitzenhersteller",
      text: "Diese Fabriken nehmen verarbeitetes Remy-Haar und produzieren die fertigen Verlängerungsprodukte — Wefts nähen, Keratin-Spitzen anbringen, Tape-Panels herstellen, Nano-Rings erzeugen. Sie beschäftigen oft 50–200 Mitarbeiter. Auf dieser Ebene arbeiten die meisten „fabrikdirekten“ Trade-Lieferanten.",
    },
    {
      label: "Tier 3: Handelsunternehmen und Distributoren",
      text: "Diese Unternehmen kaufen von Tier-2-Herstellern, branden die Produkte und verkaufen an Salons — oft mit Mehrwert durch UK-Lagerhaltung, Farbabstimmungs-Services und Trade-Account-Management. Viele britische Salon-Lieferanten arbeiten vor allem auf dieser Ebene.",
    },
  ],
  factoryP3Strong: "Warum das für Ihre Lieferantenentscheidung wichtig ist:",
  factoryP3Body:
    " Ein Tier-2-Hersteller bietet möglicherweise niedrigere Stückpreise, verlangt aber in der Regel hohe Mindestbestellmengen (MOQs) und bietet nur begrenzten laufenden Support. Ein Tier-3-Distributor in Großbritannien schlägt einen Aufschlag auf, übernimmt aber Logistik, Lagerhaltung, Währungsrisiko und Qualitätskontrolle. Für die meisten unabhängigen UK-Salons liefert das Tier-3-Modell trotz höherer Stückkosten den besseren Gesamtwert — weil der Distributor die Teile der Lieferkette übernimmt, deren Verwaltung für einen Salon teuer und riskant ist.",
  moqHeading: "MOQ-Verhandlung: Was Salonbesitzer wissen müssen",
  moqP:
    "Die Mindestbestellmenge (MOQ) ist eine der ersten Hürden, auf die Salonbesitzer bei Herstellern oder großen Distributoren stoßen. So navigieren Sie sie:",
  moqCards: [
    {
      label: "Typische MOQ nach Lieferantentyp",
      text: "Direkte chinesische Fabriken: 50–200 Sets pro Farbe pro Bestellung. Distributoren in Großbritannien: oft keine MOQ oder nur 5–10 Sets. Gemischte Lieferanten (Fabrik mit UK-Lager): typischerweise 10–30 Sets.",
    },
    {
      label: "So verhandeln Sie niedrigere MOQs",
      text: "Beginnen Sie mit einer Musterbestellung (1–3 Sets), um die Qualität zu testen. Sobald Sie zufrieden sind, schlagen Sie eine gestaffelte Verpflichtung vor: „Wir starten diesen Monat mit 20 Sets, mit einer Verpflichtung zu 50 Sets pro Monat innerhalb von 6 Monaten, wenn Qualität und Lieferung konsistent sind.“ Lieferanten schätzen planbares Volumen mehr als einmalige Großbestellungen.",
    },
    {
      label: "Die Strategie der gemischten Bestellung",
      text: "Fragen Sie, ob die MOQ pro Produkt-SKU oder pro Bestellsumme gilt. Ein Lieferant mit 30-Set-MOQ akzeptiert möglicherweise 10 tape-in, 10 weft und 10 nano ring in einer Bestellung, wenn die Gesamtmenge die Schwelle erreicht. So können Sie Vielfalt lagern, ohne sich auf einen einzigen Produkttyp festzulegen.",
    },
  ],
  testingHeading: "Qualitätstest-Methoden für Salonbesitzer",
  testingP: "Führen Sie vor der Entscheidung für einen Lieferanten diese fünf praktischen Tests an Musterwefts durch:",
  tests: [
    {
      label: "Der Nagelhaut-Richtungstest:",
      text: "Fahren Sie mit Daumen und Zeigefinger an einer Strähne von der Wurzel zur Spitze entlang — sie sollte sich glatt anfühlen. Von der Spitze zur Wurzel — sie sollte sich leicht rau anfühlen. Fühlt sie sich in beide Richtungen gleich an, wurde die Nagelhaut entfernt. Dieser Test allein identifiziert Non-Remy-Haar in Sekunden.",
    },
    {
      label: "Der Waschtest:",
      text: "Waschen und pflegen Sie eine Musterweft über eine Woche 5–6-mal. Beobachten Sie das Ergebnis nach dem Trocknen. Remy-Haar sollte glatt, glänzend und verfilzungsfrei bleiben. Non-Remy-Haar beginnt zu verfilzen, verliert den Glanz und fühlt sich rau an.",
    },
    {
      label: "Der Ausfalltest:",
      text: "Halten Sie eine Weft an beiden Enden und schütteln Sie sie sanft. Hochwertige Wefts sollten weniger als 3–5 Strähnen verlieren. Fällt eine Wolke Haar heraus, ist die Weft-Konstruktion schlecht.",
    },
    {
      label: "Der Farbabgleichstest:",
      text: "Bestellen Sie denselben Farbton aus zwei verschiedenen Chargen (mindestens 2 Wochen auseinander). Legen Sie sie unter Salonsbeleuchtung nebeneinander. Chargenübergreifende Farbkonsistenz ist das Markenzeichen eines Qualitätsherstellers.",
    },
    {
      label: "Der Hitzetest:",
      text: "Führen Sie ein Glätteisen bei 180°C über einige Strähnen der Probe. Qualitäts-Remy-Haar sollte Hitzestyling ohne Verbrennen, Rauchen oder einen plastikartigen Geruch überstehen. Jede dieser Reaktionen deutet auf synthetische Beimischung oder starke chemische Verarbeitung hin.",
    },
  ],
  visitHeading: "Fabrikbesuchs-Checkliste (bei Direktbezug)",
  visitP:
    "Wenn Sie erwägen, einen Hersteller in China oder Indien zu besuchen — oder die Einrichtung eines UK-basierten Lieferanten zu prüfen — finden Sie hier, was Sie vor Ort verifizieren sollten:",
  visitItems: [
    {
      item: "Arbeitsbedingungen und Löhne",
      detail: "Ethische Beschaffung ist wichtig. Gut behandelte Arbeiter produzieren gleichmäßigere Qualität. Achten Sie auf belüftete Arbeitsplätze, angemessene Arbeitszeiten und faire Lohnstrukturen.",
    },
    {
      item: "Lagerung von Rohhaar",
      detail: "Richtige Lagerung bedeutet temperaturkontrollierte, belüftete Räume. In feuchten oder heißen Bedingungen gelagertes Rohhaar entwickelt Geruch und strukturelle Schäden, bevor es verarbeitet wird.",
    },
    {
      item: "Sortierprozess",
      detail: "Beobachten Sie, wie Haar nach Länge und Qualität sortiert wird. Konsistentes Sortieren = konsistentes Endprodukt. Zufälliges oder nachlässiges Sortieren deutet auf schlechte Qualitätskontrolle hin.",
    },
    {
      item: "Nagelhaut-Ausrichtungsprozess",
      detail: "Bei Remy-Haar muss die Fabrik einen Prozess haben, der sicherstellt, dass alle Nagelhautschuppen vor dem Weften in dieselbe Richtung zeigen. Bitten Sie darum, diesen Schritt zu sehen — er ist der wichtigste Qualitätsfaktor überhaupt.",
    },
    {
      item: "Qualität der Weft-Nähte",
      detail: "Prüfen Sie Spannung und Abstand der Nählinie. Lockeres oder ungleichmäßiges Nähen verursacht Haarausfall. Doppelt genähte Wefts sind haltbarer als einfach genähte.",
    },
    {
      item: "Farbverarbeitungsbereich",
      detail: "Fragen Sie nach ihrem Farbformulierungssystem. Professionelle Fabriken verwenden Spektralphotometer und gepflegte Farbbibliotheken — sie schätzen Farben nicht nach Augenmaß.",
    },
    {
      item: "Qualitätskontroll-Punkt",
      detail: "Achten Sie auf eine eigene QC-Station, an der Fertigprodukte vor dem Verpacken auf Haarausfall, Farbgenauigkeit und Gewichtskonsistenz geprüft werden.",
    },
  ],
  redFlagsHeading: "Warnsignale, auf die Sie achten sollten",
  redFlagsP:
    "Einen schlechten Lieferanten vor der Entscheidung zu erkennen, spart Monate der Frustration. Hier sind die Warnzeichen:",
  redFlags: [
    {
      flag: "Preise, die zu gut sind, um wahr zu sein",
      detail: "Wenn ein Großhandelspreis unmöglich niedrig erscheint, ist das Haar fast sicher Non-Remy oder stark verarbeitet. Sie zahlen am Ende mehr durch Kundenbeschwerden, als Sie sparen.",
    },
    {
      flag: "Keine physischen Muster verfügbar",
      detail: "Seriöse Lieferanten senden gerne Musterwefts. Wenn ein Lieferant sich weigert oder nur Fotos schickt, lassen Sie die Finger davon.",
    },
    {
      flag: "Vage oder textlastige Produktbeschreibungen",
      detail: "Qualitätslieferanten investieren in präzise Farbprofile und technische Spezifikationen. Vage Beschreibungen bedeuten, dass sie ihr eigenes Produkt nicht kennen.",
    },
    {
      flag: "Keine Trade-Kontokonditionen",
      detail: "Wenn sie nur zum vollen Einzelhandelspreis ohne professionellen Rabatt verkaufen, zielen sie auf Endverbraucher, nicht auf Salons — das deutet darauf hin, dass sie den Trade-Markt nicht verstehen.",
    },
    {
      flag: "Langsamer oder nicht vorhandener Kundenservice",
      detail: "Testen Sie die Reaktionszeit, bevor Sie sich festlegen. Ein Lieferant, der 3 Tage für eine Antwort auf eine Anfrage braucht, ist bei einem dringenden Bestellproblem noch schlimmer.",
    },
  ],
  questionsHeading: "Fragen, die Sie vor der Entscheidung stellen sollten",
  questionsP:
    "Senden Sie diese Fragen in Ihrer ersten Anfrage. Wie ein Lieferant antwortet, verrät Ihnen alles darüber, wie die Zusammenarbeit mit ihm sein wird:",
  questions: [
    "Wie viel Prozent Ihres Haares ist Remy? Können Sie eine Zertifizierung vorlegen?",
    "Halten Sie Lagerbestände in Großbritannien, und wie sind Ihre Standardversandzeiten?",
    "Wie hoch ist Ihre Mindestbestellmenge für Trade-Konten?",
    "Bieten Sie Mengenrabatte an, und wie sind Ihre Trade-Preisstufen?",
    "Kann ich Muster bestellen, bevor ich eine volle Bestellung aufgebe?",
    "Wie lautet Ihre Rückgabe- bzw. Qualitätsstreitregelung?",
    "Bieten Sie Zahlungsziele (z. B. net-30) für etablierte Trade-Konten an?",
    "Welche Nachsorge- oder Schulungsressourcen stellen Sie Salons zur Verfügung?",
  ],
  ukHeading: "Warum Lieferanten mit Sitz in Großbritannien oft die bessere Wahl sind",
  ukP:
    "Es ist verlockend, für den niedrigsten Stückpreis direkt bei Herstellern im Ausland zu beschaffen. Aber für Salons in Großbritannien liefert ein UK-Lieferant oft mehr Wert:",
  ukPoints: [
    {
      label: "Schnellerer Versand",
      text: "— UK-Bestand bedeutet Lieferung am nächsten Tag oder in 2 Tagen statt 2–4 Wochen aus Asien",
    },
    {
      label: "Keine Zollverzögerungen oder Einfuhrabgaben",
      text: "— die bis zu 20% Ihrer Kosten und 3–5 Tage Lieferzeit ausmachen können",
    },
    {
      label: "Farbabstimmung, der Sie vertrauen können",
      text: "— UK-Lieferanten verstehen die Farbpalette des britischen Marktes und können zu Farbtönen beraten, die britische Kundinnen tatsächlich wollen",
    },
    {
      label: "Account-Management in Ihrer Zeitzone",
      text: "— eine WhatsApp-Nachricht um 9 Uhr erhält eine Antwort um 9 Uhr, nicht am nächsten Werktag",
    },
    {
      label: "Regulatorische Sicherheit",
      text: "— Lieferanten in Großbritannien halten sich an britische Handelsstandards und Produktsicherheitsvorschriften",
    },
  ],
  ukP2:
    "D.S Hair Beauty ist ein fabrikdirekter Hersteller mit 19 Jahren Erfahrung in der Haarverlängerungs-Branche. Wir beliefern Salons in ganz Großbritannien mit Remy-Echthaar-Verlängerungen mit fabrikdirekten Expressversand in 3–5 Tagen, mit Trade-Konten, ohne Mindestbestellmengen und mit direktem Hersteller-Support.",
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Soll ich direkt von einer chinesischen Fabrik kaufen oder einen UK-basierten Lieferanten nutzen?",
      a: "Für die meisten unabhängigen UK-Salons liefert ein UK-basierter Lieferant den besseren Gesamtwert. Auch wenn die fabrikdirekten Preise pro Stück 20–35% niedriger sein können, übernehmen Sie Logistikkosten, Einfuhrabgaben (20% MwSt. auf Importe), Zollabfertigungsverzögerungen, Währungsrisiko und Verantwortung für die Qualitätskontrolle. Wenn Ihr monatliches Verlängerungsvolumen 100 Sets übersteigt, kann der Direktbezug von der Fabrik kosteneffizient werden. Unter dieser Schwelle bietet ein UK-Lieferant, der Bestände hält und die Lieferkette managt, in der Regel bessere Zuverlässigkeit zu einem angemessenen Aufpreis.",
    },
    {
      q: "Welche Unterlagen sollte ich von einem seriösen Trade-Lieferanten erwarten?",
      a: "Ein professioneller Trade-Lieferant sollte bereitstellen: (1) ein Antragsformular für das Trade-Konto, (2) eine Großhandelspreisliste (typischerweise 30–50% unter dem Einzelhandel), (3) Echtheitszertifikate für die Remy-Klassifizierung (Mühlen-Testberichte oder Lieferantenerklärungen), (4) kosmetische Produktsicherheitsberichte für gebondete/geklebte Produkte und (5) ein Dokument mit Allgemeinen Geschäftsbedingungen zu Rückgaben, Qualitätsstreitigkeiten und Zahlungsbedingungen. Wenn ein Lieferant keines davon vorlegen kann, seien Sie vorsichtig.",
    },
    {
      q: "Wie teste ich einen neuen Lieferanten, bevor ich mich auf eine große Bestellung festlege?",
      a: "Die „Kleinbestellungs-Audit“-Methode: Geben Sie eine erste Bestellung über 3–5 Sets in verschiedenen Farbtönen und Typen auf. Bewerten Sie: (1) Reaktionsfähigkeit der Kommunikation während des Bestellprozesses, (2) Genauigkeit des Lieferzeitrahmens, (3) Verpackungsqualität, (4) Farbgenauigkeit, (5) Haarqualität mit den fünf oben beschriebenen Tests. Verwenden Sie ein Set an einer vertrauten Kundin und beobachten Sie das Ergebnis über 4–6 Wochen. Erhöhen Sie Ihr Bestellvolumen erst nach dieser praxisnahen Validierung.",
    },
    {
      q: "Welche Zahlungsbedingungen sollte ich aushandeln?",
      a: "Neue Trade-Konten starten in der Regel pro-forma (Zahlung vor Versand). Nach 3–6 Monaten regelmäßiger Bestellungen verhandeln Sie net-30-Konditionen (Zahlung fällig 30 Tage nach Rechnung). Manche Lieferanten bieten net-15 als Kompromiss. Bei großen Bestellungen (über £1.000) fragen Sie nach gestaffelten Zahlungen: 50% im Voraus, 50% bei Versand. Vermeiden Sie Lieferanten, die 100% Vorauszahlung über ungesicherte Methoden wie Überweisung auf ein privates Konto verlangen — nutzen Sie für erste Bestellungen Kreditkarte oder PayPal, wo Chargeback-Schutz besteht.",
    },
    {
      q: "Wie oft sollte ich meine Lieferantenbeziehung neu bewerten?",
      a: "Mindestens jährlich. Prüfen Sie: Auftragsgenauigkeit, Lieferzuverlässigkeit, Qualitätskonsistenz, Preiswettbewerbsfähigkeit und Reaktionsfähigkeit. Der Markt für Haarverlängerungen verändert sich — neue Hersteller kommen, Wechselkurse ändern sich, und ein Lieferant, der vor zwei Jahren ausgezeichnet war, kann nachgelassen haben. Pflegen Sie Beziehungen zu 2–3 zugelassenen Lieferanten, statt sich auf eine einzige Quelle zu verlassen. Das schafft Optionen und hält Ihren Hauptlieferanten motiviert, das Serviceniveau zu halten.",
    },
  ],
  ctaBoxTitle: "Bereit, Ihren idealen UK-Trade-Lieferanten zu finden?",
  ctaBoxBody:
    "D.S Hair Beauty beliefert UK-Salons mit 100% Remy-Echthaar-Verlängerungen zu Trade-Preisen. Eröffnen Sie ein kostenloses Trade-Konto und erhalten Sie noch heute Ihre erste Musterbestellung.",
  ctaPrimaryLabel: "Trade-Konto eröffnen →",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Produkte ansehen",
  ctaSecondaryHref: "/collections/tape-in",
  internal1Label: "Nächster Artikel",
  internal1Title: "Großhandel Haarverlängerungen UK: Ein Leitfaden für Salonbesitzer",
  internal1Href: "/blog/wholesale-hair-extensions-uk",
  internal2Label: "Verwandter Leitfaden",
  internal2Title: "Haarverlängerungs-Arten erklärt: Ein vollständiger Leitfaden",
  internal2Href: "/blog/hair-extension-types-guide",
  backLabel: "Zurück zum Blog",
}

const fr: HowToChooseHairExtensionSupplierContent = {
  seoTitle: "Comment choisir un fournisseur d'extensions capillaires pour votre salon | D.S Hair Beauty",
  seoDescription:
    "Choisir le bon fournisseur trade d'extensions capillaires peut faire ou défaire votre salon. Apprenez les critères clés pour évaluer les fournisseurs, repérer les signaux d'alerte et trouver un partenaire britannique fiable.",
  navHome: "Accueil",
  navBlog: "Blog",
  navCurrent: "Comment choisir un fournisseur d'extensions capillaires",
  heroBadge: "Guide trade",
  heroTitle: "Comment choisir un fournisseur d'extensions capillaires pour votre salon",
  heroSubtitle:
    "Le bon fournisseur signifie une qualité constante, un stock fiable et un partenaire qui comprend le marché trade des salons britanniques. Voici tout ce que vous devez savoir avant de vous engager.",
  heroPrimaryLabel: "Ouvrir un compte trade",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "Voir les produits",
  heroSecondaryHref: "/collections/tape-in",
  whyHeading: "Pourquoi votre choix de fournisseur est important",
  whyP1:
    "Les extensions capillaires sont l'un des services de salon les plus rentables — mais seulement lorsqu'elles sont bien réalisées. Une mèche de mauvaise qualité, une couleur qui ne correspond pas ou un fournisseur qui ne livre pas à temps ne vous coûte pas seulement de l'argent ; cela vous coûte des clientes. Dans une industrie axée sur les relations, votre réputation repose sur les produits que vous utilisez.",
  whyP2Lead: "C'est pourquoi choisir le bon ",
  whyP2Strong: "fournisseur trade d'extensions capillaires",
  whyP2Outro:
    " est l'une des décisions commerciales les plus importantes que vous prendrez. Que vous dirigiez un salon très fréquenté du centre de Manchester ou un studio boutique à Leeds, le fournisseur avec lequel vous travaillez façonne chaque rendez-vous d'extensions que vous réservez.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "Consultation professionnelle en salon pour extensions capillaires",
  keyFactorsHeading: "Critères clés pour évaluer un fournisseur d'extensions capillaires",
  qualityHeading: "1. Qualité des cheveux : Remy vs. Virgin vs. Non-Remy",
  qualityP:
    "L'industrie des extensions capillaires utilise trois classifications de qualité — et les comprendre est le facteur le plus important dans le choix d'un fournisseur :",
  qualityCards: [
    {
      tone: "green",
      label: "Cheveux Virgin Remy",
      text: "Collectés auprès d'une seule donneuse. Jamais traités chimiquement, colorés ou permanentés. Cuticules entièrement intactes et alignées. C'est la qualité la plus élevée — utilisée pour les travaux de couleur sur mesure premium. Prévoyez de payer 40 à 60 % de plus que le Remy standard. Durée de vie : 18 à 24 mois avec entretien.",
    },
    {
      tone: "amber",
      label: "Cheveux Remy standard",
      text: "Cuticules intactes et alignées. Peuvent avoir subi un traitement léger (coloration, texturation). C'est la norme industrielle pour les extensions trade professionnelles. Représente plus de 80 % des cheveux de qualité trade vendus aux salons britanniques. Durée de vie : 12 à 18 mois.",
    },
    {
      tone: "red",
      label: "Cheveux Non-Remy",
      text: "Collectés auprès de plusieurs donneuses — souvent de brosses, de sols de salon ou d'offrandes de temples. Cuticules éliminées par bain d'acide. Enduits de silicone pour paraître brillants. Le silicone s'élimine en 2 à 4 shampoings. Durée de vie : 1 à 3 mois avant feutrage. Présents dans les extensions de détail bon marché. Jamais acceptables pour un usage professionnel en salon.",
    },
  ],
  qualityP2:
    "Demandez toujours à votre fournisseur de préciser : « Est-ce du Virgin Remy, du Remy standard ou du non-Remy ? » Un fournisseur trade légitime répondra immédiatement. Éluder la question est un signal d'alerte.",
  colourHeading: "2. Constance des couleurs entre les lots",
  colourP1:
    "Les clientes reviennent toutes les 6 à 8 semaines pour un repositionnement ou une repose. Si votre prochain lot d'extensions est différent du précédent, vous passerez des heures à assortir les couleurs — ou pire, vous perdrez la cliente.",
  colourP2:
    "Demandez aux fournisseurs des échantillons de différents lots de production avant de vous engager. Une correspondance de couleur constante entre les commandes est le signe d'un fabricant de qualité, pas seulement d'un revendeur.",
  rangeHeading: "3. Gamme de couleurs et de longueurs",
  rangeP1:
    "Vos clientes sont diverses. Un bon fournisseur doit offrir au minimum plus de 30 nuances dans tous les types d'extensions, y compris des options multitonales et balayage. Les longueurs doivent aller de 14\" à 28\".",
  rangeP2:
    "Chez D.S Hair Beauty, nous stockons plus de 40 nuances en Clip-In, Tape-In, K-Tip, Weft, Butterfly Weft et Nano Ring — le tout en 100 % de vrais cheveux Remy. Si votre fournisseur actuel ne peut pas couvrir votre gamme de couleurs, il limite le chiffre d'affaires de votre salon.",
  leadTimeHeading: "4. Délais et fiabilité",
  leadTimeP1:
    "Les salons britanniques travaillent sur des rendez-vous. Lorsqu'une cliente réserve une pose K-tip complète et que votre fournisseur vous annonce que le stock est retardé, vous avez deux mauvaises options : décevoir la cliente ou trouver du stock d'urgence ailleurs.",
  leadTimeP2:
    "Recherchez des fournisseurs avec un stock basé au Royaume-Uni ou une expédition internationale rapide (5 à 10 jours ouvrés). D.S Hair Beauty détient du stock au Royaume-Uni pour un envoi rapide — parce que nous savons que vos rendez-vous n'attendent pas.",
  supportHeading: "5. Support trade et gestion de compte",
  supportP:
    "Un fournisseur purement transactionnel qui ne vous envoie qu'une facture n'est pas un partenaire. Recherchez des fournisseurs offrant des comptes trade avec conditions net-30, des gestionnaires de compte dédiés et un support réactif via WhatsApp ou e-mail. Chez D.S Hair Beauty, les comptes trade bénéficient d'un envoi prioritaire, de remises sur volume et d'un accès direct à notre équipe.",
  factoryHeading: "Comprendre le fonctionnement des usines chinoises d'extensions capillaires",
  factoryP1:
    "Plus de 90 % des vrais cheveux Remy dans le monde proviennent de Chine et d'Inde, et la majorité de la transformation se fait dans des pôles de fabrication chinois — principalement à Xuchang (province du Henan), connu comme le centre mondial du commerce des cheveux humains. Comprendre le fonctionnement de ces usines vous aide à évaluer les fournisseurs plus efficacement.",
  factoryP2Strong: "La hiérarchie des usines :",
  factoryP2Body:
    " Tous ceux qui se disent « usine » n'en sont pas une. La chaîne d'approvisionnement chinoise des extensions capillaires comporte trois niveaux :",
  factoryTiers: [
    {
      label: "Niveau 1 : collecteurs et transformateurs de cheveux bruts",
      text: "Ces installations collectent les cheveux bruts, les trient par longueur et qualité, les lavent et les désinfectent, puis effectuent l'alignement initial des cuticules. Elles vendent les cheveux en vrac aux fabricants. Moins de 20 installations de cette envergure existent dans le monde.",
    },
    {
      label: "Niveau 2 : fabricants de mèches et de pointes",
      text: "Ces usines transforment les cheveux Remy traités en produits finis d'extension — couture des mèches, application des pointes en kératine, fabrication des panneaux tape, création des nano rings. Elles emploient souvent 50 à 200 personnes. C'est le niveau auquel opèrent la plupart des fournisseurs trade « directs d'usine ».",
    },
    {
      label: "Niveau 3 : sociétés de négoce et distributeurs",
      text: "Ces entreprises achètent aux fabricants de niveau 2, marquent les produits et les vendent aux salons — souvent avec une valeur ajoutée via le stockage au Royaume-Uni, les services d'assortiment de couleurs et la gestion de comptes trade. De nombreux fournisseurs de salons britanniques opèrent principalement à ce niveau.",
    },
  ],
  factoryP3Strong: "Pourquoi cela importe pour votre décision de fournisseur :",
  factoryP3Body:
    " Un fabricant de niveau 2 peut offrir des prix unitaires plus bas mais exige généralement de grandes quantités minimales de commande (MOQ) et offre un support continu limité. Un distributeur de niveau 3 basé au Royaume-Uni ajoute une marge mais absorbe la logistique, le stockage, le risque de change et la charge du contrôle qualité. Pour la plupart des salons britanniques indépendants, le modèle de niveau 3 offre une meilleure valeur globale malgré le coût unitaire plus élevé — parce que le distributeur gère les parties de la chaîne d'approvisionnement coûteuses et risquées pour un salon à gérer seul.",
  moqHeading: "Négociation MOQ : ce que les propriétaires de salon doivent savoir",
  moqP:
    "La quantité minimale de commande (MOQ) est l'un des premiers obstacles que rencontrent les propriétaires de salon face aux fabricants ou aux grands distributeurs. Voici comment la gérer :",
  moqCards: [
    {
      label: "MOQ typique par type de fournisseur",
      text: "Usines chinoises directes : 50 à 200 sets par couleur par commande. Distributeurs basés au Royaume-Uni : souvent pas de MOQ, ou aussi bas que 5 à 10 sets. Fournisseurs mixtes (usine avec entrepôt UK) : généralement 10 à 30 sets.",
    },
    {
      label: "Comment négocier des MOQ plus faibles",
      text: "Commencez par une commande d'échantillons (1 à 3 sets) pour tester la qualité. Une fois satisfait, proposez un engagement échelonné : « Nous commencerons avec 20 sets ce mois-ci, avec un engagement de 50 sets par mois dans les 6 mois si la qualité et la livraison sont constantes. » Les fournisseurs valorisent un volume prévisible plus qu'une grande commande ponctuelle.",
    },
    {
      label: "La stratégie de commande mixte",
      text: "Demandez si la MOQ s'applique par SKU produit ou par total de commande. Un fournisseur avec une MOQ de 30 sets peut accepter 10 tape-in, 10 weft et 10 nano ring dans une seule commande si le total atteint le seuil. Cela permet de stocker de la variété sans sur-engager sur un seul type de produit.",
    },
  ],
  testingHeading: "Méthodes de test qualité pour les propriétaires de salon",
  testingP:
    "Avant de vous engager avec un fournisseur, effectuez ces cinq tests pratiques sur des mèches d'échantillon :",
  tests: [
    {
      label: "Le test de direction des cuticules :",
      text: "Faites glisser votre pouce et votre index le long d'une mèche de la racine à la pointe — elle doit être lisse. De la pointe à la racine — elle doit être légèrement rugueuse. Si elle est identique dans les deux sens, la cuticule a été retirée. Ce test seul identifie les cheveux non-Remy en quelques secondes.",
    },
    {
      label: "Le test de lavage :",
      text: "Lavez et conditionnez une mèche d'échantillon 5 à 6 fois sur une semaine. Observez après séchage. Les cheveux Remy doivent rester lisses, brillants et sans nœuds. Les cheveux non-Remy commenceront à feutrer, perdront leur brillance et seront rêches.",
    },
    {
      label: "Le test de chute :",
      text: "Tenez une mèche par les deux extrémités et secouez-la doucement. Les mèches de haute qualité ne doivent perdre que moins de 3 à 5 cheveux. Si un nuage de cheveux tombe, la construction de la mèche est mauvaise.",
    },
    {
      label: "Le test d'assortiment de couleur :",
      text: "Commandez la même nuance dans deux lots différents (séparés d'au moins 2 semaines). Placez-les côte à côte sous l'éclairage du salon. La constance des couleurs d'un lot à l'autre est la marque d'un fabricant de qualité.",
    },
    {
      label: "Le test de chaleur :",
      text: "Appliquez un fer à lisser à 180 °C sur quelques mèches de l'échantillon. Les cheveux Remy de qualité doivent supporter le coiffage à la chaleur sans brûler, fumer ou développer une odeur plastique. L'une de ces réactions indique un mélange synthétique ou un traitement chimique intense.",
    },
  ],
  visitHeading: "Checklist de visite d'usine (si vous vous approvisionnez en direct)",
  visitP:
    "Si vous envisagez de visiter un fabricant en Chine ou en Inde — ou si vous auditez les installations d'un fournisseur basé au Royaume-Uni — voici ce qu'il faut vérifier sur place :",
  visitItems: [
    {
      item: "Conditions de travail et salaires",
      detail: "L'approvisionnement éthique compte. Des travailleurs bien traités produisent une qualité plus constante. Recherchez des espaces de travail ventilés, des horaires raisonnables et des structures de rémunération équitables.",
    },
    {
      item: "Stockage des cheveux bruts",
      detail: "Un bon stockage signifie des pièces à température contrôlée et ventilées. Les cheveux bruts stockés dans des conditions humides ou chaudes développent odeur et dommages structurels avant transformation.",
    },
    {
      item: "Processus de tri",
      detail: "Observez comment les cheveux sont triés par longueur et qualité. Un tri constant = un produit fini constant. Un tri aléatoire ou négligé indique un mauvais contrôle qualité.",
    },
    {
      item: "Processus d'alignement des cuticules",
      detail: "Pour les cheveux Remy, l'usine doit avoir un processus garantissant que toutes les cuticules sont orientées dans la même direction avant la confection des mèches. Demandez à voir cette étape — c'est le déterminant de qualité le plus important.",
    },
    {
      item: "Qualité de couture des mèches",
      detail: "Inspectez la tension et l'espacement de la ligne de couture. Une couture lâche ou irrégulière provoque des chutes. Les mèches doublement cousues sont plus durables que les mèches simple couture.",
    },
    {
      item: "Zone de traitement des couleurs",
      detail: "Renseignez-vous sur leur système de formulation des couleurs. Les usines professionnelles utilisent des spectrophotomètres et des bibliothèques de nuances entretenues — elles ne jugent pas les couleurs à l'œil nu.",
    },
    {
      item: "Poste de contrôle qualité",
      detail: "Cherchez un poste de contrôle qualité dédié où les produits finis sont inspectés pour les chutes, la précision des couleurs et la constance du poids avant emballage.",
    },
  ],
  redFlagsHeading: "Signaux d'alerte à surveiller",
  redFlagsP:
    "Repérer un mauvais fournisseur avant de vous engager vous évite des mois de frustration. Voici les signes avant-coureurs :",
  redFlags: [
    {
      flag: "Des prix trop bas pour être crédibles",
      detail: "Si un prix de gros semble impossiblement bas, les cheveux sont presque certainement non-Remy ou fortement traités. Vous paierez plus en plaintes de clientes que vous n'en économiserez.",
    },
    {
      flag: "Aucun échantillon physique disponible",
      detail: "Les fournisseurs légitimes envoient volontiers des mèches d'échantillon. Si un fournisseur refuse ou n'envoie que des photos, fuyez.",
    },
    {
      flag: "Descriptions de produits vagues ou copiées",
      detail: "Les fournisseurs de qualité investissent dans des profils de couleur précis et des spécifications techniques. Des descriptions vagues signifient qu'ils ne connaissent pas leur propre produit.",
    },
    {
      flag: "Pas de conditions de compte trade",
      detail: "S'ils ne vendent qu'au prix de détail complet sans remise professionnelle, ils ciblent les consommateurs, pas les salons — ce qui suggère qu'ils ne comprennent pas le marché trade.",
    },
    {
      flag: "Support client lent ou inexistant",
      detail: "Testez leur temps de réponse avant de vous engager. Un fournisseur qui met 3 jours à répondre à une demande sera pire en cas de problème de commande urgent.",
    },
  ],
  questionsHeading: "Questions à poser avant de vous engager",
  questionsP:
    "Envoyez ces questions dans votre première demande. La manière dont un fournisseur répond vous dit tout sur ce que sera la collaboration :",
  questions: [
    "Quel pourcentage de vos cheveux est du Remy ? Pouvez-vous fournir une certification ?",
    "Détenez-vous du stock basé au Royaume-Uni, et quels sont vos délais d'expédition standard ?",
    "Quelle est votre quantité minimale de commande pour les comptes trade ?",
    "Offrez-vous des remises sur volume, et quels sont vos paliers de prix trade ?",
    "Puis-je commander des échantillons avant de passer une commande complète ?",
    "Quelle est votre politique de retours ou de litiges qualité ?",
    "Proposez-vous des conditions de crédit (ex. net-30) pour les comptes trade établis ?",
    "Quelles ressources d'après-vente ou de formation fournissez-vous aux salons ?",
  ],
  ukHeading: "Pourquoi les fournisseurs basés au Royaume-Uni sont souvent le meilleur choix",
  ukP:
    "Il est tentant de s'approvisionner directement auprès de fabricants à l'étranger pour obtenir le prix unitaire le plus bas. Mais pour les salons britanniques, un fournisseur basé au Royaume-Uni apporte souvent plus de valeur :",
  ukPoints: [
    {
      label: "Expédition plus rapide",
      text: "— un stock UK signifie une livraison le lendemain ou sous 2 jours, contre 2 à 4 semaines depuis l'Asie",
    },
    {
      label: "Pas de retards douaniers ni de droits d'importation",
      text: "— qui peuvent ajouter 20 % à votre coût et 3 à 5 jours à la livraison",
    },
    {
      label: "Un assortiment de couleurs fiable",
      text: "— les fournisseurs UK comprennent la palette du marché britannique et peuvent conseiller les nuances que les clientes britanniques veulent réellement",
    },
    {
      label: "Une gestion de compte dans votre fuseau horaire",
      text: "— un message WhatsApp à 9h reçoit une réponse à 9h, pas le jour ouvré suivant",
    },
    {
      label: "Une confiance réglementaire",
      text: "— les fournisseurs basés au Royaume-Uni respectent les normes commerciales britanniques et les réglementations de sécurité des produits",
    },
  ],
  ukP2:
    "D.S Hair Beauty est un fabricant direct d'usine avec 19 ans d'expérience dans l'industrie des extensions capillaires. Nous fournissons aux salons du Royaume-Uni des extensions en vrais cheveux Remy avec expédition express directe d'usine sous 3 à 5 jours, avec comptes trade, sans quantité minimale de commande et avec un support fabricant direct.",
  faqHeading: "Questions fréquentes",
  faqs: [
    {
      q: "Dois-je acheter directement auprès d'une usine chinoise ou utiliser un fournisseur basé au Royaume-Uni ?",
      a: "Pour la plupart des salons britanniques indépendants, un fournisseur basé au Royaume-Uni offre une meilleure valeur globale. Bien que le prix direct d'usine puisse être de 20 à 35 % inférieur par unité, vous absorbez les coûts logistiques, les droits d'importation (20 % de TVA sur les importations), les retards de dédouanement, le risque de change et la responsabilité du contrôle qualité. Si votre volume mensuel d'extensions dépasse 100 sets, l'approvisionnement direct d'usine peut devenir rentable. Sous ce seuil, un fournisseur UK qui détient du stock et gère la chaîne d'approvisionnement offre généralement une meilleure fiabilité moyennant une prime raisonnable.",
    },
    {
      q: "Quels documents dois-je attendre d'un fournisseur trade légitime ?",
      a: "Un fournisseur trade professionnel doit fournir : (1) un formulaire de demande de compte trade, (2) une liste de prix de gros (généralement 30 à 50 % sous le détail), (3) des certificats d'authenticité pour la classification Remy (rapports de test d'usine ou déclarations du fournisseur), (4) des rapports de sécurité des produits cosmétiques pour les produits collés/tapes, et (5) un document de conditions générales couvrant retours, litiges qualité et conditions de paiement. Si un fournisseur ne peut produire aucun de ces documents, procédez avec prudence.",
    },
    {
      q: "Comment tester un nouveau fournisseur avant de m'engager sur une grosse commande ?",
      a: "La méthode de l'« audit de petite commande » : passez une première commande de 3 à 5 sets dans différentes nuances et types. Évaluez : (1) la réactivité de la communication pendant le processus de commande, (2) la précision du délai de livraison, (3) la qualité de l'emballage, (4) la précision des couleurs, (5) la qualité des cheveux en utilisant les cinq tests décrits ci-dessus. Utilisez un set sur une cliente de confiance et observez le résultat sur 4 à 6 semaines. N'augmentez votre volume de commande qu'après cette validation réelle.",
    },
    {
      q: "Quelles conditions de paiement dois-je négocier ?",
      a: "Les nouveaux comptes trade commencent généralement en pro-forma (paiement avant expédition). Après 3 à 6 mois de commandes régulières, négociez des conditions net-30 (paiement sous 30 jours après facturation). Certains fournisseurs offrent net-15 en compromis. Pour les grosses commandes (plus de £1 000), demandez des paiements échelonnés : 50 % d'avance, 50 % à l'expédition. Évitez tout fournisseur exigeant 100 % d'avance via des méthodes non sécurisées comme un virement vers un compte personnel — utilisez une carte de crédit ou PayPal pour les premières commandes, où une protection contre les débits existe.",
    },
    {
      q: "À quelle fréquence dois-je réévaluer ma relation fournisseur ?",
      a: "Au minimum chaque année. Passez en revue : le taux de précision des commandes, la fiabilité des livraisons, la constance de la qualité, la compétitivité des prix et la réactivité. Le marché des extensions capillaires évolue — de nouveaux fabricants arrivent, les taux de change changent, et un fournisseur excellent il y a deux ans peut avoir décliné. Entretenez des relations avec 2 à 3 fournisseurs approuvés plutôt que de dépendre d'une source unique. Cela offre des options de secours et maintient votre fournisseur principal motivé à préserver son niveau de service.",
    },
  ],
  ctaBoxTitle: "Prêt à trouver votre fournisseur trade idéal au Royaume-Uni ?",
  ctaBoxBody:
    "D.S Hair Beauty fournit des extensions en 100 % de vrais cheveux Remy aux salons britanniques aux prix trade. Ouvrez un compte trade gratuit et recevez votre première commande d'échantillons dès aujourd'hui.",
  ctaPrimaryLabel: "Ouvrir un compte trade →",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Voir les produits",
  ctaSecondaryHref: "/collections/tape-in",
  internal1Label: "Article suivant",
  internal1Title: "Grossiste d'extensions capillaires UK : un guide pour propriétaires de salon",
  internal1Href: "/blog/wholesale-hair-extensions-uk",
  internal2Label: "Guide associé",
  internal2Title: "Types d'extensions capillaires expliqués : un guide complet",
  internal2Href: "/blog/hair-extension-types-guide",
  backLabel: "Retour au blog",
}

const ar: HowToChooseHairExtensionSupplierContent = {
  seoTitle: "كيف تختار مورّد وصلات الشعر لصالونك | D.S Hair Beauty",
  seoDescription:
    "اختيار المورّد التجاري الصحيح لوصلات الشعر قد يصنع نجاح صالونك أو يدمّره. تعرّف على العوامل الأساسية لتقييم المورّدين، وتمييز العلامات التحذيرية، وإيجاد شريك موثوق في المملكة المتحدة.",
  navHome: "الرئيسية",
  navBlog: "المدونة",
  navCurrent: "كيف تختار مورّد وصلات الشعر",
  heroBadge: "دليل تجاري",
  heroTitle: "كيف تختار مورّد وصلات الشعر لصالونك",
  heroSubtitle:
    "المورّد الصحيح يعني جودة ثابتة، ومخزوناً موثوقاً، وشريكاً يفهم تجارة الصالونات في المملكة المتحدة. إليك كل ما تحتاج معرفته قبل الالتزام.",
  heroPrimaryLabel: "افتح حساباً تجارياً",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "تصفح المنتجات",
  heroSecondaryHref: "/collections/tape-in",
  whyHeading: "لماذا يهم اختيارك للمورّد",
  whyP1:
    "وصلات الشعر من أكثر خدمات الصالونات ربحاً — لكن فقط عندما تُنفذ بشكل صحيح. الويفت منخفضة الجودة، أو اللون غير المتطابق، أو المورّد الذي لا يستطيع التسليم في الوقت المحدد، لا يكلفك المال فحسب؛ بل يكلفك العميلات. في صناعة قائمة على العلاقات، سمعتك معلقة بالمنتجات التي تستخدمها.",
  whyP2Lead: "ولهذا فإن اختيار ",
  whyP2Strong: "المورّد التجاري الصحيح لوصلات الشعر",
  whyP2Outro:
    " هو أحد أهم القرارات التجارية التي ستتخذها. سواء كنت تدير صالوناً مزدحماً في وسط مانشستر أو استوديو بوتيك في ليدز، فإن المورّد الذي تتعامل معه يحدد طبيعة كل موعد وصلات تحجزه.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "استشارة احترافية في الصالون حول وصلات الشعر",
  keyFactorsHeading: "العوامل الأساسية لتقييم مورّد وصلات الشعر",
  qualityHeading: "1. جودة الشعر: Remy مقابل Virgin مقابل Non-Remy",
  qualityP:
    "تستخدم صناعة وصلات الشعر ثلاث تصنيفات للجودة — وفهمها هو العامل الأهم على الإطلاق في اختيار المورّد:",
  qualityCards: [
    {
      tone: "green",
      label: "شعر Virgin Remy",
      text: "يُجمع من مانحة واحدة. لم يخضع أبداً لمعالجة كيميائية أو صبغ أو تمويج. طبقة القشرة سليمة تماماً ومتناسقة الاتجاه. هذه هي الدرجة الأعلى — تُستخدم في أعمال الألوان المخصصة الفاخرة. توقع دفع 40–60% أكثر من Remy القياسي. العمر الافتراضي: 18–24 شهراً مع العناية.",
    },
    {
      tone: "amber",
      label: "شعر Remy القياسي",
      text: "طبقة القشرة سليمة ومتناسقة الاتجاه. قد يكون خضع لمعالجة خفيفة (صبغ، تكسير). هذا هو المعيار الصناعي للوصلات التجارية الاحترافية. يمثل أكثر من 80% من الشعر التجاري المباع لصالونات المملكة المتحدة. العمر الافتراضي: 12–18 شهراً.",
    },
    {
      tone: "red",
      label: "شعر Non-Remy",
      text: "يُجمع من عدة مانحات — غالباً من الفرش وأرضيات الصالونات أو التبرعات للمعابد. تُزال القشرة بحمام حمضي. يُغلف بالسيليكون ليبدو لامعاً. يزول السيليكون بعد 2–4 غسلات. العمر الافتراضي: 1–3 أشهر قبل التشابك. يوجد في وصلات التجزئة الرخيصة. غير مقبول إطلاقاً للاستخدام الاحترافي في الصالونات.",
    },
  ],
  qualityP2:
    "اسأل مورّدك دائماً أن يحدد: «هل هذا Virgin Remy أم Remy قياسي أم Non-Remy؟» المورّد التجاري الشرعي سيجيب فوراً. المراوغة علامة تحذيرية.",
  colourHeading: "2. ثبات الألوان بين الدفعات",
  colourP1:
    "تعود العميلات كل 6–8 أسابيع لإعادة التركيب أو إعادة الوضع. إذا بدت دفعة الوصلات التالية مختلفة عن السابقة، فستقضي ساعات في مطابقة الألوان — أو الأسوأ، قد تفقد العميلة.",
  colourP2:
    "اطلب من المورّدين عينات من دفعات إنتاج مختلفة قبل الالتزام. المطابقة اللونية الثابتة عبر الطلبات هي علامة على مصنّع جيد، وليس مجرد تاجر.",
  rangeHeading: "3. نطاق الألوان والأطوال",
  rangeP1:
    "عميلاتك متنوعات. يجب أن يقدم المورّد الجيد 30+ درجة لون على الأقل عبر جميع أنواع الوصلات، بما في ذلك الخيارات متعددة الدرجات و balayage. يجب أن تتراوح الأطوال من 14\" إلى 28\".",
  rangeP2:
    "في D.S Hair Beauty، نوفر أكثر من 40 درجة لون عبر Clip-In و Tape-In و K-Tip و Weft و Butterfly Weft و Nano Ring — كلها من شعر Remy بشري بنسبة 100%. إذا كان مورّدك الحالي لا يغطي نطاق ألوانك، فهو يحد من إيرادات صالونك.",
  leadTimeHeading: "4. المدة الزمنية والموثوقية",
  leadTimeP1:
    "تعمل صالونات المملكة المتحدة وفق جداول مواعيد. عندما تحجز عميلة تركيب K-tip كامل الرأس ويخبرك مورّدك أن المخزون متأخر، تواجه خيارين سيئين: إحباط العميلة أو توفير مخزون طارئ من مكان آخر.",
  leadTimeP2:
    "ابحث عن مورّدين يملكون مخزوناً داخل المملكة المتحدة أو شحناً دولياً سريعاً (5–10 أيام عمل). تحتفظ D.S Hair Beauty بمخزون في المملكة المتحدة للتسليم السريع — لأننا نعرف أن مواعيدك لا تنتظر.",
  supportHeading: "5. الدعم التجاري وإدارة الحسابات",
  supportP:
    "المورّد الذي يرسل لك فاتورة فقط ليس شريكاً. ابحث عن مورّدين يقدمون حسابات تجارية بشروط net-30، ومديري حسابات مخصصين، ودعماً سريع الاستجابة عبر WhatsApp أو البريد الإلكتروني. في D.S Hair Beauty، تحصل الحسابات التجارية على تسليم ذي أولوية وخصومات على الكميات ووصولاً مباشراً إلى فريقنا.",
  factoryHeading: "فهم كيفية عمل مصانع وصلات الشعر الصينية",
  factoryP1:
    "أكثر من 90% من شعر Remy البشري في العالم ينشأ من الصين والهند، وتتم معظم المعالجة في مراكز التصنيع الصينية — وبشكل أساسي في شوتشانغ (مقاطعة خنان)، المعروفة بأنها المركز العالمي لتجارة الشعر البشري. فهم كيفية عمل هذه المصانع يساعدك على تقييم المورّدين بشكل أكثر فعالية.",
  factoryP2Strong: "هرمية المصانع:",
  factoryP2Body:
    " ليس كل من يسمي نفسه «مصنعاً» مصنعاً فعلياً. تتكون سلسلة توريد وصلات الشعر الصينية من ثلاث مستويات:",
  factoryTiers: [
    {
      label: "المستوى 1: جامعو ومعالجو الشعر الخام",
      text: "تجمع هذه المنشآت الشعر الخام، وتفرزه حسب الطول والجودة، وتغسله وتنظفه من القمل، وتجري محاذاة القشرة الأولية. تبيع الشعر بالجملة للمصنعين. يوجد أقل من 20 منشأة بهذا الحجم في العالم.",
    },
    {
      label: "المستوى 2: مصنعو الويفت والأطراف",
      text: "تأخذ هذه المصانع شعر Remy المعالج وتنتج منتجات الوصلات النهائية — خياطة الويفت، وتركيب أطراف الكيراتين، وصنع ألواح tape، وإنتاج nano rings. غالباً ما توظف 50–200 عامل. هذا هو المستوى الذي يعمل فيه معظم الموردين التجاريين «المباشرين من المصنع».",
    },
    {
      label: "المستوى 3: شركات التجارة والموزعون",
      text: "تشترى هذه الشركات من مصنّعي المستوى 2، وتضع علاماتها التجارية على المنتجات، وتبيعها للصالونات — غالباً مع قيمة مضافة عبر الاحتفاظ بالمخزون في المملكة المتحدة، وخدمات مطابقة الألوان، وإدارة الحسابات التجارية. يعمل العديد من موردي الصالونات في المملكة المتحدة بشكل أساسي على هذا المستوى.",
    },
  ],
  factoryP3Strong: "لماذا يهم هذا في قرارك بشأن المورّد:",
  factoryP3Body:
    " قد يقدم مصنّع المستوى 2 أسعاراً أقل للوحدة لكنه يتطلب عادةً كميات طلب دنيا كبيرة (MOQs) ويقدم دعماً مستمراً محدوداً. أما الموزع من المستوى 3 في المملكة المتحدة فيضيف هامشاً لكنه يتحمل اللوجستيات والاحتفاظ بالمخزون ومخاطر العملة وعبء مراقبة الجودة. بالنسبة لمعظم الصالونات المستقلة في المملكة المتحدة، يقدم نموذج المستوى 3 قيمة إجمالية أفضل رغم التكلفة الأعلى للوحدة — لأن الموزع يتولى أجزاء سلسلة التوريد المكلفة والخطرة على الصالون لإدارتها بمفرده.",
  moqHeading: "التفاوض على الحد الأدنى لكمية الطلب: ما يحتاج أصحاب الصالونات معرفته",
  moqP:
    "الحد الأدنى لكمية الطلب (MOQ) هو أحد أولى العوائق التي يواجهها أصحاب الصالونات عند التعامل مع المصنعين أو الموزعين الكبار. إليك كيفية التعامل معه:",
  moqCards: [
    {
      label: "الحد الأدنى النموذجي حسب نوع المورّد",
      text: "المصانع الصينية المباشرة: 50–200 مجموعة لكل لون لكل طلب. الموزعون في المملكة المتحدة: غالباً بدون حد أدنى، أو منخفض حتى 5–10 مجموعات. الموردون المختلطون (مصنع مع مستودع في المملكة المتحدة): عادةً 10–30 مجموعة.",
    },
    {
      label: "كيف تتفاوض على حد أدنى أقل",
      text: "ابدأ بطلب عينات (1–3 مجموعات) لاختبار الجودة. بمجرد الرضا، اقترح التزاماً متدرجاً: «سنبدأ بـ 20 مجموعة هذا الشهر، مع التزام بـ 50 مجموعة شهرياً خلال 6 أشهر إذا كانت الجودة والتسليم ثابتين.» يقدّر الموردون الحجم المتوقع أكثر من الطلبات الكبيرة لمرة واحدة.",
    },
    {
      label: "استراتيجية الطلب المختلط",
      text: "اسأل ما إذا كان الحد الأدنى ينطبق على كل SKU منتج أم على إجمالي الطلب. قد يقبل المورّد ذو الحد الأدنى البالغ 30 مجموعة 10 tape-in و10 weft و10 nano ring في طلب واحد إذا بلغ الإجمالي العتبة. هذا يتيح لك تخزين تنوع دون الإفراط في الالتزام بنوع منتج واحد.",
    },
  ],
  testingHeading: "طرق اختبار الجودة لأصحاب الصالونات",
  testingP: "قبل الالتزام بمورّد، نفّذ هذه الاختبارات العملية الخمسة على ويفت العينات:",
  tests: [
    {
      label: "اختبار اتجاه القشرة:",
      text: "مرّر إبهامك وسبابتك على خصلة من الجذر إلى الطرف — يجب أن تشعر بالنعومة. ومن الطرف إلى الجذر — يجب أن تشعر بخشونة طفيفة. إذا كان الإحساس متطابقاً في الاتجاهين، فقد أزيلت القشرة. هذا الاختبار وحده يميز شعر Non-Remy في ثوانٍ.",
    },
    {
      label: "اختبار الغسيل:",
      text: "اغسل وبلّسم ويفت عينة 5–6 مرات على مدى أسبوع. لاحظ النتيجة بعد التجفيف. يجب أن يبقى شعر Remy ناعماً ولامعاً وخالياً من التشابك. أما شعر Non-Remy فسيبدأ بالتشابك ويفقد لمعانه ويصبح خشناً.",
    },
    {
      label: "اختبار التساقط:",
      text: "أمسك الويفت من كلا الطرفين وهزّها بلطف. يجب أن تفقد الويفت عالية الجودة أقل من 3–5 خصلات. إذا تساقطت غيمة من الشعر، فإن بناء الويفت ضعيف.",
    },
    {
      label: "اختبار مطابقة اللون:",
      text: "اطلب نفس الدرجة من دفعتين مختلفتين (بفاصل أسبوعين على الأقل). ضعهما جنباً إلى جنب تحت إضاءة الصالون. ثبات اللون بين الدفعات هو السمة المميزة لمصنّع عالي الجودة.",
    },
    {
      label: "اختبار الحرارة:",
      text: "مرّر مكواة تمليس على 180°م على بضع خصلات من العينة. يجب أن يتحمل شعر Remy عالي الجودة التصفيف الحراري دون احتراق أو دخان أو رائحة شبيهة بالبلاستيك. أي من هذه التفاعلات يدل على خلط صناعي أو معالجة كيميائية كثيفة.",
    },
  ],
  visitHeading: "قائمة تفقد المصنع (إذا كنت تشتري مباشرة)",
  visitP:
    "إذا كنت تفكر في زيارة مصنع في الصين أو الهند — أو إذا كنت تدقق منشأة مورّد مقيم في المملكة المتحدة — فإليك ما يجب التحقق منه شخصياً:",
  visitItems: [
    {
      item: "ظروف العمال وأجورهم",
      detail: "المصادر الأخلاقية مهمة. العمال الذين يحصلون على معاملة جيدة ينتجون جودة أكثر اتساقاً. ابحث عن مساحات عمل جيدة التهوية وساعات عمل معقولة وهياكل تعويض عادلة.",
    },
    {
      item: "تخزين الشعر الخام",
      detail: "التخزين السليم يعني غرفاً مكيفة الحرارة وجيدة التهوية. الشعر الخام المخزن في ظروف رطبة أو حارة يكتسب رائحة وأضراراً بنيوية قبل المعالجة.",
    },
    {
      item: "عملية الفرز",
      detail: "شاهد كيف يُفرز الشعر حسب الطول والجودة. الفرز المتسق = منتج نهائي متسق. الفرز العشوائي أو المهمل يدل على ضعف مراقبة الجودة.",
    },
    {
      item: "عملية محاذاة القشرة",
      detail: "بالنسبة لشعر Remy، يجب أن يكون لدى المصنع عملية تضمن أن جميع القشور تتجه في الاتجاه نفسه قبل صنع الويفت. اطلب رؤية هذه الخطوة — فهي أهم عامل محدد للجودة على الإطلاق.",
    },
    {
      item: "جودة خياطة الويفت",
      detail: "افحص شدّ وتباعد خط الخياطة. الخياطة المرتخية أو غير المتساوية تسبب التساقط. الويفت المخيطة بغرزتين أكثر متانة من المخيطة بغرزة واحدة.",
    },
    {
      item: "منطقة معالجة الألوان",
      detail: "اسأل عن نظام تركيبة الألوان لديهم. تستخدم المصانع الاحترافية أجهزة قياس الطيف الضوئي ومكتبات درجات مُصانة — فهي لا تخمّن الألوان بالعين.",
    },
    {
      item: "نقطة مراقبة الجودة",
      detail: "ابحث عن محطة QC مخصصة تُفحص فيها المنتجات النهائية للتساقط ودقة الألوان وثبات الوزن قبل التغليف.",
    },
  ],
  redFlagsHeading: "علامات تحذيرية يجب الانتباه إليها",
  redFlagsP:
    "تمييز المورّد السيئ قبل الالتزام يوفر لك شهوراً من الإحباط. إليك العلامات التحذيرية:",
  redFlags: [
    {
      flag: "أسعار منخفضة بشكل لا يصدق",
      detail: "إذا بدا سعر الجملة منخفضاً بشكل مستحيل، فالشعر شبه مؤكد أنه Non-Remy أو معالج بكثافة. ستدفع أكثر عبر شكاوى العميلات مما توفر.",
    },
    {
      flag: "لا تتوفر عينات مادية",
      detail: "يسعد الموردون الشرعيون بإرسال ويفت عينات. إذا رفض المورّد أو أرسل صوراً فقط، فابتعد.",
    },
    {
      flag: "أوصاف منتجات غامضة أو منسوخة بكثافة",
      detail: "يستثمر الموردون ذوو الجودة في ملفات ألوان دقيقة ومواصفات تقنية. الأوصاف الغامضة تعني أنهم لا يعرفون منتجهم.",
    },
    {
      flag: "لا شروط حساب تجاري",
      detail: "إذا كانوا يبيعون بسعر التجزئة الكامل فقط دون أي خصم احترافي، فإنهم يستهدفون المستهلكين لا الصالونات — مما يشير إلى أنهم لا يفهمون السوق التجاري.",
    },
    {
      flag: "دعم عملاء بطيء أو غير موجود",
      detail: "اختبر زمن استجابتهم قبل الالتزام. المورّد الذي يستغرق 3 أيام للرد على استفسار سيكون أسوأ عند حدوث مشكلة طلب عاجلة.",
    },
  ],
  questionsHeading: "أسئلة تطرحها قبل الالتزام",
  questionsP:
    "أرسل هذه الأسئلة في استفسارك الأولي. طريقة استجابة المورّد تخبرك بكل شيء عن طبيعة التعامل معه:",
  questions: [
    "ما نسبة شعرك من نوع Remy؟ هل يمكنك تقديم شهادة؟",
    "هل تحتفظ بمخزون داخل المملكة المتحدة، وما أوقات الشحن القياسية لديكم؟",
    "ما الحد الأدنى لكمية الطلب لديكم للحسابات التجارية؟",
    "هل تقدمون خصومات على الكميات، وما مستويات الأسعار التجارية لديكم؟",
    "هل يمكنني طلب عينات قبل تقديم طلب كامل؟",
    "ما سياسة الإرجاع أو تسوية نزاعات الجودة لديكم؟",
    "هل تقدمون شروط ائتمان (مثل net-30) للحسابات التجارية القائمة؟",
    "ما موارد العناية اللاحقة أو التدريب التي تقدمونها للصالونات؟",
  ],
  ukHeading: "لماذا الموردون المقيمون في المملكة المتحدة هم غالباً الخيار الأفضل",
  ukP:
    "من المغري الشراء مباشرة من المصنعين في الخارج للحصول على أقل سعر للوحدة. لكن بالنسبة لصالونات المملكة المتحدة، غالباً ما يوفر المورّد المقيم في المملكة المتحدة قيمة أكبر:",
  ukPoints: [
    {
      label: "شحن أسرع",
      text: "— المخزون في المملكة المتحدة يعني تسليماً خلال يوم أو يومين مقابل 2–4 أسابيع من آسيا",
    },
    {
      label: "لا تأخيرات جمركية أو رسوم استيراد",
      text: "— التي قد تضيف 20% إلى تكلفتك و3–5 أيام إلى التسليم",
    },
    {
      label: "مطابقة ألوان تثق بها",
      text: "— الموردون في المملكة المتحدة يفهمون لوحة ألوان السوق البريطانية ويمكنهم النصح بالدرجات التي تريدها العميلات البريطانيات فعلاً",
    },
    {
      label: "إدارة حسابات في منطقتك الزمنية",
      text: "— رسالة WhatsApp في الساعة 9 صباحاً تحصل على رد في الساعة 9 صباحاً، لا في يوم العمل التالي",
    },
    {
      label: "ثقة تنظيمية",
      text: "— الموردون المقيمون في المملكة المتحدة يلتزمون بمعايير التجارة البريطانية ولوائح سلامة المنتجات",
    },
  ],
  ukP2:
    "D.S Hair Beauty مصنّع مباشر من المصنع بخبرة 19 عاماً في صناعة وصلات الشعر. نوفر للصالونات في جميع أنحاء المملكة المتحدة وصلات من شعر Remy البشري مع شحن سريع مباشر من المصنع خلال 3–5 أيام، مع حسابات تجارية وبدون حد أدنى لكمية الطلب ودعم مباشر من المصنع.",
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    {
      q: "هل أشتري مباشرة من مصنع صيني أم أستخدم مورّداً مقيماً في المملكة المتحدة؟",
      a: "بالنسبة لمعظم الصالونات المستقلة في المملكة المتحدة، يوفر المورّد المقيم في المملكة المتحدة قيمة إجمالية أفضل. بينما قد يكون سعر المصنع المباشر أقل بنسبة 20–35% للوحدة، فإنك تتحمل تكاليف اللوجستيات ورسوم الاستيراد (20% ضريبة على الواردات) وتأخيرات التخليص الجمركي ومخاطر تقلب العملة ومسؤولية مراقبة الجودة. إذا تجاوز حجم وصلاتك الشهري 100 مجموعة، فقد يصبح الشراء المباشر من المصنع مجدياً من حيث التكلفة. دون هذه العتبة، يوفر المورّد البريطاني الذي يحتفظ بالمخزون ويدير سلسلة التوريد عادةً موثوقية أفضل بعلاوة سعرية معقولة.",
    },
    {
      q: "ما المستندات التي يجب أن أتوقعها من مورّد تجاري شرعي؟",
      a: "يجب أن يقدم المورّد التجاري المحترف: (1) نموذج طلب حساب تجاري، (2) قائمة أسعار الجملة (عادةً أقل من التجزئة بنسبة 30–50%)، (3) شهادات أصالة لتصنيف Remy (تقارير اختبار المصنع أو إقرارات المورّد)، (4) تقارير سلامة مستحضرات التجميل للمنتجات الملصقة/المشبكة، و(5) وثيقة شروط وأحكام تغطي الإرجاع ونزاعات الجودة وشروط الدفع. إذا لم يستطع المورّد تقديم أي من هذه، فتعامل بحذر.",
    },
    {
      q: "كيف أختبر مورّداً جديداً قبل الالتزام بطلب كبير؟",
      a: "طريقة «تدقيق الطلب الصغير»: قدّم طلباً أولياً من 3–5 مجموعات بدرجات وأنواع مختلفة. قيّم: (1) استجابة التواصل أثناء عملية الطلب، (2) دقة الإطار الزمني للتسليم، (3) جودة التغليف، (4) دقة الألوان، (5) جودة الشعر باستخدام الاختبارات الخمسة المذكورة أعلاه. استخدم مجموعة واحدة على عميلة موثوقة وراقب النتيجة على مدى 4–6 أسابيع. لا توسّع حجم طلباتك إلا بعد هذا التحقق الواقعي.",
    },
    {
      q: "ما شروط الدفع التي يجب أن أتفاوض عليها؟",
      a: "تبدأ الحسابات التجارية الجديدة عادةً بنظام pro-forma (الدفع قبل الشحن). بعد 3–6 أشهر من الطلبات المنتظمة، تفاوض على شروط net-30 (استحقاق الدفع بعد 30 يوماً من الفاتورة). يقدم بعض الموردين net-15 كحل وسط. للطلبات الكبيرة (أكثر من £1,000)، اسأل عن دفعات مرحلية: 50% مقدماً و50% عند الشحن. تجنب أي مورّد يطالب بدفع 100% مقدماً عبر وسائل غير آمنة مثل التحويل المصرفي إلى حساب شخصي — استخدم بطاقة الائتمان أو PayPal للطلبات الأولى حيث توجد حماية من رد المدفوعات.",
    },
    {
      q: "كم مرة يجب أن أعيد تقييم علاقتي بالمورّد؟",
      a: "سنوياً على الأقل. راجع: معدل دقة الطلبات، وموثوقية التسليم، وثبات الجودة، والقدرة التنافسية للأسعار، وسرعة الاستجابة. سوق وصلات الشعر متغير — يدخل مصنعون جدد، وتتغير أسعار العملات، والمورّد الذي كان ممتازاً قبل عامين ربما تراجع. حافظ على علاقات مع 2–3 مورّدين معتمدين بدلاً من الاعتماد على مصدر واحد. هذا يوفر خيارات احتياطية ويبقي مورّدك الأساسي محفزاً للحفاظ على مستويات الخدمة.",
    },
  ],
  ctaBoxTitle: "هل أنت مستعد للعثور على مورّدك التجاري المثالي في المملكة المتحدة؟",
  ctaBoxBody:
    "توفر D.S Hair Beauty وصلات من شعر Remy البشري بنسبة 100% للصالونات في المملكة المتحدة بأسعار تجارية. افتح حساباً تجارياً مجانياً واحصل على أول طلب عينات اليوم.",
  ctaPrimaryLabel: "افتح حساباً تجارياً ←",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "تصفح المنتجات",
  ctaSecondaryHref: "/collections/tape-in",
  internal1Label: "المقال التالي",
  internal1Title: "جملة وصلات الشعر في المملكة المتحدة: دليل صاحب الصالون",
  internal1Href: "/blog/wholesale-hair-extensions-uk",
  internal2Label: "دليل ذو صلة",
  internal2Title: "أنواع وصلات الشعر موضحة: دليل شامل",
  internal2Href: "/blog/hair-extension-types-guide",
  backLabel: "العودة إلى المدونة",
}

const sv: HowToChooseHairExtensionSupplierContent = {
  seoTitle: "Så väljer du en leverantör av hårförlängningar till din salong | D.S Hair Beauty",
  seoDescription:
    "Att välja rätt grossistleverantör av hårförlängningar kan avgöra din salongs framgång. Lär dig de viktigaste faktorerna för att utvärdera leverantörer, upptäcka varningssignaler och hitta en pålitlig partner i Storbritannien.",
  navHome: "Hem",
  navBlog: "Blogg",
  navCurrent: "Så väljer du en leverantör av hårförlängningar",
  heroBadge: "Grossistguide",
  heroTitle: "Så väljer du en leverantör av hårförlängningar till din salong",
  heroSubtitle:
    "Rätt leverantör innebär jämn kvalitet, pålitligt lager och en partner som förstår salongsbranschen i Storbritannien. Här är allt du behöver veta innan du bestämmer dig.",
  heroPrimaryLabel: "Öppna grossistkonto",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "Bläddra bland produkter",
  heroSecondaryHref: "/collections/tape-in",
  whyHeading: "Varför ditt val av leverantör spelar roll",
  whyP1:
    "Hårförlängningar är en av de mest lönsamma salongstjänsterna — men bara när de görs rätt. En weft av dålig kvalitet, en felmatchad färg eller en leverantör som inte levererar i tid kostar dig inte bara pengar; det kostar dig kunder. I en relationsdriven bransch vilar ditt rykte på de produkter du använder.",
  whyP2Lead: "Därför är valet av rätt ",
  whyP2Strong: "grossistleverantör av hårförlängningar",
  whyP2Outro:
    " ett av de viktigaste affärsbeslut du kommer att fatta. Oavsett om du driver en hektisk salong i centrala Manchester eller en boutique-studio i Leeds, formar leverantören du samarbetar med varje förlängningsbokning du tar emot.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "Professionell salongskonsultation för hårförlängningar",
  keyFactorsHeading: "Viktiga faktorer för att utvärdera en leverantör av hårförlängningar",
  qualityHeading: "1. Hårkvalitet: Remy vs. Virgin vs. Non-Remy",
  qualityP:
    "Hårförlängningsbranschen använder tre kvalitetsklassificeringar — och att förstå dem är den enskilt viktigaste faktorn vid leverantörsval:",
  qualityCards: [
    {
      tone: "green",
      label: "Virgin Remy-hår",
      text: "Insamlat från en enda donator. Aldrig kemiskt behandlat, färgat eller permanentat. Nagelbanden helt intakta och riktade. Detta är den högsta kvalitetsklassen — används för premium arbete med specialfärg. Räkna med att betala 40–60 % mer än standard Remy. Livslängd: 18–24 månader med skötsel.",
    },
    {
      tone: "amber",
      label: "Standard Remy-hår",
      text: "Nagelbanden intakta och riktade. Kan ha genomgått skonsam behandling (färgning, texturering). Detta är branschstandarden för professionella grossistförlängningar. Representerar 80 %+ av grossisthåret som säljs till salonger i Storbritannien. Livslängd: 12–18 månader.",
    },
    {
      tone: "red",
      label: "Non-Remy-hår",
      text: "Insamlat från flera donatorer — ofta från borstar, salongsgolv eller tempelgåvor. Nagelbanden borttagna genom syrabad. Belagt med silikon för att se glansigt ut. Silikonet tvättas ur efter 2–4 schamponeringar. Livslängd: 1–3 månader innan det tovar sig. Finns i billiga detaljhandelsförlängningar. Aldrig acceptabelt för professionell salongsanvändning.",
    },
  ],
  qualityP2:
    "Fråga alltid din leverantör: ”Är detta Virgin Remy, standard Remy eller non-Remy?” En seriös grossistleverantör svarar direkt. Undanflykter är en varningssignal.",
  colourHeading: "2. Färgkonsistens mellan batcher",
  colourP1:
    "Kunder återvänder var 6–8:e vecka för omplacering eller ny applikation. Om din nästa batch förlängningar ser annorlunda ut än den förra kommer du att spendera timmar på färgmatchning — eller värre, förlora kunden.",
  colourP2:
    "Be leverantörer om prover från olika produktionsbatcher innan du bestämmer dig. Konsekvent färgmatchning mellan ordrar är ett tecken på en kvalitetstillverkare, inte bara en återförsäljare.",
  rangeHeading: "3. Utbud av färger och längder",
  rangeP1:
    "Dina kunder är olika. En bra leverantör bör erbjuda minst 30+ nyanser inom alla förlängningstyper, inklusive flertoniga och balayage-alternativ. Längderna bör sträcka sig från 14\" till 28\".",
  rangeP2:
    "På D.S Hair Beauty lagerhåller vi 40+ nyanser inom Clip-In, Tape-In, K-Tip, Weft, Butterfly Weft och Nano Ring — allt i 100 % äkta Remy-hår. Om din nuvarande leverantör inte täcker ditt färgurval begränsar de din salongs intäkter.",
  leadTimeHeading: "4. Ledtid och tillförlitlighet",
  leadTimeP1:
    "Salonger i Storbritannien arbetar efter bokningsscheman. När en kund bokar en fullständig K-tip-applikation och din leverantör meddelar att lagret är försenat står du inför två dåliga alternativ: göra kunden besviken eller skaffa akutlager någon annanstans.",
  leadTimeP2:
    "Leta efter leverantörer med lager i Storbritannien eller snabb internationell frakt (5–10 arbetsdagar). D.S Hair Beauty levererar per express 3–5 dagar direkt från fabriken — eftersom vi vet att dina bokningar inte väntar.",
  supportHeading: "5. Grossistsupport och kontohantering",
  supportP:
    "En transaktionsinriktad leverantör som bara skickar en faktura är ingen partner. Leta efter leverantörer som erbjuder grossistkonton med net-30-villkor, dedikerade kontohanterare och snabb support via WhatsApp eller e-post. Hos D.S Hair Beauty får grossistkonton prioriterad avsändning, volymrabatter och direkt tillgång till vårt team.",
  factoryHeading: "Förstå hur kinesiska hårförlängningsfabriker fungerar",
  factoryP1:
    "Över 90 % av världens äkta Remy-hår kommer från Kina och Indien, och merparten av förädlingen sker i kinesiska tillverkningscentrum — främst i Xuchang (Henan-provinsen), känt som världens centrum för handel med äkta hår. Att förstå hur dessa fabriker fungerar hjälper dig att utvärdera leverantörer mer effektivt.",
  factoryP2Strong: "Fabrikshierarkin:",
  factoryP2Body:
    " Inte alla som kallar sig ”fabrik” är en. Den kinesiska leverantörskedjan för hårförlängningar har tre nivåer:",
  factoryTiers: [
    {
      label: "Nivå 1: Samlare och förädlare av råhår",
      text: "Dessa anläggningar samlar in råhår, sorterar det efter längd och kvalitet, tvättar och avlusar det och utför den första nagelbandsinriktningen. De säljer hår i bulk till tillverkare. Färre än 20 anläggningar i denna skala finns globalt.",
    },
    {
      label: "Nivå 2: Weft- och spetstillverkare",
      text: "Dessa fabriker tar förädlat Remy-hår och producerar de färdiga förlängningsprodukterna — syr wefts, applicerar keratinspetsar, gör tape-paneler, skapar nano rings. De sysselsätter ofta 50–200 arbetare. Det är på denna nivå de flesta ”fabriksdirekta” grossistleverantörer verkar.",
    },
    {
      label: "Nivå 3: Handelsbolag och distributörer",
      text: "Dessa företag köper från nivå 2-tillverkare, varumärkesmärker produkterna och säljer till salonger — ofta med mervärde genom lagerhållning i Storbritannien, färgmatchningstjänster och grossistkontohantering. Många brittiska salongsleverantörer verkar främst på denna nivå.",
    },
  ],
  factoryP3Strong: "Varför detta är viktigt för ditt leverantörsval:",
  factoryP3Body:
    " En nivå 2-tillverkare kan erbjuda lägre styckpriser men kräver vanligtvis stora minimiorderkvantiteter (MOQ) och ger begränsat löpande stöd. En nivå 3-distributör i Storbritannien lägger till en marginal men tar på sig logistik, lagerhållning, valutarisk och kvalitetskontrollbördan. För de flesta oberoende brittiska salonger ger nivå 3-modellen bättre totalvärde trots den högre styckkostnaden — eftersom distributören hanterar de delar av leverantörskedjan som är dyra och riskfyllda för en salong att sköta ensam.",
  moqHeading: "MOQ-förhandling: vad salongsägare behöver veta",
  moqP:
    "Minimiorderkvantitet (MOQ) är ett av de första hindren salongsägare möter när de vänder sig till tillverkare eller stora distributörer. Så här navigerar du det:",
  moqCards: [
    {
      label: "Typisk MOQ efter leverantörstyp",
      text: "Direkta kinesiska fabriker: 50–200 set per färg per order. Distributörer i Storbritannien: ofta ingen MOQ, eller så lågt som 5–10 set. Blandade leverantörer (fabrik med UK-lager): vanligtvis 10–30 set.",
    },
    {
      label: "Så förhandlar du fram lägre MOQ",
      text: "Börja med en provorder (1–3 set) för att testa kvaliteten. När du är nöjd, föreslå ett stegvist åtagande: ”Vi börjar med 20 set denna månad, med ett åtagande om 50 set per månad inom 6 månader om kvalitet och leverans är jämna.” Leverantörer värderar förutsägbar volym högre än engångsstora ordrar.",
    },
    {
      label: "Strategin med blandad order",
      text: "Fråga om MOQ gäller per produkt-SKU eller per ordertotal. En leverantör med en MOQ på 30 set kan acceptera 10 tape-in, 10 weft och 10 nano ring i en enda order om totalen når tröskeln. Det gör att du kan lagra variation utan att överengagera dig i en enda produkttyp.",
    },
  ],
  testingHeading: "Kvalitetstestmetoder för salongsägare",
  testingP:
    "Innan du bestämmer dig för en leverantör, utför dessa fem praktiska tester på provwefts:",
  tests: [
    {
      label: "Nagelbandsriktningstestet:",
      text: "För tummen och pekfingret längs en strå från rot till topp — den ska kännas slät. Från topp till rot — den ska kännas något sträv. Om den känns likadan i båda riktningarna har nagelbandet tagits bort. Detta enda test identifierar non-Remy-hår på några sekunder.",
    },
    {
      label: "Tvättestet:",
      text: "Schamponera och balsamera en provweft 5–6 gånger under en vecka. Observera efter torkning. Remy-hår ska förbli slätt, glansigt och tovfritt. Non-Remy-hår börjar tova sig, förlorar glans och känns strävt.",
    },
    {
      label: "Avfallstestet:",
      text: "Håll en weft i båda ändar och skaka försiktigt. Wefts av hög kvalitet ska tappa färre än 3–5 strån. Om ett moln av hår ramlar av är weftens konstruktion dålig.",
    },
    {
      label: "Färgmatchingstestet:",
      text: "Beställ samma nyans från två olika batcher (med minst 2 veckors mellanrum). Placera dem sida vid sida i salongsbelysning. Färgkonsistens mellan batcher är kännetecknet för en kvalitetstillverkare.",
    },
    {
      label: "Värmetestet:",
      text: "Applicera ett plattjärn vid 180 °C på några strån av provet. Kvalitets-Remy-hår ska tåla värmestyling utan att brännas, ryka eller utveckla en plastliknande lukt. Någon av dessa reaktioner tyder på syntetisk inblandning eller kraftig kemisk behandling.",
    },
  ],
  visitHeading: "Checklista för fabriksbesök (om du köper direkt)",
  visitP:
    "Om du överväger att besöka en tillverkare i Kina eller Indien — eller om du granskar en brittisk leverantörs anläggning — här är vad du bör verifiera på plats:",
  visitItems: [
    {
      item: "Arbetsförhållanden och löner",
      detail: "Etisk inköp spelar roll. Välbehandlade arbetare producerar jämnare kvalitet. Leta efter ventilerade arbetsytor, rimliga arbetstider och rättvisa lönesystem.",
    },
    {
      item: "Förvaring av råhår",
      detail: "Korrekt förvaring innebär temperaturkontrollerade, ventilerade rum. Råhår som förvaras i fuktiga eller varma förhållanden utvecklar lukt och strukturella skador innan förädling.",
    },
    {
      item: "Sorteringsprocess",
      detail: "Observera hur hår sorteras efter längd och kvalitet. Konsekvent sortering = konsekvent slutprodukt. Slumpmässig eller slarvig sortering indikerar dålig kvalitetskontroll.",
    },
    {
      item: "Nagelbandsinriktningsprocess",
      detail: "För Remy-hår måste fabriken ha en process som säkerställer att alla nagelband pekar åt samma håll före weftning. Be att få se detta steg — det är den enskilt viktigaste kvalitetsfaktorn.",
    },
    {
      item: "Weftsömnadskvalitet",
      detail: "Inspektera spänningen och avståndet i sömnaden. Lös eller ojämn söm orsakar avfall. Dubbelsydda wefts är mer hållbara än enkelsydda.",
    },
    {
      item: "Färgbearbetningsområde",
      detail: "Fråga om deras färgformuleringssystem. Professionella fabriker använder spektrofotometrar och underhållna nyansbibliotek — de uppskattar inte färger med ögonmått.",
    },
    {
      item: "Kvalitetskontrollstation",
      detail: "Leta efter en dedikerad QC-station där färdiga produkter inspekteras för avfall, färgnoggrannhet och viktkonsistens före packning.",
    },
  ],
  redFlagsHeading: "Varningssignaler att hålla utkik efter",
  redFlagsP:
    "Att upptäcka en dålig leverantör innan du bestämmer dig sparar månader av frustration. Här är varningstecknen:",
  redFlags: [
    {
      flag: "Priser som är för låga för att vara trovärdiga",
      detail: "Om ett grossistpris verkar omöjligt lågt är håret nästan säkert non-Remy eller kraftigt bearbetat. Du betalar mer i kundklagomål än du sparar.",
    },
    {
      flag: "Inga fysiska prover tillgängliga",
      detail: "Seriösa leverantörer skickar gärna provwefts. Om en leverantör vägrar eller bara skickar bilder, gå vidare.",
    },
    {
      flag: "Vaga eller copy-tunga produktbeskrivningar",
      detail: "Kvalitetsleverantörer investerar i korrekta färgprofiler och tekniska specifikationer. Vaga beskrivningar innebär att de inte känner till sin egen produkt.",
    },
    {
      flag: "Inga grossistkontovillkor",
      detail: "Om de bara säljer till fullt detaljpris utan någon yrkesrabatt riktar de sig till konsumenter, inte salonger — vilket tyder på att de inte förstår grossistmarknaden.",
    },
    {
      flag: "Långsam eller obefintlig kundsupport",
      detail: "Testa deras svarstid innan du bestämmer dig. En leverantör som tar 3 dagar på sig att svara på en förfrågan blir värre när du har ett akut orderproblem.",
    },
  ],
  questionsHeading: "Frågor att ställa innan du bestämmer dig",
  questionsP:
    "Skicka dessa frågor i din första förfrågan. Hur en leverantör svarar berättar allt om hur det blir att arbeta med dem:",
  questions: [
    "Hur stor andel av ert hår är Remy? Kan ni tillhandahålla certifiering?",
    "Har ni lager i Storbritannien, och vilka är era standardavsändningstider?",
    "Vilken är er minimiorderkvantitet för grossistkonton?",
    "Erbjuder ni volymrabatter, och vilka är era grossistprisnivåer?",
    "Kan jag beställa prover innan jag lägger en fullständig order?",
    "Vilken är er policy för returer eller kvalitetstvister?",
    "Erbjuder ni kreditvillkor (t.ex. net-30) för etablerade grossistkonton?",
    "Vilka eftervårds- eller utbildningsresurser tillhandahåller ni salonger?",
  ],
  ukHeading: "Varför leverantörer i Storbritannien ofta är det bättre valet",
  ukP:
    "Det är frestande att köpa direkt från tillverkare utomlands för det lägsta styckpriset. Men för salonger i Storbritannien ger ofta en brittisk leverantör mer värde:",
  ukPoints: [
    {
      label: "Snabbare avsändning",
      text: "— UK-lager innebär leverans nästa dag eller inom 2 dagar jämfört med 2–4 veckor från Asien",
    },
    {
      label: "Inga tullförseningar eller importtullar",
      text: "— som kan lägga till 20 % på din kostnad och 3–5 dagar på leveransen",
    },
    {
      label: "Färgmatchning du kan lita på",
      text: "— brittiska leverantörer förstår den brittiska marknadens palett och kan råda om nyanser som brittiska kunder faktiskt vill ha",
    },
    {
      label: "Kontohantering i din tidszon",
      text: "— ett WhatsApp-meddelande klockan 9 får svar klockan 9, inte nästa arbetsdag",
    },
    {
      label: "Regulatorisk trygghet",
      text: "— leverantörer i Storbritannien följer brittiska handelsstandarder och produktsäkerhetsregler",
    },
  ],
  ukP2:
    "D.S Hair Beauty är en fabriksdirekt tillverkare med 19 års erfarenhet i hårförlängningsbranschen. Vi levererar förlängningar i äkta Remy-hår till salonger i hela Storbritannien med fabriksdirekt expresstransport på 3–5 dagar, med grossistkonton, utan minimiorderkvantiteter och med direkt tillverkarsupport.",
  faqHeading: "Vanliga frågor",
  faqs: [
    {
      q: "Ska jag köpa direkt från en kinesisk fabrik eller använda en brittisk leverantör?",
      a: "För de flesta oberoende brittiska salonger ger en brittisk leverantör bättre totalvärde. Även om fabriksdirekta priser kan vara 20–35 % lägre per enhet, tar du på dig logistikkostnader, importtullar (20 % moms på import), tullklareringstider, valutarisk och ansvar för kvalitetskontroll. Om din månatliga förlängningsvolym överstiger 100 set kan fabriksdirekt inköp bli kostnadseffektivt. Under den tröskeln ger en brittisk leverantör som håller lager och hanterar leverantörskedjan vanligtvis bättre tillförlitlighet till en rimlig premie.",
    },
    {
      q: "Vilka dokument bör jag förvänta mig av en seriös grossistleverantör?",
      a: "En professionell grossistleverantör bör tillhandahålla: (1) ett ansökningsformulär för grossistkonto, (2) en grossistprislista (vanligtvis 30–50 % under detaljpris), (3) äkthetsintyg för Remy-klassificering (brukstestrapporter eller leverantörsdeklarationer), (4) kosmetiska produktsäkerhetsrapporter för bonded/tape-produkter och (5) ett villkorsdokument som täcker returer, kvalitetstvister och betalningsvillkor. Om en leverantör inte kan producera något av detta, gå försiktigt fram.",
    },
    {
      q: "Hur testar jag en ny leverantör innan jag åtar mig en stor order?",
      a: "Metoden ”liten orderrevision”: lägg en första order på 3–5 set i olika nyanser och typer. Utvärdera: (1) kommunikationssvar under beställningsprocessen, (2) leveranstidens noggrannhet, (3) förpackningskvalitet, (4) färgnoggrannhet, (5) hårkvalitet med hjälp av de fem tester som beskrivs ovan. Använd ett set på en betrodd kund och följ resultatet över 4–6 veckor. Skala bara upp din ordervolym efter denna verklighetsbaserade validering.",
    },
    {
      q: "Vilka betalningsvillkor bör jag förhandla om?",
      a: "Nya grossistkonton börjar vanligtvis med pro-forma (betalning före avsändning). Efter 3–6 månaders konsekventa ordrar, förhandla om net-30-villkor (betalning inom 30 dagar efter faktura). Vissa leverantörer erbjuder net-15 som kompromiss. För stora ordrar (över £1 000), fråga om delbetalningar: 50 % i förskott, 50 % vid avsändning. Undvik leverantörer som kräver 100 % i förskott via osäkra metoder som banköverföring till ett privat konto — använd kreditkort eller PayPal för första ordrar där återföringsskydd finns.",
    },
    {
      q: "Hur ofta bör jag omvärdera min leverantörsrelation?",
      a: "Årligen, som minimum. Gå igenom: ordernoggrannhet, leveranssäkerhet, kvalitetskonsistens, priskonkurrenskraft och lyhördhet. Marknaden för hårförlängningar förändras — nya tillverkare kommer in, valutakurser ändras, och en leverantör som var utmärkt för två år sedan kan ha försämrats. Upprätthåll relationer med 2–3 godkända leverantörer istället för att förlita dig på en enda källa. Det ger reservalternativ och håller din primära leverantör motiverad att upprätthålla servicenivån.",
    },
  ],
  ctaBoxTitle: "Redo att hitta din idealiska brittiska grossistleverantör?",
  ctaBoxBody:
    "D.S Hair Beauty levererar förlängningar i 100 % äkta Remy-hår till brittiska salonger till grossistpriser. Öppna ett kostnadsfritt grossistkonto och få din första provorder redan idag.",
  ctaPrimaryLabel: "Öppna ett grossistkonto →",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Bläddra bland produkter",
  ctaSecondaryHref: "/collections/tape-in",
  internal1Label: "Nästa artikel",
  internal1Title: "Grossist hårförlängningar Storbritannien: en guide för salongsägare",
  internal1Href: "/blog/wholesale-hair-extensions-uk",
  internal2Label: "Relaterad guide",
  internal2Title: "Typer av hårförlängningar förklarade: en komplett guide",
  internal2Href: "/blog/hair-extension-types-guide",
  backLabel: "Tillbaka till bloggen",
}

const pl: HowToChooseHairExtensionSupplierContent = {
  seoTitle: "Jak wybrać dostawcę przedłużania włosów dla swojego salonu | D.S Hair Beauty",
  seoDescription:
    "Wybór właściwego hurtowego dostawcy przedłużania włosów może zadecydować o sukcesie Twojego salonu. Poznaj kluczowe kryteria oceny dostawców, wykrywaj sygnały ostrzegawcze i znajdź zaufanego partnera w Wielkiej Brytanii.",
  navHome: "Strona główna",
  navBlog: "Blog",
  navCurrent: "Jak wybrać dostawcę przedłużania włosów",
  heroBadge: "Przewodnik trade",
  heroTitle: "Jak wybrać dostawcę przedłużania włosów dla swojego salonu",
  heroSubtitle:
    "Odpowiedni dostawca to stała jakość, niezawodne zapasy i partner, który rozumie brytyjski rynek trade dla salonów. Oto wszystko, co musisz wiedzieć, zanim się zobowiążesz.",
  heroPrimaryLabel: "Otwórz konto trade",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "Przeglądaj produkty",
  heroSecondaryHref: "/collections/tape-in",
  whyHeading: "Dlaczego wybór dostawcy ma znaczenie",
  whyP1:
    "Przedłużanie włosów to jedna z najbardziej dochodowych usług w salonie — ale tylko wtedy, gdy jest dobrze wykonana. Wełna niskiej jakości, niedopasowany kolor lub dostawca, który nie dostarcza na czas, nie tylko kosztuje Cię pieniądze; kosztuje Cię klientki. W branży opartej na relacjach Twoja reputacja zależy od produktów, których używasz.",
  whyP2Lead: "Dlatego wybór właściwego ",
  whyP2Strong: "hurtowego dostawcy przedłużania włosów",
  whyP2Outro:
    " to jedna z najważniejszych decyzji biznesowych, jakie podejmiesz. Niezależnie od tego, czy prowadzisz ruchliwy salon w centrum Manchesteru, czy butikowe studio w Leeds, dostawca, z którym współpracujesz, kształtuje każdą wizytę przedłużania, którą rezerwujesz.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "Profesjonalna konsultacja w salonie na temat przedłużania włosów",
  keyFactorsHeading: "Kluczowe kryteria oceny dostawcy przedłużania włosów",
  qualityHeading: "1. Jakość włosów: Remy vs. Virgin vs. Non-Remy",
  qualityP:
    "Branża przedłużania włosów stosuje trzy klasyfikacje jakości — a ich zrozumienie to najważniejszy czynnik przy wyborze dostawcy:",
  qualityCards: [
    {
      tone: "green",
      label: "Włosy Virgin Remy",
      text: "Pozyskiwane od jednej dawczyni. Nigdy nie poddawane obróbce chemicznej, farbowaniu ani trwałej ondulacji. Łuski w pełni nienaruszone i wyrównane. To najwyższa klasa — stosowana do ekskluzywnej pracy z kolorem na zamówienie. Przygotuj się na zapłatę 40–60% więcej niż za standardowe Remy. Żywotność: 18–24 miesięcy przy odpowiedniej pielęgnacji.",
    },
    {
      tone: "amber",
      label: "Standardowe włosy Remy",
      text: "Łuski nienaruszone i wyrównane. Mogły zostać poddane delikatnej obróbce (farbowaniu, teksturowaniu). To standard branżowy dla profesjonalnych przedłużeń trade. Stanowią 80%+ włosów w jakości trade sprzedawanych salonom w Wielkiej Brytanii. Żywotność: 12–18 miesięcy.",
    },
    {
      tone: "red",
      label: "Włosy Non-Remy",
      text: "Pozyskiwane od wielu dawczyń — często ze szczotek, podłóg salonów lub darów świątynnych. Łuski usunięte w kąpieli kwasowej. Powlekane silikonem, by wyglądały na błyszczące. Silikon wypłukuje się po 2–4 myciach. Żywotność: 1–3 miesięcy do zaczęcia się filcowania. Występują w tanich przedłużeniach detalicznych. Nigdy nie są akceptowalne do profesjonalnego użytku w salonie.",
    },
  ],
  qualityP2:
    "Zawsze pytaj dostawcę o sprecyzowanie: „Czy to Virgin Remy, standardowe Remy czy non-Remy?” Rzetelny dostawca trade odpowie natychmiast. Wymijanie to sygnał ostrzegawczy.",
  colourHeading: "2. Spójność kolorów między partiami",
  colourP1:
    "Klientki wracają co 6–8 tygodni na przestawienie lub ponowną aplikację. Jeśli Twoja następna partia przedłużeń wygląda inaczej niż poprzednia, spędzisz godziny na dobieraniu kolorów — albo co gorsza, stracisz klientkę.",
  colourP2:
    "Przed podjęciem decyzji poproś dostawców o próbki z różnych partii produkcyjnych. Spójne dopasowanie kolorów między zamówieniami to oznaka producenta wysokiej jakości, a nie tylko pośrednika.",
  rangeHeading: "3. Gama kolorów i długości",
  rangeP1:
    "Twoje klientki są różnorodne. Dobry dostawca powinien oferować co najmniej 30+ odcieni we wszystkich typach przedłużeń, w tym opcje wielotonowe i balayage. Długości powinny obejmować zakres od 14\" do 28\".",
  rangeP2:
    "W D.S Hair Beauty prowadzimy ponad 40 odcieni w Clip-In, Tape-In, K-Tip, Weft, Butterfly Weft i Nano Ring — wszystko w 100% z ludzkich włosów Remy. Jeśli Twój obecny dostawca nie pokrywa Twojej gamy kolorów, ogranicza przychody Twojego salonu.",
  leadTimeHeading: "4. Czas realizacji i niezawodność",
  leadTimeP1:
    "Salony w Wielkiej Brytanii pracują według harmonogramów wizyt. Gdy klientka rezerwuje pełną aplikację K-tip, a dostawca informuje Cię, że zapasy są opóźnione, stajesz przed dwiema złymi opcjami: rozczarować klientkę albo zdobyć awaryjne zapasy gdzie indziej.",
  leadTimeP2:
    "Szukaj dostawców z magazynem w Wielkiej Brytanii lub szybką wysyłką międzynarodową (5–10 dni roboczych). D.S Hair Beauty dostarcza ekspresowo w 3–5 dni bezpośrednio z fabryki — bo wiemy, że Twoje wizyty nie czekają.",
  supportHeading: "5. Wsparcie trade i zarządzanie kontem",
  supportP:
    "Transakcyjny dostawca, który wysyła Ci tylko fakturę, nie jest partnerem. Szukaj dostawców oferujących konta trade z warunkami net-30, dedykowanych opiekunów konta i szybkie wsparcie przez WhatsApp lub e-mail. W D.S Hair Beauty konta trade otrzymują priorytetową wysyłkę, rabaty ilościowe i bezpośredni dostęp do naszego zespołu.",
  factoryHeading: "Jak działają chińskie fabryki przedłużania włosów",
  factoryP1:
    "Ponad 90% światowych ludzkich włosów Remy pochodzi z Chin i Indii, a większość obróbki odbywa się w chińskich centrach produkcyjnych — przede wszystkim w Xuchang (prowincja Henan), znanym jako światowe centrum handlu ludzkimi włosami. Zrozumienie, jak działają te fabryki, pomaga skuteczniej oceniać dostawców.",
  factoryP2Strong: "Hierarchia fabryk:",
  factoryP2Body:
    " Nie każdy, kto nazywa siebie „fabryką”, nią jest. Chiński łańcuch dostaw przedłużania włosów ma trzy poziomy:",
  factoryTiers: [
    {
      label: "Poziom 1: Zbieracze i przetwórcy surowych włosów",
      text: "Obiekty te zbierają surowe włosy, sortują je według długości i jakości, myją i odwszawniają oraz wykonują wstępne wyrównanie łusek. Sprzedają włosy hurtowo producentom. Na świecie istnieje mniej niż 20 obiektów tej skali.",
    },
    {
      label: "Poziom 2: Producenci wełt i końcówek",
      text: "Fabryki te biorą przetworzone włosy Remy i wytwarzają gotowe produkty przedłużania — szycie wełt, nakładanie końcówek keratynowych, tworzenie paneli tape, produkcję nano ring. Często zatrudniają 50–200 pracowników. Na tym poziomie działa większość dostawców trade „bezpośrednio z fabryki”.",
    },
    {
      label: "Poziom 3: Firmy handlowe i dystrybutorzy",
      text: "Firmy te kupują od producentów z poziomu 2, markują produkty i sprzedają salonom — często z wartością dodaną poprzez magazynowanie w Wielkiej Brytanii, usługi dopasowania kolorów i zarządzanie kontami trade. Wielu brytyjskich dostawców salonowych działa głównie na tym poziomie.",
    },
  ],
  factoryP3Strong: "Dlaczego to ma znaczenie przy wyborze dostawcy:",
  factoryP3Body:
    " Producent z poziomu 2 może oferować niższe ceny jednostkowe, ale zwykle wymaga dużych minimalnych ilości zamówienia (MOQ) i zapewnia ograniczone bieżące wsparcie. Dystrybutor z poziomu 3 z siedzibą w Wielkiej Brytanii dolicza marżę, ale przejmuje logistykę, magazynowanie, ryzyko walutowe i obowiązek kontroli jakości. Dla większości niezależnych salonów w Wielkiej Brytanii model poziomu 3 zapewnia lepszą ogólną wartość pomimo wyższego kosztu jednostkowego — ponieważ dystrybutor przejmuje te części łańcucha dostaw, które dla salonu są kosztowne i ryzykowne w samodzielnym zarządzaniu.",
  moqHeading: "Negocjacje MOQ: co muszą wiedzieć właściciele salonów",
  moqP:
    "Minimalna ilość zamówienia (MOQ) to jedna z pierwszych barier, na które trafiają właściciele salonów, kontaktując się z producentami lub dużymi dystrybutorami. Oto jak ją pokonać:",
  moqCards: [
    {
      label: "Typowe MOQ według typu dostawcy",
      text: "Bezpośrednio chińskie fabryki: 50–200 zestawów na kolor na zamówienie. Dystrybutorzy w Wielkiej Brytanii: często brak MOQ lub zaledwie 5–10 zestawów. Dostawcy mieszani (fabryka z magazynem w UK): zwykle 10–30 zestawów.",
    },
    {
      label: "Jak wynegocjować niższe MOQ",
      text: "Zacznij od zamówienia próbnego (1–3 zestawy), aby przetestować jakość. Po uzyskaniu satysfakcji zaproponuj stopniowe zobowiązanie: „Zaczniemy od 20 zestawów w tym miesiącu, z zobowiązaniem do 50 zestawów miesięcznie w ciągu 6 miesięcy, jeśli jakość i dostawy będą spójne.” Dostawcy cenią przewidywalny wolumen bardziej niż jednorazowe duże zamówienia.",
    },
    {
      label: "Strategia mieszanego zamówienia",
      text: "Zapytaj, czy MOQ dotyczy pojedynczego SKU produktu, czy sumy zamówienia. Dostawca z MOQ 30 zestawów może przyjąć 10 tape-in, 10 weft i 10 nano ring w jednym zamówieniu, jeśli suma osiągnie próg. Pozwala to magazynować różnorodność bez nadmiernego angażowania się w jeden typ produktu.",
    },
  ],
  testingHeading: "Metody testowania jakości dla właścicieli salonów",
  testingP:
    "Zanim zdecydujesz się na dostawcę, wykonaj te pięć praktycznych testów na wełtach próbnych:",
  tests: [
    {
      label: "Test kierunku łusek:",
      text: "Przesuń kciukiem i palcem wskazującym wzdłuż pasma od nasady do końcówki — powinno być gładkie. Od końcówki do nasady — powinno być lekko szorstkie. Jeśli odczucie jest takie samo w obu kierunkach, łuski zostały usunięte. Ten jeden test identyfikuje włosy non-Remy w kilka sekund.",
    },
    {
      label: "Test mycia:",
      text: "Umyj i odżyw wełtę próbną 5–6 razy w ciągu tygodnia. Obserwuj po wysuszeniu. Włosy Remy powinny pozostać gładkie, błyszczące i wolne od kołtunów. Włosy non-Remy zaczną się filcować, tracić połysk i staną się szorstkie.",
    },
    {
      label: "Test wypadania:",
      text: "Trzymaj wełtę za oba końce i delikatnie nią potrząśnij. Wełty wysokiej jakości powinny tracić mniej niż 3–5 pasm. Jeśli wypada chmura włosów, konstrukcja wełty jest zła.",
    },
    {
      label: "Test dopasowania koloru:",
      text: "Zamów ten sam odcień z dwóch różnych partii (oddzielonych co najmniej 2 tygodniami). Umieść je obok siebie w oświetleniu salonu. Spójność kolorów między partiami to znak rozpoznawczy producenta wysokiej jakości.",
    },
    {
      label: "Test ciepła:",
      text: "Przyłoż prostownicę ustawioną na 180°C do kilku pasm próbki. Włosy Remy wysokiej jakości powinny wytrzymać stylizację ciepłem bez przypalania, dymienia lub wydzielania plastikowego zapachu. Każda z tych reakcji wskazuje na domieszkę syntetyku lub intensywną obróbkę chemiczną.",
    },
  ],
  visitHeading: "Lista kontrolna wizyty w fabryce (jeśli kupujesz bezpośrednio)",
  visitP:
    "Jeśli rozważasz wizytę u producenta w Chinach lub Indiach — albo audytujesz obiekt dostawcy z siedzibą w Wielkiej Brytanii — oto, co warto zweryfikować osobiście:",
  visitItems: [
    {
      item: "Warunki pracy i płace",
      detail: "Etyczne pozyskiwanie ma znaczenie. Dobrze traktowani pracownicy produkują bardziej spójną jakość. Szukaj wentylowanych miejsc pracy, rozsądnych godzin pracy i uczciwych struktur wynagrodzeń.",
    },
    {
      item: "Przechowywanie surowych włosów",
      detail: "Właściwe przechowywanie oznacza pomieszczenia z kontrolowaną temperaturą i wentylacją. Surowe włosy przechowywane w wilgotnych lub gorących warunkach nabierają zapachu i uszkodzeń strukturalnych przed obróbką.",
    },
    {
      item: "Proces sortowania",
      detail: "Obserwuj, jak włosy są sortowane według długości i jakości. Spójne sortowanie = spójny produkt końcowy. Losowe lub niestaranne sortowanie wskazuje na słabą kontrolę jakości.",
    },
    {
      item: "Proces wyrównywania łusek",
      detail: "W przypadku włosów Remy fabryka musi mieć proces zapewniający, że wszystkie łuski są skierowane w tym samym kierunku przed utkaniem wełty. Poproś o pokazanie tego etapu — to najważniejszy wyznacznik jakości.",
    },
    {
      item: "Jakość szycia wełty",
      detail: "Sprawdź napięcie i odstępy linii szycia. Luźne lub nierówne przeszycia powodują wypadanie włosów. Wełty szyte podwójnie są trwalsze niż szyte pojedynczo.",
    },
    {
      item: "Strefa obróbki koloru",
      detail: "Zapytaj o system formułowania kolorów. Profesjonalne fabryki używają spektrofotometrów i utrzymywanych bibliotek odcieni — nie oceniają kolorów na oko.",
    },
    {
      item: "Punkt kontroli jakości",
      detail: "Szukaj dedykowanej stacji QC, gdzie gotowe produkty są sprawdzane pod kątem wypadania, dokładności koloru i spójności wagi przed zapakowaniem.",
    },
  ],
  redFlagsHeading: "Sygnały ostrzegawcze, na które należy uważać",
  redFlagsP:
    "Wykrycie złego dostawcy przed podjęciem decyzji oszczędza miesiące frustracji. Oto znaki ostrzegawcze:",
  redFlags: [
    {
      flag: "Ceny zbyt niskie, by były wiarygodne",
      detail: "Jeśli cena hurtowa wydaje się niewiarygodnie niska, włosy są niemal na pewno non-Remy lub mocno przetworzone. Zapłacisz więcej skargami klientek, niż zaoszczędzisz.",
    },
    {
      flag: "Brak fizycznych próbek",
      detail: "Rzetelni dostawcy chętnie wysyłają próbne wełty. Jeśli dostawca odmawia lub wysyła tylko zdjęcia, zrezygnuj.",
    },
    {
      flag: "Niejasne lub sztampowe opisy produktów",
      detail: "Dostawcy wysokiej jakości inwestują w dokładne profile kolorów i specyfikacje techniczne. Niejasne opisy oznaczają, że nie znają własnego produktu.",
    },
    {
      flag: "Brak warunków konta trade",
      detail: "Jeśli sprzedają tylko w pełnej cenie detalicznej bez rabatu dla profesjonalistów, celują w konsumentów, a nie salony — co sugeruje, że nie rozumieją rynku trade.",
    },
    {
      flag: "Powolna lub nieistniejąca obsługa klienta",
      detail: "Przetestuj czas reakcji przed podjęciem decyzji. Dostawca, który odpowiada na zapytanie 3 dni, będzie gorszy przy pilnym problemie z zamówieniem.",
    },
  ],
  questionsHeading: "Pytania, które warto zadać przed podjęciem decyzji",
  questionsP:
    "Wyślij te pytania w swoim pierwszym zapytaniu. Sposób, w jaki dostawca odpowiada, mówi wszystko o współpracy z nim:",
  questions: [
    "Jaki procent Twoich włosów to Remy? Czy możesz dostarczyć certyfikację?",
    "Czy posiadasz magazyn w Wielkiej Brytanii i jakie są standardowe czasy wysyłki?",
    "Jaka jest minimalna ilość zamówienia dla kont trade?",
    "Czy oferujecie rabaty ilościowe i jakie są progi cenowe trade?",
    "Czy mogę zamówić próbki przed złożeniem pełnego zamówienia?",
    "Jaka jest Wasza polityka zwrotów lub sporów jakościowych?",
    "Czy oferujecie warunki kredytowe (np. net-30) dla stałych kont trade?",
    "Jakie zasoby pielęgnacyjne lub edukacyjne zapewniacie salonom?",
  ],
  ukHeading: "Dlaczego dostawcy z Wielkiej Brytanii są często lepszym wyborem",
  ukP:
    "Kuszące jest kupowanie bezpośrednio od producentów za granicą, aby uzyskać najniższą cenę jednostkową. Ale dla salonów w Wielkiej Brytanii dostawca z siedzibą w UK często zapewnia większą wartość:",
  ukPoints: [
    {
      label: "Szybsza wysyłka",
      text: "— magazyn w UK oznacza dostawę następnego dnia lub w 2 dni, w porównaniu z 2–4 tygodniami z Azji",
    },
    {
      label: "Brak opóźnień celnych i ceł importowych",
      text: "— które mogą dodać 20% do kosztów i 3–5 dni do dostawy",
    },
    {
      label: "Dopasowanie kolorów, któremu możesz zaufać",
      text: "— dostawcy z UK rozumieją paletę brytyjskiego rynku i potrafią doradzić odcienie, których brytyjskie klientki faktycznie chcą",
    },
    {
      label: "Zarządzanie kontem w Twojej strefie czasowej",
      text: "— wiadomość WhatsApp wysłana o 9:00 dostaje odpowiedź o 9:00, a nie następnego dnia roboczego",
    },
    {
      label: "Pewność regulacyjna",
      text: "— dostawcy z siedzibą w Wielkiej Brytanii przestrzegają brytyjskich standardów handlowych i przepisów bezpieczeństwa produktów",
    },
  ],
  ukP2:
    "D.S Hair Beauty to producent działający bezpośrednio z fabryki z 19-letnim doświadczeniem w branży przedłużania włosów. Dostarczamy salonom w całej Wielkiej Brytanii przedłużenia z ludzkich włosów Remy z ekspresową wysyłką bezpośrednio z fabryki w 3–5 dni, z kontami trade, bez minimalnych ilości zamówienia i z bezpośrednim wsparciem producenta.",
  faqHeading: "Najczęściej zadawane pytania",
  faqs: [
    {
      q: "Czy kupować bezpośrednio z chińskiej fabryki, czy korzystać z dostawcy z Wielkiej Brytanii?",
      a: "Dla większości niezależnych salonów w Wielkiej Brytanii dostawca z siedzibą w UK zapewnia lepszą ogólną wartość. Choć ceny bezpośrednio z fabryki mogą być niższe o 20–35% za sztukę, przejmujesz koszty logistyki, cła importowe (20% VAT od importu), opóźnienia odpraw celnych, ryzyko wahań walutowych i odpowiedzialność za kontrolę jakości. Jeśli Twój miesięczny wolumen przedłużania przekracza 100 zestawów, zakup bezpośredni z fabryki może stać się opłacalny. Poniżej tego progu dostawca z UK, który utrzymuje zapasy i zarządza łańcuchem dostaw, zwykle zapewnia lepszą niezawodność przy rozsądnej marży.",
    },
    {
      q: "Jakich dokumentów powinienem oczekiwać od rzetelnego dostawcy trade?",
      a: "Profesjonalny dostawca trade powinien zapewnić: (1) formularz wniosku o konto trade, (2) hurtową listę cenową (zwykle 30–50% poniżej detalicznej), (3) certyfikaty autentyczności klasyfikacji Remy (raporty z testów młyna lub deklaracje dostawcy), (4) raporty bezpieczeństwa produktów kosmetycznych dla produktów bonded/tape oraz (5) dokument warunków obejmujący zwroty, spory jakościowe i warunki płatności. Jeśli dostawca nie może przedstawić żadnego z tych dokumentów, działaj ostrożnie.",
    },
    {
      q: "Jak przetestować nowego dostawcę przed złożeniem dużego zamówienia?",
      a: "Metoda „audytu małego zamówienia”: złóż pierwsze zamówienie na 3–5 zestawów w różnych odcieniach i typach. Oceń: (1) responsywność komunikacji podczas procesu zamówienia, (2) dokładność terminu dostawy, (3) jakość opakowania, (4) dokładność koloru, (5) jakość włosów przy użyciu pięciu testów opisanych powyżej. Użyj jednego zestawu u zaufanej klientki i obserwuj wynik przez 4–6 tygodni. Zwiększaj wolumen zamówień dopiero po tej praktycznej weryfikacji.",
    },
    {
      q: "Jakie warunki płatności powinienem negocjować?",
      a: "Nowe konta trade zwykle zaczynają od pro-forma (płatność przed wysyłką). Po 3–6 miesiącach regularnych zamówień negocjuj warunki net-30 (płatność w ciągu 30 dni od faktury). Niektórzy dostawcy oferują net-15 jako kompromis. Przy dużych zamówieniach (powyżej £1 000) zapytaj o płatności etapowe: 50% z góry, 50% przy wysyłce. Unikaj dostawców żądających 100% z góry przez niezabezpieczone metody, takie jak przelew na konto prywatne — przy pierwszych zamówieniach używaj karty kredytowej lub PayPal, gdzie istnieje ochrona chargeback.",
    },
    {
      q: "Jak często powinienem ponownie oceniać relację z dostawcą?",
      a: "Co najmniej raz w roku. Przejrzyj: dokładność realizacji zamówień, niezawodność dostaw, spójność jakości, konkurencyjność cen i responsywność. Rynek przedłużania włosów się zmienia — wchodzą nowi producenci, zmieniają się kursy walut, a dostawca, który dwa lata temu był doskonały, mógł się pogorszyć. Utrzymuj relacje z 2–3 zatwierdzonymi dostawcami zamiast polegać na jednym źródle. Daje to opcje zapasowe i motywuje głównego dostawcę do utrzymania poziomu usług.",
    },
  ],
  ctaBoxTitle: "Gotowy znaleźć idealnego dostawcę trade w Wielkiej Brytanii?",
  ctaBoxBody:
    "D.S Hair Beauty dostarcza przedłużenia w 100% z ludzkich włosów Remy salonom w Wielkiej Brytanii w cenach trade. Otwórz darmowe konto trade i otrzymaj pierwsze zamówienie próbek już dziś.",
  ctaPrimaryLabel: "Otwórz konto trade →",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Przeglądaj produkty",
  ctaSecondaryHref: "/collections/tape-in",
  internal1Label: "Następny artykuł",
  internal1Title: "Hurtownia przedłużania włosów w Wielkiej Brytanii: przewodnik właściciela salonu",
  internal1Href: "/blog/wholesale-hair-extensions-uk",
  internal2Label: "Powiązany przewodnik",
  internal2Title: "Rodzaje przedłużania włosów wyjaśnione: kompletny przewodnik",
  internal2Href: "/blog/hair-extension-types-guide",
  backLabel: "Wróć do bloga",
}

export const howToChooseHairExtensionSupplierContent: Record<Locale, HowToChooseHairExtensionSupplierContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
