var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,n){var e={};for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,a=Object.getOwnPropertySymbols(t);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(e[a[i]]=t[a[i]]);return e};import React,{memo}from"react";import CheckboxList from"./CheckboxList";import usePaging from"./usePaging";var InternalCheckboxPagingList=memo(function(t){var n=t.totalCount,e=t.paging,i=t.onPagingChange,a=t.onPagingShowSizeChange,o=t.defaultLimit,t=__rest(t,["totalCount","paging","onPagingChange","onPagingShowSizeChange","defaultLimit"]),o=usePaging({defaultLimit:null!=o?o:10,paging:e,totalCount:n,onPagingShowSizeChange:a,onPagingChange:i});return React.createElement(CheckboxList,__assign({pagination:o},t))}),CheckboxPagingList=InternalCheckboxPagingList;CheckboxPagingList.displayName="CheckboxPagingList";export default CheckboxPagingList;
//# sourceMappingURL=CheckboxPagingList.js.map
