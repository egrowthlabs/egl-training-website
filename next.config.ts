import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.reline.mx',
      },
    ],
  },
};

export default nextConfig;
