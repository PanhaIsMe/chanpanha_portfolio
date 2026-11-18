import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep builds anchored to this checkout, independent of the launch directory.
  turbopack: { root: __dirname },
};

export default nextConfig;
