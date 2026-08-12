import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, Sparkles, CheckCircle } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"

export const metadata = {
  title: "How to Increase Your Salon's Retail Attach Rate | D.S Hair Beauty",
  description:
    "A practical UK guide to lifting salon retail attach rate to 25–35%: the checkout conversation, bundling, merchandising, staff incentives, and why extension aftercare is your highest-margin retail engine.",
  openGraph: {
    title: "How to Increase Your Salon's Retail Attach Rate | D.S Hair Beauty",
    description: "The checkout conversation, bundling, merchandising and incentives that lift salon retail attach to 25–35% — a UK guide from 19 years supplying salons.",
    url: "https://www.dshairbeauty.co.uk/blog/salon-retail-attachment-guide",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Salon retail shelf and take-home products",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-13",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/salon-retail-attachment-guide",
  },
}

export default function SalonRetailAttachmentGuide() {
  return (
    <CartProvider>
      <BlogJsonLd slug="salon-retail-attachment-guide" />
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
                "headline": "How to Increase Your Salon's Retail Attach Rate",
                "description": "A practical UK guide to lifting salon retail attach rate to 25–35%: the checkout conversation, bundling, merchandising, staff incentives, and why extension aftercare is your highest-margin retail engine.",
                "url": "https://www.dshairbeauty.co.uk/blog/salon-retail-attachment-guide",
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
                How to Increase Your Salon&apos;s Retail Attach Rate
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Retail is the highest-margin revenue a salon can earn — and most leave it on the table. Here is how UK salons we work with get attach rate from single digits to a steady 25–35%.
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
                <span className="text-[#4A1942] font-medium">Retail Attach Rate</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">

              {/* ── Intro (E-E-A-T) ─────────────────────── */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In <strong>19 years</strong> of supplying UK salons, the gap between a struggling salon and a profitable one almost always comes down to one number: <strong>retail attach rate</strong> — the share of appointments that walk out with a take-home product. Service revenue pays the rent; retail pays the profit.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                A healthy UK salon sits at <strong>25–35%</strong>. Many independents sit under 10% — not because clients don&apos;t want the product, but because no one asked, or asked at the wrong moment. This guide fixes that.
              </p>

              {/* ── 1. What it is + benchmark ──────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">1. What Retail Attach Rate Is (and the Benchmark)</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80" alt="Salon retail products on display" fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Retail attach rate = (appointments with a take-home product sale) ÷ (total appointments). If 30 of 100 clients buy something, your attach rate is 30%.
              </p>
              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-4 text-left font-medium">Band</th>
                      <th className="p-4 text-left font-medium">What it means</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {[
                      { b: "Under 10%", p: "Leaving the bulk of margin on the table — common for service-only salons" },
                      { b: "10–20%", p: "Improving; front desk is asking but inconsistently" },
                      { b: "25–35%", p: "Healthy — retail is a habit, not a lucky break" },
                      { b: "35%+", p: "Excellent — usually a private-label or strong aftercare line" },
                    ].map((row) => (
                      <tr key={row.b} className="hover:bg-amber-50/50">
                        <td className="p-4 font-semibold text-[#4A1942]">{row.b}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── 2. Why retail is highest margin ────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">2. Why Retail Is Your Highest-Margin Revenue</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "No chair time", a: "You already paid for the appointment. The product sale adds margin with zero extra labour cost." },
                  { q: "Recurring by nature", a: "Aftercare runs out. Clients re-buy every 4–8 weeks — predictable repeat revenue." },
                  { q: "Protects the service result", a: "Clients who use proper aftercare keep their extensions looking good, so they re-book and refer." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── 3. The checkout conversation ───────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">3. The Checkout Conversation (A Script That Works)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The sale happens at the basin and the styling chair — not at the till. Train stylists to recommend, and the front desk to confirm:
              </p>
              <div className="not-prose bg-[#FDF8F0] border border-amber-100 rounded-xl p-5 mb-10">
                <p className="text-sm text-[#6B3A6E] leading-relaxed italic">
                  &quot;Your extensions will last longer if we send you home with the sulphate-free shampoo and the loop brush — shall I add them to your appointment today?&quot;
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Make it a question, not a pitch. Clients say yes far more often when the recommendation is framed around <em>their</em> result. Our <Link href="/blog/salon-extension-pricing-guide" className="text-[#4A1942] underline font-medium">extension pricing guide</Link> shows how to build the product line into every ticket.
              </p>

              {/* ── 4. Bundling ────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">4. Bundling: &quot;Treatment + Take-Home&quot;</h2>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { label: "Install + aftercare kit", icon: <ShoppingBag className="h-5 w-5" />, items: ["Higher ticket", "Better retention", "Client leaves prepared"] },
                  { label: "Move-up + top-up", icon: <Sparkles className="h-5 w-5" />, items: ["Recurring purchase", "Locks the relationship", "Margin stays with you"] },
                  { label: "Private-label line", icon: <CheckCircle className="h-5 w-5" />, items: ["You set retail price", "Clients ask by name", "A brand asset you own"] },
                ].map(({ label, icon, items }) => (
                  <div key={label} className="rounded-xl p-5 bg-[#FDF8F0] border border-amber-100">
                    <div className="flex items-center gap-2 text-[#4A1942] mb-3 font-semibold">{icon} {label}</div>
                    <ul className="space-y-1 text-sm text-[#3D2314]">
                      {items.map(item => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              {/* ── 5. Merchandising + incentives ──────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">5. Merchandising &amp; Staff Incentives</h2>
              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-4 text-left font-medium">Lever</th>
                      <th className="p-4 text-left font-medium">Quick win</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {[
                      { b: "Eye-level shelf by the mirror", p: "Clients see the product while the result is fresh" },
                      { b: "Sample-at-basin", p: "Let them feel the conditioner; selling follows" },
                      { b: "Monthly retail target + small bonus", p: "Turns attach rate into a team habit" },
                      { b: "Track attach % weekly", p: "What gets measured gets managed" },
                    ].map((row) => (
                      <tr key={row.b} className="hover:bg-amber-50/50">
                        <td className="p-4 font-semibold text-[#4A1942]">{row.b}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── 6. Extension aftercare engine ─────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">6. Extension Aftercare: Your Retail Engine</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Extension clients need aftercare <em>by definition</em> — sulphate-free shampoo, a loop brush, and a silk pillowcase are not optional. That makes them the easiest retail sale in the salon. Build a take-home kit into every install and the attach rate rises on its own.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                For the strongest version, put your own name on it: a <Link href="/blog/private-label-hair-extensions-uk" className="text-[#4A1942] underline font-medium">private label line</Link> turns aftercare into a brand asset you own and re-order by name.
              </p>

              {/* ── CTA ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Build a Retail Line Clients Re-Order
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Open a free UK trade account for professional aftercare and extension retail — or launch a private label line where you set the price and keep the margin.
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
              <BlogFaqSection slug="salon-retail-attachment-guide" />

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/grow-profitable-hair-salon-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Cluster Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">How to Run a Profitable Salon (UK)</p>
                </Link>
                <Link href="/blog/salon-extension-pricing-guide" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Pricing Extension Services</p>
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
        <RelatedGuides slug="salon-retail-attachment-guide" />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
