import _List from"antd-mobile/es/components/list";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};import classNames from"classnames";import React,{memo}from"react";var selectorPrefix="adhere-mobile-ui-ant-hoc-data-source-list",InternalDataSourceList=memo(function(e){var t=e.wrapperClassName,r=e.wrapperStyle,a=e.dataSource,n=e.renderItem,s=e.onClick,e=__rest(e,["wrapperClassName","wrapperStyle","dataSource","renderItem","onClick"]);return React.createElement("div",{className:classNames(selectorPrefix,null!=t?t:""),style:null!=r?r:{}},React.createElement(_List,__assign({},e),(null!=a?a:[]).map(function(e){return React.createElement(_List.Item,__assign({},e,{children:null==n?void 0:n(e),onClick:function(){return null==s?void 0:s(e)}}))})))}),DataSourceList=InternalDataSourceList;DataSourceList.displayName="DataSourceList";export default DataSourceList;
//# sourceMappingURL=DataSourceList.js.map