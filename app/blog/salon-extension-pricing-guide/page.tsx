import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Calculator, Tag, CheckCircle } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"

export const metadata = {
  title: "How to Price Hair Extension Services in Your Salon | D.S Hair Beauty",
  description:
    "A practical UK pricing framework for salon extension services: cost-plus and value-based models, method-by-method price bands, upsell ladders, and the mistakes that quietly erode margin.",
  openGraph: {
    title: "How to Price Hair Extension Services in Your Salon | D.S Hair Beauty",
    description: "Cost-plus vs value-based pricing, method-by-method price bands, and an upsell ladder that lifts every extension ticket — a UK guide from 19 years in the trade.",
    url: "https://www.dshairbeauty.co.uk/blog/salon-extension-pricing-guide",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pricing hair extension services in a salon",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-13",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/salon-extension-pricing-guide",
  },
}

export default function SalonExtensionPricingGuide() {
  return (
    <CartProvider>
      <BlogJsonLd slug="salon-extension-pricing-guide" />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* ── JSON-LD ───────────────────────────── */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": "How to Price Hair Extension Services in Your Salon",
                "description": "A practical UK pricing framework for salon extension services: cost-plus and value-based models, method-by-method price bands, upsell ladders, and the mistakes that quietly erode margin.",
                "url": "https://www.dshairbeauty.co.uk/blog/salon-extension-pricing-guide",
                "datePublished": "2026-08-13",
                "author": { "@type": "Organization", "name": "D.S Hair Beauty" },
                "publisher": { "@type": "Organization", "name": "D.S Hair Beauty" },
              })
            }}
          />

          {/* ── Hero ─────────────────────────────────── */}
          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)"
              }} />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                Salon Business
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                How to Price Hair Extension Services in Your Salon
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Pricing extensions is not &quot;hair cost plus a bit.&quot; Done well, it recovers your time, funds your retail line, and builds a premium perception. Here is the framework we use with salons across the UK.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/salon-partners">Open a Trade Account</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/blog/grow-profitable-hair-salon-uk">Grow a Profitable Salon →</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ── Quick Nav ─────────────────────────────── */}
          <div className="bg-[#FDF8F0] border-b border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-[#4A1942]">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-[#4A1942]">Blog</Link>
                <span>/</span>
                <span className="text-[#4A1942] font-medium">Extension Pricing</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">

              {/* ── Intro (E-E-A-T) ─────────────────────── */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over <strong>19 years</strong> supplying UK salons, the single biggest pricing mistake we see is treating extensions like a box of colour: a flat &quot;plus £X&quot; on the service menu. Extensions are different. The hair is a <em>product</em> with its own cost and lifecycle, the application is <em>time</em>, and the take-home re-order is a <em>recurring revenue stream</em>. Price all three deliberately and your salon profit changes shape.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                This guide gives you two pricing models, a method-by-method price band reference, and an upsell ladder you can hand to your front desk tomorrow.
              </p>

              {/* ── 1. Two models ───────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">1. Two Pricing Models (and When to Use Each)</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80" alt="Salon pricing strategy session" fill className="object-cover" />
              </div>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { label: "Cost-plus (recommended)", icon: <Calculator className="h-5 w-5" />, items: ["Hair cost × a transparent multiplier (typically 2.5–4×)", "Plus a timed application fee", "Clients see clear value; you protect margin"] },
                  { label: "Value-based (premium)", icon: <Tag className="h-5 w-5" />, items: ["Price on transformation, not cost", "Best for K-tip, hand-tied weft, bridal", "Requires strong consultation & aftercare"] },
                ].map(({ label, icon, items }) => (
                  <div key={label} className="rounded-xl p-5 bg-[#FDF8F0] border border-amber-100">
                    <div className="flex items-center gap-2 text-[#4A1942] mb-3 font-semibold">{icon} {label}</div>
                    <ul className="space-y-1 text-sm text-[#3D2314]">
                      {items.map(item => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Most profitable salons blend both: cost-plus for everyday tape-in and nano, value-based for the premium, long-wear methods where the client is buying an experience. See our <Link href="/blog/hair-extension-profit-margin-guide" className="text-[#4A1942] underline font-medium">salon profit-margin guide</Link> for the margin maths behind each.
              </p>

              {/* ── 2. Costs to recover ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">2. The Three Costs You Must Recover</h2>
              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-4 text-left font-medium">Cost</th>
                      <th className="p-4 text-left font-medium">What it covers</th>
                      <th className="p-4 text-left font-medium">Pricing move</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {[
                      { b: "Hair (product)", p: "The actual extension hair + packaging", l: "Recover at 2.5–4× via retail-style markup" },
                      { b: "Time (service)", p: "Stylist hours for fit / move-up / removal", l: "Charge an hourly application rate, not a flat fee" },
                      { b: "Consumables & overhead", p: "Tape, tools, colour-match, rent, software", l: "Bake a small % into every ticket" },
                    ].map((row) => (
                      <tr key={row.b} className="hover:bg-amber-50/50">
                        <td className="p-4 font-semibold text-[#4A1942]">{row.b}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.p}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.l}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── 3. Method price bands ──────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">3. Method-by-Method Price Bands (UK Guide)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                These are typical <em>client-facing</em> bands for a full head including hair. Use them as a sanity check against your own cost base — your local rents and wage costs will shift them.
              </p>
              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-4 text-left font-medium">Method</th>
                      <th className="p-4 text-left font-medium">Full-head install (incl. hair)</th>
                      <th className="p-4 text-left font-medium">Move-up / fill</th>
                      <th className="p-4 text-left font-medium">Re-order take-home</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {[
                      { b: "Tape-in", p: "£200–£400", l: "£80–£150 (6–8 wk)", r: "£120–£220" },
                      { b: "Nano ring", p: "£250–£450", l: "£90–£160 (6–8 wk)", r: "£140–£240" },
                      { b: "K-tip (keratin)", p: "£350–£650", l: "£120–£220 (8–12 wk)", r: "£180–£320" },
                      { b: "Hand-tied / butterfly weft", p: "£350–£600", l: "£100–£180 (8–12 wk)", r: "£160–£300" },
                      { b: "Clip-in (retail)", p: "£90–£220 (sold, not fitted)", l: "—", r: "£90–£220" },
                    ].map((row) => (
                      <tr key={row.b} className="hover:bg-amber-50/50">
                        <td className="p-4 font-semibold text-[#4A1942]">{row.b}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.p}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.l}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Notice the recurring right-hand column. A client on a 6–8 week cycle re-orders or returns for a move-up roughly six times a year — that is the extension revenue engine. Our <Link href="/blog/hair-extension-methods-comparison" className="text-[#4A1942] underline font-medium">method comparison guide</Link> helps you recommend the right one per client.
              </p>

              {/* ── 4. Upsell ladder ───────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">4. The Extension Upsell Ladder</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Consultation", a: "Diagnose goal + hair type; recommend the method and a take-home aftercare kit in the same breath." },
                  { q: "Install", a: "Price the hair transparently and the time separately, so clients understand the value of your skill." },
                  { q: "Move-up / fill", a: "Book the next appointment before they leave — this is where retention (and recurring revenue) is won." },
                  { q: "Take-home re-order", a: "Offer a 'top-up' pack or private-label line so the relationship (and margin) stays with your salon." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── 5. Mistakes ─────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">5. Pricing Mistakes That Quietly Erode Margin</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Flat 'plus £X' on every method", a: "A K-tip install takes 3× the time of a tape-in. Charging the same uplift punishes your most premium service." },
                  { q: "Giving the hair away in the service price", a: "If the install fee 'includes hair' at cost, you forfeit the recurring re-order margin. Price hair as its own line." },
                  { q: "No re-booking expectation", a: "Without a scheduled move-up, the client drifts to a competitor or DIY. The second appointment is where profit compounds." },
                  { q: "Discounting the premium methods", a: "K-tip and hand-tied weft should feel exclusive. Discounting trains clients to wait for the next offer." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><TrendingUp className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── CTA ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Ready to Price Extensions With Confidence?
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Open a free UK trade account for transparent, professional hair pricing — or talk to us about a private label line where you set the retail price and keep the margin.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/salon-partners">Open a Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/blog/private-label-hair-extensions-uk">Build Your Brand</Link>
                  </Button>
                </div>
              </div>

              {/* ── On-page FAQ (single source of truth) ─ */}
              <BlogFaqSection slug="salon-extension-pricing-guide" />

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/grow-profitable-hair-salon-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Cluster Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">How to Run a Profitable Salon (UK)</p>
                </Link>
                <Link href="/blog/hair-extension-profit-margin-guide" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Hair Extension Profit Margins for Salons</p>
                </Link>
              </div>

              {/* ── Back to Blog ─────────────────────────── */}
              <div className="pt-8 border-t">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
              </div>

            </div>
          </article>
        </main>
        <RelatedGuides slug="salon-extension-pricing-guide" />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
