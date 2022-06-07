<template>
  <v-navigation-drawer
    v-if="$helper.isMobile()"
    app
    temporary
    fixed
    right
    class="d-print-none"
    v-model="mobileNavActive"
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group>
        <v-list-item
          v-for="(link, index) in menu"
          :key="`menu-link-${index}`"
          :to="link.route"
          exact-active-class="cyan--text"
        >
          <v-list-item-title>
            <v-icon
              v-if="link.icon"
              left
            >
              {{link.icon}}
            </v-icon>
            <span>{{ link.label }}</span>
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="babel" type="text/babel">
import navigationMenu from 'navigation/navigationMenu'
export default {
  mixins: [navigationMenu],
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    mobileNavActive: {
      get() {
        return this.$store.getters['base/mobileNavActive']
      },
      set(value) {
        this.$store.commit('base/setMobileNavActive', value)
      },
    },
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        this.drawer = this.value
      },
    },
    drawer: {
      handler() {
        this.$emit('input', this.drawer)
      },
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
