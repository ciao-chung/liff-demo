/**
 * https://github.com/nuxt-community/router-module
 * https://github.com/nuxt-community/router-module/issues/82
 */

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: `/`,
        name: 'home',
        meta: {
          container: false,
          mutantNav: true,
        },
        component: () => import('pages/home.vue').then(m => m.default || m),
      },
      {
        path: `/foobar`,
        name: 'foobar',
        component: () => import('pages/foobar.vue').then(m => m.default || m),
      },
    ]
  })
}
