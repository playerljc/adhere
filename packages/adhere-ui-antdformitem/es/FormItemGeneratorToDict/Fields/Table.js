var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||((a=a||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};import React,{useEffect,useRef,useState}from"react";import Dict from"@baifendian/adhere-util-dict";import{Table}from"../../AntFormItemNormalize";import MulitSelectFormItem from"../MulitSelectFormItem";import SelectFormItem from"../SelectFormItem";import TableFormItem from"../TableFormItem";import TableMulitSelectFormItem from"../TableMulitSelectFormItem";import TableSelectFormItem from"../TableSelectFormItem";var FormItemComponents={};export default function(){var e=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("Table")}),t=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("DynamicTable")}),n=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("TablePagination")});return e.forEach(function(a){FormItemComponents["".concat(a,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n;return React.createElement(TableFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n;return React.createElement(TableSelectFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"MulitSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n;return React.createElement(TableMulitSelectFormItem,__assign({},e,{dataSource:t}))}}),t.forEach(function(c){FormItemComponents["".concat(c,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],o=Dict.value[c].value;return useEffect(function(){o.then&&o.then(function(e){r(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){r(e)})},[t]),React.createElement(TableFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(c,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],o=Dict.value[c].value;return useEffect(function(){o.then&&o.then(function(e){r(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){r(e)})},[t]),React.createElement(TableSelectFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(c,"MulitSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],o=Dict.value[c].value;return useEffect(function(){o.then&&o.then(function(e){r(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){r(e)})},[t]),React.createElement(TableMulitSelectFormItem,__assign({},e,{dataSource:a}))}}),n.forEach(function(S){FormItemComponents["".concat(S,"FormItem")]=function(t){var e=useState(!1),n=e[0],a=e[1],e=useState([]),r=e[0],o=e[1],e=useState({current:1,pageSize:10,total:0}),c=e[0],i=e[1],u=Dict.value[S].value;return useEffect(function(){a(!0),u(__assign({},c)).then(function(e){i(__assign(__assign({},c),{total:e[t.totalKey||"total"]})),o(e[t.dataKey||"records"]),a(!1)}).catch(function(){a(!1)})},[c.current,c.pageSize]),React.createElement(Table,__assign({dataSource:r,loading:n,pagination:{onChange:function(e,t){i(__assign(__assign({},c),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){i(__assign(__assign({},c),{current:e,pageSize:t}))},total:c.total,current:c.current,pageSize:c.pageSize,showQuickJumper:!0},rowKey:t.rowKey||"id"},t))},FormItemComponents["".concat(S,"SelectFormItem")]=function(n){var e=useState(""),t=e[0],a=e[1],e=useState(!1),r=e[0],o=e[1],e=useState([]),c=e[0],i=e[1],e=useState({current:1,pageSize:10,total:0}),u=e[0],s=e[1],e=useState(n.value?[n.value]:[]),l=e[0],f=e[1],e=useState(n.value?c.find(function(e){return e[n.rowKey||"id"]===n.value}):[]),m=e[0],_=e[1],p=Dict.value[S].value;return useEffect(function(){o(!0),p(__assign({},u)).then(function(e){s(__assign(__assign({},u),{total:e[n.totalKey||"total"]})),i(e[n.dataKey||"records"]),o(!1)}).catch(function(){o(!1)})},[u.current,u.pageSize]),useEffect(function(){n.value?(f([n.value]),_([c.find(function(e){return e[n.rowKey||"id"]===n.value})])):(f([]),_([]))},[n.value]),React.createElement(SelectFormItem,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=t?c.filter(function(e){return e[n.labelKey||"name"].startsWith(t)}):c;return React.createElement(Table,__assign({dataSource:e,loading:r,pagination:{onChange:function(e,t){s(__assign(__assign({},u),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){s(__assign(__assign({},u),{current:e,pageSize:t}))},total:u.total,current:u.current,pageSize:u.pageSize,showQuickJumper:!0},rowKey:n.rowKey||"id",rowSelection:{type:"radio",selectedRowKeys:l,selectedRows:m,onChange:function(e,t){f(e),_(t),n.onChange(e.length?e[0]:"")}}},n))},onChange:function(e){n.onChange(e)},filterOption:function(e){return a(e),!1},onBlur:function(){a("")},onClear:function(){a("")}},n.selectProps||{}),dataSource:c.map(function(e){return{label:e[n.labelKey||"name"],value:e[n.rowKey||"id"]}})})},FormItemComponents["".concat(S,"MulitSelectFormItem")]=function(r){var e=useState(""),t=e[0],n=e[1],e=useState(!1),a=e[0],o=e[1],c=useRef(new Map),e=useState({current:1,pageSize:10,total:0}),i=e[0],u=e[1],e=useState(r.value||[]),s=e[0],l=e[1],e=useState(r.value?r.value.map(function(t){return p().find(function(e){return e[r.rowKey||"id"]===t})}):[]),f=e[0],m=e[1],_=Dict.value[S].value;function p(){return c.current.get(i.current)||[]}function g(e,n){var t,a=r.rowKey||"id",e=e?(t=__spreadArray(__spreadArray([],s,!0),n.map(function(e){return e[a]}),!0),__spreadArray(__spreadArray([],f,!0),n,!0)):(t=s.filter(function(t){return!n.find(function(e){return e[a]===t})}),f.filter(function(t){return!n.find(function(e){return e[a]===t[a]})}));l(t),m(e),r.onChange(t)}return useEffect(function(){o(!0),_(__assign({},i)).then(function(e){c.current.set(i.current,e[r.dataKey||"records"]),u(__assign(__assign({},i),{total:e[r.totalKey||"total"]})),o(!1)}).catch(function(){o(!1)})},[i.current,i.pageSize]),React.createElement(MulitSelectFormItem,{selectProps:__assign({value:r.value,dropdownRender:function(){var e=t?p().filter(function(e){return e[r.labelKey||"name"].startsWith(t)}):p();return React.createElement(Table,__assign({dataSource:e,loading:a,pagination:{onChange:function(e,t){u(__assign(__assign({},i),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){u(__assign(__assign({},i),{current:e,pageSize:t}))},total:i.total,current:i.current,pageSize:i.pageSize,showQuickJumper:!0},rowKey:r.rowKey||"id",rowSelection:{type:"checkbox",selectedRowKeys:s,selectedRows:f,onSelect:function(e,t){g(t,[e])},onSelectAll:function(e,t,n){g(e,n)}}},r))},onChange:function(e){r.onChange(e),l(e),m(e.map(function(t){return Array.from(c.values()).find(function(e){return e[r.rowKey||"id"]===t})}))},onClear:function(){l([]),m([]),n(""),r.onChange([])},onBlur:function(){n("")},filterOption:function(e){return n(e),!1}},r.selectProps||{}),dataSource:p().map(function(e){return{label:e[r.labelKey||"name"],value:e[r.rowKey||"id"]}})})}}),FormItemComponents}
//# sourceMappingURL=Table.js.map
