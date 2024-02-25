"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,l=arguments.length;t<l;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,l){void 0===l&&(l=t);var o=Object.getOwnPropertyDescriptor(r,t);o&&("get"in o?r.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,l,o)}:function(e,r,t,l){e[l=void 0===l?t:l]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__rest=function(e,r){var t={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)r.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(t[o[l]]=e[o[l]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),dialog_1=__importDefault(require("../dialog")),useTimePopover_1=__importDefault(require("../useTimePopover")),selectorPrefix="adhere-mobile-ui-ant-hoc-time-dialog",InternalTimeDialog=(0,react_1.memo)(function(e){var r=e.placeholder,t=e.okLabel,l=e.cancelLabel,o=e.locale,a=e.renderDisplay,n=e.value,i=e.onChange,u=e.dialogTriggerProps,e=__rest(e,["placeholder","okLabel","cancelLabel","locale","renderDisplay","value","onChange","dialogTriggerProps"]),s=(0,useTimePopover_1.default)(__assign({popoverTriggerClassName:(0,classnames_1.default)(selectorPrefix,null!=(s=null==(s=null==u?void 0:u.popoverTriggerProps)?void 0:s.className)?s:""),popoverTriggerStyle:null!=(s=null==(s=null==u?void 0:u.popoverTriggerProps)?void 0:s.style)?s:{},placeholder:r,value:n,okLabel:t,cancelLabel:l,renderDisplay:a,locale:o},e)),r=s.actions,t=s.popoverTriggerProps,l=s.children;return react_1.default.createElement(dialog_1.default.Trigger,__assign({},u,{title:null!=(a=null==u?void 0:u.title)?a:react_1.default.createElement("span",null," "),value:n,onChange:i,actions:r,showCloseButton:!1,popoverTriggerProps:__assign(__assign({},t),null!=(o=null==u?void 0:u.popoverTriggerProps)?o:{})}),l)});exports.default=InternalTimeDialog;
//# sourceMappingURL=InternalTimeDialog.js.map