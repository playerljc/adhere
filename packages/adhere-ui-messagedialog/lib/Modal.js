"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0,require("antd")),react_1=__importStar(require("react")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),ModalDialog=(exports.selectorPrefix="adhere-ui-messagedialog",function(e){var t=e.config,r=e.closeBtn,n=e.close,e=e.children,a=t.footer,o=void 0===a?[]:a,a=t.centered,a=void 0===a||a,t=__rest(t,["footer","centered"]);var l=(0,react_1.useMemo)(function(){e={key:"close",title:adhere_util_intl_1.default.v("取消"),type:"default",onClick:function(){return null==n?void 0:n()}},Array.isArray(o)&&0===o.length&&(e.type="primary");var e=react_1.default.createElement(antd_1.Button,__assign({},e),adhere_util_intl_1.default.v("取消")),t=null;return o?t=r?Array.isArray(o)?__spreadArray(__spreadArray([],o,!0),[e],!1):[o,e]:o:r&&(t=e),t},[o,r]),i=(0,react_1.useCallback)(function(){return null==n?void 0:n()},[]);return react_1.default.createElement(antd_1.Modal,__assign({centered:a,wrapClassName:exports.selectorPrefix,onCancel:i,open:!0},t,{footer:l}),e)});exports.default=(0,react_1.memo)(ModalDialog);
//# sourceMappingURL=Modal.js.map