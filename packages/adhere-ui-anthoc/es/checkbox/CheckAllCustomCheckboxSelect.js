var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(r[l[o]]=e[l[o]]);return r};import React,{memo}from"react";import CheckAllMultipleSelect from"../multiple-select/CheckAllMultipleSelect";import CustomCheckbox from"./CustomCheckbox";import useRenderProps from"./useRenderProps";var InternalCheckAllCustomCheckboxSelect=memo(function(e){var t=e.checkboxProps,o=e.children,e=__rest(e,["checkboxProps","children"]),l=useRenderProps(t);return React.createElement(CheckAllMultipleSelect,__assign({},e),function(e){e.originNode;var r=__rest(e,["originNode"]);return React.createElement(CustomCheckbox,__assign({},l(__assign(__assign({},r),{onChange:function(e){var t;return null==(t=r.onChange)?void 0:t.call(r,e,[])}}))),o)})}),CheckAllCustomCheckboxSelect=InternalCheckAllCustomCheckboxSelect;CheckAllCustomCheckboxSelect.displayName="CheckAllCustomCheckboxSelect";export default CheckAllCustomCheckboxSelect;
//# sourceMappingURL=CheckAllCustomCheckboxSelect.js.map