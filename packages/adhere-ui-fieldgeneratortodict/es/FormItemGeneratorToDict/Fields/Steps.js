var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var n={};for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]]);return n};import{useMount,useUpdateEffect}from"ahooks";import React,{useState}from"react";import Dict from"@baifendian/adhere-util-dict";import{setItem}from"../ItemFactory";import StepsFormItem from"../StepsFormItem";import{deepDep}from"../util";setItem("Steps","FormItem",function(i){return function(t){var e=t.cascadeParams,n=t.onDataSourceChange,t=__rest(t,["cascadeParams","onDataSourceChange"]),a=Dict.value[i].value,r=useState([]),o=r[0],c=r[1];function s(){a instanceof Function?c(a(e)):c(a)}return useMount(function(){s()}),useUpdateEffect(function(){s()},[deepDep(e)]),useUpdateEffect(function(){null!=n&&n(o)},[o]),React.createElement(StepsFormItem,__assign({},t,{items:o}))}}),setItem("StepsDynamic","FormItem",function(i){return function(t){var e=t.cascadeParams,n=t.onDataSourceChange,t=__rest(t,["cascadeParams","onDataSourceChange"]),a=useState([]),r=a[0],o=a[1],c=Dict.value[i].value;function s(){c instanceof Function?c(e).then(function(t){o(t)}):c.then&&c.then(function(t){o(t)})}return useMount(function(){s()}),useUpdateEffect(function(){s()},[deepDep(e)]),useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(StepsFormItem,__assign({},t,{items:r}))}});
//# sourceMappingURL=Steps.js.map
