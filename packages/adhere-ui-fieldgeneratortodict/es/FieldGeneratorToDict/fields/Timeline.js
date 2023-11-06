import _Timeline from"@baifendian/adhere-ui-anthoc/es/timeline";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,a){var t={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t};import React from"react";import{setItem}from"../ItemFactory";import Suspense from"../Suspense";import{useDict,useDynamicDict}from"../hooks";setItem("Timeline","Standard",function(n){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:n,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Timeline,__assign({},e,{options:a}))}}),setItem("Timeline","SuspenseStandard",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,n=e.suspenseProps,e=__rest(e,["cascadeParams","onDataSourceChange","suspenseProps"]),a=useDict({dictName:r,cascadeParams:a,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:a}),React.createElement(_Timeline,__assign({},e,{options:a})))}}),setItem("TimelineDynamic","Standard",function(n){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:n,cascadeParams:a,onDataSourceChange:t});return React.createElement(_Timeline,__assign({},e,{options:a}))}}),setItem("TimelineDynamic","SuspenseStandard",function(r){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,n=e.suspenseProps,e=__rest(e,["cascadeParams","onDataSourceChange","suspenseProps"]),a=useDynamicDict({dictName:r,cascadeParams:a,onDataSourceChange:t});return React.createElement(Suspense,__assign({},null!=n?n:{},{data:a}),React.createElement(_Timeline,__assign({},e,{options:a})))}});
//# sourceMappingURL=Timeline.js.map
