import type { Locale } from "../config"
import type { Span } from "./salon-client-retention-rebooking-guide"

// Content module for the "Client Story: Stylist to Founder" blog post.
// All visible English copy is externalised here so the page can be rendered
// in any of the 6 locales with an identical layout. The English page
// (locale="en") renders exactly the same JSX it always did.

export interface ClientStoryStylistToFounderContent {
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
  intro: Span[][]
  startHeading: string
  startImageSrc: string
  startImageAlt: string
  startP: Span[][]
  decisionHeading: string
  decisionP: Span[]
  decisionCards: { icon: "sparkles" | "graduationCap" | "crown"; q: string; a: string }[]
  resultHeading: string
  resultCards: { label: string; icon: "sparkles" | "graduationCap" | "crown"; items: string[] }[]
  resultP: Span[]
  borrowHeading: string
  borrowCards: { icon: "sparkles" | "graduationCap" | "crown"; q: string; a: string }[]
  ctaBoxTitle: string
  ctaBoxBody: string
  ctaBoxPrimaryLabel: string
  ctaBoxPrimaryHref: string
  ctaBoxSecondaryLabel: string
  ctaBoxSecondaryHref: string
  faqHeading: string
  faqs: { q: string; a: string }[]
  link1Kicker: string
  link1Title: string
  link1Href: string
  link2Kicker: string
  link2Title: string
  link2Href: string
  backLabel: string
}

const en: ClientStoryStylistToFounderContent = {
  seoTitle: "From Chair Renter to Brand Founder: One Stylist's Path | D.S Hair Beauty",
  seoDescription:
    "An anonymised client story: how a freelance extension technician became a recognised brand founder — with her own method, her own product line, and a training offer — supported over 19 years.",
  jsonLdHeadline: "From Chair Renter to Brand Founder: One Stylist's Path",
  jsonLdDescription:
    "An anonymised client story of a freelance stylist becoming a brand founder with her own extension method and product line — from our 19 years supporting UK technicians.",
  heroBadge: "Client Story",
  heroTitle: "From Chair Renter to Brand Founder",
  heroSubtitle:
    "She started renting a chair and taking bookings by DM. Today she runs a recognised extension brand with her own method, her own line, and a waiting list. Here is the path — anonymised, but real.",
  ctaPrimaryLabel: "Open a Trade Account",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Train as a Pro →",
  ctaSecondaryHref: "/blog/salon-extension-training-sop",
  navHome: "Home",
  navBlog: "Blog",
  navCurrent: "Stylist to Founder",
  intro: [
    [
      { t: "Over " },
      { t: "19 years", b: true },
      { t: " supplying hair extension technicians, we have watched a quiet pattern: the best technicians do not stay technicians. The ones who document their method, build a client base that trusts their name, and put that name on a product line eventually stop being \"a stylist who fits extensions\" and become a brand. This is one such path, shared anonymously." },
    ],
    [
      { t: "If you are a freelance or chair-renting stylist reading this: this story is not about luck. It is about three moves, made in order, that any skilled technician can make." },
    ],
  ],
  startHeading: "Where It Started: Talent, No Leverage",
  startImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  startImageAlt: "A hair extension technician applying extensions",
  startP: [
    [
      { t: "She was an exceptional nano and tape-in technician renting a chair two days a week, booking through Instagram DMs. Clients travelled to her because she was genuinely good — but her income capped at her own chair hours, and her name meant little beyond her existing followers. Every month was a fresh hustle for bookings." },
    ],
  ],
  decisionHeading: "The Three Moves That Built the Brand",
  decisionP: [],
  decisionCards: [
    { icon: "sparkles", q: "Move 1 — Document the method", a: "Instead of guarding her technique, she wrote it down: her consultation questions, her sectioning, her tension rules, her aftercare. Documenting turned a feel into a repeatable method — the foundation of every brand that trains others." },
    { icon: "sparkles", q: "Move 2 — Put her name on the product", a: "Through a private label line, the hair and aftercare her clients loved began carrying her brand. Re-orders came to her name, not a reseller's, and a small product income appeared between appointments." },
    { icon: "sparkles", q: "Move 3 — Teach the method", a: "Once the method was documented and the product was her own, she launched a small training offer for newer technicians. Teaching turned her expertise into authority — and a second revenue line that did not require her in the chair." },
  ],
  resultHeading: "The Brand Today: Three Income Lines, One Name",
  resultCards: [
    { label: "The service", icon: "crown", items: ["Premium fits, booked by name", "Waitlist, not hustle", "Highest-ticket methods"] },
    { label: "The product", icon: "sparkles", items: ["Own private label line", "Re-orders by her brand", "Margin stays with her"] },
    { label: "The education", icon: "graduationCap", items: ["Trains newer technicians", "Authority in her method", "Income beyond chair hours"] },
  ],
  resultP: [
    { t: "The through-line is ownership. She owns the method (documented), the product (private label), and the authority (teaching). None of it required her to manufacture hair — that is what a supply partner is for. Our " },
    { link: "training SOP framework", href: "/blog/salon-extension-training-sop" },
    { t: " is the same structure she used to turn instinct into a teachable method." },
  ],
  borrowHeading: "What Any Technician Can Borrow",
  borrowCards: [
    { icon: "graduationCap", q: "Document before you scale", a: "You cannot teach or franchise what lives only in your hands. Write the method down first — it is the asset every brand is built on." },
    { icon: "graduationCap", q: "You don't need to manufacture to own a brand", a: "Private label lets you put your name on consistent 100% Remy hair without running a factory. Own the brand; let your supply partner own the making." },
    { icon: "graduationCap", q: "Teaching is the fastest authority", a: "The moment you train others in your method, you stop being 'a stylist' and become 'the name' in your niche. Authority compounds into bookings and product sales." },
  ],
  ctaBoxTitle: "Build Your Name on Hair That Delivers",
  ctaBoxBody:
    "Open a trade account for consistent 100% Remy human hair — the reliable base behind every private label and training offer. Start where this stylist did: with hair your clients can trust.",
  ctaBoxPrimaryLabel: "Open a Trade Account →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Launch a Private Label",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    { q: "Can a freelance stylist build a hair extension brand?", a: "Yes. The technicians who become brands do three things in order: document their method, put their name on a product line (via private label), and teach the method to others. None requires manufacturing hair — a supply partner handles that. What it requires is turning skill into something repeatable and ownable." },
    { q: "What does a stylist need to become a brand founder?", a: "Three ownable assets: a documented method (written down, not just in your hands), a product line under your name (private label), and authority (teaching or evidence that your method works). With those, you have a service, a product and an education income — three lines under one name." },
    { q: "How do I move from technician to educator?", a: "Document your method first — consultation, sectioning, tension, blend, aftercare. Once it is written, you can train newer technicians against it. Teaching is the fastest way to become 'the name' in your niche: authority compounds into bookings and product sales." },
    { q: "Do I need to manufacture hair to have my own brand?", a: "No. Private label lets you put your brand on consistent 100% Remy human hair without running a factory. You own the brand, the pricing and the client relationship; your supply partner owns the making. That split is exactly how most salon and technician brands are built." },
    { q: "How long does it take to build a recognised salon brand?", a: "It is a staged path, not an overnight one. Document the method first, add a private label line once you have a loyal base, then teach it. Each step builds on the last; most technicians reach a recognised, named brand over a few years of consistent work — far faster once the method is written down and the product carries their name." },
  ],
  link1Kicker: "Cluster Guide",
  link1Title: "Train Your Team on Extensions",
  link1Href: "/blog/salon-extension-training-sop",
  link2Kicker: "Related Article",
  link2Title: "Private Label Hair Extensions (UK)",
  link2Href: "/blog/private-label-hair-extensions-uk",
  backLabel: "Back to Blog",
}

const de: ClientStoryStylistToFounderContent = {
  seoTitle: "Vom Stuhlmieter zur Markengründerin: der Weg einer Stylistin | D.S Hair Beauty",
  seoDescription:
    "Eine anonymisierte Kundengeschichte: wie eine freie Extension-Technikerin zur erkannten Markengründerin wurde — mit eigener Methode, eigener Produktlinie und einem Trainingsangebot — unterstützt über 19 Jahre.",
  jsonLdHeadline: "Vom Stuhlmieter zur Markengründerin: der Weg einer Stylistin",
  jsonLdDescription:
    "Eine anonymisierte Kundengeschichte einer freien Stylistin, die mit eigener Extension-Methode und Produktlinie Markengründerin wurde — aus unseren 19 Jahren Unterstützung von UK-Technikern.",
  heroBadge: "Kundengeschichte",
  heroTitle: "Vom Stuhlmieter zur Markengründerin",
  heroSubtitle:
    "Sie begann als Stuhlmieterin und nahm Buchungen per DM an. Heute führt sie eine anerkannte Extension-Marke mit eigener Methode, eigener Linie und einer Warteliste. Hier ist der Weg — anonymisiert, aber echt.",
  ctaPrimaryLabel: "Händlerkonto eröffnen",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Als Profi trainieren →",
  ctaSecondaryHref: "/blog/salon-extension-training-sop",
  navHome: "Start",
  navBlog: "Blog",
  navCurrent: "Stylistin zur Gründerin",
  intro: [
    [
      { t: "Über " },
      { t: "19 Jahre", b: true },
      { t: " Belieferung von Extension-Technikern haben wir ein leises Muster beobachtet: die besten Techniker bleiben nicht Techniker. Diejenigen, die ihre Methode dokumentieren, eine Kundenbasis aufbauen, die ihrem Namen vertraut, und diesen Namen auf eine Produktlinie setzen, hören auf, „eine Stylistin, die Extensions macht\" zu sein, und werden eine Marke. Das ist so ein Weg, anonym geteilt." },
    ],
    [
      { t: "Wenn du eine freie oder Stuhl mietende Stylistin bist, die das liest: Diese Geschichte geht nicht um Glück. Es geht um drei Schritte, in Reihenfolge gemacht, die jede fähige Technikerin machen kann." },
    ],
  ],
  startHeading: "Wo es begann: Talent, keine Hebelwirkung",
  startImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  startImageAlt: "Eine Extension-Technikerin wendet Extensions an",
  startP: [
    [
      { t: "Sie war eine außergewöhnliche nano- und tape-in-Technikerin, die zwei Tage pro Woche einen Stuhl mietete und über Instagram-DMs buchte. Kundinnen reisten zu ihr, weil sie wirklich gut war — aber ihr Einkommen deckelte bei ihren eigenen Stunden am Stuhl, und ihr Name bedeutete wenig über ihre bestehenden Follower hinaus. Jeden Monat war ein neues Hustle um Buchungen." },
    ],
  ],
  decisionHeading: "Die drei Schritte, die die Marke bauten",
  decisionP: [],
  decisionCards: [
    { icon: "sparkles", q: "Schritt 1 — Methode dokumentieren", a: "Statt ihre Technik zu hüten, schrieb sie sie auf: ihre Beratungsfragen, ihr Sectioning, ihre Spannungsregeln, ihren Aftercare. Das Dokumentieren verwandelte ein Gefühl in eine wiederholbare Methode — das Fundament jeder Marke, die andere trainiert." },
    { icon: "sparkles", q: "Schritt 2 — Namen auf das Produkt setzen", a: "Über eine private label-Linie trugen die Haare und der Aftercare, die ihre Kundinnen liebten, begann ihre Marke zu tragen. Wiederbestellungen kamen auf ihren Namen, nicht den eines Wiederverkäufers, und ein kleines Produkteinkommen tauchte zwischen den Terminen auf." },
    { icon: "sparkles", q: "Schritt 3 — Methode lehren", a: "Sobald die Methode dokumentiert und das Produkt ihr eigen war, startete sie ein kleines Trainingsangebot für neuere Technikerinnen. Das Lehren verwandelte ihr Fachwissen in Autorität — und eine zweite Einnahmelinie, die sie nicht am Stuhl brauchte." },
  ],
  resultHeading: "Die Marke heute: Drei Einnahmelinien, ein Name",
  resultCards: [
    { label: "Der Service", icon: "crown", items: ["Premium-Fits, auf Namen gebucht", "Warteliste, nicht Hustle", "Höchste-Ticket-Methoden"] },
    { label: "Das Produkt", icon: "sparkles", items: ["Eigene private label-Linie", "Wiederbestellung über ihre Marke", "Marge bleibt bei ihr"] },
    { label: "Die Ausbildung", icon: "graduationCap", items: ["Schult neuere Technikerinnen", "Autorität in ihrer Methode", "Einnahmen über Stunden am Stuhl"] },
  ],
  resultP: [
    { t: "Der rote Faden ist Besitz. Sie besitzt die Methode (dokumentiert), das Produkt (private label) und die Autorität (Lehren). Nichts davon erforderte, dass sie Haare herstellt — dafür gibt es einen Lieferpartner. Unser " },
    { link: "SOP-Trainingsframework", href: "/blog/salon-extension-training-sop" },
    { t: " ist dieselbe Struktur, die sie nutzte, um Instinkt in eine lehrbare Methode zu verwandeln." },
  ],
  borrowHeading: "Was jede Technikerin übernehmen kann",
  borrowCards: [
    { icon: "graduationCap", q: "Dokumentieren, bevor du skalierst", a: "Du kannst nicht lehren oder franchisen, was nur in deinen Händen lebt. Schreib die Methode zuerst auf — es ist das Asset, auf dem jede Marke steht." },
    { icon: "graduationCap", q: "Du musst nicht herstellen, um eine Marke zu besitzen", a: "Private label lässt dich deinen Namen auf konsistentes 100% Remy Haar setzen, ohne eine Fabrik zu betreiben. Besitz die Marke; lass deinen Lieferpartner das Machen besitzen." },
    { icon: "graduationCap", q: "Lehren ist die schnellste Autorität", a: "In dem Moment, in dem du andere in deiner Methode trainierst, hörst du auf, „eine Stylistin\" zu sein, und wirst „der Name\" in deiner Nische. Autorität verzinst sich in Buchungen und Produktverkäufen." },
  ],
  ctaBoxTitle: "Baue deinen Namen auf Haar, das liefert",
  ctaBoxBody:
    "Eröffne ein Händlerkonto für konsistentes 100% Remy Echthaar — die verlässliche Basis hinter jedem private label und Trainingsangebot. Starte dort, wo diese Stylistin begann: mit Haar, dem deine Kundinnen vertrauen können.",
  ctaBoxPrimaryLabel: "Händlerkonto eröffnen →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Private Label starten",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    { q: "Kann eine freie Stylistin eine Extension-Marke aufbauen?", a: "Ja. Die Techniker, die zu Marken werden, tun drei Dinge in Reihenfolge: sie dokumentieren ihre Methode, setzen ihren Namen auf eine Produktlinie (via private label) und lehren die Methode anderen. Keines erfordert Haarherstellung — ein Lieferpartner übernimmt das. Es erfordert, Können in etwas Wiederholbares und Besitzbares zu verwandeln." },
    { q: "Was braucht eine Stylistin, um Markengründerin zu werden?", a: "Drei besitzbare Assets: eine dokumentierte Methode (aufgeschrieben, nicht nur in deinen Händen), eine Produktlinie unter deinem Namen (private label) und Autorität (Lehren oder Beweis, dass deine Methode funktioniert). Mit diesen hast du einen Service, ein Produkt und ein Ausbildungseinkommen — drei Linien unter einem Namen." },
    { q: "Wie komme ich von Technikerin zur Ausbilderin?", a: "Dokumentiere zuerst deine Methode — Beratung, Sectioning, Spannung, Blend, Aftercare. Sobald sie schriftlich vorliegt, kannst du neuere Technikerinnen daran trainieren. Lehren ist der schnellste Weg, „der Name\" in deiner Nische zu werden: Autorität verzinst sich in Buchungen und Produktverkäufen." },
    { q: "Muss ich Haare herstellen, um meine eigene Marke zu haben?", a: "Nein. Private label lässt dich deine Marke auf konsistentes 100% Remy Echthaar setzen, ohne eine Fabrik zu betreiben. Du besitzt die Marke, die Preisgestaltung und die Kundenbeziehung; dein Lieferpartner besitzt das Machen. Diese Aufteilung ist genau, wie die meisten Salon- und Techniker-Marken gebaut werden." },
    { q: "Wie lange dauert es, eine anerkannte Salon-Marke aufzubauen?", a: "Es ist ein gestufter Pfad, nicht über Nacht. Dokumentiere zuerst die Methode, füge eine private label-Linie hinzu, sobald du eine treue Basis hast, dann lehre sie. Jeder Schritt baut auf dem vorigen auf; die meisten Technikerinnen erreichen eine anerkannte, benannte Marke über ein paar Jahre konsistenter Arbeit — viel schneller, sobald die Methode aufgeschrieben ist und das Produkt ihren Namen trägt." },
  ],
  link1Kicker: "Cluster-Guide",
  link1Title: "Trainieren Sie Ihr Team zu Extensions",
  link1Href: "/blog/salon-extension-training-sop",
  link2Kicker: "Verwandter Artikel",
  link2Title: "Private Label Haarverlängerungen (UK)",
  link2Href: "/blog/private-label-hair-extensions-uk",
  backLabel: "Zurück zum Blog",
}

const fr: ClientStoryStylistToFounderContent = {
  seoTitle: "De la locataire de chaise à fondatrice de marque : le chemin d'une styliste | D.S Hair Beauty",
  seoDescription:
    "Une histoire client anonymisée : comment une technicienne freelance en extensions est devenue une fondatrice de marque reconnue — avec sa propre méthode, sa propre ligne produit et une offre de formation — soutenue depuis 19 ans.",
  jsonLdHeadline: "De la locataire de chaise à fondatrice de marque : le chemin d'une styliste",
  jsonLdDescription:
    "Une histoire client anonymisée d'une styliste freelance devenant fondatrice de marque avec sa propre méthode d'extensions et ligne produit — issu de nos 19 ans de support aux techniciens UK.",
  heroBadge: "Histoire client",
  heroTitle: "De la locataire de chaise à fondatrice de marque",
  heroSubtitle:
    "Elle a commencé en louant une chaise et en prenant des réservations par DM. Aujourd'hui elle dirige une marque d'extensions reconnue avec sa propre méthode, sa propre ligne et une liste d'attente. Voici le chemin — anonymisé, mais réel.",
  ctaPrimaryLabel: "Ouvrir un compte pro",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Se former comme pro →",
  ctaSecondaryHref: "/blog/salon-extension-training-sop",
  navHome: "Accueil",
  navBlog: "Blog",
  navCurrent: "Styliste à fondatrice",
  intro: [
    [
      { t: "Depuis " },
      { t: "19 ans", b: true },
      { t: " de fourniture aux techniciens en extensions, nous avons observé un motif discret : les meilleurs techniciens ne restent pas techniciens. Ceux qui documentent leur méthode, construisent une base cliente qui fait confiance à leur nom, et mettent ce nom sur une ligne produit finissent par cesser d'être « une styliste qui pose des extensions » pour devenir une marque. Voici un de ces chemins, partagé anonymement." },
    ],
    [
      { t: "Si vous êtes une styliste freelance ou locataire de chaise en train de lire ceci : cette histoire ne parle pas de chance. Elle parle de trois mouvements, faits dans l'ordre, que toute technicienne compétente peut faire." },
    ],
  ],
  startHeading: "D'où cela a commencé : du talent, aucun levier",
  startImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  startImageAlt: "Une technicienne en extensions posant des extensions",
  startP: [
    [
      { t: "Elle était une technicienne exceptionnelle nano et tape-in louant une chaise deux jours par semaine, réservant via Instagram DMs. Les clientes voyageaient pour elle car elle était vraiment douée — mais son revenu plafonnait à ses propres heures de chaise, et son nom ne signifiait guère au-delà de ses abonnées. Chaque mois était une nouvelle recherche de réservations." },
    ],
  ],
  decisionHeading: "Les trois mouvements qui ont bâti la marque",
  decisionP: [],
  decisionCards: [
    { icon: "sparkles", q: "Mouvement 1 — Documenter la méthode", a: "Au lieu de garder sa technique, elle l'a écrite : ses questions de consultation, son sectionnement, ses règles de tension, son aftercare. Documenter a transformé un ressenti en une méthode reproductible — la fondation de toute marque qui forme les autres." },
    { icon: "sparkles", q: "Mouvement 2 — Mettre son nom sur le produit", a: "Via une ligne private label, les cheveux et l'aftercare que ses clientes aimaient ont commencé à porter sa marque. Les re-commandes arrivaient à son nom, pas à celui d'un revendeur, et un petit revenu produit est apparu entre les rendez-vous." },
    { icon: "sparkles", q: "Mouvement 3 — Enseigner la méthode", a: "Une fois la méthode documentée et le produit devenu sien, elle a lancé une petite offre de formation pour les techniciennes plus récentes. Enseigner a transformé son expertise en autorité — et une seconde ligne de revenus qui ne nécessitait pas sa présence à la chaise." },
  ],
  resultHeading: "La marque aujourd'hui : trois lignes de revenus, un nom",
  resultCards: [
    { label: "Le service", icon: "crown", items: ["Poses premium, réservées au nom", "Liste d'attente, pas de recherche", "Méthodes au plus haut ticket"] },
    { label: "Le produit", icon: "sparkles", items: ["Possède une ligne private label", "Re-commandes par sa marque", "La marge reste avec elle"] },
    { label: "La formation", icon: "graduationCap", items: ["Forme les techniciennes plus récentes", "Autorité dans sa méthode", "Revenus au-delà des heures de fauteuil"] },
  ],
  resultP: [
    { t: "Le fil conducteur est la possession. Elle possède la méthode (documentée), le produit (private label) et l'autorité (l'enseignement). Rien de tout cela n'exigeait qu'elle fabrique des cheveux — c'est là qu'intervient un partenaire d'approvisionnement. Notre " },
    { link: "cadre SOP de formation", href: "/blog/salon-extension-training-sop" },
    { t: " est la même structure qu'elle a utilisée pour transformer l'instinct en méthode enseignable." },
  ],
  borrowHeading: "Ce que toute technicienne peut reprendre",
  borrowCards: [
    { icon: "graduationCap", q: "Documentez avant de scaler", a: "Vous ne pouvez pas enseigner ni franchiser ce qui vit seulement dans vos mains. Écrivez la méthode d'abord — c'est l'actif sur lequel toute marque est bâtie." },
    { icon: "graduationCap", q: "Vous n'avez pas besoin de fabriquer pour posséder une marque", a: "Le private label vous permet de mettre votre nom sur un 100% Remy cheveux naturels cohérent sans diriger une usine. Possédez la marque ; laissez votre partenaire d'approvisionnement posséder la fabrication." },
    { icon: "graduationCap", q: "Enseigner est l'autorité la plus rapide", a: "Dès que vous formez d'autres à votre méthode, vous cessez d'être « une styliste » et devenez « le nom » dans votre niche. L'autorité se compose en réservations et ventes de produits." },
  ],
  ctaBoxTitle: "Construisez votre nom sur des cheveux qui livrent",
  ctaBoxBody:
    "Ouvrez un compte pro pour un 100% Remy cheveux naturels cohérent — la base fiable derrière chaque private label et offre de formation. Commencez là où cette styliste a commencé : avec des cheveux que vos clientes peuvent faire confiance.",
  ctaBoxPrimaryLabel: "Ouvrir un compte pro →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Lancer un Private Label",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "Questions Fréquemment Posées",
  faqs: [
    { q: "Une styliste freelance peut-elle bâtir une marque d'extensions ?", a: "Oui. Les techniciens qui deviennent des marques font trois choses dans l'ordre : documenter leur méthode, mettre leur nom sur une ligne produit (via private label), et enseigner la méthode aux autres. Aucune ne requiert de fabriquer des cheveux — un partenaire d'approvisionnement s'en charge. Ce que cela requiert, c'est de transformer le savoir-faire en quelque chose de reproductible et possédable." },
    { q: "De quoi une styliste a-t-elle besoin pour devenir fondatrice de marque ?", a: "Trois actifs possédables : une méthode documentée (écrite, pas juste dans vos mains), une ligne produit sous votre nom (private label), et l'autorité (enseignement ou preuve que votre méthode fonctionne). Avec cela, vous avez un service, un produit et un revenu de formation — trois lignes sous un nom." },
    { q: "Comment passer de technicienne à formatrice ?", a: "Documentez d'abord votre méthode — consultation, sectionnement, tension, blend, aftercare. Une fois écrite, vous pouvez former les techniciennes plus récentes dessus. Enseigner est le moyen le plus rapide de devenir « le nom » dans votre niche : l'autorité se compose en réservations et ventes de produits." },
    { q: "Faut-il fabriquer des cheveux pour avoir sa propre marque ?", a: "Non. Le private label vous permet de mettre votre marque sur un 100% Remy cheveux naturels cohérent sans diriger d'usine. Vous possédez la marque, la tarification et la relation client ; votre partenaire d'approvisionnement possède la fabrication. Cette répartition est exactement comment la plupart des marques de salon et de techniciens sont construites." },
    { q: "Combien de temps faut-il pour bâtir une marque de salon reconnue ?", a: "C'est un chemin par étapes, pas du jour au lendemain. Documentez d'abord la méthode, ajoutez une ligne private label une fois que vous avez une base fidèle, puis enseignez-la. Chaque étape s'appuie sur la précédente ; la plupart des techniciennes atteignent une marque reconnue et nommée sur quelques années de travail cohérent — bien plus vite une fois la méthode écrite et le produit portant leur nom." },
  ],
  link1Kicker: "Guide de cluster",
  link1Title: "Formez votre équipe aux extensions",
  link1Href: "/blog/salon-extension-training-sop",
  link2Kicker: "Article lié",
  link2Title: "Extensions Private Label (UK)",
  link2Href: "/blog/private-label-hair-extensions-uk",
  backLabel: "Retour au Blog",
}

const ar: ClientStoryStylistToFounderContent = {
  seoTitle: "من مستأجرة كرسي إلى مؤسسة علامة: مسار ستايلست | D.S Hair Beauty",
  seoDescription:
    "قصة عميل مجهولة: كيف أصبحت تقنية extensions حرة مؤسسة علامة معترفاً بها — بأسلوبها الخاص وخط منتجها وعرض تدريب — بدعم على مدى 19 عاماً.",
  jsonLdHeadline: "من مستأجرة كرسي إلى مؤسسة علامة: مسار ستايلست",
  jsonLdDescription:
    "قصة عميل مجهولة لستايلست حرة تصبح مؤسسة علامة بأسلوب extensions الخاص بها وخط منتجها — من 19 عاماً من دعمنا لتقنيات UK.",
  heroBadge: "قصة عميل",
  heroTitle: "من مستأجرة كرسي إلى مؤسسة علامة",
  heroSubtitle:
    "بدأت باستئجار كرسي وأخذ الحجوزات عبر DM. اليوم تدير علامة extensions معترفاً بها بأسلوبها الخاص وخطها وقائمة انتظار. هذا هو المسار — مجهول، لكنه حقيقي.",
  ctaPrimaryLabel: "افتح حساب جملة",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "تدربي كمحترفة →",
  ctaSecondaryHref: "/blog/salon-extension-training-sop",
  navHome: "الرئيسية",
  navBlog: "المدونة",
  navCurrent: "من ستايلست إلى مؤسسة",
  intro: [
    [
      { t: "عبر " },
      { t: "19 عاماً", b: true },
      { t: " من توريد إكسسوارات الشعر للتقنيات، لاحظنا نمطاً هادئاً: أفضل التقنيات لا يبقين تقنيات. اللواتي يوثّقن أسلوبهن، ويبنين قاعدة عملاء تثق باسمهن، ويضعن ذلك الاسم على خط منتج، يتوقفن عن كونهن \"ستايلست تركّب extensions\" ويصبحن علامة. هذا أحد تلك المسارات، يُشارك مجهولاً." },
    ],
    [
      { t: "إن كنت ستايلست حرة أو مستأجرة كرسي تقرأ هذا: هذه القصة ليست عن حظ. هي عن ثلاث خطوات، تُعمل بالترتيب، يمكن لأي تقنية ماهرة أن تفعلها." },
    ],
  ],
  startHeading: "من أين بدأ: موهبة، بلا رافعة",
  startImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  startImageAlt: "تقنية إكسسوارات شعر تطبّق الإكسسوارات",
  startP: [
    [
      { t: "كانت تقنية استثنائية في nano وtape-in تستأجر كرسياً يومين أسبوعياً، تحجز عبر Instagram DMs. كانت العميلات يسافرن إليها لأنها جيدة فعلاً — لكن دخلها كان محدوداً بساعاتها على الكرسي، واسمها لا يعني الكثير أبعد من متابعاتها. كل شهر كان صراعاً جديداً للحجوزات." },
    ],
  ],
  decisionHeading: "الخطوات الثلاث التي بنت العلامة",
  decisionP: [],
  decisionCards: [
    { icon: "sparkles", q: "الخطوة 1 — وثّقي الأسلوب", a: "بدل حماية تقنيتها، كتبتها: أسئلة الاستشارة، التقسيم، قواعد التوتر، والعناية. التوثيق حوّل الإحساس إلى أسلوب قابل للتكرار — أساس كل علامة تدرّب الآخرين." },
    { icon: "sparkles", q: "الخطوة 2 — ضعي اسمك على المنتج", a: "عبر خط العلامة الخاصة، بدأ الشعر والعناية اللذان تحبهما عميلاتها يحملان علامتها. عادت الطلبات باسمها لا باسم موزّع، وظهر دخل صغير من المنتج بين المواعيد." },
    { icon: "sparkles", q: "الخطوة 3 — علّمي الأسلوب", a: "حالما توثّق الأسلوب وصار المنتج لها، أطلقت عرض تدريب صغير للتقنيات الأحدث. التعليم حوّل خبرتها إلى سلطة — وخط إيراد ثانٍ لا يتطلب وجودها على الكرسي." },
  ],
  resultHeading: "العلامة اليوم: ثلاثة خطوط دخل، اسم واحد",
  resultCards: [
    { label: "الخدمة", icon: "crown", items: ["تركيبات بريميوم، محجوزة باسمها", "قائمة انتظار لا صراع", "أعلى الطرق ثمناً"] },
    { label: "المنتج", icon: "sparkles", items: ["تملك خط علامة خاصة", "إعادة طلب بعلامتها", "الهامش يبقى معها"] },
    { label: "التعليم", icon: "graduationCap", items: ["تدّب التقنيات الأحدث", "سلطة في أسلوبها", "دخل يتجاوز ساعات الكرسي"] },
  ],
  resultP: [
    { t: "الخيط الرابط هو الملكية. هي تملك الأسلوب (موثّق)، والمنتج (علامة خاصة)، والسلطة (التعليم). لا شيء من ذلك تطلّب منها تصنيع الشعر — لهذا يوجد شريك توريد. " },
    { link: "إطار تدريب SOP", href: "/blog/salon-extension-training-sop" },
    { t: " هو نفس البنية التي استخدمتها لتحويل الغريزة إلى أسلوب قابل للتعليم." },
  ],
  borrowHeading: "ما يمكن لأي تقنية اقتباسه",
  borrowCards: [
    { icon: "graduationCap", q: "وثّقي قبل التوسع", a: "لا يمكنك تعليم أو منح فرانشايز لما يعيش فقط في يديك. اكتبي الأسلوب أولاً — هو الأصل الذي تُبنى عليه كل علامة." },
    { icon: "graduationCap", q: "لا تحتاجين لتصنيع لامتلاك علامة", a: "العلامة الخاصة تتيح لك وضع اسمك على 100% Remy شعر بشري متّسق بلا إدارة مصنع. امتلكي العلامة؛ ودعي شريك التوريد يملك الصناعة." },
    { icon: "graduationCap", q: "التعليم هو أسرع سلطة", a: "اللحظة التي تدرّبين فيها الآخرين على أسلوبك، تتوقفين عن كونك \"ستايلست\" وتصبحين \"الاسم\" في مجالك. السلطة تتراكم إلى حجوزات ومبيعات منتجات." },
  ],
  ctaBoxTitle: "ابنِ اسمك على شعر يلبي",
  ctaBoxBody:
    "افتحي حساب جملة لـ 100% Remy شعر بشري متّسق — الأساس الموثوق خلف كل علامة خاصة وعرض تدريب. ابدئي حيث بدأت هذه الستايلست: بشعر تثق به عميلاتك.",
  ctaBoxPrimaryLabel: "افتح حساب جملة →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "أطلقي علامة خاصة",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    { q: "هل يمكن لستايلست حرة بناء علامة إكسسوارات شعر؟", a: "نعم. التقنيات اللواتي يصبحن علامات يفعلن ثلاثة أمور بالترتيب: توثيق الأسلوب، وضع الاسم على خط منتج (عبر العلامة الخاصة)، وتعليم الأسلوب للآخرين. لا شيء يتطلب تصنيع الشعر — شريك توريد يتكفل بذلك. ما يتطلبه هو تحويل المهارة إلى شيء قابل للتكرار والملكية." },
    { q: "بماذا تحتاج الستايلست لتصبح مؤسسة علامة؟", a: "ثلاثة أصول قابلة للملكية: أسلوب موثّق (مكتوب لا مجرد في يديك)، خط منتج باسمك (علامة خاصة)، وسلطة (تعليم أو دليل أن أسلوبك يعمل). بذلك يكون لديك خدمة ومنتج ودخل تعليمي — ثلاثة خطوط تحت اسم واحد." },
    { q: "كيف أنتقل من تقنية إلى مدرّبة؟", a: "وثّقي أسلوبك أولاً — الاستشارة، التقسيم، التوتر، المزج، العناية. حالما يُكتب، يمكنك تدريب التقنيات الأحدث عليه. التعليم هو أسرع طريق لأن تصبحين \"الاسم\" في مجالك: السلطة تتراكم إلى حجوزات ومبيعات منتجات." },
    { q: "هل أحتاج لتصنيع الشعر لامتلاك علامتي؟", a: "لا. العلامة الخاصة تتيح لك وضع علامتك على 100% Remy شعر بشري متّسق بلا إدارة مصنع. أنت تملك العلامة والتسعير وعلاقة العميل؛ شريك التوريد يملك الصناعة. هذا الانقسام هو تماماً كيف تُبنى معظم علامات الصالون والتقنيات." },
    { q: "كم يستغرق بناء علامة صالون معترفاً بها؟", a: "إنه مسار مرحلي لا بين ليلة وضحاها. وثّقي الأسلوب أولاً، أضيفي خط علامة خاصة حالما تملك قاعدة مخلصة، ثم علّميه. كل خطوة تبني على السابقة؛ تصل معظم التقنيات إلى علامة معترفاً بها ومسمّاة خلال بضع سنوات من عمل متّسق — أسرع بكثير حالما يُكتب الأسلوب ويحمل المنتج اسمها." },
  ],
  link1Kicker: "دليل المجموعة",
  link1Title: "درّبي فريقك على Extensions",
  link1Href: "/blog/salon-extension-training-sop",
  link2Kicker: "مقال ذو صلة",
  link2Title: "إكسسوارات العلامة الخاصة (UK)",
  link2Href: "/blog/private-label-hair-extensions-uk",
  backLabel: "العودة إلى المدونة",
}

const sv: ClientStoryStylistToFounderContent = {
  seoTitle: "Från stolshyrare till varumärkesgrundare: en stylists väg | D.S Hair Beauty",
  seoDescription:
    "En anonymiserad kundhistoria: hur en frilansande extension-tekniker blev en erkänd varumärkesgrundare — med egen metod, egen produktlinje och ett utbildningserbjudande — stöttad under 19 år.",
  jsonLdHeadline: "Från stolshyrare till varumärkesgrundare: en stylists väg",
  jsonLdDescription:
    "En anonymiserad kundhistoria om en frilansstylist som blir varumärkesgrundare med egen extension-metod och produktlinje — från våra 19 år av stöd till UK-tekniker.",
  heroBadge: "Kundhistoria",
  heroTitle: "Från stolshyrare till varumärkesgrundare",
  heroSubtitle:
    "Hon började hyra en stol och ta bokningar via DM. Idag driver hon ett erkänt extension-märke med egen metod, egen linje och en väntelista. Här är vägen — anonymiserad, men riktig.",
  ctaPrimaryLabel: "Öppna återförsäljarkonto",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Träna som proffs →",
  ctaSecondaryHref: "/blog/salon-extension-training-sop",
  navHome: "Hem",
  navBlog: "Blogg",
  navCurrent: "Stylist till grundare",
  intro: [
    [
      { t: "Under " },
      { t: "19 år", b: true },
      { t: " av leverans till extension-tekniker har vi sett ett tyst mönster: de bästa teknikerna stannar inte som tekniker. De som dokumenterar sin metod, bygger en kundbas som litar på deras namn, och sätter det namnet på en produktlinje slutar så småningom att vara \"en stylist som sätter extensions\" och blir ett märke. Det här är en sådan väg, delad anonymt." },
    ],
    [
      { t: "Om du är en frilansande eller stolshyrande stylist som läser detta: den här historien handlar inte om tur. Den handlar om tre drag, gjorda i ordning, som vilken skicklig tekniker som helst kan göra." },
    ],
  ],
  startHeading: "Var det började: talang, ingen hävstång",
  startImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  startImageAlt: "En extension-tekniker som applicerar extensions",
  startP: [
    [
      { t: "Hon var en enastående nano- och tape-in-tekniker som hyrde en stol två dagar i veckan, bokande via Instagram DMs. Kunderna reste till henne för att hon var genuint bra — men hennes inkomst takade vid hennes egna stoltimmar, och hennes namn betydde lite bortom hennes följare. Varje månad var en ny jakt på bokningar." },
    ],
  ],
  decisionHeading: "De tre dragen som byggde märket",
  decisionP: [],
  decisionCards: [
    { icon: "sparkles", q: "Drag 1 — Dokumentera metoden", a: "Istället för att vakta sin teknik skrev hon ner den: sina konsultationsfrågor, sitt sectioning, sina spänningregler, sin aftercare. Att dokumentera förvandlade en känsla till en repeterbar metod — grunden för varje märke som tränar andra." },
    { icon: "sparkles", q: "Drag 2 — Sätt sitt namn på produkten", a: "Genom en private label-linje började håret och aftercare som hennes kunder älskade bära hennes märke. Återbeställningar kom till hennes namn, inte en återförsäljares, och en liten produktinkomst dök upp mellan tiderna." },
    { icon: "sparkles", q: "Drag 3 — Lär ut metoden", a: "När metoden var dokumenterad och produkten hennes egen, lanserade hon ett litet utbildningserbjudande för nyare tekniker. Att undervisa förvandlade hennes expertis till auktoritet — och en andra intäktslinje som inte krävde henne i stolen." },
  ],
  resultHeading: "Märket idag: tre intäktslinjer, ett namn",
  resultCards: [
    { label: "Tjänsten", icon: "crown", items: ["Premium-sättningar, bokade på namn", "Väntelista, inte jakt", "Högsta-ticket-metoder"] },
    { label: "Produkten", icon: "sparkles", items: ["Äger private label-linje", "Återbeställningar via hennes märke", "Marginal stannar hos henne"] },
    { label: "Utbildningen", icon: "graduationCap", items: ["Tränar nyare tekniker", "Auktoritet i sin metod", "Intäkt bortom stoltimmar"] },
  ],
  resultP: [
    { t: "Den röda tråden är ägande. Hon äger metoden (dokumenterad), produkten (private label) och auktoriteten (undervisning). Inget av det krävde att hon tillverkade hår — det är vad en leveranspartner är till för. Vårt " },
    { link: "utbildnings-SOP-ramverk", href: "/blog/salon-extension-training-sop" },
    { t: " är samma struktur hon använde för att vända instinkt till en undervisbar metod." },
  ],
  borrowHeading: "Vad vilken tekniker som helst kan låna",
  borrowCards: [
    { icon: "graduationCap", q: "Dokumentera innan du skalar", a: "Du kan inte lära ut eller franchisa det som bara lever i dina händer. Skriv ner metoden först — det är tillgången varje märke byggs på." },
    { icon: "graduationCap", q: "Du behöver inte tillverka för att äga en märke", a: "Private label låter dig sätta ditt namn på konsekvent 100% Remy människohår utan att driva en fabrik. Äg märket; låt din leveranspartner äga tillverkningen." },
    { icon: "graduationCap", q: "Undervisning är snabbaste auktoriteten", a: "I det ögonblick du tränar andra i din metod slutar du vara \"en stylist\" och blir \"namnet\" i din nisch. Auktoritet förräntar sig i bokningar och produktförsäljning." },
  ],
  ctaBoxTitle: "Bygg ditt namn på hår som levererar",
  ctaBoxBody:
    "Öppna ett återförsäljarkonto för konsekvent 100% Remy människohår — den pålitliga basen bakom varje private label och utbildningserbjudande. Börja där den här stylisten gjorde: med hår dina kunder kan lita på.",
  ctaBoxPrimaryLabel: "Öppna återförsäljarkonto →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Lansera Private Label",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "Vanliga frågor",
  faqs: [
    { q: "Kan en frilansstylist bygga ett märke för hårförlängning?", a: "Ja. Tekniker som blir märken gör tre saker i ordning: dokumentera sin metod, sätta sitt namn på en produktlinje (via private label) och lära ut metoden till andra. Inget kräver tillverkning av hår — en leveranspartner sköter det. Vad det kräver är att vända skicklighet till något repeterbart och ägbart." },
    { q: "Vad behöver en stylist för att bli varumärkesgrundare?", a: "Tre ägbara tillgångar: en dokumenterad metod (nedskriven, inte bara i dina händer), en produktlinje under ditt namn (private label), och auktoritet (undervisning eller bevis att din metod fungerar). Med dem har du en tjänst, en produkt och en utbildningsintäkt — tre linjer under ett namn." },
    { q: "Hur går jag från tekniker till utbildare?", a: "Dokumentera din metod först — konsultation, sectioning, spänning, blend, aftercare. När den är skriven kan du träna nyare tekniker på den. Undervisning är det snabbaste sättet att bli \"namnet\" i din nisch: auktoritet förräntar sig i bokningar och produktförsäljning." },
    { q: "Måste jag tillverka hår för att ha mitt eget märke?", a: "Nej. Private label låter dig sätta ditt märke på konsekvent 100% Remy människohår utan att driva en fabrik. Du äger märket, prissättningen och kundrelationen; din leveranspartner äger tillverkningen. Den uppdelningen är exakt hur de flesta salongs- och teknikermärken byggs." },
    { q: "Hur lång tid tar det att bygga ett erkänt salongmärke?", a: "Det är en stegvis väg, inte över en natt. Dokumentera metoden först, lägg till en private label-linje när du har en lojal bas, lär den sedan ut. Varje steg bygger på det förra; de flesta tekniker når ett erkänt, namngivet märke över några års konsekvent arbete — mycket snabbare när metoden är nedskriven och produkten bär deras namn." },
  ],
  link1Kicker: "Klusterguide",
  link1Title: "Träna ditt team i extensions",
  link1Href: "/blog/salon-extension-training-sop",
  link2Kicker: "Relaterad artikel",
  link2Title: "Private Label Hårförlängningar (UK)",
  link2Href: "/blog/private-label-hair-extensions-uk",
  backLabel: "Tillbaka till Bloggen",
}

const pl: ClientStoryStylistToFounderContent = {
  seoTitle: "Od najemcy fotela do założycielki marki: ścieżka stylistki | D.S Hair Beauty",
  seoDescription:
    "Anonimowa historia klienta: jak freelancingowa techniczka extensions stała się uznanym założycielem marki — ze swoją metodą, własną linią produktów i ofertą szkoleń — wspierana przez 19 lat.",
  jsonLdHeadline: "Od najemcy fotela do założycielki marki: ścieżka stylistki",
  jsonLdDescription:
    "Anonimowa historia klienta o freelanceowej stylistce zostającej założycielką marki z własną metodą extensions i linią produktów — z naszych 19 lat wsparcia techników w UK.",
  heroBadge: "Historia klienta",
  heroTitle: "Od najemcy fotela do założycielki marki",
  heroSubtitle:
    "Zaczęła od wynajmu fotela i brania rezerwacji przez DM. Dziś prowadzi uznaną markę extensions ze swoją metodą, własną linią i listą oczekujących. Oto ścieżka — zanonimizowana, ale prawdziwa.",
  ctaPrimaryLabel: "Otwórz konto hurtowe",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Szkol się jak pro →",
  ctaSecondaryHref: "/blog/salon-extension-training-sop",
  navHome: "Strona główna",
  navBlog: "Blog",
  navCurrent: "Od stylistki do założycielki",
  intro: [
    [
      { t: "Przez " },
      { t: "19 lat", b: true },
      { t: " dostarczania technikom extensions obserwowaliśmy cichy wzorzec: najlepsi technicy nie zostają technikami. Ci, którzy dokumentują swoją metodę, budują bazę klientek ufającą ich nazwisku i kładą to nazwisko na linii produktów, przestają być „stylistką zakładającą extensions” i stają się marką. To jedna z takich ścieżek, udostępniona anonimowo." },
    ],
    [
      { t: "Jeśli jesteś freelanceową lub wynajmującą fotel stylistką czytającą to: ta historia nie jest o szczęściu. Jest o trzech ruchach, wykonanych po kolei, które może zrobić każda uzdolniona techniczka." },
    ],
  ],
  startHeading: "Skąd to się zaczęło: talent, brak dźwigni",
  startImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  startImageAlt: "Techniczka extensions zakładająca extensions",
  startP: [
    [
      { t: "Była wybitną techniczką nano i tape-in wynajmującą fotel dwa dni w tygodniu, rezerwującą przez Instagram DMs. Klientki podróżowały do niej, bo była naprawdę dobra — ale jej dochód był ograniczony do własnych godzin na fotelu, a jej nazwisko niewiele znaczyło poza obecnymi obserwującymi. Każdy miesiąc był nowym uganianiem się za rezerwacjami." },
    ],
  ],
  decisionHeading: "Trzy ruchy, które zbudowały markę",
  decisionP: [],
  decisionCards: [
    { icon: "sparkles", q: "Ruch 1 — Udokumentuj metodę", a: "Zamiast strzec techniki, zapisała ją: pytania konsultacyjne, sectioning, zasady napięcia, aftercare. Udokumentowanie zamieniło wyczucie w powtarzalną metodę — fundament każdej marki szkolącej innych." },
    { icon: "sparkles", q: "Ruch 2 — Połóż nazwisko na produkcie", a: "Przez linię private label włosy i aftercare, które kochały jej klientki, zaczęły nieść jej markę. Ponowne zamówienia przychodziły na jej nazwisko, nie odsprzedawcy, a mały dochód z produktu pojawił się między wizytami." },
    { icon: "sparkles", q: "Ruch 3 — Nauczaj metody", a: "Gdy metoda była udokumentowana, a produkt jej własny, uruchomiła małą ofertę szkoleń dla nowszych techniczek. Nauczanie zamieniło jej ekspertyzę w autorytet — i drugą linię przychodu, która nie wymagała jej na fotelu." },
  ],
  resultHeading: "Marka dziś: trzy linie przychodu, jedno nazwisko",
  resultCards: [
    { label: "Usługa", icon: "crown", items: ["Premium założenia, rezerwowane po nazwisku", "Lista oczekujących, nie uganianie", "Metody o najwyższym ticketcie"] },
    { label: "Produkt", icon: "sparkles", items: ["Posiada linię private label", "Ponowne zamówienia przez jej markę", "Marża zostaje u niej"] },
    { label: "Edukacja", icon: "graduationCap", items: ["Szkoli nowsze techniczki", "Autorytet w jej metodzie", "Przychód poza godziny fotela"] },
  ],
  resultP: [
    { t: "Wspólna nić to własność. Ona posiada metodę (udokumentowaną), produkt (private label) i autorytet (nauczanie). Nic z tego nie wymagało, by produkowała włosy — do tego służy partner dostawczy. Nasza " },
    { link: "ramowa SOP szkoleniowa", href: "/blog/salon-extension-training-sop" },
    { t: " to ta sama struktura, której użyła, by zamienić instynkt w metodę możliwą do nauczania." },
  ],
  borrowHeading: "Co każda techniczka może przejąć",
  borrowCards: [
    { icon: "graduationCap", q: "Dokumentuj przed skalowaniem", a: "Nie możesz uczyć ani franczyzować tego, co żyje tylko w twoich rękach. Najpierw zapisz metodę — to aktywo, na którym buduje się każdą markę." },
    { icon: "graduationCap", q: "Nie musisz produkować, by mieć markę", a: "Private label pozwala położyć nazwisko na spójnym 100% Remy włosach naturalnych bez prowadzenia fabryki. Miej markę; niech partner dostawczy ma produkcję." },
    { icon: "graduationCap", q: "Nauczanie to najszybszy autorytet", a: "W momencie, gdy szkolisz innych w swojej metodzie, przestajesz być „stylistką” i stajesz się „nazwiskiem” w swojej niszy. Autorytet kumuluje się w rezerwacjach i sprzedaży produktów." },
  ],
  ctaBoxTitle: "Buduj swoje nazwisko na włosach, które dostarczają",
  ctaBoxBody:
    "Otwórz konto hurtowe na spójne 100% Remy włosy naturalne — niezawodną bazę za każdym private label i ofertą szkoleniową. Zacznij tam, gdzie zaczęła ta stylistka: od włosów, którym ufają twoje klientki.",
  ctaBoxPrimaryLabel: "Otwórz konto hurtowe →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Uruchom Private Label",
  ctaBoxSecondaryHref: "/blog/private-label-hair-extensions-uk",
  faqHeading: "Najczęściej Zadawane Pytania",
  faqs: [
    { q: "Czy freelancingowa stylistka może zbudować markę przedłużeń?", a: "Tak. Technicy, którzy stają się markami, robią trzy rzeczy po kolei: dokumentują metodę, kładą nazwisko na linii produktów (przez private label) i uczą metody innych. Żadna nie wymaga produkcji włosów — robi to partner dostawczy. Wymaga to zamiany umiejętności w coś powtarzalnego i możliwego do posiadania." },
    { q: "Czego stylistka potrzebuje, by zostać założycielką marki?", a: "Trzy przedmioty możliwe do posiadania: udokumentowana metoda (zapisana, nie tylko w rękach), linia produktów pod twoim nazwiskiem (private label) i autorytet (nauczanie lub dowód, że metoda działa). Z tym masz usługę, produkt i dochód z edukacji — trzy linie pod jednym nazwiskiem." },
    { q: "Jak przejść od technika do edukatora?", a: "Najpierw udokumentuj metodę — konsultacja, sectioning, napięcie, blend, aftercare. Gdy jest zapisana, możesz szkolić na niej nowsze techniczki. Nauczanie to najszybsza droga do bycia „nazwiskiem” w niszy: autorytet kumuluje się w rezerwacjach i sprzedaży produktów." },
    { q: "Czy muszę produkować włosy, by mieć własną markę?", a: "Nie. Private label pozwala położyć twoją markę na spójne 100% Remy włosy naturalne bez prowadzenia fabryki. Ty posiadasz markę, wycenę i relację z klientem; partner dostawczy posiada produkcję. Ten podział to dokładnie to, jak buduje się większość marek salonów i techników." },
    { q: "Jak długo trwa zbudowanie uznaniej marki salonu?", a: "To etapowa ścieżka, nie z dnia na dzień. Najpierw udokumentuj metodę, dodaj linię private label, gdy masz lojalną bazę, potem jej ucz. Każdy krok buduje na poprzednim; większość techników osiąga uznaną, nazwaną markę przez kilka lat konsekwentnej pracy — znacznie szybciej, gdy metoda jest zapisana, a produkt nosi ich nazwisko." },
  ],
  link1Kicker: "Przewodnik klastra",
  link1Title: "Przeszkol swój zespół z extensions",
  link1Href: "/blog/salon-extension-training-sop",
  link2Kicker: "Powiązany artykuł",
  link2Title: "Przedłużenia Private Label (UK)",
  link2Href: "/blog/private-label-hair-extensions-uk",
  backLabel: "Powrót do Bloga",
}

export const clientStoryStylistToFounderContent: Record<Locale, ClientStoryStylistToFounderContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
