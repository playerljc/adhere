import React from"react";import{Link}from"@ctsj/router";let LinkColumn=e=>{var{className:e,style:r,record:t,rowIndex:n,dataIndex:a,to:o,children:l}=e;return React.createElement(Link,{className:e??"",style:r??{},to:o},l?l({record:t,rowIndex:n,dataIndex:a}):t[a])};LinkColumn.displayName="LinkColumn";export default LinkColumn;
//# sourceMappingURL=index.js.map
