var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,c=t.length;a<c;a++)!r&&a in t||((r=r||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};import React,{useEffect,useRef,useState}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Dict from"@baifendian/adhere-util-dict";import{Checkbox,List,Radio}from"../../AntFormItemNormalize";import{setItem}from"../ItemFactory";import ListFormItem from"../ListFormItem";import ListMulitSelectFormItem from"../ListMulitSelectFormItem";import ListSelectFormItem from"../ListSelectFormItem";import MulitSelectFormItem from"../MulitSelectFormItem";import SelectFormItem from"../SelectFormItem";import{deepDep}from"../util";var selectorPrefix="adhere-ui-antdformitem";setItem("List","FormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[r].value,t=n instanceof Function?n(t):n;return React.createElement(ListFormItem,__assign({},e,{dataSource:t}))}}),setItem("List","SelectFormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[r].value,t=n instanceof Function?n(t):n;return React.createElement(ListSelectFormItem,__assign({},e,{dataSource:t}))}}),setItem("List","MulitSelectFormItem",function(r){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[r].value,t=n instanceof Function?n(t):n;return React.createElement(ListMulitSelectFormItem,__assign({},e,{dataSource:t}))}}),setItem("ListDynamic","FormItem",function(i){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),r=n[0],a=n[1],c=Dict.value[i].value;return useEffect(function(){c.then&&c.then(function(e){a(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){a(e)})},[deepDep(t)]),React.createElement(ListFormItem,__assign({},e,{dataSource:r}))}}),setItem("ListDynamic","SelectFormItem",function(i){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),r=n[0],a=n[1],c=Dict.value[i].value;return useEffect(function(){c.then&&c.then(function(e){a(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){a(e)})},[deepDep(t)]),React.createElement(ListSelectFormItem,__assign({},e,{dataSource:r}))}}),setItem("ListDynamic","MulitSelectFormItem",function(i){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),r=n[0],a=n[1],c=Dict.value[i].value;return useEffect(function(){c.then&&c.then(function(e){a(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){a(e)})},[deepDep(t)]),React.createElement(ListMulitSelectFormItem,__assign({},e,{dataSource:r}))}}),setItem("ListPagination","FormItem",function(s){return function(t){var e=useState(!1),n=e[0],r=e[1],e=useState([]),a=e[0],c=e[1],e=useState({current:1,pageSize:10,total:0}),i=e[0],o=e[1],u=Dict.value[s].value;return useEffect(function(){r(!0),u(__assign({},i)).then(function(e){o(__assign(__assign({},i),{total:e[t.totalKey||"total"]})),c(e[t.dataKey||"records"]),r(!1)}).catch(function(){r(!1)})},[i.current,i.pageSize]),React.createElement(List,__assign({dataSource:a,loading:n,pagination:{onChange:function(e,t){o(__assign(__assign({},i),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){o(__assign(__assign({},i),{current:e,pageSize:t}))},total:i.total,current:i.current,pageSize:i.pageSize,showQuickJumper:!0},rowKey:t.rowKey||"id"},t))}}),setItem("ListPagination","SelectFormItem",function(p){return function(r){var e=useState(""),t=e[0],n=e[1],e=useState(!1),a=e[0],c=e[1],e=useState([]),i=e[0],o=e[1],e=useState({current:1,pageSize:10,total:0}),u=e[0],s=e[1],e=useState(r.value?[r.value]:[]),l=e[0],f=e[1],e=useState(r.value?i.find(function(e){return e[r.rowKey||"id"]===r.value}):[]),m=(e[0],e[1]),d=Dict.value[p].value;function _(t){var n=r.rowKey||"id";return React.createElement(Radio,{onChange:function(e){e.stopPropagation(),e.target.checked&&(f([t[n]]),m([__assign({},t)]),r.onChange(t[n]))},checked:l.includes(t[n])})}return useEffect(function(){c(!0),d(__assign({},u)).then(function(e){s(__assign(__assign({},u),{total:e[r.totalKey||"total"]})),o(e[r.dataKey||"records"]),c(!1)}).catch(function(){c(!1)})},[u.current,u.pageSize]),useEffect(function(){r.value?(f([r.value]),m([i.find(function(e){return e[r.rowKey||"id"]===r.value})])):(f([]),m([]))},[r.value]),React.createElement(SelectFormItem,{selectProps:__assign({value:r.value,dropdownRender:function(){var e=t?i.filter(function(e){return-1!==e[r.labelKey||"name"].indexOf(t)}):i;return React.createElement(List,__assign({dataSource:e,loading:a,pagination:{onChange:function(e,t){s(__assign(__assign({},u),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){s(__assign(__assign({},u),{current:e,pageSize:t}))},total:u.total,current:u.current,pageSize:u.pageSize,showQuickJumper:!0},rowKey:r.rowKey||"id"},r,{renderItem:function(e){return React.createElement(ConditionalRender,{conditional:!!r.renderItem,noMatch:function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},_(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},e))}},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},_(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},r.renderItem(e)))})}}))},onChange:function(e){r.onChange(e)},filterOption:function(){return!1},onSearch:function(e){return n(e)},onBlur:function(){n("")},onClear:function(){n("")}},r.selectProps||{}),dataSource:i.map(function(e){return{label:e[r.labelKey||"name"],value:e[r.rowKey||"id"]}})})}}),setItem("ListPagination","MulitSelectFormItem",function(p){return function(r){var e=useState(""),t=e[0],n=e[1],e=useState(!1),a=e[0],c=e[1],i=useRef(new Map),e=useState({current:1,pageSize:10,total:0}),o=e[0],u=e[1],e=useState(r.value||[]),s=e[0],l=e[1],e=useState(r.value?r.value.map(function(t){return d().find(function(e){return e[r.rowKey||"id"]===t})}):[]),f=(e[0],e[1]),m=Dict.value[p].value;function d(){return i.current.get(o.current)||[]}function _(t){var n=r.rowKey||"id";return React.createElement(Checkbox,{onChange:function(e){e.stopPropagation(),e.target.checked?(l(function(e){return __spreadArray(__spreadArray([],e,!0),[t[n]],!1)}),f(function(e){return __spreadArray(__spreadArray([],e,!0),[__assign({},t)],!1)}),r.onChange(__spreadArray(__spreadArray([],s,!0),[t[n]],!1))):(l(function(e){return e.filter(function(e){return e!==t[n]})}),f(function(e){return e.filter(function(e){return e[n]!==t[n]})}),r.onChange(__spreadArray([],s.filter(function(e){return e!==t[n]}),!0)))},checked:s.includes(t[n])})}return useEffect(function(){c(!0),m(__assign({},o)).then(function(e){i.current.set(o.current,e[r.dataKey||"records"]),u(__assign(__assign({},o),{total:e[r.totalKey||"total"]})),c(!1)}).catch(function(){c(!1)})},[o.current,o.pageSize]),React.createElement(MulitSelectFormItem,{selectProps:__assign({value:r.value,dropdownRender:function(){var e=t?d().filter(function(e){return-1!==e[r.labelKey||"name"].indexOf(t)}):d();return React.createElement(List,__assign({dataSource:e,loading:a,pagination:{onChange:function(e,t){u(__assign(__assign({},o),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){u(__assign(__assign({},o),{current:e,pageSize:t}))},total:o.total,current:o.current,pageSize:o.pageSize,showQuickJumper:!0},rowKey:r.rowKey||"id"},r,{renderItem:function(e){return React.createElement(ConditionalRender,{conditional:!!r.renderItem,noMatch:function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},_(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},e))}},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},_(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},r.renderItem(e)))})}}))},onChange:function(e){r.onChange(e),l(e),f(e.map(function(t){return Array.from(i.values()).find(function(e){return e[r.rowKey||"id"]===t})}))},onClear:function(){l([]),f([]),n(""),r.onChange([])},onBlur:function(){n("")},onSearch:function(e){return n(e)},filterOption:function(){return!1}},r.selectProps||{}),dataSource:d().map(function(e){return{label:e[r.labelKey||"name"],value:e[r.rowKey||"id"]}})})}});
//# sourceMappingURL=List.js.map
