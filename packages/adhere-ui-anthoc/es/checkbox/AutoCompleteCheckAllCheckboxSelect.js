var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,l=arguments.length;o<l;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var o={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(o[r[l]]=e[r[l]]);return o};import React,{memo}from"react";import AutoCompleteCheckAllMultipleSelect from"../multiple-select/AutoCompleteCheckAllMultipleSelect";import useAutoCompleteFetchLoading from"../useAutoCompleteFetchLoading";import VerticalCheckbox from"./VerticalCheckbox";import useRenderProps from"./useRenderProps";var InternalAutoCompleteCheckAllCheckboxSelect=memo(function(e){var t=e.checkboxProps,e=__rest(e,["checkboxProps"]),l=useAutoCompleteFetchLoading(e.renderLoading),r=useRenderProps(t);return React.createElement(AutoCompleteCheckAllMultipleSelect,__assign({},e),function(e){e.originNode;var t=e.loading,o=__rest(e,["originNode","loading"]);return React.createElement(React.Fragment,null,t&&l,!t&&React.createElement(VerticalCheckbox,__assign({},r(__assign(__assign({},o),{onChange:function(e){var t;return null==(t=o.onChange)?void 0:t.call(o,e,[])}})))))})}),AutoCompleteCheckAllCheckboxSelect=InternalAutoCompleteCheckAllCheckboxSelect;AutoCompleteCheckAllCheckboxSelect.displayName="AutoCompleteCheckAllCheckboxSelect";export default AutoCompleteCheckAllCheckboxSelect;
//# sourceMappingURL=AutoCompleteCheckAllCheckboxSelect.js.map
