import _Space from"@baifendian/adhere-ui-anthoc/es/space";import _Checkbox from"@baifendian/adhere-ui-anthoc/es/checkbox";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};import React,{useEffect,useState}from"react";import Intl from"@baifendian/adhere-util-intl";import MulitSelectFormItem from"../MulitSelectFormItem";var CheckBoxSelectFormItem=function(n){var e=useState(""),t=e[0],a=e[1],e=useState(n.value.length===n.dataSource.length),l=e[0],r=e[1];return useEffect(function(){r(n.value.length===n.dataSource.length)},[n.value,n.dataSource]),React.createElement(MulitSelectFormItem,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=t?n.dataSource.filter(function(e){return-1!==e.label.indexOf(t)}):n.dataSource;return React.createElement("div",null,React.createElement("div",null,React.createElement(_Checkbox,{style:{marginLeft:10},checked:l,onChange:function(e){e.target.checked?(null!=(e=null==n?void 0:n.onChange)&&e.call(n,n.dataSource.map(function(e){return e.value})),r(!0)):(null!=(e=null==n?void 0:n.onChange)&&e.call(n,[]),r(!1))}},Intl.v("全选"))),React.createElement("div",null,React.createElement(_Checkbox.Group,__assign({style:{padding:10}},n,{onChange:function(e){var t;null!=(t=null==n?void 0:n.onChange)&&t.call(n,e),r(e.length===(n.dataSource||[]).length)}}),React.createElement(_Space,{direction:"vertical"},e.map(function(e){return React.createElement(_Checkbox,{key:e.value,value:e.value,disabled:e.disabled},e.label)})))))},onChange:function(e){var t;null!=(t=null==n?void 0:n.onChange)&&t.call(n,e),r(e.length===(n.dataSource||[]).length)},filterOption:function(){return!1},onSearch:function(e){return a(e)},onBlur:function(){a("")},onClear:function(){a("")}},null!=(e=n.selectProps)?e:{}),dataSource:n.dataSource})};export default CheckBoxSelectFormItem;
//# sourceMappingURL=index.js.map
