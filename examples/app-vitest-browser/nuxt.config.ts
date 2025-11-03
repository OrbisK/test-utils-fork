// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    rootId: 'nuxt-test',
  },
  runtimeConfig: {
    public: {
      whatever: {
        hello: 'world',
      },
    },
  },
  compatibilityDate: '2024-04-03',
})
