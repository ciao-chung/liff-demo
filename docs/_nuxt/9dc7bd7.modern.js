(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,n){t.exports=n.p+"img/logo.f6f7677.png"},101:function(t,e,n){"use strict";n.r(e);var o=n(15),r=n.n(o),l=n(14);e.default={namespaced:!0,state:()=>({layoutReady:!1,application:null,device:"lg",size:{width:0,height:0},isNavFixTop:!0,mobileNavActive:!1,routeMutantNav:!1,pageMutantNav:!1}),mutations:{setMobileNavActive:(t,e)=>{t.mobileNavActive=e},set:(t,data)=>{t[data.key]=data.value},setupLayoutReady:(t,e)=>{t.layoutReady=e},initApplication:(t,e)=>{t.application=e},setDevice:(t,e)=>{t.device=e},setSize:(t,e)=>{t.size=e}},actions:{setupLayoutReady:(t,e)=>{t.commit("setupLayoutReady",e)},initApplication:(t,data)=>{t.commit("initApplication",data)}},getters:{application:t=>t.application,oauthClient:t=>window.eagleLodash.get(t.application,"oauthClient"),layoutReady:t=>t.layoutReady,siteName:(t,e)=>r.a.name,slogan:(t,e)=>r.a.slogan,logoUrl:(t,e)=>n(100),tinyLogoUrl:(t,e)=>n(237),device:(t,e)=>t.device,size:(t,e)=>t.size,isNavFixTop:(t,e)=>t.isNavFixTop,eagleEnv:()=>l,frontendDomain:()=>l.frontendDomain,mobileNavActive:t=>t.mobileNavActive}}},102:function(t,e,n){"use strict";n.r(e),e.default={namespaced:!0,state:()=>({scope:"default",googleStructuredData:null,items:[]}),mutations:{set:(t,data)=>{t[data.key]=data.value},setItems:(t,e)=>{t.items=e},setScope:(t,e)=>{t.scope=e}},getters:{scope:t=>t.scope,item:t=>t.items,googleStructuredData:t=>t.googleStructuredData}}},103:function(t,e,n){"use strict";n.r(e);var o={data:()=>({loading:!1,config:null}),methods:{start(t=null){this.config=t,this.loading=!0},async finish(){this.loading=!1,this.config={}}},computed:{title(){return this.config?"string"==typeof this.config?this.config:this.config.title||null:null},description(){return this.config&&this.config.description||null},loadingStyle:()=>({zIndex:999999999})}},r=(n(226),n(48)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-overlay",{style:t.loadingStyle,attrs:{value:t.loading}},[n("v-row",[n("v-col",{attrs:{justing:"center",align:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"80"}})],1)],1),t._v(" "),t.config?n("div",{staticClass:"loading-text"},[t.title?n("div",{staticClass:"loading-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]):t._e(),t._v(" "),t.description?n("div",{staticClass:"loading-subtitle"},[t._v("\n        "+t._s(t.description)+"\n      ")]):t._e()]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},109:function(t,e,n){"use strict";var o=n(0),r=n(27),l=n.n(r);o.default.filter("dayjs",((t,e)=>l()(t).format(e)))},110:function(t,e,n){"use strict";n(5),n(12),n(6);var o=n(0),r=n(15),l=n.n(r),c=(n(156),n(71)),d=n(111),h=n.n(d),m=(n(279),n(165)),f=n.n(m),v=n(166);window.$=h.a,window.self.$=h.a,e.a=(t,e)=>{e("language",Object(c.a)()),e("siteConfig",l.a)},o.default.use(f.a),o.default.use(v.a,{toast:{timeout:5e3,titleMaxLength:32}}),o.default.component("html-content",(()=>Promise.all([n.e(4),n.e(6)]).then(n.bind(null,282)))),o.default.component("share",(()=>n.e(8).then(n.bind(null,283)))),o.default.component("copy-url",(()=>n.e(14).then(n.bind(null,284)))),o.default.component("loading",(()=>Promise.resolve().then(n.bind(null,103))))},112:function(t,e,n){"use strict";n(5),n(12),n(6);var o=n(0),r=(n(156),n(28),n(171));new class{constructor(){window.nl2br=data=>this.nl2br(data),o.default.prototype.nl2br=data=>this.nl2br(data),o.default.filter("nl2br",(data=>this.nl2br(data)))}nl2br(data){var t=String(data).replace(/(?:\r\n|\r|\n)/g,"<br>");return t?"null"==t?"":Object(r.a)(t,{target:{url:"_blank"}}):""}};var l=n(14);var c=new class{constructor(){this.measurementId=l.ga.measurementId}pageview(option){this.measurementId&&gtag&&gtag("config",this.measurementId,{page_title:option.title,page_location:window.location.href,page_path:window.location.pathname,send_page_view:!1})}},d=n(2),h=n(163),m=n.n(h),f=n(46),v=n.n(f),y=n(164),w=n.n(y),_=n(71),x=t=>{var e;t.collection.baseApi={application:(e=Object(d.a)((function*(){return{}})),function(){return e.apply(this,arguments)})}};class ${constructor(t){this.eagleEnv=t,this.apiEndPoint=this.eagleEnv.apiEndPoint,this.collection={},x(this)}setupClient(t){this.vm=t,this.fingerprint=(new m.a).get()}handleAxiosResult(t,e){return"function"==typeof t.handleResult?t.handleResult(e):"blob"==t.responseType?{data:e.data,status:e.status,xhr:e.request}:e.data}_logout(){window.tokenStore.clean()}handleAxiosError(t,e){var n,o,r,l=e.status,c=e.headers?e.headers.reason:null;return this.vm&&401==l&&"Unauthorized"===c&&(null===(n=this.vm)||void 0===n||n.$snotify.warning(null===(o=this.vm)||void 0===o?void 0:o.$t("error.token_unauthorized.content"),null===(r=this.vm)||void 0===r?void 0:r.$t("error.token_unauthorized")),this._logout()),"function"==typeof t.handleError?t.handleError(e):e}getLanguage(){return Object(_.a)().get()}request(t){var e=this,n=this.getDefaultAxiosConfig(t);return new Promise(function(){var t=Object(d.a)((function*(t,o){try{var r=yield v()(n);t(e.handleAxiosResult(n,r))}catch(t){if(void 0===t.response)return void o(void 0);o(e.handleAxiosError(n,t.response))}return null}));return function(e,n){return t.apply(this,arguments)}}())}getFingerprint(){return this.fingerprint}getDefaultAxiosConfig(t){var e={baseURL:t.baseURL||this.apiEndPoint,url:t.url||"",method:t.type||"get",params:null,data:null,headers:{Fingerprint:this.getFingerprint(),Locale:this.getLanguage()},responseType:t.responseType||"json",onDownloadProgress:e=>{if("function"==typeof t.onDownloadProgress){var progress=Math.floor(e.loaded/e.total*100);t.onDownloadProgress({progress:progress,event:e})}},onUploadProgress:e=>{if("function"==typeof t.onUploadProgress){var progress=Math.floor(e.loaded/e.total*100);t.onUploadProgress({progress:progress,event:e})}}};"get"==e.method&&(e.params=t.params||null,e.paramsSerializer=t=>w.a.stringify(t,{arrayFormat:"indices"})),"get"!=e.method&&(e.data=t.params||null);var n=window.tokenStore.get();return n&&(e.headers.Authorization="Bearer ".concat(n)),t.authorization&&(e.headers.Authorization="Bearer ".concat(t.authorization)),t.martipart&&(e.headers["Content-Type"]="multipart/form-data",e.data=t.data),e}isGif(t){if(t&&t.get("file"))return"image/gif"===t.get("file").type}}var L=n(47);o.default.prototype.$tracking=c;e.a=(t,e)=>{e("api",new $(l)),e("helper",L.a)};o.default.component("breadcrumbs",(()=>n.e(13).then(n.bind(null,324)))),o.default.component("full-screen",(()=>n.e(15).then(n.bind(null,325))))},14:function(t){t.exports=JSON.parse('{"frontendDomain":"http://localhost:8888","apiEndPoint":"http://localhost:9000","googleSiteVerification":"googleSiteVerification","ga":{"measurementId":null},"currency":"NTD"}')},146:function(t,e,n){var content=n(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("32c72b41",content,!0,{sourceMap:!1})},147:function(t,e,n){var content=n(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("572d0fd2",content,!0,{sourceMap:!1})},15:function(t,e){t.exports={name:"Higher Eagle",manifest:{name:"Higher Eagle",short_name:"Higher Eagle",description:"Lock and Load already",theme_color:"#1190cb",background_color:"#000000"},locales:{list:["zh-TW","zh-CN","en-US"],defaultLocale:"zh-TW",defaultTimeZone:"Asia/Taipei"},seo:{title:"Higher Eagle",keywords:"Higher Eagle",description:"Lock and Load already"},slogan:"Lock and Load already"}},156:function(t,e,n){"use strict";n(273);var o=n(0),r=n(8),l={cloneDeep:r.cloneDeep,isEqual:r.isEqual,sortBy:r.sortBy,orderBy:r.orderBy,upperFirst:r.upperFirst,isEmpty:r.isEmpty,trim:r.trim,snakeCase:r.snakeCase,random:r.random,uniq:r.uniq,has:r.has,get:r.get,set:r.set,includes:r.includes,slice:r.slice,find:r.find,remove:r.remove,merge:r.merge,join:r.join,replace:r.replace,lowerCase:r.lowerCase};globalThis.eagleLodash=l,o.default.prototype.$eagleLodash=l,window.eagleLodash=l},161:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(5),n(12),n(6);var o=n(0),r=n(105);o.default.use(r.a);function l(){return new r.a({mode:"history",base:"/liff-demo/",routes:[{path:"/",name:"home",meta:{container:!1,mutantNav:!0},component:()=>n.e(16).then(n.bind(null,285)).then((t=>t.default||t))},{path:"/foobar",name:"foobar",component:()=>n.e(12).then(n.bind(null,286)).then((t=>t.default||t))}]})}},169:function(t,e,n){"use strict";var o=n(2),r={layout:"default",mixins:[n(70).a],fetch(){var t=this;return Object(o.a)((function*(){yield t.loadApplication()}))()},mounted(){this.initClient()}},l=n(48),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.application?n("v-app",{directives:[{name:"resize",rawName:"v-resize",value:t.onWindowResize,expression:"onWindowResize"}],attrs:{"eagle-root":""}},[n("navigation"),t._v(" "),n("v-main",{attrs:{"eagle-page":t.$route.name}},[n("breadcrumbs"),t._v(" "),n(t.containerComponent,{tag:"component"},[n("nuxt")],1)],1),t._v(" "),n("client-only",[n("menuMobile")],1),t._v(" "),n("basePlugin")],1):t._e()}),[],!1,null,null,null);e.a=component.exports},172:function(t,e,n){t.exports=n(173)},224:function(t,e,n){"use strict";n(146)},225:function(t,e,n){var o=n(40)(!1);o.push([t.i,"h1[data-v-f86a1664]{font-size:20px}",""]),t.exports=o},226:function(t,e,n){"use strict";n(147)},227:function(t,e,n){var o=n(40)(!1);o.push([t.i,'div.v-application[eagle-root] .v-icon{font-size:1rem;font-weight:700}.snotify .snotifyToast__title{font-size:1.25rem}.snotify .snotifyToast__body{font-size:1rem}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-thumb{border-radius:10px;background:#02b2bf}::-webkit-scrollbar-track{border-radius:10px;background:#cbf1f3}div[anchor-router-view-container]{min-height:calc(100vh - 50px)}body.viewer-open{padding-right:0!important}header.v-app-bar .v-toolbar__content{z-index:1000!important}div[anchor-list-data=photo] div[anchor-list-photo=placeholder]{position:absolute;top:40%;left:40%}.v-input--switch .v-input__control label.v-label{flex:0 1 auto}.v-card [eagle-card=placeholder]{position:absolute}.cursor-pointer{cursor:pointer}.v-btn.text-transform-none{text-transform:none}.loading-text{text-align:center;font-family:"Roboto",sans-serif!important;margin-top:30px}.loading-text .loading-title{font-size:1.5rem!important;font-weight:400;line-height:2rem;letter-spacing:normal!important}.loading-text .loading-subtitle{font-weight:300;font-size:1rem!important;line-height:1.75rem;letter-spacing:.009375em!important}',""]),t.exports=o},236:function(t,e,n){"use strict";n.r(e),n.d(e,"modules",(function(){return l}));var o=n(101),r=n(102),l={base:o.default,breadcrumb:r.default}},237:function(t,e,n){t.exports=n.p+"img/logo-tiny.9aef4db.png"},39:function(t,e,n){"use strict";var o={layout:"empty",mixins:[n(70).a],props:{error:{type:Object,default:()=>null}},head(){return{title:this.title}},created(){this.setupI18n()},methods:{reload(){window.location.reload()}},computed:{errorStatus(){return this.$eagleLodash.get(this.error,"statusCode")||null},errorStatusText(){return this.errorStatus&&this.$eagleLodash.get(this.$i18n.messages,[this.$i18n.locale,"error.".concat(this.errorStatus)])||null},title(){return this.$eagleLodash.get(this.error,"title")?this.$eagleLodash.get(this.error,"title"):this.errorStatusText?this.errorStatusText:this.$t("error.default.title")},content(){return this.$eagleLodash.get(this.error,"content")}}},r=(n(224),n(48)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("client-only",[n("v-alert",{staticClass:"my-4 mx-4",attrs:{outlined:"",icon:"fa fa-exclamation-triangle",color:"orange lighten-1",prominent:"",border:"left"}},[n("div",{staticClass:"pl-4"},[n("div",{staticClass:"title"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),t.content?n("div",[t._v("\n          "+t._s(t.content)+"\n        ")]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"mt-4 mr-4",attrs:{small:"",outlined:"",color:"orange lighten-1"},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",{attrs:{left:""}},[t._v("fa fa-arrow-left")]),t._v(" "),n("span",[t._v(t._s(t.$t("action.back_to.home_page")))])],1),t._v(" "),n("v-btn",{staticClass:"mt-4 mr-4",attrs:{small:"",outlined:"",color:"orange lighten-1"},on:{click:t.reload}},[n("v-icon",{attrs:{left:""}},[t._v("fa fa-sync")]),t._v(" "),n("span",[t._v(t._s(t.$t("action.reload")))])],1)],1)])],1)],1)}),[],!1,null,"f86a1664",null);e.a=component.exports},47:function(t,e,n){"use strict";n(12),n(5),n(6),n(99),n(98),n(38),n(49),n(28),n(33);class o{constructor(t,e){this.helper=t,this.vm=e}email(data){return"string"==typeof data&&!1!==this.vm.$validator.isEmail(data)}emailRule(data){return this.email(data)||this.vm.$t("validate.error.email_incorrect")}minText(data,t){return"string"==typeof data&&this.vm.$validator.isLength(data,{min:t})}minTextRule(data,t){return this.minText(data,t)||this.vm.$t("validate.error.text_too_less",{length:t})}required(data){return!window.eagleLodash.isEmpty(window.eagleLodash.trim(data))}requiredRule(data){return this.required(data)||this.vm.$t("validate.error.required")}passwordValidate(t){return!!this.required(t)&&!!this.minTextRule(t,4)}}var r=n(27),l=n.n(r);e.a=new class{constructor(){this.vm=null,this.validator=null}setupVueModel(t){this.vm=t,this.validator=((t,e)=>new o(t,e))(this,this.vm)}delay(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((e=>{setTimeout((()=>{e()}),1e3*t)}))}focus(t,e){(e?$(e).find(t):$(t)).focus()}now(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD HH:mm:ss";return l()().format(t)}currentTimestamp(){return Math.floor((new Date).getTime()/1e3)}getPhotoUrlArray(t){if(!t)return null;if(t.url)return[t.url];if(!t.size_list)return[t.size_list];var e=[];for(var n in t.size_list){var o=t.size_list[n];o.url&&e.push(o.url)}return e}getPhotoUrl(t,e){if(!t)return null;if(t.url)return t.url;if(!t.size_list)return null;e||(e=this.getSuffixListByDevice());var n=t.size_list.origin.url;for(var o of e)if(t.size_list[o]&&t.size_list[o].url)return t.size_list[o].url;return n}getPhotoProperty(t,e,n){if(!t)return null;if(t[e])return t[e];if(!t.size_list)return null;n||(n=this.getSuffixListByDevice());var o=t.size_list.origin[e];for(var r of n)if(t.size_list[r]&&t.size_list[r][e])return t.size_list[r][e];return o}getSuffixListByDevice(){var t=this.getDevice();return"xs"===t||"sm"===t?["middle","small","tiny"]:"md"===t||"lg"===t?["large","middle","small","tiny"]:["xlarge","large","middle","small","tiny"]}getDevice(){if(!this.vm)return null;for(var t of["xl","lg","md","sm","xs"]){if(!0===this.vm.$vuetify.breakpoint[t])return t}return null}isMobile(){var t=this.getDevice();return!!t&&("xl"!=t&&"lg"!=t)}getComputedLinkList(t){t=window.eagleLodash.cloneDeep(t);var e=[];for(var n of t)e.push(this._setupMenuNode(n));return e}_setupMenuNode(t){var e=window.eagleLodash.cloneDeep(t);return Array.isArray(e.group)&&(e.group=this.getComputedLinkList(e.group)),e}textEmpty(data){return window.eagleLodash.isEmpty(window.eagleLodash.trim(data))}isImage(t){return t instanceof File!=!1&&(!!new RegExp(/image\/png/).test(t.type)||(!!new RegExp(/image\/jpg/).test(t.type)||(!!new RegExp(/image\/jpeg/).test(t.type)||!!new RegExp(/image\/gif/).test(t.type))))}nestedSetNodeNamePrefix(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",o=null==n?void 0:n.repeat(e);return"".concat(o," ").concat(t)}gradient(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3;return"".concat(arguments.length>2&&void 0!==arguments[2]?arguments[2]:180,"deg, rgba(0, 0, 0, ").concat(t,"), rgba(0, 0, 0, ").concat(e,")")}getVideoPhoto(video,t){if(!video)return null;if(video.photo)return video.photo;t||(t="youtube_url");var e=this.getYoutubeUid(window.eagleLodash.get(video,t)),n=this.getYoutubeImage(e);return n?{url:n}:null}getYoutubeImage(t){return"string"!=typeof t?null:"https://img.youtube.com/vi/".concat(t,"/hqdefault.jpg")}getYoutubeUid(t){if("string"!=typeof t)return null;var e=/(https:\/\/youtu\.be\/)(.*)/;if(t.match(e)){var n=t.replace(e,"$2");return new RegExp(/\?/).test(n)&&(n=n.split("?")[0]),n}var o=t.split("v=");return"string"!=typeof o[1]?null:o[1].split("&")[0]}}},70:function(t,e,n){"use strict";var o=n(2),r=(n(5),n(6),n(12),n(0)),l=(n(143),n(15)),c=n.n(l),d=n(14),h=n(27),m=n.n(h),f=n(47);var v=new class{init(t){this.frontendDomain=t}getGoogleStructuredData(t,e){return this.vueRouter=t,this.items=e,[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:this.getGoogleStructuredItemListElement()}}]}getGoogleStructuredItemListElement(){if(!this.vueRouter)return null;if(!Array.isArray(this.items))return null;if(0==this.items.length)return null;var t=[],e=0;for(var n of this.items){e++;var link=null;if(n.to){var path=this.vueRouter.resolve(n.to).href;link="".concat(this.frontendDomain).concat(path)}n.href&&(link=n.href),link&&t.push({"@type":"ListItem",position:e,name:n.text,item:link})}return t}};var y=new class{init(t,data){this.vm=t,this.siteName=data.siteName,this.domain=data.domain,this.logoUrl=data.logoUrl}getMetaArray(data){var meta=[];if(data.title&&(meta=meta.concat([{hid:"og:title",property:"og:title",content:data.title}])),data.keywords&&(meta=meta.concat([{hid:"keywords",name:"keywords",content:data.keywords}])),data.description&&(meta=meta.concat([{hid:"description",name:"Description",content:data.description},{hid:"og:description",property:"og:description",content:data.description}])),data.photo){var t=["middle","small","tiny"],e=f.a.getPhotoProperty(data.photo,"width",t),n=f.a.getPhotoProperty(data.photo,"height",t);meta=meta.concat([{hid:"og:image",property:"og:image",content:f.a.getPhotoUrl(data.photo,t)}]),e&&n&&(meta=meta.concat([{hid:"og:image:width",property:"og:image:width",content:e},{hid:"og:image:height",property:"og:image:height",content:n}]))}return meta}getBaseGoogleStructuredData(){return[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Organization",url:this.domain,name:this.siteName}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebSite",url:this.domain,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"".concat(this.domain,"/search?q={search_term_string}")},"query-input":"required name=search_term_string"}}}]}getBreadcrumbGoogleStructuredData(t,e){return v.getGoogleStructuredData(t,e)}getPostGoogleStructuredData(data){var t={"@context":"https://schema.org","@type":"BlogPosting",mainEntityOfPage:{"@type":"WebPage","@id":this.domain},headline:data.title,datePublished:m()(data.createdAt).format("YYYY-MM-DDTHH:mm:ssZ"),dateModified:m()(data.updatedAt).format("YYYY-MM-DDTHH:mm:ssZ"),image:f.a.getPhotoUrlArray(data.photo)||this.logoUrl,author:{"@type":"Organization",name:this.siteName},publisher:{"@type":"Organization",name:this.siteName,logo:{"@type":"ImageObject",url:this.logoUrl}}};return data.description&&(t.description=data.description),[{type:"application/ld+json",json:t}]}};y.init(null,{siteName:c.a.name,domain:d.frontendDomain,logoUrl:n(100)});var w={htmlAttrs:{lang:c.a.locales.defaultLocale},titleTemplate:t=>t?"".concat(t," | ").concat(c.a.name):c.a.name,meta:[{charset:"utf-8"},{name:"google-site-verification",content:d.googleSiteVerification},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"keywords",name:"keywords",content:c.a.seo.keywords},{hid:"description",name:"description",content:c.a.seo.description},{hid:"og:site_name",property:"og:site_name",content:c.a.name},{hid:"og:title",property:"og:title",content:c.a.seo.title},{hid:"og:description",property:"og:description",content:c.a.seo.description},{hid:"og:image",property:"og:image",content:n(100)}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"icon",type:"shortcut icon",href:"/favicon.ico"},{rel:"icon",type:"apple-touch-icon",href:"/favicon.ico"}],script:[...y.getBaseGoogleStructuredData(),...d.ga&&d.ga.measurementId?[{hid:"gtag-script1",src:"https://www.googletagmanager.com/gtag/js?id=".concat(d.ga.measurementId),defer:!0},{hid:"gtag-script2",innerHTML:"\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\n\ngtag('config', '".concat(d.ga.measurementId,"');\n        "),type:"text/javascript",charset:"utf-8"}]:[]],__dangerouslyDisableSanitizers:["script"]};n(145);r.default.prototype.$seo=y;e.a={head:w,mounted(){this.initLayout()},methods:{initLayout(){var t=this;return Object(o.a)((function*(){t.onWindowResize()}))()},initClient(){var t=this;return Object(o.a)((function*(){yield t.$nextTick(),t.$nuxt.$loading.start(),t.$store.dispatch("base/setupLayoutReady",!1),t.setupI18n(),t.$nuxt.context.$helper.setupVueModel(t),t.$nuxt.context.$api.setupClient(t),t.$seo.init(t,{siteName:t.siteName,domain:d.frontendDomain,logoUrl:t.logoUrl}),yield t.$nextTick(),t.$store.dispatch("base/setupLayoutReady",!0),t.$nuxt.$loading.finish()}))()},setupI18n(){var t=this;this.$nuxt.context.$language&&(this.$i18n.locale=this.$nuxt.context.$language.get(),this.$vuetify.lang.current=this.$nuxt.context.$language.get(),this.$vuetify.lang.t=function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return t.$t(e,o)},r.default.filter("t",(function(){return t.$t(...arguments)})),r.default.filter("tc",(function(){return t.$tc(...arguments)})),r.default.filter("te",(function(){return t.$te(...arguments)})))},loadApplication(){var t=this;return Object(o.a)((function*(){try{var e=yield t.$nuxt.context.$api.collection.baseApi.application();t.$store.dispatch("base/initApplication",e)}catch(t){console.error(t)}}))()},onWindowResize(){var t=this;return Object(o.a)((function*(){yield t.$nextTick(),t.$store.commit("base/setSize",{width:$(window).width(),height:$(window).height()}),t.$store.commit("base/setDevice",t.$helper.getDevice())}))()}},computed:{containerComponent(){return 0==this.$route.meta.container?"div":"v-container"},logoUrl(){return this.$store.getters["base/logoUrl"]},siteName(){return this.$store.getters["base/siteName"]},layoutReady(){return this.$store.getters["base/layoutReady"]},application(){return this.$store.getters["base/application"]}},watch:{$route:{deep:!0,handler(){this.$store.commit("base/set",{key:"pageMutantNav",value:!1})}}},components:{navigation:()=>n.e(7).then(n.bind(null,326)),basePlugin:()=>n.e(5).then(n.bind(null,323)),menuMobile:()=>n.e(11).then(n.bind(null,327))}}},71:function(t,e,n){"use strict";n(5),n(6),n(69),n(68),n(99),n(33);class o{constructor(){this.cookie={},this.storageItemName="cookieStorage",this.init()}init(){if(""!==document.cookie.trim()){var t=decodeURI(document.cookie).split("".concat(this.storageItemName,"="))[1];try{this.cookie=JSON.parse(t)}catch(t){this.cookie={}}}}all(){return this.cookie}get(t){if(""===document.cookie.trim())return null;var e=this.cookie[t];return e||null}set(t,e){this.cookie[t]=e,this._write()}delete(t){delete this.cookie[t],this._write()}_write(){document.cookie="".concat(this.storageItemName,"=").concat(encodeURI(JSON.stringify(this.cookie)))}}class r{constructor(){var t=Math.random();try{window.localStorage.setItem(t,t),window.localStorage.removeItem(t),this.supportedLocalStorage=!0}catch(t){return void(this.supportedLocalStorage=!1)}}all(){return window.localStorage}get(t){try{var e=window.localStorage.getItem(t);return"string"!=typeof e?null:JSON.parse(e)}catch(t){return null}}set(t,e){window.localStorage.setItem(t,JSON.stringify(e))}delete(t){window.localStorage.removeItem(t)}}var l=()=>{var t=new r;return t.supportedLocalStorage?t:new o},c="eagle:site-locale";class d{constructor(){this.storage=l()}getQueryLanguage(){var t=null;try{t=new URLSearchParams(window.location.search).get("lang")}catch(t){return null}return t}init(){var t=this.getQueryLanguage();if(t)return this.setLanguageToStorage(t)}setLanguageToStorage(t){t&&this.storage.set(c,t)}get(){var t=navigator.language,e=this.storage.get(c);return e||t}}e.a=()=>new d}},[[172,2,1,3]]]);