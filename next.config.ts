import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: "standalone" output removed — Netlify Essential plugin handles build output
  // If deploying to Docker/self-hosted instead, add: output: "standalone"
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    ".space.chatglm.site",
    ".space-z.ai",
  ],
  images: {
    qualities: [60, 75, 85, 90],
  },
};

export default nextConfig;
