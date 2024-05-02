// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', '@nuxtjs/i18n', '@vee-validate/nuxt'],
  runtimeConfig : {
    public: {
      apiBaseUrl: process.env.API_BASE_URL
    }
  },
  ssr: false,
  i18n: {
    defaultLocale: 'en',
    // locales: ['en', 'ar'],
    vueI18n: "./i18n/i18nConfig.js",
  },
  primevue: {
    options: {
      unstyled: true
    },
    // importPT: {from: fileURLToPath(new URL('./assets/presets/lara/', import.meta.url))},
    importPT: { as: 'Lara', from: './assets/presets/lara' },

  },
  // plugins: ['@/plugins/i18n/index.js'],
  css: ['primevue/resources/themes/aura-light-green/theme.css', '~/assets/css/main.css', '~/assets/styles.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: { 
    // plugins: [
    //   VueI18nPlugin({
    //     runtimeOnly: true,
    //     compositionOnly: true, ssr: true,
    //     include: [
    //       fileURLToPath(new URL('./plugins/i18n/locales/**', import.meta.url)),
    //     ],
    //   }),
    // ],
  }
})