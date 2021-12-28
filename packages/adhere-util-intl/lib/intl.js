"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var r={};for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(r[a[n]]=t[a[n]]);return r},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),a=0,e=0;e<r;e++)for(var l=arguments[e],i=0,o=l.length;i<o;i++,a++)n[a]=l[i];return n},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getLocales=exports.getLocal=void 0;var react_intl_universal_1=__importDefault(require("react-intl-universal")),en_US_1=__importDefault(require("./locales/en_US")),zh_CN_1=__importDefault(require("./locales/zh_CN")),pt_PT_1=__importDefault(require("./locales/pt_PT")),isInit=!1,intlMap={},intlKey={},localKeys=new Map,mainLocales={};function initIntlMap(e){Object.getOwnPropertyNames(e).forEach(function(t){intlMap[e[t]]=react_intl_universal_1.default.get(t),intlKey[e[t]]=t})}function getLocal(t,e){void 0===t&&(t="local");for(var r=__spreadArrays(Array.from(new Set(e))),n={},a=0;a<r.length;a++){var l=""+(t||"local")+(a+1);localKeys.get(l)||(localKeys.set(l,l),0),n[l]=r[a]}return n}function getLocales(){return __assign({},mainLocales)}exports.getLocal=getLocal,exports.getLocales=getLocales,exports.default={init:function(t){var e=t.prefix,r=void 0===e?"local":e,n=t.currentLocale,a=void 0===n?"zh_CN":n,l=t.locales,i=void 0===l?{}:l,e=__rest(t,["prefix","currentLocale","locales"]);if(isInit)return new Promise(function(t,e){e()});var o,s,_,n={en_US:en_US_1.default,zh_CN:zh_CN_1.default,pt_PT:pt_PT_1.default},l=Object.keys(n),t=Object.keys(i||{});for(_ in l.length>t.length?(o=n,s=i||{}):l.length<=t.length&&(o=i||{},s=n),o)mainLocales[_]=getLocal(r,Array.from(new Set(__spreadArrays(o[_],s[_]||[]))));return react_intl_universal_1.default.init(__assign({currentLocale:a,locales:mainLocales},e)).then(function(){initIntlMap(mainLocales.zh_CN),isInit=!0})},v:function(t,e){return isInit?e?react_intl_universal_1.default.get(intlKey[t],e):intlMap[t]:""},vHtml:function(t,e){return isInit?e?react_intl_universal_1.default.getHTML(intlKey[t],e):intlMap[t]:""},get:function(t,e){return react_intl_universal_1.default.get(t,e)},getHTML:function(t,e){return react_intl_universal_1.default.getHTML(t,e)},getInitOptions:function(){return react_intl_universal_1.default.getInitOptions()},formatMessage:function(t,e){return react_intl_universal_1.default.formatMessage(t,e)},formatHTMLMessage:function(t,e){return react_intl_universal_1.default.formatHTMLMessage(t,e)},load:function(t){react_intl_universal_1.default.load(t)},getLocal:function(t,e){return getLocal(t=void 0===t?"local":t,e)}};
//# sourceMappingURL=intl.js.map
