import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { getColorChartContent, type ColorChartContent } from "@/lib/i18n/pages/color-chart"

export function ColorChartView({
  locale,
  content: c = getColorChartContent(locale),
}: {
  locale: Locale
  content?: ColorChartContent
}) {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href={localeHref("/", locale)}>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {c.backHome}
            </Button>
          </Link>
          <a
            href="/color-chart.pdf"
            download="DS_Hair_Beauty_Color_Chart.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              {c.downloadPdf}
            </Button>
          </a>
        </div>
      </div>

      {/* Hero text */}
      <section className="container px-4 md:px-6 py-12 text-center">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">{c.eyebrow}</p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">{c.heroTitle}</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">{c.heroSubtitle}</p>
      </section>

      {/* Colour chart image */}
      <section className="container px-4 md:px-6 pb-16">
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border">
          <Image
            src="/images/color-chart.jpg"
            alt="DS Hair Beauty Human Hair Colour Chart — 31 shades"
            width={1980}
            height={2440}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 md:px-6 pb-20 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">{c.ctaTitle}</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{c.ctaSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={localeHref("/contact", locale)}>
            <Button size="lg" className="group">
              {c.ctaContact}
            </Button>
          </Link>
          <Link href={localeHref("/collections/diy", locale)}>
            <Button size="lg" variant="outline">
              {c.ctaShop}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
