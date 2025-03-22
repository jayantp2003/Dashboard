import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export (required for GitHub Pages)
  basePath: "/Dashboard", // Set to your GitHub repo name
  images: {
    unoptimized: true, // Fixes image issues for static hosting
  },
  eslint: {
    ignoreDuringBuilds: true, // Allows builds to pass even with ESLint errors
  },
};

export default nextConfig;
