<template>
  <div
    eagle-full-screen="root"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  props: {
    removeNavGap: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    fullScreenHeight: '100vh',
  }),
  methods: {
    setupFullScreenHeight() {
      if(!process.client) return
      const windowHeight = $(window).height()
      const headerHeight = this.$nuxt.$vuetify.application.top || '100vh'

      if(!this.removeNavGap) {
        this.fullScreenHeight = windowHeight
        return
      }
      this.fullScreenHeight = windowHeight - headerHeight
    },
  },
  computed: {
    size() {
      return this.$store.getters['base/size']
    },
    style() {
      return {
        width: `${this.size.width}px`,
        height: `${this.fullScreenHeight}px`,
      }
    },
  },
  watch: {
    size: {
      immediate: true,
      handler() {
        this.setupFullScreenHeight()
      },
    }
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
