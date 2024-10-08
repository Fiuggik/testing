/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  eslint: {
      ignoreDuringBuilds: true,
  },
};

export default nextConfig;