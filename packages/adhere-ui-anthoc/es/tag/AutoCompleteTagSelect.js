var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var l in t=arguments[o])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var o={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(o[l[r]]=e[l[r]]);return o};import React,{memo,useMemo}from"react";import AutoCompleteMultipleSelect from"../multiple-select/AutoCompleteMultipleSelect";import AutoComplete from"../select/AutoCompleteSelect";import useAutoCompleteFetchLoading from"../useAutoCompleteFetchLoading";import VerticalCheckableTagGroup from"./VerticalCheckableTagGroup";import useRenderProps from"./useRenderProps";var AutoCompleteTagSelect=function(e){var t=e.tagProps,e=__rest(e,["tagProps"]),o=useAutoCompleteFetchLoading(e.renderLoading),r=useRenderProps(t),l=useMemo(function(){return"mode"in(null!=t?t:{})&&"multiple"===(null==t?void 0:t.mode)?AutoCompleteMultipleSelect:AutoComplete},[(null!=t?t:{}).mode]);return React.createElement(l,__assign({},e),function(e){e.originNode;var t=e.loading,e=__rest(e,["originNode","loading"]);return React.createElement(React.Fragment,null,t&&o,!t&&React.createElement(VerticalCheckableTagGroup,__assign({},r(e))))})};export default memo(AutoCompleteTagSelect);
//# sourceMappingURL=AutoCompleteTagSelect.js.map
