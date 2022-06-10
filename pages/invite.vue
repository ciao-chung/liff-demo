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

    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  data: () => ({
    otp: 'ABC123',
  }),
  methods: {
    async getShareUrl() {
      const url = `https://ciao-chung.github.io/liff-demo/#/join?code=${this.otp}`
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
  },
  computed: {
    query() {
      return this.$route.query
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
