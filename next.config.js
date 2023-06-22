/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', 'img.iplaysoft.com'], // 外域使用
  },
}

module.exports = nextConfig
