var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(a){for(var n,e=1,t=arguments.length;e<t;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i]);return a}).apply(this,arguments)},__rest=this&&this.__rest||function(a,n){var e={};for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&n.indexOf(i)<0&&(e[i]=a[i]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,i=Object.getOwnPropertySymbols(a);t<i.length;t++)n.indexOf(i[t])<0&&Object.prototype.propertyIsEnumerable.call(a,i[t])&&(e[i[t]]=a[i[t]]);return e};import React,{memo}from"react";import usePaging from"../list/usePaging";import RadioTable from"./RadioTable";var InternalRadioPagingTable=memo(function(a){var n=a.totalCount,e=a.paging,t=a.onPagingChange,i=a.onPagingShowSizeChange,o=a.defaultLimit,a=__rest(a,["totalCount","paging","onPagingChange","onPagingShowSizeChange","defaultLimit"]),o=usePaging({defaultLimit:null!=o?o:10,paging:e,totalCount:n,onPagingShowSizeChange:i,onPagingChange:t});return React.createElement(RadioTable,__assign({pagination:o},null!=a?a:{}))}),RadioPagingTable=InternalRadioPagingTable;RadioPagingTable.displayName="RadioPagingTable";export default RadioPagingTable;
//# sourceMappingURL=RadioPagingTable.js.map
