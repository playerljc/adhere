"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,l)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__spreadArray=function(e,t,a){if(a||2===arguments.length)for(var r,l=0,n=t.length;l<n;l++)!r&&l in t||((r=r||Array.prototype.slice.call(t,0,l))[l]=t[l]);return e.concat(r||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_flexlayout_1=__importDefault(require("@baifendian/adhere-ui-flexlayout")),adhere_ui_hooks_1=__importDefault(require("@baifendian/adhere-ui-hooks")),adhere_ui_space_1=__importDefault(require("@baifendian/adhere-ui-space")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),input_1=__importDefault(require("../input")),tag_1=__importDefault(require("../tag")),selectorPrefix="adhere-ui-anthoc-input-multiple",usePropToState=adhere_ui_hooks_1.default.usePropToState,InputMultiple=function(e){var t=e.className,a=e.style,r=e.tagWrapperClassName,l=e.tagWrapperStyle,n=e.inputProps,u=e.tagProps,i=e.renderAdd,o=e.renderClear,c=e.direction,_=e.isCheckAll,s=e.options,f=e.value,d=e.onChange,e=(0,react_1.useState)(""),p=e[0],m=e[1],e=usePropToState(s),h=e[0],g=e[1],s=usePropToState(f),e=s[0],v=s[1],f=(0,react_1.useMemo)(function(){return null!=u?u:{}},[u]),b=(0,react_1.useMemo)(function(){return null!=c?c:"horizontal"},[c]),y=(0,react_1.useMemo)(function(){return!!_},[_]),s=(0,react_1.useMemo)(function(){return(null!=h?h:[]).map(function(e){return{value:e.value,children:e.label}})},[h]),P=(0,react_1.useMemo)(function(){return"vertical"===b?y?tag_1.default.VerticalCheckAllCheckableTagGroup:tag_1.default.VerticalCheckableTagGroup:"horizontal"===b&&y?tag_1.default.HorizontalCheckAllCheckableTagGroup:tag_1.default.HorizontalCheckableTagGroup},[b,y]);return react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,t),style:null!=a?a:{}},react_1.default.createElement(adhere_ui_flexlayout_1.default,{direction:"horizontal"},react_1.default.createElement(adhere_ui_space_1.default.Group,{direction:"horizontal",size:10},react_1.default.createElement(adhere_ui_flexlayout_1.default.Auto,null,react_1.default.createElement(input_1.default,__assign({placeholder:adhere_util_intl_1.default.v("请输入关键字"),showCount:!1,allowClear:!1},null!=n?n:{},{value:p,onChange:function(e){m(e.target.value)}}))),react_1.default.createElement(adhere_ui_flexlayout_1.default.Fixed,{fit:!0},react_1.default.createElement("div",{onClick:function(){var t=p.trim();t&&!(null!=h?h:[]).find(function(e){return e.value===t})&&g(function(e){return __spreadArray(__spreadArray([],null!=e?e:[],!0),[{label:p,value:p}],!1)})},className:"".concat(selectorPrefix,"-btn-wrapper")},null!=(t=null==i?void 0:i())?t:react_1.default.createElement(icons_1.PlusOutlined,{className:"".concat(selectorPrefix,"-btn")}))),react_1.default.createElement(adhere_ui_flexlayout_1.default.Fixed,{fit:!0},react_1.default.createElement("div",{onClick:function(){g([]),m(""),v([]),null!=d&&d([])},className:"".concat(selectorPrefix,"-btn-wrapper")},null!=(a=null==o?void 0:o())?a:react_1.default.createElement(icons_1.CloseOutlined,{className:"".concat(selectorPrefix,"-btn")}))))),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-tag-wrapper"),null!=r?r:""),style:null!=l?l:{}},react_1.default.createElement(P,__assign({mode:"multiple"},f,{wrap:!0,options:null!=s?s:[],value:e,onChange:function(e){v(e),null!=d&&d(e)}}))))};exports.default=InputMultiple;
//# sourceMappingURL=InputMultiple.js.map
