import _AutoComplete from"@baifendian/adhere-ui-anthoc/es/auto-complete";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var a={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};import React from"react";import{setItem}from"../ItemFactory";import{useDict,useDynamicDict}from"../hooks";setItem("Transfer","Standard",function(n){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),t=useDict({dictName:n,cascadeParams:t,onDataSourceChange:a});return React.createElement(_AutoComplete,__assign({},e,{options:t}))}}),setItem("AutoComplete","SelectInput",function(n){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),t=useDict({dictName:n,cascadeParams:t,onDataSourceChange:a});return React.createElement(_AutoComplete.AutoCompleteSelectInput,__assign({},e,{options:t}))}}),setItem("AutoCompleteDynamic","Standard",function(n){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),t=useDynamicDict({dictName:n,cascadeParams:t,onDataSourceChange:a});return React.createElement(_AutoComplete,__assign({},e,{options:t}))}}),setItem("AutoCompleteDynamic","SelectInput",function(n){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),t=useDynamicDict({dictName:n,cascadeParams:t,onDataSourceChange:a});return React.createElement(_AutoComplete.AutoCompleteSelectInput,__assign({},e,{options:t}))}});
//# sourceMappingURL=AutoComplete.js.map
