var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var n={};for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]]);return n};import React,{useEffect,useState}from"react";import Dict from"@baifendian/adhere-util-dict";import MentionsFormItem from"../MentionsFormItem";import{deepDep}from"../util";var FormItemComponents={};export default function(){var t=Object.keys(Dict.handlers).filter(function(t){return t.endsWith("Mentions")}),e=Object.keys(Dict.handlers).filter(function(t){return t.endsWith("DynamicMentions")});return t.forEach(function(r){FormItemComponents["".concat(r,"FormItem")]=function(t){var e=t.cascadeParams,t=__rest(t,["cascadeParams"]),n=Dict.value[r].value,e=n instanceof Function?n(e):n;return React.createElement(MentionsFormItem,__assign({},t,{options:e}))}}),e.forEach(function(i){FormItemComponents["".concat(i,"FormItem")]=function(t){var e=t.cascadeParams,t=__rest(t,["cascadeParams"]),n=useState([]),r=n[0],o=n[1],a=Dict.value[i].value;return useEffect(function(){a.then&&a.then(function(t){o(t)})},[]),useEffect(function(){a instanceof Function&&a(e).then(function(t){o(t)})},[deepDep(e)]),React.createElement(MentionsFormItem,__assign({},t,{options:r}))}}),FormItemComponents}
//# sourceMappingURL=Mentions.js.map
