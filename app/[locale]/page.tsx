import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { dictionaries } from "@/lib/i18n/dictionaries"
import {
  locales,
  defaultLocale,
  isLocale,
  ogLocale,
  SITE_URL,
  hreflangAlternates,
} from "@/lib/i18n/config"
import type { Locale } from "@/lib/i18n/config"

export const dynamicParams = false

export function generateStaticParams() {
  return locales
    .filter((l) => l !== defaultLocale)
    .map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const l = isLocale(locale) ? locale : defaultLocale
  const d = dictionaries[l]
  const url = `${SITE_URL}/${l}`
  return {
    title: `${d.home.heroTitle} | D.S Hair Beauty`,
    description: d.home.heroSubtitle,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(),
    },
    openGraph: {
      title: d.home.heroTitle,
      description: d.home.heroSubtitle,
      url,
      locale: ogLocale[l],
      siteName: "D.S HAIR & BEAUTY",
    },
  }
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const l = isLocale(locale) ? (locale as Locale) : defaultLocale
  const d = dictionaries[l]
  const h = d.home

  const categories = [
    { title: h.catTapeIn, desc: h.catTapeInDesc, href: "/collections/tape-in" },
    { title: h.catNano, desc: h.catNanoDesc, href: "/collections/nano-extensions" },
    { title: h.catKTip, desc: h.catKTipDesc, href: "/collections/k-tip-extensions" },
    { title: h.catWeft, desc: h.catWeftDesc, href: "/collections/weft" },
  ]

  const whyPoints = [
    { title: h.why1Title, body: h.why1Body },
    { title: h.why2Title, body: h.why2Body },
    { title: h.why3Title, body: h.why3Body },
    { title: h.why4Title, body: h.why4Body },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 py-20 md:py-28">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
              {h.heroEyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">
              {h.heroTitle}
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
              {h.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/collections/all">
                <Button size="lg" variant="secondary">
                  {h.heroCtaPrimary}
                </Button>
              </Link>
              <Link href="/trade-wholesale">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  {h.heroCtaSecondary}
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-sm text-primary-foreground/70">{h.heroBadge}</p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b bg-background text-foreground">
          <div className="container px-4 md:px-6 py-12">
            <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8">
              {h.trustTitle}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-serif text-3xl md:text-4xl">19+</div>
                <div className="text-sm text-muted-foreground mt-2">{h.trustYears}</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl">100%</div>
                <div className="text-sm text-muted-foreground mt-2">{h.trustRemy}</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl">★</div>
                <div className="text-sm text-muted-foreground mt-2">{h.trustFactory}</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl">UK</div>
                <div className="text-sm text-muted-foreground mt-2">{h.trustUK}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-background text-foreground py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-3">
              {h.catTitle}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              {h.catSubtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group block rounded-lg border border-border p-6 transition-colors hover:border-accent hover:bg-accent/5"
                >
                  <h3 className="font-serif text-xl mb-2 group-hover:text-accent">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
              {h.whyTitle}
            </h2>
            <p className="text-center text-primary-foreground/80 max-w-3xl mx-auto mb-12">
              {h.whyIntro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyPoints.map((p) => (
                <div
                  key={p.title}
                  className="rounded-lg border border-primary-foreground/15 p-6"
                >
                  <h3 className="font-serif text-xl mb-3">{p.title}</h3>
                  <p className="text-sm text-primary-foreground/75 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private label */}
        <section className="bg-background text-foreground py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">{h.plTitle}</h2>
            <p className="text-muted-foreground mb-8">{h.plBody}</p>
            <Link href="/salon-partners">
              <Button size="lg" variant="default">
                {h.plCta}
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent text-accent-foreground py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">{h.ctaTitle}</h2>
            <p className="mb-8">{h.ctaBody}</p>
            <Link href="/trade-wholesale">
              <Button size="lg" variant="secondary">
                {h.ctaButton}
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
