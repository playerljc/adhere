var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};import{useMount,useUpdateEffect}from"ahooks";import React,{useState}from"react";import Dict from"@baifendian/adhere-util-dict";import{setItem}from"../ItemFactory";import TransferFormItem from"../TransferFormItem";import TransferSelectFormItem from"../TransferSelectFormItem";import{deepDep}from"../util";setItem("Transfer","FormItem",function(o){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=Dict.value[o].value,r=a instanceof Function?a(t):a;return useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(TransferFormItem,__assign({},e,{dataSource:r}))}}),setItem("Transfer","SelectFormItem",function(o){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=Dict.value[o].value,r=a instanceof Function?a(t):a;return useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(TransferSelectFormItem,__assign({},e,{dataSource:r}))}}),setItem("TransferDynamic","FormItem",function(s){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useState([]),r=a[0],o=a[1],c=Dict.value[s].value;return useMount(function(){c.then&&c.then(function(e){o(e)})}),useUpdateEffect(function(){c instanceof Function&&c(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(TransferFormItem,__assign({},e,{dataSource:r}))}}),setItem("TransferDynamic","SelectFormItem",function(s){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useState([]),r=a[0],o=a[1],c=Dict.value[s].value;return useMount(function(){c.then&&c.then(function(e){o(e)})}),useUpdateEffect(function(){c instanceof Function&&c(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(TransferSelectFormItem,__assign({},e,{dataSource:r}))}});
//# sourceMappingURL=Transfer.js.map
