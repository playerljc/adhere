"use strict";var __spreadArray=function(e,r,n){if(n||2===arguments.length)for(var t,u=0,a=r.length;u<a;u++)!t&&u in r||((t=t||Array.prototype.slice.call(r,0,u))[u]=r[u]);return e.concat(t||Array.prototype.slice.call(r))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.useAsyncCascader=exports.useAsyncTreeSelect=exports.useTreeSelectLeaf=void 0,require("ahooks")),react_1=require("react"),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),util_1=require("./util");function useTreeSelectLeaf(r){return(0,react_1.useMemo)(function(){var e=JSON.parse(JSON.stringify(r));return function r(e){(e||[]).forEach(function(e){e.disabled=!("leaf"in e&&e.leaf),r(e.children)})}(e),e},[r])}function useAsyncTreeSelect(e,r){function u(e,u){return function e(r){for(var n,t=0;t<r.length;t++){if(r[t].value===u){n=r[t];break}if(n=e(r[t].children||[]))break}return n}(e)}function n(){_(null!=l?l:"",c).then(function(e){d(e)})}function t(){Promise.all([a(l),null==o?void 0:o(f,c)]).then(function(e){var r=e[0],r=void 0===r?[]:r,e=e[1],n=void 0===e?[]:e;d(__spreadArray(__spreadArray([],null!=n?n:[],!0),(null!=r?r:[]).filter(function(e){return!(null!=n?n:[]).map(function(e){return e.value}).includes(e.value)}),!0))})}function a(e){return _(e,c).then(function(e){return e})}var c=r.cascadeParams,i=r.onDataSourceChange,o=r.fetchBranch,l=r.defaultId,f=r.value,r=(0,react_1.useState)([]),s=r[0],d=r[1],h=(0,react_1.useRef)(),_=adhere_util_dict_1.default.value[e].value;return(0,ahooks_1.useMount)(function(){(f&&(!Array.isArray(f)||f.length)?t:n)()}),(0,ahooks_1.useUpdateEffect)(function(){h.current||t()},[f]),(0,ahooks_1.useUpdateEffect)(function(){(f?t:n)()},[(0,util_1.deepDep)(c)]),(0,ahooks_1.useUpdateEffect)(function(){null!=i&&i(s)},[s]),{treeData:s,onLoadData:function(e){var t=e.value;return new Promise(function(e){setTimeout(function(){a(t).then(function(r){d(function(e){var n=u(e,t);return n.children&&Array.isArray(n.children)&&n.children.length?n.children=__spreadArray(__spreadArray([],n.children,!0),r.filter(function(r){return n.children.find(function(e){return e.value!==r.value})}),!0):n.children=r,__spreadArray([],e,!0)})}),e(void 0)},300)})},onChange:function(e,r){h.current=r,e.apply(void 0,r)}}}function useAsyncCascader(e,r){function u(e,u){return function e(r){for(var n,t=0;t<r.length;t++){if(r[t].value===u){n=r[t];break}if(n=e(r[t].children||[]))break}return n}(e)}function n(){_(null!=l?l:"",c).then(function(e){d(e)})}function t(){Promise.all([a(l),null==o?void 0:o(f,c)]).then(function(e){var r=e[0],n=e[1];d(__spreadArray(__spreadArray([],n,!0),r.filter(function(e){return!n.map(function(e){return e.value}).includes(e.value)}),!0))})}function a(e){return _(e,c).then(function(e){return e})}var c=r.cascadeParams,i=r.onDataSourceChange,o=r.fetchBranch,l=r.defaultId,f=r.value,r=(0,react_1.useState)([]),s=r[0],d=r[1],h=(0,react_1.useRef)(),_=adhere_util_dict_1.default.value[e].value;return(0,ahooks_1.useMount)(function(){(f&&(!Array.isArray(f)||f.length)?t:n)()}),(0,ahooks_1.useUpdateEffect)(function(){h.current||t()},[f]),(0,ahooks_1.useUpdateEffect)(function(){(f?t:n)()},[(0,util_1.deepDep)(c)]),(0,ahooks_1.useUpdateEffect)(function(){null!=i&&i(s)},[s]),{treeData:s,onLoadData:function(r){return new Promise(function(e){var t=r[r.length-1].value;setTimeout(function(){a(t).then(function(r){d(function(e){var n=u(e,t);return n.children&&Array.isArray(n.children)&&n.children.length?n.children=__spreadArray(__spreadArray([],n.children,!0),r.filter(function(r){return n.children.find(function(e){return e.value!==r.value})}),!0):n.children=r,__spreadArray([],e,!0)})}),e(void 0)},300)})},onChange:function(e,r){h.current=r,e.apply(void 0,r)}}}exports.useTreeSelectLeaf=useTreeSelectLeaf,exports.useAsyncTreeSelect=useAsyncTreeSelect,exports.useAsyncCascader=useAsyncCascader;
//# sourceMappingURL=hooks.js.map
