/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ];
    },
    images: {
      domains: ['localhost'],
    }
}

module.exports = nextConfig

