/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
