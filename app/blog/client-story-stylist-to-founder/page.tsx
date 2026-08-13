import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Sparkles, GraduationCap, Crown } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"

export const metadata = {
  title: "From Chair Renter to Brand Founder: One Stylist's Path | D.S Hair Beauty",
  description:
    "An anonymised client story: how a freelance extension technician became a recognised brand founder — with her own method, her own product line, and a training offer — supported over 19 years.",
  openGraph: {
    title: "From Chair Renter to Brand Founder: One Stylist's Path | D.S Hair Beauty",
    description: "An anonymised client story of a freelance stylist becoming a brand founder with her own extension method and product line — from our 19 years supporting UK technicians.",
    url: "https://www.dshairbeauty.co.uk/blog/client-story-stylist-to-founder",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hair extension technician working with a client",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-13",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/client-story-stylist-to-founder",
  },
}

export default function ClientStoryStylistToFounder() {
  return (
    <CartProvider>
      <BlogJsonLd slug="client-story-stylist-to-founder" />
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
                "headline": "From Chair Renter to Brand Founder: One Stylist's Path",
                "description": "An anonymised client story: how a freelance extension technician became a recognised brand founder with her own method and product line.",
                "url": "https://www.dshairbeauty.co.uk/blog/client-story-stylist-to-founder",
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
                From Chair Renter to Brand Founder
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                She started renting a chair and taking bookings by DM. Today she runs a recognised extension brand with her own method, her own line, and a waiting list. Here is the path — anonymised, but real.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/salon-partners">Open a Trade Account</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/blog/salon-extension-training-sop">Train as a Pro →</Link>
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
                <span className="text-[#4A1942] font-medium">Stylist to Founder</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">

              {/* ── Intro (E-E-A-T) ─────────────────────── */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over <strong>19 years</strong> supplying hair extension technicians, we have watched a quiet pattern: the best technicians do not stay technicians. The ones who document their method, build a client base that trusts their name, and put that name on a product line eventually stop being "a stylist who fits extensions" and become a brand. This is one such path, shared anonymously.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                If you are a freelance or chair-renting stylist reading this: this story is not about luck. It is about three moves, made in order, that any skilled technician can make.
              </p>

              {/* ── The starting point ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">Where It Started: Talent, No Leverage</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80" alt="A hair extension technician applying extensions" fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                She was an exceptional nano and tape-in technician renting a chair two days a week, booking through Instagram DMs. Clients travelled to her because she was genuinely good — but her income capped at her own chair hours, and her name meant little beyond her existing followers. Every month was a fresh hustle for bookings.
              </p>

              {/* ── The three moves ────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">The Three Moves That Built the Brand</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Move 1 — Document the method", a: "Instead of guarding her technique, she wrote it down: her consultation questions, her sectioning, her tension rules, her aftercare. Documenting turned a feel into a repeatable method — the foundation of every brand that trains others." },
                  { q: "Move 2 — Put her name on the product", a: "Through a private label line, the hair and aftercare her clients loved began carrying her brand. Re-orders came to her name, not a reseller's, and a small product income appeared between appointments." },
                  { q: "Move 3 — Teach the method", a: "Once the method was documented and the product was her own, she launched a small training offer for newer technicians. Teaching turned her expertise into authority — and a second revenue line that did not require her in the chair." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><Sparkles className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── The brand today ────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">The Brand Today: Three Income Lines, One Name</h2>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { label: "The service", icon: <Crown className="h-5 w-5" />, items: ["Premium fits, booked by name", "Waitlist, not hustle", "Highest-ticket methods"] },
                  { label: "The product", icon: <Sparkles className="h-5 w-5" />, items: ["Own private label line", "Re-orders by her brand", "Margin stays with her"] },
                  { label: "The education", icon: <GraduationCap className="h-5 w-5" />, items: ["Trains newer technicians", "Authority in her method", "Income beyond chair hours"] },
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
                The through-line is ownership. She owns the method (documented), the product (private label), and the authority (teaching). None of it required her to manufacture hair — that is what a supply partner is for. Our <Link href="/blog/salon-extension-training-sop" className="text-[#4A1942] underline font-medium">training SOP framework</Link> is the same structure she used to turn instinct into a teachable method.
              </p>

              {/* ── What you can borrow ────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Any Technician Can Borrow</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Document before you scale", a: "You cannot teach or franchise what lives only in your hands. Write the method down first — it is the asset every brand is built on." },
                  { q: "You don't need to manufacture to own a brand", a: "Private label lets you put your name on consistent 100% Remy hair without running a factory. Own the brand; let your supply partner own the making." },
                  { q: "Teaching is the fastest authority", a: "The moment you train others in your method, you stop being 'a stylist' and become 'the name' in your niche. Authority compounds into bookings and product sales." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><GraduationCap className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── CTA ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Build Your Name on Hair That Delivers
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Open a trade account for consistent 100% Remy human hair — the reliable base behind every private label and training offer. Start where this stylist did: with hair your clients can trust.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/salon-partners">Open a Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/blog/private-label-hair-extensions-uk">Launch a Private Label</Link>
                  </Button>
                </div>
              </div>

              {/* ── On-page FAQ (single source of truth) ─ */}
              <BlogFaqSection slug="client-story-stylist-to-founder" />

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/salon-extension-training-sop" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Cluster Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Train Your Team on Extensions</p>
                </Link>
                <Link href="/blog/private-label-hair-extensions-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Private Label Hair Extensions (UK)</p>
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
        <RelatedGuides slug="client-story-stylist-to-founder" />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
