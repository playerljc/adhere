"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=function(e,t){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),react_1=__importStar(require("react")),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),ItemFactory_1=require("../ItemFactory"),TreeMultiSelectFormItem_1=__importDefault(require("../TreeMultiSelectFormItem")),TreeSelectFormItem_1=__importDefault(require("../TreeSelectFormItem")),TreeSelectLeafFormItem_1=__importDefault(require("../TreeSelectLeafFormItem")),TreeSelectLeafMultiFormItem_1=__importDefault(require("../TreeSelectLeafMultiFormItem")),hooks_1=require("../hooks"),util_1=require("../util"),TreeSelectFormItemWrap=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return react_1.default.createElement(TreeSelectFormItem_1.default,__assign({},e,{treeData:t}))},TreeSelectMultiFormItemWrap=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return react_1.default.createElement(TreeMultiSelectFormItem_1.default,__assign({},e,{treeData:t}))};(0,ItemFactory_1.setItem)("Tree","FormItem",function(l){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=adhere_util_dict_1.default.value[l].value,n=(0,react_1.useState)([]),o=n[0],u=n[1];function c(){r instanceof Function?u(r(t)):u(r)}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(o)},[o]),react_1.default.createElement(TreeSelectFormItemWrap,__assign({},e,{dataSource:o}))}}),(0,ItemFactory_1.setItem)("Tree","LeafFormItem",function(l){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=adhere_util_dict_1.default.value[l].value,n=(0,react_1.useState)([]),o=n[0],u=n[1];function c(){r instanceof Function?u(r(t)):u(r)}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(o)},[o]),react_1.default.createElement(TreeSelectLeafFormItem_1.default,__assign({},e,{dataSource:o}))}}),(0,ItemFactory_1.setItem)("Tree","MultiFormItem",function(l){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=adhere_util_dict_1.default.value[l].value,n=(0,react_1.useState)([]),o=n[0],u=n[1];function c(){r instanceof Function?u(r(t)):u(r)}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(o)},[o]),react_1.default.createElement(TreeSelectMultiFormItemWrap,__assign({},e,{dataSource:o}))}}),(0,ItemFactory_1.setItem)("Tree","LeafMultiFormItem",function(l){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=adhere_util_dict_1.default.value[l].value,n=(0,react_1.useState)([]),o=n[0],u=n[1];function c(){r instanceof Function?u(r(t)):u(r)}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(o)},[o]),react_1.default.createElement(TreeSelectLeafMultiFormItem_1.default,__assign({},e,{dataSource:o}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","FormItem",function(l){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=(0,react_1.useState)([]),n=r[0],o=r[1],u=adhere_util_dict_1.default.value[l].value;function c(){u instanceof Function?u(t).then(function(e){o(e)}):u.then&&u.then(function(e){o(e)})}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(n)},[n]),react_1.default.createElement(TreeSelectFormItemWrap,__assign({},e,{dataSource:n}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","LeafFormItem",function(l){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=(0,react_1.useState)([]),n=r[0],o=r[1],u=adhere_util_dict_1.default.value[l].value;function c(){u instanceof Function?u(t).then(function(e){o(e)}):u.then&&u.then(function(e){o(e)})}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(n)},[n]),react_1.default.createElement(TreeSelectLeafFormItem_1.default,__assign({},e,{dataSource:n}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","MultiFormItem",function(l){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=(0,react_1.useState)([]),n=r[0],o=r[1],u=adhere_util_dict_1.default.value[l].value;function c(){u instanceof Function?u(t).then(function(e){o(e)}):u.then&&u.then(function(e){o(e)})}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(n)},[n]),react_1.default.createElement(TreeSelectMultiFormItemWrap,__assign({},e,{dataSource:n}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","LeafMultiFormItem",function(l){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=(0,react_1.useState)([]),n=r[0],o=r[1],u=adhere_util_dict_1.default.value[l].value;function c(){u instanceof Function?u(t).then(function(e){o(e)}):u.then&&u.then(function(e){o(e)})}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=a&&a(n)},[n]),react_1.default.createElement(TreeSelectLeafMultiFormItem_1.default,__assign({},e,{dataSource:n}))}}),(0,ItemFactory_1.setItem)("TreeAsync","FormItem",function(c){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,r=e.fetchBranch,n=e.defaultId,o=__rest(e,["cascadeParams","onDataSourceChange","fetchBranch","defaultId"]),e=(0,hooks_1.useAsyncTreeSelect)(c,{cascadeParams:t,onDataSourceChange:a,fetchBranch:r,defaultId:n,value:o.value,treeDataSimpleMode:o.treeDataSimpleMode}),t=e.treeData,a=e.onLoadData,u=e.onChange;return react_1.default.createElement(TreeSelectFormItemWrap,__assign({virtual:!1,loadData:a,dataSource:t},o,{onChange:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return u(o.onChange,e)}}))}}),(0,ItemFactory_1.setItem)("TreeAsync","LeafFormItem",function(c){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,r=e.fetchBranch,n=e.defaultId,o=__rest(e,["cascadeParams","onDataSourceChange","fetchBranch","defaultId"]),e=(0,hooks_1.useAsyncTreeSelect)(c,{cascadeParams:t,onDataSourceChange:a,fetchBranch:r,defaultId:n,value:o.value,treeDataSimpleMode:o.treeDataSimpleMode}),t=e.treeData,a=e.onLoadData,u=e.onChange;return react_1.default.createElement(TreeSelectLeafFormItem_1.default,__assign({virtual:!1,loadData:a,dataSource:t},o,{onChange:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return u(o.onChange,e)}}))}}),(0,ItemFactory_1.setItem)("TreeAsync","MultiFormItem",function(c){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,r=e.fetchBranch,n=e.defaultId,o=__rest(e,["cascadeParams","onDataSourceChange","fetchBranch","defaultId"]),e=(0,hooks_1.useAsyncTreeSelect)(c,{cascadeParams:t,onDataSourceChange:a,fetchBranch:r,defaultId:n,value:o.value,treeDataSimpleMode:o.treeDataSimpleMode}),t=e.treeData,a=e.onLoadData,u=e.onChange;return react_1.default.createElement(TreeSelectMultiFormItemWrap,__assign({virtual:!1,loadData:a,dataSource:t},o,{onChange:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return u(o.onChange,e)}}))}}),(0,ItemFactory_1.setItem)("TreeAsync","LeafMultiFormItem",function(c){return function(e){var t=e.cascadeParams,a=e.onDataSourceChange,r=e.fetchBranch,n=e.defaultId,o=__rest(e,["cascadeParams","onDataSourceChange","fetchBranch","defaultId"]),e=(0,hooks_1.useAsyncTreeSelect)(c,{cascadeParams:t,onDataSourceChange:a,fetchBranch:r,defaultId:n,value:o.value,treeDataSimpleMode:o.treeDataSimpleMode}),t=e.treeData,a=e.onLoadData,u=e.onChange;return react_1.default.createElement(TreeSelectLeafMultiFormItem_1.default,__assign({virtual:!1,loadData:a,dataSource:t},o,{onChange:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return u(o.onChange,e)}}))}});
//# sourceMappingURL=TreeSelect.js.map
