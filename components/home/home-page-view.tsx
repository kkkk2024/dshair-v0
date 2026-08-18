import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"
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
import type { Locale } from "@/lib/i18n/config"

export function HomePageView({ locale }: { locale: Locale }) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection locale={locale} />
          <BrandValues locale={locale} />
          <SalonTrustSection locale={locale} />
          <CategoryGrid locale={locale} />
          <FeaturedProducts locale={locale} />
          <DualPathSection locale={locale} />
          <ServicesSection locale={locale} />
          <TestimonialsSection locale={locale} />
          <InstagramSection locale={locale} />
          <QuickQuoteSection locale={locale} />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
