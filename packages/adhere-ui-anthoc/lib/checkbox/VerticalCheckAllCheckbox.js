"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,l=arguments.length;t<l;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,l){void 0===l&&(l=t);var a=Object.getOwnPropertyDescriptor(r,t);a&&("get"in a?r.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,l,a)}:function(e,r,t,l){e[l=void 0===l?t:l]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__rest=function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t},__spreadArray=function(e,r,t){if(t||2===arguments.length)for(var l,a=0,n=r.length;a<n;a++)!l&&a in r||((l=l||Array.prototype.slice.call(r,0,a))[a]=r[a]);return e.concat(l||Array.prototype.slice.call(r))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),CheckAllWrapper_1=__importDefault(require("../CheckAllWrapper")),VerticalCheckbox_1=__importDefault(require("./VerticalCheckbox")),selectorPrefix="adhere-ui-ant-hoc-check-all-check-box",VerticalCheckAllCheckbox=function(e){var r=e.checkAllWrapperClassName,t=e.checkAllWrapperStyle,l=e.dropdownWrapperClassName,a=e.dropdownWrapperStyle,n=__rest(e,["checkAllWrapperClassName","checkAllWrapperStyle","dropdownWrapperClassName","dropdownWrapperStyle"]);return react_1.default.createElement("div",{className:selectorPrefix},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-check-all"),null!=r?r:""),style:null!=t?t:{}},react_1.default.createElement(CheckAllWrapper_1.default,{value:n.value,onChange:function(){for(var e,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];null!=(e=n.onChange)&&e.call.apply(e,__spreadArray([n],r,!1))},options:null!=(r=null==(e=null==n?void 0:n.options)?void 0:e.map(function(e){return{label:e.label,value:e.value}}))?r:[]})),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-body"),null!=l?l:""),style:null!=a?a:{}},react_1.default.createElement(VerticalCheckbox_1.default,__assign({},n))))};exports.default=(0,react_1.memo)(VerticalCheckAllCheckbox);
//# sourceMappingURL=VerticalCheckAllCheckbox.js.map
