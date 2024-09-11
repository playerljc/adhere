var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,l=arguments.length;t<l;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)r.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(t[s[l]]=e[s[l]]);return t};import classNames from"classnames";import React,{memo}from"react";import ListFilter from"../ListFilter";import Selector from"./Selector";var selectorPrefix="adhere-mobile-ui-ant-hoc-filter-selector",InternalFilterSelector=memo(function(e){var r=e.className,t=e.style,l=e.filterProps,s=e.filterWrapperClassName,a=e.filterWrapperStyle,o=e.bodyWrapperClassName,n=e.bodyWrapperStyle,i=e.selectorClassName,p=e.selectorStyle,c=e.renderEmpty,m=__rest(e,["className","style","filterProps","filterWrapperClassName","filterWrapperStyle","bodyWrapperClassName","bodyWrapperStyle","selectorClassName","selectorStyle","renderEmpty"]);return React.createElement(ListFilter,{options:null!=(e=null==m?void 0:m.options)?e:[],filterProps:l,wrapperClassName:classNames(selectorPrefix,null!=r?r:""),wrapperStyle:null!=t?t:{},filterWrapperClassName:classNames("".concat(selectorPrefix,"-filter"),null!=s?s:""),bodyWrapperClassName:classNames("".concat(selectorPrefix,"-body"),null!=o?o:""),filterWrapperStyle:null!=a?a:{},bodyWrapperStyle:null!=n?n:{},renderEmpty:c,children:function(e){return React.createElement(Selector,__assign({className:null!=i?i:"",style:null!=p?p:{}},m,{options:e}))}})}),FilterSelector=InternalFilterSelector;FilterSelector.displayName="FilterSelector";export default FilterSelector;
//# sourceMappingURL=FilterSelector.js.map
