var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,c=t.length;a<c;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};import debounce from"lodash/debounce";import React,{useEffect,useRef,useState}from"react";import Hooks from"@baifendian/adhere-ui-hooks";import Dict from"@baifendian/adhere-util-dict";import WatchMemoized from"@baifendian/adhere-util-watchmemoized";import{Spin}from"../../AntFormItemNormalize";import CheckAllMulitSelectFormItem from"../CheckAllMulitSelectFormItem";import{getItem,setItem}from"../ItemFactory";import MulitSelectFormItem from"../MulitSelectFormItem";import SelectFormItem from"../SelectFormItem";import{deepDep}from"../util";var AutoSelectCompleteFormItem,memoized=WatchMemoized.memoized,useForceUpdate=Hooks.useForceUpdate,SelectFormItemWrap=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return React.createElement(SelectFormItem,{selectProps:__assign({},e),dataSource:t})},SelectMulitFormItemWrap=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return React.createElement(MulitSelectFormItem,{selectProps:__assign({},e),dataSource:t})},SelectCheckAllMulitFormItemWrap=function(e){var t=e.dataSource,r=(e.onCheckAllChange,__rest(e,["dataSource","onCheckAllChange"]));return React.createElement(CheckAllMulitSelectFormItem,{selectProps:__assign({},r),dataSource:t,onCheckAllChange:function(e){r.onChange(e?t.map(function(e){return e.value}):[])}})};setItem("Select","FormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(console.log("Dict",n,Dict.value),Dict.value[n].value),t=r instanceof Function?r(t):r;return React.createElement(SelectFormItemWrap,__assign({},e,{dataSource:t}))}}),setItem("Select","MulitFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=Dict.value[n].value,t=r instanceof Function?r(t):r;return React.createElement(SelectMulitFormItemWrap,__assign({},e,{dataSource:t}))}}),setItem("Select","CheckAllMulitFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=Dict.value[n].value,t=r instanceof Function?r(t):r;return React.createElement(SelectCheckAllMulitFormItemWrap,__assign({},e,{dataSource:t}))}}),setItem("SelectDynamic","FormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=useState([]),n=r[0],a=r[1],c=Dict.value[u].value;return useEffect(function(){c.then&&c.then(function(e){a(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){a(e)})},[deepDep(t)]),React.createElement(SelectFormItemWrap,__assign({},e,{dataSource:n}))}}),setItem("SelectDynamic","MulitFormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=useState([]),n=r[0],a=r[1],c=Dict.value[u].value;return useEffect(function(){c.then&&c.then(function(e){a(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){a(e)})},[deepDep(t)]),React.createElement(SelectMulitFormItemWrap,__assign({},e,{dataSource:n}))}}),setItem("SelectDynamic","CheckAllMulitFormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=useState([]),n=r[0],a=r[1],c=Dict.value[u].value;return useEffect(function(){c.then&&c.then(function(e){a(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){a(e)})},[deepDep(t)]),React.createElement(SelectCheckAllMulitFormItemWrap,__assign({},e,{dataSource:n}))}}),setItem("AutoSelectComplete","FormItem",function(s){return function(e){var t=e.debounceTimeout,r=void 0===t?300:t,n=__rest(e,["debounceTimeout"]),a=useForceUpdate(),c=Dict.value[s].value,u=useRef(0),t=useState(!1),e=t[0],o=t[1],t=useState([]),i=t[0],l=t[1],m=useRef();return useEffect(function(){m.current=debounce(memoized.createMemoFun(function(e){u.current+=1;var r=u.current;!e||Array.isArray(e)&&!e.length?(l(function(e){return e.filter(function(t){return Array.isArray(n.value)?!!n.value.find(function(e){return e===t.value}):t.value===n.value})}),o(!1)):c(e).then(function(t){r===u.current&&(l(function(e){var r=__spreadArray(__spreadArray([],t,!0),e.filter(function(t){return Array.isArray(n.value)?!!n.value.find(function(e){return e===t.value}):t.value===n.value}),!0);return __spreadArray([],Array.from(new Set(r.map(function(e){return e.value}))),!0).map(function(t){return r.find(function(e){return e.value===t})})}),o(!1))})}),r||300),a()},[r,n.value]),React.createElement(SelectFormItem,{selectProps:__assign({notFoundContent:e?React.createElement(Spin,{size:"small"}):null,filterOption:!1,onSearch:m.current,onClear:function(){l([]),o(!1)}},n),dataSource:i})}}),setItem("AutoSelectComplete","MulitFormItem",function(r){return function(e){var t=null!=AutoSelectCompleteFormItem?AutoSelectCompleteFormItem:AutoSelectCompleteFormItem=getItem({itemName:"AutoSelectComplete",functionName:"FormItem",dictName:r});return React.createElement(t,__assign({mode:"multiple"},e))}}),setItem("AutoSelectComplete","CheckAllMulitFormItem",function(f){return function(n){var e=useForceUpdate(),t=(n.onCheckAllChange,n.debounceTimeout),r=__rest(n,["onCheckAllChange","debounceTimeout"]),a=Dict.value[f].value,c=useRef(0),u=useState(!1),o=u[0],i=u[1],u=useState([]),l=u[0],m=u[1],s=useRef();return useEffect(function(){s.current=debounce(memoized.createMemoFun(function(e){c.current+=1;var r=c.current;!e||Array.isArray(e)&&!e.length?(m(function(e){return e.filter(function(t){return Array.isArray(n.value)?!!n.value.find(function(e){return e===t.value}):t.value===n.value})}),i(!1)):a(e).then(function(t){r===c.current&&(m(function(e){var r=__spreadArray(__spreadArray([],t,!0),e.filter(function(t){return Array.isArray(n.value)?!!n.value.find(function(e){return e===t.value}):t.value===n.value}),!0);return __spreadArray([],Array.from(new Set(r.map(function(e){return e.value}))),!0).map(function(t){return r.find(function(e){return e.value===t})})}),i(!1))})}),t||300),e()},[t,n.value]),React.createElement(CheckAllMulitSelectFormItem,{selectProps:__assign({notFoundContent:o?React.createElement(Spin,{size:"small"}):null,filterOption:!1,onSearch:s.current,onClear:function(){m([]),i(!1)}},r),dataSource:l,onCheckAllChange:function(e){r.onChange(e?l.map(function(e){return e.value}):[])}})}});
//# sourceMappingURL=Select.js.map
