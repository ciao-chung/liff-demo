import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('dayjs', (value: any, format: string) => {
  return dayjs(value).format(format)
})
