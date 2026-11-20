import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep builds anchored to this checkout, independent of the launch directory.
  turbopack: { root: __dirname },
  async redirects() {
    return [{
      source: "/my_image.jpg",
      destination: "/images/cheng-chanpanha.jpg",
      permanent: true,
    }];
  },
};

export default nextConfig;
