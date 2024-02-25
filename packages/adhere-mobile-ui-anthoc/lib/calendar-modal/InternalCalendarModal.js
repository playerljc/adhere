"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,l=1,a=arguments.length;l<a;l++)for(var t in r=arguments[l])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,r,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(r,l);t&&("get"in t?r.__esModule:!t.writable&&!t.configurable)||(t={enumerable:!0,get:function(){return r[l]}}),Object.defineProperty(e,a,t)}:function(e,r,l,a){e[a=void 0===a?l:a]=r[l]},__setModuleDefault=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r},__importStar=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var l in e)"default"!==l&&Object.prototype.hasOwnProperty.call(e,l)&&__createBinding(r,e,l);return __setModuleDefault(r,e),r},__rest=function(e,r){var l={};for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(l[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(l[t[a]]=e[t[a]]);return l},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),modal_1=__importDefault(require("../modal")),useCalendarPopover_1=__importDefault(require("../useCalendarPopover")),selectorPrefix="adhere-mobile-ui-ant-hoc-calendar-modal",InternalCalendarModal=(0,react_1.memo)(function(e){var r=e.placeholder,l=e.okLabel,a=e.cancelLabel,t=e.locale,o=e.renderDisplay,n=e.value,i=e.onChange,u=e.modalTriggerProps,e=__rest(e,["placeholder","okLabel","cancelLabel","locale","renderDisplay","value","onChange","modalTriggerProps"]),c=(0,useCalendarPopover_1.default)(__assign({popoverTriggerClassName:(0,classnames_1.default)(selectorPrefix,null!=(c=null==(c=null==u?void 0:u.popoverTriggerProps)?void 0:c.className)?c:""),popoverTriggerStyle:null!=(c=null==(c=null==u?void 0:u.popoverTriggerProps)?void 0:c.style)?c:{},placeholder:r,value:n,okLabel:l,cancelLabel:a,renderDisplay:o,locale:t},e)),r=c.actions,l=c.popoverTriggerProps,a=c.children;return react_1.default.createElement(modal_1.default.Trigger,__assign({},u,{title:null!=(o=null==u?void 0:u.title)?o:react_1.default.createElement("span",null," "),value:n,onChange:i,actions:r,popoverTriggerProps:__assign(__assign({},l),null!=(t=null==u?void 0:u.popoverTriggerProps)?t:{})}),a)});exports.default=InternalCalendarModal;
//# sourceMappingURL=InternalCalendarModal.js.map
