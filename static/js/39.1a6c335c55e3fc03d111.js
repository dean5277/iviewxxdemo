webpackJsonp([39],{X5fm:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:{row:Object}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Row",{staticClass:"expand-row"},[s("Col",{attrs:{span:"8"}},[s("span",{staticClass:"expand-key"},[t._v("职业：")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v(t._s(t.row.job))])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("span",{staticClass:"expand-key"},[t._v("兴趣：")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v(t._s(t.row.interest))])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("span",{staticClass:"expand-key"},[t._v("生日：")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v(t._s(t.row.birthday))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"8"}},[s("span",{staticClass:"expand-key"},[t._v("最喜欢的书：")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v("《"+t._s(t.row.book)+"》")])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("span",{staticClass:"expand-key"},[t._v("最喜欢的电影：")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v(t._s(t.row.movie))])]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("span",{staticClass:"expand-key"},[t._v("最喜欢的音乐：")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v(t._s(t.row.music))])])],1)],1)},staticRenderFns:[]},r={components:{abc:s("VU/8")(n,a,!1,null,null,null).exports},data:function(){return{self:this,data7:[],columns8:[{type:"selection",width:70,align:"center"},{type:"switch",title:"订单号",key:"orderNum",width:250},{title:"买家",key:"buyer",combine:!0,render:function(t,e){var s={childrens:[["div",{class:"combiePackageCode"},321],["div",{class:"combineShipping"},"123 > 321"],["span",{class:"icon iconfont icon-dayin prinTime"},""]],props:{}};return 1===e.index&&(s.props.colSpan=3),s}},{title:"国家",key:"country",combine:!0,width:200,render:function(t,e){var s={childrens:e.row.country,props:{}};return 3===e.index&&(s.props.rowSpan=2),8===e.index&&(s.props.rowSpan=2),s}},{title:"付款",key:"pay"},{title:"状态",key:"status"},{title:"标记",key:"action",width:180,align:"center",render:function(t,e){return t("Button",{},"编辑")}}]}},methods:{remove:function(t){this.data6.splice(t,1)},show:function(){this.modal9=!0}},mounted:function(){var t=this;setTimeout(function(){t.$nextTick(function(){this.data7=[{orderNum:"54465456456",buyer:"大王0",country:"中国122",pay:"支付宝",status:"未处理",_heighLight:!0,stretch:!0,children:[{orderNum:"324234",buyer:"大王00",country:"中国2",pay:"支付宝",status:"未处理",indentSize:15,stretch:!1,children:[{orderNum:"123123",buyer:"大王000",country:"中国3",pay:"支付宝",status:"未处理",indentSize:30,stretch:!1}]},{orderNum:"gggg666",buyer:"大王01",country:"中国4",pay:"支付宝",status:"未处理",indentSize:15,stretch:!1},{orderNum:"43",buyer:"大王02",country:"中国1",pay:"支付宝1",status:"未处理",indentSize:15,stretch:!1},{orderNum:"43",buyer:"大王03",country:"中国",pay:"支付宝",status:"未处理",indentSize:15,stretch:!1},{orderNum:"956599555",buyer:"大王04",country:"中国1",pay:"支付宝1",status:"未处理",indentSize:15,stretch:!1},{orderNum:"5656",buyer:"大王05",country:"中国",pay:"支付宝",status:"未处理",indentSize:15,stretch:!1},{orderNum:"656556",buyer:"大王06",country:"中国1",pay:"支付宝1",status:"未处理",indentSize:15,stretch:!1}]},{orderNum:"1156456",buyer:"大王1",country:"中国",pay:"支付宝",status:"未处理",stretch:!1},{orderNum:"456456456",buyer:"大王2",country:"中国",pay:"支付宝",status:"未处理",stretch:!1,children:[{orderNum:"222",buyer:"大王20",country:"中国",pay:"支付宝",status:"未处理",indentSize:15,stretch:!1}]}],console.log(t.data7)})},1e3)}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticStyle:{"margin-top":"10px"}},[e("dTable",{attrs:{"highlight-row":"",border:"",context:this.self,columns:this.columns8,data:this.data7}})],1)])},staticRenderFns:[]},o=s("VU/8")(r,i,!1,null,null,null);e.default=o.exports}});
//# sourceMappingURL=39.1a6c335c55e3fc03d111.js.map