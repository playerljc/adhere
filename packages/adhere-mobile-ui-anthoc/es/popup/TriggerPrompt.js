var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++)for(var n in e=arguments[t])Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}).apply(this,arguments)},__rest=this&&this.__rest||function(r,e){var t={};for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(r);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(t[n[o]]=r[n[o]]);return t};import classNames from"classnames";import React,{memo,useMemo}from"react";import Intl from"@baifendian/adhere-util-intl";import PopupTrigger from"./Trigger";var selectorPrefix="adhere-mobile-ui-ant-hoc-modal-trigger-prompt",InternalPopupTriggerPrompt=memo(function(r){var e,t=r.submitAction,r=__rest(r,["submitAction"]),o=useMemo(function(){var r;return t?[__assign(__assign({},t),{text:null!=(r=null==t?void 0:t.text)?r:Intl.v("确定")})]:[]},[t]);return React.createElement(PopupTrigger,__assign({className:classNames(selectorPrefix,null!=(e=null==r?void 0:r.className)?e:""),actions:o},null!=r?r:{}))}),PopupTriggerPrompt=InternalPopupTriggerPrompt;PopupTriggerPrompt.displayName="PopupTriggerPrompt";export default PopupTriggerPrompt;
//# sourceMappingURL=TriggerPrompt.js.map
