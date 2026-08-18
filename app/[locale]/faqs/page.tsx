import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld"
import { FAQsClient } from "@/app/faqs/faqs-client"
import { faqsContent, getFaqsContent } from "@/lib/i18n/pages/faqs"
import { localeStaticParams } from "@/lib/i18n/routing"
import { isLocale, defaultLocale, hreflangAlternates, ogLocale, SITE_URL, type Locale } from "@/lib/i18n/config"

export function generateStaticParams() {
  return localeStaticParams()
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) return {}
  const c = getFaqsContent(locale as Locale)
  const path = "/faqs"
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}${path}`,
      languages: hreflangAlternates(path),
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${SITE_URL}/${locale}${path}`,
      type: "website",
      locale: ogLocale[locale as Locale],
      siteName: "D.S HAIR & BEAUTY",
    },
  }
}

export default async function FaqsLocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  const c = getFaqsContent(locale as Locale)
  const faqs = c.categories.flatMap((cat) => cat.faqs.map((f) => ({ question: f.q, answer: f.a })))
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/${locale}` },
          { name: c.heroTitle, url: `${SITE_URL}/${locale}${"/faqs"}` },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <FAQsClient content={c} locale={locale as Locale} />
    </>
  )
}
