import _Transfer from"@baifendian/adhere-ui-anthoc/es/transfer";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};import React from"react";var TransferFormItem=function(e){var r=e.dataSource,e=__rest(e,["dataSource"]);return React.createElement(_Transfer,__assign({dataSource:r.map(function(e){return __assign(__assign({},e),{key:e.value,title:e.label,description:e.label})}),render:function(e){return e.title},targetKeys:e.value},e))};export default TransferFormItem;
//# sourceMappingURL=index.js.map
