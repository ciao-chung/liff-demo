<template>
  <v-fade-transition>
    <v-app-bar
      v-scroll="onWindowScroll"
      fixed
      :mutant-nav="mutantNav"
      :mutant-nav-active="mutantNav == true && isNavFixTop"
      eagle-app-bar
      outlined
      clipped-right
      class="d-print-none navbar"
      dense
      v-bind="navProperties"
    >
      <!-- desktop -->
      <template v-if="!$helper.isMobile()">
        <partialBrand></partialBrand>
        <v-spacer/>
        <menuDesktop/>
      </template>

      <!-- mobile -->
      <template v-if="$helper.isMobile()">
        <partialBrand></partialBrand>
        <v-spacer/>

        <v-app-bar-nav-icon
          :class="textClass"
          @click="mobileNavActive = !mobileNavActive"
        ></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
  </v-fade-transition>
</template>

<script lang="babel" type="text/babel">
export default {
  data: () => ({
    windowScrollTop: 0,
    navHeight: 0,
  }),
  async mounted() {
    await this.$nextTick()
    this.setNavHeight()
  },
  methods: {
    setNavHeight() {
      this.navHeight = $('*[eagle-app-bar]').height() || 0
    },
    onWindowScroll() {
      this.windowScrollTop = $(window).scrollTop()
    },
  },
  computed: {
    mutantNav() {
      return this.$route.meta.mutantNav === true
    },
    mobileNavActive: {
      get() {
        return this.$store.getters['base/mobileNavActive']
      },
      set(value) {
        this.$store.commit('base/setMobileNavActive', value)
      },
    },
    textClass() {
      if(this.mutantNav == true && this.isNavFixTop) {
        return 'white--text'
      }
      return 'grey--text'
    },
    navProperties() {
      if(this.mutantNav == true && this.isNavFixTop) {
        return {
          color: 'transparent',
          elevation: 0,
        }
      }

      return {
        color: 'white',
        app: true,
      }
    },
    isNavFixTop() {
      if(!this.navHeight) return true
      return this.windowScrollTop < this.navHeight*3
    },
  },
  components: {
    partialBrand: () => import('./partialBrand.vue'),
    menuDesktop: () => import('./menuDesktop.vue'),
  },
  watch: {
    isNavFixTop: {
      immediate: true,
      handler() {
        this.$store.commit(`base/set`, {
          key: 'isNavFixTop',
          value: this.isNavFixTop,
        })
      },
    }
  },
}
</script>

<style lang="sass" type="text/sass">
*[eagle-app-bar]
  &>*
    border-bottom: 1px lighten($app-color-white, 20%) solid
  &[mutant-nav]
    transition: .7s background-color ease
    &[mutant-nav-active]
      transition: .7s background-color ease
</style>
