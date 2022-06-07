import Vue from 'vue'

import { Context } from '@nuxt/types'

// lodash
import 'kernel/libs/lodashLoader'

import 'kernel/libs/nl2br'

// @ts-ignore
import eagleEnv from 'config/env.json'

import tracking from 'kernel/libs/tracking'
Vue.prototype.$tracking = tracking

// api
import api from 'kernel/api/api'
import helper from 'kernel/helper/helper'
export default (context: Context, inject: any) => {
  inject('api', api(eagleEnv))
  inject('helper', helper)
}

Vue.component('breadcrumbs', () => import('components/breadcrumbs/breadcrumbs.vue'))
Vue.component('full-screen', () => import('components/fullScreen/fullScreen.vue'))
