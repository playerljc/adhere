"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,n){void 0===n&&(n=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,o)}:function(e,t,a,n){e[n=void 0===n?a:n]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=function(e,t){var a={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]]);return a},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),react_1=__importStar(require("react")),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),ItemFactory_1=require("../ItemFactory"),TagCheckAllHorizontalFormItem_1=__importDefault(require("../TagCheckAllHorizontalFormItem")),TagCheckAllSelectFormItem_1=__importDefault(require("../TagCheckAllSelectFormItem")),TagCheckAllVerticalFormItem_1=__importDefault(require("../TagCheckAllVerticalFormItem")),TagHorizontalFormItem_1=__importDefault(require("../TagHorizontalFormItem")),TagMultiSelectFormItem_1=__importDefault(require("../TagMultiSelectFormItem")),TagSelectFormItem_1=__importDefault(require("../TagSelectFormItem")),TagVerticalFormItem_1=__importDefault(require("../TagVerticalFormItem")),util_1=require("../util");(0,ItemFactory_1.setItem)("Tag","VerticalFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=adhere_util_dict_1.default.value[i].value,o=(0,react_1.useState)([]),u=o[0],c=o[1];function r(){n instanceof Function?c(n(t)):c(n)}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(u)},[u]),react_1.default.createElement(TagVerticalFormItem_1.default,__assign({},e,{dataSource:u}))}}),(0,ItemFactory_1.setItem)("Tag","HorizontalFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=adhere_util_dict_1.default.value[i].value,o=(0,react_1.useState)([]),u=o[0],c=o[1];function r(){n instanceof Function?c(n(t)):c(n)}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(u)},[u]),react_1.default.createElement(TagHorizontalFormItem_1.default,__assign({},e,{dataSource:u}))}}),(0,ItemFactory_1.setItem)("Tag","CheckAllVerticalFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=adhere_util_dict_1.default.value[i].value,o=(0,react_1.useState)([]),u=o[0],c=o[1];function r(){n instanceof Function?c(n(t)):c(n)}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(u)},[u]),react_1.default.createElement(TagCheckAllVerticalFormItem_1.default,__assign({},e,{dataSource:u}))}}),(0,ItemFactory_1.setItem)("Tag","CheckAllHorizontalFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=adhere_util_dict_1.default.value[i].value,o=(0,react_1.useState)([]),u=o[0],c=o[1];function r(){n instanceof Function?c(n(t)):c(n)}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(u)},[u]),react_1.default.createElement(TagCheckAllHorizontalFormItem_1.default,__assign({},e,{dataSource:u}))}}),(0,ItemFactory_1.setItem)("Tag","SelectFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=adhere_util_dict_1.default.value[i].value,o=(0,react_1.useState)([]),u=o[0],c=o[1];function r(){n instanceof Function?c(n(t)):c(n)}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(u)},[u]),react_1.default.createElement(TagSelectFormItem_1.default,__assign({},e,{dataSource:u}))}}),(0,ItemFactory_1.setItem)("Tag","MultiSelectFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=adhere_util_dict_1.default.value[i].value,o=(0,react_1.useState)([]),u=o[0],c=o[1];function r(){n instanceof Function?c(n(t)):c(n)}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(u)},[u]),react_1.default.createElement(TagMultiSelectFormItem_1.default,__assign({},e,{dataSource:u}))}}),(0,ItemFactory_1.setItem)("Tag","CheckAllSelectFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=adhere_util_dict_1.default.value[i].value,o=(0,react_1.useState)([]),u=o[0],c=o[1];function r(){n instanceof Function?c(n(t)):c(n)}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(u)},[u]),react_1.default.createElement(TagCheckAllSelectFormItem_1.default,__assign({},e,{dataSource:u}))}}),(0,ItemFactory_1.setItem)("TagDynamic","VerticalFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=(0,react_1.useState)([]),o=n[0],u=n[1],c=adhere_util_dict_1.default.value[i].value;function r(){c instanceof Function?c(t).then(function(e){u(e)}):c.then&&c.then(function(e){u(e)})}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(o)},[o]),react_1.default.createElement(TagVerticalFormItem_1.default,__assign({},e,{dataSource:o}))}}),(0,ItemFactory_1.setItem)("TagDynamic","HorizontalFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=(0,react_1.useState)([]),o=n[0],u=n[1],c=adhere_util_dict_1.default.value[i].value;function r(){c instanceof Function?c(t).then(function(e){u(e)}):c.then&&c.then(function(e){u(e)})}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(o)},[o]),react_1.default.createElement(TagHorizontalFormItem_1.default,__assign({},e,{dataSource:o}))}}),(0,ItemFactory_1.setItem)("TagDynamic","CheckAllVerticalFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=(0,react_1.useState)([]),o=n[0],u=n[1],c=adhere_util_dict_1.default.value[i].value;function r(){c instanceof Function?c(t).then(function(e){u(e)}):c.then&&c.then(function(e){u(e)})}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(o)},[o]),react_1.default.createElement(TagCheckAllVerticalFormItem_1.default,__assign({},e,{dataSource:o}))}}),(0,ItemFactory_1.setItem)("TagDynamic","CheckAllHorizontalFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=(0,react_1.useState)([]),o=n[0],u=n[1],c=adhere_util_dict_1.default.value[i].value;function r(){c instanceof Function?c(t).then(function(e){u(e)}):c.then&&c.then(function(e){u(e)})}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(o)},[o]),react_1.default.createElement(TagCheckAllHorizontalFormItem_1.default,__assign({},e,{dataSource:o}))}}),(0,ItemFactory_1.setItem)("TagDynamic","SelectFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=(0,react_1.useState)([]),o=n[0],u=n[1],c=adhere_util_dict_1.default.value[i].value;function r(){c instanceof Function?c(t).then(function(e){u(e)}):c.then&&c.then(function(e){u(e)})}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(o)},[o]),react_1.default.createElement(TagSelectFormItem_1.default,__assign({},e,{dataSource:o}))}}),(0,ItemFactory_1.setItem)("TagDynamic","CheckAllSelectFormItem",function(i){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=(0,react_1.useState)([]),o=n[0],u=n[1],c=adhere_util_dict_1.default.value[i].value;function r(){c instanceof Function?c(t).then(function(e){u(e)}):c.then&&c.then(function(e){u(e)})}return(0,ahooks_1.useMount)(function(){r()}),(0,ahooks_1.useUpdateEffect)(function(){r()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(o)},[o]),react_1.default.createElement(TagCheckAllSelectFormItem_1.default,__assign({},e,{dataSource:o}))}});
//# sourceMappingURL=Tag.js.map
