webpackJsonp([19],{Y0rp:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{columns4:[{type:"selection",width:60,align:"center"},{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],data1:[],tableData1:[],tableColumns1:[{title:"Data1",key:"data1"},{title:"Data2",key:"data2"},{title:"Data3",key:"data3"},{title:"Data4",key:"data4"},{title:"Data5",key:"data5"},{title:"Data6",key:"data6"}]}},mounted:function(){this.refreshData()},methods:{handleSelectAll:function(a){this.$refs.selection.selectAll(a)},handleSetData:function(){this.data1=[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}]},handleClearData:function(){this.data1=[]},refreshData:function(){for(var a=[],t=0;t<10;t++)a.push({data1:Math.floor(1e4*Math.random()),data2:Math.floor(1e6*Math.random()),data3:Math.floor(1e8*Math.random()),data4:Math.floor(Math.random()*Math.random()*1e4),data5:Math.floor(Math.random()*Math.random()*1e6),data6:Math.floor(Math.random()*Math.random()*1e8)});this.tableData1=a},changePage:function(){this.refreshData()}}},l={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("Table",{ref:"selection",attrs:{border:"",columns:a.columns4,data:a.data1}}),a._v(" "),e("Button",{on:{click:a.handleSetData}},[a._v("Set Data")]),a._v(" "),e("Button",{on:{click:a.handleClearData}},[a._v("Clear Data")]),a._v(" "),e("Button",{on:{click:function(t){a.handleSelectAll(!0)}}},[a._v("Set all selected")]),a._v(" "),e("Button",{on:{click:function(t){a.handleSelectAll(!1)}}},[a._v("Cancel all selected")]),a._v(" "),e("div",{staticStyle:{margin:"20px 0px"}},[e("Table",{staticStyle:{width:"100%"},attrs:{data:a.tableData1,columns:a.tableColumns1,stripe:""}}),a._v(" "),e("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[e("div",{staticStyle:{float:"right"}},[e("Page",{attrs:{total:100,"show-sizer":"",current:1},on:{"on-change":a.changePage}})],1)])],1)],1)},staticRenderFns:[]},o=e("VU/8")(n,l,!1,null,null,null);t.default=o.exports}});
//# sourceMappingURL=19.f4b105e5564447a62c4e.js.map