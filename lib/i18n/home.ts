import type { Locale } from './config'

export type HomeContent = {
  metaTitle: string
  metaDescription: string
  hero: {
    badge: string
    title1: string
    title2: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    trust1: string
    trust2: string
    trust3: string
  }
  brandValues: {
    title: string
    description: string
  }[]
  salonTrust: {
    eyebrow: string
    title: string
    subtitle: string
    images: { alt: string; caption: string }[]
    stats: { num: string; label: string }[]
    ctaText: string
    ctaButton: string
  }
  categoryGrid: {
    title: string
    subtitle: string
    categories: {
      title: string
      description: string
      href: string
      image: string
      featured: boolean
    }[]
  }
  featuredProducts: {
    title: string
    subtitle: string
    tradePrice: string
    coloursAvailable: string
    viewAll: string
    products: {
      id: string
      name: string
      price: number
      image: string
      badge: string
      rating: number
      reviews: number
      colors: number
      slug: string
      href: string
    }[]
  }
  dualPath: {
    title: string
    subtitle: string
    diy: {
      eyebrow: string
      title: string
      description: string
      checks: string[]
      cta: string
    }
    pro: {
      badge: string
      eyebrow: string
      title: string
      description: string
      checks: string[]
      ctaPrimary: string
      ctaSecondary: string
    }
    bottom: {
      title: string
      description: string
      cta: string
    }
  }
  services: {
    title: string
    subtitle: string
    items: {
      title: string
      description: string
      cta: string
      href: string
      highlight: boolean
    }[]
  }
  testimonials: {
    title: string
    subtitle: string
    purchased: string
    items: {
      name: string
      location: string
      rating: number
      text: string
      image: string
      product: string
    }[]
  }
  instagram: {
    title: string
    subtitle: string
    posts: { id: number; image: string; likes: number }[]
  }
  quickQuote: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    whatsappMsg: string
  }
}

const sharedFeaturedProducts = [
  {
    id: "featured-1",
    name: "Invisible Tape-In",
    price: 159,
    image: "/images/featured/invisible-tape-in.jpg",
    badge: "Blue Ocean Pick",
    rating: 4.9,
    reviews: 1847,
    colors: 28,
    slug: "tape-in",
    href: "/collections/tape-in",
  },
  {
    id: "featured-2",
    name: "K-Tip Extensions",
    price: 189,
    image: "/images/featured/k-tip-extension.jpg",
    badge: "Professional Fave",
    rating: 4.8,
    reviews: 2156,
    colors: 32,
    slug: "k-tip-extensions",
    href: "/collections/k-tip-extensions",
  },
  {
    id: "featured-3",
    name: "Nano Extensions",
    price: 179,
    image: "/images/featured/nano-extension.jpg",
    badge: "Fine Hair Solution",
    rating: 4.9,
    reviews: 1287,
    colors: 24,
    slug: "nano-extensions",
    href: "/collections/nano-extensions",
  },
  {
    id: "featured-4",
    name: "Genius Weft",
    price: 199,
    image: "/images/featured/genius-weft.jpg",
    badge: "Salon Fave",
    rating: 4.9,
    reviews: 3421,
    colors: 20,
    slug: "butterfly-weft-extensions",
    href: "/collections/butterfly-weft-extensions",
  },
]

const sharedInstagramPosts = [
  { id: 1, image: "/images/instagram-1.jpg", likes: 1234 },
  { id: 2, image: "/images/instagram-2.jpg", likes: 987 },
  { id: 3, image: "/images/instagram-3.jpg", likes: 1567 },
  { id: 4, image: "/images/instagram-4.jpg", likes: 2341 },
  { id: 5, image: "/images/instagram-5.jpg", likes: 876 },
  { id: 6, image: "/images/instagram-6.jpg", likes: 1432 },
]

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    metaTitle: "Wholesale Hair Extensions UK | Trade Supplier for UK & EU Salons | D.S Hair Beauty",
    metaDescription:
      "Factory-direct trade supplier of 100% Remy human hair extensions for UK & EU salons. Tape-In, K-Tip, Hand-Tied Weft, Butterfly Weft & Toppers. Wholesale pricing, private label available.",
    hero: {
      badge: "Factory-Direct to Your Salon — No Middlemen",
      title1: "Your Salon's",
      title2: "Supply Partner.",
      subtitle:
        "We supply premium 100% Remy human hair extensions to professional salons across the UK & EU — direct from our factory to your salon chair, with private label options. 19 years of manufacturing, 0 middlemen.",
      ctaPrimary: "Apply for Trade Account",
      ctaSecondary: "Switch Your Trade Supplier",
      trust1: "50+ UK & EU Salons Onboard",
      trust2: "Digital Colour Matching",
      trust3: "Express Shipping to the UK (3–5 days)",
    },
    brandValues: [
      { title: "Free UK Delivery", description: "Free standard delivery on all orders over £175" },
      { title: "30-Day Returns", description: "Easy returns within 30 days of purchase" },
      { title: "100% Remy Hair", description: "Premium quality, ethically sourced human hair" },
      { title: "Expert Support", description: "Dedicated team ready to help you find your perfect match" },
    ],
    salonTrust: {
      eyebrow: "Trusted by Salons",
      title: "Trusted by Salons Across the UK & Ireland",
      subtitle:
        "From boutique studios in Liverpool to busy city-centre salons — stylists choose D.S Hair & Beauty for reliable supply and consistent quality.",
      images: [
        { alt: "Professional hair salon interior", caption: "Premium Salon Environments" },
        { alt: "Hair extension application in progress", caption: "Expert Application" },
        { alt: "Professional hair stylist at work", caption: "Skilled Stylists" },
        { alt: "Modern salon workspace", caption: "Modern Facilities" },
      ],
      stats: [
        { num: "19+", label: "Years in Business" },
        { num: "50+", label: "UK & EU Salons Served" },
        { num: "100%", label: "Remy Human Hair" },
        { num: "3–5d", label: "Express Delivery" },
      ],
      ctaText: "Ready to join the D.S Hair & Beauty salon network?",
      ctaButton: "Apply for Trade Account",
    },
    categoryGrid: {
      title: "Shop by Category",
      subtitle:
        "Find the perfect extensions for your style, whether you are a DIY enthusiast or a professional stylist.",
      categories: [
        {
          title: "Clip-In Extensions",
          description: "Easy to apply, instant transformation",
          href: "/collections/clip-in",
          image: "/images/category-clip-in.jpg",
          featured: true,
        },
        {
          title: "Tape-In Extensions",
          description: "Seamless, long-lasting results",
          href: "/collections/tape-in",
          image: "/images/category-tape-in.jpg",
          featured: false,
        },
        {
          title: "Ponytails",
          description: "Instant glam for any occasion",
          href: "/collections/ponytails",
          image: "/images/category-ponytails.jpg",
          featured: false,
        },
        {
          title: "Nano Extensions",
          description: "Professional-grade quality",
          href: "/collections/nano-extensions",
          image: "/images/category-nano-extensions.jpg",
          featured: false,
        },
      ],
    },
    featuredProducts: {
      title: "Bestselling Extensions",
      subtitle: "Our most-loved hair extensions, trusted by thousands of customers worldwide.",
      tradePrice: "Trade Price",
      coloursAvailable: "colours available",
      viewAll: "View All Extensions",
      products: sharedFeaturedProducts,
    },
    dualPath: {
      title: "Choose Your Path",
      subtitle:
        "Whether you are looking to enhance your own look or supply your salon clients with the best, we have exactly what you need.",
      diy: {
        eyebrow: "For You",
        title: "DIY Extensions",
        description:
          "Transform your look at home with our easy-to-apply clip-in extensions, ponytails, and more.",
        checks: ["Easy application", "No salon needed", "Reusable"],
        cta: "Shop DIY Extensions",
      },
      pro: {
        badge: "UK & EU Salon Supplier",
        eyebrow: "For Salons & Stylists",
        title: "Professional Extensions",
        description:
          "Factory-direct pricing. UK warehouse launching + full range express 3–5 days. Free digital colour catalogue. No minimum order to start.",
        checks: ["Hand-Tied Weft", "Balayage Weft", "Nano Ring / Tape-In", "Wholesale pricing", "Express 3–5 day delivery"],
        ctaPrimary: "Apply for Trade Account",
        ctaSecondary: "Browse Products",
      },
      bottom: {
        title: "UK Warehouse Launching & Factory-Direct",
        description:
          "19 years of hair extension expertise. Direct factory relationships. Free digital colour catalogue with your first trade order. UK warehouse launching + express factory-direct 3–5 day delivery.",
        cta: "Become a Partner →",
      },
    },
    services: {
      title: "Expert Support & Services",
      subtitle:
        "We're here to help you every step of the way — from choosing the right extensions to professional salon supply.",
      items: [
        {
          title: "Salon Partners",
          description:
            "Factory-direct manufacturer serving UK & EU salons. Trade pricing, free digital colour catalogue, no minimum order. Apply for your trade account today.",
          cta: "Apply for Trade Account",
          href: "/salon-partners",
          highlight: true,
        },
        {
          title: "Find a Stylist",
          description:
            "Locate certified D.S HAIR & BEAUTY professionals in your area for expert installation.",
          cta: "Find Near Me",
          href: "/find-stylist",
          highlight: false,
        },
        {
          title: "Education & Certification",
          description:
            "Professional training courses to master the art of hair extensions application.",
          cta: "View Courses",
          href: "/education",
          highlight: false,
        },
        {
          title: "Colour Match",
          description:
            "Use our colour matching tool to find your perfect shade from our extensive range.",
          cta: "Match My Colour",
          href: "/colour-match",
          highlight: false,
        },
      ],
    },
    testimonials: {
      title: "Loved by Thousands",
      subtitle: "See what our customers are saying about D.S HAIR & BEAUTY",
      purchased: "Purchased",
      items: [
        {
          name: "Sarah M.",
          location: "London",
          rating: 5,
          text:
            "Absolutely stunning quality! The Silk Seam extensions blend so seamlessly with my natural hair. I have received so many compliments. Will definitely be ordering again!",
          image: "/images/testimonial-1.jpg",
          product: "Silk Seam Clip-In Set",
        },
        {
          name: "Emma T.",
          location: "Manchester",
          rating: 5,
          text:
            "As a hairstylist, I only use D.S HAIR & BEAUTY for my clients. The quality is unmatched and the customer service is exceptional. Highly recommend the professional range.",
          image: "/images/testimonial-2.jpg",
          product: "Professional Tape-Ins",
        },
        {
          name: "Jessica K.",
          location: "Birmingham",
          rating: 5,
          text:
            "The colour matching was perfect! I was worried about ordering online but the team helped me find the exact shade. The ponytail extension is my new go-to for events.",
          image: "/images/testimonial-3.jpg",
          product: "Wrap Ponytail",
        },
      ],
    },
    instagram: {
      title: "Follow Our Journey",
      subtitle: "Tag @d.shairbeauty for a chance to be featured",
      posts: sharedInstagramPosts,
    },
    quickQuote: {
      title: "Get Wholesale Pricing in 24 Hours",
      subtitle:
        "Open your trade account today — no minimum first order, free UK delivery, and dedicated support from a real person.",
      ctaPrimary: "Open Trade Account",
      ctaSecondary: "WhatsApp Us",
      whatsappMsg: "Hi! I'm interested in wholesale pricing for my salon.",
    },
  },

  de: {
    metaTitle:
      "Großhandel Haarverlängerungen UK | Lieferant für UK- & EU-Salons | D.S Hair Beauty",
    metaDescription:
      "Fabrikdirekter Großhandel mit 100% Remy-Echthaarverlängerungen für UK- & EU-Salons. Tape-In, K-Tip, Hand-Tied Weft, Butterfly Weft & Toppers. Großhandelspreise, Private Label möglich.",
    hero: {
      badge: "Direkt ab Fabrik in Ihren Salon — ohne Zwischenhändler",
      title1: "Der Lieferpartner",
      title2: "Ihres Salons.",
      subtitle:
        "Wir beliefern professionelle Salons im gesamten UK & EU mit hochwertigen 100% Remy-Echthaarverlängerungen — direkt von unserer Fabrik an Ihren Salonstuhl, mit Private-Label-Optionen. 19 Jahre Fertigungserfahrung, 0 Zwischenhändler.",
      ctaPrimary: "Handelskonto beantragen",
      ctaSecondary: "Lieferanten wechseln",
      trust1: "50+ Salons im UK & EU an Bord",
      trust2: "Digitale Farbanpassung",
      trust3: "Expressversand nach UK (3–5 Tage)",
    },
    brandValues: [
      { title: "Kostenloser UK-Versand", description: "Kostenloser Standardversand ab £175" },
      { title: "30-Tage-Rückgabe", description: "Einfache Rückgabe innerhalb von 30 Tagen" },
      { title: "100% Remy-Haar", description: "Premium-Qualität, ethisch bezogenes Echthaar" },
      { title: "Expertensupport", description: "Engagiertes Team hilft Ihnen bei der perfekten Wahl" },
    ],
    salonTrust: {
      eyebrow: "Von Salons vertraut",
      title: "Von Salons im gesamten UK & Irland vertraut",
      subtitle:
        "Von kleinen Studios in Liverpool bis zu belebten City-Salons — Stylisten wählen D.S Hair & Beauty für zuverlässige Lieferung und gleichbleibende Qualität.",
      images: [
        { alt: "Professioneller Salon-Interieur", caption: "Premium-Salonumgebungen" },
        { alt: "Haarverlängerung wird angebracht", caption: "Expertenanwendung" },
        { alt: "Professioneller Stylist bei der Arbeit", caption: "Geschulte Stylisten" },
        { alt: "Moderner Salon-Arbeitsplatz", caption: "Moderne Einrichtungen" },
      ],
      stats: [
        { num: "19+", label: "Jahre im Geschäft" },
        { num: "50+", label: "UK- & EU-Salons beliefert" },
        { num: "100%", label: "Remy-Echthaar" },
        { num: "3–5 Tg", label: "Expresslieferung" },
      ],
      ctaText: "Bereit, dem D.S Hair & Beauty Salon-Netzwerk beizutreten?",
      ctaButton: "Handelskonto beantragen",
    },
    categoryGrid: {
      title: "Nach Kategorie shoppen",
      subtitle:
        "Finden Sie die perfekte Verlängerung für Ihren Stil — ob DIY-Liebhaber oder professioneller Stylist.",
      categories: [
        {
          title: "Clip-In Verlängerungen",
          description: "Einfach anzubringen, sofortige Verwandlung",
          href: "/collections/clip-in",
          image: "/images/category-clip-in.jpg",
          featured: true,
        },
        {
          title: "Tape-In Verlängerungen",
          description: "Nahtlos, langlebiges Ergebnis",
          href: "/collections/tape-in",
          image: "/images/category-tape-in.jpg",
          featured: false,
        },
        {
          title: "Pferdeschwänze",
          description: "Sofortiger Glamour für jeden Anlass",
          href: "/collections/ponytails",
          image: "/images/category-ponytails.jpg",
          featured: false,
        },
        {
          title: "Nano Verlängerungen",
          description: "Professionelle Qualität",
          href: "/collections/nano-extensions",
          image: "/images/category-nano-extensions.jpg",
          featured: false,
        },
      ],
    },
    featuredProducts: {
      title: "Bestseller-Verlängerungen",
      subtitle:
        "Unsere beliebtesten Haarverlängerungen, vertraut von Tausenden Kunden weltweit.",
      tradePrice: "Handelspreis",
      coloursAvailable: "Farben verfügbar",
      viewAll: "Alle Verlängerungen ansehen",
      products: sharedFeaturedProducts,
    },
    dualPath: {
      title: "Wählen Sie Ihren Weg",
      subtitle:
        "Ob Sie Ihren eigenen Look verfeinern oder Ihre Salonkunden mit dem Besten beliefern möchten — wir haben genau das Richtige.",
      diy: {
        eyebrow: "Für Sie",
        title: "DIY-Verlängerungen",
        description:
          "Verwandeln Sie Ihren Look zu Hause mit unseren einfach anzubringenden Clip-In-Verlängerungen, Pferdeschwänzen und mehr.",
        checks: ["Einfache Anwendung", "Kein Salon nötig", "Wiederverwendbar"],
        cta: "DIY-Verlängerungen shoppen",
      },
      pro: {
        badge: "Lieferant für UK- & EU-Salons",
        eyebrow: "Für Salons & Stylisten",
        title: "Professionelle Verlängerungen",
        description:
          "Fabrikdirekte Preise. UK-Lager in Planung + Express 3–5 Tage für die gesamte Range. Kostenloser digitaler Farbkatalog. Keine Mindestbestellmenge.",
        checks: [
          "Hand-Tied Weft",
          "Balayage Weft",
          "Nano Ring / Tape-In",
          "Großhandelspreise",
          "Express 3–5 Tage Lieferung",
        ],
        ctaPrimary: "Handelskonto beantragen",
        ctaSecondary: "Produkte durchsuchen",
      },
      bottom: {
        title: "UK-Lager in Planung & fabrikdirekt",
        description:
          "19 Jahre Erfahrung in Haarverlängerungen. Direkte Fabrikbeziehungen. Kostenloser digitaler Farbkatalog mit Ihrer ersten Handelsbestellung. UK-Lager in Planung + Express-Fabrikdirektlieferung in 3–5 Tagen.",
        cta: "Partner werden →",
      },
    },
    services: {
      title: "Expertensupport & Services",
      subtitle:
        "Wir begleiten Sie bei jedem Schritt — von der Wahl der richtigen Verlängerung bis zur professionellen Salonbelieferung.",
      items: [
        {
          title: "Salon-Partner",
          description:
            "Fabrikdirekter Hersteller für UK- & EU-Salons. Handelspreise, kostenloser digitaler Farbkatalog, keine Mindestbestellmenge. Beantragen Sie noch heute Ihr Handelskonto.",
          cta: "Handelskonto beantragen",
          href: "/salon-partners",
          highlight: true,
        },
        {
          title: "Stylist finden",
          description:
            "Finden Sie zertifizierte D.S HAIR & BEAUTY Fachleute in Ihrer Nähe für eine fachgerechte Anwendung.",
          cta: "In der Nähe finden",
          href: "/find-stylist",
          highlight: false,
        },
        {
          title: "Schulung & Zertifizierung",
          description:
            "Professionelle Trainingskurse, um die Kunst der Haarverlängerungsanwendung zu beherrschen.",
          cta: "Kurse ansehen",
          href: "/education",
          highlight: false,
        },
        {
          title: "Farbmatch",
          description:
            "Nutzen Sie unser Farbmatch-Tool, um Ihren perfekten Ton aus unserem umfangreichen Sortiment zu finden.",
          cta: "Meine Farbe finden",
          href: "/colour-match",
          highlight: false,
        },
      ],
    },
    testimonials: {
      title: "Von Tausenden geliebt",
      subtitle: "Sehen Sie, was unsere Kunden über D.S HAIR & BEAUTY sagen",
      purchased: "Gekauft",
      items: [
        {
          name: "Sarah M.",
          location: "London",
          rating: 5,
          text:
            "Absolut beeindruckende Qualität! Die Silk Seam Extensions verschmelzen nahtlos mit meinem eigenen Haar. Ich habe so viele Komplimente bekommen. Werde definitiv wieder bestellen!",
          image: "/images/testimonial-1.jpg",
          product: "Silk Seam Clip-In Set",
        },
        {
          name: "Emma T.",
          location: "Manchester",
          rating: 5,
          text:
            "Als Friseurin verwende ich für meine Kunden nur D.S HAIR & BEAUTY. Die Qualität ist unübertroffen und der Kundenservice außergewöhnlich. Die Professional Range ist sehr zu empfehlen.",
          image: "/images/testimonial-2.jpg",
          product: "Professional Tape-Ins",
        },
        {
          name: "Jessica K.",
          location: "Birmingham",
          rating: 5,
          text:
            "Die Farbanpassung war perfekt! Ich hatte Bedenken, online zu bestellen, aber das Team half mir, genau den richtigen Ton zu finden. Die Pferdeschwanzverlängerung ist mein neuer Geheimtipp für Events.",
          image: "/images/testimonial-3.jpg",
          product: "Wrap Ponytail",
        },
      ],
    },
    instagram: {
      title: "Folgen Sie unserer Reise",
      subtitle: "Taggen Sie @d.shairbeauty — vielleicht werden Sie vorgestellt",
      posts: sharedInstagramPosts,
    },
    quickQuote: {
      title: "Großhandelspreise innerhalb von 24 Stunden",
      subtitle:
        "Eröffnen Sie noch heute Ihr Handelskonto — keine Mindestbestellung, kostenloser UK-Versand und persönlicher Support.",
      ctaPrimary: "Handelskonto eröffnen",
      ctaSecondary: "WhatsApp",
      whatsappMsg: "Hallo! Ich interessiere mich für Großhandelspreise für meinen Salon.",
    },
  },

  fr: {
    metaTitle:
      "Extensions de Cheveux en Gros UK | Fournisseur pour Salons UK & UE | D.S Hair Beauty",
    metaDescription:
      "Fournisseur en gros d'extensions de cheveux 100% Remy pour salons UK & UE. Tape-In, K-Tip, Hand-Tied Weft, Butterfly Weft & Toppers. Prix de gros, private label disponible.",
    hero: {
      badge: "Direct usine à votre salon — sans intermédiaires",
      title1: "Le partenaire",
      title2: "fournisseur de votre salon.",
      subtitle:
        "Nous fournissons des extensions de cheveux 100% Remy premium aux salons professionnels du Royaume-Uni et de l'UE — directement de notre usine à votre fauteuil de salon, avec options de marque blanche. 19 ans de fabrication, 0 intermédiaires.",
      ctaPrimary: "Demander un compte pro",
      ctaSecondary: "Changer de fournisseur",
      trust1: "50+ salons UK & UE à bord",
      trust2: "Appariement numérique des couleurs",
      trust3: "Livraison express vers le UK (3–5 jours)",
    },
    brandValues: [
      { title: "Livraison UK gratuite", description: "Livraison standard offerte dès £175" },
      { title: "Retours 30 jours", description: "Retours faciles sous 30 jours" },
      { title: "Cheveux 100% Remy", description: "Cheveux humains de qualité premium, éthiques" },
      { title: "Support expert", description: "Une équipe dédiée pour vous aider" },
    ],
    salonTrust: {
      eyebrow: "Approuvé par les salons",
      title: "Approuvé par les salons du Royaume-Uni et d'Irlande",
      subtitle:
        "Des studios boutiques de Liverpool aux salons animés du centre-ville — les coiffeurs choisissent D.S Hair & Beauty pour un approvisionnement fiable et une qualité constante.",
      images: [
        { alt: "Intérieur de salon professionnel", caption: "Environnements salon premium" },
        { alt: "Pose d'extension en cours", caption: "Application experte" },
        { alt: "Coiffeur professionnel au travail", caption: "Stylistes qualifiés" },
        { alt: "Espace de travail salon moderne", caption: "Installations modernes" },
      ],
      stats: [
        { num: "19+", label: "Années d'activité" },
        { num: "50+", label: "Salons UK & UE servis" },
        { num: "100%", label: "Cheveux humains Remy" },
        { num: "3–5j", label: "Livraison express" },
      ],
      ctaText: "Prêt à rejoindre le réseau de salons D.S Hair & Beauty ?",
      ctaButton: "Demander un compte pro",
    },
    categoryGrid: {
      title: "Acheter par catégorie",
      subtitle:
        "Trouvez l'extension parfaite pour votre style, que vous soyez amateur ou coiffeur professionnel.",
      categories: [
        {
          title: "Extensions Clip-In",
          description: "Faciles à poser, transformation instantanée",
          href: "/collections/clip-in",
          image: "/images/category-clip-in.jpg",
          featured: true,
        },
        {
          title: "Extensions Tape-In",
          description: "Résultat invisible et durable",
          href: "/collections/tape-in",
          image: "/images/category-tape-in.jpg",
          featured: false,
        },
        {
          title: "Queues-de-cheval",
          description: "Glamour instantané pour chaque occasion",
          href: "/collections/ponytails",
          image: "/images/category-ponytails.jpg",
          featured: false,
        },
        {
          title: "Extensions Nano",
          description: "Qualité professionnelle",
          href: "/collections/nano-extensions",
          image: "/images/category-nano-extensions.jpg",
          featured: false,
        },
      ],
    },
    featuredProducts: {
      title: "Extensions best-sellers",
      subtitle:
        "Nos extensions de cheveux les plus aimées, recommandées par des milliers de clientes dans le monde.",
      tradePrice: "Prix pro",
      coloursAvailable: "couleurs disponibles",
      viewAll: "Voir toutes les extensions",
      products: sharedFeaturedProducts,
    },
    dualPath: {
      title: "Choisissez votre parcours",
      subtitle:
        "Que vous souhaitiez sublimer votre look ou approvisionner vos clientes en salon, nous avons exactement ce qu'il vous faut.",
      diy: {
        eyebrow: "Pour vous",
        title: "Extensions DIY",
        description:
          "Transformez votre look à la maison avec nos extensions clip-in faciles à poser, nos queues-de-cheval et plus encore.",
        checks: ["Application facile", "Pas de salon nécessaire", "Réutilisables"],
        cta: "Shopper les extensions DIY",
      },
      pro: {
        badge: "Fournisseur salons UK & UE",
        eyebrow: "Pour salons & coiffeurs",
        title: "Extensions professionnelles",
        description:
          "Prix direct usine. Entrepôt UK en projet + express 3–5 jours sur toute la gamme. Catalogue numérique des couleurs offert. Pas de minimum de commande.",
        checks: [
          "Hand-Tied Weft",
          "Balayage Weft",
          "Nano Ring / Tape-In",
          "Prix de gros",
          "Livraison express 3–5 jours",
        ],
        ctaPrimary: "Demander un compte pro",
        ctaSecondary: "Parcourir les produits",
      },
      bottom: {
        title: "Entrepôt UK en projet & direct usine",
        description:
          "19 ans d'expertise en extensions de cheveux. Relations directes avec l'usine. Catalogue numérique des couleurs offert avec votre première commande pro. Entrepôt UK en projet + livraison express direct usine en 3–5 jours.",
        cta: "Devenir partenaire →",
      },
    },
    services: {
      title: "Support expert & services",
      subtitle:
        "Nous vous accompagnons à chaque étape — du choix de la bonne extension à l'approvisionnement professionnel de votre salon.",
      items: [
        {
          title: "Partenaires salons",
          description:
            "Fabricant direct usine pour salons UK & UE. Prix professionnels, catalogue numérique des couleurs offert, pas de minimum de commande. Demandez votre compte pro dès aujourd'hui.",
          cta: "Demander un compte pro",
          href: "/salon-partners",
          highlight: true,
        },
        {
          title: "Trouver un styliste",
          description:
            "Localisez des professionnels certifiés D.S HAIR & BEAUTY près de chez vous pour une pose experte.",
          cta: "Près de chez moi",
          href: "/find-stylist",
          highlight: false,
        },
        {
          title: "Formation & certification",
          description:
            "Cours de formation professionnels pour maîtriser l'art de la pose d'extensions de cheveux.",
          cta: "Voir les cours",
          href: "/education",
          highlight: false,
        },
        {
          title: "Appariement des couleurs",
          description:
            "Utilisez notre outil d'appariement des couleurs pour trouver la teinte parfaite dans notre large gamme.",
          cta: "Trouver ma couleur",
          href: "/colour-match",
          highlight: false,
        },
      ],
    },
    testimonials: {
      title: "Adorées par des milliers",
      subtitle: "Découvrez ce que nos clientes disent de D.S HAIR & BEAUTY",
      purchased: "Acheté",
      items: [
        {
          name: "Sarah M.",
          location: "Londres",
          rating: 5,
          text:
            "Une qualité absolument superbe ! Les extensions Silk Seam se fondent parfaitement dans mes cheveux naturels. J'ai reçu tant de compliments. Je commanderai à nouveau sans hésiter !",
          image: "/images/testimonial-1.jpg",
          product: "Silk Seam Clip-In Set",
        },
        {
          name: "Emma T.",
          location: "Manchester",
          rating: 5,
          text:
            "En tant que coiffeuse, je n'utilise que D.S HAIR & BEAUTY pour mes clientes. La qualité est inégalée et le service client exceptionnel. Je recommande vivement la gamme professionnelle.",
          image: "/images/testimonial-2.jpg",
          product: "Professional Tape-Ins",
        },
        {
          name: "Jessica K.",
          location: "Birmingham",
          rating: 5,
          text:
            "L'appariement des couleurs était parfait ! J'avais peur de commander en ligne, mais l'équipe m'a aidée à trouver la teinte exacte. La queue-de-cheval est mon nouvel atout pour les événements.",
          image: "/images/testimonial-3.jpg",
          product: "Wrap Ponytail",
        },
      ],
    },
    instagram: {
      title: "Suivez notre parcours",
      subtitle: "Taguez @d.shairbeauty pour avoir une chance d'être mis en avant",
      posts: sharedInstagramPosts,
    },
    quickQuote: {
      title: "Obtenez les prix de gros en 24 heures",
      subtitle:
        "Ouvrez votre compte pro aujourd'hui — aucune commande minimum, livraison UK gratuite et support dédié.",
      ctaPrimary: "Ouvrir un compte pro",
      ctaSecondary: "WhatsApp",
      whatsappMsg: "Bonjour ! Je suis intéressé par les prix de gros pour mon salon.",
    },
  },

  ar: {
    metaTitle:
      "ملحقات الشعر بالجملة في المملكة المتحدة | مورد للصالونات في المملكة المتحدة والاتحاد الأوروبي | D.S Hair Beauty",
    metaDescription:
      "مورد مباشر من المصنع لملحقات الشعر البشري ريمي 100% للصالونات في المملكة المتحدة والاتحاد الأوروبي. Tape-In وK-Tip وHand-Tied Weft وButterfly Weft وToppers. أسعار الجملة، خاصية العلامة الخاصة متاحة.",
    hero: {
      badge: "مباشر من المصنع إلى صالونك — بدون وسطاء",
      title1: "شريك توريد",
      title2: "صالونك.",
      subtitle:
        "نورد ملحقات شعر بشري ريمي 100% بجودة عالية للصالونات الاحترافية في المملكة المتحدة والاتحاد الأوروبي — مباشرة من مصنعنا إلى كرسي صالونك، مع خيارات العلامة الخاصة. 19 عاماً من التصنيع، وصفر وسطاء.",
      ctaPrimary: "التقدم بطلب حساب تجاري",
      ctaSecondary: "تبديل مورد التجارة",
      trust1: "أكثر من 50 صالوناً في المملكة المتحدة والاتحاد الأوروبي",
      trust2: "مطابقة الألوان الرقمية",
      trust3: "شحن سريع إلى المملكة المتحدة (3–5 أيام)",
    },
    brandValues: [
      { title: "توصيل مجاني في المملكة المتحدة", description: "توصيل قياسي مجاني للطلبات فوق £175" },
      { title: "إرجاع خلال 30 يوماً", description: "إرجاع سهل خلال 30 يوماً من الشراء" },
      { title: "شعر ريمي 100%", description: "جودة عالية، شعر بشري من مصادر أخلاقية" },
      { title: "دعم من الخبراء", description: "فريق متخصص جاهز لمساعدتك في اختيار المثالي" },
    ],
    salonTrust: {
      eyebrow: "موثوق به من الصالونات",
      title: "موثوق به من صالونات المملكة المتحدة وأيرلندا",
      subtitle:
        "من الاستوديوهات البوتيكية في ليفربول إلى الصالونات المزدحمة في مركز المدينة — يختار مصففو الشعر D.S Hair & Beauty للتوريد الموثوق والجودة المتسقة.",
      images: [
        { alt: "داخلية صالون شعر احترافي", caption: "بيئات صالون فاخرة" },
        { alt: "تركيب ملحقات الشعر قيد التنفيذ", caption: "تركيب احترافي" },
        { alt: "مصفف شعر محترف أثناء العمل", caption: "مصففون ماهرون" },
        { alt: "مساحة عمل صالون حديثة", caption: "مرافق عصرية" },
      ],
      stats: [
        { num: "19+", label: "عاماً في العمل" },
        { num: "50+", label: "صالوناً تم خدمتها" },
        { num: "100%", label: "شعر بشري ريمي" },
        { num: "3–5 أيام", label: "توصيل سريع" },
      ],
      ctaText: "مستعد للانضمام إلى شبكة صالونات D.S Hair & Beauty؟",
      ctaButton: "التقدم بطلب حساب تجاري",
    },
    categoryGrid: {
      title: "تسوق حسب الفئة",
      subtitle:
        "اعثر على الإكسسوار المثالي لأسلوبك، سواء كنت من محبي DIY أو مصفف شعر محترف.",
      categories: [
        {
          title: "إكسسوارات كليب-إن",
          description: "سهلة التركيب، تحول فوري",
          href: "/collections/clip-in",
          image: "/images/category-clip-in.jpg",
          featured: true,
        },
        {
          title: "إكسسوارات تيب-إن",
          description: "نتائج سلسة وطويلة الأمد",
          href: "/collections/tape-in",
          image: "/images/category-tape-in.jpg",
          featured: false,
        },
        {
          title: "ذيل الحصان",
          description: "أناقة فورية لكل مناسبة",
          href: "/collections/ponytails",
          image: "/images/category-ponytails.jpg",
          featured: false,
        },
        {
          title: "إكسسوارات نانو",
          description: "جودة احترافية",
          href: "/collections/nano-extensions",
          image: "/images/category-nano-extensions.jpg",
          featured: false,
        },
      ],
    },
    featuredProducts: {
      title: "الأكثر مبيعاً",
      subtitle: "أكثر ملحقات الشعر المحبوبة لدينا، موثوقة من آلاف العملاء حول العالم.",
      tradePrice: "سعر التجارة",
      coloursAvailable: "ألوان متاحة",
      viewAll: "عرض كل الإكسسوارات",
      products: sharedFeaturedProducts,
    },
    dualPath: {
      title: "اختر طريقك",
      subtitle:
        "سواء كنت ترغب في تحسين مظهرك الشخصي أو توريد عملاء صالونك بأفضل المنتجات، لدينا بالضبط ما تحتاجه.",
      diy: {
        eyebrow: "لك",
        title: "إكسسوارات DIY",
        description:
          "حول مظهرك في المنزل باستخدام ملحقات الكليب-إن السهلة التركيب، وذيل الحصان، والمزيد.",
        checks: ["تركيب سهل", "لا حاجة لصالون", "قابلة لإعادة الاستخدام"],
        cta: "تسوق إكسسوارات DIY",
      },
      pro: {
        badge: "مورد صالونات المملكة المتحدة والاتحاد الأوروبي",
        eyebrow: "للصالونات ومصففي الشعر",
        title: "إكسسوارات احترافية",
        description:
          "أسعار مباشرة من المصنع. مستودع المملكة المتحدة قيد التخطيط + توصيل سريع 3–5 أيام للمجموعة كاملة. كتالوج ألوان رقمي مجاني. لا يوجد حد أدنى للطلب.",
        checks: [
          "Hand-Tied Weft",
          "Balayage Weft",
          "Nano Ring / Tape-In",
          "أسعار الجملة",
          "توصيل سريع 3–5 أيام",
        ],
        ctaPrimary: "التقدم بطلب حساب تجاري",
        ctaSecondary: "تصفح المنتجات",
      },
      bottom: {
        title: "مستودع المملكة المتحدة قيد التخطيط ومباشر من المصنع",
        description:
          "19 عاماً من الخبرة في ملحقات الشعر. علاقات مباشرة مع المصنع. كتالوج ألوان رقمي مجاني مع أول طلب تجاري. مستودع المملكة المتحدة قيد التخطيط + توصيل سريع مباشر من المصنع خلال 3–5 أيام.",
        cta: "كن شريكاً →",
      },
    },
    services: {
      title: "دعم الخبراء والخدمات",
      subtitle:
        "نحن هنا لمساعدتك في كل خطوة — من اختيار الملحقات المناسبة إلى توريد الصالون الاحترافي.",
      items: [
        {
          title: "شركاء الصالونات",
          description:
            "مصنع مباشر يخدم صالونات المملكة المتحدة والاتحاد الأوروبي. أسعار التجارة، كتالوج ألوان رقمي مجاني، لا يوجد حد أدنى للطلب. قدم طلب حسابك التجاري اليوم.",
          cta: "التقدم بطلب حساب تجاري",
          href: "/salon-partners",
          highlight: true,
        },
        {
          title: "العثور على مصفف شعر",
          description:
            "اعثر على محترفين معتمدين من D.S HAIR & BEAUTY في منطقتك لتركيب احترافي.",
          cta: "البحث بالقرب مني",
          href: "/find-stylist",
          highlight: false,
        },
        {
          title: "التعليم والشهادات",
          description: "دورات تدريبية احترافية لإتقان فن تركيب ملحقات الشعر.",
          cta: "عرض الدورات",
          href: "/education",
          highlight: false,
        },
        {
          title: "مطابقة الألوان",
          description:
            "استخدم أداة مطابقة الألوان للعثور على الدرجة المثالية من مجموعتنا الواسعة.",
          cta: "اعثر على لوني",
          href: "/colour-match",
          highlight: false,
        },
      ],
    },
    testimonials: {
      title: "محبوبة من الآلاف",
      subtitle: "شاهد ما يقوله عملاؤنا عن D.S HAIR & BEAUTY",
      purchased: "تم شراء",
      items: [
        {
          name: "سارة م.",
          location: "لندن",
          rating: 5,
          text:
            "جودة مذهلة للغاية! تندمج ملحقات Silk Seam بسلاسة تامة مع شعري الطبيعي. تلقيت الكثير من الإطراءات. سأطلب بالتأكيد مرة أخرى!",
          image: "/images/testimonial-1.jpg",
          product: "Silk Seam Clip-In Set",
        },
        {
          name: "إيما ت.",
          location: "مانشستر",
          rating: 5,
          text:
            "كمصففة شعر، أستخدم D.S HAIR & BEAUTY فقط لعملائي. الجودة لا مثيل لها وخدمة العملاء استثنائية. أنصح بشدة بالمجموعة الاحترافية.",
          image: "/images/testimonial-2.jpg",
          product: "Professional Tape-Ins",
        },
        {
          name: "جيسيكا ك.",
          location: "برمنغهام",
          rating: 5,
          text:
            "كانت مطابقة اللون مثالية! كنت قلقة بشأن الطلب عبر الإنترنت لكن الفريق ساعدني في العثور على الدرجة المناسبة. ذيل الحصان أصبح خياري الأول للمناسبات.",
          image: "/images/testimonial-3.jpg",
          product: "Wrap Ponytail",
        },
      ],
    },
    instagram: {
      title: "تابع رحلتنا",
      subtitle: "ضع علامة @d.shairbeauty للحصول على فرصة الظهور",
      posts: sharedInstagramPosts,
    },
    quickQuote: {
      title: "احصل على أسعار الجملة خلال 24 ساعة",
      subtitle:
        "افتح حسابك التجاري اليوم — لا يوجد حد أدنى للطلب، توصيل مجاني في المملكة المتحدة، ودعم حقيقي.",
      ctaPrimary: "افتح حساباً تجارياً",
      ctaSecondary: "واتساب",
      whatsappMsg: "مرحباً! أنا مهتم بأسعار الجملة لصالوني.",
    },
  },

  sv: {
    metaTitle:
      "Hårförlängningar Partihandel UK | Leverantör för UK- & EU-salonger | D.S Hair Beauty",
    metaDescription:
      "Fabriksdirekt partihandel med 100% Remy-mänskligt hår för UK- & EU-salonger. Tape-In, K-Tip, Hand-Tied Weft, Butterfly Weft & Toppers. Partipriser, private label tillgängligt.",
    hero: {
      badge: "Direkt från fabriken till din salong — inga mellanhänder",
      title1: "Din salongs",
      title2: "leverantörspartner.",
      subtitle:
        "Vi levererar premium 100% Remy-mänskligt hår till professionella salonger i hela UK och EU — direkt från vår fabrik till din salongsstol, med private label-möjligheter. 19 års tillverkningserfarenhet, 0 mellanhänder.",
      ctaPrimary: "Ansök om handelskonto",
      ctaSecondary: "Byt leverantör",
      trust1: "50+ salonger i UK & EU",
      trust2: "Digital färgmatchning",
      trust3: "Expressfrakt till UK (3–5 dagar)",
    },
    brandValues: [
      { title: "Gratis frakt i UK", description: "Gratis standardfrakt på beställningar över £175" },
      { title: "30 dagars retur", description: "Enkla returer inom 30 dagar" },
      { title: "100% Remy-hår", description: "Premiumkvalitet, etiskt mänskligt hår" },
      { title: "Expertsupport", description: "Dedikerat team redo att hjälpa dig" },
    ],
    salonTrust: {
      eyebrow: "Betrodd av salonger",
      title: "Betrodd av salonger i UK och Irland",
      subtitle:
        "Från boutique-studios i Liverpool till upptagna city-salonger — frisörer väljer D.S Hair & Beauty för pålitlig leverans och konsekvent kvalitet.",
      images: [
        { alt: "Professionell salonginteriör", caption: "Premium-salongsmiljöer" },
        { alt: "Hårförlängning appliceras", caption: "Expertapplicering" },
        { alt: "Professionell frisör i arbete", caption: "Skickliga frisörer" },
        { alt: "Modern salongsarbetsyta", caption: "Moderna faciliteter" },
      ],
      stats: [
        { num: "19+", label: "År i branschen" },
        { num: "50+", label: "UK- & EU-salonger" },
        { num: "100%", label: "Remy-mänskligt hår" },
        { num: "3–5 d", label: "Expressleverans" },
      ],
      ctaText: "Redo att gå med i D.S Hair & Beauty:s salongsnätverk?",
      ctaButton: "Ansök om handelskonto",
    },
    categoryGrid: {
      title: "Handla efter kategori",
      subtitle:
        "Hitta den perfekta förlängningen för din stil, oavsett om du är DIY-entusiast eller professionell frisör.",
      categories: [
        {
          title: "Clip-In-förlängningar",
          description: "Lätta att sätta i, omedelbar förvandling",
          href: "/collections/clip-in",
          image: "/images/category-clip-in.jpg",
          featured: true,
        },
        {
          title: "Tape-In-förlängningar",
          description: "Sömlösa, långvariga resultat",
          href: "/collections/tape-in",
          image: "/images/category-tape-in.jpg",
          featured: false,
        },
        {
          title: "Hästsvansar",
          description: "Omedelbar glamour för alla tillfällen",
          href: "/collections/ponytails",
          image: "/images/category-ponytails.jpg",
          featured: false,
        },
        {
          title: "Nano-förlängningar",
          description: "Professionell kvalitet",
          href: "/collections/nano-extensions",
          image: "/images/category-nano-extensions.jpg",
          featured: false,
        },
      ],
    },
    featuredProducts: {
      title: "Bästsäljande förlängningar",
      subtitle: "Våra mest älskade hårförlängningar, betrodda av tusentals kunder världen över.",
      tradePrice: "Handelspris",
      coloursAvailable: "färger tillgängliga",
      viewAll: "Se alla förlängningar",
      products: sharedFeaturedProducts,
    },
    dualPath: {
      title: "Välj din väg",
      subtitle:
        "Oavsett om du vill förbättra din egen look eller förse dina salongskunder med det bästa, har vi exakt vad du behöver.",
      diy: {
        eyebrow: "För dig",
        title: "DIY-förlängningar",
        description:
          "Förvandla din look hemma med våra lättapplicerade clip-in-förlängningar, hästsvansar och mer.",
        checks: ["Enkel applicering", "Ingen salong behövs", "Återanvändbara"],
        cta: "Handla DIY-förlängningar",
      },
      pro: {
        badge: "Leverantör för UK- & EU-salonger",
        eyebrow: "För salonger & frisörer",
        title: "Professionella förlängningar",
        description:
          "Fabriksdirekta priser. UK-lager under planering + express 3–5 dagar för hela sortimentet. Gratis digital färgkatalog. Ingen minimibeställning.",
        checks: [
          "Hand-Tied Weft",
          "Balayage Weft",
          "Nano Ring / Tape-In",
          "Partipriser",
          "Express 3–5 dagar",
        ],
        ctaPrimary: "Ansök om handelskonto",
        ctaSecondary: "Bläddra bland produkter",
      },
      bottom: {
        title: "UK-lager under planering & fabriksdirekt",
        description:
          "19 års erfarenhet av hårförlängningar. Direkta fabriksrelationer. Gratis digital färgkatalog med din första handelsbeställning. UK-lager under planering + express fabriksdirekt 3–5 dagar.",
        cta: "Bli partner →",
      },
    },
    services: {
      title: "Expertsupport & tjänster",
      subtitle:
        "Vi finns med dig hela vägen — från att välja rätt förlängning till professionell salongsförsörjning.",
      items: [
        {
          title: "Salongspartners",
          description:
            "Fabriksdirekt tillverkare för UK- & EU-salonger. Handelspriser, gratis digital färgkatalog, ingen minimibeställning. Ansök om ditt handelskonto idag.",
          cta: "Ansök om handelskonto",
          href: "/salon-partners",
          highlight: true,
        },
        {
          title: "Hitta en frisör",
          description:
            "Hitta certifierade D.S HAIR & BEAUTY-proffs i ditt område för expertapplicering.",
          cta: "Hitta nära mig",
          href: "/find-stylist",
          highlight: false,
        },
        {
          title: "Utbildning & certifiering",
          description: "Professionella utbildningskurser för att bemästra konsten att applicera hårförlängningar.",
          cta: "Se kurser",
          href: "/education",
          highlight: false,
        },
        {
          title: "Färgmatchning",
          description: "Använd vårt färgmatchningsverktyg för att hitta din perfekta nyans i vårt breda sortiment.",
          cta: "Matcha min färg",
          href: "/colour-match",
          highlight: false,
        },
      ],
    },
    testimonials: {
      title: "Älskad av tusentals",
      subtitle: "Se vad våra kunder säger om D.S HAIR & BEAUTY",
      purchased: "Köpt",
      items: [
        {
          name: "Sarah M.",
          location: "London",
          rating: 5,
          text:
            "Absolut fantastisk kvalitet! Silk Seam-förlängningarna smälter sömlöst in med mitt naturliga hår. Jag har fått så många komplimanger. Kommer definitivt att beställa igen!",
          image: "/images/testimonial-1.jpg",
          product: "Silk Seam Clip-In Set",
        },
        {
          name: "Emma T.",
          location: "Manchester",
          rating: 5,
          text:
            "Som frisör använder jag bara D.S HAIR & BEAUTY för mina kunder. Kvaliteten är oöverträffad och kundservicen exceptionell. Rekommenderar starkt den professionella serien.",
          image: "/images/testimonial-2.jpg",
          product: "Professional Tape-Ins",
        },
        {
          name: "Jessica K.",
          location: "Birmingham",
          rating: 5,
          text:
            "Färgmatchningen var perfekt! Jag var orolig för att beställa online men teamet hjälpte mig att hitta exakt rätt nyans. Hästsvansen är mitt nya måste för event.",
          image: "/images/testimonial-3.jpg",
          product: "Wrap Ponytail",
        },
      ],
    },
    instagram: {
      title: "Följ vår resa",
      subtitle: "Tagga @d.shairbeauty för en chans att bli framhävd",
      posts: sharedInstagramPosts,
    },
    quickQuote: {
      title: "Få partipriser inom 24 timmar",
      subtitle:
        "Öppna ditt handelskonto idag — ingen minimibeställning, gratis frakt i UK och personlig support.",
      ctaPrimary: "Öppna handelskonto",
      ctaSecondary: "WhatsApp",
      whatsappMsg: "Hej! Jag är intresserad av partipriser för min salong.",
    },
  },

  pl: {
    metaTitle:
      "Doczepiane Włosy Hurt UK | Dostawca dla Salonów UK i UE | D.S Hair Beauty",
    metaDescription:
      "Bezpośredni dostawca doczepianych włosów 100% Remy dla salonów UK i UE. Tape-In, K-Tip, Hand-Tied Weft, Butterfly Weft i Toppers. Ceny hurtowe, private label dostępne.",
    hero: {
      badge: "Bezpośrednio z fabryki do salonu — bez pośredników",
      title1: "Partner dostawczy",
      title2: "Twojego salonu.",
      subtitle:
        "Dostarczamy wysokiej jakości doczepiane włosy 100% Remy do profesjonalnych salonów w UK i UE — bezpośrednio z naszej fabryki do fotela w Twoim salonie, z opcjami private label. 19 lat doświadczenia w produkcji, 0 pośredników.",
      ctaPrimary: "Aplikuj o konto handlowe",
      ctaSecondary: "Zmień dostawcę",
      trust1: "Ponad 50 salonów w UK i UE",
      trust2: "Cyfrowe dopasowanie koloru",
      trust3: "Ekspresowa wysyłka do UK (3–5 dni)",
    },
    brandValues: [
      { title: "Darmowa dostawa do UK", description: "Darmowa dostawa standardowa przy zamówieniach powyżej £175" },
      { title: "Zwroty do 30 dni", description: "Łatwe zwroty w ciągu 30 dni od zakupu" },
      { title: "100% włosy Remy", description: "Włosy ludzkie premium, etycznie pozyskiwane" },
      { title: "Wsparcie ekspertów", description: "Zespół gotowy pomóc w wyborze idealnego produktu" },
    ],
    salonTrust: {
      eyebrow: "Zaufane przez salony",
      title: "Zaufane przez salony w UK i Irlandii",
      subtitle:
        "Od butikowych studiów w Liverpoolu po zatłoczone salony w centrum miasta — fryzjerzy wybierają D.S Hair & Beauty za niezawodne dostawy i stałą jakość.",
      images: [
        { alt: "Wnętrze profesjonalnego salonu fryzjerskiego", caption: "Premiumowe salony" },
        { alt: "Aplikacja doczepianych włosów", caption: "Ekspercka aplikacja" },
        { alt: "Profesjonalny fryzjer w pracy", caption: "Wykwalifikowani fryzjerzy" },
        { alt: "Nowoczesne miejsce pracy w salonie", caption: "Nowoczesne zaplecze" },
      ],
      stats: [
        { num: "19+", label: "Lat na rynku" },
        { num: "50+", label: "Obsłużonych salonów" },
        { num: "100%", label: "Włosy ludzkie Remy" },
        { num: "3–5 dni", label: "Dostawa ekspresowa" },
      ],
      ctaText: "Gotowy do dołączenia do sieci salonów D.S Hair & Beauty?",
      ctaButton: "Aplikuj o konto handlowe",
    },
    categoryGrid: {
      title: "Kupuj według kategorii",
      subtitle:
        "Znajdź idealne doczepiane włosy dla swojego stylu — czy jesteś entuzjastką DIY, czy profesjonalnym fryzjerem.",
      categories: [
        {
          title: "Clip-In",
          description: "Łatwe w aplikacji, natychmiastowa metamorfoza",
          href: "/collections/clip-in",
          image: "/images/category-clip-in.jpg",
          featured: true,
        },
        {
          title: "Tape-In",
          description: "Niewidoczne, trwałe efekty",
          href: "/collections/tape-in",
          image: "/images/category-tape-in.jpg",
          featured: false,
        },
        {
          title: "Kitki",
          description: "Natychmiastowy glam na każdą okazję",
          href: "/collections/ponytails",
          image: "/images/category-ponytails.jpg",
          featured: false,
        },
        {
          title: "Nano",
          description: "Jakość profesjonalna",
          href: "/collections/nano-extensions",
          image: "/images/category-nano-extensions.jpg",
          featured: false,
        },
      ],
    },
    featuredProducts: {
      title: "Bestsellerowe doczepiane włosy",
      subtitle: "Najbardziej lubiane doczepiane włosy, zaufane przez tysiące klientek na całym świecie.",
      tradePrice: "Cena handlowa",
      coloursAvailable: "dostępnych kolorów",
      viewAll: "Zobacz wszystkie doczepiane włosy",
      products: sharedFeaturedProducts,
    },
    dualPath: {
      title: "Wybierz swoją ścieżkę",
      subtitle:
        "Niezależnie od tego, czy chcesz podkreślić własny wygląd, czy zaopatrzyć klientki salonu w najlepsze produkty — mamy dokładnie to, czego potrzebujesz.",
      diy: {
        eyebrow: "Dla Ciebie",
        title: "DIY",
        description:
          "Zmień swój wygląd w domu dzięki łatwym w aplikacji clip-in, kitkom i innym produktom.",
        checks: ["Łatwa aplikacja", "Nie potrzebujesz salonu", "Wielokrotnego użytku"],
        cta: "Kup produkty DIY",
      },
      pro: {
        badge: "Dostawca salonów UK i UE",
        eyebrow: "Dla salonów i fryzjerów",
        title: "Produkty profesjonalne",
        description:
          "Ceny bezpośrednie z fabryki. Magazyn w UK w planie + ekspres 3–5 dni na cały asortyment. Bezpłatny cyfrowy katalog kolorów. Brak minimum zamówieniowego.",
        checks: [
          "Hand-Tied Weft",
          "Balayage Weft",
          "Nano Ring / Tape-In",
          "Ceny hurtowe",
          "Ekspres 3–5 dni",
        ],
        ctaPrimary: "Aplikuj o konto handlowe",
        ctaSecondary: "Przeglądaj produkty",
      },
      bottom: {
        title: "Magazyn w UK w planie i bezpośrednio z fabryki",
        description:
          "19 lat doświadczenia w doczepianych włosach. Bezpośrednie relacje z fabryką. Bezpłatny cyfrowy katalog kolorów przy pierwszym zamówieniu handlowym. Magazyn w UK w planie + ekspres bezpośrednio z fabryki w 3–5 dni.",
        cta: "Zostań partnerem →",
      },
    },
    services: {
      title: "Wsparcie ekspertów i usługi",
      subtitle:
        "Jesteśmy z Tobą na każdym kroku — od wyboru odpowiednich włosów po profesjonalne zaopatrzenie salonu.",
      items: [
        {
          title: "Partnerzy salonów",
          description:
            "Bezpośredni producent dla salonów UK i UE. Ceny handlowe, bezpłatny cyfrowy katalog kolorów, brak minimum zamówieniowego. Aplikuj o konto handlowe już dziś.",
          cta: "Aplikuj o konto handlowe",
          href: "/salon-partners",
          highlight: true,
        },
        {
          title: "Znajdź fryzjera",
          description:
            "Znajdź certyfikowanych profesjonalistów D.S HAIR & BEAUTY w swojej okolicy dla eksperckiej aplikacji.",
          cta: "Znajdź w pobliżu",
          href: "/find-stylist",
          highlight: false,
        },
        {
          title: "Szkolenia i certyfikacja",
          description: "Profesjonalne kursy szkoleniowe opanowania sztuki aplikacji doczepianych włosów.",
          cta: "Zobacz kursy",
          href: "/education",
          highlight: false,
        },
        {
          title: "Dopasowanie koloru",
          description: "Użyj naszego narzędzia do dopasowania koloru, aby znaleźć idealny odcień w naszej szerokiej ofercie.",
          cta: "Dopasuj mój kolor",
          href: "/colour-match",
          highlight: false,
        },
      ],
    },
    testimonials: {
      title: "Uwielbiane przez tysiące",
      subtitle: "Zobacz, co nasi klienci mówią o D.S HAIR & BEAUTY",
      purchased: "Zakupiono",
      items: [
        {
          name: "Sarah M.",
          location: "Londyn",
          rating: 5,
          text:
            "Absolutnie oszałamiająca jakość! Włosy Silk Seam idealnie łączą się z moimi naturalnymi włosami. Dostałam tyle komplementów. Zdecydowanie zamówię ponownie!",
          image: "/images/testimonial-1.jpg",
          product: "Silk Seam Clip-In Set",
        },
        {
          name: "Emma T.",
          location: "Manchester",
          rating: 5,
          text:
            "Jako fryzjerka używam tylko D.S HAIR & BEAUTY dla moich klientek. Jakość jest niezrównana, a obsługa klienta wyjątkowa. Gorąco polecam linię profesjonalną.",
          image: "/images/testimonial-2.jpg",
          product: "Professional Tape-Ins",
        },
        {
          name: "Jessica K.",
          location: "Birmingham",
          rating: 5,
          text:
            "Dopasowanie koloru było idealne! Martwiłam się zamawianiem online, ale zespół pomógł mi znaleźć dokładny odcień. Kitka to mój nowy must-have na imprezy.",
          image: "/images/testimonial-3.jpg",
          product: "Wrap Ponytail",
        },
      ],
    },
    instagram: {
      title: "Śledź naszą podróż",
      subtitle: "Oznacz @d.shairbeauty, aby mieć szansę na wyróżnienie",
      posts: sharedInstagramPosts,
    },
    quickQuote: {
      title: "Otrzymaj ceny hurtowe w ciągu 24 godzin",
      subtitle:
        "Otwórz konto handlowe już dziś — brak minimum zamówieniowego, darmowa dostawa do UK i wsparcie od prawdziwej osoby.",
      ctaPrimary: "Otwórz konto handlowe",
      ctaSecondary: "WhatsApp",
      whatsappMsg: "Cześć! Jestem zainteresowana cenami hurtowymi dla mojego salonu.",
    },
  },
}

export function getHomeContent(locale: Locale): HomeContent {
  return homeContent[locale] ?? homeContent.en
}
