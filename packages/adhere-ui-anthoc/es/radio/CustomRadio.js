var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var a in e=arguments[o])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var o={};for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(o[a[r]]=t[a[r]]);return o};import React,{memo}from"react";import Radio from"./index";var InternalCustomRadio=memo(function(t){var e=t.children,o=t.options,t=__rest(t,["children","options"]);return React.createElement(Radio.Group,__assign({},t),null==e?void 0:e(null!=(e=null==(t=null==o?void 0:o.map)?void 0:t.call(o,function(t){return{data:t,defaultNode:React.createElement(Radio,{key:t.value,value:t.value,disabled:t.disabled},t.label)}}))?e:[]))}),CustomRadio=InternalCustomRadio;CustomRadio.displayName="CustomRadio";export default CustomRadio;
//# sourceMappingURL=CustomRadio.js.map
