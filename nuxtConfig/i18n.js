export default {
  locales: ['zh-TW', 'en'],
  defaultLocale: 'zh-TW',
  strategy: 'no_prefix',
  vueI18n: {
    silentTranslationWarn: true,
    fallbackLocale: 'zh-TW',
    messages: {
      'zh-TW': require('../src/i18n/zh-TW.js').default,
    },
  },
}
