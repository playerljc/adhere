var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var o={};for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};import{List}from"antd-mobile";import React,{memo}from"react";import useAutoComplete from"../useAutoComplete";import RadioGroup from"./RadioGroup";var InternalAutoCompleteRadio=memo(function(t){var r=t.radioGroupProps,t=__rest(t,["radioGroupProps"]);return useAutoComplete(__assign({renderResultItem:function(t){return React.createElement(List.Item,__assign({},t))}},t),function(t){var e=t.value,o=t.onChange,t=t.searchDataSource;return React.createElement(RadioGroup,__assign({value:e&&e.length?e[0]:null,onChange:function(t){null!=o&&o([t])},options:t},null!=r?r:{}))})}),AutoCompleteRadio=InternalAutoCompleteRadio;AutoCompleteRadio.displayName="AutoCompleteRadio";export default AutoCompleteRadio;
//# sourceMappingURL=AutoCompleteRadio.js.map
