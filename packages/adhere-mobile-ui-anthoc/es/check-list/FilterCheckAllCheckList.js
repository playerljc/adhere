var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)t.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(r[s[l]]=e[s[l]]);return r};import classNames from"classnames";import React,{memo}from"react";import useListFilter from"../useListFilter";import CheckAllCheckList from"./CheckAllCheckList";var selectorPrefix="adhere-mobile-ui-ant-hoc-filter-check-all-check-list",InternalFilterCheckAllCheckList=memo(function(e){var t=e.className,r=e.style,l=e.filterProps,s=e.filterWrapperClassName,a=e.filterWrapperStyle,i=e.bodyWrapperClassName,c=e.bodyWrapperStyle,o=e.checkListClassName,p=e.checkListStyle,n=__rest(e,["className","style","filterProps","filterWrapperClassName","filterWrapperStyle","bodyWrapperClassName","bodyWrapperStyle","checkListClassName","checkListStyle"]);return useListFilter({options:null!=(e=null==n?void 0:n.options)?e:[],filterProps:l,wrapperClassName:classNames(selectorPrefix,null!=t?t:""),wrapperStyle:r,filterWrapperClassName:classNames("".concat(selectorPrefix,"-filter"),null!=s?s:""),bodyWrapperClassName:classNames("".concat(selectorPrefix,"-body"),null!=i?i:""),filterWrapperStyle:a,bodyWrapperStyle:c,children:function(e){return React.createElement(CheckAllCheckList,__assign({className:null!=o?o:"",style:null!=p?p:{}},n,{options:e}))}})}),FilterCheckAllCheckList=InternalFilterCheckAllCheckList;FilterCheckAllCheckList.displayName="FilterCheckAllCheckList";export default FilterCheckAllCheckList;
//# sourceMappingURL=FilterCheckAllCheckList.js.map