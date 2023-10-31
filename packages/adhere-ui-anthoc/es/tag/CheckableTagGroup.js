var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t},__spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var a,n=0,o=r.length;n<o;n++)!a&&n in r||((a=a||Array.prototype.slice.call(r,0,n))[n]=r[n]);return e.concat(a||Array.prototype.slice.call(r))};import React,{memo}from"react";import Space from"../space";import Tag from"./Tag";var CheckableTag=Tag.CheckableTag,CheckableTagGroup=function(e){var r=e.direction,r=void 0===r?"horizontal":r,t=e.mode,a=void 0===t?"single":t,t=e.options,n=e.value,o=e.onChange,e=__rest(e,["direction","mode","options","value","onChange"]);return React.createElement(Space,__assign({direction:r},e),null==(r=null==t?void 0:t.map)?void 0:r.call(t,function(e){var t=e.value,e=__rest(e,["value"]),r=!1;return"single"===a?r=t===n:"multiple"===a&&(r=null==n?void 0:n.includes(t)),React.createElement(CheckableTag,__assign({key:t,checked:r,onChange:function(e){var r;"single"===a?null!=o&&o(t,[]):"multiple"===a&&(r=__spreadArray([],n,!0),r=e?__spreadArray(__spreadArray([],r,!0),[t],!1):r.filter(function(e){return e!==t}),null!=o)&&o(r,[])}},e))}))};export default memo(CheckableTagGroup);
//# sourceMappingURL=CheckableTagGroup.js.map
