"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,o){void 0===o&&(o=r);var l=Object.getOwnPropertyDescriptor(t,r);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,l)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(r[l[o]]=e[l[o]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),AutoCompleteCheckAllMultipleSelect_1=__importDefault(require("../multiple-select/AutoCompleteCheckAllMultipleSelect")),useAutoCompleteFetchLoading_1=__importDefault(require("../useAutoCompleteFetchLoading")),CustomCheckbox_1=__importDefault(require("./CustomCheckbox")),useRenderProps_1=__importDefault(require("./useRenderProps")),AutoCompleteCheckAllCustomCheckboxSelect=function(e){var t=e.checkboxProps,r=e.children,e=__rest(e,["checkboxProps","children"]),o=(0,useAutoCompleteFetchLoading_1.default)(e.renderLoading),l=(0,useRenderProps_1.default)(t);return react_1.default.createElement(AutoCompleteCheckAllMultipleSelect_1.default,__assign({},e),function(e){e.originNode;var t=e.loading,e=__rest(e,["originNode","loading"]);return react_1.default.createElement(react_1.default.Fragment,null,t&&o,!t&&react_1.default.createElement(CustomCheckbox_1.default,__assign({},l(e)),r))})};exports.default=(0,react_1.memo)(AutoCompleteCheckAllCustomCheckboxSelect);
//# sourceMappingURL=AutoCompleteCheckAllCustomCheckboxSelect.js.map
