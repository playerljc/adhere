var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};import dayjs from"dayjs";import quarterOfYear from"dayjs/plugin/quarterOfYear";import weekOfYear from"dayjs/plugin/weekOfYear";import{cloneElement,useMemo}from"react";dayjs.extend(weekOfYear),dayjs.extend(quarterOfYear);var ValueHOC=function(e){var r=e.defaultValue,t=e.value,n=e.onChange,a=e.children,o=__rest(e,["defaultValue","value","onChange","children"]);function u(e){var r;return null==e?e:(r=dayjs().format("L"),dayjs("".concat(r," ").concat(e)).toDate())}var l=useMemo(function(){return u(t)},[t]),s=useMemo(function(){return u(r)},[r]);function f(e){null!=n&&n(dayjs(e).format(null!=(e=o.format)?e:"LTS"))}return useMemo(function(){return cloneElement(a,__assign(__assign({},o),{defaultValue:s,value:l,onChange:f}),a.props.children)},[o,s,l,a])};export default ValueHOC;
//# sourceMappingURL=ValueHOC.js.map
