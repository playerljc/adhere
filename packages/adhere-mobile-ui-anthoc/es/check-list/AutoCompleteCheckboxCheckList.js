var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var o={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};import{List}from"antd-mobile";import React,{memo}from"react";import useAutoComplete from"../useAutoComplete";import CheckboxCheckList from"./CheckboxCheckList";var InternalAutoCompleteCheckboxCheckList=memo(function(e){var r=e.checkListProps,e=__rest(e,["checkListProps"]);return useAutoComplete(__assign({renderResultItem:function(e){return React.createElement(List.Item,__assign({},e))}},e),function(e){var t=e.value,o=e.onChange,e=e.searchDataSource;return React.createElement(CheckboxCheckList,__assign({value:t,onChange:o,options:e},null!=r?r:{}))})}),AutoCompleteCheckboxCheckList=InternalAutoCompleteCheckboxCheckList;AutoCompleteCheckboxCheckList.displayName="AutoCompleteCheckboxCheckList";export default AutoCompleteCheckboxCheckList;
//# sourceMappingURL=AutoCompleteCheckboxCheckList.js.map
