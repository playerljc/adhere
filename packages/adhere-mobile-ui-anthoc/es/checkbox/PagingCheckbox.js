var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};import React,{memo}from"react";import Paging from"../Paging";import CheckboxGroup from"./CheckboxGroup";var InternalPagingCheckbox=memo(function(e){var t=e.options,r=e.pagingProps,e=__rest(e,["options","pagingProps"]);return React.createElement(Paging,__assign({options:t},r),React.createElement(CheckboxGroup,__assign({},e)))}),PagingCheckbox=InternalPagingCheckbox;PagingCheckbox.displayName="PagingCheckbox";export default PagingCheckbox;
//# sourceMappingURL=PagingCheckbox.js.map
