"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},dayjs_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("dayjs"))),react_1=require("react"),ValueHOC=function(e){var t=e.defaultValue,n=e.value,r=e.onChange,a=e.type,u=void 0===a?"milliseconds":a,o=e.children,l=__rest(e,["defaultValue","value","onChange","type","children"]);function s(e){return null==e?e:("seconds"===u?dayjs_1.default.unix(e):(0,dayjs_1.default)(e)).toDate()}function i(e){var t;e?null!=r&&r((t=e.getTime(),"seconds"===u?Math.round(t/1e3):t)):null!=r&&r(e)}var c=(0,react_1.useMemo)(function(){return s(n)},[n]),f=(0,react_1.useMemo)(function(){return s(t)},[t]);return(0,react_1.useMemo)(function(){return(0,react_1.cloneElement)(o,__assign(__assign({},l),{defaultValue:f,value:c,onChange:i}),o.props.children)},[l,f,c,o])};exports.default=ValueHOC;
//# sourceMappingURL=ValueHOC.js.map
