import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from placeholder services during development
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
