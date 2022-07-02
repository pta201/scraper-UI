/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PTA201_URL: process.env.PTA201_URL,
  },
};

module.exports = nextConfig;
