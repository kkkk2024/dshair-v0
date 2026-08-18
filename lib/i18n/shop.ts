import type { Locale } from './config'

export type ShopUi = {
  productCard: {
    quickView: string
    tradePrice: string
    applyForAccess: string
    colours: string
    lengths: string
    length: string
    wishlistAria: (name: string) => string
    new: string
  }
  productGrid: {
    showing: (count: number) => string
    sortBy: string
    sortOptions: {
      featured: string
      newest: string
      priceLow: string
      priceHigh: string
      rating: string
    }
  }
  productFilters: {
    filters: string
    clearAll: (count: number) => string
    priceRange: string
    sections: {
      length: string
      colorFamily: string
      style: string
      weightVolume: string
    }
    options: {
      black: string
      brown: string
      blonde: string
      red: string
      balayage: string
      ombre: string
      rooted: string
      straight: string
      wavy: string
      curly: string
      light: string
      medium: string
      full: string
      extra: string
    }
    inStockOnly: string
  }
  collectionHeader: {
    typeAll: string
    typeDiy: string
    typeProfessional: string
    productCount: (count: number) => string
  }
  productDetail: {
    breadcrumbHome: string
    addToCart: string
    addToWishlist: string
    share: string
    quantity: string
    color: string
    length: string
    viewAllColours: string
    sizeGuide: string
    freeDelivery: string
    deliveryDays: string
    returns: string
    inStock: string
    outOfStock: string
    tradeExclusive: string
    tradeExclusiveDesc: string
    applyTradeAccount: string
    enquireWhatsApp: string
    orderWhatsApp: string
    emailInquiry: string
    tradeWhatsApp: (name: string) => string
    save: string
    reviews: (count: string) => string
    readAllReviews: string
    seeReviewsCta: string
    noMinOrder: string
    expressDispatch: string
    freeDigitalColourMatch: string
    freeDeliveryOver: string
    returns30: string
    warranty1Year: string
    preferToOrder: string
    contactUsOn: string
    whatsAppTitle: string
    emailSubject: (name: string) => string
    emailBody: (name: string, color: string, length: string, qty: number) => string
    tabs: {
      description: string
      howToUse: string
      perfectFit: string
      realResults: string
      features: string
      faq: string
      reviews: string
    }
    specs: {
      material: string
      origin: string
      warranty: string
      weight: string
      lifespan: string
    }
    relatedTitle: string
    readGuide: string
  }
  collectionPage: {
    noProducts: string
    browseAll: string
  }
}

const en: ShopUi = {
  productCard: {
    quickView: 'Quick View',
    tradePrice: 'Trade Price',
    applyForAccess: 'Apply for access →',
    colours: 'colours',
    lengths: 'lengths',
    length: 'length',
    wishlistAria: (name) => `Add ${name} to wishlist`,
    new: 'New',
  },
  productGrid: {
    showing: (count) => `Showing ${count} ${count === 1 ? 'product' : 'products'}`,
    sortBy: 'Sort by',
    sortOptions: {
      featured: 'Featured',
      newest: 'Newest',
      priceLow: 'Price: Low to High',
      priceHigh: 'Price: High to Low',
      rating: 'Top Rated',
    },
  },
  productFilters: {
    filters: 'Filters',
    clearAll: (count) => `Clear All (${count})`,
    priceRange: 'Price Range',
    sections: {
      length: 'Length',
      colorFamily: 'Colour Family',
      style: 'Style',
      weightVolume: 'Weight/Volume',
    },
    options: {
      black: 'Black',
      brown: 'Brown',
      blonde: 'Blonde',
      red: 'Red/Auburn',
      balayage: 'Balayage',
      ombre: 'Ombre',
      rooted: 'Rooted',
      straight: 'Straight',
      wavy: 'Wavy',
      curly: 'Curly',
      light: 'Light (100-120g)',
      medium: 'Medium (140-180g)',
      full: 'Full (200-220g)',
      extra: 'Extra Full (240g+)',
    },
    inStockOnly: 'In Stock Only',
  },
  collectionHeader: {
    typeAll: 'All Products',
    typeDiy: 'DIY Extensions',
    typeProfessional: 'Professional',
    productCount: (count) => `${count} ${count === 1 ? 'product' : 'products'}`,
  },
  productDetail: {
    breadcrumbHome: 'Home',
    addToCart: 'Add to Cart',
    addToWishlist: 'Add to Wishlist',
    share: 'Share',
    quantity: 'Quantity',
    color: 'Colour',
    length: 'Length',
    viewAllColours: 'View all colours',
    sizeGuide: 'Size guide',
    freeDelivery: 'Free UK delivery over £50',
    deliveryDays: '3–5 working days UK',
    returns: '30-day returns',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    tradeExclusive: 'Trade Exclusive Pricing',
    tradeExclusiveDesc: 'Wholesale pricing available for registered salon partners',
    applyTradeAccount: 'Apply for Trade Account',
    enquireWhatsApp: 'Enquire via WhatsApp',
    orderWhatsApp: 'Order via WhatsApp',
    emailInquiry: 'Email Inquiry',
    tradeWhatsApp: (name) => `Hi D.S HAIR & BEAUTY! I'm a salon owner interested in trade pricing for: ${name}`,
    save: 'Save',
    reviews: (count) => `Reviews (${count})`,
    readAllReviews: 'Read All Reviews',
    seeReviewsCta: 'See what our customers are saying',
    noMinOrder: 'No minimum order',
    expressDispatch: 'Express 3–5 day dispatch',
    freeDigitalColourMatch: 'Free digital colour match',
    freeDeliveryOver: 'Free UK Delivery over £175',
    returns30: '30-Day Returns',
    warranty1Year: '1 Year Warranty',
    preferToOrder: 'Prefer to order differently?',
    contactUsOn: 'Contact us on WhatsApp: {phone} or email: {email}',
    whatsAppTitle: "Hi D.S HAIR & BEAUTY!\n\nI'm interested in:\n- Product: {name}\n- Price: {price}\n- Colour: {color}\n- Length: {length}\n- Quantity: {qty}\n\nPlease let me know more details. Thanks!",
    emailSubject: (name) => `Inquiry about ${name}`,
    emailBody: (name, color, length, qty) =>
      `Hi D.S HAIR & BEAUTY,\n\nI'm interested in:\n- Product: ${name}\n- Colour: ${color}\n- Length: ${length}\n- Quantity: ${qty}\n\nPlease let me know more details. Thanks!\n\nBest regards`,
    tabs: {
      description: 'Description',
      howToUse: 'How To Use',
      perfectFit: 'Finding the Perfect Fit',
      realResults: 'Real Results',
      features: 'Features',
      faq: 'FAQ',
      reviews: 'Reviews',
    },
    specs: {
      material: 'Material',
      origin: 'Origin',
      warranty: 'Warranty',
      weight: 'Weight',
      lifespan: 'Lifespan',
    },
    relatedTitle: 'You may also like',
    readGuide: 'Read guide',
  },
  collectionPage: {
    noProducts: 'No products found in this collection.',
    browseAll: 'Browse all products',
  },
}

const de: ShopUi = {
  productCard: {
    quickView: 'Schnellansicht',
    tradePrice: 'Handelspreis',
    applyForAccess: 'Zugang beantragen →',
    colours: 'Farben',
    lengths: 'Längen',
    length: 'Länge',
    wishlistAria: (name) => `${name} zur Wunschliste hinzufügen`,
    new: 'Neu',
  },
  productGrid: {
    showing: (count) => `${count} ${count === 1 ? 'Produkt' : 'Produkte'} angezeigt`,
    sortBy: 'Sortieren nach',
    sortOptions: {
      featured: 'Empfohlen',
      newest: 'Neueste',
      priceLow: 'Preis: niedrig bis hoch',
      priceHigh: 'Preis: hoch bis niedrig',
      rating: 'Bestbewertet',
    },
  },
  productFilters: {
    filters: 'Filter',
    clearAll: (count) => `Alle löschen (${count})`,
    priceRange: 'Preisspanne',
    sections: {
      length: 'Länge',
      colorFamily: 'Farbfamilie',
      style: 'Stil',
      weightVolume: 'Gewicht/Volumen',
    },
    options: {
      black: 'Schwarz',
      brown: 'Braun',
      blonde: 'Blond',
      red: 'Rot/Kastanie',
      balayage: 'Balayage',
      ombre: 'Ombre',
      rooted: 'Ansatz',
      straight: 'Glatt',
      wavy: 'Gewellt',
      curly: 'Lockig',
      light: 'Leicht (100–120g)',
      medium: 'Mittel (140–180g)',
      full: 'Voll (200–220g)',
      extra: 'Extra Voll (240g+)',
    },
    inStockOnly: 'Nur auf Lager',
  },
  collectionHeader: {
    typeAll: 'Alle Produkte',
    typeDiy: 'DIY Extensions',
    typeProfessional: 'Professional',
    productCount: (count) => `${count} ${count === 1 ? 'Produkt' : 'Produkte'}`,
  },
  productDetail: {
    breadcrumbHome: 'Startseite',
    addToCart: 'In den Warenkorb',
    addToWishlist: 'Auf die Wunschliste',
    share: 'Teilen',
    quantity: 'Menge',
    color: 'Farbe',
    length: 'Länge',
    viewAllColours: 'Alle Farben ansehen',
    sizeGuide: 'Größentabelle',
    freeDelivery: 'Kostenlose Lieferung in UK ab £50',
    deliveryDays: '3–5 Werktage UK',
    returns: '30 Tage Rückgabe',
    inStock: 'Auf Lager',
    outOfStock: 'Nicht auf Lager',
    tradeExclusive: 'Exklusive Handelspreise',
    tradeExclusiveDesc: 'Großhandelspreise für registrierte Salon-Partner',
    applyTradeAccount: 'Handelskonto beantragen',
    enquireWhatsApp: 'Per WhatsApp anfragen',
    orderWhatsApp: 'Per WhatsApp bestellen',
    emailInquiry: 'E-Mail-Anfrage',
    tradeWhatsApp: (name) => `Hallo D.S HAIR & BEAUTY! Ich bin Saloninhaber und interessiert an Handelspreisen für: ${name}`,
    save: 'Sparen',
    reviews: (count) => `Bewertungen (${count})`,
    readAllReviews: 'Alle Bewertungen lesen',
    seeReviewsCta: 'Sehen Sie, was unsere Kunden sagen',
    noMinOrder: 'Keine Mindestbestellmenge',
    expressDispatch: 'Express-Versand 3–5 Tage',
    freeDigitalColourMatch: 'Kostenloser digitaler Farbabgleich',
    freeDeliveryOver: 'Kostenlose UK-Lieferung ab £175',
    returns30: '30 Tage Rückgabe',
    warranty1Year: '1 Jahr Garantie',
    preferToOrder: 'Lieber anders bestellen?',
    contactUsOn: 'Kontaktieren Sie uns per WhatsApp: {phone} oder E-Mail: {email}',
    whatsAppTitle: "Hallo D.S HAIR & BEAUTY!\n\nIch interessiere mich für:\n- Produkt: {name}\n- Preis: {price}\n- Farbe: {color}\n- Länge: {length}\n- Menge: {qty}\n\nBitte mehr Details. Danke!",
    emailSubject: (name) => `Anfrage zu ${name}`,
    emailBody: (name, color, length, qty) =>
      `Hallo D.S HAIR & BEAUTY,\n\nich interessiere mich für:\n- Produkt: ${name}\n- Farbe: ${color}\n- Länge: ${length}\n- Menge: ${qty}\n\nBitte mehr Details. Danke!\n\nMit freundlichen Grüßen`,
    tabs: {
      description: 'Beschreibung',
      howToUse: 'Anwendung',
      perfectFit: 'Die perfekte Passform',
      realResults: 'Echte Ergebnisse',
      features: 'Merkmale',
      faq: 'FAQ',
      reviews: 'Bewertungen',
    },
    specs: {
      material: 'Material',
      origin: 'Herkunft',
      warranty: 'Garantie',
      weight: 'Gewicht',
      lifespan: 'Lebensdauer',
    },
    relatedTitle: 'Das könnte Ihnen auch gefallen',
    readGuide: 'Ratgeber lesen',
  },
  collectionPage: {
    noProducts: 'Keine Produkte in dieser Kollektion gefunden.',
    browseAll: 'Alle Produkte ansehen',
  },
}

const fr: ShopUi = {
  productCard: {
    quickView: 'Aperçu rapide',
    tradePrice: 'Prix pro',
    applyForAccess: "Demander l'accès →",
    colours: 'couleurs',
    lengths: 'longueurs',
    length: 'longueur',
    wishlistAria: (name) => `Ajouter ${name} à la liste de souhaits`,
    new: 'Nouveau',
  },
  productGrid: {
    showing: (count) => `${count} ${count === 1 ? 'produit' : 'produits'} affiché${count === 1 ? '' : 's'}`,
    sortBy: 'Trier par',
    sortOptions: {
      featured: 'Recommandé',
      newest: 'Nouveautés',
      priceLow: 'Prix : croissant',
      priceHigh: 'Prix : décroissant',
      rating: 'Mieux notés',
    },
  },
  productFilters: {
    filters: 'Filtres',
    clearAll: (count) => `Tout effacer (${count})`,
    priceRange: 'Fourchette de prix',
    sections: {
      length: 'Longueur',
      colorFamily: 'Famille de couleur',
      style: 'Style',
      weightVolume: 'Poids/Volume',
    },
    options: {
      black: 'Noir',
      brown: 'Brun',
      blonde: 'Blond',
      red: 'Rouge/Auburn',
      balayage: 'Balayage',
      ombre: 'Ombre',
      rooted: 'Racines',
      straight: 'Lisse',
      wavy: 'Ondulé',
      curly: 'Bouclé',
      light: 'Léger (100–120g)',
      medium: 'Moyen (140–180g)',
      full: 'Plein (200–220g)',
      extra: 'Extra plein (240g+)',
    },
    inStockOnly: 'En stock uniquement',
  },
  collectionHeader: {
    typeAll: 'Tous les produits',
    typeDiy: 'Extensions DIY',
    typeProfessional: 'Professionnel',
    productCount: (count) => `${count} ${count === 1 ? 'produit' : 'produits'}`,
  },
  productDetail: {
    breadcrumbHome: 'Accueil',
    addToCart: 'Ajouter au panier',
    addToWishlist: 'Ajouter à la liste de souhaits',
    share: 'Partager',
    quantity: 'Quantité',
    color: 'Couleur',
    length: 'Longueur',
    viewAllColours: 'Voir toutes les couleurs',
    sizeGuide: 'Guide des tailles',
    freeDelivery: 'Livraison gratuite au UK dès £50',
    deliveryDays: '3–5 jours ouvrés UK',
    returns: 'Retours sous 30 jours',
    inStock: 'En stock',
    outOfStock: 'Rupture de stock',
    tradeExclusive: 'Prix pro exclusifs',
    tradeExclusiveDesc: 'Prix de gros réservés aux partenaires salon enregistrés',
    applyTradeAccount: 'Demander un compte pro',
    enquireWhatsApp: 'Demander par WhatsApp',
    orderWhatsApp: 'Commander par WhatsApp',
    emailInquiry: 'Demande par e-mail',
    tradeWhatsApp: (name) => `Bonjour D.S HAIR & BEAUTY ! Je suis propriétaire de salon et intéressé(e) par les tarifs professionnels pour : ${name}`,
    save: 'Économisez',
    reviews: (count) => `Avis (${count})`,
    readAllReviews: 'Lire tous les avis',
    seeReviewsCta: 'Découvrez ce que disent nos clientes',
    noMinOrder: 'Pas de minimum de commande',
    expressDispatch: 'Expédition express 3–5 jours',
    freeDigitalColourMatch: 'Mise en couleur numérique gratuite',
    freeDeliveryOver: 'Livraison gratuite au UK dès £175',
    returns30: 'Retours 30 jours',
    warranty1Year: 'Garantie 1 an',
    preferToOrder: 'Vous préférez commander autrement ?',
    contactUsOn: 'Contactez-nous sur WhatsApp : {phone} ou par e-mail : {email}',
    whatsAppTitle: "Bonjour D.S HAIR & BEAUTY!\n\nJe suis intéressé(e) par :\n- Produit : {name}\n- Prix : {price}\n- Couleur : {color}\n- Longueur : {length}\n- Quantité : {qty}\n\nMerci de me donner plus de détails.",
    emailSubject: (name) => `Demande concernant ${name}`,
    emailBody: (name, color, length, qty) =>
      `Bonjour D.S HAIR & BEAUTY,\n\nje suis intéressé(e) par :\n- Produit : ${name}\n- Couleur : ${color}\n- Longueur : ${length}\n- Quantité : ${qty}\n\nMerci de me donner plus de détails.\n\nCordialement`,
    tabs: {
      description: 'Description',
      howToUse: 'Mode d\'emploi',
      perfectFit: 'Trouver la taille idéale',
      realResults: 'Résultats réels',
      features: 'Caractéristiques',
      faq: 'FAQ',
      reviews: 'Avis',
    },
    specs: {
      material: 'Matériau',
      origin: 'Origine',
      warranty: 'Garantie',
      weight: 'Poids',
      lifespan: 'Durée de vie',
    },
    relatedTitle: 'Vous aimerez aussi',
    readGuide: 'Lire le guide',
  },
  collectionPage: {
    noProducts: 'Aucun produit trouvé dans cette collection.',
    browseAll: 'Voir tous les produits',
  },
}

const ar: ShopUi = {
  productCard: {
    quickView: 'نظرة سريعة',
    tradePrice: 'سعر الجملة',
    applyForAccess: 'اطلب الوصول ←',
    colours: 'ألوان',
    lengths: 'أطوال',
    length: 'طول',
    wishlistAria: (name) => `أضف ${name} إلى قائمة الأمنيات`,
    new: 'جديد',
  },
  productGrid: {
    showing: (count) => `عرض ${count} ${count === 1 ? 'منتج' : 'منتجات'}`,
    sortBy: 'ترتيب حسب',
    sortOptions: {
      featured: 'مميز',
      newest: 'الأحدث',
      priceLow: 'السعر: من الأقل للأعلى',
      priceHigh: 'السعر: من الأعلى للأقل',
      rating: 'الأعلى تقييمًا',
    },
  },
  productFilters: {
    filters: 'الفلاتر',
    clearAll: (count) => `مسح الكل (${count})`,
    priceRange: 'نطاق السعر',
    sections: {
      length: 'الطول',
      colorFamily: 'عائلة اللون',
      style: 'النمط',
      weightVolume: 'الوزن/الكثافة',
    },
    options: {
      black: 'أسود',
      brown: 'بني',
      blonde: 'أشقر',
      red: 'أحمر/كستنائي',
      balayage: 'بالياج',
      ombre: 'أومبري',
      rooted: 'جذور داكنة',
      straight: 'ناعم',
      wavy: 'مموج',
      curly: 'مجعد',
      light: 'خفيف (100–120غ)',
      medium: 'متوسط (140–180غ)',
      full: 'كامل (200–220غ)',
      extra: 'كثيف جدًا (240غ+)',
    },
    inStockOnly: 'المتوفر فقط',
  },
  collectionHeader: {
    typeAll: 'جميع المنتجات',
    typeDiy: 'إكسسوارات DIY',
    typeProfessional: 'احترافي',
    productCount: (count) => `${count} ${count === 1 ? 'منتج' : 'منتجات'}`,
  },
  productDetail: {
    breadcrumbHome: 'الرئيسية',
    addToCart: 'أضف إلى السلة',
    addToWishlist: 'أضف إلى قائمة الأمنيات',
    share: 'مشاركة',
    quantity: 'الكمية',
    color: 'اللون',
    length: 'الطول',
    viewAllColours: 'عرض جميع الألوان',
    sizeGuide: 'دليل المقاسات',
    freeDelivery: 'توصيل مجاني في UK للطلبات فوق £50',
    deliveryDays: '3–5 أيام عمل في UK',
    returns: 'إرجاع خلال 30 يومًا',
    inStock: 'متوفر',
    outOfStock: 'غير متوفر',
    tradeExclusive: 'أسعار حصرية للتجارة',
    tradeExclusiveDesc: 'أسعار الجملة متاحة لشركاء الصالون المسجلين',
    applyTradeAccount: 'التقدم بحساب تجاري',
    enquireWhatsApp: 'استفسر عبر واتساب',
    orderWhatsApp: 'اطلب عبر واتساب',
    emailInquiry: 'استفسار بالبريد',
    tradeWhatsApp: (name) => `مرحبًا D.S HAIR & BEAUTY! أنا مالك صالون مهتم بأسعار الجملة لـ: ${name}`,
    save: 'وفر',
    reviews: (count) => `التقييمات (${count})`,
    readAllReviews: 'اقرأ جميع التقييمات',
    seeReviewsCta: 'شاهد ما يقوله عملاؤنا',
    noMinOrder: 'لا يوجد حد أدنى للطلب',
    expressDispatch: 'شحن سريع 3–5 أيام',
    freeDigitalColourMatch: 'مطابقة لون رقمية مجانية',
    freeDeliveryOver: 'توصيل مجاني في UK للطلبات فوق £175',
    returns30: 'إرجاع خلال 30 يومًا',
    warranty1Year: 'ضمان سنة واحدة',
    preferToOrder: 'تفضل الطلب بطريقة أخرى؟',
    contactUsOn: 'تواصل معنا عبر واتساب: {phone} أو البريد: {email}',
    whatsAppTitle: "مرحبًا D.S HAIR & BEAUTY!\n\nأنا مهتم بـ:\n- المنتج: {name}\n- السعر: {price}\n- اللون: {color}\n- الطول: {length}\n- الكمية: {qty}\n\nيرجى تزويدي بالمزيد من التفاصيل. شكرًا!",
    emailSubject: (name) => `استفسار حول ${name}`,
    emailBody: (name, color, length, qty) =>
      `مرحبًا D.S HAIR & BEAUTY،\n\nأنا مهتم بـ:\n- المنتج: ${name}\n- اللون: ${color}\n- الطول: ${length}\n- الكمية: ${qty}\n\nيرجى تزويدي بالمزيد من التفاصيل. شكرًا!\n\nتحياتي`,
    tabs: {
      description: 'الوصف',
      howToUse: 'طريقة الاستخدام',
      perfectFit: 'إيجاد المقاس المثالي',
      realResults: 'نتائج حقيقية',
      features: 'المميزات',
      faq: 'الأسئلة الشائعة',
      reviews: 'التقييمات',
    },
    specs: {
      material: 'المادة',
      origin: 'بلد المنشأ',
      warranty: 'الضمان',
      weight: 'الوزن',
      lifespan: 'عمر الاستخدام',
    },
    relatedTitle: 'قد يعجبك أيضًا',
    readGuide: 'اقرأ الدليل',
  },
  collectionPage: {
    noProducts: 'لا توجد منتجات في هذه المجموعة.',
    browseAll: 'تصفح جميع المنتجات',
  },
}

const sv: ShopUi = {
  productCard: {
    quickView: 'Snabbvy',
    tradePrice: 'Handelspris',
    applyForAccess: 'Ansök om tillgång →',
    colours: 'färger',
    lengths: 'längder',
    length: 'längd',
    wishlistAria: (name) => `Lägg till ${name} i önskelistan`,
    new: 'Ny',
  },
  productGrid: {
    showing: (count) => `Visar ${count} ${count === 1 ? 'produkt' : 'produkter'}`,
    sortBy: 'Sortera efter',
    sortOptions: {
      featured: 'Utvalda',
      newest: 'Nyaste',
      priceLow: 'Pris: lågt till högt',
      priceHigh: 'Pris: högt till lågt',
      rating: 'Högst betyg',
    },
  },
  productFilters: {
    filters: 'Filter',
    clearAll: (count) => `Rensa alla (${count})`,
    priceRange: 'Prisintervall',
    sections: {
      length: 'Längd',
      colorFamily: 'Färgfamilj',
      style: 'Stil',
      weightVolume: 'Vikt/Volym',
    },
    options: {
      black: 'Svart',
      brown: 'Brun',
      blonde: 'Blond',
      red: 'Röd/Auburn',
      balayage: 'Balayage',
      ombre: 'Ombre',
      rooted: 'Rooted',
      straight: 'Rakt',
      wavy: 'Vågigt',
      curly: 'Lockigt',
      light: 'Lätt (100–120g)',
      medium: 'Medel (140–180g)',
      full: 'Fullt (200–220g)',
      extra: 'Extra fullt (240g+)',
    },
    inStockOnly: 'Endast i lager',
  },
  collectionHeader: {
    typeAll: 'Alla produkter',
    typeDiy: 'DIY Extensions',
    typeProfessional: 'Professionell',
    productCount: (count) => `${count} ${count === 1 ? 'produkt' : 'produkter'}`,
  },
  productDetail: {
    breadcrumbHome: 'Hem',
    addToCart: 'Lägg i varukorgen',
    addToWishlist: 'Lägg till önskelistan',
    share: 'Dela',
    quantity: 'Antal',
    color: 'Färg',
    length: 'Längd',
    viewAllColours: 'Visa alla färger',
    sizeGuide: 'Storleksguide',
    freeDelivery: 'Gratis frakt i UK över £50',
    deliveryDays: '3–5 arbetsdagar UK',
    returns: '30 dagars retur',
    inStock: 'I lager',
    outOfStock: 'Slut i lager',
    tradeExclusive: 'Exklusiva handelspriser',
    tradeExclusiveDesc: 'Partipriser tillgängliga för registrerade salongspartners',
    applyTradeAccount: 'Ansök om handelskonto',
    enquireWhatsApp: 'Fråga via WhatsApp',
    orderWhatsApp: 'Beställ via WhatsApp',
    emailInquiry: 'Förfrågan via e-post',
    tradeWhatsApp: (name) => `Hej D.S HAIR & BEAUTY! Jag är salongägare och intresserad av handelspriser för: ${name}`,
    save: 'Spara',
    reviews: (count) => `Recensioner (${count})`,
    readAllReviews: 'Läs alla recensioner',
    seeReviewsCta: 'Se vad våra kunder säger',
    noMinOrder: 'Inget minimiköp',
    expressDispatch: 'Expressleverans 3–5 dagar',
    freeDigitalColourMatch: 'Gratis digital färgmatchning',
    freeDeliveryOver: 'Gratis UK-leverans över £175',
    returns30: '30 dagars retur',
    warranty1Year: '1 års garanti',
    preferToOrder: 'Föredrar du att beställa på annat sätt?',
    contactUsOn: 'Kontakta oss på WhatsApp: {phone} eller e-post: {email}',
    whatsAppTitle: "Hej D.S HAIR & BEAUTY!\n\nJag är intresserad av:\n- Produkt: {name}\n- Pris: {price}\n- Färg: {color}\n- Längd: {length}\n- Antal: {qty}\n\nVänligen ge mig mer information. Tack!",
    emailSubject: (name) => `Förfrågan om ${name}`,
    emailBody: (name, color, length, qty) =>
      `Hej D.S HAIR & BEAUTY,\n\njag är intresserad av:\n- Produkt: ${name}\n- Färg: ${color}\n- Längd: ${length}\n- Antal: ${qty}\n\nVänligen ge mig mer information. Tack!\n\nMed vänlig hälsning`,
    tabs: {
      description: 'Beskrivning',
      howToUse: 'Så använder du',
      perfectFit: 'Hitta rätt passform',
      realResults: 'Verkliga resultat',
      features: 'Funktioner',
      faq: 'Vanliga frågor',
      reviews: 'Recensioner',
    },
    specs: {
      material: 'Material',
      origin: 'Ursprung',
      warranty: 'Garanti',
      weight: 'Vikt',
      lifespan: 'Livslängd',
    },
    relatedTitle: 'Du kanske också gillar',
    readGuide: 'Läs guiden',
  },
  collectionPage: {
    noProducts: 'Inga produkter hittades i denna kollektion.',
    browseAll: 'Bläddra bland alla produkter',
  },
}

const pl: ShopUi = {
  productCard: {
    quickView: 'Szybki podgląd',
    tradePrice: 'Cena handlowa',
    applyForAccess: 'Poproś o dostęp →',
    colours: 'kolorów',
    lengths: 'długości',
    length: 'długość',
    wishlistAria: (name) => `Dodaj ${name} do listy życzeń`,
    new: 'Nowość',
  },
  productGrid: {
    showing: (count) => `Pokazano ${count} ${count === 1 ? 'produkt' : count < 5 ? 'produkty' : 'produktów'}`,
    sortBy: 'Sortuj według',
    sortOptions: {
      featured: 'Polecane',
      newest: 'Najnowsze',
      priceLow: 'Cena: od najniższej',
      priceHigh: 'Cena: od najwyższej',
      rating: 'Najwyżej oceniane',
    },
  },
  productFilters: {
    filters: 'Filtry',
    clearAll: (count) => `Wyczyść wszystkie (${count})`,
    priceRange: 'Zakres cen',
    sections: {
      length: 'Długość',
      colorFamily: 'Rodzina kolorów',
      style: 'Styl',
      weightVolume: 'Waga/objętość',
    },
    options: {
      black: 'Czarny',
      brown: 'Brązowy',
      blonde: 'Blond',
      red: 'Rudy/Kasztanowy',
      balayage: 'Balayage',
      ombre: 'Ombre',
      rooted: 'Rooted',
      straight: 'Proste',
      wavy: 'Falowane',
      curly: 'Kręcone',
      light: 'Lekkie (100–120g)',
      medium: 'Średnie (140–180g)',
      full: 'Pełne (200–220g)',
      extra: 'Bardzo pełne (240g+)',
    },
    inStockOnly: 'Tylko dostępne',
  },
  collectionHeader: {
    typeAll: 'Wszystkie produkty',
    typeDiy: 'Extensions DIY',
    typeProfessional: 'Professional',
    productCount: (count) => `${count} ${count === 1 ? 'produkt' : count < 5 ? 'produkty' : 'produktów'}`,
  },
  productDetail: {
    breadcrumbHome: 'Strona główna',
    addToCart: 'Dodaj do koszyka',
    addToWishlist: 'Dodaj do listy życzeń',
    share: 'Udostępnij',
    quantity: 'Ilość',
    color: 'Kolor',
    length: 'Długość',
    viewAllColours: 'Zobacz wszystkie kolory',
    sizeGuide: 'Przewodnik rozmiarów',
    freeDelivery: 'Darmowa dostawa w UK od £50',
    deliveryDays: '3–5 dni roboczych UK',
    returns: 'Zwrot do 30 dni',
    inStock: 'Dostępne',
    outOfStock: 'Niedostępne',
    tradeExclusive: 'Ceny ekskluzywne dla handlu',
    tradeExclusiveDesc: 'Ceny hurtowe dla zarejestrowanych partnerów salonów',
    applyTradeAccount: 'Złóż wniosek o konto handlowe',
    enquireWhatsApp: 'Zapytaj przez WhatsApp',
    orderWhatsApp: 'Zamów przez WhatsApp',
    emailInquiry: 'Zapytanie e-mail',
    tradeWhatsApp: (name) => `Cześć D.S HAIR & BEAUTY! Jestem właścicielem salonu i interesują mnie ceny hurtowe dla: ${name}`,
    save: 'Zapisz',
    reviews: (count) => `Opinie (${count})`,
    readAllReviews: 'Przeczytaj wszystkie opinie',
    seeReviewsCta: 'Zobacz, co mówią nasi klienci',
    noMinOrder: 'Brak minimum zamówienia',
    expressDispatch: 'Ekspresowa wysyłka 3–5 dni',
    freeDigitalColourMatch: 'Bezpłatne cyfrowe dobieranie koloru',
    freeDeliveryOver: 'Darmowa dostawa w UK od £175',
    returns30: 'Zwrot do 30 dni',
    warranty1Year: '1-roczna gwarancja',
    preferToOrder: 'Wolisz zamówić inaczej?',
    contactUsOn: 'Skontaktuj się z nami przez WhatsApp: {phone} lub e-mail: {email}',
    whatsAppTitle: "Cześć D.S HAIR & BEAUTY!\n\nInteresuje mnie:\n- Produkt: {name}\n- Cena: {price}\n- Kolor: {color}\n- Długość: {length}\n- Ilość: {qty}\n\nProszę o więcej szczegółów. Dzięki!",
    emailSubject: (name) => `Zapytanie o ${name}`,
    emailBody: (name, color, length, qty) =>
      `Cześć D.S HAIR & BEAUTY,\n\ninteresuje mnie:\n- Produkt: ${name}\n- Kolor: ${color}\n- Długość: ${length}\n- Ilość: ${qty}\n\nProszę o więcej szczegółów. Dzięki!\n\nPozdrawiam`,
    tabs: {
      description: 'Opis',
      howToUse: 'Jak stosować',
      perfectFit: 'Dobieranie idealnego dopasowania',
      realResults: 'Rzeczywiste rezultaty',
      features: 'Funkcje',
      faq: 'FAQ',
      reviews: 'Opinie',
    },
    specs: {
      material: 'Materiał',
      origin: 'Pochodzenie',
      warranty: 'Gwarancja',
      weight: 'Waga',
      lifespan: 'Żywotność',
    },
    relatedTitle: 'Może Ci się spodobać',
    readGuide: 'Przeczytaj poradnik',
  },
  collectionPage: {
    noProducts: 'Nie znaleziono produktów w tej kolekcji.',
    browseAll: 'Przeglądaj wszystkie produkty',
  },
}

export const shopUi: Record<Locale, ShopUi> = { en, de, fr, ar, sv, pl }

export function getShopUi(locale: Locale): ShopUi {
  return shopUi[locale] ?? shopUi.en
}
