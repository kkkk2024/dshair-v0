import type { Locale } from "../config"
import type { Span } from "./salon-client-retention-rebooking-guide"

// Content module for the "Client Story: Salon Growth Chain" blog post.
// All visible English copy is externalised here so the page can be rendered
// in any of the 6 locales with an identical layout. The English page
// (locale="en") renders exactly the same JSX it always did.

export interface ClientStorySalonGrowthChainContent {
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
  decisionCards: { icon: "sparkles" | "trendingUp" | "building2"; q: string; a: string }[]
  resultHeading: string
  resultCards: { label: string; icon: "sparkles" | "trendingUp" | "building2"; items: string[] }[]
  resultP: Span[]
  borrowHeading: string
  borrowCards: { icon: "sparkles" | "trendingUp" | "building2"; q: string; a: string }[]
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

const en: ClientStorySalonGrowthChainContent = {
  seoTitle: "From One Chair to Three: How a Leeds Salon Built a Chain | D.S Hair Beauty",
  seoDescription:
    "A real (anonymised) client story: how a single-chair Leeds salon grew into a three-location business with extension systems, training and a private label line — over 19 years of helping salons scale.",
  jsonLdHeadline: "From One Chair to Three: How a Leeds Salon Built a Chain",
  jsonLdDescription:
    "An anonymised client story of salon growth through extension systems, team training and private label — from our 19 years supplying UK salons.",
  heroBadge: "Client Story",
  heroTitle: "From One Chair to Three: How a Leeds Salon Built a Chain",
  heroSubtitle:
    "One salon, one stylist-owner, a single chair. Eight years later: three locations, a trained team, and its own branded extension line. This is how it happened — and what any salon can borrow from it.",
  ctaPrimaryLabel: "Open a Trade Account",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Grow a Profitable Salon →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "Home",
  navBlog: "Blog",
  navCurrent: "Salon Growth Story",
  intro: [
    [
      { t: "Over " },
      { t: "19 years", b: true },
      { t: " supplying and supporting UK salons, the question we hear most from owners is not \"which hair should I buy\" — it is \"how do I actually grow?\" We have watched hundreds of salons try. A handful build something lasting. This is the story of one of them, told with their permission but anonymised: a Leeds salon we first met when it was a single chair in a shared space." },
    ],
    [
      { t: "We are sharing it because the levers that grew this business are not secret. They are the same ones any salon can pull — consistent hair, a documented service, a trained team, and a brand the clients come back to by name." },
    ],
  ],
  startHeading: "Where It Started: One Chair, No Systems",
  startImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  startImageAlt: "A single stylist workstation in a salon",
  startP: [
    [
      { t: "When we first supplied this salon, it was a solo owner working one chair, doing mostly colour and cut, with the odd clip-in sale at the till. Talented, busy on weekends, but entirely dependent on the owner being in the chair. There was no recurring extension revenue, no team, and no brand beyond word of mouth. The ceiling was simply: one person, one day." },
    ],
  ],
  decisionHeading: "The Four Levers That Grew It",
  decisionP: [
    { t: "Growth did not come from one big decision. It came from stacking four systems over several years." },
  ],
  decisionCards: [
    { icon: "sparkles", q: "1. A recurring service, not a one-off", a: "Adding tape-in and nano extensions created a built-in 6–8 week maintenance cycle. Clients returned on a rhythm, and revenue stopped depending on new-client marketing alone. Extensions turned a one-visit salon into a subscription-style business." },
    { icon: "sparkles", q: "2. A documented standard (the SOP)", a: "Before hiring, the owner wrote down the exact consultation, colour-match, application and aftercare steps. New stylists could be trained to the same standard in days, not months — which is what made a second chair safe to add." },
    { icon: "sparkles", q: "3. A trained, consistent team", a: "Using our extension training support, the salon certified stylists against a checklist before they took paying clients. Consistent results across every chair is what let the owner step back from the chair and start running the business." },
    { icon: "sparkles", q: "4. A brand the clients ask for by name", a: "Once the service was consistent, the salon launched its own private label extension and aftercare line. Clients now re-order 'the salon's own' hair — the margin and the relationship stay with the salon, not a reseller." },
  ],
  resultHeading: "From Second Chair to Third Location",
  resultCards: [
    { label: "Year 1–2: Build the core", icon: "trendingUp", items: ["Add extensions as a recurring service", "Document the SOP", "Train the first certified stylist"] },
    { label: "Year 3–4: Add capacity", icon: "building2", items: ["Second chair, then a second stylist", "Introduce a private label line", "Track rebooking and attach rate weekly"] },
    { label: "Year 5–8: Scale the model", icon: "sparkles", items: ["Open a second location on the same system", "Train managers to run each site", "Third location follows the proven playbook"] },
  ],
  resultP: [
    { t: "The third location was not a gamble — it was the first two locations' system copied. That is the real lesson: you do not scale a salon by finding better luck, you scale it by making the good results repeatable without you in the chair. Our " },
    { link: "extension training SOP", href: "/blog/salon-extension-training-sop" },
    { t: " is the exact framework this salon used to make quality consistent across every new stylist." },
  ],
  borrowHeading: "What Any Salon Can Borrow",
  borrowCards: [
    { icon: "trendingUp", q: "Start with recurrence, not scale", a: "A service clients return for every 6–8 weeks (extensions, with move-ups and re-orders) is worth more than ten one-off visits. Build the recurring base before you add chairs." },
    { icon: "trendingUp", q: "Write the standard down", a: "If your best result lives only in your head, you cannot hire. A one-page SOP is what turns a soloist into an employer." },
    { icon: "trendingUp", q: "Own the brand", a: "When clients re-order by your name, you stop renting your margin from a reseller. A private label line is the natural next step once you have a loyal base." },
  ],
  ctaBoxTitle: "Build Your Growth Story With Consistent Hair",
  ctaBoxBody:
    "Open a free UK trade account for 100% Remy human hair your team can rely on — the foundation every scalable salon service is built on.",
  ctaBoxPrimaryLabel: "Open a Trade Account →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Lift the Ticket",
  ctaBoxSecondaryHref: "/blog/salon-high-ticket-extensions",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    { q: "How long does it take to grow a salon into a chain?", a: "There is no fixed timeline, but the salons that scale do it in stages over several years: first build a recurring extension service and document the standard, then add a second chair and a trained stylist, then replicate the model at a second location. A third follows the same playbook. Growth comes from making good results repeatable, not from one big leap." },
    { q: "What role do hair extensions play in salon growth?", a: "Extensions create a built-in 6–8 week maintenance cycle (move-ups and re-orders), so clients return on a rhythm without being chased. That recurring revenue stabilises cash flow and lets an owner step back from the chair to run the business — which is what makes adding chairs and locations possible." },
    { q: "Can a small salon realistically open a second location?", a: "Yes, once the first site runs on systems rather than on the owner's presence. If results depend only on you, a second location multiplies problems. If you have a written SOP, a trained and certified team, and tracked metrics (rebooking, attach rate), the second site is a copy of a proven model — not a gamble." },
    { q: "How does a private label line help a growing salon?", a: "A private label line puts your salon's name on the hair and aftercare clients already love. They re-order by your brand, the margin stays with you rather than a reseller, and it adds a revenue line beyond chair hours. It also deepens loyalty: clients are in a relationship with your brand, not a product someone else owns." },
    { q: "What should a salon do first to grow?", a: "Build recurrence before scale: add an extension service with a 6–8 week cycle, write down your standard so you can train others, and track rebooking and retail attach weekly. A loyal, returning client base and a consistent team are the foundation every multi-location salon is built on." },
  ],
  link1Kicker: "Related Article",
  link1Title: "Run a Profitable Salon (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "Cluster Guide",
  link2Title: "Train Your Team on Extensions",
  link2Href: "/blog/salon-extension-training-sop",
  backLabel: "Back to Blog",
}

const de: ClientStorySalonGrowthChainContent = {
  seoTitle: "Vom einen Stuhl zu dreien: Wie ein Leeds Salon eine Kette baute | D.S Hair Beauty",
  seoDescription:
    "Eine echte (anonymisierte) Kundengeschichte: wie ein Single-Chair-Salon aus Leeds zu einem Drei-Standort-Unternehmen mit Extension-Systemen, Training und einer Private-Label-Linie wuchs — aus 19 Jahren Hilfe beim Salon-Scaling.",
  jsonLdHeadline: "Vom einen Stuhl zu dreien: Wie ein Leeds Salon eine Kette baute",
  jsonLdDescription:
    "Eine anonymisierte Kundengeschichte vom Salon-Wachstum durch Extension-Systeme, Teamtraining und Private Label — aus unseren 19 Jahren Belieferung von UK-Salons.",
  heroBadge: "Kundengeschichte",
  heroTitle: "Vom einen Stuhl zu dreien: Wie ein Leeds Salon eine Kette baute",
  heroSubtitle:
    "Ein Salon, ein Stylist-Inhaber, ein einzelner Stuhl. Acht Jahre später: drei Standorte, ein trainiertes Team und eine eigene markierte Extension-Linie. So geschah es — und was jeder Salon davon übernehmen kann.",
  ctaPrimaryLabel: "Händlerkonto eröffnen",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Profitablen Salon wachsen →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "Start",
  navBlog: "Blog",
  navCurrent: "Salon-Wachstumsgeschichte",
  intro: [
    [
      { t: "Über " },
      { t: "19 Jahre", b: true },
      { t: " Belieferung und Unterstützung von UK-Salons lautet die Frage, die wir von Inhabern am häufigsten hören, nicht „welche Haare soll ich kaufen\" — sondern „wie wachse ich eigentlich?\" Wir haben hunderte Salons versuchen sehen. Einige wenige bauen etwas Beständiges. Dies ist die Geschichte von einem von ihnen, mit ihrer Erlaubnis erzählt, aber anonymisiert: ein Leeds Salon, den wir kennenlernten, als er ein einzelner Stuhl in einem geteilten Raum war." },
    ],
    [
      { t: "Wir teilen sie, weil die Hebel, die dieses Geschäft wachsen ließen, kein Geheimnis sind. Es sind dieselben, die jeder Salon nutzen kann — konsistentes Haar, ein dokumentierter Service, ein trainiertes Team und eine Marke, zu der Kundinnen beim Namen zurückkehren." },
    ],
  ],
  startHeading: "Wo es begann: Ein Stuhl, keine Systeme",
  startImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  startImageAlt: "Ein einzelner Stylistenarbeitsplatz in einem Salon",
  startP: [
    [
      { t: "Als wir diesen Salon erstmals belieferten, war es ein Solo-Inhaber an einem Stuhl, der meist Farbe und Schnitt machte, mit gelegentlichem Clip-In-Verkauf an der Kasse. Talentiert, am Wochenende ausgebucht, aber völlig abhängig davon, dass der Inhaber am Stuhl saß. Es gab keine wiederkehrenden Extension-Einnahmen, kein Team und keine Marke über Mundpropaganda hinaus. Die Decke war schlicht: eine Person, ein Tag." },
    ],
  ],
  decisionHeading: "Die vier Hebel, die es wachsen ließen",
  decisionP: [
    { t: "Das Wachstum kam nicht von einer großen Entscheidung. Es kam vom Stapeln von vier Systemen über mehrere Jahre." },
  ],
  decisionCards: [
    { icon: "sparkles", q: "1. Ein wiederkehrender Service, nicht einmalig", a: "Das Hinzufügen von tape-in und nano Extensions schuf einen eingebauten 6–8-Wochen-Wartungszyklus. Kundinnen kehrten in einem Rhythmus zurück, und die Einnahmen hörten auf, nur von Neukunden-Marketing abzuhängen. Extensions verwandelten einen Ein-Besuch-Salon in ein abo-artiges Geschäft." },
    { icon: "sparkles", q: "2. Ein dokumentierter Standard (die SOP)", a: "Vor der Einstellung schrieb die Inhaberin die genauen Schritte Beratung, Farbabgleich, Applikation und Aftercare auf. Neue Stylistinnen konnten in Tagen statt Monaten auf denselben Standard trainiert werden — was das Hinzufügen eines zweiten Stuhls sicher machte." },
    { icon: "sparkles", q: "3. Ein trainiertes, konsistentes Team", a: "Mit unserer Extension-Trainingsunterstützung zertifizierte der Salon Stylistinnen an einer Checkliste, bevor sie zahlende Kundinnen nahmen. Konsistente Ergebnisse an jedem Stuhl erlaubten es der Inhaberin, vom Stuhl zurückzutreten und das Geschäft zu führen." },
    { icon: "sparkles", q: "4. Eine Marke, die Kundinnen beim Namen fragen", a: "Sobald der Service konsistent war, startete der Salon seine eigene Private-Label-Extension- und Aftercare-Linie. Kundinnen bestellen nun „die eigenen Haare des Salons\" erneut — Marge und Beziehung bleiben beim Salon, nicht bei einem Wiederverkäufer." },
  ],
  resultHeading: "Vom zweiten Stuhl zum dritten Standort",
  resultCards: [
    { label: "Jahr 1–2: Kern aufbauen", icon: "trendingUp", items: ["Extensions als wiederkehrenden Service hinzufügen", "Die SOP dokumentieren", "Ersten zertifizierten Stylisten trainieren"] },
    { label: "Jahr 3–4: Kapazität erhöhen", icon: "building2", items: ["Zweiter Stuhl, dann zweite Stylistin", "Private-Label-Linie einführen", "Wiederbuchung und Attach-Rate wöchentlich tracken"] },
    { label: "Jahr 5–8: Modell skalieren", icon: "sparkles", items: ["Zweiten Standort auf demselben System eröffnen", "Manager trainieren, die jede Location führen", "Dritter Standort folgt dem bewährten Playbook"] },
  ],
  resultP: [
    { t: "Der dritte Standort war kein Gamble — es war das System der ersten zwei Standorte kopiert. Das ist die echte Lektion: Sie skalieren einen Salon nicht durch mehr Glück, sondern indem Sie die guten Ergebnisse ohne sich am Stuhl wiederholbar machen. Unsere " },
    { link: "Extension-Training-SOP", href: "/blog/salon-extension-training-sop" },
    { t: " ist genau das Framework, das dieser Salon nutzte, um Qualität über jede neue Stylistin hinweg konsistent zu halten." },
  ],
  borrowHeading: "Was jeder Salon übernehmen kann",
  borrowCards: [
    { icon: "trendingUp", q: "Beginnen Sie mit Wiederkehr, nicht Skalierung", a: "Ein Service, zu dem Kundinnen alle 6–8 Wochen zurückkehren (Extensions, mit Move-ups und Wiederbestellungen), ist mehr wert als zehn Einzelbesuche. Bauen Sie die wiederkehrende Basis, bevor Sie Stühle hinzufügen." },
    { icon: "trendingUp", q: "Schreiben Sie den Standard auf", a: "Wenn Ihr bestes Ergebnis nur in Ihrem Kopf lebt, können Sie niemanden einstellen. Eine Ein-Seiten-SOP ist es, die aus einem Soloisten einen Arbeitgeber macht." },
    { icon: "trendingUp", q: "Besitzen Sie die Marke", a: "Wenn Kundinnen unter Ihrem Namen neu bestellen, hören Sie auf, Ihre Marge von einem Wiederverkäufer zu mieten. Eine Private-Label-Linie ist der natürliche nächste Schritt, sobald Sie eine treue Basis haben." },
  ],
  ctaBoxTitle: "Bauen Sie Ihre Wachstumsgeschichte mit konsistentem Haar",
  ctaBoxBody:
    "Eröffnen Sie ein kostenloses UK-Händlerkonto für 100% Remy Echthaar, auf das Ihr Team zählen kann — das Fundament, auf dem jeder skalierbare Salon-Service steht.",
  ctaBoxPrimaryLabel: "Händlerkonto eröffnen →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Ticket heben",
  ctaBoxSecondaryHref: "/blog/salon-high-ticket-extensions",
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    { q: "Wie lange dauert es, einen Salon zu einer Kette wachsen zu lassen?", a: "Es gibt keinen festen Zeitplan, aber die Salons, die skalieren, tun es in Etappen über mehrere Jahre: zuerst einen wiederkehrenden Extension-Service aufbauen und den Standard dokumentieren, dann einen zweiten Stuhl und eine trainierte Stylistin hinzufügen, dann das Modell an einem zweiten Standort replizieren. Ein dritter folgt demselben Playbook. Wachstum entsteht durch Wiederholbarkeit guter Ergebnisse, nicht durch einen großen Sprung." },
    { q: "Welche Rolle spielen Haarverlängerungen im Salon-Wachstum?", a: "Extensions schaffen einen eingebauten 6–8-Wochen-Wartungszyklus (Move-ups und Wiederbestellungen), sodass Kundinnen in einem Rhythmus zurückkehren, ohne gejagt zu werden. Diese wiederkehrenden Einnahmen stabilisieren den Cashflow und erlauben es dem Inhaber, vom Stuhl zurückzutreten und das Geschäft zu führen — was das Hinzufügen von Stühlen und Standorten möglich macht." },
    { q: "Kann ein kleiner Salon realistisch einen zweiten Standort eröffnen?", a: "Ja, sobald der erste Standort auf Systemen läuft statt auf der Anwesenheit des Inhabers. Wenn Ergebnisse nur von Ihnen abhängen, vervielfacht ein zweiter Standort die Probleme. Wenn Sie eine schriftliche SOP, ein trainiertes und zertifiziertes Team und getrackte Metriken (Wiederbuchung, Attach-Rate) haben, ist der zweite Standort eine Kopie eines bewährten Modells — kein Gamble." },
    { q: "Wie hilft eine Private-Label-Linie einem wachsenden Salon?", a: "Eine Private-Label-Linie setzt den Namen Ihres Salons auf die Haare und den Aftercare, die Ihre Kundinnen bereits lieben. Sie bestellen unter Ihrer Marke neu, die Marge bleibt bei Ihnen statt bei einem Wiederverkäufer, und es kommt eine Einnahmelinie über die Stunden am Stuhl hinaus. Es vertieft auch die Loyalität: Kundinnen sind in einer Beziehung mit Ihrer Marke, nicht mit einem Produkt, das jemand anders besitzt." },
    { q: "Was sollte ein Salon zuerst tun, um zu wachsen?", a: "Bauen Sie Wiederkehr vor Skalierung: fügen Sie einen Extension-Service mit 6–8-Wochen-Zyklus hinzu, schreiben Sie Ihren Standard auf, damit Sie andere trainieren können, und tracken Sie Wiederbuchung und Retail-Attach wöchentlich. Eine treue, zurückkehrende Kundenbasis und ein konsistentes Team sind das Fundament, auf dem jeder Mehrstandort-Salon steht." },
  ],
  link1Kicker: "Verwandter Artikel",
  link1Title: "Profitablen Salon führen (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "Cluster-Guide",
  link2Title: "Trainieren Sie Ihr Team zu Extensions",
  link2Href: "/blog/salon-extension-training-sop",
  backLabel: "Zurück zum Blog",
}

const fr: ClientStorySalonGrowthChainContent = {
  seoTitle: "D'une chaise à trois : comment un salon de Leeds a bâti une chaîne | D.S Hair Beauty",
  seoDescription:
    "Une histoire client réelle (anonymisée) : comment un salon d'une chaise à Leeds est devenu une entreprise de trois sites avec systèmes d'extensions, formation et ligne private label — issu de 19 ans d'aide au scaling des salons.",
  jsonLdHeadline: "D'une chaise à trois : comment un salon de Leeds a bâti une chaîne",
  jsonLdDescription:
    "Une histoire client anonymisée de croissance de salon via systèmes d'extensions, formation d'équipe et private label — issu de nos 19 ans de fourniture aux salons UK.",
  heroBadge: "Histoire client",
  heroTitle: "D'une chaise à trois : comment un salon de Leeds a bâti une chaîne",
  heroSubtitle:
    "Un salon, un propriétaire-styliste, une seule chaise. Huit ans plus tard : trois sites, une équipe formée et sa propre ligne d'extensions marquée. Voici comment c'est arrivé — et ce que tout salon peut en tirer.",
  ctaPrimaryLabel: "Ouvrir un compte pro",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Faire grandir un salon rentable →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "Accueil",
  navBlog: "Blog",
  navCurrent: "Histoire de croissance du salon",
  intro: [
    [
      { t: "Depuis " },
      { t: "19 ans", b: true },
      { t: " de fourniture et de support aux salons UK, la question que nous entendons le plus des propriétaires n'est pas « quel cheveu dois-je acheter » — c'est « comment je grandis vraiment ? » Nous avons vu des centaines de salons essayer. Une poignée bâtissent quelque chose de durable. Voici l'histoire de l'un d'eux, racontée avec leur permission mais anonymisée : un salon de Leeds que nous avons rencontré alors qu'il n'était qu'une chaise dans un espace partagé." },
    ],
    [
      { t: "Nous la partageons car les leviers qui ont fait grandir cette entreprise ne sont pas secrets. Ce sont les mêmes que tout salon peut activer — cheveux cohérents, un service documenté, une équipe formée, et une marque à laquelle les clientes reviennent par son nom." },
    ],
  ],
  startHeading: "D'où cela a commencé : une chaise, aucun système",
  startImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  startImageAlt: "Un poste de travail d'un seul styliste dans un salon",
  startP: [
    [
      { t: "Quand nous avons d'abord fourni ce salon, c'était un propriétaire solo sur une chaise, faisant surtout couleur et coupe, avec une vente clip-in occasionnelle à la caisse. Talentueux, occupé le week-end, mais entièrement dépendant de la présence du propriétaire à la chaise. Pas de revenu récurrent d'extensions, pas d'équipe, et aucune marque au-delà du bouche-à-oreille. Le plafond était simple : une personne, un jour." },
    ],
  ],
  decisionHeading: "Les quatre leviers qui l'ont fait grandir",
  decisionP: [
    { t: "La croissance n'est pas venue d'une grande décision. Elle est venue de l'empilement de quatre systèmes sur plusieurs années." },
  ],
  decisionCards: [
    { icon: "sparkles", q: "1. Un service récurrent, pas ponctuel", a: "Ajouter des extensions tape-in et nano a créé un cycle d'entretien intégré de 6–8 semaines. Les clientes sont revenues à un rythme, et les revenus ont cessé de dépendre seul du marketing de nouveaux clients. Les extensions ont transformé un salon d'un seul rendez-vous en une activité de type abonnement." },
    { icon: "sparkles", q: "2. Un standard documenté (le SOP)", a: "Avant d'embaucher, la propriétaire a consigné les étapes exactes de consultation, d'appariement couleur, d'application et d'aftercare. Les nouvelles stylistes pouvaient être formées au même standard en jours, pas en mois — ce qui a rendu sûr l'ajout d'une deuxième chaise." },
    { icon: "sparkles", q: "3. Une équipe formée et cohérente", a: "Grâce à notre support de formation extensions, le salon a certifié les stylistes selon une checklist avant qu'elles ne prennent des clientes payantes. Des résultats cohérents sur chaque chaise ont permis à la propriétaire de reculer de la chaise et de commencer à diriger l'entreprise." },
    { icon: "sparkles", q: "4. Une marque que les clientes demandent par son nom", a: "Une fois le service cohérent, le salon a lancé sa propre ligne d'extensions et d'aftercare en private label. Les clientes recommandent désormais « les propres cheveux du salon » — la marge et la relation restent avec le salon, pas un revendeur." },
  ],
  resultHeading: "De la deuxième chaise au troisième site",
  resultCards: [
    { label: "Année 1–2 : bâtir le cœur", icon: "trendingUp", items: ["Ajouter les extensions comme service récurrent", "Documenter le SOP", "Former le premier styliste certifié"] },
    { label: "Année 3–4 : ajouter de la capacité", icon: "building2", items: ["Deuxième chaise, puis une deuxième styliste", "Introduire une ligne private label", "Suivre réservation et taux d'attach hebdo"] },
    { label: "Année 5–8 : scaler le modèle", icon: "sparkles", items: ["Ouvrir un second site sur le même système", "Former des managers pour chaque site", "Le troisième site suit le playbook prouvé"] },
  ],
  resultP: [
    { t: "Le troisième site n'était pas un pari — c'était le système des deux premiers sites copié. C'est la vraie leçon : on ne scale pas un salon en trouvant plus de chance, on le scale en rendant les bons résultats reproductibles sans soi à la chaise. Notre " },
    { link: "SOP de formation extensions", href: "/blog/salon-extension-training-sop" },
    { t: " est le framework exact que ce salon a utilisé pour rendre la qualité cohérente chez chaque nouvelle styliste." },
  ],
  borrowHeading: "Ce que tout salon peut reprendre",
  borrowCards: [
    { icon: "trendingUp", q: "Commencez par la récurrence, pas l'échelle", a: "Un service que les clientes retrouvent toutes les 6–8 semaines (extensions, avec move-ups et re-commandes) vaut plus que dix visites ponctuelles. Construisez la base récurrente avant d'ajouter des chaises." },
    { icon: "trendingUp", q: "Écrivez le standard", a: "Si votre meilleur résultat vit seulement dans votre tête, vous ne pouvez pas embaucher. Un SOP d'une page est ce qui transforme un soliste en employeur." },
    { icon: "trendingUp", q: "Possédez la marque", a: "Quand les clientes recommandent par votre nom, vous cessez de louer votre marge à un revendeur. Une ligne private label est l'étape naturelle une fois que vous avez une base fidèle." },
  ],
  ctaBoxTitle: "Construisez votre histoire de croissance avec des cheveux cohérents",
  ctaBoxBody:
    "Ouvrez un compte pro UK gratuit pour un 100% Remy cheveux naturels sur lequel votre équipe peut compter — la fondation sur laquelle repose tout service de salon scalable.",
  ctaBoxPrimaryLabel: "Ouvrir un compte pro →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Booster le ticket",
  ctaBoxSecondaryHref: "/blog/salon-high-ticket-extensions",
  faqHeading: "Questions Fréquemment Posées",
  faqs: [
    { q: "Combien de temps faut-il pour faire grandir un salon en chaîne ?", a: "Il n'y a pas de calendrier fixe, mais les salons qui scalent le font par étapes sur plusieurs années : d'abord construire un service d'extensions récurrent et documenter le standard, puis ajouter une deuxième chaise et une styliste formée, puis répliquer le modèle sur un second site. Un troisième suit le même playbook. La croissance vient de la reproductibilité des bons résultats, pas d'un grand saut." },
    { q: "Quel rôle jouent les extensions dans la croissance du salon ?", a: "Les extensions créent un cycle d'entretien intégré de 6–8 semaines (move-ups et re-commandes), donc les clientes reviennent à un rythme sans être chassées. Ce revenu récurrent stabilise la trésorerie et permet au propriétaire de reculer de la chaise pour diriger l'entreprise — ce qui rend possible l'ajout de chaises et de sites." },
    { q: "Un petit salon peut-il réalement ouvrir un second site ?", a: "Oui, une fois que le premier site fonctionne sur des systèmes plutôt que sur la présence du propriétaire. Si les résultats dépendent seulement de vous, un second site multiplie les problèmes. Si vous avez un SOP écrit, une équipe formée et certifiée, et des métriques suivies (réservation, taux d'attach), le second site est une copie d'un modèle prouvé — pas un pari." },
    { q: "Comment une ligne private label aide-t-elle un salon en croissance ?", a: "Une ligne private label met le nom de votre salon sur les cheveux et l'aftercare que vos clientes aiment déjà. Elles recommandent par votre marque, la marge reste avec vous plutôt qu'avec un revendeur, et cela ajoute une ligne de revenus au-delà des heures de fauteuil. Cela approfondit aussi la fidélité : les clientes sont dans une relation avec votre marque, pas un produit qu'un autre possède." },
    { q: "Que doit faire un salon d'abord pour grandir ?", a: "Construisez la récurrence avant l'échelle : ajoutez un service d'extensions avec un cycle de 6–8 semaines, consignez votre standard pour former les autres, et suivez réservation et attach retail hebdomadairement. Une base cliente fidèle et qui revient, et une équipe cohérente, sont la fondation sur laquelle repose tout salon multi-sites." },
  ],
  link1Kicker: "Article lié",
  link1Title: "Gérer un salon rentable (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "Guide de cluster",
  link2Title: "Formez votre équipe aux extensions",
  link2Href: "/blog/salon-extension-training-sop",
  backLabel: "Retour au Blog",
}

const ar: ClientStorySalonGrowthChainContent = {
  seoTitle: "من كرسي واحد إلى ثلاثة: كيف بنى صالون في Leeds سلسلة | D.S Hair Beauty",
  seoDescription:
    "قصة عميل حقيقية (مجهولة): كيف نما صالون بكرسي واحد في Leeds إلى عمل بثلاثة مواقع بأنظمة extensions وتدريب وخط علامة خاصة — من 19 عاماً من مساعدة الصالونات على التوسع.",
  jsonLdHeadline: "من كرسي واحد إلى ثلاثة: كيف بنى صالون في Leeds سلسلة",
  jsonLdDescription:
    "قصة عميل مجهولة لنمو الصالون عبر أنظمة extensions وتدريب الفريق والعلامة الخاصة — من 19 عاماً من توريدنا لصالونات UK.",
  heroBadge: "قصة عميل",
  heroTitle: "من كرسي واحد إلى ثلاثة: كيف بنى صالون في Leeds سلسلة",
  heroSubtitle:
    "صالون واحد، مالك واحد وهو ستايلست، كرسي واحد. بعد ثمان سنوات: ثلاثة مواقع، فريق مدرب، وخط extensions يحمل علامته. هكذا حدث — وما يمكن لأي صالون اقتباسه.",
  ctaPrimaryLabel: "افتح حساب جملة",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "نمِّ صالوناً مربحاً →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "الرئيسية",
  navBlog: "المدونة",
  navCurrent: "قصة نمو الصالون",
  intro: [
    [
      { t: "عبر " },
      { t: "19 عاماً", b: true },
      { t: " من توريد ودعم صالونات UK، السؤال الذي نسمعه أكثر من المالكين ليس \"أي شعر يجب أن أشتري\" — بل \"كيف أنمو فعلياً؟\" رأينا مئات الصالونات تحاول. عدد قليل يبني شيئاً مستداماً. هذه قصة إحداها، تروّى بإذنهم لكن مجهولة: صالون في Leeds التقيناه حين كان كرسياً واحداً في مساحة مشتركة." },
    ],
    [
      { t: "نشاركها لأن المقابض التي نمّت هذا العمل ليست سراً. هي نفسها التي يمكن لأي صالون تشغيلها — شعر متّسق، خدمة موثّقة، فريق مدرب، وعلامة تعود إليها العميلات باسمها." },
    ],
  ],
  startHeading: "من أين بدأ: كرسي واحد، بلا أنظمة",
  startImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  startImageAlt: "محطة عمل ستايلست واحد في صالون",
  startP: [
    [
      { t: "حين زوّدنا هذا الصالون أول مرة، كان مالكاً منفرداً على كرسي واحد، يفعل غالباً لوناً وقصّاً، مع بيع Clip-In عرضي عند الكاشير. موهوب، مزدحم عطلة نهاية الأسبوع، لكن يعتمد كلياً على وجود المالك على الكرسي. لا إيراد extensions متكرر، لا فريق، ولا علامة أبعد من الكلام الشفهي. السقف كان ببساطة: شخص واحد، يوم واحد." },
    ],
  ],
  decisionHeading: "المقابض الأربعة التي أنمته",
  decisionP: [
    { t: "النمو لم يأتِ من قرار كبير واحد. أتى من تكديس أربعة أنظمة عبر سنوات." },
  ],
  decisionCards: [
    { icon: "sparkles", q: "1. خدمة متكررة، لا لمرة واحدة", a: "إضافة tape-in وnano extensions خلقت دورة صيانة مدمجة كل 6–8 أسابيع. عادت العميلات على إيقاع، وتوقفت الإيرادات عن الاعتماد وحده على تسويق عملاء جدد. حوّلت extensions صالون زيارة واحدة إلى عمل شبيه بالاشتراك." },
    { icon: "sparkles", q: "2. معيار موثّق (SOP)", a: "قبل التوظيف، كتبت المالكة الخطوات الدقيقة: الاستشارة، مطابقة اللون، التطبيق، والعناية. أمكن تدريب ستايلستات جديدات على نفس المعيار في أيام لا أشهر — وهو ما جعل إضافة كرسي ثانٍ آمنة." },
    { icon: "sparkles", q: "3. فريق مدرب متّسق", a: "باستخدام دعم تدريب extensions لدينا، صادق الصالون الستايلستات عبر قائمة تحقق قبل أخذ عميلات مدفوعات. نتائج متّسقة على كل كرسي هي ما سمح للمالكة بالتنحي عن الكرسي والبدء بإدارة العمل." },
    { icon: "sparkles", q: "4. علامة تسأل عنها العميلات باسمها", a: "حالما صار الخدمة متّسقة، أطلق الصالون خطه الخاص من extensions وعناية بالعلامة الخاصة. تطلب العميلات الآن \"شعر الصالون نفسه\" مجدداً — الهامش والعلاقة يبقيان مع الصالون لا موزّعاً." },
  ],
  resultHeading: "من الكرسي الثاني إلى الموقع الثالث",
  resultCards: [
    { label: "السنة 1–2: ابنِ النواة", icon: "trendingUp", items: ["أضف extensions كخدمة متكررة", "وثّق الـ SOP", "درّب أول ستايلست معتمد"] },
    { label: "السنة 3–4: زِد السعة", icon: "building2", items: ["كرسي ثانٍ، ثم ستايلست ثانية", "أدخِل خط علامة خاصة", "تتبّع الحجز ومعدل الربط أسبوعياً"] },
    { label: "السنة 5–8: طبّق النموذج", icon: "sparkles", items: ["افتح موقعاً ثانياً على نفس النظام", "درّب مديرين لإدارة كل موقع", "الموقع الثالث يتبع الكتيّب المُختبر"] },
  ],
  resultP: [
    { t: "الموقع الثالث لم يكن مقامرة — كان نسخ نظام الموقعين الأولين. تلك هي الدرس الحقيقي: لا توسّع الصالون بإيجاد حظ أوفر، بل بجعل النتائج الجيدة قابلة للتكرار بلا وجودك على الكرسي. " },
    { link: "كتيّب تدريب extensions", href: "/blog/salon-extension-training-sop" },
    { t: " هو الإطار الدقيق الذي استخدمه هذا الصالون لجعل الجودة متّسقة عبر كل ستايلست جديدة." },
  ],
  borrowHeading: "ما يمكن لأي صالون اقتباسه",
  borrowCards: [
    { icon: "trendingUp", q: "ابدأ بالتكرار لا بالحجم", a: "خدمة تعود إليها العميلات كل 6–8 أسابيع (extensions، مع move-ups وإعادة الطلب) تساوي أكثر من عشر زيارات لمرة واحدة. ابنِ القاعدة المتكررة قبل إضافة الكراسي." },
    { icon: "trendingUp", q: "اكتب المعيار", a: "إن كان أفضل نتيجة عندك تعيش في رأسك فقط، لا يمكنك توظيف. صفحة SOP واحدة هي ما يحوّل المنفرد إلى صاحب عمل." },
    { icon: "trendingUp", q: "امتلك العلامة", a: "حين تعيد العميلات الطلب باسمك، تتوقف عن استئجار هامشك من موزّع. خط العلامة الخاصة هو الخطوة الطبيعية التالية حالما تملك قاعدة مخلصة." },
  ],
  ctaBoxTitle: "ابنِ قصة نموك بشعر متّسق",
  ctaBoxBody:
    "افتح حساب جملة UK مجانياً لـ 100% Remy شعر بشري يمكن لفريقك الاعتماد عليه — الأساس الذي يُبنى عليه كل خدمة صالون قابلة للتوسع.",
  ctaBoxPrimaryLabel: "افتح حساب جملة →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "ارفع قيمة الفاتورة",
  ctaBoxSecondaryHref: "/blog/salon-high-ticket-extensions",
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    { q: "كم يستغرق تحويل صالون إلى سلسلة؟", a: "لا يوجد جدول زمني ثابت، لكن الصالونات التي تتوسع تفعل ذلك على مراحل عبر سنوات: أولاً ابنِ خدمة extensions متكررة ووثّق المعيار، ثم أضف كرسياً ثانياً وستايلست مدربة، ثم كرّر النموذج في موقع ثانٍ. الثالث يتبع نفس الكتيّب. النمو يأتي من تكرار النتائج الجيدة لا من قفزة واحدة كبيرة." },
    { q: "ما دور إكسسوارات الشعر في نمو الصالون؟", a: "تُنشئ extensions دورة صيانة مدمجة كل 6–8 أسابيع (move-ups وإعادة الطلب)، فتعود العميلات على إيقاع بلا مطاردة. هذا الإيراد المتكرر يثبّت التدفق النقدي ويسمح للمالك بالتنحي عن الكرسي لإدارة العمل — وهو ما يجعل إضافة الكراسي والمواقع ممكنة." },
    { q: "هل يمكن لصالون صغير فتح موقع ثانٍ واقعياً؟", a: "نعم، حالما يعمل الموقع الأول بأنظمة لا بحضور المالك. إن اعتمدت النتائج عليك وحدك، يضاعف الموقع الثاني المشاكل. إن كان لديك SOP مكتوب وفريق مدرب معتمد ومقاييس متتبَّعة (الحجز، معدل الربط)، فالموقع الثاني نسخة من نموذج مُختبر — لا مقامرة." },
    { q: "كيف يفيد خط العلامة الخاصة صالوناً نامياً؟", a: "يضع خط العلامة الخاصة اسم صالونك على الشعر والعناية التي تحبها عميلاتك بالفعل. يطلبن مجدداً بعلامتك، يبقى الهامش معك لا مع موزّع، ويضيف خط إيراد يتجاوز ساعات الكرسي. كما يعزّز الولاء: العميلات في علاقة مع علامتك لا منتج يملكه غيرك." },
    { q: "ماذا يجب أن يفعل الصالون أولاً لينمو؟", a: "ابنِ التكرار قبل الحجم: أضف خدمة extensions بدورة 6–8 أسابيع، اكتب معيارك لتتمكن من تدريب الآخرين، وتتبّع الحجز والربط التجزئي أسبوعياً. قاعدة عملاء مخلصة عائدة وفريق متّسق هما الأساس الذي يُبنى عليه كل صالون متعدد المواقع." },
  ],
  link1Kicker: "مقال ذو صلة",
  link1Title: "إدارة صالون مربح (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "دليل المجموعة",
  link2Title: "درّب فريقك على Extensions",
  link2Href: "/blog/salon-extension-training-sop",
  backLabel: "العودة إلى المدونة",
}

const sv: ClientStorySalonGrowthChainContent = {
  seoTitle: "Från en stol till tre: hur en salong i Leeds byggde en kedja | D.S Hair Beauty",
  seoDescription:
    "En verklig (anonymiserad) kundhistoria: hur en salong med en stol i Leeds växte till en verksamhet med tre platser med extension-system, träning och en private label-linje — från 19 år av att hjälpa salonger skala.",
  jsonLdHeadline: "Från en stol till tre: hur en salong i Leeds byggde en kedja",
  jsonLdDescription:
    "En anonymiserad kundhistoria om salongstillväxt genom extension-system, teamträning och private label — från våra 19 år av leverans till UK-salonger.",
  heroBadge: "Kundhistoria",
  heroTitle: "Från en stol till tre: hur en salong i Leeds byggde en kedja",
  heroSubtitle:
    "En salong, en stylist-ägare, en enda stol. Åtta år senare: tre platser, ett tränat team och en egen märkt extension-linje. Så här gick det till — och vad vilken salong som helst kan låna.",
  ctaPrimaryLabel: "Öppna återförsäljarkonto",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Låt en lönsam salong växa →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "Hem",
  navBlog: "Blogg",
  navCurrent: "Salongstillväxthistoria",
  intro: [
    [
      { t: "Under " },
      { t: "19 år", b: true },
      { t: " av leverans och stöd till UK-salonger är den fråga vi hör mest från ägare inte \"vilket hår ska jag köpa\" — utan \"hur växer jag egentligen?\" Vi har sett hundratals salonger försöka. Ett fåtal bygger något bestående. Det här är historien om en av dem, berättad med deras tillstånd men anonymiserad: en salong i Leeds vi först mötte när den var en enda stol i ett delat utrymme." },
    ],
    [
      { t: "Vi delar den för att hävstängerna som fick det här företaget att växa inte är hemliga. Det är samma som vilken salong som helst kan dra i — konsekvent hår, en dokumenterad tjänst, ett tränat team och en märke kunderna kommer tillbaka till vid namn." },
    ],
  ],
  startHeading: "Var det började: en stol, inga system",
  startImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  startImageAlt: "En enda stylists arbetsstation i en salong",
  startP: [
    [
      { t: "När vi först levererade till den här salongen var det en soloägare vid en stol, som mest gjorde färg och klippning, med ett tillfälligt clip-in-försäljning vid kassan. Talangfull, fullbokad på helgerna, men helt beroende av att ägaren satt i stolen. Ingen återkommande extension-intäkt, inget team och ingen märke utöver mun-till-mun. Taket var helt enkelt: en person, en dag." },
    ],
  ],
  decisionHeading: "De fyra hävstängerna som fick den att växa",
  decisionP: [
    { t: "Tillväxten kom inte från ett stort beslut. Den kom från att stapla fyra system över flera år." },
  ],
  decisionCards: [
    { icon: "sparkles", q: "1. En återkommande tjänst, inte engångs", a: "Att lägga till tape-in och nano extensions skapade en inbyggd 6–8-veckors underhållscykel. Kunderna återvände i en rytm, och intäkterna slutade bero enbart på marknadsföring av nya kunder. Extensions förvandlade en salong för enstaka besök till en prenumerationliknande verksamhet." },
    { icon: "sparkles", q: "2. En dokumenterad standard (SOP)", a: "Innan anställning skrev ägaren ner exakta steg för konsultation, färgmatchning, applicering och aftercare. Nya stylister kunde tränas till samma standard på dagar, inte månader — vilket gjorde en andra stol säker att lägga till." },
    { icon: "sparkles", q: "3. Ett tränat, konsekvent team", a: "Med vårt extension-utbildningsstöd certifierade salongen stylister mot en checklista innan de tog betalande kunder. Konsekventa resultat vid varje stol är vad som lät ägaren stiga tillbaka från stolen och börja driva verksamheten." },
    { icon: "sparkles", q: "4. En märke kunderna frågar efter vid namn", a: "När tjänsten var konsekvent lanserade salongen sin egen private label-linje för extensions och aftercare. Kunderna beställer nu \"salongens egna\" hår på nytt — marginalen och relationen stannar hos salongen, inte en återförsäljare." },
  ],
  resultHeading: "Från andra stolen till tredje platsen",
  resultCards: [
    { label: "År 1–2: Bygg kärnan", icon: "trendingUp", items: ["Lägg till extensions som återkommande tjänst", "Dokumentera SOP", "Träna första certifierade stylisten"] },
    { label: "År 3–4: Öka kapacitet", icon: "building2", items: ["Andra stolen, sedan en andra stylist", "Inför en private label-linje", "Följ återbokning och attach-rate veckovis"] },
    { label: "År 5–8: Skala modellen", icon: "sparkles", items: ["Öppna en andra plats på samma system", "Träna chefer att driva varje site", "Tredje platsen följer beprövat playbook"] },
  ],
  resultP: [
    { t: "Den tredje platsen var inget vadl — det var de två första platsernas system kopierat. Det är den verkliga läxan: du skalar inte en salong genom bättre tur, du skalar den genom att göra de goda resultaten repeterbara utan dig i stolen. Vår " },
    { link: "extension-utbildnings-SOP", href: "/blog/salon-extension-training-sop" },
    { t: " är exakt det ramverk den här salongen använde för att hålla kvaliteten konsekvent över varje ny stylist." },
  ],
  borrowHeading: "Vad vilken salong som helst kan låna",
  borrowCards: [
    { icon: "trendingUp", q: "Börja med återkomst, inte skala", a: "En tjänst kunderna återvänder till var 6–8 vecka (extensions, med move-ups och återbeställningar) är värd mer än tio engångsbesök. Bygg den återkommande basen innan du lägger till stolar." },
    { icon: "trendingUp", q: "Skriv ner standarden", a: "Om ditt bästa resultat bara lever i ditt huvud kan du inte anställa. En SOP på en sida är vad som gör en soloist till en arbetsgivare." },
    { icon: "trendingUp", q: "Äg märket", a: "När kunderna beställer på ditt namn slutar du hyra din marginal av en återförsäljare. En private label-linje är det naturliga nästa steget när du har en lojal bas." },
  ],
  ctaBoxTitle: "Bygg din tillväxthistoria med konsekvent hår",
  ctaBoxBody:
    "Öppna ett gratis UK-återförsäljarkonto för 100% Remy människohår som ditt team kan lita på — grunden varje skalbar salongstjänst vilar på.",
  ctaBoxPrimaryLabel: "Öppna återförsäljarkonto →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Höj biljetten",
  ctaBoxSecondaryHref: "/blog/salon-high-ticket-extensions",
  faqHeading: "Vanliga frågor",
  faqs: [
    { q: "Hur lång tid tar det att växa en salong till en kedja?", a: "Det finns ingen fast tidlinje, men salonger som skalar gör det i etapper över flera år: först bygg en återkommande extension-tjänst och dokumentera standarden, lägg sedan till en andra stol och en tränad stylist, replikera sedan modellen på en andra plats. En tredje följer samma playbook. Tillväxt kommer från att göra goda resultat repeterbara, inte från ett stort språng." },
    { q: "Vilken roll spelar hårförlängningar i salongstillväxt?", a: "Extensions skapar en inbyggd 6–8-veckors underhållscykel (move-ups och återbeställningar), så kunderna återvänder i en rytm utan att jagas. Den återkommande intäkten stabiliserar kassaflödet och låter en ägare stiga tillbaka från stolen för att driva verksamheten — vilket gör det möjligt att lägga till stolar och platser." },
    { q: "Kan en liten salong realistiskt öppna en andra plats?", a: "Ja, när den första siten drivs på system snarare än på ägarens närvaro. Om resultat bara beror på dig, mångdubblar en andra plats problemen. Har du en skriftlig SOP, ett tränat och certifierat team och spårade mätvärden (återbokning, attach-rate), är andra siten en kopia av en beprövad modell — inte ett vad." },
    { q: "Hur hjälper en private label-linje en växande salong?", a: "En private label-linje sätter din salongs namn på håret och aftercare dina kunder redan älskar. De beställer på nytt via ditt märke, marginalen stannar hos dig i stället för en återförsäljare, och det lägger till en intäktslinje bortom stoltimmar. Det fördjupar också lojaliteten: kunderna är i en relation med ditt märke, inte en produkt någon annan äger." },
    { q: "Vad ska en salong göra först för att växa?", a: "Bygg återkomst före skala: lägg till en extension-tjänst med 6–8-veckors cykel, skriv ner din standard så att du kan träna andra, och följ återbokning och retail-attach veckovis. En lojal, återvändande kundbas och ett konsekvent team är grunden varje flerplats-salong vilar på." },
  ],
  link1Kicker: "Relaterad artikel",
  link1Title: "Driv en lönsam salong (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "Klusterguide",
  link2Title: "Träna ditt team i extensions",
  link2Href: "/blog/salon-extension-training-sop",
  backLabel: "Tillbaka till Bloggen",
}

const pl: ClientStorySalonGrowthChainContent = {
  seoTitle: "Od jednego fotela do trzech: jak salon z Leeds zbudował sieć | D.S Hair Beauty",
  seoDescription:
    "Prawdziwa (anonimowa) historia klienta: jak salon z jednym fotelem w Leeds urósł do biznesu z trzema lokalizacjami z systemami extensions, szkoleniami i linią private label — z 19 lat pomagania salonom w skalowaniu.",
  jsonLdHeadline: "Od jednego fotela do trzech: jak salon z Leeds zbudował sieć",
  jsonLdDescription:
    "Anonimowa historia klienta o wzroście salonu przez systemy extensions, szkolenia zespołu i private label — z naszych 19 lat dostarczania salonom w UK.",
  heroBadge: "Historia klienta",
  heroTitle: "Od jednego fotela do trzech: jak salon z Leeds zbudował sieć",
  heroSubtitle:
    "Jeden salon, jeden właściciel-stylista, jeden fotel. Osiem lat później: trzy lokalizacje, przeszkolony zespół i własna nazwana linia extensions. Tak to się stało — i co każdy salon może przejąć.",
  ctaPrimaryLabel: "Otwórz konto hurtowe",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Rozwiń dochodowy salon →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "Strona główna",
  navBlog: "Blog",
  navCurrent: "Historia wzrostu salonu",
  intro: [
    [
      { t: "Przez " },
      { t: "19 lat", b: true },
      { t: " dostarczania i wspierania salonów w UK najczęstsze pytanie właścicieli to nie „jaki włos mam kupić\" — lecz „jak naprawdę rosnąć”? Widzieliśmy setki salonów próbujących. Garstka buduje coś trwałego. To historia jednego z nich, opowiedziana za ich zgodą, ale zanonimizowana: salon z Leeds, który poznaliśmy, gdy był jednym fotelem w dzielonym pomieszczeniu." },
    ],
    [
      { t: "Dzielimy ją, bo dźwignie, które rozwinęły ten biznes, nie są tajemnicą. To te same, które może pociągnąć każdy salon — spójne włosy, udokumentowana usługa, przeszkolony zespół i marka, do której klientki wracają po nazwisku." },
    ],
  ],
  startHeading: "Skąd to się zaczęło: jeden fotel, brak systemów",
  startImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  startImageAlt: "Stanowisko pracy jednego stylisty w salonie",
  startP: [
    [
      { t: "Gdy po raz pierwszy zaopatrywaliśmy ten salon, był to samotny właściciel przy jednym fotelu, robiący głównie kolor i strzyżenie, z okazjonalną sprzedażą clip-in przy kasie. Uzdolniony, zajęty w weekendy, ale całkowicie zależny od obecności właściciela na fotelu. Nie było powtarzalnych przychodów z extensions, nie było zespołu, ani marki poza pocztą pantoflową. Sufit był prosty: jedna osoba, jeden dzień." },
    ],
  ],
  decisionHeading: "Cztery dźwignie, które go rozwinęły",
  decisionP: [
    { t: "Wzrost nie wziął się z jednej wielkiej decyzji. Wziął się ze stosowania czterech systemów przez kilka lat." },
  ],
  decisionCards: [
    { icon: "sparkles", q: "1. Usługa powtarzalna, nie jednorazowa", a: "Dodanie tape-in i nano extensions stworzyło wbudowany 6–8-tygodniowy cykl konserwacji. Klientki wracały w rytmie, a przychody przestały zależeć tylko od marketingu nowych klientek. Extensions zamieniły salon jednej wizyty w biznes subskrypcyjny." },
    { icon: "sparkles", q: "2. Udokumentowany standard (SOP)", a: "Przed zatrudnieniem właścicielka zapisała dokładne kroki konsultacji, doboru koloru, aplikacji i aftercare. Nowe stylistki można było przeszkolić do tego samego standardu w dni, nie miesiące — co uczyniło bezpiecznym dodanie drugiego fotela." },
    { icon: "sparkles", q: "3. Przeszkolony, spójny zespół", a: "Korzystając z naszego wsparcia szkoleniowego extensions, salon certyfikował stylistki według listy kontrolnej, zanim wzięły płacące klientki. Spójne wyniki na każdym fotelu pozwoliły właścicielce cofnąć się z fotela i zacząć prowadzić biznes." },
    { icon: "sparkles", q: "4. Marka, o którą klientki pytają po nazwisku", a: "Gdy usługa była spójna, salon uruchomił własną linię extensions i aftercare w private label. Klientki teraz zamawiają ponownie „własne włosy salonu” — marża i relacja zostają w salonie, nie u odsprzedawcy." },
  ],
  resultHeading: "Od drugiego fotela do trzeciej lokalizacji",
  resultCards: [
    { label: "Rok 1–2: zbuduj rdzeń", icon: "trendingUp", items: ["Dodaj extensions jako usługę powtarzalną", "Udokumentuj SOP", "Przeszkol pierwszą certyfikowaną stylistkę"] },
    { label: "Rok 3–4: dodaj pojemność", icon: "building2", items: ["Drugi fotel, potem druga stylistka", "Wprowadź linię private label", "Śledź rezerwacje i attach rate tygodniowo"] },
    { label: "Rok 5–8: skaluj model", icon: "sparkles", items: ["Otwórz drugą lokalizację na tym samym systemie", "Przeszkol menedżerów do prowadzenia każdego site'u", "Trzecia lokalizacja idzie za sprawdzonym playbookiem"] },
  ],
  resultP: [
    { t: "Trzecia lokalizacja nie była zakładem — to skopiowany system dwóch pierwszych. To prawdziwa lekcja: nie skalujesz salonu lepszym szczęściem, lecz czyniąc dobre wyniki powtarzalnymi bez ciebie na fotelu. Nasz " },
    { link: "SOP szkolenia extensions", href: "/blog/salon-extension-training-sop" },
    { t: " to dokładna rama, której ten salon użył, by utrzymać jakość spójną u każdej nowej stylistki." },
  ],
  borrowHeading: "Co każdy salon może przejąć",
  borrowCards: [
    { icon: "trendingUp", q: "Zacznij od powtarzalności, nie skali", a: "Usługa, do której klientki wracają co 6–8 tygodni (extensions, z move-ups i ponownymi zamówieniami), jest warta więcej niż dziesięć jednorazowych wizyt. Zbuduj powtarzalną bazę, zanim dodasz fotele." },
    { icon: "trendingUp", q: "Zapisz standard", a: "Jeśli twój najlepszy wynik żyje tylko w twojej głowie, nie możesz zatrudniać. Jednostronicowy SOP to, co zamienia solistę w pracodawcę." },
    { icon: "trendingUp", q: "Posiadaj markę", a: "Gdy klientki zamawiają pod twoim nazwiskiem, przestajesz wynajmować marżę od odsprzedawcy. Linia private label to naturalny następny krok, gdy masz lojalną bazę." },
  ],
  ctaBoxTitle: "Buduj swoją historię wzrostu ze spójnym włosem",
  ctaBoxBody:
    "Otwórz darmowe konto hurtowe UK na 100% Remy włosy naturalne, na którym twój zespół może polegać — fundament, na którym stoi każda skalowalna usługa salonu.",
  ctaBoxPrimaryLabel: "Otwórz konto hurtowe →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Podnieś ticket",
  ctaBoxSecondaryHref: "/blog/salon-high-ticket-extensions",
  faqHeading: "Najczęściej Zadawane Pytania",
  faqs: [
    { q: "Jak długo trwa rozciągnięcie salonu w sieć?", a: "Nie ma stałego harmonogramu, ale salony, które skalują, robią to etapami przez kilka lat: najpierw zbuduj powtarzalną usługę extensions i udokumentuj standard, potem dodaj drugi fotel i przeszkoloną stylistkę, następnie powiel model w drugiej lokalizacji. Trzecia idzie tym samym playbookiem. Wzrost bierze się z powtarzalności dobrych wyników, nie z jednego wielkiego skoku." },
    { q: "Jaką rolę grają przedłużenia we wzroście salonu?", a: "Extensions tworzą wbudowany 6–8-tygodniowy cykl konserwacji (move-ups i ponowne zamówienia), więc klientki wracają w rytmie bez pogoni. Ten powtarzalny przychód stabilizuje przepływ gotówki i pozwala właścicielowi cofnąć się z fotela, by prowadzić biznes — co umożliwia dodawanie foteli i lokalizacji." },
    { q: "Czy mały salon może realnie otworzyć drugą lokalizację?", a: "Tak, gdy pierwszy site działa na systemach, a nie na obecności właściciela. Jeśli wyniki zależą tylko od ciebie, druga lokalizacja mnoży problemy. Jeśli masz pisemny SOP, przeszkolony i certyfikowany zespół oraz śledzone metryki (rezerwacje, attach rate), drugi site to kopia sprawdzonego modelu — nie zakład." },
    { q: "Jak linia private label pomaga rosnącemu salonowi?", a: "Linia private label kładzie nazwę twojego salonu na włosy i aftercare, które twoje klientki już kochają. Zamawiają ponownie pod twoją marką, marża zostaje u ciebie zamiast u odsprzedawcy, i dodaje linię przychodu poza godziny fotela. Pogłębia też lojalność: klientki są w relacji z twoją marką, nie z produktem, który ktoś inny posiada." },
    { q: "Co salon powinien zrobić najpierw, by rosnąć?", a: "Buduj powtarzalność przed skalą: dodaj usługę extensions z cyklem 6–8 tygodni, zapisz standard, by móc szkolić innych, i śledź rezerwacje oraz retail attach tygodniowo. Lojalna, wracająca baza klientek i spójny zespół to fundament, na którym stoi każdy salon wielolokalizacyjny." },
  ],
  link1Kicker: "Powiązany artykuł",
  link1Title: "Prowadź dochodowy salon (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "Przewodnik klastra",
  link2Title: "Przeszkol swój zespół z extensions",
  link2Href: "/blog/salon-extension-training-sop",
  backLabel: "Powrót do Bloga",
}

export const clientStorySalonGrowthChainContent: Record<Locale, ClientStorySalonGrowthChainContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
