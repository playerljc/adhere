var __spreadArray=this&&this.__spreadArray||function(e,r,n){if(n||2===arguments.length)for(var t,a=0,u=r.length;a<u;a++)!t&&a in r||((t=t||Array.prototype.slice.call(r,0,a))[a]=r[a]);return e.concat(t||Array.prototype.slice.call(r))};import{useMount,useUpdateEffect}from"ahooks";import{useCallback,useMemo,useRef,useState}from"react";import Util from"@baifendian/adhere-util";import Dict from"@baifendian/adhere-util-dict";import{deepDep}from"./util";var useTreeSelectLeaf=function(r){return useMemo(function(){var e=JSON.parse(JSON.stringify(r));return function r(e){(e||[]).forEach(function(e){e.disabled=!("isLeaf"in e&&e.isLeaf),r(e.children)})}(e),e},[r])},useAsyncTreeSelect=function(e,r){function a(e,a){return function e(r){for(var n,t=0;t<r.length;t++){if(r[t].value===a){n=r[t];break}if(n=e(r[t].children||[]))break}return n}(e)}function n(){v(null!=o?o:"",i).then(function(e){p(e)})}function t(){l&&Promise.all([u(o),null==l?void 0:l(f,i)]).then(function(e){var r=e[0],r=void 0===r?[]:r,e=e[1],n=void 0===e?[]:e;p(__spreadArray(__spreadArray([],null!=n?n:[],!0),(null!=r?r:[]).filter(function(e){return!(null!=n?n:[]).map(function(e){return e.value}).includes(e.value)}),!0))})}function u(e){return v(e,i).then(function(e){return e})}var i=r.cascadeParams,c=r.onDataSourceChange,l=r.fetchBranch,o=r.defaultId,f=r.value,d=r.treeDataSimpleMode,r=useState([]),s=r[0],p=r[1],h=useRef(),v=Dict.value[e].value;return useMount(function(){(f&&(!Array.isArray(f)||f.length)?t:n)()}),useUpdateEffect(function(){h.current||t()},[f]),useUpdateEffect(function(){(f?t:n)()},[deepDep(i)]),useUpdateEffect(function(){null!=c&&c(s)},[s]),{treeData:s,onLoadData:function(e){var t=e.value;return new Promise(function(e){setTimeout(function(){u(t).then(function(r){p(function(e){var n;return d?__spreadArray(__spreadArray([],r,!0),e.filter(function(e){return e.pId!==t}),!0):((n=a(e,t)).children&&Array.isArray(n.children)&&n.children.length?n.children=__spreadArray(__spreadArray([],n.children,!0),r.filter(function(r){return n.children.find(function(e){return e.value!==r.value})}),!0):n.children=r,__spreadArray([],e,!0))})}),e(void 0)},300)})},onChange:function(e,r){h.current=r,e.apply(void 0,r)}}};function useAsyncCascader(e,r){function a(e,a){return function e(r){for(var n,t=0;t<r.length;t++){if(r[t].value===a){n=r[t];break}if(n=e(r[t].children||[]))break}return n}(e)}function n(){v(null!=o?o:"",i).then(function(e){p(e)})}function t(){l&&Promise.all([u(o),null==l?void 0:l(f,i)]).then(function(e){var r=e[0],n=e[1];p(__spreadArray(__spreadArray([],n,!0),r.filter(function(e){return!n.map(function(e){return e.value}).includes(e.value)}),!0))})}function u(e){return v(e,i).then(function(e){return e})}var i=r.cascadeParams,c=r.onDataSourceChange,l=r.fetchBranch,o=r.defaultId,f=r.value,d=r.treeDataSimpleMode,r=useState([]),s=r[0],p=r[1],h=useRef(),v=Dict.value[e].value;return useMount(function(){(f&&(!Array.isArray(f)||f.length)?t:n)()}),useUpdateEffect(function(){h.current||t()},[f]),useUpdateEffect(function(){(f?t:n)()},[deepDep(i)]),useUpdateEffect(function(){null!=c&&c(s)},[s]),{treeData:s,onLoadData:function(r){return new Promise(function(e){var t=r[r.length-1].value;setTimeout(function(){u(t).then(function(r){p(function(e){var n;return d?__spreadArray(__spreadArray([],r,!0),e.filter(function(e){return e.pId!==t}),!0):((n=a(e,t)).children&&Array.isArray(n.children)&&n.children.length?n.children=__spreadArray(__spreadArray([],n.children,!0),r.filter(function(r){return n.children.find(function(e){return e.value!==r.value})}),!0):n.children=r,__spreadArray([],e,!0))})}),e(void 0)},300)})},onChange:function(e,r){h.current=r,e.apply(void 0,r)}}}function useCascaderData(e){var r=e.options,n=e.treeDataSimpleMode,t=e.config,e=useCallback(function(){var e;return Util.arrayToAntdTreeSelect(r,{keyAttr:null!=(e=null==t?void 0:t.keyAttr)?e:"value",titleAttr:null!=(e=null==t?void 0:t.titleAttr)?e:"value",rootParentId:null!=(e=null==t?void 0:t.rootParentId)?e:0,parentIdAttr:null!=(e=null==t?void 0:t.parentIdAttr)?e:"pId"})},[r]);return n?e():r}export{useTreeSelectLeaf,useAsyncTreeSelect,useAsyncCascader,useCascaderData};
//# sourceMappingURL=hooks.js.map
