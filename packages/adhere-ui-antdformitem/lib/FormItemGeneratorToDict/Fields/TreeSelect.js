var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};import React,{useEffect,useState}from"react";import Dict from"@baifendian/adhere-util-dict";import TreeMulitSelectFormItem from"../TreeMulitSelectFormItem";import TreeSelectFormItem from"../TreeSelectFormItem";import TreeSelectLeafFormItem from"../TreeSelectLeafFormItem";import TreeSelectLeafMulitFormItem from"../TreeSelectLeafMulitFormItem";var FormItemComponents={};export default function(){var e=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("Tree")}),t=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("DynamicTree")});return FormItemComponents.TreeSelectFormItem=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return React.createElement(TreeSelectFormItem,__assign({},e,{treeData:t}))},FormItemComponents.TreeSelectMulitFormItem=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return React.createElement(TreeMulitSelectFormItem,__assign({},e,{treeData:t}))},e.forEach(function(a){FormItemComponents["".concat(a,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n,n=FormItemComponents.TreeSelectFormItem;return React.createElement(n,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"LeafFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n;return React.createElement(TreeSelectLeafFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"MulitFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n,n=FormItemComponents.TreeSelectMulitFormItem;return React.createElement(n,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"LeafMulitFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n;return React.createElement(TreeSelectLeafMulitFormItem,__assign({},e,{dataSource:t}))}}),t.forEach(function(o){FormItemComponents["".concat(o,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],c=Dict.value[o].value,n=(useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),FormItemComponents.TreeSelectFormItem);return React.createElement(n,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(o,"LeafFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],c=Dict.value[o].value;return useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),React.createElement(TreeSelectLeafFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(o,"MulitFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],c=Dict.value[o].value,n=(useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),FormItemComponents.TreeSelectMulitFormItem);return React.createElement(n,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(o,"LeafMulitFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],c=Dict.value[o].value;return useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),React.createElement(TreeSelectLeafMulitFormItem,__assign({},e,{dataSource:a}))}}),FormItemComponents}
//# sourceMappingURL=TreeSelect.js.map
