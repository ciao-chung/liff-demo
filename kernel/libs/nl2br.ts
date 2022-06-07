import Vue from 'vue'
import linkifyHtml from 'linkify-html'

class nl2br {
  constructor() {
    if(process.client) {
      window.nl2br = (data: null|string) => this.nl2br(data)
    }
    Vue.prototype.nl2br = (data: null|string) => this.nl2br(data)
    Vue.filter('nl2br', (data: null|string) => this.nl2br(data))
  }

  nl2br(data: null|string) {
    const result = String(data).replace(/(?:\r\n|\r|\n)/g, '<br>')
    if(!result) return ''
    if(result == 'null') return ''

    // linkfyjs options: https://soapbox.github.io/linkifyjs/docs/options.html
    return linkifyHtml(result, {
      target: {
        url: '_blank'
      },
    })
  }
}

export default new nl2br()

export type nl2brType = (data: null|string) => null|string
