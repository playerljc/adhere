"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),adhere_ui_messagedialog_1=__importDefault(require("@baifendian/adhere-ui-messagedialog")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),selectorPrefix="adhere-ui-delconfirm",DelConform=function(t){var e=t.className,r=t.style,n=t.children;return react_1.default.createElement("div",{className:selectorPrefix+" "+(e||""),style:r||{},onClick:function(e){e.stopPropagation(),t.children,e=__rest(t,["children"]),DelConform.open(__assign({},e))}},n)};DelConform.open=function(e){var r=e.success,e=__rest(e,["success"]);adhere_ui_messagedialog_1.default.Confirm(__assign(__assign({},e),{title:e.title||adhere_util_intl_1.default.v("提示"),text:e.text||adhere_util_intl_1.default.v("确定删除吗")+"?",zIndex:"zIndex"in e?e.zIndex:adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,onSuccess:function(){return new Promise(function(e,t){r?r().then(function(){return e()}).catch(function(){return t()}):e()})}}))},exports.default=DelConform;
//# sourceMappingURL=delconfirm.js.map
