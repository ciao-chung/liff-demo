export interface ApplicationInterface {
  fileBaseUrl: string,
  frontendDomain: string,
  site: {
    name: string,
    seo: {
      keywords?: string,
      description?: string,
    },
  },
}
