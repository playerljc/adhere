"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,o){void 0===o&&(o=t);var l=Object.getOwnPropertyDescriptor(r,t);l&&("get"in l?r.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,l)}:function(e,r,t,o){e[o=void 0===o?t:o]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__rest=function(e,r){var t={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&r.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)r.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),dialog_1=__importDefault(require("../dialog")),useDatePopover_1=__importDefault(require("../useDatePopover")),selectorPrefix="adhere-mobile-ui-ant-hoc-date-dialog",InternalDateDialog=(0,react_1.memo)(function(e){var r=e.placeholder,t=e.okLabel,o=e.cancelLabel,l=e.locale,a=e.renderDisplay,n=e.value,i=e.onChange,u=e.dialogTriggerProps,e=__rest(e,["placeholder","okLabel","cancelLabel","locale","renderDisplay","value","onChange","dialogTriggerProps"]),s=(0,useDatePopover_1.default)(__assign({popoverTriggerClassName:(0,classnames_1.default)(selectorPrefix,null!=(s=null==(s=null==u?void 0:u.popoverTriggerProps)?void 0:s.className)?s:""),popoverTriggerStyle:null!=(s=null==(s=null==u?void 0:u.popoverTriggerProps)?void 0:s.style)?s:{},placeholder:r,value:n,okLabel:t,cancelLabel:o,renderDisplay:a,locale:l},e)),r=s.actions,t=s.popoverTriggerProps,o=s.children;return react_1.default.createElement(dialog_1.default.Trigger,__assign({},u,{title:null==u?void 0:u.title,value:n,onChange:i,actions:r,showCloseButton:!1,popoverTriggerProps:__assign(__assign({},t),null!=(a=null==u?void 0:u.popoverTriggerProps)?a:{})}),o)});exports.default=InternalDateDialog;
//# sourceMappingURL=InternalDateDialog.js.map
