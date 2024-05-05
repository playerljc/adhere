import _DatePicker from"antd/es/date-picker";import _Radio from"antd/es/radio";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var u in t=arguments[a])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e}).apply(this,arguments)};import{useUpdateEffect}from"ahooks";import classNames from"classnames";import dayjs from"dayjs";import quarterOfYear from"dayjs/plugin/quarterOfYear";import React,{memo,useMemo,useState}from"react";import Intl from"@baifendian/adhere-util-intl";dayjs.extend(quarterOfYear);var selectorPrefix="adhere-ui-quick-range-date",labelByTypeMap=new Map([["a-d",function(e){return Intl.vHtml("近{value}天",{value:e})}],["a-w",function(e){return Intl.vHtml("近{value}周",{value:e})}],["a-M",function(e){return Intl.vHtml("近{value}月",{value:e})}],["a-Q",function(e){return Intl.vHtml("近{value}季度",{value:e})}],["a-y",function(e){return Intl.vHtml("近{value}年",{value:e})}],["a-h",function(e){return Intl.vHtml("近{value}小时",{value:e})}],["a-m",function(e){return Intl.vHtml("近{value}分钟",{value:e})}],["a-s",function(e){return Intl.vHtml("近{value}秒",{value:e})}],["a-ms",function(e){return Intl.vHtml("近{value}毫秒",{value:e})}],["b-d",function(e){return Intl.vHtml("未来{value}天",{value:e})}],["b-w",function(e){return Intl.vHtml("未来{value}周",{value:e})}],["b-M",function(e){return Intl.vHtml("未来{value}月",{value:e})}],["b-Q",function(e){return Intl.vHtml("未来{value}季度",{value:e})}],["b-y",function(e){return Intl.vHtml("未来{value}年",{value:e})}],["b-h",function(e){return Intl.vHtml("未来{value}小时",{value:e})}],["b-m",function(e){return Intl.vHtml("未来{value}分钟",{value:e})}],["b-s",function(e){return Intl.vHtml("未来{value}秒",{value:e})}],["b-ms",function(e){return Intl.vHtml("未来{value}毫秒",{value:e})}],["custom",function(){return Intl.v("自定义")}]]);function sync(e){var t,a;if(e)return a=e.type,t=e.value,isCustomByType(a)||null!=e&&e.start&&null!=e&&e.end?e:(a=getDataRangeByValue(a,t),__assign(__assign({},e),{start:a[0],end:a[1]}))}var stringValue=function(e){var t;if(e)return t=e.type,e=e.value,isCustomByType(t)?t:[t,e].toString()},numberToDayjs=function(e){return e.filter(function(e){return!!e}).length?e.map(function(e){return dayjs(e)}):null},datesToNumbers=function(e){return e&&e.length?e.map(function(e){return e.valueOf()}):[void 0,void 0]},getValueEntityByStringValue=function(e){e=e.split(",");return{type:e[0],value:Number(e[1])}},getDataRangeByValue=function(e,t){var e=e.split("-"),a=e[0],e=e[1],n=dayjs();return"b"===a?[n.subtract(t,e).valueOf(),n.valueOf()]:"a"===a?[n.valueOf(),n.add(t,e).valueOf()]:[void 0,void 0]},getLabel=function(e){var t,a=e.type,e=e.value;return null==(t=labelByTypeMap.get(a))?void 0:t(isCustomByType(a)?void 0:e)},isCustomByType=function(e){return"custom"===e},InternalQuickRangeDate=memo(function(e){var t=e.className,a=e.style,n=e.config,r=e.value,i=e.onChange,u=e.radioGroupProps,l=e.rangePickerProps,e=e.children,o=useState(sync(r)),s=o[0],v=o[1],c=useMemo(function(){return n||[{type:"a-d",value:7},{type:"a-w",value:1},{type:"a-M",value:3},{type:"a-Q",value:1},{type:"a-y",value:1},{type:"a-h",value:24},{type:"a-m",value:60},{type:"a-s",value:60},{type:"a-ms",value:1e3},{type:"b-d",value:7},{type:"b-w",value:1},{type:"b-M",value:3},{type:"b-Q",value:1},{type:"b-y",value:1},{type:"b-h",value:24},{type:"b-m",value:60},{type:"b-s",value:60},{type:"b-ms",value:1e3},{type:"custom"}]},[n]),o=useMemo(function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-group")},React.createElement(_Radio.Group,__assign({value:stringValue(s)},null!=u?u:{},{optionType:"button",buttonStyle:"solid"}),c.map(function(e){var t=e.type,a=e.value,n=e.label,e=e.render,u={type:t,value:a},l=stringValue(u);return React.createElement(_Radio.Button,{key:l,value:l,onChange:function(){var e=getDataRangeByValue(t,a),e=__assign(__assign({},u),{start:e[0],end:e[1]});v(e),null!=i&&i(e)}},null!=(e=null!=(l=null==e?void 0:e(r))?l:n)?e:getLabel({type:t,value:a}))})),isCustomByType(null==s?void 0:s.type)&&React.createElement("div",{className:"".concat(selectorPrefix,"-range")},React.createElement(_DatePicker.RangePicker,__assign({},null!=l?l:{},{value:numberToDayjs([null==s?void 0:s.start,null==s?void 0:s.end]),onChange:function(e){var t=datesToNumbers(e);v(function(e){return{type:"custom",value:void 0,start:t[0],end:t[1]}}),null!=i&&i({type:"custom",value:void 0,start:t[0],end:t[1]})}}))))},[c,s,l,u]);return useUpdateEffect(function(){v(sync(r))},[r]),React.createElement("div",{className:classNames(selectorPrefix,null!=t?t:""),style:null!=a?a:{}},e&&e({defaultElement:o,value:r,onChange:function(e){var t;isCustomByType(null==e?void 0:e.type)||(t=getDataRangeByValue(e.type,e.value),e=__assign(__assign({},e),{start:t[0],end:t[1]})),v(e),null!=i&&i(e)}}),!e&&o)}),QuickRangeDate=InternalQuickRangeDate;QuickRangeDate.displayName="QuickRangeDate",QuickRangeDate.sync=sync,QuickRangeDate.stringValue=stringValue,QuickRangeDate.getLabel=getLabel,QuickRangeDate.numberToDayjs=numberToDayjs,QuickRangeDate.datesToNumbers=datesToNumbers,QuickRangeDate.getValueEntityByStringValue=getValueEntityByStringValue;export default QuickRangeDate;
//# sourceMappingURL=QuickRangeDate.js.map
