var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var s in n=arguments[t])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}).apply(this,arguments)};import React,{memo}from"react";import AdhereSuspense from"@baifendian/adhere-ui-suspense";var Suspense=memo(function(e){var n=e.data,t=e.renderEmpty,r=e.isEmpty,s=e.emptyComponent,a=e.children;return React.createElement(AdhereSuspense.Sync,__assign({},e,{isEmpty:function(){return r?null==r?void 0:r(n):0===n.length},renderEmpty:t?t():s}),a)});export default Suspense;
//# sourceMappingURL=Suspense.js.map
