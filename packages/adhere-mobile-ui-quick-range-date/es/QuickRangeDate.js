import _CalendarModal from"@baifendian/adhere-mobile-ui-anthoc/es/calendar-modal";import _CheckList from"@baifendian/adhere-mobile-ui-anthoc/es/check-list";import _Modal from"@baifendian/adhere-mobile-ui-anthoc/es/modal";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,a){var t={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t};import{useUpdateEffect}from"ahooks";import classNames from"classnames";import React,{memo,useCallback,useMemo,useState}from"react";import AdhereQuickRangeDate from"@baifendian/adhere-ui-quick-range-date";var selectorPrefix="adhere-mobile-ui-quick-range-date";function numbersToDate(e,a){if(e&&a)return[new Date(e),new Date(a)]}var InternalQuickRangeDate=memo(function(e){var a=e.className,t=e.style,n=e.innerClassName,r=e.innerStyle,l=e.config,i=e.value,u=e.children,o=(e.calendarModalProps,e.checkboxCheckListProps),c=e.modalTriggerPromptProps,e=__rest(e,["className","style","innerClassName","innerStyle","config","value","children","calendarModalProps","checkboxCheckListProps","modalTriggerPromptProps"]),s=useState(AdhereQuickRangeDate.sync(i)),g=s[0],m=s[1],d=useMemo(function(){return l||[{type:"a-d",value:7},{type:"a-w",value:1},{type:"a-M",value:3},{type:"a-Q",value:1},{type:"a-y",value:1},{type:"a-h",value:24},{type:"a-m",value:60},{type:"a-s",value:60},{type:"a-ms",value:1e3},{type:"b-d",value:7},{type:"b-w",value:1},{type:"b-M",value:3},{type:"b-Q",value:1},{type:"b-y",value:1},{type:"b-h",value:24},{type:"b-m",value:60},{type:"b-s",value:60},{type:"b-ms",value:1e3},{type:"custom"}]},[l]),p=useCallback(function(e){var t=e.onChange;return React.createElement("div",{className:classNames("".concat(selectorPrefix,"-inner"),null!=n?n:""),style:null!=r?r:{}},React.createElement("div",{className:"".concat(selectorPrefix,"-trigger")},React.createElement(_Modal.TriggerPrompt,__assign({submitAction:{key:"submit",primary:!0,onClick:function(){return Promise.resolve()}},popoverTriggerProps:{renderTrigger:function(e){return AdhereQuickRangeDate.getLabel(g)}},onChange:function(e){var e=AdhereQuickRangeDate.getValueEntityByStringValue(e[0]),a=e.type,e=e.value;t({type:a,value:e})},value:[AdhereQuickRangeDate.stringValue(g)]},null!=c?c:{}),React.createElement(_CheckList.CheckboxCheckList,__assign({options:d.map(function(e){e={type:e.type,value:e.value};return{title:AdhereQuickRangeDate.getLabel(e),value:AdhereQuickRangeDate.stringValue(e)}})},null!=o?o:{})))),"custom"===(null==g?void 0:g.type)&&React.createElement("div",{className:"".concat(selectorPrefix,"-range-calendar-modal")},React.createElement(_CalendarModal.RangeCalendarModal,__assign({selectionMode:"range",value:numbersToDate(null==g?void 0:g.start,null==g?void 0:g.end),onChange:function(e){t({type:"custom",value:void 0,start:e?e[0].getTime():void 0,end:e?e[1].getTime():void 0})}},null!=c?c:{}))))},[g,d,o,c,o]);return useUpdateEffect(function(){m(AdhereQuickRangeDate.sync(i))},[i]),React.createElement(AdhereQuickRangeDate,__assign({className:classNames(selectorPrefix,null!=a?a:""),style:null!=t?t:{},config:d,value:g},null!=e?e:{}),function(e){var a=e.defaultElement,t=e.value,e=e.onChange,n=p({onChange:e});return u?u({originDefaultElement:a,defaultElement:n,value:t,onChange:e}):n})}),QuickRangeDate=InternalQuickRangeDate;QuickRangeDate.displayName="QuickRangeDate",QuickRangeDate.sync=AdhereQuickRangeDate.sync,QuickRangeDate.stringValue=AdhereQuickRangeDate.stringValue,QuickRangeDate.getLabel=AdhereQuickRangeDate.getLabel,QuickRangeDate.numberToDayjs=AdhereQuickRangeDate.numberToDayjs,QuickRangeDate.datesToNumbers=AdhereQuickRangeDate.datesToNumbers,QuickRangeDate.getValueEntityByStringValue=AdhereQuickRangeDate.getValueEntityByStringValue;export default QuickRangeDate;
//# sourceMappingURL=QuickRangeDate.js.map