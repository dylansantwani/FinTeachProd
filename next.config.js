/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');
    return config;
  },
}

module.exports = nextConfig