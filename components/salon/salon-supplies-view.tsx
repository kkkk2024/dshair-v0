import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { BUNDLES, SINGLES, getSamplePack } from "@/lib/salon-consumables"
import { Package, Tag, ShoppingBag, ArrowRight, Sparkles, Truck, ShieldCheck, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getSalonSuppliesContent } from "@/lib/i18n/salon-supplies"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"

export function SalonSuppliesView({ locale = 'en' }: { locale?: Locale }) {
  const c = getSalonSuppliesContent(locale)
  const samplePack = getSamplePack()
  const basePath = localeHref('/salon-supplies', locale)

  function ProductCard({
    product,
    compact = false,
  }: {
    product: { id: string; name: string; slug: string; price: number; originalPrice?: number; shortDescription: string; image: string; badge?: string; category: string; weight: string }
    compact?: boolean
  }) {
    const whatsappLink = `https://wa.me/8613516946001?text=${encodeURIComponent(c.cardWhatsappMsg(product.name))}`

    return (
      <div className="group bg-background rounded-2xl border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
        <Link href={`${basePath}/${product.slug}`} className="relative aspect-square bg-muted/50 overflow-hidden block w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${
              product.badge === "Free" ? "bg-green-500 text-white" :
              product.badge === "Best Seller" || product.badge === "Pro Grade" ? "bg-primary text-primary-foreground" :
              product.badge === "Best Value" || product.badge === "Subscribe & Save" ? "bg-amber-500 text-black" :
              "bg-accent text-accent-foreground"
            }`}>
              {product.badge === "Free" ? c.cardFree : product.badge}
            </span>
          )}
        </Link>

        <div className="p-4 flex-1 flex flex-col gap-2">
          <Link href={`${basePath}/${product.slug}`}>
            <h3 className={`font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2 ${compact ? "text-sm" : "text-base"}`}>
              {product.name}
            </h3>
          </Link>
          {!compact && (
            <p className="text-xs text-muted-foreground line-clamp-2">{product.shortDescription}</p>
          )}
          <div className="mt-auto pt-2 flex items-baseline gap-2">
            {product.price === 0 ? (
              <span className={`font-bold ${compact ? "text-sm" : "text-lg"} text-green-600`}>{c.cardFree}</span>
            ) : (
              <>
                <span className={`font-bold ${compact ? "text-sm" : "text-lg"}`}>£{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">£{product.originalPrice}</span>
                )}
              </>
            )}
          </div>

          <div className="flex gap-2 pt-1">
            <Link href={`${basePath}/${product.slug}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full text-xs rounded-lg">
                {c.cardDetails}
              </Button>
            </Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button size="sm" className="w-full text-xs rounded-lg bg-green-600 hover:bg-green-700 text-white">
                {c.cardWhatsapp}
              </Button>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* ── Hero Banner ── */}
          <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2d1f2d] to-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
            <div className="container relative px-4 md:px-6 py-16 md:py-24 max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm">
                    <Sparkles className="h-4 w-4 text-amber-400" />
                    <span>{c.heroBadge}</span>
                  </div>
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                    {c.heroTitle1}
                    <br />
                    <span className="text-amber-400">{c.heroTitle2}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
                    {c.heroSubtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link href="#bundles">
                      <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full px-8">
                        {c.shopBundles} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    {samplePack && (
                      <Link href={`${basePath}/${samplePack.slug}`}>
                        <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                          <Gift className="mr-2 h-4 w-4" /> {c.freeSample}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="flex-1 relative hidden md:block">
                  <div className="grid grid-cols-2 gap-3">
                    {BUNDLES.slice(0, 4).map((bundle) => (
                      <div key={bundle.id} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center hover:bg-white/20 transition-colors">
                        <div className="text-2xl mb-1">💎</div>
                        <p className="text-sm font-medium">{bundle.name}</p>
                        <p className="text-xs text-white/60">from £{bundle.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Trust Badges ── */}
          <section className="border-b bg-muted/30">
            <div className="container px-4 md:px-6 py-6 max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {c.trustBadges.map((text, i) => {
                  const Icon = [Truck, ShieldCheck, Package, Tag][i] ?? Truck
                  return (
                    <div key={text} className="flex flex-col items-center gap-2">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">{text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ── Sample Pack CTA ── */}
          {samplePack && (
            <section className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
              <div className="container px-4 md:px-6 py-8 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shrink-0">
                      <Gift className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-900">{c.sampleCtaTitle}</h3>
                      <p className="text-sm text-amber-700">{c.sampleCtaText}</p>
                    </div>
                  </div>
                  <Link href={`${basePath}/${samplePack.slug}`}>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 whitespace-nowrap">
                      {c.sampleCtaButton} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* ── Bundles Section ── */}
          <section id="bundles" className="py-16 md:py-20">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">{c.bundlesEyebrow}</span>
                <h2 className="font-serif text-3xl md:text-4xl font-medium mt-3 mb-4">
                  {c.bundlesTitle}
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  {c.bundlesText}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {BUNDLES.map((bundle) => (
                  <ProductCard key={bundle.id} product={bundle} />
                ))}
              </div>
            </div>
          </section>

          {/* ── Singles Section ── */}
          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">{c.singlesEyebrow}</span>
                <h2 className="font-serif text-3xl md:text-4xl font-medium mt-3 mb-4">
                  {c.singlesTitle}
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  {c.singlesText}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {SINGLES.map((item) => (
                  <ProductCard key={item.id} product={item} compact />
                ))}
              </div>
            </div>
          </section>

          {/* ── Why Us Section ── */}
          <section className="py-16 md:py-20">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                  {c.whyTitle}
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  {c.whyText}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {c.whyItems.map((item, i) => (
                  <div key={item.title} className="flex gap-4 p-4">
                    <span className="text-2xl shrink-0">{['💰', '📦', '💬', '🚚', '✅', '🔄'][i]}</span>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="py-16 bg-muted/30">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-center mb-10">{c.faqTitle}</h2>
              <div className="space-y-4">
                {c.faqs.map((faq, i) => (
                  <details key={i} className="bg-background rounded-xl p-5 border cursor-pointer group">
                    <summary className="font-medium text-sm flex justify-between items-center list-none">
                      {faq.q}
                      <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── Bottom WhatsApp CTA ── */}
          <section className="py-16 bg-[#1a1a1a] text-white text-center">
            <div className="container px-4 md:px-6 max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center mx-auto">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium">
                {c.waTitle}
              </h2>
              <p className="text-white/70">
                {c.waText}
              </p>
              <a
                href={`https://wa.me/8613516946001?text=${encodeURIComponent(c.waWhatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
              >
                {c.waButton} <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
