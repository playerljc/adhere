var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var a={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};import{useMount,useUpdateEffect}from"ahooks";import React,{useState}from"react";import Dict from"@baifendian/adhere-util-dict";import CascaderFormItem from"../CascaderFormItem";import CascaderLeafFormItem from"../CascaderLeafFormItem";import CascaderLeafMulitFormItem from"../CascaderLeafMulitFormItem";import CascaderMulitFormItem from"../CascaderMulitFormItem";import{setItem}from"../ItemFactory";import{deepDep}from"../util";setItem("Cascader","FormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=Dict.value[n].value,t=a instanceof Function?a(t):a;return React.createElement(CascaderFormItem,__assign({},e,{options:t}))}}),setItem("Cascader","LeafFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=Dict.value[n].value,t=a instanceof Function?a(t):a;return React.createElement(CascaderLeafFormItem,__assign({},e,{dataSource:t}))}}),setItem("Cascader","MulitFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=Dict.value[n].value,t=a instanceof Function?a(t):a;return React.createElement(CascaderMulitFormItem,__assign({},e,{options:t}))}}),setItem("Cascader","LeafMulitFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=Dict.value[n].value,t=a instanceof Function?a(t):a;return React.createElement(CascaderLeafMulitFormItem,__assign({},e,{dataSource:t}))}}),setItem("CascaderDynamic","FormItem",function(s){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=useState([]),n=a[0],r=a[1],c=Dict.value[s].value;return useMount(function(){c.then&&c.then(function(e){r(e)})}),useUpdateEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[deepDep(t)]),React.createElement(CascaderFormItem,__assign({},e,{options:n}))}}),setItem("CascaderDynamic","LeafFormItem",function(s){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=useState([]),n=a[0],r=a[1],c=Dict.value[s].value;return useMount(function(){c.then&&c.then(function(e){r(e)})}),useUpdateEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[deepDep(t)]),React.createElement(CascaderLeafFormItem,__assign({},e,{dataSource:n}))}}),setItem("CascaderDynamic","MulitFormItem",function(s){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=useState([]),n=a[0],r=a[1],c=Dict.value[s].value;return useMount(function(){c.then&&c.then(function(e){r(e)})}),useUpdateEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[deepDep(t)]),React.createElement(CascaderMulitFormItem,__assign({},e,{options:n}))}}),setItem("CascaderDynamic","LeafMulitFormItem",function(s){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=useState([]),n=a[0],r=a[1],c=Dict.value[s].value;return useMount(function(){c.then&&c.then(function(e){r(e)})}),useUpdateEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[deepDep(t)]),React.createElement(CascaderLeafMulitFormItem,__assign({},e,{dataSource:n}))}});
//# sourceMappingURL=Cascader.js.map
