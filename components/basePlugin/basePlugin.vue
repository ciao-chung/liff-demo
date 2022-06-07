<template>
  <div eagle-base-plugin>
    <client-only>
      <vue-snotify></vue-snotify>
    </client-only>

    <anchor-popup
      style="z-index: 204 !important;"
    ></anchor-popup>
  </div>
</template>

<script lang="babel" type="text/babel">
import Vue from 'vue'
import AnchorPopup from 'vue-plugin/anchorPopup/installer.js'
export default {
  created() {
    Vue.use(AnchorPopup, this.anchorPopupDefaultConfig)
  },
  updated() {
    if(this.$apopup) {
      this.$apopup.init(this.anchorPopupDefaultConfig)
    }
  },
  computed: {
    anchorPopupDefaultConfig() {
      return {
        width: '350',
        applyLabel: this.$t('action.apply'),
        closeLabel: this.$t('action.close'),
      }
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
