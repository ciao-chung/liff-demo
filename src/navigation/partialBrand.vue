<template>
  <nuxt-link
    :to="{ name: 'home' }"
    class="black--text text-decoration-none"
  >
    <v-toolbar-title class="d-flex pa-2 align-center">
      <v-img
        width="25"
        height="25"
        :src="tinyLogoUrl"
      ></v-img>

      <span
        class="pa-2"
        :class="textClass"
      >{{siteName}}</span>
    </v-toolbar-title>
  </nuxt-link>
</template>

<script lang="babel" type="text/babel">
export default {
  computed: {
    siteName() {
      return this.$store.getters['base/siteName']
    },
    tinyLogoUrl() {
      return this.$store.getters['base/tinyLogoUrl']
    },
    isNavFixTop() {
      return this.$store.getters['base/isNavFixTop']
    },
    textClass() {
      if(this.mutantNav == true && this.isNavFixTop) {
        return 'white--text'
      }
      return 'grey--text'
    },
    mutantNav() {
      return this.$route.meta.mutantNav === true
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
