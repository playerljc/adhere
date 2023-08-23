var __spreadArray=this&&this.__spreadArray||function(e,n,r){if(r||2===arguments.length)for(var t,u=0,a=n.length;u<a;u++)!t&&u in n||((t=t||Array.prototype.slice.call(n,0,u))[u]=n[u]);return e.concat(t||Array.prototype.slice.call(n))};import{useMount,useUpdateEffect}from"ahooks";import{useMemo,useRef,useState}from"react";import Dict from"@baifendian/adhere-util-dict";import{deepDep}from"./util";function useTreeSelectLeaf(n){return useMemo(function(){var e=JSON.parse(JSON.stringify(n));return function n(e){(e||[]).forEach(function(e){e.disabled=!("leaf"in e&&e.leaf),n(e.children)})}(e),e},[n])}function useAsyncTreeSelect(e,n){function u(e,u){return function e(n){for(var r,t=0;t<n.length;t++){if(n[t].value===u){r=n[t];break}if(r=e(n[t].children||[]))break}return r}(e)}function r(){p(null!=f?f:"",i).then(function(e){s(e)})}function t(){Promise.all([a(f),null==o?void 0:o(l,i)]).then(function(e){var n=e[0],n=void 0===n?[]:n,e=e[1],r=void 0===e?[]:e;s(__spreadArray(__spreadArray([],null!=r?r:[],!0),(null!=n?n:[]).filter(function(e){return!(null!=r?r:[]).map(function(e){return e.value}).includes(e.value)}),!0))})}function a(e){return p(e,i).then(function(e){return e})}var i=n.cascadeParams,c=n.onDataSourceChange,o=n.fetchBranch,f=n.defaultId,l=n.value,n=useState([]),d=n[0],s=n[1],h=useRef(),p=Dict.value[e].value;return useMount(function(){(l&&(!Array.isArray(l)||l.length)?t:r)()}),useUpdateEffect(function(){h.current||t()},[l]),useUpdateEffect(function(){(l?t:r)()},[deepDep(i)]),useUpdateEffect(function(){null!=c&&c(d)},[d]),{treeData:d,onLoadData:function(e){var t=e.value;return new Promise(function(e){setTimeout(function(){a(t).then(function(n){s(function(e){var r=u(e,t);return r.children&&Array.isArray(r.children)&&r.children.length?r.children=__spreadArray(__spreadArray([],r.children,!0),n.filter(function(n){return r.children.find(function(e){return e.value!==n.value})}),!0):r.children=n,__spreadArray([],e,!0)})}),e(void 0)},300)})},onChange:function(e,n){h.current=n,e.apply(void 0,n)}}}function useAsyncCascader(e,n){function u(e,u){return function e(n){for(var r,t=0;t<n.length;t++){if(n[t].value===u){r=n[t];break}if(r=e(n[t].children||[]))break}return r}(e)}function r(){p(null!=f?f:"",i).then(function(e){s(e)})}function t(){Promise.all([a(f),null==o?void 0:o(l,i)]).then(function(e){var n=e[0],r=e[1];s(__spreadArray(__spreadArray([],r,!0),n.filter(function(e){return!r.map(function(e){return e.value}).includes(e.value)}),!0))})}function a(e){return p(e,i).then(function(e){return e})}var i=n.cascadeParams,c=n.onDataSourceChange,o=n.fetchBranch,f=n.defaultId,l=n.value,n=useState([]),d=n[0],s=n[1],h=useRef(),p=Dict.value[e].value;return useMount(function(){(l&&(!Array.isArray(l)||l.length)?t:r)()}),useUpdateEffect(function(){h.current||t()},[l]),useUpdateEffect(function(){(l?t:r)()},[deepDep(i)]),useUpdateEffect(function(){null!=c&&c(d)},[d]),{treeData:d,onLoadData:function(n){return new Promise(function(e){var t=n[n.length-1].value;setTimeout(function(){a(t).then(function(n){s(function(e){var r=u(e,t);return r.children&&Array.isArray(r.children)&&r.children.length?r.children=__spreadArray(__spreadArray([],r.children,!0),n.filter(function(n){return r.children.find(function(e){return e.value!==n.value})}),!0):r.children=n,__spreadArray([],e,!0)})}),e(void 0)},300)})},onChange:function(e,n){h.current=n,e.apply(void 0,n)}}}export{useTreeSelectLeaf,useAsyncTreeSelect,useAsyncCascader};
//# sourceMappingURL=hooks.js.map
