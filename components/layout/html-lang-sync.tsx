'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { isLocale, defaultLocale, dir, type Locale } from '@/lib/i18n/config'

// Keeps <html lang> and <html dir> in sync with the active locale.
// The root layout renders a static default; this corrects it on the client
// (needed for Arabic RTL and accurate lang attributes without forcing the
// whole layout to be dynamically rendered).
export function HtmlLangSync() {
  const pathname = usePathname()
  useEffect(() => {
    const seg = (pathname || '/').split('/').filter(Boolean)[0]
    const locale: Locale =
      isLocale(seg) && seg !== defaultLocale ? (seg as Locale) : defaultLocale
    const el = document.documentElement
    el.lang = locale
    el.dir = dir(locale)
  }, [pathname])
  return null
}
