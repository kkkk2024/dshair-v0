import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { ProductDetail } from "@/components/products/product-detail"
import { RelatedProducts } from "@/components/products/related-products"
import { getRelatedProducts, type Product } from "@/lib/products"
import { TAG_FAQS } from "@/lib/product-faqs"
import { ProductFaqAccordion } from "@/components/products/product-faq-accordion"
import { ProductJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld"
import { getProductAggregateRating, getProductReviews } from "@/lib/reviews"
import { TrustpilotReviews } from "@/components/reviews/trustpilot-reviews"
import { BookOpen, ArrowRight } from "lucide-react"

// ── Tag → Salon Guide Banner mapping ──
const TAG_BANNERS: Record<string, { guideUrl: string; headline: string; subtext: string }> = {
  ponytail: {
    guideUrl: "/blog/ponytail-extensions-guide",
    headline: "Ponytail extensions — your salon's secret revenue weapon",
    subtext: "Read our guide: 5 ways to style, colour-match & upsell ponytail extensions",
  },
  "clip-in": {
    guideUrl: "/blog/clip-in-extensions-guide",
    headline: "New to clip-in extensions?",
    subtext: "Read our complete guide: how to fit, blend, colour-match & care for clip-in sets",
  },
  weft: {
    guideUrl: "/blog/weft-extensions-guide",
    headline: "Weft extensions — the professional's choice",
    subtext: "Complete guide: hand-tied vs machine, application & salon pricing",
  },
  bangs: {
    guideUrl: "/blog/fringes-bangs-extensions-guide",
    headline: "Fringe extensions — the most underrated salon product",
    subtext: "Complete guide: face-framing colour, volume techniques & client recommendations",
  },
  fringe: {
    guideUrl: "/blog/fringes-bangs-extensions-guide",
    headline: "Fringe extensions — the most underrated salon product",
    subtext: "Complete guide: face-framing colour, volume techniques & client recommendations",
  },
  "tape-in": {
    guideUrl: "/blog/tape-in-extensions-guide",
    headline: "Tape-in extensions — the UK's most popular method",
    subtext: "Complete guide: invisible application, aftercare & how to maximise salon revenue",
  },
  "k-tip": {
    guideUrl: "/blog/k-tip-extensions-guide",
    headline: "K-tip extensions — the premium long-term solution",
    subtext: "Complete guide: keratin bonds, maintenance & how to charge premium prices",
  },
  nano: {
    guideUrl: "/blog/nano-ring-extensions-guide",
    headline: "Nano ring extensions — ultra-invisible for fine hair",
    subtext: "Complete guide: 3mm bonds, no-heat application & fine hair specialist tips",
  },
  butterfly: {
    guideUrl: "/blog/butterfly-extensions-guide",
    headline: "Butterfly weft — the industry game-changer",
    subtext: "Complete guide: 0.5mm ultra-thin base, seamless finish & salon pricing guide",
  },
  "hair-topper": {
    guideUrl: "/blog/hair-topper-guide",
    headline: "Not sure which topper is right for your client?",
    subtext: "Complete guide: silk vs mono vs mesh base, application steps & salon tips",
  },
}

export function ProductPageView({ product }: { product: Product }) {
  const relatedProducts = getRelatedProducts(product.id)

  // Find the first matching banner from product tags
  const matchedTag = product.tags.find((tag) => TAG_BANNERS[tag])
  const banner = matchedTag ? TAG_BANNERS[matchedTag] : null

  const matchedFaqs = matchedTag ? (TAG_FAQS[matchedTag] || []) : []

  // Real reviews (Trustpilot) — undefined until connected in lib/reviews.ts.
  const aggregateRating = getProductAggregateRating()
  const productReviews = getProductReviews()

  return (
    <CartProvider>
      <ProductJsonLd product={product} aggregateRating={aggregateRating} reviews={productReviews} />
      {matchedFaqs.length > 0 && (
        <FaqJsonLd faqs={matchedFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      )}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.dshairbeauty.co.uk' },
          { name: product.category || 'Products', url: 'https://www.dshairbeauty.co.uk/collections/all' },
          { name: product.name, url: `https://www.dshairbeauty.co.uk/products/${product.slug}` },
        ]}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* ── Salon Guide Banner (shown when product has a matching guide tag) ── */}
          {banner && (
            <div className="bg-[#FDF8F0] border-y border-amber-200">
              <div className="container px-4 md:px-6 py-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#4A1942] flex items-center justify-center shrink-0">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#4A1942] text-sm">{banner.headline}</p>
                      <p className="text-xs text-[#6B3A6E]">{banner.subtext}</p>
                    </div>
                  </div>
                  <Link
                    href={banner.guideUrl}
                    className="inline-flex items-center gap-2 bg-[#4A1942] hover:bg-[#3a1434] text-white text-sm font-medium px-4 py-2 rounded-lg shrink-0 transition-colors"
                  >
                    Read the Guide <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ── Collapsible FAQ Section (shown when product has matching FAQs) ── */}
          {matchedFaqs.length > 0 && (
            <ProductFaqAccordion faqs={matchedFaqs} />
          )}

          <ProductDetail product={product} />
          <TrustpilotReviews />
          {relatedProducts.length > 0 && (
            <RelatedProducts products={relatedProducts} />
          )}
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
