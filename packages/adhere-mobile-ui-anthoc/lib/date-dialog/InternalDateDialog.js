"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,t,o){void 0===o&&(o=t);var a=Object.getOwnPropertyDescriptor(r,t);a&&("get"in a?r.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,a)}:function(e,r,t,o){e[o=void 0===o?t:o]=r[t]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__rest=function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),dialog_1=__importDefault(require("../dialog")),useDatePopover_1=__importDefault(require("../useDatePopover")),selectorPrefix="adhere-mobile-ui-ant-hoc-date-dialog",InternalDateDialog=(0,react_1.memo)(function(e){var r=e.value,t=e.onChange,o=e.dialogTriggerProps,e=__rest(e,["value","onChange","dialogTriggerProps"]),a=(0,useDatePopover_1.default)(__assign({popoverTriggerClassName:(0,classnames_1.default)(selectorPrefix,null!=(a=null==(a=null==o?void 0:o.popoverTriggerProps)?void 0:a.className)?a:""),popoverTriggerStyle:null!=(a=null==(a=null==o?void 0:o.popoverTriggerProps)?void 0:a.style)?a:{},value:r},e)),e=a.actions,n=a.popoverTriggerProps,a=a.children;return react_1.default.createElement(dialog_1.default.Trigger,__assign({},o,{title:null==o?void 0:o.title,value:r,onChange:t,actions:e,showCloseButton:!1,popoverTriggerProps:__assign(__assign({},n),null!=(r=null==o?void 0:o.popoverTriggerProps)?r:{})}),a)});exports.default=InternalDateDialog;
//# sourceMappingURL=InternalDateDialog.js.map
