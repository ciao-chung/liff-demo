(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{406:function(t){t.exports=JSON.parse('{"a":"1.4.0"}')},413:function(t,e,r){"use strict";r.r(e);var n=r(406),o={computed:{version:()=>n.a,siteName(){return this.$store.getters["base/siteName"]},tinyLogoUrl(){return this.$store.getters["base/tinyLogoUrl"]},isNavFixTop(){return this.$store.getters["base/isNavFixTop"]},textClass(){return 1==this.mutantNav&&this.isNavFixTop?"white--text":"grey--text"},mutantNav(){return!0===this.$route.meta.mutantNav}}},l=r(87),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"black--text text-decoration-none",attrs:{to:{name:"home"}}},[r("v-toolbar-title",{staticClass:"d-flex pa-2 align-center"},[r("v-img",{attrs:{width:"25",height:"25",src:t.tinyLogoUrl}}),t._v(" "),r("span",{staticClass:"pa-2",class:t.textClass},[t._v(t._s(t.siteName)+" "+t._s(t.version))])],1)],1)}),[],!1,null,"7c392277",null);e.default=component.exports}}]);