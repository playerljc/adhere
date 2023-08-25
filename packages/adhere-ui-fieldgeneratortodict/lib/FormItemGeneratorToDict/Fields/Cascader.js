"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&("get"in r?t.__esModule:!r.writable&&!r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){e[n=void 0===n?a:n]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=function(e,t){var a={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),react_1=__importStar(require("react")),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),CascaderFormItem_1=__importDefault(require("../CascaderFormItem")),CascaderLeafFormItem_1=__importDefault(require("../CascaderLeafFormItem")),CascaderLeafMultiFormItem_1=__importDefault(require("../CascaderLeafMultiFormItem")),CascaderMultiFormItem_1=__importDefault(require("../CascaderMultiFormItem")),ItemFactory_1=require("../ItemFactory"),hooks_1=require("../hooks"),util_1=require("../util");(0,ItemFactory_1.setItem)("Cascader","FormItem",function(s){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=adhere_util_dict_1.default.value[s].value,r=(0,react_1.useState)([]),u=r[0],o=r[1];function c(){n instanceof Function?o(n(t)):o(n)}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(u)},[u]),react_1.default.createElement(CascaderFormItem_1.default,__assign({},e,{options:u}))}}),(0,ItemFactory_1.setItem)("Cascader","LeafFormItem",function(s){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=adhere_util_dict_1.default.value[s].value,r=(0,react_1.useState)([]),u=r[0],o=r[1];function c(){n instanceof Function?o(n(t)):o(n)}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(u)},[u]),react_1.default.createElement(CascaderLeafFormItem_1.default,__assign({},e,{dataSource:u}))}}),(0,ItemFactory_1.setItem)("Cascader","MultiFormItem",function(s){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=adhere_util_dict_1.default.value[s].value,r=(0,react_1.useState)([]),u=r[0],o=r[1];function c(){n instanceof Function?o(n(t)):o(n)}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(u)},[u]),react_1.default.createElement(CascaderMultiFormItem_1.default,__assign({},e,{options:u}))}}),(0,ItemFactory_1.setItem)("Cascader","LeafMultiFormItem",function(s){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=adhere_util_dict_1.default.value[s].value,r=(0,react_1.useState)([]),u=r[0],o=r[1];function c(){n instanceof Function?o(n(t)):o(n)}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(u)},[u]),react_1.default.createElement(CascaderLeafMultiFormItem_1.default,__assign({},e,{dataSource:u}))}}),(0,ItemFactory_1.setItem)("CascaderDynamic","FormItem",function(s){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=(0,react_1.useState)([]),r=n[0],u=n[1],o=adhere_util_dict_1.default.value[s].value;function c(){o instanceof Function?o(t).then(function(e){u(e)}):o.then&&o.then(function(e){u(e)})}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(r)},[r]),react_1.default.createElement(CascaderFormItem_1.default,__assign({},e,{options:r}))}}),(0,ItemFactory_1.setItem)("CascaderDynamic","LeafFormItem",function(s){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=(0,react_1.useState)([]),r=n[0],u=n[1],o=adhere_util_dict_1.default.value[s].value;function c(){o instanceof Function?o(t).then(function(e){u(e)}):o.then&&o.then(function(e){u(e)})}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(r)},[r]),react_1.default.createElement(CascaderLeafFormItem_1.default,__assign({},e,{dataSource:r}))}}),(0,ItemFactory_1.setItem)("CascaderDynamic","MultiFormItem",function(s){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=(0,react_1.useState)([]),r=n[0],u=n[1],o=adhere_util_dict_1.default.value[s].value;function c(){o instanceof Function?o(t).then(function(e){u(e)}):o.then&&o.then(function(e){u(e)})}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(r)},[r]),react_1.default.createElement(CascaderMultiFormItem_1.default,__assign({},e,{options:r}))}}),(0,ItemFactory_1.setItem)("CascaderDynamic","LeafMultiFormItem",function(s){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),n=(0,react_1.useState)([]),r=n[0],u=n[1],o=adhere_util_dict_1.default.value[s].value;function c(){o instanceof Function?o(t).then(function(e){u(e)}):o.then&&o.then(function(e){u(e)})}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(r)},[r]),react_1.default.createElement(CascaderLeafMultiFormItem_1.default,__assign({},e,{dataSource:r}))}}),(0,ItemFactory_1.setItem)("CascaderAsync","FormItem",function(c){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,n=e.fetchBranch,r=e.defaultId,u=__rest(e,["cascadeParams","onDataSourceChange","fetchBranch","defaultId"]),e=(adhere_util_dict_1.default.value[c].refresh(),(adhere_util_dict_1.default.handlers[c].isUseMemo=!1,hooks_1.useAsyncCascader)(c,{cascadeParams:t,onDataSourceChange:a,fetchBranch:n,defaultId:r,value:u.value,treeDataSimpleMode:u.treeDataSimpleMode})),t=e.treeData,a=e.onLoadData,o=e.onChange;return(0,ahooks_1.useUnmount)(function(){adhere_util_dict_1.default.value[c].refresh(),adhere_util_dict_1.default.handlers[c].isUseMemo=!0}),react_1.default.createElement(CascaderFormItem_1.default,__assign({loadData:a,options:t},u,{onChange:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(u.onChange,e)}}))}}),(0,ItemFactory_1.setItem)("CascaderAsync","MultiFormItem",function(c){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,n=e.fetchBranch,r=e.defaultId,u=__rest(e,["cascadeParams","onDataSourceChange","fetchBranch","defaultId"]),e=(adhere_util_dict_1.default.value[c].refresh(),(adhere_util_dict_1.default.handlers[c].isUseMemo=!1,hooks_1.useAsyncCascader)(c,{cascadeParams:t,onDataSourceChange:a,fetchBranch:n,defaultId:r,value:u.value,treeDataSimpleMode:u.treeDataSimpleMode})),t=e.treeData,a=e.onLoadData,o=e.onChange;return(0,ahooks_1.useUnmount)(function(){adhere_util_dict_1.default.value[c].refresh(),adhere_util_dict_1.default.handlers[c].isUseMemo=!0}),react_1.default.createElement(CascaderMultiFormItem_1.default,__assign({loadData:a,options:t},u,{onChange:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(u.onChange,e)}}))}});
//# sourceMappingURL=Cascader.js.map
