"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,a){void 0===a&&(a=t);var l=Object.getOwnPropertyDescriptor(r,t);l&&("get"in l?r.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,a,l)}:function(e,r,t,a){e[a=void 0===a?t:a]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__rest=function(e,r){var t={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&r.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)r.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),ListFilter_1=__importDefault(require("../ListFilter")),StaticPaging_1=__importDefault(require("../StaticPaging")),CheckboxGroup_1=__importDefault(require("./CheckboxGroup")),selectorPrefix="adhere-mobile-ui-ant-hoc-filter-paging-check-box",InternalFilterPagingCheckbox=(0,react_1.memo)(function(e){var r=e.className,t=e.style,a=e.filterWrapperClassName,l=e.filterWrapperStyle,n=e.bodyWrapperClassName,i=e.bodyWrapperStyle,o=e.renderEmpty,s=e.filterProps,p=e.pagingProps,c=e.options,u=__rest(e,["className","style","filterWrapperClassName","filterWrapperStyle","bodyWrapperClassName","bodyWrapperStyle","renderEmpty","filterProps","pagingProps","options"]);return react_1.default.createElement(ListFilter_1.default,{options:null!=c?c:[],filterProps:s,wrapperClassName:(0,classnames_1.default)(selectorPrefix,null!=r?r:""),wrapperStyle:null!=t?t:{},filterWrapperClassName:(0,classnames_1.default)("".concat(selectorPrefix,"-filter"),null!=a?a:""),bodyWrapperClassName:(0,classnames_1.default)("".concat(selectorPrefix,"-body"),null!=n?n:""),filterWrapperStyle:null!=l?l:{},bodyWrapperStyle:null!=i?i:{},renderEmpty:o,children:function(e){return react_1.default.createElement(StaticPaging_1.default,__assign({options:e},p),react_1.default.createElement(CheckboxGroup_1.default,__assign({},u)))}})}),FilterPagingCheckbox=InternalFilterPagingCheckbox;FilterPagingCheckbox.displayName="FilterPagingCheckbox",exports.default=FilterPagingCheckbox;
//# sourceMappingURL=FilterPagingCheckbox.js.map