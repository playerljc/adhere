"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,l){void 0===l&&(l=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,l,n)}:function(e,t,r,l){e[l=void 0===l?r:l]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_mobile_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.treeTransformConfig=void 0,require("antd-mobile")),classnames_1=__importDefault(require("classnames")),react_1=__importStar(require("react")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),selectorPrefix="adhere-mobile-ui-ant-hoc-tree-filter";function TreeFilter(e){var t=e.treeData,r=e.treeDataSimpleMode,l=void 0!==r&&r,n=e.filterProps,r=e.wrapperClassName,a=e.wrapperStyle,o=e.filterWrapperClassName,i=e.filterWrapperStyle,u=e.bodyWrapperClassName,f=e.bodyWrapperStyle,s=e.renderEmpty,e=e.children,c=(0,react_1.useState)(""),d=c[0],_=c[1];function p(e,t){return t[null!=(t=null==n?void 0:n.optionFilterProp)?t:"label"].includes(e)}var m=(0,react_1.useMemo)(function(){return l?t:adhere_util_1.default.treeToArray(t,{parentIdAttr:exports.treeTransformConfig.parentIdAttr,rootParentId:exports.treeTransformConfig.rootParentId},exports.treeTransformConfig.keyAttr)},[t,l]),v=(0,react_1.useMemo)(function(){var e=d?"boolean"==typeof(null==n?void 0:n.filterOption)&&n.filterOption?(null!=m?m:[]).filter(function(e){return p(d,e)}):adhere_util_1.default.isFunction(null==n?void 0:n.filterOption)?(null!=m?m:[]).filter(function(e){return(null==n?void 0:n.filterOption)(d,e)}):(null!=m?m:[]).filter(function(e){return p(d,e)}):null!=m?m:[],e=adhere_util_1.default.completionIncompleteFlatArr(null!=m?m:[],e,exports.treeTransformConfig);return l?adhere_util_1.default.treeToArray(e,exports.treeTransformConfig,exports.treeTransformConfig.keyAttr):e},[d,null==n?void 0:n.filterOption,null==n?void 0:n.optionFilterProp,m]),c=(0,react_1.useCallback)(function(){return!v.length},[v]);return react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,null!=r?r:""),style:null!=a?a:{}},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-search"),null!=o?o:""),style:null!=i?i:{}},react_1.default.createElement(antd_mobile_1.SearchBar,__assign({onSearch:function(e){_(e)},onClear:function(){_("")}},n))),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-tree"),null!=u?u:""),style:null!=f?f:{}},c()&&(null!=(r=null==s?void 0:s())?r:react_1.default.createElement(antd_mobile_1.ErrorBlock,{status:"empty"})),null==e?void 0:e(v,d)))}exports.treeTransformConfig={keyAttr:"value",titleAttr:"label",parentIdAttr:"pId",rootParentId:0},exports.default=TreeFilter;
//# sourceMappingURL=TreeFilter.js.map
