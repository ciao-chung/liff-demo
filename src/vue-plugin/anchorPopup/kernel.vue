<template>
  <div anchor-popup-root v-if="defaultConfig">
    <popupItem
      @close="close"
      v-for="(config, index) in popupItems"
      :key="index"
      :index="index"
      :config="config"></popupItem>
  </div>
</template>

<script lang="babel" type="text/babel">
import { events } from './events.js'
import popupItem from './popupItem.vue'
import uuid from 'uuid'
export default {
  data() {
    return {
      listener: null,
      defaultConfig: null,
      popupItems: [],
    }
  },
  created() {
    this.setupListener()
  },
  methods: {
    uid() {
      return uuid.v4()
    },
    init(config = {}) {
      if(config.debug) {
        console.warn('init anchor popup', config)
      }
      this.defaultConfig = {
        // vuetify dialog
        maxWidth: 'none',
        width: 'auto',
        hideOverlay: false,
        persistent: false,
        retainFocus: true,

        titleClass: 'primary white--text',
        autoClose: null,
        applyLabel: 'Apply',
        applyCallback: null,
        applyColor: 'primary darken-2 white--text',
        close: true,
        closeLabel: 'Close',
        closeColor: 'secondary',
        closeCallback: null,
        onDataChange: null,
        title: '',
        applyOnEnter: true,
        isHtml: false,
        promptPlaceholder: null,
        bodySlot: null,
        actionSlot: null,
        ...config,
      }
    },
    getBaseOption(type, option = {}) {
      return {
        key: this.uid(),
        type,
        title: '',
        content: '',
        applyOnEnter: true,
        debug: false,
        ...option,
      }
    },
    createPopupOption(type, option = {}) {
      let computedOption
      if(typeof option == 'string') {
        const string = this.$eagleLodash.cloneDeep(option)
        computedOption = this.getBaseOption(type)
        computedOption.title = string
      }

      else {
        computedOption = this.getBaseOption(type, this.$eagleLodash.cloneDeep(option))
      }

      const result = {
        ...this.defaultConfig,
        ...computedOption,
      }

      if(result.debug === true) console.log('debug', result)
      return result
    },
    setupListener() {
      this.listener = events
      this.listener.$on('init', this.init)
      this.listener.$on('base', this.base)
      this.listener.$on('prompt', this.prompt)
      this.listener.$on('remove', this.remove)
    },

    close(data) {
      this.$delete(this.popupItems, data.index)
    },

    base(option) {
      this.popupItems.push(this.createPopupOption('base', option))
    },

    prompt(option) {
      this.popupItems.push(this.createPopupOption('prompt', option))
    },

    remove(key) {
      const index = this.popupItems.findIndex(item => item.key == key)
      if(index == null) return
      this.$delete(this.popupItems, index)
    }
  },
  components: {
    popupItem,
  },
}
</script>

<style lang="sass" type="text/sass">
div[anchor-popup-root]
  position: absolute
  left: 0
  top: 0
  width: 0
  height: 0
div[anchor-poppup-title]
  min-height: 45px
</style>
