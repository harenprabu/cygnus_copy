/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

module.exports = NextConfig;


// module.exports = {
//   images: {
//     domains: ['mcusercontent.com','www.getheadshots.ai'],
//   },
// };