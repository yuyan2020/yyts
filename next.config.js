/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  images: {
    domains: ["i.ytimg.com", "s2.loli.net", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
