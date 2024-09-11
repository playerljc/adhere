"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},MobileSignatureCore_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("./MobileSignatureCore"))),classnames_1=__importDefault(require("classnames")),react_1=__importStar(require("react")),adhere_mobile_ui_anthoc_1=require("@baifendian/adhere-mobile-ui-anthoc"),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),selectorPrefix="adhere-ui-mobile-signature",InternalMobileSignature=(0,react_1.memo)((0,react_1.forwardRef)(function(e,t){var r=e.className,a=e.style,n=e.value,i=e.onChange,l=(e.modalProps,e.coreProps),u=(0,react_1.useRef)(null),e=(0,react_1.useCallback)(function(){return react_1.default.createElement(adhere_mobile_ui_anthoc_1.Modal.TriggerPrompt,{title:adhere_util_intl_1.default.v("编辑签名"),popoverTriggerProps:{renderTrigger:function(){return n?react_1.default.createElement("img",{src:n,alt:""}):react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-mask"))},adhere_util_intl_1.default.v("编辑签名"))}},actions:[{key:"submit",text:adhere_util_intl_1.default.v("保存"),primary:!0,onClick:function(){return new Promise(function(e){var t;u.current&&(u.current.isEmpty()?(i&&i(""),e("")):(t=u.current.save(),i&&i(t),e(t)))})}}]},react_1.default.createElement(MobileSignatureCore_1.default,__assign({ref:u},l)))},[l,n,i]);return(0,react_1.useImperativeHandle)(t,function(){return{isEmpty:function(){return!n}}}),react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,null!=r?r:""),style:null!=a?a:{}},e())})),MobileSignature=InternalMobileSignature;MobileSignature.SignatureCore=MobileSignatureCore_1.default,exports.default=MobileSignature;
//# sourceMappingURL=mobile.js.map
