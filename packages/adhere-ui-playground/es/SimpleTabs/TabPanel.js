import classNames from"classnames";import React,{memo,useContext}from"react";import{TabContext}from"./Context";var selectorPrefix="adhere-ui-playground-simple-tabs-panel",TabPanel=function(e){var a=e.className,a=void 0===a?"":a,t=e.style,l=e.children,e=e.index,e=void 0===e?"":e,s=useContext(TabContext).activeKey;return React.createElement("div",{className:classNames(selectorPrefix,null!=a?a:"",{active:s===e}),style:null!=t?t:{}},l)};export default memo(TabPanel);
//# sourceMappingURL=TabPanel.js.map
