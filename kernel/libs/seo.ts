// @ts-ingore
import { currency } from 'src/config/env.json'
import dayjs from 'dayjs'
import helper from 'kernel/helper/helper'
import breadcrumbs from 'kernel/libs/seo/breadcrumbs'
import Vue from 'vue'
import {
  SeoInitParams,
  SeoMetaParams,
  SeoGoogleStructuredDataPost,
} from 'kernel/types/seo'
import Router from 'vue-router'

class seo {
  protected vm?: Vue
  protected siteName?: string
  protected domain?: string
  protected logoUrl?: string

  init(vm: Vue, data: SeoInitParams) {
    this.vm = vm
    this.siteName = data.siteName
    this.domain = data.domain
    this.logoUrl = data.logoUrl
  }

  getMetaArray(data: SeoMetaParams) {
    let meta:AnyObject[] = []

    if(data.title) {
      meta = meta.concat([
        {
          hid: 'og:title',
          property: 'og:title',
          content: data.title,
        },
      ])
    }

    if(data.keywords) {
      meta = meta.concat([
        {
          hid: 'keywords',
          name: 'keywords',
          content: data.keywords,
        },
      ])
    }

    if(data.description) {
      meta = meta.concat([
        {
          hid: 'description',
          name: 'Description',
          content: data.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: data.description,
        },
      ])
    }

    if(data.photo) {
      const suffixList = ['middle', 'small', 'tiny']
      const width = helper.getPhotoProperty(data.photo, 'width', suffixList)
      const height = helper.getPhotoProperty(data.photo, 'height', suffixList)
      meta = meta.concat([
        {
          hid: 'og:image',
          property: 'og:image',
          content: helper.getPhotoUrl(data.photo, suffixList),
        },
      ])
      if(width && height) {
        meta = meta.concat([
          {
            hid: 'og:image:width',
            property: 'og:image:width',
            content: width,
          },
          {
            hid: 'og:image:height',
            property: 'og:image:height',
            content: height,
          },
        ])
      }
    }

    return meta
  }

  getBaseGoogleStructuredData() {
    return [
      /**
       * Logo
       * 參考: https://developers.google.com/search/docs/advanced/structured-data/logo
       */
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: this.domain,
          name: this.siteName,
        }
      },

      /**
       * search box
       * 參考: https://developers.google.com/search/docs/advanced/structured-data/sitelinks-searchbox
       */
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'url': this.domain,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${this.domain}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        }
      },
    ]
  }

  getBreadcrumbGoogleStructuredData(vueRouter: Router, items: BreadcrumbItem[]) : AnyObject[] {
    return breadcrumbs.getGoogleStructuredData(vueRouter, items)
  }

  getPostGoogleStructuredData(data: SeoGoogleStructuredDataPost) {
    const blogPosting = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': this.domain,
      },
      'headline': data.title,
      'datePublished': dayjs(data.createdAt).format('YYYY-MM-DDTHH:mm:ssZ'),
      'dateModified': dayjs(data.updatedAt).format('YYYY-MM-DDTHH:mm:ssZ'),
      'image': helper.getPhotoUrlArray(data.photo) || this.logoUrl,
      'author': {
        '@type': 'Organization',
        'name': this.siteName,
      },
      'publisher': {
        '@type': 'Organization',
        'name': this.siteName,
        'logo': {
          '@type': 'ImageObject',
          'url': this.logoUrl,
        }
      },
    }

    if(data.description) {
      // @ts-ignore
      blogPosting.description = data.description
    }

    return [
      {
        type: 'application/ld+json',
        json: blogPosting,
      },
    ]
  }
}

export default new seo()
