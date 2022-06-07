<template>
  <v-tabs
    align-with-title
    show-arrows
    centered
    optional
  >
    <v-tabs-slider color="primary lighten-2"></v-tabs-slider>

    <v-tab
      exact
      v-for="(link, index) in menu"
      :key="`menu-link-${index}`"
      :to="link.route"
      class="font-weight-light"
    >
      <v-icon
        v-if="link.icon"
        left
        :class="textClass"
      >
        {{link.icon}}
      </v-icon>
      <span
        :class="textClass"
        class="font-weight-light"
      >
        {{ link.label }}
      </span>
    </v-tab>
  </v-tabs>
</template>

<script lang="babel" type="text/babel">
import navigationMenu from 'navigation/navigationMenu'
export default {
  mixins: [navigationMenu],
}
</script>

<style lang="sass" type="text/sass" scoped></style>
