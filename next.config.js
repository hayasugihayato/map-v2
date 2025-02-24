/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api1.aws.simrail.eu',
        port: '8082',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
