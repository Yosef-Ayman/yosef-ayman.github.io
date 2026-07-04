/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: false,
    },
};

export default nextConfig;
