var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var c in t=arguments[a])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var a={};for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]]);return a};import React,{useEffect,useState}from"react";import Dict from"@baifendian/adhere-util-dict";import{setItem}from"../ItemFactory";import TagCheckAllHorizontalFormItem from"../TagCheckAllHorizontalFormItem";import TagCheckAllSelectFormItem from"../TagCheckAllSelectFormItem";import TagCheckAllVerticalFormItem from"../TagCheckAllVerticalFormItem";import TagHorizontalFormItem from"../TagHorizontalFormItem";import TagMultiSelectFormItem from"../TagMultiSelectFormItem";import TagSelectFormItem from"../TagSelectFormItem";import TagVerticalFormItem from"../TagVerticalFormItem";import{deepDep}from"../util";setItem("Tag","VerticalFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=Dict.value[n].value,t=a instanceof Function?a(t):a;return React.createElement(TagVerticalFormItem,__assign({},e,{dataSource:t}))}}),setItem("Tag","HorizontalFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=Dict.value[n].value,t=a instanceof Function?a(t):a;return React.createElement(TagHorizontalFormItem,__assign({},e,{dataSource:t}))}}),setItem("Tag","CheckAllVerticalFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=Dict.value[n].value,t=a instanceof Function?a(t):a;return React.createElement(TagCheckAllVerticalFormItem,__assign({},e,{dataSource:t}))}}),setItem("Tag","CheckAllHorizontalFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=Dict.value[n].value,t=a instanceof Function?a(t):a;return React.createElement(TagCheckAllHorizontalFormItem,__assign({},e,{dataSource:t}))}}),setItem("Tag","SelectFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=Dict.value[n].value,t=a instanceof Function?a(t):a;return React.createElement(TagSelectFormItem,__assign({},e,{dataSource:t}))}}),setItem("Tag","MultiSelectFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=Dict.value[n].value,t=a instanceof Function?a(t):a;return React.createElement(TagMultiSelectFormItem,__assign({},e,{dataSource:t}))}}),setItem("Tag","CheckAllSelectFormItem",function(n){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=Dict.value[n].value,t=a instanceof Function?a(t):a;return React.createElement(TagCheckAllSelectFormItem,__assign({},e,{dataSource:t}))}}),setItem("TagDynamic","VerticalFormItem",function(o){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=useState([]),n=a[0],c=a[1],r=Dict.value[o].value;return useEffect(function(){r.then&&r.then(function(e){c(e)})},[]),useEffect(function(){r instanceof Function&&r(t).then(function(e){c(e)})},[deepDep(t)]),React.createElement(TagVerticalFormItem,__assign({},e,{dataSource:n}))}}),setItem("TagDynamic","HorizontalFormItem",function(o){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=useState([]),n=a[0],c=a[1],r=Dict.value[o].value;return useEffect(function(){r.then&&r.then(function(e){c(e)})},[]),useEffect(function(){r instanceof Function&&r(t).then(function(e){c(e)})},[deepDep(t)]),React.createElement(TagHorizontalFormItem,__assign({},e,{dataSource:n}))}}),setItem("TagDynamic","CheckAllVerticalFormItem",function(o){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=useState([]),n=a[0],c=a[1],r=Dict.value[o].value;return useEffect(function(){r.then&&r.then(function(e){c(e)})},[]),useEffect(function(){r instanceof Function&&r(t).then(function(e){c(e)})},[deepDep(t)]),React.createElement(TagCheckAllVerticalFormItem,__assign({},e,{dataSource:n}))}}),setItem("TagDynamic","CheckAllHorizontalFormItem",function(o){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=useState([]),n=a[0],c=a[1],r=Dict.value[o].value;return useEffect(function(){r.then&&r.then(function(e){c(e)})},[]),useEffect(function(){r instanceof Function&&r(t).then(function(e){c(e)})},[deepDep(t)]),React.createElement(TagCheckAllHorizontalFormItem,__assign({},e,{dataSource:n}))}}),setItem("TagDynamic","SelectFormItem",function(o){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=useState([]),n=a[0],c=a[1],r=Dict.value[o].value;return useEffect(function(){r.then&&r.then(function(e){c(e)})},[]),useEffect(function(){r instanceof Function&&r(t).then(function(e){c(e)})},[deepDep(t)]),React.createElement(TagSelectFormItem,__assign({},e,{dataSource:n}))}}),setItem("TagDynamic","CheckAllSelectFormItem",function(o){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=useState([]),n=a[0],c=a[1],r=Dict.value[o].value;return useEffect(function(){r.then&&r.then(function(e){c(e)})},[]),useEffect(function(){r instanceof Function&&r(t).then(function(e){c(e)})},[deepDep(t)]),React.createElement(TagCheckAllSelectFormItem,__assign({},e,{dataSource:n}))}});
//# sourceMappingURL=Tag.js.map
