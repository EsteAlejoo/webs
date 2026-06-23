import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_PAGES ? "/webs" : "",
  images: { unoptimized: true },
};

export default nextConfig;
