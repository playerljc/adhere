"use strict";var __spreadArray=function(e,n,r){if(r||2===arguments.length)for(var t,a=0,u=n.length;a<u;a++)!t&&a in n||((t=t||Array.prototype.slice.call(n,0,a))[a]=n[a]);return e.concat(t||Array.prototype.slice.call(n))},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),react_1=require("react"),useAsyncTreeSelect=function(e){function u(e,a){return function e(n){for(var r,t=0;t<n.length;t++){if(Object.is(n[t].key,a)){r=n[t];break}if(r=e(n[t].children||[]))break}return r}(e)}function n(){i(null!=l?l:"",a).then(function(e){d(e)})}function r(){c&&Promise.all([t(l),null==c?void 0:c(f,a)]).then(function(e){var n=e[0],n=void 0===n?[]:n,e=e[1],r=void 0===e?[]:e;d(__spreadArray(__spreadArray([],null!=r?r:[],!0),(null!=n?n:[]).filter(function(e){return!(null!=r?r:[]).map(function(e){return e.key}).includes(e.key)}),!0))})}function t(e){return i(e,a).then(function(e){return e})}var a=e.cascadeParams,o=e.onDataSourceChange,c=e.fetchBranch,i=e.fetchData,l=e.defaultId,f=e.value,e=(0,react_1.useState)([]),s=e[0],d=e[1],h=(0,react_1.useRef)();return(0,ahooks_1.useMount)(function(){(f&&(!Array.isArray(f)||f.length)?r:n)()}),(0,ahooks_1.useUpdateEffect)(function(){h.current||r()},[f]),(0,ahooks_1.useUpdateEffect)(function(){(f?r:n)()},[JSON.stringify(a)]),(0,ahooks_1.useUpdateEffect)(function(){null!=o&&o(s)},[s]),{treeData:s,onLoadData:function(e){var a=e.key;return new Promise(function(e){setTimeout(function(){t(a).then(function(t){d(function(e){var n,r=u(e,a);return r.children&&Array.isArray(r.children)&&r.children.length?r.children=__spreadArray(__spreadArray([],r.children,!0),null!=(n=null==(n=null==t?void 0:t.filter)?void 0:n.call(t,function(n){return r.children.find(function(e){return e.key!==n.key})}))?n:[],!0):r.children=t,__spreadArray([],null!=e?e:[],!0)})}),e(void 0)},300)})},onChange:function(e,n){h.current=n,e.apply(void 0,n)}}};exports.default=useAsyncTreeSelect;
//# sourceMappingURL=useAsyncTreeSelect.js.map
