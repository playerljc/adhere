"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),react_1=__importStar(require("react")),MulitSelectFormItem_1=__importDefault(require("../MulitSelectFormItem")),CheckBoxSelectFormItem=function(t){var e=react_1.useState(""),r=e[0],n=e[1];return react_1.default.createElement(MulitSelectFormItem_1.default,{selectProps:__assign({value:t.value,dropdownRender:function(){var e=r?t.dataSource.filter(function(e){return e.label.startsWith(r)}):t.dataSource;return react_1.default.createElement(antd_1.Checkbox.Group,__assign({style:{padding:10}},t,{onChange:function(e){t.onChange(e)}}),react_1.default.createElement(antd_1.Space,{direction:"vertical"},e.map(function(e){return react_1.default.createElement(antd_1.Checkbox,{key:e.value,value:e.value,disabled:e.disabled},e.label)})))},onChange:function(e){t.onChange(e)},filterOption:function(e){return n(e),!1},onBlur:function(){n("")},onClear:function(){n("")}},t.selectProps||{}),dataSource:t.dataSource})};exports.default=CheckBoxSelectFormItem;
//# sourceMappingURL=index.js.map
