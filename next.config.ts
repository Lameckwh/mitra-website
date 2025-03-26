import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.icons8.com"], // Existing domain for external images
  },

  // Custom headers for caching images and videos
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Optional: Enable React Strict Mode for better debugging
  reactStrictMode: true,
};

export default nextConfig;