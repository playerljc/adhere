import React from"react";import{Link}from"@ctsj/router";var LinkColumn=function(e){var n=e.className,r=e.style,t=e.record,a=e.rowIndex,o=e.dataIndex,l=e.to,e=e.children;return React.createElement(Link,{className:null!=n?n:"",style:null!=r?r:{},to:l},e?e({record:t,rowIndex:a,dataIndex:o}):t[o])};LinkColumn.displayName="LinkColumn";export default LinkColumn;
//# sourceMappingURL=index.js.map
