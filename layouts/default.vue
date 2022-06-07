<template>
  <v-app eagle-root v-if="application" v-resize="onWindowResize">
    <client-only>
      <navigation></navigation>
      <v-main :eagle-page="$route.name">
        <breadcrumbs></breadcrumbs>

        <component :is="containerComponent">
          <nuxt />
        </component>
      </v-main>

      <client-only>
        <menuMobile></menuMobile>
      </client-only>
      <basePlugin></basePlugin>
    </client-only>
  </v-app>
</template>

<script>
import initClient from 'initClient/initClient'
export default {
  layout: 'default',
  mixins: [initClient],
  async fetch() {
    await this.loadApplication()
  },
  mounted() {
    this.initClient()
  },
}
</script>

<style lang="sass"></style>
