<template>
  <div>
    <topPhoto></topPhoto>

    <v-container>
      home page
    </v-container>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  components: {
    topPhoto: () => import('pages/home/topPhoto.vue'),
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
