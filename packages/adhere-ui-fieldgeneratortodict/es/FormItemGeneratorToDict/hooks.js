var __spreadArray=this&&this.__spreadArray||function(e,n,t){if(t||2===arguments.length)for(var r,u=0,a=n.length;u<a;u++)!r&&u in n||((r=r||Array.prototype.slice.call(n,0,u))[u]=n[u]);return e.concat(r||Array.prototype.slice.call(n))};import{useMount,usePrevious,useUpdateEffect}from"ahooks";import{useMemo,useState}from"react";import Dict from"@baifendian/adhere-util-dict";import{deepDep}from"./util";function useTreeSelectLeaf(n){return useMemo(function(){var e=JSON.parse(JSON.stringify(n));return function n(e){(e||[]).forEach(function(e){e.disabled=!("leaf"in e&&e.leaf),n(e.children)})}(e),e},[n])}function useAsyncTreeSelect(e,n){function r(e,u){return function e(n){for(var t,r=0;r<n.length;r++){if(n[r].value===u){t=n[r];break}if(t=e(n[r].children||[]))break}return t}(e)}function t(){p(null!=c?c:"",a).then(function(e){s(e)})}function u(){var e,n;null!=(n=null==(e=null==o?void 0:o(f,a))?void 0:e.then)&&n.call(e,function(e){e&&Array.isArray(e)&&e.length&&s(e)})}var a=n.cascadeParams,i=n.onDataSourceChange,o=n.fetchBranch,c=n.defaultId,f=n.value,n=useState([]),l=n[0],s=n[1],d=usePrevious(f),p=Dict.value[e].value;return useMount(function(){(f&&(!Array.isArray(f)||f.length)?u:t)()}),useUpdateEffect(function(){!d&&f&&u()},[f]),useUpdateEffect(function(){(f?u:t)()},[deepDep(a)]),useUpdateEffect(function(){null!=i&&i(l)},[l]),{treeData:l,onLoadData:function(e){var t=e.value;return new Promise(function(e){setTimeout(function(){p(t,a).then(function(e){return e}).then(function(n){s(function(e){return r(e,t).children=n,__spreadArray([],e,!0)})}),e(void 0)},300)})}}}export{useTreeSelectLeaf,useAsyncTreeSelect};
//# sourceMappingURL=hooks.js.map