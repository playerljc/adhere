"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),SelectFormItem_1=__importDefault(require("../SelectFormItem")),TagVerticalFormItem_1=__importDefault(require("../TagVerticalFormItem")),CheckableTag=adhere_ui_anthoc_1.Tag.CheckableTag,TagSelectFormItem=function(n){var e=(0,react_1.useState)(""),t=e[0],r=e[1];return react_1.default.createElement(SelectFormItem_1.default,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=t?n.dataSource.filter(function(e){return-1!==e.label.indexOf(t)}):n.dataSource;return react_1.default.createElement(TagVerticalFormItem_1.default,__assign({},n,{dataSource:e,renderItem:function(e){var r=e.record;return{props:{checked:n.value==r.value,onChange:function(e){var t;null!=(t=null==n?void 0:n.onChange)&&t.call(n,e?r.value:"")}},component:CheckableTag,children:null==r?void 0:r.label}}}))},onChange:function(e){var t;null!=(t=null==n?void 0:n.onChange)&&t.call(n,e)},filterOption:function(){return!1},onSearch:function(e){return r(e)},onBlur:function(){r("")},onClear:function(){r("")}},null!=(e=n.selectProps)?e:{}),dataSource:n.dataSource})};exports.default=TagSelectFormItem;
//# sourceMappingURL=index.js.map
