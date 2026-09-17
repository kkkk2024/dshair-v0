/* Build cache invalidated: FORCE_FULL_REBUILD */
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    // Note on ordering: Next.js checks redirects BEFORE the filesystem, so any
    // catch-all here would take priority over a real page. Nothing in this list
    // therefore shadows a route the site actually serves — wildcards are only
    // used on path families this site does not own (e.g. /cart, /policies,
    // /pages, /blogs, /shop). Unknown slugs inside our own sections
    // (/products, /collections, /uk-salon-hair-extensions) are handled inside
    // those pages instead, where the lookup is exact.
    return [
      // ---- Collection addresses renamed inside this site ----------------
      {
        source: '/collections/hair-care',
        destination: '/collections/extension-care',
        permanent: true,
      },
      {
        source: '/collections/butterfly-weft',
        destination: '/collections/butterfly-extensions',
        permanent: true,
      },
      {
        source: '/collections/all-extensions',
        destination: '/collections/all',
        permanent: true,
      },
      {
        source: '/collections/tape-in-extensions',
        destination: '/collections/tape-in',
        permanent: true,
      },
      {
        source: '/collections/clip-in-extensions',
        destination: '/collections/clip-in',
        permanent: true,
      },
      {
        source: '/collections/nano-ring-extensions',
        destination: '/collections/nano-extensions',
        permanent: true,
      },
      {
        source: '/collections/weft-extensions',
        destination: '/collections/weft',
        permanent: true,
      },

      // ---- Other names these collections have been known by -------------
      { source: '/collections/butterfly', destination: '/collections/butterfly-extensions', permanent: true },
      { source: '/collections/genius-weft', destination: '/collections/butterfly-extensions', permanent: true },
      { source: '/collections/genius-wefts', destination: '/collections/butterfly-extensions', permanent: true },
      { source: '/collections/hand-tied-weft', destination: '/collections/weft', permanent: true },
      { source: '/collections/hand-tied-wefts', destination: '/collections/weft', permanent: true },
      { source: '/collections/k-tip', destination: '/collections/k-tip-extensions', permanent: true },
      { source: '/collections/ktip', destination: '/collections/k-tip-extensions', permanent: true },
      { source: '/collections/nano', destination: '/collections/nano-extensions', permanent: true },
      { source: '/collections/nano-ring', destination: '/collections/nano-extensions', permanent: true },
      { source: '/collections/ponytail', destination: '/collections/ponytails', permanent: true },
      { source: '/collections/ponytail-extensions', destination: '/collections/ponytails', permanent: true },
      { source: '/collections/fringe', destination: '/collections/fringes-bangs', permanent: true },
      { source: '/collections/fringes', destination: '/collections/fringes-bangs', permanent: true },
      { source: '/collections/bangs', destination: '/collections/fringes-bangs', permanent: true },
      { source: '/collections/fringes-bangs-extensions', destination: '/collections/fringes-bangs', permanent: true },
      { source: '/collections/toppers', destination: '/collections/hair-toppers', permanent: true },
      { source: '/collections/topper-extensions', destination: '/collections/hair-toppers', permanent: true },
      { source: '/collections/hair-topper-extensions', destination: '/collections/hair-toppers', permanent: true },
      { source: '/collections/tools', destination: '/collections/extension-tools', permanent: true },
      { source: '/collections/care', destination: '/collections/extension-care', permanent: true },
      { source: '/collections/clipins', destination: '/collections/clip-in', permanent: true },

      // ---- Shopify-era storefront addresses ----------------------------
      { source: '/cart', destination: '/collections/all', permanent: true },
      { source: '/cart/:path+', destination: '/collections/all', permanent: true },
      { source: '/checkouts/:path+', destination: '/collections/all', permanent: true },
      { source: '/checkout', destination: '/collections/all', permanent: true },
      { source: '/shop', destination: '/collections/all', permanent: true },
      { source: '/shop/:path+', destination: '/collections/all', permanent: true },
      { source: '/store', destination: '/collections/all', permanent: true },
      { source: '/store/:path+', destination: '/collections/all', permanent: true },
      { source: '/collections', destination: '/collections/all', permanent: true },
      { source: '/products', destination: '/collections/all', permanent: true },
      { source: '/collections/all/products/:path+', destination: '/collections/all', permanent: true },
      { source: '/collections/:slug/products/:path+', destination: '/collections/:slug', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blogs/:path*', destination: '/blog', permanent: true },

      // ---- Account and sign-in addresses ------------------------------
      // The site has no login: /account is where a salon applies for a trade
      // account. Old account URLs land there rather than on a dead end.
      { source: '/account/login', destination: '/account', permanent: true },
      { source: '/account/register', destination: '/account', permanent: true },
      { source: '/account/addresses', destination: '/account', permanent: true },
      { source: '/account/orders', destination: '/account', permanent: true },
      { source: '/account/reset', destination: '/account', permanent: true },
      { source: '/account/recover', destination: '/account', permanent: true },
      { source: '/account/activate', destination: '/account', permanent: true },
      { source: '/account/logout', destination: '/account', permanent: true },
      { source: '/account/profile', destination: '/account', permanent: true },
      { source: '/login', destination: '/account', permanent: true },
      { source: '/signin', destination: '/account', permanent: true },
      { source: '/sign-in', destination: '/account', permanent: true },
      { source: '/register', destination: '/account', permanent: true },
      { source: '/signup', destination: '/account', permanent: true },
      { source: '/sign-up', destination: '/account', permanent: true },
      { source: '/my-account', destination: '/account', permanent: true },
      { source: '/forgot-password', destination: '/account', permanent: true },
      { source: '/trade-account', destination: '/account', permanent: true },

      // ---- Policy and legal addresses ---------------------------------
      { source: '/policies/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/policies/refund-policy', destination: '/returns', permanent: true },
      { source: '/policies/return-policy', destination: '/returns', permanent: true },
      { source: '/policies/terms-of-service', destination: '/terms', permanent: true },
      { source: '/policies/shipping-policy', destination: '/shipping', permanent: true },
      { source: '/policies/contact-information', destination: '/contact', permanent: true },
      { source: '/policies/:path*', destination: '/privacy', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/terms-of-service', destination: '/terms', permanent: true },
      { source: '/terms-and-conditions', destination: '/terms', permanent: true },
      { source: '/refund-policy', destination: '/returns', permanent: true },
      { source: '/shipping-policy', destination: '/shipping', permanent: true },
      { source: '/cookie-policy', destination: '/cookies', permanent: true },
      { source: '/gdpr', destination: '/privacy', permanent: true },

      // ---- Legacy CMS "pages" -----------------------------------------
      { source: '/pages/contact', destination: '/contact', permanent: true },
      { source: '/pages/contact-us', destination: '/contact', permanent: true },
      { source: '/pages/about', destination: '/about', permanent: true },
      { source: '/pages/about-us', destination: '/about', permanent: true },
      { source: '/pages/faq', destination: '/faqs', permanent: true },
      { source: '/pages/faqs', destination: '/faqs', permanent: true },
      { source: '/pages/shipping', destination: '/shipping', permanent: true },
      { source: '/pages/shipping-policy', destination: '/shipping', permanent: true },
      { source: '/pages/returns', destination: '/returns', permanent: true },
      { source: '/pages/refund-policy', destination: '/returns', permanent: true },
      { source: '/pages/privacy', destination: '/privacy', permanent: true },
      { source: '/pages/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/pages/terms', destination: '/terms', permanent: true },
      { source: '/pages/terms-of-service', destination: '/terms', permanent: true },
      { source: '/pages/wholesale', destination: '/trade-wholesale', permanent: true },
      { source: '/pages/trade', destination: '/trade-wholesale', permanent: true },
      { source: '/pages/trade-wholesale', destination: '/trade-wholesale', permanent: true },
      { source: '/pages/salon-partners', destination: '/salon-partners', permanent: true },
      { source: '/pages/:path*', destination: '/resources', permanent: true },

      // ---- Alternate spellings and older section names -----------------
      { source: '/faq', destination: '/faqs', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/colour-chart', destination: '/color-chart', permanent: true },
      { source: '/color-match', destination: '/colour-match', permanent: true },
      { source: '/colour-picker', destination: '/colour-match', permanent: true },
      { source: '/wholesale', destination: '/trade-wholesale', permanent: true },
      { source: '/trade', destination: '/trade-wholesale', permanent: true },
      { source: '/salon', destination: '/salon-partners', permanent: true },
      { source: '/salons', destination: '/salon-partners', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: '**.bellamihair.com',
      },
      {
        protocol: 'https',
        hostname: '**.bohyme.com',
      },
      {
        protocol: 'https',
        hostname: '**.donnabellahair.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn1.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: '**.milkandblush.com',
      },
      {
        protocol: 'https',
        hostname: '**.installmyhairextensions.com',
      },
      {
        protocol: 'https',
        hostname: '**.foxyhairextensions.net',
      },
      {
        protocol: 'https',
        hostname: '**.additionallengths.co.uk',
      },
      {
        protocol: 'https',
        hostname: '**.vpfashion.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
}

export default nextConfig
