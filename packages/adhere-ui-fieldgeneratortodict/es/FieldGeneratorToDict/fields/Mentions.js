import _Mentions from"@baifendian/adhere-ui-anthoc/es/mentions";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var s in a=arguments[t])Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,a){var t={};for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,s=Object.getOwnPropertySymbols(e);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(t[s[n]]=e[s[n]]);return t};import React from"react";import{useDict,useDynamicDict}from"../Hooks";import{setItem}from"../ItemFactory";import Suspense from"../Suspense";setItem("Mentions","Standard",function(n){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:n,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Mentions,__assign({},e,{options:a}))}}),setItem("Mentions","SuspenseStandard",function(s){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,n=e.suspenseProps,e=__rest(e,["cascadeParams","onDataSourceChange","suspenseProps"]),a=useDict({dictName:s,cascadeParams:a,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:a}),React.createElement(_Mentions,__assign({},e,{options:a})))}}),setItem("MentionsDynamic","Standard",function(n){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:n,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Mentions,__assign({},e,{options:a}))}}),setItem("MentionsDynamic","SuspenseStandard",function(s){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,n=e.suspenseProps,e=__rest(e,["cascadeParams","onDataSourceChange","suspenseProps"]),a=useDynamicDict({dictName:s,cascadeParams:a,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:a}),React.createElement(_Mentions,__assign({},e,{options:a})))}});
//# sourceMappingURL=Mentions.js.map
