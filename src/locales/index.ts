import i18n from 'i18next'
import fa from './fa'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },

    resources: {
      fa
    }
  })

export default i18n
