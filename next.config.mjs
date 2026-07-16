/* Build cache invalidated: FORCE_FULL_REBUILD */
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
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
