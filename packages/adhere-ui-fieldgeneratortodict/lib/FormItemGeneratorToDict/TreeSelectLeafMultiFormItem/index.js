"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),TreeMultiSelectFormItem_1=__importDefault(require("../TreeMultiSelectFormItem")),hooks_1=require("../hooks"),TreeSelectLeafMultiFormItem=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]),t=(0,hooks_1.useTreeSelectLeaf)(t);return react_1.default.createElement(TreeMultiSelectFormItem_1.default,__assign({},e,{treeData:t}))};exports.default=TreeSelectLeafMultiFormItem;
//# sourceMappingURL=index.js.map
