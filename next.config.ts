import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "via.placeholder.com",
      "ik.imagekit.io", // Add this line for the placeholder images
      // Add any other domains where your images are hosted (e.g., 'your-cdn-domain.com')
    ],
  },
};

export default nextConfig;
