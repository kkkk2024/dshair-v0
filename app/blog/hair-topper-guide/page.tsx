import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, CheckCircle2, Users, TrendingDown, Sparkles } from "lucide-react"

export const metadata = {
  title: "Hair Topper Guide: What Is It, Who Needs It & How to Apply | D.S HAIR & BEAUTY",
  description:
    "Complete guide to hair toppers for UK salons. Silk base vs mono top vs mesh base explained. Learn which clients need toppers, how to apply them, and how to source wholesale. From D.S Hair & Beauty — 19 years supplying UK salons.",
}

export default function HairTopperGuidePage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">

          {/* ── Hero ─────────────────────────────────── */}
          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)"
              }} />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                <Sparkles className="h-4 w-4" /> Product Guide 2025
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                Hair Toppers: The UK Salon&apos;s<br />Most Underrated Revenue Stream
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Everything salons need to know about hair toppers — from product types and client matching to application techniques and sourcing wholesale in the UK.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/collections/hair-toppers">Shop Hair Toppers</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/salon-partners">Trade Account</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ── Quick Stats ───────────────────────────── */}
          <section className="bg-[#FDF8F0] border-y border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { num: "40%", label: "of women notice hair thinning by age 40" },
                  { num: "£250", label: "average client spend per topper" },
                  { num: "2 min", label: "average application time" },
                  { num: "6 mo", label: "average replacement cycle" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div className="text-3xl font-bold text-[#4A1942]">{num}</div>
                    <div className="text-sm text-[#6B3A6E] mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">

            {/* ── Breadcrumb ───────────────────────── */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-8">
              <span className="bg-[#4A1942]/10 text-[#4A1942] rounded-full px-3 py-1 font-medium">Product Guide</span>
              <span>Updated March 2025</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 10 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* ── What Is a Hair Topper ─────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Is a Hair Topper?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A hair topper (also called a hair piece, top piece, or partial wig) is a <strong>targeted hair extension product</strong> designed to cover thinning or balding areas at the crown, top, or sides of the head. Unlike a full wig that covers the entire scalp, a topper covers only the area that needs it — blending seamlessly with the client&apos;s natural hair.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Think of it as a <em>&quot;crown patch&quot;</em> — a contoured piece of hair with a base material that clips onto existing hair. The result is instant volume, full coverage, and a completely natural look in under two minutes.
              </p>

              {/* ── Hero Image ────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
                  alt="Hair topper application by professional stylist"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Who Needs a Hair Topper ─────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Who Needs a Hair Topper?</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Users className="h-5 w-5" />, title: "Postpartum Hair Loss", desc: "Many new mothers experience significant hair shedding 3-6 months after childbirth. A topper offers an immediate, non-invasive solution." },
                  { icon: <TrendingDown className="h-5 w-5" />, title: "Hormonal Thinning", desc: "Menopause, thyroid conditions, and hormonal changes cause gradual thinning — particularly at the crown and parting line." },
                  { icon: <Sparkles className="h-5 w-5" />, title: "Genetic Hair Loss", desc: "Female pattern hair loss (androgenetic alopecia) affects millions of UK women. Toppers provide targeted coverage where it&apos;s needed most." },
                  { icon: <Clock className="h-5 w-5" />, title: "Age-Related Volume Loss", desc: "Hair naturally becomes thinner with age. Toppers restore the appearance of thickness without surgery or medication." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#4A1942]">{icon}</span>
                      <h3 className="font-semibold text-[#4A1942]">{title}</h3>
                    </div>
                    <p className="text-sm text-[#6B3A6E]">{desc}</p>
                  </div>
                ))}
              </div>

              {/* ── Types of Hair Toppers ──────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Types of Hair Topper Bases: Silk vs Mono vs Mesh</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The base material is the most important factor in choosing a topper. Each base type offers different benefits for different client needs.
              </p>

              {/* Comparison table */}
              <div className="overflow-x-auto mb-10">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="text-left p-3 bg-[#4A1942] text-white font-semibold rounded-tl-lg">Base Type</th>
                      <th className="text-left p-3 bg-[#4A1942] text-white font-semibold">Best For</th>
                      <th className="text-left p-3 bg-[#4A1942] text-white font-semibold">Natural Look</th>
                      <th className="text-left p-3 bg-[#4A1942] text-white font-semibold rounded-tr-lg">Comfort</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-amber-50">
                      <td className="p-3 font-semibold text-[#4A1942]">Silk Base (Lace) ⭐</td>
                      <td className="p-3">Centre/side parting, highest-end clients</td>
                      <td className="p-3">⭐⭐⭐⭐⭐ Most natural</td>
                      <td className="p-3">⭐⭐⭐⭐ Excellent</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#4A1942]">Mono Top</td>
                      <td className="p-3">Breathable comfort, daily wear</td>
                      <td className="p-3">⭐⭐⭐⭐ Very natural</td>
                      <td className="p-3">⭐⭐⭐⭐⭐ Most breathable</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#4A1942]">Mesh Base (Lace)</td>
                      <td className="p-3">Full coverage, fastest blending</td>
                      <td className="p-3">⭐⭐⭐ Natural</td>
                      <td className="p-3">⭐⭐⭐⭐ Very breathable</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="not-prose grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    title: "Silk Base (Lace) ⭐ Most Popular",
                    color: "bg-[#4A1942]",
                    points: [
                      "100% hand-tied strands on lace",
                      "Scalp-like texture — undetectable parting",
                      "Premium quality, highest price point",
                      "Requires more care & maintenance",
                    ]
                  },
                  {
                    title: "Mono Top — Breathable",
                    color: "bg-[#7B3A6E]",
                    points: [
                      "Monofilament (mono) open-weave base",
                      "Excellent ventilation — great for daily wear",
                      "Natural-looking parting area",
                      "Mid-range price point",
                    ]
                  },
                  {
                    title: "Mesh Base — Lightweight",
                    color: "bg-[#5B3A6E]",
                    points: [
                      "Open lace mesh construction",
                      "Lightest weight of all bases",
                      "Fastest blending with natural hair",
                      "Best value option",
                    ]
                  },
                ].map(({ title, color, points }) => (
                  <div key={title} className="rounded-xl overflow-hidden">
                    <div className={`${color} text-white p-4 font-semibold text-sm`}>{title}</div>
                    <div className="bg-[#FDF8F0] p-4">
                      {points.map((p) => (
                        <div key={p} className="flex items-start gap-2 mb-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[#4A1942] shrink-0 mt-0.5" />
                          <span className="text-[#3D2314]">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Application Guide ──────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">How to Apply a Hair Topper in 4 Steps</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Unlike extensions, toppers require <strong>no professional training</strong>. Any stylist can apply one in under 5 minutes.
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-6 mb-10">
                {[
                  { step: "1", title: "Section the Hair", desc: "Create a horizontal part at the crown, roughly where the client&apos;s hair begins to thin. Use butterfly clips to isolate the section." },
                  { step: "2", title: "Open All Clips", desc: "Unfasten all pressure clips on the topper. Most toppers have 3-5 built-in clips for a secure, non-slip hold." },
                  { step: "3", title: "Position & Snap", desc: "Place the topper directly over the thinning zone. Align the front edge just behind the hairline. Snap clips onto natural hair as close to the scalp as possible." },
                  { step: "4", title: "Blend & Style", desc: "Use a tail comb to gently comb natural hair over the topper edges. Style as desired — curls, straight, or waves all work beautifully." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="bg-white border border-amber-100 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#4A1942] text-white flex items-center justify-center font-bold text-lg shrink-0">{step}</div>
                      <h3 className="font-semibold text-[#4A1942] text-lg">{title}</h3>
                    </div>
                    <p className="text-[#6B3A6E] text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* ── Pro Tips ─────────────────────────── */}
              <div className="bg-[#4A1942]/5 border border-[#4A1942]/10 rounded-2xl p-8 mb-10 not-prose">
                <h3 className="font-serif text-2xl font-medium text-[#4A1942] mb-4">💡 Pro Tips for Salon Stylists</h3>
                <ul className="space-y-3">
                  {[
                    "Always match the topper colour to the client's mid-lengths and ends — not the roots (roots are often darker)",
                    "Offer a free colour consultation before ordering — mixing 2 shades creates natural depth",
                    "Silk base is best for clients who wear their hair in a centre part — the lace is virtually invisible",
                    "Measure the coverage area before ordering — standard sizes are 6\" x 7\" or 7\" x 9\"",
                    "Keep 2-3 popular shades in stock for same-day consultations",
                    "Suggest a replacement schedule: Remy human hair toppers last 4-6 months with daily wear",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-[#3D2314]">
                      <span className="text-[#C9A84C] shrink-0 mt-1">→</span>
                      <span className="text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Hair Topper vs Wig vs Extensions ─── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Hair Topper vs Wig vs Extensions: Which to Choose?</h2>

              <div className="overflow-x-auto mb-10">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="text-left p-3 bg-[#4A1942] text-white font-semibold rounded-tl-lg">Feature</th>
                      <th className="text-left p-3 bg-[#4A1942] text-white font-semibold">Hair Topper ⭐</th>
                      <th className="text-left p-3 bg-[#4A1942] text-white font-semibold">Full Wig</th>
                      <th className="text-left p-3 bg-[#4A1942] text-white font-semibold rounded-tr-lg">Extensions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["Coverage area", "Crown & top only", "Full head", "Full head length"],
                      ["Application", "2 minutes — no training", "15-30 min", "2-4 hours pro"],
                      ["Damage risk", "Very low", "Very low", "Medium-High"],
                      ["Comfort", "Breathable", "Can feel hot", "Varies by method"],
                      ["Natural look", "Very natural", "Good", "Very natural"],
                      ["Client skill needed", "None — salon applies", "Some practice", "Professional only"],
                      ["Best for", "Thinning crown", "Complete hair loss", "Length + volume"],
                      ["Salon margin", "High (£150-300)", "Standard", "Varies"],
                    ].map(([feature, topper, wig, ext]) => (
                      <tr key={feature} className={feature === "Coverage area" ? "bg-amber-50" : ""}>
                        <td className="p-3 font-medium text-[#4A1942]">{feature}</td>
                        <td className="p-3 font-semibold text-[#4A1942]">{topper}</td>
                        <td className="p-3 text-[#6B3A6E]">{wig}</td>
                        <td className="p-3 text-[#6B3A6E]">{ext}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── Customer Cases ─────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Client Case Studies</h2>

              <div className="space-y-6 mb-10">
                {[
                  {
                    name: "Sarah, 38 — Manchester",
                    issue: "Postpartum hair loss after second child",
                    solution: "Silk Base Hair Topper #4 Medium Brown",
                    result: "Applied at the salon in under 5 minutes. Sarah was in tears — she said she hadn&apos;t felt confident enough to tie her hair back in 8 months. She returned 3 times over the following year for reorders.",
                    value: "Total revenue from one client: £900+",
                  },
                  {
                    name: "Emma, 54 — Cheshire",
                    issue: "Menopausal hair thinning at crown and parting",
                    solution: "Mono Top Hair Topper, ash brown blend",
                    result: "Emma had tried minoxidil with limited success. The topper gave her immediate confidence. She wears it daily and removes it at night — no commitment required.",
                    value: "Returning client every 5 months: £200/order",
                  },
                  {
                    name: "Chloe, 29 — Birmingham",
                    issue: "Genetic hair thinning (her mother had the same)",
                    solution: "Mesh Base Hair Topper + colour matching service",
                    result: "First salon experience — had never had extensions. Was amazed at how natural it looked. Referred 3 friends in the following month.",
                    value: "Direct referral value: 4 new clients",
                  },
                ].map(({ name, issue, solution, result, value }) => (
                  <div key={name} className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-[#4A1942] text-lg">{name}</h3>
                      <span className="text-xs bg-[#C9A84C]/20 text-[#4A1942] px-3 py-1 rounded-full font-medium">{value}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-[#7B3A6E] mb-1">Client Issue</div>
                        <p className="text-[#3D2314]">{issue}</p>
                      </div>
                      <div>
                        <div className="font-semibold text-[#7B3A6E] mb-1">Solution Recommended</div>
                        <p className="text-[#3D2314]">{solution}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="font-semibold text-[#7B3A6E] mb-1 text-sm">Outcome</div>
                      <p className="text-[#3D2314] text-sm leading-relaxed">{result}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Why Salons Should Stock Toppers ─── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why Every UK Salon Should Stock Hair Toppers</h2>

              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "🧲", title: "Massive Underserved Market", desc: "4 in 10 women experience noticeable hair thinning by age 40 — yet most salons don&apos;t offer solutions. Toppers fill that gap." },
                  { icon: "💰", title: "High-Ticket Sales", desc: "One topper service (£150-300) often exceeds a full-day colour appointment in revenue — with only 5 minutes of application time." },
                  { icon: "🔄", title: "Recurring Revenue", desc: "Clients return every 4-6 months for a replacement topper. Unlike extensions, topper clients don&apos;t need move-up appointments." },
                  { icon: "⭐", title: "Differentiation", desc: "Most UK salons don&apos;t offer hair toppers. Being known as &apos;the topper salon&apos; in your area = sustainable competitive advantage." },
                  { icon: "😊", title: "Life-Changing Impact", desc: "Restoring a client&apos;s confidence in 5 minutes is one of the most emotionally rewarding things a stylist can do. Strong word-of-mouth follows." },
                  { icon: "📦", title: "Zero Inventory Risk", desc: "Order only when a client commits. No stock holding, no waste. Supplier sends direct to client or salon." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                    <div className="text-2xl mb-2">{icon}</div>
                    <h3 className="font-semibold text-[#4A1942] mb-1">{title}</h3>
                    <p className="text-sm text-[#6B3A6E]">{desc}</p>
                  </div>
                ))}
              </div>

              {/* ── CTA Box ──────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Ready to Add Hair Toppers to Your Salon?
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  D.S Hair & Beauty supplies silk base, mono top, and mesh base toppers to professional salons across the UK. Trade pricing available. Free colour swatch kit with your first order.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/collections/hair-toppers">Browse Topper Collection</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <a href="https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20hair%20topper%20trade%20pricing." target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>

              {/* ── FAQ ─────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4 mb-12">
                {[
                  {
                    q: "How long does a hair topper last?",
                    a: "With proper care, a Remy human hair topper lasts 4-6 months with daily wear, and up to 12 months with occasional use. The clips may need replacing over time — they are inexpensive and easy to swap."
                  },
                  {
                    q: "Can clients wash and heat-style a hair topper?",
                    a: "Yes — 100% Remy human hair toppers can be washed, conditioned, and heat-styled just like natural hair. We recommend sulfate-free products and heat protection spray. Avoid oil-based products near the base."
                  },
                  {
                    q: "Do I need special training to apply a hair topper?",
                    a: "No. Unlike tape-in or K-tip extensions, hair toppers require no professional qualification. Any stylist can apply one in 2-5 minutes after a brief demonstration. Clients can also apply them independently at home."
                  },
                  {
                    q: "How do I colour match a hair topper?",
                    a: "Match to the client's mid-lengths and ends (not the roots). For balayage clients, we recommend mixing two shades — a base colour and a highlight shade. We offer free colour swatch kits for trade customers."
                  },
                  {
                    q: "Can hair toppers be cut and customised?",
                    a: "Absolutely. The base can be trimmed to fit smaller coverage areas, and the hair can be cut, layered, or styled to match the client's existing hair perfectly. This is one of the biggest advantages over wigs."
                  },
                ].map(({ q, a }) => (
                  <details key={q} className="group bg-white border border-amber-100 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-[#4A1942] list-none">
                      <span>{q}</span>
                      <span className="shrink-0 text-amber-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-[#6B3A6E] leading-relaxed border-t border-amber-50 pt-4">
                      {a}
                    </div>
                  </details>
                ))}
              </div>

              {/* ── Back to Blog ─────────────────────── */}
              <div className="pt-8 border-t">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> More Articles
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
