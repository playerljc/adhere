"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),Trigger_1=__importDefault(require("./Trigger")),selectorPrefix="adhere-mobile-ui-ant-hoc-modal-trigger-prompt",InternalModalTriggerPrompt=(0,react_1.memo)(function(e){var t,r=e.submitAction,e=__rest(e,["submitAction"]),n=(0,react_1.useMemo)(function(){var e;return r?[__assign(__assign({},r),{text:null!=(e=null==r?void 0:r.text)?e:adhere_util_intl_1.default.v("确定")})]:[]},[r]);return react_1.default.createElement(Trigger_1.default,__assign({className:(0,classnames_1.default)(selectorPrefix,null!=(t=null==e?void 0:e.className)?t:""),actions:n},null!=e?e:{}))}),ModalTriggerPrompt=InternalModalTriggerPrompt;ModalTriggerPrompt.displayName="ModalTriggerPrompt",exports.default=ModalTriggerPrompt;
//# sourceMappingURL=TriggerPrompt.js.map