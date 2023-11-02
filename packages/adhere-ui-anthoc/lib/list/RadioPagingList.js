"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__rest=function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),RadioList_1=__importDefault(require("./RadioList")),usePaging_1=__importDefault(require("./usePaging")),RadioPagingList=function(e){var t=e.totalCount,n=e.paging,r=e.onPagingChange,a=e.onPagingShowSizeChange,i=e.defaultLimit,e=__rest(e,["totalCount","paging","onPagingChange","onPagingShowSizeChange","defaultLimit"]),i=(0,usePaging_1.default)({defaultLimit:null!=i?i:10,paging:n,totalCount:t,onPagingShowSizeChange:a,onPagingChange:r});return react_1.default.createElement(RadioList_1.default,__assign({pagination:i},e))};exports.default=(0,react_1.memo)(RadioPagingList);
//# sourceMappingURL=RadioPagingList.js.map
