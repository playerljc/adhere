var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&r.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)r.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(t[l[n]]=e[l[n]]);return t},__spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var n,l=0,a=r.length;l<a;l++)!n&&l in r||((n=n||Array.prototype.slice.call(r,0,l))[l]=r[l]);return e.concat(n||Array.prototype.slice.call(r))};import React,{memo}from"react";import Table from"./Table";var InternalCheckboxTable=memo(function(e){var r=e.value,l=void 0===r?[]:r,a=e.onChange,r=e.options,e=__rest(e,["value","onChange","options"]);return React.createElement(Table,__assign({dataSource:r,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:null!=l?l:[],onSelect:function(r,e,t){e?(e=t.filter(function(e){return!!e}).map(function(e){return e.value}),null!=a&&a(Array.from(new Set(__spreadArray(__spreadArray([],null!=l?l:[],!0),e,!0))),[])):null!=a&&a((null!=l?l:[]).filter(function(e){return e!==r.id}),[])},onSelectAll:function(e,r,t){var n;e?(e=r.filter(function(e){return!!e}).map(function(e){return e.value}),null!=a&&a(Array.from(new Set(__spreadArray(__spreadArray([],null!=l?l:[],!0),e,!0))),[])):(n=t.filter(function(e){return!!e}).map(function(e){return e.value}),null!=a&&a((null!=l?l:[]).filter(function(e){return!n.includes(e)}),[]))}}},null!=e?e:{}))}),CheckboxTable=InternalCheckboxTable;CheckboxTable.displayName="CheckboxTable";export default CheckboxTable;
//# sourceMappingURL=CheckboxTable.js.map
