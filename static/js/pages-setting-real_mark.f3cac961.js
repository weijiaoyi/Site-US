(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-real_mark"],{"2ce6":function(t,n,e){"use strict";e.r(n);var a=e("7c88"),i=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},"5bdf":function(t,n,e){"use strict";e.r(n);var a=e("aaae"),i=e("2ce6");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);var u=e("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"63ba626e",null,!1,a["a"],void 0);n["default"]=c.exports},"7c88":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{review_status:0,advanced_review_status:0}},onShow:function(){this.getUserRealState()},methods:{getUserRealState:function(){var t=this;this.$u.api.setting.getUserRealState(uni.getStorageSync("token")).then((function(n){var e=n.data,a=e.is_check,i=e.up_check;t.review_status=a,t.advanced_review_status=i}))}},computed:{i18n:function(){return this.$t("setting")}}};n.default=a},aaae:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}));var a={uNavbar:e("fc55").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"text-white"},[e("u-navbar",{attrs:{title:t.i18n.authentication}}),e("v-uni-view",{staticClass:"m-30"},[e("v-uni-text",{staticClass:"d-block font-size-32 opacity-60 mb-20"},[t._v(t._s(t.i18n.authentication1))]),0==t.review_status?e("v-uni-button",{staticClass:"warning-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.$utils.jump("/pages/setting/real?type=1")}}},[t._v(t._s(t.i18n.goAudit))]):1==t.review_status?e("v-uni-button",{staticClass:"primary-button"},[t._v(t._s(t.i18n.auditing))]):2==t.review_status?e("v-uni-button",{staticClass:"success-button"},[t._v(t._s(t.i18n.hasaudit))]):t._e()],1),e("v-uni-view",{staticClass:"m-30"},[e("v-uni-text",{staticClass:"d-block font-size-32 opacity-60 mb-20"},[t._v(t._s(t.i18n.authentication2))]),t.review_status<2?e("v-uni-button",{staticClass:"secondary-button"},[t._v(t._s(t.i18n.goAudit))]):0==t.advanced_review_status?e("v-uni-button",{staticClass:"warning-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.$utils.jump("/pages/setting/real?type=2")}}},[t._v(t._s(t.i18n.goAudit))]):1==t.advanced_review_status?e("v-uni-button",{staticClass:"primary-button"},[t._v(t._s(t.i18n.auditing))]):2==t.advanced_review_status?e("v-uni-button",{staticClass:"success-button"},[t._v(t._s(t.i18n.hasaudit))]):t._e()],1)],1)},s=[]}}]);