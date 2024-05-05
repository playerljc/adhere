"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++)for(var n in a=arguments[t])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,a,t,r){void 0===r&&(r=t);var n=Object.getOwnPropertyDescriptor(a,t);n&&("get"in n?a.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return a[t]}}),Object.defineProperty(e,r,n)}:function(e,a,t,r){e[r=void 0===r?t:r]=a[t]},__setModuleDefault=Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a},__importStar=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(a,e,t);return __setModuleDefault(a,e),a},__rest=function(e,a){var t={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),classnames_1=__importDefault(require("classnames")),react_1=__importStar(require("react")),adhere_mobile_ui_anthoc_1=require("@baifendian/adhere-mobile-ui-anthoc"),adhere_ui_quick_range_date_1=__importDefault(require("@baifendian/adhere-ui-quick-range-date")),selectorPrefix="adhere-mobile-ui-quick-range-date";function numbersToDate(e,a){if(e&&a)return[new Date(e),new Date(a)]}var InternalQuickRangeDate=(0,react_1.memo)(function(e){var a=e.className,t=e.style,r=e.innerClassName,n=e.innerStyle,u=e.config,l=e.value,i=e.children,c=(e.calendarModalProps,e.checkboxCheckListProps),_=e.modalTriggerPromptProps,e=__rest(e,["className","style","innerClassName","innerStyle","config","value","children","calendarModalProps","checkboxCheckListProps","modalTriggerPromptProps"]),o=(0,react_1.useState)(adhere_ui_quick_range_date_1.default.sync(l)),s=o[0],d=o[1],g=(0,react_1.useMemo)(function(){return u||[{type:"a-d",value:7},{type:"a-w",value:1},{type:"a-M",value:3},{type:"a-Q",value:1},{type:"a-y",value:1},{type:"a-h",value:24},{type:"a-m",value:60},{type:"a-s",value:60},{type:"a-ms",value:1e3},{type:"b-d",value:7},{type:"b-w",value:1},{type:"b-M",value:3},{type:"b-Q",value:1},{type:"b-y",value:1},{type:"b-h",value:24},{type:"b-m",value:60},{type:"b-s",value:60},{type:"b-ms",value:1e3},{type:"custom"}]},[u]),f=(0,react_1.useCallback)(function(e){var t=e.onChange;return react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-inner"),null!=r?r:""),style:null!=n?n:{}},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-trigger")},react_1.default.createElement(adhere_mobile_ui_anthoc_1.Modal.TriggerPrompt,__assign({submitAction:{key:"submit",primary:!0,onClick:function(){return Promise.resolve()}},popoverTriggerProps:{renderTrigger:function(e){return adhere_ui_quick_range_date_1.default.getLabel(s)}},onChange:function(e){var e=adhere_ui_quick_range_date_1.default.getValueEntityByStringValue(e[0]),a=e.type,e=e.value;t({type:a,value:e})},value:[adhere_ui_quick_range_date_1.default.stringValue(s)]},null!=_?_:{}),react_1.default.createElement(adhere_mobile_ui_anthoc_1.CheckList.CheckboxCheckList,__assign({options:g.map(function(e){e={type:e.type,value:e.value};return{title:adhere_ui_quick_range_date_1.default.getLabel(e),value:adhere_ui_quick_range_date_1.default.stringValue(e)}})},null!=c?c:{})))),"custom"===(null==s?void 0:s.type)&&react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-range-calendar-modal")},react_1.default.createElement(adhere_mobile_ui_anthoc_1.CalendarModal.RangeCalendarModal,__assign({selectionMode:"range",value:numbersToDate(null==s?void 0:s.start,null==s?void 0:s.end),onChange:function(e){t({type:"custom",value:void 0,start:e?e[0].getTime():void 0,end:e?e[1].getTime():void 0})}},null!=_?_:{}))))},[s,g,c,_,c]);return(0,ahooks_1.useUpdateEffect)(function(){d(adhere_ui_quick_range_date_1.default.sync(l))},[l]),react_1.default.createElement(adhere_ui_quick_range_date_1.default,__assign({className:(0,classnames_1.default)(selectorPrefix,null!=a?a:""),style:null!=t?t:{},config:g,value:s},null!=e?e:{}),function(e){var a=e.defaultElement,t=e.value,e=e.onChange,r=f({onChange:e});return i?i({originDefaultElement:a,defaultElement:r,value:t,onChange:e}):r})}),QuickRangeDate=InternalQuickRangeDate;QuickRangeDate.displayName="QuickRangeDate",QuickRangeDate.sync=adhere_ui_quick_range_date_1.default.sync,QuickRangeDate.stringValue=adhere_ui_quick_range_date_1.default.stringValue,QuickRangeDate.getLabel=adhere_ui_quick_range_date_1.default.getLabel,QuickRangeDate.numberToDayjs=adhere_ui_quick_range_date_1.default.numberToDayjs,QuickRangeDate.datesToNumbers=adhere_ui_quick_range_date_1.default.datesToNumbers,QuickRangeDate.getValueEntityByStringValue=adhere_ui_quick_range_date_1.default.getValueEntityByStringValue,exports.default=QuickRangeDate;
//# sourceMappingURL=QuickRangeDate.js.map
