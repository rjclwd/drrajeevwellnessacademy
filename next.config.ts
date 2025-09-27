import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // either use domains:
    domains: ["img.youtube.com", "i.ytimg.com"],
    // or remotePatterns (more explicit)
    // remotePatterns: [
    //   { protocol: "https", hostname: "img.youtube.com" },
    //   { protocol: "https", hostname: "i.ytimg.com" },
    // ],
  },
};

export default nextConfig;
