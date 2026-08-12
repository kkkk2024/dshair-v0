import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Target, Sparkles, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"

export const metadata = {
  title: "How to Run a Profitable Hair Salon in the UK | D.S Hair Beauty",
  description:
    "A 19-years-in-the-trenches playbook for UK salon owners: raise profit margins, run efficient operations, and build your own hair extension brand with private label. Real frameworks and numbers.",
  openGraph: {
    title: "How to Run a Profitable Hair Salon in the UK | D.S Hair Beauty",
    description: "Raise profit margins, streamline operations, and launch your own salon hair extension brand — a practical UK guide from 19 years of helping salons grow.",
    url: "https://www.dshairbeauty.co.uk/blog/grow-profitable-hair-salon-uk",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Running a profitable hair salon in the UK",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-13",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/grow-profitable-hair-salon-uk",
  },
}

export default function GrowProfitableHairSalonUk() {
  return (
    <CartProvider>
      <BlogJsonLd slug="grow-profitable-hair-salon-uk" />
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
                "headline": "How to Run a Profitable Hair Salon in the UK: Operations, Profit & Building Your Own Brand",
                "description": "A practical UK guide to raising salon profit margins, running efficient operations, and building your own hair extension brand through private label — drawn from 19 years of helping salons grow.",
                "url": "https://www.dshairbeauty.co.uk/blog/grow-profitable-hair-salon-uk",
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
                How to Run a Profitable Hair Salon in the UK
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                A straight-talking playbook on margins, operations, and building your salon&apos;s own hair extension brand — written after 19 years of helping UK salons grow from chair rental to recognisable brands.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/salon-partners">Open a Trade Account</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/blog/private-label-hair-extensions-uk">Build Your Brand →</Link>
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
                <span className="text-[#4A1942] font-medium">Grow a Profitable Hair Salon</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">

              {/* ── Intro (E-E-A-T) ─────────────────────── */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over the past <strong>19 years</strong>, we&apos;ve supplied, trained, and partnered with salons across the UK — from single-chair independents to multi-site groups. The salons that thrive are rarely the ones with the fanciest fit-out. They are the ones that treat the business like a business: they protect their <strong>margin</strong>, systematise their <strong>operations</strong>, and increasingly, they build <strong>their own brand</strong> rather than only reselling someone else&apos;s.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                This guide pulls those lessons into one place. It is written for UK salon owners and managers who want practical frameworks — not theory. Where we cite a number, we give the range and the logic behind it so you can adapt it to your own salon.
              </p>

              {/* ── 1. Economics ─────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">1. The Real Economics of a UK Hair Salon</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A salon&apos;s profit is what&apos;s left after three cost buckets: <strong>people</strong> (stylist commissions, assistants, reception), <strong>product &amp; consumables</strong> (colour, extensions, aftercare), and <strong>overhead</strong> (rent, utilities, software, marketing). Across the UK, a well-run salon typically lands at a <strong>net profit margin of roughly 8–15%</strong> of turnover. Below 8% and you are working for the landlord; above 15% sustained, you are doing something genuinely right.
              </p>

              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-4 text-left font-medium">Cost bucket</th>
                      <th className="p-4 text-left font-medium">Typical % of turnover</th>
                      <th className="p-4 text-left font-medium">Where profit leaks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {[
                      { b: "People (commission + wages)", p: "40–55%", l: "Un-tracked rebooking, idle chair time" },
                      { b: "Product & consumables", p: "10–18%", l: "No retail attach, over-use of colour/extensions" },
                      { b: "Overhead (rent, bills, software)", p: "15–25%", l: "Poor booking density, dead hours" },
                      { b: "Marketing", p: "3–8%", l: "Spend with no trackable ROI" },
                      { b: "Net profit", p: "8–15%", l: "Eroded by discounting & no-shows" },
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
                The fastest way to move the needle is rarely &quot;charge more.&quot; It is closing the leaks: idle chairs, no-shows, and a missing <Link href="/blog/hair-extension-profit-margin-guide" className="text-[#4A1942] underline font-medium">retail and extension revenue stream</Link>.
              </p>

              {/* ── 2. Seven levers ──────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">2. Seven Levers to Increase Salon Profitability</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80" alt="Tracking salon profit margins and KPIs" fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Treat these as dials, not switches. Each one lifts profit without necessarily raising your headline price.
              </p>

              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-4 text-left font-medium">Lever</th>
                      <th className="p-4 text-left font-medium">What it does</th>
                      <th className="p-4 text-left font-medium">Quick win</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {[
                      { b: "Pricing discipline", p: "Value-based pricing instead of a race to the bottom", l: "Audit your menu; reprice your top 3 services" },
                      { b: "Retail & take-home", p: "Aftercare + extensions sold at checkout", l: "Set a 25–35% retail attach-rate target" },
                      { b: "Rebooking & retention", p: "Fills future columns before clients leave", l: "Front-desk rebooking script + reminder flow" },
                      { b: "Service mix", p: "Add high-margin extension services", l: "Train 1–2 stylists on tape-in / nano", l2: "" },
                      { b: "Utilisation", p: "More billable hours per chair", l: "Block booking; minimum-fill thresholds" },
                      { b: "No-show policy", p: "Protects revenue you already earned", l: "Deposit + 24h card-on-file" },
                      { b: "Average ticket", p: "Bundles, upgrades, add-ons", l: "&quot;Treatment + take-home&quot; bundles" },
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

              {/* ── 3. Operations ────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">3. How to Run a Salon Efficiently (Operations)</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80" alt="Salon stylist consulting with a client" fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Profit is designed in the operations, not rescued at month-end. The salons we work with that scale past the owner&apos;s own chair share a simple operating system:
              </p>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Standardise the consultation", a: "One consistent consultation script per service. It improves results, lifts retail attach, and makes training new stylists fast." },
                  { q: "Control inventory", a: "Track colour, extensions and aftercare stock weekly. Over-stocking ties up cash; under-stocking costs you a sale. A trade account with predictable lead times makes this effortless." },
                  { q: "Optimise the booking grid", a: "Protect your peak columns, set sensible gaps for long services, and use block booking to lift chair utilisation above 70%." },
                  { q: "Train for extension services", a: "Extensions are among the highest-margin services a salon can offer. One trained stylist can open a whole new revenue line — see our guide to starting an in-salon extension service." },
                  { q: "Run a weekly numbers meeting", a: "15 minutes on three KPIs: utilisation %, retail attach %, rebooking %. If a number is flat, assign an owner and a fix." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── 4. Build your own brand ──────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">4. Building Your Salon&apos;s Own Hair Extension Brand (Private Label)</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80" alt="Private label hair extension branding and packaging" fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The most profitable salons we&apos;ve helped didn&apos;t just sell extensions — they <strong>owned the brand their clients asked for by name</strong>. Private label means your salon sells hair extensions under <em>your</em> name, with your packaging, your colour rings, and your margins.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Why salons move to private label:
              </p>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Higher margin", icon: <TrendingUp className="h-5 w-5" />, items: ["You set the retail price", "No middle-brand markup", "Recurring take-home revenue"] },
                  { label: "Loyalty & differentiation", icon: <Sparkles className="h-5 w-5" />, items: ["Clients ask for YOUR brand", "Harder to price-shop", "A brand asset you own"] },
                  { label: "We do the heavy lifting", icon: <Users className="h-5 w-5" />, items: ["19 yrs manufacturing", "Custom packaging & colour rings", "Helped 50+ salon brands launch"] },
                ].map(({ label, icon, items }) => (
                  <div key={label} className="rounded-xl p-5 bg-[#FDF8F0] border border-amber-100">
                    <div className="flex items-center gap-2 text-[#4A1942] mb-3 font-semibold">{icon} {label}</div>
                    <ul className="space-y-1 text-sm text-[#3D2314]">
                      {items.map(item => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                What it actually involves:
              </p>
              <ul className="text-lg text-muted-foreground leading-relaxed mb-6 list-disc pl-6 space-y-2">
                <li><strong>MOQ:</strong> a sensible starting order (we help you size it to your client base so you&apos;re not sitting on stock).</li>
                <li><strong>Branding:</strong> your logo on packs, custom colour ring, and point-of-sale cards.</li>
                <li><strong>Lead time:</strong> our UK warehouse is launching; until then the full range ships factory-direct via express (3–5 days) so you can keep promises to clients.</li>
                <li><strong>Support:</strong> colour matching, training, and the same 19-years-of-experience backing we give our trade accounts.</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                The result we see most often: a salon that once resold a supplier&apos;s brand now has a take-home line clients re-order by name — and a margin that belongs to them. Read the full <Link href="/blog/private-label-hair-extensions-uk" className="text-[#4A1942] underline font-medium">private label guide for UK salons</Link> for MOQs, costs and a step-by-step launch plan.
              </p>

              {/* ── 5. 90-day plan ───────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">5. A 90-Day Action Plan</h2>
              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-4 text-left font-medium">Phase</th>
                      <th className="p-4 text-left font-medium">Focus</th>
                      <th className="p-4 text-left font-medium">Target outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {[
                      { b: "Days 1–30", p: "Stop the leaks", l: "Deposit policy live, rebooking script, stock count" },
                      { b: "Days 31–60", p: "Lift the average ticket", l: "Retail attach 25%+, 1–2 stylists extension-trained" },
                      { b: "Days 61–90", p: "Build the brand", l: "Private label sample order or trade account opened" },
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

              {/* ── 6. Mistakes ──────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">6. Common Mistakes UK Salon Owners Make</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Discounting to fill columns", a: "Empty columns are a booking problem, not a price problem. Discount trains clients to wait for the next offer." },
                  { q: "No retail or extension revenue", a: "Service-only salons leave 10–18% of potential margin on the table at every appointment." },
                  { q: "Treating the brand as someone else's", a: "If clients only know the supplier's name, you have built a following for a brand you don't own." },
                  { q: "Running on gut, not KPIs", a: "If you can't see utilisation, attach rate and rebooking %, you can't fix what's quietly draining profit." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><Target className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── CTA Box ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Ready to Build a More Profitable Salon?
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Open a free UK trade account and source 100% Remy human hair extensions at professional prices — or talk to us about launching your own private label line.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/salon-partners">Open a Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/blog/private-label-hair-extensions-uk">Start Your Brand</Link>
                  </Button>
                </div>
              </div>

              {/* ── On-page FAQ (GEO + UX) ──────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Frequently Asked Questions</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "How profitable is a hair salon in the UK?", a: "A well-run UK salon typically nets around 8–15% of turnover. The gap between a struggling salon and a profitable one is usually operational discipline — rebooking, retail attach, and chair utilisation — rather than headline prices." },
                  { q: "What profit margin should a hair salon aim for?", a: "Aim for a net margin of at least 10%, with 12–15% as a strong target. Below 8% leaves almost no buffer for rent rises or quiet seasons; above 15% sustained usually means you have a real competitive edge (often a strong extension or retail line)." },
                  { q: "How can a salon increase profits without raising prices?", a: "Close the leaks first: introduce a deposit/no-show policy, train the front desk to rebook before clients leave, set a retail attach-rate target of 25–35%, and add high-margin extension services. These lift profit per client without touching your menu prices." },
                  { q: "Should my salon start its own hair extension brand?", a: "If you already sell extensions and have a loyal client base, private label is often the highest-leverage next step. You keep the margin, own the client relationship, and differentiate from salons that only resell a supplier's name. Start with a small, well-chosen sample order." },
                  { q: "What is private label for salons and how does it work?", a: "Private label means extensions are made and packed under your salon's brand — your logo, your colour ring, your packaging. A manufacturing partner (like D.S Hair & Beauty) handles production and quality; you own the brand, the pricing, and the client relationship." },
                  { q: "How long does it take to launch a private label hair extension line?", a: "Typically a few weeks to finalise branding and a sample order, then ongoing express replenishment. Our UK warehouse is launching; until then the full range ships factory-direct via express (3–5 days), so you can promise reliable fulfilment to clients from day one." },
                  { q: "How do I choose a hair extension manufacturing partner in the UK?", a: "Look for proven industry experience, 100% Remy human hair as standard, transparent MOQs and lead times, and real training/colour-matching support. See our supplier checklist for the full questions to ask before you commit." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2">{q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/private-label-hair-extensions-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Private Label Hair Extensions UK: Complete Guide</p>
                </Link>
                <Link href="/blog/hair-extension-profit-margin-guide" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Hair Extension Profit Margins: What Salon Owners Make</p>
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
        <RelatedGuides slug="grow-profitable-hair-salon-uk" />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
