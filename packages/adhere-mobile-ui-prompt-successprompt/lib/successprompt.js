"use strict";var handler,__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__rest=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_mobile_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.openSuccessDialog=exports.openSuccessMessage=void 0,require("antd-mobile")),antd_mobile_icons_1=require("antd-mobile-icons"),react_1=__importDefault(require("react")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),selectorPrefix="adhere-mobile-success-prompt",openSuccessMessage=function(e){return antd_mobile_1.Toast.show(__assign({content:adhere_util_intl_1.default.v("操作成功"),maskClickable:!1,icon:"success"},null!=e?e:{}))},openSuccessDialog=(exports.openSuccessMessage=openSuccessMessage,function(e){var t=e.duration,t=void 0===t?3e3:t,e=__rest(e,["duration"]),n=antd_mobile_1.Modal.show(__assign(__assign({title:adhere_util_intl_1.default.v("提示"),actions:[],closeOnMaskClick:!0},null!=e?e:{}),{content:react_1.default.createElement("div",{className:"".concat(selectorPrefix)},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-dialog-icon")},react_1.default.createElement(antd_mobile_icons_1.CheckCircleFill,null)),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-dialog-content")},null!=(e=e.content)?e:adhere_util_intl_1.default.v("操作成功")))}));return t&&(handler&&clearTimeout(handler),handler=setTimeout(function(){n.close()},t)),n});exports.openSuccessDialog=openSuccessDialog;
//# sourceMappingURL=successprompt.js.map