"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),adhere_ui_suspense_1=__importDefault(require("@baifendian/adhere-ui-suspense")),TransferFormItem=function(e){var t=e.firstLoading,r=e.renderEmpty,n=e.isEmpty,a=e.dataSource,i=e.renderNormalLoading,e=__rest(e,["firstLoading","renderEmpty","isEmpty","dataSource","renderNormalLoading"]),o=(0,react_1.useState)([]),u=o[0],l=o[1];return(0,react_1.useEffect)(function(){l(a||[])},[a]),react_1.default.createElement(adhere_ui_suspense_1.default.Sync,{data:u,isEmpty:function(){return n?null==n?void 0:n(u):0===u.length},firstLoading:t,renderEmpty:r?r(u):react_1.default.createElement(adhere_ui_anthoc_1.Transfer,null),renderNormalLoading:i},react_1.default.createElement(adhere_ui_anthoc_1.Transfer,__assign({dataSource:u.map(function(e){return __assign(__assign({},e),{key:e.value,title:e.label,description:e.label})}),render:function(e){return e.title},targetKeys:e.value},e)))};exports.default=TransferFormItem;
//# sourceMappingURL=index.js.map
