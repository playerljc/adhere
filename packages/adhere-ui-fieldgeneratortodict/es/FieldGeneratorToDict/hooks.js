var __spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,u=0,c=t.length;u<c;u++)!a&&u in t||((a=a||Array.prototype.slice.call(t,0,u))[u]=t[u]);return e.concat(a||Array.prototype.slice.call(t))};import{useMount,useUpdateEffect}from"ahooks";import{useCallback,useState}from"react";import Dict from"@baifendian/adhere-util-dict";import{deepDep}from"./Util";function useDict(e){var t=e.dictName,n=e.cascadeParams,a=e.onDataSourceChange,u=Dict.value[t].value,e=useState([]),c=e[0],r=e[1];function i(){u instanceof Function?r(u(n)):r(u)}return useMount(function(){i()}),useUpdateEffect(function(){i()},[deepDep(n)]),useUpdateEffect(function(){null!=a&&a(c)},[c]),c}function useDynamicDict(e){var t=e.dictName,n=e.cascadeParams,a=e.onDataSourceChange,e=useState([]),u=e[0],c=e[1],r=Dict.value[t].value;function i(){r instanceof Function?r(n).then(function(e){c(e)}):r.then&&r.then(function(e){c(e)})}return useMount(function(){i()}),useUpdateEffect(function(){i()},[deepDep(n)]),useUpdateEffect(function(){null!=a&&a(u)},[u]),__spreadArray([],u,!0)}function useAutoCompleteDict(e){var t=e.dictName,a=e.cascadeParams,n=e.onDataSourceChange,u=Dict.value[t].value,e=useState([]),c=e[0],r=e[1];return useUpdateEffect(function(){null!=n&&n(c)},[c]),{options:__spreadArray([],null!=(t=c)?t:[],!0),loadData:function(e){return new Promise(function(t,n){u(e,a).then(function(e){r(e),t()}).catch(function(e){return n(e)})})}}}function useTreeAutoCompleteDict(e){var t=e.dictName,a=e.cascadeParams,n=e.onDataSourceChange,u=Dict.value[t].value,e=useState([]),c=e[0],r=e[1];return useUpdateEffect(function(){null!=n&&n(c)},[c]),{treeData:__spreadArray([],null!=(t=c)?t:[],!0),loadData:function(e){return new Promise(function(t,n){u(e,a).then(function(e){r(e),t()}).catch(function(e){return n(e)})})}}}function usePaging(e){var t=e.dictName,a=e.cascadeParams,u=e.onDataSourceChange,c=Dict.value[t].value;return useCallback(function(t,n){return c(t,n,a).then(function(e){return null!=u&&u(e,{type:"paging",info:{page:t,limit:n}}),e})},[t,u,a])}function useAutoCompletePaging(e){var t=e.dictName,a=e.cascadeParams,u=e.onDataSourceChange,c=Dict.value[t].value;return useCallback(function(t,n,e){return c(t,n,e,a).then(function(e){return null!=u&&u(e,{type:"paging",info:{page:t,limit:n}}),e})},[t,u,a])}function useAsyncTree(e){var e=e.dictName,t=Dict.value[e].value;return useCallback(t,[e])}export{useDict,useDynamicDict,useAutoCompleteDict,useTreeAutoCompleteDict,usePaging,useAutoCompletePaging,useAsyncTree};
//# sourceMappingURL=Hooks.js.map
