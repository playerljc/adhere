"use strict";require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.object.get-own-property-descriptor.js"),require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.array.map.js");var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),AntFormItemNormalize_1=require("../../AntFormItemNormalize"),MulitSelectFormItem_1=__importDefault(require("../MulitSelectFormItem")),CheckBoxSelectFormItem=function(r){var e=(0,react_1.useState)(""),t=e[0],a=e[1],e=(0,react_1.useState)(r.value.length===r.dataSource.length),n=e[0],l=e[1];return(0,react_1.useEffect)(function(){l(r.value.length===r.dataSource.length)},[r.value,r.dataSource]),react_1.default.createElement(MulitSelectFormItem_1.default,{selectProps:__assign({value:r.value,dropdownRender:function(){var e=t?r.dataSource.filter(function(e){return-1!==e.label.indexOf(t)}):r.dataSource;return react_1.default.createElement("div",null,react_1.default.createElement("div",null,react_1.default.createElement(AntFormItemNormalize_1.Checkbox,{style:{marginLeft:10},checked:n,onChange:function(e){e.target.checked?(null!=(e=null==r?void 0:r.onChange)&&e.call(r,r.dataSource.map(function(e){return e.value})),l(!0)):(null!=(e=null==r?void 0:r.onChange)&&e.call(r,[]),l(!1))}},adhere_util_intl_1.default.v("全选"))),react_1.default.createElement("div",null,react_1.default.createElement(AntFormItemNormalize_1.Checkbox.Group,__assign({style:{padding:10}},r,{onChange:function(e){var t;null!=(t=null==r?void 0:r.onChange)&&t.call(r,e),l(e.length===(r.dataSource||[]).length)}}),react_1.default.createElement(AntFormItemNormalize_1.Space,{direction:"vertical"},e.map(function(e){return react_1.default.createElement(AntFormItemNormalize_1.Checkbox,{key:e.value,value:e.value,disabled:e.disabled},e.label)})))))},onChange:function(e){var t;null!=(t=null==r?void 0:r.onChange)&&t.call(r,e),l(e.length===(r.dataSource||[]).length)},filterOption:function(e){return a(e),!1},onBlur:function(){a("")},onClear:function(){a("")}},r.selectProps||{}),dataSource:r.dataSource})};exports.default=CheckBoxSelectFormItem;
//# sourceMappingURL=index.js.map
