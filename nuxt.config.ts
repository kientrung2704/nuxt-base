// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: '"width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
  devtools: { enabled: true },
 
  compatibilityDate: '2024-04-03',
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    '@vueuse/nuxt',
    '@nuxtjs/device',
    // 'nuxt-swiper',
    '@nuxt/image',
    'dayjs-nuxt',
    '@nuxtjs/i18n'
  ],
  plugins: ["~/plugins/auth-plugin", '~/plugins/device', '~/plugins/loading.client', '~/plugins/i18n'],
  // device: {
  //   refreshOnResize: true
  // },
  imports: { // add folders here to auto-import them in your application
    dirs: [
      'stores/**',
      'composables/**',
      // 'utils/**',
    ],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ['~/assets/scss/index.scss'],

  tailwindcss: { // 自訂的 tailwindcss 設定設置位置
    cssPath: '~/assets/scss/tailwind.scss', // 這是自訂的 tailwind 引入路徑
  },
  elementPlus: {
    importStyle: "scss",
  },
  alias: {
    assets: "/<rootDir>/assets",
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_BASE_URL || '/api'
    }
  }
})