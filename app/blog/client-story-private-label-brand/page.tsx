import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Sparkles, Tag, Package } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"

export const metadata = {
  title: "From No Brand to a Named Line: Building a Private Label | D.S Hair Beauty",
  description:
    "An anonymised client story: how a salon with no product brand launched its own private label extension and aftercare line — and kept the margin and the relationship with its clients.",
  openGraph: {
    title: "From No Brand to a Named Line: Building a Private Label | D.S Hair Beauty",
    description: "An anonymised client story of launching a private label hair extension brand with our OEM/ODM support — from 19 years helping salons build brands.",
    url: "https://www.dshairbeauty.co.uk/blog/client-story-private-label-brand",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Branded hair extension retail display",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-13",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/client-story-private-label-brand",
  },
}

export default function ClientStoryPrivateLabelBrand() {
  return (
    <CartProvider>
      <BlogJsonLd slug="client-story-private-label-brand" />
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
                "headline": "From No Brand to a Named Line: Building a Private Label",
                "description": "An anonymised client story: how a salon with no product brand launched its own private label extension and aftercare line.",
                "url": "https://www.dshairbeauty.co.uk/blog/client-story-private-label-brand",
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
                From No Brand to a Named Line
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                This salon sold other people's products for years. Then it launched its own. Here is how a private label line turned take-home retail into a brand its clients re-order by name.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/salon-partners">Open a Trade Account</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/blog/private-label-hair-extensions-uk">Private Label Guide →</Link>
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
                <span className="text-[#4A1942] font-medium">Private Label Story</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">

              {/* ── Intro (E-E-A-T) ─────────────────────── */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over <strong>19 years</strong> in this industry, we have helped more than 50 businesses build their own hair extension brands. Most started exactly where this client did: a successful service business that sold other companies' products and kept none of the upside. This is one such story, anonymised with the owner's blessing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                The lesson is simple but easy to miss: a salon can be busy for a decade and still own nothing. A private label line is how a salon starts owning a brand.
              </p>

              {/* ── The starting point ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">Where It Started: Great Service, No Brand</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80" alt="Salon retail shelf with extension aftercare" fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                This salon had a loyal client base and a strong extension service. But every take-home product and every re-order went through someone else's brand. Clients loved the salon — and then bought the hair from a name the salon did not own. The margin left with the product. The relationship, such as it was, belonged to the supplier.
              </p>

              {/* ── The decision ───────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">The Decision: Own the Line</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The owner did not want to manufacture hair — that is our job. What she wanted was a line that carried her salon's name, with her colour story and her aftercare, supplied consistently and invisibly behind the brand. That is private label: we make it, she owns it.
              </p>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Start small, not risky", a: "We began with a small sample order — a curated set of her best-selling shades and one aftercare product — not a warehouse of stock. She tested the line on her own clients first, which meant almost no risk and immediate real feedback." },
                  { q: "Keep the colour story consistent", a: "Because the hair is 100% Remy and cuticle-aligned, every batch blends the same. Clients who loved shade 4 Chocolate Brown kept getting shade 4 — the brand promise held, order after order." },
                  { q: "Put the salon's name on it", a: "Labelling, packaging and the re-order flow all carried the salon's name. Clients stopped asking 'which brand is this?' and started asking 'can I get the salon's own hair again?'" },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><Tag className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── The result ──────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Changed: From Reseller to Brand Owner</h2>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { label: "Margin stayed in-house", icon: <Package className="h-5 w-5" />, items: ["Set the retail price", "Re-order by the salon's name", "No reseller taking the cut"] },
                  { label: "Clients came back for the brand", icon: <Sparkles className="h-5 w-5" />, items: ["Re-orders became brand loyalty", "Referrals named the line", "Less discounting needed"] },
                  { label: "A new revenue line appeared", icon: <Tag className="h-5 w-5" />, items: ["Retail ran out every 4–8 weeks", "Online re-order without a visit", "Revenue beyond chair hours"] },
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
                The salon did not become a manufacturer. It became a brand. And because the supply behind it is consistent 100% Remy human hair, the brand has kept its promise every single order. Our <Link href="/blog/private-label-hair-extensions-uk" className="text-[#4A1942] underline font-medium">private label guide</Link> walks through exactly how a salon launches a line like this — including the small-MOQ starting point that keeps it low-risk.
              </p>

              {/* ── What you can borrow ────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Any Salon Can Borrow</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "You do not need to be big to start", a: "A private label line begins with a small, well-chosen sample order — not a warehouse. If you already sell take-home products, you have the demand; you are simply putting your name on it." },
                  { q: "Consistency is the brand", a: "A brand is a promise kept every order. That only works on hair that is identical batch to batch — which is why the Remy, cuticle-aligned source matters more than the logo." },
                  { q: "Retail attach rate is the on-ramp", a: "Start by bundling your own branded aftercare into every install. Once clients re-order the brand, expanding the line is natural." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><Package className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── CTA ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Launch Your Own Line — Small, Then Grow
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Open a trade account and talk to us about a private label sample order. Keep your margin, keep the relationship, and put your salon's name on the hair your clients already love.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/salon-partners">Start a Private Label →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/blog/salon-retail-attachment-guide">Lift Retail Attach Rate</Link>
                  </Button>
                </div>
              </div>

              {/* ── On-page FAQ (single source of truth) ─ */}
              <BlogFaqSection slug="client-story-private-label-brand" />

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/private-label-hair-extensions-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Cluster Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Private Label Hair Extensions (UK)</p>
                </Link>
                <Link href="/blog/salon-retail-attachment-guide" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Salon Retail Attach Rate</p>
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
        <RelatedGuides slug="client-story-private-label-brand" />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
