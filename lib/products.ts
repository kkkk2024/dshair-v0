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
  {
    id: "1",
    handle: "silk-seam-clip-in",
    name: "Silk Seam Clip-In Set",
    title: "Silk Seam Clip-In Set",
    description: "Our most seamless clip-in technology. Premium 100% Remy human hair for a natural, undetectable look. Perfect for adding length and volume without damaging your natural hair.",
    shortDescription: "Seamless clip-in technology for a natural look",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["bestseller", "clip-in", "silk-seam"],
    price: 189,
    originalPrice: 219,
    currencyCode: "GBP",
    image: getPlaceholderImage("Silk Seam", "silk-seam"),
    images: [getPlaceholderImage("Silk Seam", "silk-seam")],
    variants: [],
    inStock: true,
    badge: "Best Seller",
    rating: 4.9,
    reviews: 2847,
    colors: [
      { name: "Natural Black", hex: "#1a1a1a" },
      { name: "Dark Brown", hex: "#3d2314" },
      { name: "Medium Brown", hex: "#6b4423" },
      { name: "Chestnut", hex: "#8b5a2b" },
      { name: "Blonde", hex: "#f5deb3" },
      { name: "Platinum Blonde", hex: "#e5e4e2" },
    ],
    lengths: ["14 inches", "16 inches", "18 inches", "20 inches"],
    slug: "silk-seam-clip-in",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Seamless clip technology", "Reusable and durable", "Natural look and feel", "6-8 weeks lifespan"],
  },
  {
    id: "2",
    handle: "classic-clip-in",
    name: "Classic Clip-In Set",
    title: "Classic Clip-In Set",
    description: "Easy to apply, natural look. Perfect for beginners. Our classic clip-in set provides volume and length with minimal effort.",
    shortDescription: "Easy to apply, natural look",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    type: "diy",
    tags: ["clip-in", "classic"],
    price: 149,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: getPlaceholderImage("Classic Clip", "classic"),
    images: [getPlaceholderImage("Classic Clip", "classic")],
    variants: [],
    inStock: true,
    badge: undefined,
    rating: 4.8,
    reviews: 1923,
    colors: [
      { name: "Natural Black", hex: "#1a1a1a" },
      { name: "Dark Brown", hex: "#3d2314" },
      { name: "Medium Brown", hex: "#6b4423" },
      { name: "Chestnut", hex: "#8b5a2b" },
      { name: "Auburn", hex: "#8b4513" },
      { name: "Blonde", hex: "#f5deb3" },
    ],
    lengths: ["12 inches", "14 inches", "16 inches", "18 inches"],
    slug: "classic-clip-in",
    category: "DIY Extensions",
    features: ["100% Remy Human Hair", "Easy clip-in application", "Beginner-friendly", "4 wefts included", "Natural blend"],
  },
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
    image: getPlaceholderImage("Signature Tape-In", "signature-tape"),
    images: [getPlaceholderImage("Signature Tape-In", "signature-tape")],
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
  return products.filter(p => p.category.toLowerCase().includes(collectionSlug.toLowerCase()))
}

// Social links
export const socialLinks = {
  instagram: "https://instagram.com/d.shairbeauty",
  facebook: "https://facebook.com/d.shairbeauty",
  youtube: "https://youtube.com/@dshairbeauty",
  tiktok: "https://tiktok.com/@d.shairbeauty",
  pinterest: "https://pinterest.com/dshairbeauty",
  linkedin: "https://linkedin.com/company/dshairbeauty",
  twitter: "https://twitter.com/dshairbeauty",
}

// Contact info
export const contactInfo = {
  email: "caro@dshairbeauty.co.uk",
  whatsapp: "https://wa.me/447456789012",
  whatsappNumber: "+44 7456 789012",
  company: "D.S HAIR & BEAUTY",
  address: "Manchester, UK",
}
