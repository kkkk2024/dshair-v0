import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, Users, TrendingDown, Sparkles } from "lucide-react"

export const metadata = {
  title: "Clip-In Hair Extensions Guide: Instant Length & Volume in Minutes | D.S HAIR & BEAUTY",
  description: "Complete guide to clip-in hair extensions for UK salons. How to fit, blend, and sell clip-ins to clients. 100% Remy human hair, instant results.",
}

export default function ClipInExtensionsGuide() {
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
                Clip-In Extensions:<br />Instant Volume, Zero Commitment
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Everything salons and clients need to know about clip-in hair extensions — how to apply, blend, care for, and when to recommend clip-ins over other methods.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/collections/clip-in-extensions">Shop Now</Link>
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
                  { num: "5 min", label: "application time" },
                  { num: "100%", label: "damage-free" },
                  { num: "12 mo", label: "average lifespan" },
                  { num: "3x", label: "more volume instantly" },
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Are Clip-In Hair Extensions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Clip-in hair extensions are the simplest, most accessible extension method available. They consist of wefts of hair with small pressure clips attached — the stylist or client simply clips them onto natural hair, section by section, for instant length and volume.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Unlike bonded, taped, or sewn-in methods, clip-ins require no professional installation. They can be applied and removed in minutes, making them ideal for clients who want flexibility — wear them for a special occasion and remove them when they don't need them.
              </p>

              {/* ── Hero Image ────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80"
                  alt="Clip-in hair extensions being applied"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Who Is It For ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Who Are Clip-Ins Best For?</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Special Occasion Clients",
                    desc: "Perfect for weddings, proms, parties, photoshoots — anywhere a client wants dramatic transformation for one day only.",
                  },
                  {
                    icon: <TrendingDown className="h-5 w-5" />,
                    title: "Volume Seekers",
                    desc: "Clients with naturally thin hair who want to add body and fullness without commitment to permanent extensions.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "Length Experimenters",
                    desc: "Want to test-drive longer hair before committing to a permanent extension method? Clip-ins are the perfect trial.",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    title: "First-Time Extension Users",
                    desc: "No training needed, no risk of damage, no commitment. The ideal starting point for nervous first-timers.",
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why Stock Clip-In Extensions in Your Salon?</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "🧲", title: "Massive Market", desc: "DIY extension market worth £200M+ in the UK. Stock the professional-grade product clients can't find in shops." },
                  { icon: "💰", title: "High Ticket", desc: "One quality clip-in set sells for £150-400. No appointment needed — pure retail revenue." },
                  { icon: "🔄", title: "Repeat Business", desc: "Clients return every 12-18 months when their set wears out. Consistent, predictable revenue." },
                  { icon: "⚡", title: "Zero Skill Barrier", desc: "No professional training required to fit. Any stylist can demonstrate and sell clip-ins." },
                  { icon: "😊", title: "Instant Gratification", desc: "Client walks out with completely different hair — in under 10 minutes. Guaranteed wow moment." },
                  { icon: "📦", title: "No Inventory Risk", desc: "Order on demand. Keep popular shades in stock for immediate fulfilment." },
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
                    "Always match clip-in colour to the mid-lengths and ends — not the roots. Roots are often darker due to sun exposure.",
                    "Offer a free fitting session with every clip-in purchase. It builds trust and opens the door to upselling other services.",
                    "Stock 3 length options (16\", 18\", 20\") in your most popular 8-10 shades. This covers 90% of client needs.",
                    "Show clients how to blend their natural hair over the clips using a tail comb. Seamless blending is the key to a natural look.",
                    "Recommend heat styling with protection spray. Remy human hair clip-ins can be curled and straightened just like natural hair.",
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
                  Add Clip-In Extensions to Your Salon Today
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  D.S Hair & Beauty supplies premium 100% Remy human hair clip-ins to UK salons. Wholesale pricing available. Order sample sets to see the quality firsthand.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/collections/clip-in-extensions">Browse Collection</Link>
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