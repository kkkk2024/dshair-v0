import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ExtensionSpecsView } from "@/components/pages/extension-specs-view"
import { getExtensionSpecsContent } from "@/lib/i18n/pages/extension-specs"
import { SITE_URL, isLocale, defaultLocale, ogLocale, type Locale } from "@/lib/i18n/config"
import { localeStaticParams, hreflangAlternates } from "@/lib/i18n/routing"

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
  const c = getExtensionSpecsContent(locale)
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/extension-specs`,
      languages: hreflangAlternates("/extension-specs"),
    },
    openGraph: {
      locale: ogLocale[locale],
    },
  }
}

export default async function LocaleExtensionSpecsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  return <ExtensionSpecsView locale={locale as Locale} />
}
