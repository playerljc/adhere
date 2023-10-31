var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var o={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};import React,{memo,useMemo}from"react";import AutoCompleteMultipleSelect from"../multiple-select/AutoCompleteMultipleSelect";import AutoCompleteSelect from"../select/AutoCompleteSelect";import CheckboxPagingTable from"./CheckboxPagingTable";import RadioPagingTable from"./RadioPagingTable";import usePagingRenderProps from"./usePagingRenderProps";var AutoCompleteTablePagingSelect=function(e){var t=e.pagingProps,o=e.tablePagingProps,e=__rest(e,["pagingProps","tablePagingProps"]),o=usePagingRenderProps(__assign({tablePagingProps:o,mode:e.mode},t)),r=o.isMultiple,t=o.options,n=o.setInputValue,a=o.defaultCurrentPage,i=o.defaultPageSize,l=o.setPaging,g=o.renderProps,o=useMemo(function(){return r?AutoCompleteMultipleSelect:AutoCompleteSelect},[r]);return React.createElement(o,__assign({},e,{options:t,onSearch:n,onClear:function(){l({page:a,limit:i})}}),function(e){e.originNode;e=__rest(e,["originNode"]);return React.createElement(React.Fragment,null,r&&React.createElement(CheckboxPagingTable,__assign({},g(e))),!r&&React.createElement(RadioPagingTable,__assign({},g(e))))})};export default memo(AutoCompleteTablePagingSelect);
//# sourceMappingURL=AutoCompleteTablePagingSelect.js.map
