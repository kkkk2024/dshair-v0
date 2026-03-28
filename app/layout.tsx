import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'
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
  title: "D.S HAIR & BEAUTY | Professional Hair Extensions Supplier Manchester UK",
  description: "Manchester-based wholesale hair extension supplier. 100% Remy human hair — hand-tied weft, balayage, nano ring, tape-in. Trade pricing for professional salons. 19 years industry experience.",
  keywords: [
    'hair extensions Manchester', 'wholesale hair extensions UK', 'hand tied weft supplier',
    'balayage hair extensions wholesale', 'nano ring extensions Manchester',
    'tape in extensions trade', 'professional hair extensions supplier UK',
    'salon hair extensions wholesale', 'remy human hair extensions Manchester',
    'hair extension supplier Manchester', 'trade hair extensions UK'
  ],
  authors: [{ name: 'D.S HAIR & BEAUTY' }],
  openGraph: {
    title: 'D.S HAIR & BEAUTY | Professional Hair Extension Supplier Manchester',
    description: "Manchester's trusted wholesale hair extension supplier. 100% Remy human hair. Trade pricing for professional salons. 19 years industry expertise.",
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
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
