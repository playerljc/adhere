var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(r[o[l]]=e[o[l]]);return r};import React,{memo}from"react";import CheckAllMultipleSelect from"../multiple-select/CheckAllMultipleSelect";import VerticalCheckableTagGroup from"./VerticalCheckableTagGroup";import useRenderProps from"./useRenderProps";var CheckAllTagSelect=function(e){var t=e.tagProps,e=__rest(e,["tagProps"]),l=useRenderProps(t,"multiple");return React.createElement(CheckAllMultipleSelect,__assign({},e,{mode:"multiple"}),function(e){e.originNode;var r=__rest(e,["originNode"]);return React.createElement(VerticalCheckableTagGroup,__assign({},l(__assign(__assign({},r),{onChange:function(e){var t;return null==(t=r.onChange)?void 0:t.call(r,e,[])}})),{mode:"multiple"}))})};export default memo(CheckAllTagSelect);
//# sourceMappingURL=CheckAllTagSelect.js.map
