var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};import React from"react";import{Select}from"../../AntFormItemNormalize";var Option=Select.Option,SelectFormItem=function(e){var t=e.selectProps,e=e.dataSource;return React.createElement(Select,__assign({},t||{}),(e||[]).map(function(e){return React.createElement(Option,{key:e.value,value:e.value},e.label)}))};export default SelectFormItem;
//# sourceMappingURL=index.js.map
