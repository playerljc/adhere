"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)},__rest=function(e,r){var t={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)r.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(t[i[n]]=e[i[n]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),Trigger_1=__importDefault(require("./Trigger")),TriggerPrompt=function(e){var r=e.onSubmit,t=e.okText,e=__rest(e,["onSubmit","okText"]);return react_1.default.createElement(Trigger_1.default,__assign({},e,{actions:[{key:"submit",color:"primary",children:null!=t?t:adhere_util_intl_1.default.v("确定"),onClick:function(){var e;return null!=(e=null==r?void 0:r())?e:Promise.resolve()}}]}))};exports.default=TriggerPrompt;
//# sourceMappingURL=TriggerPrompt.js.map
