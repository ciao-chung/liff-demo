import site from '../src/config/site'
export default {
  // 詳見: https://pwa.nuxtjs.org/icon
  icon: {
    source: 'static/icon.png',
  },
  manifest: {
    lang: 'zh-Hant-TW',
    ...site.manifest,
  }
}
