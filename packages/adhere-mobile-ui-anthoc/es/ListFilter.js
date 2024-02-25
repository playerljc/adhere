var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,l=1,r=arguments.length;l<r;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};import{ErrorBlock,SearchBar}from"antd-mobile";import classNames from"classnames";import React,{useCallback,useMemo,useState}from"react";import Util from"@baifendian/adhere-util";var selectorPrefix="adhere-mobile-ui-ant-hoc-list-filter";function ListFilter(e){var t=e.options,l=e.filterProps,r=e.children,n=e.wrapperClassName,i=e.wrapperStyle,a=e.filterWrapperClassName,o=e.filterWrapperStyle,s=e.bodyWrapperClassName,c=e.bodyWrapperStyle,e=e.renderEmpty,u=useState(""),f=u[0],p=u[1];function m(e,t){return t[null!=(t=null==l?void 0:l.optionFilterProp)?t:"title"].includes(e)}var d=useMemo(function(){return f?"boolean"==typeof(null==l?void 0:l.filterOption)&&l.filterOption?(null!=t?t:[]).filter(function(e){return m(f,e)}):Util.isFunction(null==l?void 0:l.filterOption)?(null!=t?t:[]).filter(function(e){return(null==l?void 0:l.filterOption)(f,e)}):(null!=t?t:[]).filter(function(e){return m(f,e)}):null!=t?t:[]},[f,null==l?void 0:l.filterOption,null==l?void 0:l.optionFilterProp,t]),u=useCallback(function(){return!d.length},[d]);return React.createElement("div",{className:classNames(selectorPrefix,null!=n?n:""),style:null!=i?i:{}},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-search"),null!=a?a:""),style:null!=o?o:{}},React.createElement(SearchBar,__assign({onSearch:function(e){p(e)},onClear:function(){p("")}},l))),React.createElement("div",{className:classNames("".concat(selectorPrefix,"-list"),null!=s?s:""),style:null!=c?c:{}},u()&&(null!=(n=null==e?void 0:e())?n:React.createElement(ErrorBlock,{status:"empty"})),null==r?void 0:r(d)))}export default ListFilter;
//# sourceMappingURL=ListFilter.js.map