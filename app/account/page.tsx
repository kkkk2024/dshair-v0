import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { AuthTabs } from "@/components/auth/auth-tabs"
import { getAccountContent } from "@/lib/i18n/pages/account"
import { SITE_URL, hreflangAlternates } from "@/lib/i18n/config"

const c = getAccountContent("en")

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/account`,
    languages: hreflangAlternates("/account"),
  },
}

export default function AccountPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">
                  {c.welcomeHeading}
                </h1>
                <p className="text-muted-foreground">
                  {c.welcomeSubtitle}
                </p>
              </div>
              <AuthTabs locale="en" />
            </div>
          </div>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
