import React from"react";import PropTypes from"prop-types";import{TabContext}from"./Context";var selectorPrefix="adhere-ui-playground-simple-tabs-panel",TabPanel=function(e){var r=e.className,t=e.children,a=e.index;return React.createElement(TabContext.Consumer,null,function(e){e=e.activeKey,e=void 0===e?"":e;return React.createElement("div",{className:selectorPrefix+" "+r+" "+(e===a?"active":"")},t)})};TabPanel.defaultProps={title:"",index:"",className:""},TabPanel.propTypes={title:PropTypes.node,index:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),className:PropTypes.string};export default TabPanel;
//# sourceMappingURL=TabPanel.js.map