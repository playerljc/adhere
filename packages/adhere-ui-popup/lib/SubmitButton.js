"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&("get"in i?t.__esModule:!i.writable&&!i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},antd_mobile_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd-mobile")),react_1=__importStar(require("react")),SubmitButton=function(n){var e=(0,react_1.useState)(!1),r=e[0],i=e[1];return react_1.default.createElement(antd_mobile_1.Button,__assign({loading:r},n,{onClick:function(e){var t;n.onClick&&!r&&(i(!0),null!=(e=null==(t=null==(t=null==(e=n.onClick(e))?void 0:e.then)?void 0:t.call(e,function(){return i(!1)}))?void 0:t.catch))&&e.call(t,function(){return i(!1)})}}),n.children)};exports.default=SubmitButton;
//# sourceMappingURL=SubmitButton.js.map
