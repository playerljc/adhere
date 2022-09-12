"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.useScrollLayout=exports.ScrollLayoutContext=void 0;var tslib_1=require("tslib"),react_1=tslib_1.__importStar(require("react")),classnames_1=tslib_1.__importDefault(require("classnames")),selectorPrefix="adhere-ui-flexlayout-scrolllayout";exports.ScrollLayoutContext=(0,react_1.createContext)({getEl:function(){return document.body}});var useScrollLayout=function(){var e=(0,react_1.useContext)(exports.ScrollLayoutContext);return tslib_1.__assign({},e)};exports.useScrollLayout=useScrollLayout;var ScrollLayout=function(e,t){var r=e.children,o=e.className,l=e.style,e=e.scrollY;return react_1.default.createElement(exports.ScrollLayoutContext.Provider,{value:{getEl:function(){return null==t?void 0:t.current}}},react_1.default.createElement("div",{ref:t,className:(0,classnames_1.default)(selectorPrefix,o||""),style:tslib_1.__assign({overflowY:e?"auto":"hidden"},l||{})},r))};exports.default=(0,react_1.forwardRef)(ScrollLayout);
//# sourceMappingURL=scrollLayout.js.map
