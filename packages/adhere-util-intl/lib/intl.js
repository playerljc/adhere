"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var r={};for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(r[a[n]]=t[a[n]]);return r},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),a=0,e=0;e<r;e++)for(var i=arguments[e],l=0,o=i.length;l<o;l++,a++)n[a]=i[l];return n},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getLocal=void 0;var react_intl_universal_1=__importDefault(require("react-intl-universal")),isInit=!1,intlMap={},intlKey={},localKeys=new Map;function initIntlMap(e){Object.getOwnPropertyNames(e).forEach(function(t){intlMap[e[t]]=react_intl_universal_1.default.get(t),intlKey[e[t]]=t})}function getLocal(t){for(var e=__spreadArrays(Array.from(new Set(t))),r={},n=0;n<e.length;n++){var a="local"+(n+1);localKeys.get(a)||(localKeys.set(a,a),0),r[a]=e[n]}return r}exports.getLocal=getLocal,exports.default={init:function(t){var e=t.currentLocale,r=void 0===e?"zh_CN":e,e=t.locales,n=void 0===e?{}:e,t=__rest(t,["currentLocale","locales"]);if(isInit)return new Promise(function(t,e){e()});var a,i={en_US:require("./locales/en_US").default,zh_CN:require("./locales/zh_CN").default,pt_PT:require("./locales/pt_PT").default};for(a in n)a in i&&(i[a]=Object.assign(i[a],n[a]));return react_intl_universal_1.default.init(__assign({currentLocale:r,locales:i},t)).then(function(){initIntlMap(i.zh_CN),isInit=!0})},v:function(t,e){return isInit?e?react_intl_universal_1.default.get(intlKey[t],e):intlMap[t]:""},get:function(t,e){return react_intl_universal_1.default.get(t,e)},getHTML:function(t,e){return react_intl_universal_1.default.getHTML(t,e)},getInitOptions:function(){return react_intl_universal_1.default.getInitOptions()},formatMessage:function(t,e){return react_intl_universal_1.default.formatMessage(t,e)},formatHTMLMessage:function(t,e){return react_intl_universal_1.default.formatHTMLMessage(t,e)},load:function(t){react_intl_universal_1.default.load(t)},getLocal:function(t){return getLocal(t)}};
//# sourceMappingURL=intl.js.map
