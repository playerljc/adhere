import React from"react";import{Link}from"@ctsj/router";export default function(e){var r=e.className,t=e.style,a=e.record,n=e.rowIndex,o=e.dataIndex,c=e.to,e=e.children;return React.createElement(Link,{className:null!=r?r:"",style:null!=t?t:{},to:c},e?e({record:a,rowIndex:n,dataIndex:o}):a[o])}
//# sourceMappingURL=index.js.map
