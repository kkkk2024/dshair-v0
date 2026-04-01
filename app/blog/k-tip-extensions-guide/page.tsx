import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, Users, TrendingDown, Sparkles } from "lucide-react"

export const metadata = {
  title: "K-Tip Hair Extensions Guide: Keratin Bond Excellence | D.S HAIR & BEAUTY",
  description: "Complete guide to K-tip (keratin tip) hair extensions for UK salons. Longest-lasting method, most natural result, highest revenue per appointments.",
}

export default function KTipExtensionsGuide() {
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
                K-Tip Extensions:<br />The Premium Long-Term Solution
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                K-tip (keratin tip) extensions are the gold standard for natural-looking, long-lasting extensions. Here's everything UK salon professionals need to know.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/collections/k-tip-extensions">Shop Now</Link>
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
                  { num: "3-4 mo", label: "between maintenance" },
                  { num: "100%", label: "Remy human hair" },
                  { num: "4 hr", label: "average installation" },
                  { num: "£400-800", label: "service price range" },
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
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 9 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* ── What Is ──────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Are K-Tip Extensions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                K-tip extensions (also called keratin tip, fusion, or bonded extensions) consist of individual strands of hair with a small keratin bond at the top, shaped like a small 'K' or teardrop. The stylist uses a heat tool to melt the keratin bond and fuse it to a section of natural hair.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                K-tips are the most natural-looking of all extension methods — because each strand is individual, they move and flow exactly like natural hair. No weft tracks, no flat bonds. Just single strands fused seamlessly to natural hair.
              </p>

              {/* ── Hero Image ────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80"
                  alt="K-tip hair extensions keratin bond salon application"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Who Is It For ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Who Are K-Tip Extensions Best For?</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Medium-to-Thick Hair",
                    desc: "K-tips need enough hair to bond to. They work best on clients with medium to thick natural hair — not suitable for very fine hair.",
                  },
                  {
                    icon: <TrendingDown className="h-5 w-5" />,
                    title: "Long-Term Commitment",
                    desc: "K-tips last 3-4 months per installation. Best suited for clients who want a semi-permanent solution and are committed to maintenance appointments.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "Maximum Naturality",
                    desc: "For clients who want extensions that are truly undetectable — K-tips are the gold standard. Each strand moves naturally.",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    title: "Length-Only Clients",
                    desc: "K-tips are perfect for clients who want length without added volume — they can add dramatic length with minimal thickness increase.",
                  },
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

              {/* ── Key Benefits ──────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why K-Tip Extensions Command Premium Pricing</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "⭐", title: "Most Natural Look", desc: "Individual strands fused to natural hair. No wefts, no tracks, no flat bonds. 100% undetectable when properly applied." },
                  { icon: "💰", title: "Highest Revenue", desc: "K-tip services command £400-800 per installation — the highest of any extension method. This reflects the skill and time required." },
                  { icon: "🔄", title: "Long Maintenance Cycle", desc: "K-tips only need maintenance every 3-4 months. Fewer appointments but higher value per visit." },
                  { icon: "🧲", title: "No Damage", desc: "When applied correctly, K-tips are one of the least damaging methods — no beads, no tape, no braids. Just pure keratin fused to hair." },
                  { icon: "⏱️", title: "Precision Application", desc: "Every strand is placed individually — stylists have complete control over placement, direction, and blend." },
                  { icon: "🔧", title: "Customisable", desc: "K-tips can be placed anywhere on the head, in any direction. Perfect for targeted coverage or adding density to specific areas." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                    <div className="text-2xl mb-2">{icon}</div>
                    <h3 className="font-semibold text-[#4A1942] mb-1">{title}</h3>
                    <p className="text-sm text-[#6B3A6E]">{desc}</p>
                  </div>
                ))}
              </div>

              {/* ── Pro Tips ─────────────────────────── */}
              <div className="bg-[#4A1942]/5 border border-[#4A1942]/10 rounded-2xl p-8 mb-10 not-prose">
                <h3 className="font-serif text-2xl font-medium text-[#4A1942] mb-4">Pro Tips for Salon Stylists</h3>
                <ul className="space-y-3">
                  {[
                    "Keratin bonds must be heated to the correct temperature — too hot damages the natural hair inside the bond, too cool means poor adhesion. Invest in a quality heat tool.",
                    "Pre-bond conditioning is essential. The keratin bond must be clean and completely dry before application. Any moisture destroys the fusion.",
                    "K-tip aftercare is critical. Recommend a keratin-friendly shampoo and absolutely no oil-based products near the bonds.",
                    "Never place K-tips in the nape area or along the hairline. These areas experience the most movement and friction — bonds will slip.",
                    "Recommend clients sleep with a silk pillowcase. Cotton causes friction that tangles extensions faster. Silk pillowcases extend the life of K-tips by weeks.",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-[#3D2314]">
                      <span className="text-[#C9A84C] shrink-0 mt-1">&#x2192;</span>
                      <span className="text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── CTA Box ──────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Add K-Tip Extensions to Your Salon Services
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  D.S Hair & Beauty supplies premium K-tip (keratin tip) extensions to professional UK salons. 100% Remy human hair, wholesale pricing, free colour consultation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/collections/k-tip-extensions">Browse Collection</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <a href="https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing." target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>

              {/* ── FAQ ─────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4 mb-12">
                {[
                  { q: "What tips do you have for matching K-tip extension colours for clients with grey hair?", a: "Grey hair requires matching to the CLIENT's natural tone — not their grey coverage needs. For clients going grey who want to maintain their length, blend grey-matching extensions with their remaining natural colour. For clients covering grey entirely, match the pre-grey tone. Always take photos in natural light and use your colour swatches. Some stylists order two-tone sets (root + silver) for a natural grey coverage effect." },
                  { q: "Can K-tip extensions be applied by clients themselves, or do they need a professional?", a: "Professional application is STRONGLY recommended. K-tip application requires a heat tool (200–230°C) to melt the keratin bond, precise sectioning, and trained technique to avoid damage. Incorrect DIY application causes matting, traction alopecia, and irreversible damage. This makes K-tip extensions a premium salon-exclusive service — clients must return to you for application, fills, and removal." },
                  { q: "How durable are keratin bonds, and what causes them to fail?", a: "Well-applied keratin bonds are extremely durable — the bond can last 4–6 months with proper care. Bonds fail due to: excessive heat exposure (saunas, hot tools at the bond), oil-based products dissolving the keratin, mechanical stress from tight hairstyles, or improper application temperature. Educating clients on aftercare dramatically reduces bond failure rates and callbacks." },
                  { q: "How do I charge premium prices for K-tip extension services?", a: "K-tip extensions are the most premium semi-permanent method. Justify higher prices with: consultation and colour-matching service, premium Remy human hair quality, professional-grade application time (2–4 hours), long-lasting results (4–6 months), and a comprehensive aftercare plan. Offer K-tip installs as a 'luxury experience' including champagne, a styling session, and a take-home aftercare kit." },
                ].map(({ q, a }) => (
                  <details key={q} className="group bg-white border border-amber-100 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-[#4A1942] list-none">
                      <span>{q}</span>
                      <span className="shrink-0 text-amber-500 group-open:rotate-180 transition-transform">&#x25BC;</span>
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