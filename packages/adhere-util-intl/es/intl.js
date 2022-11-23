var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,n){var e={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(e[i[r]]=t[i[r]]);return e},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;for(var r=Array(t),i=0,n=0;n<e;n++)for(var o=arguments[n],a=0,l=o.length;a<l;a++,i++)r[i]=o[a];return r};import intl from"react-intl-universal";import en_US from"./locales/en_US";import pt_PT from"./locales/pt_PT";import zh_CN from"./locales/zh_CN";var isInit=!1,intlMap={},intlKey={},localKeys=new Map,mainLocales={};function initIntlMap(n){Object.getOwnPropertyNames(n).forEach(function(t){intlMap[n[t]]=intl.get(t),intlKey[n[t]]=t})}function getLocal(t,n){void 0===t&&(t="local");for(var e=__spreadArrays(Array.from(new Set(n))),r={},i=0;i<e.length;i++){var o=""+(t||"local")+(i+1);localKeys.get(o)||(localKeys.set(o,o),0),r[o]=e[i]}return r}function getLocales(){return __assign({},mainLocales)}export default{init:function(t,n){void 0===n&&(n=!1);var e=t.prefix,i=void 0===e?"local":e,e=t.currentLocale,e=void 0===e?"zh_CN":e,r=t.locales,r=void 0===r?{}:r,o=t.mainLanguage,a=void 0===o?"zh_CN":o,o=__rest(t,["prefix","currentLocale","locales","mainLanguage"]);if(!n&&isInit)return new Promise(function(t,n){n()});var l,s,c,t={en_US:en_US,zh_CN:zh_CN,pt_PT:pt_PT},n=Object.keys(t),f=Object.keys(r||{});n.length>f.length?(l=t,s=r||{}):n.length<=f.length&&(l=r||{},s=t);for(c in l)!function(e){var t=__spreadArrays(l[e],s[e]||[]),n=[],r=[];t.forEach(function(t){("string"==typeof t?n:r).push(t)}),mainLocales[e]=getLocal(i,Array.from(new Set(n))),r.forEach(function(n){Object.keys(n).forEach(function(t){mainLocales[e][t]=n[t]})})}(c);return intl.init(__assign({currentLocale:e,locales:mainLocales},o)).then(function(){initIntlMap(mainLocales[a]),isInit=!0})},isInit:function(){return isInit},v:function(t,n){return isInit?n?intl.get(intlKey[t],n):intlMap[t]:""},vHtml:function(t,n){return isInit?n?intl.getHTML(intlKey[t],n):intlMap[t]:""},get:function(t,n){return intl.get(t,n)},getHTML:function(t,n){return intl.getHTML(t,n)},getInitOptions:function(){return intl.getInitOptions()},formatMessage:function(t,n){return intl.formatMessage(t,n)},formatHTMLMessage:function(t,n){return intl.formatHTMLMessage(t,n)},load:function(t){intl.load(t)},getLocal:function(t,n){return getLocal(t=void 0===t?"local":t,n)}};export{getLocal,getLocales};
//# sourceMappingURL=intl.js.map
