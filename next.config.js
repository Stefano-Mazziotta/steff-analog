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
      domains: ['localhost', 'steff-analog-git-dev-stefano-mazziotta.vercel.app', 'steff-analog.vercel.app'],
    }
}

module.exports = nextConfig

