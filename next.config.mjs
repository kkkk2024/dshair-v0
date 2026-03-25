/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
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
    ],
  },
}

export default nextConfig
