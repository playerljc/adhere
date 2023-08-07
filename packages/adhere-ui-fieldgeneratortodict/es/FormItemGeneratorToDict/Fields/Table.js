import _Table from"@baifendian/adhere-ui-anthoc/es/table";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||((a=a||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};import{useMount,useUpdateEffect}from"ahooks";import React,{useRef,useState}from"react";import Dict from"@baifendian/adhere-util-dict";import{setItem}from"../ItemFactory";import MultiSelectFormItem from"../MultiSelectFormItem";import SelectFormItem from"../SelectFormItem";import TableFormItem from"../TableFormItem";import TableMultiSelectFormItem from"../TableMultiSelectFormItem";import TableSelectFormItem from"../TableSelectFormItem";import{deepDep}from"../util";setItem("Table","FormItem",function(o){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=Dict.value[o].value,r=a instanceof Function?a(t):a;return useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(TableFormItem,__assign({},e,{dataSource:r}))}}),setItem("Table","SelectFormItem",function(o){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=Dict.value[o].value,r=a instanceof Function?a(t):a;return useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(TableSelectFormItem,__assign({},e,{dataSource:r}))}}),setItem("Table","MultiSelectFormItem",function(o){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=Dict.value[o].value,r=a instanceof Function?a(t):a;return useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(TableMultiSelectFormItem,__assign({},e,{dataSource:r}))}}),setItem("TableDynamic","FormItem",function(c){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useState([]),r=a[0],o=a[1],u=Dict.value[c].value;return useMount(function(){u.then&&u.then(function(e){o(e)})}),useUpdateEffect(function(){u instanceof Function&&u(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(TableFormItem,__assign({},e,{dataSource:r}))}}),setItem("TableDynamic","SelectFormItem",function(c){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useState([]),r=a[0],o=a[1],u=Dict.value[c].value;return useMount(function(){u.then&&u.then(function(e){o(e)})}),useUpdateEffect(function(){u instanceof Function&&u(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(TableSelectFormItem,__assign({},e,{dataSource:r}))}}),setItem("TableDynamic","MultiSelectFormItem",function(c){return function(e){var t=e.cascadeParams,n=e.onDataSourceChange,e=__rest(e,["cascadeParams","onDataSourceChange"]),a=useState([]),r=a[0],o=a[1],u=Dict.value[c].value;return useMount(function(){u.then&&u.then(function(e){o(e)})}),useUpdateEffect(function(){u instanceof Function&&u(t).then(function(e){o(e)})},[deepDep(t)]),useUpdateEffect(function(){null!=n&&n(r)},[r]),React.createElement(TableMultiSelectFormItem,__assign({},e,{dataSource:r}))}}),setItem("TablePagination","FormItem",function(l){return function(t){var e=useState(!1),n=e[0],a=e[1],e=useState([]),r=e[0],o=e[1],e=useState({current:1,pageSize:10,total:0}),u=e[0],c=e[1],i=Dict.value[l].value;function s(){a(!0),i(__assign({},u)).then(function(e){c(__assign(__assign({},u),{total:e[t.totalKey||"total"]})),o(e[t.dataKey||"records"]),a(!1)}).catch(function(){a(!1)})}return useMount(function(){s()}),useUpdateEffect(function(){s()},[u.current,u.pageSize]),React.createElement(_Table,__assign({dataSource:r,loading:n,pagination:{onChange:function(e,t){c(__assign(__assign({},u),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){c(__assign(__assign({},u),{current:e,pageSize:t}))},total:u.total,current:u.current,pageSize:u.pageSize,showQuickJumper:!0},rowKey:t.rowKey||"id"},t))}}),setItem("TablePagination","SelectFormItem",function(S){return function(n){var e=useState(""),t=e[0],a=e[1],e=useState(!1),r=e[0],o=e[1],e=useState([]),u=e[0],c=e[1],e=useState({current:1,pageSize:10,total:0}),i=e[0],s=e[1],e=useState(n.value?[n.value]:[]),l=e[0],f=e[1],e=useState(n.value?u.find(function(e){return e[n.rowKey||"id"]===n.value}):[]),m=e[0],_=e[1],p=Dict.value[S].value;function g(){o(!0),p(__assign({},i)).then(function(e){s(__assign(__assign({},i),{total:e[n.totalKey||"total"]})),c(e[n.dataKey||"records"]),o(!1)}).catch(function(){o(!1)})}return useMount(function(){g()}),useUpdateEffect(function(){g()},[i.current,i.pageSize]),useUpdateEffect(function(){n.value?(f([n.value]),_([u.find(function(e){return e[n.rowKey||"id"]===n.value})])):(f([]),_([]))},[n.value]),React.createElement(SelectFormItem,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=t?u.filter(function(e){return-1!==e[n.labelKey||"name"].indexOf(t)}):u;return React.createElement(_Table,__assign({dataSource:e,loading:r,pagination:{onChange:function(e,t){s(__assign(__assign({},i),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){s(__assign(__assign({},i),{current:e,pageSize:t}))},total:i.total,current:i.current,pageSize:i.pageSize,showQuickJumper:!0},rowKey:n.rowKey||"id",rowSelection:{type:"radio",selectedRowKeys:l,selectedRows:m,onChange:function(e,t){f(e),_(t),n.onChange(e.length?e[0]:"")}}},n))},onChange:function(e){n.onChange(e)},filterOption:function(){return!1},onSearch:function(e){return a(e)},onBlur:function(){a("")},onClear:function(){a("")}},null!=(e=n.selectProps)?e:{}),dataSource:u.map(function(e){return{label:e[n.labelKey||"name"],value:e[n.rowKey||"id"]}})})}}),setItem("TablePagination","MultiSelectFormItem",function(d){return function(r){var e=useState(""),t=e[0],n=e[1],e=useState(!1),a=e[0],o=e[1],u=useRef(new Map),e=useState({current:1,pageSize:10,total:0}),c=e[0],i=e[1],e=useState(r.value||[]),s=e[0],l=e[1],e=useState(r.value?r.value.map(function(t){return p().find(function(e){return e[r.rowKey||"id"]===t})}):[]),f=e[0],m=e[1],_=Dict.value[d].value;function p(){return u.current.get(c.current)||[]}function g(){o(!0),_(__assign({},c)).then(function(e){u.current.set(c.current,e[r.dataKey||"records"]),i(__assign(__assign({},c),{total:e[r.totalKey||"total"]})),o(!1)}).catch(function(){o(!1)})}function S(e,n){var t,a=r.rowKey||"id",e=e?(t=__spreadArray(__spreadArray([],s,!0),n.map(function(e){return e[a]}),!0),__spreadArray(__spreadArray([],f,!0),n,!0)):(t=s.filter(function(t){return!n.find(function(e){return e[a]===t})}),f.filter(function(t){return!n.find(function(e){return e[a]===t[a]})}));l(t),m(e),r.onChange(t)}return useMount(function(){g()}),useUpdateEffect(function(){g()},[c.current,c.pageSize]),React.createElement(MultiSelectFormItem,{selectProps:__assign({value:r.value,dropdownRender:function(){var e=t?p().filter(function(e){return-1!==e[r.labelKey||"name"].indexOf(t)}):p();return React.createElement(_Table,__assign({dataSource:e,loading:a,pagination:{onChange:function(e,t){i(__assign(__assign({},c),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){i(__assign(__assign({},c),{current:e,pageSize:t}))},total:c.total,current:c.current,pageSize:c.pageSize,showQuickJumper:!0},rowKey:r.rowKey||"id",rowSelection:{type:"checkbox",selectedRowKeys:s,selectedRows:f,onSelect:function(e,t){S(t,[e])},onSelectAll:function(e,t,n){S(e,n)}}},r))},onChange:function(e){r.onChange(e),l(e),m(e.map(function(t){return Array.from(u.values()).find(function(e){return e[r.rowKey||"id"]===t})}))},onClear:function(){l([]),m([]),n(""),r.onChange([])},onBlur:function(){n("")},onSearch:function(e){return n(e)},filterOption:function(){return!1}},null!=(e=r.selectProps)?e:{}),dataSource:p().map(function(e){return{label:e[r.labelKey||"name"],value:e[r.rowKey||"id"]}})})}});
//# sourceMappingURL=Table.js.map
