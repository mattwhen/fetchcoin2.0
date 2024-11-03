/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.coinstats.app',
            port: '',
            pathname: '/coins/**',
          },
        ],
    },
}
