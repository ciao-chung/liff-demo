import Vue from 'vue'

// @ts-ignore
import validator from 'validator'
class validator {
  protected helper: any
  protected vm: Vue

  constructor(helper: any, vm: Vue) {
    this.helper = helper
    this.vm = vm
  }


  email(data: string) : boolean {
    if(typeof data != 'string') return false
    if(this.vm.$validator.isEmail(data) === false) return false
    return true
  }

  emailRule(data: any) : boolean|string{
    return this.email(data) || this.vm.$t('validate.error.email_incorrect')
  }

  minText(data: any, length: number) {
    if(typeof data != 'string') return false
    return this.vm.$validator.isLength(data, { min: length })
  }

  minTextRule(data: any, length: number) : boolean|string{
    return this.minText(data, length) || this.vm.$t('validate.error.text_too_less', { length })
  }

  required(data: any) {
    return !window.eagleLodash.isEmpty(window.eagleLodash.trim(data))
  }

  requiredRule(data: any) : boolean|string{
    return this.required(data) || this.vm.$t('validate.error.required')
  }

  passwordValidate(password: any) {
    if(!this.required(password)) return false
    if(!this.minTextRule(password, 4)) return false
    return true
  }
}

export default (helper: any, vm: Vue) => new validator(helper, vm)
export interface ValidatorInterface {
  email: (data: string) => boolean
  emailRule: (data: string) => boolean|string
  minText: (data: any, length: number) => boolean
  minTextRule: (data: any, length: number) => boolean|string
  required: (data: string) => boolean
  requiredRule: (data: string) => boolean|string
}
