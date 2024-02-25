var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,o=1,l=arguments.length;o<l;o++)for(var a in r=arguments[o])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var o={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]]);return o};import classNames from"classnames";import React,{memo}from"react";import Modal from"../modal";import useTimePopover from"../useTimePopover";var selectorPrefix="adhere-mobile-ui-ant-hoc-time-modal",InternalTimeModal=memo(function(e){var r=e.placeholder,o=e.okLabel,l=e.cancelLabel,a=e.locale,n=e.renderDisplay,t=e.value,i=e.onChange,s=e.modalTriggerProps,e=__rest(e,["placeholder","okLabel","cancelLabel","locale","renderDisplay","value","onChange","modalTriggerProps"]),p=useTimePopover(__assign({popoverTriggerClassName:classNames(selectorPrefix,null!=(p=null==(p=null==s?void 0:s.popoverTriggerProps)?void 0:p.className)?p:""),popoverTriggerStyle:null!=(p=null==(p=null==s?void 0:s.popoverTriggerProps)?void 0:p.style)?p:{},placeholder:r,value:t,okLabel:o,cancelLabel:l,renderDisplay:n,locale:a},e)),r=p.actions,o=p.popoverTriggerProps,l=p.children;return React.createElement(Modal.Trigger,__assign({},s,{title:null!=(n=null==s?void 0:s.title)?n:React.createElement("span",null," "),value:t,onChange:i,actions:r,popoverTriggerProps:__assign(__assign({},o),null!=(a=null==s?void 0:s.popoverTriggerProps)?a:{})}),l)});export default InternalTimeModal;
//# sourceMappingURL=InternalTimeModal.js.map