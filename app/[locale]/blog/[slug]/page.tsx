import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SITE_URL, isLocale, defaultLocale, ogLocale, hreflangAlternates, type Locale } from "@/lib/i18n/config"
import { localeStaticParams } from "@/lib/i18n/routing"
import { blogViews } from "@/lib/i18n/blog-registry"
import { getBlogContent, getAllBlogSlugs } from "@/lib/i18n/blog"

type PageProps = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  const locales = localeStaticParams().map((p) => p.locale)
  return locales.flatMap((locale) => getAllBlogSlugs().map((slug) => ({ locale, slug })))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  const content = getBlogContent(slug, locale as Locale)
  if (!content) return {}

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog/${slug}`,
      languages: hreflangAlternates(`/blog/${slug}`),
    },
    openGraph: {
      title: content.seoTitle,
      description: content.seoDescription,
      url: `${SITE_URL}/${locale}/blog/${slug}`,
      type: "article",
      locale: ogLocale[locale],
    },
  }
}

export default async function LocaleBlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  const View = blogViews[slug]
  if (!View) notFound()
  return <View locale={locale as Locale} />
}
