"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var c in t=arguments[r])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var c=Object.getOwnPropertyDescriptor(t,r);c&&("get"in c?t.__esModule:!c.writable&&!c.configurable)||(c={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,c)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(r[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(r[c[a]]=e[c[a]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),ItemFactory_1=require("../ItemFactory"),TreeMulitSelectFormItem_1=__importDefault(require("../TreeMulitSelectFormItem")),TreeSelectFormItem_1=__importDefault(require("../TreeSelectFormItem")),TreeSelectLeafFormItem_1=__importDefault(require("../TreeSelectLeafFormItem")),TreeSelectLeafMulitFormItem_1=__importDefault(require("../TreeSelectLeafMulitFormItem")),util_1=require("../util"),TreeSelectFormItemWrap=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return react_1.default.createElement(TreeSelectFormItem_1.default,__assign({},e,{treeData:t}))},TreeSelectMulitFormItemWrap=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return react_1.default.createElement(TreeMulitSelectFormItem_1.default,__assign({},e,{treeData:t}))};(0,ItemFactory_1.setItem)("Tree","FormItem",function(a){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=adhere_util_dict_1.default.value[a].value,t=r instanceof Function?r(t):r;return react_1.default.createElement(TreeSelectFormItemWrap,__assign({},e,{dataSource:t}))}}),(0,ItemFactory_1.setItem)("Tree","LeafFormItem",function(a){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=adhere_util_dict_1.default.value[a].value,t=r instanceof Function?r(t):r;return react_1.default.createElement(TreeSelectLeafFormItem_1.default,__assign({},e,{dataSource:t}))}}),(0,ItemFactory_1.setItem)("Tree","MulitFormItem",function(a){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=adhere_util_dict_1.default.value[a].value,t=r instanceof Function?r(t):r;return react_1.default.createElement(TreeSelectMulitFormItemWrap,__assign({},e,{dataSource:t}))}}),(0,ItemFactory_1.setItem)("Tree","LeafMulitFormItem",function(a){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=adhere_util_dict_1.default.value[a].value,t=r instanceof Function?r(t):r;return react_1.default.createElement(TreeSelectLeafMulitFormItem_1.default,__assign({},e,{dataSource:t}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","FormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(0,react_1.useState)([]),a=r[0],c=r[1],n=adhere_util_dict_1.default.value[u].value;return(0,react_1.useEffect)(function(){n.then&&n.then(function(e){c(e)})},[]),(0,react_1.useEffect)(function(){n instanceof Function&&n(t).then(function(e){c(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(TreeSelectFormItemWrap,__assign({},e,{dataSource:a}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","LeafFormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(0,react_1.useState)([]),a=r[0],c=r[1],n=adhere_util_dict_1.default.value[u].value;return(0,react_1.useEffect)(function(){n.then&&n.then(function(e){c(e)})},[]),(0,react_1.useEffect)(function(){n instanceof Function&&n(t).then(function(e){c(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(TreeSelectLeafFormItem_1.default,__assign({},e,{dataSource:a}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","MulitFormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(0,react_1.useState)([]),a=r[0],c=r[1],n=adhere_util_dict_1.default.value[u].value;return(0,react_1.useEffect)(function(){n.then&&n.then(function(e){c(e)})},[]),(0,react_1.useEffect)(function(){n instanceof Function&&n(t).then(function(e){c(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(TreeSelectMulitFormItemWrap,__assign({},e,{dataSource:a}))}}),(0,ItemFactory_1.setItem)("TreeDynamic","LeafMulitFormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(0,react_1.useState)([]),a=r[0],c=r[1],n=adhere_util_dict_1.default.value[u].value;return(0,react_1.useEffect)(function(){n.then&&n.then(function(e){c(e)})},[]),(0,react_1.useEffect)(function(){n instanceof Function&&n(t).then(function(e){c(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(TreeSelectLeafMulitFormItem_1.default,__assign({},e,{dataSource:a}))}});
//# sourceMappingURL=TreeSelect.js.map
