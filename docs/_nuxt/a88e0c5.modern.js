(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{288:function(t,e,n){"use strict";e.a={data:()=>({}),computed:{menu:()=>[{label:"Home",route:{name:"home"}},{label:"foobar",route:{name:"foobar"}}],isNavFixTop(){return this.$store.getters["base/isNavFixTop"]},textClass(){return 1==this.mutantNav&&this.isNavFixTop?"white--text":"grey--text"},mutantNav(){return!0===this.$route.meta.mutantNav}}}},330:function(t,e,n){"use strict";n.r(e);var r={mixins:[n(288).a]},o=n(48),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{attrs:{"align-with-title":"","show-arrows":"",centered:"",optional:""}},[n("v-tabs-slider",{attrs:{color:"primary lighten-2"}}),t._v(" "),t._l(t.menu,(function(link,e){return n("v-tab",{key:"menu-link-"+e,staticClass:"font-weight-light",attrs:{exact:"",to:link.route}},[link.icon?n("v-icon",{class:t.textClass,attrs:{left:""}},[t._v("\n      "+t._s(link.icon)+"\n    ")]):t._e(),t._v(" "),n("span",{staticClass:"font-weight-light",class:t.textClass},[t._v("\n      "+t._s(link.label)+"\n    ")])],1)}))],2)}),[],!1,null,"1735f015",null);e.default=component.exports}}]);