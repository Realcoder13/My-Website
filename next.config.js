/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Removed basePath for Cloudflare Pages deployment
  // If you need basePath, uncomment and adjust:
  // basePath: '/portfolio-nextjs',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
