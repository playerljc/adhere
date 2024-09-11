"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,l){void 0===l&&(l=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,l,o)}:function(e,t,r,l){e[l=void 0===l?r:l]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(r[o[l]]=e[o[l]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),AutoCompleteTreeMultiSelect_1=__importDefault(require("../tree-select/AutoCompleteTreeMultiSelect")),AutoCompleteTreeSelect_1=__importDefault(require("../tree-select/AutoCompleteTreeSelect")),useAutoCompleteFetchLoading_1=__importDefault(require("../useAutoCompleteFetchLoading")),CheckboxTreeTable_1=__importDefault(require("./CheckboxTreeTable")),RadioTreeTable_1=__importDefault(require("./RadioTreeTable")),useTreeRenderProps_1=__importDefault(require("./useTreeRenderProps")),InternalAutoCompleteTreeTableSelect=(0,react_1.memo)(function(e){var t=e.tableProps,o=e.treeDataSimpleModeConfig,r=__rest(e,["tableProps","treeDataSimpleModeConfig"]),a=(0,react_1.useMemo)(function(){return"multiple"in r&&r.multiple},[r.multiple]),u=(0,react_1.useMemo)(function(){return!!r.treeDataSimpleMode},[r.treeDataSimpleMode]),n=(0,useTreeRenderProps_1.default)(t),i=(0,useAutoCompleteFetchLoading_1.default)(r.renderLoading),e=(0,react_1.useMemo)(function(){return(a?AutoCompleteTreeMultiSelect_1:AutoCompleteTreeSelect_1).default},[a]);return react_1.default.createElement(e,__assign({},r),function(e){e.originNode;var t=e.loading,e=__rest(e,["originNode","loading"]),r=e.treeData,e=__rest(e,["treeData"]),l=u?adhere_util_1.default.arrayToAntdTreeSelect(null!=r?r:[],{keyAttr:null!=(l=null==o?void 0:o.keyAttr)?l:"value",titleAttr:null!=(l=null==o?void 0:o.titleAttr)?l:"title",rootParentId:null!=(l=null==o?void 0:o.rootParentId)?l:0,parentIdAttr:null!=(l=null==o?void 0:o.parentIdAttr)?l:"pId"}):r,r=n(__assign({options:l},e));return react_1.default.createElement(react_1.default.Fragment,null,t&&i,!t&&a&&react_1.default.createElement(CheckboxTreeTable_1.default,__assign({},r)),!t&&!a&&react_1.default.createElement(RadioTreeTable_1.default,__assign({},r)))})}),AutoCompleteTreeTableSelect=InternalAutoCompleteTreeTableSelect;AutoCompleteTreeTableSelect.displayName="AutoCompleteTreeTableSelect",exports.default=AutoCompleteTreeTableSelect;
//# sourceMappingURL=AutoCompleteTreeTableSelect.js.map
