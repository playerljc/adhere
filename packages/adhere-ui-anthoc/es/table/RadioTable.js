var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};import React,{memo}from"react";import Table from"./Table";var InternalRadioTable=memo(function(e){var t=e.value,a=e.onChange,o=e.options,e=__rest(e,["value","onChange","options"]);return React.createElement(Table,__assign({dataSource:o,rowKey:"id",rowSelection:{type:"radio",selectedRowKeys:[t],onChange:function(e){null!=a&&a(e.length?e[0]:"",[])}}},e))}),RadioTable=InternalRadioTable;RadioTable.displayName="RadioTable";export default RadioTable;
//# sourceMappingURL=RadioTable.js.map
