(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-bank_international"],{3424:function(t,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{forms:[],data:[]}},onShow:function(){this.getCard()},methods:{getCard:function(){var t=this;this.$u.api.setting.getCardInternational().then((function(n){var a=n.message;t.forms=a.forms,t.data=a.data}))},submit:function(){var t=this,n=this.i18n,a={};for(var i in this.data){if(!this.data[i])return void this.$utils.showToast(n.allNeed);a["data["+i+"]"]=this.data[i]}this.$u.api.setting.saveCard(a).then((function(n){t.$utils.showToast(t.$t("code."+n.code)||n.message)}))}},computed:{i18n:function(){return this.$t("setting")}}}},5374:function(t,n,a){"use strict";a.r(n);var i=a("3424"),e=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(s);n["default"]=e.a},a581:function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return s})),a.d(n,"a",(function(){return i}));var i={uNavbar:a("ab21").default},e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{},[a("u-navbar",{attrs:{title:t.i18n.addBank}}),a("v-uni-view",{staticClass:"mx-30 mt-30 box-shadow bg-black p-30 border-radius-20 text-white"},t._l(t.forms,(function(n,i){return a("v-uni-view",{key:i,staticClass:"login-input-group mt-0"},[a("v-uni-text",{staticClass:"label"},[t._v(t._s(n))]),a("v-uni-input",{staticClass:"login-input",attrs:{type:"text"},model:{value:t.data[i],callback:function(n){t.$set(t.data,i,n)},expression:"data[key]"}})],1)})),1),a("v-uni-view",{staticClass:"m-30"},[a("v-uni-button",{staticClass:"warning-button py-0",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.confirm")))])],1)],1)},s=[]},b08c:function(t,n,a){"use strict";a.r(n);var i=a("a581"),e=a("5374");for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(s);var u=a("f0c5"),o=Object(u["a"])(e["default"],i["b"],i["c"],!1,null,"5f43ffb0",null,!1,i["a"],void 0);n["default"]=o.exports}}]);