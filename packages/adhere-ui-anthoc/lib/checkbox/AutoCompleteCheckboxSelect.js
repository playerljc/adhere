"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),AutoCompleteMultipleSelect_1=__importDefault(require("../multiple-select/AutoCompleteMultipleSelect")),useAutoCompleteFetchLoading_1=__importDefault(require("../useAutoCompleteFetchLoading")),VerticalCheckbox_1=__importDefault(require("./VerticalCheckbox")),useRenderProps_1=__importDefault(require("./useRenderProps")),InternalAutoCompleteCheckboxSelect=(0,react_1.memo)(function(e){var t=e.checkboxProps,e=__rest(e,["checkboxProps"]),o=(0,useAutoCompleteFetchLoading_1.default)(e.renderLoading),n=(0,useRenderProps_1.default)(t);return react_1.default.createElement(AutoCompleteMultipleSelect_1.default,__assign({},e),function(e){e.originNode;var t=e.loading,r=__rest(e,["originNode","loading"]);return react_1.default.createElement(react_1.default.Fragment,null,t&&o,!t&&react_1.default.createElement(VerticalCheckbox_1.default,__assign({},n(__assign(__assign({},r),{onChange:function(e){var t;return null==(t=r.onChange)?void 0:t.call(r,e,[])}})))))})}),AutoCompleteCheckboxSelect=InternalAutoCompleteCheckboxSelect;AutoCompleteCheckboxSelect.displayName="AutoCompleteCheckboxSelect",exports.default=AutoCompleteCheckboxSelect;
//# sourceMappingURL=AutoCompleteCheckboxSelect.js.map