// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      dbUrl: "overriden by .env",
      secret: "",
    },
  },
  modules: [
    // "unplugin-auto-import",
    // "unplugin-vue-components",
    "nuxtjs-naive-ui",
    "@nuxt/image",
  ],
  plugins: [{ src: "~/plugins/aos", mode: "client" }],
  css: ["~/assets/css/main.css"],
  vite: {
    ssr: { noExternal: ["mdi-vue"] },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      dbUrl: process.env.DATABASE_URL,
    },
  },
  app: {
    head: {
      lang: "en",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: `%s - PT. Hayookerja Abhinaya Indonesia (HAI)`,
      title: "Agensi Tenaga Kerja",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,4  00;1,500;1,600;1,700;1,800&display=swap",
        },
      ],
      meta: [
        {
          name: "keywords",
          content: [
            "hayokerja",
            "kerja",
            "cari kerja",
            "agensi tenaga kerja",
            "perusahan pencari kerja",
            "lowongan",
          ],
        },
        {
          name: "description",
          content:
            "Startup company jasa pengelola perkerja harian lepas untuk kerah biru dan membantu mengelola kebutuhan sdm",
        },
      ],
      script: [
        {
          src: "https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v17.0",
          nonce: "E7VwukFa",
          defer: true,
          async: true,
          crossorigin: "anonymous",
        },
        {
          src: "https://telegram.org/js/telegram-widget.js?22",
          async: true,
        },
      ],
    },
  },
} as any);
