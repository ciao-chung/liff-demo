<template>
  <div eagle-html-content="container">
    <div
      eagle-html-content="root"
    >
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import prismjs from 'prismjs'
import 'prismjs/components/prism-markup-templating.js'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-markup.js'
import 'prismjs/components/prism-json.js'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-css.js'
import 'prismjs/components/prism-sass.js'
import 'prismjs/components/prism-sql.js'
import 'prismjs/components/prism-php.js'
import 'prismjs/components/prism-markdown.js'
import 'prismjs/components/prism-apacheconf.js'
import 'prismjs/components/prism-nginx.js'
import 'prismjs/components/prism-docker.js'
import 'prismjs/components/prism-yaml.js'
export default {
  props: {
    on: {
      type: Object,
      default: null,
    },
    value: {
      default: null,
    },
  },
  data: () => ({
    $target: null,
    data: null,
  }),
  created() {
    this.setupContent()
  },
  mounted() {
    this.init()
  },
  methods: {
    setupContent() {
      const $nodes = $.parseHTML(this.value).filter($node => !$node.wholeText)
      let data = ''
      for(const $node of $nodes) {
        if($node.wholeText) continue
        if($($node).children().length === 0) {
          data += $($node).prop('outerHTML')
          continue
        }

        this.setupLazyLoad($($node))
        data += $($node).prop('outerHTML')
      }
      this.data = data
    },
    setupLazyLoad($node) {
      const $needLaziedNodes = $node.find('img:not(.lazyload[data-src]),iframe:not(.lazyload[data-src])')
      $needLaziedNodes.each(function() {
        const src = $(this).attr('src')
        $(this).attr('data-src', src)
        $(this).removeAttr('src')
        $(this).addClass('lazyload')
        $(this).addClass('elevation-8')
      })
    },
    init() {
      this.highLightCodeSnippet()
      this.$nextTick(() => {
        this.$target = $(this.$el)
        this.setIframe()
        this.setImage()
      })
    },
    setIframe() {
      this.$target.find('iframe').each(function() {
        const hasResponsiveClass = $(this).hasClass('v-responsive')
        if(hasResponsiveClass) return
        $(this).addClass('v-responsive')
        const iframeHeight = $(this).attr('height') || null
        const css = {
          maxWidth: '100%',
        }
        if(!iframeHeight) css.height = 'auto'
        $(this).css(css)
      })
    },
    setImage() {
      this.$target.find('img').each(function() {
        const hasResponsiveClass = $(this).hasClass('v-responsive')
        if(hasResponsiveClass) return
        $(this).addClass('v-responsive')
        $(this).addClass('elevation-8')
        $(this).css({
          maxWidth: '100%',
          height: 'auto',
        })
      })
    },
    highLightCodeSnippet() {
      this.$nextTick(() => {
        prismjs.highlightAll()
      })
    },
  },
  computed: {
    content() {
      if(this.$nuxt.$isServer === true) return this.value
      return this.data
    },
  },
  watch: {
    value() {
      this.setupContent()
      this.$nextTick(() => {
        this.init()
      })
    },
  }
}
</script>

<style lang="sass" type="text/sass">
@import 'prismjs/themes/prism.css'
*[eagle-html-content="root"]
  pre
    padding: 1em
    margin: .5em 0
    overflow: auto
    background-color: #f5f2f0
    .token.operator
      background: none
  code
    background-color: transparent !important
    box-shadow: none
    color: $app-color-black
    font-weight: 500
    padding-left: 0
  a
    line-break: anywhere
</style>
