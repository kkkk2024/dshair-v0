import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { TradeAccountForm } from "@/components/account/trade-account-form"
import { getTradeAccountContent } from "@/lib/i18n/pages/trade-account"
import {
  SITE_URL,
  isLocale,
  defaultLocale,
  ogLocale,
  hreflangAlternates,
  type Locale,
} from "@/lib/i18n/config"
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
  const c = getTradeAccountContent(locale)
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${SITE_URL}/${locale}/account`,
      languages: hreflangAlternates("/account"),
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${SITE_URL}/${locale}/account`,
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
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Trade Account", url: `${SITE_URL}/${locale}/account` },
        ]}
      />
      <TradeAccountForm locale={locale as Locale} />
    </>
  )
}
