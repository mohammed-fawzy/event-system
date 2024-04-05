import { createI18n } from 'vue-i18n'

export let t 


const ar = Object.fromEntries(Object.entries(import.meta.glob('./locales/ar/*.json', { eager: true }))
  .map(([key, value]) => [key.slice(13, -5), value.default]))

  
const en = Object.fromEntries(Object.entries(import.meta.glob('./locales/en/*.json', { eager: true }))
  .map(([key, value]) => [key.slice(13, -5), value.default]))
  
let _i18n = null
export const getI18n = () => {
  if (_i18n === null) {
    _i18n = createI18n({
      legacy: false,
      locale: "en",
      fallbackLocale: 'en',
      messages: {
        ar,
        en,
      },
    })
  }
  t = _i18n.global.t
  
  return _i18n
}
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(getI18n())
})
