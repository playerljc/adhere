var __spreadArray=this&&this.__spreadArray||function(e,r,n){if(n||2===arguments.length)for(var l,t=0,u=r.length;t<u;t++)!l&&t in r||((l=l||Array.prototype.slice.call(r,0,t))[t]=r[t]);return e.concat(l||Array.prototype.slice.call(r))};import React,{useMemo}from"react";import Checkbox from"./checkbox";var CheckAllWrapper=function(e){var n=e.value,l=e.onCheckAllChange,t=e.options,e=e.children,r=useMemo(function(){return!(null==t||!t.length)&&t.every(function(e){return null==n?void 0:n.includes(e)})},[n,t]),u=useMemo(function(){return 0<(null!=n?n:[]).length&&(null!=n?n:[]).length<(null!=t?t:[]).length},[n,t]);return React.createElement(Checkbox,{indeterminate:u,checked:r,onChange:function(e){var r;e?(e=Array.from(new Set(__spreadArray(__spreadArray([],null!=t?t:[],!0),null!=n?n:[],!0))),null!=l&&l(e,!0,e)):(r=null!=t?t:[],e=null!=(e=null==n?void 0:n.filter(function(e){return!r.includes(e)}))?e:[],null!=l&&l(e,!1,e))}},e)};export default CheckAllWrapper;
//# sourceMappingURL=CheckAllWrapper.js.map