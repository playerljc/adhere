"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__rest=function(e,r){var t={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},dayjs_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("dayjs"))),quarterOfYear_1=__importDefault(require("dayjs/plugin/quarterOfYear")),weekOfYear_1=__importDefault(require("dayjs/plugin/weekOfYear")),react_1=require("react"),ValueHOC=(dayjs_1.default.extend(weekOfYear_1.default),dayjs_1.default.extend(quarterOfYear_1.default),function(e){var r=e.defaultValue,t=e.value,a=e.onChange,n=e.children,u=__rest(e,["defaultValue","value","onChange","children"]);function l(e){return null==e?e:(0,dayjs_1.default)(e).toDate()}var o=(0,react_1.useMemo)(function(){return l(t)},[t]),f=(0,react_1.useMemo)(function(){return l(r)},[r]);function _(e){null!=a&&a((0,dayjs_1.default)(e).format(null!=(e=u.format)?e:"L LTS"))}return(0,react_1.useMemo)(function(){return(0,react_1.cloneElement)(n,__assign(__assign({},u),{defaultValue:f,value:o,onChange:_}),n.props.children)},[u,f,o,n])});exports.default=ValueHOC;
//# sourceMappingURL=ValueHOC.js.map