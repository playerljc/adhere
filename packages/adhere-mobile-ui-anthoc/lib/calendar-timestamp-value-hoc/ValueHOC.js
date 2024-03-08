"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=function(e,r){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},dayjs_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("dayjs"))),quarterOfYear_1=__importDefault(require("dayjs/plugin/quarterOfYear")),weekOfYear_1=__importDefault(require("dayjs/plugin/weekOfYear")),react_1=require("react"),DEFAULT_TYPE=(dayjs_1.default.extend(weekOfYear_1.default),dayjs_1.default.extend(quarterOfYear_1.default),["milliseconds","milliseconds"]),ValueHOC=function(e){var r=e.defaultValue,n=e.value,t=e.onChange,a=e.type,u=void 0===a?DEFAULT_TYPE:a,s=e.children,i=__rest(e,["defaultValue","value","onChange","type","children"]);function l(e){if(null==e)return e;if(Array.isArray(e)){if(!Array.isArray(e))return null;if(!e.length)return[];for(var r=Array.isArray(null!=u?u:DEFAULT_TYPE)?(null!=u?u:DEFAULT_TYPE).slice(0,2):DEFAULT_TYPE,n=0;n<2;n++)["seconds","milliseconds"].includes(r[n])||(r[n]="milliseconds");return(r.join()===["seconds","seconds"].join()||r.join()===["seconds","seconds"].join()?[dayjs_1.default.unix(e[0]),dayjs_1.default.unix(e[1])]:r.join()===["seconds","milliseconds"].join()?[dayjs_1.default.unix(e[0]),(0,dayjs_1.default)(e[1])]:r.join()===["milliseconds","seconds"].join()?[(0,dayjs_1.default)(e[0]),dayjs_1.default.unix(e[1])]:[(0,dayjs_1.default)(e[0]),(0,dayjs_1.default)(e[1])]).map(function(e){return e.toDate()})}return("seconds"===u?dayjs_1.default.unix(e):(0,dayjs_1.default)(e)).toDate()}function o(e){return Math.round(e/1e3)}function d(e){if(Array.isArray(e)){if(!u||!Array.isArray(u)||u.length<2)return e;if("milliseconds"===u[0]&&"seconds"===u[1])return[e[0],o(e[1])];if("seconds"===u[0]&&"milliseconds"===u[1])return[o(e[0]),e[1]];if("seconds"===u[0]&&"seconds"===u[1])return[o(e[0]),o(e[1])]}return"seconds"===u?o(e):e}function f(e){var r;e?(r=void 0,r=Array.isArray(e)?d([e[0].getTime(),e[1].getTime()]):d(e.getTime()),null!=t&&t(r)):null!=t&&t(e)}var c=(0,react_1.useMemo)(function(){return l(n)},[n]),_=(0,react_1.useMemo)(function(){return l(r)},[r]);return(0,react_1.useMemo)(function(){return(0,react_1.cloneElement)(s,__assign(__assign({},i),{defaultValue:_,value:c,onChange:f}),s.props.children)},[i,_,c,s])};exports.default=ValueHOC;
//# sourceMappingURL=ValueHOC.js.map
