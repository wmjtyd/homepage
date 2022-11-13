/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const NEXT_PUBLIC_ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;
const NODE_ENV = process.env.NODE_ENV;

require('dotenv').config({
  path: `./env/.env.${NEXT_PUBLIC_ENVIRONMENT}.${NODE_ENV}`,
});

const env = {};
Object.keys(process.env).forEach((key) => {
  if (key.startsWith('NEXT_PUBLIC_')) {
    env[key] = process.env[key];
  }
});

module.exports = {
  i18n,
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      os: false,
      crypto: false,
      stream: false,
      path: false,
    };
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['api.lorem.space', 'raw.githubusercontent.com', 'assets.coingecko.com'],
  },
  // distDir: `.${NEXT_PUBLIC_ENVIRONMENT}`,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
    };
  },
};
