<template>
  <div>
    <h1 class="text-h3">加入餐廳邀請驗證</h1>
    <div class="my-4 title font-weight-light">
      route query: {{query}}
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  computed: {
    query() {
      return this.$route.query
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
