"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,a,t,l){void 0===l&&(l=t);var o=Object.getOwnPropertyDescriptor(a,t);o&&("get"in o?a.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return a[t]}}),Object.defineProperty(e,l,o)}:function(e,a,t,l){e[l=void 0===l?t:l]=a[t]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(a,e,t);return __setModuleDefault(a,e),a},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},dayjs_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("dayjs"))),advancedFormat_1=(require("dayjs/locale/ar"),require("dayjs/locale/en"),require("dayjs/locale/pt"),require("dayjs/locale/zh"),__importDefault(require("dayjs/plugin/advancedFormat"))),isoWeek_1=__importDefault(require("dayjs/plugin/isoWeek")),localizedFormat_1=__importDefault(require("dayjs/plugin/localizedFormat")),relativeTime_1=__importDefault(require("dayjs/plugin/relativeTime")),timezone_1=__importDefault(require("dayjs/plugin/timezone")),weekOfYear_1=__importDefault(require("dayjs/plugin/weekOfYear")),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),globalLocal=(dayjs_1.default.extend(localizedFormat_1.default),dayjs_1.default.extend(relativeTime_1.default),dayjs_1.default.extend(timezone_1.default),dayjs_1.default.extend(advancedFormat_1.default),dayjs_1.default.extend(isoWeek_1.default),dayjs_1.default.extend(weekOfYear_1.default),"zh"),Components={dayjs:dayjs_1.default,setGlobalLocal:function(e){globalLocal=dayjs_1.default.locale(e)}};Object.keys(adhere_util_resource_1.default.Dict.handlers).filter(function(e){return/^ResourceMomentFormat\d+/gim.test(e)}).forEach(function(i){var e=i.substring("ResourceMomentFormat".length);Components["DateDisplay".concat(e)]=(0,react_1.memo)(function(e){var a=e.value,t=e.split1,l=void 0===t?"-":t,t=e.split2,o=void 0===t?":":t,t=e.errorUI,r=void 0===t?null:t,n=adhere_util_resource_1.default.Dict.value[i].value;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a,noMatch:function(){return r}},function(){return(0,dayjs_1.default)(a).format(n instanceof Function?n(l,o):n)})}),Components["DateDisplay".concat(e)].toString=function(e){var a=e.value,t=e.split1,t=void 0===t?"-":t,e=e.split2,e=void 0===e?":":e,l=adhere_util_resource_1.default.Dict.value[i].value;return a?(0,dayjs_1.default)(a).format(l instanceof Function?l(t,e):l):""}}),Components.DateDisplayFromNow=(0,react_1.memo)(function(e){var t=e.value,l=e.locale,e=e.now,o=void 0!==e&&e;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!t},function(){var e,a;return null==(a=null==(e=null==(e=null==(a=(0,dayjs_1.default)(t))?void 0:a.locale)?void 0:e.call(a,null!=globalLocal?globalLocal:l))?void 0:e.fromNow)?void 0:a.call(e,o)})}),Components.DateDisplayFromNow.toString=function(e){var a=e.value,t=e.locale,e=e.now,e=void 0!==e&&e;return a?(0,dayjs_1.default)(a).locale(null!=globalLocal?globalLocal:t).fromNow(e):""},Components.DateDisplayToNow=(0,react_1.memo)(function(e){var a=e.value,t=e.locale,e=e.now,l=void 0!==e&&e;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a},function(){return(0,dayjs_1.default)(a).locale(null!=globalLocal?globalLocal:t).toNow(l)})}),Components.DateDisplayToNow.toString=function(e){var a=e.value,t=e.locale,e=e.now,e=void 0!==e&&e;return a?(0,dayjs_1.default)(a).locale(null!=globalLocal?globalLocal:t).toNow(e):""},Components.DateDisplay=(0,react_1.memo)(function(e){var a=e.value,t=e.locale,e=e.format,l=null!=t?t:globalLocal,o=e;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a},function(){return(0,dayjs_1.default)(a).locale(l).format(o)})}),Components.DateDisplay.toString=function(e){var a=e.value,t=e.locale,e=e.format,t=null!=t?t:globalLocal;return a?(0,dayjs_1.default)(a).locale(t).format(e):""},exports.default=Components;
//# sourceMappingURL=DateDisplay.js.map
