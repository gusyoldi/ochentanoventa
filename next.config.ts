import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.media.strapiapp.com',
      },
    ],
  },
};

export default nextConfig;
