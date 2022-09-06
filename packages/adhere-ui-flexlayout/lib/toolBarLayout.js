"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),react_1=tslib_1.__importDefault(require("react")),classnames_1=tslib_1.__importDefault(require("classnames")),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),verticalFlexLayout_1=tslib_1.__importDefault(require("./verticalFlexLayout")),selectorPrefix="adhere-ui-flexlayout-toolbarlayout",ToolBarLayout=function(e){var t=e.topToolBarItems,a=void 0===t?[]:t,o=e.bottomToolBarItems,r=void 0===o?[]:o,l=e.children,s=e.className,i=void 0===s?"":s,n=e.topClassName,c=void 0===n?"":n,t=e.bottomClassName,o=void 0===t?"":t,s=e.mainAutoWrapClassName,n=void 0===s?"":s,t=e.topProps,s=void 0===t?{}:t,t=e.bottomProps,t=void 0===t?{}:t,e=tslib_1.__rest(e,["topToolBarItems","bottomToolBarItems","children","className","topClassName","bottomClassName","mainAutoWrapClassName","topProps","bottomProps"]);return react_1.default.createElement(verticalFlexLayout_1.default,tslib_1.__assign({className:(0,classnames_1.default)(selectorPrefix,i||""),topClassName:(0,classnames_1.default)((a||[]).length?"".concat(selectorPrefix,"-top"):null,c||""),bottomClassName:(0,classnames_1.default)((r||[]).length?"".concat(selectorPrefix,"-bottom"):null,o||""),mainAutoWrapClassName:(0,classnames_1.default)("".concat(selectorPrefix,"-main-auto-wrap"),n||""),topProps:tslib_1.__assign({fit:!1},s||{}),bottomProps:tslib_1.__assign({fit:!1},t||{})},e,{renderTop:react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!(a||[]).length},function(){return a.map(function(e,t){return react_1.default.createElement("div",{key:t,className:"".concat(selectorPrefix,"-toolbar-item")},e)})}),renderMain:l,renderBottom:react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!(r||[]).length},function(){return r.map(function(e,t){return react_1.default.createElement("div",{key:t,className:"".concat(selectorPrefix,"-toolbar-item")},e)})})}))};exports.default=ToolBarLayout;
//# sourceMappingURL=toolBarLayout.js.map
