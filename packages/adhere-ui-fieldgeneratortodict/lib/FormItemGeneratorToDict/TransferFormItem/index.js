"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),TransferFormItem=function(e){var r=e.dataSource,e=__rest(e,["dataSource"]);return react_1.default.createElement(adhere_ui_anthoc_1.Transfer,__assign({dataSource:r.map(function(e){return __assign(__assign({},e),{key:e.value,title:e.label,description:e.label})}),render:function(e){return e.title},targetKeys:e.value},e))};exports.default=TransferFormItem;
//# sourceMappingURL=index.js.map