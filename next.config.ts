import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignorar ESLint durante el build en Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.reline.mx',
      },
      {
        protocol: 'https',
        hostname: 'egl-training-ui.vercel.app',
      },
    ],
  },
};

export default nextConfig;
