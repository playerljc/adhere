"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),Tree_1=__importDefault(require("./Tree")),selectorPrefix="adhere-mobile-ui-tree-select",TreeSelect=function(e){var t=e.className,r=e.style,n=e.treeClassName,a=e.treeStyle,l=e.value,u=e.onChange,e=__rest(e,["className","style","treeClassName","treeStyle","value","onChange"]),c=(0,react_1.useMemo)(function(){return null!=l?l:[]},[l]),o=(0,react_1.useCallback)(function(e,t){null!=u&&u(e,t)},[u]);return react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,t),style:null!=r?r:{}},react_1.default.createElement(Tree_1.default,__assign({},null!=e?e:{},{className:n,style:null!=a?a:{},checkable:!0,checkedKeys:c,onCheck:o})))};exports.default=TreeSelect;
//# sourceMappingURL=TreeSelect.js.map
