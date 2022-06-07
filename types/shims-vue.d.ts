import Vue from 'vue'
import { HelperInterface } from 'kernel/helper/helper'
import { nl2brType } from 'kernel/libs/nl2br'
import { TokenStoreInterface } from 'kernel/libs/tokenStore'
import { VueRouteChangePreventInterface } from 'kernel/libs/vueRouteChangePrevent'
import { SnotifyService } from 'vue-snotify/SnotifyService'
import { gtag } from '@types/gtag.js'

import {
  cloneDeep, isEqual, sortBy, orderBy, upperFirst, isEmpty, trim, snakeCase,
  random, uniq, has, get, set, includes, slice, find, remove, merge,
  replace, join, lowerCase,
} from '@types/lodash'

declare type lodashCollection = {
  cloneDeep,
  isEqual,
  sortBy,
  orderBy,
  upperFirst,
  snakeCase,
  lowerCase,
  isEmpty,
  trim,
  random,
  uniq,
  has,
  get,
  set,
  includes,
  slice,
  find,
  remove,
  replace,
  merge,
  join,
}

declare global {
  interface Window {
    gtag: gtag
    rootVm: Vue
    vueRouteChangePrevent: VueRouteChangePreventInterface
    tokenStore: TokenStoreInterface
    helper: HelperInterface
    nl2br: nl2brType
    eagleLodash: lodashCollection
  }
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

import { EagleApiInterface } from 'kernel/api/api'
// import { TokenStoreInterface } from 'kernel/libs/tokenStore'
import {SnackbarInterface} from 'plugins/snackbar'
import {SystemBarInterface} from 'plugins/systemBar'
declare module 'vue/types/vue' {
  interface Vue {
    $api: EagleApiInterface,
    // $tokenStore: TokenStoreInterface
    $helper: HelperInterface,
    $snackbar: SnackbarInterface,
    $systemBar: SystemBarInterface,
    $validator: any,
    $snotify: SnotifyService,
    eagleLodash: lodashCollection,
  }
}


// @ts-ignore
declare module 'vue-i18n/types' {
  export default class VueI18n {
    t(key: Path, locale: Locale, values?: Values): string;
    t(key: Path, values?: Values): string;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $t: typeof VueI18n.prototype.t;
  }

  interface VueConstructor<V extends Vue = Vue> {
    i18n: typeof VueI18n.prototype;
  }
}

export type EagleLodashType = lodashCollection
