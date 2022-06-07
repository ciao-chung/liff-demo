/**
 * https://github.com/nuxt-community/router-module
 * https://github.com/nuxt-community/router-module/issues/82
 */

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const isProductionMode = process.env.NODE_ENV == 'production'
export function createRouter() {
  return new Router({
    mode: 'history',
    base: isProductionMode ? '/liff-demo/' : '/',
    routes: [
      {
        path: `/`,
        name: 'home',
        meta: {
          container: false,
          // mutantNav: true,
        },
        component: () => import('pages/home.vue').then(m => m.default || m),
      },
    ]
  })
}
