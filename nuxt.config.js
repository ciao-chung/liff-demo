import env from './src/config/env.json'
import head from './nuxtConfig/head.js'
import pwa from './nuxtConfig/pwa.js'
import vuetify from './nuxtConfig/vuetify.js'
import i18n from './nuxtConfig/i18n.js'
import path from 'path'
const isProductionMode = process.env.NODE_ENV == 'production'

export default {
  target: 'static',
  ssr: true,
  modern: isProductionMode ? true : false,

  router: {
    base: isProductionMode ? '/liff-demo/' : '/',
  },
  generate: {
    dir: 'docs',
    routes: [
      '/',
      '/invite',
      '/join',
    ]
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  loading: '~/components/loading.vue',

  publicRuntimeConfig: {
    eagleEnv: env,
  },

  alias: {
    'kernel': path.resolve(__dirname, './kernel'),
    'libs': path.resolve(__dirname, './kernel/libs'),
    'src': path.resolve(__dirname, './src'),
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'vue-snotify/styles/material.css', lang: 'scss' },
    'prismjs/themes/prism.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Plugins to run before rendering page: https://nuxtjs.org/docs/directory-structure/plugins/
  plugins: [
    '~/plugins/filter',
    '~/plugins/eagle',
    '~/plugins/eagle.server',
    '~/plugins/eagle.client',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // components: trues for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',

    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    // https://github.com/nuxt-community/fontawesome-module
    ['@nuxtjs/fontawesome', {
      addCss: true,
      icons: {
        solid: [],
        regular: [],
        brands: [],
      },
    }],

    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    sass: [
      'assets/style/index.sass',
      'assets/base.sass',
    ],
    scss: [],
    less: [],
    stylus: [],
    hoistUseStatements: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    // https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',

    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n',

    // https://github.com/nuxt-community/router-module
    ['@nuxtjs/router', {
      fileName: 'src/route.ts',
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa,

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.resolve.modules.unshift(path.resolve(__dirname, './'))
      config.resolve.modules.unshift(path.resolve(__dirname, './src'))
      config.resolve.modules.unshift(path.resolve(__dirname, './kernel'))
    },
  },

  server: {
    port: 8888,
  },

  i18n,
}
