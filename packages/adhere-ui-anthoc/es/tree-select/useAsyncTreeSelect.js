var __rest=this&&this.__rest||function(e,r){var n={};for(u in e)Object.prototype.hasOwnProperty.call(e,u)&&r.indexOf(u)<0&&(n[u]=e[u]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,u=Object.getOwnPropertySymbols(e);t<u.length;t++)r.indexOf(u[t])<0&&Object.prototype.propertyIsEnumerable.call(e,u[t])&&(n[u[t]]=e[u[t]]);return n},__spreadArray=this&&this.__spreadArray||function(e,r,n){if(n||2===arguments.length)for(var t,u=0,a=r.length;u<a;u++)!t&&u in r||((t=t||Array.prototype.slice.call(r,0,u))[u]=r[u]);return e.concat(t||Array.prototype.slice.call(r))};import{useMount,useUpdateEffect}from"ahooks";import{useRef,useState}from"react";var useAsyncTreeSelect=function(e){function a(e,u){return function e(r){for(var n,t=0;t<r.length;t++){if(Object.is(r[t].value,u)){n=r[t];break}if(n=e(r[t].children||[]))break}return n}(e)}function r(){o(null!=c?c:"",u).then(function(e){p(e)})}function n(){i&&Promise.all([t(c,u),null==i?void 0:i(f,u)]).then(function(e){var r=e[0],r=void 0===r?[]:r,e=e[1],n=void 0===e?[]:e;p(__spreadArray(__spreadArray([],null!=n?n:[],!0),(null!=r?r:[]).filter(function(e){return!(null!=n?n:[]).map(function(e){return e.value}).includes(e.value)}),!0))})}function t(e,r){return o(e,r).then(function(e){return e})}var u=e.cascadeParams,l=e.onDataSourceChange,i=e.fetchBranch,o=e.fetchData,c=e.defaultId,f=e.value,s=e.treeDataSimpleMode,e=useState([]),d=e[0],p=e[1],y=useRef();return useMount(function(){(f&&(!Array.isArray(f)||f.length)?n:r)()}),useUpdateEffect(function(){y.current||n()},[f]),useUpdateEffect(function(){(f?n:r)()},[JSON.stringify(u)]),useUpdateEffect(function(){null!=l&&l(d)},[d]),{treeData:d,onLoadData:function(n){return new Promise(function(r){setTimeout(function(){var u=n.value,e=__rest(n,["value"]);t(u,e).then(function(t){p(function(e){var r,n;return s?__spreadArray(__spreadArray([],null!=t?t:[],!0),null!=(r=null==(r=null==e?void 0:e.filter)?void 0:r.call(e,function(e){return e.pId!==u}))?r:[],!0):((n=a(e,u)).children&&Array.isArray(n.children)&&n.children.length?n.children=__spreadArray(__spreadArray([],n.children,!0),null!=(r=null==(r=null==t?void 0:t.filter)?void 0:r.call(t,function(r){return n.children.find(function(e){return e.value!==r.value})}))?r:[],!0):n.children=t,__spreadArray([],null!=e?e:[],!0))})}),r(void 0)},300)})},onChange:function(e,r){y.current=r,null!=e&&e.apply(void 0,r)}}};export default useAsyncTreeSelect;
//# sourceMappingURL=useAsyncTreeSelect.js.map
