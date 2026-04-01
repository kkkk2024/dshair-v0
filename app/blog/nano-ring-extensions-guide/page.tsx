import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, Users, TrendingDown, Sparkles } from "lucide-react"

export const metadata = {
  title: "Nano Ring Hair Extensions Guide: The Smallest, Most Discrete Method | D.S HAIR & BEAUTY",
  description: "Complete guide to nano ring (nano link) hair extensions for UK salons. Ultra-small bonds for fine hair, virtually invisible, no heat, no glue.",
}

export default function NanoRingExtensionsGuide() {
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
                Nano Ring Extensions:<br />Virtually Invisible. Zero Heat.
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Nano ring extensions use the smallest bonds of any extension method — making them the perfect choice for fine-haired clients. Here's what UK salon professionals need to know.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/collections/nano-ring-extensions">Shop Now</Link>
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
                  { num: "90%", label: "smaller than micro-beads" },
                  { num: "3 hr", label: "average installation" },
                  { num: "8-10 wks", label: "between maintenance" },
                  { num: "100%", label: "no heat, no glue" },
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Are Nano Ring Extensions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nano ring extensions (also called nano link or micro link extensions) use tiny metal rings — approximately 3-4mm in diameter — to clamp a weft or strand of hair to a section of natural hair. The ring is crimped closed with pliers, holding the extension securely without heat or adhesive.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nano rings are the smallest bond of any extension method — up to 90% smaller than traditional micro-beads. This makes them ideal for fine-haired clients where larger bonds would be visible. They are also the preferred method for clients who want to avoid heat or glue.
              </p>

              {/* ── Hero Image ────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"
                  alt="Nano ring hair extensions application fine hair"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Who Is It For ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Who Are Nano Ring Extensions Best For?</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Fine Hair Clients",
                    desc: "Nano rings are specifically designed for clients with fine to thin hair — where larger methods show or weigh down the hair excessively.",
                  },
                  {
                    icon: <TrendingDown className="h-5 w-5" />,
                    title: "Sensitive Scalps",
                    desc: "No heat, no glue, no adhesive. The metal ring is hypoallergenic and gentle on sensitive scalps.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "First-Time Extenders",
                    desc: "The process is straightforward, non-invasive, and the bonds are easily maintained. Great entry point for extension beginners.",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    title: "Upstyle Lovers",
                    desc: "Because the rings are so small, nano ring extensions are virtually invisible even in updos, braids, and ponytails.",
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why Nano Ring Extensions Are Growing in Popularity</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "👁️", title: "Ultra-Invisible", desc: "3-4mm rings are barely visible even to a professional. Perfect for clients who want maximum discretion." },
                  { icon: "🔧", title: "No Heat, No Glue", desc: "Completely adhesive-free installation. Just metal rings and pliers. Safe for all hair types and textures." },
                  { icon: "⏱️", title: "Quick Maintenance", desc: "Nano ring maintenance takes less time than tape-in or K-tip. Typically 1-2 hours for a full re-tension." },
                  { icon: "🔄", title: "Reusable Rings", desc: "The metal rings are reusable — simply open, re-clamp during maintenance. Cost-effective for both salon and client." },
                  { icon: "💰", title: "Premium Revenue", desc: "Nano ring services typically cost £250-450 per installation. Excellent recurring revenue with 8-10 week maintenance cycle." },
                  { icon: "🧲", title: "Versatile Application", desc: "Nano rings can hold weft, tape-in weft, or single strands — making them incredibly versatile across different client needs." },
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
                    "Nano rings are small — invest in quality micro pliers designed for nano ring application. Poor tools cause inconsistent results and client discomfort.",
                    "Place nano rings approximately 1-2mm from the scalp. Too far away and they show; too close and they pull.",
                    "Always use matching nano ring colour to the client's hair — copper, silver, and black rings should all be in your stock.",
                    "For fine-haired clients, use fewer strands per section. 30-40 strands per weft is sufficient — more creates bulk that fine hair can't support.",
                    "Recommend a silicone serum for aftercare. Nano rings can create friction — a lightweight serum reduces this and extends extension life.",
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
                  Add Nano Ring Extensions to Your Salon Today
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  D.S Hair & Beauty supplies nano ring extensions to professional UK salons. Ultra-small 3mm rings, 100% Remy human hair, 30+ shades, wholesale pricing available.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/collections/nano-ring-extensions">Browse Collection</Link>
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
                  { q: "Why are nano ring extensions considered the most invisible option?", a: "Nano rings are the smallest extension bonds available — approximately 3mm in diameter compared to 4–5mm for micro rings. This makes them virtually undetectable even on very thin or fine hair. They lie flat against the scalp and can be hidden under short layers. For clients with fine hair who want extensions but are concerned about visibility, nano rings are the best recommendation." },
                  { q: "How soon can clients return for a nano ring fill appointment?", a: "Nano ring fills are typically needed every 6–8 weeks as the natural hair grows. During a fill, new sections are added with fresh rings in the new growth area while some of the older rings are removed and recycled (if the hair is still in good condition). A typical fill takes 1–2 hours. Schedule fills in advance to maintain the client's appointment calendar." },
                  { q: "What's the difference between nano rings and micro rings for my clients?", a: "Nano rings (3mm) are smaller and more discreet — ideal for fine to medium hair, short haircuts, or clients who want the most invisible result. Micro rings (4–5mm) are slightly more visible but faster to apply and can hold more hair per section — better for medium to thick hair or clients needing maximum volume. Both methods are heat-free, making them safer than keratin bonds for fine hair." },
                  { q: "How do I care for nano ring extensions during the aftercare consultation?", a: "Show clients how to brush gently from ends to roots using a specialist extension brush. Advise against sleeping with wet hair and recommend a silk pillowcase to reduce friction. Remind clients to avoid oil-based products near the bonds. With proper aftercare, nano ring extensions last 3–6 months and clients typically need 3–4 fills per set — creating consistent salon revenue." },
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