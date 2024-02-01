const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_URL,
    siteUri: process.env.SITE_URI
  }
}

module.exports = withNextIntl(nextConfig)
