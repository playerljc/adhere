var __spreadArray=this&&this.__spreadArray||function(e,n,r){if(r||2===arguments.length)for(var t,u=0,a=n.length;u<a;u++)!t&&u in n||((t=t||Array.prototype.slice.call(n,0,u))[u]=n[u]);return e.concat(t||Array.prototype.slice.call(n))};import{useMount,useUpdateEffect}from"ahooks";import{useRef,useState}from"react";var useAsyncTreeSelect=function(e){function a(e,u){return function e(n){for(var r,t=0;t<n.length;t++){if(Object.is(n[t].value,u)){r=n[t];break}if(r=e(n[t].children||[]))break}return r}(e)}function n(){c(null!=o?o:"",u).then(function(e){h(e)})}function r(){i&&Promise.all([t(o),null==i?void 0:i(f,u)]).then(function(e){var n=e[0],n=void 0===n?[]:n,e=e[1],r=void 0===e?[]:e;h(__spreadArray(__spreadArray([],null!=r?r:[],!0),(null!=n?n:[]).filter(function(e){return!(null!=r?r:[]).map(function(e){return e.value}).includes(e.value)}),!0))})}function t(e){return c(e,u).then(function(e){return e})}var u=e.cascadeParams,l=e.onDataSourceChange,i=e.fetchBranch,c=e.fetchData,o=e.defaultId,f=e.value,d=e.treeDataSimpleMode,e=useState([]),s=e[0],h=e[1],p=useRef();return useMount(function(){(f&&(!Array.isArray(f)||f.length)?r:n)()}),useUpdateEffect(function(){p.current||r()},[f]),useUpdateEffect(function(){(f?r:n)()},[JSON.stringify(u)]),useUpdateEffect(function(){null!=l&&l(s)},[s]),{treeData:s,onLoadData:function(e){var u=e.value;return new Promise(function(e){setTimeout(function(){t(u).then(function(t){h(function(e){var n,r;return d?__spreadArray(__spreadArray([],null!=t?t:[],!0),null!=(n=null==(n=null==e?void 0:e.filter)?void 0:n.call(e,function(e){return e.pId!==u}))?n:[],!0):((r=a(e,u)).children&&Array.isArray(r.children)&&r.children.length?r.children=__spreadArray(__spreadArray([],r.children,!0),null!=(n=null==(n=null==t?void 0:t.filter)?void 0:n.call(t,function(n){return r.children.find(function(e){return e.value!==n.value})}))?n:[],!0):r.children=t,__spreadArray([],null!=e?e:[],!0))})}),e(void 0)},300)})},onChange:function(e,n){p.current=n,e.apply(void 0,n)}}};export default useAsyncTreeSelect;
//# sourceMappingURL=useAsyncTreeSelect.js.map
