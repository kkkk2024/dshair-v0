import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, Users, TrendingDown, Sparkles } from "lucide-react"

export const metadata = {
  title: "Weft Hair Extensions Guide: Hand-Tied vs Machine | D.S HAIR & BEAUTY",
  description: "Complete guide to weft hair extensions for UK salons. Hand-tied vs machine weft explained. How to apply, price, and source wholesale.",
}

export default function WeftExtensionsGuide() {
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
                Weft Extensions:<br />The Professional's Choice
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Hand-tied or machine-made, weft extensions deliver maximum volume and length with fewer installation points than any other method. Here's what every UK salon needs to know.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/collections/weft-extensions">Shop Now</Link>
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
                  { num: "3x", label: "more volume per installation" },
                  { num: "50+", label: "shades available" },
                  { num: "12 mo", label: "average lifespan" },
                  { num: "30%", label: "less cost vs individual extensions" },
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Are Weft Hair Extensions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A weft is a continuous strand of hair sewn or tied onto a thin track (the weft). Unlike individual strand extensions, a single weft covers a wide section of the scalp — making installation faster, more affordable, and capable of creating dramatic volume.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                There are two main types: machine-made weft (the most affordable, sewn track), and hand-tied weft (ultra-thin, hand-sewn strands for the most seamless, lightweight result). Both are hugely popular in UK professional salons.
              </p>

              {/* ── Hero Image ────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80"
                  alt="Weft hair extensions salon application"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Who Is It For ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Who Are Weft Extensions Best For?</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Volume-Maximisers",
                    desc: "Clients who want dramatic fullness — wefts deliver 3x more volume per installation than any individual strand method.",
                  },
                  {
                    icon: <TrendingDown className="h-5 w-5" />,
                    title: "Thick-Haired Clients",
                    desc: "Wefts need a strong anchor. They work beautifully on clients with medium-to-thick natural hair.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "Budget-Conscious Clients",
                    desc: "Per gram of hair, wefts are the most cost-effective method. More hair for less money.",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    title: "Long-Term Wearers",
                    desc: "Clients who want extensions for several months at a time benefit most from the durability and value of wefts.",
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why Weft Extensions Are a Salon Essential</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "💰", title: "Premium Revenue", desc: "Hand-tied weft services command £400-800 per installation. Highest revenue per appointment of any extension method." },
                  { icon: "⏱️", title: "Faster Install", desc: "Fewer attachment points means weft installation takes 1.5-2 hours vs 3-4 hours for individual methods." },
                  { icon: "📈", title: "Recurring Revenue", desc: "Clients return every 8-12 weeks for maintenance. That's 4-5 appointments per client per year." },
                  { icon: "🧲", title: "Wide Appeal", desc: "Works for almost every client — fine hair, medium hair, thick hair. More versatile than K-tip or tape-in alone." },
                  { icon: "🔧", title: "Multiple Methods", desc: "Wefts can be installed via micro-beads, sew-in, or micro-link — giving salons flexibility in technique." },
                  { icon: "⭐", title: "Trending Strongly", desc: "Hand-tied weft is the #1 fastest-growing extension method in UK professional salons in 2024-2025." },
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
                    "Hand-tied wefts must be cut by a professional. Never let clients cut their own wefts — precision cutting is what creates the seamless blend.",
                    "Machine wefts can be folded over for micro-bead installation. Hand-tied wefts must NOT be folded — they need micro-link or sew-in only.",
                    "Always check for tangling at the weft base. Use a wide-tooth comb daily and recommend a detangling spray for at-home maintenance.",
                    "Balayage wefts are extremely popular — over 70% of clients want some colour depth. Stock pre-coloured balayage wefts to capture this demand.",
                    "Measure head circumference before ordering. Standard weft widths need to be cut to fit — ordering the right size avoids waste.",
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
                  Source Premium Weft Extensions for Your Salon
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  D.S Hair & Beauty supplies both hand-tied and machine-made weft extensions to professional UK salons. Wholesale pricing available. Free colour swatch kit with first order.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/collections/weft-extensions">Browse Collection</Link>
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
                  { q: "__FAQ_Q1__", a: "__FAQ_A1__" },
                  { q: "__FAQ_Q2__", a: "__FAQ_A2__" },
                  { q: "__FAQ_Q3__", a: "__FAQ_A3__" },
                  { q: "__FAQ_Q4__", a: "__FAQ_A4__" },
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