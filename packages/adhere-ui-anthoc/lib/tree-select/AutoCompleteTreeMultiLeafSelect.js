"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,l){void 0===l&&(l=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,l,o)}:function(e,t,r,l){e[l=void 0===l?r:l]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(r[o[l]]=e[o[l]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),AutoCompleteTreeMultiSelect_1=__importDefault(require("./AutoCompleteTreeMultiSelect")),useTreeSelectLeaf_1=__importDefault(require("./useTreeSelectLeaf")),InternalAutoCompleteTreeMultiLeafSelect=(0,react_1.memo)(function(e){var t=e.treeData,e=__rest(e,["treeData"]),t=(0,useTreeSelectLeaf_1.default)(t);return react_1.default.createElement(AutoCompleteTreeMultiSelect_1.default,__assign({},e,{treeData:t}))}),AutoCompleteTreeMultiLeafSelect=InternalAutoCompleteTreeMultiLeafSelect;AutoCompleteTreeMultiLeafSelect.displayName="AutoCompleteTreeMultiLeafSelect",exports.default=AutoCompleteTreeMultiLeafSelect;
//# sourceMappingURL=AutoCompleteTreeMultiLeafSelect.js.map
