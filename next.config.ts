import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
module.exports = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
