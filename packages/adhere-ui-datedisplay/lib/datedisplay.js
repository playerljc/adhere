"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,l,o)}:function(e,t,a,l){e[l=void 0===l?a:l]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},dayjs_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("dayjs"))),advancedFormat_1=(require("dayjs/locale/ar"),require("dayjs/locale/en"),require("dayjs/locale/pt"),require("dayjs/locale/zh"),__importDefault(require("dayjs/plugin/advancedFormat"))),isoWeek_1=__importDefault(require("dayjs/plugin/isoWeek")),localizedFormat_1=__importDefault(require("dayjs/plugin/localizedFormat")),relativeTime_1=__importDefault(require("dayjs/plugin/relativeTime")),timezone_1=__importDefault(require("dayjs/plugin/timezone")),weekOfYear_1=__importDefault(require("dayjs/plugin/weekOfYear")),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),globalLocal=(dayjs_1.default.extend(localizedFormat_1.default),dayjs_1.default.extend(relativeTime_1.default),dayjs_1.default.extend(timezone_1.default),dayjs_1.default.extend(advancedFormat_1.default),dayjs_1.default.extend(isoWeek_1.default),dayjs_1.default.extend(weekOfYear_1.default),"zh"),localization=["LT","LTS","L","LL","LLL","LLLL","l","ll","lll","llll","L LTS","L LT","l LTS","l LT"],Components={dayjs:dayjs_1.default,setGlobalLocal:function(e){globalLocal=dayjs_1.default.locale(e)}};Object.keys(adhere_util_resource_1.default.Dict.handlers).filter(function(e){return/^ResourceMomentFormat\d+/gim.test(e)}).forEach(function(i){var e=i.substring("ResourceMomentFormat".length);Components["DateDisplay".concat(e)]=(0,react_1.memo)(function(e){var t=e.value,a=e.split1,l=void 0===a?"-":a,a=e.split2,o=void 0===a?":":a,a=e.errorUI,r=void 0===a?null:a,n=adhere_util_resource_1.default.Dict.value[i].value;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!t,noMatch:function(){return r}},function(){return(0,dayjs_1.default)(t).format(n instanceof Function?n(l,o):n)})}),Components["DateDisplay".concat(e)].toString=function(e){var t=e.value,a=e.split1,a=void 0===a?"-":a,e=e.split2,e=void 0===e?":":e,l=adhere_util_resource_1.default.Dict.value[i].value;return t?(0,dayjs_1.default)(t).format(l instanceof Function?l(a,e):l):""}}),Components.DateDisplayFromNow=(0,react_1.memo)(function(e){var a=e.value,l=e.locale,e=e.now,o=void 0!==e&&e;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a},function(){var e,t;return null==(t=null==(e=null==(e=null==(t=(0,dayjs_1.default)(a))?void 0:t.locale)?void 0:e.call(t,null!=globalLocal?globalLocal:l))?void 0:e.fromNow)?void 0:t.call(e,o)})}),Components.DateDisplayFromNow.toString=function(e){var t=e.value,a=e.locale,e=e.now,e=void 0!==e&&e;return t?(0,dayjs_1.default)(t).locale(null!=globalLocal?globalLocal:a).fromNow(e):""},Components.DateDisplayToNow=(0,react_1.memo)(function(e){var t=e.value,a=e.locale,e=e.now,l=void 0!==e&&e;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!t},function(){return(0,dayjs_1.default)(t).locale(null!=globalLocal?globalLocal:a).toNow(l)})}),Components.DateDisplayToNow.toString=function(e){var t=e.value,a=e.locale,e=e.now,e=void 0!==e&&e;return t?(0,dayjs_1.default)(t).locale(null!=globalLocal?globalLocal:a).toNow(e):""},Components.DateDisplay=(0,react_1.memo)(function(e){var t=e.value,a=e.locale,e=e.format,l=null!=a?a:globalLocal,o=e;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!t},function(){return(0,dayjs_1.default)(t).locale(l).format(o)})}),Components.DateDisplay.toString=function(e){var t=e.value,a=e.locale,e=e.format,a=null!=a?a:globalLocal;return t?(0,dayjs_1.default)(t).locale(a).format(e):""},localization.reduce(function(e,t){return e["DateDisplay".concat(t.replace(" ",""))]=(0,react_1.memo)(function(e){return react_1.default.createElement(Components.DateDisplay,__assign({},e,{format:t}))}),e},Components),exports.default=Components;
//# sourceMappingURL=DateDisplay.js.map
