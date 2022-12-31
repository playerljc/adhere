import _Table from"antd/es/table";import"core-js/modules/es.object.assign.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.string.ends-with.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.string.starts-with.js";import"core-js/modules/es.array.map.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.from.js";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||((r=r||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};import React,{useEffect,useRef,useState}from"react";import Dict from"@baifendian/adhere-util-dict";import MulitSelectFormItem from"../MulitSelectFormItem";import SelectFormItem from"../SelectFormItem";var FormItemComponents={};export default function(){var e=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("Table")}),t=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("DynamicTable")}),n=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("TablePagination")});return FormItemComponents.TableFormItem=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return React.createElement(_Table,__assign({dataSource:t,pagination:!1,rowKey:e.rowKey||"id"},e))},FormItemComponents.TableSelectFormItem=function(e){var t=e.dataSource,n=__rest(e,["dataSource"]),r=FormItemComponents.TableFormItem,e=useState(""),o=e[0],a=e[1],e=useState(n.value?[n.value]:[]),s=e[0],c=e[1],e=useState(n.value?t.find(function(e){return e[n.rowKey||"id"]===n.value}):[]),u=e[0],i=e[1];return useEffect(function(){n.value?(c([n.value]),i([t.find(function(e){return e[n.rowKey||"id"]===n.value})])):(c([]),i([]))},[n.value]),React.createElement(SelectFormItem,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=o?t.filter(function(e){return e[n.labelKey||"name"].startsWith(o)}):t;return React.createElement(r,__assign({rowSelection:{type:"radio",selectedRowKeys:s,selectedRows:u,onChange:function(e,t){c(e),i(t),n.onChange(e.length?e[0]:"")}}},n,{dataSource:e}))},onChange:function(e){n.onChange(e)},filterOption:function(e){return a(e),!1},onBlur:function(){a("")},onClear:function(){a("")}},n.selectProps||{}),dataSource:t.map(function(e){return{label:e[n.labelKey||"name"],value:e[n.rowKey||"id"]}})})},FormItemComponents.TableMulitSelectFormItem=function(e){var n=e.dataSource,r=__rest(e,["dataSource"]),t=FormItemComponents.TableFormItem,e=useState(""),o=e[0],a=e[1],e=useState(r.value||[]),s=e[0],c=e[1],e=useState(r.value?r.value.map(function(t){return n.find(function(e){return e[r.rowKey||"id"]===t})}):[]),u=e[0],i=e[1];return useEffect(function(){r.value?(c([r.value]),i(r.value.map(function(t){return n.find(function(e){return e[r.rowKey||"id"]===t})}))):(c([]),i([]))},[r.value]),React.createElement(MulitSelectFormItem,{selectProps:__assign({value:r.value,dropdownRender:function(){var e=o?n.filter(function(e){return e[r.labelKey||"name"].startsWith(o)}):n;return React.createElement(t,__assign({rowSelection:{type:"checkbox",selectedRowKeys:s,selectedRows:u,onChange:function(e,t){c(e),i(t),r.onChange(e.length?e:[])}}},r,{dataSource:e}))},onChange:function(e){r.onChange(e)},filterOption:function(e){return a(e),!1},onBlur:function(){a("")},onClear:function(){a("")}},r.selectProps||{}),dataSource:n.map(function(e){return{label:e[r.labelKey||"name"],value:e[r.rowKey||"id"]}})})},e.forEach(function(r){FormItemComponents["".concat(r,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[r].value,t=n instanceof Function?n(t):n,n=FormItemComponents.TableFormItem;return React.createElement(n,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(r,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[r].value,t=n instanceof Function?n(t):n,n=FormItemComponents.TableSelectFormItem;return React.createElement(n,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(r,"MulitSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[r].value,t=n instanceof Function?n(t):n,n=FormItemComponents.TableMulitSelectFormItem;return React.createElement(n,__assign({},e,{dataSource:t}))}}),t.forEach(function(s){FormItemComponents["".concat(s,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),r=n[0],o=n[1],a=Dict.value[s].value,n=(useEffect(function(){a.then&&a.then(function(e){o(e)})},[]),useEffect(function(){a instanceof Function&&a(t).then(function(e){o(e)})},[t]),FormItemComponents.TableFormItem);return React.createElement(n,__assign({},e,{dataSource:r}))},FormItemComponents["".concat(s,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),r=n[0],o=n[1],a=Dict.value[s].value,n=(useEffect(function(){a.then&&a.then(function(e){o(e)})},[]),useEffect(function(){a instanceof Function&&a(t).then(function(e){o(e)})},[t]),FormItemComponents.TableSelectFormItem);return React.createElement(n,__assign({},e,{dataSource:r}))},FormItemComponents["".concat(s,"MulitSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),r=n[0],o=n[1],a=Dict.value[s].value,n=(useEffect(function(){a.then&&a.then(function(e){o(e)})},[]),useEffect(function(){a instanceof Function&&a(t).then(function(e){o(e)})},[t]),FormItemComponents.TableMulitSelectFormItem);return React.createElement(n,__assign({},e,{dataSource:r}))}}),n.forEach(function(g){FormItemComponents["".concat(g,"FormItem")]=function(t){var e=useState(!1),n=e[0],r=e[1],e=useState([]),o=e[0],a=e[1],e=useState({current:1,pageSize:10,total:0}),s=e[0],c=e[1],u=Dict.value[g].value;return useEffect(function(){r(!0),u(__assign({},s)).then(function(e){c(__assign(__assign({},s),{total:e[t.totalKey||"total"]})),a(e[t.dataKey||"records"]),r(!1)}).catch(function(){r(!1)})},[s.current,s.pageSize]),React.createElement(_Table,__assign({dataSource:o,loading:n,pagination:{onChange:function(e,t){c(__assign(__assign({},s),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){c(__assign(__assign({},s),{current:e,pageSize:t}))},total:s.total,current:s.current,pageSize:s.pageSize,showQuickJumper:!0},rowKey:t.rowKey||"id"},t))},FormItemComponents["".concat(g,"SelectFormItem")]=function(n){var e=useState(""),t=e[0],r=e[1],e=useState(!1),o=e[0],a=e[1],e=useState([]),s=e[0],c=e[1],e=useState({current:1,pageSize:10,total:0}),u=e[0],i=e[1],e=useState(n.value?[n.value]:[]),l=e[0],m=e[1],e=useState(n.value?s.find(function(e){return e[n.rowKey||"id"]===n.value}):[]),f=e[0],p=e[1],d=Dict.value[g].value;return useEffect(function(){a(!0),d(__assign({},u)).then(function(e){i(__assign(__assign({},u),{total:e[n.totalKey||"total"]})),c(e[n.dataKey||"records"]),a(!1)}).catch(function(){a(!1)})},[u.current,u.pageSize]),useEffect(function(){n.value?(m([n.value]),p([s.find(function(e){return e[n.rowKey||"id"]===n.value})])):(m([]),p([]))},[n.value]),React.createElement(SelectFormItem,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=t?s.filter(function(e){return e[n.labelKey||"name"].startsWith(t)}):s;return React.createElement(_Table,__assign({dataSource:e,loading:o,pagination:{onChange:function(e,t){i(__assign(__assign({},u),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){i(__assign(__assign({},u),{current:e,pageSize:t}))},total:u.total,current:u.current,pageSize:u.pageSize,showQuickJumper:!0},rowKey:n.rowKey||"id",rowSelection:{type:"radio",selectedRowKeys:l,selectedRows:f,onChange:function(e,t){m(e),p(t),n.onChange(e.length?e[0]:"")}}},n))},onChange:function(e){n.onChange(e)},filterOption:function(e){return r(e),!1},onBlur:function(){r("")},onClear:function(){r("")}},n.selectProps||{}),dataSource:s.map(function(e){return{label:e[n.labelKey||"name"],value:e[n.rowKey||"id"]}})})},FormItemComponents["".concat(g,"MulitSelectFormItem")]=function(o){var e=useState(""),t=e[0],n=e[1],e=useState(!1),r=e[0],a=e[1],s=useRef(new Map),e=useState({current:1,pageSize:10,total:0}),c=e[0],u=e[1],e=useState(o.value||[]),i=e[0],l=e[1],e=useState(o.value?o.value.map(function(t){return d().find(function(e){return e[o.rowKey||"id"]===t})}):[]),m=e[0],f=e[1],p=Dict.value[g].value;function d(){return s.current.get(c.current)||[]}function _(e,n){var t,r=o.rowKey||"id",e=e?(t=__spreadArray(__spreadArray([],i,!0),n.map(function(e){return e[r]}),!0),__spreadArray(__spreadArray([],m,!0),n,!0)):(t=i.filter(function(t){return!n.find(function(e){return e[r]===t})}),m.filter(function(t){return!n.find(function(e){return e[r]===t[r]})}));l(t),f(e),o.onChange(t)}return useEffect(function(){a(!0),p(__assign({},c)).then(function(e){s.current.set(c.current,e[o.dataKey||"records"]),u(__assign(__assign({},c),{total:e[o.totalKey||"total"]})),a(!1)}).catch(function(){a(!1)})},[c.current,c.pageSize]),React.createElement(MulitSelectFormItem,{selectProps:__assign({value:o.value,dropdownRender:function(){var e=t?d().filter(function(e){return e[o.labelKey||"name"].startsWith(t)}):d();return React.createElement(_Table,__assign({dataSource:e,loading:r,pagination:{onChange:function(e,t){u(__assign(__assign({},c),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){u(__assign(__assign({},c),{current:e,pageSize:t}))},total:c.total,current:c.current,pageSize:c.pageSize,showQuickJumper:!0},rowKey:o.rowKey||"id",rowSelection:{type:"checkbox",selectedRowKeys:i,selectedRows:m,onSelect:function(e,t){_(t,[e])},onSelectAll:function(e,t,n){_(e,n)}}},o))},onChange:function(e){o.onChange(e),l(e),f(e.map(function(t){return Array.from(s.values()).find(function(e){return e[o.rowKey||"id"]===t})}))},onClear:function(){l([]),f([]),n(""),o.onChange([])},onBlur:function(){n("")},filterOption:function(e){return n(e),!1}},o.selectProps||{}),dataSource:d().map(function(e){return{label:e[o.labelKey||"name"],value:e[o.rowKey||"id"]}})})}}),FormItemComponents}
//# sourceMappingURL=Table.js.map
