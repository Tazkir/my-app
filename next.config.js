/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Allow builds even with ESLint errors
  },
  webpack: (config) => {
    // Add file-loader rule for handling PDFs
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/files",
            publicPath: "/_next/static/files",
          },
        },
      ],
    });

    return config;
  },
});

module.exports = nextConfig;
