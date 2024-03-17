var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,l=arguments.length;t<l;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t};import classNames from"classnames";import React,{memo}from"react";import ListFilter from"../ListFilter";import Paging from"../Paging";import Selector from"./Selector";var selectorPrefix="adhere-mobile-ui-ant-hoc-filter-paging-selector",InternalFilterPagingSelector=memo(function(e){var r=e.className,t=e.style,l=e.filterWrapperClassName,a=e.filterWrapperStyle,s=e.bodyWrapperClassName,o=e.bodyWrapperStyle,i=e.renderEmpty,n=e.filterProps,p=e.pagingProps,c=e.options,m=__rest(e,["className","style","filterWrapperClassName","filterWrapperStyle","bodyWrapperClassName","bodyWrapperStyle","renderEmpty","filterProps","pagingProps","options"]);return React.createElement(ListFilter,{options:null!=c?c:[],filterProps:n,wrapperClassName:classNames(selectorPrefix,null!=r?r:""),wrapperStyle:null!=t?t:{},filterWrapperClassName:classNames("".concat(selectorPrefix,"-filter"),null!=l?l:""),bodyWrapperClassName:classNames("".concat(selectorPrefix,"-body"),null!=s?s:""),filterWrapperStyle:null!=a?a:{},bodyWrapperStyle:null!=o?o:{},renderEmpty:i,children:function(e){return React.createElement(Paging,__assign({options:e},p,{isLocal:!0}),React.createElement(Selector,__assign({},m)))}})}),FilterPagingSelector=InternalFilterPagingSelector;FilterPagingSelector.displayName="FilterPagingSelector";export default FilterPagingSelector;
//# sourceMappingURL=FilterPagingSelector.js.map
