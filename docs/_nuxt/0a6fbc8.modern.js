(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{326:function(t,e,n){"use strict";n.r(e);var o={data:()=>({otp:"ABC123",url:null,error:null}),created(){this.init()},methods:{async init(){const t=`https://ciao-chung.github.io/liff-demo/join?code=${this.otp}`;console.info("url",t);try{this.url=await window.liff.permanentLink.createUrlBy(t)}catch(t){console.warn(t),this.error=t,this.$apopup.base({title:"建立LIFF URL",content:t})}},async share(){try{await window.liff.shareTargetPicker([{type:"text",text:"Hello, World!"},{type:"template",altText:"請點此加入餐廳",template:{type:"buttons",thumbnailImageUrl:"https://images.unsplash.com/photo-1595871277397-08901ed2d7f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoYXZlZCUyMGljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",title:"板橋邀請你加入他的『嘉良冰果室』太平分店",text:this.url,actions:[{type:"uri",label:"請點此加入餐廳",uri:this.url}]}}]),this.$snotify.success("邀請連結已發送成功"),setTimeout((()=>{window.liff.closeWindow()}),1e3)}catch(t){console.warn(t),this.$apopup.base({title:"發送失敗",content:t})}}},computed:{query(){return this.$route.query}}},l=n(65),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-h4 mb-4"},[t._v("邀請餐廳成員")]),t._v(" "),n("div",[n("div",{staticClass:"text-h5"},[t._v("發送邀請驗證碼")]),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",value:t.otp}}),t._v(" "),n("v-btn",{on:{click:t.share}},[t._v("\n      發送\n    ")]),t._v(" "),n("div",{staticClass:"my-4"},[t._v("\n      LINK: "+t._s(t.url)+"\n    ")]),t._v(" "),n("div",{staticClass:"my-4"},[t._v("\n      error: "+t._s(t.error)+"\n    ")])],1)])}),[],!1,null,"de8f6574",null);e.default=component.exports}}]);