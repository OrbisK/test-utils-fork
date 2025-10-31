// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@sentry/nuxt/module'],
  devtools: { enabled: true },
  app: {
    rootId: 'nuxt-test',
  },
  compatibilityDate: '2024-04-03',
})
