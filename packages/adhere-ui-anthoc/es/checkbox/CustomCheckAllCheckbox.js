var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,l=1,t=arguments.length;l<t;l++)for(var a in r=arguments[l])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var l={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]]);return l};import classNames from"classnames";import React,{memo}from"react";import CheckAllWrapper from"../CheckAllWrapper";import CustomCheckbox from"./CustomCheckbox";var selectorPrefix="adhere-ui-ant-hoc-check-all-check-box",CustomCheckAllCheckbox=function(e){var r=e.checkAllWrapperClassName,l=e.checkAllWrapperStyle,t=e.dropdownWrapperClassName,a=e.dropdownWrapperStyle,e=__rest(e,["checkAllWrapperClassName","checkAllWrapperStyle","dropdownWrapperClassName","dropdownWrapperStyle"]);return React.createElement("div",{className:selectorPrefix},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-check-all"),null!=r?r:""),style:null!=l?l:{}},React.createElement(CheckAllWrapper,{value:e.value,onChange:e.onChange,options:null!=(l=null==(r=null==e?void 0:e.options)?void 0:r.map(function(e){return{label:e.label,value:e.value}}))?l:[]})),React.createElement("div",{className:classNames("".concat(selectorPrefix,"-body"),null!=t?t:""),style:null!=a?a:{}},React.createElement(CustomCheckbox,__assign({},e))))};export default memo(CustomCheckAllCheckbox);
//# sourceMappingURL=CustomCheckAllCheckbox.js.map
