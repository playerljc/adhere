"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.get-own-property-descriptor.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,o){void 0===o&&(o=t);var n=Object.getOwnPropertyDescriptor(r,t);n&&("get"in n?r.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,n)}:function(e,r,t,o){e[o=void 0===o?t:o]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__rest=function(e,r){var t={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),TreeMulitSelectFormItem_1=__importDefault(require("../TreeMulitSelectFormItem")),TreeSelectLeafMulitFormItem=function(e){var r=e.dataSource,e=__rest(e,["dataSource"]),t=(0,react_1.useMemo)(function(){var e=JSON.parse(JSON.stringify(r));return function r(e){(e||[]).forEach(function(e){e.disabled=!("leaf"in e&&e.leaf),r(e.children)})}(e),e},[r]);return react_1.default.createElement(TreeMulitSelectFormItem_1.default,__assign({},e,{treeData:t}))};exports.default=TreeSelectLeafMulitFormItem;
//# sourceMappingURL=index.js.map
