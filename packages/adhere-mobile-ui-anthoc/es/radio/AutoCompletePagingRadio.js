var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var a in e=arguments[o])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var o={};for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};import React,{memo}from"react";import AutoComplete from"../AutoComplete";import PagingRadio from"./PagingRadio";var InternalAutoCompletePagingRadio=memo(function(t){var n=t.pagingRadioProps,t=__rest(t,["pagingRadioProps"]);return React.createElement(AutoComplete,__assign({labelProp:"title"},null!=t?t:{}),function(t){var e=t.value,o=t.onChange,t=t.searchDataSource;return React.createElement(PagingRadio,__assign({value:e&&e.length?e[0]:null,onChange:function(t){null!=o&&o([t])},options:t},null!=n?n:{}))})}),AutoCompletePagingRadio=InternalAutoCompletePagingRadio;AutoCompletePagingRadio.displayName="AutoCompletePagingRadio";export default AutoCompletePagingRadio;
//# sourceMappingURL=AutoCompletePagingRadio.js.map