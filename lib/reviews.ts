// ─────────────────────────────────────────────────────────────────────────────
// Trustpilot / reviews integration config.
//
// IMPORTANT — do NOT fabricate ratings.
// The site currently has no first-party reviews, so `aggregateRating` is
// left `null` and the Product JSON-LD does NOT emit a rating block. This is
// intentional: shipping a fake 4.9★ / 100-reviews block would be review
// spam and can get the site penalised by Google.
//
// To activate real reviews + clear the GSC "missing aggregateRating" notice:
//   1. Create a Trustpilot business profile for dshairbeauty.co.uk.
//   2. Paste your `businessUnitId` (from the Trustpilot dashboard) below.
//   3. Paste the REAL aggregate numbers from your Trustpilot dashboard into
//      `aggregateRating` (ratingValue + reviewCount must be genuine).
//   4. Set `enabled: true`.
// Once enabled, the Product JSON-LD automatically includes the real
// AggregateRating and the on-site Trustpilot widget renders.
// ─────────────────────────────────────────────────────────────────────────────

export interface AggregateRatingValue {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}

export interface IndividualReview {
  author: string
  rating: number
  body: string
  datePublished: string
}

export const REVIEWS_CONFIG = {
  // Your Trustpilot business unit id, e.g. "5f9c1d2e8b9a3e0011a2b3c4".
  // Empty until you paste your real Trustpilot ID.
  trustpilotBusinessUnitId: "" as string,

  // Public Trustpilot review URL (used by the widget + as the review link).
  trustpilotReviewUrl: "https://uk.trustpilot.com/review/dshairbeauty.co.uk",

  // Activate only after businessUnitId + real aggregateRating are filled in.
  enabled: false,

  // REAL aggregate rating from Trustpilot — null until connected.
  // Example: { ratingValue: 4.8, reviewCount: 127 }
  aggregateRating: null as AggregateRatingValue | null,

  // Optional: a few REAL individual reviews to enrich the Product snippet.
  // Leave empty until you have genuine customer reviews to show.
  reviews: [] as IndividualReview[],

  // Trustpilot TrustBox template id (customise in your Trustpilot dashboard).
  // "56278e9abfbbba0bdcd568bc" = Trustpilot Mini. Replace if you prefer another.
  trustBoxTemplateId: "56278e9abfbbba0bdcd568bc",
}

// Returns a schema.org AggregateRating object only when real data is present.
// Returns undefined otherwise so we never emit a fabricated rating.
export function getProductAggregateRating():
  | { "@type": "AggregateRating"; ratingValue: number; reviewCount: number; bestRating: number; worstRating: number }
  | undefined {
  const a = REVIEWS_CONFIG.aggregateRating
  if (!REVIEWS_CONFIG.enabled || !a) return undefined
  return {
    "@type": "AggregateRating",
    ratingValue: a.ratingValue,
    reviewCount: a.reviewCount,
    bestRating: a.bestRating ?? 5,
    worstRating: a.worstRating ?? 1,
  }
}

// Real individual reviews (schema.org Review[]) — only when enabled.
export function getProductReviews():
  | { "@type": "Review"; author: { "@type": "Person"; name: string }; reviewRating: { "@type": "Rating"; ratingValue: number; bestRating: number }; reviewBody: string; datePublished: string }[]
  | undefined {
  if (!REVIEWS_CONFIG.enabled || REVIEWS_CONFIG.reviews.length === 0) return undefined
  return REVIEWS_CONFIG.reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.body,
    datePublished: r.datePublished,
  }))
}
