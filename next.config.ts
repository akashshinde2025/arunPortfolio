import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(isGithubPages && {
    basePath: '/arunPortfolio',
    assetPrefix: '/arunPortfolio'
  }),
  images: {
    unoptimized: true
  }
};

export default nextConfig;
