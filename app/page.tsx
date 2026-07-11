import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { HeroSection } from "@/components/home/hero-section"
import { BrandValues } from "@/components/home/brand-values"
import { SalonTrustSection } from "@/components/home/salon-trust-section"
import { CategoryGrid } from "@/components/home/category-grid"
import { FeaturedProducts } from "@/components/home/featured-products"
import { DualPathSection } from "@/components/home/dual-path-section"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { InstagramSection } from "@/components/home/instagram-section"
import { QuickQuoteSection } from "@/components/home/quick-quote-section"
import { ServiceJsonLd, ReviewJsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Wholesale Hair Extensions UK | Trade Supplier for Salons | D.S Hair Beauty",
  description:
    "UK's #1 trade supplier of 100% Remy human hair extensions. Tape-In, K-Tip, Hand-Tied Weft, Butterfly Weft & Toppers. Wholesale pricing for professional salons. Free UK delivery over £50.",
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk",
  },
  openGraph: {
    title: "Hair Extensions Manchester | Premium Salon-Grade | D.S Hair Beauty",
    description:
      "UK's trusted wholesale hair extension supplier. 100% Remy human hair. Trade pricing for salons. 19 years expertise.",
    url: "https://www.dshairbeauty.co.uk",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function HomePage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <ServiceJsonLd />
        <ReviewJsonLd />
        <Header />
        <main className="flex-1">
          <HeroSection />
          <BrandValues />
          <SalonTrustSection />
          <CategoryGrid />
          <FeaturedProducts />
          <DualPathSection />
          <ServicesSection />
          <TestimonialsSection />
          <InstagramSection />
          <QuickQuoteSection />

          {/* SEO Content Section — keyword-rich text for search engines */}
          <section className="py-16 bg-secondary/50" aria-label="About our hair extension supply services">
            <div className="container px-4 md:px-6 max-w-5xl">
              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-center">
                Wholesale Hair Extensions UK — Trusted by 500+ Professional Salons
              </h2>
              <div className="max-w-none text-muted-foreground space-y-4">
                <p className="leading-relaxed text-base md:text-lg">
                  D.S HAIR & BEAUTY is the UK&apos;s trusted wholesale hair extension supplier, based in Manchester and serving professional salons across England, Scotland, and Wales since 2007. We supply 100% Remy human hair extensions at factory-direct prices, cutting out the middleman to give salons the best value without compromising on quality.
                </p>
                <p className="leading-relaxed text-base md:text-lg">
                  Our comprehensive range includes <Link href="/collections/tape-in" className="text-primary underline">tape-in hair extensions</Link>, <Link href="/collections/k-tip" className="text-primary underline">K-tip keratin bond extensions</Link>, <Link href="/collections/nano-ring" className="text-primary underline">nano ring extensions</Link>, <Link href="/collections/weft" className="text-primary underline">hand-tied weft extensions</Link>, <Link href="/collections/butterfly-weft" className="text-primary underline">butterfly weft extensions</Link>, <Link href="/collections/clip-in" className="text-primary underline">clip-in extensions</Link>, ponytail extensions, and <Link href="/collections/hair-toppers" className="text-primary underline">hair toppers</Link>. Every product is 100% Remy human hair — cuticle-aligned, ethically sourced, and quality-checked.
                </p>
                <p className="leading-relaxed text-base md:text-lg">
                  We serve salons in <Link href="/cities/manchester" className="text-primary underline">Manchester</Link>, <Link href="/cities/london" className="text-primary underline">London</Link>, <Link href="/cities/birmingham" className="text-primary underline">Birmingham</Link>, <Link href="/cities/liverpool" className="text-primary underline">Liverpool</Link>, <Link href="/cities/leeds" className="text-primary underline">Leeds</Link>, <Link href="/cities/sheffield" className="text-primary underline">Sheffield</Link>, <Link href="/cities/bristol" className="text-primary underline">Bristol</Link>, <Link href="/cities/edinburgh" className="text-primary underline">Edinburgh</Link>, <Link href="/cities/glasgow" className="text-primary underline">Glasgow</Link>, <Link href="/cities/cardiff" className="text-primary underline">Cardiff</Link>, <Link href="/cities/nottingham" className="text-primary underline">Nottingham</Link>, and <Link href="/cities/newcastle" className="text-primary underline">Newcastle</Link> with same-day dispatch and next-day delivery across the UK.
                </p>
                <p className="leading-relaxed text-base md:text-lg">
                  Whether you&apos;re looking for <strong>wholesale hair extensions in Manchester</strong>, a <strong>professional hair extension supplier in London</strong>, or <strong>trade hair extensions UK</strong>-wide, D.S HAIR & BEAUTY offers factory-direct pricing, free colour matching, and a dedicated salon partner program. Open a <Link href="/trade-wholesale" className="text-primary underline">trade account</Link> today to access wholesale pricing.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
