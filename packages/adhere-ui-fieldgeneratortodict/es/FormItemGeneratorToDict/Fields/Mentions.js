var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var n={};for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n};import{useMount,useUpdateEffect}from"ahooks";import React,{useState}from"react";import Dict from"@baifendian/adhere-util-dict";import{setItem}from"../ItemFactory";import MentionsFormItem from"../MentionsFormItem";import{deepDep}from"../util";setItem("Mentions","FormItem",function(a){return function(t){var e=t.cascadeParams,n=t.onDataSourceChange,t=__rest(t,["cascadeParams","onDataSourceChange"]),o=Dict.value[a].value,r=o instanceof Function?o(e):o;return useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(MentionsFormItem,__assign({},t,{options:r}))}}),setItem("MentionsDynamic","FormItem",function(s){return function(t){var e=t.cascadeParams,n=t.onDataSourceChange,t=__rest(t,["cascadeParams","onDataSourceChange"]),o=useState([]),r=o[0],a=o[1],i=Dict.value[s].value;return useMount(function(){i.then&&i.then(function(t){a(t)})}),useUpdateEffect(function(){i instanceof Function&&i(e).then(function(t){a(t)})},[deepDep(e)]),useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(MentionsFormItem,__assign({},t,{options:r}))}});
//# sourceMappingURL=Mentions.js.map
