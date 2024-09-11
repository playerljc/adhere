"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n);var l=Object.getOwnPropertyDescriptor(t,n);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,l)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__rest=function(e,t){var n={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]]);return n},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},dayjs_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("dayjs"))),quarterOfYear_1=__importDefault(require("dayjs/plugin/quarterOfYear")),weekOfYear_1=__importDefault(require("dayjs/plugin/weekOfYear")),react_1=__importStar(require("react")),calendar_1=__importDefault(require("../calendar")),ValueHOC=(dayjs_1.default.extend(weekOfYear_1.default),dayjs_1.default.extend(quarterOfYear_1.default),function(e){var t=e.defaultValue,n=e.value,r=e.validRange,l=e.onChange,a=e.disabledDate,u=e.dateFullCellRender,o=e.dateCellRender,d=e.monthFullCellRender,f=e.monthCellRender,i=e.cellRender,c=e.fullCellRender,_=e.onPanelChange,s=e.onSelect,e=__rest(e,["defaultValue","value","validRange","onChange","disabledDate","dateFullCellRender","dateCellRender","monthFullCellRender","monthCellRender","cellRender","fullCellRender","onPanelChange","onSelect"]);function p(e){return null==e?e:(0,dayjs_1.default)(e)}var m=(0,react_1.useMemo)(function(){return p(n)},[n]),v=(0,react_1.useMemo)(function(){return p(t)},[t]),O=(0,react_1.useMemo)(function(){return[p(null==r?void 0:r[0]),p(null==r?void 0:r[0])]},[r]);return react_1.default.createElement(calendar_1.default,__assign({},e,{defaultValue:v,value:m,validRange:O,onChange:function(e){null!=l&&l(e.format("L LTS"))},disabledDate:function(e){return null==a?void 0:a(e.format("L LTS"))},dateFullCellRender:function(e){return null==u?void 0:u(e.format("L LTS"))},dateCellRender:function(e){return null==o?void 0:o(e.format("L LTS"))},monthFullCellRender:function(e){return null==d?void 0:d(e.format("L LTS"))},monthCellRender:function(e){return null==f?void 0:f(e.format("L LTS"))},cellRender:function(e,t){return null==i?void 0:i(e.format("L LTS"),t)},fullCellRender:function(e,t){return null==c?void 0:c(e.format("L LTS"),t)},onPanelChange:function(e,t){null!=_&&_(e.format("L LTS"),t)},onSelect:function(e,t){null!=s&&s(e.format("L LTS"),t)}}))});exports.default=ValueHOC;
//# sourceMappingURL=ValueHOC.js.map
