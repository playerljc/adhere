import _Space from"@baifendian/adhere-ui-anthoc/es/space";import _Checkbox from"@baifendian/adhere-ui-anthoc/es/checkbox";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};import React,{useState}from"react";import MultiSelectFormItem from"../MultiSelectFormItem";var CheckBoxSelectFormItem=function(n){var e=useState(""),t=e[0],a=e[1];return React.createElement(MultiSelectFormItem,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=t?n.dataSource.filter(function(e){return-1!==e.label.indexOf(t)}):n.dataSource;return React.createElement(_Checkbox.Group,__assign({style:{padding:10}},n,{onChange:function(e){var t;null!=(t=null==n?void 0:n.onChange)&&t.call(n,e)}}),React.createElement(_Space,{direction:"vertical"},e.map(function(e){return React.createElement(_Checkbox,{key:e.value,value:e.value,disabled:e.disabled},e.label)})))},onChange:function(e){var t;null!=(t=null==n?void 0:n.onChange)&&t.call(n,e)},filterOption:function(){return!1},onSearch:function(e){return a(e)},onBlur:function(){a("")},onClear:function(){a("")}},null!=(e=n.selectProps)?e:{}),dataSource:n.dataSource})};export default CheckBoxSelectFormItem;
//# sourceMappingURL=index.js.map
