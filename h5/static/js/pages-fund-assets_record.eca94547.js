(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fund-assets_record"],{"0583":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i={name:"default-page",props:{name:{type:String,default:"empty"},length:{type:Number,default:0},total:{type:Number,default:0}},data:function(){return{list:{address:a("0bd8"),bill:a("0c7d"),card:a("daaf"),collect:a("929d"),comment:a("75c0"),content:a("57c1"),coupon:a("4033"),data:a("74bd"),message:a("4d47"),net:a("6ee6"),order:a("cd2a"),empty:a("ab6e"),update:a("8713")}}},computed:{data:function(){var t=this.list[this.name];return t||(t?void 0:this.list["empty"])}}};e.default=i},"0835":function(t,e,a){"use strict";a.r(e);var i=a("7dd7"),n=a("9572");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"63a6c9d6",null,!1,i["a"],void 0);e["default"]=u.exports},"0bd8":function(t,e,a){t.exports=a.p+"static/img/address.94a4030c.svg"},"0c7d":function(t,e,a){t.exports=a.p+"static/img/bill.fb3e16d2.svg"},3833:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uNavbar:a("fc55").default,uSubsection:a("291c").default,defaultPage:a("0835").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"pb-50"},[a("u-navbar",{attrs:{title:t.assetsType.type}}),a("v-uni-view",{staticClass:"deposit m-30"},[a("v-uni-view",{staticClass:"d-flex align-items-center"},[a("v-uni-text",{staticClass:"d-block font-size-28 mr-10"},[t._v(t._s(t.i18n.convert2))]),a("v-uni-text",{staticClass:"iconfont icon-yanjing_xianshi text-white font-size-36"})],1),a("v-uni-view",{staticClass:"mt-30"},[a("v-uni-view",{staticClass:"d-flex align-items-baseline"},[a("v-uni-text",{staticClass:"font-size-40 mr-20"},[t._v(t._s(t.balance.usdt_price))]),a("v-uni-text",{staticClass:"font-size-22"},[t._v("USDT")])],1)],1),a("v-uni-view",{staticClass:"d-block font-size-22 opacity-50 mt-8"},[t._v("≈ "+t._s((t.balance.usdt_price*t.$store.state.fiat.rate).toFixed(4))+" "+t._s(t.$store.state.fiat.currency_code))]),a("v-uni-view",{staticClass:"earnings-wrap"},[a("v-uni-view",{staticClass:"earnings font-size-22 d-grid-columns-2"},[a("v-uni-view",{},[a("v-uni-text",{staticClass:"d-block font-size-22 opacity-50"},[t._v(t._s(t.i18n.availableQuota)+"(USDT)")]),a("v-uni-text",{staticClass:"d-block font-size-22 mt-10"},[t._v(t._s(parseFloat(t.balance.balance)))])],1),a("v-uni-view",{},[a("v-uni-text",{staticClass:"d-block font-size-22 opacity-50"},[t._v(t._s(t.i18n.locked)+"(USDT)")]),a("v-uni-text",{staticClass:"d-block font-size-22 mt-10"},[t._v(t._s(parseFloat(t.balance.lock_balance)))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"m-30"},[a("u-subsection",{attrs:{list:t.nav}}),a("v-uni-view",{staticClass:"mt-30"},[t.list.length?t._l(t.list,(function(e){return a("v-uni-view",{staticClass:"p-30 box-shadow border-radius-20 mb-30 bg-black text-white"},[a("v-uni-view",{staticClass:"d-flex-between-center py-10"},[a("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.number))]),a("v-uni-text",{staticClass:"font-weight-bold",style:{color:t.$utils.getColor(e.value)}},[t._v(t._s(Number(e.value)+" "+e.currency_name))])],1),a("v-uni-view",{staticClass:"d-flex-between-center py-10"},[a("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.time))]),a("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(e.created_time))])],1),a("v-uni-view",{staticClass:"py-10 font-size-30"},[t._v(t._s(e.info))])],1)})):a("default-page")],2)],1)],1)},s=[]},4033:function(t,e,a){t.exports=a.p+"static/img/coupon.9fe7727e.svg"},"4d47":function(t,e,a){t.exports=a.p+"static/img/message.654f52a9.svg"},"57c1":function(t,e,a){t.exports=a.p+"static/img/content.7f19abd8.svg"},6091:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("2909"));a("a9e3"),a("99af"),a("7db0"),a("d3b7");var s={data:function(){return{nav:[{name:this.$t("fund.financialRecords")}],currency:0,type_id:0,type_name:"",balance:{},page:1,list:[],canGet:!0}},onLoad:function(t){var e=t.currency,a=t.type_id,i=t.type_name;if(!e||!a||!i)return this.$utils.showToast(this.$t("common.paramsWrong")),void setTimeout((function(){uni.navigateBack({delta:1})}),1200);this.currency=e,this.type_id=a,this.type_name=i},onShow:function(){this.getDetail(),this.getLegalLog()},methods:{getDetail:function(){var t=this,e=this.currency,a=this.type_name;this.$u.api.wallet.getDetail(e,a).then((function(e){var a=e.message;1==t.type_id?(a.balance=Number(e.message.legal_balance),a.lock_balance=Number(e.message.lock_legal_balance)):2==t.type_id?(a.balance=Number(e.message.change_balance),a.lock_balance=Number(e.message.lock_change_balance)):3==t.type_id?(a.balance=Number(e.message.lever_balance),a.lock_balance=Number(e.message.lock_lever_balance)):4==t.type_id&&(a.balance=Number(e.message.micro_balance),a.lock_balance=Number(e.message.lock_micro_balance)),t.balance=a}))},getLegalLog:function(){var t=this;if(this.canGet){var e=this.currency,a=this.type_id,i=this.page;this.$u.api.wallet.getLegalLog(e,a,i).then((function(e){var a=e.message.list;a.length?(t.list=[].concat((0,n.default)(t.list),(0,n.default)(a)),t.page++):t.canGet=!1}))}}},computed:{i18n:function(){return this.$t("fund")},assetsType:function(){var t=this,e=this.$t("fund"),a=[{id:1,name:"legal",type:e.fiat+e.account},{id:2,name:"change",type:e.exchange+e.account},{id:3,name:"lever",type:e.leverage+e.account},{id:4,name:"micro",type:e.second+e.account}];return a.find((function(e){return e.id==t.type_id}))}},onReachBottom:function(){this.getLegalLog()}};e.default=s},"6d84":function(t,e,a){"use strict";a.r(e);var i=a("3833"),n=a("ad25");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"ef3b48c0",null,!1,i["a"],void 0);e["default"]=u.exports},"6ee6":function(t,e,a){t.exports=a.p+"static/img/net.0f9f721f.svg"},"74bd":function(t,e,a){t.exports=a.p+"static/img/data.1439158f.svg"},"75c0":function(t,e,a){t.exports=a.p+"static/img/comment.60b356bc.svg"},"7dd7":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{},[e("v-uni-view",[this.total?e("v-uni-text",{staticClass:"text-center opacity-50 font-size-22 py-20 d-block"},[this._v(this._s(this.$t("common.hasNoData")))]):e("v-uni-image",{staticClass:"mx-auto d-block my-30",staticStyle:{width:"320rpx",height:"240rpx"},attrs:{src:this.data}})],1),this._t("default")],2)},n=[]},8713:function(t,e,a){t.exports=a.p+"static/img/update.5a19e0e2.svg"},"929d":function(t,e,a){t.exports=a.p+"static/img/collect.e5625625.svg"},9572:function(t,e,a){"use strict";a.r(e);var i=a("0583"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},ab6e:function(t,e,a){t.exports=a.p+"static/img/empty.d67f5618.svg"},ad25:function(t,e,a){"use strict";a.r(e);var i=a("6091"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},cd2a:function(t,e,a){t.exports=a.p+"static/img/order.8f3af2d1.svg"},daaf:function(t,e,a){t.exports=a.p+"static/img/card.d87c16dc.svg"}}]);