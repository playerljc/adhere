"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),ItemFactory_1=require("../ItemFactory"),RadioButtonFormItem_1=__importDefault(require("../RadioButtonFormItem")),RadioCustomFormItem_1=__importDefault(require("../RadioCustomFormItem")),RadioHorizontalFormItem_1=__importDefault(require("../RadioHorizontalFormItem")),RadioSelectFormItem_1=__importDefault(require("../RadioSelectFormItem")),RadioVerticalFormItem_1=__importDefault(require("../RadioVerticalFormItem")),util_1=require("../util");(0,ItemFactory_1.setItem)("Radio","VerticalFormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[r].value,t=a instanceof Function?a(t):a;return react_1.default.createElement(RadioVerticalFormItem_1.default,__assign({},e,{dataSource:t}))}}),(0,ItemFactory_1.setItem)("Radio","HorizontalFormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[r].value,t=a instanceof Function?a(t):a;return react_1.default.createElement(RadioHorizontalFormItem_1.default,__assign({},e,{dataSource:t}))}}),(0,ItemFactory_1.setItem)("Radio","ButtonFormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[r].value,t=a instanceof Function?a(t):a;return react_1.default.createElement(RadioButtonFormItem_1.default,__assign({},e,{dataSource:t}))}}),(0,ItemFactory_1.setItem)("Radio","SelectFormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[r].value,t=a instanceof Function?a(t):a;return react_1.default.createElement(RadioSelectFormItem_1.default,__assign({},e,{dataSource:t}))}}),(0,ItemFactory_1.setItem)("Radio","CustomFormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[r].value,t=a instanceof Function?a(t):a;return react_1.default.createElement(RadioCustomFormItem_1.default,__assign({},e,{dataSource:t}))}}),(0,ItemFactory_1.setItem)("RadioDynamic","VerticalFormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=(0,react_1.useState)([]),r=a[0],n=a[1],c=adhere_util_dict_1.default.value[u].value;return(0,react_1.useEffect)(function(){c.then&&c.then(function(e){n(e)})},[]),(0,react_1.useEffect)(function(){c instanceof Function&&c(t).then(function(e){n(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(RadioVerticalFormItem_1.default,__assign({},e,{dataSource:r}))}}),(0,ItemFactory_1.setItem)("RadioDynamic","HorizontalFormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=(0,react_1.useState)([]),r=a[0],n=a[1],c=adhere_util_dict_1.default.value[u].value;return(0,react_1.useEffect)(function(){c.then&&c.then(function(e){n(e)})},[]),(0,react_1.useEffect)(function(){c instanceof Function&&c(t).then(function(e){n(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(RadioHorizontalFormItem_1.default,__assign({},e,{dataSource:r}))}}),(0,ItemFactory_1.setItem)("RadioDynamic","ButtonFormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=(0,react_1.useState)([]),r=a[0],n=a[1],c=adhere_util_dict_1.default.value[u].value;return(0,react_1.useEffect)(function(){c.then&&c.then(function(e){n(e)})},[]),(0,react_1.useEffect)(function(){c instanceof Function&&c(t).then(function(e){n(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(RadioButtonFormItem_1.default,__assign({},e,{dataSource:r}))}}),(0,ItemFactory_1.setItem)("RadioDynamic","SelectFormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=(0,react_1.useState)([]),r=a[0],n=a[1],c=adhere_util_dict_1.default.value[u].value;return(0,react_1.useEffect)(function(){c.then&&c.then(function(e){n(e)})},[]),(0,react_1.useEffect)(function(){c instanceof Function&&c(t).then(function(e){n(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(RadioSelectFormItem_1.default,__assign({},e,{dataSource:r}))}}),(0,ItemFactory_1.setItem)("RadioDynamic","CustomFormItem",function(u){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=(0,react_1.useState)([]),r=a[0],n=a[1],c=adhere_util_dict_1.default.value[u].value;return(0,react_1.useEffect)(function(){c.then&&c.then(function(e){n(e)})},[]),(0,react_1.useEffect)(function(){c instanceof Function&&c(t).then(function(e){n(e)})},[(0,util_1.deepDep)(t)]),react_1.default.createElement(RadioCustomFormItem_1.default,__assign({},e,{dataSource:r}))}});
//# sourceMappingURL=Radio.js.map
