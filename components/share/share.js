import facebookSdk from 'kernel/libs/facebookSdk'
export default {
  props: {
    url: {
      type: String,
      default: null,
    },
  },
  created() {
    this.facebookSdk.setup(this.facebookAppId, this.$i18n.locale)
  },
  methods: {
    shareMessenger() {
      if(!process.client) return
      if(!this.facebookAppId) return
      if(!window.FB) return
      FB.ui({
        method: 'share',
        href: this.shareUrl,
      })
    },
  },
  computed: {
    facebookSdk() {
      return facebookSdk
    },
    oauthClient() {
      return this.$store.getters['base/oauthClient']
    },
    facebookAppId() {
      if(!this.oauthClient) return null
      return this.$eagleLodash.get(this.oauthClient, 'facebook')
    },
    shareUrl() {
      if(!process.client) return null
      if(this.url) return this.url
      const origin = window.location.origin
      let path = window.location.pathname
      path = path.substring(1)
      return `${origin}${process.env.BASE_URL}${path}`
    },
    facebookShareUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.shareUrl)}`
    },
    lineShareUrl() {
      return `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(this.shareUrl)}`
    },
  },
}
