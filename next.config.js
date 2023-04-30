/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['countryflagsapi.com', 'flagsapi.com'],
  },
}

module.exports = nextConfig
