import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digivirus.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
