// @ts-ignore
import fingerprint from 'fingerprintjs'
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import language from 'kernel/libs/language'
import realApi from 'kernel/api/realApi'
/* eslint-disable */
class api {
  protected fingerprint: number | string |undefined
  protected apiEndPoint: string
  public eagleEnv: EagleEnv
  public collection: any
  protected vm: Vue | undefined

  constructor(eagleEnv: EagleEnv) {
    this.eagleEnv = eagleEnv
    this.apiEndPoint = this.eagleEnv.apiEndPoint
    this.collection = {}

    // @ts-ignore
    realApi(this)
  }

  public setupClient(vm: Vue) : void {
    this.vm = vm
    this.fingerprint = new fingerprint().get()
  }

  protected handleAxiosResult(axiosConfig: any, result: any) : any
  {
    if(typeof axiosConfig.handleResult === 'function') {
      return axiosConfig.handleResult(result)
    }

    if(axiosConfig.responseType == 'blob') {
      return {
        data: result.data,
        status: result.status,
        xhr: result.request
      }
    }

    return result.data
  }

  protected _logout() {
    window.tokenStore.clean()
  }

  protected handleAxiosError(axiosConfig: any, error: any) : any {
    const status = error.status
    const reason = !error.headers ? null : error.headers.reason

    if(this.vm && status == 401 && reason === 'Unauthorized') {
      this.vm?.$snotify.warning(
        this.vm?.$t('error.token_unauthorized.content'),
        this.vm?.$t('error.token_unauthorized'),
      )
      this._logout()
    }
    if(typeof axiosConfig.handleError === 'function') {
      return axiosConfig.handleError(error)
    }
    return error
  }

  protected getLanguage() : string|null {
    if(!process.client) return null
    return language().get()
  }

  public request(options: object) : Promise<any> {
    const self = this
    const axiosConfig = this.getDefaultAxiosConfig(options)
    return new Promise(async (resolve, reject) => {
      try {
        let result = await axios(axiosConfig)
        let resolveContent = self.handleAxiosResult(axiosConfig, result)
        resolve(resolveContent)
      } catch (error) {
        if(error.response === undefined) {
          reject(undefined)
          return
        }

        const rejectError = self.handleAxiosError(axiosConfig, error.response)
        reject(rejectError)
      }
      return null
    })
  }

  protected getFingerprint() : string|number|undefined|null {
    if(!process.client) return null
    return this.fingerprint
  }

  protected getDefaultAxiosConfig(options: any) : any {
    let requestConfig: any = {
      baseURL: options.baseURL || this.apiEndPoint,
      url: options.url || '',
      method: options.type || 'get',
      params: null,
      data: null,
      headers: {
        Fingerprint: this.getFingerprint(),
        Locale: this.getLanguage(),
      },
      responseType: options.responseType || 'json',
      // @ts-ignore
      onDownloadProgress: event => {
        if(typeof options.onDownloadProgress != 'function') return
        const progress = Math.floor(100*(event.loaded/event.total))
        options.onDownloadProgress({
          progress,
          event,
        })
      },
      // @ts-ignore
      onUploadProgress: event => {
        if(typeof options.onUploadProgress != 'function') return
        const progress = Math.floor(100*(event.loaded/event.total))
        options.onUploadProgress({
          progress,
          event,
        })
      },
    }

    if(requestConfig.method == 'get') {
      requestConfig.params = options.params || null
      // @ts-ignore
      requestConfig.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'indices' })
    }

    if(requestConfig.method != 'get') {
      requestConfig.data = options.params || null
    }

    // 站內token
    if(process.client) {
      const token = window.tokenStore.get()
      if(token) {
        requestConfig.headers.Authorization = `Bearer ${token}`
      }
    }

    // 自訂authorization(串第三方api會需要)
    if(options.authorization) {
      requestConfig.headers.Authorization = `Bearer ${options.authorization}`
    }

    // martipart
    if(options.martipart) {
      requestConfig.headers['Content-Type'] = 'multipart/form-data'
      requestConfig.data = options.data
    }

    return requestConfig
  }

  public isGif(formData: FormData) {
    if(!formData) return
    if(!formData.get('file')) return
    // @ts-ignore
    return formData.get('file').type === 'image/gif'
  }
}

export default (eagleEnv: EagleEnv) => new api(eagleEnv)

export interface EagleApiConfigInterface {
  baseURL: string | undefined,
  url: string | undefined,
  method: string | undefined,
  params: any | undefined,
  data: any | undefined,
  headers: object | undefined,
}


export interface EagleModuleApiInterface {
  public? : object,
  account? : object,
  admin? : object,
}

export interface EagleApiInterface {
  setupClient(vm: Vue): void,
  request(option: object) : Promise<void>,
  isGif(option: object) : boolean,
  collection: any,
}
