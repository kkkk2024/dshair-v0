import type { Metadata } from "next"
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
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
