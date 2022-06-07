<template>
  <v-dialog
    @click:outside="onOverlayClick"
    @keydown.enter.stop="onKeyKeyDownEnter"
    scrollable
    :retain-focus="config.retainFocus"
    :max-width="config.maxWidth"
    :persistent="persistent"
    :width="config.width"
    :hide-overlay="config.hideOverlay"
    v-model="popupCreated"
  >
    <v-card>
      <v-card-title class="headline" :class="config.titleClass" anchor-poppup-title>
        <span v-if="config.title">{{config.title}}</span>

        <v-spacer></v-spacer>

        <!--loader-->
        <v-progress-circular v-if="onLoading"
          indeterminate color="white" size="25" width="3"></v-progress-circular>
      </v-card-title>

      <v-card-text v-if="createBody" class="py-6">
        <!--base-->
        <template v-if="config.content">
          <p class="py-0 my-0" v-if="config.isHtml" v-html="config.content"></p>
          <p class="py-0 my-0" v-if="!config.isHtml">{{config.content}}</p>
        </template>

        <!--prompt-->
        <v-text-field
          v-if="config.type == 'prompt'"
          anchor-prompt-input
          solo
          dense
          autofocus
          :type="config.inputType"
          :placeholder="config.promptPlaceholder"
          :maxlength="promptMaxLength"
          :counter="!!promptMaxLength"
          :config="config"
          v-model="data"
        ></v-text-field>

        <!--custom body component-->
        <component v-if="config.bodySlot"
          @updateData="updateData"
          @setError="setError"
          @updateApplyProcessing="updateApplyProcessing"
          @apply="handleSlotApply"
          @close="handleSlotClose"
          :is="config.bodySlot"
          :data="data"
          :error="error"
          :config="config"
          :popupConfig="config"
          :preventClose.sync="preventClose"
          :isApplyProcessing="isApplyProcessing"
          :onLoading="onLoading"></component>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions v-if="hasCardAction">
        <component v-if="config.actionSlot"
          @updateData="updateData"
          @setError="setError"
          @updateApplyProcessing="updateApplyProcessing"
          @apply="handleSlotApply"
          @close="handleSlotClose"
          v-bind="config.actionProps"
          :is="config.actionSlot"
          :data="data"
          :error="error"
          :config="config"
          :isApplyProcessing="isApplyProcessing"
          :onLoading="onLoading"></component>

        <v-spacer></v-spacer>

        <!--close-->
        <v-btn text
          v-if="config.close"
          @click="close(true)"
          :color="config.closeColor"
          :disabled="disableClose">
          {{config.closeLabel}}
        </v-btn>

        <!--apply-->
        <v-btn @click="apply" v-if="hasApply"
          :loading="isApplyProcessing"
          :disabled="disabledApply"
          :color="config.applyColor">
          {{config.applyLabel}}
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="babel" type="text/babel">
export default {
  props: {
    index: {
      type: Number,
    },
    config: {
      type: Object,
    },
  },
  data() {
    return {
      error: null,
      data: null,
      onLoading: false,
      isApplyProcessing: false,
      autoCloseTimeout: null,
      popupCreated: true,
      preventClose: false,
    }
  },
  beforeDestroy() {
    clearTimeout(this.autoCloseTimeout)
    this.autoCloseTimeout = null
  },
  mounted() {
    this.setupAutoClose()
    this.data = this.config.defaultValue === undefined
      ? null
      : this.config.defaultValue

    this.$nextTick(() => {
      this.setupPrompt()
    })
  },
  methods: {
    setupPrompt() {
      if(this.config.type != 'prompt') return

      const $input = $('*[anchor-prompt-input]')
      this.$nextTick(() => {
        $input.focus()
      })
    },
    handleSlotApply() {
      this.apply()
    },
    handleSlotClose() {
      this.close(true)
    },
    updateData(data) {
      this.data = this.$eagleLodash.cloneDeep(data)
    },
    updateLoading(status) {
      this.onLoading = status
    },
    setError(error) {
      this.error = error
    },
    updateApplyProcessing(status) {
      this.isApplyProcessing = status
    },
    setupAutoClose() {
      if(!this.config.autoClose) return
      if(isNaN(this.config.autoClose)) return
      this.autoCloseTimeout = setTimeout(() => {
        this.close(true)
      }, this.config.autoClose)
    },
    onOverlayClick() {
      if(this.config.hideOverlay) return
      if(this.persistent) return
      this.close(true)
    },
    onKeyKeyDownEnter() {
      if(!this.config.applyOnEnter) return
      this.apply()
    },
    async apply() {
      if(!this.hasApply) return
      if(this.disabledApply) return
      if(this.isApplyProcessing) return

      this.error = null
      try {
        this.isApplyProcessing = true
        await this.config.applyCallback(this.data)
        this.isApplyProcessing = false
      } catch(error) {
        console.error(error)
        this.error = error
        this.handleApplyError()
        this.isApplyProcessing = false
        return
      }

      this.close()
    },
    handleApplyError() {
      if(typeof this.config.applyErrorCallback != 'function') return
      this.config.applyErrorCallback(this.error, this.data)
    },
    async close(isCancel = false) {
      if(this.disableClose) return
      if(this.closePromise) {
        const result = this.closePromise(this.data)
        if(!result) return
      }

      this.$nextTick(() => {
        this.$emit('close', {
          index: this.index,
          key: this.config.key,
          config: this.config,
          isCancel,
        })

        if(typeof this.config.closeCallback == 'function') {
          this.config.closeCallback(isCancel, this.data)
        }
      })
    },
  },
  computed: {
    promptMaxLength() {
      if(!this.config.promptMaxLength) return null
      return this.config.promptMaxLength
    },
    persistent() {
      if(this.preventClose === true) return true
      if(this.config.persistent) return true
      if(this.disableClose) return true
      if(this.onLoading) return true
      if(this.isApplyProcessing) return true
      return false
    },
    disableClose() {
      if(this.isApplyProcessing) return true
      if(this.onLoading) return true
      return false
    },
    closePromise() {
      if(typeof this.config.closePromise != 'function') return null
      return this.config.closePromise
    },
    disabledApply() {
      if(typeof this.config.disabledApply != 'function') return
      return this.config.disabledApply(this.data)
    },
    createBody() {
      if(this.config.content) return true
      if(this.config.type == 'prompt') return true
      if(this.config.bodySlot) return true
      return false
    },
    hasApply() {
      return typeof this.config.applyCallback === 'function'
    },
    hasCardAction() {
      if(this.hasApply) return true
      if(this.config.close) return true
      if(this.config.actionSlot) return true
      return false
    },
  },
  watch: {
    popupCreated() {
      if(this.popupCreated != false) return
      this.close(true)
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
