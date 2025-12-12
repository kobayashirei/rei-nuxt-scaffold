// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  devServer: {
    port: 4000,
    host: '0.0.0.0',
  },
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],
  // tailwindcss: {
  //   config: {
  //     content: [
  //       './components/**/*.{vue,js,ts}',
  //       './layouts/**/*.vue',
  //       './pages/**/*.vue',
  //       './plugins/**/*.{js,ts}',
  //       './nuxt.config.{js,ts}',
  //     ],
  //   },
  // },
  css: ['~/assets/css/tailwind.css'],
  // plugins: [
  //   './types/**'
  // ],
  hooks: {
    'build:before': async () => {
      // await import('./hooks/gen-css')
    }
  },
  ssr: true,
  app: {
    head: {
      meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
      // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' },
      ],
      link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' },
      ],
      // please note that this is an area that is likely to change
      style: [
      // <style>:root { color: red }</style>
        // { textContent: ':root { color: red } #top-progress { box-shadow: 0 0 8px #38bdf8; }' },
      ],
      noscript: [
      // <noscript>JavaScript is required</noscript>
        { textContent: 'JavaScript is required' },
      ],
    },
  },
  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'zh', file: 'zh.json', name: '中文' }
    ],
    // lazy: true,
    langDir: 'locales',
    defaultLocale: 'zh',
    strategy: 'prefix_except_default', // /zh for Chinese, / for English
  },
  imports: {
    dirs: ['types', 'constants'],
    
    // commentsDebug: true
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  vite: {
    server: {
      hmr: {
        port: 24679
      }
    }
  }
})
