"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var u=arguments[t],i=0,o=u.length;i<o;i++,a++)n[a]=u[i];return n},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),react_1=__importStar(require("react")),MulitSelectFormItem_1=__importDefault(require("../MulitSelectFormItem")),TransferSelectFormItem=function(n){var e=react_1.useState(""),t=e[0],r=e[1],e=react_1.useState([]),a=e[0],u=e[1];return react_1.default.createElement(MulitSelectFormItem_1.default,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=t?n.dataSource.filter(function(e){return e.label.startsWith(t)}):n.dataSource;return react_1.default.createElement(antd_1.Transfer,__assign({},n,{selectedKeys:a,targetKeys:n.value,dataSource:e.map(function(e){return{key:e.value,title:e.label,description:e.label}}),render:function(e){return e.title},onChange:function(e,t,r){n.onChange(e)},onSelectChange:function(e,t){u(__spreadArrays(e,t))}}))},onChange:function(e){n.onChange(e)},filterOption:function(e){return r(e),!1},onBlur:function(){r("")},onClear:function(){r("")}},n.selectProps||{}),dataSource:n.dataSource})};exports.default=TransferSelectFormItem;
//# sourceMappingURL=index.js.map
