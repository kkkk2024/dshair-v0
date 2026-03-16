import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { AuthTabs } from "@/components/auth/auth-tabs"

export const metadata = {
  title: "Account | D.S HAIR & BEAUTY",
  description: "Sign in or create an account to manage your orders, wishlist, and more.",
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
                  Welcome
                </h1>
                <p className="text-muted-foreground">
                  Sign in to your account or create a new one
                </p>
              </div>
              <AuthTabs />
            </div>
          </div>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
