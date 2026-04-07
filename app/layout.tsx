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
    site: '@d.shairbeauty',
    creator: '@d.shairbeauty',
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
      <head>
        {/* TikTok Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};


  ttq.load('D7AHG73C77U8CCU0GL80');
  ttq.page();
}(window, document, 'ttq');
`
          }}
        />
        {/* Pinterest Domain Verification */}
        <meta name="p:domain_verify" content="dcc4d0abd5f7405c205b0872574efb47"/>
      </head>
      <body className="font-sans antialiased">
        <OrganizationJsonLd />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
