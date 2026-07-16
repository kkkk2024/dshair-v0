import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, Sparkles, Palette } from "lucide-react"

export const metadata = {
  title: "2026 Manchester Colour Collection: The Shades Every Salon Needs | D.S HAIR & BEAUTY",
  description:
    "The definitive 2026 colour guide for Manchester salons. From Icy Manchester platinum to Cinnamon Copper — discover the shades your clients are asking for, curated by D.S Hair Beauty.",
}

export default function ManchesterColourCollection2026() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">

          {/* ── Hero ─────────────────────────────────── */}
          <section className="relative bg-[#1C1C2E] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 15% 50%, #C9A84C 0%, transparent 45%), radial-gradient(circle at 85% 30%, #8B6A9A 0%, transparent 50%), radial-gradient(circle at 50% 80%, #D4956A 0%, transparent 40%)",
                }}
              />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                <Palette className="h-4 w-4" /> Colour Trend Report · 2026
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                The Manchester Edit<br />
                <span className="text-amber-300">2026 Colour Collection</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Curated for the modern Manchester woman. From ice-cold platinum to lived-in brunette — every shade tells a story.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/color-chart">View Colour Chart</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/salon-partners">Trade Account</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ── Colour Swatch Bar ─────────────────────── */}
          <section className="bg-white border-b">
            <div className="max-w-5xl mx-auto px-4 py-6">
              <div className="flex justify-center gap-3 flex-wrap">
                {[
                  { name: "Icy Manchester", hex: "#F0EFED" },
                  { name: "Cloud Dancer", hex: "#EAE8E0" },
                  { name: "Cookies & Cream", hex: "#C9A97A" },
                  { name: "Espresso", hex: "#2C1810" },
                  { name: "Brownie Batter", hex: "#4A2C1A" },
                  { name: "Manchester Melt", hex: "#8B6340" },
                  { name: "Cinnamon Copper", hex: "#C46A3A" },
                ].map((colour) => (
                  <div key={colour.name} className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-10 h-10 rounded-full border border-gray-200 shadow-sm"
                      style={{ backgroundColor: colour.hex }}
                    />
                    <span className="text-[10px] text-muted-foreground text-center max-w-[60px] leading-tight">
                      {colour.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">

            {/* ── Breadcrumb ───────────────────────── */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-10">
              <span className="bg-primary/10 text-primary rounded-full px-3 py-1 font-medium">Colour Trend</span>
              <span>April 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 6 min read</span>
            </div>

            {/* ── SECTION 1: Core Shades ───────────── */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">✦</span>
                <h2 className="font-serif text-3xl md:text-4xl font-medium">
                  Section 1: Core Shades
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 pl-9">
                The Everyday Essentials — colours Manchester salons reach for, day in, day out.
              </p>

              {/* Card 1: Icy Manchester */}
              <div className="rounded-2xl overflow-hidden border bg-card mb-8">
                <div className="h-3" style={{ background: "linear-gradient(to right, #F0EFED, #E8E4D8, #F5F0E8)" }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-1">❄️ Icy Manchester / Cloud Dancer</h3>
                      <p className="text-sm text-muted-foreground font-mono">Shades: #60 · #P18/60 · Viking Blonde</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {["#F0EFED", "#E8E4D8", "#F5F0E8"].map((c) => (
                        <div key={c} className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    The signature of the Manchester girl. Pure, cool, zero brass — this is platinum done properly.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Inspired by the city&apos;s grey skies and the effortless cool of local icons, Icy Manchester delivers the kind of faultless, icy finish that turns heads on Deansgate. Cloud Dancer — one of 2026&apos;s defining colour trends — is exactly this: luminous, chilled, and completely unbothered.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-secondary/50 rounded-xl p-4">
                    <div>
                      <span className="font-medium">Best for:</span>
                      <span className="text-muted-foreground ml-2">High-lift blondes, full-head applications, celebrity-style transformations</span>
                    </div>
                    <div>
                      <span className="font-medium">Client profile:</span>
                      <span className="text-muted-foreground ml-2">The bold Manchester woman who knows exactly what she wants</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Cookies & Cream */}
              <div className="rounded-2xl overflow-hidden border bg-card mb-8">
                <div className="h-3" style={{ background: "linear-gradient(to right, #C9A97A, #B8956A, #D4B090)" }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-1">☕ Cookies & Cream / Bronde Mix</h3>
                      <p className="text-sm text-muted-foreground font-mono">Shades: #18/22 · #10/16 · Biscuit</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {["#C9A97A", "#B8956A", "#D4B090"].map((c) => (
                        <div key={c} className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    2026&apos;s most wearable colour. Not quite blonde, not quite brunette — just effortlessly <em>right</em>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Cookies & Cream lives between golden blonde and warm brown, creating a dimension that makes hair look naturally healthy and luminous. This is the ultimate low-maintenance shade for clients who want to look expensive without living in the salon chair.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-secondary/50 rounded-xl p-4">
                    <div>
                      <span className="font-medium">Best for:</span>
                      <span className="text-muted-foreground ml-2">Blending, balayage finishes, colour corrections, tone softening</span>
                    </div>
                    <div>
                      <span className="font-medium">Client profile:</span>
                      <span className="text-muted-foreground ml-2">The time-pressed professional who wants maximum impact with minimum upkeep</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Espresso */}
              <div className="rounded-2xl overflow-hidden border bg-card mb-8">
                <div className="h-3" style={{ background: "linear-gradient(to right, #2C1810, #4A2C1A, #3A2010)" }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-1">🍫 Espresso / Brownie Batter</h3>
                      <p className="text-sm text-muted-foreground font-mono">Shades: #1 · #1B · #2 · #4</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {["#2C1810", "#4A2C1A", "#6B3A20"].map((c) => (
                        <div key={c} className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Deep, rich, mirror-glossy. Brunette the way it was meant to be worn.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Manchester&apos;s winter palette reaches its peak with these deep, velvety chocolate shades. Espresso and Brownie Batter deliver that coveted <em>wet-look</em> shine — the kind that photographs like liquid silk. Strong demand through winter into early spring.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-secondary/50 rounded-xl p-4">
                    <div>
                      <span className="font-medium">Best for:</span>
                      <span className="text-muted-foreground ml-2">Full-length dark applications, gloss treatments, sleek styling</span>
                    </div>
                    <div>
                      <span className="font-medium">Client profile:</span>
                      <span className="text-muted-foreground ml-2">The sophisticated city woman who lets her hair do the talking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── SECTION 2: Trend Shades ──────────── */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="h-6 w-6 text-amber-500" />
                <h2 className="font-serif text-3xl md:text-4xl font-medium">
                  Section 2: Trend Shades
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 pl-9">
                The Statement Makers — for salons that want to lead, not follow.
              </p>

              {/* Card 4: Manchester Melt */}
              <div className="rounded-2xl overflow-hidden border bg-card mb-8">
                <div className="h-3" style={{ background: "linear-gradient(to right, #3A2C18, #8B6340, #D4B080)" }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-1">🌅 Manchester Melt / Lived-in Blonde</h3>
                      <p className="text-sm text-muted-foreground font-mono">Shades: T2/6 · T4/18 · T6/60</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {["#3A2C18", "#8B6340", "#D4B080"].map((c) => (
                        <div key={c} className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    The end of hard lines. The beginning of something beautiful.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Manchester Melt is the answer to every client who says <em>&quot;I don&apos;t want it to look like extensions.&quot;</em> With 2–3cm of natural root shadow melting seamlessly into lighter lengths, these rooted and blended shades are impossible to detect at the hairline — and impossible to ignore in the mirror.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    High-end salons across Manchester are already making this their signature look. Don&apos;t get left behind.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-secondary/50 rounded-xl p-4">
                    <div>
                      <span className="font-medium">Best for:</span>
                      <span className="text-muted-foreground ml-2">Lived-in colour, seamless blending, high-end extension work</span>
                    </div>
                    <div>
                      <span className="font-medium">Client profile:</span>
                      <span className="text-muted-foreground ml-2">The discerning client willing to invest in something genuinely natural</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5: Cinnamon Copper */}
              <div className="rounded-2xl overflow-hidden border bg-card mb-8">
                <div className="h-3" style={{ background: "linear-gradient(to right, #8B3A1A, #C46A3A, #E08050)" }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-1">🔶 Cinnamon Copper / Digital Copper</h3>
                      <p className="text-sm text-muted-foreground font-mono">Shades: #30 · #33 · Amber</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {["#8B3A1A", "#C46A3A", "#E08050"].map((c) => (
                        <div key={c} className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    Not orange. Not red. Just warm, woody, and completely irresistible.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    2026&apos;s breakthrough trend colour: Digital Copper. This isn&apos;t the copper of years past — it&apos;s softer, richer, with the warmth of cinnamon and the depth of autumn leaves. Cinnamon Copper is the shade lighting up editorial pages and Instagram feeds from London to Manchester this spring.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-secondary/50 rounded-xl p-4">
                    <div>
                      <span className="font-medium">Best for:</span>
                      <span className="text-muted-foreground ml-2">Spring refreshes, colour pops, warm-toned transformations</span>
                    </div>
                    <div>
                      <span className="font-medium">Client profile:</span>
                      <span className="text-muted-foreground ml-2">The trend-aware client ready to make a move</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CTA ─────────────────────────────────── */}
            <div className="rounded-2xl bg-[#1C1C2E] text-white p-8 md:p-12 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 70% 50%, #8B6A9A 0%, transparent 50%)",
                }}
              />
              <div className="relative">
                <p className="text-amber-300 text-sm tracking-widest uppercase mb-4">100% Remy Human Hair</p>
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                  Every shade in our 2026 collection is crafted with 19 years of expertise behind every strand.
                </h3>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">
                  Manchester stock. Next-day delivery. This isn&apos;t just hair. This is your signature.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/color-chart">Shop by Colour</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/salon-partners">Open a Trade Account</Link>
                  </Button>
                </div>
              </div>
            </div>

          </article>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
