import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Crown, Sparkles, TrendingUp } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"

export const metadata = {
  title: "How to Sell High-Ticket Hair Extensions in Your Salon | D.S Hair Beauty",
  description:
    "A UK playbook for selling premium hair extensions: value-based consultation, premium methods (K-tip, hand-tied weft, bridal), experience design, and lifting your average ticket without discounting.",
  openGraph: {
    title: "How to Sell High-Ticket Hair Extensions in Your Salon | D.S Hair Beauty",
    description: "Value-based consultation, premium methods, and experience design that lifts your average extension ticket — a UK guide from 19 years in the trade.",
    url: "https://www.dshairbeauty.co.uk/blog/salon-high-ticket-extensions",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Premium hair extension application in salon",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-13",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/salon-high-ticket-extensions",
  },
}

export default function SalonHighTicketExtensions() {
  return (
    <CartProvider>
      <BlogJsonLd slug="salon-high-ticket-extensions" />
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
                "headline": "How to Sell High-Ticket Hair Extensions in Your Salon",
                "description": "A UK playbook for selling premium hair extensions: value-based consultation, premium methods (K-tip, hand-tied weft, bridal), experience design, and lifting your average ticket without discounting.",
                "url": "https://www.dshairbeauty.co.uk/blog/salon-high-ticket-extensions",
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
                How to Sell High-Ticket Hair Extensions in Your Salon
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                The salons with the healthiest margins are not the ones discounting. They are the ones who sell the transformation. Here is how to lift your average extension ticket — and keep it there.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/salon-partners">Open a Trade Account</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/blog/salon-extension-pricing-guide">Price With Confidence →</Link>
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
                <span className="text-[#4A1942] font-medium">High-Ticket Extensions</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">

              {/* ── Intro (E-E-A-T) ─────────────────────── */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over <strong>19 years</strong> supplying UK salons, the most common ceiling we see on extension revenue is not price — it is <em>positioning</em>. Salons that lead with "from £X" train clients to shop on cost. Salons that lead with the result, the method, and the experience sell premium without ever mentioning a discount. This is the high-ticket playbook.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                High-ticket does not mean ripping clients off. It means charging properly for premium hair, premium skill, and a premium experience — and giving clients a result worth the price.
              </p>

              {/* ── 1. What high-ticket means ───────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">1. What "High-Ticket" Really Means for Salon Extensions</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80" alt="Premium K-tip hair extension application" fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                High-ticket means a higher <em>average ticket per client</em> — driven by premium methods, longer wear, and added services, not by inflating the price of a basic fit. A salon doing £250 tape-ins six times a year per client is healthy; one doing £550 K-tip or hand-tied weft with the same client cadence is operating a far stronger business on the same chair hours. The lever is method mix and experience, not just numbers on the menu.
              </p>

              {/* ── 2. Premium method stack ────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">2. The Premium Method Stack</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                These are the methods that naturally command a higher ticket because of skill, wear time, and the result they deliver.
              </p>
              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-4 text-left font-medium">Method</th>
                      <th className="p-4 text-left font-medium">Why it's premium</th>
                      <th className="p-4 text-left font-medium">Wear / cycle</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {[
                      { b: "K-tip (keratin bond)", p: "Seamless, no rings, strong hold; highest skill to apply", l: "8–12 weeks" },
                      { b: "Hand-tied weft", p: "Luxe volume, custom-row placement, stylist artistry", l: "8–12 weeks" },
                      { b: "Butterfly weft", p: "Ultra-thin 0.5mm base, invisible, premium feel", l: "8–12 weeks" },
                      { b: "Bridal / event", p: "Bespoke length + styling, booked as an occasion", l: "One-off + trial" },
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Pair this with our <Link href="/blog/salon-extension-pricing-guide" className="text-[#4A1942] underline font-medium">pricing guide</Link> so premium methods are priced on value, not just cost-plus.
              </p>

              {/* ── 3. Value-based consultation ─────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">3. The Value-Based Consultation (Sell the Transformation)</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Lead with the outcome", a: "Open with 'what do you want to feel when you leave?' — length, confidence, volume for an event — not with a price list. The price follows the dream." },
                  { q: "Show, don't tell", a: "Use before/after images and a colour ring so the client sees the result before she commits. Tangible proof removes price objections." },
                  { q: "Recommend, don't offer options blindly", a: "Give a clear expert recommendation ('for your hair, I'd do K-tip') rather than dumping ten choices. Expertise is what clients pay a premium for." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><Sparkles className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── 4. Pricing the premium ──────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">4. Pricing the Premium Without Flinching</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { label: "Value-based anchor", icon: <Crown className="h-5 w-5" />, items: ["Price the premium method on transformation, not hair cost", "State the full investment once, confidently", "Never apologise for the price"] },
                  { label: "Bundle the experience", icon: <TrendingUp className="h-5 w-5" />, items: ["Include aftercare kit in the premium ticket", "Add a 48-hour check-in as standard", "Offer a move-up package paid upfront"] },
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
                Bundling the aftercare and the move-up into the premium ticket raises the effective price while feeling like added value — and locks in the recurring revenue. For the margin maths behind each method, see our <Link href="/blog/hair-extension-profit-margin-guide" className="text-[#4A1942] underline font-medium">profit-margin guide</Link>.
              </p>

              {/* ── 5. Designing the experience ─────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">5. Designing the Premium Experience</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Protect the appointment", a: "Longer, unhurried premium slots signal value. Rushed installs cheapen the service and risk the result." },
                  { q: "Private-label the take-home", a: "Offering your own branded aftercare and re-order line (via private label) turns a one-off into a brand relationship the client pays a premium to stay in." },
                  { q: "Follow up like a luxury brand", a: "A personal check-in, not a bulk email, after a premium service. That is what justifies the next premium ticket." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><Crown className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Our <Link href="/blog/private-label-hair-extensions-uk" className="text-[#4A1942] underline font-medium">private label guide</Link> shows how to launch a branded line so the premium relationship — and margin — stays with your salon.
              </p>

              {/* ── 6. Marketing to high-value clients ──── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">6. Marketing to High-Value Clients</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Showcase transformations", a: "Your best marketing is the result. Post before/after reels of premium installs; high-value clients buy what they can see." },
                  { q: "Speak to occasions", a: "Weddings, holidays, promotions — premium extensions are an investment clients make for moments. Market to the moment, not the method." },
                  { q: "Use testimonials as proof", a: "A short quote from a bridal client outweighs a price comparison. Social proof is the silent closer for premium sales." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><TrendingUp className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── 7. Mistakes that cap your ticket ───── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">7. Mistakes That Cap Your Ticket</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Leading with the cheapest option", a: "Opening the menu with 'from £90 clip-ins' sets a budget frame. Lead with the result and the premium method; let the client self-select down if needed." },
                  { q: "Discounting the premium", a: "A discounted K-tip tells clients it was never worth full price. Hold the line; premium clients respect firms that don't discount." },
                  { q: "No aftercare in the ticket", a: "Dropping the client at the door with no kit or check-in wastes the retention and re-order revenue that makes premium profitable." },
                  { q: "Inconsistent application", a: "Premium prices demand premium results every time. If your team is not consistently excellent, fix training before raising tickets — see our training SOP guide." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><Sparkles className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── CTA ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Sell Premium With Hair That Delivers
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Open a free UK trade account for consistent 100% Remy human hair in K-tip, hand-tied and butterfly weft — the methods that let you lift the ticket with confidence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/salon-partners">Open a Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/blog/salon-extension-training-sop">Train Your Team</Link>
                  </Button>
                </div>
              </div>

              {/* ── On-page FAQ (single source of truth) ─ */}
              <BlogFaqSection slug="salon-high-ticket-extensions" />

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/salon-extension-pricing-guide" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Cluster Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">How to Price Extension Services</p>
                </Link>
                <Link href="/blog/grow-profitable-hair-salon-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Run a Profitable Salon (UK)</p>
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
        <RelatedGuides slug="salon-high-ticket-extensions" />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
