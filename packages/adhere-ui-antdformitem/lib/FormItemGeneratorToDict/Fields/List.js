var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,r=0,c=t.length;r<c;r++)!a&&r in t||((a=a||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};import React,{useEffect,useRef,useState}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Dict from"@baifendian/adhere-util-dict";import{Checkbox,List,Radio}from"../../AntFormItemNormalize";import ListFormItem from"../ListFormItem";import ListMulitSelectFormItem from"../ListMulitSelectFormItem";import ListSelectFormItem from"../ListSelectFormItem";import MulitSelectFormItem from"../MulitSelectFormItem";import SelectFormItem from"../SelectFormItem";var selectorPrefix="adhere-ui-antdformitem",FormItemComponents={};export default function(){var e=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("List")}),t=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("DynamicList")}),n=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("ListPagination")});return e.forEach(function(a){FormItemComponents["".concat(a,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n;return React.createElement(ListFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n;return React.createElement(ListSelectFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"MulitSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=Dict.value[a].value,t=n instanceof Function?n(t):n;return React.createElement(ListMulitSelectFormItem,__assign({},e,{dataSource:t}))}}),t.forEach(function(o){FormItemComponents["".concat(o,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],c=Dict.value[o].value;return useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),React.createElement(ListFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(o,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],c=Dict.value[o].value;return useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),React.createElement(ListSelectFormItem,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(o,"MulitSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),n=useState([]),a=n[0],r=n[1],c=Dict.value[o].value;return useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),React.createElement(ListMulitSelectFormItem,__assign({},e,{dataSource:a}))}}),n.forEach(function(p){FormItemComponents["".concat(p,"FormItem")]=function(t){var e=useState(!1),n=e[0],a=e[1],e=useState([]),r=e[0],c=e[1],e=useState({current:1,pageSize:10,total:0}),o=e[0],i=e[1],s=Dict.value[p].value;return useEffect(function(){a(!0),s(__assign({},o)).then(function(e){i(__assign(__assign({},o),{total:e[t.totalKey||"total"]})),c(e[t.dataKey||"records"]),a(!1)}).catch(function(){a(!1)})},[o.current,o.pageSize]),React.createElement(List,__assign({dataSource:r,loading:n,pagination:{onChange:function(e,t){i(__assign(__assign({},o),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){i(__assign(__assign({},o),{current:e,pageSize:t}))},total:o.total,current:o.current,pageSize:o.pageSize,showQuickJumper:!0},rowKey:t.rowKey||"id"},t))},FormItemComponents["".concat(p,"SelectFormItem")]=function(a){var e=useState(""),t=e[0],n=e[1],e=useState(!1),r=e[0],c=e[1],e=useState([]),o=e[0],i=e[1],e=useState({current:1,pageSize:10,total:0}),s=e[0],u=e[1],e=useState(a.value?[a.value]:[]),l=e[0],m=e[1],e=useState(a.value?o.find(function(e){return e[a.rowKey||"id"]===a.value}):[]),f=(e[0],e[1]),d=Dict.value[p].value;function _(t){var n=a.rowKey||"id";return React.createElement(Radio,{onChange:function(e){e.stopPropagation(),e.target.checked&&(m([t[n]]),f([__assign({},t)]),a.onChange(t[n]))},checked:l.includes(t[n])})}return useEffect(function(){c(!0),d(__assign({},s)).then(function(e){u(__assign(__assign({},s),{total:e[a.totalKey||"total"]})),i(e[a.dataKey||"records"]),c(!1)}).catch(function(){c(!1)})},[s.current,s.pageSize]),useEffect(function(){a.value?(m([a.value]),f([o.find(function(e){return e[a.rowKey||"id"]===a.value})])):(m([]),f([]))},[a.value]),React.createElement(SelectFormItem,{selectProps:__assign({value:a.value,dropdownRender:function(){var e=t?o.filter(function(e){return e[a.labelKey||"name"].startsWith(t)}):o;return React.createElement(List,__assign({dataSource:e,loading:r,pagination:{onChange:function(e,t){u(__assign(__assign({},s),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){u(__assign(__assign({},s),{current:e,pageSize:t}))},total:s.total,current:s.current,pageSize:s.pageSize,showQuickJumper:!0},rowKey:a.rowKey||"id"},a,{renderItem:function(e){return React.createElement(ConditionalRender,{conditional:!!a.renderItem,noMatch:function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},_(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},e))}},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},_(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},a.renderItem(e)))})}}))},onChange:function(e){a.onChange(e)},filterOption:function(e){return n(e),!1},onBlur:function(){n("")},onClear:function(){n("")}},a.selectProps||{}),dataSource:o.map(function(e){return{label:e[a.labelKey||"name"],value:e[a.rowKey||"id"]}})})},FormItemComponents["".concat(p,"MulitSelectFormItem")]=function(a){var e=useState(""),t=e[0],n=e[1],e=useState(!1),r=e[0],c=e[1],o=useRef(new Map),e=useState({current:1,pageSize:10,total:0}),i=e[0],s=e[1],e=useState(a.value||[]),u=e[0],l=e[1],e=useState(a.value?a.value.map(function(t){return d().find(function(e){return e[a.rowKey||"id"]===t})}):[]),m=(e[0],e[1]),f=Dict.value[p].value;function d(){return o.current.get(i.current)||[]}function _(t){var n=a.rowKey||"id";return React.createElement(Checkbox,{onChange:function(e){e.stopPropagation(),e.target.checked?(l(function(e){return __spreadArray(__spreadArray([],e,!0),[t[n]],!1)}),m(function(e){return __spreadArray(__spreadArray([],e,!0),[__assign({},t)],!1)}),a.onChange(__spreadArray(__spreadArray([],u,!0),[t[n]],!1))):(l(function(e){return e.filter(function(e){return e!==t[n]})}),m(function(e){return e.filter(function(e){return e[n]!==t[n]})}),a.onChange(__spreadArray([],u.filter(function(e){return e!==t[n]}),!0)))},checked:u.includes(t[n])})}return useEffect(function(){c(!0),f(__assign({},i)).then(function(e){o.current.set(i.current,e[a.dataKey||"records"]),s(__assign(__assign({},i),{total:e[a.totalKey||"total"]})),c(!1)}).catch(function(){c(!1)})},[i.current,i.pageSize]),React.createElement(MulitSelectFormItem,{selectProps:__assign({value:a.value,dropdownRender:function(){var e=t?d().filter(function(e){return e[a.labelKey||"name"].startsWith(t)}):d();return React.createElement(List,__assign({dataSource:e,loading:r,pagination:{onChange:function(e,t){s(__assign(__assign({},i),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){s(__assign(__assign({},i),{current:e,pageSize:t}))},total:i.total,current:i.current,pageSize:i.pageSize,showQuickJumper:!0},rowKey:a.rowKey||"id"},a,{renderItem:function(e){return React.createElement(ConditionalRender,{conditional:!!a.renderItem,noMatch:function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},_(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},e))}},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},_(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},a.renderItem(e)))})}}))},onChange:function(e){a.onChange(e),l(e),m(e.map(function(t){return Array.from(o.values()).find(function(e){return e[a.rowKey||"id"]===t})}))},onClear:function(){l([]),m([]),n(""),a.onChange([])},onBlur:function(){n("")},filterOption:function(e){return n(e),!1}},a.selectProps||{}),dataSource:d().map(function(e){return{label:e[a.labelKey||"name"],value:e[a.rowKey||"id"]}})})}}),FormItemComponents}
//# sourceMappingURL=List.js.map
