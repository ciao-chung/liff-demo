// seo init params
declare type initParams = {
  siteName: string,
  domain: string,
  logoUrl: string,
}
export type SeoInitParams = initParams

// seo meta params
declare type metaParams = {
  title?: string,
  keywords?: string,
  description?: string,
  photo?: null|AnyObject,
}
export type SeoMetaParams = metaParams

// google structured data post
declare type GoogleStructuredDataPost = {
  title?: string,
  description?: string,
  photo?: string,
  createdAt?: string,
  updatedAt?: string,
}
export type SeoGoogleStructuredDataPost = GoogleStructuredDataPost
