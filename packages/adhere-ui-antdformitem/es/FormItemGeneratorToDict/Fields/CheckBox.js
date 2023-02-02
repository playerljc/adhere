var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,c=1,a=arguments.length;c<a;c++)for(var n in t=arguments[c])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var c={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]]);return c};import React,{useEffect,useState}from"react";import Dict from"@baifendian/adhere-util-dict";import CheckBoxCheckAllCustomFormItem from"../CheckBoxCheckAllCustomFormItem";import CheckBoxCheckAllHorizontalFormItem from"../CheckBoxCheckAllHorizontalFormItem";import CheckBoxCheckAllSelectFormItem from"../CheckBoxCheckAllSelectFormItem";import CheckBoxCheckAllVerticalFormItem from"../CheckBoxCheckAllVerticalFormItem";import CheckBoxCustomFormItem from"../CheckBoxCustomFormItem";import CheckBoxHorizontalFormItem from"../CheckBoxHorizontalFormItem";import CheckBoxSelectFormItem from"../CheckBoxSelectFormItem";import CheckBoxVerticalFormItem from"../CheckBoxVerticalFormItem";var FormItemComponents={};export default function(){var e=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("CheckBox")}),t=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("DynamicCheckBox")});return e.forEach(function(a){FormItemComponents["".concat(a,"VerticalFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=Dict.value[a].value,t=c instanceof Function?c(t):c;return React.createElement(CheckBoxVerticalFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"HorizontalFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=Dict.value[a].value,t=c instanceof Function?c(t):c;return React.createElement(CheckBoxHorizontalFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"CheckAllVerticalFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=Dict.value[a].value,t=c instanceof Function?c(t):c;return React.createElement(CheckBoxCheckAllVerticalFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"CheckAllHorizontalFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=Dict.value[a].value,t=c instanceof Function?c(t):c;return React.createElement(CheckBoxCheckAllHorizontalFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=Dict.value[a].value,t=c instanceof Function?c(t):c;return React.createElement(CheckBoxSelectFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"CheckAllSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=Dict.value[a].value,t=c instanceof Function?c(t):c;return React.createElement(CheckBoxCheckAllSelectFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"CustomFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=Dict.value[a].value,t=c instanceof Function?c(t):c;return React.createElement(CheckBoxCustomFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"CheckAllCustomFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=Dict.value[a].value,t=c instanceof Function?c(t):c;return React.createElement(CheckBoxCheckAllCustomFormItem,__assign({},e,{dataSource:t}))}}),t.forEach(function(r){FormItemComponents["".concat(r,"VerticalFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=useState([]),a=c[0],n=c[1],o=Dict.value[r].value;return useEffect(function(){o.then&&o.then(function(e){n(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){n(e)})},[t]),React.createElement(CheckBoxVerticalFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(r,"HorizontalFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=useState([]),a=c[0],n=c[1],o=Dict.value[r].value;return useEffect(function(){o.then&&o.then(function(e){n(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){n(e)})},[t]),React.createElement(CheckBoxHorizontalFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(r,"CheckAllVerticalFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=useState([]),a=c[0],n=c[1],o=Dict.value[r].value;return useEffect(function(){o.then&&o.then(function(e){n(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){n(e)})},[t]),React.createElement(CheckBoxCheckAllVerticalFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(r,"CheckAllHorizontalFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=useState([]),a=c[0],n=c[1],o=Dict.value[r].value;return useEffect(function(){o.then&&o.then(function(e){n(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){n(e)})},[t]),React.createElement(CheckBoxCheckAllHorizontalFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(r,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=useState([]),a=c[0],n=c[1],o=Dict.value[r].value;return useEffect(function(){o.then&&o.then(function(e){n(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){n(e)})},[t]),React.createElement(CheckBoxSelectFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(r,"CheckAllSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=useState([]),a=c[0],n=c[1],o=Dict.value[r].value;return useEffect(function(){o.then&&o.then(function(e){n(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){n(e)})},[t]),React.createElement(CheckBoxCheckAllSelectFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(r,"CustomFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=useState([]),a=c[0],n=c[1],o=Dict.value[r].value;return useEffect(function(){o.then&&o.then(function(e){n(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){n(e)})},[t]),React.createElement(CheckBoxCustomFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(r,"CheckAllCustomFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),c=useState([]),a=c[0],n=c[1],o=Dict.value[r].value;return useEffect(function(){o.then&&o.then(function(e){n(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){n(e)})},[t]),React.createElement(CheckBoxCheckAllCustomFormItem,__assign({},e,{dataSource:a}))}}),FormItemComponents}
//# sourceMappingURL=CheckBox.js.map
