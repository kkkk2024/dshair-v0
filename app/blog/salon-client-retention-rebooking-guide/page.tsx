import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, CalendarCheck, CheckCircle } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"

export const metadata = {
  title: "Salon Client Retention & Rebooking: Fill Your Columns | D.S Hair Beauty",
  description:
    "A practical UK guide to salon client retention and rebooking: the cost of lost clients, the front-desk rebooking script, recall flows, and why the 6–8 week extension cycle is your retention engine.",
  openGraph: {
    title: "Salon Client Retention & Rebooking: Fill Your Columns | D.S Hair Beauty",
    description: "The cost of lost clients, the front-desk rebooking script, recall flows, and how the 6–8 week extension cycle keeps columns full — a UK guide from 19 years in the trade.",
    url: "https://www.dshairbeauty.co.uk/blog/salon-client-retention-rebooking-guide",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Salon stylist rebooking a client",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-13",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/salon-client-retention-rebooking-guide",
  },
}

export default function SalonClientRetentionRebookingGuide() {
  return (
    <CartProvider>
      <BlogJsonLd slug="salon-client-retention-rebooking-guide" />
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
                "headline": "Salon Client Retention & Rebooking: Fill Your Columns",
                "description": "A practical UK guide to salon client retention and rebooking: the cost of lost clients, the front-desk rebooking script, recall flows, and why the 6–8 week extension cycle is your retention engine.",
                "url": "https://www.dshairbeauty.co.uk/blog/salon-client-retention-rebooking-guide",
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
                Salon Client Retention &amp; Rebooking
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Empty columns are rarely a marketing problem — they are a retention problem. Here is how UK salons we partner with keep clients coming back, and why extensions make it easier.
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
                <span className="text-[#4A1942] font-medium">Retention &amp; Rebooking</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">

              {/* ── Intro (E-E-A-T) ─────────────────────── */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Across <strong>19 years</strong> supplying UK salons, the owners who sleep easiest are not the ones with the biggest ad budget — they are the ones whose clients come back without being chased. Retention is cheaper than acquisition, and it compounds. A column that stays full needs far less marketing spend than one you refill every month.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                This guide covers the rebooking habit, recall flows, and the single biggest retention advantage a modern salon has: the extension maintenance cycle.
              </p>

              {/* ── 1. Cost of losing clients ──────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">1. The Real Cost of a Lost Client</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80" alt="Salon client consultation" fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Acquiring a new client can cost <strong>5–7×</strong> more than keeping an existing one. A client who visits every 6–8 weeks for a year is worth far more than the single visit you spent marketing to win. Every silent departure is recurring revenue that walked out the door.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                The fix is not more ads. It is a system — and the system starts at the basin.
              </p>

              {/* ── 2. Rebook before they leave ───────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">2. Rebook Before They Leave the Chair</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The highest-converting rebooking moment is while the result is fresh and the client is happy. Train the front desk (or stylist) to book the next visit before the client reaches the door:
              </p>
              <div className="not-prose bg-[#FDF8F0] border border-amber-100 rounded-xl p-5 mb-10">
                <p className="text-sm text-[#6B3A6E] leading-relaxed italic">
                  &quot;Your colour will be ready for a refresh in about 6 weeks — shall I put the same slot in the diary now so it&apos;s protected?&quot;
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Make rebooking the <em>default</em>, not the exception. Salons that do this consistently run fuller columns with less marketing. Pair it with the pricing ladder in our <Link href="/blog/salon-extension-pricing-guide" className="text-[#4A1942] underline font-medium">extension pricing guide</Link> so every rebooking also protects margin.
              </p>

              {/* ── 3. Recall flows ────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">3. Recall Flows That Bring Clients Back</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "SMS / email reminder", a: "A friendly 'your move-up is due' nudge at 5 weeks catches clients before they forget or drift." },
                  { q: "WhatsApp for VIPs", a: "A personal message to your top clients feels premium and gets a fast reply — no spam, just relationship." },
                  { q: "Win-back at 10 weeks", a: "If a regular hasn't returned, a single 'we missed you' offer recovers far more than a new-client ad." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><CalendarCheck className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── 4. Extension cycle engine ──────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">4. Why Extensions Are a Retention Engine</h2>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { label: "Built-in 6–8 week cycle", icon: <CalendarCheck className="h-5 w-5" />, items: ["Move-ups are scheduled", "Clients return on a rhythm", "Predictable columns"] },
                  { label: "Recurring re-order", icon: <Users className="h-5 w-5" />, items: ["Take-home top-ups", "Aftercare repeats", "Margin stays with you"] },
                  { label: "Higher switching cost", icon: <CheckCircle className="h-5 w-5" />, items: ["Clients invest in YOUR method", "Harder to price-shop", "A relationship, not a transaction"] },
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
                A client in extensions is effectively on a subscription you didn&apos;t have to build software for. The <Link href="/blog/hair-extension-methods-comparison" className="text-[#4A1942] underline font-medium">method comparison guide</Link> helps you pick the cycle that suits each client — tape-in and nano return every 6–8 weeks; K-tip and weft every 8–12.
              </p>

              {/* ── 5. KPIs ────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">5. The Three Retention KPIs to Track</h2>
              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-4 text-left font-medium">KPI</th>
                      <th className="p-4 text-left font-medium">Target</th>
                      <th className="p-4 text-left font-medium">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {[
                      { b: "Rebooking rate", p: "60%+ before leaving", l: "Fuller future columns" },
                      { b: "Return rate (6–8 wk)", p: "50%+ of extension clients", l: "Recurring revenue health" },
                      { b: "Win-back rate", p: "Track monthly", l: "Stops silent churn" },
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

              {/* ── CTA ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Keep Clients Coming Back
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Add extension services on a 6–8 week cycle and watch your columns fill themselves. Open a free UK trade account for professional hair and training support.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/salon-partners">Open a Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/blog/how-to-start-selling-hair-extensions-salon">Start an Extension Service</Link>
                  </Button>
                </div>
              </div>

              {/* ── On-page FAQ (single source of truth) ─ */}
              <BlogFaqSection slug="salon-client-retention-rebooking-guide" />

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/grow-profitable-hair-salon-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Cluster Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">How to Run a Profitable Salon (UK)</p>
                </Link>
                <Link href="/blog/how-to-start-selling-hair-extensions-salon" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Start an In-Salon Extension Service</p>
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
        <RelatedGuides slug="salon-client-retention-rebooking-guide" />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
