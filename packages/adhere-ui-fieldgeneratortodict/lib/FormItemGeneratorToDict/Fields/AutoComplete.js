"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),react_1=__importStar(require("react")),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),AutoCompleteFormItem_1=__importDefault(require("../AutoCompleteFormItem")),ItemFactory_1=require("../ItemFactory"),util_1=require("../util");(0,ItemFactory_1.setItem)("AutoComplete","FormItem",function(i){return function(e){var t=e.cascadeParams,r=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=adhere_util_dict_1.default.value[i].value,n=(0,react_1.useState)([]),o=n[0],u=n[1];function c(){a instanceof Function?u(a(t)):u(a)}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=r&&r(o)},[o]),react_1.default.createElement(AutoCompleteFormItem_1.default,__assign({},e,{dataSource:o}))}}),(0,ItemFactory_1.setItem)("AutoCompleteDynamic","FormItem",function(i){return function(e){var t=e.cascadeParams,r=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=(0,react_1.useState)([]),n=a[0],o=a[1],u=adhere_util_dict_1.default.value[i].value;function c(){u instanceof Function?u(t).then(function(e){o(e)}):u.then&&u.then(function(e){o(e)})}return(0,ahooks_1.useMount)(function(){c()}),(0,ahooks_1.useUpdateEffect)(function(){c()},[(0,util_1.deepDep)(t)]),(0,ahooks_1.useUpdateEffect)(function(){null!=r&&r(n)},[n]),react_1.default.createElement(AutoCompleteFormItem_1.default,__assign({},e,{dataSource:n}))}});
//# sourceMappingURL=AutoComplete.js.map
