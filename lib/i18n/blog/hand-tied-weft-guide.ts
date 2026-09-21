import type { Locale } from "@/lib/i18n/config"

// Content module for the "Hand-Tied Weft Guide" blog post.
// All visible copy is externalised here so the page can be rendered in any of
// the 6 locales with an identical layout. English is the source of truth.

export interface HandTiedWeftGuideContent {
  seoTitle: string
  seoDescription: string
  breadcrumb: string
  metaCategory: string
  metaDate: string
  metaReadTime: string
  heroTitle: string
  heroSubtitle: string
  heroImageSrc: string
  heroImageAlt: string
  whatHeading: string
  whatP1: string
  whatP2: string
  whatP3: string
  whyHeading: string
  whyItems: { label: string; text: string }[]
  applyHeading: string
  applyPIntro: string
  applyPStrong: string
  applyPOutro: string
  applySteps: { label: string; text: string }[]
  timelineCalloutTitle: string
  timelineCalloutBody: string
  vsHeading: string
  vsTableHead: string[]
  vsTableRows: string[][]
  maintenanceHeading: string
  maintenanceP: string
  maintenanceTableHead: string[]
  maintenanceTableRows: string[][]
  careLead: string
  careBody: string
  costHeading: string
  costP: string
  costTableHead: string[]
  costTableRows: string[][]
  costP2: string
  caseHeading: string
  caseQuote: string
  caseCite: string
  mistakesHeading: string
  mistakes: { problem: string; solution: string }[]
  faqHeading: string
  faqs: { q: string; a: string }[]
  ctaBoxTitle: string
  ctaBoxBody: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
  backLabel: string
}

const en: HandTiedWeftGuideContent = {
  seoTitle: "What is Hand-Tied Weft Hair Extensions? Complete Guide 2025 | DS Hair Beauty",
  seoDescription:
    "Hand-tied weft explained — what it is, why salons prefer it, how to apply it, and where to source trade-grade hand-tied weft in Manchester. Expert guide from DS Hair Beauty.",
  breadcrumb: "Back to Blog",
  metaCategory: "Product Guide",
  metaDate: "March 2025",
  metaReadTime: "12 min read",
  heroTitle: "What is Hand-Tied Weft Hair Extensions? The Complete Salon Guide for 2025",
  heroSubtitle:
    "Hand-tied weft has become the most requested extension method in UK professional salons — and for good reason. If you are a salon owner or hair extension specialist, here is everything you need to know.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "Hand-tied weft hair extensions",
  whatHeading: "What is Hand-Tied Weft?",
  whatP1:
    "Hand-tied weft (also called hand-sewn weft, HTW, or invisible weft) is a type of hair extension made by hand-sewing individual strands of hair onto a thin thread track — as opposed to machine weft, which uses a thick machine-sewn edge. The result is an ultra-thin, flat, flexible weft that sits at approximately 1mm thickness against the scalp and is virtually undetectable even through fine or light-coloured hair.",
  whatP2:
    "Unlike machine weft, hand-tied weft can be cut anywhere along the track without the hair falling out — the hand-sewing technique locks each strand independently. This makes it highly versatile for custom sizing in the salon, allowing technicians to create perfectly fitted wefts for any head shape.",
  whatP3:
    "The method rose to prominence in the UK extension market around 2018–2020, driven by demand from clients with fine Caucasian hair — the majority demographic in British salons — who found traditional weft methods too bulky and detectable. By 2025, hand-tied weft is consistently ranked among the top three most requested extension methods in UK professional salons, alongside tape-in and nano ring.",
  whyHeading: "Why Do Salons Prefer Hand-Tied Weft?",
  whyItems: [
    {
      label: "Flatter profile:",
      text: "At approximately 1mm thickness, hand-tied weft sits flat against the head with no visible bulge or ridge — even when clients run their fingers through their hair.",
    },
    {
      label: "Suitable for fine hair:",
      text: "The thinner weft is far less detectable in clients with finer or lighter-coloured hair compared to machine weft. This is especially relevant for UK salons, where the majority of extension clients have fine to medium Caucasian hair.",
    },
    {
      label: "Less weight on the scalp:",
      text: "Hand-tied weft is typically 30–40% lighter than equivalent-length machine weft, reducing tension on the natural hair and improving long-term comfort.",
    },
    {
      label: "Customisable sizing:",
      text: "Can be cut to any width along the track without unravelling, allowing perfect customisation for any head shape or desired volume placement.",
    },
    {
      label: "No return edge:",
      text: "Eliminates the folded-over bulky edge that characterises machine weft — the most common complaint from clients who have previously worn machine weft extensions.",
    },
    {
      label: "Chemical-free installation:",
      text: "No heat, no glue, no adhesives. Installation relies entirely on beads and thread, making it one of the gentlest methods for natural hair integrity.",
    },
  ],
  applyHeading: "How is Hand-Tied Weft Applied?",
  applyPIntro: "Hand-tied weft is typically installed using the ",
  applyPStrong: "Natural Beaded Rows (NBR)",
  applyPOutro: " method. The process follows a structured sequence:",
  applySteps: [
    {
      label: "Sectioning (10–15 min):",
      text: "The natural hair is sectioned horizontally. For a standard full-head installation, 2–4 rows are created depending on desired volume. Most common configuration: 3 rows — one at the nape, one mid-head, one at the crown.",
    },
    {
      label: "Bead placement (20–30 min per row):",
      text: "Small silicone-lined micro-beads (typically 5–7mm) are threaded onto small subsections of natural hair. The beads are positioned approximately 1cm from the scalp. Each row typically contains 6–10 beads depending on head width.",
    },
    {
      label: "Weft sizing (5–10 min):",
      text: "The hand-tied weft is measured against the beaded row and cut to fit precisely. Because hand-tied weft can be cut anywhere, sizing is exact.",
    },
    {
      label: "Sewing (20–30 min per row):",
      text: "Using a curved needle and polyester thread (selected for durability and colour-matching), the technician sews the weft onto the beaded row. The thread passes through each bead and the weft track, securing both together.",
    },
    {
      label: "Blending (15–20 min):",
      text: "Once all rows are installed, the technician cuts and blends the extension hair with the client's natural hair for a seamless finish.",
    },
  ],
  timelineCalloutTitle: "Installation timeline:",
  timelineCalloutBody:
    "Total chair time for a standard 3-row full-head hand-tied weft installation: 2–3.5 hours. A 2-row half-head (volume only): 1.5–2 hours. Single-row (crown volume): 1–1.5 hours.",
  vsHeading: "Hand-Tied Weft vs Machine Weft: Key Differences",
  vsTableHead: ["Feature", "Hand-Tied Weft", "Machine Weft"],
  vsTableRows: [
    ["Track thickness", "~1mm", "3–4mm"],
    ["Weight", "Light (30–40% less)", "Heavier"],
    ["Can be cut anywhere", "Yes", "No — only at seam lines"],
    ["Best for hair type", "Fine to medium", "Medium to thick"],
    ["Return edge", "None", "Notable fold at top"],
    ["Trade price per set", "£90–£180", "£50–£100"],
    ["Salon service price", "£450–£850", "£350–£550"],
    ["Reusable cycles", "2–3 move-ups", "1–2 move-ups"],
  ],
  maintenanceHeading: "Maintenance Schedule and Client Care",
  maintenanceP:
    "Hand-tied weft maintenance follows a predictable cycle. Here is the schedule your clients should expect:",
  maintenanceTableHead: ["Timeline", "Action", "Salon Time", "Client Cost (Guide)"],
  maintenanceTableRows: [
    ["Day 0", "Initial installation", "2–3.5 hrs", "£450–£850"],
    ["Week 8–12", "Move-up appointment (reposition beads)", "1–2 hrs", "£80–£150"],
    ["Week 16–24", "Second move-up", "1–2 hrs", "£80–£150"],
    ["Week 24–36", "Third move-up or new weft installation", "1–3.5 hrs", "£80–£850"],
    ["Every 6 weeks", "Weft deep condition treatment", "30 min", "£25–£40 (optional)"],
  ],
  careLead: "Client home care essentials:",
  careBody:
    "Brush 2–3 times daily with a loop brush (never a standard bristle brush near the beads). Sleep with hair in a loose braid or ponytail. Use sulphate-free shampoo and avoid applying conditioner directly to the beaded rows. Avoid oil-based products near the attachment points. Dry the root area thoroughly after washing — damp beads can cause slipping.",
  costHeading: "Cost-Benefit Analysis for Salons",
  costP: "From a salon business perspective, hand-tied weft occupies the premium middle-ground of the extension service menu:",
  costTableHead: ["Metric", "Value"],
  costTableRows: [
    ["Average service price (UK, 2025)", "£625"],
    ["Average material cost (trade)", "£140"],
    ["Gross profit per service", "£485"],
    ["Gross margin", "77.6%"],
    ["Chair time", "2.5–3.5 hrs"],
    ["Effective hourly rate", "£150–£195/hr"],
    ["Average maintenance visits per client per year", "3–4"],
    ["Projected annual revenue per client", "£865–£1,225 (maintenance only)"],
  ],
  costP2:
    "Compared to tape-in (which generates £196/hr but lower absolute revenue per client), hand-tied weft produces higher lifetime client value. A single hand-tied weft client who maintains their extensions for 18 months generates approximately £1,500–£2,500 in total salon revenue including the initial installation and all maintenance visits.",
  caseHeading: "Client Case: Manchester Salon Example",
  caseQuote:
    "“We introduced hand-tied weft to our service menu 18 months ago and it now accounts for 40% of our extension revenue. Our typical client is a woman aged 28–45 with fine, highlighted hair who has tried tape-ins before and found them too visible. The hand-tied weft conversion rate from consultation to booking is around 80% — once they feel how flat the weft sits compared to machine weft, the decision is almost made for them. Our average hand-tied weft service price is £595 including a colour blend. We see each client 4 times a year for maintenance.”",
  caseCite: "— Extension specialist, Manchester city-centre salon (2025)",
  mistakesHeading: "Common Installation Mistakes and How to Avoid Them",
  mistakes: [
    {
      problem: "Beads placed too close to the scalp",
      solution:
        "Beads should sit approximately 1cm from the scalp. Closer placement causes tension and discomfort as the natural hair grows. Further placement creates a visible gap between the bead row and the weft.",
    },
    {
      problem: "Over-tightening the thread",
      solution:
        "The thread should secure the weft to the bead row without pulling the natural hair taut. Over-tightening causes tension alopecia and client discomfort. The weft should have slight movement — not be rigidly fixed.",
    },
    {
      problem: "Uneven bead spacing",
      solution:
        "Beads should be evenly distributed along each row. Clustering beads creates pressure points. The standard is 6–10 beads per row with equal spacing. Use a tail comb to measure between bead placements.",
    },
    {
      problem: "Using the wrong thread",
      solution:
        "Always use polyester or nylon upholstery thread — never cotton. Cotton thread absorbs moisture, swells, weakens, and eventually breaks. Polyester thread maintains strength when wet and resists degradation from hair products.",
    },
    {
      problem: "Not enough rows for the desired volume",
      solution:
        "A single row of hand-tied weft provides modest volume. Most clients wanting a noticeable transformation need 2–3 rows. Adding a fourth row for maximum volume is possible but increases weight — assess the client's natural hair density and scalp sensitivity before adding rows.",
    },
    {
      problem: "Installing on dirty or product-heavy hair",
      solution:
        "Hair must be freshly washed, dried, and free of product before installation. Oil, dry shampoo, and styling products reduce bead grip and cause premature slipping. Require clients to arrive with clean, product-free hair.",
    },
  ],
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      q: "How long does hand-tied weft last?",
      a: "The hair itself can last 12–18 months with proper care when made from 100% Remy human hair. The installation (beads and thread) requires a move-up every 8–12 weeks as the natural hair grows. Most clients get 2–3 move-up cycles from one set of hand-tied weft before the hair begins to show wear and a new set is recommended.",
    },
    {
      q: "Can hand-tied weft be coloured or toned?",
      a: "Yes — 100% Remy human hair hand-tied weft can be coloured, highlighted, and toned just like natural hair. However, we strongly recommend using pre-coloured or custom-blended weft from your supplier where possible. In-salon colouring adds 45–90 minutes to the appointment, introduces chemical exposure that can shorten the hair's lifespan, and creates additional variables — if the colour does not lift as expected, you may need to reorder.",
    },
    {
      q: "Is hand-tied weft suitable for all hair types?",
      a: "Hand-tied weft is ideal for fine to medium hair. For very thick or coarse hair, the weft may not provide enough volume per row, and multiple rows (3–4) may be required. For clients with extremely fine or thinning hair, consult carefully — even the lightest weft adds weight, and the beaded attachment requires a minimum natural hair density to anchor securely. If the client's natural hair cannot support beads, consider tape-in as an alternative.",
    },
    {
      q: "What is the difference between single-drawn and double-drawn hand-tied weft?",
      a: "Single-drawn weft contains hairs of varying lengths — approximately 50% of strands reach the full stated length, with the remainder being shorter, creating a natural tapered finish. Double-drawn weft removes shorter strands so that 90%+ of the hair reaches the full length, creating a thicker, more uniform finish from root to tip. Double-drawn costs 20–35% more but provides visibly fuller results, especially in longer lengths (22\"–28\"). For most salon clients, double-drawn is the preferred choice for lengths above 20\".",
    },
    {
      q: "How should I train my team on hand-tied weft installation?",
      a: "Hand-tied weft requires specific training — it is not a method that can be learned through observation alone. Accredited courses in the UK typically run 1–2 days and cost £300–£600 per technician. Look for courses that include live models, bead placement technique, sewing method, and troubleshooting. Ensure your trainer is accredited by a recognised body such as Habia or VTCT. After certification, require technicians to complete 5–10 supervised installations before working independently on paying clients.",
    },
  ],
  ctaBoxTitle: "Manchester Salons: Get Trade Pricing on Hand-Tied Weft",
  ctaBoxBody:
    "D.S Hair & Beauty supplies hand-tied weft to professional salons across the UK & EU. Free digital colour catalogue with your first trade order. factory-direct express 3–5 day shipping. Apply for your trade account to access wholesale pricing on double-drawn Remy hand-tied weft in 40+ shades.",
  ctaPrimaryLabel: "Apply for Trade Account",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "WhatsApp Us",
  ctaSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I%27m%20interested%20in%20trade%20pricing%20for%20hand-tied%20weft.",
  backLabel: "More Articles",
}

const de: HandTiedWeftGuideContent = {
  seoTitle: "Was sind Hand-Tied Weft Haarverlängerungen? Kompletter Guide 2025 | DS Hair Beauty",
  seoDescription:
    "Hand-Tied Weft erklärt — was es ist, warum Salons es bevorzugen, wie man es anwendet und wo man hand-tied weft in Trade-Qualität in Manchester bezieht. Experten-Guide von DS Hair Beauty.",
  breadcrumb: "Zurück zum Blog",
  metaCategory: "Produkt-Guide",
  metaDate: "März 2025",
  metaReadTime: "12 Min. Lesezeit",
  heroTitle: "Was sind Hand-Tied Weft Haarverlängerungen? Der komplette Salon-Guide für 2025",
  heroSubtitle:
    "Hand-tied weft ist zur am häufigsten nachgefragten Verlängerungsmethode in britischen Profi-Salons geworden — aus gutem Grund. Wenn Sie ein Salonbesitzer oder Haarverlängerungs-Spezialist sind, finden Sie hier alles, was Sie wissen müssen.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "Hand-Tied Weft Haarverlängerungen",
  whatHeading: "Was ist Hand-Tied Weft?",
  whatP1:
    "Hand-tied weft (auch handgenähte Weft, HTW oder unsichtbare Weft genannt) ist eine Haarverlängerungsart, bei der einzelne Haarsträhnen von Hand auf eine dünne Fadenspur genäht werden — im Gegensatz zur Maschinenweft, die eine dicke maschinengenähte Kante hat. Das Ergebnis ist eine ultradünne, flache, flexible Weft, die mit ca. 1mm Dicke am Kopf aufliegt und selbst durch feines oder helles Haar praktisch unsichtbar ist.",
  whatP2:
    "Anders als Maschinenweft kann hand-tied weft an jeder Stelle der Spur geschnitten werden, ohne dass das Haar ausfällt — die Handnaht-Technik fixiert jede Strähne einzeln. Das macht sie im Salon extrem vielseitig für individuelle Anpassungen und erlaubt Technikern, perfekt passende Wefts für jede Kopfform zu erstellen.",
  whatP3:
    "Die Methode gewann im UK-Verlängerungsmarkt etwa 2018–2020 an Bedeutung, angetrieben durch die Nachfrage von Kundinnen mit feinem kaukasischem Haar — der Mehrheitsdemografie in britischen Salons —, die herkömmliche Weft-Methoden als zu voluminös und sichtbar empfanden. Bis 2025 gehört hand-tied weft in britischen Profi-Salons durchgängig zu den drei am häufigsten nachgefragten Verlängerungsmethoden — neben tape-in und nano ring.",
  whyHeading: "Warum bevorzugen Salons Hand-Tied Weft?",
  whyItems: [
    {
      label: "Flacheres Profil:",
      text: "Mit ca. 1mm Dicke liegt hand-tied weft flach am Kopf an, ohne sichtbare Wölbung oder Kante — selbst wenn Kundinnen mit den Fingern durchs Haar fahren.",
    },
    {
      label: "Geeignet für feines Haar:",
      text: "Die dünnere Weft ist bei Kundinnen mit feinerem oder hellerem Haar weit weniger sichtbar als Maschinenweft. Das ist besonders relevant für Salons in Großbritannien, wo die meisten Verlängerungskundinnen feines bis mittleres kaukasisches Haar haben.",
    },
    {
      label: "Weniger Gewicht auf der Kopfhaut:",
      text: "Hand-tied weft ist typischerweise 30–40% leichter als eine Maschinenweft gleicher Länge, was die Spannung auf das Naturhaar reduziert und den Langzeitkomfort verbessert.",
    },
    {
      label: "Individuelle Größenanpassung:",
      text: "Kann an jeder Stelle der Spur ohne Aufribbeln auf jede Breite zugeschnitten werden — für perfekte Anpassung an jede Kopfform oder gewünschte Volumenplatzierung.",
    },
    {
      label: "Keine Rückkante:",
      text: "Entfällt die umgeschlagene, voluminöse Kante, die Maschinenweft kennzeichnet — die häufigste Beschwerde von Kundinnen, die zuvor Maschinenweft getragen haben.",
    },
    {
      label: "Chemiefreie Anbringung:",
      text: "Keine Hitze, kein Kleber, keine Klebemittel. Die Anbringung basiert vollständig auf Perlen und Faden und ist damit eine der schonendsten Methoden für die Integrität des Naturhaars.",
    },
  ],
  applyHeading: "Wie wird Hand-Tied Weft angebracht?",
  applyPIntro: "Hand-tied weft wird in der Regel mit der ",
  applyPStrong: "Natural Beaded Rows (NBR)",
  applyPOutro: "-Methode angebracht. Der Ablauf folgt einer strukturierten Reihenfolge:",
  applySteps: [
    {
      label: "Sektionierung (10–15 Min.):",
      text: "Das Naturhaar wird horizontal abgeteilt. Für eine Standard-Full-Head-Anbringung werden je nach gewünschtem Volumen 2–4 Reihen erstellt. Häufigste Konfiguration: 3 Reihen — eine im Nacken, eine in der Mitte, eine am Oberkopf.",
    },
    {
      label: "Perlensetzung (20–30 Min. pro Reihe):",
      text: "Kleine silikonbeschichtete Mikroperlen (typisch 5–7mm) werden auf kleine Unterabschnitte des Naturhaars aufgefädelt. Die Perlen werden ca. 1cm von der Kopfhaut positioniert. Jede Reihe enthält je nach Kopfbreite typischerweise 6–10 Perlen.",
    },
    {
      label: "Weft-Zuschnitt (5–10 Min.):",
      text: "Die hand-tied weft wird an der Perlenreihe ausgemessen und passgenau zugeschnitten. Da hand-tied weft überall geschnitten werden kann, ist der Zuschnitt exakt.",
    },
    {
      label: "Nähen (20–30 Min. pro Reihe):",
      text: "Mit einer gebogenen Nadel und Polyesterfaden (gewählt für Haltbarkeit und Farbabstimmung) näht der Techniker die Weft auf die Perlenreihe. Der Faden verläuft durch jede Perle und die Weft-Spur und fixiert beides miteinander.",
    },
    {
      label: "Blending (15–20 Min.):",
      text: "Sobald alle Reihen angebracht sind, schneidet und vermischt der Techniker das Verlängerungshaar mit dem Naturhaar der Kundin für ein nahtloses Finish.",
    },
  ],
  timelineCalloutTitle: "Anbringungs-Zeitplan:",
  timelineCalloutBody:
    "Gesamte Stuhlzeit für eine Standard-Full-Head-Anbringung mit 3 Reihen hand-tied weft: 2–3,5 Stunden. Half-Head mit 2 Reihen (nur Volumen): 1,5–2 Stunden. Einzelne Reihe (Oberkopf-Volumen): 1–1,5 Stunden.",
  vsHeading: "Hand-Tied Weft vs. Maschinenweft: Die wichtigsten Unterschiede",
  vsTableHead: ["Merkmal", "Hand-Tied Weft", "Maschinenweft"],
  vsTableRows: [
    ["Spur-Dicke", "~1mm", "3–4mm"],
    ["Gewicht", "Leicht (30–40% weniger)", "Schwerer"],
    ["Überall schneidbar", "Ja", "Nein — nur an Nahtlinien"],
    ["Am besten für Haartyp", "Fein bis mittel", "Mittel bis dick"],
    ["Rückkante", "Keine", "Deutliche Falte oben"],
    ["Trade-Preis pro Set", "£90–£180", "£50–£100"],
    ["Salon-Servicepreis", "£450–£850", "£350–£550"],
    ["Wiederverwendungszyklen", "2–3 Move-ups", "1–2 Move-ups"],
  ],
  maintenanceHeading: "Pflegeplan und Kundenbetreuung",
  maintenanceP:
    "Die Pflege von hand-tied weft folgt einem planbaren Zyklus. Hier ist der Zeitplan, den Ihre Kundinnen erwarten sollten:",
  maintenanceTableHead: ["Zeitpunkt", "Maßnahme", "Salonzeit", "Kundenkosten (Richtwert)"],
  maintenanceTableRows: [
    ["Tag 0", "Erstinstallation", "2–3,5 Std.", "£450–£850"],
    ["Woche 8–12", "Move-up-Termin (Perlen neu positionieren)", "1–2 Std.", "£80–£150"],
    ["Woche 16–24", "Zweites Move-up", "1–2 Std.", "£80–£150"],
    ["Woche 24–36", "Drittes Move-up oder neue Weft-Installation", "1–3,5 Std.", "£80–£850"],
    ["Alle 6 Wochen", "Tiefenpflege-Behandlung der Weft", "30 Min.", "£25–£40 (optional)"],
  ],
  careLead: "Wichtige Pflegehinweise für zu Hause:",
  careBody:
    "2–3-mal täglich mit einer Loop-Bürste bürsten (niemals eine normale Borstenbürste in der Nähe der Perlen verwenden). Mit offenem Zopf oder Pferdeschwanz schlafen. Sulfatfreies Shampoo verwenden und Conditioner nicht direkt auf die Perlenreihen auftragen. Ölhaltige Produkte in der Nähe der Befestigungspunkte vermeiden. Den Ansatzbereich nach dem Waschen gründlich trocknen — feuchte Perlen können zum Verrutschen führen.",
  costHeading: "Kosten-Nutzen-Analyse für Salons",
  costP: "Aus Sicht des Salonbetriebs besetzt hand-tied weft das Premium-Mittelfeld der Verlängerungs-Servicemenge:",
  costTableHead: ["Kennzahl", "Wert"],
  costTableRows: [
    ["Durchschnittlicher Servicepreis (UK, 2025)", "£625"],
    ["Durchschnittliche Materialkosten (Trade)", "£140"],
    ["Bruttogewinn pro Service", "£485"],
    ["Bruttomarge", "77,6%"],
    ["Stuhlzeit", "2,5–3,5 Std."],
    ["Effektiver Stundensatz", "£150–£195/Std."],
    ["Durchschnittliche Pflegebesuche pro Kundin und Jahr", "3–4"],
    ["Prognostizierter Jahresumsatz pro Kundin", "£865–£1.225 (nur Pflege)"],
  ],
  costP2:
    "Im Vergleich zu tape-in (das £196/Std. generiert, aber einen niedrigeren absoluten Umsatz pro Kundin erzielt) erzeugt hand-tied weft einen höheren Kunden-Lifetime-Wert. Eine einzelne hand-tied weft Kundin, die ihre Verlängerungen 18 Monate pflegt, generiert inklusive Erstinstallation und aller Pflegebesuche rund £1.500–£2.500 Gesamtumsatz für den Salon.",
  caseHeading: "Kundenfall: Beispiel eines Manchester-Salons",
  caseQuote:
    "„Wir haben hand-tied weft vor 18 Monaten in unser Serviceangebot aufgenommen, und es macht inzwischen 40% unseres Verlängerungsumsatzes aus. Unsere typische Kundin ist eine Frau zwischen 28 und 45 mit feinem, gesträhntem Haar, die zuvor tape-ins getragen hat und sie als zu sichtbar empfand. Die Konversionsrate von der Beratung zur Buchung liegt bei hand-tied weft bei etwa 80% — sobald sie fühlen, wie flach die Weft im Vergleich zu Maschinenweft sitzt, ist die Entscheidung so gut wie gefallen. Unser durchschnittlicher hand-tied weft Servicepreis beträgt £595 inklusive Farb-Blending. Wir sehen jede Kundin 4-mal im Jahr zur Pflege.“",
  caseCite: "— Verlängerungsspezialist, Salon im Manchesterer Stadtzentrum (2025)",
  mistakesHeading: "Häufige Anbringungsfehler und wie man sie vermeidet",
  mistakes: [
    {
      problem: "Perlen zu nah an der Kopfhaut platziert",
      solution:
        "Perlen sollten ca. 1cm von der Kopfhaut entfernt sitzen. Eine nähere Platzierung verursacht Spannung und Unbehagen, wenn das Naturhaar wächst. Eine weitere Platzierung erzeugt eine sichtbare Lücke zwischen Perlenreihe und Weft.",
    },
    {
      problem: "Faden zu stark gespannt",
      solution:
        "Der Faden sollte die Weft an der Perlenreihe sichern, ohne das Naturhaar straff zu ziehen. Zu starkes Spannen verursacht Zugalopezie und Unbehagen bei der Kundin. Die Weft sollte leichte Bewegung haben — nicht starr fixiert sein.",
    },
    {
      problem: "Ungleichmäßiger Perlenabstand",
      solution:
        "Perlen sollten gleichmäßig entlang jeder Reihe verteilt sein. Gehäufte Perlen erzeugen Druckstellen. Der Standard sind 6–10 Perlen pro Reihe mit gleichem Abstand. Verwenden Sie einen Stielkamm, um die Abstände zu messen.",
    },
    {
      problem: "Verwendung des falschen Fadens",
      solution:
        "Immer Polyester- oder Nylon-Polsterfaden verwenden — niemals Baumwolle. Baumwollfaden nimmt Feuchtigkeit auf, quillt, verliert an Festigkeit und reißt schließlich. Polyesterfaden behält auch nass seine Stärke und widersteht dem Abbau durch Haarprodukte.",
    },
    {
      problem: "Zu wenige Reihen für das gewünschte Volumen",
      solution:
        "Eine einzelne Reihe hand-tied weft liefert nur moderates Volumen. Die meisten Kundinnen, die eine sichtbare Veränderung wünschen, brauchen 2–3 Reihen. Eine vierte Reihe für maximales Volumen ist möglich, erhöht aber das Gewicht — prüfen Sie vor dem Hinzufügen die natürliche Haardichte und Kopfhautempfindlichkeit der Kundin.",
    },
    {
      problem: "Anbringung auf schmutzigem oder stark gestyltem Haar",
      solution:
        "Das Haar muss vor der Anbringung frisch gewaschen, getrocknet und produktfrei sein. Öl, Trockenshampoo und Stylingprodukte reduzieren den Halt der Perlen und führen zu vorzeitigem Verrutschen. Verlangen Sie, dass Kundinnen mit sauberem, produktfreiem Haar kommen.",
    },
  ],
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Wie lange hält hand-tied weft?",
      a: "Das Haar selbst kann bei richtiger Pflege 12–18 Monate halten, wenn es aus 100% Remy-Echthaar besteht. Die Anbringung (Perlen und Faden) erfordert alle 8–12 Wochen ein Move-up, da das Naturhaar wächst. Die meisten Kundinnen erhalten aus einem Satz hand-tied weft 2–3 Move-up-Zyklen, bevor das Haar Abnutzung zeigt und ein neuer Satz empfohlen wird.",
    },
    {
      q: "Kann hand-tied weft gefärbt oder getönt werden?",
      a: "Ja — hand-tied weft aus 100% Remy-Echthaar kann wie Naturhaar gefärbt, gesträhnt und getönt werden. Wir empfehlen jedoch dringend, nach Möglichkeit vorgefärbte oder individuell gemischte Weft vom Lieferanten zu verwenden. Das Färben im Salon verlängert den Termin um 45–90 Minuten, setzt das Haar Chemikalien aus, die seine Lebensdauer verkürzen können, und schafft zusätzliche Variablen — wenn die Farbe nicht wie erwartet anhebt, müssen Sie möglicherweise nachbestellen.",
    },
    {
      q: "Ist hand-tied weft für alle Haartypen geeignet?",
      a: "Hand-tied weft ist ideal für feines bis mittleres Haar. Bei sehr dickem oder grobem Haar liefert die Weft pro Reihe möglicherweise nicht genug Volumen, und es können mehrere Reihen (3–4) nötig sein. Bei Kundinnen mit extrem feinem oder ausdünnendem Haar sorgfältig beraten — selbst die leichteste Weft fügt Gewicht hinzu, und die Perlenbefestigung erfordert eine Mindestdichte des Naturhaars für sicheren Halt. Wenn das Naturhaar der Kundin keine Perlen tragen kann, ziehen Sie tape-in als Alternative in Betracht.",
    },
    {
      q: "Was ist der Unterschied zwischen single-drawn und double-drawn hand-tied weft?",
      a: "Single-drawn Weft enthält Haare unterschiedlicher Längen — etwa 50% der Strähnen erreichen die volle angegebene Länge, der Rest ist kürzer, was einen natürlichen, auslaufenden Abschluss erzeugt. Double-drawn Weft entfernt kürzere Strähnen, sodass 90%+ des Haars die volle Länge erreichen, für ein dickeres, gleichmäßigeres Finish von Ansatz bis Spitze. Double-drawn kostet 20–35% mehr, liefert aber sichtbar vollere Ergebnisse, besonders bei längeren Längen (22\"–28\"). Für die meisten Salon-Kundinnen ist double-drawn bei Längen über 20\" die bevorzugte Wahl.",
    },
    {
      q: "Wie sollte ich mein Team in der Anbringung von hand-tied weft schulen?",
      a: "Hand-tied weft erfordert eine spezielle Schulung — sie ist keine Methode, die man allein durch Beobachtung lernt. Akkreditierte Kurse in Großbritannien dauern in der Regel 1–2 Tage und kosten £300–£600 pro Techniker. Achten Sie auf Kurse mit Live-Modellen, Perlensetz-Technik, Näh-Methode und Fehlerbehebung. Stellen Sie sicher, dass Ihr Trainer von einer anerkannten Stelle wie Habia oder VTCT akkreditiert ist. Nach der Zertifizierung sollten Techniker 5–10 beaufsichtigte Anbringungen absolvieren, bevor sie selbstständig an zahlenden Kundinnen arbeiten.",
    },
  ],
  ctaBoxTitle: "Salons in Manchester: Trade-Preise für Hand-Tied Weft erhalten",
  ctaBoxBody:
    "D.S Hair & Beauty beliefert Profi-Salons in ganz Manchester und dem Nordwesten mit hand-tied weft. Kostenloser digitaler Farbkatalog zur ersten Trade-Bestellung. Expressversand in 3–5 Tagen. Beantragen Sie Ihr Trade-Konto für Großhandelspreise auf double-drawn Remy hand-tied weft in über 40 Farbtönen.",
  ctaPrimaryLabel: "Trade-Konto beantragen",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "WhatsApp Us",
  ctaSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I%27m%20interested%20in%20trade%20pricing%20for%20hand-tied%20weft.",
  backLabel: "Weitere Artikel",
}

const fr: HandTiedWeftGuideContent = {
  seoTitle: "Qu'est-ce que les extensions Hand-Tied Weft ? Guide complet 2025 | DS Hair Beauty",
  seoDescription:
    "Les mèches hand-tied weft expliquées — ce que c'est, pourquoi les salons les préfèrent, comment les poser et où trouver des mèches hand-tied weft de qualité professionnelle à Manchester. Guide expert de DS Hair Beauty.",
  breadcrumb: "Retour au blog",
  metaCategory: "Guide produit",
  metaDate: "Mars 2025",
  metaReadTime: "12 min de lecture",
  heroTitle: "Qu'est-ce que les extensions Hand-Tied Weft ? Le guide complet pour salon 2025",
  heroSubtitle:
    "La mèche hand-tied weft est devenue la méthode d'extension la plus demandée dans les salons professionnels britanniques — et pour cause. Si vous êtes propriétaire de salon ou spécialiste des extensions, voici tout ce que vous devez savoir.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "Extensions capillaires hand-tied weft",
  whatHeading: "Qu'est-ce que le hand-tied weft ?",
  whatP1:
    "Le hand-tied weft (aussi appelé mèche cousue main, HTW ou mèche invisible) est un type d'extension réalisé en cousant à la main des mèches de cheveux individuelles sur un fin support de fil — contrairement au weft machine, qui utilise un bord épais cousu à la machine. Le résultat est une mèche ultra-fine, plate et flexible, d'environ 1 mm d'épaisseur contre le cuir chevelu, pratiquement indétectable même sur des cheveux fins ou clairs.",
  whatP2:
    "Contrairement au weft machine, le hand-tied weft peut être coupé n'importe où sur le support sans que les cheveux ne tombent — la technique de couture main verrouille chaque mèche indépendamment. C'est pourquoi il est extrêmement polyvalent pour la personnalisation en salon, permettant aux techniciens de créer des mèches parfaitement ajustées à chaque forme de tête.",
  whatP3:
    "La méthode s'est imposée sur le marché britannique des extensions vers 2018–2020, portée par la demande de clientes aux cheveux fins de type caucasien — la majorité dans les salons britanniques — qui trouvaient les méthodes de weft traditionnelles trop volumineuses et visibles. D'ici 2025, le hand-tied weft figure régulièrement parmi les trois méthodes d'extension les plus demandées dans les salons professionnels du Royaume-Uni, aux côtés du tape-in et du nano ring.",
  whyHeading: "Pourquoi les salons préfèrent-ils le hand-tied weft ?",
  whyItems: [
    {
      label: "Profil plus plat :",
      text: "Avec environ 1 mm d'épaisseur, le hand-tied weft repose à plat sur la tête sans bosse ni crête visible — même lorsque les clientes passent les doigts dans leurs cheveux.",
    },
    {
      label: "Adapté aux cheveux fins :",
      text: "La mèche plus fine est bien moins visible sur les clientes aux cheveux fins ou clairs que le weft machine. C'est particulièrement pertinent pour les salons britanniques, où la majorité des clientes d'extensions ont des cheveux caucasiens fins à moyens.",
    },
    {
      label: "Moins de poids sur le cuir chevelu :",
      text: "Le hand-tied weft est généralement 30 à 40 % plus léger qu'un weft machine de longueur équivalente, réduisant la tension sur les cheveux naturels et améliorant le confort à long terme.",
    },
    {
      label: "Taille personnalisable :",
      text: "Peut être coupé à n'importe quelle largeur le long du support sans s'effilocher, pour une personnalisation parfaite selon la forme de tête ou l'emplacement du volume souhaité.",
    },
    {
      label: "Pas de bord replié :",
      text: "Élimine le bord épais et replié qui caractérise le weft machine — la plainte la plus fréquente des clientes ayant déjà porté des extensions en weft machine.",
    },
    {
      label: "Pose sans produits chimiques :",
      text: "Ni chaleur, ni colle, ni adhésifs. La pose repose entièrement sur des microbilles et du fil, ce qui en fait l'une des méthodes les plus douces pour l'intégrité des cheveux naturels.",
    },
  ],
  applyHeading: "Comment pose-t-on le hand-tied weft ?",
  applyPIntro: "Le hand-tied weft est généralement posé selon la méthode ",
  applyPStrong: "Natural Beaded Rows (NBR)",
  applyPOutro: ". Le processus suit une séquence structurée :",
  applySteps: [
    {
      label: "Sectionnage (10–15 min) :",
      text: "Les cheveux naturels sont séparés horizontalement. Pour une pose complète standard, 2 à 4 rangées sont créées selon le volume souhaité. Configuration la plus courante : 3 rangées — une à la nuque, une au milieu, une au sommet du crâne.",
    },
    {
      label: "Placement des microbilles (20–30 min par rangée) :",
      text: "De petites microbilles doublées de silicone (généralement 5–7 mm) sont enfilées sur de petites sections de cheveux naturels. Les billes sont positionnées à environ 1 cm du cuir chevelu. Chaque rangée contient généralement 6 à 10 billes selon la largeur de la tête.",
    },
    {
      label: "Découpe de la mèche (5–10 min) :",
      text: "La mèche hand-tied weft est mesurée contre la rangée de billes et coupée précisément. Comme elle peut être coupée n'importe où, le dimensionnement est exact.",
    },
    {
      label: "Couture (20–30 min par rangée) :",
      text: "À l'aide d'une aiguille courbe et d'un fil de polyester (choisi pour sa durabilité et sa correspondance de couleur), le technicien coud la mèche sur la rangée de billes. Le fil traverse chaque bille et le support de la mèche, les fixant ensemble.",
    },
    {
      label: "Fondu (15–20 min) :",
      text: "Une fois toutes les rangées posées, le technicien coupe et fond les cheveux d'extension avec les cheveux naturels de la cliente pour un résultat sans couture visible.",
    },
  ],
  timelineCalloutTitle: "Durée de pose :",
  timelineCalloutBody:
    "Temps total en chaise pour une pose complète standard de 3 rangées en hand-tied weft : 2 à 3,5 heures. Une demi-tête de 2 rangées (volume uniquement) : 1,5 à 2 heures. Rangée unique (volume au sommet) : 1 à 1,5 heure.",
  vsHeading: "Hand-Tied Weft vs Weft Machine : les différences clés",
  vsTableHead: ["Caractéristique", "Hand-Tied Weft", "Weft Machine"],
  vsTableRows: [
    ["Épaisseur du support", "~1 mm", "3–4 mm"],
    ["Poids", "Léger (30–40 % en moins)", "Plus lourd"],
    ["Coupable n'importe où", "Oui", "Non — uniquement aux lignes de couture"],
    ["Idéal pour le type de cheveux", "Fins à moyens", "Moyens à épais"],
    ["Bord replié", "Aucun", "Repli notable en haut"],
    ["Prix trade par set", "£90–£180", "£50–£100"],
    ["Prix service salon", "£450–£850", "£350–£550"],
    ["Cycles de réutilisation", "2–3 move-ups", "1–2 move-ups"],
  ],
  maintenanceHeading: "Programme d'entretien et soins clientes",
  maintenanceP:
    "L'entretien du hand-tied weft suit un cycle prévisible. Voici le calendrier que vos clientes doivent attendre :",
  maintenanceTableHead: ["Échéance", "Action", "Temps salon", "Coût cliente (indicatif)"],
  maintenanceTableRows: [
    ["Jour 0", "Pose initiale", "2–3,5 h", "£450–£850"],
    ["Semaine 8–12", "Rendez-vous move-up (repositionnement des billes)", "1–2 h", "£80–£150"],
    ["Semaine 16–24", "Deuxième move-up", "1–2 h", "£80–£150"],
    ["Semaine 24–36", "Troisième move-up ou nouvelle pose", "1–3,5 h", "£80–£850"],
    ["Toutes les 6 semaines", "Soin profond de la mèche", "30 min", "£25–£40 (optionnel)"],
  ],
  careLead: "Essentiels d'entretien à domicile :",
  careBody:
    "Brosser 2 à 3 fois par jour avec une brosse à boucle (jamais une brosse à poils standard près des billes). Dormir avec les cheveux en tresse lâche ou en queue-de-cheval. Utiliser un shampoing sans sulfate et éviter d'appliquer l'après-shampoing directement sur les rangées de billes. Éviter les produits à base d'huile près des points de fixation. Bien sécher la zone racinaire après le lavage — des billes humides peuvent glisser.",
  costHeading: "Analyse coût-bénéfice pour les salons",
  costP: "Du point de vue commercial, le hand-tied weft occupe le segment premium intermédiaire de la carte des services d'extensions :",
  costTableHead: ["Indicateur", "Valeur"],
  costTableRows: [
    ["Prix moyen du service (Royaume-Uni, 2025)", "£625"],
    ["Coût moyen des matériaux (trade)", "£140"],
    ["Bénéfice brut par service", "£485"],
    ["Marge brute", "77,6 %"],
    ["Temps en chaise", "2,5–3,5 h"],
    ["Tarif horaire effectif", "£150–£195/h"],
    ["Visites d'entretien moyennes par cliente et par an", "3–4"],
    ["Revenu annuel projeté par cliente", "£865–£1 225 (entretien uniquement)"],
  ],
  costP2:
    "Comparé au tape-in (qui génère £196/h mais un revenu absolu par cliente plus faible), le hand-tied weft produit une valeur client à vie plus élevée. Une cliente hand-tied weft qui entretient ses extensions pendant 18 mois génère environ £1 500–£2 500 de revenu total pour le salon, pose initiale et visites d'entretien comprises.",
  caseHeading: "Cas client : exemple d'un salon de Manchester",
  caseQuote:
    "« Nous avons ajouté le hand-tied weft à notre carte il y a 18 mois et il représente aujourd'hui 40 % de notre chiffre d'affaires extensions. Notre cliente type est une femme de 28 à 45 ans aux cheveux fins et mèches, qui a essayé les tape-ins auparavant et les a trouvés trop visibles. Le taux de conversion hand-tied weft de la consultation à la réservation est d'environ 80 % — dès qu'elles sentent à quel point la mèche est plate par rapport au weft machine, la décision est presque prise. Notre prix moyen pour un service hand-tied weft est de £595, fondu de couleur inclus. Nous voyons chaque cliente 4 fois par an pour l'entretien. »",
  caseCite: "— Spécialiste extensions, salon du centre de Manchester (2025)",
  mistakesHeading: "Erreurs de pose courantes et comment les éviter",
  mistakes: [
    {
      problem: "Billes placées trop près du cuir chevelu",
      solution:
        "Les billes doivent se situer à environ 1 cm du cuir chevelu. Un placement plus proche provoque tension et inconfort à mesure que les cheveux naturels poussent. Un placement plus éloigné crée un espace visible entre la rangée de billes et la mèche.",
    },
    {
      problem: "Fil trop serré",
      solution:
        "Le fil doit fixer la mèche à la rangée de billes sans tirer les cheveux naturels. Un serrage excessif provoque une alopécie de traction et de l'inconfort. La mèche doit avoir un léger jeu — pas être fixée de façon rigide.",
    },
    {
      problem: "Espacement inégal des billes",
      solution:
        "Les billes doivent être réparties uniformément le long de chaque rangée. Des billes regroupées créent des points de pression. La norme est de 6 à 10 billes par rangée avec un espacement égal. Utilisez un peigne à queue pour mesurer entre les emplacements.",
    },
    {
      problem: "Utilisation du mauvais fil",
      solution:
        "Utilisez toujours du fil de rembourrage en polyester ou en nylon — jamais de coton. Le fil de coton absorbe l'humidité, gonfle, s'affaiblit et finit par casser. Le fil de polyester conserve sa résistance lorsqu'il est mouillé et résiste à la dégradation par les produits capillaires.",
    },
    {
      problem: "Pas assez de rangées pour le volume souhaité",
      solution:
        "Une seule rangée de hand-tied weft offre un volume modeste. La plupart des clientes souhaitant une transformation visible ont besoin de 2 à 3 rangées. Une quatrième rangée pour un volume maximal est possible mais ajoute du poids — évaluez la densité naturelle des cheveux et la sensibilité du cuir chevelu avant d'ajouter des rangées.",
    },
    {
      problem: "Pose sur cheveux sales ou chargés de produits",
      solution:
        "Les cheveux doivent être fraîchement lavés, séchés et sans produit avant la pose. Huile, shampoing sec et produits coiffants réduisent la tenue des billes et provoquent des glissements prématurés. Exigez que les clientes arrivent avec des cheveux propres et sans produit.",
    },
  ],
  faqHeading: "Questions fréquentes",
  faqs: [
    {
      q: "Combien de temps dure le hand-tied weft ?",
      a: "Les cheveux eux-mêmes peuvent durer 12 à 18 mois avec des soins appropriés lorsqu'ils sont faits de 100 % de vrais cheveux Remy. La pose (billes et fil) nécessite un move-up toutes les 8 à 12 semaines à mesure que les cheveux naturels poussent. La plupart des clientes obtiennent 2 à 3 cycles de move-up avec un seul set de hand-tied weft avant que les cheveux ne montrent des signes d'usure et qu'un nouveau set soit recommandé.",
    },
    {
      q: "Le hand-tied weft peut-il être coloré ou tondu ?",
      a: "Oui — le hand-tied weft en 100 % de vrais cheveux Remy peut être coloré, mèché et tondu comme des cheveux naturels. Nous recommandons toutefois fortement d'utiliser des mèches pré-colorées ou sur-mesure de votre fournisseur dans la mesure du possible. La coloration en salon ajoute 45 à 90 minutes au rendez-vous, expose les cheveux à des produits chimiques pouvant raccourcir leur durée de vie et crée des variables supplémentaires — si la couleur ne monte pas comme prévu, vous devrez peut-être recommander.",
    },
    {
      q: "Le hand-tied weft convient-il à tous les types de cheveux ?",
      a: "Le hand-tied weft est idéal pour les cheveux fins à moyens. Pour les cheveux très épais ou grossiers, la mèche peut ne pas fournir assez de volume par rangée et plusieurs rangées (3–4) peuvent être nécessaires. Pour les clientes aux cheveux extrêmement fins ou clairsemés, consultez avec prudence — même la mèche la plus légère ajoute du poids, et la fixation par billes exige une densité minimale de cheveux naturels pour un ancrage sûr. Si les cheveux naturels ne peuvent pas supporter les billes, envisagez le tape-in comme alternative.",
    },
    {
      q: "Quelle est la différence entre un hand-tied weft single-drawn et double-drawn ?",
      a: "Une mèche single-drawn contient des cheveux de longueurs variées — environ 50 % des mèches atteignent la longueur indiquée, le reste étant plus court, créant un fini effilé naturel. Une mèche double-drawn retire les mèches plus courtes pour que 90 %+ des cheveux atteignent la pleine longueur, créant un fini plus épais et uniforme de la racine aux pointes. Le double-drawn coûte 20 à 35 % de plus mais donne des résultats visiblement plus fournis, surtout dans les longueurs supérieures (22\"–28\"). Pour la plupart des clientes de salon, le double-drawn est le choix préféré au-delà de 20\".",
    },
    {
      q: "Comment former mon équipe à la pose du hand-tied weft ?",
      a: "Le hand-tied weft exige une formation spécifique — ce n'est pas une méthode qui s'apprend par la seule observation. Les cours accrédités au Royaume-Uni durent généralement 1 à 2 jours et coûtent £300–£600 par technicien. Recherchez des cours avec modèles vivants, technique de placement des billes, méthode de couture et résolution de problèmes. Assurez-vous que votre formateur est accrédité par un organisme reconnu comme Habia ou VTCT. Après la certification, exigez que les techniciens réalisent 5 à 10 poses supervisées avant de travailler seuls sur des clientes payantes.",
    },
  ],
  ctaBoxTitle: "Salons de Manchester : obtenez les prix trade sur le hand-tied weft",
  ctaBoxBody:
    "D.S Hair & Beauty fournit du hand-tied weft aux salons professionnels de Manchester et du Nord-Ouest. Catalogue de couleurs numérique gratuit avec votre première commande trade. Expédition express sous 3 à 5 jours. Demandez votre compte trade pour accéder aux prix de gros sur le hand-tied weft Remy double-drawn en plus de 40 nuances.",
  ctaPrimaryLabel: "Demander un compte Trade",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "WhatsApp Us",
  ctaSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I%27m%20interested%20in%20trade%20pricing%20for%20hand-tied%20weft.",
  backLabel: "Plus d'articles",
}

const ar: HandTiedWeftGuideContent = {
  seoTitle: "ما هي وصلات الشعر هاند-تايد ويفت؟ الدليل الكامل 2025 | DS Hair Beauty",
  seoDescription:
    "شرح هاند-تايد ويفت — ما هي، ولماذا تفضلها الصالونات، وكيف تُطبّق، وأين يمكن الحصول على وصلات هاند-تايد ويفت بجودة تجارية في مانشستر. دليل خبير من DS Hair Beauty.",
  breadcrumb: "العودة إلى المدونة",
  metaCategory: "دليل المنتج",
  metaDate: "مارس 2025",
  metaReadTime: "12 دقيقة قراءة",
  heroTitle: "ما هي وصلات الشعر هاند-تايد ويفت؟ الدليل الشامل للصالونات 2025",
  heroSubtitle:
    "أصبحت وصلات هاند-تايد ويفت الطريقة الأكثر طلباً في صالونات المملكة المتحدة الاحترافية — وذلك لسبب وجيه. إذا كنت صاحب صالون أو متخصصاً في وصلات الشعر، فإليك كل ما تحتاج معرفته.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "وصلات شعر هاند-تايد ويفت",
  whatHeading: "ما هي هاند-تايد ويفت؟",
  whatP1:
    "هاند-تايد ويفت (وتسمى أيضاً الويفت المخيطة يدوياً أو HTW أو الويفت غير المرئية) هي نوع من وصلات الشعر يُصنع بخياطة خصلات الشعر المفردة يدوياً على مسار خيط رفيع — على عكس الماكينة ويفت التي تستخدم حافة سميكة مخيطة بالماكينة. والنتيجة هي ويفت فائقة الرقة والمسطحة والمرنة بسمك يبلغ حوالي 1 ملم تلامس فروة الرأس وتكاد تكون غير مرئية حتى من خلال الشعر الناعم أو الفاتح.",
  whatP2:
    "على عكس الماكينة ويفت، يمكن قص هاند-تايد ويفت في أي مكان على طول المسار دون أن يتساقط الشعر — فتقنية الخياطة اليدوية تثبّت كل خصلة على حدة. وهذا يجعلها متعددة الاستخدامات للغاية في تخصيص المقاسات داخل الصالون، مما يتيح للفنيين صنع ويفت مناسبة تماماً لأي شكل رأس.",
  whatP3:
    "برزت هذه الطريقة في سوق الوصلات في المملكة المتحدة نحو عام 2018–2020، مدفوعة بالطلب من العميلات ذوات الشعر الكلاسيكي الناعم — الشريحة الأغلب في الصالونات البريطانية — اللواتي وجدن طرق الويفت التقليدية ضخمة وملحوظة للغاية. وبحلول عام 2025، أصبحت هاند-تايد ويفت باستمرار ضمن الطرق الثلاث الأكثر طلباً في صالونات المملكة المتحدة الاحترافية، إلى جانب tape-in و nano ring.",
  whyHeading: "لماذا تفضّل الصالونات هاند-تايد ويفت؟",
  whyItems: [
    {
      label: "ملمس مسطح:",
      text: "بسمك يبلغ حوالي 1 ملم، تستقر هاند-تايد ويفت بشكل مسطح على الرأس دون أي انتفاخ أو نتوء ظاهر — حتى عندما تمرر العميلات أصابعهن في شعرهن.",
    },
    {
      label: "مناسبة للشعر الناعم:",
      text: "الويفت الأرق أقل ظهوراً بكثير لدى العميلات ذوات الشعر الناعم أو الفاتح مقارنة بالماكينة ويفت. وهذا مهم بشكل خاص للصالونات في المملكة المتحدة، حيث معظم عميلات الوصلات من ذوات الشعر الكلاسيكي الناعم إلى المتوسط.",
    },
    {
      label: "وزن أقل على فروة الرأس:",
      text: "هاند-تايد ويفت أخف بنسبة 30–40% عادةً من الماكينة ويفت بنفس الطول، مما يقلل الشد على الشعر الطبيعي ويحسّن الراحة على المدى الطويل.",
    },
    {
      label: "مقاسات قابلة للتخصيص:",
      text: "يمكن قصها إلى أي عرض على طول المسار دون أن تتفكك، مما يتيح تخصيصاً مثالياً لأي شكل رأس أو توزيع الحجم المطلوب.",
    },
    {
      label: "لا حافة مطوية:",
      text: "تتخلص من الحافة السميكة المطوية التي تميز الماكينة ويفت — وهي أكثر الشكاوى شيوعاً من العميلات اللواتي ارتدين وصلات الماكينة ويفت سابقاً.",
    },
    {
      label: "تركيب خالٍ من المواد الكيميائية:",
      text: "لا حرارة ولا غراء ولا مواد لاصقة. يعتمد التركيب بالكامل على الخرز والخيط، مما يجعلها من أكثر الطرق رفقاً بسلامة الشعر الطبيعي.",
    },
  ],
  applyHeading: "كيف تُطبَّق هاند-تايد ويفت؟",
  applyPIntro: "تُطبَّق هاند-تايد ويفت عادةً باستخدام طريقة ",
  applyPStrong: "الصفوف الطبيعية بالخرز (NBR)",
  applyPOutro: ". وتتبع العملية تسلسلاً منظماً:",
  applySteps: [
    {
      label: "تقسيم الشعر (10–15 دقيقة):",
      text: "يُقسم الشعر الطبيعي أفقياً. وفي التركيب القياسي الكامل للرأس، تُنشأ 2–4 صفوف حسب الحجم المطلوب. التوزيع الأكثر شيوعاً: 3 صفوف — واحد في مؤخرة الرقبة، وواحد في منتصف الرأس، وواحد في قمة الرأس.",
    },
    {
      label: "وضع الخرز (20–30 دقيقة لكل صف):",
      text: "تُركَّب خرزات دقيقة مبطنة بالسيليكون (بحجم 5–7 ملم عادةً) على أقسام صغيرة من الشعر الطبيعي. وتوضع الخرزات على بُعد حوالي 1 سم من فروة الرأس. يحتوي كل صف عادةً على 6–10 خرزات حسب عرض الرأس.",
    },
    {
      label: "قص الويفت (5–10 دقائق):",
      text: "تُقاس هاند-تايد ويفت على الصف ذي الخرز وتُقص لتناسب بدقة. ولأنها قابلة للقص في أي مكان، فإن المقاس يكون دقيقاً تماماً.",
    },
    {
      label: "الخياطة (20–30 دقيقة لكل صف):",
      text: "باستخدام إبرة منحنية وخيط بوليستر (يُختار لمتانته وتطابق لونه)، يخيط الفني الويفت على الصف ذي الخرز. يمر الخيط عبر كل خرزة ومسار الويفت، مثبتاً إياهما معاً.",
    },
    {
      label: "الدمج (15–20 دقيقة):",
      text: "بعد تركيب جميع الصفوف، يقص الفني شعر الوصلات ويدمجه مع الشعر الطبيعي للعميلة للحصول على مظهر سلس.",
    },
  ],
  timelineCalloutTitle: "الجدول الزمني للتركيب:",
  timelineCalloutBody:
    "إجمالي وقت الكرسي لتركيب هاند-تايد ويفت قياسي كامل الرأس بثلاثة صفوف: 2–3.5 ساعات. نصف الرأس بصفين (حجم فقط): 1.5–2 ساعة. صف واحد (حجم أعلى الرأس): 1–1.5 ساعة.",
  vsHeading: "هاند-تايد ويفت مقابل الماكينة ويفت: الاختلافات الرئيسية",
  vsTableHead: ["الميزة", "هاند-تايد ويفت", "ماكينة ويفت"],
  vsTableRows: [
    ["سماكة المسار", "~1 ملم", "3–4 ملم"],
    ["الوزن", "خفيف (أقل بنسبة 30–40%)", "أثقل"],
    ["القص في أي مكان", "نعم", "لا — عند خطوط الخياطة فقط"],
    ["الأفضل لنوع الشعر", "ناعم إلى متوسط", "متوسط إلى كثيف"],
    ["الحافة المطوية", "لا يوجد", "طية ملحوظة في الأعلى"],
    ["سعر الجملة لكل مجموعة", "£90–£180", "£50–£100"],
    ["سعر خدمة الصالون", "£450–£850", "£350–£550"],
    ["دورات إعادة الاستخدام", "2–3 رفعات", "1–2 رفعات"],
  ],
  maintenanceHeading: "جدول الصيانة والعناية بالعميلات",
  maintenanceP:
    "تتبع صيانة هاند-تايد ويفت دورة متوقعة. إليك الجدول الذي يجب أن تتوقعه عميلاتك:",
  maintenanceTableHead: ["الموعد", "الإجراء", "وقت الصالون", "تكلفة العميلة (إرشادي)"],
  maintenanceTableRows: [
    ["اليوم 0", "التركيب الأولي", "2–3.5 ساعات", "£450–£850"],
    ["الأسبوع 8–12", "موعد الرفع (إعادة وضع الخرز)", "1–2 ساعة", "£80–£150"],
    ["الأسبوع 16–24", "الرفعة الثانية", "1–2 ساعة", "£80–£150"],
    ["الأسبوع 24–36", "الرفعة الثالثة أو تركيب ويفت جديدة", "1–3.5 ساعات", "£80–£850"],
    ["كل 6 أسابيع", "علاج ترطيب عميق للويفت", "30 دقيقة", "£25–£40 (اختياري)"],
  ],
  careLead: "أساسيات العناية المنزلية للعميلة:",
  careBody:
    "تمشيط الشعر 2–3 مرات يومياً بفرشاة حلقية (لا تستخدمي فرشاة شعيرات عادية قرب الخرز أبداً). النوم بشعر مضفور أو مربوط بشكل فضفاض. استخدام شامبو خالٍ من الكبريتات وتجنب وضع البلسم مباشرة على صفوف الخرز. تجنب المنتجات الزيتية قرب نقاط التثبيت. تجفيف منطقة الجذور جيداً بعد الغسيل — فالخرز الرطب قد يسبب الانزلاق.",
  costHeading: "تحليل التكلفة والعائد للصالونات",
  costP: "من منظور أعمال الصالون، تحتل هاند-تايد ويفت موقعاً متوسطاً متميزاً في قائمة خدمات الوصلات:",
  costTableHead: ["المؤشر", "القيمة"],
  costTableRows: [
    ["متوسط سعر الخدمة (المملكة المتحدة، 2025)", "£625"],
    ["متوسط تكلفة المواد (تجارة)", "£140"],
    ["إجمالي الربح لكل خدمة", "£485"],
    ["هامش الربح الإجمالي", "77.6%"],
    ["وقت الكرسي", "2.5–3.5 ساعات"],
    ["معدل الساعة الفعلي", "£150–£195/ساعة"],
    ["متوسط زيارات الصيانة لكل عميلة سنوياً", "3–4"],
    ["الإيراد السنوي المتوقع لكل عميلة", "£865–£1,225 (صيانة فقط)"],
  ],
  costP2:
    "مقارنة بـ tape-in (التي تحقق £196/ساعة ولكن بإيراد مطلق أقل لكل عميلة)، تحقق هاند-تايد ويفت قيمة أعلى للعميلة على مدى عمرها. العميلة الواحدة التي تحافظ على وصلاتها هاند-تايد ويفت لمدة 18 شهراً تحقق للصالون إيراداً إجمالياً يبلغ حوالي £1,500–£2,500 بما في ذلك التركيب الأولي وجميع زيارات الصيانة.",
  caseHeading: "حالة عميلة: مثال صالون في مانشستر",
  caseQuote:
    "«أضفنا هاند-تايد ويفت إلى قائمة خدماتنا قبل 18 شهراً، وهي تمثل الآن 40% من إيرادات الوصلات لدينا. عميلتنا النموذجية امرأة تتراوح بين 28–45 عاماً بشعر ناعم مموج التفتيح جرّبت tape-ins سابقاً ووجدتها واضحة جداً. معدل التحويل من الاستشارة إلى الحجز لهاند-تايد ويفت يبلغ نحو 80% — بمجرد أن تشعر العميلة بمدى انبساط الويفت مقارنة بالماكينة ويفت، يكون القرار قد اتخذ تقريباً. متوسط سعر خدمة هاند-تايد ويفت لدينا هو £595 بما في ذلك دمج اللون. نرى كل عميلة 4 مرات سنوياً للصيانة.»",
  caseCite: "— متخصصة وصلات، صالون وسط مدينة مانشستر (2025)",
  mistakesHeading: "أخطاء التركيب الشائعة وكيفية تجنبها",
  mistakes: [
    {
      problem: "وضع الخرز قريباً جداً من فروة الرأس",
      solution:
        "يجب أن تبقى الخرزات على بُعد حوالي 1 سم من فروة الرأس. الوضع الأقرب يسبب شداً وانزعاجاً مع نمو الشعر الطبيعي. والوضع الأبعد يخلق فجوة ظاهرة بين صف الخرز والويفت.",
    },
    {
      problem: "شدّ الخيط بإفراط",
      solution:
        "يجب أن يثبت الخيط الويفت على صف الخرز دون شد الشعر الطبيعي بقوة. الإفراط في الشد يسبب ثعلبة التوتر وانزعاج العميلة. يجب أن يكون للويفت حركة طفيفة — لا أن تكون مثبتة بصلابة.",
    },
    {
      problem: "تباعد غير متساوٍ للخرز",
      solution:
        "يجب توزيع الخرز بالتساوي على طول كل صف. تجميع الخرز يخلق نقاط ضغط. المعيار هو 6–10 خرزات لكل صف بتباعد متساوٍ. استخدم مشطاً بذيل لقياس المسافات بين الخرز.",
    },
    {
      problem: "استخدام الخيط الخاطئ",
      solution:
        "استخدم دائماً خيط تنجيد من البوليستر أو النايلون — ولا تستخدم القطن أبداً. خيط القطن يمتص الرطوبة وينتفخ ويضعف وينكسر في النهاية. خيط البوليستر يحتفظ بقوته عندما يكون مبللاً ويقاوم التلف الناتج عن منتجات الشعر.",
    },
    {
      problem: "صفوف غير كافية للحجم المطلوب",
      solution:
        "الصف الواحد من هاند-تايد ويفت يوفر حجماً متواضعاً. معظم العميلات الراغبات في تحول ملحوظ يحتجن إلى 2–3 صفوف. إضافة صف رابع لأقصى حجم ممكنة لكنها تزيد الوزن — قيّم كثافة الشعر الطبيعي للعميلة وحساسية فروة رأسها قبل إضافة الصفوف.",
    },
    {
      problem: "التركيب على شعر متسخ أو مليء بالمنتجات",
      solution:
        "يجب أن يكون الشعر مغسولاً حديثاً وجافاً وخالياً من المنتجات قبل التركيب. الزيوت والشامبو الجاف ومنتجات التصفيف تقلل من ثبات الخرز وتسبب الانزلاق المبكر. اطلب من العميلات الحضور بشعر نظيف وخالٍ من المنتجات.",
    },
  ],
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    {
      q: "كم تدوم هاند-تايد ويفت؟",
      a: "يمكن للشعر نفسه أن يدوم 12–18 شهراً مع العناية المناسبة عندما يكون مصنوعاً من شعر Remy بشري بنسبة 100%. يتطلب التركيب (الخرز والخيط) رفعة كل 8–12 أسبوعاً مع نمو الشعر الطبيعي. تحصل معظم العميلات على 2–3 دورات رفع من مجموعة واحدة من هاند-تايد ويفت قبل أن يبدأ الشعر بإظهار علامات البلى ويوصى بمجموعة جديدة.",
    },
    {
      q: "هل يمكن صبغ هاند-تايد ويفت أو تدرجها؟",
      a: "نعم — يمكن صبغ وتفتيح وتدرج هاند-تايد ويفت المصنوعة من شعر Remy بشري بنسبة 100% تماماً مثل الشعر الطبيعي. ومع ذلك، نوصي بشدة باستخدام ويفت مصبوغة مسبقاً أو ممزوجة خصيصاً من موردك كلما أمكن. الصبغ داخل الصالون يضيف 45–90 دقيقة إلى الموعد، ويعرض الشعر لمواد كيميائية قد تقصر من عمره الافتراضي، ويخلق متغيرات إضافية — إذا لم يفتح اللون كما هو متوقع، فقد تضطر إلى إعادة الطلب.",
    },
    {
      q: "هل هاند-تايد ويفت مناسبة لجميع أنواع الشعر؟",
      a: "هاند-تايد ويفت مثالية للشعر الناعم إلى المتوسط. بالنسبة للشعر الكثيف أو الخشن جداً، قد لا توفر الويفت حجماً كافياً لكل صف، وقد تكون هناك حاجة إلى صفوف متعددة (3–4). أما بالنسبة للعميلات ذوات الشعر الناعم جداً أو المتساقط، فاستشر بحذر — حتى أخف ويفت تضيف وزناً، ويتطلب التثبيت بالخرز حداً أدنى من كثافة الشعر الطبيعي ليكون التثبيت آمناً. إذا لم يستطع الشعر الطبيعي للعميلة تحمل الخرز، ففكري في tape-in كبديل.",
    },
    {
      q: "ما الفرق بين هاند-تايد ويفت سينغل-دراون و دبل-دراون؟",
      a: "ويفت سينغل-دراون تحتوي على شعر بأطوال متفاوتة — حوالي 50% من الخصلات تصل إلى الطول المذكور الكامل، والباقي أقصر، مما يخلق نهاية مستدقة طبيعية. أما دبل-دراون فتزيل الخصلات الأقصر بحيث يصل 90%+ من الشعر إلى الطول الكامل، مما يخلق مظهراً أكثر سماكة وتجانساً من الجذور إلى الأطراف. تكلفة دبل-دراون أعلى بنسبة 20–35% لكنها تعطي نتائج أكثر امتلاءً بشكل واضح، خاصة في الأطوال الأطول (22\"–28\"). بالنسبة لمعظم عميلات الصالونات، يُفضَّل دبل-دراون للأطوال التي تتجاوز 20\".",
    },
    {
      q: "كيف أدرب فريقي على تركيب هاند-تايد ويفت؟",
      a: "تتطلب هاند-تايد ويفت تدريباً محدداً — فهي ليست طريقة يمكن تعلمها بالمراقبة وحدها. تستغرق الدورات المعتمدة في المملكة المتحدة عادةً 1–2 يوم وتكلف £300–£600 لكل فني. ابحث عن دورات تشمل عارضات حقيقيات وتقنية وضع الخرز وطريقة الخياطة وحل المشكلات. تأكد من أن المدرب معتمد من جهة معترف بها مثل Habia أو VTCT. بعد الشهادة، اطلب من الفنيين إكمال 5–10 تركيبات تحت الإشراف قبل العمل بشكل مستقل على عميلات يدفعن.",
    },
  ],
  ctaBoxTitle: "صالونات مانشستر: احصل على أسعار تجارية لهاند-تايد ويفت",
  ctaBoxBody:
    "تورّد D.S Hair & Beauty هاند-تايد ويفت للصالونات الاحترافية في جميع أنحاء مانشستر والشمال الغربي. كتالوج ألوان رقمي مجاني مع أول طلب تجاري. شحن سريع خلال 3–5 أيام. تقدّم بطلبك للحصول على حساب تجاري للوصول إلى أسعار الجملة لهاند-تايد ويفت Remy دبل-دراون بأكثر من 40 درجة لون.",
  ctaPrimaryLabel: "قدّم طلب حساب تجاري",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "WhatsApp Us",
  ctaSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I%27m%20interested%20in%20trade%20pricing%20for%20hand-tied%20weft.",
  backLabel: "المزيد من المقالات",
}

const sv: HandTiedWeftGuideContent = {
  seoTitle: "Vad är Hand-Tied Weft hårförlängningar? Komplett guide 2025 | DS Hair Beauty",
  seoDescription:
    "Hand-tied weft förklarat — vad det är, varför salonger föredrar det, hur det appliceras och var du hittar hand-tied weft i grossistkvalitet i Manchester. Experttips från DS Hair Beauty.",
  breadcrumb: "Tillbaka till bloggen",
  metaCategory: "Produktguide",
  metaDate: "Mars 2025",
  metaReadTime: "12 min läsning",
  heroTitle: "Vad är Hand-Tied Weft hårförlängningar? Den kompletta salongsguiden för 2025",
  heroSubtitle:
    "Hand-tied weft har blivit den mest efterfrågade förlängningsmetoden i professionella salonger i Storbritannien — och det med rätta. Om du är salongsägare eller hårförlängningsspecialist finns här allt du behöver veta.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "Hand-tied weft hårförlängningar",
  whatHeading: "Vad är hand-tied weft?",
  whatP1:
    "Hand-tied weft (även kallad handsydd weft, HTW eller osynlig weft) är en typ av hårförlängning som görs genom att hand-sy enskilda hårstrån på ett tunt trådspår — till skillnad från maskinweft, som har en tjock maskinsydd kant. Resultatet är en ultratunn, platt och flexibel weft som ligger cirka 1 mm från hårbotten och är i princip omöjlig att upptäcka även i fint eller ljushårigt hår.",
  whatP2:
    "Till skillnad från maskinweft kan hand-tied weft klippas var som helst längs spåret utan att håret ramlar av — den handsydda tekniken låser varje strå för sig. Det gör metoden mycket flexibel för skräddarsydd storlek i salongen och låter tekniker skapa wefts som passar perfekt för alla huvudformer.",
  whatP3:
    "Metoden växte fram på den brittiska förlängningsmarknaden runt 2018–2020, drivet av efterfrågan från kunder med fint kaukasiskt hår — den vanligaste kundgruppen i brittiska salonger — som upplevde traditionella weftmetoder som för skrymmande och synliga. Till 2025 rankas hand-tied weft konsekvent bland de tre mest efterfrågade förlängningsmetoderna i professionella salonger i Storbritannien, tillsammans med tape-in och nano ring.",
  whyHeading: "Varför föredrar salonger hand-tied weft?",
  whyItems: [
    {
      label: "Plattare profil:",
      text: "Med cirka 1 mm tjocklek ligger hand-tied weft platt mot huvudet utan synliga bulor eller kanter — även när kunderna för fingrarna genom håret.",
    },
    {
      label: "Passar fint hår:",
      text: "Den tunnare weften är betydligt mindre synlig hos kunder med fint eller ljusare hår jämfört med maskinweft. Det är särskilt relevant för brittiska salonger, där de flesta förlängningskunder har fint till medelgrovt kaukasiskt hår.",
    },
    {
      label: "Mindre vikt mot hårbotten:",
      text: "Hand-tied weft är vanligtvis 30–40 % lättare än en maskinweft i samma längd, vilket minskar belastningen på det naturliga håret och förbättrar komforten på lång sikt.",
    },
    {
      label: "Anpassningsbar storlek:",
      text: "Kan klippas till valfri bredd längs spåret utan att gå upp, vilket ger perfekt anpassning för alla huvudformer eller önskad volymplacering.",
    },
    {
      label: "Ingen vikt kant:",
      text: "Eliminerar den vikta, skrymmande kanten som kännetecknar maskinweft — det vanligaste klagomålet från kunder som tidigare burit maskinweft.",
    },
    {
      label: "Kemikaliefri applicering:",
      text: "Ingen värme, inget lim, inga bindemedel. Appliceringen bygger helt på pärlor och tråd, vilket gör metoden till en av de skonsammaste för det naturliga hårets integritet.",
    },
  ],
  applyHeading: "Hur appliceras hand-tied weft?",
  applyPIntro: "Hand-tied weft appliceras vanligtvis med ",
  applyPStrong: "Natural Beaded Rows (NBR)",
  applyPOutro: "-metoden. Processen följer en strukturerad sekvens:",
  applySteps: [
    {
      label: "Sektionering (10–15 min):",
      text: "Det naturliga håret sektioneras horisontellt. Vid en standardinstallation på hela huvudet skapas 2–4 rader beroende på önskad volym. Vanligaste uppställningen: 3 rader — en vid nacken, en i mitten av huvudet och en vid hjässan.",
    },
    {
      label: "Pärlplacering (20–30 min per rad):",
      text: "Små silikonklädda mikropärlor (vanligtvis 5–7 mm) träs på små sektioner av det naturliga håret. Pärlorna placeras cirka 1 cm från hårbotten. Varje rad innehåller vanligtvis 6–10 pärlor beroende på huvudets bredd.",
    },
    {
      label: "Weftstorlek (5–10 min):",
      text: "Hand-tied weften mäts mot pärlraden och klipps till exakt passform. Eftersom hand-tied weft kan klippas var som helst blir storleken exakt.",
    },
    {
      label: "Sömnad (20–30 min per rad):",
      text: "Med en böjd nål och polyestertråd (vald för hållbarhet och färgmatchning) syr teknikern fast weften på pärlraden. Tråden går genom varje pärla och weftspåret och fäster dem samman.",
    },
    {
      label: "Blandning (15–20 min):",
      text: "När alla rader är på plats klipper och blandar teknikern förlängningshåret med kundens naturliga hår för en sömlös finish.",
    },
  ],
  timelineCalloutTitle: "Installationsschema:",
  timelineCalloutBody:
    "Total tid i stolen för en standardinstallation med 3 rader hand-tied weft över hela huvudet: 2–3,5 timmar. Halvt huvud med 2 rader (endast volym): 1,5–2 timmar. Enkel rad (hjässvolym): 1–1,5 timmar.",
  vsHeading: "Hand-Tied Weft vs maskinweft: viktiga skillnader",
  vsTableHead: ["Egenskap", "Hand-Tied Weft", "Maskinweft"],
  vsTableRows: [
    ["Spårtjocklek", "~1 mm", "3–4 mm"],
    ["Vikt", "Lätt (30–40 % mindre)", "Tyngre"],
    ["Kan klippas var som helst", "Ja", "Nej — endast vid sömlinjer"],
    ["Bäst för hårtyp", "Fint till medel", "Medel till tjockt"],
    ["Vikt kant", "Ingen", "Märkbar vikning upptill"],
    ["Grossistpris per set", "£90–£180", "£50–£100"],
    ["Salongspris per tjänst", "£450–£850", "£350–£550"],
    ["Återanvändningscykler", "2–3 flyttar", "1–2 flyttar"],
  ],
  maintenanceHeading: "Underhållsschema och kundvård",
  maintenanceP:
    "Underhållet av hand-tied weft följer en förutsägbar cykel. Här är schemat dina kunder bör förvänta sig:",
  maintenanceTableHead: ["Tidpunkt", "Åtgärd", "Salongstid", "Kundkostnad (riktlinje)"],
  maintenanceTableRows: [
    ["Dag 0", "Initial installation", "2–3,5 tim", "£450–£850"],
    ["Vecka 8–12", "Flyttmöte (omplacera pärlor)", "1–2 tim", "£80–£150"],
    ["Vecka 16–24", "Andra flytten", "1–2 tim", "£80–£150"],
    ["Vecka 24–36", "Tredje flytten eller ny weftinstallation", "1–3,5 tim", "£80–£850"],
    ["Var 6:e vecka", "Djupinpackning av weften", "30 min", "£25–£40 (valfritt)"],
  ],
  careLead: "Viktig hemvård för kunden:",
  careBody:
    "Borsta 2–3 gånger dagligen med en loopborste (använd aldrig en vanlig borste nära pärlorna). Sov med håret i en lös fläta eller hästsvans. Använd sulfatfritt schampo och undvik att applicera balsam direkt på pärlraderna. Undvik oljebaserade produkter nära fästpunkterna. Torka rotområdet noggrant efter tvätt — fuktiga pärlor kan orsaka att håret glider.",
  costHeading: "Kostnads-nyttoanalys för salonger",
  costP: "Ur ett salongsperspektiv intar hand-tied weft en premiummellanställning på förlängningsmenyn:",
  costTableHead: ["Mätvärde", "Värde"],
  costTableRows: [
    ["Genomsnittligt tjänstepris (Storbritannien, 2025)", "£625"],
    ["Genomsnittlig materialkostnad (grossist)", "£140"],
    ["Bruttovinst per tjänst", "£485"],
    ["Bruttomarginal", "77,6 %"],
    ["Stoltid", "2,5–3,5 tim"],
    ["Effektiv timlön", "£150–£195/tim"],
    ["Genomsnittliga underhållsbesök per kund och år", "3–4"],
    ["Prognostiserad årsintäkt per kund", "£865–£1 225 (endast underhåll)"],
  ],
  costP2:
    "Jämfört med tape-in (som genererar £196/tim men lägre absolut intäkt per kund) ger hand-tied weft ett högre kundvärde över tid. En enda hand-tied weft-kund som underhåller sina förlängningar i 18 månader genererar cirka £1 500–£2 500 i total salongsintäkt inklusive initial installation och alla underhållsbesök.",
  caseHeading: "Kundcase: exempel från en salong i Manchester",
  caseQuote:
    "”Vi introducerade hand-tied weft på vår tjänstemeny för 18 månader sedan och det står nu för 40 % av våra förlängningsintäkter. Vår typiska kund är en kvinna i åldern 28–45 med fint, slingat hår som tidigare provat tape-ins och tyckt de varit för synliga. Konverteringen från konsultation till bokning för hand-tied weft är runt 80 % — när de känner hur platt weften ligger jämfört med maskinweft är beslutet nästan taget åt dem. Vårt genomsnittliga pris för hand-tied weft-tjänsten är £595 inklusive färgblandning. Vi ser varje kund 4 gånger om året för underhåll.”",
  caseCite: "— Förlängningsspecialist, salong i Manchesters innerstad (2025)",
  mistakesHeading: "Vanliga installationsmisstag och hur du undviker dem",
  mistakes: [
    {
      problem: "Pärlor placerade för nära hårbotten",
      solution:
        "Pärlorna ska sitta cirka 1 cm från hårbotten. Närmare placering orsakar spänning och obehag när det naturliga håret växer. Längre ut skapas en synlig glipa mellan pärlraden och weften.",
    },
    {
      problem: "Överdragning av tråden",
      solution:
        "Tråden ska fästa weften mot pärlraden utan att dra det naturliga håret spänt. Överdragning orsakar dragalopeci och obehag för kunden. Weften ska ha lite rörelse — inte vara stelt fixerad.",
    },
    {
      problem: "Ojämnt pärlavstånd",
      solution:
        "Pärlorna ska fördelas jämnt längs varje rad. Klustrade pärlor skapar tryckpunkter. Standarden är 6–10 pärlor per rad med jämnt avstånd. Använd en svans-kam för att mäta mellan pärlplaceringarna.",
    },
    {
      problem: "Använda fel tråd",
      solution:
        "Använd alltid polyester- eller nylonstoppningstråd — aldrig bomull. Bomullstråd absorberar fukt, sväller, försvagas och går till slut av. Polyestertråd behåller styrkan när den är våt och motstår nedbrytning från hårprodukter.",
    },
    {
      problem: "För få rader för önskad volym",
      solution:
        "En enda rad hand-tied weft ger blygsam volym. De flesta kunder som vill ha en märkbar förändring behöver 2–3 rader. En fjärde rad för maximal volym är möjlig men ökar vikten — bedöm kundens naturliga hårdensitet och hårbottenkänslighet innan du lägger till rader.",
    },
    {
      problem: "Installation på smutsigt eller produktbelastat hår",
      solution:
        "Håret måste vara nyttvättat, torrt och fritt från produkter före installation. Olja, torrschampo och stylingprodukter minskar pärlornas grepp och orsakar för tidig glidning. Kräv att kunderna kommer med rent, produktfritt hår.",
    },
  ],
  faqHeading: "Vanliga frågor",
  faqs: [
    {
      q: "Hur länge håller hand-tied weft?",
      a: "Själva håret kan hålla i 12–18 månader med rätt skötsel när det är gjort av 100 % äkta Remy-hår. Installationen (pärlor och tråd) kräver en flytt var 8–12:e vecka i takt med att det naturliga håret växer. De flesta kunder får 2–3 flyttcykler från ett set hand-tied weft innan håret börjar visa slitage och ett nytt set rekommenderas.",
    },
    {
      q: "Kan hand-tied weft färgas eller tonas?",
      a: "Ja — hand-tied weft i 100 % äkta Remy-hår kan färgas, slingas och tonas precis som naturligt hår. Vi rekommenderar dock starkt att använda förfärgad eller specialblandad weft från din leverantör när det är möjligt. Färgning i salongen lägger till 45–90 minuter på mötet, utsätter håret för kemikalier som kan förkorta dess livslängd och skapar extra variabler — om färgen inte lyfter som förväntat kan du behöva beställa om.",
    },
    {
      q: "Passar hand-tied weft för alla hårtyper?",
      a: "Hand-tied weft är idealisk för fint till medelgrovt hår. För mycket tjockt eller grovt hår kan weften ge för lite volym per rad, och flera rader (3–4) kan behövas. För kunder med extremt fint eller glesnande hår, rådgör noga — även den lättaste weften tillför vikt, och pärlfästet kräver en minsta naturlig hårdensitet för att sitta säkert. Om kundens naturliga hår inte klarar pärlor, överväg tape-in som alternativ.",
    },
    {
      q: "Vad är skillnaden mellan single-drawn och double-drawn hand-tied weft?",
      a: "Single-drawn weft innehåller hår i varierande längder — cirka 50 % av stråna når den angivna fulla längden, medan resten är kortare, vilket ger en naturlig avsmalnande finish. Double-drawn weft tar bort kortare strån så att 90 %+ av håret når full längd, vilket ger en tjockare, jämnare finish från rot till topp. Double-drawn kostar 20–35 % mer men ger synligt fylligare resultat, särskilt i längre längder (22\"–28\"). För de flesta salongskunder är double-drawn förstahandsvalet för längder över 20\".",
    },
    {
      q: "Hur utbildar jag mitt team i hand-tied weft-installation?",
      a: "Hand-tied weft kräver specifik utbildning — det är inte en metod som kan läras genom observation enbart. Auktoriserade kurser i Storbritannien pågår vanligtvis i 1–2 dagar och kostar £300–£600 per tekniker. Leta efter kurser som inkluderar levande modeller, pärlplaceringsteknik, sömnadsmetod och felsökning. Se till att din utbildare är auktoriserad av en erkänd organisation som Habia eller VTCT. Efter certifiering kräver du att tekniker genomför 5–10 övervakade installationer innan de arbetar självständigt på betalande kunder.",
    },
  ],
  ctaBoxTitle: "Salonger i Manchester: få grossistpriser på hand-tied weft",
  ctaBoxBody:
    "D.S Hair & Beauty levererar hand-tied weft till professionella salonger i Manchester och nordvästra England. Gratis digital färgkatalog med din första grossistorder. Expresstransport på 3–5 dagar. Ansök om ditt grossistkonto för att få tillgång till partipriser på double-drawn Remy hand-tied weft i över 40 nyanser.",
  ctaPrimaryLabel: "Ansök om grossistkonto",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "WhatsApp Us",
  ctaSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I%27m%20interested%20in%20trade%20pricing%20for%20hand-tied%20weft.",
  backLabel: "Fler artiklar",
}

const pl: HandTiedWeftGuideContent = {
  seoTitle: "Czym jest hand-tied weft? Kompletny przewodnik 2025 | DS Hair Beauty",
  seoDescription:
    "Hand-tied weft wyjaśnione — czym jest, dlaczego salony go preferują, jak go aplikować i gdzie zamawiać wełnę hand-tied weft w jakości trade w Manchesterze. Ekspercki przewodnik od DS Hair Beauty.",
  breadcrumb: "Wróć do bloga",
  metaCategory: "Przewodnik produktowy",
  metaDate: "Marzec 2025",
  metaReadTime: "12 min czytania",
  heroTitle: "Czym są włosy hand-tied weft? Kompletny przewodnik dla salonów 2025",
  heroSubtitle:
    "Hand-tied weft stał się najczęściej zamawianą metodą przedłużania włosów w profesjonalnych salonach w Wielkiej Brytanii — i nie bez powodu. Jeśli jesteś właścicielem salonu lub specjalistą od przedłużania, znajdziesz tu wszystko, co musisz wiedzieć.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "Włosy hand-tied weft",
  whatHeading: "Czym jest hand-tied weft?",
  whatP1:
    "Hand-tied weft (zwany też wełną szyta ręcznie, HTW lub niewidoczną wełną) to rodzaj przedłużania włosów, w którym pojedyncze pasma włosów są ręcznie przyszywane do cienkiej nitki — w przeciwieństwie do wełtu maszynowego, który ma grubą, maszynowo zszywaną krawędź. Efekt to ultracienka, płaska i elastyczna wełna o grubości około 1 mm przy skórze głowy, praktycznie niewidoczna nawet na cienkich lub jasnych włosach.",
  whatP2:
    "W przeciwieństwie do wełtu maszynowego, hand-tied weft można ciąć w dowolnym miejscu wzdłuż ścieżki bez wypadania włosów — technika ręcznego szycia blokuje każde pasmo niezależnie. Dzięki temu metoda jest bardzo uniwersalna w dopasowywaniu rozmiaru w salonie, pozwalając technikom tworzyć wełny idealnie dopasowane do każdego kształtu głowy.",
  whatP3:
    "Metoda zyskała na znaczeniu na brytyjskim rynku przedłużania około 2018–2020, napędzana popytem klientek o cienkich kaukaskich włosach — większości klienteli brytyjskich salonów — które uważały tradycyjne wełny za zbyt masywne i widoczne. Do 2025 roku hand-tied weft jest niezmiennie zaliczany do trzech najczęściej zamawianych metod przedłużania w profesjonalnych salonach w Wielkiej Brytanii, obok tape-in i nano ring.",
  whyHeading: "Dlaczego salony preferują hand-tied weft?",
  whyItems: [
    {
      label: "Płaski profil:",
      text: "Przy grubości około 1 mm hand-tied weft układa się płasko na głowie, bez widocznych uwypukleń i krawędzi — nawet gdy klientki przesuwają palcami po włosach.",
    },
    {
      label: "Odpowiedni do cienkich włosów:",
      text: "Cieńsza wełna jest znacznie mniej widoczna u klientek z cieńszymi lub jaśniejszymi włosami w porównaniu z wełtem maszynowym. Jest to szczególnie istotne w salonach w Wielkiej Brytanii, gdzie większość klientek przedłużania ma cienkie do średnich kaukaskie włosy.",
    },
    {
      label: "Mniejszy ciężar na skórze głowy:",
      text: "Hand-tied weft jest zwykle 30–40% lżejszy niż wełt maszynowy o tej samej długości, co zmniejsza napięcie naturalnych włosów i poprawia komfort na dłuższą metę.",
    },
    {
      label: "Możliwość dopasowania rozmiaru:",
      text: "Można przyciąć go do dowolnej szerokości wzdłuż ścieżki bez rozplatania, co pozwala na idealne dopasowanie do każdego kształtu głowy lub pożądanego rozmieszczenia objętości.",
    },
    {
      label: "Brak zawiniętej krawędzi:",
      text: "Eliminuje grubą, zawiniętą krawędź charakterystyczną dla wełtu maszynowego — najczęstszą skargę klientek, które wcześniej nosiły wełny maszynowe.",
    },
    {
      label: "Instalacja bez chemii:",
      text: "Bez ciepła, kleju i substancji klejących. Instalacja opiera się wyłącznie na perełkach i nici, co czyni ją jedną z najdelikatniejszych metod dla integralności naturalnych włosów.",
    },
  ],
  applyHeading: "Jak aplikuje się hand-tied weft?",
  applyPIntro: "Hand-tied weft jest zwykle instalowany metodą ",
  applyPStrong: "Natural Beaded Rows (NBR)",
  applyPOutro: ". Proces przebiega według uporządkowanej sekwencji:",
  applySteps: [
    {
      label: "Sekcjonowanie (10–15 min):",
      text: "Naturalne włosy są dzielone poziomo. Przy standardowej instalacji na całą głowę tworzy się 2–4 rzędy w zależności od pożądanej objętości. Najczęstsza konfiguracja: 3 rzędy — jeden przy karku, jeden w środku głowy i jeden na czubku.",
    },
    {
      label: "Umieszczanie perełek (20–30 min na rząd):",
      text: "Małe mikropętelki wyłożone silikonem (zwykle 5–7 mm) nawleka się na małe sekcje naturalnych włosów. Perełki umieszcza się około 1 cm od skóry głowy. Każdy rząd zawiera zwykle 6–10 perełek w zależności od szerokości głowy.",
    },
    {
      label: "Przycinanie wełty (5–10 min):",
      text: "Hand-tied weft jest mierzony względem rzędu z perełkami i przycinany dokładnie na wymiar. Ponieważ hand-tied weft można ciąć w dowolnym miejscu, rozmiar jest precyzyjny.",
    },
    {
      label: "Szycie (20–30 min na rząd):",
      text: "Za pomocą zakrzywionej igły i nici poliestrowej (wybranej ze względu na trwałość i dopasowanie koloru) technik przyszywa wełtę do rzędu z perełkami. Nić przechodzi przez każdą perełkę i ścieżkę wełty, łącząc je ze sobą.",
    },
    {
      label: "Blending (15–20 min):",
      text: "Po zainstalowaniu wszystkich rzędów technik przycina i wtapia włosy przedłużane w naturalne włosy klientki, uzyskując płynne wykończenie.",
    },
  ],
  timelineCalloutTitle: "Harmonogram instalacji:",
  timelineCalloutBody:
    "Łączny czas przy fotelu dla standardowej instalacji hand-tied weft na całą głowę w 3 rzędach: 2–3,5 godziny. Pół głowy w 2 rzędach (tylko objętość): 1,5–2 godziny. Pojedynczy rząd (objętość na czubku): 1–1,5 godziny.",
  vsHeading: "Hand-Tied Weft vs wełt maszynowy: kluczowe różnice",
  vsTableHead: ["Cecha", "Hand-Tied Weft", "Wełt maszynowy"],
  vsTableRows: [
    ["Grubość ścieżki", "~1 mm", "3–4 mm"],
    ["Waga", "Lekki (30–40% mniej)", "Cięższy"],
    ["Można ciąć wszędzie", "Tak", "Nie — tylko wzdłuż szwów"],
    ["Najlepszy dla rodzaju włosów", "Cienkie do średnich", "Średnie do grubych"],
    ["Zawinięta krawędź", "Brak", "Widoczne zawinięcie u góry"],
    ["Cena trade za zestaw", "£90–£180", "£50–£100"],
    ["Cena usługi w salonie", "£450–£850", "£350–£550"],
    ["Cykl ponownego użycia", "2–3 przeniesienia", "1–2 przeniesienia"],
  ],
  maintenanceHeading: "Harmonogram pielęgnacji i opieka nad klientkami",
  maintenanceP:
    "Pielęgnacja hand-tied weft przebiega według przewidywalnego cyklu. Oto harmonogram, jakiego powinny oczekiwać Twoje klientki:",
  maintenanceTableHead: ["Termin", "Czynność", "Czas w salonie", "Koszt klientki (orientacyjnie)"],
  maintenanceTableRows: [
    ["Dzień 0", "Instalacja początkowa", "2–3,5 godz.", "£450–£850"],
    ["Tydzień 8–12", "Wizyta przesunięciowa (reposition perełek)", "1–2 godz.", "£80–£150"],
    ["Tydzień 16–24", "Drugie przeniesienie", "1–2 godz.", "£80–£150"],
    ["Tydzień 24–36", "Trzecie przeniesienie lub nowa wełta", "1–3,5 godz.", "£80–£850"],
    ["Co 6 tygodni", "Głęboka regeneracja wełty", "30 min", "£25–£40 (opcjonalnie)"],
  ],
  careLead: "Podstawy domowej pielęgnacji dla klientek:",
  careBody:
    "Czesz 2–3 razy dziennie szczotką z pętelkami (nigdy zwykłą szczotką w pobliżu perełek). Śpij z włosami w luźnym warkoczu lub kucyku. Używaj szamponu bez siarczanów i unikaj nakładania odżywki bezpośrednio na rzędy perełek. Unikaj produktów na bazie oleju w pobliżu punktów mocowania. Dokładnie osuszaj okolice nasady po myciu — mokre perełki mogą powodować ślizganie się włosów.",
  costHeading: "Analiza kosztów i korzyści dla salonów",
  costP: "Z perspektywy biznesowej salonu hand-tied weft zajmuje premium pozycję pośrodku menu usług przedłużania:",
  costTableHead: ["Wskaźnik", "Wartość"],
  costTableRows: [
    ["Średnia cena usługi (Wielka Brytania, 2025)", "£625"],
    ["Średni koszt materiałów (trade)", "£140"],
    ["Zysk brutto na usługę", "£485"],
    ["Marża brutto", "77,6%"],
    ["Czas przy fotelu", "2,5–3,5 godz."],
    ["Efektywna stawka godzinowa", "£150–£195/godz."],
    ["Średnia liczba wizyt pielęgnacyjnych na klientkę rocznie", "3–4"],
    ["Prognozowany roczny przychód na klientkę", "£865–£1 225 (tylko pielęgnacja)"],
  ],
  costP2:
    "W porównaniu z tape-in (który generuje £196/godz., ale niższy bezwzględny przychód na klientkę), hand-tied weft zapewnia wyższą wartość klientki w całym okresie współpracy. Jedna klientka hand-tied weft, która pielęgnuje swoje przedłużania przez 18 miesięcy, generuje około £1 500–£2 500 całkowitego przychodu dla salonu, w tym instalację początkową i wszystkie wizyty pielęgnacyjne.",
  caseHeading: "Przykład klientki: salon w Manchesterze",
  caseQuote:
    "„Wprowadziliśmy hand-tied weft do naszej oferty 18 miesięcy temu i obecnie odpowiada on za 40% naszych przychodów z przedłużania. Nasza typowa klientka to kobieta w wieku 28–45 lat o cienkich, rozjaśnianych włosach, która wcześniej próbowała tape-ins i uznała je za zbyt widoczne. Współczynnik konwersji z konsultacji do rezerwacji dla hand-tied weft wynosi około 80% — gdy klientki poczują, jak płasko układa się wełta w porównaniu z wełtem maszynowym, decyzja jest niemal podjęta. Nasza średnia cena usługi hand-tied weft to £595 z blendowaniem koloru. Każdą klientkę widzimy 4 razy w roku na pielęgnację.”",
  caseCite: "— Specjalistka przedłużania, salon w centrum Manchesteru (2025)",
  mistakesHeading: "Najczęstsze błędy instalacji i jak ich unikać",
  mistakes: [
    {
      problem: "Perełki umieszczone zbyt blisko skóry głowy",
      solution:
        "Perełki powinny znajdować się około 1 cm od skóry głowy. Zbyt bliskie umieszczenie powoduje napięcie i dyskomfort w miarę wzrostu naturalnych włosów. Zbyt dalekie tworzy widoczną szczelinę między rzędem perełek a wełtą.",
    },
    {
      problem: "Zbyt mocne naprężenie nici",
      solution:
        "Ni ć powinna mocować wełtę do rzędu perełek bez napinania naturalnych włosów. Zbyt mocne naprężenie powoduje łysienie trakcyjne i dyskomfort klientki. Wełta powinna mieć lekki ruch — nie być sztywno zamocowana.",
    },
    {
      problem: "Nierównomierne rozmieszczenie perełek",
      solution:
        "Perełki powinny być równomiernie rozmieszczone wzdłuż każdego rzędu. Zgrupowane perełki tworzą punkty nacisku. Standard to 6–10 perełek na rząd w równych odstępach. Użyj grzebienia z końcówką, aby zmierzyć odstępy między perełkami.",
    },
    {
      problem: "Używanie niewłaściwej nici",
      solution:
        "Zawsze używaj nici poliestrowej lub nylonowej do tapicerki — nigdy bawełnianej. Nić bawełniana wchłania wilgoć, pęcznieje, słabnie i w końcu pęka. Nić poliestrowa zachowuje wytrzymałość na mokro i odporna jest na degradację przez produkty do włosów.",
    },
    {
      problem: "Zbyt mało rzędów dla pożądanej objętości",
      solution:
        "Pojedynczy rząd hand-tied weft daje umiarkowaną objętość. Większość klientek pragnących widocznej zmiany potrzebuje 2–3 rzędów. Dodanie czwartego rzędu dla maksymalnej objętości jest możliwe, ale zwiększa wagę — oceń naturalną gęstość włosów klientki i wrażliwość skóry głowy przed dodaniem rzędów.",
    },
    {
      problem: "Instalacja na brudnych lub mocno stylizowanych włosach",
      solution:
        "Włosy muszą być świeżo umyte, wysuszone i wolne od produktów przed instalacją. Olej, suchy szampon i produkty do stylizacji zmniejszają przyczepność perełek i powodują przedwczesne ślizganie. Wymagaj od klientek przyjścia z czystymi, niezawierającymi produktów włosami.",
    },
  ],
  faqHeading: "Najczęściej zadawane pytania",
  faqs: [
    {
      q: "Jak długo wytrzymuje hand-tied weft?",
      a: "Same włosy mogą wytrzymać 12–18 miesięcy przy odpowiedniej pielęgnacji, jeśli są wykonane w 100% z ludzkich włosów Remy. Instalacja (perełki i nić) wymaga przeniesienia co 8–12 tygodni w miarę wzrostu naturalnych włosów. Większość klientek uzyskuje 2–3 cykle przeniesień z jednego zestawu hand-tied weft, zanim włosy zaczną wykazywać zużycie i zalecany będzie nowy zestaw.",
    },
    {
      q: "Czy hand-tied weft można farbować lub tonować?",
      a: "Tak — hand-tied weft w 100% z ludzkich włosów Remy można farbować, rozjaśniać i tonować jak naturalne włosy. Zdecydowanie zalecamy jednak stosowanie wełty wcześniej farbowanej lub mieszanej na zamówienie od dostawcy, gdy to możliwe. Farbowanie w salonie wydłuża wizytę o 45–90 minut, naraża włosy na działanie chemikaliów skracających ich żywotność i tworzy dodatkowe zmienne — jeśli kolor nie rozjaśni się zgodnie z oczekiwaniami, konieczne może być zamówienie ponowne.",
    },
    {
      q: "Czy hand-tied weft nadaje się do wszystkich rodzajów włosów?",
      a: "Hand-tied weft jest idealny do włosów cienkich i średnich. Przy bardzo grubych lub szorstkich włosach wełta może nie dawać wystarczającej objętości na rząd i może być koniecznych kilka rzędów (3–4). W przypadku klientek z bardzo cienkimi lub przerzedzającymi się włosami należy zachować ostrożność — nawet najlżejsza wełta dodaje ciężaru, a mocowanie perełkowe wymaga minimalnej gęstości naturalnych włosów dla bezpiecznego zakotwiczenia. Jeśli naturalne włosy klientki nie utrzymają perełek, rozważ tape-in jako alternatywę.",
    },
    {
      q: "Jaka jest różnica między single-drawn a double-drawn hand-tied weft?",
      a: "Wełta single-drawn zawiera włosy o różnej długości — około 50% pasm osiąga pełną deklarowaną długość, a pozostałe są krótsze, co daje naturalnie zwężające się wykończenie. Wełta double-drawn usuwa krótsze pasma, dzięki czemu 90%+ włosów osiąga pełną długość, tworząc grubsze, bardziej jednolite wykończenie od nasady po końcówki. Double-drawn kosztuje 20–35% więcej, ale daje wyraźnie pełniejsze efekty, zwłaszcza w dłuższych długościach (22\"–28\"). Dla większości klientek salonów double-drawn jest preferowanym wyborem przy długościach powyżej 20\".",
    },
    {
      q: "Jak przeszkolić mój zespół w instalacji hand-tied weft?",
      a: "Hand-tied weft wymaga specjalistycznego szkolenia — to nie metoda, której można nauczyć się wyłącznie przez obserwację. Akredytowane kursy w Wielkiej Brytanii trwają zwykle 1–2 dni i kosztują £300–£600 na technika. Szukaj kursów obejmujących żywe modelki, technikę umieszczania perełek, metodę szycia i rozwiązywanie problemów. Upewnij się, że Twój trener jest akredytowany przez uznaną instytucję, taką jak Habia lub VTCT. Po certyfikacji wymagaj od techników odbycia 5–10 nadzorowanych instalacji przed samodzielną pracą z płacącymi klientkami.",
    },
  ],
  ctaBoxTitle: "Salony w Manchesterze: uzyskaj ceny trade na hand-tied weft",
  ctaBoxBody:
    "D.S Hair & Beauty dostarcza hand-tied weft profesjonalnym salonom w Manchesterze i północno-zachodniej Anglii. Darmowy cyfrowy katalog kolorów przy pierwszym zamówieniu trade. ekspresowa wysyłka 3–5 dni od naszego partnera produkcyjnego. Złóż wniosek o konto trade, aby uzyskać ceny hurtowe na double-drawn Remy hand-tied weft w ponad 40 odcieniach.",
  ctaPrimaryLabel: "Złóż wniosek o konto Trade",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "WhatsApp Us",
  ctaSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I%27m%20interested%20in%20trade%20pricing%20for%20hand-tied%20weft.",
  backLabel: "Więcej artykułów",
}

export const handTiedWeftGuideContent: Record<Locale, HandTiedWeftGuideContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
