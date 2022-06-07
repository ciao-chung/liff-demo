// @ts-ignore
import { events } from './events.js'
import {InitConfig, BaseConfig} from './types'

class app {
  protected emitter: Vue
  constructor(config: InitConfig) {
    this.emitter = events
    this.emitter.$nextTick(() => {
      this.emitter.$emit('init', config)
    })
  }

  init(config: InitConfig) {
    this.emitter.$emit('init', config)
  }

  base(options: BaseConfig) {
    this.emitter.$emit('base', options)
  }

  prompt(options: {[key: string]: any}|null) {
    this.emitter.$emit('prompt', options)
  }

  remove(key: string) {
    this.emitter.$emit('remove', key)
  }
}

export default (config: InitConfig) => new app(config)