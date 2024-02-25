var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,a=1,o=arguments.length;a<o;a++)for(var t in r=arguments[a])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var a={};for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};import{useConfig}from"antd-mobile/es/components/config-provider/config-provider";import classNames from"classnames";import React,{useMemo}from"react";import DatePickerView from"./date-picker-view";import useDateTimePopover from"./useDateTimePopover";var selectorPrefix="adhere-mobile-ui-ant-hoc-date-popover";function useDatePopover(e){var r=e.popoverTriggerClassName,a=e.popoverTriggerStyle,o=e.placeholder,t=e.value,l=e.okLabel,n=e.cancelLabel,c=e.renderDisplay,i=e.locale,s=__rest(e,["popoverTriggerClassName","popoverTriggerStyle","placeholder","value","okLabel","cancelLabel","renderDisplay","locale"]),p=useConfig(),e=useMemo(function(){var e;if(!t)return"";var r=null!=(e=null!=i?i:p.locale.locale)?e:"zh";if(c)return c(t,r);var a=t.toLocaleDateString(r).split(/[-/]/gim),o="";switch(s.precision){case"year":o="".concat(t.getFullYear());break;case"month":o=[a[0],a[1]].join("/");break;case"minute":"".concat(t.toLocaleDateString(r)," ").concat([t.getHours(),t.getMinutes()].join(":"));break;case"second":o="".concat(t.toLocaleDateString(r)," ").concat(t.toLocaleTimeString(r));break;case"hour":o="".concat(t.toLocaleDateString(r)," ").concat(t.getHours());break;case"day":case"week":case"week-day":o=t.toLocaleDateString(r);break;default:o=""}return o},[t]),r=useDateTimePopover({popoverTriggerClassName:classNames(null!=r?r:"",selectorPrefix),popoverTriggerStyle:a,placeholder:o,value:t,okLabel:l,cancelLabel:n,defaultValue:null==s?void 0:s.defaultValue,formatValue:e}),a=r.actions,o=r.popoverTriggerProps,u=r.setTargetValue;return{actions:a,popoverTriggerProps:o,children:React.createElement(DatePickerView,__assign({defaultValue:new Date},s,{onChange:function(e){u(e)}}))}}export default useDatePopover;
//# sourceMappingURL=useDatePopover.js.map
