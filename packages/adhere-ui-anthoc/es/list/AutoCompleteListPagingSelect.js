var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var o={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(o[i[r]]=e[i[r]]);return o};import React,{memo,useMemo}from"react";import AutoCompleteMultipleSelect from"../multiple-select/AutoCompleteMultipleSelect";import AutoCompleteSelect from"../select/AutoCompleteSelect";import CheckboxPagingList from"./CheckboxPagingList";import RadioPagingList from"./RadioPagingList";import usePagingRenderProps from"./usePagingRenderProps";var AutoCompleteListPagingSelect=function(e){var t=e.pagingProps,o=e.listPagingProps,e=__rest(e,["pagingProps","listPagingProps"]),o=usePagingRenderProps(__assign({listPagingProps:o,mode:e.mode},t)),r=o.isMultiple,t=o.options,i=o.setInputValue,n=o.defaultCurrentPage,a=o.defaultPageSize,s=o.setPaging,l=o.renderProps,o=useMemo(function(){return r?AutoCompleteMultipleSelect:AutoCompleteSelect},[r]);return React.createElement(o,__assign({},e,{options:t,onSearch:i,onClear:function(){s({page:n,limit:a})}}),function(e){e.originNode;e=__rest(e,["originNode"]);return React.createElement(React.Fragment,null,r&&React.createElement(CheckboxPagingList,__assign({},l(e))),!r&&React.createElement(RadioPagingList,__assign({},l(e))))})};export default memo(AutoCompleteListPagingSelect);
//# sourceMappingURL=AutoCompleteListPagingSelect.js.map
