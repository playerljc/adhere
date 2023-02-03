import"core-js/modules/es.object.assign.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.string.ends-with.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.from.js";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};import React,{useEffect,useRef,useState}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Dict from"@baifendian/adhere-util-dict";import{Checkbox,List,Radio}from"../../AntFormItemNormalize";import ListFormItem from"../ListFormItem";import ListMulitSelectFormItem from"../ListMulitSelectFormItem";import ListSelectFormItem from"../ListSelectFormItem";import MulitSelectFormItem from"../MulitSelectFormItem";import SelectFormItem from"../SelectFormItem";var selectorPrefix="adhere-ui-antdformitem",FormItemComponents={};export default function(){var e=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("List")}),t=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("DynamicList")}),r=Object.keys(Dict.handlers).filter(function(e){return e.endsWith("ListPagination")});return e.forEach(function(n){FormItemComponents["".concat(n,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=Dict.value[n].value,t=r instanceof Function?r(t):r;return React.createElement(ListFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(n,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=Dict.value[n].value,t=r instanceof Function?r(t):r;return React.createElement(ListSelectFormItem,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(n,"MulitSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=Dict.value[n].value,t=r instanceof Function?r(t):r;return React.createElement(ListMulitSelectFormItem,__assign({},e,{dataSource:t}))}}),t.forEach(function(c){FormItemComponents["".concat(c,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=useState([]),n=r[0],a=r[1],o=Dict.value[c].value;return useEffect(function(){o.then&&o.then(function(e){a(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){a(e)})},[t]),React.createElement(ListFormItem,__assign({},e,{dataSource:n}))},FormItemComponents["".concat(c,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=useState([]),n=r[0],a=r[1],o=Dict.value[c].value;return useEffect(function(){o.then&&o.then(function(e){a(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){a(e)})},[t]),React.createElement(ListSelectFormItem,__assign({},e,{dataSource:n}))},FormItemComponents["".concat(c,"MulitSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=useState([]),n=r[0],a=r[1],o=Dict.value[c].value;return useEffect(function(){o.then&&o.then(function(e){a(e)})},[]),useEffect(function(){o instanceof Function&&o(t).then(function(e){a(e)})},[t]),React.createElement(ListMulitSelectFormItem,__assign({},e,{dataSource:n}))}}),r.forEach(function(_){FormItemComponents["".concat(_,"FormItem")]=function(t){var e=useState(!1),r=e[0],n=e[1],e=useState([]),a=e[0],o=e[1],e=useState({current:1,pageSize:10,total:0}),c=e[0],s=e[1],i=Dict.value[_].value;return useEffect(function(){n(!0),i(__assign({},c)).then(function(e){s(__assign(__assign({},c),{total:e[t.totalKey||"total"]})),o(e[t.dataKey||"records"]),n(!1)}).catch(function(){n(!1)})},[c.current,c.pageSize]),React.createElement(List,__assign({dataSource:a,loading:r,pagination:{onChange:function(e,t){s(__assign(__assign({},c),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){s(__assign(__assign({},c),{current:e,pageSize:t}))},total:c.total,current:c.current,pageSize:c.pageSize,showQuickJumper:!0},rowKey:t.rowKey||"id"},t))},FormItemComponents["".concat(_,"SelectFormItem")]=function(n){var e=useState(""),t=e[0],r=e[1],e=useState(!1),a=e[0],o=e[1],e=useState([]),c=e[0],s=e[1],e=useState({current:1,pageSize:10,total:0}),i=e[0],u=e[1],e=useState(n.value?[n.value]:[]),m=e[0],l=e[1],e=useState(n.value?c.find(function(e){return e[n.rowKey||"id"]===n.value}):[]),f=(e[0],e[1]),d=Dict.value[_].value;function p(t){var r=n.rowKey||"id";return React.createElement(Radio,{onChange:function(e){e.stopPropagation(),e.target.checked&&(l([t[r]]),f([__assign({},t)]),n.onChange(t[r]))},checked:m.includes(t[r])})}return useEffect(function(){o(!0),d(__assign({},i)).then(function(e){u(__assign(__assign({},i),{total:e[n.totalKey||"total"]})),s(e[n.dataKey||"records"]),o(!1)}).catch(function(){o(!1)})},[i.current,i.pageSize]),useEffect(function(){n.value?(l([n.value]),f([c.find(function(e){return e[n.rowKey||"id"]===n.value})])):(l([]),f([]))},[n.value]),React.createElement(SelectFormItem,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=t?c.filter(function(e){return-1!==e[n.labelKey||"name"].indexOf(t)}):c;return React.createElement(List,__assign({dataSource:e,loading:a,pagination:{onChange:function(e,t){u(__assign(__assign({},i),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){u(__assign(__assign({},i),{current:e,pageSize:t}))},total:i.total,current:i.current,pageSize:i.pageSize,showQuickJumper:!0},rowKey:n.rowKey||"id"},n,{renderItem:function(e){return React.createElement(ConditionalRender,{conditional:!!n.renderItem,noMatch:function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},p(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},e))}},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},p(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},n.renderItem(e)))})}}))},onChange:function(e){n.onChange(e)},filterOption:function(e){return r(e),!1},onBlur:function(){r("")},onClear:function(){r("")}},n.selectProps||{}),dataSource:c.map(function(e){return{label:e[n.labelKey||"name"],value:e[n.rowKey||"id"]}})})},FormItemComponents["".concat(_,"MulitSelectFormItem")]=function(n){var e=useState(""),t=e[0],r=e[1],e=useState(!1),a=e[0],o=e[1],c=useRef(new Map),e=useState({current:1,pageSize:10,total:0}),s=e[0],i=e[1],e=useState(n.value||[]),u=e[0],m=e[1],e=useState(n.value?n.value.map(function(t){return d().find(function(e){return e[n.rowKey||"id"]===t})}):[]),l=(e[0],e[1]),f=Dict.value[_].value;function d(){return c.current.get(s.current)||[]}function p(t){var r=n.rowKey||"id";return React.createElement(Checkbox,{onChange:function(e){e.stopPropagation(),e.target.checked?(m(function(e){return __spreadArray(__spreadArray([],e,!0),[t[r]],!1)}),l(function(e){return __spreadArray(__spreadArray([],e,!0),[__assign({},t)],!1)}),n.onChange(__spreadArray(__spreadArray([],u,!0),[t[r]],!1))):(m(function(e){return e.filter(function(e){return e!==t[r]})}),l(function(e){return e.filter(function(e){return e[r]!==t[r]})}),n.onChange(__spreadArray([],u.filter(function(e){return e!==t[r]}),!0)))},checked:u.includes(t[r])})}return useEffect(function(){o(!0),f(__assign({},s)).then(function(e){c.current.set(s.current,e[n.dataKey||"records"]),i(__assign(__assign({},s),{total:e[n.totalKey||"total"]})),o(!1)}).catch(function(){o(!1)})},[s.current,s.pageSize]),React.createElement(MulitSelectFormItem,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=t?d().filter(function(e){return-1!==e[n.labelKey||"name"].indexOf(t)}):d();return React.createElement(List,__assign({dataSource:e,loading:a,pagination:{onChange:function(e,t){i(__assign(__assign({},s),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){i(__assign(__assign({},s),{current:e,pageSize:t}))},total:s.total,current:s.current,pageSize:s.pageSize,showQuickJumper:!0},rowKey:n.rowKey||"id"},n,{renderItem:function(e){return React.createElement(ConditionalRender,{conditional:!!n.renderItem,noMatch:function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},p(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},e))}},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},p(e)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},n.renderItem(e)))})}}))},onChange:function(e){n.onChange(e),m(e),l(e.map(function(t){return Array.from(c.values()).find(function(e){return e[n.rowKey||"id"]===t})}))},onClear:function(){m([]),l([]),r(""),n.onChange([])},onBlur:function(){r("")},filterOption:function(e){return r(e),!1}},n.selectProps||{}),dataSource:d().map(function(e){return{label:e[n.labelKey||"name"],value:e[n.rowKey||"id"]}})})}}),FormItemComponents}
//# sourceMappingURL=List.js.map
