import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { AuthTabs } from "@/components/auth/auth-tabs"
import { getAccountContent } from "@/lib/i18n/pages/account"
import { SITE_URL, isLocale, defaultLocale, ogLocale, hreflangAlternates, type Locale } from "@/lib/i18n/config"
import { localeStaticParams } from "@/lib/i18n/routing"

export function generateStaticParams() {
  return localeStaticParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  const c = getAccountContent(locale)
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/account`,
      languages: hreflangAlternates("/account"),
    },
    openGraph: {
      locale: ogLocale[locale],
    },
  }
}

export default async function LocaleAccountPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">
                  {getAccountContent(locale).welcomeHeading}
                </h1>
                <p className="text-muted-foreground">
                  {getAccountContent(locale).welcomeSubtitle}
                </p>
              </div>
              <AuthTabs locale={locale as Locale} />
            </div>
          </div>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
