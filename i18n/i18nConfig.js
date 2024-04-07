import ar from './locales/ar/index.js'
import en from './locales/en/index.js'
export default {
  legacy: false,
  locale: 'en-US',
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'ar',
      iso: 'ar-EG',
      name: 'Arabic'
    },
  ],
  defaultLocale: 'en-US',
  messages: {
    en,
    ar
  }
}