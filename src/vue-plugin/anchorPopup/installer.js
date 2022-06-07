import Vue from 'vue'
import kernelComponent from './kernel'
import app from './app'
class Installer {
  constructor() {
    this.isInstalled = false
    this.emitter = new Vue()
  }

  install(Vue, options = null) {
    if(this.isInstalled) return
    this.isInstalled = true
    Vue.component('anchor-popup', kernelComponent)
    Vue.prototype.$apopup = app(Vue.observable(options))
  }
}

export default new Installer()
