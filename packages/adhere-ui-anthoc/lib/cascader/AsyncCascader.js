"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++)for(var n in a=arguments[t])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,a,t,r){void 0===r&&(r=t);var n=Object.getOwnPropertyDescriptor(a,t);n&&("get"in n?a.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return a[t]}}),Object.defineProperty(e,r,n)}:function(e,a,t,r){e[r=void 0===r?t:r]=a[t]},__setModuleDefault=Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a},__importStar=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(a,e,t);return __setModuleDefault(a,e),a},__rest=function(e,a){var t={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),CascaderTreeSelect_1=__importDefault(require("./CascaderTreeSelect")),useAsyncCascader_1=__importDefault(require("./useAsyncCascader")),InternalAsyncCascader=(0,react_1.memo)(function(e){var a=e.cascadeParams,t=e.onDataSourceChange,r=e.fetchBranch,n=e.fetchData,c=e.defaultId,o=e.onChange,e=__rest(e,["cascadeParams","onDataSourceChange","fetchBranch","fetchData","defaultId","onChange"]),a=(0,useAsyncCascader_1.default)({cascadeParams:a,onDataSourceChange:t,fetchBranch:r,fetchData:n,defaultId:c,value:e.value,treeDataSimpleMode:e.treeDataSimpleMode}),t=a.treeData,r=a.onLoadData,u=a.onChange;return react_1.default.createElement(CascaderTreeSelect_1.default,__assign({},e,{options:t,loadData:r,onChange:function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return u(o,e)}}))}),AsyncCascader=InternalAsyncCascader;AsyncCascader.displayName="AsyncCascader",exports.default=AsyncCascader;
//# sourceMappingURL=AsyncCascader.js.map