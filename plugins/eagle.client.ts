import Vue from 'vue'
// @ts-ignore
import eagleEnv from 'config/env.json'

import siteConfig from 'src/config/site.js'

// lodash
import 'kernel/libs/lodashLoader'

// language
import language from 'kernel/libs/language'
import liff from '@line/liff'

// @ts-ignore
window.liff = liff
// @ts-ignore
import $ from 'jquery'
// @ts-ignore
window.$ = $
// @ts-ignore
window.self.$ = $

import 'lazysizes'

import { Context } from '@nuxt/types'
export default (context: Context, inject: any) => {
  inject('language', language())
  inject('siteConfig', siteConfig)
}

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import Snotify from 'vue-snotify'
Vue.use(Snotify, {
  toast: { timeout: 5000, titleMaxLength: 32 },
})

// global component
Vue.component('html-content', () => import('components/htmlContent/htmlContent.vue'))
Vue.component('share', () => import('components/share/share.vue'))
Vue.component('copy-url', () => import('components/copyUrl/copyUrl.vue'))
Vue.component('loading', () => import('components/loading.vue'))
