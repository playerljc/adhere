var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var n,i=1,a=arguments.length;i<a;i++)for(var e in n=arguments[i])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,n){var i={};for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(i[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)n.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(i[e[a]]=t[e[a]]);return i};import React,{memo}from"react";import RadioList from"./RadioList";import usePaging from"./usePaging";var InternalRadioPagingList=memo(function(t){var n=t.totalCount,i=t.paging,a=t.onPagingChange,e=t.onPagingShowSizeChange,o=t.defaultLimit,t=__rest(t,["totalCount","paging","onPagingChange","onPagingShowSizeChange","defaultLimit"]),o=usePaging({defaultLimit:null!=o?o:10,paging:i,totalCount:n,onPagingShowSizeChange:e,onPagingChange:a});return React.createElement(RadioList,__assign({pagination:o},t))}),RadioPagingList=InternalRadioPagingList;RadioPagingList.displayName="RadioPagingList";export default RadioPagingList;
//# sourceMappingURL=RadioPagingList.js.map
