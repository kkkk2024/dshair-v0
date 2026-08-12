// Internal linking map for blog posts.
// Each entry lists 2–3 related blog slugs (for topical authority / link equity)
// plus an optional collection CTA (blog -> collection).
// All slugs here must correspond to real routes (app/blog/<slug> and /collections/<slug>).

export interface BlogLinkMap {
  related: string[] // other blog slugs
  collection?: { href: string; label: string }
}

export const BLOG_INTERNAL_LINKS: Record<string, BlogLinkMap> = {
  // ── Method guides (interlinked cluster) ──────────────────────────────
  "clip-in-extensions-guide": {
    related: ["tape-in-extensions-guide", "ponytail-extensions-guide", "hair-extension-methods-comparison"],
    collection: { href: "/collections/clip-in", label: "Shop Clip-In Extensions" },
  },
  "tape-in-extensions-guide": {
    related: ["clip-in-extensions-guide", "nano-ring-extensions-guide", "hair-extension-methods-comparison"],
    collection: { href: "/collections/tape-in", label: "Shop Tape-In Extensions" },
  },
  "nano-ring-extensions-guide": {
    related: ["k-tip-extensions-guide", "tape-in-extensions-guide", "hair-extension-methods-comparison"],
    collection: { href: "/collections/nano-extensions", label: "Shop Nano Ring Extensions" },
  },
  "k-tip-extensions-guide": {
    related: ["nano-ring-extensions-guide", "tape-in-extensions-guide", "hair-extension-methods-comparison"],
    collection: { href: "/collections/k-tip-extensions", label: "Shop K-Tip Extensions" },
  },
  "weft-extensions-guide": {
    related: ["hand-tied-weft-guide", "butterfly-extensions-guide", "hair-extension-methods-comparison"],
    collection: { href: "/collections/weft", label: "Shop Weft Extensions" },
  },
  "hand-tied-weft-guide": {
    related: ["weft-extensions-guide", "butterfly-extensions-guide", "hair-extension-methods-comparison"],
    collection: { href: "/collections/weft", label: "Shop Weft Extensions" },
  },
  "butterfly-extensions-guide": {
    related: ["weft-extensions-guide", "hand-tied-weft-guide", "hair-extension-methods-comparison"],
    collection: { href: "/collections/butterfly-weft", label: "Shop Butterfly Weft Extensions" },
  },
  "ponytail-extensions-guide": {
    related: ["clip-in-extensions-guide", "fringes-bangs-extensions-guide", "hair-extension-types-guide"],
    collection: { href: "/collections/ponytails", label: "Shop Ponytail Extensions" },
  },
  "fringes-bangs-extensions-guide": {
    related: ["ponytail-extensions-guide", "clip-in-extensions-guide", "hair-extension-types-guide"],
    collection: { href: "/collections/fringes-bangs", label: "Shop Fringe & Bang Extensions" },
  },
  "hair-topper-guide": {
    related: ["hair-extension-types-guide", "best-extensions-fine-hair-uk", "hair-extension-aftercare-guide"],
    collection: { href: "/collections/hair-toppers", label: "Shop Hair Toppers" },
  },
  "hair-extension-types-guide": {
    related: ["hair-extension-methods-comparison", "clip-in-extensions-guide", "hair-topper-guide"],
    collection: { href: "/collections/all", label: "Browse All Extensions" },
  },

  // ── Buyer / supplier / education cluster ─────────────────────────────
  "hair-extension-methods-comparison": {
    related: ["hair-extension-types-guide", "how-to-choose-hair-extension-supplier", "trade-vs-diy-extensions"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },
  "how-to-choose-hair-extension-supplier": {
    related: ["hair-extensions-trade-account", "wholesale-hair-extensions-uk", "salon-hair-extension-stockist-uk"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },
  "wholesale-hair-extensions-uk": {
    related: ["private-label-hair-extensions-uk", "hair-extensions-trade-account", "how-to-choose-hair-extension-supplier"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },
  "grow-profitable-hair-salon-uk": {
    related: ["private-label-hair-extensions-uk", "hair-extension-profit-margin-guide", "salon-extension-pricing-guide"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },
  "private-label-hair-extensions-uk": {
    related: ["grow-profitable-hair-salon-uk", "salon-retail-attachment-guide", "hair-extension-profit-margin-guide"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },
  "hair-extension-profit-margin-guide": {
    related: ["grow-profitable-hair-salon-uk", "private-label-hair-extensions-uk", "salon-extension-pricing-guide"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },
  "trade-vs-diy-extensions": {
    related: ["hair-extension-methods-comparison", "how-to-choose-hair-extension-supplier", "hair-extensions-trade-account"],
    collection: { href: "/collections/diy", label: "Shop DIY Extensions" },
  },
  "hair-extensions-trade-account": {
    related: ["how-to-choose-hair-extension-supplier", "wholesale-hair-extensions-uk", "salon-hair-extension-stockist-uk"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },
  "salon-hair-extension-stockist-uk": {
    related: ["how-to-choose-hair-extension-supplier", "wholesale-hair-extensions-uk", "manchester-hair-extension-supplier"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },
  "manchester-hair-extension-supplier": {
    related: ["salon-hair-extension-stockist-uk", "how-to-choose-hair-extension-supplier", "wholesale-hair-extensions-uk"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },
  "how-to-start-selling-hair-extensions-salon": {
    related: ["grow-profitable-hair-salon-uk", "private-label-hair-extensions-uk", "salon-client-retention-rebooking-guide"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },

  // ── Salon Business cluster (pillar support) ───────────
  "salon-extension-pricing-guide": {
    related: ["grow-profitable-hair-salon-uk", "hair-extension-profit-margin-guide", "salon-retail-attachment-guide"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },
  "salon-retail-attachment-guide": {
    related: ["grow-profitable-hair-salon-uk", "salon-extension-pricing-guide", "hair-extension-profit-margin-guide"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },
  "salon-client-retention-rebooking-guide": {
    related: ["grow-profitable-hair-salon-uk", "salon-extension-pricing-guide", "how-to-start-selling-hair-extensions-salon"],
    collection: { href: "/collections/professional", label: "Shop Professional Extensions" },
  },

  // ── Colour / care / fine-hair cluster ────────────────────────────────
  "balayage-extensions-salon-guide": {
    related: ["hair-extension-types-guide", "clip-in-extensions-guide", "manchester-colour-collection-2026"],
    collection: { href: "/collections/all", label: "Browse All Extensions" },
  },
  "manchester-colour-collection-2026": {
    related: ["balayage-extensions-salon-guide", "hair-extension-types-guide", "fringes-bangs-extensions-guide"],
    collection: { href: "/collections/all", label: "Browse All Extensions" },
  },
  "best-extensions-fine-hair-uk": {
    related: ["hair-topper-guide", "nano-ring-extensions-guide", "hair-extension-types-guide"],
    collection: { href: "/collections/all", label: "Browse All Extensions" },
  },
  "remy-vs-nonremy-hair-guide": {
    related: ["hair-extension-types-guide", "hair-extension-aftercare-guide", "hair-extension-methods-comparison"],
    collection: { href: "/collections/all", label: "Browse All Extensions" },
  },
  "hair-extension-aftercare-guide": {
    related: ["hair-extension-types-guide", "remy-vs-nonremy-hair-guide", "hair-topper-guide"],
    collection: { href: "/collections/extension-care", label: "Shop Extension Care" },
  },
}
