webpackJsonp([49],{zfMr:function(a,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{data4:[{value:"beijing",label:"北京",children:[],loading:!1},{value:"hangzhou",label:"杭州",children:[],loading:!1}]}},methods:{loadData:function(a,e){a.loading=!0,setTimeout(function(){"beijing"===a.value?a.children=[{value:"talkingdata",label:"TalkingData"},{value:"baidu",label:"百度"},{value:"sina",label:"新浪"}]:"hangzhou"===a.value&&(a.children=[{value:"ali",label:"阿里巴巴"},{value:"163",label:"网易"}]),a.loading=!1,e()},1e3)}}},t={render:function(){var a=this.$createElement;return(this._self._c||a)("Cascader",{attrs:{data:this.data4,"load-data":this.loadData}})},staticRenderFns:[]},i=l("VU/8")(n,t,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=49.d529a164b2d48d733ddd.js.map