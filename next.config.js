/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
