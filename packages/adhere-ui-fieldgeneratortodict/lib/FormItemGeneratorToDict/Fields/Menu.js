"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__rest=function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),react_1=__importStar(require("react")),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),ItemFactory_1=require("../ItemFactory"),MenuFormItem_1=__importDefault(require("../MenuFormItem")),util_1=require("../util");(0,ItemFactory_1.setItem)("Menu","FormItem",function(i){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=adhere_util_dict_1.default.value[i].value,a=(0,react_1.useState)([]),u=a[0],o=a[1];function c(){r instanceof Function?o(r(t)):o(r)}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=n&&n(u)},[u]),react_1.default.createElement(MenuFormItem_1.default,__assign({},e,{items:u}))}}),(0,ItemFactory_1.setItem)("MenuDynamic","FormItem",function(i){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),r=(0,react_1.useState)([]),a=r[0],u=r[1],o=adhere_util_dict_1.default.value[i].value;function c(){o instanceof Function?o(t).then(function(e){u(e)}):o.then&&o.then(function(e){u(e)})}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=n&&n(a)},[a]),react_1.default.createElement(MenuFormItem_1.default,__assign({},e,{items:a}))}});
//# sourceMappingURL=Menu.js.map
