import { locales, defaultLocale, type Locale } from './config'

// Pages that have been localized and exist under /[locale]/<page>
// Add a path here as soon as its localized version is deployed.
export const translatedPages = new Set<string>([
  '/about',
  '/contact',
  '/trade-wholesale',
  '/why-choose-us',
  '/salon-partners',
])

// Returns the correct href for a given locale.
// - English: unchanged (root path, e.g. /about)
// - Other locale: /{locale}{path} if that localized page exists, otherwise
//   falls back to the English path (graceful, no 404).
export function localeHref(href: string, locale: Locale): string {
  if (locale === defaultLocale) return href
  const path = href.startsWith('/') ? href : `/${href}`
  if (path === '/' || path === '') return `/${locale}`
  if (translatedPages.has(path)) return `/${locale}${path}`
  return path
}

// Shared generateStaticParams for any route under /[locale]
export function localeStaticParams() {
  return locales.filter((l) => l !== defaultLocale).map((l) => ({ locale: l }))
}
