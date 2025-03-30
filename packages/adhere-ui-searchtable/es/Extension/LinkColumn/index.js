import React from"react";import{Link}from"@ctsj/router";var LinkColumn=function(e){var n=e.className,r=e.style,t=e.record,a=e.dataIndex,o=e.children;return React.createElement(Link,{className:null!=n?n:"",style:null!=r?r:{},to:e.to},o?o({record:t,rowIndex:e.rowIndex,dataIndex:a}):t[a])};LinkColumn.displayName="LinkColumn";export default LinkColumn;
//# sourceMappingURL=index.js.map
