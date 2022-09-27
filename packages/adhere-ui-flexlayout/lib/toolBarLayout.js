"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),react_1=tslib_1.__importStar(require("react")),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),verticalFlexLayout_1=tslib_1.__importDefault(require("./verticalFlexLayout")),selectorPrefix="adhere-ui-flexlayout-toolbarlayout",ToolBarLayout=function(e){var t=e.topToolBarItems,a=void 0===t?[]:t,t=e.bottomToolBarItems,o=void 0===t?[]:t,t=e.children,r=e.className,r=void 0===r?"":r,s=e.topClassName,s=void 0===s?"":s,l=e.bottomClassName,l=void 0===l?"":l,i=e.mainAutoWrapClassName,i=void 0===i?"":i,n=e.topProps,c=void 0===n?{}:n,n=e.bottomProps,u=void 0===n?{}:n,n=tslib_1.__rest(e,["topToolBarItems","bottomToolBarItems","children","className","topClassName","bottomClassName","mainAutoWrapClassName","topProps","bottomProps"]),e=(0,react_1.useMemo)(function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!(a||[]).length},function(){return a.map(function(e,t){return react_1.default.createElement("div",{key:t,className:"".concat(selectorPrefix,"-toolbar-item")},e)})})},[a]),m=(0,react_1.useMemo)(function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!(o||[]).length},function(){return o.map(function(e,t){return react_1.default.createElement("div",{key:t,className:"".concat(selectorPrefix,"-toolbar-item")},e)})})},[o]),_=(0,react_1.useMemo)(function(){return tslib_1.__assign({fit:!1},c||{})},[c]),d=(0,react_1.useMemo)(function(){return tslib_1.__assign({fit:!1},u||{})},[u]);return react_1.default.createElement(verticalFlexLayout_1.default,tslib_1.__assign({className:(0,classnames_1.default)(selectorPrefix,r||""),topClassName:(0,classnames_1.default)((a||[]).length?"".concat(selectorPrefix,"-top"):null,s||""),bottomClassName:(0,classnames_1.default)((o||[]).length?"".concat(selectorPrefix,"-bottom"):null,l||""),mainAutoWrapClassName:(0,classnames_1.default)("".concat(selectorPrefix,"-main-auto-wrap"),i||""),topProps:_,bottomProps:d},n,{renderTop:e,renderMain:t,renderBottom:m}))};exports.default=(0,react_1.memo)(ToolBarLayout);
//# sourceMappingURL=toolBarLayout.js.map
