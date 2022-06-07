<template>
  <full-screen>
    <v-img
      :src="require('assets/images/home-banner.webp')"
      :lazy-src="require('assets/images/home-banner-tiny.webp')"
      class="fill-height align-end"
      :gradient="$helper.gradient()"
    >
      <v-row
        justify="center"
        class="pb-10"
      >
        <v-col>
          <div
            class="display-1 white--text text-center mb-4"
          >
            Higher Eagle
          </div>

          <div
            class="title white--text font-weight-light text-center"
          >{{slogan}}</div>
        </v-col>
      </v-row>
    </v-img>
  </full-screen>
</template>

<script lang="babel" type="text/babel">
export default {
  computed: {
    slogan() {
      return this.$store.getters['base/slogan']
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
