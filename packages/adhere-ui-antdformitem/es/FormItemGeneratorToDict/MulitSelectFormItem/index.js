import"core-js/modules/es.object.assign.js";import"core-js/modules/es.array.map.js";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import React from"react";import{MultipleSelect}from"../../AntFormItemNormalize";var Option=MultipleSelect.Option,MulitSelectFormItem=function(e){var t=e.selectProps,e=e.dataSource;return React.createElement(MultipleSelect,__assign({},t),e.map(function(e){return React.createElement(Option,{key:e.value,value:e.value},e.label)}))};export default MulitSelectFormItem;
//# sourceMappingURL=index.js.map
