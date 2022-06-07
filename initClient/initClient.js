import Vue from 'vue'
import meta from 'initClient/meta'
import seo from 'libs/seo'
import env from 'src/config/env.json'
import '@fortawesome/fontawesome-free/css/all.css'
Vue.prototype.$seo = seo

export default {
  head: meta,
  mounted() {
    this.initLayout()
  },
  methods: {
    async initLayout() {
      this.onWindowResize()
    },
    async initClient() {
      await this.$nextTick()
      this.$nuxt.$loading.start()
      this.$store.dispatch('base/setupLayoutReady', false)
      this.setupI18n()
      this.$nuxt.context.$helper.setupVueModel(this)
      this.$nuxt.context.$api.setupClient(this)
      this.$seo.init(this, {
        siteName: this.siteName,
        domain: env.frontendDomain,
        logoUrl: this.logoUrl,
      })
      await this.$nextTick()
      this.$store.dispatch('base/setupLayoutReady', true)
      this.$nuxt.$loading.finish()
    },
    setupI18n() {
      if(!this.$nuxt.context.$language) return
      this.$i18n.locale = this.$nuxt.context.$language.get()
      this.$vuetify.lang.current = this.$nuxt.context.$language.get()
      this.$vuetify.lang.t = (key, ...params) => this.$t(key, params)

      // @ts-ignore
      Vue.filter('t', (...args) => this.$t(...args))
      // @ts-ignore
      Vue.filter('tc', (...args) => this.$tc(...args))
      // @ts-ignore
      Vue.filter('te', (...args) => this.$te(...args))
    },
    async loadApplication() {
      try {
        const result = await this.$nuxt.context.$api.collection.baseApi.application()
        this.$store.dispatch('base/initApplication', result)
      } catch (error) {
        console.error(error)
      }
    },
    async onWindowResize() {
      await this.$nextTick()
      this.$store.commit(`base/setSize`, {
        width: $(window).width(),
        height: $(window).height(),
      })
      this.$store.commit(`base/setDevice`, this.$helper.getDevice())
    },
  },
  computed: {
    containerComponent() {
      if(this.$route.meta.container == false) return 'div'
      return 'v-container'
    },
    logoUrl() {
      return this.$store.getters['base/logoUrl']
    },
    siteName() {
      return this.$store.getters['base/siteName']
    },
    layoutReady() {
      return this.$store.getters['base/layoutReady']
    },
    application() {
      return this.$store.getters['base/application']
    },
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        this.$store.commit('base/set', {
          key: 'pageMutantNav',
          value: false,
        })
      },
    },
  },
  components: {
    navigation: () => import('navigation/navigation.vue'),
    basePlugin: () => import('components/basePlugin/basePlugin.vue'),
    menuMobile: () => import('navigation/menuMobile.vue'),
  },
}
