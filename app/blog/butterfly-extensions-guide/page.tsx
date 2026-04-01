import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, Users, TrendingDown, Sparkles } from "lucide-react"

export const metadata = {
  title: "Butterfly Weft Extensions Guide: Ultra-Thin Seamless Volume | D.S HAIR & BEAUTY",
  description: "Complete guide to butterfly weft hair extensions for UK salons. The ultra-thin 0.5mm base revolutionised the extension industry. Seamless, lightweight, professional.",
}

export default function ButterflyExtensionsGuide() {
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
                Butterfly Weft Extensions:<br />The Industry Game-Changer
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Butterfly wefts have transformed how UK salons approach volume and length — an ultra-thin 0.5mm base that is completely undetectable. Here's what every professional needs to know.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/collections/butterfly-extensions">Shop Now</Link>
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
                  { num: "0.5mm", label: "ultra-thin base" },
                  { num: "2 hr", label: "full head installation" },
                  { num: "£300-600", label: "service price range" },
                  { num: "100%", label: "seamless finish" },
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
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 8 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* ── What Is ──────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Are Butterfly Weft Extensions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Butterfly weft extensions feature an ultra-thin (0.5mm) patented weft base — thinner than any traditional weft on the market. The base is designed to fold over a client's hair and be secured with micro-beads or micro-links, creating an incredibly seamless and lightweight result.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The butterfly name comes from the shape of the weft base — wider and more spread out than traditional wefts, allowing for maximum coverage with minimal weight. The result is a weft extension that is virtually undetectable even under thin hair — a revolution in the extension industry.
              </p>

              {/* ── Hero Image ────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80"
                  alt="Butterfly weft hair extensions ultra-thin seamless"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Who Is It For ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Who Are Butterfly Weft Extensions Best For?</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Fine to Medium Hair",
                    desc: "Butterfly wefts are specifically designed for clients with fine to medium hair — where traditional wefts would be too bulky or visible.",
                  },
                  {
                    icon: <TrendingDown className="h-5 w-5" />,
                    title: "Volume-Maximisers",
                    desc: "A single butterfly weft covers a large area with minimal bulk. Perfect for clients who want dramatic volume without the weight.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "Seamless Finish Seekers",
                    desc: "If a client has been disappointed by visible weft tracks from other methods, butterfly wefts are the answer.",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    title: "Time-Pressed Clients",
                    desc: "Butterfly weft installation takes approximately 2 hours — significantly faster than hand-tied weft or individual strand methods.",
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why Butterfly Wefts Are the UK's Fastest Growing Extension</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "👁️", title: "Completely Invisible", desc: "The 0.5mm base is thinner than a credit card. Even professional stylists struggle to find a well-applied butterfly weft." },
                  { icon: "🪶", title: "Ultra-Lightweight", desc: "Butterfly wefts distribute weight across a wide area — meaning no pressure points, no discomfort, no scalp strain." },
                  { icon: "⏱️", title: "Fast Installation", desc: "2-hour installation vs 3-4 hours for hand-tied wefts. More clients can afford the service at this price point." },
                  { icon: "💰", title: "Premium Revenue", desc: "Butterfly weft services command £300-600 per installation — premium pricing for a premium result." },
                  { icon: "🔄", title: "Recurring Maintenance", desc: "Butterfly wefts require maintenance every 8-12 weeks — regular recurring revenue throughout the year." },
                  { icon: "🧲", title: "Versatile Installation", desc: "Can be installed via micro-bead, micro-link, or sewn-in. Maximum flexibility for salon professionals." },
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
                    "Butterfly wefts must NEVER be cut without sealing the cut edge. Use a flame lighter or weft sealer immediately after cutting — otherwise the weft will unravel.",
                    "The fold-over technique is critical. The weft must fold cleanly over the hair section — not around it. Practice on mannequin heads before working on clients.",
                    "Butterfly wefts work best with 2-4 wefts per full head. More than 4 creates unnecessary bulk for most clients.",
                    "For balayage clients, stock pre-coloured butterfly wefts in a variety of balayage shades. Over 60% of clients want some colour depth.",
                    "Recommend a weekly detangling spray and wide-tooth comb for aftercare. Butterfly wefts tangle less than individual extensions but still need daily maintenance.",
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
                  Add Butterfly Weft Extensions to Your Salon
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  D.S Hair & Beauty supplies butterfly weft extensions to professional UK salons. Ultra-thin 0.5mm base, 100% Remy human hair, 50+ shades, wholesale pricing available.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/collections/butterfly-extensions">Browse Collection</Link>
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