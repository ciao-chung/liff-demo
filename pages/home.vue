<template>
  <div>
    <v-container>
      <div class="text-h3">LIFF</div>
      <v-btn @click="login">
        Login
      </v-btn>

      <div class="my-4">
        query: {{query}}
      </div>

      <v-divider class="my-4"></v-divider>
      <div class="my-4">
        <v-btn
          v-for="method in methods"
          :key="method.name"
          color="primary"
          class="mr-4 mb-4"
          @click="triggerMethod(method.name)"
        >
          {{method.name}}
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script lang="babel" type="text/babel">
import siteConfig from "~/src/config/site"
export default {
  data: () => ({
    methods: [
      {
        name: 'getAccessToken',
      },
      {
        name: 'getProfile',
      },
      {
        name: 'scanCode',
      },
    ],
  }),
  mounted() {
    console.warn('siteConfig.liffId', siteConfig.liffId)
    this.initLiff()
  },
  methods: {
    async initLiff() {
      try {
        await window.liff.init({
          liffId: '1657198221-yl3GQYl7',
        })
        console.info('life init successfully')
      } catch (error) {
        console.warn(error)
        console.warn('life init failure')
      }
    },
    login() {
      window.liff.login()
    },
    async triggerMethod(method) {
      if(!window.liff) {
        this.$apopup.base({
          title: '找不到LIFF library',
        })
        return
      }

      if(typeof window.liff[method] != 'function') {
        this.$apopup.base({
          title: '找不到LIFF method',
          content: 'method',
        })
        return
      }

      let value = null
      try {
        value = await window.liff[method]()
      } catch (error) {
        this.$apopup.base({
          title: 'call method failure',
          content: error,
        })
        console.warn(error)
        return
      }
      this.$apopup.base({
        title: `call method ${method}`,
        content: value,
      })
      console.warn('value', value)
    }
  },
  copmuted: {
    query() {
      return this.$route.query
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
