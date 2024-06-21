/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
    localeDetection: false,
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    SPACE: process.env.SPACE,
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
