"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,u=t.length;a<u;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),MultiSelectFormItem_1=__importDefault(require("../MultiSelectFormItem")),TransferSelectFormItem=function(a){var e=(0,react_1.useState)(""),t=e[0],r=e[1],e=(0,react_1.useState)([]),n=e[0],u=e[1];return react_1.default.createElement(MultiSelectFormItem_1.default,{selectProps:__assign({value:a.value,dropdownRender:function(){var e=t?a.dataSource.filter(function(e){return-1!==e.label.indexOf(t)}):a.dataSource;return react_1.default.createElement(adhere_ui_anthoc_1.Transfer,__assign({},a,{selectedKeys:n,targetKeys:a.value,dataSource:e.map(function(e){return{key:e.value,title:e.label,description:e.label}}),render:function(e){return e.title},onChange:function(e,t,r){var n;null!=(n=null==a?void 0:a.onChange)&&n.call(a,e)},onSelectChange:function(e,t){u(__spreadArray(__spreadArray([],e,!0),t,!0))}}))},onChange:function(e){var t;null!=(t=null==a?void 0:a.onChange)&&t.call(a,e)},filterOption:function(){return!1},onSearch:function(e){return r(e)},onBlur:function(){r("")},onClear:function(){r("")}},null!=(e=a.selectProps)?e:{}),dataSource:a.dataSource})};exports.default=TransferSelectFormItem;
//# sourceMappingURL=index.js.map
