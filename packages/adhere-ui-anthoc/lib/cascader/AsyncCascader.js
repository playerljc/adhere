"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=function(e,t){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),CascaderTreeSelect_1=__importDefault(require("./CascaderTreeSelect")),useAsyncCascader_1=__importDefault(require("./useAsyncCascader")),AsyncCascader=function(e){var t=e.cascadeParams,a=e.onDataSourceChange,r=e.fetchBranch,n=e.fetchData,c=e.defaultId,o=e.treeDataSimpleMode,u=e.onChange,e=__rest(e,["cascadeParams","onDataSourceChange","fetchBranch","fetchData","defaultId","treeDataSimpleMode","onChange"]),t=(0,useAsyncCascader_1.default)({cascadeParams:t,onDataSourceChange:a,fetchBranch:r,fetchData:n,defaultId:c,value:e.value,treeDataSimpleMode:o}),a=t.treeData,r=t.onLoadData,l=t.onChange;return react_1.default.createElement(CascaderTreeSelect_1.default,__assign({},e,{options:a,loadData:r,onChange:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return l(u,e)}}))};exports.default=(0,react_1.memo)(AsyncCascader);
//# sourceMappingURL=AsyncCascader.js.map
