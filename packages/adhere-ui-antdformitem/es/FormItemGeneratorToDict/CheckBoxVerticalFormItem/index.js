import"core-js/modules/es.object.assign.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.map.js";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};import React from"react";import{Checkbox,Space}from"../../AntFormItemNormalize";var CheckBoxVerticalFormItem=function(e){var t=e.dataSource,r=__rest(e,["dataSource"]);return React.createElement(Checkbox.Group,__assign({},r,{onChange:function(e){var t;null!=(t=null==r?void 0:r.onChange)&&t.call(r,e)}}),React.createElement(Space,{direction:"vertical"},t.map(function(e){return React.createElement(Checkbox,{key:e.value,value:e.value,disabled:e.disabled},e.label)})))};export default CheckBoxVerticalFormItem;
//# sourceMappingURL=index.js.map
