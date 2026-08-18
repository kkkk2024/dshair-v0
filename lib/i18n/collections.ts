import type { Locale } from './config'

export type LocalizedCollection = {
  name: string
  description: string
  seoTitle: string
  seoDescription: string
  banner?: { headline: string; subtext: string; guideUrl: string }
}

export const collectionSlugs = [
  'all',
  'diy',
  'professional',
  'clip-in',
  'tape-in',
  'ponytails',
  'weft',
  'k-tip-extensions',
  'nano-extensions',
  'fringes-bangs',
  'extension-care',
  'extension-tools',
  'heated-styling',
  'storage',
  'butterfly-extensions',
  'hair-toppers',
] as const

export type CollectionSlug = (typeof collectionSlugs)[number]

type CollectionContent = Record<CollectionSlug, LocalizedCollection>

const en: CollectionContent = {
  all: {
    name: 'All Products',
    description: 'Shop the UK\'s most trusted wholesale hair extension collection. 100% Remy human hair — K-Tip, Tape-In, Weft, Clip-In & Nano. Professional trade pricing. 19 years supplying UK salons.',
    seoTitle: 'Hair Extensions Wholesale UK | 100% Remy Human Hair | D.S HAIR & BEAUTY',
    seoDescription: 'Shop 100% Remy human hair extensions wholesale for salons. Clip-in, tape-in, weft & more. Free UK delivery, trade pricing available.',
    banner: { headline: 'New to hair extensions?', subtext: 'Complete guide: every extension type explained for UK salons & clients', guideUrl: '/blog/hair-extension-types-guide' },
  },
  diy: {
    name: 'DIY Extensions',
    description: 'Professional-quality hair extensions for DIY application at home. 100% Remy human hair clip-ins and tape-ins with step-by-step guides. Instant transformation — no salon appointment needed.',
    seoTitle: 'DIY Hair Extensions | Clip-In & Tape-In | D.S HAIR & BEAUTY',
    seoDescription: 'Premium DIY hair extensions for home use. Salon-quality clip-in & tape-in sets in 50+ shades. Free UK delivery, 30-day returns.',
    banner: { headline: 'DIY or professional — which is right for your client?', subtext: 'Read our guide: trade vs DIY extensions, costs & results compared', guideUrl: '/blog/trade-vs-diy-extensions' },
  },
  professional: {
    name: 'Professional Extensions',
    description: 'Salon-grade hair extensions for professional stylists. Keratin bonds, nano rings, tape-in & weft — all 100% Remy human hair. Trade accounts available. Express 3–5 day UK delivery.',
    seoTitle: 'Professional Hair Extensions UK | Salon Wholesale | D.S HAIR & BEAUTY',
    seoDescription: 'Professional hair extensions for salons & stylists. Wholesale pricing, bulk orders, trade accounts. Expert support & free UK delivery.',
    banner: { headline: 'Stocking professional extensions for your salon?', subtext: 'Read our guide: wholesale pricing, MOQs & building a profitable range', guideUrl: '/blog/wholesale-hair-extensions-uk' },
  },
  'clip-in': {
    name: 'Clip-In Extensions',
    description: 'Premium clip-in hair extensions in 100% Remy human hair. Invisible seamless clips for zero damage. 40+ colours, 16"–26" lengths. UK supplier with free colour matching service.',
    seoTitle: 'Clip-In Hair Extensions UK | 100% Remy Human Hair | D.S HAIR & BEAUTY',
    seoDescription: 'Salon-quality clip-in hair extensions in 50+ shades. 100% Remy human hair, easy at-home application. Free UK delivery & 30-day returns.',
    banner: { headline: 'New to clip-in extensions?', subtext: 'Read our complete guide: how to fit, blend, colour-match & care for clip-in sets', guideUrl: '/blog/clip-in-extensions-guide' },
  },
  'tape-in': {
    name: 'Tape-In Extensions',
    description: 'Seamless tape-in hair extensions for a natural look. Ultra-thin invisible PU base, pre-taped for fast application. 100% Remy human hair. Perfect for fine hair. UK salon wholesale available.',
    seoTitle: 'Tape-In Hair Extensions UK | Invisible Seamless | D.S HAIR & BEAUTY',
    seoDescription: 'Ultra-thin seamless tape hair extensions for salons. Heat-friendly bonds, invisible application. Wholesale pricing, free UK delivery over £50.',
    banner: { headline: 'Tape-in extensions — the UK\'s most popular method', subtext: 'Complete guide: invisible application, aftercare & how to maximise salon revenue', guideUrl: '/blog/tape-in-extensions-guide' },
  },
  ponytails: {
    name: 'Ponytails',
    description: 'Instant transformation with our premium human hair ponytail extensions. Wrap-around and clip-in styles. 100% Remy human hair in 40+ colours. Express 3–5 day UK delivery.',
    seoTitle: 'Hair Ponytail Extensions | Human Hair | D.S HAIR & BEAUTY',
    seoDescription: 'Human hair ponytail extensions in 30+ styles. Instant length & volume, no appointment needed. 100% Remy hair, free UK delivery.',
    banner: { headline: 'Ponytail extensions — your salon\'s secret revenue weapon', subtext: 'Read our guide: 5 ways to style, colour-match & upsell ponytail extensions', guideUrl: '/blog/ponytail-extensions-guide' },
  },
  weft: {
    name: 'Weft Extensions',
    description: 'Hand-tied weft and machine weft extensions in 100% Remy human hair. Butterfly weft, Genius weft & super weft available. Professional wholesale pricing for UK salons.',
    seoTitle: 'Weft Hair Extensions UK | Hand-Tied & Machine | D.S HAIR & BEAUTY',
    seoDescription: 'Weft hair extensions for salons: hand-tied & machine weft. Premium Remy hair, seamless bulk pricing. Free UK delivery for trade orders.',
    banner: { headline: 'Hand-tied or machine weft — which is right for your client?', subtext: 'Complete guide: application methods, pricing, maintenance cycle & salon revenue tips', guideUrl: '/blog/weft-extensions-guide' },
  },
  'k-tip-extensions': {
    name: 'K-Tip Extensions',
    description: 'Professional K-Tip hair extensions (keratin bond). 100% Remy human hair in 50+ shades including balayage and rooted. 0.5g–1g bond options for fine to thick hair. UK salon wholesale supplier.',
    seoTitle: 'K-Tip Hair Extensions UK | Keratin Bond | D.S HAIR & BEAUTY',
    seoDescription: 'K-tip keratin hair extensions for a premium long-term look. Heat-friendly, no tape or glue. Professional salon wholesale pricing.',
    banner: { headline: 'K-tip extensions — the premium long-term solution', subtext: 'Complete guide: keratin bonds, maintenance & how to charge premium prices', guideUrl: '/blog/k-tip-extensions-guide' },
  },
  'nano-extensions': {
    name: 'Nano Extensions',
    description: 'Nano ring hair extensions — the UK\'s most requested method for fine hair. Ultra-tiny 0.5g bonds, 100% Remy human hair. Less damage, more natural. Professional trade pricing available.',
    seoTitle: 'Nano Ring Hair Extensions UK | Fine Hair | D.S HAIR & BEAUTY',
    seoDescription: 'Nano ring hair extensions — ultra-invisible bonds for fine hair. No heat, no glue, 100% Remy hair. Salon wholesale available.',
    banner: { headline: 'Nano ring extensions — ultra-invisible for fine hair', subtext: 'Complete guide: 3mm bonds, no-heat application & fine hair specialist tips', guideUrl: '/blog/nano-ring-extensions-guide' },
  },
  'fringes-bangs': {
    name: 'Fringes & Bangs',
    description: 'Transform your look instantly with our premium fringe and bang extensions. 100% Remy human hair in blunt cut, choppy and wispy styles. 20+ colours. UK supplier.',
    seoTitle: 'Hair Fringes & Bangs Extensions | Human Hair | D.S HAIR & BEAUTY',
    seoDescription: 'Hair fringe & bang extensions: instant face-framing colour & volume. 100% Remy human hair, easy to apply at home or in salon.',
    banner: { headline: 'Fringe extensions — the most underrated salon product', subtext: 'Complete guide: face-framing colour, volume techniques & client recommendations', guideUrl: '/blog/fringes-bangs-extensions-guide' },
  },
  'extension-care': {
    name: 'Extension Care',
    description: 'Sulfate-free shampoos, deep conditioners, hair masks, detangling brushes and tape remover — everything your clients need to keep their extensions looking salon-fresh. Pair with our hair extensions for the complete service.',
    seoTitle: 'Hair Extension Care Products UK | Sulfate-Free | D.S HAIR & BEAUTY',
    seoDescription: 'Prolong your hair extensions with salon-recommended care products. Sulfate-free shampoo, conditioner, brushes & more. Free UK delivery over £30.',
    banner: { headline: 'Make extensions last longer for your clients', subtext: 'Complete aftercare guide: washing, brushing & prolonging extension life', guideUrl: '/blog/hair-extension-aftercare-guide' },
  },
  'extension-tools': {
    name: 'Extension Tools',
    description: 'Professional installation tools for salons: tape-in pliers, K-Tip/nano ring kits, loop brushes, sectioning clips, keratin glue sticks and complete starter kits. Trusted by UK stylists.',
    seoTitle: 'Hair Extension Tools UK | Salon Installation Kits & Pliers | D.S HAIR & BEAUTY',
    seoDescription: 'Professional hair extension installation tools: pliers, micro rings, heat tongs & removal kits. Salon-grade quality, free UK delivery.',
    banner: { headline: 'Choosing the right method for each client', subtext: 'Read our guide: every extension method compared side by side', guideUrl: '/blog/hair-extension-methods-comparison' },
  },
  'heated-styling': {
    name: 'Heated Styling',
    description: 'Professional heated brushes, ionic paddle brushes and cordless styling tools for salons. Extension-safe temperatures, fast heat-up and salon-grade results. Perfect for restyling hair extensions.',
    seoTitle: 'Professional Heated Brushes UK | Salon Styling Tools | D.S HAIR & BEAUTY',
    seoDescription: 'Professional heated styling brushes & tools for hair extensions. Salon-grade heat protection, compatible with all Remy hair types.',
  },
  storage: {
    name: 'Storage',
    description: 'Premium velvet and satin extension storage bags and cases. Keep hair extensions and tools organised, protected and in perfect condition between appointments.',
    seoTitle: 'Hair Extension Storage Bags & Cases UK | Velvet Organiser | D.S HAIR & BEAUTY',
    seoDescription: 'Hair extension storage bags & velvet organisers. Keep extensions tangle-free & protected. Premium quality, free UK delivery.',
  },
  'butterfly-extensions': {
    name: 'Butterfly Extensions',
    description: 'Premium butterfly weft hair extensions — ultra-thin 0.5mm base for a seamless, natural finish. 100% Remy human hair in 50+ shades. UK\'s leading wholesale supplier for professional salons.',
    seoTitle: 'Butterfly Weft Extensions UK | Salon Wholesale | D.S HAIR & BEAUTY',
    seoDescription: 'Butterfly weft extensions — the ultra-thin 0.5mm industry game-changer. Seamless finish for salons. Wholesale pricing, free UK delivery.',
    banner: { headline: 'Butterfly weft — the industry game-changer', subtext: 'Complete guide: 0.5mm ultra-thin base, seamless finish & salon pricing guide', guideUrl: '/blog/butterfly-extensions-guide' },
  },
  'hair-toppers': {
    name: 'Hair Toppers',
    description: 'D.S HAIR premium hair toppers for thinning hair and crown coverage. 12 models available including MONO Top, Fine Welded Mono, French Lace, Silk Top, and PU Base options. 100% Indian/Remy human hair, 120-130% density, 8 natural salon colours. Available lengths 12"–18". Customized colour and length service available. Wholesale pricing for UK & EU salons.',
    seoTitle: 'Hair Toppers UK | Thinning Hair Solutions | D.S HAIR & BEAUTY',
    seoDescription: 'Hair toppers for thinning hair: silk, mono & mesh base options. Non-surgical hair loss solution. Salon wholesale & retail available.',
    banner: { headline: 'Not sure which topper is right for your client?', subtext: 'Complete guide: silk vs mono vs mesh base, application steps & salon tips', guideUrl: '/blog/hair-topper-guide' },
  },
}

const de: CollectionContent = {
  all: {
    name: 'Alle Produkte',
    description: 'Entdecken Sie die vertrauenswürdigste Großhandelskollektion für Haarverlängerungen im UK. 100% Remy Echthaar — K-Tip, Tape-In, Weft, Clip-In & Nano. Handelspreise. 19 Jahre Erfahrung mit UK-Salons.',
    seoTitle: 'Haarverlängerungen Großhandel UK | 100% Remy Echthaar | D.S HAIR & BEAUTY',
    seoDescription: 'Kaufen Sie 100% Remy Echthaar-Verlängerungen im Großhandel für Salons. Clip-in, Tape-in, Weft & mehr. Kostenlose UK-Lieferung, Handelspreise verfügbar.',
    banner: { headline: 'Neu bei Haarverlängerungen?', subtext: 'Kompletter Ratgeber: alle Extension-Methoden erklärt für UK-Salons & Kunden', guideUrl: '/blog/hair-extension-types-guide' },
  },
  diy: {
    name: 'DIY Extensions',
    description: 'Professionelle Haarverlängerungen für die DIY-Anwendung zu Hause. 100% Remy Echthaar Clip-Ins und Tape-Ins mit Schritt-für-Schritt-Anleitungen. Sofortige Verwandlung — ohne Salontermin.',
    seoTitle: 'DIY Haarverlängerungen | Clip-In & Tape-In | D.S HAIR & BEAUTY',
    seoDescription: 'Premium DIY-Haarverlängerungen für den Heimgebrauch. Salonqualität Clip-in & Tape-in Sets in 50+ Farben. Kostenlose UK-Lieferung, 30-Tage-Rückgabe.',
    banner: { headline: 'DIY oder professionell — was passt zu Ihrem Kunden?', subtext: 'Lesen Sie unseren Ratgeber: Trade vs. DIY Extensions, Kosten & Ergebnisse im Vergleich', guideUrl: '/blog/trade-vs-diy-extensions' },
  },
  professional: {
    name: 'Professional Extensions',
    description: 'Salontaugliche Haarverlängerungen für professionelle Stylisten. Keratinbonds, Nano-Ringe, Tape-In & Weft — alles 100% Remy Echthaar. Handelskonten verfügbar. Express-Lieferung 3–5 Tage UK.',
    seoTitle: 'Professionelle Haarverlängerungen UK | Salon-Großhandel | D.S HAIR & BEAUTY',
    seoDescription: 'Professionelle Haarverlängerungen für Salons & Stylisten. Großhandelspreise, Großabnehmer, Handelskonten. Experten-Support & kostenlose UK-Lieferung.',
    banner: { headline: 'Professionelle Extensions für Ihren Salon aufstocken?', subtext: 'Ratgeber: Großhandelspreise, Mindestbestellmengen & ein profitables Sortiment aufbauen', guideUrl: '/blog/wholesale-hair-extensions-uk' },
  },
  'clip-in': {
    name: 'Clip-In Extensions',
    description: 'Premium Clip-In Haarverlängerungen aus 100% Remy Echthaar. Unsichtbare, nahtlose Clips ohne Beschädigung. 40+ Farben, Längen 16"–26". UK-Lieferant mit kostenlosem Farbabgleich-Service.',
    seoTitle: 'Clip-In Haarverlängerungen UK | 100% Remy Echthaar | D.S HAIR & BEAUTY',
    seoDescription: 'Clip-In Haarverlängerungen in Salonqualität in 50+ Farbtönen. 100% Remy Echthaar, einfache Anwendung zu Hause. Kostenlose UK-Lieferung & 30-Tage-Rückgabe.',
    banner: { headline: 'Neu bei Clip-In Extensions?', subtext: 'Kompletter Ratgeber: Anpassen, Blenden, Farbabgleich & Pflege von Clip-In Sets', guideUrl: '/blog/clip-in-extensions-guide' },
  },
  'tape-in': {
    name: 'Tape-In Extensions',
    description: 'Nahtlose Tape-In Haarverlängerungen für einen natürlichen Look. Ultradünne unsichtbare PU-Basis, vorgeklebt für schnelle Anwendung. 100% Remy Echthaar. Perfekt für feines Haar. UK-Salon-Großhandel verfügbar.',
    seoTitle: 'Tape-In Haarverlängerungen UK | Unsichtbar & Nahtlos | D.S HAIR & BEAUTY',
    seoDescription: 'Ultradünne nahtlose Tape-Haarverlängerungen für Salons. Hitzefeste Bonds, unsichtbare Anwendung. Großhandelspreise, kostenlose UK-Lieferung ab £50.',
    banner: { headline: 'Tape-In Extensions — die beliebteste Methode im UK', subtext: 'Kompletter Ratgeber: unsichtbare Anwendung, Aftercare & maximale Salon-Umsatzsteigerung', guideUrl: '/blog/tape-in-extensions-guide' },
  },
  ponytails: {
    name: 'Ponytails',
    description: 'Sofortige Verwandlung mit unseren Premium Human-Hair Pferdeschwanz-Verlängerungen. Wrap-around und Clip-In Styles. 100% Remy Echthaar in 40+ Farben. Express-Lieferung 3–5 Tage UK.',
    seoTitle: 'Pferdeschwanz Haarverlängerungen | Echthaar | D.S HAIR & BEAUTY',
    seoDescription: 'Echthaar-Pferdeschwanzverlängerungen in 30+ Styles. Sofortige Länge & Volumen, kein Termin nötig. 100% Remy-Haar, kostenlose UK-Lieferung.',
    banner: { headline: 'Pferdeschwanzverlängerungen — die geheime Umsatzwaffe Ihres Salons', subtext: 'Ratgeber: 5 Styling-Ideen, Farbabgleich & Upsell-Tipps für Pferdeschwänze', guideUrl: '/blog/ponytail-extensions-guide' },
  },
  weft: {
    name: 'Weft Extensions',
    description: 'Handgebundene und maschinell gefertigte Weft Extensions aus 100% Remy Echthaar. Butterfly Weft, Genius Weft & Super Weft verfügbar. Professionelle Großhandelspreise für UK-Salons.',
    seoTitle: 'Weft Haarverlängerungen UK | Handgebunden & Maschinell | D.S HAIR & BEAUTY',
    seoDescription: 'Weft Haarverlängerungen für Salons: handgebunden & maschinell. Premium Remy-Haar, nahtlose Großhandelspreise. Kostenlose UK-Lieferung für Handelsbestellungen.',
    banner: { headline: 'Handgebunden oder maschinell — was passt zu Ihrem Kunden?', subtext: 'Kompletter Ratgeber: Anwendungsmethoden, Preise, Pflegezyklus & Salon-Umsatztipps', guideUrl: '/blog/weft-extensions-guide' },
  },
  'k-tip-extensions': {
    name: 'K-Tip Extensions',
    description: 'Professionelle K-Tip Haarverlängerungen (Keratinbonds). 100% Remy Echthaar in 50+ Farbtönen inklusive Balayage und Rooted. 0,5g–1g Bond-Optionen für feines bis dickes Haar. UK-Salon-Großhandel.',
    seoTitle: 'K-Tip Haarverlängerungen UK | Keratinbonds | D.S HAIR & BEAUTY',
    seoDescription: 'K-Tip Keratin-Haarverlängerungen für einen Premium-Dauer-Look. Hitzefest, kein Tape oder Kleber. Professionelle Salon-Großhandelspreise.',
    banner: { headline: 'K-Tip Extensions — die Premium-Dauerlösung', subtext: 'Kompletter Ratgeber: Keratinbonds, Pflege & wie Sie Premium-Preise verlangen', guideUrl: '/blog/k-tip-extensions-guide' },
  },
  'nano-extensions': {
    name: 'Nano Extensions',
    description: 'Nano-Ring Haarverlängerungen — die beliebteste Methode im UK für feines Haar. Ultrakleine 0,5g Bonds, 100% Remy Echthaar. Weniger Schaden, natürlicher Look. Handelspreise verfügbar.',
    seoTitle: 'Nano Ring Haarverlängerungen UK | Feines Haar | D.S HAIR & BEAUTY',
    seoDescription: 'Nano-Ring Haarverlängerungen — ultra-unsichtbare Bonds für feines Haar. Keine Hitze, kein Kleber, 100% Remy-Haar. Salon-Großhandel verfügbar.',
    banner: { headline: 'Nano-Ring Extensions — ultra-unsichtbar für feines Haar', subtext: 'Kompletter Ratgeber: 3mm Bonds, hitzefreie Anwendung & Spezialtipps für feines Haar', guideUrl: '/blog/nano-ring-extensions-guide' },
  },
  'fringes-bangs': {
    name: 'Pony & Bangs',
    description: 'Verwandeln Sie Ihren Look im Handumdrehen mit unseren Premium Pony- und Bang-Extensions. 100% Remy Echthaar in geradem, choppy und wispy Style. 20+ Farben. UK-Lieferant.',
    seoTitle: 'Pony & Bangs Extensions | Echthaar | D.S HAIR & BEAUTY',
    seoDescription: 'Pony- und Bang-Extensions: sofortige gesichtsumrahmende Farbe & Fülle. 100% Remy Echthaar, einfach zu Hause oder im Salon anzubringen.',
    banner: { headline: 'Pony-Extensions — das unterschätzteste Salonprodukt', subtext: 'Kompletter Ratgeber: gesichtsumrahmende Farbe, Volumen-Techniken & Kundenempfehlungen', guideUrl: '/blog/fringes-bangs-extensions-guide' },
  },
  'extension-care': {
    name: 'Extension Care',
    description: 'Sulfatfreie Shampoos, intensive Conditioner, Haarmasken, Entwirrungsbürsten und Tape-Remover — alles, was Ihre Kunden brauchen, um Extensions salonfrisch zu halten. Kombinieren Sie mit unseren Haarverlängerungen für den kompletten Service.',
    seoTitle: 'Extension Care Produkte UK | Sulfatfrei | D.S HAIR & BEAUTY',
    seoDescription: 'Verlängern Sie die Lebensdauer von Extensions mit salonempfohlenen Pflegeprodukten. Sulfatfreies Shampoo, Conditioner, Bürsten & mehr. Kostenlose UK-Lieferung ab £30.',
    banner: { headline: 'Lassen Sie Extensions bei Ihren Kunden länger halten', subtext: 'Kompletter Aftercare-Ratgeber: Waschen, Bürsten & Lebensdauer verlängern', guideUrl: '/blog/hair-extension-aftercare-guide' },
  },
  'extension-tools': {
    name: 'Extension Tools',
    description: 'Professionelle Einbauwerkzeuge für Salons: Tape-In Zangen, K-Tip/Nano-Ring Sets, Loop-Bürsten, Abteilklammern, Keratin-Klebesticks und komplette Starter-Sets. Vertraut von UK-Stylisten.',
    seoTitle: 'Haarverlängerungs Werkzeug UK | Salon Einbau-Sets & Zangen | D.S HAIR & BEAUTY',
    seoDescription: 'Professionelle Haarverlängerungs-Einbauwerkzeuge: Zangen, Micro-Ringe, Heizzangen & Entfernungs-Sets. Salonqualität, kostenlose UK-Lieferung.',
    banner: { headline: 'Die richtige Methode für jeden Kunden wählen', subtext: 'Ratgeber: alle Extension-Methoden im direkten Vergleich', guideUrl: '/blog/hair-extension-methods-comparison' },
  },
  'heated-styling': {
    name: 'Heated Styling',
    description: 'Professionelle Heißluftbürsten, ionische Paddle-Bürsten und kabellose Styling-Tools für Salons. Extensions-sichere Temperaturen, schnelles Aufheizen und salonwürdige Ergebnisse. Perfekt zum Restylen von Haarverlängerungen.',
    seoTitle: 'Professionelle Heißluftbürsten UK | Salon Styling Tools | D.S HAIR & BEAUTY',
    seoDescription: 'Professionelle beheizte Stylingbürsten & Tools für Haarverlängerungen. Salon-Hitzeschutz, kompatibel mit allen Remy-Haar-Typen.',
  },
  storage: {
    name: 'Aufbewahrung',
    description: 'Premium Samt- und Satin-Aufbewahrungstaschen und -boxen für Extensions. Halten Sie Haarverlängerungen und Werkzeuge organisiert, geschützt und in perfektem Zustand zwischen den Terminen.',
    seoTitle: 'Haarverlängerungs Aufbewahrungstaschen & Boxen UK | Samt Organizer | D.S HAIR & BEAUTY',
    seoDescription: 'Aufbewahrungstaschen & Samt-Organizer für Haarverlängerungen. Halten Sie Extensions knotenfrei & geschützt. Premium-Qualität, kostenlose UK-Lieferung.',
  },
  'butterfly-extensions': {
    name: 'Butterfly Extensions',
    description: 'Premium Butterfly Weft Haarverlängerungen — ultradünne 0,5mm Basis für einen nahtlosen, natürlichen Finish. 100% Remy Echthaar in 50+ Farbtönen. Führender UK-Großhandel für professionelle Salons.',
    seoTitle: 'Butterfly Weft Extensions UK | Salon-Großhandel | D.S HAIR & BEAUTY',
    seoDescription: 'Butterfly Weft Extensions — der ultradünne 0,5mm Branchen-Game-Changer. Nahtloses Finish für Salons. Großhandelspreise, kostenlose UK-Lieferung.',
    banner: { headline: 'Butterfly Weft — der Game-Changer der Branche', subtext: 'Kompletter Ratgeber: 0,5mm ultradünne Basis, nahtloses Finish & Salon-Preisgestaltung', guideUrl: '/blog/butterfly-extensions-guide' },
  },
  'hair-toppers': {
    name: 'Hair Toppers',
    description: 'D.S HAIR Premium Hair Toppers bei Haarausdünnung und für die Scheitelabdeckung. 12 Modelle verfügbar inklusive MONO Top, Fine Welded Mono, French Lace, Silk Top und PU Base Optionen. 100% indisches/Remy Echthaar, 120–130% Dichte, 8 natürliche Salonfarben. Verfügbare Längen 12"–18". Individueller Farb- und Längenservice verfügbar. Großhandelspreise für UK & EU Salons.',
    seoTitle: 'Hair Toppers UK | Lösungen bei Haarausdünnung | D.S HAIR & BEAUTY',
    seoDescription: 'Hair Toppers bei Haarausdünnung: Silk, Mono & Mesh Base Optionen. Nicht-chirurgische Haarverlust-Lösung. Salon-Großhandel & Einzelhandel verfügbar.',
    banner: { headline: 'Unsicher, welcher Topper für Ihren Kunden geeignet ist?', subtext: 'Kompletter Ratgeber: Silk vs Mono vs Mesh Base, Anwendungsschritte & Salon-Tipps', guideUrl: '/blog/hair-topper-guide' },
  },
}

const fr: CollectionContent = {
  all: {
    name: 'Tous les produits',
    description: 'Découvrez la collection de gros d\'extensions capillaires la plus fiable au Royaume-Uni. 100% cheveux humains Remy — K-Tip, Tape-In, Weft, Clip-In & Nano. Prix professionnels. 19 ans d\'expérience avec les salons UK.',
    seoTitle: 'Extensions de cheveux en gros UK | 100% Remy | D.S HAIR & BEAUTY',
    seoDescription: 'Achetez des extensions 100% Remy en gros pour salons. Clip-in, tape-in, weft & plus. Livraison gratuite UK, prix professionnels disponibles.',
    banner: { headline: 'Nouveau aux extensions de cheveux ?', subtext: 'Guide complet : chaque type d\'extension expliqué pour les salons UK & clients', guideUrl: '/blog/hair-extension-types-guide' },
  },
  diy: {
    name: 'Extensions DIY',
    description: 'Extensions de cheveux professionnelles pour application DIY à la maison. Clip-ins et tape-ins 100% Remy avec guides pas à pas. Transformation instantanée — sans rendez-vous salon.',
    seoTitle: 'Extensions DIY | Clip-In & Tape-In | D.S HAIR & BEAUTY',
    seoDescription: 'Extensions DIY premium pour usage domestique. Sets clip-in & tape-in de qualité salon en 50+ nuances. Livraison gratuite UK, retours 30 jours.',
    banner: { headline: 'DIY ou professionnel — quoi choisir pour votre client ?', subtext: 'Lisez notre guide : extensions trade vs DIY, coûts & résultats comparés', guideUrl: '/blog/trade-vs-diy-extensions' },
  },
  professional: {
    name: 'Extensions professionnelles',
    description: 'Extensions capillaires de qualité salon pour stylistes professionnels. Bonds kératine, nano anneaux, tape-in & weft — tout en 100% Remy. Comptes professionnels disponibles. Livraison express 3–5 jours UK.',
    seoTitle: 'Extensions professionnelles UK | Grossiste salon | D.S HAIR & BEAUTY',
    seoDescription: 'Extensions capillaires professionnelles pour salons & stylistes. Prix de gros, commandes en vrac, comptes professionnels. Support expert & livraison gratuite UK.',
    banner: { headline: 'Vous stockez des extensions professionnelles pour votre salon ?', subtext: 'Lisez notre guide : prix de gros, MOQ & construire une gamme rentable', guideUrl: '/blog/wholesale-hair-extensions-uk' },
  },
  'clip-in': {
    name: 'Extensions Clip-In',
    description: 'Extensions clip-in premium en 100% cheveux humains Remy. Clips invisibles et sans couture pour zéro dommage. 40+ couleurs, longueurs 16"–26". Fournisseur UK avec service de mise en couleur gratuit.',
    seoTitle: 'Extensions Clip-In UK | 100% Remy | D.S HAIR & BEAUTY',
    seoDescription: 'Extensions clip-in de qualité salon en 50+ nuances. 100% Remy, application facile à domicile. Livraison gratuite UK & retours 30 jours.',
    banner: { headline: 'Nouveau aux extensions clip-in ?', subtext: 'Guide complet : comment poser, fondre, assortir la couleur & entretenir les sets clip-in', guideUrl: '/blog/clip-in-extensions-guide' },
  },
  'tape-in': {
    name: 'Extensions Tape-In',
    description: 'Extensions tape-in sans couture pour un look naturel. Base PU ultrafine invisible, pré-collée pour pose rapide. 100% Remy. Parfait pour cheveux fins. Grossiste salon UK disponible.',
    seoTitle: 'Extensions Tape-In UK | Invisibles & sans couture | D.S HAIR & BEAUTY',
    seoDescription: 'Extensions tape ultrafines sans couture pour salons. Bonds résistants à la chaleur, application invisible. Prix de gros, livraison gratuite UK dès £50.',
    banner: { headline: 'Extensions tape-in — la méthode la plus populaire au UK', subtext: 'Guide complet : application invisible, aftercare & maximiser le revenu salon', guideUrl: '/blog/tape-in-extensions-guide' },
  },
  ponytails: {
    name: 'Queues de cheval',
    description: 'Transformation instantanée avec nos queues de cheval premium en cheveux humains. Styles wrap-around et clip-in. 100% Remy en 40+ couleurs. Livraison express 3–5 jours UK.',
    seoTitle: 'Extensions queue de cheval | Cheveux humains | D.S HAIR & BEAUTY',
    seoDescription: 'Queues de cheval en cheveux humains en 30+ styles. Longueur & volume instantanés, sans rendez-vous. 100% Remy, livraison gratuite UK.',
    banner: { headline: 'Queues de cheval — l\'arme secrète de revenu de votre salon', subtext: 'Notre guide : 5 façons de coiffer, assortir la couleur & upseller les queues de cheval', guideUrl: '/blog/ponytail-extensions-guide' },
  },
  weft: {
    name: 'Extensions Weft',
    description: 'Extensions weft hand-tied et machine en 100% Remy. Butterfly weft, Genius weft & super weft disponibles. Prix de gros professionnels pour salons UK.',
    seoTitle: 'Extensions Weft UK | Hand-tied & machine | D.S HAIR & BEAUTY',
    seoDescription: 'Extensions weft pour salons : hand-tied & machine. Cheveux Remy premium, tarifs vrac sans couture. Livraison gratuite UK pour commandes trade.',
    banner: { headline: 'Hand-tied ou machine weft — quoi choisir pour votre client ?', subtext: 'Guide complet : méthodes de pose, tarifs, cycle d\'entretien & astuces revenu salon', guideUrl: '/blog/weft-extensions-guide' },
  },
  'k-tip-extensions': {
    name: 'Extensions K-Tip',
    description: 'Extensions K-Tip professionnelles (bond kératine). 100% Remy en 50+ nuances dont balayage et rooted. Options 0,5g–1g pour cheveux fins à épais. Grossiste salon UK.',
    seoTitle: 'Extensions K-Tip UK | Bond kératine | D.S HAIR & BEAUTY',
    seoDescription: 'Extensions kératine K-Tip pour un look premium longue durée. Résistant à la chaleur, sans tape ni colle. Prix de gros professionnels salon.',
    banner: { headline: 'Extensions K-Tip — la solution premium longue durée', subtext: 'Guide complet : bonds kératine, entretien & comment facturer des prix premium', guideUrl: '/blog/k-tip-extensions-guide' },
  },
  'nano-extensions': {
    name: 'Extensions Nano',
    description: 'Extensions nano ring — la méthode la plus demandée au UK pour cheveux fins. Bonds ultrapetits 0,5g, 100% Remy. Moins de dommages, plus naturel. Prix professionnels disponibles.',
    seoTitle: 'Extensions nano ring UK | Cheveux fins | D.S HAIR & BEAUTY',
    seoDescription: 'Extensions nano ring — bonds ultra-invisibles pour cheveux fins. Sans chaleur, sans colle, 100% Remy. Grossiste salon disponible.',
    banner: { headline: 'Extensions nano ring — ultra-invisibles pour cheveux fins', subtext: 'Guide complet : bonds 3mm, pose sans chaleur & astuces spécialistes cheveux fins', guideUrl: '/blog/nano-ring-extensions-guide' },
  },
  'fringes-bangs': {
    name: 'Franges & Bangs',
    description: 'Transformez votre look instantanément avec nos franges et bangs premium. 100% Remy en coupes droites, choppy et wispy. 20+ couleurs. Fournisseur UK.',
    seoTitle: 'Franges & bangs extensions | Cheveux humains | D.S HAIR & BEAUTY',
    seoDescription: 'Franges et bangs extensions : couleur & volume instantanés. 100% Remy, facile à appliquer à domicile ou en salon.',
    banner: { headline: 'Franges extensions — le produit salon le plus sous-estimé', subtext: 'Guide complet : couleur encadrante, techniques de volume & recommandations client', guideUrl: '/blog/fringes-bangs-extensions-guide' },
  },
  'extension-care': {
    name: 'Soin Extensions',
    description: 'Shampoos sans sulfate, conditionneurs profonds, masques capillaires, brosses démêlantes et dissolvant tape — tout ce dont vos clients ont besoin pour garder leurs extensions salon-frais. Associez avec nos extensions pour un service complet.',
    seoTitle: 'Produits soin extensions UK | Sans sulfate | D.S HAIR & BEAUTY',
    seoDescription: 'Prolongez la durée de vie des extensions avec des produits de soin recommandés par les salons. Shampooing sans sulfate, conditioner, brosses & plus. Livraison gratuite UK dès £30.',
    banner: { headline: 'Faites durer les extensions plus longtemps pour vos clients', subtext: 'Guide aftercare complet : lavage, brossage & prolonger la vie des extensions', guideUrl: '/blog/hair-extension-aftercare-guide' },
  },
  'extension-tools': {
    name: 'Outils Extensions',
    description: 'Outils d\'installation professionnels pour salons : pinces tape-in, kits K-Tip/nano ring, brosses loop, pinces de sectionnement, bâtons de colle kératine et kits complets. Fait confiance par les stylistes UK.',
    seoTitle: 'Outils extensions cheveux UK | Kits salon & pinces | D.S HAIR & BEAUTY',
    seoDescription: 'Outils d\'installation professionnels pour extensions : pinces, micro anneaux, pinces chauffantes & kits de retrait. Qualité salon, livraison gratuite UK.',
    banner: { headline: 'Choisir la bonne méthode pour chaque client', subtext: 'Notre guide : toutes les méthodes d\'extension comparées côte à côte', guideUrl: '/blog/hair-extension-methods-comparison' },
  },
  'heated-styling': {
    name: 'Styling chauffant',
    description: 'Brosses chauffantes professionnelles, brosses paddle ioniques et outils de styling sans fil pour salons. Températures sûres pour extensions, chauffe rapide et résultats salon. Parfait pour restyler les extensions.',
    seoTitle: 'Brosses chauffantes professionnelles UK | Outils salon | D.S HAIR & BEAUTY',
    seoDescription: 'Brosses & outils de styling chauffants professionnels pour extensions. Protection thermique salon, compatible avec tous les types de cheveux Remy.',
  },
  storage: {
    name: 'Rangement',
    description: 'Sacs et étuis de rangement premium en velours et satin pour extensions. Gardez extensions et outils organisés, protégés et en parfait état entre les rendez-vous.',
    seoTitle: 'Sacs & étuis rangement extensions UK | Organiseur velours | D.S HAIR & BEAUTY',
    seoDescription: 'Sacs & organiseurs velours pour extensions. Gardez les extensions sans nœuds & protégées. Qualité premium, livraison gratuite UK.',
  },
  'butterfly-extensions': {
    name: 'Extensions Butterfly',
    description: 'Extensions butterfly weft premium — base ultrafine 0,5mm pour un fini sans couture et naturel. 100% Remy en 50+ nuances. Fournisseur grossiste leader au UK pour salons professionnels.',
    seoTitle: 'Butterfly Weft Extensions UK | Grossiste salon | D.S HAIR & BEAUTY',
    seoDescription: 'Butterfly weft extensions — le game-changer 0,5mm de l\'industrie. Finition sans couture pour salons. Prix de gros, livraison gratuite UK.',
    banner: { headline: 'Butterfly weft — le game-changer de l\'industrie', subtext: 'Guide complet : base ultrafine 0,5mm, finition sans couture & tarification salon', guideUrl: '/blog/butterfly-extensions-guide' },
  },
  'hair-toppers': {
    name: 'Hair Toppers',
    description: 'Hair toppers premium D.S HAIR pour cheveux clairsemés et couverture du sommet. 12 modèles disponibles dont MONO Top, Fine Welded Mono, French Lace, Silk Top et PU Base. 100% cheveux humains indiens/Remy, densité 120–130%, 8 couleurs salon naturelles. Longueurs disponibles 12"–18". Service couleur & longueur personnalisé disponible. Prix de gros pour salons UK & UE.',
    seoTitle: 'Hair Toppers UK | Solutions cheveux clairsemés | D.S HAIR & BEAUTY',
    seoDescription: 'Hair toppers pour cheveux clairsemés : options silk, mono & mesh base. Solution non chirurgique perte de cheveux. Grossiste salon & retail disponible.',
    banner: { headline: 'Vous ne savez pas quel topper convient à votre client ?', subtext: 'Guide complet : silk vs mono vs mesh base, étapes de pose & astuces salon', guideUrl: '/blog/hair-topper-guide' },
  },
}

const ar: CollectionContent = {
  all: {
    name: 'جميع المنتجات',
    description: 'تصفح أموثق مجموعة جملة لإكسسوارات الشعر في UK. 100% شعر ريمي طبيعي — K-Tip، Tape-In، Weft، Clip-In وNano. أسعار تجارية. 19 عامًا من الخبرة مع صالونات UK.',
    seoTitle: 'إكسسوارات شعر بالجملة UK | 100% ريمي طبيعي | D.S HAIR & BEAUTY',
    seoDescription: 'تسوق إكسسوارات شعر 100% ريمي طبيعي بالجملة للصالونات. كليب-إن، تيب-إن، ويفت والمزيد. توصيل مجاني UK، أسعار تجارية متاحة.',
    banner: { headline: 'جديد في إكسسوارات الشعر؟', subtext: 'دليل شامل: كل نوع من الإكسسوارات موضح لصالونات UK والعملاء', guideUrl: '/blog/hair-extension-types-guide' },
  },
  diy: {
    name: 'إكسسوارات DIY',
    description: 'إكسسوارات شعر احترافية للاستخدام المنزلي DIY. كليب-إن وتيب-إن 100% ريمي طبيعي مع أدلة خطوة بخطوة. تحول فوري — بدون موعد صالون.',
    seoTitle: 'إكسسوارات شعر DIY | كليب-إن وتيب-إن | D.S HAIR & BEAUTY',
    seoDescription: 'إكسسوارات شعر DIY ممتازة للاستخدام المنزلي. أطقم كليب-إن وتيب-إن بجودة الصالون في 50+ درجة لون. توصيل مجاني UK، إرجاع خلال 30 يومًا.',
    banner: { headline: 'DIY أم احترافي — أيًا يناسب عميلك؟', subtext: 'اقرأ دليلنا: إكسسوارات التجارة مقابل DIY، التكاليف والنتائج مقارنة', guideUrl: '/blog/trade-vs-diy-extensions' },
  },
  professional: {
    name: 'إكسسوارات احترافية',
    description: 'إكسسوارات شعر بجودة الصالون لمصففي الشعر المحترفين. كيراتين بوند، نانو رينغ، تيب-إن وويفت — كلها 100% ريمي طبيعي. حسابات تجارية متاحة. توصيل سريع 3–5 أيام UK.',
    seoTitle: 'إكسسوارات شعر احترافية UK | جملة الصالونات | D.S HAIR & BEAUTY',
    seoDescription: 'إكسسوارات شعر احترافية للصالونات والمصففين. أسعار الجملة، طلبات بالجملة، حسابات تجارية. دعم خبير وتوصيل مجاني UK.',
    banner: { headline: 'تخزن إكسسوارات احترافية لصالونك؟', subtext: 'اقرأ دليلنا: أسعار الجملة، الحد الأدنى للطلب وبناء مجموعة رابحة', guideUrl: '/blog/wholesale-hair-extensions-uk' },
  },
  'clip-in': {
    name: 'إكسسوارات كليب-إن',
    description: 'إكسسوارات كليب-إن ممتازة من 100% شعر ريمي طبيعي. مشابك خفية وبدون خياطة لعدم إلحاق الضرر. 40+ لونًا، أطوال 16"–26". مورد UK مع خدمة مطابقة اللون المجانية.',
    seoTitle: 'إكسسوارات كليب-إن UK | 100% ريمي طبيعي | D.S HAIR & BEAUTY',
    seoDescription: 'إكسسوارات كليب-إن بجودة الصالون في 50+ درجة لون. 100% ريمي طبيعي، سهل التركيب في المنزل. توصيل مجاني UK وإرجاع 30 يومًا.',
    banner: { headline: 'جديد في إكسسوارات كليب-إن؟', subtext: 'دليلنا الكامل: كيفية التركيب والدمج ومطابقة اللون والعناية بأطقم الكليب-إن', guideUrl: '/blog/clip-in-extensions-guide' },
  },
  'tape-in': {
    name: 'إكسسوارات تيب-إن',
    description: 'إكسسوارات تيب-إن بدون خياطة لمظهر طبيعي. قاعدة PU رفيعة للغاية غير مرئية، مسبقة اللصق لتركيب سريع. 100% ريمي طبيعي. مثالي للشعر الخفيف. جملة صالونات UK متاحة.',
    seoTitle: 'إكسسوارات تيب-إن UK | غير مرئية وبدون خياطة | D.S HAIR & BEAUTY',
    seoDescription: 'إكسسوارات تيب رفيعة وبدون خياطة للصالونات. لاصقات مقاومة للحرارة، تركيب غير مرئي. أسعار الجملة، توصيل مجاني UK من £50.',
    banner: { headline: 'تيب-إن — الطريقة الأكثر شيوعًا في UK', subtext: 'دليل شامل: التركيب غير المرئي، العناية اللاحقة وكيفية زيادة أرباح الصالون', guideUrl: '/blog/tape-in-extensions-guide' },
  },
  ponytails: {
    name: 'ذيل الحصان',
    description: 'تحول فوري مع إكسسوارات ذيل الحصان الممتازة من شعر طبيعي. أنماط ملفوفة وكليب-إن. 100% ريمي طبيعي بـ 40+ لون. توصيل سريع 3–5 أيام UK.',
    seoTitle: 'إكسسوارات ذيل الحصان | شعر طبيعي | D.S HAIR & BEAUTY',
    seoDescription: 'إكسسوارات ذيل حصان من شعر طبيعي بـ 30+ نمط. طول وحجم فوريان بدون موعد. 100% ريمي، توصيل مجاني UK.',
    banner: { headline: 'ذيل الحصان — سلاح الصالون السري للإيرادات', subtext: 'دليلنا: 5 طرق للتصفيف ومطابقة اللون وبيع ذيل الحصان بسعر أعلى', guideUrl: '/blog/ponytail-extensions-guide' },
  },
  weft: {
    name: 'إكسسوارات ويفت',
    description: 'إكسسوارات ويفت مصنوعة يدويًا وآليًا من 100% شعر ريمي طبيعي. باترفلاي ويفت، جينيوس ويفت وسوبر ويفت متاحة. أسعار جملة احترافية لصالونات UK.',
    seoTitle: 'إكسسوارات ويفت UK | مصنوعة يدويًا وآليًا | D.S HAIR & BEAUTY',
    seoDescription: 'إكسسوارات ويفت للصالونات: مصنوعة يدويًا وآليًا. شعر ريمي ممتاز، أسعار جملة بدون خياطة. توصيل مجاني UK للطلبات التجارية.',
    banner: { headline: 'اليدوية أم الآلية — أيها يناسب عميلك؟', subtext: 'دليل شامل: طرق التركيب والأسعار ودورة الصيانة ونصائح زيادة إيرادات الصالون', guideUrl: '/blog/weft-extensions-guide' },
  },
  'k-tip-extensions': {
    name: 'إكسسوارات K-Tip',
    description: 'إكسسوارات K-Tip احترافية (بوند كيراتين). 100% شعر ريمي طبيعي بـ 50+ درجة لون تشمل البالياج والروتد. خيارات 0.5غ–1غ للشعر الخفيف والكثيف. جملة صالونات UK.',
    seoTitle: 'إكسسوارات K-Tip UK | بوند كيراتين | D.S HAIR & BEAUTY',
    seoDescription: 'إكسسوارات كيراتين K-Tip لمظهر ممتاز طويل الأمد. مقاومة للحرارة، بدون تيب أو غراء. أسعار جملة احترافية للصالونات.',
    banner: { headline: 'K-Tip — الحل الممتاز طويل الأمد', subtext: 'دليل شامل: بوندات الكيراتين والعناية وكيفية تحصيل أسعار ممتازة', guideUrl: '/blog/k-tip-extensions-guide' },
  },
  'nano-extensions': {
    name: 'إكسسوارات نانو',
    description: 'إكسسوارات نانو رينغ — الطريقة الأكثر طلبًا في UK للشعر الخفيف. بوندات صغيرة جدًا 0.5غ، 100% شعر ريمي طبيعي. ضرر أقل، مظهر طبيعي. أسعار تجارية متاحة.',
    seoTitle: 'إكسسوارات نانو رينغ UK | للشعر الخفيف | D.S HAIR & BEAUTY',
    seoDescription: 'إكسسوارات نانو رينغ — بوندات غير مرئية للشعر الخفيف. بدون حرارة أو غراء، 100% ريمي. جملة الصالونات متاحة.',
    banner: { headline: 'نانو رينغ — غير مرئية للشعر الخفيف', subtext: 'دليل شامل: بوندات 3 ملم، تركيب بدون حرارة ونصائح اختصاصي الشعر الخفيف', guideUrl: '/blog/nano-ring-extensions-guide' },
  },
  'fringes-bangs': {
    name: 'غرة وبانج',
    description: 'حوّل مظهرك فورًا مع غرودينا وباجز الممتازة. 100% شعر ريمي طبيعي بقصات مستقيمة وشاملة وويسبي. 20+ لونًا. مورد UK.',
    seoTitle: 'غرودينا وباجز | شعر طبيعي | D.S HAIR & BEAUTY',
    seoDescription: 'غرودينا وباجز: لون وحجم فوريان يُحيطان بالوجه. 100% ريمي طبيعي، سهل التركيب في المنزل أو الصالون.',
    banner: { headline: 'غرودينا — المنتج الأكثرunderestimate في الصالون', subtext: 'دليل شامل: لون يُحيط بالوجه، تقنيات الحجم وتوصيات العملاء', guideUrl: '/blog/fringes-bangs-extensions-guide' },
  },
  'extension-care': {
    name: 'عناية الإكسسوارات',
    description: 'شامبو خالٍ من الكبريتات، بلسم عميق، ماسكات شعر، فرش فك التشابك ومزيل التيب — كل ما يحتاجه عملاؤك للحفاظ على إكسسواراتهم كما لو كانت جديدة. اجمعها مع إكسسواراتنا للحصول على خدمة كاملة.',
    seoTitle: 'منتجات عناية الإكسسوارات UK | خالية من الكبريتات | D.S HAIR & BEAUTY',
    seoDescription: 'مدّد عمر الإكسسوارات بمنتجات عناية موصى بها من الصالونات. شامبو خالٍ من الكبريتات، بلسم، فرش والمزيد. توصيل مجاني UK من £30.',
    banner: { headline: 'اجعل الإكسسوارات تدوم أطول لعملائك', subtext: 'دليل العناية الشامل: الغسل والتمشيط وإطالة عمر الإكسسوارات', guideUrl: '/blog/hair-extension-aftercare-guide' },
  },
  'extension-tools': {
    name: 'أدوات الإكسسوارات',
    description: 'أدوات تركيب احترافية للصالونات: ملقط تيب-إن، مجموعات K-Tip/نانو رينغ، فرش loop، مشابك تقسيم الشعر، أعواد غراء الكيراتين ومجموعات كاملة للمبتدئين. موثوقة من مصففي UK.',
    seoTitle: 'أدوات إكسسوارات الشعر UK | مجموعات صالون وملقط | D.S HAIR & BEAUTY',
    seoDescription: 'أدوات تركيب إكسسوارات احترافية: ملقط، حلقات صغيرة، ملاقط ساخنة ومجموعات إزالة. جودة الصالون، توصيل مجاني UK.',
    banner: { headline: 'اختيار الطريقة المناسبة لكل عميل', subtext: 'دليلنا: كل طرق الإكسسوارات مقارنة جنبًا إلى جنب', guideUrl: '/blog/hair-extension-methods-comparison' },
  },
  'heated-styling': {
    name: 'أدوات التصفيف بالحرارة',
    description: 'فرش ساخنة احترافية، فرش paddle أيونية وأدوات تصفيف لاسلكية للصالونات. درجات حرارة آمنة للإكسسوارات، تسخين سريع ونتائج بجودة الصالون. مثالية لإعادة تصفيف الإكسسوارات.',
    seoTitle: 'فرش ساخنة احترافية UK | أدوات تصفيف الصالون | D.S HAIR & BEAUTY',
    seoDescription: 'فرش وأدوات تصفيف بالحرارة احترافية للإكسسوارات. حماية حرارية بجودة الصالون، متوافقة مع جميع أنواع شعر الريمي.',
  },
  storage: {
    name: 'التخزين',
    description: 'أكياس وعلب تخزين ممتازة من المخمل والساتان للإكسسوارات. حافظ على تنظيم الإكسسوارات والأدوات وحمايتها في حالة مثالية بين المواعيد.',
    seoTitle: 'أكياب وعلب تخزين الإكسسوارات UK | منظم مخملي | D.S HAIR & BEAUTY',
    seoDescription: 'أكياس ومنظمات مخملية للإكسسوارات. حافظ على الإكسسوارات خالية من العقد ومحمية. جودة ممتازة، توصيل مجاني UK.',
  },
  'butterfly-extensions': {
    name: 'إكسسوارات باترفلاي',
    description: 'إكسسوارات باترفلاي ويفت ممتازة — قاعدة فائقة الرقة 0.5 ملم لإنهاء طبيعي بدون خياطة. 100% شعر ريمي طبيعي بـ 50+ درجة لون. مورد الجملة الرائد في UK للصالونات الاحترافية.',
    seoTitle: 'باترفلاي ويفت UK | جملة الصالونات | D.S HAIR & BEAUTY',
    seoDescription: 'باترفلاي ويفت — ثورة 0.5 ملم في الصناعة. إنهاء بدون خياطة للصالونات. أسعار الجملة، توصيل مجاني UK.',
    banner: { headline: 'باترفلاي ويفت — ثورة الصناعة', subtext: 'دليل شامل: قاعدة فائقة الرقة 0.5 ملم، إنهاء بدون خياطة وتسعير الصالون', guideUrl: '/blog/butterfly-extensions-guide' },
  },
  'hair-toppers': {
    name: 'توبير الشعر',
    description: 'توبير شعر D.S HAIR الممتاز للشعر الخفيف وتغطية قمة الرأس. 12 موديل متاح بما في ذلك MONO Top، Fine Welded Mono، French Lace، Silk Top وPU Base. 100% شعر طبيعي هندي/ريمي، كثافة 120–130%，8 ألوان طبيعية للصالون. أطوال متاحة 12"–18". خدمة تخصيص اللون والطول متاحة. أسعار الجملة لصالونات UK & EU.',
    seoTitle: 'توبير الشعر UK | حلول الشعر الخفيف | D.S HAIR & BEAUTY',
    seoDescription: 'توبير شعر للشعر الخفيف: خيارات silk وmono وmesh base. حل غير جراحي لتساقط الشعر. جملة الصالونات وبيع بالتجزئة متاح.',
    banner: { headline: 'غير متأكد أي توبير يناسب عميلك؟', subtext: 'دليل شامل: silk مقابل mono مقابل mesh base، خطوات التركيب ونصائح الصالون', guideUrl: '/blog/hair-topper-guide' },
  },
}

const svLoc: CollectionContent = {
  all: {
    name: 'Alla produkter',
    description: 'Upptäck UK:s mest pålitliga grossistkollektion av hårförlängningar. 100% Remy mänskligt hår — K-Tip, Tape-In, Weft, Clip-In & Nano. Handelspriser. 19 års erfarenhet av UK-salonger.',
    seoTitle: 'Hårförlängningar grossist UK | 100% Remy | D.S HAIR & BEAUTY',
    seoDescription: 'Köp 100% Remy mänskliga hårförlängningar grossist för salonger. Clip-in, tape-in, weft & mer. Gratis UK-leverans, handelspriser tillgängliga.',
    banner: { headline: 'Ny på hårförlängningar?', subtext: 'Komplett guide: alla förlängningstyper förklarade för UK-salonger & kunder', guideUrl: '/blog/hair-extension-types-guide' },
  },
  diy: {
    name: 'DIY Extensions',
    description: 'Professionella hårförlängningar för hemmabruk. Clip-ins och tape-ins i 100% Remy-hår med steg-för-steg-guider. Omedelbar förvandling — ingen salongstid nödvändig.',
    seoTitle: 'DIY hårförlängningar | Clip-In & Tape-In | D.S HAIR & BEAUTY',
    seoDescription: 'Premium DIY-hårförlängningar för hemmabruk. Clip-in & tape-in set i salongskvalitet i 50+ nyanser. Gratis UK-leverans, 30 dagars retur.',
    banner: { headline: 'DIY eller professionellt — vad passar din kund?', subtext: 'Läs vår guide: trade vs DIY-förlängningar, kostnader & resultat jämfört', guideUrl: '/blog/trade-vs-diy-extensions' },
  },
  professional: {
    name: 'Professionella extensions',
    description: 'Hårförlängningar i salongskvalitet för professionella stylister. Keratinbonds, nano-ringar, tape-in & weft — allt i 100% Remy. Handelskonton tillgängliga. Expressleverans 3–5 dagar UK.',
    seoTitle: 'Professionella hårförlängningar UK | Salongsgrossist | D.S HAIR & BEAUTY',
    seoDescription: 'Professionella hårförlängningar för salonger & stylister. Grossistpriser, bulkordrar, handelskonton. Expertsupport & gratis UK-leverans.',
    banner: { headline: 'Lagerför professionella extensions för din salong?', subtext: 'Läs vår guide: grossistpriser, MOQ & bygga ett lönsamt sortiment', guideUrl: '/blog/wholesale-hair-extensions-uk' },
  },
  'clip-in': {
    name: 'Clip-In extensions',
    description: 'Premium clip-in förlängningar i 100% Remy mänskligt hår. Osynliga sömlösa clips utan skador. 40+ färger, längder 16"–26". UK-leverantör med gratis färgmatchning.',
    seoTitle: 'Clip-In hårförlängningar UK | 100% Remy | D.S HAIR & BEAUTY',
    seoDescription: 'Clip-in förlängningar i salongskvalitet i 50+ nyanser. 100% Remy, enkel hemanvändning. Gratis UK-leverans & 30 dagars retur.',
    banner: { headline: 'Ny på clip-in extensions?', subtext: 'Komplett guide: hur man sätter i, blandar, matchar färg & sköter clip-in set', guideUrl: '/blog/clip-in-extensions-guide' },
  },
  'tape-in': {
    name: 'Tape-In extensions',
    description: 'Sömlösa tape-in förlängningar för naturligt utseende. Ultratunn osynlig PU-bas, förbesiktad för snabb applicering. 100% Remy. Perfekt för fint hår. UK-salongsgrossist tillgänglig.',
    seoTitle: 'Tape-In hårförlängningar UK | Osynliga & sömlösa | D.S HAIR & BEAUTY',
    seoDescription: 'Ultratunna sömlösa tape-förlängningar för salonger. Värmetåliga bonds, osynlig applicering. Grossistpriser, gratis UK-leverans över £50.',
    banner: { headline: 'Tape-in extensions — UK:s populäraste metod', subtext: 'Komplett guide: osynlig applicering, aftercare & maximera salongsintäkter', guideUrl: '/blog/tape-in-extensions-guide' },
  },
  ponytails: {
    name: 'Hästsvansar',
    description: 'Omedelbar förvandling med våra premium hästsvansförlängningar i mänskligt hår. Wrap-around och clip-in-stilar. 100% Remy i 40+ färger. Expressleverans 3–5 dagar UK.',
    seoTitle: 'Hästsvansförlängningar | Mänskligt hår | D.S HAIR & BEAUTY',
    seoDescription: 'Hästsvansar i mänskligt hår i 30+ stilar. Omedelbar längd & volym, ingen tidbokning. 100% Remy, gratis UK-leverans.',
    banner: { headline: 'Hästsvansar — din salongs hemliga intäktsvapen', subtext: 'Vår guide: 5 sätt att styla, matcha färg & sälja hästsvansar', guideUrl: '/blog/ponytail-extensions-guide' },
  },
  weft: {
    name: 'Weft extensions',
    description: 'Handbundna och maskinvävda weft-förlängningar i 100% Remy. Butterfly weft, Genius weft & super weft tillgängliga. Professionella grossistpriser för UK-salonger.',
    seoTitle: 'Weft hårförlängningar UK | Handbundna & maskinella | D.S HAIR & BEAUTY',
    seoDescription: 'Weft förlängningar för salonger: handbundna & maskinella. Premium Remy-hår, sömlösa bulkpriser. Gratis UK-leverans för handelsbeställningar.',
    banner: { headline: 'Handbundet eller maskinellt — vad passar din kund?', subtext: 'Komplett guide: appliceringsmetoder, priser, underhållscykel & intäktstips', guideUrl: '/blog/weft-extensions-guide' },
  },
  'k-tip-extensions': {
    name: 'K-Tip extensions',
    description: 'Professionella K-Tip förlängningar (keratinbonds). 100% Remy i 50+ nyanser inklusive balayage och rooted. 0,5g–1g bond-alternativ för fint till tjockt hår. UK-salongsgrossist.',
    seoTitle: 'K-Tip hårförlängningar UK | Keratinbonds | D.S HAIR & BEAUTY',
    seoDescription: 'K-Tip keratinförlängningar för ett premium långvarigt utseende. Värmetåliga, inget tape eller lim. Professionella salongsgrossistpriser.',
    banner: { headline: 'K-Tip extensions — den premium långsiktiga lösningen', subtext: 'Komplett guide: keratinbonds, underhåll & hur man tar premiumpriser', guideUrl: '/blog/k-tip-extensions-guide' },
  },
  'nano-extensions': {
    name: 'Nano extensions',
    description: 'Nano ring förlängningar — UK:s mest efterfrågade metod för fint hår. Ultrasmå 0,5g bonds, 100% Remy. Mindre skador, mer naturligt. Handelspriser tillgängliga.',
    seoTitle: 'Nano ring hårförlängningar UK | Fint hår | D.S HAIR & BEAUTY',
    seoDescription: 'Nano ring förlängningar — ultra-osynliga bonds för fint hår. Ingen värme, inget lim, 100% Remy. Salongsgrossist tillgänglig.',
    banner: { headline: 'Nano ring extensions — ultra-osynliga för fint hår', subtext: 'Komplett guide: 3mm bonds, applicering utan värme & specialisttips för fint hår', guideUrl: '/blog/nano-ring-extensions-guide' },
  },
  'fringes-bangs': {
    name: 'Lugg & bangs',
    description: 'Förvandla din look ögonblickligen med våra premium lugg- och bangförlängningar. 100% Remy i raka, choppy och wispy stilar. 20+ färger. UK-leverantör.',
    seoTitle: 'Lugg & bangs extensions | Mänskligt hår | D.S HAIR & BEAUTY',
    seoDescription: 'Lugg- och bangförlängningar: omedelbar ansiktsramande färg & volym. 100% Remy, enkla att applicera hemma eller i salong.',
    banner: { headline: 'Lugg extensions — den mest underskattade salongsprodukten', subtext: 'Komplett guide: ansiktsramande färg, volymtekniker & kundrekommendationer', guideUrl: '/blog/fringes-bangs-extensions-guide' },
  },
  'extension-care': {
    name: 'Extension Care',
    description: 'Sulfatfria schampon, djupgående balsam, hårinpackningar, utredningsborstar och tape-remover — allt dina kunder behöver för att hålla sina extensions salongsfärska. Kombinera med våra förlängningar för komplett service.',
    seoTitle: 'Extension care produkter UK | Sulfatfria | D.S HAIR & BEAUTY',
    seoDescription: 'Förläng livslängden på extensions med salongsrekommenderade vårdprodukter. Sulfatfritt schampo, balsam, borstar & mer. Gratis UK-leverans över £30.',
    banner: { headline: 'Få extensions att hålla längre för dina kunder', subtext: 'Komplett aftercare-guide: tvätt, borstning & förlänga livslängden', guideUrl: '/blog/hair-extension-aftercare-guide' },
  },
  'extension-tools': {
    name: 'Extension tools',
    description: 'Professionella installationsverktyg för salonger: tape-in tänger, K-Tip/nano ring kit, loop-borstar, sektionsklämmor, keratinlimstavar och kompletta startersatser. Betrodda av UK-stylister.',
    seoTitle: 'Hårförlängningsverktyg UK | Salongskit & tänger | D.S HAIR & BEAUTY',
    seoDescription: 'Professionella installationsverktyg för hårförlängningar: tänger, micro rings, hettänger & borttagningskit. Salongskvalitet, gratis UK-leverans.',
    banner: { headline: 'Välja rätt metod för varje kund', subtext: 'Vår guide: alla förlängningsmetoder jämförda sida vid sida', guideUrl: '/blog/hair-extension-methods-comparison' },
  },
  'heated-styling': {
    name: 'Värme styling',
    description: 'Professionella varma borstar, joniska paddle-borstar och trådlösa stylingverktyg för salonger. Extension-säkra temperaturer, snabb uppvärmning och salongsresultat. Perfekt för att restyla förlängningar.',
    seoTitle: 'Professionella varma borstar UK | Salong stylingverktyg | D.S HAIR & BEAUTY',
    seoDescription: 'Professionella uppvärmda stylingborstar & verktyg för förlängningar. Värmeskydd i salongskvalitet, kompatibelt med alla Remy-hårtyper.',
  },
  storage: {
    name: 'Förvaring',
    description: 'Premium sammet- och satin-förvaringspåsar och -väskor för förlängningar. Håll förlängningar och verktyg organiserade, skyddade och i perfekt skick mellan bokningar.',
    seoTitle: 'Förvaringspåsar förlängningar UK | Sammet organizer | D.S HAIR & BEAUTY',
    seoDescription: 'Förvaringsväskor & sammetorganizers för förlängningar. Håll extensions fria från tovor & skyddade. Premiumkvalitet, gratis UK-leverans.',
  },
  'butterfly-extensions': {
    name: 'Butterfly extensions',
    description: 'Premium butterfly weft förlängningar — ultratunn 0,5mm bas för ett sömlöst, naturligt resultat. 100% Remy i 50+ nyanser. Ledande UK-grossist för professionella salonger.',
    seoTitle: 'Butterfly weft extensions UK | Salongsgrossist | D.S HAIR & BEAUTY',
    seoDescription: 'Butterfly weft extensions — branschens 0,5mm game-changer. Sömlöst finish för salonger. Grossistpriser, gratis UK-leverans.',
    banner: { headline: 'Butterfly weft — branschens game-changer', subtext: 'Komplett guide: 0,5mm ultratunn bas, sömlöst finish & salongsprissättning', guideUrl: '/blog/butterfly-extensions-guide' },
  },
  'hair-toppers': {
    name: 'Hair toppers',
    description: 'D.S HAIR premium hair toppers för tunna hår och täckning av hjässan. 12 modeller tillgängliga inklusive MONO Top, Fine Welded Mono, French Lace, Silk Top och PU Base. 100% indiskt/Remy mänskligt hår, 120–130% densitet, 8 naturliga salongsnyanser. Tillgängliga längder 12"–18". Anpassad färg- och längdservice tillgänglig. Grossistpriser för UK & EU-salonger.',
    seoTitle: 'Hair toppers UK | Lösningar för tunna hår | D.S HAIR & BEAUTY',
    seoDescription: 'Hair toppers för tunna hår: silk, mono & mesh base-alternativ. Icke-kirurgisk håravfallslösning. Salongsgrossist & retail tillgängligt.',
    banner: { headline: 'Osäker på vilken topper som passar din kund?', subtext: 'Komplett guide: silk vs mono vs mesh base, appliceringssteg & salongstips', guideUrl: '/blog/hair-topper-guide' },
  },
}

const plLoc: CollectionContent = {
  all: {
    name: 'Wszystkie produkty',
    description: 'Odkryj najbardziej zaufaną hurtową kolekcję przedłużeń włosów w UK. 100% ludzkich włosów Remy — K-Tip, Tape-In, Weft, Clip-In i Nano. Ceny handlowe. 19 lat doświadczenia z salonami UK.',
    seoTitle: 'Przedłużanie włosów hurt UK | 100% Remy | D.S HAIR & BEAUTY',
    seoDescription: 'Kupuj 100% Remy ludzkie przedłużenia włosów hurtowo dla salonów. Clip-in, tape-in, weft i więcej. Darmowa dostawa UK, ceny handlowe dostępne.',
    banner: { headline: 'Nowość w przedłużaniu włosów?', subtext: 'Kompletny przewodnik: wszystkie rodzaje przedłużeń wyjaśnione dla salonów UK i klientów', guideUrl: '/blog/hair-extension-types-guide' },
  },
  diy: {
    name: 'Extensions DIY',
    description: 'Profesjonalne przedłużenia włosów do samodzielnej aplikacji w domu. Clip-iny i tape-iny 100% Remy z przewodnikami krok po kroku. Natychmiastowa transformacja — bez wizyty w salonie.',
    seoTitle: 'DIY przedłużenia włosów | Clip-In & Tape-In | D.S HAIR & BEAUTY',
    seoDescription: 'Premium DIY przedłużenia włosów do użytku domowego. Zestawy clip-in i tape-in w jakości salonowej w 50+ odcieniach. Darmowa dostawa UK, zwrot do 30 dni.',
    banner: { headline: 'DIY czy profesjonalne — co pasuje Twojemu klientowi?', subtext: 'Przeczytaj nasz przewodnik: przedłużenia trade vs DIY, koszty i wyniki w porównaniu', guideUrl: '/blog/trade-vs-diy-extensions' },
  },
  professional: {
    name: 'Przedłużenia profesjonalne',
    description: 'Przedłużenia włosów w jakości salonowej dla profesjonalnych stylistów. Keratynowe końcówki, nano ringi, tape-in i weft — wszystko w 100% Remy. Konta handlowe dostępne. Ekspresowa dostawa 3–5 dni UK.',
    seoTitle: 'Profesjonalne przedłużenia włosów UK | Hurt salonów | D.S HAIR & BEAUTY',
    seoDescription: 'Profesjonalne przedłużenia włosów dla salonów i stylistów. Ceny hurtowe, zamówienia hurtowe, konta handlowe. Wsparcie ekspertów i darmowa dostawa UK.',
    banner: { headline: 'Uzupełniasz profesjonalne przedłużenia w salonie?', subtext: 'Przeczytaj nasz przewodnik: ceny hurtowe, MOQ i budowanie opłacalnej oferty', guideUrl: '/blog/wholesale-hair-extensions-uk' },
  },
  'clip-in': {
    name: 'Przedłużenia Clip-In',
    description: 'Premium clip-iny w 100% ludzkich włosach Remy. Niewidoczne, bezszwowe klipsy bez uszkadzania. 40+ kolorów, długości 16"–26". Dostawca UK z bezpłatnym dopasowaniem koloru.',
    seoTitle: 'Przedłużenia Clip-In UK | 100% Remy | D.S HAIR & BEAUTY',
    seoDescription: 'Clip-iny w jakości salonowej w 50+ odcieniach. 100% Remy, łatwa aplikacja w domu. Darmowa dostawa UK i zwrot 30 dni.',
    banner: { headline: 'Nowość w clip-inach?', subtext: 'Kompletny przewodnik: jak zakładać, blendować, dobierać kolor i pielęgnować zestawy clip-in', guideUrl: '/blog/clip-in-extensions-guide' },
  },
  'tape-in': {
    name: 'Przedłużenia Tape-In',
    description: 'Bezszwowe przedłużenia tape-in dla naturalnego wyglądu. Ultracienka niewidoczna baza PU, wstępnie przyklejona do szybkiej aplikacji. 100% Remy. Idealne dla cienkich włosów. Hurt dla salonów UK dostępny.',
    seoTitle: 'Przedłużenia Tape-In UK | Niewidoczne i bezszwowe | D.S HAIR & BEAUTY',
    seoDescription: 'Ultracienkie bezszwowe przedłużenia tape dla salonów. Odporne na ciepło taśmy, niewidoczna aplikacja. Ceny hurtowe, darmowa dostawa UK od £50.',
    banner: { headline: 'Tape-in — najpopularniejsza metoda w UK', subtext: 'Kompletny przewodnik: niewidoczna aplikacja, pielęgnacja i maksymalizacja przychodów salonu', guideUrl: '/blog/tape-in-extensions-guide' },
  },
  ponytails: {
    name: 'Kucyki',
    description: 'Natychmiastowa transformacja z naszymi premium kucykami z ludzkich włosów. Style wrap-around i clip-in. 100% Remy w 40+ kolorach. Ekspresowa dostawa 3–5 dni UK.',
    seoTitle: 'Przedłużenia kucyka | Ludzkie włosy | D.S HAIR & BEAUTY',
    seoDescription: 'Kucyki z ludzkich włosów w 30+ stylach. Natychmiastowa długość i objętość, bez wizyty. 100% Remy, darmowa dostawa UK.',
    banner: { headline: 'Kucyki — tajna broń przychodowa Twojego salonu', subtext: 'Nasz przewodnik: 5 sposobów stylizacji, dopasowania koloru i sprzedaży kucyków', guideUrl: '/blog/ponytail-extensions-guide' },
  },
  weft: {
    name: 'Przedłużenia Weft',
    description: 'Przedłużenia weft ręcznie wiązane i maszynowe w 100% Remy. Dostępne Butterfly weft, Genius weft i super weft. Profesjonalne ceny hurtowe dla salonów UK.',
    seoTitle: 'Przedłużenia Weft UK | Ręcznie wiązane i maszynowe | D.S HAIR & BEAUTY',
    seoDescription: 'Przedłużenia weft dla salonów: ręcznie wiązane i maszynowe. Premium włosy Remy, bezszwowe ceny hurtowe. Darmowa dostawa UK dla zamówień handlowych.',
    banner: { headline: 'Ręcznie wiązane czy maszynowe — co pasuje klientowi?', subtext: 'Kompletny przewodnik: metody aplikacji, ceny, cykl konserwacji i wskazówki dotyczące przychodów salonu', guideUrl: '/blog/weft-extensions-guide' },
  },
  'k-tip-extensions': {
    name: 'Przedłużenia K-Tip',
    description: 'Profesjonalne przedłużenia K-Tip (keratynowe końcówki). 100% Remy w 50+ odcieniach, w tym balayage i rooted. Opcje 0,5g–1g dla cienkich i gęstych włosów. Hurt dla salonów UK.',
    seoTitle: 'Przedłużenia K-Tip UK | Keratyna | D.S HAIR & BEAUTY',
    seoDescription: 'Keratynowe przedłużenia K-Tip dla premium długotrwałego wyglądu. Odporne na ciepło, bez taśmy ani kleju. Profesjonalne ceny hurtowe dla salonów.',
    banner: { headline: 'K-Tip — premium rozwiązanie długoterminowe', subtext: 'Kompletny przewodnik: keratynowe końcówki, konserwacja i jak pobierać ceny premium', guideUrl: '/blog/k-tip-extensions-guide' },
  },
  'nano-extensions': {
    name: 'Przedłużenia Nano',
    description: 'Przedłużenia nano ring — najczęściej wybierana metoda w UK dla cienkich włosów. Ultramałe końcówki 0,5g, 100% Remy. Mniejsze uszkodzenia, bardziej naturalny wygląd. Ceny handlowe dostępne.',
    seoTitle: 'Przedłużenia Nano Ring UK | Cienkie włosy | D.S HAIR & BEAUTY',
    seoDescription: 'Nano ring extensions — ultra-niewidoczne końcówki dla cienkich włosów. Bez ciepła, bez kleju, 100% Remy. Hurt salonów dostępny.',
    banner: { headline: 'Nano ring — ultra-niewidoczne dla cienkich włosów', subtext: 'Kompletny przewodnik: końcówki 3mm, aplikacja bez ciepła i wskazówki specjalisty od cienkich włosów', guideUrl: '/blog/nano-ring-extensions-guide' },
  },
  'fringes-bangs': {
    name: 'Grzywki & Bangs',
    description: 'Natychmiastowo odmień swój wygląd dzięki naszym premium grzywkom i bangs. 100% Remy w prostych, choppy i wispy stylach. 20+ kolorów. Dostawca UK.',
    seoTitle: 'Grzywki i bangs extensions | Ludzkie włosy | D.S HAIR & BEAUTY',
    seoDescription: 'Grzywki i bangs extensions: natychmiastowy kolor i objętość okalająca twarz. 100% Remy, łatwe do założenia w domu lub salonie.',
    banner: { headline: 'Grzywki — najbardziej niedoceniany produkt salonowy', subtext: 'Kompletny przewodnik: kolor okalający twarz, techniki objętości i rekomendacje klientów', guideUrl: '/blog/fringes-bangs-extensions-guide' },
  },
  'extension-care': {
    name: 'Pielęgnacja Extensions',
    description: 'Szampony bez siarczanów, głębokie odżywki, maski do włosów, szczotki do rozczesywania i remover taśm — wszystko, czego Twoi klienci potrzebują, aby utrzymać extensions w salonowej świeżości. Połącz z naszymi przedłużeniami dla kompletnej usługi.',
    seoTitle: 'Produkty do pielęgnacji extensions UK | Bez siarczanów | D.S HAIR & BEAUTY',
    seoDescription: 'Wydłuż żywotność extensions dzięki produktom pielęgnacyjnym rekomendowanym przez salony. Szampon bez siarczanów, odżywka, szczotki i więcej. Darmowa dostawa UK od £30.',
    banner: { headline: 'Spraw, by extensions dłużej wyglądały pięknie u klientów', subtext: 'Kompletny przewodnik pielęgnacji: mycie, szczotkowanie i wydłużanie żywotności extensions', guideUrl: '/blog/hair-extension-aftercare-guide' },
  },
  'extension-tools': {
    name: 'Narzędzia do Extensions',
    description: 'Profesjonalne narzędzia montażowe dla salonów: szczypce do tape-in, zestawy K-Tip/nano ring, szczotki loop, klipsy do sekcjonowania, pałeczki kleju keratynowego i kompletne zestawy startowe. Zaufane przez stylistów UK.',
    seoTitle: 'Narzędzia do przedłużania włosów UK | Zestawy salonowe i szczypce | D.S HAIR & BEAUTY',
    seoDescription: 'Profesjonalne narzędzia montażowe do przedłużania włosów: szczypce, micro ringi, cążki grzewcze i zestawy do usuwania. Jakość salonowa, darmowa dostawa UK.',
    banner: { headline: 'Wybór odpowiedniej metody dla każdego klienta', subtext: 'Nasz przewodnik: wszystkie metody extensions porównane obok siebie', guideUrl: '/blog/hair-extension-methods-comparison' },
  },
  'heated-styling': {
    name: 'Stylizacja cieplna',
    description: 'Profesjonalne szczotki grzewcze, jonowe szczotki paddle i bezprzewodowe narzędzia stylizacyjne dla salonów. Bezpieczne temperatury dla extensions, szybkie nagrzewanie i efekty w jakości salonowej. Idealne do restylowania przedłużeń.',
    seoTitle: 'Profesjonalne szczotki grzewcze UK | Narzędzia salonowe | D.S HAIR & BEAUTY',
    seoDescription: 'Profesjonalne podgrzewane szczotki i narzędzia stylizacyjne do extensions. Ochrona cieplna w jakości salonowej, kompatybilne ze wszystkimi typami włosów Remy.',
  },
  storage: {
    name: 'Przechowywanie',
    description: 'Premium aksamitne i satynowe torby oraz etui do przechowywania extensions. Trzymaj przedłużenia i narzędzia uporządkowane, chronione i w idealnym stanie między wizytami.',
    seoTitle: 'Torby i etui na extensions UK | Aksamitny organizer | D.S HAIR & BEAUTY',
    seoDescription: 'Torby i aksamitne organizery na extensions. Trzymaj extensions bez plątaniny i chronione. Premium jakość, darmowa dostawa UK.',
  },
  'butterfly-extensions': {
    name: 'Przedłużenia Butterfly',
    description: 'Premium butterfly weft — ultracienka baza 0,5 mm dla bezszwowego, naturalnego wykończenia. 100% Remy w 50+ odcieniach. Wiodący hurtownik UK dla profesjonalnych salonów.',
    seoTitle: 'Butterfly Weft Extensions UK | Hurt salonów | D.S HAIR & BEAUTY',
    seoDescription: 'Butterfly weft extensions — rewolucja 0,5 mm w branży. Bezszwowe wykończenie dla salonów. Ceny hurtowe, darmowa dostawa UK.',
    banner: { headline: 'Butterfly weft — rewolucja w branży', subtext: 'Kompletny przewodnik: ultracienka baza 0,5 mm, bezszwowe wykończenie i wycena salonowa', guideUrl: '/blog/butterfly-extensions-guide' },
  },
  'hair-toppers': {
    name: 'Toppersy',
    description: 'Premium toppersy D.S HAIR dla cienkich włosów i zakrywania czubka. 12 modeli dostępnych, w tym MONO Top, Fine Welded Mono, French Lace, Silk Top i PU Base. 100% indyjskie/ludzkie włosy Remy, gęstość 120–130%, 8 naturalnych kolorów salonowych. Dostępne długości 12"–18". Możliwość spersonalizowanego koloru i długości. Ceny hurtowe dla salonów UK i UE.',
    seoTitle: 'Toppersy UK | Rozwiązania dla cienkich włosów | D.S HAIR & BEAUTY',
    seoDescription: 'Toppersy dla cienkich włosów: opcje silk, mono i mesh base. Niechirurgiczne rozwiązanie na wypadanie włosów. Hurt salonów i detal dostępny.',
    banner: { headline: 'Nie wiesz, który topper pasuje klientowi?', subtext: 'Kompletny przewodnik: silk vs mono vs mesh base, kroki aplikacji i wskazówki salonowe', guideUrl: '/blog/hair-topper-guide' },
  },
}

export const localizedCollections: Record<Locale, CollectionContent> = {
  en,
  de,
  fr,
  ar,
  sv: svLoc,
  pl: plLoc,
}

export function getLocalizedCollection(slug: string, locale: Locale): LocalizedCollection | undefined {
  const map = localizedCollections[locale] ?? localizedCollections.en
  return map[slug as CollectionSlug] ?? undefined
}

export function getCollectionName(slug: string, locale: Locale): string {
  return getLocalizedCollection(slug, locale)?.name ?? slug
}

export function getCollectionDescription(slug: string, locale: Locale): string {
  return getLocalizedCollection(slug, locale)?.description ?? ''
}
