(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{370:function(t,e,n){"use strict";n.r(e);var o=n(41),l=n.n(o),c={data:()=>({message:"",methods:[{name:"getAccessToken"},{name:"getProfile"},{name:"scanCode"}],otp:"ABC123"}),mounted(){console.warn("siteConfig.liffId",l.a.liffId),this.initLiff()},methods:{async share(){try{await window.liff.shareTargetPicker([{type:"text",text:"Hello, World!"},{type:"template",altText:"請點此加入餐廳",template:{type:"buttons",thumbnailImageUrl:"https://images.unsplash.com/photo-1528994618239-4d83bbdb7a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",text:"板橋邀請你加入他的『嘉良冰果室』太平分店",actions:[{type:"uri",label:"請點此加入餐廳",uri:`https://www.google.com?code=${this.otp}`}]}}]),this.$snotify.success("邀請連結已發送成功"),setTimeout((()=>{window.liff.closeWindow()}),1e3)}catch(t){console.warn(t),this.$apopup.base({title:"發送失敗",content:t})}},reload(){window.location.reload()},async sendMessage(){try{await window.liff.sendMessages([{type:"text",text:this.message}]),this.$snotify.success("發送成功"),setTimeout((()=>{window.liff.closeWindow()}),1e3)}catch(t){console.warn(t),this.$apopup.base({title:"發送失敗",content:t})}},async initLiff(){try{await window.liff.init({liffId:"1657198221-yl3GQYl7"}),console.info("life init successfully")}catch(t){console.warn(t),console.warn("life init failure")}},login(){window.liff.login()},async triggerMethod(t){if(!window.liff)return void this.$apopup.base({title:"找不到LIFF library"});if("function"!=typeof window.liff[t])return void this.$apopup.base({title:"找不到LIFF method",content:"method"});let e=null;try{e=await window.liff[t]()}catch(t){return this.$apopup.base({title:"call method failure",content:t}),void console.warn(t)}this.$apopup.base({title:`call method ${t}`,content:e}),console.warn("value",e)}},computed:{query(){return this.$route.query}}},r=n(87),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("div",{staticClass:"text-h3"},[t._v("LIFF")]),t._v(" "),n("v-btn",{staticClass:"mr-4 mb-4",on:{click:t.login}},[t._v("\n      Login\n    ")]),t._v(" "),n("v-btn",{staticClass:"mr-4 mb-4",on:{click:t.reload}},[t._v("\n      reload\n    ")]),t._v(" "),n("div",{staticClass:"my-4"},[t._v("\n      query: "+t._s(t.query)+"\n    ")]),t._v(" "),n("v-divider",{staticClass:"my-4"}),t._v(" "),n("div",{staticClass:"my-4"},t._l(t.methods,(function(e){return n("v-btn",{key:e.name,staticClass:"mr-4 mb-4",attrs:{color:"primary"},on:{click:function(n){return t.triggerMethod(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),1),t._v(" "),n("v-textarea",{attrs:{outlined:"",dense:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("v-btn",{attrs:{disabled:!t.message},on:{click:t.sendMessage}},[t._v("\n      send message\n    ")]),t._v(" "),n("v-divider",{staticClass:"my-4"}),t._v(" "),n("div",[n("div",{staticClass:"text-h4"},[t._v("發送邀請驗證碼")]),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",value:t.otp}}),t._v(" "),n("v-btn",{on:{click:t.share}},[t._v("\n        發送\n      ")])],1)],1)],1)}),[],!1,null,"2b5ef540",null);e.default=component.exports}}]);