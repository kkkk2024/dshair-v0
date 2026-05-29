import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { HeroSection } from "@/components/home/hero-section"
import { BrandValues } from "@/components/home/brand-values"
import { SalonTrustSection } from "@/components/home/salon-trust-section"
import { TrustBadgesSection } from "@/components/home/trust-badges"
import { CategoryGrid } from "@/components/home/category-grid"
import { FeaturedProducts } from "@/components/home/featured-products"
import { DualPathSection } from "@/components/home/dual-path-section"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { InstagramSection } from "@/components/home/instagram-section"
import { OrganizationJsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Factory-Direct Hair Extensions UK | Trade Wholesale for Salons | D.S Hair Beauty",
  description:
    "China-based manufacturer of 100% Remy human hair extensions. UK-warehoused stock in Manchester for fast salon supply. Tape-In, K-Tip, Weft, Butterfly Weft & Toppers. Factory-direct trade pricing, 19+ years experience.",
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk",
  },
  openGraph: {
    title: "Factory-Direct Hair Extensions UK | Trade Wholesale | D.S Hair Beauty",
    description:
      "Factory-direct Remy human hair extensions. UK-warehoused stock. Trade pricing for professional salons. 19 years industry expertise.",
    url: "https://www.dshairbeauty.co.uk",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function HomePage() {
  return (
    <CartProvider>
      <OrganizationJsonLd />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <BrandValues />
          <SalonTrustSection />
          <TrustBadgesSection />
          <CategoryGrid />
          <FeaturedProducts />
          <DualPathSection />
          <ServicesSection />
          <TestimonialsSection />
          <InstagramSection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
