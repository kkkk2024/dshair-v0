import type { Locale } from "./config"
import { seoPages as enSeoPages, type SeoPage } from "../seo-pages"
import { deSeoPages } from "./seo-pages-de"
import { frSeoPages } from "./seo-pages-fr"
import { arSeoPages } from "./seo-pages-ar"
import { svSeoPages } from "./seo-pages-sv"
import { plSeoPages } from "./seo-pages-pl"

export const localizedSeoPages: Record<Locale, SeoPage[]> = {
  en: enSeoPages,
  de: deSeoPages,
  fr: frSeoPages,
  ar: arSeoPages,
  sv: svSeoPages,
  pl: plSeoPages,
}

export function getLocalizedSeoPage(
  slug: string,
  locale: Locale,
): SeoPage | undefined {
  const list = localizedSeoPages[locale] ?? localizedSeoPages.en
  return list.find((p) => p.slug === slug)
}

export function getLocalizedSeoPages(locale: Locale): SeoPage[] {
  return localizedSeoPages[locale] ?? localizedSeoPages.en
}
