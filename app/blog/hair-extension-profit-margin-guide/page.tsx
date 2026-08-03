import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight, Calculator, TrendingUp, PoundSterling, BarChart3 } from "lucide-react"
import { ArticleJsonLd, FaqJsonLd } from "@/components/seo/json-ld"

export const metadata = {
  title: "Hair Extension Profit Margin Guide for UK Salons: Real Numbers for 2026 | D.S Hair Beauty",
  description:
    "How much profit do hair extensions actually generate for UK salons? Real margin breakdowns by method (tape-in, K-tip, nano, weft), pricing strategies, and how trade sourcing multiplies your returns. Includes calculator-ready formulas.",
  openGraph: {
    title: "Hair Extension Profit Margin Guide for UK Salons: Real Numbers for 2026 | D.S Hair Beauty",
    description: "Real margin breakdowns by extension method. Trade vs retail pricing compared. Calculator-ready formulas for UK salon owners.",
    url: "https://www.dshairbeauty.co.uk/blog/hair-extension-profit-margin-guide",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hair extension profit margin guide for UK salon owners",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-03",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/hair-extension-profit-margin-guide",
  },
}

export default function HairExtensionProfitMarginGuide() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* ── JSON-LD (GEO: Article + FAQ) ──────── */}
          <ArticleJsonLd
            title="Hair Extension Profit Margin Guide for UK Salons: Real Numbers for 2026"
            description="Real margin breakdowns by extension method. Trade vs retail pricing compared. Calculator-ready formulas for UK salon owners."
            authorUrl="https://www.dshairbeauty.co.uk/about/caro-chen"
            datePublished="2026-08-03"
            image="https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=1200&q=80"
            url="https://www.dshairbeauty.co.uk/blog/hair-extension-profit-margin-guide"
          />
          <FaqJsonLd
            faqs={[
              {
                question: "What is a typical hair extension margin for a salon?",
                answer:
                  "For a salon buying at trade and charging for both hair and application, product margins typically run 50–80% and total service margins (hair + application) 60–82%. The same client on a retail brand might leave only 26–49% once the brand's suggested price is paid.",
              },
              {
                question: "How do I calculate extension margin?",
                answer:
                  "Margin % = (client price − your trade cost) ÷ client price. Charge the hair and the application separately. Example: tape-in hair costs you £60 trade, application is £180, client pays £240 for hair + £180 service = £420. Margin = (420 − 240) ÷ 420 = 43% on the combined, with the hair alone at 75%.",
              },
              {
                question: "Which method has the best margin?",
                answer:
                  "Hand-tied weft and tape-in tend to carry the strongest combined margins because re-order cycles are frequent and trade cost is low relative to service fees. K-tip and nano ring are higher-ticket per application. The 'best' method is the one your clients actually re-order.",
              },
              {
                question: "Does buying wholesale really change my margin?",
                answer:
                  "Yes — wholesale (trade) pricing runs 30–60% below retail. On the same client and same service, moving from a retail brand to a no-minimum trade supplier can lift your margin from the high-20s% to the high-70s%. That difference is the gap between a side service and a profit centre.",
              },
            ]}
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
                Salon Profitability
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                Hair Extension Profit Margins
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Real numbers for UK salon owners. How much each extension method actually earns, why trade sourcing changes everything, and how to price for maximum profitability without scaring off clients.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/trade-wholesale">Get Trade Pricing</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/trade-price-calculator">Use Margin Calculator</Link>
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
                <span className="text-[#4A1942] font-medium">Hair Extension Profit Margins</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="flex items-center gap-3 mb-8 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl not-prose">
              <div className="w-10 h-10 rounded-full bg-[#4A1942] text-white flex items-center justify-center font-medium text-sm shrink-0">CC</div>
              <p className="text-sm text-[#6B3A6E]">
                Written by <Link href="/about/caro-chen" className="text-[#4A1942] font-semibold underline">Caro Chen</Link>, Founder &amp; Trade Director at D.S Hair &amp; Beauty · 19 years in hair extension manufacturing
              </p>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* ── Why Extensions Are Your Highest-Margin Service ── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">Why Hair Extensions Are Your Highest-Margin Service</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Of all the services a typical UK salon offers — cuts, colour, blow-drys, treatments — <strong>hair extensions consistently deliver the highest absolute profit per appointment hour</strong>. A colour correction might take 4 hours and use £40 of product. A full-head tape-in installation takes 90 minutes, uses £80–150 of product (at trade prices), and generates £300–550 in service revenue.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The math is straightforward: extensions combine high perceived value (clients willingly pay premium prices) with controllable product costs (especially when sourced at trade prices). The gap between those two numbers is your margin — and that gap is wider than almost anything else on your service menu.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                But here is what most salon owners get wrong: they buy extensions at <strong>retail or near-retail prices</strong> and wonder why their margins feel tight. The difference between buying at consumer prices versus trade prices is often the difference between a 60% margin and an 85% margin on the same service. Let me show you the actual numbers.
              </p>

              {/* ── Hero Image ──────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80"
                  alt="Salon owner reviewing hair extension pricing and margins"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Margin Breakdown By Method ────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Margin Breakdown by Extension Method</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                These figures reflect <strong>typical UK salon pricing in 2026</strong> using trade-sourced product. Actual numbers vary by location, clientele, and your positioning — but the ratios hold true across most markets.
              </p>

              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="text-left p-3 rounded-tl-lg">Method</th>
                      <th className="text-right p-3">Trade Cost</th>
                      <th className="text-right p-3">Typical Service Price</th>
                      <th className="text-right p-3">Gross Margin</th>
                      <th className="text-right p-3 rounded-tr-lg">Margin %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { method: "Tape-In (full head, 40pcs)", cost: "£80–130", price: "£320–450", margin: "£190–320", pct: "60–75%" },
                      { method: "K-Tip / Fusion (full head)", cost: "£120–180", price: "£400–600", margin: "£280–420", pct: "67–73%" },
                      { method: "Nano Ring (full head)", cost: "£140–200", price: "£450–650", margin: "£310–450", pct: "66–72%" },
                      { method: "Hand-Tied Weft (full head)", cost: "£100–160", price: "£380–520", margin: "£280–360", pct: "71–72%" },
                      { method: "Clip-In (set of 120g)", cost: "£25–45", price: "£80–150", margin: "£55–105", pct: "68–72%" },
                      { method: "Ponytail / Buns", cost: "£18–35", price: "£60–120", margin: "£42–85", pct: "69–73%" },
                    ].map((row, i) => (
                      <tr key={row.method} className={i % 2 === 0 ? "bg-[#FDF8F0]" : "bg-white"}>
                        <td className="p-3 font-medium text-[#4A1942]">{row.method}</td>
                        <td className="text-right p-3 text-muted-foreground">{row.cost}</td>
                        <td className="text-right p-3 text-muted-foreground">{row.price}</td>
                        <td className="text-right p-3 font-semibold text-green-700">{row.margin}</td>
                        <td className="text-right p-3 font-bold text-[#4A1942]">{row.pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                <em>Note: Trade costs based on factory-direct 100% Remy human hair pricing. Service prices reflect typical London/Southeast/Midlands salon rates. Regional variation ±15–20%.</em>
              </p>

              {/* ── Retail vs Trade: The Hidden Cost ───────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Retail vs Trade Sourcing: The Hidden Cost of Buying Wrong</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Here is a concrete example using tape-in extensions — the most popular method in UK salons right now:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-5 mb-10">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <PoundSterling className="h-5 w-5 text-red-600" />
                    <h4 className="font-semibold text-red-800">Buying at Retail Prices</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>Product cost: £180–260/set (consumer pricing)</li>
                    <li>Service price: £350 (market-limited)</li>
                    <li>Gross margin: £90–170</li>
                    <li><strong>Margin %: 26–49%</strong></li>
                    <li className="mt-2 pt-2 border-t border-red-200">You keep roughly £1 for every £2–4 of client spend.</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-green-800">Buying at Trade Prices</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>Product cost: £80–130/set (factory-direct trade)</li>
                    <li>Service price: £350–450 (you set the ceiling)</li>
                    <li>Gross margin: £220–370</li>
                    <li><strong>Margin %: 63–82%</strong></li>
                    <li className="mt-2 pt-2 border-t border-green-200">You keep roughly £2–3 for every £1 of product cost.</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                <strong>The same client. The same 90-minute appointment. The same result.</strong> The only variable is where you bought the product. That is not a small difference — over a year of doing 4–6 extension appointments per week, trade sourcing can mean <strong>£15,000–£35,000 in additional gross profit</strong> compared to buying at retail prices.
              </p>

              {/* ── Pricing Strategies ─────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Pricing Strategies That Maximise Margin Without Losing Clients</h2>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">Tiered Pricing by Complexity</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Not every full-head installation should be priced identically. Consider tiered pricing based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-8">
                <li><strong>Length tiers:</strong> 16&quot;, 18&quot;, 20&quot;, 22&quot;+ each at different price points (longer = more product + more labour)</li>
                <li><strong>Colour complexity:</strong> Solid colours (base price) → Balayage/Ombre (+15–25%) → Custom colour match (+25–35%)</li>
                <li><strong>Hair density:</strong> Light enhancement (half-head) vs full volume vs extra-thick — three distinct price brackets</li>
                <li><strong>Method mix:</strong> Tape-in base price, nano ring premium (+20–30% for precision work), fusion premium (+30–40%)</li>
              </ul>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">Bundle Pricing for Higher Ticket Value</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Instead of selling extensions as a standalone service, bundle them: <strong>&quot;Extension + Colour Refresh + Blow-Dry Package&quot;</strong> at a package price that feels like a deal to the client but lifts your average ticket by 30–50%. Bundles also increase revisit frequency — the client books back for maintenance, colour touch-ups, and removal/replacement as a predictable cycle.
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">The Maintenance Revenue Stream</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The real profit in extensions is not the first installation — it is the recurring revenue. Tape-ins need moving up every 6–8 weeks. Nano rings need adjustment every 4–6 weeks. Each maintenance visit is a 30–45 minute appointment generating £50–90 with minimal product cost. One full-head client generates <strong>£400–900/year in follow-up revenue</strong> alone. Build your pricing model around lifetime client value, not single-appointment extraction.
              </p>

              {/* ── Common Pricing Mistakes ───────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">5 Pricing Mistakes That Kill Your Extension Margins</h2>

              <div className="not-prose space-y-3 mb-10">
                {[
                  { mistake: "Underpricing to compete with budget salons", fix: "Clients who shop on price alone are not your ideal extension customers. Position on quality, results, and brand — not on being cheapest." },
                  { mistake: "Pricing only on product cost + flat labour fee", fix: "Price on value delivered. An extension transformation that changes a client's appearance and confidence is worth far more than materials + hours." },
                  { mistake: "Giving free maintenance indefinitely", fix: "Include one maintenance session in the initial package price. Subsequent visits are billable services — this trains clients correctly from day one." },
                  { mistake: "Not raising prices as your skill improves", fix: "Your first 50 installations were practice. Your next 50 are professional-grade. Review your pricing quarterly and increase as your portfolio strengthens." },
                  { mistake: "Buying product from multiple sources with no trade account", fix: "Consolidate with one trade supplier. Volume consistency builds relationship benefits (better pricing, priority stock, samples) that fragmented purchasing never delivers." },
                ].map(({ mistake, fix }) => (
                  <div key={mistake} className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <BarChart3 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-700 block mb-1">{mistake}</strong>
                      <span className="text-sm text-[#6B3A6E]"><strong>Fix:</strong> {fix}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Quick Margin Formula ──────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Quick Margin Formula (Use It Today)</h2>
              <div className="bg-[#4A1942] rounded-2xl p-6 text-white mb-10 not-prose">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="h-6 w-6 text-amber-400" />
                  <h3 className="font-serif text-xl font-medium">Gross Margin Calculator</h3>
                </div>
                <div className="space-y-3 text-sm font-mono">
                  <p><span className="text-amber-300">Step 1:</span> Product cost (trade price) ÷ Service price = Cost Ratio</p>
                  <p><span className="text-amber-300">Step 2:</span> 1 − Cost Ratio = Gross Margin %</p>
                  <p><span className="text-amber-300">Step 3:</span> Service price × Margin % = £ Profit per client</p>
                  <p className="pt-3 border-t border-white/20"><span className="text-amber-300">Example:</span> (£100 trade cost ÷ £400 service price) = 0.25 → 1 − 0.25 = <strong className="text-amber-300 text-lg">75% margin</strong> → £400 × 0.75 = <strong className="text-amber-300 text-lg">£300 profit</strong></p>
                </div>
                <p className="mt-4 text-xs text-white/60">
                  For a full interactive calculator with all methods pre-loaded, try our <Link href="/trade-price-calculator" className="underline text-amber-300">Trade Price Calculator →</Link>
                </p>
              </div>

              {/* ── CTA Box ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Ready to Improve Your Extension Margins?
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Open a free trade account with D.S Hair Beauty and access factory-direct pricing on 100% Remy human hair extensions. No minimum order. Express 3–5 day delivery to the UK. See the margin improvement from day one.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/trade-wholesale">Open Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/trade-price-calculator">Try Margin Calculator</Link>
                  </Button>
                </div>
              </div>

              {/* ── FAQ ─────────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Frequently Asked Questions</h2>
              <div className="not-prose space-y-4 mb-12">
                <div className="border border-amber-100 rounded-xl p-5 bg-[#FDF8F0]">
                  <p className="font-semibold text-[#4A1942] mb-2">What is a typical hair extension margin for a salon?</p>
                  <p className="text-sm text-[#6B3A6E] leading-relaxed">For a salon buying at trade and charging for both hair and application, product margins typically run 50–80% and total service margins 60–82%. The same client on a retail brand might leave only 26–49%.</p>
                </div>
                <div className="border border-amber-100 rounded-xl p-5 bg-[#FDF8F0]">
                  <p className="font-semibold text-[#4A1942] mb-2">How do I calculate extension margin?</p>
                  <p className="text-sm text-[#6B3A6E] leading-relaxed">Margin % = (client price − your trade cost) ÷ client price. Charge the hair and the application separately. Example: tape-in hair costs you £60 trade, application £180, client pays £420 total. Margin = (420 − 240) ÷ 420 = 43% combined, hair alone 75%.</p>
                </div>
                <div className="border border-amber-100 rounded-xl p-5 bg-[#FDF8F0]">
                  <p className="font-semibold text-[#4A1942] mb-2">Which method has the best margin?</p>
                  <p className="text-sm text-[#6B3A6E] leading-relaxed">Hand-tied weft and tape-in carry the strongest combined margins due to frequent re-orders and low trade cost. K-tip and nano ring are higher-ticket per application. The best method is the one your clients re-order.</p>
                </div>
                <div className="border border-amber-100 rounded-xl p-5 bg-[#FDF8F0]">
                  <p className="font-semibold text-[#4A1942] mb-2">Does buying wholesale really change my margin?</p>
                  <p className="text-sm text-[#6B3A6E] leading-relaxed">Yes — wholesale pricing runs 30–60% below retail. On the same client and service, moving from a retail brand to a no-minimum trade supplier can lift margin from the high-20s% to the high-70s%.</p>
                </div>
              </div>

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/private-label-hair-extensions-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Private Label Hair Extensions: Build Your Own Brand</p>
                </Link>
                <Link href="/blog/wholesale-hair-extensions-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Wholesale Hair Extensions UK: Trade Buying Guide</p>
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
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
