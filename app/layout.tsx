import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'
import { OrganizationJsonLd } from '@/components/seo/json-ld'
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
  metadataBase: new URL('https://www.dshairbeauty.co.uk'),
  title: {
    default: "D.S HAIR & BEAUTY | Professional Hair Extensions Supplier Manchester UK",
    template: "%s | D.S HAIR & BEAUTY",
  },
  description: "Manchester-based wholesale hair extension supplier. 100% Remy human hair — hand-tied weft, balayage, nano ring, tape-in. Trade pricing for professional salons. 19 years industry experience.",
  keywords: [
    'hair extensions Manchester', 'wholesale hair extensions UK', 'hand tied weft supplier',
    'balayage hair extensions wholesale', 'nano ring extensions Manchester',
    'tape in extensions trade', 'professional hair extensions supplier UK',
    'salon hair extensions wholesale', 'remy human hair extensions Manchester',
    'hair extension supplier Manchester', 'trade hair extensions UK',
    'human hair extensions wholesale', 'salon supplier Manchester',
  ],
  authors: [{ name: 'D.S HAIR & BEAUTY', url: 'https://www.dshairbeauty.co.uk' }],
  creator: 'D.S HAIR & BEAUTY',
  publisher: 'D.S HAIR & BEAUTY',
  alternates: {
    canonical: 'https://www.dshairbeauty.co.uk',
  },
  openGraph: {
    title: 'D.S HAIR & BEAUTY | Professional Hair Extension Supplier Manchester',
    description: "Manchester's trusted wholesale hair extension supplier. 100% Remy human hair. Trade pricing for professional salons. 19 years industry expertise.",
    type: 'website',
    url: 'https://www.dshairbeauty.co.uk',
    locale: 'en_GB',
    siteName: 'D.S HAIR & BEAUTY',
    // opengraph-image.tsx auto-generates the image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D.S HAIR & BEAUTY | Professional Hair Extension Supplier Manchester',
    description: "Manchester's trusted wholesale hair extension supplier. 100% Remy human hair. Trade pricing for professional salons.",
    site: '@dshairbeauty',
    creator: '@dshairbeauty',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  verification: {
    // Add Google Search Console verification token when available
    // google: 'your-verification-token',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <OrganizationJsonLd />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
