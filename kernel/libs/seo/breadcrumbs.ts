import Vue from 'vue'
import Router from 'vue-router'
class breadcrumbs {
  protected frontendDomain?: string
  protected vueRouter?: Router
  protected items?: BreadcrumbItem[]

  public init(frontendDomain: string) {
    this.frontendDomain = frontendDomain
  }

  public getGoogleStructuredData(vueRouter: Router, items: BreadcrumbItem[]) : AnyObject[] {
    this.vueRouter = vueRouter
    this.items = items

    return [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': this.getGoogleStructuredItemListElement(),
        },
      }
    ]
  }

  private getGoogleStructuredItemListElement() {
    if(!this.vueRouter) return null
    if(!Array.isArray(this.items)) return null
    if(this.items.length == 0) return null
    const result = []
    let position = 0

    for(const item of this.items) {
      position++
      let link = null
      if(item.to) {
        const path = this.vueRouter.resolve(item.to).href
        link = `${this.frontendDomain}${path}`
      }
      if(item.href) {
        link = item.href
      }
      if(!link) continue

      result.push({
        '@type': 'ListItem',
        position,
        name: item.text,
        item: link,
      })
    }
    return result
  }
}

export default new breadcrumbs()
