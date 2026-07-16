import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, Users, TrendingDown, Sparkles } from "lucide-react"

export const metadata = {
  title: "Ponytail Hair Extensions Guide: Instant Glam Ponytails | D.S HAIR & BEAUTY",
  description: "Complete guide to ponytail hair extensions for UK salons. Instant length and volume for ponytails, buns, and braided styles. 100% Remy human hair.",
}

export default function PonytailExtensionsGuide() {
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
                Ponytail Extensions:<br />One Clip, Total Transformation
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Ponytail extensions are the secret weapon of professional salons — instant length, volume, and glamour in one simple clip. Here's what every stylist needs to know.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/collections/ponytails">Shop Now</Link>
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
                  { num: "30 sec", label: "application time" },
                  { num: "5+", label: "styles in one set" },
                  { num: "100%", label: "Remy human hair" },
                  { num: "£80-200", label: "average client spend" },
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
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 6 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* ── What Is ──────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Are Ponytail Extensions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A ponytail extension (also called a hair scrunchie or wrap-around ponytail) is a length of hair attached to a hidden comb and wrap band — designed to wrap around a client's natural ponytail for instant length, thickness, and volume.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Unlike other extension methods, ponytail extensions are designed to be visible as part of the hairstyle — not hidden underneath. This makes them uniquely versatile: wear a sleek high ponytail one day, a voluminous bun the next, or add extra length for a braided style.
              </p>

              {/* ── Hero Image ────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80"
                  alt="Ponytail hair extensions styled updo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Who Is It For ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Who Are Ponytail Extensions Best For?</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "The Ponytail Lover",
                    desc: "Clients who wear their hair up every day and want a fuller, longer, more dramatic ponytail.",
                  },
                  {
                    icon: <TrendingDown className="h-5 w-5" />,
                    title: "Special Occasions",
                    desc: "Brides, bridesmaids, and party guests who want a special updo look without committing to full extensions.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "Hair Loss Clients",
                    desc: "Clients experiencing hair thinning can use ponytail extensions as a non-invasive way to add coverage and volume.",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    title: "Gym-to-Glam Clients",
                    desc: "Perfect for active women who want a sleek ponytail for workouts but need instant glamour for evening events.",
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why Salons Should Stock Ponytail Extensions</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "⚡", title: "Lightning Fast", desc: "Apply in under 30 seconds. No appointment needed. Walk-in sale — pure retail revenue." },
                  { icon: "🧲", title: "Massive Market", desc: "The ponytail is the #1 most popular hairstyle worldwide. Every woman is a potential ponytail extension customer." },
                  { icon: "💰", title: "High Margin", desc: "Ponytail extensions sell for £80-200. No service appointment required — just retail product sales." },
                  { icon: "🔄", title: "Repeat Purchases", desc: "Different colours for different outfits, seasons, or occasions. Clients often buy 3-5 ponytails." },
                  { icon: "😊", title: "Instant Wow", desc: "Client sees total transformation the moment it's clipped on. No waiting, no appointment anxiety." },
                  { icon: "📦", title: "Easy Retail", desc: "No sizing issues, minimal colour matching complexity. One-size-fits-all, 8-10 core shades cover most needs." },
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
                    "Colour match to the client's mid-lengths and ends, not the roots. Ponytails are worn up, so the visible hair is usually mid-lengths downward.",
                    "Demonstrate the wrap-around technique in the salon. Once clients see how easy it is, they'll buy confidently.",
                    "Cross-sell a scrunchie or hair tie in the same colour. Many clients prefer to cover the wrap band with a statement scrunchie.",
                    "For braided styles, show clients how to wrap the ponytail in layers for a natural, voluminous result.",
                    "Offer matching hair bands and styling combs. Accessories add £10-20 to the sale with near-zero cost.",
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
                  Add Ponytail Extensions to Your Salon Range
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  D.S Hair & Beauty supplies premium Remy human hair ponytail extensions to UK salons. Wholesale pricing available. Available in 30+ shades.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/collections/ponytails">Browse Collection</Link>
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
                  { q: "How long does a ponytail extension last with proper care?", a: "With daily wear and gentle handling, a quality Remy human hair ponytail extension typically lasts 3–6 months. The hair itself can last longer if cared for properly, but the construction (the loop or grip mechanism) wears out with daily use. Advise clients to remove and store it carefully each night to maximise lifespan." },
                  { q: "Can I colour-match a ponytail extension to match highlighted hair?", a: "Yes — but the approach matters. For multi-tonal hair, match to the DOMINANT colour at the roots. You can also customise by purchasing a base colour and having a Colourist blend lowlights or highlights into the extension. We recommend consulting with your colour specialist to create a seamless match for your client's unique hair." },
                  { q: "What's the best way to upsell ponytail extensions in salon?", a: "Position ponytail extensions as an instant transformation tool for special occasions, daily volume, or transitional haircuts. Show clients the before-and-after difference. Offer a styling service — curl, sleek straight, or braided — to demonstrate versatility. Many clients who are nervous about commitment extensions love ponytails as a gateway product." },
                  { q: "How do I attach a ponytail extension for the most secure hold?", a: "For maximum security, create two low ponytails and feed the extension through both, then wrap and pin. For thick hair, backcomb the natural ponytail and position the extension underneath before securing. For updos, thread the extension through a French twist or braided bun. Always use hidden pins and strong hair ties to ensure all-day hold." },
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