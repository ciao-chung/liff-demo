<template>
  <div class="d-print-none">
    <client-only>
      <v-breadcrumbs
        v-if="create"
        :items="items"
      ></v-breadcrumbs>
    </client-only>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  props: {
    scope: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    reset() {
      this.$store.commit('breadcrumb/setScope', 'default')
      this.$store.commit('breadcrumb/setItems', [])
    },
  },
  computed: {
    create() {
      if(this.breadcrumbScope != this.scope) return false
      return this.items.length > 0
    },
    breadcrumbScope() {
      return this.$store.getters['breadcrumb/scope']
    },
    items() {
      return this.$store.getters['breadcrumb/item']
    },
  },
  watch: {
    '$route': {
      deep: true,
      handler() {
        this.reset()
      },
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
