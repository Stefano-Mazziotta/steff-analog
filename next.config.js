/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    // env: {
    //     NEXT_PUBLIC_BASE_URL: process.env.NODE_ENV === 'production' ? 'http://steff-analog-a2ynygtlu-stefano-mazziotta.vercel.app' : 'http://localhost:3000'
    // }
}

module.exports = nextConfig

