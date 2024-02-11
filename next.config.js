const createNextIntlPlugin = require('next-intl/plugin')
const path = require('path')
const withNextIntl = createNextIntlPlugin()
const appName = 'nextBoilderplate'

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_URL,
    siteUri: process.env.SITE_URI,
    appName
  },

  env: {
    APP_NAME: appName
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/styles')],
    additionalData: `@import  "./src/assets/styles/index.scss";`
  }
}

module.exports = withNextIntl(nextConfig)
