var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};import React from"react";import{Checkbox,Space}from"../../AntFormItemNormalize";var CheckBoxVerticalFormItem=function(e){var t=e.dataSource,r=__rest(e,["dataSource"]);return React.createElement(Checkbox.Group,__assign({},r,{onChange:function(e){var t;null!=(t=null==r?void 0:r.onChange)&&t.call(r,e)}}),React.createElement(Space,{direction:"vertical"},t.map(function(e){return React.createElement(Checkbox,{key:e.value,value:e.value,disabled:e.disabled},e.label)})))};export default CheckBoxVerticalFormItem;
//# sourceMappingURL=index.js.map