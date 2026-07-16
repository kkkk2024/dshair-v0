import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, Sparkles, CheckCircle, XCircle } from "lucide-react"

export const metadata = {
  title: "Remy Hair vs Non-Remy Hair: What's the Difference? | D.S HAIR & BEAUTY",
  description: "Remy vs non-Remy hair extensions explained. Learn why 100% Remy human hair is worth the investment for UK salons, and how to spot the difference before you buy.",
  openGraph: {
    title: "Remy Hair vs Non-Remy Hair: What's the Difference? | D.S HAIR & BEAUTY",
    description: "Remy vs non-Remy hair extensions explained. Learn why 100% Remy human hair is worth the investment for UK salons, and how to spot the difference before you buy.",
    url: "https://www.dshairbeauty.co.uk/blog/remy-vs-nonremy-hair-guide",
    siteName: "D.S HAIR & BEAUTY",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Remy vs Non-Remy hair extensions comparison",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-05-01",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/remy-vs-nonremy-hair-guide",
  },
}

export default function RemyVsNonRemyGuide() {
  return (
    <CartProvider>
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
                "headline": "Remy Hair vs Non-Remy Hair: What's the Difference?",
                "description": "Remy vs non-Remy hair extensions explained. Learn why 100% Remy human hair is worth the investment for UK salons.",
                "url": "https://www.dshairbeauty.co.uk/blog/remy-vs-nonremy-hair-guide",
                "datePublished": "2026-05-01",
                "author": { "@type": "Organization", "name": "D.S HAIR & BEAUTY" },
                "publisher": { "@type": "Organization", "name": "D.S HAIR & BEAUTY" },
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
                <Sparkles className="h-4 w-4" /> Education Guide
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                Remy Hair vs Non-Remy Hair:<br />What's Really Worth Your Money?
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Confused by the hair quality claims? This guide cuts through the marketing — explaining exactly what Remy means, why it costs more, and how UK salons can buy with confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/collections/all">Shop Remy Hair Extensions</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/trade-wholesale">Trade Account</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ── Quick Comparison ─────────────────────── */}
          <section className="bg-[#FDF8F0] border-y border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold text-green-800">Remy Human Hair</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {["Cuticles intact & all in one direction", "Natural shine and movement", "Lasts 12–24 months with proper care", "Can be heat-styled, coloured & washed", "Blends seamlessly with natural hair", "Higher initial cost, better long-term value"].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="h-6 w-6 text-red-600" />
                    <h3 className="text-xl font-bold text-red-800">Non-Remy Human Hair</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {["Cuticles removed or mixed direction", "Can tangle and mat quickly", "Typically lasts 1–3 months", "Limited heat styling, fades fast", "May look dull or frizzy over time", "Lower price but poor longevity"].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <span className="bg-[#4A1942]/10 text-[#4A1942] rounded-full px-3 py-1 font-medium">Education</span>
              <span>Updated May 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 7 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* ── What Is Remy ───────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Exactly Is "Remy" Hair?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Remy hair refers to human hair where the cuticle layer — the outermost protective layer of each strand — remains <strong>completely intact</strong> and all strands are aligned in the <strong>same direction</strong> (root to tip). This matters enormously for how the hair looks and behaves.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                When cuticles are intact and aligned, hair reflects light naturally, feels smooth when you run your fingers down it, and doesn't tangle easily. That's exactly what clients want — and exactly what Remy hair delivers.
              </p>

              {/* ── The Process ────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">How Remy Hair Is Collected</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Remy hair is typically sourced from a single donor — often in a ponytail or braid cut, which keeps all the cuticles going the same way from root to tip. The hair is then carefully processed without stripping the cuticles or reversing the direction of any strands.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Non-Remy hair, by contrast, is often collected from hair brushes, floor sweepings at salons, or multiple donors — meaning cuticles face different directions. Without intact cuticles, the hair loses its natural protective layer, becomes prone to tangling, and sheds more quickly.
              </p>

              {/* ── Visual Guide ───────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">How to Identify Remy Hair (Before You Buy)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">When evaluating hair extensions, run these quick tests:</p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <ol className="space-y-4">
                  {[
                    ["The Strand Test", "Run your fingers from root to tip. Remy hair feels smooth in both directions. Non-Remy often catches going up."],
                    ["The Water Test", "Dip a strand in water. Remy hair absorbs moisture evenly and returns to texture after drying. Non-Remy may feel waxy or overly soft."],
                    ["Check the Price", "If the price seems too good to be true for '100% human hair', it probably is. Quality Remy has a real production cost."],
                    ["Ask About Sourcing", "Reputable suppliers (like D.S HAIR & BEAUTY) will specify the origin. We source from ethical donors and never mix in synthetic fibres."],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex gap-4">
                      <span className="text-amber-600 font-bold shrink-0">→</span>
                      <div>
                        <strong>{title}:</strong> {desc}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ── Why It Matters for Salons ─────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why It Matters for UK Salons</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For salon owners and stylists, the Remy vs non-Remy decision isn't just about quality — it's about your reputation and your bottom line.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Non-Remy hair may save money upfront, but clients will notice tangling, shedding, and a dull appearance within weeks. Word spreads fast, especially in the age of Google reviews. Investing in Remy hair means fewer client complaints, better before-and-after photos, and referrals.
              </p>

              {/* ── D.S Commitment ────────────────── */}
              <div className="bg-[#4A1942]/5 rounded-2xl p-8 my-12 border border-[#4A1942]/20">
                <h3 className="font-serif text-2xl font-medium mb-4">Our Commitment to 100% Remy Hair</h3>
                <p className="text-muted-foreground mb-6">
                  Every hair extension sold by D.S HAIR & BEAUTY is 100% Remy human hair. We source directly from verified suppliers, test our batches regularly, and never blend in synthetic fibres or non-Remy strands.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Double-drawn Remy human hair", "Cuticle-aligned for zero tangling", "Ethically sourced donors", "Tested for colour fastness and durability", "Trade pricing available for salons"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-[#4A1942]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-[#4A1942] hover:bg-[#3a1335] text-white" asChild>
                  <Link href="/collections/all">View Our Collection</Link>
                </Button>
              </div>

              {/* ── FAQ ───────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  ["Is 'Virgin Remy' better than Remy?", "Virgin Remy means the hair has never been chemically processed (dyed, bleached, or permed). It's the purest form. D.S HAIR & BEAUTY offers both natural and coloured Remy options."],
                  ["Can non-Remy hair still look good?", "Initially, yes. But within 4–8 weeks, non-Remy hair typically starts tangling, shedding, and losing shine. The total cost per wear is much higher than Remy."],
                  ["How long does Remy hair last?", "With proper care (using extension-safe products, avoiding excessive heat), Remy clip-ins can last 12–24 months. Professional bonded or taped Remy extensions last 3–6 months per application."],
                  ["Does Remy hair come in different grades?", "Yes. Look for 'Single-Drawn' (varying strand lengths) vs 'Double-Drawn' (uniform thickness from root to tip). Double-Drawn Remy is thicker and more premium — we use double-drawn in our professional ranges."],
                ].map(([q, a]) => (
                  <div key={q} className="border-b border-gray-200 pb-4">
                    <h3 className="font-medium text-lg mb-2">{q}</h3>
                    <p className="text-muted-foreground">{a}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* ── CTA ─────────────────────────────── */}
            <div className="mt-16 bg-gradient-to-r from-[#4A1942] to-[#7B3A6E] rounded-2xl p-8 md:p-12 text-center text-white">
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">Ready to Stock 100% Remy Hair?</h3>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Open a trade account with D.S HAIR & BEAUTY for wholesale pricing, bulk orders, and dedicated salon support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/trade-wholesale">Open Trade Account</Link>
                </Button>
                <Button variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                  <Link href="/collections/all">Browse Full Range</Link>
                </Button>
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
