"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),MulitSelectFormItem_1=__importDefault(require("../MulitSelectFormItem")),TableFormItem_1=__importDefault(require("../TableFormItem")),TableMulitSelectFormItem=function(e){var r=e.dataSource,n=__rest(e,["dataSource"]),e=(0,react_1.useState)(""),t=e[0],a=e[1],e=(0,react_1.useState)(n.value||[]),o=e[0],u=e[1],e=(0,react_1.useState)(n.value?n.value.map(function(t){return r.find(function(e){return e[n.rowKey||"id"]===t})}):[]),l=e[0],i=e[1];return(0,react_1.useEffect)(function(){n.value?(u(n.value),i(n.value.map(function(t){return r.find(function(e){return e[n.rowKey||"id"]===t})}))):(u([]),i([]))},[n.value]),react_1.default.createElement(MulitSelectFormItem_1.default,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=t?r.filter(function(e){return-1!==e[n.labelKey||"name"].indexOf(t)}):r;return react_1.default.createElement(TableFormItem_1.default,__assign({rowSelection:{type:"checkbox",selectedRowKeys:o,selectedRows:l,onChange:function(e,t){u(e),i(t),null!=(t=null==n?void 0:n.onChange)&&t.call(n,e.length?e:[])}}},n,{dataSource:e}))},onChange:function(e){var t;null!=(t=null==n?void 0:n.onChange)&&t.call(n,e)},filterOption:function(){return!1},onSearch:function(e){return a(e)},onBlur:function(){a("")},onClear:function(){a("")}},n.selectProps||{}),dataSource:r.map(function(e){return{label:e[n.labelKey||"name"],value:e[n.rowKey||"id"]}})})};exports.default=TableMulitSelectFormItem;
//# sourceMappingURL=index.js.map
