"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},__rest=function(e,r){var t={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)r.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),Trigger_1=__importDefault(require("./Trigger")),TriggerPrompt=function(e){var r=e.onSubmit,t=e.modalConfig,n=e.okText,e=__rest(e,["onSubmit","modalConfig","okText"]);return react_1.default.createElement(Trigger_1.default,__assign({},e,{modalConfig:t,footer:[{key:"submit",type:"primary",children:null!=n?n:adhere_util_intl_1.default.v("确定"),onClick:function(){var e;return null!=(e=null==r?void 0:r())?e:Promise.resolve()}}]}))};exports.default=TriggerPrompt;
//# sourceMappingURL=TriggerPrompt.js.map
