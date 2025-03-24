import React,{memo}from"react";import AdhereSuspense from"@baifendian/adhere-ui-suspense";let Suspense=memo(e=>{let{data:t,renderEmpty:n,isEmpty:r,emptyComponent:m,children:p}=e;return React.createElement(AdhereSuspense.Sync,{...e,isEmpty:()=>r?null==r?void 0:r(t):0===t.length,renderEmpty:n?n():m},p)});export default Suspense;
//# sourceMappingURL=Suspense.js.map
