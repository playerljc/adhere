var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,o=1,a=arguments.length;o<a;o++)for(var t in r=arguments[o])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var o={};for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};import{useConfig}from"antd-mobile/es/components/config-provider/config-provider";import classNames from"classnames";import React,{useMemo}from"react";import DatePickerView from"./date-picker-view";import useDateTimePopover from"./useDateTimePopover";var selectorPrefix="adhere-mobile-ui-ant-hoc-date-popover";function useDatePopover(e){var r=e.popoverTriggerClassName,o=e.popoverTriggerStyle,a=e.placeholder,t=e.value,l=e.okLabel,n=e.cancelLabel,i=e.renderDisplay,c=e.locale,s=__rest(e,["popoverTriggerClassName","popoverTriggerStyle","placeholder","value","okLabel","cancelLabel","renderDisplay","locale"]),p=useConfig(),e=useMemo(function(){var e;if(!t)return"";var r=null!=(e=null!=c?c:p.locale.locale)?e:"zh";if(i)return i(t,r);var o=t.toLocaleDateString(r).split(/[-/]/gim),a="";switch(s.precision){case"year":a="".concat(t.getFullYear());break;case"month":a=[o[0],o[1]].join("/");break;case"minute":"".concat(t.toLocaleDateString(r)," ").concat([t.getHours(),t.getMinutes()].join(":"));break;case"second":a="".concat(t.toLocaleDateString(r)," ").concat(t.toLocaleTimeString(r));break;case"hour":a="".concat(t.toLocaleDateString(r)," ").concat(t.getHours());break;default:a=t.toLocaleDateString(r)}return a},[t]),r=useDateTimePopover({popoverTriggerClassName:classNames(null!=r?r:"",selectorPrefix),popoverTriggerStyle:o,placeholder:a,value:t,okLabel:l,cancelLabel:n,defaultValue:null==s?void 0:s.defaultValue,formatValue:e}),o=r.key,a=r.actions,l=r.popoverTriggerProps,u=r.setInternalValue;return{actions:a,popoverTriggerProps:l,children:React.createElement(DatePickerView,__assign({key:o},s,{defaultValue:null!=(n=null!=t?t:null==s?void 0:s.defaultValue)?n:new Date,onChange:function(e){u(e)}}))}}export default useDatePopover;
//# sourceMappingURL=useDatePopover.js.map
