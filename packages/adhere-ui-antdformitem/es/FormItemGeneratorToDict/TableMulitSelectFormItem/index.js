import"core-js/modules/es.object.assign.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.array.filter.js";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};import React,{useEffect,useState}from"react";import MulitSelectFormItem from"../MulitSelectFormItem";import TableFormItem from"../TableFormItem";var TableMulitSelectFormItem=function(e){var r=e.dataSource,o=__rest(e,["dataSource"]),e=useState(""),t=e[0],n=e[1],e=useState(o.value||[]),a=e[0],l=e[1],e=useState(o.value?o.value.map(function(t){return r.find(function(e){return e[o.rowKey||"id"]===t})}):[]),u=e[0],s=e[1];return useEffect(function(){o.value?(l(o.value),s(o.value.map(function(t){return r.find(function(e){return e[o.rowKey||"id"]===t})}))):(l([]),s([]))},[o.value]),React.createElement(MulitSelectFormItem,{selectProps:__assign({value:o.value,dropdownRender:function(){var e=t?r.filter(function(e){return-1!==e[o.labelKey||"name"].indexOf(t)}):r;return React.createElement(TableFormItem,__assign({rowSelection:{type:"checkbox",selectedRowKeys:a,selectedRows:u,onChange:function(e,t){l(e),s(t),null!=(t=null==o?void 0:o.onChange)&&t.call(o,e.length?e:[])}}},o,{dataSource:e}))},onChange:function(e){var t;null!=(t=null==o?void 0:o.onChange)&&t.call(o,e)},filterOption:function(){return!1},onSearch:function(e){return n(e)},onBlur:function(){n("")},onClear:function(){n("")}},o.selectProps||{}),dataSource:r.map(function(e){return{label:e[o.labelKey||"name"],value:e[o.rowKey||"id"]}})})};export default TableMulitSelectFormItem;
//# sourceMappingURL=index.js.map
