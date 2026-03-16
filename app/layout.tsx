import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "D.S HAIR & BEAUTY | Professional Hair Extensions UK",
  description: "World's #1 Brand for Professional and Do-It-Yourself Hair Extensions. Premium 100% Remy Human Hair. Based in Manchester, UK.",
  keywords: ['hair extensions', 'clip-in hair', 'tape-in extensions', 'professional hair extensions', 'UK hair extensions', 'Manchester'],
  authors: [{ name: 'D.S HAIR & BEAUTY' }],
  openGraph: {
    title: 'D.S HAIR & BEAUTY | Premium Hair Extensions UK',
    description: "World's #1 Brand for Professional and Do-It-Yourself Hair Extensions",
    type: 'website',
    locale: 'en_GB',
    siteName: 'D.S HAIR & BEAUTY',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
