var __spreadArray=this&&this.__spreadArray||function(e,r,a){if(a||2===arguments.length)for(var n,t=0,l=r.length;t<l;t++)!n&&t in r||((n=n||Array.prototype.slice.call(r,0,t))[t]=r[t]);return e.concat(n||Array.prototype.slice.call(r))};import{useMemo}from"react";var useTreeSelectLeaf=function(r){return useMemo(function(){var e=__spreadArray([],null!=r?r:[],!0);return function a(e){(e||[]).forEach(function(e){var r;"isLeaf"in e?e.disabled=!e.isLeaf:e.disabled=!(null==(r=null==e?void 0:e.children)||!r.length),a(e.children)})}(e),e},[r=void 0===r?[]:r])};export default useTreeSelectLeaf;
//# sourceMappingURL=useTreeSelectLeaf.js.map
