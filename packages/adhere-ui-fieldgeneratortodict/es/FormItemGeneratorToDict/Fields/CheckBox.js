var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var c in t=arguments[a])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var a={};for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]]);return a};import{useMount,useUpdateEffect}from"ahooks";import React,{useState}from"react";import Dict from"@baifendian/adhere-util-dict";import CheckBoxCheckAllCustomFormItem from"../CheckBoxCheckAllCustomFormItem";import CheckBoxCheckAllHorizontalFormItem from"../CheckBoxCheckAllHorizontalFormItem";import CheckBoxCheckAllSelectFormItem from"../CheckBoxCheckAllSelectFormItem";import CheckBoxCheckAllVerticalFormItem from"../CheckBoxCheckAllVerticalFormItem";import CheckBoxCustomFormItem from"../CheckBoxCustomFormItem";import CheckBoxHorizontalFormItem from"../CheckBoxHorizontalFormItem";import CheckBoxSelectFormItem from"../CheckBoxSelectFormItem";import CheckBoxVerticalFormItem from"../CheckBoxVerticalFormItem";import{setItem}from"../ItemFactory";import{deepDep}from"../util";setItem("CheckBox","VerticalFormItem",function(o){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[o].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxVerticalFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBox","HorizontalFormItem",function(o){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[o].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxHorizontalFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBox","CheckAllVerticalFormItem",function(o){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[o].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxCheckAllVerticalFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBox","CheckAllHorizontalFormItem",function(o){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[o].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxCheckAllHorizontalFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBox","SelectFormItem",function(o){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[o].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxSelectFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBox","CheckAllSelectFormItem",function(o){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[o].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxCheckAllSelectFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBox","CustomFormItem",function(o){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[o].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxCustomFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBox","CheckAllCustomFormItem",function(o){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=Dict.value[o].value,c=n instanceof Function?n(t):n;return useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxCheckAllCustomFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBoxDynamic","VerticalFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],o=n[1],r=Dict.value[u].value;return useMount(function(){r.then&&r.then(function(e){o(e)})}),useUpdateEffect(function(){r instanceof Function&&r(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxVerticalFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBoxDynamic","HorizontalFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],o=n[1],r=Dict.value[u].value;return useMount(function(){r.then&&r.then(function(e){o(e)})}),useUpdateEffect(function(){r instanceof Function&&r(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxHorizontalFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBoxDynamic","CheckAllVerticalFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],o=n[1],r=Dict.value[u].value;return useMount(function(){r.then&&r.then(function(e){o(e)})}),useUpdateEffect(function(){r instanceof Function&&r(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxCheckAllVerticalFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBoxDynamic","CheckAllHorizontalFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],o=n[1],r=Dict.value[u].value;return useMount(function(){r.then&&r.then(function(e){o(e)})}),useUpdateEffect(function(){r instanceof Function&&r(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxCheckAllHorizontalFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBoxDynamic","SelectFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],o=n[1],r=Dict.value[u].value;return useMount(function(){r.then&&r.then(function(e){o(e)})}),useUpdateEffect(function(){r instanceof Function&&r(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxSelectFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBoxDynamic","CheckAllSelectFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],o=n[1],r=Dict.value[u].value;return useMount(function(){r.then&&r.then(function(e){o(e)})}),useUpdateEffect(function(){r instanceof Function&&r(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxCheckAllSelectFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBoxDynamic","CustomFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],o=n[1],r=Dict.value[u].value;return useMount(function(){r.then&&r.then(function(e){o(e)})}),useUpdateEffect(function(){r instanceof Function&&r(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxCustomFormItem,__assign({},e,{dataSource:c}))}}),setItem("CheckBoxDynamic","CheckAllCustomFormItem",function(u){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=useState([]),c=n[0],o=n[1],r=Dict.value[u].value;return useMount(function(){r.then&&r.then(function(e){o(e)})}),useUpdateEffect(function(){r instanceof Function&&r(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),React.createElement(CheckBoxCheckAllCustomFormItem,__assign({},e,{dataSource:c}))}});
//# sourceMappingURL=CheckBox.js.map
