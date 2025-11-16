/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig