"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var l,t=1,r=arguments.length;t<r;t++)for(var c in l=arguments[t])Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,l,t,r){void 0===r&&(r=t);var c=Object.getOwnPropertyDescriptor(l,t);c&&("get"in c?l.__esModule:!c.writable&&!c.configurable)||(c={enumerable:!0,get:function(){return l[t]}}),Object.defineProperty(e,r,c)}:function(e,l,t,r){e[r=void 0===r?t:r]=l[t]},__setModuleDefault=Object.create?function(e,l){Object.defineProperty(e,"default",{enumerable:!0,value:l})}:function(e,l){e.default=l},__importStar=function(e){if(e&&e.__esModule)return e;var l={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(l,e,t);return __setModuleDefault(l,e),l},__rest=function(e,l){var t={};for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&l.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,c=Object.getOwnPropertySymbols(e);r<c.length;r++)l.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(t[c[r]]=e[c[r]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),ListCheckAll_1=__importDefault(require("../ListCheckAll")),CheckboxCheckList_1=__importDefault(require("./CheckboxCheckList")),selectorPrefix="adhere-mobile-ui-ant-hoc-check-box-check-all-check-list",InternalCheckboxCheckAllCheckList=(0,react_1.memo)(function(e){var l=e.checkAllWrapperClassName,t=e.checkAllWrapperStyle,r=e.checkAllBodyWrapperClassName,c=e.checkAllBodyWrapperStyle,a=e.renderCheckAll,n=e.checkAllLabel,o=e.onCheckAllChange,i=__rest(e,["checkAllWrapperClassName","checkAllWrapperStyle","checkAllBodyWrapperClassName","checkAllBodyWrapperStyle","renderCheckAll","checkAllLabel","onCheckAllChange"]),e=(0,react_1.useMemo)(function(){return react_1.default.createElement(CheckboxCheckList_1.default,__assign({multiple:!0},i))},[i]);return react_1.default.createElement(ListCheckAll_1.default,{checkAllWrapperClassName:l,checkAllWrapperStyle:t,checkAllBodyWrapperClassName:r,checkAllBodyWrapperStyle:c,renderCheckAll:a,checkAllLabel:n,onCheckAllChange:o,value:null!=(l=i.value)?l:[],options:null!=(r=null==(t=null==i?void 0:i.options)?void 0:t.map(function(e){return e.value}))?r:[],selectorPrefix:selectorPrefix,childrenOrigin:e})}),CheckboxCheckAllCheckList=InternalCheckboxCheckAllCheckList;CheckboxCheckAllCheckList.displayName="CheckboxCheckAllCheckList",exports.default=CheckboxCheckAllCheckList;
//# sourceMappingURL=CheckboxCheckAllCheckList.js.map
