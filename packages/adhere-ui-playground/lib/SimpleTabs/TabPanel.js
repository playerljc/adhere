"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),Context_1=require("./Context"),selectorPrefix="adhere-ui-playground-simple-tabs-panel",TabPanel=function(e){var t=e.className,r=e.children,a=e.index;return react_1.default.createElement(Context_1.TabContext.Consumer,null,function(e){e=e.activeKey;return react_1.default.createElement("div",{className:selectorPrefix+" "+t+" "+((void 0===e?"":e)===a?"active":"")},r)})};TabPanel.defaultProps={title:"",index:"",className:""},TabPanel.propTypes={title:prop_types_1.default.node,index:prop_types_1.default.oneOfType([prop_types_1.default.number,prop_types_1.default.string]),className:prop_types_1.default.string},exports.default=TabPanel;
//# sourceMappingURL=TabPanel.js.map