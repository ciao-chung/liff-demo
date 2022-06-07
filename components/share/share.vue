<template>
  <div class="my-2">
    <v-btn
      color="blue"
      large
      icon
      :href="facebookShareUrl"
      target="_blank"
    >
      <v-icon size="28">fab fa-facebook-square</v-icon>
    </v-btn>

    <v-btn
      @click="shareMessenger"
      color="blue lighten-2"
      large
      icon
    >
      <v-icon size="28">fab fa-facebook-messenger</v-icon>
    </v-btn>

    <v-btn
      color="green"
      large
      icon
      :href="lineShareUrl"
      target="_blank"
    >
      <v-icon size="28">fab fa-line</v-icon>
    </v-btn>
  </div>
</template>

<script lang="babel" type="text/babel">
import shareMixin from 'components/share/share.js'
export default {
  mixins: [shareMixin],
}
</script>

<style lang="sass" type="text/sass" scoped></style>
