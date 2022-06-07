import Vue from 'vue'
import validator, {ValidatorInterface} from 'kernel/helper/validator'
import dayjs from 'dayjs'
class helper {
  protected vm: Vue|null
  public validator: ValidatorInterface|null

  constructor() {
    this.vm = null
    this.validator = null
  }

  setupVueModel(vm: Vue) {
    this.vm = vm
    this.validator = validator(this, this.vm)
  }

  delay(second = 1) : Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, second * 1000)
    })
  }

  focus(selector: string, $el?: HTMLElement) : void {
    // @ts-ignore
    const $target = !$el ? $(selector) : $($el).find(selector)
    $target.focus()
  }

  now(format: string = 'YYYY-MM-DD HH:mm:ss') : string {
    return dayjs().format(format)
  }

  // 回傳當下時戳(秒)
  currentTimestamp() {
    return Math.floor(new Date().getTime()/1000)
  }

  getPhotoUrlArray(photo: any) : any {
    if(!photo) return null
    if (photo.url) return [photo.url]
    if (!photo.size_list) return [photo.size_list]
    const result = []
    for (const suffix in photo.size_list) {
      const photoSizeObject = photo.size_list[suffix]
      if (!photoSizeObject.url) continue
      result.push(photoSizeObject.url)
    }
    return result
  }

  getPhotoUrl(photo: any, suffixList?: string[]) : string|null {
    if(!photo) return null
    if(photo.url) return photo.url
    if(!photo.size_list) return null
    if(!suffixList) suffixList = this.getSuffixListByDevice()
    const originUrl = photo.size_list.origin.url
    for(const suffix of suffixList) {
      if(photo.size_list[suffix] && photo.size_list[suffix].url) {
        return photo.size_list[suffix].url
      }
    }
    return originUrl
  }

  getPhotoProperty(photo: any, property: string, suffixList?: string[]) : string|null {
    if(!photo) return null
    if(photo[property]) return photo[property]
    if(!photo.size_list) return null
    if(!suffixList) suffixList = this.getSuffixListByDevice()
    const propertyOfOrigin = photo.size_list.origin[property]
    for(const suffix of suffixList) {
      if(photo.size_list[suffix] && photo.size_list[suffix][property]) {
        return photo.size_list[suffix][property]
      }
    }
    return propertyOfOrigin
  }

  getSuffixListByDevice() : string[] {
    const device = this.getDevice()
    if(device === 'xs') return ['middle', 'small', 'tiny']
    if(device === 'sm') return ['middle', 'small', 'tiny']
    if(device === 'md') return ['large', 'middle', 'small', 'tiny']
    if(device === 'lg') return ['large', 'middle', 'small', 'tiny']
    return ['xlarge', 'large', 'middle', 'small', 'tiny']
  }

  getDevice() : string|null {
    if(!this.vm) return null
    for(const device of ['xl', 'lg', 'md', 'sm', 'xs']) {
      // @ts-ignore
      const result = this.vm.$vuetify.breakpoint[device]
      if(result === true) return device
    }
    return null
  }

  isMobile() : boolean {
    const device = this.getDevice()
    if(!device) return false
    if(device == 'xl') return false
    if(device == 'lg') return false
    return true
  }

  getComputedLinkList(nodes: any[]) : any[] {
    nodes = window.eagleLodash.cloneDeep(nodes)
    const result = []
    for(const node of nodes) {
      result.push(this._setupMenuNode(node))
    }
    return result
  }

  private _setupMenuNode(node: {[key: string]: any}) {
    const computedNode = window.eagleLodash.cloneDeep(node)

    if(Array.isArray(computedNode.group)) {
      computedNode.group = this.getComputedLinkList(computedNode.group)
    }

    return computedNode
  }

  public textEmpty(data: string) {
    return window.eagleLodash.isEmpty(window.eagleLodash.trim(data))
  }

  isImage(file: File) {
    if(file instanceof File === false) return false
    if(new RegExp(/image\/png/).test(file.type)) return true
    if(new RegExp(/image\/jpg/).test(file.type)) return true
    if(new RegExp(/image\/jpeg/).test(file.type)) return true
    if(new RegExp(/image\/gif/).test(file.type)) return true
    return false
  }

  nestedSetNodeNamePrefix(name: any, depth: number, prefix: undefined|string = '-') : string {
    const prefixString = prefix?.repeat(depth)
    return `${prefixString} ${name}`
  }

  gradient(start: number = 0.1, end: number = 0.3, direction: number = 180) {
    return `${direction}deg, rgba(0, 0, 0, ${start}), rgba(0, 0, 0, ${end})`
  }

  getVideoPhoto(video: AnyObject|null, property?: string|string[]) : AnyObject|null {
    if(!video) return null
    if(video.photo) return video.photo
    if(!property) property = 'youtube_url'
    const uid = this.getYoutubeUid(window.eagleLodash.get(video, property))
    const youtubeImage = this.getYoutubeImage(uid)
    if(!youtubeImage) return null
    return {
      url: youtubeImage
    }
  }

  getYoutubeImage(uid: any) : null|string {
    if (typeof uid != 'string') return null
    return `https://img.youtube.com/vi/${uid}/hqdefault.jpg`
  }

  getYoutubeUid(url: any) : null|string {
    if (typeof url != 'string') return null

    // 短網址形式
    const short_pattern = /(https:\/\/youtu\.be\/)(.*)/
    if (url.match(short_pattern)) {
      let uid = url.replace(short_pattern, '$2')
      const hasQuery = new RegExp(/\?/).test(uid)
      if (hasQuery) {
        uid = uid.split('?')[0]
      }
      return uid
    }

    // 正常形式
    const partial = url.split('v=')
    if (typeof partial[1] != 'string') return null
    const uid = partial[1].split('&')[0]
    return uid
  }
}

export default new helper()

export interface HelperInterface {
  setupVueModel: (vm: Vue) => void,
  validator: ValidatorInterface,
  delay: (second: number) => Promise<void>
  focus: (selector: string, $el?: HTMLElement) => void
  now: (format?: string) => string
  currentTimestamp: () => number
  getDevice: () => string|null
  isMobile: () => boolean
  getPhotoUrl: (photo: any, suffixList?: string[]) => string|null
  getComputedLinkList: (nodes: any[]) => any[]
  getSiteUserName: (user: any) => any
  textEmpty: (data: any) => boolean
  isImage: (file: File) => boolean
  nestedSetNodeNamePrefix: (name: any, depth: number, prefix?: '-') => string
  gradient: (start: number|undefined, end: number|undefined, direction: number|undefined) => string
  getYoutubeUid: (url: any) => null|string
  getYoutubeImage: (uid: any) => null|string
  getVideoPhoto:(video: AnyObject|null, property?: string|string[]) => AnyObject|null
}
