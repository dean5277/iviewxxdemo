webpackJsonp([34],{lM12:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{value1:18e5,value2:55,valueNull:null,formatter:function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},formatter2:function(e){return e+"%"},parser2:function(e){return e.replace("%","")}}},methods:{change:function(e){console.log(e)}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("InputNumber",{staticStyle:{width:"200px"},attrs:{max:1e9,min:1,formatter:e.formatter,parser:e.parser},on:{"on-change":e.change},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),e._v(" "),a("InputNumber",{staticStyle:{width:"200px"},attrs:{max:1e9,min:1,formatter:e.formatter2,parser:e.parser2},on:{"on-change":e.change},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),e._v(" "),a("InputNumber",{staticStyle:{width:"200px"},on:{"on-change":e.change}}),e._v(" "),a("InputNumber",{staticStyle:{width:"200px"},on:{"on-change":e.change},model:{value:e.valueNull,callback:function(t){e.valueNull=t},expression:"valueNull"}}),e._v(" "),a("InputNumber",{staticStyle:{width:"200px"},attrs:{formatter:e.formatter,parser:e.parser},on:{"on-change":e.change},model:{value:e.valueNull,callback:function(t){e.valueNull=t},expression:"valueNull"}})],1)},staticRenderFns:[]},r=a("VU/8")(n,l,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=34.26bfbcf8d2fc23aaffe3.js.map