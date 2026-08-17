import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale, isLocale } from '@/lib/i18n/config'

// Detects the active locale from the first path segment and exposes it to the
// app via (1) request headers consumed by the root layout (for <html lang/dir>)
// and (2) a cookie consumed by client components like Header/Footer.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static assets, API routes and SEO files — they must not be rewritten.
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const segments = pathname.split('/').filter(Boolean)
  const maybe = segments[0]

  // /en is the default — redirect to the unprefixed URL to avoid duplicates.
  if (maybe === 'en') {
    const rest = segments.slice(1).join('/')
    return NextResponse.redirect(
      new URL(rest ? `/${rest}` : '/', request.url)
    )
  }

  const locale: string =
    maybe && isLocale(maybe) && maybe !== defaultLocale ? maybe : defaultLocale

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', locale)
  requestHeaders.set('x-dir', locale === 'ar' ? 'rtl' : 'ltr')

  const response = NextResponse.next({ request: { headers: requestHeaders } })
  response.cookies.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
