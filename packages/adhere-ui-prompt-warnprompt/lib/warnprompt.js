"use strict";var handler,__assign=function(){return(__assign=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},__rest=function(e,n){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.openWarnMessage=exports.openWarnDialog=void 0,require("antd")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),openWarnDialog=function(e){var n=e.duration,n=void 0===n?3e3:n,e=__rest(e,["duration"]),r=antd_1.Modal.warning(__assign({title:adhere_util_intl_1.default.v("提示"),mask:!1,maskClosable:!0,footer:null},null!=e?e:{}));return n&&(handler&&clearTimeout(handler),handler=setTimeout(function(){r.destroy()},n)),r},openWarnMessage=(exports.openWarnDialog=openWarnDialog,function(e,n,r){return antd_1.message.warning(e,n,r)});exports.openWarnMessage=openWarnMessage;
//# sourceMappingURL=WarnPrompt.js.map
