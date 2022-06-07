<template>
  <v-app>
    <client-only>
      <v-alert
        outlined
        class="my-4 mx-4"
        icon="fa fa-exclamation-triangle"
        color="orange lighten-1"
        prominent
        border="left"
      >
        <div class="pl-4">
          <div class="title">
            {{title}}
          </div>

          <div v-if="content">
            {{content}}
          </div>

          <v-spacer></v-spacer>

          <v-btn
            @click="$router.go(-1)"
            small
            outlined
            class="mt-4 mr-4"
            color="orange lighten-1"
          >
            <v-icon left>fa fa-arrow-left</v-icon>
            <span>{{ $t('action.back_to.home_page') }}</span>
          </v-btn>

          <v-btn
            @click="reload"
            small
            outlined
            class="mt-4 mr-4"
            color="orange lighten-1"
          >
            <v-icon left>fa fa-sync</v-icon>
            <span>{{ $t('action.reload') }}</span>
          </v-btn>
        </div>
      </v-alert>
    </client-only>
  </v-app>
</template>

<script>
import initClient from 'initClient/initClient'
export default {
  layout: 'empty',
  mixins: [initClient],
  props: {
    error: {
      type: Object,
      default: () => null,
    },
  },
  head () {
    return {
      title: this.title
    }
  },
  created() {
    this.setupI18n()
  },
  methods: {
    reload() {
      window.location.reload()
    },
  },
  computed: {
    errorStatus() {
      return this.$eagleLodash.get(this.error, 'statusCode') || null
    },
    errorStatusText() {
      if(!this.errorStatus) return null
      return this.$eagleLodash.get(this.$i18n.messages, [this.$i18n.locale, `error.${this.errorStatus}`]) || null
    },
    title() {
      if(this.$eagleLodash.get(this.error, 'title')) return this.$eagleLodash.get(this.error, 'title')
      if(this.errorStatusText) return this.errorStatusText
      return this.$t('error.default.title')
    },
    content() {
      return this.$eagleLodash.get(this.error, 'content')
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
