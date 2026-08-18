import { locales, defaultLocale, type Locale } from './config'

// Static pages that have been localized and exist under /[locale]/<page>
// Add a path here as soon as its localized version is deployed.
export const translatedPages = new Set<string>([
  '/about',
  '/contact',
  '/trade-wholesale',
  '/why-choose-us',
  '/salon-partners',
  // Bare dynamic-index pages that DO have a localized /[locale]/<page> variant.
  // (Sub-paths like /salon-supplies/<slug> are handled by translatedDynamicPrefixes.)
  '/salon-supplies',
  '/colour-match',
  '/color-chart',
  '/faqs',
  '/shipping',
  '/returns',
  '/solutions',
  '/switch-trade-supplier',
  '/trade-price-calculator',
  '/extension-specs',
  '/academy',
])

// Dynamic route prefixes that are localized under /[locale]/<prefix>/<...>
// e.g. /collections/clip-in -> /de/collections/clip-in
export const translatedDynamicPrefixes = new Set<string>([
  '/collections/',
  '/products/',
  '/salon-supplies/',
  // Pending: /[locale]/uk-salon-hair-extensions route not built yet (Batch 7)
  // '/uk-salon-hair-extensions/',
  // Pending: /[locale]/blog route not built yet (Phase 3)
  // '/blog/',
])

function hasTranslatedPrefix(path: string): boolean {
  for (const prefix of translatedDynamicPrefixes) {
    if (path.startsWith(prefix)) return true
  }
  return false
}

// Returns the correct href for a given locale.
// - English: unchanged (root path, e.g. /about)
// - Other locale: /{locale}{path} if that localized page exists, otherwise
//   falls back to the English path (graceful, no 404).
export function localeHref(href: string, locale: Locale): string {
  if (locale === defaultLocale) return href
  const path = href.startsWith('/') ? href : `/${href}`
  if (path === '/' || path === '') return `/${locale}`
  if (translatedPages.has(path)) return `/${locale}${path}`
  if (hasTranslatedPrefix(path)) return `/${locale}${path}`
  return path
}

// Shared generateStaticParams for any route under /[locale]
export function localeStaticParams() {
  return locales.filter((l) => l !== defaultLocale).map((l) => ({ locale: l }))
}
