"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,l){void 0===l&&(l=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,l,n)}:function(e,t,r,l){e[l=void 0===l?r:l]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_mobile_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd-mobile")),classnames_1=__importDefault(require("classnames")),react_1=__importStar(require("react")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),selectorPrefix="adhere-mobile-ui-ant-hoc-list-filter";function useListFilter(e){var t=e.options,r=e.filterProps,l=e.children,n=e.wrapperClassName,i=e.wrapperStyle,a=e.filterWrapperClassName,u=e.filterWrapperStyle,o=e.bodyWrapperClassName,e=e.bodyWrapperStyle,c=(0,react_1.useState)(""),s=c[0],f=c[1];function _(e,t){return t[null!=(t=null==r?void 0:r.optionFilterProp)?t:"title"].includes(e)}c=(0,react_1.useMemo)(function(){return s?"boolean"==typeof(null==r?void 0:r.filterOption)&&r.filterOption?(null!=t?t:[]).filter(function(e){return _(s,e)}):adhere_util_1.default.isFunction(null==r?void 0:r.filterOption)?(null!=t?t:[]).filter(function(e){return(null==r?void 0:r.filterOption)(s,e)}):(null!=t?t:[]).filter(function(e){return _(s,e)}):null!=t?t:[]},[s,null==r?void 0:r.filterOption,null==r?void 0:r.optionFilterProp,t]);return react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,null!=n?n:""),style:null!=i?i:{}},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-search"),null!=a?a:""),style:null!=u?u:{}},react_1.default.createElement(antd_mobile_1.SearchBar,__assign({onSearch:function(e){f(e)},onClear:function(){f("")}},r))),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-list"),null!=o?o:""),style:null!=e?e:{}},null==l?void 0:l(c)))}exports.default=useListFilter;
//# sourceMappingURL=useListFilter.js.map
