(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{324:function(e,t,r){"use strict";r.r(t);var c={props:{scope:{type:String,default:"default"}},methods:{reset(){this.$store.commit("breadcrumb/setScope","default"),this.$store.commit("breadcrumb/setItems",[])}},computed:{create(){return this.breadcrumbScope==this.scope&&this.items.length>0},breadcrumbScope(){return this.$store.getters["breadcrumb/scope"]},items(){return this.$store.getters["breadcrumb/item"]}},watch:{$route:{deep:!0,handler(){this.reset()}}}},o=r(48),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-print-none"},[r("client-only",[e.create?r("v-breadcrumbs",{attrs:{items:e.items}}):e._e()],1)],1)}),[],!1,null,"111c7390",null);t.default=component.exports}}]);