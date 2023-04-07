"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),BreadcrumbFormItem_1=__importDefault(require("../BreadcrumbFormItem")),ItemFactory_1=require("../ItemFactory"),util_1=require("../util");(0,ItemFactory_1.setItem)("Breadcrumb","FormItem",function(a){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=adhere_util_dict_1.default.value[a].value,t=r instanceof Function?r(t):r;return react_1.default.createElement(BreadcrumbFormItem_1.default,__assign({},e,{items:t}))}}),(0,ItemFactory_1.setItem)("BreadcrumbDynamic","FormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(0,react_1.useState)([]),a=r[0],n=r[1],i=adhere_util_dict_1.default.value[u].value;return(0,react_1.useEffect)(function(){i.then&&i.then(function(e){n(e)})},[]),(0,react_1.useEffect)(function(){i instanceof Function&&i(t).then(function(e){n(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(BreadcrumbFormItem_1.default,__assign({},e,{items:a}))}});
//# sourceMappingURL=Breadcrumb.js.map
