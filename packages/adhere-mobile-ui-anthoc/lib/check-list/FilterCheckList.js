"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,l){void 0===l&&(l=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,l,a)}:function(e,t,r,l){e[l=void 0===l?r:l]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),useListFilter_1=__importDefault(require("../useListFilter")),CheckList_1=__importDefault(require("./CheckList")),selectorPrefix="adhere-mobile-ui-ant-hoc-filter-check-list",InternalFilterCheckList=(0,react_1.memo)(function(e){var t=e.className,r=e.style,l=e.filterWrapperClassName,a=e.filterWrapperStyle,i=e.bodyWrapperClassName,s=e.bodyWrapperStyle,n=e.filterProps,o=__rest(e,["className","style","filterWrapperClassName","filterWrapperStyle","bodyWrapperClassName","bodyWrapperStyle","filterProps"]);return(0,useListFilter_1.default)({options:null!=(e=null==o?void 0:o.options)?e:[],filterProps:n,wrapperClassName:(0,classnames_1.default)(selectorPrefix,null!=t?t:""),wrapperStyle:r,filterWrapperClassName:(0,classnames_1.default)("".concat(selectorPrefix,"-filter"),null!=l?l:""),bodyWrapperClassName:(0,classnames_1.default)("".concat(selectorPrefix,"-body"),null!=i?i:""),filterWrapperStyle:a,bodyWrapperStyle:s,children:function(e){return react_1.default.createElement(CheckList_1.default,__assign({},o,{options:e}))}})}),FilterCheckList=InternalFilterCheckList;FilterCheckList.displayName="FilterCheckList",exports.default=FilterCheckList;
//# sourceMappingURL=FilterCheckList.js.map
