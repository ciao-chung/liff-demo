<template>
  <div>
    <v-overlay :value="loading" :style="loadingStyle">
      <v-row>
        <v-col justing="center" align="center">
          <v-progress-circular indeterminate size="80"></v-progress-circular>
        </v-col>
      </v-row>

      <div class="loading-text" v-if="config">
        <div class="loading-title" v-if="title">
          {{ title }}
        </div>

        <div v-if="description" class="loading-subtitle">
          {{description}}
        </div>
      </div>
    </v-overlay>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  data: () => ({
    loading: false,
    config: null,
  }),
  methods: {
    start(config = null) {
      this.config = config
      this.loading = true
    },
    async finish() {
      this.loading = false
      this.config = {}
    },
  },
  computed: {
    title() {
      if(!this.config) return null
      if(typeof this.config === 'string') return this.config
      return this.config.title || null
    },
    description() {
      if(!this.config) return null
      return this.config.description || null
    },
    loadingStyle() {
      return {
        zIndex: 999999999,
      }
    },
  },
}
</script>

<style lang="sass" type="text/sass">
.loading-text
  text-align: center
  font-family: "Roboto", sans-serif !important
  margin-top: 30px
  .loading-title
    font-size: 1.5rem !important
    font-weight: 400
    line-height: 2rem
    letter-spacing: normal !important
  .loading-subtitle
    font-weight: 300
    font-size: 1rem !important
    line-height: 1.75rem
    letter-spacing: 0.009375em !important
</style>
