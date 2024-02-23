var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,o=1,l=arguments.length;o<l;o++)for(var a in r=arguments[o])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var o={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]]);return o};import classNames from"classnames";import React,{memo}from"react";import Modal from"../modal";import useDatePopover from"../useDatePopover";var selectorPrefix="adhere-mobile-ui-ant-hoc-date-modal",InternalDateModal=memo(function(e){var r=e.placeholder,o=e.okLabel,l=e.cancelLabel,a=e.locale,t=e.renderDisplay,n=e.value,s=e.onChange,i=e.modalTriggerProps,e=__rest(e,["placeholder","okLabel","cancelLabel","locale","renderDisplay","value","onChange","modalTriggerProps"]),p=useDatePopover({popoverTriggerClassName:classNames(selectorPrefix,null!=(p=null==(p=null==i?void 0:i.popoverTriggerProps)?void 0:p.className)?p:""),popoverTriggerStyle:null!=(p=null==(p=null==i?void 0:i.popoverTriggerProps)?void 0:p.style)?p:{},placeholder:r,value:n,okLabel:o,cancelLabel:l,renderDisplay:t,locale:a,datePickerViewProps:e}),r=p.actions,o=p.popoverTriggerProps,l=p.children;return React.createElement(Modal.Trigger,__assign({},i,{title:null!=(t=null==i?void 0:i.title)?t:React.createElement("span",null," "),value:n,onChange:s,actions:r,popoverTriggerProps:__assign(__assign({},o),null!=(a=null==i?void 0:i.popoverTriggerProps)?a:{})}),l)});export default InternalDateModal;
//# sourceMappingURL=InternalDateModal.js.map
