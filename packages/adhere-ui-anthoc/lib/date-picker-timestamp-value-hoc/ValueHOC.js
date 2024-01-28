"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},dayjs_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("dayjs"))),quarterOfYear_1=__importDefault(require("dayjs/plugin/quarterOfYear")),weekOfYear_1=__importDefault(require("dayjs/plugin/weekOfYear")),react_1=__importStar(require("react")),date_picker_1=__importDefault(require("../date-picker")),ValueHOC=(dayjs_1.default.extend(weekOfYear_1.default),dayjs_1.default.extend(quarterOfYear_1.default),function(e){var t=e.defaultValue,r=e.value,a=e.onChange,n=e.type,u=void 0===n?"milliseconds":n,n=__rest(e,["defaultValue","value","onChange","type"]);function o(e){return null==e?e:"seconds"===u?dayjs_1.default.unix(e):(0,dayjs_1.default)(e)}var e=(0,react_1.useMemo)(function(){return o(r)},[r]),l=(0,react_1.useMemo)(function(){return o(t)},[t]);return react_1.default.createElement(date_picker_1.default,__assign({},n,{defaultValue:l,value:e,onChange:function(e,t){var r;null!=a&&a((r=e.valueOf(),"seconds"===u?Math.round(r/1e3):r),t,e,{year:e.year(),quarter:e.quarter(),month:e.month(),week:e.week(),day:e.day(),date:e.date(),hour:e.hour(),minute:e.minute(),second:e.second()})}}))});exports.default=ValueHOC;
//# sourceMappingURL=ValueHOC.js.map