var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};import dayjs from"dayjs";import quarterOfYear from"dayjs/plugin/quarterOfYear";import weekOfYear from"dayjs/plugin/weekOfYear";import{cloneElement,useMemo}from"react";dayjs.extend(weekOfYear),dayjs.extend(quarterOfYear);var ValueHOC=function(e){var r=e.defaultValue,t=e.value,n=e.onChange,a=e.type,o=void 0===a?"milliseconds":a,u=e.children,s=__rest(e,["defaultValue","value","onChange","type","children"]);function l(e){return null==e?e:("seconds"===o?dayjs.unix(e):dayjs(e)).toDate()}function i(e){null!=n&&n((e=e.getTime(),"seconds"===o?Math.round(e/1e3):e))}var f=useMemo(function(){return l(t)},[t]),c=useMemo(function(){return l(r)},[r]);return useMemo(function(){return cloneElement(u,__assign(__assign({},s),{defaultValue:c,value:f,onChange:i}),u.props.children)},[s,c,f,u])};export default ValueHOC;
//# sourceMappingURL=ValueHOC.js.map