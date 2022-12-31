"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.get-own-property-descriptor.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.string.ends-with.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/web.dom-collections.for-each.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),react_1=__importStar(require("react")),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),TransferSelectFormItem_1=__importDefault(require("../TransferSelectFormItem")),FormItemComponents={};exports.default=function(){var e=Object.keys(adhere_util_dict_1.default.handlers).filter(function(e){return e.endsWith("Transfer")}),t=Object.keys(adhere_util_dict_1.default.handlers).filter(function(e){return e.endsWith("DynamicTransfer")});return FormItemComponents.TransferFormItem=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return react_1.default.createElement(antd_1.Transfer,__assign({dataSource:t.map(function(e){return __assign(__assign({},e),{key:e.value,title:e.label,description:e.label})}),render:function(e){return e.title},targetKeys:e.value},e))},FormItemComponents.TransferSelectFormItem=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return react_1.default.createElement(TransferSelectFormItem_1.default,__assign({},e,{dataSource:t}))},e.forEach(function(n){FormItemComponents["".concat(n,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=adhere_util_dict_1.default.value[n].value,t=r instanceof Function?r(t):r,r=FormItemComponents.TransferFormItem;return react_1.default.createElement(r,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(n,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=adhere_util_dict_1.default.value[n].value,t=r instanceof Function?r(t):r,r=FormItemComponents.TransferSelectFormItem;return react_1.default.createElement(r,__assign({},e,{dataSource:t}))}}),t.forEach(function(c){FormItemComponents["".concat(c,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(0,react_1.useState)([]),n=r[0],a=r[1],o=adhere_util_dict_1.default.value[c].value,r=((0,react_1.useEffect)(function(){o.then&&o.then(function(e){a(e)})},[]),(0,react_1.useEffect)(function(){o instanceof Function&&o(t).then(function(e){a(e)})},[t]),FormItemComponents.TransferFormItem);return react_1.default.createElement(r,__assign({},e,{dataSource:n}))},FormItemComponents["".concat(c,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(0,react_1.useState)([]),n=r[0],a=r[1],o=adhere_util_dict_1.default.value[c].value,r=((0,react_1.useEffect)(function(){o.then&&o.then(function(e){a(e)})},[]),(0,react_1.useEffect)(function(){o instanceof Function&&o(t).then(function(e){a(e)})},[t]),FormItemComponents.TransferSelectFormItem);return react_1.default.createElement(r,__assign({},e,{dataSource:n}))}}),FormItemComponents};
//# sourceMappingURL=Transfer.js.map
