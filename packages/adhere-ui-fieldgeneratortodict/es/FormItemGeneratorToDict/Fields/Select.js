import _Spin from"@baifendian/adhere-ui-anthoc/es/spin";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,u=t.length;a<u;a++)!r&&a in t||((r=r||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};import{useMount,useUpdateEffect}from"ahooks";import debounce from"lodash.debounce";import React,{useEffect,useRef,useState}from"react";import Hooks from"@baifendian/adhere-ui-hooks";import Dict from"@baifendian/adhere-util-dict";import WatchMemoized from"@baifendian/adhere-util-watchmemoized";import CheckAllMultiSelectFormItem from"../CheckAllMultiSelectFormItem";import{getItem,setItem}from"../ItemFactory";import MultiSelectFormItem from"../MultiSelectFormItem";import SelectFormItem from"../SelectFormItem";import{deepDep}from"../util";var AutoSelectCompleteFormItem,memoized=WatchMemoized.memoized,useForceUpdate=Hooks.useForceUpdate,SelectFormItemWrap=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return React.createElement(SelectFormItem,{selectProps:__assign({},e),dataSource:t})},SelectMultiFormItemWrap=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return React.createElement(MultiSelectFormItem,{selectProps:__assign({},e),dataSource:t})},SelectCheckAllMultiFormItemWrap=function(e){var t=e.dataSource,n=(e.onCheckAllChange,__rest(e,["dataSource","onCheckAllChange"]));return React.createElement(CheckAllMultiSelectFormItem,{selectProps:__assign({},n),dataSource:t,onCheckAllChange:function(e){n.onChange(e?t.map(function(e){return e.value}):[])}})};setItem("Select","FormItem",function(i){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=Dict.value[i].value,a=useState([]),u=a[0],c=a[1];function o(){r instanceof Function?c(r(t)):c(r)}return useMount(function(){o()}),useUpdateEffect(function(){o()},[deepDep(t)]),useUpdateEffect(function(){null!=n&&n(u)},[u]),React.createElement(SelectFormItemWrap,__assign({},e,{dataSource:u}))}}),setItem("Select","MultiFormItem",function(i){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=Dict.value[i].value,a=useState([]),u=a[0],c=a[1];function o(){r instanceof Function?c(r(t)):c(r)}return useMount(function(){o()}),useUpdateEffect(function(){o()},[deepDep(t)]),useUpdateEffect(function(){null!=n&&n(u)},[u]),React.createElement(SelectMultiFormItemWrap,__assign({},e,{dataSource:u}))}}),setItem("Select","CheckAllMultiFormItem",function(i){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=Dict.value[i].value,a=useState([]),u=a[0],c=a[1];function o(){r instanceof Function?c(r(t)):c(r)}return useMount(function(){o()}),useUpdateEffect(function(){o()},[deepDep(t)]),useUpdateEffect(function(){null!=n&&n(u)},[u]),React.createElement(SelectCheckAllMultiFormItemWrap,__assign({},e,{dataSource:u}))}}),setItem("SelectDynamic","FormItem",function(i){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=useState([]),a=r[0],u=r[1],c=Dict.value[i].value;function o(){c instanceof Function?c(t).then(function(e){u(e)}):c.then&&c.then(function(e){u(e)})}return useMount(function(){o()}),useUpdateEffect(function(){o()},[deepDep(t)]),useUpdateEffect(function(){null!=n&&n(a)},[a]),React.createElement(SelectFormItemWrap,__assign({},e,{dataSource:a}))}}),setItem("SelectDynamic","MultiFormItem",function(i){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=useState([]),a=r[0],u=r[1],c=Dict.value[i].value;function o(){c instanceof Function?c(t).then(function(e){u(e)}):c.then&&c.then(function(e){u(e)})}return useMount(function(){o()}),useUpdateEffect(function(){o()},[deepDep(t)]),useUpdateEffect(function(){null!=n&&n(a)},[a]),React.createElement(SelectMultiFormItemWrap,__assign({},e,{dataSource:a}))}}),setItem("SelectDynamic","CheckAllMultiFormItem",function(i){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=useState([]),a=r[0],u=r[1],c=Dict.value[i].value;function o(){c instanceof Function?c(t).then(function(e){u(e)}):c.then&&c.then(function(e){u(e)})}return useMount(function(){o()}),useUpdateEffect(function(){o()},[deepDep(t)]),useUpdateEffect(function(){null!=n&&n(a)},[a]),React.createElement(SelectCheckAllMultiFormItemWrap,__assign({},e,{dataSource:a}))}}),setItem("AutoSelectComplete","FormItem",function(s){return function(e){var t=e.debounceTimeout,n=void 0===t?300:t,r=__rest(e,["debounceTimeout"]),a=useForceUpdate(),u=Dict.value[s].value,c=useRef(0),t=useState(!1),e=t[0],o=t[1],t=useState([]),i=t[0],l=t[1],m=useRef();return useEffect(function(){m.current=debounce(memoized.createMemoFun(function(e){c.current+=1;var n=c.current;!e||Array.isArray(e)&&!e.length?(l(function(e){return e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value})}),o(!1)):u(e).then(function(t){n===c.current&&(l(function(e){var n=__spreadArray(__spreadArray([],t,!0),e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value}),!0);return __spreadArray([],Array.from(new Set(n.map(function(e){return e.value}))),!0).map(function(t){return n.find(function(e){return e.value===t})})}),o(!1))})}),n||300),a()},[n,r.value]),React.createElement(SelectFormItem,{selectProps:__assign({notFoundContent:e&&React.createElement(_Spin,{size:"small"}),filterOption:!1,onSearch:m.current,onClear:function(){l([]),o(!1)}},r),dataSource:i})}}),setItem("AutoSelectComplete","MultiFormItem",function(e,n){return function(e){var t=null!=AutoSelectCompleteFormItem?AutoSelectCompleteFormItem:AutoSelectCompleteFormItem=getItem({itemName:"AutoSelectComplete",functionName:"FormItem",dictName:n});return React.createElement(t,__assign({mode:"multiple"},e))}}),setItem("AutoSelectComplete","CheckAllMultiFormItem",function(f){return function(r){var e=useForceUpdate(),t=(r.onCheckAllChange,r.debounceTimeout),n=__rest(r,["onCheckAllChange","debounceTimeout"]),a=Dict.value[f].value,u=useRef(0),c=useState(!1),o=c[0],i=c[1],c=useState([]),l=c[0],m=c[1],s=useRef();return useEffect(function(){s.current=debounce(memoized.createMemoFun(function(e){u.current+=1;var n=u.current;!e||Array.isArray(e)&&!e.length?(m(function(e){return e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value})}),i(!1)):a(e).then(function(t){n===u.current&&(m(function(e){var n=__spreadArray(__spreadArray([],t,!0),e.filter(function(t){return Array.isArray(r.value)?!!r.value.find(function(e){return e===t.value}):t.value===r.value}),!0);return __spreadArray([],Array.from(new Set(n.map(function(e){return e.value}))),!0).map(function(t){return n.find(function(e){return e.value===t})})}),i(!1))})}),t||300),e()},[t,r.value]),React.createElement(CheckAllMultiSelectFormItem,{selectProps:__assign({notFoundContent:o?React.createElement(_Spin,{size:"small"}):null,filterOption:!1,onSearch:s.current,onClear:function(){m([]),i(!1)}},n),dataSource:l,onCheckAllChange:function(e){n.onChange(e?l.map(function(e){return e.value}):[])}})}});
//# sourceMappingURL=Select.js.map
