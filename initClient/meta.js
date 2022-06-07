import siteConfig from 'src/config/site'
import env from 'src/config/env.json'
import seo from 'libs/seo'
seo.init(null, {
  siteName: siteConfig.name,
  domain: env.frontendDomain,
  logoUrl: require('assets/logo.png'),
})

const getGtagScript = () => {
  if(!env.ga) return []
  if(!env.ga.measurementId) return []
  return [
    {
      hid: 'gtag-script1',
      src: `https://www.googletagmanager.com/gtag/js?id=${env.ga.measurementId}`,
      defer: true,
    },
    {
      hid: 'gtag-script2',
      innerHTML: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${env.ga.measurementId}');
        `,
      type: 'text/javascript',
      charset: 'utf-8'
    },
  ]
}

export default {
  htmlAttrs: {
    lang: siteConfig.locales.defaultLocale
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${siteConfig.name}` : siteConfig.name
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'google-site-verification', content: env.googleSiteVerification },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'keywords',
      name: 'keywords',
      content: siteConfig.seo.keywords,
    },
    {
      hid: 'description',
      name: 'description',
      content: siteConfig.seo.description,
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: siteConfig.name,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: siteConfig.seo.title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: siteConfig.seo.description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: require('assets/logo.png'),
    },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'apple-touch-icon', href: '/favicon.ico' },
  ],
  script: [
    ...seo.getBaseGoogleStructuredData(),

    // gtag
    ...getGtagScript(),
  ],
  __dangerouslyDisableSanitizers: ['script'],
}
