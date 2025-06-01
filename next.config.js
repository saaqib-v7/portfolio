/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio', // Replace with your repository name
  assetPrefix: '/portfolio/', // Replace with your repository name
}

module.exports = nextConfig 