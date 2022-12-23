var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},__spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),a=0,t=0;t<n;t++)for(var o=arguments[t],c=0,u=o.length;c<u;c++,a++)r[a]=o[c];return r};import{Spin}from"antd";import debounce from"lodash/debounce";import React,{useEffect,useRef,useState}from"react";import Hooks from"@baifendian/adhere-ui-hooks";import Dict from"@baifendian/adhere-util-dict";import WatchMemoized from"@baifendian/adhere-util-watchmemoized";import CheckAllMulitSelectFormItem from"../CheckAllMulitSelectFormItem";import MulitSelectFormItem from"../MulitSelectFormItem";import SelectFormItem from"../SelectFormItem";var FormItemComponents={},memoized=WatchMemoized.memoized,useForceUpdate=Hooks.useForceUpdate;export default function(){var e=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("Select")}),t=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("DynamicSelect")}),n=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("AutoCompleteSelect")});return FormItemComponents.SelectFormItem=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return React.createElement(SelectFormItem,{selectProps:__assign({},e),dataSource:t})},FormItemComponents.SelectMulitFormItem=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return React.createElement(MulitSelectFormItem,{selectProps:__assign({},e),dataSource:t})},FormItemComponents.SelectCheckAllMulitFormItem=function(e){var t=e.dataSource,n=(e.onCheckAllChange,__rest(e,["dataSource","onCheckAllChange"]));return React.createElement(CheckAllMulitSelectFormItem,{selectProps:__assign({},n),dataSource:t,onCheckAllChange:function(e){n.onChange(e?t.map(function(e){return e.value}):[])}})},e.forEach(function(r){FormItemComponents[r+"FormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[r].value,t=n instanceof Function?n(t):n,n=FormItemComponents.SelectFormItem;return React.createElement(n,__assign({},e,{dataSource:t}))},FormItemComponents[r+"MulitFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[r].value,t=n instanceof Function?n(t):n,n=FormItemComponents.SelectMulitFormItem;return React.createElement(n,__assign({},e,{dataSource:t}))},FormItemComponents[r+"CheckAllMulitFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[r].value,t=n instanceof Function?n(t):n,n=FormItemComponents.SelectCheckAllMulitFormItem;return React.createElement(n,__assign({},e,{dataSource:t}))}}),t.forEach(function(c){FormItemComponents[c+"FormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),r=n[0],a=n[1],o=Dict.value[c].value,n=(useEffect(function(){o.then&&o.then(function(e){a(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){a(e)})},[t]),FormItemComponents.SelectFormItem);return React.createElement(n,__assign({},e,{dataSource:r}))},FormItemComponents[c+"MulitFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),r=n[0],a=n[1],o=Dict.value[c].value,n=(useEffect(function(){o.then&&o.then(function(e){a(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){a(e)})},[t]),FormItemComponents.SelectMulitFormItem);return React.createElement(n,__assign({},e,{dataSource:r}))},FormItemComponents[c+"CheckAllMulitFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),r=n[0],a=n[1],o=Dict.value[c].value,n=(useEffect(function(){o.then&&o.then(function(e){a(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){a(e)})},[t]),FormItemComponents.SelectCheckAllMulitFormItem);return React.createElement(n,__assign({},e,{dataSource:r}))}}),n.forEach(function(f){FormItemComponents[f+"FormItem"]=function(e){var t=e.debounceTimeout,n=void 0===t?300:t,r=__rest(e,["debounceTimeout"]),a=useForceUpdate(),o=Dict.value[f].value,c=useRef(0),t=useState(!1),e=t[0],u=t[1],t=useState([]),m=t[0],i=t[1],l=useRef();return useEffect(function(){l.current=debounce(memoized.createMemoFun(function(e){c.current+=1;var n=c.current;!e||Array.isArray(e)&&!e.length?(i(function(e){return e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value})}),u(!1)):o(e).then(function(t){n===c.current&&(i(function(e){var n=__spreadArrays(t,e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value}));return __spreadArrays(Array.from(new Set(n.map(function(e){return e.value})))).map(function(t){return n.find(function(e){return e.value===t})})}),u(!1))})}),n||300),a()},[n,r.value]),React.createElement(SelectFormItem,{selectProps:__assign({notFoundContent:e?React.createElement(Spin,{size:"small"}):null,filterOption:!1,onSearch:l.current,onClear:function(){i([]),u(!1)}},r),dataSource:m})},FormItemComponents[f+"MulitFormItem"]=function(e){var t=FormItemComponents[f+"FormItem"];return React.createElement(t,__assign({mode:"multiple"},e))},FormItemComponents[f+"CheckAllMulitFormItem"]=function(r){var e=useForceUpdate(),t=(r.onCheckAllChange,r.debounceTimeout),n=__rest(r,["onCheckAllChange","debounceTimeout"]),a=Dict.value[f].value,o=useRef(0),c=useState(!1),u=c[0],m=c[1],c=useState([]),i=c[0],l=c[1],s=useRef();return useEffect(function(){s.current=debounce(memoized.createMemoFun(function(e){o.current+=1;var n=o.current;!e||Array.isArray(e)&&!e.length?(l(function(e){return e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value})}),m(!1)):a(e).then(function(t){n===o.current&&(l(function(e){var n=__spreadArrays(t,e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value}));return __spreadArrays(Array.from(new Set(n.map(function(e){return e.value})))).map(function(t){return n.find(function(e){return e.value===t})})}),m(!1))})}),t||300),e()},[t,r.value]),React.createElement(CheckAllMulitSelectFormItem,{selectProps:__assign({notFoundContent:u?React.createElement(Spin,{size:"small"}):null,filterOption:!1,onSearch:s.current,onClear:function(){l([]),m(!1)}},n),dataSource:i,onCheckAllChange:function(e){n.onChange(e?i.map(function(e){return e.value}):[])}})}}),FormItemComponents}
//# sourceMappingURL=Select.js.map