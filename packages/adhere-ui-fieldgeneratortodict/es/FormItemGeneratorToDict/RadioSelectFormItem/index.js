import _Space from"@baifendian/adhere-ui-anthoc/es/space";import _Radio from"@baifendian/adhere-ui-anthoc/es/radio";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};import React,{useState}from"react";import SelectFormItem from"../SelectFormItem";var RadioSelectFormItem=function(a){var e=useState(""),t=e[0],n=e[1];return React.createElement(SelectFormItem,{selectProps:__assign({value:a.value,dropdownRender:function(){var e=t?a.dataSource.filter(function(e){return-1!==e.label.indexOf(t)}):a.dataSource;return React.createElement(_Radio.Group,__assign({style:{padding:10}},a,{onChange:function(e){var t;null!=(t=null==a?void 0:a.onChange)&&t.call(a,e.target.value)}}),React.createElement(_Space,{direction:"vertical"},e.map(function(e){return React.createElement(_Radio,{key:e.value,value:e.value,disabled:e.disabled},e.label)})))},onChange:function(e){var t;null!=(t=null==a?void 0:a.onChange)&&t.call(a,e)},filterOption:function(){return!1},onSearch:function(e){return n(e)},onBlur:function(){n("")},onClear:function(){n("")}},a.selectProps||{}),dataSource:a.dataSource})};export default RadioSelectFormItem;
//# sourceMappingURL=index.js.map