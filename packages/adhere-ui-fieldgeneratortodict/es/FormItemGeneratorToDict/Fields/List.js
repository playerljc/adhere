import _Checkbox from"@baifendian/adhere-ui-anthoc/es/checkbox";import _Radio from"@baifendian/adhere-ui-anthoc/es/radio";import _List from"@baifendian/adhere-ui-anthoc/es/list";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,r=0,c=t.length;r<c;r++)!a&&r in t||((a=a||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};import{useMount,useUpdateEffect}from"ahooks";import React,{useRef,useState}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Dict from"@baifendian/adhere-util-dict";import{setItem}from"../ItemFactory";import ListFormItem from"../ListFormItem";import ListMulitSelectFormItem from"../ListMulitSelectFormItem";import ListSelectFormItem from"../ListSelectFormItem";import MulitSelectFormItem from"../MulitSelectFormItem";import SelectFormItem from"../SelectFormItem";import{deepDep}from"../util";var selectorPrefix="adhere-ui-antdformitem";setItem("List","FormItem",function(a){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n;return React.createElement(ListFormItem,__assign({},e,{dataSource:t}))}}),setItem("List","SelectFormItem",function(a){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n;return React.createElement(ListSelectFormItem,__assign({},e,{dataSource:t}))}}),setItem("List","MulitSelectFormItem",function(a){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n;return React.createElement(ListMulitSelectFormItem,__assign({},e,{dataSource:t}))}}),setItem("ListDynamic","FormItem",function(o){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],c=Dict.value[o].value;return useMount(function(){c.then&&c.then(function(e){r(e)})}),useUpdateEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[deepDep(t)]),React.createElement(ListFormItem,__assign({},e,{dataSource:a}))}}),setItem("ListDynamic","SelectFormItem",function(o){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],c=Dict.value[o].value;return useMount(function(){c.then&&c.then(function(e){r(e)})}),useUpdateEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[deepDep(t)]),React.createElement(ListSelectFormItem,__assign({},e,{dataSource:a}))}}),setItem("ListDynamic","MulitSelectFormItem",function(o){return function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],c=Dict.value[o].value;return useMount(function(){c.then&&c.then(function(e){r(e)})}),useUpdateEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[deepDep(t)]),React.createElement(ListMulitSelectFormItem,__assign({},e,{dataSource:a}))}}),setItem("ListPagination","FormItem",function(l){return function(t){var e=useState(!1),n=e[0],a=e[1],e=useState([]),r=e[0],c=e[1],e=useState({current:1,pageSize:10,total:0}),o=e[0],i=e[1],u=Dict.value[l].value;function s(){a(!0),u(__assign({},o)).then(function(e){i(__assign(__assign({},o),{total:e[t.totalKey||"total"]})),c(e[t.dataKey||"records"]),a(!1)}).catch(function(){a(!1)})}return useMount(function(){s()}),useUpdateEffect(function(){s()},[o.current,o.pageSize]),React.createElement(_List,__assign({dataSource:r,loading:n,pagination:{onChange:function(e,t){i(__assign(__assign({},o),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){i(__assign(__assign({},o),{current:e,pageSize:t}))},total:o.total,current:o.current,pageSize:o.pageSize,showQuickJumper:!0},rowKey:t.rowKey||"id"},t))}}),setItem("ListPagination","SelectFormItem",function(g){return function(a){var e=useState(""),t=e[0],n=e[1],e=useState(!1),r=e[0],c=e[1],e=useState([]),o=e[0],i=e[1],e=useState({current:1,pageSize:10,total:0}),u=e[0],s=e[1],e=useState(a.value?[a.value]:[]),l=e[0],f=e[1],e=useState(a.value?o.find(function(e){return e[a.rowKey||"id"]===a.value}):[]),m=(e[0],e[1]),d=Dict.value[g].value;function _(){c(!0),d(__assign({},u)).then(function(e){s(__assign(__assign({},u),{total:e[a.totalKey||"total"]})),i(e[a.dataKey||"records"]),c(!1)}).catch(function(){c(!1)})}function p(t){var n=a.rowKey||"id";return React.createElement(_Radio,{onChange:function(e){e.stopPropagation(),e.target.checked&&(f([t[n]]),m([__assign({},t)]),a.onChange(t[n]))},checked:l.includes(t[n])})}return useMount(function(){_()}),useUpdateEffect(function(){_()},[u.current,u.pageSize]),useUpdateEffect(function(){a.value?(f([a.value]),m([o.find(function(e){return e[a.rowKey||"id"]===a.value})])):(f([]),m([]))},[a.value]),React.createElement(SelectFormItem,{selectProps:__assign({value:a.value,dropdownRender:function(){var e=t?o.filter(function(e){return-1!==e[a.labelKey||"name"].indexOf(t)}):o;return React.createElement(_List,__assign({dataSource:e,loading:r,pagination:{onChange:function(e,t){s(__assign(__assign({},u),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){s(__assign(__assign({},u),{current:e,pageSize:t}))},total:u.total,current:u.current,pageSize:u.pageSize,showQuickJumper:!0},rowKey:a.rowKey||"id"},a,{renderItem:function(e){return React.createElement(ConditionalRender,{conditional:!!a.renderItem,noMatch:function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},p(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},e))}},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},p(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},a.renderItem(e)))})}}))},onChange:function(e){a.onChange(e)},filterOption:function(){return!1},onSearch:function(e){return n(e)},onBlur:function(){n("")},onClear:function(){n("")}},null!=(e=a.selectProps)?e:{}),dataSource:o.map(function(e){return{label:e[a.labelKey||"name"],value:e[a.rowKey||"id"]}})})}}),setItem("ListPagination","MulitSelectFormItem",function(g){return function(a){var e=useState(""),t=e[0],n=e[1],e=useState(!1),r=e[0],c=e[1],o=useRef(new Map),e=useState({current:1,pageSize:10,total:0}),i=e[0],u=e[1],e=useState(a.value||[]),s=e[0],l=e[1],e=useState(a.value?a.value.map(function(t){return d().find(function(e){return e[a.rowKey||"id"]===t})}):[]),f=(e[0],e[1]),m=Dict.value[g].value;function d(){return o.current.get(i.current)||[]}function _(){c(!0),m(__assign({},i)).then(function(e){o.current.set(i.current,e[a.dataKey||"records"]),u(__assign(__assign({},i),{total:e[a.totalKey||"total"]})),c(!1)}).catch(function(){c(!1)})}function p(t){var n=a.rowKey||"id";return React.createElement(_Checkbox,{onChange:function(e){e.stopPropagation(),e.target.checked?(l(function(e){return __spreadArray(__spreadArray([],e,!0),[t[n]],!1)}),f(function(e){return __spreadArray(__spreadArray([],e,!0),[__assign({},t)],!1)}),a.onChange(__spreadArray(__spreadArray([],s,!0),[t[n]],!1))):(l(function(e){return e.filter(function(e){return e!==t[n]})}),f(function(e){return e.filter(function(e){return e[n]!==t[n]})}),a.onChange(__spreadArray([],s.filter(function(e){return e!==t[n]}),!0)))},checked:s.includes(t[n])})}return useMount(function(){_()}),useUpdateEffect(function(){_()},[i.current,i.pageSize]),React.createElement(MulitSelectFormItem,{selectProps:__assign({value:a.value,dropdownRender:function(){var e=t?d().filter(function(e){return-1!==e[a.labelKey||"name"].indexOf(t)}):d();return React.createElement(_List,__assign({dataSource:e,loading:r,pagination:{onChange:function(e,t){u(__assign(__assign({},i),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){u(__assign(__assign({},i),{current:e,pageSize:t}))},total:i.total,current:i.current,pageSize:i.pageSize,showQuickJumper:!0},rowKey:a.rowKey||"id"},a,{renderItem:function(e){return React.createElement(ConditionalRender,{conditional:!!a.renderItem,noMatch:function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},p(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},e))}},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},p(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},a.renderItem(e)))})}}))},onChange:function(e){a.onChange(e),l(e),f(e.map(function(t){return Array.from(o.values()).find(function(e){return e[a.rowKey||"id"]===t})}))},onClear:function(){l([]),f([]),n(""),a.onChange([])},onBlur:function(){n("")},onSearch:function(e){return n(e)},filterOption:function(){return!1}},null!=(e=a.selectProps)?e:{}),dataSource:d().map(function(e){return{label:e[a.labelKey||"name"],value:e[a.rowKey||"id"]}})})}});
//# sourceMappingURL=List.js.map
