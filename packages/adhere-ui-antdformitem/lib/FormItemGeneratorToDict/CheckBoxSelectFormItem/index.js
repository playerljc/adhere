"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.get-own-property-descriptor.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.string.starts-with.js"),require("core-js/modules/es.array.map.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),AntFormItemNormalize_1=require("../../AntFormItemNormalize"),MulitSelectFormItem_1=__importDefault(require("../MulitSelectFormItem")),CheckBoxSelectFormItem=function(r){var e=(0,react_1.useState)(""),t=e[0],o=e[1];return react_1.default.createElement(MulitSelectFormItem_1.default,{selectProps:__assign({value:r.value,dropdownRender:function(){var e=t?r.dataSource.filter(function(e){return e.label.startsWith(t)}):r.dataSource;return react_1.default.createElement(AntFormItemNormalize_1.Checkbox.Group,__assign({style:{padding:10}},r,{onChange:function(e){var t;null!=(t=null==r?void 0:r.onChange)&&t.call(r,e)}}),react_1.default.createElement(AntFormItemNormalize_1.Space,{direction:"vertical"},e.map(function(e){return react_1.default.createElement(AntFormItemNormalize_1.Checkbox,{key:e.value,value:e.value,disabled:e.disabled},e.label)})))},onChange:function(e){var t;null!=(t=null==r?void 0:r.onChange)&&t.call(r,e)},filterOption:function(e){return o(e),!1},onBlur:function(){o("")},onClear:function(){o("")}},r.selectProps||{}),dataSource:r.dataSource})};exports.default=CheckBoxSelectFormItem;
//# sourceMappingURL=index.js.map
