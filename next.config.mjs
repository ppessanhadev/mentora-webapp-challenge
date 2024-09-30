/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://mentora-backend-challenge.onrender.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
