import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogListView } from "@/components/blog/blog-list-view"
import { blogListContent } from "@/lib/i18n/blog/list"
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
  const c = blogListContent[locale as Locale]
  return {
    title: c.heroTitle,
    description: c.heroSubtitle,
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog`,
      languages: hreflangAlternates("/blog"),
    },
    openGraph: {
      title: c.heroTitle,
      description: c.heroSubtitle,
      url: `${SITE_URL}/${locale}/blog`,
      type: "article",
      locale: ogLocale[locale],
    },
  }
}

export default async function LocaleBlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  return <BlogListView locale={locale as Locale} />
}
