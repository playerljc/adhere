"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var l,r=1,t=arguments.length;r<t;r++)for(var c in l=arguments[r])Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,l,r,t){void 0===t&&(t=r);var c=Object.getOwnPropertyDescriptor(l,r);c&&("get"in c?l.__esModule:!c.writable&&!c.configurable)||(c={enumerable:!0,get:function(){return l[r]}}),Object.defineProperty(e,t,c)}:function(e,l,r,t){e[t=void 0===t?r:t]=l[r]},__setModuleDefault=Object.create?function(e,l){Object.defineProperty(e,"default",{enumerable:!0,value:l})}:function(e,l){e.default=l},__importStar=function(e){if(e&&e.__esModule)return e;var l={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(l,e,r);return __setModuleDefault(l,e),l},__rest=function(e,l){var r={};for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&l.indexOf(c)<0&&(r[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,c=Object.getOwnPropertySymbols(e);t<c.length;t++)l.indexOf(c[t])<0&&Object.prototype.propertyIsEnumerable.call(e,c[t])&&(r[c[t]]=e[c[t]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),useListCheckAll_1=__importDefault(require("../useListCheckAll")),CheckboxCheckList_1=__importDefault(require("./CheckboxCheckList")),selectorPrefix="adhere-mobile-ui-ant-hoc-check-box-check-all-check-list",InternalCheckboxCheckAllCheckList=(0,react_1.memo)(function(e){var l=e.checkAllWrapperClassName,r=e.checkAllWrapperStyle,t=e.checkAllBodyWrapperClassName,c=e.checkAllBodyWrapperStyle,a=e.renderCheckAll,n=e.checkAllLabel,o=e.onCheckAllChange,i=__rest(e,["checkAllWrapperClassName","checkAllWrapperStyle","checkAllBodyWrapperClassName","checkAllBodyWrapperStyle","renderCheckAll","checkAllLabel","onCheckAllChange"]),e=(0,react_1.useMemo)(function(){return react_1.default.createElement(CheckboxCheckList_1.default,__assign({multiple:!0},i))},[i]);return(0,useListCheckAll_1.default)({checkAllWrapperClassName:l,checkAllWrapperStyle:r,checkAllBodyWrapperClassName:t,checkAllBodyWrapperStyle:c,renderCheckAll:a,checkAllLabel:n,onCheckAllChange:o,value:null!=(l=i.value)?l:[],options:null!=(t=null==(r=null==i?void 0:i.options)?void 0:r.map(function(e){return e.value}))?t:[],selectorPrefix:selectorPrefix,childrenOrigin:e})}),CheckboxCheckAllCheckList=InternalCheckboxCheckAllCheckList;CheckboxCheckAllCheckList.displayName="CheckboxCheckAllCheckList",exports.default=CheckboxCheckAllCheckList;
//# sourceMappingURL=CheckboxCheckAllCheckList.js.map