class FacebookSdk {
  setup(appId, language = null) {
    this.appId = appId
    this.language = language
    if(!this.language) this.language = 'zh_TW'

    if($('body #fb-root').length != 0) return
    $('body').append(this._script())
    this._init()
  }

  _getComputedLanguage() {
    return this.language.replace('-', '_')
  }

  _script() {
    return `<script id="fb-root">(function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/${this._getComputedLanguage()}/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))</script>`
  }

  _init() {
    window.fbAsyncInit = () => {
      const fbConfig = {
        xfbml: true,
        version: 'v3.2'
      }
      if(this.appId) fbConfig.appId = this.appId
      FB.init(fbConfig)
    }
  }
}

export default new FacebookSdk()
