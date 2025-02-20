import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
export const defaultLocale = 'fa'
export const locales = [defaultLocale]

export default getRequestConfig(async () => {
  // Validate that the incoming `locale` parameter is valid

  return {
    locale: defaultLocale,
    messages: (await import(`../../messages/${defaultLocale}.json`)).default
  }
})
