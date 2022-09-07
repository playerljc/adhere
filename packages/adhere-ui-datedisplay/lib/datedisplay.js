"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),dayjs_1=__importDefault(require("dayjs")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender"));require("dayjs/locale/zh-cn"),require("dayjs/locale/pt"),require("dayjs/locale/en");var relativeTime_1=__importDefault(require("dayjs/plugin/relativeTime")),localizedFormat_1=__importDefault(require("dayjs/plugin/localizedFormat"));dayjs_1.default.extend(localizedFormat_1.default),dayjs_1.default.extend(relativeTime_1.default);var keys=Object.keys(adhere_util_resource_1.default.Dict.handlers).filter(function(e){return e.startsWith("ResourceMomentFormat")}),Components={dayjs:dayjs_1.default};keys.forEach(function(l){var e=l.substring("ResourceMomentFormat".length);Components["DateDisplay"+e]=function(e){var t=e.value,a=e.split1,r=void 0===a?"-":a,a=e.split2,n=void 0===a?":":a,e=e.errorUI,o=void 0===e?null:e,i=adhere_util_resource_1.default.Dict.value[l].value;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!t,noMatch:function(){return o}},function(){return dayjs_1.default(t).format(i instanceof Function?i(r,n):i)})}}),Components.DateDisplayFromNow=function(e){var t=e.value,a=e.locale,r=void 0===a?"zh-cn":a,e=e.now,n=void 0!==e&&e;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!t},function(){return dayjs_1.default(t).locale(r).fromNow(n)})},Components.DateDisplayToNow=function(e){var t=e.value,a=e.locale,r=void 0===a?"zh-cn":a,e=e.now,n=void 0!==e&&e;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!t},function(){return dayjs_1.default(t).locale(r).toNow(n)})},Components.DateDisplay=function(e){var t=e.value,a=e.locale,r=void 0===a?"zh-cn":a,n=e.format;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!t},function(){return dayjs_1.default(t).locale(r).format(n)})};var formats=["LT","LTS","L","LL","LLL","LLLL","l","ll","lll","llll"];formats.forEach(function(a){Components["DateDisplay"+a]=function(e){var t=Components.DateDisplay;return react_1.default.createElement(t,__assign({},e,{format:a}))}}),exports.default=Components;
//# sourceMappingURL=datedisplay.js.map
