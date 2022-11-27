import React from"react";import{Link}from"@ctsj/router";export default function(e){var r=e.className,t=e.style,a=e.record,o=e.rowIndex,c=e.dataIndex,n=e.to,e=e.children;return React.createElement(Link,{className:r||"",style:t||{},to:n},e?e({record:a,rowIndex:o,dataIndex:c}):a[c])}
//# sourceMappingURL=index.js.map
