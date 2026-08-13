import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Sparkles, TrendingUp, Building2 } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"

export const metadata = {
  title: "From One Chair to Three: How a Leeds Salon Built a Chain | D.S Hair Beauty",
  description:
    "A real (anonymised) client story: how a single-chair Leeds salon grew into a three-location business with extension systems, training and a private label line — over 19 years of helping salons scale.",
  openGraph: {
    title: "From One Chair to Three: How a Leeds Salon Built a Chain | D.S Hair Beauty",
    description: "An anonymised client story of salon growth through extension systems, team training and private label — from our 19 years supplying UK salons.",
    url: "https://www.dshairbeauty.co.uk/blog/client-story-salon-growth-chain",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Salon team training on hair extensions",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-13",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/client-story-salon-growth-chain",
  },
}

export default function ClientStorySalonGrowthChain() {
  return (
    <CartProvider>
      <BlogJsonLd slug="client-story-salon-growth-chain" />
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
                "headline": "From One Chair to Three: How a Leeds Salon Built a Chain",
                "description": "An anonymised client story: how a single-chair Leeds salon grew into a three-location business with extension systems, training and a private label line.",
                "url": "https://www.dshairbeauty.co.uk/blog/client-story-salon-growth-chain",
                "datePublished": "2026-08-13",
                "author": { "@type": "Organization", "name": "D.S Hair Beauty" },
                "publisher": { "@type": "Organization", "name": "D.S Hair Beauty" },
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
                Client Story
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                From One Chair to Three: How a Leeds Salon Built a Chain
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                One salon, one stylist-owner, a single chair. Eight years later: three locations, a trained team, and its own branded extension line. This is how it happened — and what any salon can borrow from it.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/salon-partners">Open a Trade Account</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/blog/grow-profitable-hair-salon-uk">Grow a Profitable Salon →</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ── Quick Nav ─────────────────────────────── */}
          <div className="bg-[#FDF8F0] border-b border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-[#4A1942]">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-[#4A1942]">Blog</Link>
                <span>/</span>
                <span className="text-[#4A1942] font-medium">Salon Growth Story</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">

              {/* ── Intro (E-E-A-T) ─────────────────────── */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over <strong>19 years</strong> supplying and supporting UK salons, the question we hear most from owners is not "which hair should I buy" — it is "how do I actually grow?" We have watched hundreds of salons try. A handful build something lasting. This is the story of one of them, told with their permission but anonymised: a Leeds salon we first met when it was a single chair in a shared space.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                We are sharing it because the levers that grew this business are not secret. They are the same ones any salon can pull — consistent hair, a documented service, a trained team, and a brand the clients come back to by name.
              </p>

              {/* ── The starting point ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">Where It Started: One Chair, No Systems</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80" alt="A single stylist workstation in a salon" fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                When we first supplied this salon, it was a solo owner working one chair, doing mostly colour and cut, with the odd clip-in sale at the till. Talented, busy on weekends, but entirely dependent on the owner being in the chair. There was no recurring extension revenue, no team, and no brand beyond word of mouth. The ceiling was simply: one person, one day.
              </p>

              {/* ── The turning points ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">The Four Levers That Grew It</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Growth did not come from one big decision. It came from stacking four systems over several years.
              </p>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "1. A recurring service, not a one-off", a: "Adding tape-in and nano extensions created a built-in 6–8 week maintenance cycle. Clients returned on a rhythm, and revenue stopped depending on new-client marketing alone. Extensions turned a one-visit salon into a subscription-style business." },
                  { q: "2. A documented standard (the SOP)", a: "Before hiring, the owner wrote down the exact consultation, colour-match, application and aftercare steps. New stylists could be trained to the same standard in days, not months — which is what made a second chair safe to add." },
                  { q: "3. A trained, consistent team", a: "Using our extension training support, the salon certified stylists against a checklist before they took paying clients. Consistent results across every chair is what let the owner step back from the chair and start running the business." },
                  { q: "4. A brand the clients ask for by name", a: "Once the service was consistent, the salon launched its own private label extension and aftercare line. Clients now re-order 'the salon's own' hair — the margin and the relationship stay with the salon, not a reseller." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><Sparkles className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── The expansion ──────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">From Second Chair to Third Location</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { label: "Year 1–2: Build the core", icon: <TrendingUp className="h-5 w-5" />, items: ["Add extensions as a recurring service", "Document the SOP", "Train the first certified stylist"] },
                  { label: "Year 3–4: Add capacity", icon: <Building2 className="h-5 w-5" />, items: ["Second chair, then a second stylist", "Introduce a private label line", "Track rebooking and attach rate weekly"] },
                  { label: "Year 5–8: Scale the model", icon: <Sparkles className="h-5 w-5" />, items: ["Open a second location on the same system", "Train managers to run each site", "Third location follows the proven playbook"] },
                ].map(({ label, icon, items }) => (
                  <div key={label} className="rounded-xl p-5 bg-[#FDF8F0] border border-amber-100">
                    <div className="flex items-center gap-2 text-[#4A1942] mb-3 font-semibold">{icon} {label}</div>
                    <ul className="space-y-1 text-sm text-[#3D2314]">
                      {items.map(item => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                The third location was not a gamble — it was the first two locations' system copied. That is the real lesson: you do not scale a salon by finding better luck, you scale it by making the good results repeatable without you in the chair. Our <Link href="/blog/salon-extension-training-sop" className="text-[#4A1942] underline font-medium">extension training SOP</Link> is the exact framework this salon used to make quality consistent across every new stylist.
              </p>

              {/* ── What you can borrow ────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Any Salon Can Borrow</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Start with recurrence, not scale", a: "A service clients return for every 6–8 weeks (extensions, with move-ups and re-orders) is worth more than ten one-off visits. Build the recurring base before you add chairs." },
                  { q: "Write the standard down", a: "If your best result lives only in your head, you cannot hire. A one-page SOP is what turns a soloist into an employer." },
                  { q: "Own the brand", a: "When clients re-order by your name, you stop renting your margin from a reseller. A private label line is the natural next step once you have a loyal base." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><TrendingUp className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── CTA ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Build Your Growth Story With Consistent Hair
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Open a free UK trade account for 100% Remy human hair your team can rely on — the foundation every scalable salon service is built on.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/salon-partners">Open a Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/blog/salon-high-ticket-extensions">Lift the Ticket</Link>
                  </Button>
                </div>
              </div>

              {/* ── On-page FAQ (single source of truth) ─ */}
              <BlogFaqSection slug="client-story-salon-growth-chain" />

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/grow-profitable-hair-salon-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Run a Profitable Salon (UK)</p>
                </Link>
                <Link href="/blog/salon-extension-training-sop" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Cluster Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Train Your Team on Extensions</p>
                </Link>
              </div>

              {/* ── Back to Blog ─────────────────────────── */}
              <div className="pt-8 border-t">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
              </div>

            </div>
          </article>
        </main>
        <RelatedGuides slug="client-story-salon-growth-chain" />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
