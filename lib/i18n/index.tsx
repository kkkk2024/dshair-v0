'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { dictionaries } from './dictionaries'
import type { Locale } from './config'

const LocaleContext = createContext<Locale>('en')

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  )
}

export function useLocale(): Locale {
  return useContext(LocaleContext)
}

export function useDict() {
  const locale = useLocale()
  return dictionaries[locale]
}
