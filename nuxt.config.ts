import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { fileURLToPath } from 'node:url'
import * as path from 'path';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', '@nuxtjs/i18n'],
  primevue: {
    options: {
      unstyled: true
    },
    // importPT: {from: fileURLToPath(new URL('./assets/presets/lara/', import.meta.url))},
    importPT: { as: 'Lara', from: './assets/presets/lara' },

  },
  plugins: ['@/plugins/i18n/index.js'],
  css: ['primevue/resources/themes/aura-light-green/theme.css', '~/assets/css/main.css', '~/assets/styles.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: { 
    plugins: [
      VueI18nPlugin({
        runtimeOnly: true,
        compositionOnly: true, ssr: true,
        include: [
          fileURLToPath(new URL('./plugins/i18n/locales/**', import.meta.url)),
        ],
      }),
    ],
  }
})