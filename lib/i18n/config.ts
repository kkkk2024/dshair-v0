export const locales = ['en', 'de', 'fr', 'ar', 'sv', 'pl'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const rtlLocales: Locale[] = ['ar']

// Human-readable names for the language switcher
export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ar: 'العربية',
  sv: 'Svenska',
  pl: 'Polski',
}

// Locales we actively translate (everything except the default English)
export const translatedLocales: Locale[] = locales.filter(
  (l) => l !== defaultLocale
) as Locale[]

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}

export function dir(locale: Locale): 'ltr' | 'rtl' {
  return rtlLocales.includes(locale) ? 'rtl' : 'ltr'
}

// Base URL used for hreflang / canonical absolute links
export const SITE_URL = 'https://www.dshairbeauty.co.uk'

// OpenGraph locale tags per language
export const ogLocale: Record<Locale, string> = {
  en: 'en_GB',
  de: 'de_DE',
  fr: 'fr_FR',
  ar: 'ar_AR',
  sv: 'sv_SE',
  pl: 'pl_PL',
}

// Builds the hreflang alternates map for a given path ('' = homepage).
// Includes x-default pointing at the English (root) URL.
export function hreflangAlternates(path = ''): Record<string, string> {
  const map: Record<string, string> = {}
  for (const l of locales) {
    map[l] = l === 'en' ? `${SITE_URL}${path}` : `${SITE_URL}/${l}${path}`
  }
  map['x-default'] = `${SITE_URL}${path}`
  return map
}
