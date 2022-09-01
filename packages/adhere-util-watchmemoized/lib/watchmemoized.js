"use strict";var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var a=Array(e),i=0,t=0;t<r;t++)for(var n=arguments[t],u=0,l=n.length;u<l;u++,i++)a[i]=n[u];return a},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var cloneDeep_1=__importDefault(require("lodash/cloneDeep")),adhere_util_emitter_1=__importDefault(require("@baifendian/adhere-util-emitter")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),Events=adhere_util_emitter_1.default.Events,srcObj={},SPECIAL_SYMBOL="__",PATH_SYMBOLS=[SPECIAL_SYMBOL+"parentName"+SPECIAL_SYMBOL,SPECIAL_SYMBOL+"parent"+SPECIAL_SYMBOL],PRIVATE_SYMBOL="$",CREATE_PROXY_EXCLUDE_PREFIX=[PRIVATE_SYMBOL,SPECIAL_SYMBOL],CREATE_PROXY_EXCLUDE_SUFFIX=[SPECIAL_SYMBOL];function isProxyProperty(t){return!(CREATE_PROXY_EXCLUDE_PREFIX.some(function(e){return t.startsWith(e)})||CREATE_PROXY_EXCLUDE_SUFFIX.some(function(e){return t.endsWith(e)}))}function createProxy(e,o,f){var t,r=new Proxy(e,{set:function(e,t,r,a){if(!isProxyProperty(t))return Reflect.set(e,t,r,a);if(adhere_util_1.default.isArray(e)){var i=e.length,n=Reflect.set(e,t,r,a),u=adhere_util_1.default.getPropertyVisitPathStr(e,t);o[u]=cloneDeep_1.default(e);var l=e.length;return f.trigger(u,t,r),l<i||!adhere_util_1.default.isObject(r)&&!adhere_util_1.default.isArray(r)||PATH_SYMBOLS[0]in r||((r=createProxy(r,o,f))[PATH_SYMBOLS[0]]="["+t+"]",r[PATH_SYMBOLS[1]]=e,n=Reflect.set(e,t,r,a)),n}if(adhere_util_1.default.isObject(e)){u=adhere_util_1.default.getPropertyVisitPathStr(e,t),i=void 0,n=cloneDeep_1.default(r);return f.trigger(u,r,n),i=i||cloneDeep_1.default(r),o[u]=i,!adhere_util_1.default.isObject(r)&&!adhere_util_1.default.isArray(r)||PATH_SYMBOLS[0]in r||((r=createProxy(r,o,f))[PATH_SYMBOLS[0]]=t,r[PATH_SYMBOLS[1]]=e),Reflect.set(e,t,r,a)}return Reflect.set(e,t,r,a)},deleteProperty:function(e,t){if(!isProxyProperty(t))return Reflect.deleteProperty(e,t);if(adhere_util_1.default.isArray(e))return Reflect.deleteProperty(e,t);var r=adhere_util_1.default.getPropertyVisitPathStr(e,t);return f.trigger(r,t),delete o[r],Reflect.deleteProperty(e,t)}});for(t in e){var a=e[t];isProxyProperty(t)&&(adhere_util_1.default.isObject(a)||adhere_util_1.default.isArray(a))&&(e[t]=createProxy(a,o,f),a[PATH_SYMBOLS[0]]=adhere_util_1.default.isArray(e)?"["+t+"]":t,a[PATH_SYMBOLS[1]]=e)}return r}var WatchMemoized={createRef:function(e){var r=Symbol.for(adhere_util_1.default.uuid()),a=e;return Object.defineProperty(srcObj,r,{enumerable:!0,configurable:!0,set:function(e){var t=a;a=e,adhere_util_emitter_1.default.trigger(Symbol.keyFor(r),{oldValue:t,newValue:e})},get:function(){return a}}),[function(){return srcObj[r]},function(e){srcObj[r]=e},r]},memoized:{watch:{all:function(e,t){t=Array.from(new Set(__spreadArrays(t)));var r=[],n=[];function u(t){n.find(function(e){return e.type===t}).isChange=!0,n.every(function(e){return e.isChange})&&(n.forEach(function(e){return e.isChange=!1}),e())}return t.forEach(function(a){var i;function e(e){var t,r=e.oldValue,e=e.newValue;adhere_util_1.default.isSymbol(a)||"light"===(t=a).mode?r!==e&&u(i):"deep"===t.mode?adhere_util_1.default.isRef(r)&&adhere_util_1.default.isRef(e)?JSON.stringify(r)!==JSON.stringify(e)&&u(i):r!==e&&u(i):adhere_util_1.default.isFunction(t.mode)&&(t.mode({oldValue:r,newValue:e})||u(i))}i=adhere_util_1.default.isSymbol(a)?Symbol.keyFor(a):Symbol.keyFor(a.property),n.push({type:i,isChange:!1}),r.push({type:i,handler:e}),adhere_util_emitter_1.default.on(i,e)}),function(){r.forEach(function(e){var t=e.type,e=e.handler;adhere_util_emitter_1.default.remove(t,e)})}},race:function(i,e){e=Array.from(new Set(__spreadArrays(e)));var r=[];return e.forEach(function(a){var e;function t(e){var t,r=e.oldValue,e=e.newValue;adhere_util_1.default.isSymbol(a)||"light"===(t=a).mode?r!==e&&i():"deep"===t.mode?adhere_util_1.default.isRef(r)&&adhere_util_1.default.isRef(e)?JSON.stringify(r)!==JSON.stringify(e)&&i():r!==e&&i():adhere_util_1.default.isFunction(t.mode)&&(t.mode({oldValue:r,newValue:e})||i())}e=adhere_util_1.default.isSymbol(a)?Symbol.keyFor(a):Symbol.keyFor(a.property),r.push({type:e,handler:t}),adhere_util_emitter_1.default.on(e,t)}),function(){r.forEach(function(e){var t=e.type,e=e.handler;adhere_util_emitter_1.default.remove(t,e)})}}},createMemoFun:function(a,i){void 0===i&&(i=10);var n=[],u=[function(e,t){return e.length===t.length},function(e,t){for(var r=!0,a=0;a<e.length;a++){var i=e[a],n=t[a];if(!(r=adhere_util_1.default.isRef(i)&&adhere_util_1.default.isRef(n)?JSON.stringify(cloneDeep_1.default(i))===JSON.stringify(cloneDeep_1.default(n)):i===n))break}return r}];function l(e){void 0===e&&(e=[]);for(var t=null,r=0;r<n.length;r++){var a=n[r],i=a.resultVal;if(function(e,t){for(var r=!0,a=0;a<u.length;a++)if(!(r=(0,u[a])(e,t)))break;return r}(a.depends,e)){t=i;break}}return t}return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(e){var t=l(e=void 0===e?[]:e);if(!t){if(t=a.apply(this,e),n.length>=i&&n.shift(),t instanceof Promise){var r=t.then(function(e){return e});return n.push({depends:e,resultVal:r}),r}n.push({depends:e,resultVal:t})}return t}.call(this,e||[])}}},watch:{create:function(e,t){var r=new Events;if(!adhere_util_1.default.isEmpty(t))for(var a in t)r.on(a,t[a]);return{value:createProxy(e,cloneDeep_1.default(e),r),on:function(e,t){r.on(e,t)},remove:function(e,t){r.remove(e,t)}}}}};exports.default=WatchMemoized;
//# sourceMappingURL=watchmemoized.js.map
