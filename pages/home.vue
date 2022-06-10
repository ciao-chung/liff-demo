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

      <div>
        <div class="text-h4">發送邀請驗證碼</div>
        <v-text-field
          outlined
          dense
          :value="otp"
        ></v-text-field>

        <v-btn @click="share">
          發送
        </v-btn>

      </div>
    </v-container>
  </div>
</template>

<script lang="babel" type="text/babel">
import siteConfig from "~/src/config/site"
export default {
  data: () => ({
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
    ],
    otp: 'ABC123',
  }),
  mounted() {
    console.warn('siteConfig.liffId', siteConfig.liffId)
    this.initLiff()
  },
  methods: {
    async getShareUrl() {
      const url = `https://liff.line.me/1657198221-yl3GQYl7/invite?code=${this.otp}`
      return await window.liff.permanentLink.createUrlBy(url)
    },
    async share() {
      try {
        const url = await this.getShareUrl()
        await window.liff.shareTargetPicker([
          {
            type: 'text',
            text: 'Hello, World!',
          },
          {
            type: 'template',
            altText: '請點此加入餐廳',
            template: {
              type: 'buttons',
              thumbnailImageUrl: 'https://images.unsplash.com/photo-1595871277397-08901ed2d7f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoYXZlZCUyMGljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              text: '板橋邀請你加入他的『嘉良冰果室』太平分店',
              actions: [
                {
                  type: 'uri',
                  label: '請點此加入餐廳',
                  uri: url,
                }
              ],
            },
          },
        ])
        this.$snotify.success('邀請連結已發送成功')
        setTimeout(() => {
          window.liff.closeWindow()
        }, 1000)
      } catch (error) {
        console.warn(error)
        this.$apopup.base({
          title: '發送失敗',
          content: error,
        })
      }
    },
    reload() {
      window.location.reload()
    },
    async sendMessage() {
      try {
        await window.liff.sendMessages([
          {
            type: 'text',
            text: this.message,
          },
        ])
        this.$snotify.success('發送成功')
        setTimeout(() => {
          window.liff.closeWindow()
        }, 1000)
      } catch (error) {
        console.warn(error)
        this.$apopup.base({
          title: '發送失敗',
          content: error,
        })
      }
    },
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
  computed: {
    query() {
      return this.$route.query
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
