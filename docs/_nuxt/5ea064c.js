(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{370:function(t,n,e){"use strict";e.r(n);var o=e(41),l=e.n(o),r={data:()=>({methods:[{name:"getAccessToken"},{name:"getProfile"},{name:"scanCode"}]}),mounted(){console.warn("siteConfig.liffId",l.a.liffId),this.initLiff()},methods:{async initLiff(){try{await window.liff.init({liffId:"1657198221-yl3GQYl7"}),console.info("life init successfully")}catch(t){console.warn(t),console.warn("life init failure")}},login(){window.liff.login()},async triggerMethod(t){if(!window.liff)return void this.$apopup.base({title:"找不到LIFF library"});if("function"!=typeof window.liff[t])return void this.$apopup.base({title:"找不到LIFF method",content:"method"});let n=null;try{n=await window.liff[t]()}catch(t){return this.$apopup.base({title:"call method failure",content:t}),void console.warn(t)}this.$apopup.base({title:`call method ${t}`,content:n}),console.warn("value",n)}},copmuted:{query(){return this.$route.query}}},c=e(87),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-container",[e("div",{staticClass:"text-h3"},[t._v("LIFF")]),t._v(" "),e("v-btn",{on:{click:t.login}},[t._v("\n      Login\n    ")]),t._v(" "),e("div",{staticClass:"my-4"},[t._v("\n      query: "+t._s(t.query)+"\n    ")]),t._v(" "),e("v-divider",{staticClass:"my-4"}),t._v(" "),e("div",{staticClass:"my-4"},t._l(t.methods,(function(n){return e("v-btn",{key:n.name,staticClass:"mr-4 mb-4",attrs:{color:"primary"},on:{click:function(e){return t.triggerMethod(n.name)}}},[t._v("\n        "+t._s(n.name)+"\n      ")])})),1)],1)],1)}),[],!1,null,"b7ce9a0a",null);n.default=component.exports}}]);