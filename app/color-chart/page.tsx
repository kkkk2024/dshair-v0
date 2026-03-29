import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Color Chart | DS Hair Beauty",
  description: "Browse our 31 human hair shades — from Jet Black to Platinum Blonde. Find your perfect colour match.",
}

export default function ColorChartPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
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
              Download PDF
            </Button>
          </a>
        </div>
      </div>

      {/* Hero text */}
      <section className="container px-4 md:px-6 py-12 text-center">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">
          DS Hair Beauty
        </p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
          Human Hair Colour Chart
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          31 shades of 100% Remy Human Hair — from deep Jet Black to Platinum Blonde.
          Click or zoom in to explore every shade in detail.
        </p>
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
        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
          Need Help Matching Your Shade?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Contact us and our colour specialists will help you find your perfect match.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="group">
              Contact Us
            </Button>
          </Link>
          <Link href="/collections/diy">
            <Button size="lg" variant="outline">
              Shop Extensions
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
