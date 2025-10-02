import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    const webpackConfig = { ...config };
    webpackConfig.resolve.fallback = { fs: false };

    return config;
  },
};

export default withMDX(nextConfig);
