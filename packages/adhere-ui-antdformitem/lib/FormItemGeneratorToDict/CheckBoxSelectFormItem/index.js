"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.get-own-property-descriptor.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.array.map.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,o){void 0===o&&(o=t);var n=Object.getOwnPropertyDescriptor(r,t);n&&("get"in n?r.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,n)}:function(e,r,t,o){e[o=void 0===o?t:o]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),AntFormItemNormalize_1=require("../../AntFormItemNormalize"),MulitSelectFormItem_1=__importDefault(require("../MulitSelectFormItem")),CheckBoxSelectFormItem=function(t){var e=(0,react_1.useState)(""),r=e[0],o=e[1];return react_1.default.createElement(MulitSelectFormItem_1.default,{selectProps:__assign({value:t.value,dropdownRender:function(){var e=r?t.dataSource.filter(function(e){return-1!==e.label.indexOf(r)}):t.dataSource;return react_1.default.createElement(AntFormItemNormalize_1.Checkbox.Group,__assign({style:{padding:10}},t,{onChange:function(e){var r;null!=(r=null==t?void 0:t.onChange)&&r.call(t,e)}}),react_1.default.createElement(AntFormItemNormalize_1.Space,{direction:"vertical"},e.map(function(e){return react_1.default.createElement(AntFormItemNormalize_1.Checkbox,{key:e.value,value:e.value,disabled:e.disabled},e.label)})))},onChange:function(e){var r;null!=(r=null==t?void 0:t.onChange)&&r.call(t,e)},filterOption:function(){return!1},onSearch:function(e){return o(e)},onBlur:function(){o("")},onClear:function(){o("")}},t.selectProps||{}),dataSource:t.dataSource})};exports.default=CheckBoxSelectFormItem;
//# sourceMappingURL=index.js.map
