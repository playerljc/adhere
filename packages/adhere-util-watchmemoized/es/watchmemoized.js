var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),i=0,r=0;r<t;r++)for(var o=arguments[r],a=0,l=o.length;a<l;a++,i++)n[i]=o[a];return n};import cloneDeep from"lodash/cloneDeep";import Emitter from"@baifendian/adhere-util-emitter";import Events from"@baifendian/adhere-util-emitter/lib/events";import Util from"@baifendian/adhere-util";var srcObj={},SPECIAL_SYMBOL="__",PATH_SYMBOLS=[SPECIAL_SYMBOL+"parentName"+SPECIAL_SYMBOL,SPECIAL_SYMBOL+"parent"+SPECIAL_SYMBOL],PRIVATE_SYMBOL="$",CREATE_PROXY_EXCLUDE_PREFIX=[PRIVATE_SYMBOL,SPECIAL_SYMBOL],CREATE_PROXY_EXCLUDE_SUFFIX=[SPECIAL_SYMBOL];function isProxyProperty(r){return!(CREATE_PROXY_EXCLUDE_PREFIX.some(function(e){return r.startsWith(e)})||CREATE_PROXY_EXCLUDE_SUFFIX.some(function(e){return r.endsWith(e)}))}function createProxy(e,f,u){var r,t=new Proxy(e,{set:function(e,r,t,n){if(!isProxyProperty(r))return Reflect.set(e,r,t,n);if(Util.isArray(e)){var i=e.length,o=Reflect.set(e,r,t,n),a=Util.getPropertyVisitPathStr(e,r);f[a]=cloneDeep(e);var l=e.length;return u.trigger(a,r,t),l<i||!Util.isObject(t)&&!Util.isArray(t)||PATH_SYMBOLS[0]in t||((t=createProxy(t,f,u))[PATH_SYMBOLS[0]]="["+r+"]",t[PATH_SYMBOLS[1]]=e,o=Reflect.set(e,r,t,n)),o}if(Util.isObject(e)){a=Util.getPropertyVisitPathStr(e,r),i=void 0,o=cloneDeep(t);return u.trigger(a,t,o),i=i||cloneDeep(t),f[a]=i,!Util.isObject(t)&&!Util.isArray(t)||PATH_SYMBOLS[0]in t||((t=createProxy(t,f,u))[PATH_SYMBOLS[0]]=r,t[PATH_SYMBOLS[1]]=e),Reflect.set(e,r,t,n)}return Reflect.set(e,r,t,n)},deleteProperty:function(e,r){if(!isProxyProperty(r))return Reflect.deleteProperty(e,r);if(Util.isArray(e))return Reflect.deleteProperty(e,r);var t=Util.getPropertyVisitPathStr(e,r);return u.trigger(t,r),delete f[t],Reflect.deleteProperty(e,r)}});for(r in e){var n=e[r];isProxyProperty(r)&&(Util.isObject(n)||Util.isArray(n))&&(e[r]=createProxy(n,f,u),n[PATH_SYMBOLS[0]]=Util.isArray(e)?"["+r+"]":r,n[PATH_SYMBOLS[1]]=e)}return t}var WatchMemoized={createRef:function(e){var t=Symbol.for(Util.uuid()),n=e;return Object.defineProperty(srcObj,t,{enumerable:!0,configurable:!0,set:function(e){var r=n;n=e,Emitter.trigger(Symbol.keyFor(t),{oldValue:r,newValue:e})},get:function(){return n}}),[function(){return srcObj[t]},function(e){srcObj[t]=e},t]},memoized:{watch:{all:function(e,r){r=Array.from(new Set(__spreadArrays(r)));var t=[],o=[];function a(r){o.find(function(e){return e.type===r}).isChange=!0,o.every(function(e){return e.isChange})&&(o.forEach(function(e){return e.isChange=!1}),e())}return r.forEach(function(n){var i;function e(e){var r,t=e.oldValue,e=e.newValue;Util.isSymbol(n)||"light"===(r=n).mode?t!==e&&a(i):"deep"===r.mode?Util.isRef(t)&&Util.isRef(e)?JSON.stringify(t)!==JSON.stringify(e)&&a(i):t!==e&&a(i):Util.isFunction(r.mode)&&(r.mode({oldValue:t,newValue:e})||a(i))}i=Util.isSymbol(n)?Symbol.keyFor(n):Symbol.keyFor(n.property),o.push({type:i,isChange:!1}),t.push({type:i,handler:e}),Emitter.on(i,e)}),function(){t.forEach(function(e){var r=e.type,e=e.handler;Emitter.remove(r,e)})}},race:function(i,e){e=Array.from(new Set(__spreadArrays(e)));var t=[];return e.forEach(function(n){var e;function r(e){var r,t=e.oldValue,e=e.newValue;Util.isSymbol(n)||"light"===(r=n).mode?t!==e&&i():"deep"===r.mode?Util.isRef(t)&&Util.isRef(e)?JSON.stringify(t)!==JSON.stringify(e)&&i():t!==e&&i():Util.isFunction(r.mode)&&(r.mode({oldValue:t,newValue:e})||i())}e=Util.isSymbol(n)?Symbol.keyFor(n):Symbol.keyFor(n.property),t.push({type:e,handler:r}),Emitter.on(e,r)}),function(){t.forEach(function(e){var r=e.type,e=e.handler;Emitter.remove(r,e)})}}},createMemoFun:function(n,i){void 0===i&&(i=10);var o=[],a=[function(e,r){return e.length===r.length},function(e,r){for(var t=!0,n=0;n<e.length;n++){var i=e[n],o=r[n];if(!(t=Util.isRef(i)&&Util.isRef(o)?JSON.stringify(cloneDeep(i))===JSON.stringify(cloneDeep(o)):i===o))break}return t}];function l(e){void 0===e&&(e=[]);for(var r=null,t=0;t<o.length;t++){var n=o[t],i=n.resultVal;if(function(e,r){for(var t=!0,n=0;n<a.length;n++)if(!(t=(0,a[n])(e,r)))break;return t}(n.depends,e)){r=i;break}}return r}return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return function(e){var r=l(e=void 0===e?[]:e);if(!r){if(r=n.apply(this,e),o.length>=i&&o.shift(),r instanceof Promise){var t=r.then(function(e){return e});return o.push({depends:e,resultVal:t}),t}o.push({depends:e,resultVal:r})}return r}.call(this,e||[])}}},watch:{create:function(e,r){var t=new Events;if(!Util.isEmpty(r))for(var n in r)t.on(n,r[n]);return{value:createProxy(e,cloneDeep(e),t),on:function(e,r){t.on(e,r)},remove:function(e,r){t.remove(e,r)}}}}};export default WatchMemoized;
//# sourceMappingURL=watchmemoized.js.map
