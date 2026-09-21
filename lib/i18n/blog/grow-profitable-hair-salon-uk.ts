import type { Locale } from "@/lib/i18n/config"

// Content module for the "Grow a Profitable Hair Salon in the UK" blog post.
// All visible English copy is externalised here so the page can be rendered
// in any of the 6 locales with an identical layout. The English page
// (locale="en") renders exactly the same JSX it always did.

// Structured text segment: either a plain/bold/italic run, or an internal link
// that the View renders through localeHref so links stay localized.
export type Span =
  | { t: string; b?: boolean; i?: boolean }
  | { link: string; href: string }

interface ThreeColTable {
  headers: string[]
  rows: { b: string; p: string; l: string }[]
}

export interface GrowProfitableHairSalonUkContent {
  seoTitle: string
  seoDescription: string
  jsonLdHeadline: string
  jsonLdDescription: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
  navHome: string
  navBlog: string
  navCurrent: string
  intro1: Span[]
  intro2: string
  s1Heading: string
  s1P: Span[]
  s1Table: ThreeColTable
  s1P2: Span[]
  s2Heading: string
  s2ImageSrc: string
  s2ImageAlt: string
  s2P: string
  s2Table: ThreeColTable
  s3Heading: string
  s3ImageSrc: string
  s3ImageAlt: string
  s3P: string
  s3Cards: { q: string; a: string }[]
  s4Heading: string
  s4ImageSrc: string
  s4ImageAlt: string
  s4P1: Span[]
  s4P2: string
  s4Cards: {
    label: string
    iconKey: "trendingUp" | "sparkles" | "users"
    items: string[]
  }[]
  s4P3: string
  s4List: { term: string; text: string }[]
  s4P4: Span[]
  s5Heading: string
  s5Table: ThreeColTable
  s6Heading: string
  s6Cards: { q: string; a: string }[]
  ctaBoxTitle: string
  ctaBoxBody: string
  ctaBoxPrimaryLabel: string
  ctaBoxPrimaryHref: string
  ctaBoxSecondaryLabel: string
  ctaBoxSecondaryHref: string
  faqHeading: string
  faqs: { q: string; a: string }[]
  rel1Label: string
  rel1Title: string
  rel1Href: string
  rel2Label: string
  rel2Title: string
  rel2Href: string
  backLabel: string
}

const en: GrowProfitableHairSalonUkContent = {
  seoTitle: "How to Run a Profitable Hair Salon in the UK | D.S Hair Beauty",
  seoDescription:
    "A 19-years-in-the-trenches playbook for UK salon owners: raise profit margins, run efficient operations, and build your own hair extension brand with private label. Real frameworks and numbers.",
  jsonLdHeadline:
    "How to Run a Profitable Hair Salon in the UK: Operations, Profit & Building Your Own Brand",
  jsonLdDescription:
    "A practical UK guide to raising salon profit margins, running efficient operations, and building your own hair extension brand through private label — drawn from 19 years of helping salons grow.",
  heroBadge: "Salon Business",
  heroTitle: "How to Run a Profitable Hair Salon in the UK",
  heroSubtitle:
    "A straight-talking playbook on margins, operations, and building your salon's own hair extension brand — written after 19 years of helping UK salons grow from chair rental to recognisable brands.",
  ctaPrimaryLabel: "Open a Trade Account",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Build Your Brand →",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "Home",
  navBlog: "Blog",
  navCurrent: "Grow a Profitable Hair Salon",
  intro1: [
    { t: "Over the past " },
    { t: "19 years", b: true },
    { t: ", we've supplied, trained, and partnered with salons across the UK — from single-chair independents to multi-site groups. The salons that thrive are rarely the ones with the fanciest fit-out. They are the ones that treat the business like a business: they protect their " },
    { t: "margin", b: true },
    { t: ", systematise their " },
    { t: "operations", b: true },
    { t: ", and increasingly, they build " },
    { t: "their own brand", b: true },
    { t: " rather than only reselling someone else's." },
  ],
  intro2:
    "This guide pulls those lessons into one place. It is written for UK salon owners and managers who want practical frameworks — not theory. Where we cite a number, we give the range and the logic behind it so you can adapt it to your own salon.",
  s1Heading: "1. The Real Economics of a UK Hair Salon",
  s1P: [
    { t: "A salon's profit is what's left after three cost buckets: " },
    { t: "people", b: true },
    { t: " (stylist commissions, assistants, reception), " },
    { t: "product & consumables", b: true },
    { t: " (colour, extensions, aftercare), and " },
    { t: "overhead", b: true },
    { t: " (rent, utilities, software, marketing). Across the UK, a well-run salon typically lands at a " },
    { t: "net profit margin of roughly 8–15%", b: true },
    { t: " of turnover. Below 8% and you are working for the landlord; above 15% sustained, you are doing something genuinely right." },
  ],
  s1Table: {
    headers: ["Cost bucket", "Typical % of turnover", "Where profit leaks"],
    rows: [
      { b: "People (commission + wages)", p: "40–55%", l: "Un-tracked rebooking, idle chair time" },
      { b: "Product & consumables", p: "10–18%", l: "No retail attach, over-use of colour/extensions" },
      { b: "Overhead (rent, bills, software)", p: "15–25%", l: "Poor booking density, dead hours" },
      { b: "Marketing", p: "3–8%", l: "Spend with no trackable ROI" },
      { b: "Net profit", p: "8–15%", l: "Eroded by discounting & no-shows" },
    ],
  },
  s1P2: [
    { t: "The fastest way to move the needle is rarely " },
    { t: "\"charge more.\"" },
    { t: " It is closing the leaks: idle chairs, no-shows, and a missing " },
    { link: "retail and extension revenue stream", href: "/blog/hair-extension-profit-margin-guide" },
    { t: "." },
  ],
  s2Heading: "2. Seven Levers to Increase Salon Profitability",
  s2ImageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  s2ImageAlt: "Tracking salon profit margins and KPIs",
  s2P: "Treat these as dials, not switches. Each one lifts profit without necessarily raising your headline price.",
  s2Table: {
    headers: ["Lever", "What it does", "Quick win"],
    rows: [
      { b: "Pricing discipline", p: "Value-based pricing instead of a race to the bottom", l: "Audit your menu; reprice your top 3 services" },
      { b: "Retail & take-home", p: "Aftercare + extensions sold at checkout", l: "Set a 25–35% retail attach-rate target" },
      { b: "Rebooking & retention", p: "Fills future columns before clients leave", l: "Front-desk rebooking script + reminder flow" },
      { b: "Service mix", p: "Add high-margin extension services", l: "Train 1–2 stylists on tape-in / nano" },
      { b: "Utilisation", p: "More billable hours per chair", l: "Block booking; minimum-fill thresholds" },
      { b: "No-show policy", p: "Protects revenue you already earned", l: "Deposit + 24h card-on-file" },
      { b: "Average ticket", p: "Bundles, upgrades, add-ons", l: "\"Treatment + take-home\" bundles" },
    ],
  },
  s3Heading: "3. How to Run a Salon Efficiently (Operations)",
  s3ImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  s3ImageAlt: "Salon stylist consulting with a client",
  s3P:
    "Profit is designed in the operations, not rescued at month-end. The salons we work with that scale past the owner's own chair share a simple operating system:",
  s3Cards: [
    { q: "Standardise the consultation", a: "One consistent consultation script per service. It improves results, lifts retail attach, and makes training new stylists fast." },
    { q: "Control inventory", a: "Track colour, extensions and aftercare stock weekly. Over-stocking ties up cash; under-stocking costs you a sale. A trade account with predictable lead times makes this effortless." },
    { q: "Optimise the booking grid", a: "Protect your peak columns, set sensible gaps for long services, and use block booking to lift chair utilisation above 70%." },
    { q: "Train for extension services", a: "Extensions are among the highest-margin services a salon can offer. One trained stylist can open a whole new revenue line — see our guide to starting an in-salon extension service." },
    { q: "Run a weekly numbers meeting", a: "15 minutes on three KPIs: utilisation %, retail attach %, rebooking %. If a number is flat, assign an owner and a fix." },
  ],
  s4Heading: "4. Building Your Salon's Own Hair Extension Brand (Private Label)",
  s4ImageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
  s4ImageAlt: "Private label hair extension branding and packaging",
  s4P1: [
    { t: "The most profitable salons we've helped didn't just sell extensions — they " },
    { t: "owned the brand their clients asked for by name", b: true },
    { t: ". Private label means your salon sells hair extensions under " },
    { t: "your", i: true },
    { t: " name, with your packaging, your colour rings, and your margins." },
  ],
  s4P2: "Why salons move to private label:",
  s4Cards: [
    { label: "Higher margin", iconKey: "trendingUp", items: ["You set the retail price", "No middle-brand markup", "Recurring take-home revenue"] },
    { label: "Loyalty & differentiation", iconKey: "sparkles", items: ["Clients ask for YOUR brand", "Harder to price-shop", "A brand asset you own"] },
    { label: "We do the heavy lifting", iconKey: "users", items: ["19 yrs manufacturing", "Custom packaging & colour rings", "Helped 50+ salon brands launch"] },
  ],
  s4P3: "What it actually involves:",
  s4List: [
    { term: "MOQ", text: "a sensible starting order (we help you size it to your client base so you're not sitting on stock)." },
    { term: "Branding", text: "your logo on packs, custom colour ring, and point-of-sale cards." },
    { term: "Lead time", text: "the full range ships factory-direct via express (3–5 days) so you can keep promises to clients." },
    { term: "Support", text: "colour matching, training, and the same 19-years-of-experience backing we give our trade accounts." },
  ],
  s4P4: [
    { t: "The result we see most often: a salon that once resold a supplier's brand now has a take-home line clients re-order by name — and a margin that belongs to them. Read the full " },
    { link: "private label guide for UK salons", href: "/blog/private-label-hair-extensions-uk" },
    { t: " for MOQs, costs and a step-by-step launch plan." },
  ],
  s5Heading: "5. A 90-Day Action Plan",
  s5Table: {
    headers: ["Phase", "Focus", "Target outcome"],
    rows: [
      { b: "Days 1–30", p: "Stop the leaks", l: "Deposit policy live, rebooking script, stock count" },
      { b: "Days 31–60", p: "Lift the average ticket", l: "Retail attach 25%+, 1–2 stylists extension-trained" },
      { b: "Days 61–90", p: "Build the brand", l: "Private label sample order or trade account opened" },
    ],
  },
  s6Heading: "6. Common Mistakes UK Salon Owners Make",
  s6Cards: [
    { q: "Discounting to fill columns", a: "Empty columns are a booking problem, not a price problem. Discount trains clients to wait for the next offer." },
    { q: "No retail or extension revenue", a: "Service-only salons leave 10–18% of potential margin on the table at every appointment." },
    { q: "Treating the brand as someone else's", a: "If clients only know the supplier's name, you have built a following for a brand you don't own." },
    { q: "Running on gut, not KPIs", a: "If you can't see utilisation, attach rate and rebooking %, you can't fix what's quietly draining profit." },
  ],
  ctaBoxTitle: "Ready to Build a More Profitable Salon?",
  ctaBoxBody:
    "Open a free UK trade account and source 100% Remy human hair extensions at professional prices — or talk to us about launching your own private label line.",
  ctaBoxPrimaryLabel: "Open a Trade Account →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Start Your Brand",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    { q: "How profitable is a hair salon in the UK?", a: "A well-run UK salon typically nets around 8–15% of turnover. The gap between a struggling salon and a profitable one is usually operational discipline — rebooking, retail attach, and chair utilisation — rather than headline prices." },
    { q: "What profit margin should a hair salon aim for?", a: "Aim for a net margin of at least 10%, with 12–15% as a strong target. Below 8% leaves almost no buffer for rent rises or quiet seasons; above 15% sustained usually means you have a real competitive edge (often a strong extension or retail line)." },
    { q: "How can a salon increase profits without raising prices?", a: "Close the leaks first: introduce a deposit/no-show policy, train the front desk to rebook before clients leave, set a retail attach-rate target of 25–35%, and add high-margin extension services. These lift profit per client without touching your menu prices." },
    { q: "Should my salon start its own hair extension brand?", a: "If you already sell extensions and have a loyal client base, private label is often the highest-leverage next step. You keep the margin, own the client relationship, and differentiate from salons that only resell a supplier's name. Start with a small, well-chosen sample order." },
    { q: "What is private label for salons and how does it work?", a: "Private label means extensions are made and packed under your salon's brand — your logo, your colour ring, your packaging. A manufacturing partner (like D.S Hair & Beauty) handles production and quality; you own the brand, the pricing, and the client relationship." },
    { q: "How long does it take to launch a private label hair extension line?", a: "Typically a few weeks to finalise branding and a sample order, then ongoing express replenishment. The full range ships factory-direct via express (3–5 days), so you can promise reliable fulfilment to clients from day one." },
    { q: "How do I choose a hair extension manufacturing partner in the UK?", a: "Look for proven industry experience, 100% Remy human hair as standard, transparent MOQs and lead times, and real training/colour-matching support. See our supplier checklist for the full questions to ask before you commit." },
  ],
  rel1Label: "Related Guide",
  rel1Title: "Private Label Hair Extensions UK: Complete Guide",
  rel1Href: "/blog/private-label-hair-extensions-uk",
  rel2Label: "Related Article",
  rel2Title: "Hair Extension Profit Margins: What Salon Owners Make",
  rel2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "Back to Blog",
}

const de: GrowProfitableHairSalonUkContent = {
  seoTitle: "So führen Sie einen profitablen Hair-Salon im UK | D.S Hair Beauty",
  seoDescription:
    "Ein Praxis-Ratgeber aus 19 Jahren Erfahrung für UK-Saloninhaber: Margen steigern, Abläufe effizient gestalten und mit Private Label Ihre eigene Haarverlängerungs-Marke aufbauen. Reale Rahmenwerke und Zahlen.",
  jsonLdHeadline:
    "So führen Sie einen profitablen Hair-Salon im UK: Abläufe, Gewinn & Aufbau einer eigenen Marke",
  jsonLdDescription:
    "Ein praktischer UK-Leitfaden, um Salonmargen zu steigern, Abläufe effizient zu gestalten und über Private Label eine eigene Haarverlängerungs-Marke aufzubauen — aus 19 Jahren Erfahrung mit wachsenden Salons.",
  heroBadge: "Salon-Business",
  heroTitle: "So führen Sie einen profitablen Hair-Salon im UK",
  heroSubtitle:
    "Ein klarer Praxis-Ratgeber zu Margen, Abläufen und dem Aufbau einer eigenen Haarverlängerungs-Marke — verfasst nach 19 Jahren, in denen wir UK-Salons vom Stuhlvormieter zur bekannten Marke begleitet haben.",
  ctaPrimaryLabel: "Händlerkonto eröffnen",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Eigene Marke aufbauen →",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "Startseite",
  navBlog: "Blog",
  navCurrent: "Einen profitablen Hair-Salon führen",
  intro1: [
    { t: "In den letzten " },
    { t: "19 Jahren", b: true },
    { t: " haben wir Salons in ganz UK beliefert, geschult und begleitet — vom unabhängigen Ein-Stuhl-Salon bis zu Gruppen mit mehreren Standorten. Die Salons, die florieren, sind selten die mit der schicksten Einrichtung. Es sind die, die das Geschäft wie ein Geschäft behandeln: Sie schützen ihre " },
    { t: "Marge", b: true },
    { t: ", systematisieren ihre " },
    { t: "Abläufe", b: true },
    { t: " und bauen zunehmend " },
    { t: "eine eigene Marke", b: true },
    { t: " auf, statt nur die Marke eines anderen weiterzuverkaufen." },
  ],
  intro2:
    "Dieser Ratgeber bündelt diese Lektionen an einem Ort. Er richtet sich an UK-Saloninhaber und Manager, die praktische Rahmenwerke wollen — keine Theorie. Wo wir eine Zahl nennen, geben wir die Spanne und die Logik dahinter an, damit Sie sie auf Ihren eigenen Salon übertragen können.",
  s1Heading: "1. Die realen wirtschaftlichen Eckdaten eines UK-Hair-Salons",
  s1P: [
    { t: "Der Gewinn eines Salons ist das, was nach drei Kostenblöcken übrig bleibt: " },
    { t: "Personal", b: true },
    { t: " (Stylisten-Provisionen, Assistenten, Empfang), " },
    { t: "Produkte & Verbrauchsmaterial", b: true },
    { t: " (Farbe, Verlängerungen, Pflege) und " },
    { t: "Betriebskosten", b: true },
    { t: " (Miete, Nebenkosten, Software, Marketing). In ganz UK landet ein gut geführter Salon typischerweise bei einer " },
    { t: "Netto-Umsatzrendite von etwa 8–15%", b: true },
    { t: ". Unter 8% arbeiten Sie für den Vermieter; dauerhaft über 15% machen Sie offenbar einiges richtig." },
  ],
  s1Table: {
    headers: ["Kostenblock", "Typischer % vom Umsatz", "Wo Gewinn versickert"],
    rows: [
      { b: "Personal (Provision + Löhne)", p: "40–55%", l: "Nicht erfasstes Wiederbuchen, ungenutzte Stuhlzeit" },
      { b: "Produkte & Verbrauchsmaterial", p: "10–18%", l: "Kein Retail-Verkauf, übermäßiger Farb-/Extensionsverbrauch" },
      { b: "Betriebskosten (Miete, Nebenkosten, Software)", p: "15–25%", l: "Schwache Buchungsdichte, tote Stunden" },
      { b: "Marketing", p: "3–8%", l: "Ausgaben ohne messbaren ROI" },
      { b: "Netto-Gewinn", p: "8–15%", l: "Durch Rabatte und No-Shows erodiert" },
    ],
  },
  s1P2: [
    { t: "Der schnellste Weg, die Kennzahlen zu bewegen, ist selten " },
    { t: "„mehr verlangen“" },
    { t: ". Es geht darum, die Verluststellen zu schließen: ungenutzte Stühle, No-Shows und ein fehlender " },
    { link: "Retail- und Verlängerungs-Umsatzstrom", href: "/blog/hair-extension-profit-margin-guide" },
    { t: "." },
  ],
  s2Heading: "2. Sieben Hebel für mehr Rentabilität im Salon",
  s2ImageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  s2ImageAlt: "Salonmargen und KPIs im Blick behalten",
  s2P: "Behandeln Sie diese als Regler, nicht als Schalter. Jeder einzelne hebt den Gewinn, ohne unbedingt Ihre Listenpreise zu erhöhen.",
  s2Table: {
    headers: ["Hebel", "Was er bewirkt", "Schneller Erfolg"],
    rows: [
      { b: "Preisdisziplin", p: "Wertorientierte Preisgestaltung statt Preiskampf nach unten", l: "Menü prüfen; Top-3-Services neu bepreisen" },
      { b: "Retail & Take-home", p: "Pflege + Verlängerungen an der Kasse verkaufen", l: "Ziel von 25–35% Retail-Attach-Rate setzen" },
      { b: "Wiederbuchen & Bindung", p: "Füllt künftige Terminspalten, bevor Kundinnen gehen", l: "Wiederbuch-Skript an der Rezeption + Erinnerungsfluss" },
      { b: "Service-Mix", p: "Margenstarke Verlängerungsservices ergänzen", l: "1–2 Stylistinnen auf tape-in / nano schulen" },
      { b: "Auslastung", p: "Mehr abrechenbare Stunden pro Stuhl", l: "Blockbuchung; Mindestauslastungs-Schwellen" },
      { b: "No-Show-Politik", p: "Schützt bereits erwirtschaftete Umsätze", l: "Anzahlung + hinterlegte Karte (24h)" },
      { b: "Durchschnittsbon", p: "Bündel, Upgrades, Zusatzangebote", l: "„Behandlung + Take-home“-Bündel" },
    ],
  },
  s3Heading: "3. So führen Sie einen Salon effizient (Abläufe)",
  s3ImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  s3ImageAlt: "Salon-Stylistin berät eine Kundin",
  s3P:
    "Gewinn entsteht durch durchdachte Abläufe, nicht durch Notaktionen am Monatsende. Die Salons, mit denen wir arbeiten und die über den eigenen Stuhl des Inhabers hinauswachsen, nutzen ein einfaches Betriebssystem:",
  s3Cards: [
    { q: "Beratung standardisieren", a: "Ein einheitliches Beratungs-Skript pro Service. Es verbessert die Ergebnisse, hebt den Retail-Anteil und macht das Einarbeiten neuer Stylistinnen schnell." },
    { q: "Lagerbestand kontrollieren", a: "Farbe, Verlängerungen und Pflegeprodukte wöchentlich erfassen. Überbestände binden Kapital; Unterbestände kosten Verkäufe. Ein Händlerkonto mit planbaren Lieferzeiten macht das mühelos." },
    { q: "Buchungsraster optimieren", a: "Schützen Sie Ihre Spitzenzeiten, setzen Sie sinnvolle Abstände für lange Services und nutzen Sie Blockbuchungen, um die Stuhlauslastung über 70% zu heben." },
    { q: "Für Verlängerungsservices schulen", a: "Verlängerungen gehören zu den margenstärksten Services, die ein Salon anbieten kann. Eine geschulte Stylistin kann eine komplett neue Umsatzlinie eröffnen — siehe unseren Leitfaden für den Start eines Verlängerungsservices im Salon." },
    { q: "Wöchentliches Zahlen-Meeting", a: "15 Minuten für drei KPIs: Auslastung %, Retail-Attach %, Wiederbuchungsquote %. Wenn eine Zahl stagniert, einen Verantwortlichen und eine Lösung benennen." },
  ],
  s4Heading: "4. Die eigene Haarverlängerungs-Marke des Salons aufbauen (Private Label)",
  s4ImageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
  s4ImageAlt: "Private-Label-Branding und Verpackung für Haarverlängerungen",
  s4P1: [
    { t: "Die profitabelsten Salons, die wir begleitet haben, haben Verlängerungen nicht nur verkauft — sie " },
    { t: "besaßen die Marke, nach der ihre Kundinnen namentlich fragten", b: true },
    { t: ". Private Label bedeutet: Ihr Salon verkauft Haarverlängerungen unter " },
    { t: "Ihrem", i: true },
    { t: " Namen, mit Ihrer Verpackung, Ihren Farbringen und Ihren Margen." },
  ],
  s4P2: "Warum Salons auf Private Label umsteigen:",
  s4Cards: [
    { label: "Höhere Marge", iconKey: "trendingUp", items: ["Sie bestimmen den Endverkaufspreis", "Kein Aufschlag einer Zwischenmarke", "Wiederkehrender Take-home-Umsatz"] },
    { label: "Loyalität & Differenzierung", iconKey: "sparkles", items: ["Kundinnen fragen nach IHRER Marke", "Schwerer zu vergleichen", "Ein Markenwert, der Ihnen gehört"] },
    { label: "Wir übernehmen die schwere Arbeit", iconKey: "users", items: ["19 Jahre Fertigung", "Individuelle Verpackung & Farbringe", "50+ Salon-Marken beim Launch begleitet"] },
  ],
  s4P3: "Was tatsächlich dahintersteckt:",
  s4List: [
    { term: "MOQ", text: "eine sinnvolle Startbestellung (wir helfen, sie auf Ihren Kundenstamm abzustimmen, damit Sie nicht auf Lager sitzen)." },
    { term: "Branding", text: "Ihr Logo auf den Packungen, ein individueller Farbring und Verkaufskarten am Point of Sale." },
    { term: "Lieferzeit", text: "die gesamte Kollektion wird direkt ab Werk per Express (3–5 Tage) versendet, damit Sie Kundinnen verlässliche Zusagen machen können." },
    { term: "Support", text: "Farbabstimmung, Schulung und derselbe Erfahrungsvorsprung aus 19 Jahren, den wir auch unseren Händlerkonten bieten." },
  ],
  s4P4: [
    { t: "Das Ergebnis, das wir am häufigsten sehen: Ein Salon, der einst die Marke eines Lieferanten weiterverkaufte, hat heute eine Take-home-Linie, die Kundinnen namentlich nachbestellen — und eine Marge, die ihm selbst gehört. Lesen Sie den vollständigen " },
    { link: "Private-Label-Leitfaden für UK-Salons", href: "/blog/private-label-hair-extensions-uk" },
    { t: " zu MOQs, Kosten und einem Schritt-für-Schritt-Launchplan." },
  ],
  s5Heading: "5. Ein 90-Tage-Aktionsplan",
  s5Table: {
    headers: ["Phase", "Fokus", "Zielergebnis"],
    rows: [
      { b: "Tage 1–30", p: "Verluststellen schließen", l: "Anzahlungspolitik live, Wiederbuch-Skript, Lagerzählung" },
      { b: "Tage 31–60", p: "Durchschnittsbon erhöhen", l: "Retail-Attach 25%+, 1–2 Stylistinnen im Verlängerungsbereich geschult" },
      { b: "Tage 61–90", p: "Die Marke aufbauen", l: "Private-Label-Musterbestellung oder Händlerkonto eröffnet" },
    ],
  },
  s6Heading: "6. Häufige Fehler von UK-Saloninhabern",
  s6Cards: [
    { q: "Rabatte, um Terminspalten zu füllen", a: "Leere Spalten sind ein Buchungsproblem, kein Preisproblem. Rabatte erziehen Kundinnen dazu, auf das nächste Angebot zu warten." },
    { q: "Kein Retail- oder Verlängerungsumsatz", a: "Reine Service-Salons lassen bei jedem Termin 10–18% möglicher Marge liegen." },
    { q: "Die Marke als fremdes Eigentum behandeln", a: "Wenn Kundinnen nur den Namen des Lieferanten kennen, haben Sie eine Community für eine Marke aufgebaut, die Ihnen nicht gehört." },
    { q: "Nach Bauchgefühl statt nach KPIs steuern", a: "Wenn Sie Auslastung, Attach-Rate und Wiederbuchungsquote nicht sehen, können Sie nicht beheben, was den Gewinn leise aufzehrt." },
  ],
  ctaBoxTitle: "Bereit, einen profitableren Salon aufzubauen?",
  ctaBoxBody:
    "Eröffnen Sie ein kostenloses UK-Händlerkonto und beziehen Sie 100% Remy Echthaar-Verlängerungen zu Profipreisen — oder sprechen Sie mit uns über den Launch Ihrer eigenen Private-Label-Linie.",
  ctaBoxPrimaryLabel: "Händlerkonto eröffnen →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Eigene Marke starten",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    { q: "Wie profitabel ist ein Hair-Salon im UK?", a: "Ein gut geführter UK-Salon erzielt typischerweise rund 8–15% vom Umsatz. Der Unterschied zwischen einem kämpfenden und einem profitablen Salon liegt meist in der operativen Disziplin — Wiederbuchen, Retail-Attach und Stuhlauslastung — und nicht in den Listenpreisen." },
    { q: "Welche Gewinnmarge sollte ein Hair-Salon anstreben?", a: "Streben Sie eine Netto-Marge von mindestens 10% an, mit 12–15% als starkem Zielwert. Unter 8% bleibt kaum Puffer für Mieterhöhungen oder ruhige Saisons; dauerhaft über 15% bedeutet meist einen echten Wettbewerbsvorteil (häufig eine starke Verlängerungs- oder Retail-Linie)." },
    { q: "Wie kann ein Salon den Gewinn steigern, ohne die Preise zu erhöhen?", a: "Schließen Sie zuerst die Verluststellen: Einführung einer Anzahlungs-/No-Show-Politik, Schulung der Rezeption zum Wiederbuchen vor Abreise der Kundinnen, Ziel von 25–35% Retail-Attach-Rate und margenstarke Verlängerungsservices ergänzen. Das hebt den Gewinn pro Kundin, ohne die Menüpreise anzufassen." },
    { q: "Sollte mein Salon eine eigene Haarverlängerungs-Marke starten?", a: "Wenn Sie bereits Verlängerungen verkaufen und einen loyalen Kundenstamm haben, ist Private Label oft der nächste Schritt mit dem größten Hebel. Sie behalten die Marge, kontrollieren die Kundenbeziehung und heben sich von Salons ab, die nur den Namen eines Lieferanten weiterverkaufen. Beginnen Sie mit einer kleinen, gut gewählten Musterbestellung." },
    { q: "Was ist Private Label für Salons und wie funktioniert es?", a: "Private Label bedeutet, dass Verlängerungen unter der Marke Ihres Salons hergestellt und verpackt werden — Ihr Logo, Ihr Farbring, Ihre Verpackung. Ein Fertigungspartner (wie D.S Hair & Beauty) übernimmt Produktion und Qualität; Sie besitzen die Marke, die Preisgestaltung und die Kundenbeziehung." },
    { q: "Wie lange dauert der Launch einer Private-Label-Haarverlängerungs-Linie?", a: "In der Regel einige Wochen für Branding und Musterbestellung, danach laufende Express-Nachbestellung. Die gesamte Kollektion wird direkt ab Werk per Express (3–5 Tage) versendet, sodass Sie Kundinnen von Tag eins an verlässliche Lieferung zusagen können." },
    { q: "Wie wähle ich einen Fertigungspartner für Haarverlängerungen im UK?", a: "Achten Sie auf nachgewiesene Branchenerfahrung, 100% Remy Echthaar als Standard, transparente MOQs und Lieferzeiten sowie echte Schulungs- und Farbabstimmungs-Unterstützung. Unsere Lieferanten-Checkliste enthält alle Fragen, die Sie vor einer Zusage stellen sollten." },
  ],
  rel1Label: "Verwandter Leitfaden",
  rel1Title: "Private Label Haarverlängerungen UK: Kompletter Leitfaden",
  rel1Href: "/blog/private-label-hair-extensions-uk",
  rel2Label: "Verwandter Artikel",
  rel2Title: "Margen bei Haarverlängerungen: Was Saloninhaber verdienen",
  rel2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "Zurück zum Blog",
}

const fr: GrowProfitableHairSalonUkContent = {
  seoTitle: "Comment gérer un salon de coiffure rentable au Royaume-Uni | D.S Hair Beauty",
  seoDescription:
    "Un guide de terrain fort de 19 ans d'expérience pour les propriétaires de salons UK : augmenter les marges, optimiser les opérations et bâtir votre propre marque d'extensions capillaires en private label. Cadres concrets et chiffres réels.",
  jsonLdHeadline:
    "Comment gérer un salon de coiffure rentable au Royaume-Uni : Opérations, Profit & Création de votre propre marque",
  jsonLdDescription:
    "Un guide pratique UK pour augmenter les marges de votre salon, optimiser vos opérations et lancer votre propre marque d'extensions capillaires en private label — issu de 19 ans d'expérience auprès de salons en croissance.",
  heroBadge: "Business Salon",
  heroTitle: "Comment gérer un salon de coiffure rentable au Royaume-Uni",
  heroSubtitle:
    "Un guide direct sur les marges, les opérations et la création de la marque d'extensions de votre salon — rédigé après 19 ans à aider des salons UK à passer de la location de chaise à des marques reconnues.",
  ctaPrimaryLabel: "Ouvrir un compte professionnel",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Créer votre marque →",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "Accueil",
  navBlog: "Blog",
  navCurrent: "Gérer un salon de coiffure rentable",
  intro1: [
    { t: "Depuis " },
    { t: "19 ans", b: true },
    { t: ", nous approvisionnons, formons et accompagnons des salons dans tout le Royaume-Uni — des indépendants à une seule chaise aux groupes multi-sites. Les salons qui prospèrent sont rarement ceux avec l'aménagement le plus chic. Ce sont ceux qui traitent l'entreprise comme une entreprise : ils protègent leur " },
    { t: "marge", b: true },
    { t: ", systématisent leurs " },
    { t: "opérations", b: true },
    { t: " et, de plus en plus, ils construisent " },
    { t: "leur propre marque", b: true },
    { t: " plutôt que de revendre celle d'un autre." },
  ],
  intro2:
    "Ce guide rassemble ces leçons au même endroit. Il s'adresse aux propriétaires et gérants de salons UK qui veulent des cadres pratiques — pas de la théorie. Quand nous citons un chiffre, nous donnons la fourchette et la logique derrière afin que vous puissiez l'adapter à votre salon.",
  s1Heading: "1. La vraie économie d'un salon de coiffure UK",
  s1P: [
    { t: "Le profit d'un salon, c'est ce qui reste après trois postes de coûts : " },
    { t: "les personnes", b: true },
    { t: " (commissions des coiffeurs, assistants, réception), " },
    { t: "les produits & consommables", b: true },
    { t: " (coloration, extensions, entretien) et " },
    { t: "les frais généraux", b: true },
    { t: " (loyer, charges, logiciels, marketing). Dans tout le Royaume-Uni, un salon bien géré atteint typiquement une " },
    { t: "marge nette d'environ 8–15%", b: true },
    { t: " du chiffre d'affaires. Sous 8%, vous travaillez pour le propriétaire ; au-dessus de 15% durablement, vous faites vraiment quelque chose de juste." },
  ],
  s1Table: {
    headers: ["Poste de coûts", "% type du chiffre d'affaires", "Où le profit s'échappe"],
    rows: [
      { b: "Personnes (commissions + salaires)", p: "40–55%", l: "Réservations non suivies, chaises inoccupées" },
      { b: "Produits & consommables", p: "10–18%", l: "Pas de vente au comptoir, surconsommation couleur/extensions" },
      { b: "Frais généraux (loyer, charges, logiciels)", p: "15–25%", l: "Faible densité de réservation, heures creuses" },
      { b: "Marketing", p: "3–8%", l: "Dépenses sans ROI mesurable" },
      { b: "Profit net", p: "8–15%", l: "Érodé par les remises et les no-shows" },
    ],
  },
  s1P2: [
    { t: "Le moyen le plus rapide de faire bouger les chiffres n'est rarement " },
    { t: "« augmenter les prix »" },
    { t: ". C'est de colmater les fuites : chaises inoccupées, no-shows et un " },
    { link: "flux de revenus retail et extensions", href: "/blog/hair-extension-profit-margin-guide" },
    { t: " manquant." },
  ],
  s2Heading: "2. Sept leviers pour augmenter la rentabilité du salon",
  s2ImageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  s2ImageAlt: "Suivi des marges et KPI du salon",
  s2P: "Traitez-les comme des curseurs, pas comme des interrupteurs. Chacun augmente le profit sans nécessairement toucher à votre prix d'affichage.",
  s2Table: {
    headers: ["Levier", "Ce qu'il fait", "Victoire rapide"],
    rows: [
      { b: "Discipline tarifaire", p: "Tarification basée sur la valeur au lieu d'une course vers le bas", l: "Auditez votre menu ; revalorisez vos 3 meilleurs services" },
      { b: "Retail & à emporter", p: "Entretien + extensions vendus en caisse", l: "Fixez un objectif de taux d'attache retail de 25–35%" },
      { b: "Réservation & fidélisation", p: "Remplit les futurs créneaux avant le départ des clientes", l: "Script de rebooking à l'accueil + flux de rappels" },
      { b: "Mix de services", p: "Ajouter des services d'extensions à forte marge", l: "Formez 1–2 coiffeurs au tape-in / nano" },
      { b: "Taux d'utilisation", p: "Plus d'heures facturables par chaise", l: "Réservation par blocs ; seuils d'occupation minimum" },
      { b: "Politique anti no-show", p: "Protège les revenus déjà gagnés", l: "Acompte + carte enregistrée (24h)" },
      { b: "Panier moyen", p: "Forfaits, upgrades, options", l: "Forfaits « traitement + à emporter »" },
    ],
  },
  s3Heading: "3. Comment gérer un salon efficacement (opérations)",
  s3ImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  s3ImageAlt: "Coiffeuse de salon en consultation avec une cliente",
  s3P:
    "Le profit se conçoit dans les opérations, il ne se rattrape pas en fin de mois. Les salons avec lesquels nous travaillons et qui dépassent la chaise du propriétaire partagent un système simple :",
  s3Cards: [
    { q: "Standardiser la consultation", a: "Un script de consultation cohérent par service. Il améliore les résultats, augmente l'attache retail et accélère la formation des nouveaux coiffeurs." },
    { q: "Contrôler les stocks", a: "Suivez chaque semaine les stocks de coloration, d'extensions et d'entretien. Le surstock immobilise de la trésorerie ; le sous-stock vous coûte des ventes. Un compte pro avec des délais prévisibles rend cela sans effort." },
    { q: "Optimiser le planning", a: "Protégez vos créneaux de pointe, ménagez des intervalles sensés pour les services longs et utilisez la réservation par blocs pour dépasser 70% d'occupation des chaises." },
    { q: "Former aux services d'extensions", a: "Les extensions comptent parmi les services les plus rentables qu'un salon puisse offrir. Un coiffeur formé peut ouvrir toute une ligne de revenus — voir notre guide pour lancer un service d'extensions en salon." },
    { q: "Organiser une réunion chiffrée hebdomadaire", a: "15 minutes sur trois KPI : taux d'utilisation %, taux d'attache retail %, taux de rebooking %. Si un chiffre stagne, désignez un responsable et une solution." },
  ],
  s4Heading: "4. Bâtir la marque d'extensions de votre salon (Private Label)",
  s4ImageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
  s4ImageAlt: "Branding et packaging private label d'extensions capillaires",
  s4P1: [
    { t: "Les salons les plus rentables que nous avons aidés ne se contentaient pas de vendre des extensions — ils " },
    { t: "possédaient la marque que leurs clientes demandaient par son nom", b: true },
    { t: ". Le private label signifie que votre salon vend des extensions capillaires sous " },
    { t: "votre", i: true },
    { t: " nom, avec votre packaging, vos anneaux de couleurs et vos marges." },
  ],
  s4P2: "Pourquoi les salons passent au private label :",
  s4Cards: [
    { label: "Marge supérieure", iconKey: "trendingUp", items: ["Vous fixez le prix de vente", "Aucune marge d'une marque intermédiaire", "Revenus récurrents à emporter"] },
    { label: "Fidélité & différenciation", iconKey: "sparkles", items: ["Les clientes demandent VOTRE marque", "Plus difficile de comparer les prix", "Un actif de marque qui vous appartient"] },
    { label: "Nous faisons le gros du travail", iconKey: "users", items: ["19 ans de fabrication", "Packaging & anneaux de couleurs personnalisés", "50+ marques de salon accompagnées au lancement"] },
  ],
  s4P3: "Ce que cela implique concrètement :",
  s4List: [
    { term: "MOQ", text: "une commande de départ raisonnable (nous vous aidons à la dimensionner selon votre clientèle pour ne pas rester sur du stock)." },
    { term: "Branding", text: "votre logo sur les packs, un anneau de couleurs personnalisé et des cartes de point de vente." },
    { term: "Délais", text: "toute la gamme est expédiée en direct usine par express (3–5 jours) afin que vous puissiez tenir vos promesses envers vos clientes." },
    { term: "Accompagnement", text: "appariement des couleurs, formation et le même appui fort de 19 ans d'expérience que nous offrons à nos comptes pro." },
  ],
  s4P4: [
    { t: "Le résultat que nous voyons le plus souvent : un salon qui revendait la marque d'un fournisseur possède désormais une gamme à emporter que les clientes recommandent par son nom — et une marge qui lui appartient. Lisez le " },
    { link: "guide private label complet pour les salons UK", href: "/blog/private-label-hair-extensions-uk" },
    { t: " pour les MOQ, les coûts et un plan de lancement pas à pas." },
  ],
  s5Heading: "5. Un plan d'action sur 90 jours",
  s5Table: {
    headers: ["Phase", "Objectif", "Résultat cible"],
    rows: [
      { b: "Jours 1–30", p: "Colmater les fuites", l: "Politique d'acompte active, script de rebooking, inventaire" },
      { b: "Jours 31–60", p: "Augmenter le panier moyen", l: "Attache retail 25%+, 1–2 coiffeurs formés aux extensions" },
      { b: "Jours 61–90", p: "Bâtir la marque", l: "Commande d'échantillons private label ou compte pro ouvert" },
    ],
  },
  s6Heading: "6. Erreurs courantes des propriétaires de salons UK",
  s6Cards: [
    { q: "Faire des remises pour remplir les créneaux", a: "Des créneaux vides sont un problème de réservation, pas de prix. La remise habitue les clientes à attendre la prochaine offre." },
    { q: "Aucun revenu retail ou extensions", a: "Les salons uniquement orientés service laissent 10–18% de marge potentielle sur la table à chaque rendez-vous." },
    { q: "Traiter la marque comme celle d'un autre", a: "Si les clientes ne connaissent que le nom du fournisseur, vous avez bâti une communauté pour une marque qui ne vous appartient pas." },
    { q: "Piloter à l'intuition, pas aux KPI", a: "Si vous ne voyez pas l'utilisation, le taux d'attache et le % de rebooking, vous ne pouvez pas corriger ce qui draine silencieusement votre profit." },
  ],
  ctaBoxTitle: "Prêt à bâtir un salon plus rentable ?",
  ctaBoxBody:
    "Ouvrez un compte professionnel UK gratuit et approvisionnez-vous en extensions 100% cheveux Remy à prix professionnels — ou parlez-nous du lancement de votre propre ligne private label.",
  ctaBoxPrimaryLabel: "Ouvrir un compte professionnel →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Lancer votre marque",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "Questions Fréquemment Posées",
  faqs: [
    { q: "Quelle est la rentabilité d'un salon de coiffure au Royaume-Uni ?", a: "Un salon UK bien géré dégage généralement environ 8–15% de son chiffre d'affaires. L'écart entre un salon qui peine et un salon rentable tient habituellement à la discipline opérationnelle — rebooking, attache retail et occupation des chaises — plutôt qu'aux prix affichés." },
    { q: "Quelle marge un salon de coiffure doit-il viser ?", a: "Visez une marge nette d'au moins 10%, avec 12–15% comme objectif solide. Sous 8%, il ne reste presque aucune marge de manœuvre pour les hausses de loyer ou les saisons creuses ; au-dessus de 15% durablement, vous avez généralement un vrai avantage concurrentiel (souvent une gamme extensions ou retail forte)." },
    { q: "Comment un salon peut-il augmenter ses profits sans hausser ses prix ?", a: "Colmatez d'abord les fuites : instaurez une politique d'acompte/anti no-show, formez l'accueil à rebooker avant le départ des clientes, fixez un objectif d'attache retail de 25–35% et ajoutez des services d'extensions à forte marge. Cela augmente le profit par cliente sans toucher à vos tarifs." },
    { q: "Mon salon doit-il lancer sa propre marque d'extensions ?", a: "Si vous vendez déjà des extensions et disposez d'une clientèle fidèle, le private label est souvent le prochain pas au plus fort effet de levier. Vous conservez la marge, possédez la relation client et vous différenciez des salons qui ne font que revendre le nom d'un fournisseur. Commencez par une petite commande d'échantillons bien choisie." },
    { q: "Qu'est-ce que le private label pour les salons et comment ça marche ?", a: "Le private label signifie que les extensions sont fabriquées et conditionnées sous la marque de votre salon — votre logo, votre anneau de couleurs, votre packaging. Un partenaire de fabrication (comme D.S Hair & Beauty) gère la production et la qualité ; vous possédez la marque, la tarification et la relation client." },
    { q: "Combien de temps faut-il pour lancer une ligne d'extensions private label ?", a: "Typiquement quelques semaines pour finaliser le branding et une commande d'échantillons, puis un réapprovisionnement express continu. Toute la gamme part en direct usine par express (3–5 jours), pour que vous puissiez promettre une livraison fiable à vos clientes dès le premier jour." },
    { q: "Comment choisir un partenaire de fabrication d'extensions au Royaume-Uni ?", a: "Recherchez une expérience avérée du secteur, du 100% cheveux humains Remy en standard, des MOQ et délais transparents, ainsi qu'un réel accompagnement formation/appariement des couleurs. Consultez notre checklist fournisseur pour toutes les questions à poser avant de vous engager." },
  ],
  rel1Label: "Guide associé",
  rel1Title: "Private Label Extensions UK : Guide complet",
  rel1Href: "/blog/private-label-hair-extensions-uk",
  rel2Label: "Article associé",
  rel2Title: "Marges des extensions : ce que gagnent les propriétaires de salon",
  rel2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "Retour au Blog",
}

const ar: GrowProfitableHairSalonUkContent = {
  seoTitle: "كيف تدير صالون شعر مربحاً في المملكة المتحدة | D.S Hair Beauty",
  seoDescription:
    "دليل عملي من خبرة 19 عاماً لأصحاب الصالونات في UK: ارفع هوامش الربح، نظّم العمليات بكفاءة، وابنِ علامتك الخاصة لوصلات الشعر عبر الـ private label. أُطر حقيقية وأرقام.",
  jsonLdHeadline:
    "كيف تدير صالون شعر مربحاً في المملكة المتحدة: العمليات والربح وبناء علامتك الخاصة",
  jsonLdDescription:
    "دليل عملي UK لرفع هوامش ربح الصالون، وإدارة العمليات بكفاءة، وبناء علامة وصلات الشعر الخاصة بك عبر الـ private label — مستمد من 19 عاماً من مساعدة الصالونات على النمو.",
  heroBadge: "إدارة الصالون",
  heroTitle: "كيف تدير صالون شعر مربحاً في المملكة المتحدة",
  heroSubtitle:
    "دليل مباشر حول الهوامش والعمليات وبناء علامة وصلات الشعر الخاصة بصالونك — كُتب بعد 19 عاماً من مساعدة صالونات UK على النمو من تأجير كرسي إلى علامات معروفة.",
  ctaPrimaryLabel: "افتح حساب تجاري",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "ابنِ علامتك التجارية ←",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "الرئيسية",
  navBlog: "المدونة",
  navCurrent: "إدارة صالون شعر مربح",
  intro1: [
    { t: "على مدى " },
    { t: "19 عاماً", b: true },
    { t: "، زوّدنا ودرّبنا وعملنا مع صالونات في جميع أنحاء UK — من الصالونات المستقلة ذات الكرسي الواحد إلى المجموعات متعددة الفروع. الصالونات التي تزدهر نادراً ما تكون تلك الأجمل تجهيزاً. إنها تلك التي تتعامل مع العمل كعمل حقيقي: تحمي " },
    { t: "هوامشها", b: true },
    { t: "، وتنظّم " },
    { t: "عملياتها", b: true },
    { t: "، وتتجه بشكل متزايد إلى بناء " },
    { t: "علامتها الخاصة", b: true },
    { t: " بدلاً من إعادة بيع علامة شخص آخر فقط." },
  ],
  intro2:
    "يجمع هذا الدليل تلك الدروس في مكان واحد. كُتب لأصحاب ومدراء الصالونات في UK ممن يريدون أُطراً عملية — لا نظريات. وحيثما نذكر رقماً، نعطي النطاق والمنطق وراءه لتتمكن من تكييفه مع صالونك الخاص.",
  s1Heading: "1. الاقتصاد الحقيقي لصالون الشعر في UK",
  s1P: [
    { t: "ربح الصالون هو ما يتبقى بعد ثلاث فئات من التكاليف: " },
    { t: "الأفراد", b: true },
    { t: " (عمولات المصممين والمساعدين والاستقبال)، و" },
    { t: "المنتجات والمستهلكات", b: true },
    { t: " (الصبغة ووصلات الشعر والعناية)، و" },
    { t: "المصاريف العامة", b: true },
    { t: " (الإيجار والمرافق والبرمجيات والتسويق). في جميع أنحاء UK، يحقق الصالون المُدار جيداً عادة " },
    { t: "صافي هامش ربح يتراوح بين 8–15%", b: true },
    { t: " من الإيرادات. أقل من 8% وأنت تعمل لصالح المالك؛ أكثر من 15% باستمرار فهذا يعني أنك تفعل شيئاً صحيحاً حقاً." },
  ],
  s1Table: {
    headers: ["فئة التكلفة", "النسبة النموذجية من الإيرادات", "أين يتسرب الربح"],
    rows: [
      { b: "الأفراد (العمولات + الأجور)", p: "40–55%", l: "عدم متابعة الحجوزات، أوقات كراسي خاملة" },
      { b: "المنتجات والمستهلكات", p: "10–18%", l: "لا مبيعات تجزئة، إفراط في استخدام الصبغة/الوصلات" },
      { b: "المصاريف العامة (إيجار، فواتير، برمجيات)", p: "15–25%", l: "كثافة حجوزات ضعيفة، ساعات ميتة" },
      { b: "التسويق", p: "3–8%", l: "إنفاق بلا عائد استثمار قابل للقياس" },
      { b: "صافي الربح", p: "8–15%", l: "تآكله الخصومات وعدم الحضور" },
    ],
  },
  s1P2: [
    { t: "الطريقة الأسرع لتحريك المؤشر نادراً ما تكون " },
    { t: "«زيادة الأسعار»" },
    { t: ". المطلوب إغلاق التسريبات: الكراسي الخاملة، وعدم الحضور، وغياب " },
    { link: "تدفق إيرادات التجزئة ووصلات الشعر", href: "/blog/hair-extension-profit-margin-guide" },
    { t: "." },
  ],
  s2Heading: "2. سبعة روافع لزيادة ربحية الصالون",
  s2ImageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  s2ImageAlt: "تتبع هوامش ربح الصالون ومؤشرات الأداء",
  s2P: "تعامل معها كمقبض ضبط، لا كمفتاح تشغيل. كل واحدة ترفع الربح دون أن ترفع بالضرورة سعرك المعلن.",
  s2Table: {
    headers: ["الرافعة", "ماذا تفعل", "فوز سريع"],
    rows: [
      { b: "انضباط التسعير", p: "تسعير قائم على القيمة بدلاً من السباق نحو القاع", l: "راجع قائمة خدماتك؛ أعد تسعير أفضل 3 خدمات" },
      { b: "التجزئة والمنتجات المنزلية", p: "بيع العناية والوصلات عند الدفع", l: "حدد هدف ربط تجزئة بنسبة 25–35%" },
      { b: "إعادة الحجز والاحتفاظ", p: "يملأ المواعيد المستقبلية قبل مغادرة العميلات", l: "نص إعادة حجز في الاستقبال + تدفق تذكير" },
      { b: "مزيج الخدمات", p: "إضافة خدمات وصلات عالية الهامش", l: "درّب 1–2 مصففين على tape-in / nano" },
      { b: "استغلال الكراسي", p: "ساعات فوترة أكثر لكل كرسي", l: "حجز جماعي؛ حد أدنى للإشغال" },
      { b: "سياسة عدم الحضور", p: "تحمي إيراداتك المكتسبة", l: "عربون + بطاقة مسجلة خلال 24 ساعة" },
      { b: "متوسط الفاتورة", p: "باقات وترقيات وإضافات", l: "باقات «علاج + منتج منزلي»" },
    ],
  },
  s3Heading: "3. كيف تدير الصالون بكفاءة (العمليات)",
  s3ImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  s3ImageAlt: "مصففة صالون تستشير عميلة",
  s3P:
    "الربح يُصمم داخل العمليات، لا يُنقذ في نهاية الشهر. الصالونات التي نعمل معها والتي تتجاوز كرسي المالك نفسه تشترك في نظام تشغيل بسيط:",
  s3Cards: [
    { q: "وحّد الاستشارة", a: "نص استشارة واحد ثابت لكل خدمة. يحسّن النتائج، ويرفع مبيعات التجزئة، ويجعل تدريب المصففين الجدد أسرع." },
    { q: "تحكم في المخزون", a: "تتبّع مخزون الصبغة والوصلات ومنتجات العناية أسبوعياً. التخزين الزائد يجمّد النقد؛ والنقص يكلفك مبيعات. حساب تجاري بمواعيد تسليم متوقعة يجعل هذا سهلاً." },
    { q: "حسّن شبكة الحجوزات", a: "احمِ أوقات الذروة، وضع فجوات منطقية للخدمات الطويلة، واستخدم الحجز الجماعي لرفع إشغال الكراسي فوق 70%." },
    { q: "درّب على خدمات الوصلات", a: "الوصلات من أعلى الخدمات هامشاً التي يمكن أن يقدمها الصالون. مصففة واحدة مدرّبة يمكنها فتح خط إيراد جديد بالكامل — راجع دليلنا لبدء خدمة وصلات داخل الصالون." },
    { q: "اعقد اجتماع أرقام أسبوعياً", a: "15 دقيقة على ثلاثة مؤشرات: نسبة الإشغال %، نسبة ربط التجزئة %، نسبة إعادة الحجز %. إذا كان مؤشر ثابتاً، عيّن مسؤولاً وحلاً." },
  ],
  s4Heading: "4. بناء علامة وصلات الشعر الخاصة بصالونك (Private Label)",
  s4ImageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
  s4ImageAlt: "هوية وتغليف العلامة الخاصة لوصلات الشعر",
  s4P1: [
    { t: "أكثر الصالونات ربحية التي ساعدناها لم تكن تبيع الوصلات فحسب — بل " },
    { t: "امتلكت العلامة التي تطلبها عميلاتها بالاسم", b: true },
    { t: ". الـ private label يعني أن صالونك يبيع وصلات الشعر تحت " },
    { t: "اسمك", i: true },
    { t: " أنت، بتغليفك وحلقات ألوانك وهوامشك." },
  ],
  s4P2: "لماذا تتحول الصالونات إلى الـ private label:",
  s4Cards: [
    { label: "هامش أعلى", iconKey: "trendingUp", items: ["أنت تحدد سعر التجزئة", "لا هوامش لعلامة وسيطة", "إيراد منزلي متكرر"] },
    { label: "ولاء وتميّز", iconKey: "sparkles", items: ["العميلات يطلبن علامتك أنت", "أصعب للمقارنة السعرية", "أصل علامة تملكه"] },
    { label: "نحن نتكفل بالعمل الشاق", iconKey: "users", items: ["19 عاماً من التصنيع", "تغليف وحلقات ألوان مخصصة", "ساعدنا 50+ علامة صالون على الإطلاق"] },
  ],
  s4P3: "ماذا يتطلب الأمر فعلياً:",
  s4List: [
    { term: "MOQ", text: "طلب بداية معقول (نساعدك على تحديد حجمه بما يناسب قاعدة عملائك حتى لا يتبقى لديك مخزون راكد)." },
    { term: "العلامة", text: "شعارك على العبوات، وحلقة ألوان مخصصة، وبطاقات نقاط البيع." },
    { term: "وقت التسليم", text: "تشحن المجموعة كاملة من المصنع مباشرة عبر الشحن السريع (3–5 أيام) حتى تفي بوعودك للعملاء." },
    { term: "الدعم", text: "مطابقة الألوان والتدريب ونفس الدعم الممتد 19 عاماً من الخبرة الذي نقدمه لحساباتنا التجارية." },
  ],
  s4P4: [
    { t: "النتيجة التي نشاهدها غالباً: صالون كان يعيد بيع علامة مورّد أصبح الآن يملك خطاً منزلياً تعيد العميلات طلبه بالاسم — وهامشاً يخصهن هو. اقرأ " },
    { link: "الدليل الكامل للـ private label لصالونات UK", href: "/blog/private-label-hair-extensions-uk" },
    { t: " لمعرفة MOQs والتكاليف وخطة إطلاق خطوة بخطوة." },
  ],
  s5Heading: "5. خطة عمل من 90 يوماً",
  s5Table: {
    headers: ["المرحلة", "التركيز", "النتيجة المستهدفة"],
    rows: [
      { b: "الأيام 1–30", p: "أغلق التسريبات", l: "تفعيل سياسة العربون، نص إعادة الحجز، جرد المخزون" },
      { b: "الأيام 31–60", p: "ارفع متوسط الفاتورة", l: "ربط تجزئة 25%+، تدريب 1–2 مصففين على الوصلات" },
      { b: "الأيام 61–90", p: "ابنِ العلامة", l: "طلب عينات private label أو فتح حساب تجاري" },
    ],
  },
  s6Heading: "6. أخطاء شائعة يرتكبها أصحاب الصالونات في UK",
  s6Cards: [
    { q: "الخصومات لملء المواعيد", a: "المواعيد الفارغة مشكلة حجوزات لا مشكلة أسعار. الخصم يعلّم العميلات انتظار العرض التالي." },
    { q: "لا إيراد تجزئة أو وصلات", a: "الصالونات الخدمية فقط تترك 10–18% من الهامش المحتمل على الطاولة في كل موعد." },
    { q: "التعامل مع العلامة على أنها ملك شخص آخر", a: "إذا كانت العميلات تعرف اسم المورّد فقط، فأنت بنيت قاعدة جمهور لعلامة لا تملكها." },
    { q: "الإدارة بالحدس لا بالمؤشرات", a: "إذا كنت لا ترى نسبة الإشغال ونسبة الربط ونسبة إعادة الحجز، فلن تستطيع إصلاح ما يستنزف الربح بصمت." },
  ],
  ctaBoxTitle: "جاهز لبناء صالون أكثر ربحية؟",
  ctaBoxBody:
    "افتح حساباً تجارياً UK مجاناً واحصل على وصلات شعر بشري Remy 100% بأسعار احترافية — أو تحدث معنا حول إطلاق خط private label الخاص بك.",
  ctaBoxPrimaryLabel: "افتح حساب تجاري ←",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "أطلق علامتك",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    { q: "ما مدى ربحية صالون الشعر في المملكة المتحدة؟", a: "يحقق الصالون المُدار جيداً في UK عادة صافي ربح يتراوح بين 8–15% من الإيرادات. الفجوة بين الصالون المتعثر والصبالح المربح غالباً ما تكون انضباطاً تشغيلياً — إعادة الحجز وربط التجزئة وإشغال الكراسي — لا الأسعار المعلنة." },
    { q: "ما هامش الربح الذي يجب أن يستهدفه صالون الشعر؟", a: "استهدف هامشاً صافياً لا يقل عن 10%، مع 12–15% كهدف قوي. أقل من 8% لا يترك أي هامش أمان تقريباً لارتفاع الإيجار أو المواسم الهادئة؛ وأكثر من 15% باستمرار يعني عادة أن لديك ميزة تنافسية حقيقية (غالباً خط وصلات أو تجزئة قوي)." },
    { q: "كيف يمكن للصالون زيادة الأرباح دون رفع الأسعار؟", a: "أغلق التسريبات أولاً: طبق سياسة عربون/عدم حضور، ودرّب الاستقبال على إعادة الحجز قبل مغادرة العميلات، وحدد هدف ربط تجزئة بنسبة 25–35%، وأضف خدمات وصلات عالية الهامش. هذا يرفع الربح لكل عميلة دون المساس بأسعار قائمتك." },
    { q: "هل يجب أن يطلق صالوني علامة وصلات شعر خاصة به؟", a: "إذا كنت تبيع الوصلات بالفعل ولديك قاعدة عملاء مخلصون، فإن الـ private label غالباً الخطوة التالية الأعلى أثراً. تحتفظ بالهامش، وتملك علاقة العميلة، وتميّز نفسك عن الصالونات التي تعيد بيع اسم مورّد فقط. ابدأ بطلب عينات صغير مُحكَم الاختيار." },
    { q: "ما هو الـ private label للصالونات وكيف يعمل؟", a: "الـ private label يعني أن الوصلات تُصنع وتُغلف تحت علامة صالونك — شعارك وحلقة ألوانك وتغليفك. شريك تصنيع (مثل D.S Hair & Beauty) يتولى الإنتاج والجودة؛ بينما تملك أنت العلامة والتسعير وعلاقة العميلة." },
    { q: "كم يستغرق إطلاق خط وصلات private label؟", a: "عادة بضعة أسابيع لإنهاء العلامة وطلب العينات، ثم إعادة توريد سريعة مستمرة. تشحن المجموعة كاملة من المصنع مباشرة عبر الشحن السريع (3–5 أيام)، لتنفيذ مواعيد التوريد لعملائك من اليوم الأول." },
    { q: "كيف أختار شريك تصنيع وصلات الشعر في المملكة المتحدة؟", a: "ابحث عن خبرة صناعية مثبتة، وشعر بشري Remy 100% كمعيار، وMOQs ومواعيد تسليم شفافة، ودعم تدريب ومطابقة ألوان حقيقي. راجع قائمة المورّدين لدينا للأسئلة الكاملة قبل الالتزام." },
  ],
  rel1Label: "دليل ذو صلة",
  rel1Title: "Private Label وصلات الشعر UK: الدليل الكامل",
  rel1Href: "/blog/private-label-hair-extensions-uk",
  rel2Label: "مقال ذو صلة",
  rel2Title: "هوامش ربح وصلات الشعر: ما يكسبه أصحاب الصالونات",
  rel2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "المزيد من المقالات",
}

const sv: GrowProfitableHairSalonUkContent = {
  seoTitle: "Så driver du en lönsam hårsalong i Storbritannien | D.S Hair Beauty",
  seoDescription:
    "En praktisk handbok från 19 år i branschen för brittiska salongsägare: höj vinstmarginalerna, effektivisera driften och bygg ditt eget hårförlängningsmärke genom private label. Verkliga ramverk och siffror.",
  jsonLdHeadline:
    "Så driver du en lönsam hårsalong i Storbritannien: Drift, vinst & att bygga ett eget varumärke",
  jsonLdDescription:
    "En praktisk brittisk guide för att höja salongens vinstmarginaler, effektivisera driften och bygga ditt eget varumärke för hårförlängning genom private label — från 19 år av att hjälpa salonger att växa.",
  heroBadge: "Salongsföretag",
  heroTitle: "Så driver du en lönsam hårsalong i Storbritannien",
  heroSubtitle:
    "En rakt-på-sak handbok om marginaler, drift och att bygga salongens eget hårförlängningsmärke — skriven efter 19 år av att hjälpa brittiska salonger växa från stolsuthyrning till igenkända varumärken.",
  ctaPrimaryLabel: "Öppna ett handelskonto",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Bygg ditt varumärke →",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "Hem",
  navBlog: "Blogg",
  navCurrent: "Driva en lönsam hårsalong",
  intro1: [
    { t: "Under de senaste " },
    { t: "19 åren", b: true },
    { t: " har vi levererat till, utbildat och samarbetat med salonger i hela Storbritannien — från fristående enstolsalonger till koncerner med flera enheter. De salonger som blomstrar är sällan de med den snyggaste inredningen. Det är de som driver verksamheten som ett företag: de skyddar sin " },
    { t: "marginal", b: true },
    { t: ", systematiserar sin " },
    { t: "drift", b: true },
    { t: " och bygger i allt högre grad " },
    { t: "ett eget varumärke", b: true },
    { t: " i stället för att bara återförsälja någon annans." },
  ],
  intro2:
    "Den här guiden samlar dessa lärdomar på ett ställe. Den är skriven för brittiska salongsägare och chefer som vill ha praktiska ramverk — inte teori. När vi anger en siffra ger vi både intervallet och logiken bakom, så att du kan anpassa den till din egen salong.",
  s1Heading: "1. Den verkliga ekonomin i en brittisk hårsalong",
  s1P: [
    { t: "En salongs vinst är det som blir kvar efter tre kostnadsposter: " },
    { t: "personal", b: true },
    { t: " (stylistprovisioner, assistenter, reception), " },
    { t: "produkter & förbrukningsmaterial", b: true },
    { t: " (färg, förlängningar, eftervård) och " },
    { t: "omkostnader", b: true },
    { t: " (hyra, el, mjukvara, marknadsföring). I hela Storbritannien hamnar en välskött salong vanligtvis på en " },
    { t: "nettovinstmarginal på cirka 8–15%", b: true },
    { t: " av omsättningen. Under 8% arbetar du åt hyresvärden; över 15% varaktigt gör du något genuint rätt." },
  ],
  s1Table: {
    headers: ["Kostnadspost", "Typisk % av omsättningen", "Var vinsten läcker"],
    rows: [
      { b: "Personal (provision + löner)", p: "40–55%", l: "Oregistrerad återbokning, inaktiva stolar" },
      { b: "Produkter & förbrukningsmaterial", p: "10–18%", l: "Ingen detaljhandel, överanvändning av färg/förlängningar" },
      { b: "Omkostnader (hyra, räkningar, mjukvara)", p: "15–25%", l: "Dålig bokningstäthet, döda timmar" },
      { b: "Marknadsföring", p: "3–8%", l: "Utgifter utan mätbar ROI" },
      { b: "Nettovinst", p: "8–15%", l: "Urholkad av rabatter & no-shows" },
    ],
  },
  s1P2: [
    { t: "Det snabbaste sättet att flytta siffrorna är sällan att " },
    { t: "„ta mer betalt“" },
    { t: ". Det handlar om att täppa läckorna: inaktiva stolar, no-shows och en saknad " },
    { link: "detaljhandels- och förlängningsintäktsström", href: "/blog/hair-extension-profit-margin-guide" },
    { t: "." },
  ],
  s2Heading: "2. Sju spakar för att öka salongens lönsamhet",
  s2ImageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  s2ImageAlt: "Spåra salongens vinstmarginaler och KPI:er",
  s2P: "Behandla dem som rattar, inte som strömbrytare. Var och en lyfter vinsten utan att nödvändigtvis höja ditt pris på prisskylten.",
  s2Table: {
    headers: ["Spak", "Vad den gör", "Snabb vinst"],
    rows: [
      { b: "Prisdisciplin", p: "Värdebaserad prissättning i stället för en kapplöpning mot botten", l: "Granska menyn; prisa om dina 3 bästa tjänster" },
      { b: "Detaljhandel & take-home", p: "Eftervård + förlängningar säljs i kassan", l: "Sätt ett mål på 25–35% detaljhandelskoppling" },
      { b: "Återbokning & retention", p: "Fyller framtida kolumner innan kunderna går", l: "Återbokningsmanus i receptionen + påminnelser" },
      { b: "Tjänsteblandning", p: "Lägg till marginalstarka förlängningstjänster", l: "Utbilda 1–2 stylister på tape-in / nano" },
      { b: "Utnyttjande", p: "Fler fakturerbara timmar per stol", l: "Blockbokning; trösklar för minsta fyllnad" },
      { b: "No-show-policy", p: "Skyddar intäkter du redan tjänat", l: "Deposition + 24h kort i systemet" },
      { b: "Genomsnittskvitto", p: "Paket, uppgraderingar, tillägg", l: "Paket med „behandling + take-home“" },
    ],
  },
  s3Heading: "3. Så driver du en salong effektivt (drift)",
  s3ImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  s3ImageAlt: "Salongstylist i konsultation med en kund",
  s3P:
    "Vinsten designas in i driften, den räddas inte i slutet av månaden. De salonger vi arbetar med som växer förbi ägarens egen stol delar ett enkelt operativt system:",
  s3Cards: [
    { q: "Standardisera konsultationen", a: "Ett konsekvent konsultationsmanus per tjänst. Det förbättrar resultaten, lyfter detaljhandelskopplingen och gör utbildningen av nya stylister snabb." },
    { q: "Kontrollera lagret", a: "Följ upp färg, förlängningar och eftervård veckovis. Överlager binder kapital; underlager kostar dig försäljning. Ett handelskonto med förutsägbara ledtider gör detta enkelt." },
    { q: "Optimera bokningsrutnätet", a: "Skydda dina toppkolumner, sätt rimliga luckor för långa tjänster och använd blockbokning för att höja stolsutnyttjandet över 70%." },
    { q: "Utbilda för förlängningstjänster", a: "Förlängningar är bland de marginalstarkaste tjänsterna en salong kan erbjuda. En utbildad stylist kan öppna en helt ny intäktslinje — se vår guide för att starta en förlängningstjänst i salongen." },
    { q: "Ha ett veckomöte om siffror", a: "15 minuter på tre KPI:er: utnyttjande %, detaljhandelskoppling %, återbokning %. Om en siffra står still, utse en ägare och en åtgärd." },
  ],
  s4Heading: "4. Bygg salongens eget hårförlängningsmärke (Private Label)",
  s4ImageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
  s4ImageAlt: "Private label branding och förpackning för hårförlängning",
  s4P1: [
    { t: "De mest lönsamma salonger vi hjälpt sålde inte bara förlängningar — de " },
    { t: "ägde det varumärke deras kunder bad om vid namn", b: true },
    { t: ". Private label innebär att din salong säljer hårförlängningar under " },
    { t: "ditt", i: true },
    { t: " namn, med dina förpackningar, dina färgringar och dina marginaler." },
  ],
  s4P2: "Varför salonger går över till private label:",
  s4Cards: [
    { label: "Högre marginal", iconKey: "trendingUp", items: ["Du sätter detaljhandelspriset", "Ingen mellanvarumärkespåslag", "Återkommande take-home-intäkter"] },
    { label: "Lojalitet & differentiering", iconKey: "sparkles", items: ["Kunder frågar efter DITT varumärke", "Svårare att prisshoppa", "En varumärkestillgång du äger"] },
    { label: "Vi gör det tunga arbetet", iconKey: "users", items: ["19 års tillverkning", "Anpassade förpackningar & färgringar", "Hjälpt 50+ salongsmärken att lanseras"] },
  ],
  s4P3: "Vad det faktiskt innebär:",
  s4List: [
    { term: "MOQ", text: "en rimlig startorder (vi hjälper dig storleksanpassa den efter din kundbas så att du inte sitter på lager)." },
    { term: "Varumärke", text: "din logotyp på förpackningarna, en anpassad färgring och point-of-sale-kort." },
    { term: "Ledtid", text: "vårt brittiska lager är på väg att lanseras; fram till dess skickas hela sortimentet direkt från fabriken via express (3–5 dagar) så att du kan hålla löften till kunderna." },
    { term: "Support", text: "färgmatchning, utbildning och samma 19-åriga erfarenhetsstöd vi ger våra handelskonton." },
  ],
  s4P4: [
    { t: "Resultatet vi ser oftast: en salong som en gång återförsålde en leverantörs varumärke har nu en take-home-linje som kunderna beställer om vid namn — och en marginal som tillhör dem. Läs hela " },
    { link: "private label-guiden för brittiska salonger", href: "/blog/private-label-hair-extensions-uk" },
    { t: " om MOQ, kostnader och en steg-för-steg-lanseringsplan." },
  ],
  s5Heading: "5. En 90-dagars handlingsplan",
  s5Table: {
    headers: ["Fas", "Fokus", "Målresultat"],
    rows: [
      { b: "Dag 1–30", p: "Täpp till läckorna", l: "Depositionspolicy live, återbokningsmanus, lagerräkning" },
      { b: "Dag 31–60", p: "Lyft genomsnittskvittot", l: "Detaljhandelskoppling 25%+, 1–2 stylister förlängningsutbildade" },
      { b: "Dag 61–90", p: "Bygg varumärket", l: "Private label-provbäställning eller handelskonto öppnat" },
    ],
  },
  s6Heading: "6. Vanliga misstag brittiska salongsägare gör",
  s6Cards: [
    { q: "Rabatter för att fylla kolumner", a: "Tomma kolumner är ett bokningsproblem, inte ett prisfråga. Rabatter lär kunderna att vänta på nästa erbjudande." },
    { q: "Ingen detaljhandels- eller förlängningsintäkt", a: "Renodlade servicesalonger lämnar 10–18% av potentiell marginal på bordet vid varje besök." },
    { q: "Behandla varumärket som någon annans", a: "Om kunderna bara känner leverantörens namn har du byggt en följarskara för ett varumärke du inte äger." },
    { q: "Styra på magkänsla, inte KPI:er", a: "Kan du inte se utnyttjande, koppling och återbokningsprocent kan du inte åtgärda det som tyst dränerar vinsten." },
  ],
  ctaBoxTitle: "Redo att bygga en mer lönsam salong?",
  ctaBoxBody:
    "Öppna ett gratis brittiskt handelskonto och hitta 100% Remy människohårsförlängningar till professionella priser — eller prata med oss om att lansera din egen private label-linje.",
  ctaBoxPrimaryLabel: "Öppna ett handelskonto →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Starta ditt varumärke",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "Vanliga frågor",
  faqs: [
    { q: "Hur lönsam är en hårsalong i Storbritannien?", a: "En välskött brittisk salong når vanligtvis runt 8–15% av omsättningen i vinst. Gapet mellan en kämpande och en lönsam salong handlar oftast om operativ disciplin — återbokning, detaljhandelskoppling och stolsutnyttjande — snarare än priser." },
    { q: "Vilken vinstmarginal bör en hårsalong sikta på?", a: "Sikta på en nettomarginal på minst 10%, med 12–15% som ett starkt mål. Under 8% finns nästan inget utrymme för hyreshöjningar eller lugna säsonger; över 15% varaktigt innebär oftast en verklig konkurrensfördel (ofta en stark förlängnings- eller detaljhandelslinje)." },
    { q: "Hur kan en salong öka vinsten utan att höja priserna?", a: "Täpp till läckorna först: inför en depositions-/no-show-policy, utbilda receptionen att återboka innan kunderna går, sätt ett mål på 25–35% detaljhandelskoppling och lägg till marginalstarka förlängningstjänster. Det lyfter vinsten per kund utan att röra menyn." },
    { q: "Ska min salong starta ett eget hårförlängningsmärke?", a: "Om du redan säljer förlängningar och har en lojal kundbas är private label ofta nästa steg med högst hävstång. Du behåller marginalen, äger kundrelationen och differentierar dig från salonger som bara återförsäljer en leverantörs namn. Börja med en liten, väl vald provbeställning." },
    { q: "Vad är private label för salonger och hur fungerar det?", a: "Private label innebär att förlängningar tillverkas och packas under din salongs varumärke — din logotyp, din färgring, dina förpackningar. En tillverkningspartner (som D.S Hair & Beauty) sköter produktion och kvalitet; du äger varumärket, prissättningen och kundrelationen." },
    { q: "Hur lång tid tar det att lansera en private label-hårförlängningslinje?", a: "Vanligtvis några veckor för att färdigställa varumärket och en provbeställning, därefter löpande expresspåfyllning. Vårt brittiska lager är på väg att lanseras; fram till dess skickas hela sortimentet direkt från fabriken via express (3–5 dagar), så att du kan lova tillförlitlig leverans från dag ett." },
    { q: "Hur väljer jag en tillverkningspartner för hårförlängning i Storbritannien?", a: "Leta efter beprövad branscherfarenhet, 100% Remy människohår som standard, transparenta MOQ och ledtider samt verkligt utbildnings- och färgmatchningsstöd. Se vår leverantörschecklista för alla frågor att ställa innan du förbinder dig." },
  ],
  rel1Label: "Relaterad guide",
  rel1Title: "Private Label Hårförlängning UK: Komplett guide",
  rel1Href: "/blog/private-label-hair-extensions-uk",
  rel2Label: "Relaterad artikel",
  rel2Title: "Vinstmarginaler för förlängningar: vad salongsägare tjänar",
  rel2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "Fler artiklar",
}

const pl: GrowProfitableHairSalonUkContent = {
  seoTitle: "Jak prowadzić dochodowy salon fryzjerski w UK | D.S Hair Beauty",
  seoDescription:
    "Praktyczny podręcznik z 19-letniego doświadczenia dla właścicieli salonów w UK: podnieś marże, usprawnij operacje i zbuduj własną markę przedłużania włosów w ramach private label. Prawdziwe ramy i liczby.",
  jsonLdHeadline:
    "Jak prowadzić dochodowy salon fryzjerski w UK: Operacje, zysk i budowanie własnej marki",
  jsonLdDescription:
    "Praktyczny przewodnik UK, jak podnieść marże salonu, usprawnić operacje i zbudować własną markę przedłużeń włosów przez private label — z 19 lat pomagania salonom w rozwoju.",
  heroBadge: "Biznes Salonowy",
  heroTitle: "Jak prowadzić dochodowy salon fryzjerski w UK",
  heroSubtitle:
    "Rzeczowy podręcznik o marżach, operacjach i budowaniu własnej marki przedłużeń włosów w Twoim salonie — napisany po 19 latach pomagania salonom w UK przejść od wynajmu fotela do rozpoznawalnych marek.",
  ctaPrimaryLabel: "Otwórz konto hurtowe",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Zbuduj swoją markę →",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "Strona główna",
  navBlog: "Blog",
  navCurrent: "Prowadzenie dochodowego salonu fryzjerskiego",
  intro1: [
    { t: "Przez ostatnie " },
    { t: "19 lat", b: true },
    { t: " zaopatrywaliśmy, szkoliliśmy i współpracowaliśmy z salonami w całym UK — od niezależnych jedno-fotelowych po grupy wielooddziałowe. Salony, które prosperują, rzadko są tymi z najmodniejszym wnętrzem. To te, które traktują biznes jak biznes: chronią swoją " },
    { t: "marżę", b: true },
    { t: ", systematyzują " },
    { t: "operacje", b: true },
    { t: " i coraz częściej budują " },
    { t: "własną markę", b: true },
    { t: " zamiast tylko odsprzedawać cudzą." },
  ],
  intro2:
    "Ten przewodnik zbiera te lekcje w jednym miejscu. Jest napisany dla właścicieli i menedżerów salonów w UK, którzy chcą praktycznych ram — nie teorii. Gdy podajemy liczbę, podajemy zakres i logikę, byś mógł dostosować ją do swojego salonu.",
  s1Heading: "1. Realna ekonomia salonu fryzjerskiego w UK",
  s1P: [
    { t: "Zysk salonu to to, co zostaje po trzech kategoriach kosztów: " },
    { t: "ludzie", b: true },
    { t: " (prowizje stylistów, asystenci, recepcja), " },
    { t: "produkty i materiały", b: true },
    { t: " (koloryzacja, przedłużenia, pielęgnacja) oraz " },
    { t: "koszty stałe", b: true },
    { t: " (czynsz, media, oprogramowanie, marketing). W całym UK dobrze prowadzony salon osiąga zwykle " },
    { t: "marżę netto na poziomie około 8–15%", b: true },
    { t: " obrotu. Poniżej 8% pracujesz dla właściciela lokalu; powyżej 15% utrzymywane, robisz coś naprawdę dobrze." },
  ],
  s1Table: {
    headers: ["Kategoria kosztów", "Typowy % obrotu", "Gdzie ucieka zysk"],
    rows: [
      { b: "Ludzie (prowizja + pensje)", p: "40–55%", l: "Nieśledzone rezerwacje, bezczynne fotele" },
      { b: "Produkty i materiały", p: "10–18%", l: "Brak sprzedaży detalicznej, nadużycie koloru/przedłużeń" },
      { b: "Koszty stałe (czynsz, rachunki, oprogramowanie)", p: "15–25%", l: "Słaba gęstość rezerwacji, martwe godziny" },
      { b: "Marketing", p: "3–8%", l: "Wydatki bez mierzalnego ROI" },
      { b: "Zysk netto", p: "8–15%", l: "Erodowany przez rabaty i no-shows" },
    ],
  },
  s1P2: [
    { t: "Najszybszy sposób na poruszenie wskaźników to rzadko " },
    { t: "„podnieść ceny”" },
    { t: ". To zamknięcie wycieków: bezczynne fotele, no-shows i brakujący " },
    { link: "strumień przychodów z detalicznej sprzedaży i przedłużeń", href: "/blog/hair-extension-profit-margin-guide" },
    { t: "." },
  ],
  s2Heading: "2. Siedem dźwigni zwiększających rentowność salonu",
  s2ImageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  s2ImageAlt: "Śledzenie marż i KPI salonu",
  s2P: "Traktuj je jak pokrętła, nie jak przełączniki. Każda podnosi zysk bez konieczności podnoszenia ceny w cenniku.",
  s2Table: {
    headers: ["Dźwignia", "Co robi", "Szybka wygrana"],
    rows: [
      { b: "Dyscyplina cenowa", p: "Wycenianie oparte na wartości zamiast wyścigu na dno", l: "Audyt menu; przeszacuj 3 najlepsze usługi" },
      { b: "Detal i take-home", p: "Pielęgnacja + przedłużenia sprzedawane przy kasie", l: "Ustal cel 25–35% wskaźnika sprzedaży detalicznej" },
      { b: "Ponowna rezerwacja i utrzymanie", p: "Wypełnia przyszłe terminy, zanim klientki wyjdą", l: "Skrypt rezerwacji na recepcji + przepływ przypomnień" },
      { b: "Mix usług", p: "Dodaj wysokomarżowe usługi przedłużania", l: "Szkol 1–2 stylistów z tape-in / nano" },
      { b: "Wykorzystanie", p: "Więcej rozliczalnych godzin na fotel", l: "Rezerwacja blokowa; progi minimalnego obłożenia" },
      { b: "Polityka no-show", p: "Chroni przychody, które już zarobiłeś", l: "Zadatek + karta w systemie na 24h" },
      { b: "Średni rachunek", p: "Pakiety, ulepszenia, dodatki", l: "Pakiety „zabieg + take-home”" },
    ],
  },
  s3Heading: "3. Jak prowadzić salon efektywnie (operacje)",
  s3ImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  s3ImageAlt: "Stylistka salonu konsultuje się z klientką",
  s3P:
    "Zysk projektuje się w operacjach, a nie ratuje na koniec miesiąca. Salony, z którymi pracujemy i które wyrastają ponad fotel właściciela, dzielą prosty system operacyjny:",
  s3Cards: [
    { q: "Ujednolić konsultację", a: "Jeden spójny skrypt konsultacji na każdą usługę. Poprawia wyniki, podnosi sprzedaż detaliczną i przyspiesza szkolenie nowych stylistów." },
    { q: "Kontrolować zapasy", a: "Śledź co tydzień stan koloru, przedłużeń i pielęgnacji. Przezapasowanie wiąże gotówkę; niedobór kosztuje sprzedaż. Konto hurtowe z przewidywalnymi terminami sprawia, że to łatwe." },
    { q: "Zoptymalizować grafik", a: "Chroń godziny szczytu, ustal sensowne odstępy dla długich usług i używaj rezerwacji blokowej, by podnieść wykorzystanie foteli powyżej 70%." },
    { q: "Szkolić z usług przedłużania", a: "Przedłużenia należą do najbardziej dochodowych usług, jakie salon może oferować. Jedna przeszkolona stylistka może otworzyć całą nową linię przychodów — zobacz nasz przewodnik o uruchamianiu usługi przedłużania w salonie." },
    { q: "Prowadzić cotygodniowe spotkanie liczbowe", a: "15 minut na trzech KPI: wykorzystanie %, sprzedaż detaliczna %, ponowna rezerwacja %. Jeśli liczba stoi w miejscu, wyznacz właściciela i rozwiązanie." },
  ],
  s4Heading: "4. Budowanie własnej marki przedłużeń salonu (Private Label)",
  s4ImageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
  s4ImageAlt: "Branding i opakowania private label przedłużeń włosów",
  s4P1: [
    { t: "Najbardziej dochodowe salony, którym pomogliśmy, nie tylko sprzedawały przedłużenia — " },
    { t: "posiadały markę, o którą klientki prosiły po imieniu", b: true },
    { t: ". Private label oznacza, że Twój salon sprzedaje przedłużenia włosów pod " },
    { t: "Twoim", i: true },
    { t: " nazwiskiem, z Twoimi opakowaniami, pierścieniami kolorów i marżami." },
  ],
  s4P2: "Dlaczego salony przechodzą na private label:",
  s4Cards: [
    { label: "Wyższa marża", iconKey: "trendingUp", items: ["To Ty ustalasz cenę detaliczną", "Brak narzutu marki pośredniej", "Powtarzalny przychód take-home"] },
    { label: "Lojalność i wyróżnienie", iconKey: "sparkles", items: ["Klientki pytają o TWOJĄ markę", "Trudniej porównywać ceny", "Aktyw marki, który posiadasz"] },
    { label: "My robimy ciężką pracę", iconKey: "users", items: ["19 lat produkcji", "Indywidualne opakowania i pierścienie kolorów", "Pomogliśmy 50+ markom salonów wystartować"] },
  ],
  s4P3: "Co to faktycznie wymaga:",
  s4List: [
    { term: "MOQ", text: "rozsądne zamówienie startowe (pomagamy dobrać wielkość do bazy klientów, byś nie siedział na zapasach)." },
    { term: "Branding", text: "Twój logo na opakowaniach, indywidualny pierścień kolorów i karty przy kasie." },
    { term: "Czas realizacji", text: "cała gama wysyłana jest bezpośrednio z fabryki ekspresowo (3–5 dni), byś mógł dotrzymać obietnic klientkom." },
    { term: "Wsparcie", text: "dobór kolorów, szkolenia i to samo 19-letnie zaplecze doświadczenia, które dajemy naszym kontom hurtowym." },
  ],
  s4P4: [
    { t: "Najczęstszy efekt: salon, który kiedyś odsprzedawał markę dostawcy, ma teraz linię take-home zamawianą przez klientki po imieniu — i marżę, która należy do niego. Przeczytaj pełny " },
    { link: "przewodnik private label dla salonów w UK", href: "/blog/private-label-hair-extensions-uk" },
    { t: " o MOQ, kosztach i planie startu krok po kroku." },
  ],
  s5Heading: "5. 90-dniowy plan działania",
  s5Table: {
    headers: ["Faza", "Cel", "Docelowy wynik"],
    rows: [
      { b: "Dni 1–30", p: "Zatkaj wycieki", l: "Polityka zadatku wdrożona, skrypt rezerwacji, inwentaryzacja" },
      { b: "Dni 31–60", p: "Podnieś średni rachunek", l: "Sprzedaż detaliczna 25%+, 1–2 stylistów przeszkolonych z przedłużeń" },
      { b: "Dni 61–90", p: "Zbuduj markę", l: "Zamówienie próbek private label lub otwarte konto hurtowe" },
    ],
  },
  s6Heading: "6. Częste błędy właścicieli salonów w UK",
  s6Cards: [
    { q: "Rabaty na zapełnienie terminów", a: "Puste terminy to problem rezerwacji, nie cen. Rabaty uczą klientki czekać na następną ofertę." },
    { q: "Brak przychodów z detalu lub przedłużeń", a: "Salony tylko usługowe zostawiają 10–18% potencjalnej marży na stole przy każdej wizycie." },
    { q: "Traktowanie marki jako cudzej", a: "Jeśli klientki znają tylko nazwę dostawcy, zbudowałeś publiczność dla marki, której nie posiadasz." },
    { q: "Zarządzanie intuicją, nie KPI", a: "Jeśli nie widzisz wykorzystania, wskaźnika sprzedaży i procentu ponownych rezerwacji, nie naprawisz tego, co cicho drenuje zysk." },
  ],
  ctaBoxTitle: "Gotowy zbudować bardziej dochodowy salon?",
  ctaBoxBody:
    "Otwórz darmowe konto hurtowe w UK i pozyskuj przedłużenia z 100% naturalnych włosów Remy w cenach profesjonalnych — albo porozmawiaj z nami o uruchomieniu własnej linii private label.",
  ctaBoxPrimaryLabel: "Otwórz konto hurtowe →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Zacznij swoją markę",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "Najczęściej Zadawane Pytania",
  faqs: [
    { q: "Jak dochodowy jest salon fryzjerski w UK?", a: "Dobrze prowadzony salon w UK osiąga zwykle około 8–15% obrotu zysku netto. Różnica między walczącym a dochodowym salonem to zazwyczaj dyscyplina operacyjna — ponowne rezerwacje, sprzedaż detaliczna i wykorzystanie foteli — a nie ceny." },
    { q: "Jaką marżę powinien celować salon fryzjerski?", a: "Celuj w marżę netto co najmniej 10%, z 12–15% jako mocnym celem. Poniżej 8% nie ma prawie żadnego bufora na podwyżki czynszu czy ciche sezony; powyżej 15% utrzymywane zwykle oznacza realną przewagę konkurencyjną (często silną linię przedłużeń lub detalu)." },
    { q: "Jak salon może zwiększyć zyski bez podnoszenia cen?", a: "Najpierw zatkaj wycieki: wprowadź politykę zadatku/no-show, naucz recepcję ponownej rezerwacji przed wyjściem klientek, ustal cel 25–35% sprzedaży detalicznej i dodaj wysokomarżowe usługi przedłużania. To podnosi zysk na klientkę bez ruszania cen w menu." },
    { q: "Czy mój salon powinien założyć własną markę przedłużeń?", a: "Jeśli już sprzedajesz przedłużenia i masz lojalną bazę klientek, private label to często kolejny krok o największej dźwigni. Zachowujesz marżę, posiadasz relację z klientką i odróżniasz się od salonów odsprzedających tylko nazwę dostawcy. Zacznij od małego, dobrze dobranego zamówienia próbnego." },
    { q: "Czym jest private label dla salonów i jak działa?", a: "Private label oznacza, że przedłużenia są produkowane i pakowane pod marką Twojego salonu — Twoje logo, Twój pierścień kolorów, Twoje opakowania. Partner produkcyjny (jak D.S Hair & Beauty) zajmuje się produkcją i jakością; Ty posiadasz markę, ceny i relację z klientką." },
    { q: "Ile czasu zajmuje uruchomienie linii przedłużeń private label?", a: "Zazwyczaj kilka tygodni na finalizację brandingu i zamówienia próbnego, potem ciągłe ekspresowe uzupełnianie. Cała gama wysyłana jest bezpośrednio z fabryki ekspresowo (3–5 dni), więc możesz obiecać klientkom niezawodną realizację od pierwszego dnia." },
    { q: "Jak wybrać partnera produkcyjnego przedłużeń w UK?", a: "Szukaj udokumentowanego doświadczenia branżowego, 100% naturalnych włosów Remy jako standardu, transparentnych MOQ i terminów oraz realnego wsparcia szkoleniowego i doboru kolorów. Zobacz naszą listę kontrolną dostawców, by poznać wszystkie pytania przed zobowiązaniem." },
  ],
  rel1Label: "Powiązany przewodnik",
  rel1Title: "Private Label Przedłużenia Włosów UK: Kompletny przewodnik",
  rel1Href: "/blog/private-label-hair-extensions-uk",
  rel2Label: "Powiązany artykuł",
  rel2Title: "Marże na przedłużeniach: ile zarabiają właściciele salonów",
  rel2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "Więcej artykułów",
}

export const growProfitableHairSalonUkContent: Record<Locale, GrowProfitableHairSalonUkContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
