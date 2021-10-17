var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,n){var e={};for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]]);return e},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;for(var r=Array(t),o=0,n=0;n<e;n++)for(var i=arguments[n],a=0,l=i.length;a<l;a++,o++)r[o]=i[a];return r};import intl from"react-intl-universal";import en_US from"./locales/en_US";import zh_CN from"./locales/zh_CN";import pt_PT from"./locales/pt_PT";var isInit=!1,intlMap={},intlKey={},localKeys=new Map,mainLocales={};function initIntlMap(n){Object.getOwnPropertyNames(n).forEach(function(t){intlMap[n[t]]=intl.get(t),intlKey[n[t]]=t})}function getLocal(t,n){void 0===t&&(t="local");for(var e=__spreadArrays(Array.from(new Set(n))),r={},o=0;o<e.length;o++){var i=""+(t||"local")+(o+1);localKeys.get(i)||(localKeys.set(i,i),0),r[i]=e[o]}return r}function getLocales(){return __assign({},mainLocales)}export default{init:function(t){var n=t.prefix,e=void 0===n?"local":n,r=t.currentLocale,o=void 0===r?"zh_CN":r,i=t.locales,a=void 0===i?{}:i,n=__rest(t,["prefix","currentLocale","locales"]);if(isInit)return new Promise(function(t,n){n()});var l,s,c,r={en_US:en_US,zh_CN:zh_CN,pt_PT:pt_PT},i=Object.keys(r),t=Object.keys(a||{});for(c in i.length>t.length?(l=r,s=a||{}):i.length<=t.length&&(l=a||{},s=r),l)mainLocales[c]=getLocal(e,Array.from(new Set(__spreadArrays(l[c],s[c]||[]))));return intl.init(__assign({currentLocale:o,locales:mainLocales},n)).then(function(){initIntlMap(mainLocales.zh_CN),isInit=!0})},v:function(t,n){return isInit?n?intl.get(intlKey[t],n):intlMap[t]:""},vHtml:function(t,n){return isInit?n?intl.getHTML(intlKey[t],n):intlMap[t]:""},get:function(t,n){return intl.get(t,n)},getHTML:function(t,n){return intl.getHTML(t,n)},getInitOptions:function(){return intl.getInitOptions()},formatMessage:function(t,n){return intl.formatMessage(t,n)},formatHTMLMessage:function(t,n){return intl.formatHTMLMessage(t,n)},load:function(t){intl.load(t)},getLocal:function(t,n){return getLocal(t=void 0===t?"local":t,n)}};export{getLocal as getLocal,getLocales as getLocales};
//# sourceMappingURL=intl.js.map
