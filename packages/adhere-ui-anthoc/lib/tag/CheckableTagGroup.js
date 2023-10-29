"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),space_1=__importDefault(require("../space")),Tag_1=__importDefault(require("./Tag")),CheckableTag=Tag_1.default.CheckableTag,CheckableTagGroup=function(e){var t=e.direction,t=void 0===t?"horizontal":t,r=e.mode,n=void 0===r?"single":r,r=e.options,a=e.value,o=e.onChange,e=__rest(e,["direction","mode","options","value","onChange"]);return console.log("options",r),react_1.default.createElement(space_1.default,__assign({direction:t},e),null==(t=null==r?void 0:r.map)?void 0:t.call(r,function(e){var r=e.value,e=__rest(e,["value"]),t=!1;return"single"===n?t=r===a:"multiple"===n&&(t=null==a?void 0:a.includes(r)),react_1.default.createElement(CheckableTag,__assign({key:r,checked:t,onChange:function(e){var t;"single"===n?null!=o&&o(r,[]):"multiple"===n&&(t=__spreadArray([],a,!0),t=e?__spreadArray(__spreadArray([],t,!0),[r],!1):t.filter(function(e){return e!==r}),null!=o)&&o(t,[])}},e))}))};exports.default=(0,react_1.memo)(CheckableTagGroup);
//# sourceMappingURL=CheckableTagGroup.js.map
