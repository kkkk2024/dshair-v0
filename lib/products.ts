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
  colors: { name: string; hex: string; image?: string }[]
  lengths: string[]
  slug: string
  category: string
  features: string[]
  priceOnRequest?: boolean
  sku?: string
}

// Placeholder image helper
const getPlaceholderImage = (name: string, slug: string) => 
  `https://placehold.co/600x800/e8d5c4/8b7355?text=${encodeURIComponent(name)}`

// Hair Topper 8-color palette with swatch images (from 女士假发真发颜色 folder)
export const HAIR_TOPPER_COLORS = [
  { name: "Off Black", hex: "#1A0F0A", image: "/images/hair-topper-colors/1B-off-black.webp" },
  { name: "Natural Black", hex: "#0D0D0D", image: "/images/hair-topper-colors/2-natural-black.webp" },
  { name: "Truffle Brown", hex: "#3D2317", image: "/images/hair-topper-colors/10-truffle-brown.webp" },
  { name: "Espresso Brown", hex: "#2D1810", image: "/images/hair-topper-colors/21-espresso-brown.webp" },
  { name: "Mousse Brown", hex: "#4A2314", image: "/images/hair-topper-colors/23R-mousse-brown.webp" },
  { name: "Dark Caramel", hex: "#6B3A14", image: "/images/hair-topper-colors/24R-dark-caramel.webp" },
  { name: "Dusty Ash Brown", hex: "#5C4A3A", image: "/images/hair-topper-colors/624-dusty-ash-brown.webp" },
  { name: "Vanilla Butter Blonde", hex: "#D4B896", image: "/images/hair-topper-colors/vanilla-butter-blonde.webp" },
]

export const products: Product[] = [
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
    id: "7",
    handle: "i-tip-extensions",
    name: "I-Tip Extensions",
    title: "I-Tip Extensions",
    description: "Individual strand application for natural results. No heat or glue required.",
    shortDescription: "Individual strand application",
    vendor: "D.S HAIR & BEAUTY",
    productType: "I-Tip Extensions",
    type: "diy", // moved out of professional collection per client request
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
    image: "/images/color-chart-front/01_Jet_Black_1.jpg",
    images: [
      "/images/color-chart-front/01_Jet_Black_1.jpg", "/images/color-chart/01_Jet_Black_1.jpg"
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
    image: "/images/color-chart-front/02_Off_Black_1B.jpg",
    images: [
      "/images/color-chart-front/02_Off_Black_1B.jpg", "/images/color-chart/02_Off_Black_1B.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/03_Dark_Brown_2.jpg",
    images: [
      "/images/color-chart-front/03_Dark_Brown_2.jpg", "/images/color-chart/03_Dark_Brown_2.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/04_Walnut_Brown_3.jpg",
    images: [
      "/images/color-chart-front/04_Walnut_Brown_3.jpg", "/images/color-chart/04_Walnut_Brown_3.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/05_Chocolate_Brown_4.jpg",
    images: [
      "/images/color-chart-front/05_Chocolate_Brown_4.jpg", "/images/color-chart/05_Chocolate_Brown_4.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg",
    images: [
      "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg", "/images/color-chart/06_Dark_Brown_Chestnut_Brown_2_6.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/07_Chestnut_Brown_6.jpg",
    images: [
      "/images/color-chart-front/07_Chestnut_Brown_6.jpg", "/images/color-chart/07_Chestnut_Brown_6.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/08_Almond_Brown_8.jpg",
    images: [
      "/images/color-chart-front/08_Almond_Brown_8.jpg", "/images/color-chart/08_Almond_Brown_8.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/09_Ash_Brown_10.jpg",
    images: [
      "/images/color-chart-front/09_Ash_Brown_10.jpg", "/images/color-chart/09_Ash_Brown_10.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg",
    images: [
      "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg", "/images/color-chart/10_Dark_Brown_Dirty_Blonde_2_18.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg",
    images: [
      "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg", "/images/color-chart/11_Dark_Maple_Brown_530.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg",
    images: [
      "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg", "/images/color-chart/12_Walnut_Brown_Ash_Blonde_3_60.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg",
    images: [
      "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg", "/images/color-chart/13_Dark_Honey_Cocoa.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg",
    images: [
      "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg", "/images/color-chart/14_Mochachino_Chocolate_Dark_Honey.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/15_Dirty_Brunette.jpg",
    images: [
      "/images/color-chart-front/15_Dirty_Brunette.jpg", "/images/color-chart/15_Dirty_Brunette.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/16_Honey_Comb.jpg",
    images: [
      "/images/color-chart-front/16_Honey_Comb.jpg", "/images/color-chart/16_Honey_Comb.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg",
    images: [
      "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg", "/images/color-chart/17_Vanilla_Latte_8_18_60.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg",
    images: [
      "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg", "/images/color-chart/18_Pearl_Blonde_10_88.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/19_Mulberry_Wine_510.jpg",
    images: [
      "/images/color-chart-front/19_Mulberry_Wine_510.jpg", "/images/color-chart/19_Mulberry_Wine_510.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/20_Spiced_Crimson_570.jpg",
    images: [
      "/images/color-chart-front/20_Spiced_Crimson_570.jpg", "/images/color-chart/20_Spiced_Crimson_570.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg",
    images: [
      "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg", "/images/color-chart/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg",
    images: [
      "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg", "/images/color-chart/22_Ash_Brown_Ash_Blonde_8_60.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg",
    images: [
      "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg", "/images/color-chart/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg",
    images: [
      "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg", "/images/color-chart/24_Caramel_Blonde_18_46.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/25_White_Mocha.jpg",
    images: [
      "/images/color-chart-front/25_White_Mocha.jpg", "/images/color-chart/25_White_Mocha.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/26_Beach_Blonde_613.jpg",
    images: [
      "/images/color-chart-front/26_Beach_Blonde_613.jpg", "/images/color-chart/26_Beach_Blonde_613.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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
    image: "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg",
    images: [
      "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg", "/images/color-chart/27_Bronzed_Caramel_6_18_8_60.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
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

  {
    id: "new-29",
    handle: "ds-hair-clip-in-beach-blonde-613",
    name: "D.S HAIR Clip-In, Beach Blonde #613 Natural",
    title: "D.S HAIR Clip-In, Beach Blonde #613 Natural",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "beach-blonde", "blonde", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg",
    images: [
      "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg", "/images/color-chart/28_Butter_Blonde_P10_16_60.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Beach Blonde #613", hex: "#F5DEB3" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-beach-blonde-613",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },

  {
    id: "new-30",
    handle: "ds-hair-clip-in-bronzed-caramel-6-18-8-60-marble",
    name: "D.S HAIR Clip-In, Bronzed Caramel #6/18/8/60 Marble Blends",
    title: "D.S HAIR Clip-In, Bronzed Caramel #6/18/8/60 Marble Blends",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "marble", "bronzed-caramel", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/29_Golden_Hour_Blonde.jpg",
    images: [
      "/images/color-chart-front/29_Golden_Hour_Blonde.jpg", "/images/color-chart/29_Golden_Hour_Blonde.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Bronzed Caramel #6/18/8/60", hex: "#8B5A2B" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-bronzed-caramel-6-18-8-60-marble",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },

  {
    id: "new-31",
    handle: "ds-hair-clip-in-butter-blonde-p10-16-60",
    name: "D.S HAIR Clip-In, Butter Blonde #P10/16/60 Natural",
    title: "D.S HAIR Clip-In, Butter Blonde #P10/16/60 Natural",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "butter-blonde", "blonde", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/30_Dirty_Blonde_18.jpg",
    images: [
      "/images/color-chart-front/30_Dirty_Blonde_18.jpg", "/images/color-chart/30_Dirty_Blonde_18.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Butter Blonde #P10/16/60", hex: "#E8DCC8" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-butter-blonde-p10-16-60",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },

  {
    id: "new-32",
    handle: "ds-hair-clip-in-golden-hour-blonde-balayage",
    name: "D.S HAIR Clip-In, Golden Hour Blonde Balayage",
    title: "D.S HAIR Clip-In, Golden Hour Blonde Balayage",
    description: "Transform your look with D.S HAIR premium Clip-In hair extensions. Made from 100% Remy human hair for a seamless, natural look. Available in multiple lengths (16\"-26\") and colors. Perfect for adding volume and length instantly. UK stockist with free colour matching. Professional-grade quality at affordable prices.",
    shortDescription: "Premium 100% Remy human hair clip-in extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "balayage", "golden-hour", "blonde", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/31_Platinum_Blonde_80.jpg",
    images: [
      "/images/color-chart-front/31_Platinum_Blonde_80.jpg", "/images/color-chart/31_Platinum_Blonde_80.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Golden Hour Blonde", hex: "#D4A574" }
    ],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"'],
    slug: "ds-hair-clip-in-golden-hour-blonde-balayage",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "Multiple lengths available"],
    priceOnRequest: true,
  },

  { id: "ktip-1", handle: "ds-hair-k-tips-jet-black-1", name: "D.S HAIR K-Tips, Jet Black #1", title: "D.S HAIR K-Tips, Jet Black #1", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/01_Jet_Black_1.jpg", images: [
      "/images/color-chart-front/01_Jet_Black_1.jpg",
      "/images/color-chart/01_Jet_Black_1.jpg",
      "/images/color-chart/04_Walnut_Brown_3.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Jet Black #1", hex: "#0a0a0a" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-jet-black-1", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-2", handle: "ds-hair-k-tips-off-black-1b", name: "D.S HAIR K-Tips, Off Black #1B", title: "D.S HAIR K-Tips, Off Black #1B", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/02_Off_Black_1B.jpg", images: [
      "/images/color-chart-front/02_Off_Black_1B.jpg",
      "/images/color-chart/02_Off_Black_1B.jpg",
      "/images/color-chart/05_Chocolate_Brown_4.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Off Black #1B", hex: "#1A1A1A" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-off-black-1b", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-3", handle: "ds-hair-k-tips-dark-brown-2", name: "D.S HAIR K-Tips, Dark Brown #2", title: "D.S HAIR K-Tips, Dark Brown #2", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/03_Dark_Brown_2.jpg", images: [
      "/images/color-chart-front/03_Dark_Brown_2.jpg",
      "/images/color-chart/03_Dark_Brown_2.jpg",
      "/images/color-chart/06_Dark_Brown_Chestnut_Brown_2_6.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Brown #2", hex: "#2C1A0E" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-dark-brown-2", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-4", handle: "ds-hair-k-tips-walnut-brown-3", name: "D.S HAIR K-Tips, Walnut Brown #3", title: "D.S HAIR K-Tips, Walnut Brown #3", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/04_Walnut_Brown_3.jpg", images: [
      "/images/color-chart-front/04_Walnut_Brown_3.jpg",
      "/images/color-chart/04_Walnut_Brown_3.jpg",
      "/images/color-chart/07_Chestnut_Brown_6.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Walnut Brown #3", hex: "#4A3020" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-walnut-brown-3", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-5", handle: "ds-hair-k-tips-chocolate-brown-4", name: "D.S HAIR K-Tips, Chocolate Brown #4", title: "D.S HAIR K-Tips, Chocolate Brown #4", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/05_Chocolate_Brown_4.jpg", images: [
      "/images/color-chart-front/05_Chocolate_Brown_4.jpg",
      "/images/color-chart/05_Chocolate_Brown_4.jpg",
      "/images/color-chart/08_Almond_Brown_8.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Chocolate Brown #4", hex: "#5C3A21" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-chocolate-brown-4", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-6", handle: "ds-hair-k-tips-dark-brown-chestnut-brown-2-6", name: "D.S HAIR K-Tips, Dark Brown/Chestnut Brown #2/6", title: "D.S HAIR K-Tips, Dark Brown/Chestnut Brown #2/6", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg", images: [
      "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg",
      "/images/color-chart/06_Dark_Brown_Chestnut_Brown_2_6.jpg",
      "/images/color-chart/09_Ash_Brown_10.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Brown/Chestnut Brown #2/6", hex: "#4A3020" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-dark-brown-chestnut-brown-2-6", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-7", handle: "ds-hair-k-tips-chestnut-brown-6", name: "D.S HAIR K-Tips, Chestnut Brown #6", title: "D.S HAIR K-Tips, Chestnut Brown #6", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/07_Chestnut_Brown_6.jpg", images: [
      "/images/color-chart-front/07_Chestnut_Brown_6.jpg",
      "/images/color-chart/07_Chestnut_Brown_6.jpg",
      "/images/color-chart/10_Dark_Brown_Dirty_Blonde_2_18.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Chestnut Brown #6", hex: "#6B4423" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-chestnut-brown-6", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-8", handle: "ds-hair-k-tips-almond-brown-8", name: "D.S HAIR K-Tips, Almond Brown #8", title: "D.S HAIR K-Tips, Almond Brown #8", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/08_Almond_Brown_8.jpg", images: [
      "/images/color-chart-front/08_Almond_Brown_8.jpg",
      "/images/color-chart/08_Almond_Brown_8.jpg",
      "/images/color-chart/11_Dark_Maple_Brown_530.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Almond Brown #8", hex: "#8B5A2B" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-almond-brown-8", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-9", handle: "ds-hair-k-tips-ash-brown-10", name: "D.S HAIR K-Tips, Ash Brown #10", title: "D.S HAIR K-Tips, Ash Brown #10", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/09_Ash_Brown_10.jpg", images: [
      "/images/color-chart-front/09_Ash_Brown_10.jpg",
      "/images/color-chart/09_Ash_Brown_10.jpg",
      "/images/color-chart/12_Walnut_Brown_Ash_Blonde_3_60.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Ash Brown #10", hex: "#9C7A4F" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-ash-brown-10", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-10", handle: "ds-hair-k-tips-dark-brown-dirty-blonde-2-18", name: "D.S HAIR K-Tips, Dark Brown/Dirty Blonde #2/18", title: "D.S HAIR K-Tips, Dark Brown/Dirty Blonde #2/18", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg", images: [
      "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg",
      "/images/color-chart/10_Dark_Brown_Dirty_Blonde_2_18.jpg",
      "/images/color-chart/13_Dark_Honey_Cocoa.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Brown/Dirty Blonde #2/18", hex: "#6B4423" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-dark-brown-dirty-blonde-2-18", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-11", handle: "ds-hair-k-tips-dark-maple-brown-530", name: "D.S HAIR K-Tips, Dark Maple Brown #530", title: "D.S HAIR K-Tips, Dark Maple Brown #530", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg", images: [
      "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg",
      "/images/color-chart/11_Dark_Maple_Brown_530.jpg",
      "/images/color-chart/13_Dark_Honey_Cocoa.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Maple Brown #530", hex: "#5C3317" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-dark-maple-brown-530", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-12", handle: "ds-hair-k-tips-walnut-brown-ash-blonde-3-60", name: "D.S HAIR K-Tips, Walnut Brown/Ash Blonde #3/60", title: "D.S HAIR K-Tips, Walnut Brown/Ash Blonde #3/60", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg", images: [
      "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg",
      "/images/color-chart/12_Walnut_Brown_Ash_Blonde_3_60.jpg",
      "/images/color-chart/14_Mochachino_Chocolate_Dark_Honey.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Walnut Brown/Ash Blonde #3/60", hex: "#4A3020" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-walnut-brown-ash-blonde-3-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-13", handle: "ds-hair-k-tips-mochachino-brown-dirty-blonde-2-18", name: "D.S HAIR K-Tips, Mochachino Brown/Dirty Blonde #2/18", title: "D.S HAIR K-Tips, Mochachino Brown/Dirty Blonde #2/18", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg", images: [
      "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg",
      "/images/color-chart/14_Mochachino_Chocolate_Dark_Honey.jpg",
      "/images/color-chart/15_Dirty_Brunette.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Mochachino Brown/Dirty Blonde #2/18", hex: "#6B4423" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-mochachino-brown-dirty-blonde-2-18", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-14", handle: "ds-hair-k-tips-dark-honey-cocoa", name: "D.S HAIR K-Tips, Dark Honey Cocoa", title: "D.S HAIR K-Tips, Dark Honey Cocoa", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg", images: [
      "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg",
      "/images/color-chart/13_Dark_Honey_Cocoa.jpg",
      "/images/color-chart/16_Honey_Comb.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Honey Cocoa", hex: "#8B4513" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-dark-honey-cocoa", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-15", handle: "ds-hair-k-tips-mochachino-chocolate-dark-honey", name: "D.S HAIR K-Tips, Mochachino Chocolate/Dark Honey", title: "D.S HAIR K-Tips, Mochachino Chocolate/Dark Honey", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg", images: [
      "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg",
      "/images/color-chart/14_Mochachino_Chocolate_Dark_Honey.jpg",
      "/images/color-chart/17_Vanilla_Latte_8_18_60.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Mochachino Chocolate/Dark Honey", hex: "#5C3A21" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-mochachino-chocolate-dark-honey", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-16", handle: "ds-hair-k-tips-dirty-brunette", name: "D.S HAIR K-Tips, Dirty Brunette", title: "D.S HAIR K-Tips, Dirty Brunette", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/15_Dirty_Brunette.jpg", images: [
      "/images/color-chart-front/15_Dirty_Brunette.jpg",
      "/images/color-chart/15_Dirty_Brunette.jpg",
      "/images/color-chart/18_Pearl_Blonde_10_88.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dirty Brunette", hex: "#6B4423" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-dirty-brunette", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-17", handle: "ds-hair-k-tips-honey-comb", name: "D.S HAIR K-Tips, Honey Comb", title: "D.S HAIR K-Tips, Honey Comb", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/16_Honey_Comb.jpg", images: [
      "/images/color-chart-front/16_Honey_Comb.jpg",
      "/images/color-chart/16_Honey_Comb.jpg",
      "/images/color-chart/19_Mulberry_Wine_510.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Honey Comb", hex: "#D4A574" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-honey-comb", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-18", handle: "ds-hair-k-tips-vanilla-latte-8-18-60", name: "D.S HAIR K-Tips, Vanilla Latte #8/18/60", title: "D.S HAIR K-Tips, Vanilla Latte #8/18/60", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg", images: [
      "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg",
      "/images/color-chart/17_Vanilla_Latte_8_18_60.jpg",
      "/images/color-chart/20_Spiced_Crimson_570.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Vanilla Latte #8/18/60", hex: "#D4A574" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-vanilla-latte-8-18-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-19", handle: "ds-hair-k-tips-pearl-blonde-10-88", name: "D.S HAIR K-Tips, Pearl Blonde #10/88", title: "D.S HAIR K-Tips, Pearl Blonde #10/88", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg", images: [
      "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg",
      "/images/color-chart/18_Pearl_Blonde_10_88.jpg",
      "/images/color-chart/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Pearl Blonde #10/88", hex: "#E8DCC8" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-pearl-blonde-10-88", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-20", handle: "ds-hair-k-tips-mulberry-wine-510", name: "D.S HAIR K-Tips, Mulberry Wine #510", title: "D.S HAIR K-Tips, Mulberry Wine #510", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/19_Mulberry_Wine_510.jpg", images: [
      "/images/color-chart-front/19_Mulberry_Wine_510.jpg",
      "/images/color-chart/19_Mulberry_Wine_510.jpg",
      "/images/color-chart/22_Ash_Brown_Ash_Blonde_8_60.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Mulberry Wine #510", hex: "#4A0E0E" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-mulberry-wine-510", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-21", handle: "ds-hair-k-tips-spiced-crimson-570", name: "D.S HAIR K-Tips, Spiced Crimson #570", title: "D.S HAIR K-Tips, Spiced Crimson #570", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/20_Spiced_Crimson_570.jpg", images: [
      "/images/color-chart-front/20_Spiced_Crimson_570.jpg",
      "/images/color-chart/20_Spiced_Crimson_570.jpg",
      "/images/color-chart/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Spiced Crimson #570", hex: "#8B0000" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-spiced-crimson-570", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-22", handle: "ds-hair-k-tips-ash-bronde-strawberry-blonde", name: "D.S HAIR K-Tips, Ash Bronde/Strawberry Blonde", title: "D.S HAIR K-Tips, Ash Bronde/Strawberry Blonde", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg", images: [
      "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg",
      "/images/color-chart/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg",
      "/images/color-chart/24_Caramel_Blonde_18_46.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Ash Bronde/Strawberry Blonde", hex: "#8B5A2B" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-ash-bronde-strawberry-blonde", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-23", handle: "ds-hair-k-tips-ash-brown-ash-blonde-8-60", name: "D.S HAIR K-Tips, Ash Brown/Ash Blonde #8/60", title: "D.S HAIR K-Tips, Ash Brown/Ash Blonde #8/60", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg", images: [
      "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg",
      "/images/color-chart/22_Ash_Brown_Ash_Blonde_8_60.jpg",
      "/images/color-chart/25_White_Mocha.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Ash Brown/Ash Blonde #8/60", hex: "#9C7A4F" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-ash-brown-ash-blonde-8-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-24", handle: "ds-hair-k-tips-ash-brown-honey-blonde-8-20-24-60", name: "D.S HAIR K-Tips, Ash Brown/Honey Blonde #8/20/24/60", title: "D.S HAIR K-Tips, Ash Brown/Honey Blonde #8/20/24/60", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg", images: [
      "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg",
      "/images/color-chart/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg",
      "/images/color-chart/26_Beach_Blonde_613.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Ash Brown/Honey Blonde #8/20/24/60", hex: "#9C7A4F" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-ash-brown-honey-blonde-8-20-24-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-25", handle: "ds-hair-k-tips-caramel-blonde-18-46", name: "D.S HAIR K-Tips, Caramel Blonde #18/46", title: "D.S HAIR K-Tips, Caramel Blonde #18/46", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg", images: [
      "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg",
      "/images/color-chart/24_Caramel_Blonde_18_46.jpg",
      "/images/color-chart/27_Bronzed_Caramel_6_18_8_60.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Caramel Blonde #18/46", hex: "#D4A574" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-caramel-blonde-18-46", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-26", handle: "ds-hair-k-tips-white-mocha", name: "D.S HAIR K-Tips, White Mocha", title: "D.S HAIR K-Tips, White Mocha", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/25_White_Mocha.jpg", images: [
      "/images/color-chart-front/25_White_Mocha.jpg",
      "/images/color-chart/25_White_Mocha.jpg",
      "/images/color-chart/28_Butter_Blonde_P10_16_60.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "White Mocha", hex: "#C4A484" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-white-mocha", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-27", handle: "ds-hair-k-tips-beach-blonde-613", name: "D.S HAIR K-Tips, Beach Blonde #613", title: "D.S HAIR K-Tips, Beach Blonde #613", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/26_Beach_Blonde_613.jpg", images: [
      "/images/color-chart-front/26_Beach_Blonde_613.jpg",
      "/images/color-chart/26_Beach_Blonde_613.jpg",
      "/images/color-chart/29_Golden_Hour_Blonde.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Beach Blonde #613", hex: "#F5DEB3" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-beach-blonde-613", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-28", handle: "ds-hair-k-tips-bronzed-caramel-6-18-8-60", name: "D.S HAIR K-Tips, Bronzed Caramel #6/18/8/60", title: "D.S HAIR K-Tips, Bronzed Caramel #6/18/8/60", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg", images: [
      "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg",
      "/images/color-chart/27_Bronzed_Caramel_6_18_8_60.jpg",
      "/images/color-chart/30_Dirty_Blonde_18.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Bronzed Caramel #6/18/8/60", hex: "#5C3A21" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-bronzed-caramel-6-18-8-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-29", handle: "ds-hair-k-tips-butter-blonde-p10-16-60", name: "D.S HAIR K-Tips, Butter Blonde #P10/16/60", title: "D.S HAIR K-Tips, Butter Blonde #P10/16/60", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg", images: [
      "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg",
      "/images/color-chart/28_Butter_Blonde_P10_16_60.jpg",
      "/images/color-chart/31_Platinum_Blonde_80.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Butter Blonde #P10/16/60", hex: "#E8DCC8" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-butter-blonde-p10-16-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-30", handle: "ds-hair-k-tips-golden-hour-blonde", name: "D.S HAIR K-Tips, Golden Hour Blonde", title: "D.S HAIR K-Tips, Golden Hour Blonde", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/29_Golden_Hour_Blonde.jpg", images: [
      "/images/color-chart-front/29_Golden_Hour_Blonde.jpg",
      "/images/color-chart/29_Golden_Hour_Blonde.jpg",
      "/images/color-chart/02_Off_Black_1B.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Golden Hour Blonde", hex: "#D4A574" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-golden-hour-blonde", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "ktip-31", handle: "ds-hair-k-tips-dirty-blonde-18", name: "D.S HAIR K-Tips, Dirty Blonde #18", title: "D.S HAIR K-Tips, Dirty Blonde #18", description: "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring pre-tipped keratin bonds for seamless fusion with your natural hair. Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually for a completely natural, long-lasting result. Available in 31 shades and lengths from 16\"-28\". Must be fitted and removed by a certified hair extension stylist.", shortDescription: "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method", vendor: "D.S HAIR & BEAUTY", productType: "K-Tip Extensions", type: "professional", tags: ["k-tip", "keratin", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/30_Dirty_Blonde_18.jpg", images: [
      "/images/color-chart-front/30_Dirty_Blonde_18.jpg",
      "/images/color-chart/30_Dirty_Blonde_18.jpg",
      "/images/color-chart/03_Dark_Brown_2.jpg",
      "https://img-1.kwcdn.com/product/fancy/3f00a584-73c8-472f-9479-c05f58ae6af3.jpg?imageView2/2/w/800/q/70/format/avif",
      "https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dirty Blonde #18", hex: "#D4A574" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-k-tips-dirty-blonde-18", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-1", handle: "ds-hair-nano-extensions-jet-black-1", name: "D.S HAIR REMY Nano Extensions, Jet Black #1", title: "D.S HAIR REMY Nano Extensions, Jet Black #1", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/01_Jet_Black_1.jpg", images: [
      "/images/color-chart-front/01_Jet_Black_1.jpg",
      "/images/color-chart/01_Jet_Black_1.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Jet Black #1", hex: "#0a0a0a" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-jet-black-1", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-2", handle: "ds-hair-nano-extensions-off-black-1b", name: "D.S HAIR REMY Nano Extensions, Off Black #1B", title: "D.S HAIR REMY Nano Extensions, Off Black #1B", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/02_Off_Black_1B.jpg", images: [
      "/images/color-chart-front/02_Off_Black_1B.jpg",
      "/images/color-chart/02_Off_Black_1B.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Off Black #1B", hex: "#1A1A1A" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-off-black-1b", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-3", handle: "ds-hair-nano-extensions-dark-brown-2", name: "D.S HAIR REMY Nano Extensions, Dark Brown #2", title: "D.S HAIR REMY Nano Extensions, Dark Brown #2", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/03_Dark_Brown_2.jpg", images: [
      "/images/color-chart-front/03_Dark_Brown_2.jpg",
      "/images/color-chart/03_Dark_Brown_2.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Brown #2", hex: "#2C1A0E" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-dark-brown-2", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-4", handle: "ds-hair-nano-extensions-walnut-brown-3", name: "D.S HAIR REMY Nano Extensions, Walnut Brown #3", title: "D.S HAIR REMY Nano Extensions, Walnut Brown #3", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/04_Walnut_Brown_3.jpg", images: [
      "/images/color-chart-front/04_Walnut_Brown_3.jpg",
      "/images/color-chart/04_Walnut_Brown_3.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Walnut Brown #3", hex: "#4A3020" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-walnut-brown-3", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-5", handle: "ds-hair-nano-extensions-chocolate-brown-4", name: "D.S HAIR REMY Nano Extensions, Chocolate Brown #4", title: "D.S HAIR REMY Nano Extensions, Chocolate Brown #4", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/05_Chocolate_Brown_4.jpg", images: [
      "/images/color-chart-front/05_Chocolate_Brown_4.jpg",
      "/images/color-chart/05_Chocolate_Brown_4.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Chocolate Brown #4", hex: "#5C3A21" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-chocolate-brown-4", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-6", handle: "ds-hair-nano-extensions-dark-brown-chestnut-brown-2-6", name: "D.S HAIR REMY Nano Extensions, Dark Brown/Chestnut Brown #2/6", title: "D.S HAIR REMY Nano Extensions, Dark Brown/Chestnut Brown #2/6", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg", images: [
      "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg",
      "/images/color-chart/06_Dark_Brown_Chestnut_Brown_2_6.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Brown/Chestnut Brown #2/6", hex: "#4A3020" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-dark-brown-chestnut-brown-2-6", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-7", handle: "ds-hair-nano-extensions-chestnut-brown-6", name: "D.S HAIR REMY Nano Extensions, Chestnut Brown #6", title: "D.S HAIR REMY Nano Extensions, Chestnut Brown #6", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/07_Chestnut_Brown_6.jpg", images: [
      "/images/color-chart-front/07_Chestnut_Brown_6.jpg",
      "/images/color-chart/07_Chestnut_Brown_6.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Chestnut Brown #6", hex: "#6B4423" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-chestnut-brown-6", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-8", handle: "ds-hair-nano-extensions-almond-brown-8", name: "D.S HAIR REMY Nano Extensions, Almond Brown #8", title: "D.S HAIR REMY Nano Extensions, Almond Brown #8", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/08_Almond_Brown_8.jpg", images: [
      "/images/color-chart-front/08_Almond_Brown_8.jpg",
      "/images/color-chart/08_Almond_Brown_8.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Almond Brown #8", hex: "#8B5A2B" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-almond-brown-8", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-9", handle: "ds-hair-nano-extensions-ash-brown-10", name: "D.S HAIR REMY Nano Extensions, Ash Brown #10", title: "D.S HAIR REMY Nano Extensions, Ash Brown #10", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/09_Ash_Brown_10.jpg", images: [
      "/images/color-chart-front/09_Ash_Brown_10.jpg",
      "/images/color-chart/09_Ash_Brown_10.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Ash Brown #10", hex: "#9C7A4F" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-ash-brown-10", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-10", handle: "ds-hair-nano-extensions-dark-brown-dirty-blonde-2-18", name: "D.S HAIR REMY Nano Extensions, Dark Brown/Dirty Blonde #2/18", title: "D.S HAIR REMY Nano Extensions, Dark Brown/Dirty Blonde #2/18", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg", images: [
      "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg",
      "/images/color-chart/10_Dark_Brown_Dirty_Blonde_2_18.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Brown/Dirty Blonde #2/18", hex: "#6B4423" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-dark-brown-dirty-blonde-2-18", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-11", handle: "ds-hair-nano-extensions-dark-maple-brown-530", name: "D.S HAIR REMY Nano Extensions, Dark Maple Brown #530", title: "D.S HAIR REMY Nano Extensions, Dark Maple Brown #530", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg", images: [
      "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg",
      "/images/color-chart/11_Dark_Maple_Brown_530.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Maple Brown #530", hex: "#5C3317" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-dark-maple-brown-530", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-12", handle: "ds-hair-nano-extensions-walnut-brown-ash-blonde-3-60", name: "D.S HAIR REMY Nano Extensions, Walnut Brown/Ash Blonde #3/60", title: "D.S HAIR REMY Nano Extensions, Walnut Brown/Ash Blonde #3/60", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg", images: [
      "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg",
      "/images/color-chart/12_Walnut_Brown_Ash_Blonde_3_60.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Walnut Brown/Ash Blonde #3/60", hex: "#4A3020" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-walnut-brown-ash-blonde-3-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-13", handle: "ds-hair-nano-extensions-mochachino-brown-dirty-blonde-2-18", name: "D.S HAIR REMY Nano Extensions, Mochachino Brown/Dirty Blonde #2/18", title: "D.S HAIR REMY Nano Extensions, Mochachino Brown/Dirty Blonde #2/18", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg", images: [
      "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg",
      "/images/color-chart/14_Mochachino_Chocolate_Dark_Honey.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Mochachino Brown/Dirty Blonde #2/18", hex: "#6B4423" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-mochachino-brown-dirty-blonde-2-18", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-14", handle: "ds-hair-nano-extensions-dark-honey-cocoa", name: "D.S HAIR REMY Nano Extensions, Dark Honey Cocoa", title: "D.S HAIR REMY Nano Extensions, Dark Honey Cocoa", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg", images: [
      "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg",
      "/images/color-chart/13_Dark_Honey_Cocoa.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Honey Cocoa", hex: "#8B4513" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-dark-honey-cocoa", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-15", handle: "ds-hair-nano-extensions-mochachino-chocolate-dark-honey", name: "D.S HAIR REMY Nano Extensions, Mochachino Chocolate/Dark Honey", title: "D.S HAIR REMY Nano Extensions, Mochachino Chocolate/Dark Honey", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg", images: [
      "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg",
      "/images/color-chart/14_Mochachino_Chocolate_Dark_Honey.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Mochachino Chocolate/Dark Honey", hex: "#5C3A21" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-mochachino-chocolate-dark-honey", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-16", handle: "ds-hair-nano-extensions-dirty-brunette", name: "D.S HAIR REMY Nano Extensions, Dirty Brunette", title: "D.S HAIR REMY Nano Extensions, Dirty Brunette", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/15_Dirty_Brunette.jpg", images: [
      "/images/color-chart-front/15_Dirty_Brunette.jpg",
      "/images/color-chart/15_Dirty_Brunette.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dirty Brunette", hex: "#6B4423" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-dirty-brunette", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-17", handle: "ds-hair-nano-extensions-honey-comb", name: "D.S HAIR REMY Nano Extensions, Honey Comb", title: "D.S HAIR REMY Nano Extensions, Honey Comb", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/16_Honey_Comb.jpg", images: [
      "/images/color-chart-front/16_Honey_Comb.jpg",
      "/images/color-chart/16_Honey_Comb.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Honey Comb", hex: "#D4A574" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-honey-comb", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-18", handle: "ds-hair-nano-extensions-vanilla-latte-8-18-60", name: "D.S HAIR REMY Nano Extensions, Vanilla Latte #8/18/60", title: "D.S HAIR REMY Nano Extensions, Vanilla Latte #8/18/60", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg", images: [
      "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg",
      "/images/color-chart/17_Vanilla_Latte_8_18_60.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Vanilla Latte #8/18/60", hex: "#D4A574" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-vanilla-latte-8-18-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-19", handle: "ds-hair-nano-extensions-pearl-blonde-10-88", name: "D.S HAIR REMY Nano Extensions, Pearl Blonde #10/88", title: "D.S HAIR REMY Nano Extensions, Pearl Blonde #10/88", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg", images: [
      "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg",
      "/images/color-chart/18_Pearl_Blonde_10_88.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Pearl Blonde #10/88", hex: "#E8DCC8" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-pearl-blonde-10-88", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-20", handle: "ds-hair-nano-extensions-mulberry-wine-510", name: "D.S HAIR REMY Nano Extensions, Mulberry Wine #510", title: "D.S HAIR REMY Nano Extensions, Mulberry Wine #510", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/19_Mulberry_Wine_510.jpg", images: [
      "/images/color-chart-front/19_Mulberry_Wine_510.jpg",
      "/images/color-chart/19_Mulberry_Wine_510.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Mulberry Wine #510", hex: "#4A0E0E" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-mulberry-wine-510", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-21", handle: "ds-hair-nano-extensions-spiced-crimson-570", name: "D.S HAIR REMY Nano Extensions, Spiced Crimson #570", title: "D.S HAIR REMY Nano Extensions, Spiced Crimson #570", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/20_Spiced_Crimson_570.jpg", images: [
      "/images/color-chart-front/20_Spiced_Crimson_570.jpg",
      "/images/color-chart/20_Spiced_Crimson_570.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Spiced Crimson #570", hex: "#8B0000" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-spiced-crimson-570", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-22", handle: "ds-hair-nano-extensions-ash-bronde-strawberry-blonde", name: "D.S HAIR REMY Nano Extensions, Ash Bronde/Strawberry Blonde", title: "D.S HAIR REMY Nano Extensions, Ash Bronde/Strawberry Blonde", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg", images: [
      "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg",
      "/images/color-chart/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Ash Bronde/Strawberry Blonde", hex: "#8B5A2B" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-ash-bronde-strawberry-blonde", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-23", handle: "ds-hair-nano-extensions-ash-brown-ash-blonde-8-60", name: "D.S HAIR REMY Nano Extensions, Ash Brown/Ash Blonde #8/60", title: "D.S HAIR REMY Nano Extensions, Ash Brown/Ash Blonde #8/60", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg", images: [
      "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg",
      "/images/color-chart/22_Ash_Brown_Ash_Blonde_8_60.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Ash Brown/Ash Blonde #8/60", hex: "#9C7A4F" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-ash-brown-ash-blonde-8-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-24", handle: "ds-hair-nano-extensions-ash-brown-honey-blonde-8-20-24-60", name: "D.S HAIR REMY Nano Extensions, Ash Brown/Honey Blonde #8/20/24/60", title: "D.S HAIR REMY Nano Extensions, Ash Brown/Honey Blonde #8/20/24/60", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg", images: [
      "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg",
      "/images/color-chart/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Ash Brown/Honey Blonde #8/20/24/60", hex: "#9C7A4F" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-ash-brown-honey-blonde-8-20-24-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-25", handle: "ds-hair-nano-extensions-caramel-blonde-18-46", name: "D.S HAIR REMY Nano Extensions, Caramel Blonde #18/46", title: "D.S HAIR REMY Nano Extensions, Caramel Blonde #18/46", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg", images: [
      "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg",
      "/images/color-chart/24_Caramel_Blonde_18_46.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Caramel Blonde #18/46", hex: "#D4A574" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-caramel-blonde-18-46", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-26", handle: "ds-hair-nano-extensions-white-mocha", name: "D.S HAIR REMY Nano Extensions, White Mocha", title: "D.S HAIR REMY Nano Extensions, White Mocha", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/25_White_Mocha.jpg", images: [
      "/images/color-chart-front/25_White_Mocha.jpg",
      "/images/color-chart/25_White_Mocha.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "White Mocha", hex: "#C4A484" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-white-mocha", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-27", handle: "ds-hair-nano-extensions-beach-blonde-613", name: "D.S HAIR REMY Nano Extensions, Beach Blonde #613", title: "D.S HAIR REMY Nano Extensions, Beach Blonde #613", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/26_Beach_Blonde_613.jpg", images: [
      "/images/color-chart-front/26_Beach_Blonde_613.jpg",
      "/images/color-chart/26_Beach_Blonde_613.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Beach Blonde #613", hex: "#F5DEB3" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-beach-blonde-613", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-28", handle: "ds-hair-nano-extensions-bronzed-caramel-6-18-8-60", name: "D.S HAIR REMY Nano Extensions, Bronzed Caramel #6/18/8/60", title: "D.S HAIR REMY Nano Extensions, Bronzed Caramel #6/18/8/60", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg", images: [
      "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg",
      "/images/color-chart/27_Bronzed_Caramel_6_18_8_60.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Bronzed Caramel #6/18/8/60", hex: "#5C3A21" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-bronzed-caramel-6-18-8-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-29", handle: "ds-hair-nano-extensions-butter-blonde-p10-16-60", name: "D.S HAIR REMY Nano Extensions, Butter Blonde #P10/16/60", title: "D.S HAIR REMY Nano Extensions, Butter Blonde #P10/16/60", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg", images: [
      "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg",
      "/images/color-chart/28_Butter_Blonde_P10_16_60.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Butter Blonde #P10/16/60", hex: "#E8DCC8" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-butter-blonde-p10-16-60", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-30", handle: "ds-hair-nano-extensions-golden-hour-blonde", name: "D.S HAIR REMY Nano Extensions, Golden Hour Blonde", title: "D.S HAIR REMY Nano Extensions, Golden Hour Blonde", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/29_Golden_Hour_Blonde.jpg", images: [
      "/images/color-chart-front/29_Golden_Hour_Blonde.jpg",
      "/images/color-chart/29_Golden_Hour_Blonde.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Golden Hour Blonde", hex: "#D4A574" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-golden-hour-blonde", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  { id: "nano-31", handle: "ds-hair-nano-extensions-dirty-blonde-18", name: "D.S HAIR REMY Nano Extensions, Dirty Blonde #18", title: "D.S HAIR REMY Nano Extensions, Dirty Blonde #18", description: "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — the most invisible professional method available. Each nano ring is an ultra-small, silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that attaches individual 1g hair strands to your natural hair with zero heat, zero glue and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding and a seamless, natural finish. Must be fitted and maintained by a certified stylist. Available in 31 shades and lengths from 16\"-28\".", shortDescription: "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method", vendor: "D.S HAIR & BEAUTY", productType: "Nano Extensions", type: "professional", tags: ["nano", "professional", "new"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/30_Dirty_Blonde_18.jpg", images: [
      "/images/color-chart-front/30_Dirty_Blonde_18.jpg",
      "/images/color-chart/30_Dirty_Blonde_18.jpg",
      "/images/nano/nano-main-02.jpg",
      "/images/nano/nano-main-04.jpg",
      "/images/nano/nano-main-05.jpg",
      "/images/nano/nano-main-06.jpg",
      "/images/nano/nano-main-07.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dirty Blonde #18", hex: "#D4A574" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-nano-extensions-dirty-blonde-18", category: "Professional Extensions", features: ["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"], priceOnRequest: true },

  {
    id: "butterfly-1",
    handle: "ds-hair-butterfly-extensions-jet-black-1",
    name: "D.S HAIR Butterfly Extensions, Jet Black #1",
    title: "D.S HAIR Butterfly Extensions, Jet Black #1",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/01_Jet_Black_1.jpg",
    images: [
      "/images/color-chart-front/01_Jet_Black_1.jpg", "/images/color-chart/01_Jet_Black_1.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Jet Black #1", hex: "#0a0a0a" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-jet-black-1",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-2",
    handle: "ds-hair-butterfly-extensions-off-black-1b",
    name: "D.S HAIR Butterfly Extensions, Off Black #1B",
    title: "D.S HAIR Butterfly Extensions, Off Black #1B",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/02_Off_Black_1B.jpg",
    images: [
      "/images/color-chart-front/02_Off_Black_1B.jpg", "/images/color-chart/02_Off_Black_1B.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Off Black #1B", hex: "#1A1A1A" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-off-black-1b",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-3",
    handle: "ds-hair-butterfly-extensions-dark-brown-2",
    name: "D.S HAIR Butterfly Extensions, Dark Brown #2",
    title: "D.S HAIR Butterfly Extensions, Dark Brown #2",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/03_Dark_Brown_2.jpg",
    images: [
      "/images/color-chart-front/03_Dark_Brown_2.jpg", "/images/color-chart/03_Dark_Brown_2.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Dark Brown #2", hex: "#2C1A0E" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-dark-brown-2",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-4",
    handle: "ds-hair-butterfly-extensions-walnut-brown-3",
    name: "D.S HAIR Butterfly Extensions, Walnut Brown #3",
    title: "D.S HAIR Butterfly Extensions, Walnut Brown #3",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/04_Walnut_Brown_3.jpg",
    images: [
      "/images/color-chart-front/04_Walnut_Brown_3.jpg", "/images/color-chart/04_Walnut_Brown_3.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Walnut Brown #3", hex: "#4A3020" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-walnut-brown-3",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-5",
    handle: "ds-hair-butterfly-extensions-chocolate-brown-4",
    name: "D.S HAIR Butterfly Extensions, Chocolate Brown #4",
    title: "D.S HAIR Butterfly Extensions, Chocolate Brown #4",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/05_Chocolate_Brown_4.jpg",
    images: [
      "/images/color-chart-front/05_Chocolate_Brown_4.jpg", "/images/color-chart/05_Chocolate_Brown_4.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Chocolate Brown #4", hex: "#5C3A21" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-chocolate-brown-4",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-6",
    handle: "ds-hair-butterfly-extensions-dark-brown-chestnut-brown-2-6-balayage",
    name: "D.S HAIR Butterfly Extensions, Dark Brown/Chestnut Brown #2/6",
    title: "D.S HAIR Butterfly Extensions, Dark Brown/Chestnut Brown #2/6",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg",
    images: [
      "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg", "/images/color-chart/06_Dark_Brown_Chestnut_Brown_2_6.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Dark Brown/Chestnut Brown #2/6", hex: "#4A3020" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-dark-brown-chestnut-brown-2-6-balayage",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-7",
    handle: "ds-hair-butterfly-extensions-chestnut-brown-6",
    name: "D.S HAIR Butterfly Extensions, Chestnut Brown #6",
    title: "D.S HAIR Butterfly Extensions, Chestnut Brown #6",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/07_Chestnut_Brown_6.jpg",
    images: [
      "/images/color-chart-front/07_Chestnut_Brown_6.jpg", "/images/color-chart/07_Chestnut_Brown_6.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Chestnut Brown #6", hex: "#6B4423" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-chestnut-brown-6",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-8",
    handle: "ds-hair-butterfly-extensions-almond-brown-8",
    name: "D.S HAIR Butterfly Extensions, Almond Brown #8",
    title: "D.S HAIR Butterfly Extensions, Almond Brown #8",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/08_Almond_Brown_8.jpg",
    images: [
      "/images/color-chart-front/08_Almond_Brown_8.jpg", "/images/color-chart/08_Almond_Brown_8.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Almond Brown #8", hex: "#8B5A2B" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-almond-brown-8",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-9",
    handle: "ds-hair-butterfly-extensions-ash-brown-10",
    name: "D.S HAIR Butterfly Extensions, Ash Brown #10",
    title: "D.S HAIR Butterfly Extensions, Ash Brown #10",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/09_Ash_Brown_10.jpg",
    images: [
      "/images/color-chart-front/09_Ash_Brown_10.jpg", "/images/color-chart/09_Ash_Brown_10.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Ash Brown #10", hex: "#9C7A4F" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-ash-brown-10",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-10",
    handle: "ds-hair-butterfly-extensions-dark-brown-dirty-blonde-2-18-balayage",
    name: "D.S HAIR Butterfly Extensions, Dark Brown/Dirty Blonde #2/18",
    title: "D.S HAIR Butterfly Extensions, Dark Brown/Dirty Blonde #2/18",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg",
    images: [
      "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg", "/images/color-chart/10_Dark_Brown_Dirty_Blonde_2_18.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Dark Brown/Dirty Blonde #2/18", hex: "#6B4423" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-dark-brown-dirty-blonde-2-18-balayage",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-11",
    handle: "ds-hair-butterfly-extensions-dark-maple-brown-530",
    name: "D.S HAIR Butterfly Extensions, Dark Maple Brown #530",
    title: "D.S HAIR Butterfly Extensions, Dark Maple Brown #530",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg",
    images: [
      "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg", "/images/color-chart/11_Dark_Maple_Brown_530.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Dark Maple Brown #530", hex: "#5C3317" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-dark-maple-brown-530",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-12",
    handle: "ds-hair-butterfly-extensions-walnut-brown-ash-blonde-3-60-rooted",
    name: "D.S HAIR Butterfly Extensions, Walnut Brown/Ash Blonde #3/60",
    title: "D.S HAIR Butterfly Extensions, Walnut Brown/Ash Blonde #3/60",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg",
    images: [
      "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg", "/images/color-chart/12_Walnut_Brown_Ash_Blonde_3_60.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Walnut Brown/Ash Blonde #3/60", hex: "#4A3020" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-walnut-brown-ash-blonde-3-60-rooted",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-13",
    handle: "ds-hair-butterfly-extensions-mochachino-brown-dirty-blonde-2-18",
    name: "D.S HAIR Butterfly Extensions, Mochachino Brown/Dirty Blonde #2/18",
    title: "D.S HAIR Butterfly Extensions, Mochachino Brown/Dirty Blonde #2/18",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg",
    images: [
      "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg", "/images/color-chart/14_Mochachino_Chocolate_Dark_Honey.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Mochachino Brown/Dirty Blonde #2/18", hex: "#6B4423" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-mochachino-brown-dirty-blonde-2-18",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-14",
    handle: "ds-hair-butterfly-extensions-dark-honey-cocoa-highlight",
    name: "D.S HAIR Butterfly Extensions, Dark Honey Cocoa Highlight",
    title: "D.S HAIR Butterfly Extensions, Dark Honey Cocoa Highlight",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg",
    images: [
      "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg", "/images/color-chart/13_Dark_Honey_Cocoa.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Dark Honey Cocoa Highlight", hex: "#8B4513" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-dark-honey-cocoa-highlight",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-15",
    handle: "ds-hair-butterfly-extensions-mochachino-chocolate-dark-honey-rooted",
    name: "D.S HAIR Butterfly Extensions, Mochachino Chocolate/Dark Honey",
    title: "D.S HAIR Butterfly Extensions, Mochachino Chocolate/Dark Honey",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg",
    images: [
      "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg", "/images/color-chart/14_Mochachino_Chocolate_Dark_Honey.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Mochachino Chocolate/Dark Honey", hex: "#5C3A21" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-mochachino-chocolate-dark-honey-rooted",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-16",
    handle: "ds-hair-butterfly-extensions-dirty-brunette-highlight",
    name: "D.S HAIR Butterfly Extensions, Dirty Brunette Highlight",
    title: "D.S HAIR Butterfly Extensions, Dirty Brunette Highlight",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/15_Dirty_Brunette.jpg",
    images: [
      "/images/color-chart-front/15_Dirty_Brunette.jpg", "/images/color-chart/15_Dirty_Brunette.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Dirty Brunette Highlight", hex: "#6B4423" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-dirty-brunette-highlight",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-17",
    handle: "ds-hair-butterfly-extensions-honey-comb-highlight",
    name: "D.S HAIR Butterfly Extensions, Honey Comb Highlight",
    title: "D.S HAIR Butterfly Extensions, Honey Comb Highlight",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/16_Honey_Comb.jpg",
    images: [
      "/images/color-chart-front/16_Honey_Comb.jpg", "/images/color-chart/16_Honey_Comb.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Honey Comb Highlight", hex: "#D4A574" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-honey-comb-highlight",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-18",
    handle: "ds-hair-butterfly-extensions-vanilla-latte-highlight-8-18-60",
    name: "D.S HAIR Butterfly Extensions, Vanilla Latte #8/18/60",
    title: "D.S HAIR Butterfly Extensions, Vanilla Latte #8/18/60",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg",
    images: [
      "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg", "/images/color-chart/17_Vanilla_Latte_8_18_60.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Vanilla Latte #8/18/60", hex: "#D4A574" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-vanilla-latte-highlight-8-18-60",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-19",
    handle: "ds-hair-butterfly-extensions-pearl-blonde-10-88-rooted",
    name: "D.S HAIR Butterfly Extensions, Pearl Blonde #10/88",
    title: "D.S HAIR Butterfly Extensions, Pearl Blonde #10/88",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg",
    images: [
      "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg", "/images/color-chart/18_Pearl_Blonde_10_88.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Pearl Blonde #10/88", hex: "#E8DCC8" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-pearl-blonde-10-88-rooted",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-20",
    handle: "ds-hair-butterfly-extensions-mulberry-wine-510",
    name: "D.S HAIR Butterfly Extensions, Mulberry Wine #510",
    title: "D.S HAIR Butterfly Extensions, Mulberry Wine #510",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/19_Mulberry_Wine_510.jpg",
    images: [
      "/images/color-chart-front/19_Mulberry_Wine_510.jpg", "/images/color-chart/19_Mulberry_Wine_510.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Mulberry Wine #510", hex: "#4A0E0E" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-mulberry-wine-510",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-21",
    handle: "ds-hair-butterfly-extensions-spiced-crimson-570",
    name: "D.S HAIR Butterfly Extensions, Spiced Crimson #570",
    title: "D.S HAIR Butterfly Extensions, Spiced Crimson #570",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/20_Spiced_Crimson_570.jpg",
    images: [
      "/images/color-chart-front/20_Spiced_Crimson_570.jpg", "/images/color-chart/20_Spiced_Crimson_570.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Spiced Crimson #570", hex: "#8B0000" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-spiced-crimson-570",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-22",
    handle: "ds-hair-butterfly-extensions-ash-bronde-strawberry-blonde-ombre",
    name: "D.S HAIR Butterfly Extensions, Ash Bronde/Strawberry Blonde #21/27",
    title: "D.S HAIR Butterfly Extensions, Ash Bronde/Strawberry Blonde #21/27",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg",
    images: [
      "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg", "/images/color-chart/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Ash Bronde/Strawberry Blonde #21/27", hex: "#8B5A2B" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-ash-bronde-strawberry-blonde-ombre",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-23",
    handle: "ds-hair-butterfly-extensions-ash-brown-ash-blonde-8-60-balayage",
    name: "D.S HAIR Butterfly Extensions, Ash Brown/Ash Blonde #8/60",
    title: "D.S HAIR Butterfly Extensions, Ash Brown/Ash Blonde #8/60",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg",
    images: [
      "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg", "/images/color-chart/22_Ash_Brown_Ash_Blonde_8_60.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Ash Brown/Ash Blonde #8/60", hex: "#9C7A4F" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-ash-brown-ash-blonde-8-60-balayage",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-24",
    handle: "ds-hair-butterfly-extensions-ash-brown-honey-blonde-8-20-24-60-rooted",
    name: "D.S HAIR Butterfly Extensions, Ash Brown/Honey Blonde #8/20/24/60",
    title: "D.S HAIR Butterfly Extensions, Ash Brown/Honey Blonde #8/20/24/60",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg",
    images: [
      "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg", "/images/color-chart/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Ash Brown/Honey Blonde #8/20/24/60", hex: "#9C7A4F" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-ash-brown-honey-blonde-8-20-24-60-rooted",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-25",
    handle: "ds-hair-butterfly-extensions-caramel-blonde-18-46-marble",
    name: "D.S HAIR Butterfly Extensions, Caramel Blonde #18/46",
    title: "D.S HAIR Butterfly Extensions, Caramel Blonde #18/46",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg",
    images: [
      "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg", "/images/color-chart/24_Caramel_Blonde_18_46.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Caramel Blonde #18/46", hex: "#C68E17" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-caramel-blonde-18-46-marble",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-26",
    handle: "ds-hair-butterfly-extensions-white-mocha-balayage",
    name: "D.S HAIR Butterfly Extensions, White Mocha",
    title: "D.S HAIR Butterfly Extensions, White Mocha",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/25_White_Mocha.jpg",
    images: [
      "/images/color-chart-front/25_White_Mocha.jpg", "/images/color-chart/25_White_Mocha.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "White Mocha", hex: "#5C3A21" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-white-mocha-balayage",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-27",
    handle: "ds-hair-butterfly-extensions-beach-blonde-613",
    name: "D.S HAIR Butterfly Extensions, Beach Blonde #613",
    title: "D.S HAIR Butterfly Extensions, Beach Blonde #613",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/26_Beach_Blonde_613.jpg",
    images: [
      "/images/color-chart-front/26_Beach_Blonde_613.jpg", "/images/color-chart/26_Beach_Blonde_613.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Beach Blonde #613", hex: "#F5DEB3" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-beach-blonde-613",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-28",
    handle: "ds-hair-butterfly-extensions-bronzed-caramel-6-18-8-60-marble",
    name: "D.S HAIR Butterfly Extensions, Bronzed Caramel #6/18/8/60",
    title: "D.S HAIR Butterfly Extensions, Bronzed Caramel #6/18/8/60",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg",
    images: [
      "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg", "/images/color-chart/27_Bronzed_Caramel_6_18_8_60.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Bronzed Caramel #6/18/8/60", hex: "#8B5A2B" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-bronzed-caramel-6-18-8-60-marble",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-29",
    handle: "ds-hair-butterfly-extensions-butter-blonde-p10-16-60",
    name: "D.S HAIR Butterfly Extensions, Butter Blonde #P10/16/60",
    title: "D.S HAIR Butterfly Extensions, Butter Blonde #P10/16/60",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg",
    images: [
      "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg", "/images/color-chart/28_Butter_Blonde_P10_16_60.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Butter Blonde #P10/16/60", hex: "#E8DCC8" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-butter-blonde-p10-16-60",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-30",
    handle: "ds-hair-butterfly-extensions-golden-hour-blonde-balayage",
    name: "D.S HAIR Butterfly Extensions, Golden Hour Blonde",
    title: "D.S HAIR Butterfly Extensions, Golden Hour Blonde",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/29_Golden_Hour_Blonde.jpg",
    images: [
      "/images/color-chart-front/29_Golden_Hour_Blonde.jpg", "/images/color-chart/29_Golden_Hour_Blonde.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Golden Hour Blonde", hex: "#D4A574" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-golden-hour-blonde-balayage",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  {
    id: "butterfly-31",
    handle: "ds-hair-butterfly-extensions-dirty-blonde-18",
    name: "D.S HAIR Butterfly Extensions, Dirty Blonde #18",
    title: "D.S HAIR Butterfly Extensions, Dirty Blonde #18",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights, and colors.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/color-chart-front/30_Dirty_Blonde_18.jpg",
    images: [
      "/images/color-chart-front/30_Dirty_Blonde_18.jpg", "/images/color-chart/30_Dirty_Blonde_18.jpg", "https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg", "https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg", "https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Dirty Blonde #18", hex: "#D4A574" }],
    lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'],
    slug: "ds-hair-butterfly-extensions-dirty-blonde-18",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design", "Half Flat, Full Flat & Super Wefts available", "Multiple lengths available (16\"-28\")", "Professional use recommended"],
    priceOnRequest: true,
  },

  { id: "tape-1", handle: "ds-hair-tape-in-jet-black-1", name: "D.S HAIR Tape-In, Jet Black #1", title: "D.S HAIR Tape-In, Jet Black #1", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "jet-black"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/01_Jet_Black_1.jpg", images: [
      "/images/color-chart-front/01_Jet_Black_1.jpg", "/images/color-chart/01_Jet_Black_1.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Jet Black #1", hex: "#0a0a0a" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-jet-black-1", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-2", handle: "ds-hair-tape-in-off-black-1b", name: "D.S HAIR Tape-In, Off Black #1B", title: "D.S HAIR Tape-In, Off Black #1B", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "off-black"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/02_Off_Black_1B.jpg", images: [
      "/images/color-chart-front/02_Off_Black_1B.jpg", "/images/color-chart/02_Off_Black_1B.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Off Black #1B", hex: "#1A1A1A" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-off-black-1b", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-3", handle: "ds-hair-tape-in-dark-brown-2", name: "D.S HAIR Tape-In, Dark Brown #2", title: "D.S HAIR Tape-In, Dark Brown #2", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "dark-brown"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/03_Dark_Brown_2.jpg", images: [
      "/images/color-chart-front/03_Dark_Brown_2.jpg", "/images/color-chart/03_Dark_Brown_2.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Brown #2", hex: "#2C1A0E" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-dark-brown-2", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-4", handle: "ds-hair-tape-in-walnut-brown-3", name: "D.S HAIR Tape-In, Walnut Brown #3", title: "D.S HAIR Tape-In, Walnut Brown #3", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "walnut-brown"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/04_Walnut_Brown_3.jpg", images: [
      "/images/color-chart-front/04_Walnut_Brown_3.jpg", "/images/color-chart/04_Walnut_Brown_3.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Walnut Brown #3", hex: "#4A3020" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-walnut-brown-3", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-5", handle: "ds-hair-tape-in-chocolate-brown-4", name: "D.S HAIR Tape-In, Chocolate Brown #4", title: "D.S HAIR Tape-In, Chocolate Brown #4", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "chocolate-brown"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/05_Chocolate_Brown_4.jpg", images: [
      "/images/color-chart-front/05_Chocolate_Brown_4.jpg", "/images/color-chart/05_Chocolate_Brown_4.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Chocolate Brown #4", hex: "#5C3A21" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-chocolate-brown-4", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-6", handle: "ds-hair-tape-in-chestnut-brown-6", name: "D.S HAIR Tape-In, Chestnut Brown #6", title: "D.S HAIR Tape-In, Chestnut Brown #6", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "chestnut-brown"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg", images: [
      "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg", "/images/color-chart/06_Dark_Brown_Chestnut_Brown_2_6.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Chestnut Brown #6", hex: "#8B5A2B" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-chestnut-brown-6", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-7", handle: "ds-hair-tape-in-platinum-blonde-80", name: "D.S HAIR Tape-In, Platinum Blonde #80", title: "D.S HAIR Tape-In, Platinum Blonde #80", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "platinum-blonde"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/07_Chestnut_Brown_6.jpg", images: [
      "/images/color-chart-front/07_Chestnut_Brown_6.jpg", "/images/color-chart/07_Chestnut_Brown_6.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Platinum Blonde #80", hex: "#E5E4E2" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-platinum-blonde-80", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-8", handle: "ds-hair-tape-in-ash-blonde-60", name: "D.S HAIR Tape-In, Ash Blonde #60", title: "D.S HAIR Tape-In, Ash Blonde #60", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "ash-blonde"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/08_Almond_Brown_8.jpg", images: [
      "/images/color-chart-front/08_Almond_Brown_8.jpg", "/images/color-chart/08_Almond_Brown_8.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Ash Blonde #60", hex: "#E8DCC8" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-ash-blonde-60", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-9", handle: "ds-hair-tape-in-beach-blonde-613", name: "D.S HAIR Tape-In, Beach Blonde #613", title: "D.S HAIR Tape-In, Beach Blonde #613", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "beach-blonde"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/09_Ash_Brown_10.jpg", images: [
      "/images/color-chart-front/09_Ash_Brown_10.jpg", "/images/color-chart/09_Ash_Brown_10.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Beach Blonde #613", hex: "#F5DEB3" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-beach-blonde-613", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-10", handle: "ds-hair-tape-in-golden-blonde", name: "D.S HAIR Tape-In, Golden Blonde", title: "D.S HAIR Tape-In, Golden Blonde", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "golden-blonde"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg", images: [
      "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg", "/images/color-chart/10_Dark_Brown_Dirty_Blonde_2_18.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Golden Blonde", hex: "#FFD700" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-golden-blonde", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-11", handle: "ds-hair-tape-in-caramel-blonde", name: "D.S HAIR Tape-In, Caramel Blonde", title: "D.S HAIR Tape-In, Caramel Blonde", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "caramel-blonde"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg", images: [
      "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg", "/images/color-chart/11_Dark_Maple_Brown_530.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Caramel Blonde", hex: "#C68E17" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-caramel-blonde", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-12", handle: "ds-hair-tape-in-auburn", name: "D.S HAIR Tape-In, Auburn", title: "D.S HAIR Tape-In, Auburn", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "auburn"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg", images: [
      "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg", "/images/color-chart/12_Walnut_Brown_Ash_Blonde_3_60.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Auburn", hex: "#8B4513" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-auburn", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-13", handle: "ds-hair-tape-in-burgundy", name: "D.S HAIR Tape-In, Burgundy", title: "D.S HAIR Tape-In, Burgundy", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "burgundy"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg", images: [
      "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg", "/images/color-chart/13_Dark_Honey_Cocoa.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Burgundy", hex: "#800020" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-burgundy", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-14", handle: "ds-hair-tape-in-ash-brown", name: "D.S HAIR Tape-In, Ash Brown", title: "D.S HAIR Tape-In, Ash Brown", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "ash-brown"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg", images: [
      "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg", "/images/color-chart/14_Mochachino_Chocolate_Dark_Honey.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Ash Brown", hex: "#9C7A4F" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-ash-brown", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-15", handle: "ds-hair-tape-in-medium-brown", name: "D.S HAIR Tape-In, Medium Brown", title: "D.S HAIR Tape-In, Medium Brown", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "medium-brown"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/15_Dirty_Brunette.jpg", images: [
      "/images/color-chart-front/15_Dirty_Brunette.jpg", "/images/color-chart/15_Dirty_Brunette.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Medium Brown", hex: "#6B4423" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-medium-brown", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-16", handle: "ds-hair-tape-in-balayage", name: "D.S HAIR Tape-In, Balayage", title: "D.S HAIR Tape-In, Balayage", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "balayage"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/16_Honey_Comb.jpg", images: [
      "/images/color-chart-front/16_Honey_Comb.jpg", "/images/color-chart/16_Honey_Comb.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Balayage", hex: "#C4A484" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-balayage", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-17", handle: "ds-hair-tape-in-ombre", name: "D.S HAIR Tape-In, Ombre", title: "D.S HAIR Tape-In, Ombre", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "ombre"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg", images: [
      "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg", "/images/color-chart/17_Vanilla_Latte_8_18_60.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Ombre", hex: "#8B7355" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-ombre", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-18", handle: "ds-hair-tape-in-rooted", name: "D.S HAIR Tape-In, Rooted", title: "D.S HAIR Tape-In, Rooted", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "rooted"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg", images: [
      "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg", "/images/color-chart/18_Pearl_Blonde_10_88.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Rooted", hex: "#4A3728" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-rooted", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-19", handle: "ds-hair-tape-in-espresso", name: "D.S HAIR Tape-In, Espresso", title: "D.S HAIR Tape-In, Espresso", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "espresso"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/19_Mulberry_Wine_510.jpg", images: [
      "/images/color-chart-front/19_Mulberry_Wine_510.jpg", "/images/color-chart/19_Mulberry_Wine_510.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Espresso", hex: "#3C2415" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-espresso", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-20", handle: "ds-hair-tape-in-brazilian", name: "D.S HAIR Tape-In, Brazilian", title: "D.S HAIR Tape-In, Brazilian", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "brazilian"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/20_Spiced_Crimson_570.jpg", images: [
      "/images/color-chart-front/20_Spiced_Crimson_570.jpg", "/images/color-chart/20_Spiced_Crimson_570.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Brazilian", hex: "#3D2314" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-brazilian", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-21", handle: "ds-hair-tape-in-peruvian", name: "D.S HAIR Tape-In, Peruvian", title: "D.S HAIR Tape-In, Peruvian", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "peruvian"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg", images: [
      "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg", "/images/color-chart/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Peruvian", hex: "#2C1A0E" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-peruvian", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-22", handle: "ds-hair-tape-in-malaysian", name: "D.S HAIR Tape-In, Malaysian", title: "D.S HAIR Tape-In, Malaysian", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "malaysian"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg", images: [
      "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg", "/images/color-chart/22_Ash_Brown_Ash_Blonde_8_60.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Malaysian", hex: "#1A0F0A" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-malaysian", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-23", handle: "ds-hair-tape-in-indian", name: "D.S HAIR Tape-In, Indian", title: "D.S HAIR Tape-In, Indian", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "indian"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg", images: [
      "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg", "/images/color-chart/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Indian", hex: "#0D0D0D" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-indian", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-24", handle: "ds-hair-tape-in-russian", name: "D.S HAIR Tape-In, Russian", title: "D.S HAIR Tape-In, Russian", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "russian"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg", images: [
      "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg", "/images/color-chart/24_Caramel_Blonde_18_46.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Russian", hex: "#F5DEB3" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-russian", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-25", handle: "ds-hair-tape-in-light-blonde", name: "D.S HAIR Tape-In, Light Blonde", title: "D.S HAIR Tape-In, Light Blonde", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "light-blonde"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/25_White_Mocha.jpg", images: [
      "/images/color-chart-front/25_White_Mocha.jpg", "/images/color-chart/25_White_Mocha.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Light Blonde", hex: "#F5DEB3" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-light-blonde", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-26", handle: "ds-hair-tape-in-soft-brown", name: "D.S HAIR Tape-In, Soft Brown", title: "D.S HAIR Tape-In, Soft Brown", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "soft-brown"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/26_Beach_Blonde_613.jpg", images: [
      "/images/color-chart-front/26_Beach_Blonde_613.jpg", "/images/color-chart/26_Beach_Blonde_613.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Soft Brown", hex: "#A0785A" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-soft-brown", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-27", handle: "ds-hair-tape-in-cool-brown", name: "D.S HAIR Tape-In, Cool Brown", title: "D.S HAIR Tape-In, Cool Brown", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "cool-brown"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg", images: [
      "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg", "/images/color-chart/27_Bronzed_Caramel_6_18_8_60.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Cool Brown", hex: "#6B5344" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-cool-brown", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-28", handle: "ds-hair-tape-in-dirty-blonde-18", name: "D.S HAIR Tape-In, Dirty Blonde #18", title: "D.S HAIR Tape-In, Dirty Blonde #18", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "dirty-blonde"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg", images: [
      "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg", "/images/color-chart/28_Butter_Blonde_P10_16_60.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dirty Blonde #18", hex: "#D4A574" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-dirty-blonde-18", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-29", handle: "ds-hair-tape-in-strawberry-blonde", name: "D.S HAIR Tape-In, Strawberry Blonde", title: "D.S HAIR Tape-In, Strawberry Blonde", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "strawberry-blonde"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/29_Golden_Hour_Blonde.jpg", images: [
      "/images/color-chart-front/29_Golden_Hour_Blonde.jpg", "/images/color-chart/29_Golden_Hour_Blonde.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Strawberry Blonde", hex: "#FD8C69" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-strawberry-blonde", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-30", handle: "ds-hair-tape-in-dark-chocolate", name: "D.S HAIR Tape-In, Dark Chocolate", title: "D.S HAIR Tape-In, Dark Chocolate", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "dark-chocolate"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/30_Dirty_Blonde_18.jpg", images: [
      "/images/color-chart-front/30_Dirty_Blonde_18.jpg", "/images/color-chart/30_Dirty_Blonde_18.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Dark Chocolate", hex: "#3C1A0E" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-dark-chocolate", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "tape-31", handle: "ds-hair-tape-in-honey-walnut", name: "D.S HAIR Tape-In, Honey Walnut", title: "D.S HAIR Tape-In, Honey Walnut", description: "Premium tape-in hair extensions.", shortDescription: "Premium tape-in hair extensions", vendor: "D.S HAIR & BEAUTY", productType: "Tape-In Extensions", type: "professional", tags: ["tape-in", "honey-walnut"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/31_Platinum_Blonde_80.jpg", images: [
      "/images/color-chart-front/31_Platinum_Blonde_80.jpg", "/images/color-chart/31_Platinum_Blonde_80.jpg"
    ], variants: [], inStock: true, badge: "New", rating: 5.0, reviews: 0, colors: [{ name: "Honey Walnut", hex: "#8B6914" }], lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-tape-in-honey-walnut", category: "Professional Extensions", features: ["100% Remy Human Hair", "Tape-in method"], priceOnRequest: true },

  { id: "weft-1", handle: "ds-hair-human-hair-weft-jet-black-1-natural", name: "D.S HAIR REMY HUMAN WEFT, Jet Black #1 Natural", title: "D.S HAIR REMY HUMAN WEFT, Jet Black #1 Natural", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "jet"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/01_Jet_Black_1.jpg", images: [
      "/images/color-chart-front/01_Jet_Black_1.jpg", "/images/color-chart/01_Jet_Black_1.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Jet Black #1 Natural", hex: "#0a0a0a" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-jet-black-1-natural", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-2", handle: "ds-hair-human-hair-weft-off-black-1b-natural", name: "D.S HAIR REMY HUMAN WEFT, Off Black #1B Natural", title: "D.S HAIR REMY HUMAN WEFT, Off Black #1B Natural", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "off"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/02_Off_Black_1B.jpg", images: [
      "/images/color-chart-front/02_Off_Black_1B.jpg", "/images/color-chart/02_Off_Black_1B.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Off Black #1B Natural", hex: "#1A1A1A" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-off-black-1b-natural", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-3", handle: "ds-hair-human-hair-weft-dark-brown-2-natural", name: "D.S HAIR REMY HUMAN WEFT, Dark Brown #2 Natural", title: "D.S HAIR REMY HUMAN WEFT, Dark Brown #2 Natural", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "dark"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/03_Dark_Brown_2.jpg", images: [
      "/images/color-chart-front/03_Dark_Brown_2.jpg", "/images/color-chart/03_Dark_Brown_2.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Dark Brown #2 Natural", hex: "#2C1A0E" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-dark-brown-2-natural", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-4", handle: "ds-hair-human-hair-weft-walnut-brown-3-natural", name: "D.S HAIR REMY HUMAN WEFT, Walnut Brown #3 Natural", title: "D.S HAIR REMY HUMAN WEFT, Walnut Brown #3 Natural", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "walnut"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/04_Walnut_Brown_3.jpg", images: [
      "/images/color-chart-front/04_Walnut_Brown_3.jpg", "/images/color-chart/04_Walnut_Brown_3.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Walnut Brown #3 Natural", hex: "#4A3020" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-walnut-brown-3-natural", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-5", handle: "ds-hair-human-hair-weft-chocolate-brown-4-natural", name: "D.S HAIR REMY HUMAN WEFT, Chocolate Brown #4 Natural", title: "D.S HAIR REMY HUMAN WEFT, Chocolate Brown #4 Natural", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "chocolate"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/05_Chocolate_Brown_4.jpg", images: [
      "/images/color-chart-front/05_Chocolate_Brown_4.jpg", "/images/color-chart/05_Chocolate_Brown_4.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Chocolate Brown #4 Natural", hex: "#5C3A21" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-chocolate-brown-4-natural", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-6", handle: "ds-hair-human-hair-weft-dark-brown-chestnut-brown-2-6-balayage", name: "D.S HAIR REMY HUMAN WEFT, Dark Brown/Chestnut Brown #2/6 Balayage", title: "D.S HAIR REMY HUMAN WEFT, Dark Brown/Chestnut Brown #2/6 Balayage", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "dark"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg", images: [
      "/images/color-chart-front/06_Dark_Brown_Chestnut_Brown_2_6.jpg", "/images/color-chart/06_Dark_Brown_Chestnut_Brown_2_6.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Dark Brown/Chestnut Brown #2/6 Balayage", hex: "#5C3A21" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-dark-brown-chestnut-brown-2-6-balayage", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-7", handle: "ds-hair-human-hair-weft-chestnut-brown-6-natural", name: "D.S HAIR REMY HUMAN WEFT, Chestnut Brown #6 Natural", title: "D.S HAIR REMY HUMAN WEFT, Chestnut Brown #6 Natural", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "chestnut"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/07_Chestnut_Brown_6.jpg", images: [
      "/images/color-chart-front/07_Chestnut_Brown_6.jpg", "/images/color-chart/07_Chestnut_Brown_6.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Chestnut Brown #6 Natural", hex: "#8B5A2B" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-chestnut-brown-6-natural", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-8", handle: "ds-hair-human-hair-weft-almond-brown-8", name: "D.S HAIR REMY HUMAN WEFT, Almond Brown #8", title: "D.S HAIR REMY HUMAN WEFT, Almond Brown #8", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "almond"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/08_Almond_Brown_8.jpg", images: [
      "/images/color-chart-front/08_Almond_Brown_8.jpg", "/images/color-chart/08_Almond_Brown_8.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Almond Brown #8", hex: "#A0785A" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-almond-brown-8", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-9", handle: "ds-hair-human-hair-weft-ash-brown-10", name: "D.S HAIR REMY HUMAN WEFT, Ash Brown #10", title: "D.S HAIR REMY HUMAN WEFT, Ash Brown #10", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "ash"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/09_Ash_Brown_10.jpg", images: [
      "/images/color-chart-front/09_Ash_Brown_10.jpg", "/images/color-chart/09_Ash_Brown_10.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Ash Brown #10", hex: "#9C7A4F" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-ash-brown-10", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-10", handle: "ds-hair-human-hair-weft-dark-brown-dirty-blonde-2-18-balayage", name: "D.S HAIR REMY HUMAN WEFT, Dark Brown/Dirty Blonde #2/18 Balayage", title: "D.S HAIR REMY HUMAN WEFT, Dark Brown/Dirty Blonde #2/18 Balayage", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "dark"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg", images: [
      "/images/color-chart-front/10_Dark_Brown_Dirty_Blonde_2_18.jpg", "/images/color-chart/10_Dark_Brown_Dirty_Blonde_2_18.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Dark Brown/Dirty Blonde #2/18 Balayage", hex: "#D4A574" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-dark-brown-dirty-blonde-2-18-balayage", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-11", handle: "ds-hair-human-hair-weft-dark-maple-brown-530", name: "D.S HAIR REMY HUMAN WEFT, Dark Maple Brown #530", title: "D.S HAIR REMY HUMAN WEFT, Dark Maple Brown #530", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "dark"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg", images: [
      "/images/color-chart-front/11_Dark_Maple_Brown_530.jpg", "/images/color-chart/11_Dark_Maple_Brown_530.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Dark Maple Brown #530", hex: "#4A3020" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-dark-maple-brown-530", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-12", handle: "ds-hair-human-hair-weft-walnut-brown-ash-blonde-3-60-rooted", name: "D.S HAIR REMY HUMAN WEFT, Walnut Brown/Ash Blonde #3/60 Rooted", title: "D.S HAIR REMY HUMAN WEFT, Walnut Brown/Ash Blonde #3/60 Rooted", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "walnut"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg", images: [
      "/images/color-chart-front/12_Walnut_Brown_Ash_Blonde_3_60.jpg", "/images/color-chart/12_Walnut_Brown_Ash_Blonde_3_60.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Walnut Brown/Ash Blonde #3/60 Rooted", hex: "#E8DCC8" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-walnut-brown-ash-blonde-3-60-rooted", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-13", handle: "ds-hair-human-hair-weft-dark-honey-cocoa-highlight", name: "D.S HAIR REMY HUMAN WEFT, Dark Honey Cocoa Highlight", title: "D.S HAIR REMY HUMAN WEFT, Dark Honey Cocoa Highlight", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "dark"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg", images: [
      "/images/color-chart-front/13_Dark_Honey_Cocoa.jpg", "/images/color-chart/13_Dark_Honey_Cocoa.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Dark Honey Cocoa Highlight", hex: "#6B4423" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-dark-honey-cocoa-highlight", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-14", handle: "ds-hair-human-hair-weft-mochachino-chocolate-dark-honey-rooted-highlight", name: "D.S HAIR REMY HUMAN WEFT, Mochachino Chocolate/Dark Honey Rooted Highlight", title: "D.S HAIR REMY HUMAN WEFT, Mochachino Chocolate/Dark Honey Rooted Highlight", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "mochachino"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg", images: [
      "/images/color-chart-front/14_Mochachino_Chocolate_Dark_Honey.jpg", "/images/color-chart/14_Mochachino_Chocolate_Dark_Honey.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Mochachino Chocolate/Dark Honey Rooted Highlight", hex: "#5C3A21" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-mochachino-chocolate-dark-honey-rooted-highlight", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-15", handle: "ds-hair-human-hair-weft-dirty-brunette-highlight", name: "D.S HAIR REMY HUMAN WEFT, Dirty Brunette Highlight", title: "D.S HAIR REMY HUMAN WEFT, Dirty Brunette Highlight", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "dirty"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/15_Dirty_Brunette.jpg", images: [
      "/images/color-chart-front/15_Dirty_Brunette.jpg", "/images/color-chart/15_Dirty_Brunette.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Dirty Brunette Highlight", hex: "#6B5344" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-dirty-brunette-highlight", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-16", handle: "ds-hair-human-hair-weft-honey-comb-highlight", name: "D.S HAIR REMY HUMAN WEFT, Honey Comb Highlight", title: "D.S HAIR REMY HUMAN WEFT, Honey Comb Highlight", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "honey"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/16_Honey_Comb.jpg", images: [
      "/images/color-chart-front/16_Honey_Comb.jpg", "/images/color-chart/16_Honey_Comb.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Honey Comb Highlight", hex: "#C68E17" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-honey-comb-highlight", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-17", handle: "ds-hair-human-hair-weft-vanilla-latte-8-18-60-highlight", name: "D.S HAIR REMY HUMAN WEFT, Vanilla Latte #8/18/60 Highlight", title: "D.S HAIR REMY HUMAN WEFT, Vanilla Latte #8/18/60 Highlight", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "vanilla"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg", images: [
      "/images/color-chart-front/17_Vanilla_Latte_8_18_60.jpg", "/images/color-chart/17_Vanilla_Latte_8_18_60.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Vanilla Latte #8/18/60 Highlight", hex: "#D4A574" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-vanilla-latte-8-18-60-highlight", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-18", handle: "ds-hair-human-hair-weft-pearl-blonde-10-88-rooted-highlight", name: "D.S HAIR REMY HUMAN WEFT, Pearl Blonde #10/88 Rooted Highlight", title: "D.S HAIR REMY HUMAN WEFT, Pearl Blonde #10/88 Rooted Highlight", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "pearl"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg", images: [
      "/images/color-chart-front/18_Pearl_Blonde_10_88.jpg", "/images/color-chart/18_Pearl_Blonde_10_88.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Pearl Blonde #10/88 Rooted Highlight", hex: "#F5DEB3" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-pearl-blonde-10-88-rooted-highlight", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-19", handle: "ds-hair-human-hair-weft-mulberry-wine-510", name: "D.S HAIR REMY HUMAN WEFT, Mulberry Wine #510", title: "D.S HAIR REMY HUMAN WEFT, Mulberry Wine #510", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "mulberry"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/19_Mulberry_Wine_510.jpg", images: [
      "/images/color-chart-front/19_Mulberry_Wine_510.jpg", "/images/color-chart/19_Mulberry_Wine_510.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Mulberry Wine #510", hex: "#800020" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-mulberry-wine-510", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-20", handle: "ds-hair-human-hair-weft-spiced-crimson-570", name: "D.S HAIR REMY HUMAN WEFT, Spiced Crimson #570", title: "D.S HAIR REMY HUMAN WEFT, Spiced Crimson #570", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "spiced"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/20_Spiced_Crimson_570.jpg", images: [
      "/images/color-chart-front/20_Spiced_Crimson_570.jpg", "/images/color-chart/20_Spiced_Crimson_570.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Spiced Crimson #570", hex: "#8B0000" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-spiced-crimson-570", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-21", handle: "ds-hair-human-hair-weft-ash-bronde-strawberry-blonde-21-27-ombre", name: "D.S HAIR REMY HUMAN WEFT, Ash Bronde/Strawberry Blonde #21/27 Ombre", title: "D.S HAIR REMY HUMAN WEFT, Ash Bronde/Strawberry Blonde #21/27 Ombre", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "ash"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg", images: [
      "/images/color-chart-front/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg", "/images/color-chart/21_Ash_Bronde_Strawberry_Blonde_21_27.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Ash Bronde/Strawberry Blonde #21/27 Ombre", hex: "#FD8C69" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-ash-bronde-strawberry-blonde-21-27-ombre", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-22", handle: "ds-hair-human-hair-weft-ash-brown-ash-blonde-8-60-balayage", name: "D.S HAIR REMY HUMAN WEFT, Ash Brown/Ash Blonde #8/60 Balayage", title: "D.S HAIR REMY HUMAN WEFT, Ash Brown/Ash Blonde #8/60 Balayage", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "ash"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg", images: [
      "/images/color-chart-front/22_Ash_Brown_Ash_Blonde_8_60.jpg", "/images/color-chart/22_Ash_Brown_Ash_Blonde_8_60.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Ash Brown/Ash Blonde #8/60 Balayage", hex: "#E8DCC8" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-ash-brown-ash-blonde-8-60-balayage", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-23", handle: "ds-hair-human-hair-weft-ash-brown-honey-blonde-8-20-24-60-rooted", name: "D.S HAIR REMY HUMAN WEFT, Ash Brown/Honey Blonde #8/20/24/60 Rooted", title: "D.S HAIR REMY HUMAN WEFT, Ash Brown/Honey Blonde #8/20/24/60 Rooted", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "ash"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg", images: [
      "/images/color-chart-front/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg", "/images/color-chart/23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Ash Brown/Honey Blonde #8/20/24/60 Rooted", hex: "#D4A574" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-ash-brown-honey-blonde-8-20-24-60-rooted", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-24", handle: "ds-hair-human-hair-weft-caramel-blonde-18-46-marble-blends", name: "D.S HAIR REMY HUMAN WEFT, Caramel Blonde #18/46 Marble Blends", title: "D.S HAIR REMY HUMAN WEFT, Caramel Blonde #18/46 Marble Blends", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "caramel"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg", images: [
      "/images/color-chart-front/24_Caramel_Blonde_18_46.jpg", "/images/color-chart/24_Caramel_Blonde_18_46.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Caramel Blonde #18/46 Marble Blends", hex: "#C68E17" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-caramel-blonde-18-46-marble-blends", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-25", handle: "ds-hair-human-hair-weft-white-mocha-balayage", name: "D.S HAIR REMY HUMAN WEFT, White Mocha Balayage", title: "D.S HAIR REMY HUMAN WEFT, White Mocha Balayage", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "white"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/25_White_Mocha.jpg", images: [
      "/images/color-chart-front/25_White_Mocha.jpg", "/images/color-chart/25_White_Mocha.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "White Mocha Balayage", hex: "#F5DEB3" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-white-mocha-balayage", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-26", handle: "ds-hair-human-hair-weft-beach-blonde-613-natural", name: "D.S HAIR REMY HUMAN WEFT, Beach Blonde #613 Natural", title: "D.S HAIR REMY HUMAN WEFT, Beach Blonde #613 Natural", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "beach"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/26_Beach_Blonde_613.jpg", images: [
      "/images/color-chart-front/26_Beach_Blonde_613.jpg", "/images/color-chart/26_Beach_Blonde_613.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Beach Blonde #613 Natural", hex: "#F5DEB3" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-beach-blonde-613-natural", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-27", handle: "ds-hair-human-hair-weft-bronzed-caramel-6-18-8-60-marble-blends", name: "D.S HAIR REMY HUMAN WEFT, Bronzed Caramel #6/18/8/60 Marble Blends", title: "D.S HAIR REMY HUMAN WEFT, Bronzed Caramel #6/18/8/60 Marble Blends", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "bronzed"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg", images: [
      "/images/color-chart-front/27_Bronzed_Caramel_6_18_8_60.jpg", "/images/color-chart/27_Bronzed_Caramel_6_18_8_60.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Bronzed Caramel #6/18/8/60 Marble Blends", hex: "#C68E17" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-bronzed-caramel-6-18-8-60-marble-blends", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-28", handle: "ds-hair-human-hair-weft-butter-blonde-p10-16-60-natural", name: "D.S HAIR REMY HUMAN WEFT, Butter Blonde #P10/16/60 Natural", title: "D.S HAIR REMY HUMAN WEFT, Butter Blonde #P10/16/60 Natural", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "butter"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg", images: [
      "/images/color-chart-front/28_Butter_Blonde_P10_16_60.jpg", "/images/color-chart/28_Butter_Blonde_P10_16_60.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Butter Blonde #P10/16/60 Natural", hex: "#F5DEB3" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-butter-blonde-p10-16-60-natural", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-29", handle: "ds-hair-human-hair-weft-golden-hour-blonde-balayage", name: "D.S HAIR REMY HUMAN WEFT, Golden Hour Blonde Balayage", title: "D.S HAIR REMY HUMAN WEFT, Golden Hour Blonde Balayage", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "golden"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/29_Golden_Hour_Blonde.jpg", images: [
      "/images/color-chart-front/29_Golden_Hour_Blonde.jpg", "/images/color-chart/29_Golden_Hour_Blonde.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Golden Hour Blonde Balayage", hex: "#FFD700" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-golden-hour-blonde-balayage", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-30", handle: "ds-hair-human-hair-weft-dirty-blonde-18-natural", name: "D.S HAIR REMY HUMAN WEFT, Dirty Blonde #18 Natural", title: "D.S HAIR REMY HUMAN WEFT, Dirty Blonde #18 Natural", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "dirty"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/30_Dirty_Blonde_18.jpg", images: [
      "/images/color-chart-front/30_Dirty_Blonde_18.jpg", "/images/color-chart/30_Dirty_Blonde_18.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Dirty Blonde #18 Natural", hex: "#D4A574" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-dirty-blonde-18-natural", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  { id: "weft-31", handle: "ds-hair-human-hair-weft-platinum-blonde-80-natural", name: "D.S HAIR REMY HUMAN WEFT, Platinum Blonde #80 Natural", title: "D.S HAIR REMY HUMAN WEFT, Platinum Blonde #80 Natural", description: "Our range of D.S HAIR human extensions is the ultimate in quality and style, with Half Flat, Full Flat and Super Wefts. Available in multiple lengths, weights,", shortDescription: "Premium human hair weft extensions", vendor: "D.S HAIR & BEAUTY", productType: "Weft Extensions", type: "professional", tags: ["weft", "human-hair", "platinum"], price: 0, originalPrice: undefined, currencyCode: "GBP", image: "/images/color-chart-front/31_Platinum_Blonde_80.jpg", images: [
      "/images/color-chart-front/31_Platinum_Blonde_80.jpg", "/images/color-chart/31_Platinum_Blonde_80.jpg", "https://www.foxyhairextensions.net/wp-content/uploads/2024/02/New-shades-1-scaled.jpg", "https://www.additionallengths.co.uk/cdn/shop/files/Full_Weft_55_0036ae70-7891-4ce1-b6a8-63f494525dc4.jpg?height=1408&v=1729085077&width=1100", "https://www.vpfashion.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/h/t/htw-_.jpg"
    ], variants: [], inStock: true, badge: undefined, rating: 5.0, reviews: 0, colors: [{ name: "Platinum Blonde #80 Natural", hex: "#E5E4E2" }], lengths: ['14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"'], slug: "ds-hair-human-hair-weft-platinum-blonde-80-natural", category: "Professional Extensions", features: ["100% Remy Human Hair", "Machine-made weft"], priceOnRequest: true },

  // ─── DS-HAIR-TOP Products (TOP-01 to TOP-12) ───────────────────
  // TOP-01: 7" X 8" MONO TOP, Indian human hair, 130% density, 130g
  // TOP-02: 5" X 3" Fine Welded Mono, Indian hair, 130% density, 80g
  // TOP-03: 7.5" X 8" Mono + NPU Perimeter, Indian hair, 130% density, 90g
  // TOP-04: 6" X 6" Silk Top + Lace, Indian hair, 130% density, 90g
  // TOP-05: 5" X 6.5" Fine Welded Mono, Indian hair, 130% density, 90g
  // TOP-06: 5" X 6" MONO Top, Indian hair, 130% density, 90g
  // TOP-07: 5" X 6" French Lace, Indian hair, 130% density, 90g
  // TOP-08: 5" X 6" Fine Mono + Open Weft, Indian hair, 130% density, 90g
  // TOP-09: 6" X 7" French Lace + NPU, Remy hair, 130% density, 90g
  // TOP-10: 5" X 6" MONO Top, Indian hair, 120% density, 90g
  // TOP-11: 5" X 6" Fine Mono + Lace, Indian hair, 120% density, 90g
  // TOP-12: 4.75" X 2" PU Base, Chinese Virgin hair, 120% density, 90g

  {
    id: "ds-top-01",
    handle: "ds-hair-top-01-mono-top-human-hair-topper",
    name: "7\" X 8\" UPGRADE COURTNEY MONO TOP HUMAN HAIR TOPPER",
    title: "7\" X 8\" UPGRADE COURTNEY MONO TOP HUMAN HAIR TOPPER",
    description: "Whether for hair loss or added volume, D.S HAIR toppers provide the ultimate solution for a natural, full look. This 7\" X 8\" MONO TOP Human Hair Topper is 100% hand-tied with Indian human hair at 130% density — delivering natural movement, a realistic scalp simulation, and all-day comfort. Customized colour and length options available.",
    shortDescription: "100% Indian human hair, 130% density, hand-tied mono top. 7\" X 8\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "mono-top", "ds-top", "hand-tied", "indian-hair"],
    price: 218,
    originalPrice: 278,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-01-hero.jpg",
    images: [
      "/images/toppers/ds-top-01-hero.jpg",
      "/images/toppers/ds-top-01-1.jpg",
      "/images/toppers/ds-top-01-2.jpg",
      "/images/toppers/ds-top-01-3.jpg",
      "/images/toppers/ds-top-01-4.jpg",
      "/images/toppers/ds-top-01-5.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "Best Seller",
    rating: 4.9,
    reviews: 87,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["14\" (35cm)", "16\" (40cm)", "18\" (45cm)"],
    slug: "ds-hair-top-01-mono-top-human-hair-topper",
    category: "Hair Toppers",
    features: [
      "100% Indian human hair — premium Remy quality",
      "130% density — natural fullness without bulk",
      "Hand-tied mono top base — realistic scalp simulation",
      "Base size: 7\" X 8\" (13cm X 10cm) — full crown coverage",
      "Available lengths: 14\", 16\", 18\"",
      "8 natural salon colours available",
      "Customized colour and length service available",
      "Hand-tied with pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "7\" X 8\" (13cm X 10cm)",
    hairWeight: "130g",
    baseCoverage: "Crown + Parting",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-01",
  },

  {
    id: "ds-top-02",
    handle: "ds-hair-top-02-womens-hair-replacement-system",
    name: "7\" X 8\" Women's Hair Replacement System Human Hair Topper Hand-Tied",
    title: "7\" X 8\" Women's Hair Replacement System Human Hair Topper Hand-Tied",
    description: "A premium hair topper that offers natural volume and coverage, the Women's Hair Replacement System is perfect for women who want to improve the appearance of their hair or treat thinning areas. For a smooth and realistic-looking appearance, it blends in perfectly with your natural hair. This expertly crafted topper has a Fine Welded Mono base that is hand-tied, with 4 pressure-sensitive clips for all-day security. Customized colour and length service available.",
    shortDescription: "100% Indian human hair, 130% density, Fine Welded Mono base with 4 clips. 7\" X 8\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "mono-top", "ds-top", "hand-tied", "indian-hair"],
    price: 153,
    originalPrice: 178,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-02-hero.jpg",
    images: [
      "/images/toppers/ds-top-02-hero.jpg",
      "/images/toppers/ds-top-02-1.jpg",
      "/images/toppers/ds-top-02-2.jpg",
      "/images/toppers/ds-top-02-3.jpg",
      "/images/toppers/ds-top-02-4.jpg",
      "/images/toppers/ds-top-02-5.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "Popular",
    rating: 4.8,
    reviews: 64,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["14\" (35cm)", "16\" (40cm)"],
    slug: "ds-hair-top-02-womens-hair-replacement-system",
    category: "Hair Toppers",
    features: [
      "100% Indian human hair — premium Remy quality",
      "130% density — natural fullness without bulk",
      "Fine Welded Mono base — realistic scalp simulation",
      "Base size: 5\" X 3\" (13cm X 8cm) — lightweight coverage",
      "Available lengths: 14\", 16\"",
      "8 natural salon colours available",
      "Customized colour and length service available",
      "4 pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "5\" X 3\" (13cm X 8cm)",
    hairWeight: "80g",
    baseCoverage: "Crown + Hairline",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-02",
  },

  {
    id: "ds-top-03",
    handle: "ds-hair-top-03-womens-mono-toupee-npu-perimeter",
    name: "7.5\" X 8\" Women's Mono Toupee With NPU Perimeter Hair Topper",
    title: "7.5\" X 8\" Women's Mono Toupee With NPU Perimeter Hair Topper",
    description: "Women's Hair Toupee from Bono Hair, a high-end hairpiece specifically constructed for those women who are looking for a long-lasting and natural-looking hair replacement option. With a mono toupee with NPU perimeter, this system will offer outstanding breathability and a snug fit. 100% Indian human hair at 130% density, with a 7.5\" X 8\" base for full crown coverage. Customized colour and length service available.",
    shortDescription: "100% Indian human hair, 130% density, Mono Center with NPU Perimeter. 7.5\" X 8\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "mono-top", "npu-perimeter", "ds-top", "indian-hair"],
    price: 213,
    originalPrice: 238,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-03-hero.jpg",
    images: [
      "/images/toppers/ds-top-03-hero.jpg",
      "/images/toppers/ds-top-03-1.jpg",
      "/images/toppers/ds-top-03-2.jpg",
      "/images/toppers/ds-top-03-3.jpg",
      "/images/toppers/ds-top-03-4.jpg",
      "/images/toppers/ds-top-03-5.jpg",
      "/images/toppers/ds-top-03-6.jpg",
      "/images/toppers/ds-top-03-7.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "Professional",
    rating: 4.9,
    reviews: 42,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["16\" (40cm)"],
    slug: "ds-hair-top-03-womens-mono-toupee-npu-perimeter",
    category: "Hair Toppers",
    features: [
      "100% Indian human hair — premium Remy quality",
      "130% density — natural fullness without bulk",
      "Mono center with NPU perimeter — breathable & secure fit",
      "Base size: 7.5\" X 8\" (19cm X 20cm) — full crown coverage",
      "Available length: 16\"",
      "8 natural salon colours available",
      "Customized colour and length service available",
      "Pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "7.5\" X 8\" (19cm X 20cm)",
    hairWeight: "90g",
    baseCoverage: "Full Crown",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-03",
  },

  {
    id: "ds-top-04",
    handle: "ds-hair-top-04-silk-top-lace-topper",
    name: "6\" X 6\" Silk Top With Lace Topper — Premium Hairpiece for Women",
    title: "6\" X 6\" Silk Top With Lace Topper — Premium Hairpiece for Women",
    description: "For those women who are looking for a natural and full-bodied look will love this piece from D.S Hair's Silk Top with Lace Topper. This Remy Hair topper is incredibly soft, long-lasting, and seamlessly blends in perfectly with your natural hair. Features a silk top base for the most realistic scalp simulation, with a machine-made weft back for durability. 130% density, 100% Indian human hair. Customized colour and length service available.",
    shortDescription: "100% Indian human hair, 130% density, silk top with lace. 6\" X 6\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "silk-top", "lace-topper", "ds-top", "indian-hair"],
    price: 138,
    originalPrice: 158,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-04-hero.jpg",
    images: [
      "/images/toppers/ds-top-04-hero.jpg",
      "/images/toppers/ds-top-04-1.jpg",
      "/images/toppers/ds-top-04-2.jpg",
      "/images/toppers/ds-top-04-3.jpg",
      "/images/toppers/ds-top-04-4.jpg",
      "/images/toppers/ds-top-04-5.jpg",
      "/images/toppers/ds-top-04-6.jpg",
      "/images/toppers/ds-top-04-7.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "Silk Top",
    rating: 4.8,
    reviews: 55,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["12\" (30cm)", "16\" (40cm)", "18\" (45cm)"],
    slug: "ds-hair-top-04-silk-top-lace-topper",
    category: "Hair Toppers",
    features: [
      "100% Indian human hair — premium Remy quality",
      "130% density — natural fullness without bulk",
      "Silk top with lace base — most realistic scalp simulation",
      "Machine-made weft back for durability",
      "Base size: 6\" X 6\" (15cm X 15cm) — versatile coverage",
      "Available lengths: 12\", 16\", 18\"",
      "8 natural salon colours available",
      "Customized colour and length service available",
      "5 pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "6\" X 6\" (15cm X 15cm)",
    hairWeight: "90g",
    baseCoverage: "Crown + Parting",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-04",
  },

  {
    id: "ds-top-05",
    handle: "ds-hair-top-05-fine-welded-mono-topper",
    name: "5\" X 6.5\" Fine Welded Mono Topper — 130% Density Women Hair Topper",
    title: "5\" X 6.5\" Fine Welded Mono Topper — 130% Density Women Hair Topper",
    description: "Fine Welded Mono Topper is a high-end hairpiece that offers volume and coverage that looks natural. This topper has an elegant and breathable structure. It is made with a finely welded mono base, guaranteeing comfort and longevity. To improve the topper's fit and flexibility, a double layer of mono is hand-tied to the base on the sides and back. You can feel confident and at ease knowing that the topper has four pressure-sensitive clips that will remain firmly in place all day. 100% Indian human hair at 130% density.",
    shortDescription: "100% Indian human hair, 130% density, Fine Welded Mono base with dual-layer mono sides/back. 5\" X 6.5\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "mono-top", "ds-top", "hand-tied", "indian-hair"],
    price: 138,
    originalPrice: 158,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-05-hero.jpg",
    images: [
      "/images/toppers/ds-top-05-hero.jpg",
      "/images/toppers/ds-top-05-1.jpg",
      "/images/toppers/ds-top-05-2.jpg",
      "/images/toppers/ds-top-05-3.jpg",
      "/images/toppers/ds-top-05-4.jpg",
      "/images/toppers/ds-top-05-5.jpg",
      "/images/toppers/ds-top-05-6.jpg",
      "/images/toppers/ds-top-05-7.jpg",
      "/images/toppers/ds-top-05-8.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "Fine Mono",
    rating: 4.9,
    reviews: 71,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["14\" (35cm)", "16\" (40cm)", "18\" (45cm)"],
    slug: "ds-hair-top-05-fine-welded-mono-topper",
    category: "Hair Toppers",
    features: [
      "100% Indian human hair — premium Remy quality",
      "130% density — natural fullness without bulk",
      "Fine welded mono top base — realistic scalp simulation",
      "Dual-layer mono on sides and back — enhanced fit & flexibility",
      "Base size: 5\" X 6.5\" (13cm X 16.5cm)",
      "Available lengths: 14\", 16\", 18\"",
      "8 natural salon colours available",
      "Customized colour and length service available",
      "4 pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "5\" X 6.5\" (13cm X 16.5cm)",
    hairWeight: "90g",
    baseCoverage: "Crown + Parting",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-05",
  },

  {
    id: "ds-top-06",
    handle: "ds-hair-top-06-mono-top-hair-topper",
    name: "5\" X 6\" MONO TOP Hair Topper — Hand-Tied Indian Human Hair",
    title: "5\" X 6\" MONO TOP Hair Topper — Hand-Tied Indian Human Hair",
    description: "This 5\" X 6\" MONO TOP Human Hair Topper is 100% hand-tied with Indian human hair at 130% density — delivering natural movement, a realistic scalp simulation, and all-day comfort. Designed for crown and parting coverage, it blends seamlessly with your natural hair. Open-weft construction at back and sides ensures superior breathability. Customized colour and length service available.",
    shortDescription: "100% Indian human hair, 130% density, hand-tied mono top. 5\" X 6\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "mono-top", "ds-top", "hand-tied", "indian-hair"],
    price: 143,
    originalPrice: 168,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-06-hero.jpg",
    images: [
      "/images/toppers/ds-top-06-hero.jpg",
      "/images/toppers/ds-top-06-1.jpg",
      "/images/toppers/ds-top-06-2.jpg",
      "/images/toppers/ds-top-06-3.jpg",
      "/images/toppers/ds-top-06-4.jpg",
      "/images/toppers/ds-top-06-5.jpg",
      "/images/toppers/ds-top-06-6.jpg",
      "/images/toppers/ds-top-06-7.jpg",
      "/images/toppers/ds-top-06-8.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 4.7,
    reviews: 38,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["14\" (35cm)", "16\" (40cm)", "18\" (45cm)"],
    slug: "ds-hair-top-06-mono-top-hair-topper",
    category: "Hair Toppers",
    features: [
      "100% Indian human hair — premium Remy quality",
      "130% density — natural fullness without bulk",
      "Hand-tied mono top base — realistic scalp simulation",
      "Open-weft back and sides — superior breathability",
      "Base size: 5\" X 6\" (13cm X 15cm)",
      "Available lengths: 14\", 16\", 18\"",
      "8 natural salon colours available",
      "Customized colour and length service available",
      "Pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "5\" X 6\" (13cm X 15cm)",
    hairWeight: "90g",
    baseCoverage: "Crown + Parting",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-06",
  },

  {
    id: "ds-top-07",
    handle: "ds-hair-top-07-french-lace-hair-topper",
    name: "5\" X 6\" French Lace Hair Topper — Breathable Lightweight Indian Hair",
    title: "5\" X 6\" French Lace Hair Topper — Breathable Lightweight Indian Hair",
    description: "This French Lace Hair Topper offers an exceptional combination of breathability, comfort, and a natural appearance. Made from 100% Indian human hair at 130% density, it features a French lace base with PU perimeter and open-weft construction. The 1/4\" PU coating around the perimeter provides extra durability while the French lace ensures a lightweight, breathable feel. Pressure-sensitive clips ensure a secure fit all day long. Customized colour and length service available.",
    shortDescription: "100% Indian human hair, 130% density, French lace base with PU perimeter. 5\" X 6\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "french-lace", "ds-top", "indian-hair"],
    price: 143,
    originalPrice: 168,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-07-hero.jpg",
    images: [
      "/images/toppers/ds-top-07-hero.jpg",
      "/images/toppers/ds-top-07-1.jpg",
      "/images/toppers/ds-top-07-2.jpg",
      "/images/toppers/ds-top-07-3.jpg",
      "/images/toppers/ds-top-07-4.jpg",
      "/images/toppers/ds-top-07-5.jpg",
      "/images/toppers/ds-top-07-6.jpg",
      "/images/toppers/ds-top-07-7.jpg",
      "/images/toppers/ds-top-07-8.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "French Lace",
    rating: 4.8,
    reviews: 49,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["14\" (35cm)", "16\" (40cm)", "18\" (45cm)"],
    slug: "ds-hair-top-07-french-lace-hair-topper",
    category: "Hair Toppers",
    features: [
      "100% Indian human hair — premium Remy quality",
      "130% density — natural fullness without bulk",
      "French lace base — ultra-lightweight & breathable",
      "PU perimeter for extra durability and secure grip",
      "Base size: 5\" X 6\" (13cm X 15cm)",
      "Available lengths: 14\", 16\", 18\"",
      "8 natural salon colours available",
      "Customized colour and length service available",
      "Pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "5\" X 6\" (13cm X 15cm)",
    hairWeight: "90g",
    baseCoverage: "Crown + Parting",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-07",
  },

  {
    id: "ds-top-08",
    handle: "ds-hair-top-08-fine-mono-open-weft-topper",
    name: "5\" X 6\" Fine Mono + Open Weft Hair Topper — Ventilated Indian Hair",
    title: "5\" X 6\" Fine Mono + Open Weft Hair Topper — Ventilated Indian Hair",
    description: "For those women who desire to softly cover up their thinning hair areas and add extra volume to their entire hair scalp, the D.S HAIR Women Hair Topper is a perfect choice. This Fine Mono Hair Topper's base construction combines an open-weft back and sides for the best ventilation with a fine mono top for a realistic scalp appearance. 100% Indian human hair at 130% density, with 4 pressure-sensitive clips for all-day security.",
    shortDescription: "100% Indian human hair, 130% density, Fine Mono top with open-weft ventilation. 5\" X 6\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "mono-top", "open-weft", "ds-top", "indian-hair"],
    price: 138,
    originalPrice: 158,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-08-hero.jpg",
    images: [
      "/images/toppers/ds-top-08-hero.jpg",
      "/images/toppers/ds-top-08-1.jpg",
      "/images/toppers/ds-top-08-2.jpg",
      "/images/toppers/ds-top-08-3.jpg",
      "/images/toppers/ds-top-08-4.jpg",
      "/images/toppers/ds-top-08-5.jpg",
      "/images/toppers/ds-top-08-6.jpg",
      "/images/toppers/ds-top-08-7.jpg",
      "/images/toppers/ds-top-08-8.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "Ventilated",
    rating: 4.7,
    reviews: 36,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["14\" (35cm)", "16\" (40cm)", "18\" (45cm)"],
    slug: "ds-hair-top-08-fine-mono-open-weft-topper",
    category: "Hair Toppers",
    features: [
      "100% Indian human hair — premium Remy quality",
      "130% density — natural fullness without bulk",
      "Fine mono top — realistic scalp simulation",
      "Open-weft back and sides — maximum ventilation",
      "Base size: 5\" X 6\" (13cm X 15cm)",
      "Available lengths: 14\", 16\", 18\"",
      "8 natural salon colours available",
      "Customized colour and length service available",
      "4 pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "5\" X 6\" (13cm X 15cm)",
    hairWeight: "90g",
    baseCoverage: "Crown + Parting",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-08",
  },

  {
    id: "ds-top-09",
    handle: "ds-hair-top-09-french-lace-npu-hair-toupee",
    name: "6\" X 7\" Women's French Lace Toupee Hair System — NPU Perimeter",
    title: "6\" X 7\" Women's French Lace Toupee Hair System — NPU Perimeter",
    description: "With unparalleled comfort and style, D.S Hair's Women's French Lace Toupee is a high-end solution for thinning or hair loss. With premium materials and meticulous craftsmanship, this toupee hair system offers a natural look that melds in perfectly with your own hair. Features French lace at the crown with NPU hair system perimeter for superior breathability and a snug, secure fit. 100% Remy human hair at 130% density.",
    shortDescription: "100% Remy human hair, 130% density, French lace with NPU perimeter. 6\" X 7\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "french-lace", "npu", "ds-top", "remy-hair"],
    price: 148,
    originalPrice: 168,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-09-hero.jpg",
    images: [
      "/images/toppers/ds-top-09-hero.jpg",
      "/images/toppers/ds-top-09-1.jpg",
      "/images/toppers/ds-top-09-2.jpg",
      "/images/toppers/ds-top-09-3.jpg",
      "/images/toppers/ds-top-09-4.jpg",
      "/images/toppers/ds-top-09-5.jpg",
      "/images/toppers/ds-top-09-6.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "NPU System",
    rating: 4.8,
    reviews: 44,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["14\" (35cm)", "16\" (40cm)", "18\" (45cm)"],
    slug: "ds-hair-top-09-french-lace-npu-hair-toupee",
    category: "Hair Toppers",
    features: [
      "100% Remy human hair — premium quality",
      "130% density — natural fullness without bulk",
      "French lace crown — ultra-lightweight & breathable",
      "NPU perimeter — secure fit and durability",
      "Base size: 6\" X 7\" (15cm X 18cm)",
      "Available lengths: 14\", 16\", 18\"",
      "8 natural salon colours available",
      "Customized colour and length service available",
      "Pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "6\" X 7\" (15cm X 18cm)",
    hairWeight: "90g",
    baseCoverage: "Crown + Parting",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-09",
  },

  {
    id: "ds-top-10",
    handle: "ds-hair-top-10-mono-top-human-hair-topper",
    name: "5\" X 6\" MONO TOP Human Hair Topper — 120% Density Crown Coverage",
    title: "5\" X 6\" MONO TOP Human Hair Topper — 120% Density Crown Coverage",
    description: "This mono hair topper is ideal if you are looking to add thickness, length, and coverage to your hair. Perfect for women who are new to the wig world, looking to cover bald spots, and do not want to invest in a full wig. Features a Fine Mono base combined with PU coating, 1/8\" folded lace front and back, and 1/4\" PU coating all around for durability. 100% Indian human hair at 120% density with pressure-sensitive clips.",
    shortDescription: "100% Indian human hair, 120% density, Fine Mono base with PU coating. 5\" X 6\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "mono-top", "ds-top", "indian-hair"],
    price: 148,
    originalPrice: 168,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-10-hero.jpg",
    images: [
      "/images/toppers/ds-top-10-hero.jpg",
      "/images/toppers/ds-top-10-1.jpg",
      "/images/toppers/ds-top-10-2.jpg",
      "/images/toppers/ds-top-10-3.jpg",
      "/images/toppers/ds-top-10-4.jpg",
      "/images/toppers/ds-top-10-5.jpg",
      "/images/toppers/ds-top-10-6.jpg",
      "/images/toppers/ds-top-10-7.jpg",
      "/images/toppers/ds-top-10-8.jpg",
      "/images/toppers/ds-top-10-9.jpg",
      "/images/toppers/ds-top-10-10.jpg",
      "/images/toppers/ds-top-10-11.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "Popular",
    rating: 4.8,
    reviews: 62,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["14\" (35cm)", "16\" (40cm)", "18\" (45cm)"],
    slug: "ds-hair-top-10-mono-top-human-hair-topper",
    category: "Hair Toppers",
    features: [
      "100% Indian human hair — premium quality",
      "120% density — natural look without bulk",
      "Fine mono base — realistic scalp simulation",
      "PU coating and folded lace perimeter — durable and secure",
      "Base size: 5\" X 6\" (13cm X 15cm)",
      "Available lengths: 14\", 16\", 18\"",
      "8 natural salon colours available",
      "Customized colour and length service available",
      "Pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "5\" X 6\" (13cm X 15cm)",
    hairWeight: "90g",
    baseCoverage: "Crown + Parting",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-10",
  },

  {
    id: "ds-top-11",
    handle: "ds-hair-top-11-fine-mono-lace-topper",
    name: "5\" X 6\" Fine Mono + Lace Hair Topper — Professional Crown Coverage",
    title: "5\" X 6\" Fine Mono + Lace Hair Topper — Professional Crown Coverage",
    description: "This mono hair topper is ideal if you are looking to add thickness, length, and coverage to your hair. Perfect for women who are new to the wig world, looking to cover bald spots, and do not want to invest in a full wig. Features a Fine Mono base with 1/8\" folded lace front and back, and 1/4\" PU coating all around for a durable, secure hold. 100% Indian human hair at 120% density.",
    shortDescription: "100% Indian human hair, 120% density, Fine Mono + Lace base. 5\" X 6\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "mono-top", "lace-topper", "ds-top", "indian-hair"],
    price: 148,
    originalPrice: 168,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-11-hero.jpg",
    images: [
      "/images/toppers/ds-top-11-hero.jpg",
      "/images/toppers/ds-top-11-1.jpg",
      "/images/toppers/ds-top-11-2.jpg",
      "/images/toppers/ds-top-11-3.jpg",
      "/images/toppers/ds-top-11-4.jpg",
      "/images/toppers/ds-top-11-5.jpg",
      "/images/toppers/ds-top-11-6.jpg",
      "/images/toppers/ds-top-11-7.jpg",
      "/images/toppers/ds-top-11-8.jpg",
      "/images/toppers/ds-top-11-9.jpg",
      "/images/toppers/ds-top-11-10.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "Professional",
    rating: 4.7,
    reviews: 40,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["14\" (35cm)", "16\" (40cm)", "18\" (45cm)"],
    slug: "ds-hair-top-11-fine-mono-lace-topper",
    category: "Hair Toppers",
    features: [
      "100% Indian human hair — premium quality",
      "120% density — natural look without bulk",
      "Fine mono + lace base — realistic scalp simulation",
      "PU coating perimeter — durable and secure grip",
      "Base size: 5\" X 6\" (13cm X 15cm)",
      "Available lengths: 14\", 16\", 18\"",
      "8 natural salon colours available",
      "Customized colour and length service available",
      "Pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "5\" X 6\" (13cm X 15cm)",
    hairWeight: "90g",
    baseCoverage: "Crown + Parting",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-11",
  },

  {
    id: "ds-top-12",
    handle: "ds-hair-top-12-pu-base-small-hair-topper",
    name: "4.75\" X 2\" Small Durable PU Base Hair Topper — Chinese Virgin Hair",
    title: "4.75\" X 2\" Small Durable PU Base Hair Topper — Chinese Virgin Hair",
    description: "As top hair topper manufacturers, different kinds of hair toppers are available. For TOP-12, this human hair topper is made with a small and durable PU base with 100% high-quality Chinese Virgin hair. The cost of hair toppers depends on the base size of the women's hair topper. The size of 4.75\" X 2\" is a good choice for targeted coverage. Features 1/4\" ribbon back and sides for added durability. 120% density with pressure-sensitive clips.",
    shortDescription: "100% Chinese Virgin hair, 120% density, small durable PU base. 4.75\" X 2\" base.",
    vendor: "D.S HAIR",
    productType: "Hair Topper",
    type: "professional",
    tags: ["hair-topper", "pu-base", "small-topper", "ds-top", "virgin-hair"],
    price: 193,
    originalPrice: 218,
    currencyCode: "USD",
    image: "/images/toppers/ds-top-12-hero.jpg",
    images: [
      "/images/toppers/ds-top-12-hero.jpg",
      "/images/toppers/ds-top-12-1.jpg",
      "/images/toppers/ds-top-12-2.jpg",
      "/images/toppers/ds-top-12-3.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "Compact",
    rating: 4.6,
    reviews: 28,
    colors: [...HAIR_TOPPER_COLORS],
    lengths: ["14\" (35cm)"],
    slug: "ds-hair-top-12-pu-base-small-hair-topper",
    category: "Hair Toppers",
    features: [
      "100% Chinese Virgin hair — unprocessed, premium quality",
      "120% density — natural look without bulk",
      "Small PU base — lightweight and discreet coverage",
      "1/4\" ribbon back and sides — added durability",
      "Base size: 4.75\" X 2\" (12cm X 5cm) — targeted coverage",
      "Available length: 14\"",
      "8 natural salon colours available",
      "Customized colour service available",
      "Pressure-sensitive clips included",
      "ISO9001 certified quality",
      "Ships via FEDEX / DHL / UPS / EMS",
    ],
    baseSize: "4.75\" X 2\" (12cm X 5cm)",
    hairWeight: "90g",
    baseCoverage: "Parting + Crown (Small)",
    priceOnRequest: false,
    sku: "DS-HAIR-TOP-12",
  },

  {
    id: "tool-009",
    handle: "titanium-black-pro-tool-kit",
    name: "Titanium Black Pro Tool Kit (5-in-1)",
    title: "Titanium Black Pro Tool Kit (5-in-1)",
    description: "Premium 5-in-1 titanium black hair extension tool kit designed for professional stylists. Features a sleek matte black titanium-coated finish that resists rust and corrosion. Complete set includes: Micro Ring Closure Plier (for secure micro ring closure), Safety Removal Blade (with protective teeth to prevent scalp damage), Parting Needle (for precise hair sectioning), Mini Scale (EU-compliant for weight verification), and a premium velvet storage pouch. The ultimate professional toolkit for discerning UK and European salons. Compatible with all major extension methods including micro ring, keratin tip, and weft applications.",
    shortDescription: "Premium 5-in-1 titanium black tool kit for professional stylists",
    vendor: "D.S Hair Beauty",
    productType: "Hair Extension Tools",
    category: "Extension Tools",
    type: "professional",
    tags: ["titanium", "black", "pro tool kit", "removal tool", "salon tool", "premium", "extension tool", "kit"],
    price: 55,
    originalPrice: 78,
    currencyCode: "GBP",
    image: "/images/tools/titanium-black-kit.jpg",
    images: ["/images/tools/titanium-black-kit.jpg", "/images/tools/titanium-black-kit-open.jpg"],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Matte Black", hex: "#1a1a1a" }],
    lengths: ["One Size"],
    slug: "titanium-black-pro-tool-kit",
    features: [
      "Matte black titanium-coated finish",
      "5 essential tools in one kit",
      "Safety removal blade with protective teeth",
      "EU-compliant mini scale included",
      "Premium velvet storage pouch",
      "Suitable for all extension methods"
    ],
    sku: "DS-TOOL-009",
  },

  {
    id: "tool-001",
    handle: "professional-tape-in-application-pliers",
    name: "Professional Tape-In Application Pliers",
    title: "Professional Tape-In Application Pliers",
    description: "Professional-grade tape-in extension application pliers. Precision-engineered stainless steel jaws apply even pressure for secure tape placement. Ergonomic anti-slip handle reduces hand fatigue during full applications. Essential tool for every tape-in stylist. Compatible with all major tape-in extension brands.",
    shortDescription: "Professional tape-in application pliers with ergonomic design",
    vendor: "D.S Hair Beauty",
    productType: "Hair Extension Tools",
    category: "Extension Tools",
    type: "professional",
    tags: ["tape-in pliers", "application tool", "professional", "pliers"],
    price: 49,
    originalPrice: 65,
    currencyCode: "GBP",
    image: "/images/tools/tape-pliers.jpg",
    images: ["/images/tools/tape-pliers.jpg", "/images/tools/tape-pliers-use.jpg"],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Silver", hex: "#C0C0C0" }],
    lengths: ["One Size"],
    slug: "professional-tape-in-application-pliers",
    features: [
      "Precision-engineered stainless steel jaws",
      "Even pressure for secure tape placement",
      "Ergonomic anti-slip handle",
      "Reduces hand fatigue",
      "Compatible with all tape-in brands"
    ],
    sku: "DS-TOOL-001",
  },

  {
    id: "tool-003",
    handle: "professional-hair-extension-loop-brush",
    name: "Professional Hair Extension Loop Brush",
    title: "Professional Hair Extension Loop Brush",
    description: "Professional loop brush for micro ring and weft hair extension applications. Ultra-fine stainless steel loop effortlessly threads through micro beads for easy hair sectioning. Essential for efficient micro ring installation. Durable construction with comfortable grip handle. A must-have tool for every extension stylist.",
    shortDescription: "Ultra-fine loop brush for micro ring and weft extensions",
    vendor: "D.S Hair Beauty",
    productType: "Hair Extension Tools",
    category: "Extension Tools",
    type: "professional",
    tags: ["loop brush", "extension brush", "threading brush", "micro ring"],
    price: 15,
    originalPrice: 22,
    currencyCode: "GBP",
    image: "/images/tools/loop-brush.jpg",
    images: ["/images/tools/loop-brush.jpg"],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Silver", hex: "#C0C0C0" }],
    lengths: ["One Size"],
    slug: "professional-hair-extension-loop-brush",
    features: [
      "Ultra-fine stainless steel loop",
      "Threads through micro beads easily",
      "Comfortable grip handle",
      "Essential for micro ring installation",
      "Durable construction"
    ],
    sku: "DS-TOOL-003",
  },

  {
    id: "tool-005",
    handle: "professional-sectioning-clips-12pcs",
    name: "Professional Sectioning Clips (12pcs)",
    title: "Professional Sectioning Clips (12pcs)",
    description: "Set of 12 professional-grade sectioning clips for hair extension applications. Strong spring tension holds hair sections securely without creasing or damage. Corrosion-resistant stainless steel. Essential for organised, efficient extension appointments. Multiple colours for easy section identification. Great value starter pack.",
    shortDescription: "Set of 12 professional sectioning clips in stainless steel",
    vendor: "D.S Hair Beauty",
    productType: "Hair Extension Tools",
    category: "Extension Tools",
    type: "professional",
    tags: ["sectioning clips", "hair clips", "parting clips"],
    price: 12,
    originalPrice: 18,
    currencyCode: "GBP",
    image: "/images/tools/sectioning-clips.jpg",
    images: ["/images/tools/sectioning-clips.jpg"],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Assorted", hex: "#808080" }],
    lengths: ["One Size"],
    slug: "professional-sectioning-clips-12pcs",
    features: [
      "Set of 12 professional clips",
      "Strong spring tension",
      "No creasing or damage to hair",
      "Corrosion-resistant stainless steel",
      "Multiple colours included"
    ],
    sku: "DS-TOOL-005",
  },

  {
    id: "tool-009",
    handle: "hair-extensions-tool-kit",
    name: "Hair Extensions Tool Kit",
    title: "Hair Extensions Tool Kit",
    description: "Essential hair extension application tool kit, portable and lightweight. Ergonomic design with tools that fit perfectly in your hand for excellent control and comfort during use. Complete kit includes everything you need for professional hair extension applications.",
    shortDescription: "Complete tool kit for hair extension applications - portable & ergonomic",
    vendor: "D.S Hair Beauty",
    productType: "Hair Extension Tools",
    category: "Extension Tools",
    type: "professional",
    tags: ["tool kit", "extension tools", "professional", "starter kit"],
    price: 19.99,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/products/hair-extension-tool-kit.jpg",
    images: ["/images/products/hair-extension-tool-kit.jpg"],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Silver/Black", hex: "#808080" }],
    lengths: ["One Size"],
    slug: "hair-extensions-tool-kit",
    features: [
      "Highly portable and lightweight",
      "Ergonomic design for comfortable grip",
      "Excellent control during use",
      "Includes: 3x Curved Needles",
      "Includes: Threader",
      "Includes: Pliers",
      "Includes: 10x Clips",
      "Includes: Scissors",
      "Everything needed for professional extension applications"
    ],
    sku: "DS-TOOL-009",
  },

  {
    id: "tool-010",
    handle: "nano-ring-plier",
    name: "Stainless Steel Nano Ring Plier",
    title: "Stainless Steel Nano Ring Plier",
    description: "Professional-grade stainless steel nano ring plier for hair extension installation. Durable, rust-resistant, and precisely engineered for comfortable grip and easy operation. Essential tool for nano ring and micro bead hair extension applications.",
    shortDescription: "Professional stainless steel nano ring plier for hair extension applications",
    vendor: "D.S Hair Beauty",
    productType: "Hair Extension Tools",
    category: "Extension Tools",
    type: "professional",
    tags: ["plier", "nano ring", "micro bead", "extension tool"],
    price: 4.5,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/products/nano-ring-plier-01.jpg",
    images: [
      "/images/products/nano-ring-plier-01.jpg",
      "/images/products/nano-ring-plier-02.jpg",
      "/images/products/nano-ring-plier-03.jpg",
      "/images/products/nano-ring-plier-04.jpg",
      "/images/products/nano-ring-plier-05.jpg",
      "/images/products/nano-ring-plier-06.jpg",
      "/images/products/nano-ring-plier-07.jpg",
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Silver", hex: "#C0C0C0" }],
    lengths: ["One Size"],
    slug: "nano-ring-plier",
    features: [
      "Premium stainless steel construction",
      "Rust and corrosion resistant",
      "Professional-grade precision",
      "Comfortable ergonomic grip",
      "Perfect for nano ring and micro bead applications",
      "Durable and long-lasting"
    ],
    sku: "DS-TOOL-010",
  },

  {
    id: "tool-011",
    handle: "hair-extension-clips",
    name: "Hair Extension Clips x10",
    title: "Hair Extension Clips x10 - Silicone Non-Slip",
    description: "Professional hair extension clips x10 pack with silicone non-slip design. Perfect for creating DIY clip-in hair extensions or hair accessories. These clips are gentle on hair and help prevent sliding. Suitable for both professional salon use and home applications.",
    shortDescription: "Pack of 10 professional hair extension clips with silicone anti-slip design",
    vendor: "D.S Hair Beauty",
    productType: "Hair Extension Tools",
    category: "Extension Tools",
    type: "professional",
    tags: ["clips", "extension tools", "clip-in", "DIY"],
    price: 4.99,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/products/hair-extension-clips-01.jpg",
    images: ["/images/products/hair-extension-clips-01.jpg"],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Brown", hex: "#8B4513" },
      { name: "Beige", hex: "#F5F5DC" }
    ],
    lengths: ["One Size"],
    slug: "hair-extension-clips",
    features: [
      "Pack of 10 clips",
      "Silicone non-slip design prevents sliding",
      "Ideal for DIY clip-in hair extensions",
      "Gentle on hair, no damage",
      "Suitable for various hair thicknesses",
      "Reusable and durable"
    ],
    sku: "DS-TOOL-011",
  },

  {
    id: "tool-012",
    handle: "nano-tip-plier",
    name: "Nano Tip Plier Tool",
    title: "Nano Tip Plier Tool - Professional Hair Extension Installation & Removal",
    description: "Professional nano tip plier tool designed for installing and removing nano ring/nano tip hair extensions. Features precision tips for easy application and comfortable grip handle. Essential tool for professional nano ring extension applications.",
    shortDescription: "Professional nano tip plier for nano ring/tip hair extension installation and removal",
    vendor: "D.S Hair Beauty",
    productType: "Hair Extension Tools",
    category: "Extension Tools",
    type: "professional",
    tags: ["plier", "nano tip", "nano ring", "extension tool", "professional"],
    price: 15.99,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/products/nano-tip-plier-01.jpg",
    images: [
      "/images/products/nano-tip-plier-01.jpg",
      "/images/products/nano-tip-plier-02.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{ name: "Silver", hex: "#C0C0C0" }],
    lengths: ["One Size"],
    slug: "nano-tip-plier",
    features: [
      "5.5 inch professional length",
      "Precision tips for accurate application",
      "Comfortable grip handle",
      "Suitable for nano ring and nano tip extensions",
      "Perfect for installation and removal",
      "Durable stainless steel construction"
    ],
    sku: "DS-TOOL-012",
  },

  {
    id: "tool-013",
    handle: "nano-rings-500",
    name: "Nano Rings x500",
    title: "Nano Rings x500 - Silicone Lined for Extra Grip",
    description: "Professional nano rings x500 pack with silicone lining for extra grip. These nano rings are designed for nano tip hair extension applications. The silicone interior provides superior hold and prevents slipping. Each pack contains 500 nano rings in various colors to match different hair shades.",
    shortDescription: "Pack of 500 professional nano rings with silicone lining for superior hold",
    vendor: "D.S Hair Beauty",
    productType: "Hair Extension Tools",
    category: "Extension Tools",
    type: "professional",
    tags: ["nano rings", "nano tip", "extension tools", "beads"],
    price: 19.99,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "/images/products/nano-rings-brown.jpg",
    images: [
      "/images/products/nano-rings-black.jpg",
      "/images/products/nano-rings-darkbrown.jpg",
      "/images/products/nano-rings-brown.jpg",
      "/images/products/nano-rings-darkblonde.jpg",
      "/images/products/nano-rings-blonde.jpg"
    ],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Dark Brown", hex: "#3B2F2F" },
      { name: "Brown", hex: "#8B4513" },
      { name: "Dark Blonde", hex: "#C19A6B" },
      { name: "Blonde", hex: "#F5DEB3" }
    ],
    lengths: ["One Size"],
    slug: "nano-rings-500",
    features: [
      "Pack of 500 nano rings",
      "Silicone lining for extra grip",
      "Prevents slipping during wear",
      "Available in 5 colors",
      "Perfect for nano tip extensions",
      "Professional grade quality"
    ],
    sku: "DS-TOOL-013",
  },

]

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
    description: "Shop the UK's most trusted wholesale hair extension collection. 100% Remy human hair — K-Tip, Tape-In, Weft, Clip-In & Nano. Professional trade pricing. 19 years supplying UK salons.",
    image: "/images/collection-all.jpg",
  },

  {
    id: "2",
    name: "DIY Extensions",
    slug: "diy",
    description: "Professional-quality hair extensions for DIY application at home. 100% Remy human hair clip-ins and tape-ins with step-by-step guides. Instant transformation — no salon appointment needed.",
    image: "/images/collection-diy.jpg",
  },

  {
    id: "3",
    name: "Professional Extensions",
    slug: "professional",
    description: "Salon-grade hair extensions for professional stylists. Keratin bonds, nano rings, tape-in & weft — all 100% Remy human hair. Trade accounts available. Same-day UK shipping.",
    image: "/images/collection-professional.jpg",
  },

  {
    id: "4",
    name: "Clip-In Extensions",
    slug: "clip-in",
    description: "Premium clip-in hair extensions in 100% Remy human hair. Invisible seamless clips for zero damage. 40+ colours, 16\"–26\" lengths. UK stock with free colour matching service.",
    image: "/images/collection-clipin.jpg",
  },

  {
    id: "5",
    name: "Tape-In Extensions",
    slug: "tape-in",
    description: "Seamless tape-in hair extensions for a natural look. Ultra-thin invisible PU base, pre-taped for fast application. 100% Remy human hair. Perfect for fine hair. UK salon wholesale available.",
    image: "/images/collection-tapein.jpg",
  },

  {
    id: "6",
    name: "Ponytails",
    slug: "ponytails",
    description: "Instant transformation with our premium human hair ponytail extensions. Wrap-around and clip-in styles. 100% Remy human hair in 40+ colours. Same-day UK dispatch.",
    image: "/images/collection-ponytail.jpg",
  },

  {
    id: "8",
    name: "Weft Extensions",
    slug: "weft",
    description: "Hand-tied weft and machine weft extensions in 100% Remy human hair. Butterfly weft, Genius weft & super weft available. Professional wholesale pricing for UK salons.",
    image: "/images/collection-weft.jpg",
  },

  {
    id: "9",
    name: "K-Tip Extensions",
    slug: "k-tip-extensions",
    description: "Professional K-Tip hair extensions (keratin bond). 100% Remy human hair in 50+ shades including balayage and rooted. 0.5g–1g bond options for fine to thick hair. UK salon wholesale supplier.",
    image: "/images/collection-ktip.jpg",
  },
  {
    id: "10",
    name: "Nano Extensions",
    slug: "nano-extensions",
    description: "Nano ring hair extensions — the UK's most requested method for fine hair. Ultra-tiny 0.5g bonds, 100% Remy human hair. Less damage, more natural. Professional trade pricing available.",
    image: "/images/collection-ktip.jpg",
  },

  {
    id: "13",
    name: "Fringes & Bangs",
    slug: "fringes-bangs",
    description: "Transform your look instantly with our premium fringe and bang extensions. 100% Remy human hair in blunt cut, choppy and wispy styles. 20+ colours. UK stockist.",
    image: "/images/collection-fringes.jpg",
  },

  {
    id: "7",
    name: "Hair Care",
    slug: "hair-care",
    description: "Professional hair extension aftercare products. Sulfate-free shampoos, extension-safe brushes, leave-in conditioners and bond maintenance. Designed for tape-in, K-Tip and weft extensions.",
    image: "/images/collection-haircare.jpg",
  },

  {
    id: "7a",
    name: "Extension Care",
    slug: "extension-care",
    description: "Sulfate-free shampoos, deep conditioners, hair masks, detangling brushes and tape remover — everything your clients need to keep their extensions looking salon-fresh. Pair with our hair extensions for the complete service.",
    image: "/images/collection-haircare.jpg",
  },

  {
    id: "15",
    name: "Extension Tools",
    slug: "extension-tools",
    description: "Professional installation tools for salons: tape-in pliers, K-Tip/nano ring kits, loop brushes, sectioning clips, keratin glue sticks and complete starter kits. Trusted by UK stylists.",
    image: "/images/collection-tools.jpg",
  },

  {
    id: "16",
    name: "Heated Styling",
    slug: "heated-styling",
    description: "Professional heated brushes, ionic paddle brushes and cordless styling tools for salons. Extension-safe temperatures, fast heat-up and salon-grade results. Perfect for restyling hair extensions.",
    image: "/images/collection-heated.jpg",
  },

  {
    id: "17",
    name: "Storage",
    slug: "storage",
    description: "Premium velvet and satin extension storage bags and cases. Keep hair extensions and tools organised, protected and in perfect condition between appointments.",
    image: "/images/collection-storage.jpg",
  },

  {
    id: "11",
    name: "Butterfly Weft Extensions",
    slug: "butterfly-weft",
    description: "Revolutionary butterfly weft extensions — the UK's salon favourite for natural volume. Ultra-thin 0.5mm base, trimmable design. 100% Remy human hair. Professional trade pricing available.",
    image: "/images/collection-butterfly.jpg",
  },

  {
    id: "12",
    name: "Butterfly Extensions",
    slug: "butterfly-extensions",
    description: "Premium butterfly weft hair extensions — ultra-thin 0.5mm base for a seamless, natural finish. 100% Remy human hair in 50+ shades. UK's leading wholesale supplier for professional salons.",
    image: "/images/collection-butterfly.jpg",
  },

  {
    id: "14",
    name: "Hair Toppers",
    slug: "hair-toppers",
    description: "D.S HAIR premium hair toppers for thinning hair and crown coverage. 12 models available including MONO Top, Fine Welded Mono, French Lace, Silk Top, and PU Base options. 100% Indian/Remy human hair, 120-130% density, 8 natural salon colours. Available lengths 12\"–18\". Customized colour and length service available. Wholesale pricing for UK & EU salons.",
    image: "/images/toppers/collection-hero.jpg",
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
  // Special case for k-tip-extensions -> match "k-tip" tag
  if (collectionSlug === "k-tip-extensions") {
    return products.filter(p =>
      p.category.toLowerCase().includes("k-tip") ||
      p.productType.toLowerCase().includes("k-tip") ||
      p.tags.some(tag => tag.toLowerCase().includes("k-tip"))
    )
  }
  // Special case for nano-extensions -> match "nano" tag
  if (collectionSlug === "nano-extensions") {
    return products.filter(p =>
      p.productType.toLowerCase().includes("nano") ||
      p.tags.some(tag => tag.toLowerCase().includes("nano"))
    )
  }
  // Special case for weft -> only weft, exclude butterfly
  if (collectionSlug === "weft" || collectionSlug === "weft-extensions") {
    return products.filter(p =>
      (p.productType.toLowerCase().includes("weft") ||
       p.tags.some(tag => tag.toLowerCase().includes("weft"))) &&
      !p.productType.toLowerCase().includes("butterfly") &&
      !p.tags.some(tag => tag.toLowerCase().includes("butterfly"))
    )
  }
  // Special case for butterfly-weft -> match "butterfly" tag
  if (collectionSlug === "butterfly-weft" || collectionSlug === "butterfly-extensions") {
    return products.filter(p => 
      p.category.toLowerCase().includes("butterfly") ||
      p.productType.toLowerCase().includes("butterfly") ||
      p.tags.some(tag => tag.toLowerCase().includes("butterfly"))
    )
  }
  // Special case for hair-toppers -> match "Hair Toppers" category
  if (collectionSlug === "hair-toppers") {
    return products.filter(p => 
      p.category === "Hair Toppers" ||
      p.productType.toLowerCase().includes("hair topper") ||
      p.tags.some(tag => tag.toLowerCase().includes("hair-topper"))
    )
  }
  // Extension Care: care products (shampoo, conditioner, mask, brush, tape remover)
  if (collectionSlug === "extension-care") {
    return products.filter(p =>
      p.productType.toLowerCase().includes("care") ||
      p.productType.toLowerCase().includes("shampoo") ||
      p.productType.toLowerCase().includes("conditioner") ||
      p.productType.toLowerCase().includes("brush") ||
      p.productType.toLowerCase().includes("mask") ||
      p.productType.toLowerCase().includes("remover") ||
      p.tags.some(tag =>
        tag.toLowerCase().includes("care") ||
        tag.toLowerCase().includes("shampoo") ||
        tag.toLowerCase().includes("conditioner") ||
        tag.toLowerCase().includes("brush") ||
        tag.toLowerCase().includes("mask")
      )
    )
  }
  // Extension Tools: installation tools (pliers, scissors, sectioning clips, kits)
  if (collectionSlug === "extension-tools") {
    return products.filter(p => {
      const type = p.productType.toLowerCase()
      const category = p.category.toLowerCase()
      // Match only actual tools: extension tool, plier, scissors, sectioning clip, kit
      // Exclude: clip-in (wig), hair-extensions with clip
      const isTool = 
        type === "hair extension tools" ||
        type === "extension tools" ||
        type.includes("extension tool") ||
        type.includes("plier") ||
        type.includes("scissor") ||
        type.includes("sectioning clip") ||
        (type.includes("kit") && !type.includes("clip-in")) ||
        category.includes("extension tools")
      // Also check tags for "tool" but exclude clip-in products
      const hasToolTag = p.tags.some(tag => {
        const t = tag.toLowerCase()
        return (
          t === "tool" ||
          t.includes("extension tool") ||
          t.includes("plier") ||
          t.includes("scissor") ||
          (t.includes("kit") && !t.includes("clip-in")) ||
          t.includes("sectioning clip")
        )
      })
      return isTool || hasToolTag
    })
  }
  // Heated Styling: heated brushes, styling tools
  if (collectionSlug === "heated-styling") {
    return products.filter(p =>
      p.productType.toLowerCase().includes("heated") ||
      p.productType.toLowerCase().includes("brush") ||
      p.productType.toLowerCase().includes("styling") ||
      p.productType.toLowerCase().includes("paddle") ||
      p.tags.some(tag =>
        tag.toLowerCase().includes("heated") ||
        tag.toLowerCase().includes("brush") ||
        tag.toLowerCase().includes("styling")
      )
    )
  }
  // Storage: extension bags, cases, pouches
  if (collectionSlug === "storage") {
    return products.filter(p =>
      p.productType.toLowerCase().includes("storage") ||
      p.productType.toLowerCase().includes("pouch") ||
      p.productType.toLowerCase().includes("bag") ||
      p.productType.toLowerCase().includes("case") ||
      p.tags.some(tag =>
        tag.toLowerCase().includes("storage") ||
        tag.toLowerCase().includes("pouch") ||
        tag.toLowerCase().includes("bag") ||
        tag.toLowerCase().includes("case")
      )
    )
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
