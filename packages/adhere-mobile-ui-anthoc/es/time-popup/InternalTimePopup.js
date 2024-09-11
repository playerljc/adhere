var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var p in r=arguments[o])Object.prototype.hasOwnProperty.call(r,p)&&(e[p]=r[p]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var o={};for(p in e)Object.prototype.hasOwnProperty.call(e,p)&&r.indexOf(p)<0&&(o[p]=e[p]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,p=Object.getOwnPropertySymbols(e);t<p.length;t++)r.indexOf(p[t])<0&&Object.prototype.propertyIsEnumerable.call(e,p[t])&&(o[p[t]]=e[p[t]]);return o};import classNames from"classnames";import React,{memo}from"react";import Popup from"../popup";import useTimePopover from"../useTimePopover";var selectorPrefix="adhere-mobile-ui-ant-hoc-time-popup",InternalTimePopup=memo(function(e){var r=e.value,o=e.onChange,t=e.popupTriggerProps,e=__rest(e,["value","onChange","popupTriggerProps"]),p=useTimePopover(__assign({popoverTriggerClassName:classNames(selectorPrefix,null!=(p=null==(p=null==t?void 0:t.popoverTriggerProps)?void 0:p.className)?p:""),popoverTriggerStyle:null!=(p=null==(p=null==t?void 0:t.popoverTriggerProps)?void 0:p.style)?p:{},value:r},e)),e=p.actions,n=p.popoverTriggerProps,p=p.children;return React.createElement(Popup.Trigger,__assign({},t,{title:null==t?void 0:t.title,value:r,onChange:o,actions:e,showCloseButton:!1,popoverTriggerProps:__assign(__assign({},n),null!=(r=null==t?void 0:t.popoverTriggerProps)?r:{})}),p)});export default InternalTimePopup;
//# sourceMappingURL=InternalTimePopup.js.map
