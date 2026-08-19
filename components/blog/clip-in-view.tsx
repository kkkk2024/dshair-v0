import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, Users, TrendingDown, Sparkles } from "lucide-react"
import Image from "next/image"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { clipInContent } from "@/lib/i18n/blog/clip-in-extensions-guide"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"
import { RelatedGuides } from "@/components/blog/related-guides"

const ICONS = {
  users: Users,
  trendingDown: TrendingDown,
  sparkles: Sparkles,
  clock: Clock,
} as const

export function ClipInExtensionsGuideView({ locale }: { locale: Locale }) {
  const c = clipInContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="clip-in-extensions-guide" locale={locale} />
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
                <Sparkles className="h-4 w-4" /> {c.heroBadge}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                {c.heroTitleLines[0]}<br />{c.heroTitleLines[1]}
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

          {/* ── Quick Stats ───────────────────────────── */}
          <section className="bg-[#FDF8F0] border-y border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {c.stats.map(({ num, label }) => (
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
            <Link href={localeHref("/blog", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" /> {c.breadcrumb}
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-8">
              <span className="bg-[#4A1942]/10 text-[#4A1942] rounded-full px-3 py-1 font-medium">{c.metaCategory}</span>
              <span>{c.metaDate}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.metaReadTime}</span>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* ── What Is ──────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.whatHeading}</h2>
              {c.whatParagraphs.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">{p}</p>
              ))}

              {/* ── Hero Image ────────────────────────── */}
              <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                <Image src={c.heroImageSrc} alt={c.heroImageAlt} fill className="object-cover" />
              </div>

              {/* ── Who Is It For ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.whoHeading}</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {c.whoCards.map(({ iconKey, title, desc }) => {
                  const Icon = ICONS[iconKey]
                  return (
                    <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#4A1942]"><Icon className="h-5 w-5" /></span>
                        <h3 className="font-semibold text-[#4A1942]">{title}</h3>
                      </div>
                      <p className="text-sm text-[#6B3A6E]">{desc}</p>
                    </div>
                  )
                })}
              </div>

              {/* ── Key Benefits ──────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.whyHeading}</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {c.whyCards.map(({ icon, title, desc }) => (
                  <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                    <div className="text-2xl mb-2">{icon}</div>
                    <h3 className="font-semibold text-[#4A1942] mb-1">{title}</h3>
                    <p className="text-sm text-[#6B3A6E]">{desc}</p>
                  </div>
                ))}
              </div>

              {/* ── Pro Tips ─────────────────────────── */}
              <div className="bg-[#4A1942]/5 border border-[#4A1942]/10 rounded-2xl p-8 mb-10 not-prose">
                <h3 className="font-serif text-2xl font-medium text-[#4A1942] mb-4">{c.tipsHeading}</h3>
                <ul className="space-y-3">
                  {c.tips.map((tip) => (
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
                  {c.ctaBoxTitle}
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  {c.ctaBoxBody}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href={localeHref(c.ctaBoxPrimaryHref, locale)}>{c.ctaBoxPrimaryLabel}</Link>
                  </Button>
                  {c.ctaBoxSecondaryWhatsapp ? (
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                      <a href={c.ctaBoxSecondaryHref} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-2" /> {c.ctaBoxSecondaryLabel}
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                      <Link href={localeHref(c.ctaBoxSecondaryHref, locale)}>{c.ctaBoxSecondaryLabel}</Link>
                    </Button>
                  )}
                </div>
              </div>

            </div>
          </article>
        </main>
        <BlogFaqSection slug="clip-in-extensions-guide" title={c.faqHeading} locale={locale} />
        <RelatedGuides slug="clip-in-extensions-guide" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
