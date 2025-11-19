/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
  experimental: {
    viewTransition: true,
  },
};

module.exports = nextConfig;
