var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var c in t=arguments[a])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var a={};for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]]);return a};import{useMount,useUpdateEffect}from"ahooks";import React,{useState}from"react";import Dict from"@baifendian/adhere-util-dict";import{setItem}from"../ItemFactory";import TagCheckAllHorizontalFormItem from"../TagCheckAllHorizontalFormItem";import TagCheckAllSelectFormItem from"../TagCheckAllSelectFormItem";import TagCheckAllVerticalFormItem from"../TagCheckAllVerticalFormItem";import TagHorizontalFormItem from"../TagHorizontalFormItem";import TagMultiSelectFormItem from"../TagMultiSelectFormItem";import TagSelectFormItem from"../TagSelectFormItem";import TagVerticalFormItem from"../TagVerticalFormItem";import{deepDep}from"../util";setItem("Tag","VerticalFormItem",function(r){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[r].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagVerticalFormItem,__assign({},e,{dataSource:c}))}}),setItem("Tag","HorizontalFormItem",function(r){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[r].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagHorizontalFormItem,__assign({},e,{dataSource:c}))}}),setItem("Tag","CheckAllVerticalFormItem",function(r){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[r].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagCheckAllVerticalFormItem,__assign({},e,{dataSource:c}))}}),setItem("Tag","CheckAllHorizontalFormItem",function(r){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[r].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagCheckAllHorizontalFormItem,__assign({},e,{dataSource:c}))}}),setItem("Tag","SelectFormItem",function(r){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[r].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagSelectFormItem,__assign({},e,{dataSource:c}))}}),setItem("Tag","MultiSelectFormItem",function(r){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[r].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagMultiSelectFormItem,__assign({},e,{dataSource:c}))}}),setItem("Tag","CheckAllSelectFormItem",function(r){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[r].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagCheckAllSelectFormItem,__assign({},e,{dataSource:c}))}}),setItem("TagDynamic","VerticalFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],r=n[1],o=Dict.value[u].value;return useMount(function(){o.then&&o.then(function(e){r(e)})}),useUpdateEffect(function(){o instanceof Function&&o(t).then(function(e){r(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagVerticalFormItem,__assign({},e,{dataSource:c}))}}),setItem("TagDynamic","HorizontalFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],r=n[1],o=Dict.value[u].value;return useMount(function(){o.then&&o.then(function(e){r(e)})}),useUpdateEffect(function(){o instanceof Function&&o(t).then(function(e){r(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagHorizontalFormItem,__assign({},e,{dataSource:c}))}}),setItem("TagDynamic","CheckAllVerticalFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],r=n[1],o=Dict.value[u].value;return useMount(function(){o.then&&o.then(function(e){r(e)})}),useUpdateEffect(function(){o instanceof Function&&o(t).then(function(e){r(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagCheckAllVerticalFormItem,__assign({},e,{dataSource:c}))}}),setItem("TagDynamic","CheckAllHorizontalFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],r=n[1],o=Dict.value[u].value;return useMount(function(){o.then&&o.then(function(e){r(e)})}),useUpdateEffect(function(){o instanceof Function&&o(t).then(function(e){r(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagCheckAllHorizontalFormItem,__assign({},e,{dataSource:c}))}}),setItem("TagDynamic","SelectFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],r=n[1],o=Dict.value[u].value;return useMount(function(){o.then&&o.then(function(e){r(e)})}),useUpdateEffect(function(){o instanceof Function&&o(t).then(function(e){r(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagSelectFormItem,__assign({},e,{dataSource:c}))}}),setItem("TagDynamic","CheckAllSelectFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],r=n[1],o=Dict.value[u].value;return useMount(function(){o.then&&o.then(function(e){r(e)})}),useUpdateEffect(function(){o instanceof Function&&o(t).then(function(e){r(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(TagCheckAllSelectFormItem,__assign({},e,{dataSource:c}))}});
//# sourceMappingURL=Tag.js.map
