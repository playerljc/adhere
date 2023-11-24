var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,a=1,t=arguments.length;a<t;a++)for(var n in r=arguments[a])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},__spreadArray=this&&this.__spreadArray||function(e,r,a){if(a||2===arguments.length)for(var t,n=0,o=r.length;n<o;n++)!t&&n in r||((t=t||Array.prototype.slice.call(r,0,n))[n]=r[n]);return e.concat(t||Array.prototype.slice.call(r))};import React,{memo}from"react";import Space from"../space";import Tag from"./Tag";var CheckableTag=Tag.CheckableTag,InternalCheckableTagGroup=memo(function(e){var r=e.direction,r=void 0===r?"horizontal":r,a=e.mode,n=void 0===a?"single":a,a=e.options,o=e.value,l=e.onChange,e=__rest(e,["direction","mode","options","value","onChange"]);return React.createElement(Space,__assign({direction:r},e),null==(r=null==a?void 0:a.map)?void 0:r.call(a,function(e){var a=e.value,e=__rest(e,["value"]),t=!1;return"single"===n?t=a===o:"multiple"===n&&(t=null==o?void 0:o.includes(a)),React.createElement(CheckableTag,__assign({key:a,checked:t,onChange:function(e){var r;"single"===n?null!=l&&l(a,e,a):"multiple"===n&&(r=__spreadArray([],o,!0),e?(r=__spreadArray(__spreadArray([],r,!0),[a],!1),null!=l&&l(r,t,o)):(r=r.filter(function(e){return e!==a}),null!=l&&l(r,!1,r)))}},e))}))}),CheckableTagGroup=InternalCheckableTagGroup;CheckableTagGroup.displayName="CheckableTagGroup";export default CheckableTagGroup;
//# sourceMappingURL=CheckableTagGroup.js.map
