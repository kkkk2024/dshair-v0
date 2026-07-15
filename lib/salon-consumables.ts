// Salon Consumables – Extension Tools & Accessories
// D.S Hair & Beauty – UK salon consumable product catalogue

export interface SalonConsumable {
  id: string
  name: string
  slug: string
  category: "bundle" | "single" | "sample"
  price: number
  originalPrice?: number
  currency: string
  description: string
  shortDescription: string
  features: string[]
  whatIncluded?: string[]
  image: string
  images: string[]
  stripeLink: string
  productType: string
  type: "professional"
  tags: string[]
  badge?: string
  inStock: boolean
  monthlyUsage?: string
  profitMargin?: string
  weight: string
  targetCustomer: string
  usageInstructions?: string
}

// Placeholder – replace with your actual Stripe Payment Links
const STRIPE = {
  NANO_NON_SILICONE: "https://buy.stripe.com/YOUR_LINK_NANO_NON_SILICONE",
  NANO_SILICONE: "https://buy.stripe.com/YOUR_LINK_NANO_SILICONE",
  TAPE_TABS: "https://buy.stripe.com/YOUR_LINK_TAPE_TABS",
  SECTIONING_CLIPS: "https://buy.stripe.com/YOUR_LINK_SECTIONING_CLIPS",
  KERATIN_GLUE: "https://buy.stripe.com/YOUR_LINK_KERATIN_GLUE",
  HEAT_PAD: "https://buy.stripe.com/YOUR_LINK_HEAT_PAD",
  THREADING_TOOL: "https://buy.stripe.com/YOUR_LINK_THREADING_TOOL",
  TINT_BRUSH: "https://buy.stripe.com/YOUR_LINK_TINT_BRUSH",
  STARTER_KIT: "https://buy.stripe.com/YOUR_LINK_STARTER_KIT",
  MONTHLY_RESTOCK: "https://buy.stripe.com/YOUR_LINK_MONTHLY_RESTOCK",
  NANO_NEWBIE: "https://buy.stripe.com/YOUR_LINK_NANO_NEWBIE",
  DUAL_METHOD: "https://buy.stripe.com/YOUR_LINK_DUAL_METHOD",
  PRO_UPGRADE: "https://buy.stripe.com/YOUR_LINK_PRO_UPGRADE",
  FREE_SAMPLE: "https://buy.stripe.com/YOUR_LINK_FREE_SAMPLE",
}

const IMG = (name: string) => `/images/salon-supplies/${name}.png`

export const salonConsumables: SalonConsumable[] = [
  // ── BUNDLES (5) ──────────────────────────────────────────────
  {
    id: "sc-ext-starter-kit",
    name: "Extension Starter Kit",
    slug: "extension-starter-kit",
    category: "bundle",
    price: 25,
    currency: "GBP",
    description:
      "Everything a new extension technician needs to get started with nano ring installations. This all-in-one kit includes our best-selling nano rings, essential tools help you deliver professional results from day one.",
    shortDescription: "All-in-one nano ring starter kit for new techs",
    features: [
      "Everything in one box – no need to order separately",
      "Saved vs buying items individually",
      "Professional-grade tools and supplies",
      "Perfect for new technicians and trainees",
      "Next-day dispatch from UK stock",
    ],
    whatIncluded: [
      "Nano Rings (Non-Silicone) 1000pc × 2",
      "Threading Loop Tool × 1",
      "Sectioning Clips 6pc × 1 pack",
      "Tint Brush × 1",
    ],
    image: IMG("starter-kit"),
    images: [IMG("starter-kit")],
    stripeLink: STRIPE.STARTER_KIT,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["extension-kit", "nano", "starter", "tools", "beginner"],
    badge: "Best Seller",
    inStock: true,
    monthlyUsage: "Full kit / as needed",
    profitMargin: "790%",
    weight: "50g",
    targetCustomer: "New nano ring extension technicians, trainees, salon assistants",
  },
  {
    id: "sc-monthly-restock",
    name: "Monthly Restock Pack",
    slug: "monthly-restock-pack",
    category: "bundle",
    price: 18,
    originalPrice: 22,
    currency: "GBP",
    description:
      "Designed for busy technicians who do 4-6 installs per month. One box covers your monthly consumable needs — nano rings, tape tabs, and heat protection pads. Subscribe and never run out mid-appointment.",
    shortDescription: "Monthly consumables bundle — never run out",
    features: [
      "Covers 4-6 typical installs per month",
      "Subscribe & save — auto-delivery each month",
      "Small enough to fit through your letterbox",
      "Same products, lower price than buying separately",
      "Free UK delivery",
    ],
    whatIncluded: [
      "Nano Rings (Non-Silicone) 1000pc × 1",
      "Heat Protection Pads 10pc × 2",
      "Tape Tabs 48pc × 1",
    ],
    image: IMG("monthly-restock"),
    images: [IMG("monthly-restock")],
    stripeLink: STRIPE.MONTHLY_RESTOCK,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["monthly", "subscription", "nano", "tape", "restock"],
    badge: "Subscribe & Save",
    inStock: true,
    monthlyUsage: "4-6 installs",
    profitMargin: "1100%",
    weight: "30g",
    targetCustomer: "Active extension technicians doing 4-6 installs/month",
  },
  {
    id: "sc-nano-newbie",
    name: "Nano Newbie Bundle",
    slug: "nano-newbie-bundle",
    category: "bundle",
    price: 15,
    currency: "GBP",
    description:
      "Just getting started with nano ring extensions? This essential starter pack has everything you need for your first few installations — nano rings to build confidence fast.",
    shortDescription: "Essential nano ring starter pack for beginners",
    features: [
      "Low-commitment starter bundle",
      "Perfect for practising before going all-in",
      "Everything needed for first 2-3 installs",
      "Professional quality at entry-level price",
    ],
    whatIncluded: [
      "Nano Rings (Non-Silicone) 1000pc × 1",
      "Sectioning Clips 6pc × 1 pack",
      "Threading Loop Tool × 1",
      "Tint Brush × 1",
    ],
    image: IMG("starter-kit"),
    images: [IMG("starter-kit")],
    stripeLink: STRIPE.NANO_NEWBIE,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["nano", "beginner", "starter", "tools"],
    badge: "Entry Level",
    inStock: true,
    monthlyUsage: "2-3 installs",
    profitMargin: "730%",
    weight: "40g",
    targetCustomer: "Beginners testing nano ring extensions, trainees",
  },
  {
    id: "sc-dual-method",
    name: "Dual Method Bundle",
    slug: "dual-method-bundle",
    category: "bundle",
    price: 18,
    currency: "GBP",
    description:
      "Master both nano ring and tape-in methods with one bundle. Includes consumables for both techniques so you can offer clients more options without buying separate supplies.",
    shortDescription: "Consumables for both nano ring & tape-in methods",
    features: [
      "One bundle, two techniques covered",
      "Expand your service menu instantly",
      "Offer clients both nano and tape options",
      "Perfect for multi-method technicians",
    ],
    whatIncluded: [
      "Nano Rings (Non-Silicone) 1000pc × 1",
      "Tape Tabs 48pc × 1",
    ],
    image: IMG("monthly-restock"),
    images: [IMG("monthly-restock")],
    stripeLink: STRIPE.DUAL_METHOD,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["nano", "tape", "dual", "combo", "tools"],
    badge: "Popular",
    inStock: true,
    monthlyUsage: "3-5 installs",
    profitMargin: "1100%",
    weight: "25g",
    targetCustomer: "Technicians offering both nano ring and tape-in services",
  },
  {
    id: "sc-pro-upgrade",
    name: "Pro Upgrade Bundle",
    slug: "pro-upgrade-bundle",
    category: "bundle",
    price: 28,
    originalPrice: 34,
    currency: "GBP",
    description:
      "Ready to level up? This premium bundle upgrades you to silicone-lined nano rings for extra grip, plus tape tabs and heat protection — everything a pro technician needs for flawless installations every time.",
    shortDescription: "Premium consumables for established professionals",
    features: [
      "Silicone-lined nano rings for superior grip",
      "Premium tape tabs for seamless tape-ins",
      "Heat protection pads for safe styling",
      "Ideal for high-volume technicians",
    ],
    whatIncluded: [
      "Nano Rings (Silicone-Lined) 1000pc × 1",
      "Tape Tabs 48pc × 1",
      "Heat Protection Pads 10pc × 2",
    ],
    image: IMG("starter-kit"),
    images: [IMG("starter-kit")],
    stripeLink: STRIPE.PRO_UPGRADE,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["pro", "silicone", "premium", "tape", "nano"],
    badge: "Pro Grade",
    inStock: true,
    monthlyUsage: "6-8 installs",
    profitMargin: "637%",
    weight: "35g",
    targetCustomer: "Established extension technicians, salon owners",
  },

  // ── SINGLES (8) ───────────────────────────────────────────────
  {
    id: "sc-nano-non-silicone",
    name: "Nano Rings (Non-Silicone) – 1000pc",
    slug: "nano-rings-non-silicone",
    category: "single",
    price: 14.5,
    currency: "GBP",
    description:
      "Industry-standard 2.5mm copper nano rings for nano tip hair extensions. No silicone insert — flat clamping for a discreet, secure hold. 1000 pieces per pack. Available in black, brown, dark brown, and blonde. Each installation uses 100-200 rings.",
    shortDescription: "2.5mm copper nano rings, 1000pc — no silicone",
    features: [
      "Premium copper construction – lightweight and durable",
      "2.5mm outside diameter – ultra-discreet",
      "7 colour options available",
      "Flat clamping for secure hold",
      "1000 pieces per pack",
      "Each client install uses 100-200 rings",
    ],
    image: IMG("nano-rings-non-silicone"),
    images: [IMG("nano-rings-non-silicone")],
    stripeLink: STRIPE.NANO_NON_SILICONE,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["nano", "rings", "copper", "non-silicone", "consumable"],
    badge: "Core Product",
    inStock: true,
    monthlyUsage: "1-2 packs per active technician",
    profitMargin: "~700%",
    weight: "20g",
    targetCustomer: "Nano ring extension technicians",
    usageInstructions: "Thread nano tip hair through ring using loop tool. Clamp flat with pliers for secure hold. Remove with ring opener.",
  },
  {
    id: "sc-nano-silicone",
    name: "Nano Rings (Silicone-Lined) – 1000pc",
    slug: "nano-rings-silicone",
    category: "single",
    price: 22,
    currency: "GBP",
    description:
      "Premium 2.5mm nano rings with silicone lining for extra grip and client comfort. The silicone insert reduces slippage and protects fine or fragile hair. Ideal for clients with slippery or very fine hair types. 1000 pieces per pack.",
    shortDescription: "2.5mm silicone-lined nano rings, 1000pc",
    features: [
      "Silicone lining for superior grip",
      "Gentle on fine and fragile hair",
      "Reduces slippage during wear",
      "2.5mm diameter – ultra-invisible",
      "1000 pieces per pack",
      "Colours: black, brown, light brown, blonde",
    ],
    image: IMG("nano-rings-silicone"),
    images: [IMG("nano-rings-silicone")],
    stripeLink: STRIPE.NANO_SILICONE,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["nano", "silicone", "rings", "premium", "fine-hair", "consumable"],
    badge: "Premium",
    inStock: true,
    monthlyUsage: "1 pack per technician",
    profitMargin: "~450%",
    weight: "20g",
    targetCustomer: "Technicians working with fine/slippery hair clients",
    usageInstructions: "Same application as standard nano rings. Silicone lining provides extra grip on fine hair.",
  },
  {
    id: "sc-tape-tabs",
    name: "Tape-In Adhesive Tabs – 48pc",
    slug: "tape-in-adhesive-tabs",
    category: "single",
    price: 7.5,
    currency: "GBP",
    description:
      "Double-sided adhesive tape tabs for tape-in hair extensions. Strong medical-grade adhesive holds securely for 6-8 weeks. 48 pieces per box — enough for one full head installation. Compatible with all major tape-in hair extension brands. Beauty Works sell theirs for £19.",
    shortDescription: "48 double-sided adhesive tabs for tape-ins",
    features: [
      "Medical-grade double-sided adhesive",
      "48 pieces — one full head application",
      "Holds 6-8 weeks with proper aftercare",
      "Compatible with all tape-in extension brands",
      "Strong hold, easy removal with remover",
      "Compare: Beauty Works £19 — you save 60%",
    ],
    image: IMG("tape-tabs"),
    images: [IMG("tape-tabs")],
    stripeLink: STRIPE.TAPE_TABS,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["tape", "adhesive", "tape-in", "consumable"],
    badge: "Best Value",
    inStock: true,
    monthlyUsage: "1-2 boxes per tape-in technician",
    profitMargin: "~800%",
    weight: "15g",
    targetCustomer: "Tape-in extension technicians, salon owners",
    usageInstructions: "Peel one side, attach to extension weft. Peel second side, press onto sectioned hair. Apply firm pressure for 10 seconds.",
  },
  {
    id: "sc-sectioning-clips",
    name: "Sectioning Clips – 6pc Pack",
    slug: "sectioning-clips",
    category: "single",
    price: 4.5,
    currency: "GBP",
    description:
      "Professional crocodile sectioning clips for clean hair parting during extension installation. Strong spring, non-slip grip, 6 pieces per pack. Essential for nano ring, tape-in, and weft application. These are the clips professionals reach for every day.",
    shortDescription: "6 professional crocodile sectioning clips",
    features: [
      "Strong spring-loaded grip",
      "Non-slip teeth for secure sectioning",
      "Perfect for all extension methods",
      "Professional grade — salon quality",
      "6 pieces per pack",
      "Lightweight and comfortable in hand",
    ],
    image: IMG("sectioning-clips"),
    images: [IMG("sectioning-clips")],
    stripeLink: STRIPE.SECTIONING_CLIPS,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["clips", "sectioning", "tools", "essential"],
    inStock: true,
    monthlyUsage: "1-2 packs per active technician",
    profitMargin: "~900%",
    weight: "30g",
    targetCustomer: "All extension technicians",
    usageInstructions: "Use to section clean horizontal parts before installing extensions. Start at nape and work upward.",
  },
  {
    id: "sc-keratin-glue",
    name: "Keratin Glue Sticks – 20pc",
    slug: "keratin-glue-sticks",
    category: "single",
    price: 9,
    currency: "GBP",
    description:
      "Transparent keratin glue sticks for K-tip and fusion hair extension application. 20 sticks per pack. Melt evenly in fusion connector tools for strong, long-lasting bonds. Compatible with all K-tip and I-tip fusion systems.",
    shortDescription: "20 transparent keratin sticks for K-tip fusion",
    features: [
      "Transparent — blends with any hair colour",
      "20 sticks per pack",
      "Even melt, no bubbles",
      "Strong bond lasts 3-4 months",
      "Compatible with all fusion connector tools",
      "Professional salon grade",
    ],
    image: IMG("keratin-glue-sticks"),
    images: [IMG("keratin-glue-sticks")],
    stripeLink: STRIPE.KERATIN_GLUE,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["keratin", "fusion", "k-tip", "glue", "consumable"],
    inStock: true,
    monthlyUsage: "1-2 packs per fusion technician",
    profitMargin: "~600%",
    weight: "30g",
    targetCustomer: "K-tip / fusion extension technicians",
    usageInstructions: "Insert stick into fusion connector tool. Heat to 180-200°C. Apply melted keratin to K-tip strand and press onto natural hair.",
  },
  {
    id: "sc-heat-pad",
    name: "Heat Protection Pad – 10pc",
    slug: "heat-protection-pad",
    category: "single",
    price: 2.5,
    currency: "GBP",
    description:
      "Silicone heat protection pads for safe styling during and after extension installation. Place between hair and heat tool to protect bonds and natural hair. 10 pads per pack. Essential for fusion application and post-install styling.",
    shortDescription: "10 silicone heat protection styling pads",
    features: [
      "High-temperature silicone — safe up to 230°C",
      "Protects bonds during fusion application",
      "Use during post-install heat styling",
      "Reusable — clean with alcohol wipe",
      "10 pads per pack",
      "Fits comfortably in hand",
    ],
    image: IMG("heat-protection-pad"),
    images: [IMG("heat-protection-pad")],
    stripeLink: STRIPE.HEAT_PAD,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["heat", "protection", "styling", "fusion", "accessory"],
    inStock: true,
    monthlyUsage: "1 pack lasts 2-3 months",
    profitMargin: "~1400%",
    weight: "5g",
    targetCustomer: "Fusion/K-tip technicians, all extension stylists",
    usageInstructions: "Place between hair sections and heat tool. Use during fusion application and post-install styling.",
  },
  {
    id: "sc-threading-tool",
    name: "Loop Threading Tool",
    slug: "loop-threading-tool",
    category: "single",
    price: 3.5,
    currency: "GBP",
    description:
      "Professional loop threading tool for nano ring and I-tip extension installation. Thin wire loop pulls hair through nano rings cleanly and quickly. Ergonomic handle for comfortable all-day use. Every nano ring technician needs one.",
    shortDescription: "Professional loop tool for nano/I-tip installation",
    features: [
      "Thin flexible wire loop — easy threading",
      "Ergonomic non-slip handle",
      "Works with nano rings and I-tips",
      "Comfortable for all-day use",
      "Durable stainless steel construction",
    ],
    image: IMG("threading-tool"),
    images: [IMG("threading-tool")],
    stripeLink: STRIPE.THREADING_TOOL,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["tool", "loop", "threading", "nano", "i-tip"],
    inStock: true,
    monthlyUsage: "1 tool lasts 6-12 months",
    profitMargin: "~1300%",
    weight: "10g",
    targetCustomer: "Nano ring and I-tip extension technicians",
    usageInstructions: "Thread loop through nano ring, hook the extension tip hair, pull back through ring. Thread the client's natural hair through the ring using the same loop.",
  },
  {
    id: "sc-tint-brush",
    name: "Tint Brush",
    slug: "tint-brush",
    category: "single",
    price: 1.5,
    currency: "GBP",
    description:
      "Professional tint brush with firm bristles for precise colour application and extension maintenance. Also used for applying bond remover during extension removal. Lightweight plastic handle. A salon essential your kit shouldn't be without.",
    shortDescription: "Professional tint brush — essential salon tool",
    features: [
      "Firm bristles for precise application",
      "Multi-use: colour, remover, maintenance",
      "Lightweight and easy to clean",
      "Disposable or reusable option",
      "Standard salon size",
    ],
    image: IMG("tint-brush"),
    images: [IMG("tint-brush")],
    stripeLink: STRIPE.TINT_BRUSH,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["tint", "brush", "colour", "tool", "essential"],
    inStock: true,
    monthlyUsage: "5-10 brushes per active technician",
    profitMargin: "~300%",
    weight: "8g",
    targetCustomer: "All salon professionals",
    usageInstructions: "Use for colour application, bond remover application, or extension maintenance. Rinse after each use.",
  },

  // ── SAMPLE PACK (1) ──────────────────────────────────────────
  {
    id: "sc-free-sample",
    name: "Free Sample Pack",
    slug: "free-sample-pack",
    category: "sample",
    price: 0,
    currency: "GBP",
    description:
      "Try before you buy. Get a free sample pack delivered to your salon — includes nano rings, sectioning clips, and a threading tool so you can test our quality firsthand. Just cover £2.95 postage. We're that confident you'll love it.",
    shortDescription: "Free sample pack — just pay £2.95 postage",
    features: [
      "Completely free — just cover £2.95 postage",
      "Test our quality with zero risk",
      "Sample what you'd actually use",
      "One per salon / technician",
      "Includes discount code for first order",
    ],
    whatIncluded: [
      "Nano Rings (Non-Silicone) 200pc",
      "Sectioning Clips × 2",
      "Threading Loop Tool × 1",
      "Tint Brush × 1",
      "Welcome card with 10% off first order",
    ],
    image: IMG("free-sample-pack"),
    images: [IMG("free-sample-pack")],
    stripeLink: STRIPE.FREE_SAMPLE,
    productType: "Hair Extension Tools",
    type: "professional",
    tags: ["sample", "free", "try", "nano", "trial"],
    badge: "Free",
    inStock: true,
    monthlyUsage: "One-time sample",
    profitMargin: "N/A (acquisition)",
    weight: "20g",
    targetCustomer: "New potential customers — test our quality risk-free",
    usageInstructions: "Receive your sample pack within 2-3 working days. Try the products. Love them? Use your 10% discount code on your first order!",
  },
]

// Helper functions
export function getSalonConsumableBySlug(slug: string): SalonConsumable | undefined {
  return salonConsumables.find((p) => p.slug === slug)
}

export function getBundles(): SalonConsumable[] {
  return salonConsumables.filter((p) => p.category === "bundle")
}

export function getSingles(): SalonConsumable[] {
  return salonConsumables.filter((p) => p.category === "single")
}

export function getSamplePack(): SalonConsumable | undefined {
  return salonConsumables.find((p) => p.category === "sample")
}

export const BUNDLES = salonConsumables.filter((p) => p.category === "bundle")
export const SINGLES = salonConsumables.filter((p) => p.category === "single")
