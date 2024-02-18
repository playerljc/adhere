"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,l=arguments.length;t<l;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,l){void 0===l&&(l=t);var a=Object.getOwnPropertyDescriptor(r,t);a&&("get"in a?r.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,l,a)}:function(e,r,t,l){e[l=void 0===l?t:l]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__rest=function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),ListFilter_1=__importDefault(require("../ListFilter")),CheckboxGroup_1=__importDefault(require("./CheckboxGroup")),selectorPrefix="adhere-mobile-ui-ant-hoc-filter-check-box",InternalFilterCheckBox=(0,react_1.memo)(function(e){var r=e.className,t=e.style,l=e.filterProps,a=e.filterWrapperClassName,o=e.filterWrapperStyle,n=e.bodyWrapperClassName,i=e.bodyWrapperStyle,s=e.renderEmpty,c=__rest(e,["className","style","filterProps","filterWrapperClassName","filterWrapperStyle","bodyWrapperClassName","bodyWrapperStyle","renderEmpty"]);return react_1.default.createElement(ListFilter_1.default,{options:null!=(e=null==c?void 0:c.options)?e:[],filterProps:l,wrapperClassName:(0,classnames_1.default)(selectorPrefix,null!=r?r:""),wrapperStyle:null!=t?t:{},filterWrapperClassName:(0,classnames_1.default)("".concat(selectorPrefix,"-filter"),null!=a?a:""),bodyWrapperClassName:(0,classnames_1.default)("".concat(selectorPrefix,"-body"),null!=n?n:""),filterWrapperStyle:null!=o?o:{},bodyWrapperStyle:null!=i?i:{},renderEmpty:s,children:function(e){return react_1.default.createElement(CheckboxGroup_1.default,__assign({},c,{options:e}))}})}),FilterCheckBox=InternalFilterCheckBox;FilterCheckBox.displayName="FilterCheckBox",exports.default=FilterCheckBox;
//# sourceMappingURL=FilterCheckbox.js.map
