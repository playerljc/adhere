import _Checkbox from"@baifendian/adhere-ui-anthoc/es/checkbox";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};import React,{useEffect,useState}from"react";import Intl from"@baifendian/adhere-util-intl";import CheckBoxCustomFormItem from"../CheckBoxCustomFormItem";var CheckBoxCheckAllCustomFormItem=function(e){var t=e.dataSource,n=__rest(e,["dataSource"]),e=useState((n.value||[]).length===t.length),r=e[0],o=e[1];return useEffect(function(){o((n.value||[]).length===t.length)},[n.value,t]),React.createElement("div",null,React.createElement("div",{style:{marginBottom:10}},React.createElement(_Checkbox,{checked:r,onChange:function(e){e.target.checked?null!=(e=null==n?void 0:n.onChange)&&e.call(n,t.map(function(e){return e.value})):null!=(e=null==n?void 0:n.onChange)&&e.call(n,[])}},Intl.v("全选"))),React.createElement("div",null,React.createElement(CheckBoxCustomFormItem,__assign({},n,{dataSource:t}))))};export default CheckBoxCheckAllCustomFormItem;
//# sourceMappingURL=index.js.map
