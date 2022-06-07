// @ts-ignore
import storage from 'libs/storage/localStorage.js'
const STORAGE_LOCALE_KEY = 'eagle:site-locale'
class language {
  // @typescript-eslint/no-explicit-any
  protected storage: any
  constructor() {
    this.storage = storage()
  }

  protected getQueryLanguage() : string|null {
    let lang = null
    try {
      lang = (new URLSearchParams(window.location.search)).get('lang')
    } catch (error) {
      return null
    }
    return lang
  }

  public init() {
    const queryLanguage = this.getQueryLanguage()
    if(queryLanguage) {
      return this.setLanguageToStorage(queryLanguage)
    }
  }

  public setLanguageToStorage(language: string|null) : void{
    if(!language) return
    this.storage.set(STORAGE_LOCALE_KEY, language)
  }

  public get() : string {
    const browserLanguage = navigator.language
    const storageLanguage = this.storage.get(STORAGE_LOCALE_KEY)
    if(storageLanguage) return storageLanguage
    return browserLanguage
  }
}

export default () => new language()
