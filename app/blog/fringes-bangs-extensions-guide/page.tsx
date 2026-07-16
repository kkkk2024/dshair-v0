import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, Users, TrendingDown, Sparkles } from "lucide-react"

export const metadata = {
  title: "Hair Fringe & Bangs Extensions Guide | D.S HAIR & BEAUTY",
  description: "Complete guide to fringe and bangs hair extensions for UK salons. Add face-framing colour, volume, and style without commitment. 100% Remy human hair.",
}

export default function FringesBangsExtensionsGuide() {
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
                Fringes & Bangs Extensions:<br />The Finishing Touch
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Fringe extensions are the most underrated salon product — instant face-framing colour, volume, and style without a long-term commitment. Here's how to add them to your salon offering.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/collections/fringes-bangs">Shop Now</Link>
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
                  { num: "1 min", label: "application time" },
                  { num: "30+", label: "shades available" },
                  { num: "6 mo", label: "average lifespan" },
                  { num: "£60-120", label: "average client spend" },
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Are Fringe & Bangs Extensions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Fringe and bangs extensions are small wefts or single strands of hair designed to clip onto or blend with a client's existing fringe — adding instant length, volume, colour, or texture to the face-framing area.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                They're perfect for clients who love the idea of a fringe but don't want to commit to cutting their own hair. Fringe extensions allow stylists to offer face-framing colour (balayage fringe, anyone?) or volume without a permanent change.
              </p>

              {/* ── Hero Image ────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"
                  alt="Hair fringe extensions face framing style"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Who Is It For ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Who Are Fringe Extensions Best For?</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "The Fringe Curious",
                    desc: "Clients who always wanted a fringe but are afraid of the commitment. Try before you cut — literally.",
                  },
                  {
                    icon: <TrendingDown className="h-5 w-5" />,
                    title: "Colour Enhancement",
                    desc: "Perfect for adding balayage, highlights, or bold colour to the face-frame without colouring the whole head.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "Post-Cut Recovery",
                    desc: "Clients who just grew out a fringe and miss it. Fill in the awkward grow-out phase without cutting again.",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    title: "Volume Seekers",
                    desc: "Fine-haired clients who want a fuller, thicker fringe without the commitment of cutting more hair.",
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why Every Salon Should Offer Fringe Extensions</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: "🧲", title: "Untapped Niche", desc: "Very few UK salons offer fringe extensions. Being first in your area gives you a unique selling point." },
                  { icon: "💰", title: "Low Cost, High Impact", desc: "Fringe extensions cost less to produce than full sets, but clients pay £60-120 — excellent margin." },
                  { icon: "⚡", title: "Instant Retail", desc: "No appointment needed. Walk-in clip-in fringe sale takes under 2 minutes." },
                  { icon: "🔄", title: "Cross-Sell Opportunity", desc: "Fringe extensions naturally lead to conversations about full extensions, colouring, and other services." },
                  { icon: "⭐", title: "Social Media Gold", desc: "Before/after fringe transformations are incredibly shareable. Great for Instagram and TikTok content." },
                  { icon: "😊", title: "Maximum Impact", desc: "A great fringe change is one of the most impactful hairstyle moves. Clients absolutely love it." },
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
                    "Fringe extensions work best with curtain bangs or side fringes — not straight blunt cuts. Match the style to the client's face shape.",
                    "Balayage fringe extensions are extremely popular. Stock a range of rooted and balayage-fringe shades for this growing trend.",
                    "Colour match to the client's desired fringe colour — usually the mid-lengths at the front.",
                    "Offer a fringe styling lesson with every purchase. Show clients how to style and blend their fringe extension.",
                    "Cross-sell a wide-tooth comb and lightweight styling serum. These extend the life of the fringe extension significantly.",
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
                  Add Fringe Extensions to Your Salon Today
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  D.S Hair & Beauty supplies fringe and bangs extensions to UK professional salons. Wholesale pricing available. Mix-and-match colours supported.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/collections/fringes-bangs">Browse Collection</Link>
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
                  { q: "What's the most common mistake when fitting fringe extensions?", a: "Choosing the wrong length. Fringe extensions that are too long tangle with the rest of the hair and look unnatural. The ideal length extends just past the brow or sits at cheekbone level for styling versatility. Always ask clients how they prefer to wear their fringe before ordering, and recommend cutting them in salon after fitting for a bespoke finish." },
                  { q: "Can fringe extensions work on very short or very long hair?", a: "For short hair (above shoulder length), fringe extensions create an instant 'lob' or bob illusion — very popular. For very long hair, fringe extensions add face-framing volume without bulk. The key is matching the texture and wave pattern: straight fringe extensions on curly hair will look disconnected. Always recommend texture-matching." },
                  { q: "How do I colour-match fringe extensions for ombré or balayage clients?", a: "Match to the ROOT colour for a natural blend at the part line. For clients with ombré or balayage, you can order two pieces in different colours and have them colour-crafted together, or advise the client that the fringe will be a solid colour contrasting with their dimensional mid-lengths. Many stylists now sell fringe pieces as a separate customisation add-on." },
                  { q: "What's the best way to upsell fringe extensions in salon?", a: "Fringe extensions are an underused upsell. Position them as a low-commitment way to try a new look. Offer fringe cuts as a combo service — fitting plus styling. For clients considering a full set of extensions, fringe pieces are an affordable entry point that often leads to full installs. They also reduce the need for frequent fringe trims between appointments." },
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