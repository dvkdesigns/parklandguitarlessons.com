/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'parklandguitarlessons.com',
          },
        ],
        destination: 'https://www.parklandguitarlessons.com/:1',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
