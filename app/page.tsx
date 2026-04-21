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
import { OrganizationJsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Trade Hair Extension Supplier UK | Wholesale for Salons | D.S Hair Beauty",
  description:
    "UK's trusted trade supplier of 100% Remy human hair extensions for salons. Tape-In, K-Tip, Weft, Butterfly Weft & Toppers. Manchester-based with nationwide delivery.",
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk",
  },
  openGraph: {
    title: "Professional Hair Extensions UK | Wholesale Supplier | D.S HAIR & BEAUTY",
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
      <OrganizationJsonLd />
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
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
