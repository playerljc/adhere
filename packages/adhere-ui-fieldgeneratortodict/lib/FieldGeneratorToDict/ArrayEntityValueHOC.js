"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__rest=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),DEFAULT_OPTIONS_PROP="options",ArrayEntityValueHOC=(0,react_1.memo)(function(e){var t,n=e.children,r=__rest(e,["children"]),e=(0,react_1.useState)([]),o=e[0],l=e[1],a=(0,react_1.useRef)(new Map),o=(0,react_1.cloneElement)(n,__assign(__assign(((e={})[null!=(t=r.optionsProp)?t:DEFAULT_OPTIONS_PROP]=o,e),null!=(t=n.props)?t:{}),{onDataSourceChange:function(e,t){var n;t?"paging"===t.type&&void 0!==(null==(n=null==t?void 0:t.info)?void 0:n.page)&&null!==(null==(n=null==t?void 0:t.info)?void 0:n.page)&&""!==(null==(n=null==t?void 0:t.info)?void 0:n.page)&&0!==(null==(n=null==t?void 0:t.info)?void 0:n.page)&&"number"==typeof(null==(n=null==t?void 0:t.info)?void 0:n.page)&&(n=null!=(n=null==(n=null==r?void 0:r.getOptionsByDataSource)?void 0:n.call(r,e))?n:e,a.current.set(null==(t=null==t?void 0:t.info)?void 0:t.page,n),l(Array.from(a.current.values()).flat())):l(null!=(n=null==(t=null==r?void 0:r.getOptionsByDataSource)?void 0:t.call(r,e))?n:e)}}));return react_1.default.createElement(adhere_ui_anthoc_1.ArrayEntityValueHOC,__assign({},r),o)});exports.default=ArrayEntityValueHOC;
//# sourceMappingURL=ArrayEntityValueHOC.js.map