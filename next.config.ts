import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/arunPortfolio',
  assetPrefix: '/arunPortfolio',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
