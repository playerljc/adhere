"use strict";var handler,__assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__rest=function(e,r){var t={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.openErrorMessage=exports.openErrorDialog=void 0,require("antd")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),openErrorDialog=function(e){var r=e.duration,r=void 0===r?3e3:r,e=__rest(e,["duration"]),t=antd_1.Modal.error(__assign({title:adhere_util_intl_1.default.v("提示"),content:adhere_util_intl_1.default.v("系统异常"),mask:!1,maskClosable:!0,footer:null},null!=e?e:{}));return r&&(handler&&clearTimeout(handler),handler=setTimeout(function(){t.destroy()},r)),t},openErrorMessage=(exports.openErrorDialog=openErrorDialog,function(e,r,t){return antd_1.message.error(e||adhere_util_intl_1.default.v("系统异常"),r,t)});exports.openErrorMessage=openErrorMessage;
//# sourceMappingURL=errorprompt.js.map
