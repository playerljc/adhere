"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,l=1,r=arguments.length;l<r;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,l,r){void 0===r&&(r=l);var n=Object.getOwnPropertyDescriptor(t,l);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[l]}}),Object.defineProperty(e,r,n)}:function(e,t,l,r){e[r=void 0===r?l:r]=t[l]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)"default"!==l&&Object.prototype.hasOwnProperty.call(e,l)&&__createBinding(t,e,l);return __setModuleDefault(t,e),t},__rest=function(e,t){var l={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]]);return l},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),AutoCompleteSelect_1=__importDefault(require("../select/AutoCompleteSelect")),useCheckAllMultiple_1=__importDefault(require("./useCheckAllMultiple")),InternalAutoCompleteCheckAllMultipleSelect=(0,react_1.memo)(function(e){var t=e.children,l=e.checkAllWrapperClassName,r=e.checkAllWrapperStyle,n=e.dropdownWrapperClassName,o=e.dropdownWrapperStyle,e=__rest(e,["children","checkAllWrapperClassName","checkAllWrapperStyle","dropdownWrapperClassName","dropdownWrapperStyle"]),a=(0,useCheckAllMultiple_1.default)({children:t,checkAllWrapperClassName:l,checkAllWrapperStyle:r,dropdownWrapperClassName:n,dropdownWrapperStyle:o,renderLoading:e.renderLoading}).renderProps;return react_1.default.createElement(AutoCompleteSelect_1.default,__assign({},e,{mode:"multiple"}),function(l){return a(__assign(__assign({},l),{onChange:function(e){var t;null!=(t=l.onChange)&&t.call(l,e,[])}}))})}),AutoCompleteCheckAllMultipleSelect=InternalAutoCompleteCheckAllMultipleSelect;AutoCompleteCheckAllMultipleSelect.displayName="AutoCompleteCheckAllMultipleSelect",exports.default=AutoCompleteCheckAllMultipleSelect;
//# sourceMappingURL=AutoCompleteCheckAllMultipleSelect.js.map
