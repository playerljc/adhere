var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var a,n=0,l=t.length;n<l;n++)!a&&n in t||((a=a||Array.prototype.slice.call(t,0,n))[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};import React,{useEffect,useState}from"react";import Intl from"@baifendian/adhere-util-intl";import{Checkbox,Tag}from"../../AntFormItemNormalize";import TagVerticalFormItem from"../TagVerticalFormItem";var CheckableTag=Tag.CheckableTag,TagCheckAllVerticalFormItem=function(e){var t=e.dataSource,a=__rest(e,["dataSource"]),e=useState((a.value||[]).length===t.length),r=e[0],n=e[1];return useEffect(function(){n((a.value||[]).length===t.length)},[a.value,t]),React.createElement("div",null,React.createElement("div",{style:{marginBottom:10}},React.createElement(Checkbox,{checked:r,onChange:function(e){e.target.checked?null!=(e=null==a?void 0:a.onChange)&&e.call(a,t.map(function(e){return e.value})):null!=(e=null==a?void 0:a.onChange)&&e.call(a,[])}},Intl.v("全选"))),React.createElement("div",null,React.createElement(TagVerticalFormItem,__assign({},a,{renderItem:function(e){var r=e.record;return{props:{checked:(a.value||[]).includes(r.value),onChange:function(e){var t=__spreadArray([],a.value||[],!0),t=e?__spreadArray(__spreadArray([],t,!0),[r.value],!1):t.filter(function(e){return e!==r.value});null!=(e=null==a?void 0:a.onChange)&&e.call(a,t)}},component:CheckableTag,children:null==r?void 0:r.label}},dataSource:t}))))};export default TagCheckAllVerticalFormItem;
//# sourceMappingURL=index.js.map
