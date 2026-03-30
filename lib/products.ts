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
  priceOnRequest?: boolean
}

// Placeholder image helper
const getPlaceholderImage = (name: string, slug: string) => 
  `https://placehold.co/600x800/e8d5c4/8b7355?text=${encodeURIComponent(name)}`

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
    id: "8",
    name: "Weft Extensions",
    slug: "weft",
    description: "Premium weft extensions for maximum volume",
    image: "/images/collection-weft.jpg",
  },

  {
    id: "9",
    name: "K-Tip Extensions",
    slug: "k-tip-extensions",
    description: "Premium keratin-tipped hair extensions",
    image: "/images/collection-ktip.jpg",
  },
  {
    id: "10",
    name: "Nano Extensions",
    slug: "nano-extensions",
    description: "Nano ring hair extensions for fine hair",
    image: "/images/collection-ktip.jpg",
  },

  {
    id: "13",
    name: "Fringes & Bangs",
    slug: "fringes-bangs",
    description: "Transform your look with our premium fringe pieces",
    image: "/images/collection-fringes.jpg",
  },

  {
    id: "7",
    name: "Hair Care",
    slug: "hair-care",
    description: "Premium hair care products to maintain your extensions",
    image: "/images/collection-haircare.jpg",
  },

  {
    id: "11",
    name: "Butterfly Weft Extensions",
    slug: "butterfly-weft",
    description: "Revolutionary butterfly weft extensions for natural volume and coverage",
    image: "/images/collection-butterfly.jpg",
  },

  {
    id: "12",
    name: "Butterfly Extensions",
    slug: "butterfly-extensions",
    description: "Premium butterfly weft hair extensions",
    image: "/images/collection-butterfly.jpg",
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
