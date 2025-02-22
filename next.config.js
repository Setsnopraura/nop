/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isGithubPages ? '/nop' : '',
    assetPrefix: isGithubPages ? '/nop/' : '',
    images: {
      unoptimized: true,
    },
  }
  

module.exports = nextConfig;