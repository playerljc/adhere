"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__rest=function(e,t){var r={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(r[l[n]]=e[l[n]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_mobile_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd-mobile")),classnames_1=__importDefault(require("classnames")),react_1=__importDefault(require("react")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),selectorPrefix="adhere-ui-mobile-del-confirm",DelConform=function t(e){var r=e.className,n=e.style,l=e.children,a=__rest(e,["className","style","children"]);return react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,null!=r?r:""),style:null!=n?n:{},onClick:function(e){return e.stopPropagation(),t.open(a)}},l)};DelConform.open=function(e){return antd_mobile_1.Dialog.confirm(__assign({title:adhere_util_intl_1.default.v("提示"),content:"".concat(adhere_util_intl_1.default.v("确定删除吗"),"?")},null!=e?e:{}))},exports.default=DelConform;
//# sourceMappingURL=delconfirm.js.map