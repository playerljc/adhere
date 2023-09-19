"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var r={};for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(r[a[n]]=t[a[n]]);return r},__spreadArray=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,a=0,i=e.length;a<i;a++)!n&&a in e||((n=n||Array.prototype.slice.call(e,0,a))[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},react_intl_universal_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.getLocales=exports.getLocal=void 0,__importDefault(require("react-intl-universal"))),ar_EG_1=__importDefault(require("./locales/ar_EG")),en_US_1=__importDefault(require("./locales/en_US")),pt_PT_1=__importDefault(require("./locales/pt_PT")),zh_CN_1=__importDefault(require("./locales/zh_CN")),isInit=!1,intlMap={},intlKey={},localKeys=new Map,mainLocales={};function initIntlMap(e){Object.getOwnPropertyNames(e).forEach(function(t){intlMap[e[t]]=react_intl_universal_1.default.get(t),intlKey[e[t]]=t})}function getLocal(t,e){void 0===t&&(t="local");for(var r=__spreadArray([],e,!0),n={},a=0;a<r.length;a++){var i="".concat(t||"local").concat(a+1);localKeys.get(i)||(localKeys.set(i,i),0),n[i]=r[a]}return n}function getLocales(){return __assign({},mainLocales)}exports.getLocal=getLocal,exports.getLocales=getLocales,exports.default={init:function(t,e){var n,r,a,i=t.prefix,l=void 0===i?"local":i,i=t.currentLocale,i=void 0===i?"zh_CN":i,o=t.locales,c=void 0===o?{}:o,o=t.mainLanguage,s=void 0===o?"zh_CN":o,o=__rest(t,["prefix","currentLocale","locales","mainLanguage"]);return!(e=void 0===e?!1:e)&&isInit?new Promise(function(t,e){e()}):(n={en_US:__spreadArray([],en_US_1.default,!0),zh_CN:__spreadArray([],zh_CN_1.default,!0),pt_PT:__spreadArray([],pt_PT_1.default,!0),ar_EG:__spreadArray([],ar_EG_1.default,!0)},r=[],n[s].forEach(function(t,e){c[s].includes(t)&&r.push(e)}),(t=Object.keys(n)).forEach(function(t){n[t]=n[t].filter(function(t,e){return!r.includes(e)})}),a=t.reduce(function(t,e){var r;return t[e]=__spreadArray(__spreadArray([],null!=(r=n[e])?r:[],!0),null!=(r=c[e])?r:[],!0),t},{}),console.log("targetLocales",a),t.forEach(function(r){var t=a[r],e=[],n=[];t.forEach(function(t){("string"==typeof t?e:n).push(t)}),mainLocales[r]=getLocal(l,e),n.forEach(function(e){Object.keys(e).forEach(function(t){mainLocales[r][t]=e[t]})})}),react_intl_universal_1.default.init(__assign({currentLocale:i,locales:mainLocales},o)).then(function(){initIntlMap(mainLocales[s]),isInit=!0}))},isInit:function(){return isInit},v:function(t,e){return isInit?e?react_intl_universal_1.default.get(intlKey[t],e):intlMap[t]:""},vHtml:function(t,e){return isInit?e?react_intl_universal_1.default.getHTML(intlKey[t],e):intlMap[t]:""},get:function(t,e){return react_intl_universal_1.default.get(t,e)},getHTML:function(t,e){return react_intl_universal_1.default.getHTML(t,e)},getInitOptions:function(){return react_intl_universal_1.default.getInitOptions()},formatMessage:function(t,e){return react_intl_universal_1.default.formatMessage(t,e)},formatHTMLMessage:function(t,e){return react_intl_universal_1.default.formatHTMLMessage(t,e)},load:function(t){react_intl_universal_1.default.load(t)},getLocal:function(t,e){return getLocal(t=void 0===t?"local":t,e)}};
//# sourceMappingURL=intl.js.map
