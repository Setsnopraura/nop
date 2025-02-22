/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/nop' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nop/' : '',
}

module.exports = nextConfig