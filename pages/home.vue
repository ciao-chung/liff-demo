<template>
  <div>
    <v-container>
      <div class="text-h3">LIFF</div>
      <v-btn @click="login" class="mr-4 mb-4">
        Login
      </v-btn>

      <v-btn @click="reload" class="mr-4 mb-4">
        reload
      </v-btn>

      <v-btn @click="getAccessToken" class="mr-4 mb-4">
        getAccessToken
      </v-btn>

      <v-btn @click="getIDToken" class="mr-4 mb-4">
        getIDToken
      </v-btn>

      <v-btn @click="getDecodedIDToken" class="mr-4 mb-4">
        getDecodedIDToken
      </v-btn>

      <v-btn @click="isLoggedInAction" class="mr-4 mb-4">
        isLoggedIn
      </v-btn>

      <v-btn @click="getProfile" class="mr-4 mb-4">
        getProfile
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

      <v-textarea
        outlined
        dense
        v-model="message"
      ></v-textarea>

      <v-btn @click="sendMessage" :disabled="!message">
        send message
      </v-btn>

      <v-divider class="my-4"></v-divider>

      <div class="my-4">query: {{query}}</div>
      <div class="my-4">accessToken: {{accessToken}}</div>
      <div class="my-4">idToken: {{idToken}}</div>
      <div class="my-4">decodedIDToken: {{decodedIDToken}}</div>
      <div class="my-4">isLoggedIn: {{isLoggedIn}}</div>
      <div class="my-4">profile: {{profile}}</div>
    </v-container>
  </div>
</template>

<script lang="babel" type="text/babel">
import siteConfig from "~/src/config/site"
export default {
  data: () => ({
    idToken: null,
    decodedIDToken: null,
    accessToken: null,
    isLoggedIn: null,
    profile: null,
    message: '',
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
      {
        name: 'scanCodeV2',
      },
    ],
  }),
  mounted() {
    console.warn('siteConfig.liffId', siteConfig.liffId)
    // this.initLiff()
    this.init()
  },
  methods: {
    async init() {
      const profile = await window.liff.getProfile()
      const accessToken = window.liff.getAccessToken()
      const idToken = window.liff.getIDToken()
      const isLoggedIn = window.liff.isLoggedIn()
      const decodedIDToken = window.liff.getDecodedIDToken()
      this.$apopup.base({
        width: '1000px',
        content: `
<div class="mb-4">isLoggedIn: ${isLoggedIn}</div>
<div class="mb-4">idToken: ${idToken}</div>
<div class="mb-4">accessToken: ${accessToken}</div>
<div class="mb-4">decodedIDToken: ${decodedIDToken}</div>
<div class="mb-4">profile: ${profile}</div>
`,
        isHtml: true,
      })
    },
    reload() {
      window.location.reload()
    },
    async sendMessage() {
      try {
        await window.liff.sendMessages([
          {
            type: 'text',
            text: 'message',
          },
        ])
      } catch (error) {
        console.warn(error)
      }
    },
    getAccessToken() {
      this.accessToken = window.liff.getAccessToken()
      console.warn('accessToken', this.accessToken)
    },
    getIDToken() {
      this.idToken = window.liff.getIDToken()
      console.warn('idToken', this.idToken)
    },
    getDecodedIDToken() {
      this.decodedIDToken = window.liff.getDecodedIDToken()
      console.warn('decodedIDToken', this.decodedIDToken)
    },
    isLoggedInAction() {
      this.isLoggedIn = window.liff.isLoggedIn()
      console.warn('isLoggedIn', this.isLoggedIn)
    },
    async getProfile() {
      this.profile = await window.liff.getProfile()
      console.warn('profile', this.profile)
    },
    // async initLiff() {
    //   try {
    //     await window.liff.init({
    //       liffId: '1657198221-yl3GQYl7',
    //     })
    //     console.info('life init successfully')
    //   } catch (error) {
    //     console.warn(error)
    //     console.warn('life init failure')
    //   }
    // },
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
  computed: {
    query() {
      return this.$route.query
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
