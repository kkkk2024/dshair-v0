import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, Users, TrendingDown, Sparkles } from "lucide-react"

export const metadata = {
  title: "Tape-In Hair Extensions Guide: Invisible Seamless Installation | D.S HAIR & BEAUTY",
  description: "Complete guide to tape-in hair extensions for UK salons. Invisible application, seamless finish, easy maintenance. The UK's most popular professional extension method.",
}

export default function TapeInExtensionsGuide() {
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
                Tape-In Extensions:<br />The UK's Favourite Method
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Tape-ins dominate UK salons for good reason — virtually invisible bonds, seamless blending, and surprisingly easy maintenance. Everything you need to know.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/collections/tape-in-extensions">Shop Now</Link>
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
                  { num: "1.5 hr", label: "full head installation" },
                  { num: "100%", label: "Remy human hair" },
                  { num: "6-8 wks", label: "between maintenance" },
                  { num: "40+", label: "shades available" },
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

              {/* ── What Is ──────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Are Tape-In Extensions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Tape-in extensions consist of flat wefts of hair with a pre-taped adhesive strip along the top. The stylist sandwiches a thin section of natural hair between two tape-in wefts, creating a seamless, virtually invisible bond that lays completely flat against the scalp.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Tape-ins are beloved by UK clients because they are extremely comfortable, look completely natural, and are one of the fastest methods to install. They are the ideal entry point for clients new to extensions.
              </p>

              {/* ── Hero Image ────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
                  alt="Tape-in hair extensions professional application"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Who Is It For ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Who Are Tape-In Extensions Best For?</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Fine to Medium Hair",
                    desc: "Tape-ins lay completely flat — making them ideal for clients with fine or thin hair where other methods might show.",
                  },
                  {
                    icon: <TrendingDown className="h-5 w-5" />,
                    title: "Low-Commitment Clients",
                    desc: "Tape-ins last 6-8 weeks per installation. Shorter commitment than K-tip or sew-in. Ideal for first-time extension wearers.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "Frequent Style Changers",
                    desc: "Tape-ins allow clients to wear their hair up, down, or braided freely — no visibility concerns like some other methods.",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    title: "Colour Enthusiasts",
                    desc: "With 40+ shades including balayage and ombre, tape-ins are perfect for adding colour dimension without chemical commitment.",
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why Tape-Ins Are a Salon Must-Have</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "✨", title: "Completely Invisible", desc: "Tape-in bonds lay completely flat and are virtually undetectable — even in updos, ponytails, and braided styles." },
                  { icon: "⏱️", title: "Fast Installation", desc: "A full head of tape-ins takes just 1-1.5 hours to install — less than half the time of K-tip or hand-tied weft." },
                  { icon: "💰", title: "Excellent Margin", desc: "Tape-in services typically cost £250-500 per installation. Maintenance every 6-8 weeks adds recurring revenue." },
                  { icon: "🔄", title: "Reusable Tapes", desc: "Tape-ins can be removed, cleaned, and re-taped — making them extremely cost-effective and eco-friendly." },
                  { icon: "🧲", title: "Versatile", desc: "Works with almost any hair type except very coarse or heavily treated hair. The most versatile professional method." },
                  { icon: "⭐", title: "Client Favourite", desc: "Over 60% of UK extension clients choose tape-ins. It's the market leader for good reason." },
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
                    "Never tape over dirty hair — oils destroy the bond. Always shampoo and dry the hair completely before taping.",
                    "Apply tape-ins 1cm away from the hairline and 1cm from the scalp. Too close causes discomfort; too far shows the extension.",
                    "For clients with oily scalps, recommend a transition period before first tape-in installation. Use a clarifying shampoo 1 week before.",
                    "Tape-in aftercare products matter. Recommend sulfate-free shampoo and avoid oil-based products near the bonds. This doubles the wear time.",
                    "When removing tape-ins, always use a specialized tape-in remover solution. Never pull or force — this damages the natural hair irreparably.",
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
                  Source Premium Tape-In Extensions for Your Salon
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  D.S Hair & Beauty supplies invisible tape-in extensions to professional UK salons. 100% Remy human hair, 40+ shades, wholesale pricing available.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/collections/tape-in-extensions">Browse Collection</Link>
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
                  { q: "How long do tape-in extensions last before they need to be removed?", a: "Tape-in extensions typically last 6–8 weeks before needing repositioning. The adhesive weakens with exposure to heat, products, and natural scalp oils. With Remy human hair tape-ins and proper aftercare (avoiding oily products at the root, using sulfate-free shampoo), some clients get up to 10 weeks. Always book the repositioning appointment in advance to maintain continuous revenue." },
                  { q: "Can tape-in extensions be reapplied after removal, or do they need replacing?", a: "Yes — if the hair is in good condition, the tapes can be replaced. Remove with tape-in adhesive remover, clean the hair weft, and apply fresh tape tabs. This can be done 2–3 times before the weft needs replacing. This makes tape-ins cost-effective: clients only buy the hair once but pay for multiple application services over 6–12 months." },
                  { q: "What aftercare products should clients use with tape-in extensions?", a: "Recommend sulfate-free, paraben-free shampoo and conditioner — never conditioning shampoos near the adhesive. Advise clients to avoid applying conditioner or serums directly on the tapes. Use a special extension-safe brush and avoid aggressive towel drying. A weekly deep-conditioning treatment on the mid-lengths and ends (never the roots) keeps the hair healthy and justifies recommending your salon retail products." },
                  { q: "How do tape-in extensions compare to other methods in terms of salon profitability?", a: "Tape-ins offer excellent profitability: the application is relatively fast (45–60 minutes for a full head), making more appointments possible per day. The consumables (tape tabs, adhesive remover) are low-cost. With repositioning appointments every 6–8 weeks, you build predictable recurring revenue. The client also saves on product cost over time vs. clip-ins." },
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