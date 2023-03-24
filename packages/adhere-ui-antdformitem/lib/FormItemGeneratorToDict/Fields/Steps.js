"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),StepsFormItem_1=__importDefault(require("../StepsFormItem")),util_1=require("../util"),FormItemComponents={};exports.default=function(){var e=Object.keys(adhere_util_dict_1.default.handlers).filter(function(e){return e.endsWith("Steps")}),t=Object.keys(adhere_util_dict_1.default.handlers).filter(function(e){return e.endsWith("DynamicSteps")});return e.forEach(function(n){FormItemComponents["".concat(n,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=adhere_util_dict_1.default.value[n].value,t=r instanceof Function?r(t):r;return react_1.default.createElement(StepsFormItem_1.default,__assign({},e,{items:t}))}}),t.forEach(function(o){FormItemComponents["".concat(o,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(0,react_1.useState)([]),n=r[0],a=r[1],i=adhere_util_dict_1.default.value[o].value;return(0,react_1.useEffect)(function(){i.then&&i.then(function(e){a(e)})},[]),(0,react_1.useEffect)(function(){i instanceof Function&&i(t).then(function(e){a(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(StepsFormItem_1.default,__assign({},e,{items:n}))}}),FormItemComponents};
//# sourceMappingURL=Steps.js.map
