import _Checkbox from"@baifendian/adhere-ui-anthoc/es/checkbox";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};import React,{useEffect,useState}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import ListFormItem from"../ListFormItem";import MultiSelectFormItem from"../MultiSelectFormItem";var selectorPrefix="adhere-ui-antdformitem",ListMultiSelectFormItem=function(e){var r=e.dataSource,n=__rest(e,["dataSource"]),e=useState(""),t=e[0],a=e[1],e=useState(n.value||[]),o=e[0],c=e[1],e=useState(n.value?n.value.map(function(t){return r.find(function(e){return e[n.rowKey||"id"]===t})}):[]),i=(e[0],e[1]);function l(t){var r=n.rowKey||"id";return React.createElement(_Checkbox,{onChange:function(e){e.stopPropagation(),e.target.checked?(c(function(e){return __spreadArray(__spreadArray([],e,!0),[t[r]],!1)}),i(function(e){return __spreadArray(__spreadArray([],e,!0),[__assign({},t)],!1)}),null!=(e=null==n?void 0:n.onChange)&&e.call(n,__spreadArray(__spreadArray([],o,!0),[t[r]],!1))):(c(function(e){return e.filter(function(e){return e!==t[r]})}),i(function(e){return e.filter(function(e){return e[r]!==t[r]})}),null!=(e=null==n?void 0:n.onChange)&&e.call(n,__spreadArray([],o.filter(function(e){return e!==t[r]}),!0)))},checked:o.includes(t[r])})}return useEffect(function(){n.value?(c(n.value),i(n.value.map(function(t){return r.find(function(e){return e[n.rowKey||"id"]===t})}))):(c([]),i([]))},[n.value]),React.createElement(MultiSelectFormItem,{selectProps:__assign({value:n.value,dropdownRender:function(){var e=t?r.filter(function(e){return-1!==e[n.labelKey||"name"].indexOf(t)}):r;return React.createElement(ListFormItem,__assign({},n,{dataSource:e,renderItem:function(t,r){return React.createElement(ConditionalRender,{conditional:!!n.renderItem,noMatch:function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},l(t)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},t))}},function(){var e;return React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},l(t)),React.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},null==(e=null==n?void 0:n.renderItem)?void 0:e.call(n,t,r)))})}}))},onChange:function(e){var t;null!=(t=null==n?void 0:n.onChange)&&t.call(n,e)},filterOption:function(){return!1},onSearch:function(e){return a(e)},onBlur:function(){a("")},onClear:function(){a("")}},null!=(e=n.selectProps)?e:{}),dataSource:r.map(function(e){return{label:e[n.labelKey||"name"],value:e[n.rowKey||"id"]}})})};export default ListMultiSelectFormItem;
//# sourceMappingURL=index.js.map