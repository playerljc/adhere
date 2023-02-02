var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};import React,{useEffect,useState}from"react";import Dict from"@baifendian/adhere-util-dict";import TransferFormItem from"../TransferFormItem";import TransferSelectFormItem from"../TransferSelectFormItem";var FormItemComponents={};export default function(){var e=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("Transfer")}),t=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("DynamicTransfer")});return e.forEach(function(r){FormItemComponents["".concat(r,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[r].value,t=n instanceof Function?n(t):n;return React.createElement(TransferFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(r,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[r].value,t=n instanceof Function?n(t):n;return React.createElement(TransferSelectFormItem,__assign({},e,{dataSource:t}))}}),t.forEach(function(o){FormItemComponents["".concat(o,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),r=n[0],a=n[1],c=Dict.value[o].value;return useEffect(function(){c.then&&c.then(function(e){a(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){a(e)})},[t]),React.createElement(TransferFormItem,__assign({},e,{dataSource:r}))},FormItemComponents["".concat(o,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),r=n[0],a=n[1],c=Dict.value[o].value;return useEffect(function(){c.then&&c.then(function(e){a(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){a(e)})},[t]),React.createElement(TransferSelectFormItem,__assign({},e,{dataSource:r}))}}),FormItemComponents}
//# sourceMappingURL=Transfer.js.map
