// D.S Hair & Beauty Products Database
// This file contains all product data
// Later we can connect to Airtable for easy management

export interface Product {
  id: string
  handle: string
  name: string
  title: string
  description: string
  shortDescription: string
  vendor: string
  productType: string
  type: "diy" | "professional"
  tags: string[]
  price: number
  originalPrice?: number
  currencyCode: string
  image: string
  images: string[]
  variants: any[]
  inStock: boolean
  badge?: string
  rating: number
  reviews: number
  colors: { name: string; hex: string }[]
  lengths: string[]
  slug: string
  category: string
  features: string[]
}

// Placeholder image helper
const getPlaceholderImage = (name: string, slug: string) => 
  `https://placehold.co/600x800/e8d5c4/8b7355?text=${encodeURIComponent(name)}`

export const products: Product[] = [
  // Only showing the new D.S HAIR Clip-In product (removed old products)
  {
    id: "3",
    handle: "wrap-ponytail",
    name: "Wrap Ponytail",
    title: "Wrap Ponytail",
    description: "Instant volume and length. Easy to attach and remove. Our wrap ponytail gives you a glamorous look in seconds.",
    shortDescription: "Instant volume and length",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Ponytails",
    type: "diy",
    tags: ["ponytail", "new"],
    price: 89,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: getPlaceholderImage("Wrap Ponytail", "ponytail"),
    images: [getPlaceholderImage("Wrap Ponytail", "ponytail")],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 4.9,
    reviews: 856,
    colors: [
      { name: "Natural Black", hex: "#1a1a1a" },
      { name: "Dark Brown", hex: "#3d2314" },
      { name: "Medium Brown", hex: "#6b4423" },
      { name: "Blonde", hex: "#f5deb3" },
    ],
    lengths: ["12 inches", "16 inches"],
    slug: "wrap-ponytail",
    category: "DIY Extensions",
    features: ["Instant transformation", "No clips or glue needed", "Secure wrap-around band", "Multiple styling options"],
  },
  {
    id: "4",
    handle: "professional-tape-in",
    name: "Professional Tape-Ins",
    title: "Professional Tape-Ins",
    description: "Professional grade tape-ins for salon use. Premium quality tape-in extensions that last 6-8 weeks.",
    shortDescription: "Professional grade tape-ins",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Tape-In Extensions",
    type: "professional",
    tags: ["tape-in", "professional"],
    price: 159,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: getPlaceholderImage("Tape-In", "tapein"),
    images: [getPlaceholderImage("Tape-In", "tapein")],
    variants: [],
    inStock: true,
    badge: undefined,
    rating: 4.7,
    reviews: 1247,
    colors: [
      { name: "Natural Black", hex: "#1a1a1a" },
      { name: "Dark Brown", hex: "#3d2314" },
      { name: "Medium Brown", hex: "#6b4423" },
      { name: "Chestnut", hex: "#8b5a2b" },
      { name: "Honey Blonde", hex: "#eb9605" },
      { name: "Platinum Blonde", hex: "#e5e4e2" },
    ],
    lengths: ["12 inches", "14 inches", "16 inches", "18 inches", "20 inches"],
    slug: "professional-tape-in",
    category: "Professional Extensions",
    features: ["Professional grade", "6-8 weeks wear time", "Salon quality", "Korean keratin tips", "Easy application"],
  },
  // NEW PRODUCT - Donna Bella inspired
  {
    id: "4b",
    handle: "signature-tape-in",
    name: "Signature Tape-In Pro Straight",
    title: "Signature Tape-In Pro Straight",
    description: "D.S HAIR's Signature Tape-In method is a tried and true system that uses a special adhesive formula to attach to hair. Made with 100% Remy human hair, the Signature Tape-In Hair Extension is popular, effective, and well-loved by professional stylists and end-users around the world.\n\nMaintenance:\n• Move-ups every 4-6 weeks\n• Extensions last up to 6 months with proper care",
    shortDescription: "Premium tape-ins with signature adhesive",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Tape-In Extensions",
    type: "professional",
    tags: ["tape-in", "professional", "signature", "platinum-blonde"],
    price: 179,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/products/signature-tape-in/product-1.jpg",
    images: [
      "/images/products/signature-tape-in/product-1.jpg",
      "/images/products/signature-tape-in/product-2.jpg",
      "/images/products/signature-tape-in/product-3.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "Best Seller",
    rating: 4.8,
    reviews: 523,
    colors: [
      { name: "Natural Black", hex: "#1a1a1a" },
      { name: "Dark Brown", hex: "#3d2314" },
      { name: "Medium Brown", hex: "#6b4423" },
      { name: "Chestnut", hex: "#8b5a2b" },
      { name: "Blonde", hex: "#f5deb3" },
      { name: "Cool Platinum Blonde", hex: "#e5e4e2" },
    ],
    lengths: ["12 inches", "14 inches", "16 inches", "18 inches", "20 inches", "22 inches"],
    slug: "signature-tape-in",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Signature adhesive formula", "Professional stylists choice", "Lasts 6 months with proper care", "Natural blend with own hair"],
  },
  {
    id: "5",
    handle: "volumizing-weft",
    name: "Volumizing Weft",
    title: "Volumizing Weft",
    description: "Add fullness effortlessly with our premium weft extensions. Hand-tied for natural movement.",
    shortDescription: "Add fullness effortlessly",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Weft Extensions",
    type: "diy",
    tags: ["weft", "bestseller", "volume"],
    price: 129,
    originalPrice: 159,
    currencyCode: "GBP",
    image: getPlaceholderImage("Volumizing Weft", "weft"),
    images: [getPlaceholderImage("Volumizing Weft", "weft")],
    variants: [],
    inStock: true,
    badge: "Best Seller",
    rating: 4.8,
    reviews: 956,
    colors: [
      { name: "Natural Black", hex: "#1a1a1a" },
      { name: "Dark Brown", hex: "#3d2314" },
      { name: "Medium Brown", hex: "#6b4423" },
      { name: "Chestnut", hex: "#8b5a2b" },
    ],
    lengths: ["10 inches", "12 inches", "14 inches", "16 inches"],
    slug: "volumizing-weft",
    category: "DIY Extensions",
    features: ["Hand-tied wefts", "Maximum volume", "Cut to size", "Secure stitching", "Natural movement"],
  },
  {
    id: "6",
    handle: "k-tip-extensions",
    name: "K-Tip Extensions",
    title: "K-Tip Extensions",
    description: "Keratin bonded tips for long-lasting results. Individual strands for a natural, seamless blend.",
    shortDescription: "Keratin bonded for long-lasting results",
    vendor: "D.S HAIR & BEAUTY",
    productType: "K-Tip Extensions",
    type: "professional",
    tags: ["k-tip", "keratin", "professional"],
    price: 179,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: getPlaceholderImage("K-Tip", "ktip"),
    images: [getPlaceholderImage("K-Tip", "ktip")],
    variants: [],
    inStock: true,
    badge: undefined,
    rating: 4.6,
    reviews: 723,
    colors: [
      { name: "Natural Black", hex: "#1a1a1a" },
      { name: "Dark Brown", hex: "#3d2314" },
      { name: "Medium Brown", hex: "#6b4423" },
      { name: "Blonde", hex: "#f5deb3" },
    ],
    lengths: ["14 inches", "16 inches", "18 inches", "20 inches", "22 inches"],
    slug: "k-tip-extensions",
    category: "Professional Extensions",
    features: ["Korean keratin bonds", "Individual strand application", "3-4 months lifespan", "Heat application method", "Professional use recommended"],
  },
  {
    id: "7",
    handle: "i-tip-extensions",
    name: "I-Tip Extensions",
    title: "I-Tip Extensions",
    description: "Individual strand application for natural results. No heat or glue required.",
    shortDescription: "Individual strand application",
    vendor: "D.S HAIR & BEAUTY",
    productType: "I-Tip Extensions",
    type: "professional",
    tags: ["i-tip", "new"],
    price: 149,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: getPlaceholderImage("I-Tip", "itip"),
    images: [getPlaceholderImage("I-Tip", "itip")],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 4.7,
    reviews: 534,
    colors: [
      { name: "Natural Black", hex: "#1a1a1a" },
      { name: "Dark Brown", hex: "#3d2314" },
      { name: "Medium Brown", hex: "#6b4423" },
      { name: "Chestnut", hex: "#8b5a2b" },
    ],
    lengths: ["12 inches", "14 inches", "16 inches", "18 inches"],
    slug: "i-tip-extensions",
    category: "Professional Extensions",
    features: ["No heat or glue needed", "Micro rings application", "Reusable rings", "Gentle on natural hair", "Adjustable"],
  },
  {
    id: "8",
    handle: "fringes-bangs",
    name: "Fringes & Bangs",
    title: "Fringes & Bangs",
    description: "Transform your look instantly with our premium fringe pieces. Available in various styles.",
    shortDescription: "Transform your look instantly",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Fringes & Bangs",
    type: "diy",
    tags: ["bangs", "fringe"],
    price: 59,
    originalPrice: 79,
    currencyCode: "GBP",
    image: getPlaceholderImage("Fringes", "bangs"),
    images: [getPlaceholderImage("Fringes", "bangs")],
    variants: [],
    inStock: true,
    badge: undefined,
    rating: 4.9,
    reviews: 1234,
    colors: [
      { name: "Natural Black", hex: "#1a1a1a" },
      { name: "Dark Brown", hex: "#3d2314" },
      { name: "Medium Brown", hex: "#6b4423" },
      { name: "Blonde", hex: "#f5deb3" },
    ],
    lengths: ["8 inches", "10 inches", "12 inches"],
    slug: "fringes-bangs",
    category: "DIY Extensions",
    features: ["Instant style change", "Clip-in application", "Multiple styles available", "Blunt cut option", "Curtain bang option"],
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Ash Blonde #60
  // ============================================
  {
    id: "new-1",
    handle: "ds-hair-clip-in-ash-blonde-60",
    name: "D.S HAIR Clip-In, Ash Blonde #60 Natural",
    title: "D.S HAIR Clip-In, Ash Blonde #60 Natural",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "ash-blonde", "blonde", "new"],
    price: 0, // Price on request - show WhatsApp
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_CON_ashblonde_swatch_f11f9378-82bb-49f4-b71c-c80b5de6febb.jpg?format=pjpg&v=1773151368&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_ashblonde_swatch_f11f9378-82bb-49f4-b71c-c80b5de6febb.jpg?format=pjpg&v=1773151368&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_ash_blonde-2B-v11.jpg?format=pjpg&v=1773151368&width=2700",
      // TODO: Replace with actual before/after comparison image when available
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Ash Blonde #60", hex: "#E8DCC8" },
      { name: "Ash Blonde #2/60", hex: "#D4C8B0" },
      { name: "Natural Blonde", hex: "#F5DEB3" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-ash-blonde-60",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true, // Custom field for WhatsApp pricing
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Jet Black #1
  // ============================================
  {
    id: "new-2",
    handle: "ds-hair-clip-in-jet-black-1",
    name: "D.S HAIR Clip-In, Jet Black #1 Natural",
    title: "D.S HAIR Clip-In, Jet Black #1 Natural",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "jet-black", "black", "new"],
    price: 0, // Price on request - show WhatsApp
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_jet_black2-2B-v11.jpg?format=pjpg&v=1773090278&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_jet_black2-2B-v11.jpg?format=pjpg&v=1773090278&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/Jet_Black_Pro.jpg?format=pjpg&v=1773090278&width=2700"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Jet Black #1", hex: "#0a0a0a" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-jet-black-1",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true, // Custom field for WhatsApp pricing
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Off Black #1B
  // ============================================
  {
    id: "new-3",
    handle: "ds-hair-clip-in-off-black-1b",
    name: "D.S HAIR Clip-In, Off Black #1B Natural",
    title: "D.S HAIR Clip-In, Off Black #1B Natural",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "off-black", "black", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_off_black2-2B-v11.jpg?format=pjpg&v=1773090699&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_off_black2-2B-v11.jpg?format=pjpg&v=1773090699&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_offblack_swatch_714d028b-c4d1-494e-af90-eeb1ca22f81a.jpg?format=pjpg&v=1773090699&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Off Black #1B", hex: "#1A1A1A" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-off-black-1b",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Dark Brown #2
  // ============================================
  {
    id: "new-4",
    handle: "ds-hair-clip-in-dark-brown-2",
    name: "D.S HAIR Clip-In, Dark Brown #2 Natural",
    title: "D.S HAIR Clip-In, Dark Brown #2 Natural",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "dark-brown", "brown", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dark_brown-2B-v11.jpg?format=pjpg&v=1773091003&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dark_brown-2B-v11.jpg?format=pjpg&v=1773091003&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/Dark_Brown_Pro.jpg?format=pjpg&v=1773091003&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Dark Brown #2", hex: "#2C1A0E" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-dark-brown-2",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Walnut Brown #3
  // ============================================
  {
    id: "new-5",
    handle: "ds-hair-clip-in-walnut-brown-3",
    name: "D.S HAIR Clip-In, Walnut Brown #3 Natural",
    title: "D.S HAIR Clip-In, Walnut Brown #3 Natural",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "walnut-brown", "brown", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_walnut_brown-2B-v11_f73c4fb5-6953-4c78-ae82-8a69677025d0.jpg?format=pjpg&v=1773150123&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_walnut_brown-2B-v11_f73c4fb5-6953-4c78-ae82-8a69677025d0.jpg?format=pjpg&v=1773150123&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_walnutbrown_swatch_88857698-76d7-4449-be3c-4bc63dd7aa05.jpg?format=pjpg&v=1773150123&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Walnut Brown #3", hex: "#4A3020" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-walnut-brown-3",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Chocolate Brown #4
  // ============================================
  {
    id: "new-6",
    handle: "ds-hair-clip-in-chocolate-brown-4",
    name: "D.S HAIR Clip-In, Chocolate Brown #4 Natural",
    title: "D.S HAIR Clip-In, Chocolate Brown #4 Natural",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "chocolate-brown", "brown", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_choclate_brown-2B-v11.jpg?format=pjpg&v=1773148993&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_choclate_brown-2B-v11.jpg?format=pjpg&v=1773148993&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_chocolatebrown_swatch.jpg?format=pjpg&v=1773148993&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Chocolate Brown #4", hex: "#5C3A21" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-chocolate-brown-4",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Dark Brown/Chestnut Brown #2/6 Balayage
  // ============================================
  {
    id: "new-7",
    handle: "ds-hair-clip-in-dark-brown-chestnut-brown-2-6-balayage",
    name: "D.S HAIR Clip-In, Dark Brown/Chestnut Brown #2/6 Balayage",
    title: "D.S HAIR Clip-In, Dark Brown/Chestnut Brown #2/6 Balayage",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "balayage", "dark-brown", "chestnut-brown", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dark_brown_chestnut_brown-2B-v11.jpg?format=pjpg&v=1773258137&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dark_brown_chestnut_brown-2B-v11.jpg?format=pjpg&v=1773258137&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/Dark_Brown_Chestnut_Brown_2__6_Hair_Extensions_6ddcb4f6-498c-4ee4-84a5-8333e9e51d66.jpg?format=pjpg&v=1773258137&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Dark Brown/Chestnut Brown #2/6", hex: "#4A3020" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-dark-brown-chestnut-brown-2-6-balayage",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Chestnut Brown #6
  // ============================================
  {
    id: "new-8",
    handle: "ds-hair-clip-in-chestnut-brown-6",
    name: "D.S HAIR Clip-In, Chestnut Brown #6 Natural",
    title: "D.S HAIR Clip-In, Chestnut Brown #6 Natural",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "chestnut-brown", "brown", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_chestnut_brown2-2B-v11.jpg?format=pjpg&v=1773150347&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_chestnut_brown2-2B-v11.jpg?format=pjpg&v=1773150347&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_chestnutbrown_swatch_0a22344c-275a-4764-8c3d-a28f3edaf247.jpg?format=pjpg&v=1773150347&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Chestnut Brown #6", hex: "#6B4423" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-chestnut-brown-6",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Almond Brown #8
  // ============================================
  {
    id: "new-9",
    handle: "ds-hair-clip-in-almond-brown-8",
    name: "D.S HAIR Clip-In, Almond Brown #8",
    title: "D.S HAIR Clip-In, Almond Brown #8",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "almond-brown", "brown", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_Almond_Brown2-2B-v11.jpg?format=pjpg&v=1773151218&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_Almond_Brown2-2B-v11.jpg?format=pjpg&v=1773151218&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_almondbrown_swatch_374212d7-10cb-491f-b560-e6bf98b06e75.jpg?format=pjpg&v=1773151218&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Almond Brown #8", hex: "#8B5A2B" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-almond-brown-8",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Ash Brown #10
  // ============================================
  {
    id: "new-10",
    handle: "ds-hair-clip-in-ash-brown-10",
    name: "D.S HAIR Clip-In, Ash Brown #10",
    title: "D.S HAIR Clip-In, Ash Brown #10",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "ash-brown", "brown", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_ash_brown-1B-v121.jpg?format=pjpg&v=1773094496&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_ash_brown-1B-v121.jpg?format=pjpg&v=1773094496&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_ashbrown_swatch_6c2b3a32-2948-48f4-be55-bdf5fe9de374.jpg?format=pjpg&v=1773094488&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Ash Brown #10", hex: "#9C7A4F" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-ash-brown-10",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Dark Brown/Dirty Blonde #2/18 Balayage
  // ============================================
  {
    id: "new-11",
    handle: "ds-hair-clip-in-dark-brown-dirty-blonde-2-18-balayage",
    name: "D.S HAIR Clip-In, Dark Brown/Dirty Blonde #2/18 Balayage",
    title: "D.S HAIR Clip-In, Dark Brown/Dirty Blonde #2/18 Balayage",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "balayage", "dark-brown", "dirty-blonde", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_Almond_Brown2-2B-v11.jpg?format=pjpg&v=1773151218&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_Almond_Brown2-2B-v11.jpg?format=pjpg&v=1773151218&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_almondbrown_swatch_374212d7-10cb-491f-b560-e6bf98b06e75.jpg?format=pjpg&v=1773151218&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Dark Brown/Dirty Blonde #2/18", hex: "#6B4423" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-dark-brown-dirty-blonde-2-18-balayage",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Dark Maple Brown #530
  // ============================================
  {
    id: "new-12",
    handle: "ds-hair-clip-in-dark-maple-brown-530",
    name: "D.S HAIR Clip-In, Dark Maple Brown #530",
    title: "D.S HAIR Clip-In, Dark Maple Brown #530",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "dark-maple-brown", "auburn", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dark_maple_brown2-2B-v11.jpg?format=pjpg&v=1773091687&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dark_maple_brown2-2B-v11.jpg?format=pjpg&v=1773091687&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_darkmaplebrown_swatch.jpg?format=pjpg&v=1773091687&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Dark Maple Brown #530", hex: "#5C3317" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-dark-maple-brown-530",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Dark Brown/Dirty Blonde #2/18 (with correct images)
  // ============================================
  {
    id: "new-13",
    handle: "ds-hair-clip-in-dark-brown-dirty-blonde-2-18",
    name: "D.S HAIR Clip-In, Dark Brown/Dirty Blonde #2/18 Balayage",
    title: "D.S HAIR Clip-In, Dark Brown/Dirty Blonde #2/18 Balayage",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "balayage", "dark-brown", "dirty-blonde", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dark_brown_dirty_blonde-2B-v11.jpg?format=pjpg&v=1773095309&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dark_brown_dirty_blonde-2B-v11.jpg?format=pjpg&v=1773095309&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/Dark_Brown_Dirty_Blonde_Pro.jpg?format=pjpg&v=1773095309&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Dark Brown/Dirty Blonde #2/18", hex: "#6B4423" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-dark-brown-dirty-blonde-2-18",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Walnut Brown/Ash Blonde #3/60 Rooted
  // ============================================
  {
    id: "new-14",
    handle: "ds-hair-clip-in-walnut-brown-ash-blonde-3-60-rooted",
    name: "D.S HAIR Clip-In, Walnut Brown/Ash Blonde #3/60 Rooted",
    title: "D.S HAIR Clip-In, Walnut Brown/Ash Blonde #3/60 Rooted",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "rooted", "walnut-brown", "ash-blonde", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_walnut_brown_ash_blonde-2B-v21.jpg?format=pjpg&v=1773092023&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_walnut_brown_ash_blonde-2B-v21.jpg?format=pjpg&v=1773092023&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_WalnutBrown_AshBlonde_swatch.jpg?format=pjpg&v=1773092023&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Walnut Brown/Ash Blonde #3/60", hex: "#4A3020" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-walnut-brown-ash-blonde-3-60-rooted",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Mochachino Brown/Dirty Blonde #2/18
  // ============================================
  {
    id: "new-15",
    handle: "ds-hair-clip-in-mochachino-brown-dirty-blonde-2-18",
    name: "D.S HAIR Clip-In, Dark Brown/Dirty Blonde #2/18 Balayage",
    title: "D.S HAIR Clip-In, Dark Brown/Dirty Blonde #2/18 Balayage",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "balayage", "mochachino", "dirty-blonde", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_mochachino_brown_dirty_blonde2-2B-v11.jpg?format=pjpg&v=1773149583&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_mochachino_brown_dirty_blonde2-2B-v11.jpg?format=pjpg&v=1773149583&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_mochachinobrown_dirtyblondebalayage_swatch.jpg?format=pjpg&v=1773149583&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Mochachino Brown/Dirty Blonde #2/18", hex: "#6B4423" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-mochachino-brown-dirty-blonde-2-18",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Dark Honey Cocoa Highlight
  // ============================================
  {
    id: "new-16",
    handle: "ds-hair-clip-in-dark-honey-cocoa-highlight",
    name: "D.S HAIR Clip-In, Dark Honey Cocoa Highlight",
    title: "D.S HAIR Clip-In, Dark Honey Cocoa Highlight",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "highlight", "honey-cocoa", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dark_honey_cocoa_highlights1-2B-v11.jpg?format=pjpg&v=1773095359&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dark_honey_cocoa_highlights1-2B-v11.jpg?format=pjpg&v=1773095359&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_darkhoneycocoahiglight_swatch.jpg?format=pjpg&v=1773095397&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Dark Honey Cocoa Highlight", hex: "#8B4513" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-dark-honey-cocoa-highlight",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Mochachino Chocolate/Dark Honey Rooted Highlight
  // ============================================
  {
    id: "new-17",
    handle: "ds-hair-clip-in-mochachino-chocolate-dark-honey-rooted",
    name: "D.S HAIR Clip-In, Mochachino Chocolate/Dark Honey Rooted Highlight",
    title: "D.S HAIR Clip-In, Mochachino Chocolate/Dark Honey Rooted Highlight",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "rooted", "highlight", "mochachino", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_mochachino_chocolate_dark_honey_rooted_highlight-2B-v11.jpg?format=pjpg&v=1773148993&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_mochachino_chocolate_dark_honey_rooted_highlight-2B-v11.jpg?format=pjpg&v=1773148993&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/Mochachino-Chocolate_Dark_Honey_Highlight_Pro.jpg?format=pjpg&v=1773148993&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Mochachino Chocolate/Dark Honey", hex: "#5C3A21" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-mochachino-chocolate-dark-honey-rooted",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Dirty Brunette Highlight
  // ============================================
  {
    id: "new-18",
    handle: "ds-hair-clip-in-dirty-brunette-highlight",
    name: "D.S HAIR Clip-In, Dirty Brunette Highlight",
    title: "D.S HAIR Clip-In, Dirty Brunette Highlight",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "highlight", "dirty-brunette", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dirty_brunette_highlights1-2B-v11.jpg?format=pjpg&v=1773149311&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_dirty_brunette_highlights1-2B-v11.jpg?format=pjpg&v=1773149311&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_dirtybrunettehighlight_swatch.jpg?format=pjpg&v=1773149459&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Dirty Brunette Highlight", hex: "#6B4423" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-dirty-brunette-highlight",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Honey Comb Highlight
  // ============================================
  {
    id: "new-19",
    handle: "ds-hair-clip-in-honey-comb-highlight",
    name: "D.S HAIR Clip-In, Honey Comb Highlight",
    title: "D.S HAIR Clip-In, Honey Comb Highlight",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "highlight", "honey-comb", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_honey_comb_highight-2B-v11.jpg?format=pjpg&v=1773150426&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_honey_comb_highight-2B-v11.jpg?format=pjpg&v=1773150426&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_honeycombhighlight_swatch.jpg?format=pjpg&v=1773150426&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Honey Comb Highlight", hex: "#D4A574" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-honey-comb-highlight",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Vanilla Latte #8/18/60 Highlight
  // ============================================
  {
    id: "new-20",
    handle: "ds-hair-clip-in-vanilla-latte-highlight-8-18-60",
    name: "D.S HAIR Clip-In, Vanilla Latte #8/18/60 Highlight",
    title: "D.S HAIR Clip-In, Vanilla Latte #8/18/60 Highlight",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "highlight", "vanilla-latte", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_vanilla_latte-2B-v11.jpg?format=pjpg&v=1773090135&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_vanilla_latte-2B-v11.jpg?format=pjpg&v=1773090135&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_vanillalattehighlight_swatch.jpg?format=pjpg&v=1773090278&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Vanilla Latte #8/18/60", hex: "#D4A574" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-vanilla-latte-highlight-8-18-60",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Pearl Blonde #10/88 Rooted Highlight
  // ============================================
  {
    id: "new-21",
    handle: "ds-hair-clip-in-pearl-blonde-10-88-rooted",
    name: "D.S HAIR Clip-In, Pearl Blonde #10/88 Rooted Highlight",
    title: "D.S HAIR Clip-In, Pearl Blonde #10/88 Rooted Highlight",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "highlight", "pearl-blonde", "rooted", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_pearl_blonde-2B-v11.jpg?format=pjpg&v=1773090872&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_pearl_blonde-2B-v11.jpg?format=pjpg&v=1773090872&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_pearlblondehighlights_swatch.jpg?format=pjpg&v=1773090872&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Pearl Blonde #10/88", hex: "#E8DCC8" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-pearl-blonde-10-88-rooted",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Mulberry Wine #510
  // ============================================
  {
    id: "new-22",
    handle: "ds-hair-clip-in-mulberry-wine-510",
    name: "D.S HAIR Clip-In, Mulberry Wine #510",
    title: "D.S HAIR Clip-In, Mulberry Wine #510",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "mulberry-wine", "red", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/mulberry_wine-2B-v1.jpg?format=pjpg&v=1757508852&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/mulberry_wine-2B-v1.jpg?format=pjpg&v=1757508852&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_mulberrywine_swatch_2700x2700_d2fd731f-d8c6-4c93-ac81-d08103a75cf8.jpg?format=pjpg&v=1757517328&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Mulberry Wine #510", hex: "#4A0E0E" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-mulberry-wine-510",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Spiced Crimson #570
  // ============================================
  {
    id: "new-23",
    handle: "ds-hair-clip-in-spiced-crimson-570",
    name: "D.S HAIR Clip-In, Spiced Crimson #570",
    title: "D.S HAIR Clip-In, Spiced Crimson #570",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "spiced-crimson", "red", "auburn", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_spiced_crimson-2B-v11.jpg?format=pjpg&v=1773091900&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_spiced_crimson-2B-v11.jpg?format=pjpg&v=1773091900&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_spicedcrimson_swatch.jpg?format=pjpg&v=1773091900&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Spiced Crimson #570", hex: "#8B0000" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-spiced-crimson-570",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Ash Bronde/Strawberry Blonde #21/27 Ombre
  // ============================================
  {
    id: "new-24",
    handle: "ds-hair-clip-in-ash-bronde-strawberry-blonde-ombre",
    name: "D.S HAIR Clip-In, Ash Bronde/Strawberry Blonde #21/27 Ombre",
    title: "D.S HAIR Clip-In, Ash Bronde/Strawberry Blonde #21/27 Ombre",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "ombre", "ash-bronde", "strawberry-blonde", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_ash_brown_strawberry_blonde_ombre-2B-v11_2f89e9a4-c35a-4094-8549-24b962d5b226.jpg?format=pjpg&v=1773151716&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_ash_brown_strawberry_blonde_ombre-2B-v11_2f89e9a4-c35a-4094-8549-24b962d5b226.jpg?format=pjpg&v=1773151716&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/Ash_Bronde_Strawberry_Blonde_Ombre_Pro.jpg?format=pjpg&v=1773151716&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Ash Bronde/Strawberry Blonde #21/27", hex: "#8B5A2B" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-ash-bronde-strawberry-blonde-ombre",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Ash Brown/Ash Blonde #8/60 Balayage
  // ============================================
  {
    id: "new-25",
    handle: "ds-hair-clip-in-ash-brown-ash-blonde-8-60-balayage",
    name: "D.S HAIR Clip-In, Ash Brown/Ash Blonde #8/60 Balayage",
    title: "D.S HAIR Clip-In, Ash Brown/Ash Blonde #8/60 Balayage",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "balayage", "ash-brown", "ash-blonde", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_ash_brown_ash_blonde_2B_v21.jpg?format=pjpg&v=1773091818&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_ash_brown_ash_blonde_2B_v21.jpg?format=pjpg&v=1773091818&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_ashbrownashblondebalayage.jpg?format=pjpg&v=1773091818&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Ash Brown/Ash Blonde #8/60", hex: "#9C7A4F" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-ash-brown-ash-blonde-8-60-balayage",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Ash Brown/Honey Blonde #8/20/24/60 Rooted
  // ============================================
  {
    id: "new-26",
    handle: "ds-hair-clip-in-ash-brown-honey-blonde-8-20-24-60-rooted",
    name: "D.S HAIR Clip-In, Ash Brown/Honey Blonde #8/20/24/60 Rooted",
    title: "D.S HAIR Clip-In, Ash Brown/Honey Blonde #8/20/24/60 Rooted",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "rooted", "ash-brown", "honey-blonde", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_ash_brown_honey_blonde-2B-v11.jpg?format=pjpg&v=1773091658&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_ash_brown_honey_blonde-2B-v11.jpg?format=pjpg&v=1773091658&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_ashbrown_honeyblonde_swatch.jpg?format=pjpg&v=1773091658&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Ash Brown/Honey Blonde #8/20/24/60", hex: "#9C7A4F" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-ash-brown-honey-blonde-8-20-24-60-rooted",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In Caramel Blonde #18/46 Marble Blends
  // ============================================
  {
    id: "new-27",
    handle: "ds-hair-clip-in-caramel-blonde-18-46-marble",
    name: "D.S HAIR Clip-In, Caramel Blonde #18/46 Marble Blends",
    title: "D.S HAIR Clip-In, Caramel Blonde #18/46 Marble Blends",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "marble", "caramel-blonde", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/caramel_blonde-2B-v1.jpg?format=pjpg&v=1757344984&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/caramel_blonde-2B-v1.jpg?format=pjpg&v=1757344984&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_caramelblondemarble_swatch_2700x2700_6eaa2b49-7be7-4f1a-813a-28aceab4b228.jpg?format=pjpg&v=1757516845&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Caramel Blonde #18/46", hex: "#C68E17" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-caramel-blonde-18-46-marble",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
  // ============================================
  // NEW PRODUCT: D.S HAIR Clip-In White Mocha Balayage
  // ============================================
  {
    id: "new-28",
    handle: "ds-hair-clip-in-white-mocha-balayage",
    name: "D.S HAIR Clip-In, White Mocha Balayage",
    title: "D.S HAIR Clip-In, White Mocha Balayage",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "balayage", "white-mocha", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_white_mocha_balayage2-2B-v11.jpg?format=pjpg&v=1773151468&width=2700",
    images: [
      "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_white_mocha_balayage2-2B-v11.jpg?format=pjpg&v=1773151468&width=2700",
      "https://www.bellamihair.com/cdn/shop/files/PDP_CON_whitemochabalayage_swatch.jpg?format=pjpg&v=1773151468&width=2700",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "White Mocha", hex: "#5C3A21" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-white-mocha-balayage",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },
]

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getRelatedProducts(currentProductId: string, limit: number = 4): Product[] {
  return products
    .filter(p => p.id !== currentProductId)
    .slice(0, limit)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

// Collections
export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  image: string
}

export const collections: Collection[] = [
  {
    id: "1",
    name: "All Products",
    slug: "all",
    description: "Browse our complete collection of premium hair extensions",
    image: "/images/collection-all.jpg",
  },
  {
    id: "2",
    name: "DIY Extensions",
    slug: "diy",
    description: "Professional-quality extensions you can apply at home",
    image: "/images/collection-diy.jpg",
  },
  {
    id: "3",
    name: "Professional Extensions",
    slug: "professional",
    description: "Salon-grade extensions for professional stylists",
    image: "/images/collection-professional.jpg",
  },
  {
    id: "4",
    name: "Clip-In Extensions",
    slug: "clip-in",
    description: "Easy clip-in application for instant transformation",
    image: "/images/collection-clipin.jpg",
  },
  {
    id: "5",
    name: "Tape-In Extensions",
    slug: "tape-in",
    description: "Seamless tape-in extensions for a natural look",
    image: "/images/collection-tapein.jpg",
  },
  {
    id: "6",
    name: "Ponytails",
    slug: "ponytails",
    description: "Instant volume and length with our premium ponytails",
    image: "/images/collection-ponytail.jpg",
  },
  {
    id: "7",
    name: "Hair Care",
    slug: "hair-care",
    description: "Premium hair care products to maintain your extensions",
    image: "/images/collection-haircare.jpg",
  },
]

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find(c => c.slug === slug)
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  if (collectionSlug === "all") {
    return products
  }
  if (collectionSlug === "diy") {
    return products.filter(p => p.type === "diy")
  }
  if (collectionSlug === "professional") {
    return products.filter(p => p.type === "professional")
  }
  // Check both category and productType for matching
  return products.filter(p => 
    p.category.toLowerCase().includes(collectionSlug.toLowerCase()) ||
    p.productType.toLowerCase().includes(collectionSlug.toLowerCase()) ||
    p.tags.some(tag => tag.toLowerCase().includes(collectionSlug.toLowerCase()))
  )
}

// Social links
export const socialLinks = {
  instagram: "https://instagram.com/d.shairbeauty",
  facebook: "https://facebook.com/d.shairbeauty",
  youtube: "https://youtube.com/@dshairbeauty",
  tiktok: "https://tiktok.com/@d.shairbeauty",
  pinterest: "https://pinterest.com/dshairbeautyuk",
  linkedin: "https://linkedin.com/company/dshairbeauty",
  twitter: "https://twitter.com/dshairbeauty",
}

// Contact info
export const contactInfo = {
  email: "caro@dshairbeauty.co.uk",
  whatsapp: "https://wa.me/8613516946001",
  whatsappNumber: "+86 13516946001",
  company: "D.S HAIR & BEAUTY",
  address: "Manchester, UK",
}
