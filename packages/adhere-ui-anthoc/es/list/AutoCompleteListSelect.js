var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var l in t=arguments[o])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var o={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(o[l[r]]=e[l[r]]);return o};import React,{memo,useMemo}from"react";import AutoCompleteMultipleSelect from"../multiple-select/AutoCompleteMultipleSelect";import AutoCompleteSelect from"../select/AutoCompleteSelect";import useAutoCompleteFetchLoading from"../useAutoCompleteFetchLoading";import CheckboxList from"./CheckboxList";import RadioList from"./RadioList";import useRenderProps from"./useRenderProps";var InternalAutoCompleteListSelect=memo(function(e){var t=e.listProps,o=__rest(e,["listProps"]),r=useMemo(function(){return"mode"in o&&"multiple"===o.mode},[o.mode]),l=useRenderProps(t),i=useAutoCompleteFetchLoading(o.renderLoading),e=useMemo(function(){return r?AutoCompleteMultipleSelect:AutoCompleteSelect},[r]);return React.createElement(e,__assign({},o),function(e){e.originNode;var t=e.loading,e=__rest(e,["originNode","loading"]);return React.createElement(React.Fragment,null,t&&i,!t&&r&&React.createElement(CheckboxList,__assign({},l(e))),!t&&!r&&React.createElement(RadioList,__assign({},l(e))))})}),AutoCompleteListSelect=InternalAutoCompleteListSelect;AutoCompleteListSelect.displayName="AutoCompleteListSelect";export default AutoCompleteListSelect;
//# sourceMappingURL=AutoCompleteListSelect.js.map