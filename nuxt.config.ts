// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      dbUrl: "overriden by .env",
      secret: "overriden by .env",
    },
  },
  modules: [
    "nuxtjs-naive-ui",
    // "unplugin-auto-import",
    // "unplugin-vue-components",
  ],
});
