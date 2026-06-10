import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Hair Extension Colour Chart No.2 | Premium Shades | D.S HAIR & BEAUTY",
  description: "Browse our No.2 collection of 29 premium hair shades — including numbered and named colours like Ash Blonde, Auburn, Bamboo, Cacao, Honey Melt, Sand, Toasty Blonde, Vanilla and more.",
  keywords: ["hair extension colour chart no2", "hair extension shades", "ash blonde extensions", "toasty blonde", "cacao hair colour", "human hair colour chart UK"],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/color-chart-no2",
  },
  openGraph: {
    title: "Colour Chart No.2 — Premium Shades | D.S HAIR & BEAUTY",
    description: "Browse 29 premium hair shades. Find your perfect colour match.",
    url: "https://www.dshairbeauty.co.uk/color-chart-no2",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

const colorShades = [
  { file: "01_1.png", label: "#1", type: "numbered" },
  { file: "02_10.png", label: "#10", type: "numbered" },
  { file: "03_120.png", label: "#120", type: "numbered" },
  { file: "04_14.png", label: "#14", type: "numbered" },
  { file: "05_16-24.png", label: "#16-24", type: "numbered" },
  { file: "06_16.png", label: "#16", type: "numbered" },
  { file: "07_2.png", label: "#2", type: "numbered" },
  { file: "08_22.png", label: "#22", type: "numbered" },
  { file: "09_3.png", label: "#3", type: "numbered" },
  { file: "10_30.png", label: "#30", type: "numbered" },
  { file: "11_4.png", label: "#4", type: "numbered" },
  { file: "12_5.png", label: "#5", type: "numbered" },
  { file: "13_6.png", label: "#6", type: "numbered" },
  { file: "14_60.png", label: "#60", type: "numbered" },
  { file: "15_613.png", label: "#613", type: "numbered" },
  { file: "16_8.png", label: "#8", type: "numbered" },
  { file: "17_1B.png", label: "1B", type: "numbered" },
  { file: "18_Ash_Blonde.jpg", label: "Ash Blonde", type: "named" },
  { file: "19_Auburn.jpg", label: "Auburn", type: "named" },
  { file: "20_Bamboo.jpg", label: "Bamboo", type: "named" },
  { file: "21_Cacao_Melt.jpg", label: "Cacao Melt", type: "named" },
  { file: "22_Cacao.jpg", label: "Cacao", type: "named" },
  { file: "23_Honey_Melt.jpg", label: "Honey Melt", type: "named" },
  { file: "24_Melted_Cream.jpg", label: "Melted Cream", type: "named" },
  { file: "25_Midnight.jpg", label: "Midnight", type: "named" },
  { file: "26_Sand.jpg", label: "Sand", type: "named" },
  { file: "27_Toasty_Blonde.jpg", label: "Toasty Blonde", type: "named" },
  { file: "28_Toasty.jpg", label: "Toasty", type: "named" },
  { file: "29_Vanilla.jpg", label: "Vanilla", type: "named" },
]

export default function ColorChartNo2Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/color-chart">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Colour Chart
            </Button>
          </Link>
          <Link href="/color-chart-no2#swatches">
            <Button variant="outline" size="sm">
              View All 29 Shades
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero text */}
      <section className="container px-4 md:px-6 py-12 text-center">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">
          DS Hair Beauty
        </p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
          Colour Chart No.2
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          29 premium shades of 100% Remy Human Hair. Each swatch shows the exact colour
          so you can confidently choose your match.
        </p>
      </section>

      {/* Named Colours Section */}
      <section className="container px-4 md:px-6 pb-8">
        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-center">
          Named Colours
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {colorShades
            .filter((c) => c.type === "named")
            .map((color) => (
              <div
                key={color.file}
                className="group relative bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={`/images/color-chart-no2/${color.file}`}
                    alt={`DS Hair Beauty — ${color.label} hair colour swatch`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>
                <div className="p-2 text-center bg-white">
                  <span className="text-sm font-semibold text-foreground">
                    {color.label}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Numbered Shades Section */}
      <section id="swatches" className="container px-4 md:px-6 pb-16">
        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-center">
          Numbered Shades
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {colorShades
            .filter((c) => c.type === "numbered")
            .map((color) => (
              <div
                key={color.file}
                className="group relative bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={`/images/color-chart-no2/${color.file}`}
                    alt={`DS Hair Beauty — ${color.label} hair colour swatch`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>
                <div className="p-2 text-center bg-white">
                  <span className="text-sm font-bold text-foreground">
                    {color.label}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* All Shades — combined view */}
      <section className="container px-4 md:px-6 pb-16">
        <div className="bg-muted/30 rounded-2xl p-6 md:p-10 max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-center">
            All 29 Shades at a Glance
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
            {colorShades.map((color) => (
              <div
                key={color.file}
                className="group relative bg-white rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-105"
              >
                <div className="aspect-square relative">
                  <Image
                    src={`/images/color-chart-no2/${color.file}`}
                    alt={`DS Hair Beauty — ${color.label} colour swatch`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 14vw"
                  />
                </div>
                <div className="p-1.5 text-center bg-white">
                  <span className="text-xs font-semibold text-foreground truncate block">
                    {color.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
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
          <Link href="/color-chart">
            <Button size="lg" variant="outline">
              View No.1 Colour Chart
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
