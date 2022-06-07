<template>
  <v-text-field
    readonly
    dense
    outlined
    :value="targetUrl"
  >
    <template v-slot:append-outer>
      <v-btn icon class="pb-2" @click="copy">
        <v-icon>fa fa-copy</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<script lang="babel" type="text/babel">
export default {
  props: {
    url: {
      type: String,
      default: null,
    },
  },
  methods: {
    async copy() {
      try {
        await this.$copyText(this.targetUrl)
      } catch (error) {
        console.warn(error)
      } finally {
        this.$snotify.success(this.targetUrl, this.$t('copy.successfully'))
      }
    },
  },
  computed: {
    targetUrl() {
      if(this.url) return this.url
      if(!process.client) return null
      return window.location.href
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
