var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var o={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};import React,{memo}from"react";import AutoComplete from"../select/AutoCompleteSelect";import useAutoCompleteFetchLoading from"../useAutoCompleteFetchLoading";import CustomRadio from"./CustomRadio";import useRenderProps from"./useRenderProps";var AutoCompleteCustomRadioSelect=function(e){var t=e.radioProps,o=e.children,e=__rest(e,["radioProps","children"]),r=useAutoCompleteFetchLoading(e.renderLoading),n=useRenderProps(t);return React.createElement(AutoComplete,__assign({},e),function(e){e.originNode;var t=e.loading,e=__rest(e,["originNode","loading"]);return React.createElement(React.Fragment,null,t&&r,!t&&React.createElement(CustomRadio,__assign({},n(e)),o))})};export default memo(AutoCompleteCustomRadioSelect);
//# sourceMappingURL=AutoCompleteCustomRadioSelect.js.map
