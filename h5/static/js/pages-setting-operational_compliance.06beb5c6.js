(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-operational_compliance"],{"3fc1":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{article:{}}},onLoad:function(t){var e=t.id;this.id=e},onShow:function(){this.getNewsDetail()},methods:{getNewsDetail:function(){var t=this;this.$u.api.index.getOperationalCompliance().then((function(e){t.article=e.message}))}}}},8835:function(t,e,i){"use strict";i.r(e);var n=i("cb1b"),a=i("e0dd");for(var c in a)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(c);var r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"efa429c0",null,!1,n["a"],void 0);e["default"]=u.exports},cb1b:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("e664").default},a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("u-navbar",{attrs:{title:this.article.title}}),e("v-uni-view",{staticClass:"m-30"},[e("v-uni-text",{staticClass:"d-block font-size-32 text-center"},[this._v(this._s(this.article.title))]),e("v-uni-view",{staticClass:"mt-20 text-white",domProps:{innerHTML:this._s(this.article.content)}})],1)],1)},c=[]},e0dd:function(t,e,i){"use strict";i.r(e);var n=i("3fc1"),a=i.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a}}]);