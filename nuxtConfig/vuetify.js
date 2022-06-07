import colors from 'vuetify/es5/util/colors'
import defaultVuetifyIcon from './defaultVuetifyIcon.js'
export default {
  icons: {
    values: defaultVuetifyIcon,
  },
  // https://github.com/nuxt-community/vuetify-module#defaultassets
  defaultAssets: {
    font: {
      family: 'Roboto'
    },
    icons: {
      iconfont: 'fa',
    },
  },
  treeShake: false,
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#1bd5e3',
        accent: colors.grey.base,
        secondary: '#2dddeb',
        info: colors.teal.base,
        warning: colors.amber.base,
        error: colors.deepOrange.base,
        success: colors.green.base
      },
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
}
