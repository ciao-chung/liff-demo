import env from 'src/config/env.json'

declare type pageviewType = {
  title: any
}

class tracking {
  protected measurementId: string|null

  constructor() {
    this.measurementId = env.ga.measurementId
  }

  pageview(option: pageviewType) : void {
    if(!this.measurementId) return
    if(process.server) return
    if(!gtag) return
    gtag('config', this.measurementId, {
      page_title: option.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      send_page_view: false,
    })
  }
}

export interface TrackingInterface {
  pageview: (option: pageviewType) => void
}


export default new tracking()
