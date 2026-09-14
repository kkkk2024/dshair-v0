import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Sparkles, TrendingUp, Building2 } from "lucide-react"
import Image from "next/image"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { clientStorySalonGrowthChainContent, type Span } from "@/lib/i18n/blog/client-story-salon-growth-chain"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"

const ICONS = {
  sparkles: Sparkles,
  trendingUp: TrendingUp,
  building2: Building2,
} as const

function renderSpans(spans: Span | Span[], locale: Locale, keyPrefix: string) {
  const list = Array.isArray(spans) ? spans : [spans]
  return list.map((s, i) => {
    const key = `${keyPrefix}-${i}`
    if ("link" in s) {
      return (
        <Link key={key} href={localeHref(s.href, locale)} className="text-[#4A1942] underline font-medium">
          {s.link}
        </Link>
      )
    }
    if (s.b && s.i) return <strong key={key}><em>{s.t}</em></strong>
    if (s.b) return <strong key={key}>{s.t}</strong>
    if (s.i) return <em key={key}>{s.t}</em>
    return <span key={key}>{s.t}</span>
  })
}

export function ClientStorySalonGrowthChainView({ locale }: { locale: Locale }) {
  const c = clientStorySalonGrowthChainContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="client-story-salon-growth-chain" locale={locale} />
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
                "headline": c.jsonLdHeadline,
                "description": c.jsonLdDescription,
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
                {c.heroBadge}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                {c.heroTitle}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                {c.heroSubtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href={localeHref(c.ctaPrimaryHref, locale)}>{c.ctaPrimaryLabel}</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href={localeHref(c.ctaSecondaryHref, locale)}>{c.ctaSecondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ── Quick Nav ─────────────────────────────── */}
          <div className="bg-[#FDF8F0] border-b border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href={localeHref("/", locale)} className="hover:text-[#4A1942]">{c.navHome}</Link>
                <span>/</span>
                <Link href={localeHref("/blog", locale)} className="hover:text-[#4A1942]">{c.navBlog}</Link>
                <span>/</span>
                <span className="text-[#4A1942] font-medium">{c.navCurrent}</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">

              {/* ── Intro (E-E-A-T) ─────────────────────── */}
              {c.intro.map((para, i) => (
                <p key={i} className={`text-lg text-muted-foreground leading-relaxed ${i === c.intro.length - 1 ? "mb-10" : "mb-6"}`}>
                  {renderSpans(para, locale, `intro-${i}`)}
                </p>
              ))}

              {/* ── The starting point ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">{c.startHeading}</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src={c.startImageSrc} alt={c.startImageAlt} fill className="object-cover" />
              </div>
              {c.startP.map((para, i) => (
                <p key={i} className={`text-lg text-muted-foreground leading-relaxed ${i === c.startP.length - 1 ? "mb-10" : "mb-6"}`}>
                  {renderSpans(para, locale, `start-${i}`)}
                </p>
              ))}

              {/* ── The turning points ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.decisionHeading}</h2>
              {c.decisionP.map((para, i) => (
                <p key={i} className={`text-lg text-muted-foreground leading-relaxed ${i === c.decisionP.length - 1 ? "mb-4" : "mb-4"}`}>
                  {renderSpans(para, locale, `decision-${i}`)}
                </p>
              ))}
              <div className="not-prose space-y-4 mb-10">
                {c.decisionCards.map(({ icon, q, a }) => {
                  const Icon = ICONS[icon]
                  return (
                    <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                      <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><Icon className="h-4 w-4 text-amber-600" /> {q}</p>
                      <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                    </div>
                  )
                })}
              </div>

              {/* ── The expansion ──────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.resultHeading}</h2>
              <div className="not-prose space-y-4 mb-10">
                {c.resultCards.map(({ label, icon, items }) => {
                  const Icon = ICONS[icon]
                  return (
                    <div key={label} className="rounded-xl p-5 bg-[#FDF8F0] border border-amber-100">
                      <div className="flex items-center gap-2 text-[#4A1942] mb-3 font-semibold"><Icon className="h-5 w-5" /> {label}</div>
                      <ul className="space-y-1 text-sm text-[#3D2314]">
                        {items.map(item => <li key={item}>• {item}</li>)}
                      </ul>
                    </div>
                  )
                })}
              </div>
              {c.resultP.map((para, i) => (
                <p key={i} className={`text-lg text-muted-foreground leading-relaxed ${i === c.resultP.length - 1 ? "mb-10" : "mb-6"}`}>
                  {renderSpans(para, locale, `result-${i}`)}
                </p>
              ))}

              {/* ── What you can borrow ────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.borrowHeading}</h2>
              <div className="not-prose space-y-4 mb-10">
                {c.borrowCards.map(({ icon, q, a }) => {
                  const Icon = ICONS[icon]
                  return (
                    <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                      <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><Icon className="h-4 w-4 text-amber-600" /> {q}</p>
                      <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                    </div>
                  )
                })}
              </div>

              {/* ── CTA ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  {c.ctaBoxTitle}
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  {c.ctaBoxBody}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href={localeHref(c.ctaBoxPrimaryHref, locale)}>{c.ctaBoxPrimaryLabel}</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href={localeHref(c.ctaBoxSecondaryHref, locale)}>{c.ctaBoxSecondaryLabel}</Link>
                  </Button>
                </div>
              </div>

              {/* ── On-page FAQ (single source of truth) ─ */}
              <BlogFaqSection slug="client-story-salon-growth-chain" title={c.faqHeading} locale={locale} />

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href={localeHref(c.link1Href, locale)} className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">{c.link1Kicker}</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">{c.link1Title}</p>
                </Link>
                <Link href={localeHref(c.link2Href, locale)} className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">{c.link2Kicker}</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">{c.link2Title}</p>
                </Link>
              </div>

              {/* ── Back to Blog ─────────────────────────── */}
              <div className="pt-8 border-t">
                <Link href={localeHref("/blog", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> {c.backLabel}
                </Link>
              </div>

            </div>
          </article>
        </main>
        <RelatedGuides slug="client-story-salon-growth-chain" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
