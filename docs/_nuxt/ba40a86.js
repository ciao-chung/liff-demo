(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{370:function(e,t,n){"use strict";n.r(t);var o=n(41),l=n.n(o),c={data:()=>({message:"",methods:[{name:"getAccessToken"},{name:"getProfile"},{name:"scanCode"}]}),mounted(){console.warn("siteConfig.liffId",l.a.liffId),this.initLiff()},methods:{reload(){window.location.reload()},async sendMessage(){try{await window.liff.sendMessages([{type:"text",text:"Hello, World!"}]),this.$snotify.success("發送成功")}catch(e){console.warn(e),this.$apopup.base({title:"發送失敗",content:e})}},async initLiff(){try{await window.liff.init({liffId:"1657198221-yl3GQYl7"}),console.info("life init successfully")}catch(e){console.warn(e),console.warn("life init failure")}},login(){window.liff.login()},async triggerMethod(e){if(!window.liff)return void this.$apopup.base({title:"找不到LIFF library"});if("function"!=typeof window.liff[e])return void this.$apopup.base({title:"找不到LIFF method",content:"method"});let t=null;try{t=await window.liff[e]()}catch(e){return this.$apopup.base({title:"call method failure",content:e}),void console.warn(e)}this.$apopup.base({title:`call method ${e}`,content:t}),console.warn("value",t)}},computed:{query(){return this.$route.query}}},r=n(87),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",[n("div",{staticClass:"text-h3"},[e._v("LIFF")]),e._v(" "),n("v-btn",{staticClass:"mr-4 mb-4",on:{click:e.login}},[e._v("\n      Login\n    ")]),e._v(" "),n("v-btn",{staticClass:"mr-4 mb-4",on:{click:e.reload}},[e._v("\n      reload\n    ")]),e._v(" "),n("div",{staticClass:"my-4"},[e._v("\n      query: "+e._s(e.query)+"\n    ")]),e._v(" "),n("v-divider",{staticClass:"my-4"}),e._v(" "),n("div",{staticClass:"my-4"},e._l(e.methods,(function(t){return n("v-btn",{key:t.name,staticClass:"mr-4 mb-4",attrs:{color:"primary"},on:{click:function(n){return e.triggerMethod(t.name)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),1),e._v(" "),n("v-textarea",{attrs:{outlined:"",dense:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),n("v-btn",{on:{click:e.sendMessage}},[e._v("\n      send message\n    ")])],1)],1)}),[],!1,null,"022642b0",null);t.default=component.exports}}]);