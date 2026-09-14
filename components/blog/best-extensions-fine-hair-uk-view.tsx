import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, Sparkles, ThumbsUp, Users } from "lucide-react"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { bestExtensionsFineHairUkContent, type Span } from "@/lib/i18n/blog/best-extensions-fine-hair-uk"

const NOTE_ICONS = {
  thumbsUp: ThumbsUp,
  users: Users,
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

export function BestExtensionsFineHairUkView({ locale }: { locale: Locale }) {
  const c = bestExtensionsFineHairUkContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="best-extensions-fine-hair-uk" locale={locale} />
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

          {/* ── Key Stats ────────────────────────────── */}
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

              {/* ── Understanding Fine Hair ─────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.whatHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.whatP1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {renderSpans(c.whatP2, locale, "whatP2")}
              </p>

              {/* ── Methods Comparison ──────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.methodsHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.methodsIntro}
              </p>

              {/* Method 1: Tape-In */}
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{c.methodTapeIn.medal}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-2xl font-medium">{c.methodTapeIn.title}</h3>
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">{c.methodTapeIn.badge}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {c.methodTapeIn.desc}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-green-800">{c.prosLabel}</strong>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          {c.methodTapeIn.pros.map((li) => <li key={li}>{li}</li>)}
                        </ul>
                      </div>
                      <div>
                        <strong className="text-red-800">{c.considerationsLabel}</strong>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          {c.methodTapeIn.considerations.map((li) => <li key={li}>{li}</li>)}
                        </ul>
                      </div>
                      <div>
                        <strong className="text-[#4A1942]">{c.idealForLabel}</strong>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          {c.methodTapeIn.idealFor.map((li) => <li key={li}>{li}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Method 2: Nano Ring */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{c.methodNano.medal}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-2xl font-medium">{c.methodNano.title}</h3>
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{c.methodNano.badge}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {c.methodNano.desc}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-green-800">{c.prosLabel}</strong>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          {c.methodNano.pros.map((li) => <li key={li}>{li}</li>)}
                        </ul>
                      </div>
                      <div>
                        <strong className="text-red-800">{c.considerationsLabel}</strong>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          {c.methodNano.considerations.map((li) => <li key={li}>{li}</li>)}
                        </ul>
                      </div>
                      <div>
                        <strong className="text-[#4A1942]">{c.idealForLabel}</strong>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          {c.methodNano.idealFor.map((li) => <li key={li}>{li}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Method 3: Micro Weft */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{c.methodWeft.medal}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-2xl font-medium">{c.methodWeft.title}</h3>
                      <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">{c.methodWeft.badge}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {c.methodWeft.desc}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-green-800">{c.prosLabel}</strong>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          {c.methodWeft.pros.map((li) => <li key={li}>{li}</li>)}
                        </ul>
                      </div>
                      <div>
                        <strong className="text-red-800">{c.considerationsLabel}</strong>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          {c.methodWeft.considerations.map((li) => <li key={li}>{li}</li>)}
                        </ul>
                      </div>
                      <div>
                        <strong className="text-[#4A1942]">{c.idealForLabel}</strong>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          {c.methodWeft.idealFor.map((li) => <li key={li}>{li}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Methods to Avoid */}
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
                <h3 className="font-serif text-xl font-medium mb-4 flex items-center gap-2">
                  <span className="text-red-500">⛔</span> {c.avoidHeading}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  {c.avoidMethods.map(({ method, reason }) => (
                    <div key={method} className="bg-white rounded-lg p-3">
                      <strong className="text-red-700 block mb-1">{method}</strong>
                      <span className="text-gray-600">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Expert Tips ────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.tipsHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.tipsIntro}
              </p>
              <div className="space-y-4 mb-8">
                {c.tips.map(({ icon, tip, desc }) => (
                  <div key={tip} className="flex gap-4 p-4 bg-white border rounded-xl">
                    <span className="text-3xl shrink-0">{icon}</span>
                    <div>
                      <strong className="block mb-1">{tip}</strong>
                      <span className="text-sm text-muted-foreground">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Product Recommendations ────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.recommendedHeading}</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {c.recommended.map((p) => {
                  const NoteIcon = NOTE_ICONS[p.noteIcon]
                  return (
                    <div key={p.title} className="bg-white border-2 border-[#4A1942]/20 rounded-xl p-5 hover:shadow-lg transition-shadow">
                      {p.badge && <span className="text-xs bg-[#4A1942]/10 text-[#4A1942] rounded px-2 py-1 font-medium">{p.badge}</span>}
                      <h3 className="font-serif text-xl font-medium mt-3 mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {p.desc}
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <NoteIcon className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-green-700">{p.note}</span>
                      </div>
                      <Button className="w-full bg-[#4A1942] hover:bg-[#3a1335] text-white" asChild>
                        <Link href={localeHref(p.buttonHref, locale)}>{p.buttonLabel}</Link>
                      </Button>
                    </div>
                  )
                })}
              </div>

              {/* ── Salon Info ─────────────────────── */}
              <div className="bg-[#4A1942]/5 rounded-2xl p-8 border border-[#4A1942]/20 my-12">
                <h3 className="font-serif text-2xl font-medium mb-4">{c.consultationHeading}</h3>
                <p className="text-muted-foreground mb-6">
                  {c.consultationBody}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#4A1942] hover:bg-[#3a1335] text-white" asChild>
                    <Link href={localeHref(c.consultationPrimaryHref, locale)}>{c.consultationPrimaryLabel}</Link>
                  </Button>
                  <Button variant="outline" className="border-[#4A1942]/30" asChild>
                    <Link href={localeHref(c.consultationSecondaryHref, locale)}>{c.consultationSecondaryLabel}</Link>
                  </Button>
                </div>
              </div>

            </div>

            {/* ── CTA ─────────────────────────────── */}
            <div className="mt-16 bg-gradient-to-r from-[#4A1942] to-[#7B3A6E] rounded-2xl p-8 md:p-12 text-center text-white">
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">{c.ctaBoxTitle}</h3>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                {c.ctaBoxBody}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href={localeHref(c.ctaBoxPrimaryHref, locale)}>{c.ctaBoxPrimaryLabel}</Link>
                </Button>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href={localeHref(c.ctaBoxSecondaryHref, locale)}>{c.ctaBoxSecondaryLabel}</Link>
                </Button>
                <Button variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                  <Link href={localeHref(c.ctaBoxTertiaryHref, locale)}>{c.ctaBoxTertiaryLabel}</Link>
                </Button>
              </div>
            </div>

          </article>
        </main>
        <BlogFaqSection slug="best-extensions-fine-hair-uk" title={c.faqHeading} locale={locale} />
        <RelatedGuides slug="best-extensions-fine-hair-uk" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
