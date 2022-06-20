<template>
  <div>
    <h1 class="text-h4 mb-4">邀請餐廳成員</h1>
    <div>
      <div class="text-h5">發送邀請驗證碼</div>
      <v-text-field
        outlined
        dense
        :value="otp"
      ></v-text-field>

      <v-btn @click="share">
        發送
      </v-btn>

      <div class="my-4">
        LINK: {{url}}
      </div>

      <div class="my-4">
        error: {{error}}
      </div>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  data: () => ({
    otp: 'ABC123',
    url: null,
    error: null,
  }),
  created() {
    this.init()
  },
  methods: {
    async init() {
      const url = `https://ciao-chung.github.io/liff-demo/join?code=${this.otp}`
      // const url = `https://liff.line.me/1657198221-yl3GQYl7/join?code=${this.otp}`
      console.info('url', url)
      try {
        this.url = await window.liff.permanentLink.createUrlBy(url)
      } catch (error) {
        console.warn(error)
        this.error = error
        this.$apopup.base({
          title: '建立LIFF URL',
          content: error,
        })
      }
    },
  async share() {
    try {
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
            title: '板橋邀請你加入他的『嘉良冰果室』太平分店',
            text: this.url,
            actions: [
              {
                type: 'uri',
                label: '請點此加入餐廳',
                uri: this.url,
              }
            ],
          },
        },
      ])
    } catch (error) {
      console.warn(error)
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
