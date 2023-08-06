"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=function(e,t){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),react_1=__importStar(require("react")),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),CascaderFormItem_1=__importDefault(require("../CascaderFormItem")),CascaderLeafFormItem_1=__importDefault(require("../CascaderLeafFormItem")),CascaderLeafMulitFormItem_1=__importDefault(require("../CascaderLeafMulitFormItem")),CascaderMulitFormItem_1=__importDefault(require("../CascaderMulitFormItem")),ItemFactory_1=require("../ItemFactory"),util_1=require("../util");(0,ItemFactory_1.setItem)("Cascader","FormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[r].value,t=a instanceof Function?a(t):a;return react_1.default.createElement(CascaderFormItem_1.default,__assign({},e,{options:t}))}}),(0,ItemFactory_1.setItem)("Cascader","LeafFormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[r].value,t=a instanceof Function?a(t):a;return react_1.default.createElement(CascaderLeafFormItem_1.default,__assign({},e,{dataSource:t}))}}),(0,ItemFactory_1.setItem)("Cascader","MulitFormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[r].value,t=a instanceof Function?a(t):a;return react_1.default.createElement(CascaderMulitFormItem_1.default,__assign({},e,{options:t}))}}),(0,ItemFactory_1.setItem)("Cascader","LeafMulitFormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[r].value,t=a instanceof Function?a(t):a;return react_1.default.createElement(CascaderLeafMulitFormItem_1.default,__assign({},e,{dataSource:t}))}}),(0,ItemFactory_1.setItem)("CascaderDynamic","FormItem",function(c){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=(0,react_1.useState)([]),r=a[0],n=a[1],u=adhere_util_dict_1.default.value[c].value;return(0,ahooks_1.useMount)(function(){u.then&&u.then(function(e){n(e)})}),(0,ahooks_1.useUpdateEffect)(function(){u instanceof Function&&u(t).then(function(e){n(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(CascaderFormItem_1.default,__assign({},e,{options:r}))}}),(0,ItemFactory_1.setItem)("CascaderDynamic","LeafFormItem",function(c){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=(0,react_1.useState)([]),r=a[0],n=a[1],u=adhere_util_dict_1.default.value[c].value;return(0,ahooks_1.useMount)(function(){u.then&&u.then(function(e){n(e)})}),(0,ahooks_1.useUpdateEffect)(function(){u instanceof Function&&u(t).then(function(e){n(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(CascaderLeafFormItem_1.default,__assign({},e,{dataSource:r}))}}),(0,ItemFactory_1.setItem)("CascaderDynamic","MulitFormItem",function(c){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=(0,react_1.useState)([]),r=a[0],n=a[1],u=adhere_util_dict_1.default.value[c].value;return(0,ahooks_1.useMount)(function(){u.then&&u.then(function(e){n(e)})}),(0,ahooks_1.useUpdateEffect)(function(){u instanceof Function&&u(t).then(function(e){n(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(CascaderMulitFormItem_1.default,__assign({},e,{options:r}))}}),(0,ItemFactory_1.setItem)("CascaderDynamic","LeafMulitFormItem",function(c){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=(0,react_1.useState)([]),r=a[0],n=a[1],u=adhere_util_dict_1.default.value[c].value;return(0,ahooks_1.useMount)(function(){u.then&&u.then(function(e){n(e)})}),(0,ahooks_1.useUpdateEffect)(function(){u instanceof Function&&u(t).then(function(e){n(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(CascaderLeafMulitFormItem_1.default,__assign({},e,{dataSource:r}))}});
//# sourceMappingURL=Cascader.js.map
