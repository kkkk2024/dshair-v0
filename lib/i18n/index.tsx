'use client'

import { usePathname } from 'next/navigation'
import { dictionaries } from './dictionaries'
import { isLocale, defaultLocale, type Locale } from './config'

// Derive the active locale from the first URL path segment.
// e.g. /de/... -> "de", / -> "en" (default). Works during SSR and on the client.
export function useLocale(): Locale {
  const pathname = usePathname() || '/'
  const seg = pathname.split('/').filter(Boolean)[0]
  return isLocale(seg) && seg !== defaultLocale ? (seg as Locale) : defaultLocale
}

export function useDict() {
  return dictionaries[useLocale()]
}
