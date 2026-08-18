import type { Locale } from "../config"

export interface FaqItem { q: string; a: string }
export interface FaqCategory { id: string; title: string; image?: string; imageAlt?: string; faqs: FaqItem[] }
export interface FaqsContent {
  metaTitle: string
  metaDescription: string
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  whatsappMsg: string
  ctaWhatsapp: string
  ctaContact: string
  ctaTitle: string
  ctaSubtitle: string
  ctaWhatsapp2: string
  ctaContact2: string
  categories: FaqCategory[]
}

export const faqsContent: Record<Locale, FaqsContent> = {
  en: {
    metaTitle: "Hair Extension FAQs | Expert Guide | D.S HAIR & BEAUTY",
    metaDescription: "Expert answers to the most common hair extension questions. Remy human hair, application methods, care tips, trade pricing and more — from the UK's leading wholesale supplier.",
    heroEyebrow: "D.S Hair & Beauty",
    heroTitle: "Frequently Asked Questions",
    heroSubtitle: "Everything you need to know about D.S HAIR extensions — from choosing the right method to aftercare. Can't find your answer?",
    whatsappMsg: "Hi! I've a question about D.S HAIR extensions.",
    ctaWhatsapp: "Ask Us on WhatsApp",
    ctaContact: "Contact Form",
    ctaTitle: "Still Have Questions?",
    ctaSubtitle: "Our team is ready to help. Send us a message on WhatsApp and we typically respond within 2 hours.",
    ctaWhatsapp2: "WhatsApp Us",
    ctaContact2: "Contact Form",
    categories: [
      {
        id: "general",
        title: "General Questions",
        faqs: [
          { q: "What types of hair extensions does D.S HAIR offer?", a: "We offer five professional extension methods: Clip-In (DIY-friendly, no commitment), Tape-In (semi-permanent, 6-8 weeks), Nano Ring (ultra-small bonds for fine hair), K-Tip / Keratin Bond (longest-lasting, 3-5 months), and Butterfly Weft (ultra-flat weft for volume). All are 100% Remy human hair — cuticle-aligned for a natural, tangle-free finish." },
          { q: "What is 100% Remy Human Hair?", a: "Remy human hair means the cuticles are kept intact and aligned in one direction — the same direction as natural hair growth. This prevents tangling, maintains shine, and gives a far more natural look than non-Remy hair (where cuticles are stripped, causing matting and a dry appearance). All D.S HAIR products are certified 100% Remy human hair." },
          { q: "What's the difference between single-drawn and double-drawn hair?", a: "Single-drawn hair has varying strand lengths (short to long) at the weft — like natural hair. Double-drawn hair is hand-selected so every strand is the same length from root to tip — giving consistent thickness, fuller volume, and a more premium look throughout. D.S HAIR uses double-drawn hair as standard." },
          { q: "How do I find my perfect colour match?", a: "We offer two ways: 1) Browse our 31-shade colour chart above — order a free digital colour catalogue to compare shades. 2) Send us a WhatsApp photo of your hair in natural daylight and our colour specialist will match you within 2 hours — free of charge." },
          { q: "Do you offer trade / wholesale pricing for salons?", a: "Yes. We have a dedicated Salon Partner Programme with trade pricing, no minimum order, free digital colour catalogue and priority express delivery. Apply online — we respond within 24 hours with your personalised price list." },
          { q: "What is your shipping and returns policy?", a: "Free UK delivery on orders over £175, shipped via express (3–5 days). International shipping available. Returns accepted within 30 days for unused items in original packaging. See our full shipping & returns page for details." },
          { q: "Can I colour or bleach D.S HAIR extensions?", a: "Yes — all D.S HAIR extensions are 100% human hair and can accept professional colour services. However: we recommend consulting an experienced colourist. We do not recommend bleaching or lightening pre-coloured shades (Balayage, Ombre) as this significantly shortens the hair's lifespan. Dyeing is done at your own risk." }
        ]
      },
      {
        id: "clip-in",
        title: "Clip-In Extensions",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR Invisible Clip-In Extensions",
        faqs: [
          { q: "What types of clip-in extensions does D.S HAIR offer?", a: "We offer three styles: Invisible / Seamless Clip-Ins (ultra-flat silicone base, our #1 recommendation for fine hair), Classic Clip-In Wefts (durable cotton base with strong snap clips), and Clip-In Fillers / Toppers (narrow wefts for targeted crown or hairline volume). All are 100% double-drawn Remy human hair." },
          { q: "What's special about Invisible / Seamless Clip-Ins?", a: "Invisible Clip-Ins feature an ultra-thin flat silicone base that mimics the scalp — the weft base disappears against the skin. Unlike standard clip-ins that create a visible ridge, seamless clip-ins lie completely flat. They are undetectable even in ponytails and updos. This is the fastest-growing clip-in category in UK salons." },
          { q: "Do clip-in extensions damage natural hair?", a: "When applied correctly, clip-ins cause zero damage. The silicone-lined clips grip without pulling or cutting the hair shaft. Key rules: never clip into the same section repeatedly without repositioning; don't sleep in them; don't clip into the very front hairline; and choose the correct weight for your hair density." },
          { q: "How long do clip-in extensions last?", a: "With proper care, D.S HAIR Remy clip-ins last 6-12 months of regular wear. There is no 'removal' appointment — just unclip nightly and store. Key care: wash every 15-20 wears, brush from ends upward, store in the provided pouch, avoid heat above 180°C without protectant." },
          { q: "Can I wear clip-ins in a ponytail or updo?", a: "Yes — Invisible / Seamless Clip-Ins are specifically designed for this. The flat base conceals completely when hair is pulled back. With classic clip-ins, position wefts slightly lower than the ponytail so your natural hair fully covers them." },
          { q: "How do I care for clip-in extensions?", a: "Wash with sulphate-free shampoo only when needed (typically every 15-20 wears). Don't scrub — gently work shampoo through the weft. Rinse thoroughly, apply lightweight conditioner from mid-shaft to ends (not the weft base or clips). Air dry flat or hang on an extension holder. Always use heat protectant before hot tool styling." },
          { q: "Can you sleep in clip-ins?", a: "No. Sleeping in clip-ins is uncomfortable and can damage the clips and cause matting and tangling. Always remove clip-ins before sleeping." },
          { q: "Do I need to wash clip-ins before first use?", a: "Yes. All clip-ins have a protective vitamin / processing seal from manufacturing. Wash them gently with sulphate-free shampoo before first wearing — this removes the seal and allows the extensions to blend naturally with your hair." }
        ]
      },
      {
        id: "tape-in",
        title: "Tape-In Extensions",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR Invisible Tape-In Extensions",
        faqs: [
          { q: "What are Tape-In extensions and how do they work?", a: "Tape-In extensions use ultra-thin polyurethane (PU) wefts pre-coated with medical-grade adhesive. A small slice of your natural hair is sandwiched between two weft tabs. The bond lies completely flat against the scalp, creating a natural, seamless finish. No heat, no fusion chemicals — and one of the fastest semi-permanent methods, taking 1-2 hours to apply." },
          { q: "Invisible Tape-In vs Standard Tape-In — what's the difference?", a: "Invisible (Seamless) Tape-Ins use a skin-tone matched PU base that mimics the scalp — the tab itself disappears against the skin, so hair appears to grow directly from it. Standard Tape-Ins have a slightly thicker base and offer excellent hold for all hair types. For maximum invisibility — especially in fine hair or when worn up — Invisible Tape-Ins are the premium choice." },
          { q: "Are Tape-In extensions suitable for fine or thin hair?", a: "Yes — particularly our Invisible Tape-Ins. The ultra-thin 0.5mm PU base places minimal weight per section, and the skin-tone match ensures zero visible tab even in fine hair. For very fine-haired clients, we recommend taking slightly thinner sections per tab." },
          { q: "How long do Tape-In extensions last?", a: "The adhesive bond typically lasts 6-8 weeks before a re-tape appointment is needed (natural hair grows and the tab moves away from the scalp). The hair weft itself can be re-taped and reused 2-3 times — meaning the initial hair investment lasts 6-12 months or more with proper care." },
          { q: "Will Tape-In extensions damage my natural hair?", a: "When correctly installed and removed by a professional, tape-ins cause no damage to the hair shaft. The adhesive bonds to the surface of the hair — there is no heat or chemical penetration. Damage only occurs from improper DIY removal (never pull — always use a professional remover solution) or applying tabs too close to the root." },
          { q: "How do I care for Tape-In extensions?", a: "Wash with sulphate-free shampoo — avoid conditioner or oil products at the roots as these weaken the adhesive. Blow-dry thoroughly (never leave tape bonds damp). Use a loop brush from ends upward. Avoid heavy oil-based products near bonds. Sleep in a loose plait. Do not use conditioner directly on or near the tape tabs." },
          { q: "Can I wear Tape-Ins in a ponytail or updo?", a: "Yes — this is one of tape-ins' greatest strengths. Because the base is ultra-flat, the tabs lie flush against the scalp and are completely concealed in ponytails, updos, braids and buns. Invisible Tape-Ins are particularly undetectable when hair is pulled back." }
        ]
      },
      {
        id: "nano-ktip",
        title: "Nano Ring & K-Tip Extensions",
        image: "/images/featured/k-tip-extension.jpg",
        imageAlt: "D.S HAIR K-Tip Extensions",
        faqs: [
          { q: "What is a Nano Ring extension?", a: "Nano Ring extensions attach individual strands of 100% Remy human hair using an ultra-small silicone-lined metal ring (~3mm) — no heat, no glue, no chemicals. The ring is mechanically clamped with specialist pliers. They are the #1 recommended method for fine or delicate hair, as each ring is approximately 90% smaller than a standard micro-ring." },
          { q: "What is a K-Tip (Keratin Bond) extension?", a: "K-Tip extensions are individual strands of 100% Remy human hair with a pre-tipped keratin polymer bead. A certified stylist uses a hot-fusion wand at 180-200°C to soften the bead and mould it around a small section of natural hair, forming a smooth, virtually invisible bond. Modern keratin bonds are flexible, residue-free and dissolve cleanly with professional remover." },
          { q: "K-Tip vs Tape-In — which is better for fine hair?", a: "Both work on fine hair, but with key differences. Tape-ins are quicker (1-2 hours) and more affordable upfront but need replacing every 6-8 weeks. Nano K-Tip bonds (0.5g per strand) are barely visible, place minimal weight on individual strands, and last 3-5 months. For salon clients who want the most natural, longest-lasting result, nano K-tips are increasingly the first choice." },
          { q: "How long do Nano Ring and K-Tip extensions last?", a: "Nano Ring: 6-12 months with every-6-8-week move-ups. The rings are re-clamped higher as your hair grows. The hair can be reused 2-3 times by replacing the rings. K-Tip: 3-5 months per set — significantly longer than tape-ins. The same Remy hair strands can be re-tipped and reinstalled 2-3 times." },
          { q: "Will these methods damage my natural hair?", a: "When professionally installed, maintained and removed, both methods are considered low-damage. Nano rings distribute weight evenly with no adhesive. K-Tip keratin bonds distribute weight across multiple strands. Damage risks arise only from incorrect installation or improper removal. Always use a certified extension stylist." },
          { q: "Can I colour, curl or straighten these extensions?", a: "Yes — 100% Remy human hair accepts heat styling up to 180°C and most professional colour services. Always apply heat protectant. Wait at least 2 weeks after installation before colouring (allow bonds to fully set). For bleaching or lightening, always consult an experienced colourist first." },
          { q: "How are K-Tip extensions removed and can they be reused?", a: "Removal must be done by a professional stylist. Keratin bond remover solution (isopropyl alcohol or ethyl acetate based) is applied to each bond, making it brittle. The stylist gently cracks the bond with flat-nosed pliers — the keratin crumbles away without cutting the natural strand. The Remy hair can then be re-tipped with fresh keratin and reinstalled 2-3 times." },
          { q: "How do I care for Nano Ring and K-Tip extensions day to day?", a: "Use sulphate-free, bond-safe shampoo and conditioner — avoid applying conditioner directly to bonds. Wash gently in a downward motion (never circular, which causes tangling). Sleep with hair in a loose braid and use a silk pillowcase. Brush daily from ends to roots with a loop brush. Avoid heavy oils or serums near bond areas — product build-up weakens them over time." }
        ]
      },
      {
        id: "colour-care",
        title: "Colour, Care & Maintenance",
        faqs: [
          { q: "Can D.S HAIR extensions be washed, blow-dried and heat-styled?", a: "Yes — all D.S HAIR extensions are 100% Remy human hair and behave like your natural hair. Wash with sulphate-free shampoo. Use a heat protectant before blow-drying, curling or straightening. Keep heat tools below 180°C. Brush gently from ends upward with a loop brush designed for extensions." },
          { q: "Can I dye or bleach D.S HAIR extensions?", a: "Yes — they can accept professional colour services. However, we strongly recommend consulting an experienced colourist first. We do not recommend bleaching or lightening pre-coloured shades (Balayage, Ombre, Ash tones) as this dramatically shortens lifespan and may damage the hair. All colouring is done at the customer's own discretion and risk." },
          { q: "How often should I wash my extensions?", a: "Clip-ins: wash only when needed — typically every 15-20 wears. They don't receive scalp's natural oils, so over-washing causes dryness. Tape-ins / Nano / K-Tips: wash 1-2 times per week with sulphate-free shampoo. Never sleep with wet bonds. Always blow-dry bonds thoroughly." },
          { q: "How do I brush extensions without causing damage or tangling?", a: "Use a loop brush or specialist extension brush. Always brush from the ends first, working your way up to the roots in gentle strokes. Never brush from roots to ends — this puts tension on the bonds and pulls natural hair. For tape-ins, brush above the bond line only." },
          { q: "What's the best way to sleep with semi-permanent extensions?", a: "Tie hair in a loose, low braid or ponytail before bed — this prevents matting and tangling overnight. Use a silk or satin pillowcase to reduce friction. Never sleep with clip-ins in. For K-Tip / Nano extensions, a silk pillowcase significantly reduces friction on the bonds." },
          { q: "How many packs / grams do I need?", a: "For Nano Ring / K-Tip: 1 pack (50g / ~50 strands) for subtle volume. 2 packs (100g) for noticeable length and fullness. 3-4 packs (150-200g) for a full transformation. For Tape-In: 20-60 tabs depending on thickness and desired outcome. For Clip-In: 80-120g for subtle volume, 150-220g for full volume. Not sure? Send us a WhatsApp photo — we advise free." }
        ]
      }
    ]
  },
  de: {
    metaTitle: "Hair Extension FAQ | Expertenrat | D.S HAIR & BEAUTY",
    metaDescription: "Expertenantworten auf die häufigsten Fragen zu Haarverlängerungen. Remy Echthaar, Anwendungsmethoden, Pflegetipps, Händlerpreise und mehr — vom führenden Großhändler im UK.",
    heroEyebrow: "D.S Hair & Beauty",
    heroTitle: "Häufig gestellte Fragen",
    heroSubtitle: "Alles, was Sie über D.S HAIR Extensions wissen müssen — von der Wahl der richtigen Methode bis zur Nachsorge. Keine Antwort gefunden?",
    whatsappMsg: "Hallo! Ich habe eine Frage zu D.S HAIR Extensions.",
    ctaWhatsapp: "Fragen Sie uns auf WhatsApp",
    ctaContact: "Kontaktformular",
    ctaTitle: "Noch Fragen?",
    ctaSubtitle: "Unser Team steht Ihnen zur Verfügung. Senden Sie uns eine Nachricht auf WhatsApp — wir antworten in der Regel innerhalb von 2 Stunden.",
    ctaWhatsapp2: "WhatsApp schreiben",
    ctaContact2: "Kontaktformular",
    categories: [
      {
        id: "general",
        title: "Allgemeine Fragen",
        faqs: [
          { q: "Welche Arten von Haarverlängerungen bietet D.S HAIR an?", a: "Wir bieten fünf professionelle Extensions-Methoden an: Clip-In (für zu Hause, ohne Verpflichtung), Tape-In (halbfest, 6-8 Wochen), Nano Ring (ultra-kleine Bonds für feines Haar), K-Tip / Keratin Bond (haltbarste, 3-5 Monate) und Butterfly Weft (ultra-flacher Weft für Volumen). Alle bestehen aus 100 % Remy Echthaar — mit ausgerichteter Cuticula für ein natürliches, verfilzungsfreies Ergebnis." },
          { q: "Was ist 100 % Remy Echthaar?", a: "Remy Echthaar bedeutet, dass die Cuticula intakt bleibt und in eine Richtung ausgerichtet ist — dieselbe Richtung wie das natürliche Haarwachstum. Das verhindert Verfilzung, erhält den Glanz und sorgt für ein viel natürlicheres Aussehen als nicht-Remy-Haar (bei dem die Cuticula entfernt wird, was zu Verfilzung und einem trockenen Aussehen führt). Alle D.S HAIR Produkte sind zertifiziertes 100 % Remy Echthaar." },
          { q: "Was ist der Unterschied zwischen single-drawn und double-drawn Haar?", a: "Single-drawn Haar hat unterschiedliche Stranglängen (kurz bis lang) am Weft — wie natürliches Haar. Double-drawn Haar wird von Hand sortiert, sodass jeder Strang dieselbe Länge von Ansatz bis Spitze hat — für gleichmäßige Dichte, mehr Volumen und ein edleres Aussehen durchgehend. D.S HAIR verwendet standardmäßig double-drawn Haar." },
          { q: "Wie finde ich meine perfekte Farbe?", a: "Wir bieten zwei Wege: 1) Stöbern Sie in unserer 31-Farben-Farbkarte oben — bestellen Sie einen kostenlosen digitalen Farbkatalog, um Schattierungen zu vergleichen. 2) Senden Sie uns ein WhatsApp-Foto Ihrer Haare in Tageslicht, und unser Farbspezialist findet innerhalb von 2 Stunden die passende Farbe — kostenlos." },
          { q: "Bieten Sie Händler- / Großhandelspreise für Salons an?", a: "Ja. Wir haben ein eigenes Salon-Partner-Programm mit Händlerpreisen, ohne Mindestbestellmenge, mit kostenlosem digitalem Farbkatalog und priorisierter Express-Lieferung. Bewerben Sie sich online — wir antworten innerhalb von 24 Stunden mit Ihrer persönlichen Preisliste." },
          { q: "Wie sieht Ihre Versand- und Rücksendungsrichtlinie aus?", a: "Kostenloser UK-Versand ab £175, per Express (3-5 Tage). Internationaler Versand möglich. Rücksendungen innerhalb von 30 Tagen für unbenutzte Artikel in Originalverpackung akzeptiert. Details finden Sie auf unserer Seite für Versand & Rücksendungen." },
          { q: "Kann ich D.S HAIR Extensions färben oder bleichen?", a: "Ja — alle D.S HAIR Extensions bestehen aus 100 % Echthaar und vertragen professionelle Farbbehandlungen. Dennoch empfehlen wir, einen erfahrenen Coloristen zu konsultieren. Wir empfehlen nicht, vorverfärbte Schattierungen (Balayage, Ombre) zu bleichen oder aufzuhellen, da dies die Lebensdauer des Haars erheblich verkürzt. Das Färben erfolgt auf eigene Gefahr." }
        ]
      },
      {
        id: "clip-in",
        title: "Clip-In Extensions",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR Unsichtbare Clip-In Extensions",
        faqs: [
          { q: "Welche Clip-In Extensions bietet D.S HAIR an?", a: "Wir bieten drei Stile an: Unsichtbare / Nahtlose Clip-Ins (ultra-flache Silikonbasis, unsere #1-Empfehlung für feines Haar), Klassische Clip-In Wefts (strapazierfähige Baumwollbasis mit starken Klickclips) und Clip-In Fillers / Toppers (schmale Wefts für gezieltes Volumen am Scheitel oder Haaransatz). Alle bestehen aus 100 % double-drawn Remy Echthaar." },
          { q: "Was ist besonders an Unsichtbaren / Nahtlosen Clip-Ins?", a: "Unsichtbare Clip-Ins haben eine ultradünne flache Silikonbasis, die die Kopfhaut imitiert — die Weft-Basis verschwindet auf der Haut. Anders als Standard-Clip-Ins, die einen sichtbaren Grat erzeugen, liegen nahtlose Clip-Ins völlig flach. Sie sind selbst in Pferdeschwänzen und Updos unsichtbar. Dies ist die am schnellsten wachsende Clip-In-Kategorie in UK-Salons." },
          { q: "Beschädigen Clip-In Extensions das Naturhaar?", a: "Bei korrekter Anwendung verursachen Clip-Ins null Schäden. Die silikonbesetzten Clips greifen, ohne zu ziehen oder den Haarstrang zu schneiden. Wichtig: nie wiederholt in denselben Bereich clippen ohne Neuausrichtung; nicht darin schlafen; nicht in den vordersten Haaransatz clippen; und das richtige Gewicht für Ihre Haardichte wählen." },
          { q: "Wie lange halten Clip-In Extensions?", a: "Bei richtiger Pflege halten D.S HAIR Remy Clip-Ins 6-12 Monate bei regelmäßigem Tragen. Es gibt keinen 'Entfernen'-Termin — einfach abends ausclippen und verstauen. Wichtig: alle 15-20 Tragevorgänge waschen, von den Spitzen nach oben bürsten, im mitgelieferten Beutel lagern, Hitze über 180°C ohne Schutz vermeiden." },
          { q: "Kann ich Clip-Ins im Pferdeschwanz oder Updo tragen?", a: "Ja — Unsichtbare / Nahtlose Clip-Ins sind speziell dafür entwickelt. Die flache Basis versteckt sich vollständig, wenn das Haar zurückgebunden wird. Bei klassischen Clip-Ins positionieren Sie die Wefts etwas tiefer als den Pferdeschwanz, damit Ihr Naturhaar sie vollständig bedeckt." },
          { q: "Wie pflege ich Clip-In Extensions?", a: "Waschen Sie sie nur bei Bedarf mit sulfatfreiem Shampoo (typischerweise alle 15-20 Tragevorgänge). Nicht schrubben — arbeiten Sie das Shampoo sanft durch den Weft. Gründlich ausspülen, leichte Spülung von der Mitte bis zu den Spitzen auftragen (nicht auf die Weft-Basis oder Clips). An der Luft flach trocknen oder an einem Extension-Halter aufhängen. Immer Hitzeschutz vor Heißstyling verwenden." },
          { q: "Kann man in Clip-Ins schlafen?", a: "Nein. In Clip-Ins zu schlafen ist unbequem und kann die Clips beschädigen sowie Verfilzung und Knoten verursachen. Entfernen Sie Clip-Ins immer vor dem Schlafen." },
          { q: "Muss ich Clip-Ins vor dem ersten Tragen waschen?", a: "Ja. Alle Clip-Ins haben eine schützende Vitamin-/Verarbeitungsversiegelung aus der Produktion. Waschen Sie sie vor dem ersten Tragen sanft mit sulfatfreiem Shampoo — das entfernt die Versiegelung und lässt die Extensions natürlich mit Ihrem Haar verschmelzen." }
        ]
      },
      {
        id: "tape-in",
        title: "Tape-In Extensions",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR Unsichtbare Tape-In Extensions",
        faqs: [
          { q: "Was sind Tape-In Extensions und wie funktionieren sie?", a: "Tape-In Extensions verwenden ultradünne Polyurethan-(PU-)Wefts, die werkseitig mit medizinischem Kleber beschichtet sind. Ein dünner Strang Ihres Naturhaars wird zwischen zwei Weft-Tabs eingeklemmt. Der Bond liegt völlig flach an der Kopfhaut und erzeugt ein natürliches, nahtloses Ergebnis. Keine Hitze, keine Fusion-Chemikalien — und eine der schnellsten halbfesten Methoden, die 1-2 Stunden zur Anwendung benötigt." },
          { q: "Unsichtbare Tape-In vs. Standard Tape-In — wo ist der Unterschied?", a: "Unsichtbare (Nahtlose) Tape-Ins verwenden eine hautfarbene PU-Basis, die die Kopfhaut imitiert — der Tab selbst verschwindet auf der Haut, sodass das Haar direkt daraus zu wachsen scheint. Standard Tape-Ins haben eine etwas dickere Basis und bieten für alle Haartypen guten Halt. Für maximale Unsichtbarkeit — besonders bei feinem Haar oder beim Hochstecken — sind Unsichtbare Tape-Ins die Premium-Wahl." },
          { q: "Sind Tape-In Extensions für feines oder dünnes Haar geeignet?", a: "Ja — insbesondere unsere Unsichtbaren Tape-Ins. Die ultradünne 0,5-mm-PU-Basis bringt minimales Gewicht pro Abschnitt, und die hautfarbene Abstimmung sorgt für null sichtbaren Tab selbst bei feinem Haar. Für sehr feinhaarige Kundinnen empfehlen wir etwas dünnere Abschnitte pro Tab." },
          { q: "Wie lange halten Tape-In Extensions?", a: "Der Klebebond hält typischerweise 6-8 Wochen, bevor ein Re-Tape-Termin nötig ist (das Naturhaar wächst, und der Tab entfernt sich von der Kopfhaut). Der Haarweft selbst kann 2-3 Mal neu geklebt und wiederverwendet werden — das heißt, die anfängliche Haarinvestition hält bei richtiger Pflege 6-12 Monate oder länger." },
          { q: "Beschädigen Tape-In Extensions mein Naturhaar?", a: "Bei fachgerechter Installation und Entfernung durch einen Profi verursachen Tape-Ins keinen Schaden am Haarstrang. Der Kleber bindet an die Oberfläche des Haars — es gibt keine Hitze- oder Chemieeindringung. Schäden entstehen nur durch unsachgemäße DIY-Entfernung (nie ziehen — immer eine professionelle Lösung verwenden) oder durch zu nah am Ansatz angebrachte Tabs." },
          { q: "Wie pflege ich Tape-In Extensions?", a: "Waschen Sie sie mit sulfatfreiem Shampoo — vermeiden Sie Spülung oder Ölprodukte an den Ansätzen, da diese den Kleber schwächen. Gründlich föhnen (Tape-Bonds niemals feucht lassen). Eine Loop-Bürste von den Spitzen nach oben verwenden. Schwere ölhaltige Produkte in Bond-Nähe meiden. In einem lockeren Zopf schlafen. Keine Spülung direkt auf oder nahe der Tape-Tabs auftragen." },
          { q: "Kann ich Tape-Ins im Pferdeschwanz oder Updo tragen?", a: "Ja — das ist eine der größten Stärken von Tape-Ins. Da die Basis ultra-flach ist, liegen die Tabs bündig an der Kopfhaut und sind in Pferdeschwänzen, Updos, Zöpfen und Dutts völlig verborgen. Unsichtbare Tape-Ins sind besonders unsichtbar, wenn das Haar zurückgebunden wird." }
        ]
      },
      {
        id: "nano-ktip",
        title: "Nano Ring & K-Tip Extensions",
        image: "/images/featured/k-tip-extension.jpg",
        imageAlt: "D.S HAIR K-Tip Extensions",
        faqs: [
          { q: "Was ist eine Nano Ring Extension?", a: "Nano Ring Extensions befestigen einzelne Strähnen 100 % Remy Echthaar mit einem ultrakleinen silikonbesetzten Metallring (~3 mm) — ohne Hitze, ohne Kleber, ohne Chemie. Der Ring wird mechanisch mit Spezialzangen geklemmt. Es ist die #1 empfohlene Methode für feines oder empfindliches Haar, da jeder Ring etwa 90 % kleiner ist als ein Standard-Micro-Ring." },
          { q: "Was ist eine K-Tip (Keratin Bond) Extension?", a: "K-Tip Extensions sind einzelne Strähnen 100 % Remy Echthaar mit einer vorbesetzten Keratin-Polymerperle. Ein zertifizierter Stylist verwendet einen Hot-Fusion-Stab bei 180-200°C, um die Perle zu erweichen und um einen kleinen Abschnitt Naturhaar zu formen — ein glatter, nahezu unsichtbarer Bond entsteht. Moderne Keratin-Bonds sind flexibel, rückstandsfrei und lösen sich sauber mit professionellem Entferner." },
          { q: "K-Tip vs. Tape-In — was ist besser für feines Haar?", a: "Beide funktionieren bei feinem Haar, aber mit wesentlichen Unterschieden. Tape-Ins sind schneller (1-2 Stunden) und günstiger in der Anschaffung, müssen aber alle 6-8 Wochen ersetzt werden. Nano K-Tip Bonds (0,5 g pro Strang) sind kaum sichtbar, bringen minimales Gewicht auf einzelne Strähnen und halten 3-5 Monate. Für Salonkundinnen, die das natürlichste, längste Ergebnis wollen, sind Nano K-Tips zunehmend die erste Wahl." },
          { q: "Wie lange halten Nano Ring und K-Tip Extensions?", a: "Nano Ring: 6-12 Monate mit alle 6-8 Wochen durchgeführten Nachsetz-Terminen. Die Ringe werden höher geklemmt, während das Haar wächst. Das Haar kann 2-3 Mal wiederverwendet werden, indem die Ringe ersetzt werden. K-Tip: 3-5 Monate pro Set — deutlich länger als Tape-Ins. Dieselben Remy-Haarsträhnen können 2-3 Mal neu bespitzt und neu installiert werden." },
          { q: "Beschädigen diese Methoden mein Naturhaar?", a: "Bei fachgerechter Installation, Pflege und Entfernung gelten beide Methoden als schonend. Nano Ringe verteilen das Gewicht gleichmäßig ohne Kleber. K-Tip Keratin-Bonds verteilen das Gewicht auf mehrere Strähnen. Schäden entstehen nur durch unsachgemäße Installation oder Entfernung. Verwenden Sie immer einen zertifizierten Extensions-Stylisten." },
          { q: "Kann ich diese Extensions färben, wellen oder glätten?", a: "Ja — 100 % Remy Echthaar vertragt Hitzestyling bis 180°C und die meisten professionellen Farbbeiten. Immer Hitzeschutz auftragen. Warten Sie nach der Installation mindestens 2 Wochen, bevor Sie färben (die Bonds müssen vollständig aushärten). Zum Bleichen oder Aufhellen konsultieren Sie immer zuerst einen erfahrenen Coloristen." },
          { q: "Wie werden K-Tip Extensions entfernt und können sie wiederverwendet werden?", a: "Die Entfernung muss von einem professionellen Stylisten durchgeführt werden. Eine Keratin-Bond-Entfernerlösung (auf Isopropylalkohol- oder Ethylacetat-Basis) wird auf jeden Bond aufgetragen und macht ihn spröde. Der Stylist bricht den Bond sanft mit einer Flachzange auf — das Keratin zerfällt, ohne den Naturstrang zu schneiden. Das Remy-Haar kann dann mit frischem Keratin neu bespitzt und 2-3 Mal neu installiert werden." },
          { q: "Wie pflege ich Nano Ring und K-Tip Extensions im Alltag?", a: "Verwenden Sie sulfatfreies, bond-sicheres Shampoo und Spülung — vermeiden Sie das Auftragen von Spülung direkt auf die Bonds. Sanft in Abwärtsbewegung waschen (nie kreisförmig, das verursacht Verfilzung). Mit einem lockeren Zopf schlafen und ein Seidenkissenbezug verwenden. Täglich von den Spitzen zu den Ansätzen mit einer Loop-Bürste bürsten. Schwere Öle oder Seren in Bond-Nähe meiden — Produktansammlung schwächt sie mit der Zeit." }
        ]
      },
      {
        id: "colour-care",
        title: "Farbe, Pflege & Erhaltung",
        faqs: [
          { q: "Können D.S HAIR Extensions gewaschen, geföhnt und hitzestylt werden?", a: "Ja — alle D.S HAIR Extensions bestehen aus 100 % Remy Echthaar und verhalten sich wie Ihr Naturhaar. Waschen Sie sie mit sulfatfreiem Shampoo. Verwenden Sie einen Hitzeschutz vor dem Föhnen, Wellen oder Glätten. Halten Sie Heißstyling unter 180°C. Bürsten Sie sanft von den Spitzen nach oben mit einer für Extensions geeigneten Loop-Bürste." },
          { q: "Kann ich D.S HAIR Extensions färben oder bleichen?", a: "Ja — sie vertragen professionelle Farbbeiten. Wir empfehlen jedoch dringend, zuerst einen erfahrenen Coloristen zu konsultieren. Wir empfehlen nicht, vorverfärbte Schattierungen (Balayage, Ombre, Asch-Töne) zu bleichen oder aufzuhellen, da dies die Lebensdauer drastisch verkürzt und das Haar beschädigen kann. Alle Färbungen erfolgen nach eigenem Ermessen und auf eigenes Risiko des Kunden." },
          { q: "Wie oft sollte ich meine Extensions waschen?", a: "Clip-Ins: nur bei Bedarf waschen — typischerweise alle 15-20 Tragevorgänge. Sie erhalten keine natürlichen Kopfhautöle, daher führt zu häufiges Waschen zu Trockenheit. Tape-Ins / Nano / K-Tips: 1-2 Mal pro Woche mit sulfatfreiem Shampoo waschen. Nie mit feuchten Bonds schlafen. Bonds immer gründlich föhnen." },
          { q: "Wie bürste ich Extensions, ohne Schäden oder Verfilzung zu verursachen?", a: "Verwenden Sie eine Loop-Bürste oder eine spezielle Extensions-Bürste. Bürsten Sie immer zuerst von den Spitzen aus und arbeiten Sie sich in sanften Strichen zu den Ansätzen vor. Nie von den Ansätzen zu den Spitzen bürsten — das belastet die Bonds und zieht am Naturhaar. Bei Tape-Ins nur oberhalb der Bond-Linie bürsten." },
          { q: "Wie schläft man am besten mit halbfesten Extensions?", a: "Binden Sie das Haar vor dem Schlafen in einen lockeren, tiefen Zopf oder Pferdeschwanz — das verhindert Verfilzung über Nacht. Verwenden Sie ein Seiden- oder Satinkissenbezug, um Reibung zu reduzieren. Nie mit Clip-Ins schlafen. Bei K-Tip / Nano Extensions reduziert ein Seidenkissenbezug die Reibung an den Bonds deutlich." },
          { q: "Wie viele Packs / Gramm benötige ich?", a: "Für Nano Ring / K-Tip: 1 Pack (50 g / ~50 Strähnen) für dezentes Volumen. 2 Packs (100 g) für sichtbare Länge und Fülle. 3-4 Packs (150-200 g) für eine volle Verwandlung. Für Tape-In: 20-60 Tabs je nach Dicke und Wunsch. Für Clip-In: 80-120 g für dezentes Volumen, 150-220 g für volles Volumen. Unsicher? Senden Sie uns ein WhatsApp-Foto — wir beraten kostenlos." }
        ]
      }
    ]
  },
  fr: {
    metaTitle: "FAQ Extensions Capillaires | Guide Expert | D.S HAIR & BEAUTY",
    metaDescription: "Des réponses d'experts aux questions les plus fréquentes sur les extensions capillaires. Cheveux humains Remy, méthodes d'application, conseils d'entretien, tarifs pro et plus encore — du leader britannique de la vente en gros.",
    heroEyebrow: "D.S Hair & Beauty",
    heroTitle: "Questions Fréquentes",
    heroSubtitle: "Tout ce que vous devez savoir sur les extensions D.S HAIR — du choix de la bonne méthode aux soins. Vous ne trouvez pas votre réponse ?",
    whatsappMsg: "Bonjour ! J'ai une question au sujet des extensions D.S HAIR.",
    ctaWhatsapp: "Contactez-nous sur WhatsApp",
    ctaContact: "Formulaire de contact",
    ctaTitle: "Vous avez encore des questions ?",
    ctaSubtitle: "Notre équipe est prête à vous aider. Envoyez-nous un message sur WhatsApp et nous répondons généralement sous 2 heures.",
    ctaWhatsapp2: "WhatsApp nous",
    ctaContact2: "Formulaire de contact",
    categories: [
      {
        id: "general",
        title: "Questions Générales",
        faqs: [
          { q: "Quels types d'extensions capillaires D.S HAIR propose-t-il ?", a: "Nous proposons cinq méthodes professionnelles : Clip-In (facile, sans engagement), Tape-In (semi-permanent, 6-8 semaines), Nano Ring (micro-liens pour cheveux fins), K-Tip / Keratin Bond (le plus durable, 3-5 mois) et Butterfly Weft (weft ultra-plat pour le volume). Toutes sont en cheveux humains Remy 100 % — à cuticule alignée pour un rendu naturel et sans nœuds." },
          { q: "Qu'est-ce que le cheveu humain Remy 100 % ?", a: "Le cheveu humain Remy signifie que les cuticules sont conservées intactes et orientées dans un seul sens — le même que la pousse naturelle du cheveu. Cela évite les nœuds, maintient la brillance et offre un aspect bien plus naturel que le non-Remy (dont les cuticules sont retirées, provoquant des bourres et un aspect sec). Tous les produits D.S HAIR sont certifiés cheveux humains Remy 100 %." },
          { q: "Quelle est la différence entre le single-drawn et le double-drawn ?", a: "Le single-drawn présente des longueurs de mèches variées (courtes à longues) sur le weft — comme le cheveu naturel. Le double-drawn est sélectionné à la main pour que chaque mèche ait la même longueur de la racine à la pointe — offrant une épaisseur constante, plus de volume et un rendu plus premium sur toute la longueur. D.S HAIR utilise le double-drawn par défaut." },
          { q: "Comment trouver ma couleur parfaite ?", a: "Nous proposons deux solutions : 1) Parcourez notre nuancier de 31 teintes ci-dessus — commandez un catalogue couleur numérique gratuit pour comparer les nuances. 2) Envoyez-nous une photo WhatsApp de vos cheveux à la lumière du jour et notre spécialiste couleur vous trouvera la teinte correspondante sous 2 heures — gratuitement." },
          { q: "Proposez-vous des tarifs pro / gros pour les salons ?", a: "Oui. Nous avons un programme Salon Partenaire dédié avec tarifs pro, sans commande minimum, catalogue couleur numérique gratuit et livraison express prioritaire. Inscrivez-vous en ligne — nous répondons sous 24 heures avec votre grille de prix personnalisée." },
          { q: "Quelle est votre politique d'expédition et de retours ?", a: "Livraison UK gratuite dès £175, par express (3-5 jours). Expédition internationale disponible. Retours acceptés sous 30 jours pour les articles non utilisés dans leur emballage d'origine. Voir notre page complète expédition & retours pour les détails." },
          { q: "Puis-je colorer ou décolorer les extensions D.S HAIR ?", a: "Oui — toutes les extensions D.S HAIR sont en cheveux humains 100 % et acceptent les colorations professionnelles. Toutefois : nous recommandons de consulter un coloriste expérimenté. Nous déconseillons de décolorer ou éclaircir les teintes pré-colorées (Balayage, Ombre), car cela raccourcit considérablement la durée de vie du cheveu. La teinture se fait à vos risques." }
        ]
      },
      {
        id: "clip-in",
        title: "Extensions Clip-In",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR Extensions Clip-In Invisibles",
        faqs: [
          { q: "Quels types d'extensions clip-in D.S HAIR propose-t-il ?", a: "Nous proposons trois styles : Clip-Ins Invisibles / Sans Couture (base siliconée ultra-platte, notre #1 recommandé pour cheveux fins), Wefts Clip-In Classiques (base en coton résistante avec clips fermes) et Clip-In Fillers / Toppers (wefts étroits pour du volume ciblé au sommet ou à l'attache). Tous en cheveux humains Remy double-drawn 100 %." },
          { q: "Qu'a-t-il de spécial, les Clip-Ins Invisibles / Sans Couture ?", a: "Les Clip-Ins Invisibles possèdent une base siliconée ultra-mince qui imite le cuir chevelu — la base du weft disparaît sur la peau. Contrairement aux clip-ins standards qui créent une arête visible, les clip-ins sans couture sont parfaitement plats. Ils sont indétectables même en queue-de-cheval et chignons. C'est la catégorie clip-in à la croissance la plus rapide dans les salons UK." },
          { q: "Les extensions clip-in abîment-elles les cheveux naturels ?", a: "Bien posées, les clip-ins n'abîment rien du tout. Les clips bordés de silicone tiennent sans tirer ni couper la fibre. Règles clés : ne pas clipper toujours la même zone sans repositionner ; ne pas dormir avec ; ne pas clipper sur l'attache tout devant ; et choisir le poids adapté à la densité de votre cheveu." },
          { q: "Combien de temps durent les extensions clip-in ?", a: "Avec les bons soins, les clip-ins Remy D.S HAIR tiennent 6-12 mois à port régulier. Il n'y a pas de rendez-vous 'dépose' — il suffit de les déclipser le soir et de les ranger. Soin clé : laver tous les 15-20 ports, brosser des pointes vers les racines, ranger dans la pochette fournie, éviter les températures au-delà de 180°C sans protection." },
          { q: "Puis-je porter des clip-ins en queue-de-cheval ou chignon ?", a: "Oui — les Clip-Ins Invisibles / Sans Couture sont spécialement conçus pour cela. La base plate se dissimule totalement quand les cheveux sont tirés en arrière. Avec les clip-ins classiques, placez les wefts un peu plus bas que la queue-de-cheval pour que vos cheveux naturels les recouvrent entièrement." },
          { q: "Comment entretenir les extensions clip-in ?", a: "Lavez avec un shampoing sans sulfates uniquement si nécessaire (en général tous les 15-20 ports). Ne frottez pas — faites passer le shampoing doucement dans le weft. Rincez bien, appliquez un après-shampoing léger du milieu vers les pointes (pas sur la base du weft ni les clips). Séchez à plat à l'air libre ou suspendu sur un support. Toujours utiliser un protecteur thermique avant le styling à chaud." },
          { q: "Peut-on dormir avec des clip-ins ?", a: "Non. Dormir avec des clip-ins est inconfortable et peut abîmer les clips et provoquer bourres et nœuds. Retirez toujours les clip-ins avant de dormir." },
          { q: "Dois-je laver les clip-ins avant la première utilisation ?", a: "Oui. Tous les clip-ins portent un sceau protecteur vitamine / de finition issu de la fabrication. Lavez-les délicatement avec un shampoing sans sulfates avant le premier port — cela retire le sceau et permet aux extensions de se fondre naturellement dans vos cheveux." }
        ]
      },
      {
        id: "tape-in",
        title: "Extensions Tape-In",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR Extensions Tape-In Invisibles",
        faqs: [
          { q: "Que sont les extensions Tape-In et comment fonctionnent-elles ?", a: "Les extensions Tape-In utilisent des wefts en polyuréthane (PU) ultra-minces pré-enduits d'un adhésif de qualité médicale. Une fine mèche de votre cheveu naturel est prise en sandwich entre deux pastilles de weft. La liaison repose parfaitement à plat sur le cuir chevelu, pour un rendu naturel et invisible. Pas de chaleur, pas de produit de fusion — et l'une des méthodes semi-permanentes les plus rapides, posée en 1-2 heures." },
          { q: "Tape-In Invisible vs Tape-In Standard — quelle différence ?", a: "Les Tape-Ins Invisibles (Sans Couture) utilisent une base PU teintée peau qui imite le cuir chevelu — la pastille elle-même disparaît sur la peau, si bien que le cheveu semble y pousser directement. Les Tape-Ins Standards ont une base un peu plus épaisse et offrent une très bonne tenue pour tous les types de cheveux. Pour une invisibilité maximale — surtout cheveux fins ou portés relevés — les Tape-Ins Invisibles sont le choix premium." },
          { q: "Les extensions Tape-In conviennent-elles aux cheveux fins ou clairsemés ?", a: "Oui — particulièrement nos Tape-Ins Invisibles. La base PU ultra-mince de 0,5 mm applique un poids minimal par section, et la teinte peau garantit zéro pastille visible même sur cheveux fins. Pour les clientes très fines, nous recommandons des sections un peu plus fines par pastille." },
          { q: "Combien de temps durent les extensions Tape-In ?", a: "La liaison adhésive dure généralement 6-8 semaines avant un rendez-vous de re-collage (le cheveu naturel pousse et la pastille s'éloigne du cuir chevelu). Le weft lui-même peut être re-collé et réutilisé 2-3 fois — ce qui signifie que l'investissement initial dure 6-12 mois ou plus avec les bons soins." },
          { q: "Les extensions Tape-In abîment-elles mes cheveux naturels ?", a: "Posées et retirées correctement par un professionnel, les tape-ins n'abîment pas la fibre. L'adhésif se fixe à la surface du cheveu — aucune pénétration de chaleur ou de produit chimique. Les dommages viennent uniquement d'un retrait DIY incorrect (ne jamais tirer — toujours utiliser une solution de retrait pro) ou de pastilles posées trop près de la racine." },
          { q: "Comment entretenir les extensions Tape-In ?", a: "Lavez avec un shampoing sans sulfates — évitez après-shampoing ou produits huileux aux racines, car ils affaiblissent l'adhésif. Séchez bien au sèche-cheveux (ne laissez jamais les liaisons humides). Utilisez une brosse boucle des pointes vers les racines. Évitez les produits gras près des liaisons. Dormez en tresse lâche. N'appliquez pas d'après-shampoing directement sur ou près des pastilles." },
          { q: "Puis-je porter les Tape-Ins en queue-de-cheval ou chignon ?", a: "Oui — c'est l'une des grandes forces des tape-ins. Comme la base est ultra-platte, les pastilles sont à ras du cuir chevelu et totalement dissimulées en queue-de-cheval, chignon, tresse et bun. Les Tape-Ins Invisibles sont particulièrement indétectables quand les cheveux sont tirés en arrière." }
        ]
      },
      {
        id: "nano-ktip",
        title: "Extensions Nano Ring & K-Tip",
        image: "/images/featured/k-tip-extension.jpg",
        imageAlt: "D.S HAIR Extensions K-Tip",
        faqs: [
          { q: "Qu'est-ce qu'une extension Nano Ring ?", a: "Les extensions Nano Ring fixent des mèches individuelles de cheveux humains Remy 100 % via un anneau métallique ultra-petit bordé de silicone (~3 mm) — sans chaleur, sans colle, sans produit chimique. L'anneau est serré mécaniquement à l'aide de pinces spécialisées. C'est la méthode #1 recommandée pour cheveux fins ou fragiles, chaque anneau étant environ 90 % plus petit qu'un micro-anneau standard." },
          { q: "Qu'est-ce qu'une extension K-Tip (Keratin Bond) ?", a: "Les extensions K-Tip sont des mèches individuelles de cheveux humains Remy 100 % dotées d'une perle de polymère kératine pré-appliquée. Un styliste certifié utilise une baguette à fusion à chaud à 180-200°C pour ramollir la perle et l'enrober autour d'une petite mèche de cheveu naturel, formant une liaison lisse, quasi invisible. Les bonds kératine modernes sont flexibles, sans résidu et se dissolvent proprement avec un enleveur pro." },
          { q: "K-Tip vs Tape-In — lequel est mieux pour cheveux fins ?", a: "Les deux conviennent aux cheveux fins, mais avec des différences clés. Les tape-ins sont plus rapides (1-2 heures) et moins chers à l'achat mais à remplacer toutes les 6-8 semaines. Les bonds Nano K-Tip (0,5 g par mèche) sont à peine visibles, appliquent un poids minimal sur chaque mèche et durent 3-5 mois. Pour les clientes de salon qui veulent le résultat le plus naturel et le plus durable, les nano K-tips sont de plus en plus le premier choix." },
          { q: "Combien de temps durent les extensions Nano Ring et K-Tip ?", a: "Nano Ring : 6-12 mois avec remontes toutes les 6-8 semaines. Les anneaux sont re-serrés plus haut à mesure que le cheveu pousse. Le cheveu peut être réutilisé 2-3 fois en changeant les anneaux. K-Tip : 3-5 mois par jeu — nettement plus long que les tape-ins. Les mêmes mèches Remy peuvent être re-pointées et réinstallées 2-3 fois." },
          { q: "Ces méthodes abîment-elles mes cheveux naturels ?", a: "Posées, entretenues et retirées professionnellement, les deux méthodes sont considérées comme peu agressives. Les nano rings répartissent le poids uniformément sans adhésif. Les bonds kératine K-Tip répartissent le poids sur plusieurs mèches. Les risques de dommages viennent uniquement d'une pose ou d'un retrait incorrects. Faites toujours appel à un styliste extension certifié." },
          { q: "Puis-je colorer, boucler ou lisser ces extensions ?", a: "Oui — le cheveu humain Remy 100 % accepte le styling à chaud jusqu'à 180°C et la plupart des colorations pro. Appliquez toujours un protecteur thermique. Attendez au moins 2 semaines après la pose avant de colorer (laissez les bonds bien figer). Pour décolorer ou éclaircir, consultez toujours d'abord un coloriste expérimenté." },
          { q: "Comment les extensions K-Tip sont-elles retirées et peuvent-elles être réutilisées ?", a: "Le retrait doit être effectué par un styliste pro. Une solution d'enleveur de bond kératine (à base d'isopropanol ou d'acétate d'éthyle) est appliquée sur chaque bond, le rendant cassant. Le styliste casse doucement le bond avec une pince à plat — la kératine s'effrite sans couper la mèche naturelle. Le cheveu Remy peut alors être re-pointé avec de la kératine neuve et réinstallé 2-3 fois." },
          { q: "Comment entretenir les Nano Ring et K-Tip au quotidien ?", a: "Utilisez un shampoing et après-shampoing sans sulfates et sûrs pour les bonds — évitez d'appliquer l'après-shampoing directement sur les bonds. Lavez doucement en mouvement descendant (jamais circulaire, ce qui crée des nœuds). Dormez cheveux en tresse lâche et utilisez une taie en soie. Brossez quotidiennement des pointes vers les racines avec une brosse boucle. Évitez les huiles ou sérums épais près des zones de bond — l'accumulation de produit les affaiblit avec le temps." }
        ]
      },
      {
        id: "colour-care",
        title: "Couleur, Entretien & Maintenance",
        faqs: [
          { q: "Les extensions D.S HAIR peuvent-elles être lavées, séchées et coiffées à chaud ?", a: "Oui — toutes les extensions D.S HAIR sont en cheveux humains Remy 100 % et se comportent comme vos cheveux naturels. Lavez avec un shampoing sans sulfates. Utilisez un protecteur thermique avant sèche-cheveux, boucles ou lissage. Gardez les outils chauds sous 180°C. Brossez doucement des pointes vers les racines avec une brosse boucle conçue pour extensions." },
          { q: "Puis-je teindre ou décolorer les extensions D.S HAIR ?", a: "Oui — elles acceptent les colorations pro. Toutefois, nous recommandons vivement de consulter d'abord un coloriste expérimenté. Nous déconseillons de décolorer ou éclaircir les teintes pré-colorées (Balayage, Ombre, tons cendrés), car cela réduit drastiquement la durée de vie et peut abîmer le cheveu. Toute coloration se fait à la discrétion et aux risques du client." },
          { q: "À quelle fréquence dois-je laver mes extensions ?", a: "Clip-ins : lavez seulement si nécessaire — en général tous les 15-20 ports. Elles ne reçoivent pas les huiles naturelles du cuir chevelu, donc trop laver assèche. Tape-ins / Nano / K-Tips : lavez 1-2 fois par semaine avec un shampoing sans sulfates. Ne dormez jamais avec les bonds humides. Séchez toujours bien les bonds au sèche-cheveux." },
          { q: "Comment brosser les extensions sans causer de dommages ni nœuds ?", a: "Utilisez une brosse boucle ou une brosse extension spécialisée. Brossez toujours d'abord les pointes, en remontant vers les racines par gestes doux. Ne brossez jamais des racines vers les pointes — cela tend les bonds et tire sur le cheveu naturel. Pour les tape-ins, brossez uniquement au-dessus de la ligne de bond." },
          { q: "Quelle est la meilleure façon de dormir avec des extensions semi-permanentes ?", a: "Attachez les cheveux en tresse ou queue-de-cheval basse et lâche avant de dormir — cela évite bourres et nœuds la nuit. Utilisez une taie en soie ou satin pour réduire les frottements. Ne dormez jamais avec des clip-ins. Pour les extensions K-Tip / Nano, une taie en soie réduit nettement les frottements sur les bonds." },
          { q: "Combien de packs / grammes me faut-il ?", a: "Pour Nano Ring / K-Tip : 1 pack (50 g / ~50 mèches) pour un volume subtil. 2 packs (100 g) pour longueur et densité visibles. 3-4 packs (150-200 g) pour une transformation complète. Pour Tape-In : 20-60 pastilles selon l'épaisseur et le résultat souhaité. Pour Clip-In : 80-120 g pour volume subtil, 150-220 g pour volume plein. Pas sûr ? Envoyez-nous une photo WhatsApp — nous conseillons gratuitement." }
        ]
      }
    ]
  },
  ar: {
    metaTitle: "الأسئلة الشائعة عن إضافات الشعر | دليل الخبراء | D.S HAIR & BEAUTY",
    metaDescription: "إجابات خبراء عن أكثر أسئلة إضافات الشعر شيوعاً. شعر Remy البشري، طرق التطبيق، نصائح العناية، أسعار الجملة والمزيد — من المورّد البريطاني الرائد بالجملة.",
    heroEyebrow: "D.S Hair & Beauty",
    heroTitle: "الأسئلة الشائعة",
    heroSubtitle: "كل ما تحتاج معرفته عن إضافات D.S HAIR — من اختيار الطريقة المناسبة إلى العناية اللاحقة. لم تجد إجابتك؟",
    whatsappMsg: "مرحباً! لدي سؤال حول إضافات D.S HAIR.",
    ctaWhatsapp: "اسألنا على WhatsApp",
    ctaContact: "نموذج التواصل",
    ctaTitle: "لا تزال لديك أسئلة؟",
    ctaSubtitle: "فريقنا جاهز للمساعدة. أرسل لنا رسالة على WhatsApp ونرد عادةً خلال ساعتين.",
    ctaWhatsapp2: "راسلنا على WhatsApp",
    ctaContact2: "نموذج التواصل",
    categories: [
      {
        id: "general",
        title: "أسئلة عامة",
        faqs: [
          { q: "ما أنواع إضافات الشعر التي يقدّمها D.S HAIR؟", a: "نقدّم خمس طرق احترافية: Clip-In (سهلة للاستخدام المنزلي، بدون التزام)، Tape-In (شبه دائمة، 6-8 أسابيع)، Nano Ring (روابط فائقة الصغر للشعر الناعم)، K-Tip / Keratin Bond (الأطول بقاءً، 3-5 أشهر)، وButterfly Weft (ويفت مسطّح جداً للحجم). جميعها مصنوعة من شعر Remy البشري 100% — بقشرة الشعر المتّجة لأسفل لإطلالة طبيعية خالية من التشابك." },
          { q: "ما هو شعر Remy البشري 100%؟", a: "شعر Remy البشري يعني أن قشور الشعر تبقى سليمة ومتّجهة في اتجاه واحد — نفس اتجاه نمو الشعر الطبيعي. هذا يمنع التشابك، ويحافظ على اللمعان، ويمنح مظهراً أكثر طباعية بكثير من الشعر غير Remy (الذي تُزال قشوره، مما يسبب التكتّل ومظهراً جافاً). جميع منتجات D.S HAIR معتمدة كشعر Remy البشري 100%." },
          { q: "ما الفرق بين الشعر single-drawn والشعر double-drawn؟", a: "الشعر single-drawn له أطوال خصلات متفاوتة (قصيرة إلى طويلة) عند الويفت — مثل الشعر الطبيعي. أما الشعر double-drawn فهو مُنتقى يدوياً بحيث تكون كل خصلة بنفس الطول من الجذر إلى الطرف — مما يمنح سُمكاً متّسقاً، وحجماً أكمل، ومظهراً أكثر فخامة طوال الطول. يستخدم D.S HAIR الشعر double-drawn كمعيار." },
          { q: "كيف أجد لوني المثالي؟", a: "نوفّر طريقتين: 1) تصفّح لوحة ألواننا المكوّنة من 31 درجة أعلاه — اطلب كتالوج ألوان رقمياً مجانياً لمقارنة الدرجات. 2) أرسل لنا صورة على WhatsApp لشعرك تحت ضوء النهار الطبيعي، وسيتولّى أخصائي الألوان لدينا مطابقة لونك خلال ساعتين — مجاناً." },
          { q: "هل تقدّمون أسعار جملة / تجارة للصالونات؟", a: "نعم. لدينا برنامج شركاء الصالون المخصّص بأسعار تجارية، دون حدّ أدنى للطلب، مع كتالوج ألوان رقمي مجاني وتوصيل سريع ذي أولوية. قدّم طلبك عبر الإنترنت — ونرد خلال 24 ساعة بقائمة أسعارك الخاصة." },
          { q: "ما هي سياسة الشحن والإرجاع لديكم؟", a: "توصيل مجاني داخل UK للطلبات التي تزيد عن £175، عبر البريد السريع (3-5 أيام). يتوفّر شحن دولي. تُقبل الإرجاع خلال 30 يوماً للمنتجات غير المستخدمة في عبوتها الأصلية. راجع صفحة الشحن والإرجاع الكاملة لدينا للتفاصيل." },
          { q: "هل يمكنني صبغ أو تفتيح إضافات D.S HAIR؟", a: "نعم — جميع إضافات D.S HAIR مصنوعة من شعر بشري 100% وتقبل خدمات التلوين الاحترافية. ولكن: نوصي باستشارة خبير تلوين ذي خبرة. لا ننصح بتبييض أو تفتيح درجات الألوان المسبقة التلوين (Balayage، Ombre) لأن ذلك يقلّل بشكل كبير من عمر الشعر. الصبغ يتم على مسؤوليتك الخاصة." }
        ]
      },
      {
        id: "clip-in",
        title: "إضافات Clip-In",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR إضافات Clip-In غير مرئية",
        faqs: [
          { q: "ما أنواع إضافات Clip-In التي يقدّمها D.S HAIR؟", a: "نقدّم ثلاثة أنماط: Clip-Ins غير مرئية / سلسة (قاعدة سيليكون مسطّحة جداً، وتوصيتنا الأولى للشعر الناعم)، Wefts Clip-In كلاسيكية (قاعدة قطنية متينة مع مشابك قوية)، وClip-In Fillers / Toppers (ويفت ضيّقة لحجم مركّز عند قمة الرأس أو خط الشعر). جميعها من شعر Remy البشري double-drawn 100%." },
          { q: "ما المميّز في Clip-Ins غير المرئية / السلسة؟", a: "تتميّز Clip-Ins غير المرئية بقاعدة سيليكون رقيقة جداً تحاكي فروة الرأس — تختفي قاعدة الويفت على البشرة. وعلى عكس الكليب-إن القياسية التي تخلق حافّة ظاهرة، تستقر الكليب-إن السلسة بشكل مسطّح تماماً. وهي غير مكشوفة حتى في ذيول الحصان وتسريحات التجميع. وهذه هي فئة الكليب-إن الأسرع نمواً في صالونات UK." },
          { q: "هل تضرّ إضافات Clip-In الشعر الطبيعي؟", a: "عند تطبيقها بشكل صحيح، لا تسبّب الكليب-إن أي ضرر. تمسك المشابك المبطّنة بالسيليكون دون سحب أو قطع خصلة الشعر. قواعد مهمة: لا تشبكي نفس المنطقة مراراً دون إعادة تموضع؛ لا تنامي بها؛ لا تشبكي عند خط الشعر الأمامي جداً؛ واختاري الوزن الصحيح لكثافة شعرك." },
          { q: "كم تدوم إضافات Clip-In؟", a: "مع العناية الصحيحة، تدوم كليب-إن Remy من D.S HAIR 6-12 شهراً عند الارتداء المنتظم. لا حاجة لموعد 'إزالة' — فقط افكّيها ليلاً وخزّنيها. عناية أساسية: اغسليها كل 15-20 مرة ارتداء، سرّحيها من الأطراف إلى الجذور، خزّنيها في الكيس المرفق، وتجنّبي الحرارة فوق 180°C دون واقٍ." },
          { q: "هل يمكنني ارتداء الكليب-إن في ذيل حصان أو تسريحة مرفوعة؟", a: "نعم — صُمّمت Clip-Ins غير المرئية / السلسة خصيصاً لذلك. تختفي القاعدة المسطّحة تماماً عند جمع الشعر للخلف. مع الكليب-إن الكلاسيكية، ضعي الويفت أخفض قليلاً من ذيل الحصان لتغطية شعرك الطبيعي لها بالكامل." },
          { q: "كيف أعتني بإضافات Clip-In؟", a: "اغسليها بشامبو خالٍ من الكبريتات فقط عند الحاجة (عادة كل 15-20 مرة ارتداء). لا تفركي — مرّري الشامبو بلطف عبر الويفت. اشطفي جيداً، وطبّقي بلسماً خفيفاً من منتصف الخصلة إلى الأطراف (ليس على قاعدة الويفت أو المشابك). اتركيها تجفّ في الهواء مسطّحة أو علّقيها على حامل الإضافات. استخدمي دائماً واقياً من الحرارة قبل التصفيف بالأدوات الساخنة." },
          { q: "هل يمكن النوم بالكليب-إن؟", a: "لا. النوم بالكليب-إن غير مريح وقد يضرّ بالمشابك ويسبّب التكتّل والتشابك. أزيلّي الكليب-إن دائماً قبل النوم." },
          { q: "هل أحتاج لغسل الكليب-إن قبل أول استخدام؟", a: "نعم. جميع الكليب-إن عليها طبقة حماية فيتامينية / معالجة من التصنيع. اغسليها بلطف بشامبو خالٍ من الكبريتات قبل أول ارتداء — يزيل ذلك الطبقة ويسمح للإضافات بالاندماج طبيعياً مع شعرك." }
        ]
      },
      {
        id: "tape-in",
        title: "إضافات Tape-In",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR إضافات Tape-In غير مرئية",
        faqs: [
          { q: "ما هي إضافات Tape-In وكيف تعمل؟", a: "تستخدم إضافات Tape-In ويفت بولي يوريثان (PU) رقيقة جداً مغلّفة مسبقاً بصمغ طبي الدرجة. تُحشى خصلة رفيعة من شعرك الطبيعي بين لوحين من الويفت. يستقرّ الرابط مسطّحاً تماماً على فروة الرأس، مما يخلق إطلالة طبيعية وسلسة. بلا حرارة، بلا مواد انصهار كيميائية — ومن أسرع الطرق شبه الدائمة، إذ تستغرق التطبيق 1-2 ساعة." },
          { q: "Tape-In غير مرئية مقابل Tape-In قياسية — ما الفرق؟", a: "تستخدم Tape-Ins غير المرئية (السلسة) قاعدة PU بلون قريب من لون البشرة تحاكي فروة الرأس — تختفي اللوحة نفسها على البشرة، فيبدو الشعر وكأنه ينمو منها مباشرة. أما Tape-Ins القياسية فلها قاعدة أسمك قليلاً وتوفّر ثباتاً ممتازاً لكل أنواع الشعر. ولأقصى درجة من عدم الظهور — خاصة في الشعر الناعم أو عند رفعه — تعدّ Tape-Ins غير المرئية الخيار الفاخر." },
          { q: "هل تصلح إضافات Tape-In للشعر الناعم أو الخفيف؟", a: "نعم — وخاصة Tape-Ins غير المرئية لدينا. تضع القاعدة PU فائقة الرقة سُمك 0.5mm وزناً أدنى لكل قسم، ومطابقة لون البشرة تضمن عدم ظهور أي لوحة حتى في الشعر الناعم. للعميلات ذوات الشعر الناعم جداً، نوصي بأقسام أرفع قليلاً لكل لوحة." },
          { q: "كم تدوم إضافات Tape-In؟", a: "عادة ما يدوم الرابط اللاصق 6-8 أسابيع قبل موعد إعادة اللصق (ينمو الشعر الطبيعي وتبتعد اللوحة عن فروة الرأس). يمكن إعادة لصق الويفت نفسه وإعادة استخدامه 2-3 مرات — ما يعني أن الاستثمار الأولي في الشعر يدوم 6-12 شهراً أو أكثر مع العناية الصحيحة." },
          { q: "هل تضرّ إضافات Tape-In شعري الطبيعي؟", a: "عند تركيبها وإزالتها بشكل صحيح على يد محترف، لا تسبب التايب-إن أي ضرر لخصلة الشعر. يلتصق الصمغ بسطح الشعر — دون اختراق بالحرارة أو بالمواد الكيميائية. ولا تحدث الأضرار إلا من إزالة DIY غير صحيحة (لا تسحبي أبداً — استخدمي دائماً محلول إزالة احترافياً) أو وضع اللوحات قريباً جداً من الجذر." },
          { q: "كيف أعتني بإضافات Tape-In؟", a: "اغسليها بشامبو خالٍ من الكبريتات — وتجنّبي البلسم أو الزيوت عند الجذور لأنها تضعف الصمغ. جفّفيها بالمجفّف جيداً (لا تتركي روابط التايب رطبة أبداً). استخدمي فرشاة حلقية من الأطراف إلى الجذور. تجنّبي المنتجات الزيتية الثقيلة قرب الروابط. نامي بضفيرة فضفاضة. لا تضعي البلسم مباشرة على لوحات التايب أو بالقرب منها." },
          { q: "هل يمكنني ارتداء Tape-Ins في ذيل حصان أو تسريحة مرفوعة؟", a: "نعم — هذه إحدى أقوى مزايا التايب-إن. وبما أن القاعدة مسطّحة جداً، تستقرّ اللوحات متلاصقة مع فروة الرأس ومخفية تماماً في ذيول الحصان والتسريحات المرفوعة والضفائر والكعك. تعدّ Tape-Ins غير المرئية غير مكشوفة بشكل خاص عند جمع الشعر للخلف." }
        ]
      },
      {
        id: "nano-ktip",
        title: "إضافات Nano Ring وK-Tip",
        image: "/images/featured/k-tip-extension.jpg",
        imageAlt: "D.S HAIR إضافات K-Tip",
        faqs: [
          { q: "ما هي إضافة Nano Ring؟", a: "تثبّت إضافات Nano Ring خصلات فردية من شعر Remy البشري 100% باستخدام حلقة معدنية فائقة الصغر مبطّنة بالسيليكون (~3mm) — بلا حرارة، بلا صمغ، بلا مواد كيميائية. تُعصر الحلقة ميكانيكياً بكمّاشات متخصّصة. وهي الطريقة الموصى بها رقم 1 للشعر الناعم أو الحسّاس، إذ تكون كل حلقة أصغر بنحو 90% من الميكرو-رينغ القياسي." },
          { q: "ما هي إضافة K-Tip (Keratin Bond)؟", a: "إضافات K-Tip هي خصلات فردية من شعر Remy البشري 100% مزوّدة بحبّة بوليمر الكيراتين المُجهّزة مسبقاً. يستخدم مصفّف معتمد عصا انصهار ساخنة عند 180-200°C لتليين الحبّة وتشكيلها حول قسم صغير من الشعر الطبيعي، مكوّنة رابطاً ناعماً شبه غير مرئي. روابط الكيراتين الحديثة مرنة، خالية من البقايا، وتذوب نظيفاً بمذيب احترافي." },
          { q: "K-Tip مقابل Tape-In — أيّهما أفضل للشعر الناعم؟", a: "كلاهما يعمل على الشعر الناعم، لكن مع فروق جوهرية. التايب-إن أسرع (1-2 ساعة) وأرخص بدءاً، لكنها تحتاج استبدالاً كل 6-8 أسابيع. روابط Nano K-Tip (0.5g لكل خصلة) بالكاد تظهر، وتضع وزناً أدنى على الخصلات الفردية، وتدوم 3-5 أشهر. لعميلات الصالون الراغبات في أكثر النتائج طبيعية وأطول بقاءً، تعدّ nano K-tips الخيار الأول المتزايد." },
          { q: "كم تدوم إضافات Nano Ring وK-Tip؟", a: "Nano Ring: 6-12 شهراً مع إعادة رفع كل 6-8 أسابيع. تُعصر الحلقات أعلى كلما نما الشعر. يمكن إعادة استخدام الشعر 2-3 مرات باستبدال الحلقات. K-Tip: 3-5 أشهر لكل طقم — أطول بكثير من التايب-إن. يمكن إعادة تلميع نفس خصلات Remy وإعادة تركيبها 2-3 مرات." },
          { q: "هل تضرّ هذه الطرق شعري الطبيعي؟", a: "عند تركيبها والعناية بها وإزالتها بشكل احترافي، يُعتبر كلاهما منخفض الضرر. توزّع النانو رينغ الوزن بالتساوي دون صمغ. وروابط كيراتين K-Tip توزّع الوزن على خصلات متعددة. وتنشأ مخاطر الضرر فقط من تركيب غير صحيح أو إزالة غير سليمة. استعيني دائماً بمصفّف إضافات معتمد." },
          { q: "هل يمكنني صبغ أو تجعيد أو فرد هذه الإضافات؟", a: "نعم — شعر Remy البشري 100% يقبل التصفيف الحراري حتى 180°C ومعظم خدمات التلوين الاحترافية. طبّقي واقياً من الحرارة دائماً. انتظري أسبوعين على الأقل بعد التركيب قبل التلوين (اتركي الروابط تثبت تماماً). وللتبييض أو التفتيح، استشيري دائماً خبير تلوين ذا خبرة أولاً." },
          { q: "كيف تُزال إضافات K-Tip وهل يمكن إعادة استخدامها؟", a: "يجب أن يقوم مصفّف محترف بالإزالة. يُطبَّق محلول مذيب رابط الكيراتين (قائم على الإيزوبروبيل الكحول أو أسيتات الإيثيل) على كل رابط ليصبح هشّاً. يكسر المصفّف الرابط بلطف بكمّاشة مسطّحة الأنف — تتفتّت الكيراتين دون قطع الخصلة الطبيعية. يمكن عندئذٍ إعادة تلميع شعر Remy بكيراتين جديد وإعادة تركيبه 2-3 مرات." },
          { q: "كيف أعتني بإضافات Nano Ring وK-Tip يومياً؟", a: "استخدمي شامبو وبلسم خاليَين من الكبريتات وآمنَين للروابط — وتجنّبي وضع البلسم مباشرة على الروابط. اغسلي بلطف بحركة تنازلية (لا دائرية، فهي تسبب التشابك). نامي بشعر مضفّر فضفاض واستخدمي كيس وسادة من الحرير. سرّحي يومياً من الأطراف إلى الجذور بفرشاة حلقية. تجنّبي الزيوت أو السيروم الثقيلة قرب مناطق الروابط — تراكم المنتج يضعفها مع الوقت." }
        ]
      },
      {
        id: "colour-care",
        title: "اللون والعناية والصيانة",
        faqs: [
          { q: "هل يمكن غسل وتجفيف وتصفيف إضافات D.S HAIR بالحرارة؟", a: "نعم — جميع إضافات D.S HAIR من شعر Remy البشري 100% وتتصرف مثل شعرك الطبيعي. اغسليها بشامبو خالٍ من الكبريتات. استخدمي واقياً من الحرارة قبل التجفيف بالمجفّف أو التجعيد أو الفرد. أبقي أدوات الحرارة تحت 180°C. سرّحي بلطف من الأطراف إلى الجذور بفرشاة حلقية مصمّمة للإضافات." },
          { q: "هل يمكنني صبغ أو تفتيح إضافات D.S HAIR؟", a: "نعم — تقبل خدمات التلوين الاحترافية. ولكننا نوصي بشدّة باستشارة خبير تلوين ذي خبرة أولاً. لا ننصح بتبييض أو تفتيح الدرجات الملوّنة مسبقاً (Balayage، Ombre، درجات الرمادي) لأن ذلك يقلّل العمر بشكل جذري وقد يضرّ الشعر. يتمّ أي تلوين بحسب تقدير العميل ومسؤوليته." },
          { q: "كم مرة يجب أن أغسل إضافاتي؟", a: "الكليب-إن: اغسلي فقط عند الحاجة — عادة كل 15-20 مرة ارتداء. فهي لا تتلقّى زيوت فروة الرأس الطبيعية، لذا الإفراط في الغسل يسبب الجفاف. التايب-إن / النانو / K-Tips: اغسلي 1-2 مرّة أسبوعياً بشامبو خالٍ من الكبريتات. لا تنامي أبداً بروابط رطبة. جفّفي الروابط دائماً بالمجفّف جيداً." },
          { q: "كيف أسرّح الإضافات دون التسبب بضرر أو تشابك؟", a: "استخدمي فرشاة حلقية أو فرشاة إضافات متخصّصة. سرّحي دائماً من الأطراف أولاً، صاعدة إلى الجذور بحركات لطيفة. لا تسرّحي أبداً من الجذور إلى الأطراف — فذلك يضع توتراً على الروابط ويشدّ الشعر الطبيعي. وللتايب-إن، سرّحي فوق خط الرابط فقط." },
          { q: "ما أفضل طريقة للنوم بإضافات شبه دائمة؟", a: "اربطي الشعر بضفيرة أو ذيل حصان منخفض وفضفاض قبل النوم — ذلك يمنع التكتّل والتشابك ليلاً. استخدمي كيس وسادة من الحرير أو الساتان لتقليل الاحتكاك. لا تنامي أبداً بالكليب-إن. ولإضافات K-Tip / النانو، يقلّل كيس الوسادة الحريري الاحتكاك على الروابط بشكل كبير." },
          { q: "كم عدد الباكيات / الغرامات التي أحتاجها؟", a: "لـ Nano Ring / K-Tip: باكية واحدة (50g / ~50 خصلة) لحجم خفيف. باكيتان (100g) لطول وامتلاء ملحوظَين. 3-4 باكيات (150-200g) لتحوّل كامل. للـ Tape-In: 20-60 لوحة حسب السُمك والنتيجة المرغوبة. للـ Clip-In: 80-120g لحجم خفيف، 150-220g لحجم كامل. غير متأكدة؟ أرسلي لنا صورة على WhatsApp — ننصح مجاناً." }
        ]
      }
    ]
  },
  sv: {
    metaTitle: "Vanliga frågor om hårförlängning | Expertguide | D.S HAIR & BEAUTY",
    metaDescription: "Expertssvar på de vanligaste frågorna om hårförlängning. Remy människohår, applikationsmetoder, skötselråd, grossistpriser och mer — från Storbritanniens ledande grossist.",
    heroEyebrow: "D.S Hair & Beauty",
    heroTitle: "Vanliga frågor",
    heroSubtitle: "Allt du behöver veta om D.S HAIR-förlängningar — från att välja rätt metod till eftervård. Hittar du inte svaret?",
    whatsappMsg: "Hej! Jag har en fråga om D.S HAIR-förlängningar.",
    ctaWhatsapp: "Fråga oss på WhatsApp",
    ctaContact: "Kontaktformulär",
    ctaTitle: "Har du fortfarande frågor?",
    ctaSubtitle: "Vårt team är redo att hjälpa till. Skicka oss ett meddelande på WhatsApp så svarar vi vanligtvis inom 2 timmar.",
    ctaWhatsapp2: "WhatsAppa oss",
    ctaContact2: "Kontaktformulär",
    categories: [
      {
        id: "general",
        title: "Allmänna frågor",
        faqs: [
          { q: "Vilka typer av hårförlängningar erbjuder D.S HAIR?", a: "Vi erbjuder fem professionella metoder: Clip-In (för hemmabruk, utan bindning), Tape-In (halvpermanent, 6-8 veckor), Nano Ring (ultrasmå fästen för fint hår), K-Tip / Keratin Bond (hållbarast, 3-5 månader) och Butterfly Weft (ultraplatt weft för volym). Alla är 100 % Remy människohår — med cuticula i samma riktning för ett naturligt, tovfritt resultat." },
          { q: "Vad är 100 % Remy människohår?", a: "Remy människohår innebär att cuticula bevaras intakt och riktas åt samma håll — samma riktning som hårets naturliga tillväxt. Det förhindrar tovning, bibehåller glansen och ger ett mycket naturligare utseende än icke-Remy-hår (där cuticula avlägsnas, vilket orsakar tovor och ett torrt utseende). Alla D.S HAIR-produkter är certifierat 100 % Remy människohår." },
          { q: "Vad är skillnaden mellan single-drawn och double-drawn hår?", a: "Single-drawn hår har varierande stränglängder (kort till lång) vid weften — som naturligt hår. Double-drawn hår väljs för hand så att varje sträng har samma längd från rot till spets — vilket ger jämnt tjocklek, mer volym och ett mer premiumigt utseende genom hela längden. D.S HAIR använder double-drawn hår som standard." },
          { q: "Hur hittar jag min perfekta färgmatchning?", a: "Vi erbjuder två sätt: 1) Bläddra i vårt färgschema med 31 nyanser ovan — beställ en gratis digital färgkatalog för att jämföra nyanser. 2) Skicka oss ett WhatsApp-foto på ditt hår i dagsljus så matchar vår färgspecialist dig inom 2 timmar — helt kostnadsfritt." },
          { q: "Erbjuder ni handels- / grossistpriser för salonger?", a: "Ja. Vi har ett dedikerat Salon Partner-program med handelspriser, inget minsta ordervärde, gratis digital färgkatalog och prioriterad expressleverans. Ansök online — vi svarar inom 24 timmar med din personliga prislista." },
          { q: "Vad har ni för frakt- och returpolicy?", a: "Gratis frakt inom UK vid beställningar över £175, skickas med express (3-5 dagar). Internationell frakt finns tillgänglig. Returer accepteras inom 30 dagar för oanvända varor i originalförpackning. Se vår fullständiga sida för frakt & returer för detaljer." },
          { q: "Kan jag färga eller bleka D.S HAIR-förlängningar?", a: "Ja — alla D.S HAIR-förlängningar är 100 % människohår och klarar professionella färgbehandlingar. Men: vi rekommenderar att rådfråga en erfaren färgtekniker. Vi rekommenderar inte att bleka eller ljusa upp färgbehandlade nyanser (Balayage, Ombre) eftersom detta kortar ner hårets livslängd avsevärt. Färgning sker på egen risk." }
        ]
      },
      {
        id: "clip-in",
        title: "Clip-In-förlängningar",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR Osynliga Clip-In-förlängningar",
        faqs: [
          { q: "Vilka typer av clip-in-förlängningar erbjuder D.S HAIR?", a: "Vi erbjuder tre stilar: Osynliga / Sömlösa Clip-Ins (ultraplatt silikonbas, vårt #1-val för fint hår), Klassiska Clip-In-wefts (hållbar bomullsbas med starka klickklipp) och Clip-In Fillers / Toppers (smala wefts för riktad volym vid hjässan eller hårfästan). Alla är 100 % double-drawn Remy människohår." },
          { q: "Vad är speciellt med Osynliga / Sömlösa Clip-Ins?", a: "Osynliga Clip-Ins har en ultratunn platt silikonbas som efterliknar hårbotten — weftbasen försvinner mot huden. Till skillnad från standard clip-ins som skapar en synlig kant, ligger sömlösa clip-ins helt platt. De är omärkliga även i hästsvans och uppsättningar. Detta är den snabbast växande clip-in-kategorin i UK-salonger." },
          { q: "Skadar clip-in-förlängningar det naturliga håret?", a: "Vid korrekt applicering orsakar clip-ins noll skada. De silikonfodrade klippen greppar utan att dra eller skära av hårstrået. Nyckelregler: klipp aldrig fast i samma sektion upprepade gånger utan att omplacera; sov inte i dem; klipp inte fast i främsta hårfästet; och välj rätt vikt för din hårtäthet." },
          { q: "Hur länge håller clip-in-förlängningar?", a: "Vid rätt vård håller D.S HAIR Remy clip-ins 6-12 månader vid regelbundet bruk. Det finns inget 'borttagnings'-besök — klicka bara loss dem på kvällen och förvara. Nyckelvård: tvätta var 15-20:e gång, borsta från topparna uppåt, förvara i medföljande påse, undvik värme över 180°C utan skydd." },
          { q: "Kan jag ha clip-ins i hästsvans eller uppsättning?", a: "Ja — Osynliga / Sömlösa Clip-Ins är speciellt utformade för detta. Den platta basen döljs helt när håret dras tillbaka. Med klassiska clip-ins, placera wefts något lägre än hästsvansen så täcker ditt naturliga hår dem helt." },
          { q: "Hur sköter jag clip-in-förlängningar?", a: "Tvätta med sulfatfritt schampo endast vid behov (vanligtvis var 15-20:e gång). Skrubba inte — arbeta in schampot försiktigt genom weften. Skölj noga, applicera lätt balsam från mitten till topparna (inte på weftbasen eller klippen). Lufttorka platt eller häng på en förlängningshållare. Använd alltid värmeskydd före styling med varma verktyg." },
          { q: "Kan man sova i clip-ins?", a: "Nej. Att sova i clip-ins är obekvämt och kan skada klippen samt orsaka tovor och trassel. Ta alltid av clip-ins före sömn." },
          { q: "Behöver jag tvätta clip-ins före första användning?", a: "Ja. Alla clip-ins har ett skyddande vitamin- / bearbetningslager från tillverkningen. Tvätta dem försiktigt med sulfatfritt schampo före första användning — detta avlägsnar lagret och låter förlängningarna smälta naturligt in i ditt hår." }
        ]
      },
      {
        id: "tape-in",
        title: "Tape-In-förlängningar",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR Osynliga Tape-In-förlängningar",
        faqs: [
          { q: "Vad är Tape-In-förlängningar och hur fungerar de?", a: "Tape-In-förlängningar använder ultratunna polyuretan- (PU-) wefts som är förladdade med medicinskt klister. En tunn slinga av ditt naturliga hår kläms in mellan två weft-flikar. Fästet ligger helt platt mot hårbotten och skapar ett naturligt, sömlöst resultat. Ingen värme, ingen smältkemi — och en av de snabbaste halvpermanenta metoderna, som tar 1-2 timmar att applicera." },
          { q: "Osynlig Tape-In vs Standard Tape-In — vad är skillnaden?", a: "Osynliga (Sömlösa) Tape-Ins använder en PU-bas i hudton som efterliknar hårbotten — själva fliken försvinner mot huden, så håret verkar växa direkt ur den. Standard Tape-Ins har en något tjockare bas och ger utmärkt grepp för alla hårtyper. För maximal osynlighet — särskilt vid fint hår eller vid uppsättning — är Osynliga Tape-Ins det premiumvalet." },
          { q: "Passar Tape-In-förlängningar för fint eller tunt hår?", a: "Ja — särskilt våra Osynliga Tape-Ins. Den ultratunna 0,5 mm PU-basen ger minimal vikt per sektion, och hudtonsmatchningen säkerställer noll synlig flik även vid fint hår. För kunder med mycket fint hår rekommenderar vi något tunnare sektioner per flik." },
          { q: "Hur länge håller Tape-In-förlängningar?", a: "Klistret håller typiskt 6-8 veckor innan en omtejpning behövs (det naturliga håret växer och fliken flyttas från hårbotten). Själva hårweften kan tejpas om och återanvändas 2-3 gånger — vilket innebär att den initiala hårinvesteringen räcker 6-12 månader eller mer vid rätt vård." },
          { q: "Skadar Tape-In-förlängningar mitt naturliga hår?", a: "Vid korrekt montering och borttagning av en proffs orsakar tape-ins ingen skada på hårstrået. Klistret fäster vid hårets yta — ingen värme eller kemisk inträngning. Skador uppstår endast vid felaktig DIY-borttagning (dra aldrig — använd alltid en professionell borttagningsvätska) eller genom att placera flikar för nära roten." },
          { q: "Hur sköter jag Tape-In-förlängningar?", a: "Tvätta med sulfatfritt schampo — undvik balsam eller oljeprodukter vid rötterna eftersom de försvagar klistret. Torka noggrant med blåsmaskin (lämna aldrig tejpfästena fuktiga). Använd en loopborste från topparna uppåt. Undvik tunga oljebaserade produkter nära fästena. Sov i en lös fläta. Använd inte balsam direkt på eller nära tejpflikarna." },
          { q: "Kan jag ha Tape-Ins i hästsvans eller uppsättning?", a: "Ja — det är en av tape-ins största styrkor. Eftersom basen är ultraplatt ligger flikarna tätt mot hårbotten och döljs helt i hästsvansar, uppsättningar, flätor och knutar. Osynliga Tape-Ins är särskilt omärkliga när håret dras tillbaka." }
        ]
      },
      {
        id: "nano-ktip",
        title: "Nano Ring- & K-Tip-förlängningar",
        image: "/images/featured/k-tip-extension.jpg",
        imageAlt: "D.S HAIR K-Tip-förlängningar",
        faqs: [
          { q: "Vad är en Nano Ring-förlängning?", a: "Nano Ring-förlängningar fäster individuella strängar av 100 % Remy människohår med en ultraliten silikonfodrad metallring (~3 mm) — ingen värme, inget lim, inga kemikalier. Ringen kläms mekaniskt med specialtång. Det är den #1 rekommenderade metoden för fint eller skört hår, eftersom varje ring är ungefär 90 % mindre än en standard mikroring." },
          { q: "Vad är en K-Tip (Keratin Bond)-förlängning?", a: "K-Tip-förlängningar är individuella strängar av 100 % Remy människohår med en förapplicerad keratinpolymerpärla. En certifierad stylist använder en smältstav vid 180-200°C för att mjuka upp pärlen och forma den runt en liten sektion naturligt hår, vilket bildar ett slätt, nästan osynligt fäste. Moderna keratinfästen är flexibla, fria från rester och löses upp rent med professionell borttagningsvätska." },
          { q: "K-Tip vs Tape-In — vilket är bättre för fint hår?", a: "Båda fungerar på fint hår, men med viktiga skillnader. Tape-ins är snabbare (1-2 timmar) och billigare initialt men behöver bytas var 6-8:e vecka. Nano K-Tip-fästen (0,5 g per sträng) är knappt synliga, ger minimal vikt på individuella strängar och håller 3-5 månader. För salongskunder som vill ha det naturligaste, hållbaraste resultatet är nano K-tips i allt högre grad förstavalet." },
          { q: "Hur länge håller Nano Ring- och K-Tip-förlängningar?", a: "Nano Ring: 6-12 månader med påflyttning var 6-8:e vecka. Ringarna kläms högre ju mer håret växer. Håret kan återanvändas 2-3 gånger genom att byta ringar. K-Tip: 3-5 månader per set — betydligt längre än tape-ins. Samma Remy-hårsträngar kan spetsas om och monteras om 2-3 gånger." },
          { q: "Skadar dessa metoder mitt naturliga hår?", a: "Vid professionell montering, vård och borttagning anses båda metoderna skonsamma. Nano ringar fördelar vikten jämnt utan lim. K-Tip-keratinfästen fördelar vikten över flera strängar. Skaderisker uppstår endast vid felaktig montering eller felaktig borttagning. Använd alltid en certifierad förlängningsstylist." },
          { q: "Kan jag färga, locka eller stila dessa förlängningar med värme?", a: "Ja — 100 % Remy människohår klarar värmestyling upp till 180°C och de flesta professionella färgbehandlingar. Använd alltid värmeskydd. Vänta minst 2 veckor efter montering innan du färgar (låt fästena härda helt). För blekning eller uppljusning, rådfråga alltid först en erfaren färgtekniker." },
          { q: "Hur tas K-Tip-förlängningar bort och kan de återanvändas?", a: "Borttagning måste göras av en professionell stylist. En keratinfäste-borttagningsvätska (baserad på isopropylalkohol eller etylacetat) appliceras på varje fäste så att det blir sprött. Stylisten knäcker försiktigt fästet med en plattnäbbad tång — keratinet smulas sönder utan att klippa det naturliga strået. Remy-håret kan då spetsas om med färsk keratin och monteras om 2-3 gånger." },
          { q: "Hur sköter jag Nano Ring och K-Tip dagligen?", a: "Använd sulfatfritt, fästesäkert schampo och balsam — undvik att applicera balsam direkt på fästena. Tvätta försiktigt med nedåtgående rörelse (aldrig cirkulärt, vilket orsakar tovor). Sov med håret i en lös fläta och använd ett sidenöverdrag. Borsta dagligen från toppar till rötter med en loopborste. Undvik tunga oljor eller serum nära fästen — produktuppbyggnad försvagar dem över tid." }
        ]
      },
      {
        id: "colour-care",
        title: "Färg, vård & underhåll",
        faqs: [
          { q: "Kan D.S HAIR-förlängningar tvättas, blåstorkas och stylas med värme?", a: "Ja — alla D.S HAIR-förlängningar är 100 % Remy människohår och beter sig som ditt naturliga hår. Tvätta med sulfatfritt schampo. Använd värmeskydd före blåstorkning, lockning eller strykning. Håll värmeverktyg under 180°C. Borsta försiktigt från toppar till rötter med en loopborste gjord för förlängningar." },
          { q: "Kan jag färga eller bleka D.S HAIR-förlängningar?", a: "Ja — de klarar professionella färgbehandlingar. Vi rekommenderar dock starkt att först rådfråga en erfaren färgtekniker. Vi rekommenderar inte att bleka eller ljusa upp färgbehandlade nyanser (Balayage, Ombre, asktoner) eftersom detta drastiskt förkortar livslängden och kan skada håret. All färgning sker på kundens eget bevåg och risk." },
          { q: "Hur ofta bör jag tvätta mina förlängningar?", a: "Clip-ins: tvätta endast vid behov — vanligtvis var 15-20:e gång. De får inte hårbottnens naturliga oljor, så övertvättning orsakar torrhet. Tape-ins / Nano / K-Tips: tvätta 1-2 gånger i veckan med sulfatfritt schampo. Sov aldrig med fuktiga fästen. Torka alltid fästena noggrant med blåsmaskin." },
          { q: "Hur borstar jag förlängningar utan att orsaka skada eller tovor?", a: "Använd en loopborste eller specialborste för förlängningar. Borsta alltid från topparna först, arbeta dig upp mot rötterna med försiktiga tag. Borsta aldrig från rötter till toppar — det spänner fästena och drar i det naturliga håret. För tape-ins, borsta endast ovanför fästlinjen." },
          { q: "Vad är det bästa sättet att sova med halvpermanenta förlängningar?", a: "Sätt håret i en lös, låg fläta eller hästsvans innan läggdags — detta förhindrar tovor och trassel över natten. Använd ett siden- eller satängöverdrag för att minska friktion. Sov aldrig i clip-ins. För K-Tip / Nano-förlängningar minskar ett sidenöverdrag friktionen på fästena avsevärt." },
          { q: "Hur många paket / gram behöver jag?", a: "För Nano Ring / K-Tip: 1 paket (50 g / ~50 strängar) för subtil volym. 2 paket (100 g) för märkbar längd och fyllighet. 3-4 paket (150-200 g) för en fullständig förvandling. För Tape-In: 20-60 flikar beroende på tjocklek och önskat resultat. För Clip-In: 80-120 g för subtil volym, 150-220 g för full volym. Osäker? Skicka oss ett WhatsApp-foto — vi rådgör gratis." }
        ]
      }
    ]
  },
  pl: {
    metaTitle: "Najczęstsze pytania o przedłużanie włosów | Poradnik eksperta | D.S HAIR & BEAUTY",
    metaDescription: "Eksperckie odpowiedzi na najczęstsze pytania o przedłużanie włosów. Remy ludzkie włosy, metody aplikacji, wskazówki pielęgnacyjne, ceny hurtowe i nie tylko — od czołowego brytyjskiego dostawcy hurtowego.",
    heroEyebrow: "D.S Hair & Beauty",
    heroTitle: "Najczęściej Zadawane Pytania",
    heroSubtitle: "Wszystko, co musisz wiedzieć o przedłużeniach D.S HAIR — od wyboru odpowiedniej metody po pielęgnację. Nie znalazłeś odpowiedzi?",
    whatsappMsg: "Cześć! Mam pytanie o przedłużenia D.S HAIR.",
    ctaWhatsapp: "Zapytaj nas na WhatsApp",
    ctaContact: "Formularz kontaktowy",
    ctaTitle: "Nadal masz pytania?",
    ctaSubtitle: "Nasz zespół jest gotowy do pomocy. Wyślij nam wiadomość na WhatsApp, a zazwyczaj odpowiadamy w ciągu 2 godzin.",
    ctaWhatsapp2: "Napisz na WhatsApp",
    ctaContact2: "Formularz kontaktowy",
    categories: [
      {
        id: "general",
        title: "Pytania ogólne",
        faqs: [
          { q: "Jakie rodzaje przedłużeń włosów oferuje D.S HAIR?", a: "Oferujemy pięć profesjonalnych metod: Clip-In (do samodzielnego stosowania, bez zobowiązań), Tape-In (półtrwałe, 6-8 tygodni), Nano Ring (ultramałe łącza dla cienkich włosów), K-Tip / Keratin Bond (najtrwalsze, 3-5 miesięcy) oraz Butterfly Weft (ultrapłaski weft dla objętości). Wszystkie są z 100% Remy ludzkich włosów — z ułożoną łuską dla naturalnego, pozbawionego kołtunów efektu." },
          { q: "Czym jest 100% Remy ludzkich włosów?", a: "Remy ludzkie włosy oznaczają, że łuska pozostaje nienaruszona i ułożona w jednym kierunku — tym samym, co kierunek naturalnego wzrostu włosa. Zapobiega to kołtunieniu, zachowuje połysk i daje znacznie naturalniejszy wygląd niż włosy nie-Remy (gdzie łuska jest usuwana, co powoduje zbrylanie i suche wygląd). Wszystkie produkty D.S HAIR są certyfikowane jako 100% Remy ludzkie włosy." },
          { q: "Jaka jest różnica między włosami single-drawn a double-drawn?", a: "Włosy single-drawn mają zróżnicowaną długość pasm (krótkie do długich) przy wefcie — jak naturalne włosy. Włosy double-drawn są selekcjonowane ręcznie, by każde pasmo miało tę samą długość od nasady do końca — co daje równomierną grubość, większą objętość i bardziej premiumowy wygląd na całej długości. D.S HAIR stosuje double-drawn jako standard." },
          { q: "Jak znaleźć idealne dopasowanie koloru?", a: "Oferujemy dwa sposoby: 1) Przeglądaj naszą 31-odcieniową paletę kolorów powyżej — zamów bezpłatny cyfrowy katalog kolorów, by porównać odcienie. 2) Wyślij nam zdjęcie na WhatsApp swoich włosów w świetle dziennym, a nasz specjalista dobierze kolor w ciągu 2 godzin — całkowicie za darmo." },
          { q: "Czy oferujecie ceny hurtowe / dla salonów?", a: "Tak. Mamy dedykowany Program Partnerski Salon z cenami hurtowymi, bez minimalnego zamówienia, z bezpłatnym cyfrowym katalogiem kolorów i priorytetową ekspresową wysyłką. Złóż wniosek online — odpowiadamy w ciągu 24 godzin z Twoją indywidualną listą cen." },
          { q: "Jaka jest Wasza polityka wysyłki i zwrotów?", a: "Darmowa dostawa w UK przy zamówieniach powyżej £175, wysyłanych ekspresem (3-5 dni). Dostępna wysyłka międzynarodowa. Zwroty przyjmowane w ciągu 30 dni dla nieużywanych produktów w oryginalnym opakowaniu. Szczegóły znajdziesz na naszej pełnej stronie wysyłki i zwrotów." },
          { q: "Czy mogę farbować lub rozjaśniać przedłużenia D.S HAIR?", a: "Tak — wszystkie przedłużenia D.S HAIR są z 100% ludzkich włosów i przyjmują profesjonalne zabiegi koloryzacji. Jednak: zalecamy konsultację z doświadczonym kolorystą. Nie zalecamy rozjaśniania lub upiększania kolorem wstępnie koloryzowanych odcieni (Balayage, Ombre), ponieważ znacznie skraca to żywotność włosa. Farbowanie odbywa się na własne ryzyko." }
        ]
      },
      {
        id: "clip-in",
        title: "Przedłużenia Clip-In",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR Niewidzialne przedłużenia Clip-In",
        faqs: [
          { q: "Jakie rodzaje przedłużeń clip-in oferuje D.S HAIR?", a: "Oferujemy trzy style: Clip-Ins Niewidzialne / Bez Szwu (ultrapłaska baza silikonowa, nasz #1 dla cienkich włosów), Klasyczne Wefty Clip-In (wytrzymała bawełniana baza z mocnymi klipami) oraz Clip-In Fillers / Toppers (wąskie wefty na ukierunkowaną objętość przy skórze głowy lub linii włosa). Wszystkie są z 100% double-drawn Remy ludzkich włosów." },
          { q: "Co wyróżnia Clip-Ins Niewidzialne / Bez Szwu?", a: "Clip-Ins Niewidzialne mają ultracienką płaską bazę silikonową imitującą skórę głowy — baza weftu znika na skórze. W przeciwieństwie do standardowych clip-in, które tworzą widoczną krawędź, niewidzialne clip-in leżą całkowicie płasko. Są niewykrywalne nawet w kucyku i upięciach. To najszybciej rosnąca kategoria clip-in w salonach w UK." },
          { q: "Czy przedłużenia clip-in uszkadzają naturalne włosy?", a: "Przy prawidłowym nakładaniu clip-in nie powodują żadnych uszkodzeń. Klipsy wyłożone silikonem chwytają bez ciągnięcia lub przecinania pasma. Kluczowe zasady: nie przypinaj w tej samej sekcji wielokrotnie bez przesunięcia; nie śpij w nich; nie przypinaj przy samej przedniej linii włosa; i wybierz właściwy ciężar do gęstości swoich włosów." },
          { q: "Jak długo trzymają się przedłużenia clip-in?", a: "Przy odpowiedniej pielęgnacji clip-in z Remy od D.S HAIR trzymają 6-12 miesięcy przy regularnym noszeniu. Nie ma wizyty 'usuwania' — po prostu odpinaj je wieczorem i przechowuj. Kluczowa pielęgnacja: myj co 15-20 założeń, szczotkuj od końców w górę, przechowuj w dołączonym woreczku, unikaj ciepła powyżej 180°C bez ochrony." },
          { q: "Czy mogę nosić clip-in w kucyku lub upięciu?", a: "Tak — Clip-Ins Niewidzialne / Bez Szwu są do tego specjalnie zaprojektowane. Płaska baza całkowicie się chowa, gdy włosy są związane z tyłu. W przypadku klasycznych clip-in, umieść wefty nieco niżej niż kucyk, by naturalne włosy całkowicie je zakryły." },
          { q: "Jak dbać o przedłużenia clip-in?", a: "Myj szamponem bez siarczanów tylko w razie potrzeby (zazwyczaj co 15-20 założeń). Nie pocieraj — delikatnie przeprowadź szampon przez weft. Dokładnie spłucz, nałóż lekką odżywkę od połowy pasma do końców (nie na bazę weftu ani klipsy). Susz płasko w powietrzu lub powieś na uchwycie. Zawsze używaj ochrony termicznej przed stylizacją gorącymi narzędziami." },
          { q: "Czy można spać w clip-in?", a: "Nie. Spanje w clip-in jest niewygodne i może uszkodzić klipsy oraz powodować kołtuny i plątanie. Zawsze zdejmuj clip-in przed snem." },
          { q: "Czy muszę umyć clip-in przed pierwszym użyciem?", a: "Tak. Wszystkie clip-in mają ochronną warstwę witaminową / po obróbce z produkcji. Umyj je delikatnie szamponem bez siarczanów przed pierwszym założeniem — to usuwa warstwę i pozwala przedłużeniom naturalnie wtapiać się w Twoje włosy." }
        ]
      },
      {
        id: "tape-in",
        title: "Przedłużenia Tape-In",
        image: "/images/featured/invisible-tape-in.jpg",
        imageAlt: "D.S HAIR Niewidzialne przedłużenia Tape-In",
        faqs: [
          { q: "Czym są przedłużenia Tape-In i jak działają?", a: "Przedłużenia Tape-In wykorzystują ultracienkie wefty z poliuretanu (PU) fabrycznie pokryte klejem medycznym. Cienka pasmo Twoich naturalnych włosów jest zawijane między dwie zakładki weftu. Połączenie leży całkowicie płasko przy skórze głowy, tworząc naturalny, bezszewny efekt. Bez ciepła, bez chemii spajającej — i jedna z najszybszych metod półtrwałych, nakładana w 1-2 godziny." },
          { q: "Tape-In Niewidzialne a Standardowe — jaka różnica?", a: "Niewidzialne (Bez Szwu) Tape-Ins używają bazy PU w kolorze skóry, imitującej skórę głowy — sama zakładka znika na skórze, więc włosy zdają się z niej bezpośrednio wyrastać. Standardowe Tape-Ins mają nieco grubszą bazę i zapewniają świetną trwałość dla każdego typu włosów. Dla maksymalnej niewidoczności — szczególnie przy cienkich włosach lub w upięciach — Niewidzialne Tape-Ins są wyborem premium." },
          { q: "Czy przedłużenia Tape-In nadają się do cienkich lub rzadkich włosów?", a: "Tak — szczególnie nasze Niewidzialne Tape-Ins. Ultracienka baza PU 0,5 mm nakłada minimalny ciężar na sekcję, a dopasowanie do koloru skóry zapewnia zero widocznych zakładek nawet przy cienkich włosach. Dla klientek z bardzo cienkimi włosami zalecamy nieco cieńsze sekcje na zakładkę." },
          { q: "Jak długo trzymają się przedłużenia Tape-In?", a: "Klejące połączenie zwykle trzyma 6-8 tygodni, zanim potrzebne jest ponowne naklejenie (naturalne włosy rosną i zakładka oddala się od skóry głowy). Sam weft można odkleić i użyć ponownie 2-3 razy — co oznacza, że początkowa inwestycja w włosy wystarcza na 6-12 miesięcy lub dłużej przy odpowiedniej pielęgnacji." },
          { q: "Czy przedłużenia Tape-In uszkadzają moje naturalne włosy?", a: "Przy prawidłowym założeniu i usunięciu przez profesjonalistę tape-in nie powodują uszkodzeń pasma. Klej wiąże się z powierzchnią włosa — bez penetracji ciepłem lub chemią. Uszkodzenia powstają tylko przy nieprawidłowym usuwaniu typu DIY (nigdy nie ciągnij — zawsze używaj profesjonalnego środka do usuwania) lub nakładaniu zakładek zbyt blisko nasady." },
          { q: "Jak dbać o przedłużenia Tape-In?", a: "Myj szamponem bez siarczanów — unikaj odżywki lub produktów olejowych przy nasadzie, bo osłabiają klej. Dokładnie susz suszarką (nigdy nie zostawiaj zakładek tape mokrych). Używaj szczotki pętlowej od końców w górę. Unikaj ciężkich olejowych produktów przy połączeniach. Śpij w luźnym warkoczu. Nie nakładaj odżywki bezpośrednio na lub przy zakładkach tape." },
          { q: "Czy mogę nosić Tape-Ins w kucyku lub upięciu?", a: "Tak — to jedna z największych zalet tape-in. Ponieważ baza jest ultrapłaska, zakładki leżą ściśle przy skórze głowy i są całkowicie ukryte w kucykach, upięciach, warkoczach i kokach. Niewidzialne Tape-Ins są szczególnie niewykrywalne, gdy włosy są związane z tyłu." }
        ]
      },
      {
        id: "nano-ktip",
        title: "Przedłużenia Nano Ring i K-Tip",
        image: "/images/featured/k-tip-extension.jpg",
        imageAlt: "D.S HAIR Przedłużenia K-Tip",
        faqs: [
          { q: "Czym jest przedłużenie Nano Ring?", a: "Przedłużenia Nano Ring mocują pojedyncze pasma 100% Remy ludzkich włosów za pomocą ultramałego metalowego pierścienia wyłożonego silikonem (~3 mm) — bez ciepła, bez kleju, bez chemii. Pierścień jest zaciskany mechanicznie specjalistycznymi obcążkami. To metoda #1 polecana dla cienkich lub delikatnych włosów, ponieważ każdy pierścień jest o około 90% mniejszy od standardowego mikropierścienia." },
          { q: "Czym jest przedłużenie K-Tip (Keratin Bond)?", a: "Przedłużenia K-Tip to pojedyncze pasma 100% Remy ludzkich włosów z fabrycznie naniesioną perłą polimeru keratyny. Certyfikowany stylista używa pałeczki termicznej w 180-200°C, by zmiękczyć perłę i uformować ją wokół małej sekcji naturalnego włosa, tworząc gładkie, niemal niewidoczne połączenie. Nowoczesne spoiwa keratyny są elastyczne, bez resztek i czysto rozpuszczają się profesjonalnym środkiem." },
          { q: "K-Tip czy Tape-In — co lepsze do cienkich włosów?", a: "Oba działają na cienkie włosy, ale z kluczowymi różnicami. Tape-in są szybsze (1-2 godziny) i tańsze na start, ale wymagają wymiany co 6-8 tygodni. Połączenia Nano K-Tip (0,5 g na pasmo) są ledwo widoczne, nakładają minimalny ciężar na pojedyncze pasma i trzymają 3-5 miesięcy. Dla klientek salonowych chcących najbardziej naturalnego, najtrwalszego efektu, nano K-tip są coraz częściej pierwszym wyborem." },
          { q: "Jak długo trzymają się przedłużenia Nano Ring i K-Tip?", a: "Nano Ring: 6-12 miesięcy przy dosuwaniu co 6-8 tygodni. Pierścienie są zaciskane wyżej, gdy włosy rosną. Włosy można użyć ponownie 2-3 razy, wymieniając pierścienie. K-Tip: 3-5 miesięcy na zestaw — znacznie dłużej niż tape-in. Te same pasma Remy można dosypać keratyną i zamontować ponownie 2-3 razy." },
          { q: "Czy te metody uszkadzają moje naturalne włosy?", a: "Przy profesjonalnym założeniu, pielęgnacji i usunięciu obie metody uważa się za mało inwazyjne. Nano ringi równomiernie rozkładają ciężar bez kleju. Połączenia keratyny K-Tip rozkładają ciężar na wiele pasm. Ryzyko uszkodzeń powstaje tylko przy nieprawidłowym założeniu lub usunięciu. Zawsze korzystaj z certyfikowanego stylisty przedłużeń." },
          { q: "Czy mogę farbować, kręcić lub prostować te przedłużenia?", a: "Tak — 100% Remy ludzkie włosy przyjmują stylizację cieplną do 180°C i większość profesjonalnych zabiegów koloryzacji. Zawsze stosuj ochronę termiczną. Odczekaj co najmniej 2 tygodnie po założeniu przed farbowaniem (pozwól połączeniom całkowicie związać). Przy rozjaśnianiu zawsze najpierw skonsultuj się z doświadczonym kolorystą." },
          { q: "Jak usuwa się przedłużenia K-Tip i czy można je ponownie użyć?", a: "Usunięcie musi wykonać profesjonalny stylista. Środek do usuwania spoiw keratyny (na bazie izopropanolu lub octanu etylu) nakłada się na każde połączenie, czyniąc je kruchym. Stylista delikatnie kruszy połączenie obcążkami płaskimi — keratyna rozpada się bez przecinania naturalnego pasma. Włosy Remy można wtedy dosypać świeżą keratyną i zamontować ponownie 2-3 razy." },
          { q: "Jak dbać o Nano Ring i K-Tip na co dzień?", a: "Używaj bezsiarczanowego, bezpiecznego dla połączeń szamponu i odżywki — unikaj nakładania odżywki bezpośrednio na połączenia. Myj delikatnie ruchem w dół (nigdy okrężnym, co powoduje kołtuny). Śpij z włosami w luźnym warkoczu i używaj poszewki z jedwabiu. Szczotkuj codziennie od końców do nasady szczotką pętlową. Unikaj ciężkich olejów lub serum przy połączeniach — nagromadzenie produktu osłabia je z czasem." }
        ]
      },
      {
        id: "colour-care",
        title: "Kolor, pielęgnacja i konserwacja",
        faqs: [
          { q: "Czy przedłużenia D.S HAIR można prać, suszyć suszarką i stylizować ciepłem?", a: "Tak — wszystkie przedłużenia D.S HAIR są z 100% Remy ludzkich włosów i zachowują się jak Twoje naturalne włosy. Myj szamponem bez siarczanów. Użyj ochrony termicznej przed suszeniem, kręceniem lub prostowaniem. Trzymaj narzędzia poniżej 180°C. Szczotkuj delikatnie od końców w górę szczotką pętlową do przedłużeń." },
          { q: "Czy mogę farbować lub rozjaśniać przedłużenia D.S HAIR?", a: "Tak — przyjmują profesjonalne zabiegi koloryzacji. Jednak zdecydowanie zalecamy najpierw konsultację z doświadczonym kolorystą. Nie zalecamy rozjaśniania lub upiększania kolorem wstępnie koloryzowanych odcieni (Balayage, Ombre, odcienie popielate), ponieważ drastycznie skraca to żywotność i może uszkodzić włosy. Każde farbowanie odbywa się według uznania i na ryzyko klienta." },
          { q: "Jak często powinnam myć przedłużenia?", a: "Clip-in: myj tylko w razie potrzeby — zazwyczaj co 15-20 założeń. Nie otrzymują naturalnych olejów skóry głowy, więc przesadne mycie powoduje wysuszenie. Tape-in / Nano / K-Tip: myj 1-2 razy w tygodniu szamponem bez siarczanów. Nigdy nie śpij z mokrymi połączeniami. Zawsze dokładnie susz połączenia suszarką." },
          { q: "Jak szczotkować przedłużenia, by nie uszkodzić i nie powodować kołtunów?", a: "Użyj szczotki pętlowej lub specjalistycznej do przedłużeń. Zawsze szczotkuj najpierw od końców, kierując się łagodnie w górę do nasady. Nigdy od nasady do końców — to napręża połączenia i ciągnie naturalne włosy. W przypadku tape-in szczotkuj tylko powyżej linii połączenia." },
          { q: "Jaki jest najlepszy sposób spania z półtrwałymi przedłużeniami?", a: "Zwiąż włosy w luźny, niski warkocz lub kucyk przed snem — to zapobiega kołtunom i plątaniu w nocy. Użyj poszewki z jedwabiu lub satyny, by zmniejszyć tarcie. Nigdy nie śpij w clip-in. W przypadku przedłużeń K-Tip / Nano poszewka z jedwabiu znacznie redukuje tarcie na połączeniach." },
          { q: "Ile paczek / gramów potrzebuję?", a: "Do Nano Ring / K-Tip: 1 paczka (50 g / ~50 pasm) na subtelną objętość. 2 paczki (100 g) na zauważalną długość i gęstość. 3-4 paczki (150-200 g) na pełną transformację. Do Tape-In: 20-60 zakładek w zależności od gęstości i efektu. Do Clip-In: 80-120 g na subtelną objętość, 150-220 g na pełną objętość. Niepewna? Wyślij nam zdjęcie na WhatsApp — doradzamy za darmo." }
        ]
      }
    ]
  }
}

export function getFaqsContent(locale: Locale): FaqsContent {
  return faqsContent[locale] ?? faqsContent.en
}