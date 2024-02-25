"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,l=arguments.length;t<l;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,l){void 0===l&&(l=t);var a=Object.getOwnPropertyDescriptor(r,t);a&&("get"in a?r.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,l,a)}:function(e,r,t,l){e[l=void 0===l?t:l]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__rest=function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),modal_1=__importDefault(require("../modal")),useDatePopover_1=__importDefault(require("../useDatePopover")),selectorPrefix="adhere-mobile-ui-ant-hoc-date-modal",InternalDateModal=(0,react_1.memo)(function(e){var r=e.placeholder,t=e.okLabel,l=e.cancelLabel,a=e.locale,o=e.renderDisplay,n=e.value,i=e.onChange,u=e.modalTriggerProps,e=__rest(e,["placeholder","okLabel","cancelLabel","locale","renderDisplay","value","onChange","modalTriggerProps"]),s=(0,useDatePopover_1.default)(__assign({popoverTriggerClassName:(0,classnames_1.default)(selectorPrefix,null!=(s=null==(s=null==u?void 0:u.popoverTriggerProps)?void 0:s.className)?s:""),popoverTriggerStyle:null!=(s=null==(s=null==u?void 0:u.popoverTriggerProps)?void 0:s.style)?s:{},placeholder:r,value:n,okLabel:t,cancelLabel:l,renderDisplay:o,locale:a},e)),r=s.actions,t=s.popoverTriggerProps,l=s.children;return react_1.default.createElement(modal_1.default.Trigger,__assign({},u,{title:null!=(o=null==u?void 0:u.title)?o:react_1.default.createElement("span",null," "),value:n,onChange:i,actions:r,popoverTriggerProps:__assign(__assign({},t),null!=(a=null==u?void 0:u.popoverTriggerProps)?a:{})}),l)});exports.default=InternalDateModal;
//# sourceMappingURL=InternalDateModal.js.map
