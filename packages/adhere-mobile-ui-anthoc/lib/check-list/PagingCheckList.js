"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&("get"in i?t.__esModule:!i.writable&&!i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),StaticPaging_1=__importDefault(require("../StaticPaging")),CheckList_1=__importDefault(require("./CheckList")),InternalPagingCheckList=(0,react_1.memo)(function(e){var t=e.options,r=e.pagingProps,e=__rest(e,["options","pagingProps"]);return react_1.default.createElement(StaticPaging_1.default,__assign({},r,{options:t}),react_1.default.createElement(CheckList_1.default,__assign({},e)))}),PagingCheckList=InternalPagingCheckList;PagingCheckList.displayName="PagingCheckList",exports.default=PagingCheckList;
//# sourceMappingURL=PagingCheckList.js.map
