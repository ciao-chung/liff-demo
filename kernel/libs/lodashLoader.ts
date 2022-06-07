import Vue from 'vue'

import {
  cloneDeep, isEqual, sortBy, orderBy, upperFirst, isEmpty, trim, snakeCase,
  random, uniq, has, get, set, includes, slice, find, remove, merge,
  replace, join, lowerCase,
} from 'lodash'

import {EagleLodashType} from 'types/shims-vue'
const eagleLodashLibrary = <EagleLodashType>{
  cloneDeep,
  isEqual,
  sortBy,
  orderBy,
  upperFirst,
  isEmpty,
  trim,
  snakeCase,
  random,
  uniq,
  has,
  get,
  set,
  includes,
  slice,
  find,
  remove,
  merge,
  join,
  replace,
  lowerCase,
}

// @ts-ignore
globalThis.eagleLodash = <EagleLodashType>eagleLodashLibrary
Vue.prototype.$eagleLodash = <EagleLodashType>eagleLodashLibrary
if(process.client) window.eagleLodash = <EagleLodashType>eagleLodashLibrary
