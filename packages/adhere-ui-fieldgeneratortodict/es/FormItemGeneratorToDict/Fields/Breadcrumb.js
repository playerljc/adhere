var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var r={};for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(r[a[n]]=t[a[n]]);return r};import{useMount,useUpdateEffect}from"ahooks";import React,{useState}from"react";import Dict from"@baifendian/adhere-util-dict";import BreadcrumbFormItem from"../BreadcrumbFormItem";import{setItem}from"../ItemFactory";import{deepDep}from"../util";setItem("Breadcrumb","FormItem",function(n){return function(t){var e=t.cascadeParams,t=__rest(t,["cascadeParams"]),r=Dict.value[n].value,e=r instanceof Function?r(e):r;return React.createElement(BreadcrumbFormItem,__assign({},t,{items:e}))}}),setItem("BreadcrumbDynamic","FormItem",function(c){return function(t){var e=t.cascadeParams,t=__rest(t,["cascadeParams"]),r=useState([]),n=r[0],a=r[1],o=Dict.value[c].value;return useMount(function(){o.then&&o.then(function(t){a(t)})}),useUpdateEffect(function(){o instanceof Function&&o(e).then(function(t){a(t)})},[deepDep(e)]),React.createElement(BreadcrumbFormItem,__assign({},t,{items:n}))}});
//# sourceMappingURL=Breadcrumb.js.map
