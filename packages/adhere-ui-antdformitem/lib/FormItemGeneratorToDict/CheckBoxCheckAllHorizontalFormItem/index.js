"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.get-own-property-descriptor.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.array.map.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),AntFormItemNormalize_1=require("../../AntFormItemNormalize"),CheckBoxHorizontalFormItem_1=__importDefault(require("../CheckBoxHorizontalFormItem")),CheckBoxCheckAllHorizontalFormItem=function(e){var t=e.dataSource,r=__rest(e,["dataSource"]),e=(0,react_1.useState)((r.value||[]).length===t.length),o=e[0],n=e[1];return(0,react_1.useEffect)(function(){n((r.value||[]).length===t.length)},[r.value,t]),react_1.default.createElement("div",null,react_1.default.createElement("div",{style:{marginBottom:10}},react_1.default.createElement(AntFormItemNormalize_1.Checkbox,{checked:o,onChange:function(e){e.target.checked?null!=(e=null==r?void 0:r.onChange)&&e.call(r,t.map(function(e){return e.value})):null!=(e=null==r?void 0:r.onChange)&&e.call(r,[])}},adhere_util_intl_1.default.v("全选"))),react_1.default.createElement("div",null,react_1.default.createElement(CheckBoxHorizontalFormItem_1.default,__assign({},r,{dataSource:t}))))};exports.default=CheckBoxCheckAllHorizontalFormItem;
//# sourceMappingURL=index.js.map
