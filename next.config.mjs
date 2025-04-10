/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            port: '',
            pathname: '/img/*',
            search: '',
          }, 
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
            port: '',
            pathname: '/*',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'pravatar.cc',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'api.escuelajs.co',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'placehold.co',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: '**',
            pathname: '/**',
          }
        ],
      },
};

export default nextConfig;
