import React,{useContext}from"react";import{TabContext}from"./Context";var selectorPrefix="adhere-ui-playground-simple-tabs-panel",TabPanel=function(e){var t=e.className,a=void 0===t?"":t,r=e.children,t=e.index,e=void 0===t?"":t,t=useContext(TabContext).activeKey;return React.createElement("div",{className:selectorPrefix+" "+a+" "+(t===e?"active":"")},r)};export default TabPanel;
//# sourceMappingURL=TabPanel.js.map
