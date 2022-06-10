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
        component: () => import('pages/home.vue').then(m => m.default || m),
      },
      {
        path: `/invite`,
        name: 'invite',
        component: () => import('pages/invite.vue').then(m => m.default || m),
      },
      {
        path: `/join`,
        name: 'join',
        component: () => import('pages/join.vue').then(m => m.default || m),
      },
    ]
  })
}
