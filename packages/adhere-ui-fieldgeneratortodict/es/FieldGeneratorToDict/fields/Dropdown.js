import _Dropdown from"@baifendian/adhere-ui-anthoc/es/dropdown";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,a){var t={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t};import React from"react";import{useDict,useDynamicDict}from"../Hooks";import{setItem}from"../ItemFactory";setItem("Dropdown","Standard",function(n){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDict({dictName:n,cascadeParams:a,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=e.menu)?t:{}),{items:a});return React.createElement(_Dropdown,__assign({},e,{menu:t}))}}),setItem("DropdownDynamic","Standard",function(n){return function(e){var a=e.cascadeParams,t=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useDynamicDict({dictName:n,cascadeParams:a,onDataSourceChange:t}),t=__assign(__assign({},null!=(t=e.menu)?t:{}),{items:a});return React.createElement(_Dropdown,__assign({},e,{menu:t}))}});
//# sourceMappingURL=Dropdown.js.map