"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),CheckAllMultipleSelect_1=__importDefault(require("../multiple-select/CheckAllMultipleSelect")),VerticalCheckbox_1=__importDefault(require("./VerticalCheckbox")),useRenderProps_1=__importDefault(require("./useRenderProps")),CheckAllCheckboxSelect=function(e){var t=e.checkboxProps,e=__rest(e,["checkboxProps"]),r=(0,useRenderProps_1.default)(t);return react_1.default.createElement(CheckAllMultipleSelect_1.default,__assign({},e),function(e){e.originNode;var t=e.onChange,e=__rest(e,["originNode","onChange"]);return react_1.default.createElement(VerticalCheckbox_1.default,__assign({},r(__assign(__assign({},e),{onChange:function(e){return null==t?void 0:t(e,[])}}))))})};exports.default=(0,react_1.memo)(CheckAllCheckboxSelect);
//# sourceMappingURL=CheckAllCheckboxSelect.js.map
