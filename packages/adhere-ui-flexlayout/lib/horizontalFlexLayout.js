"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),react_1=tslib_1.__importDefault(require("react")),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),flexlayout_1=tslib_1.__importDefault(require("./flexlayout")),fixed_1=tslib_1.__importDefault(require("./fixed")),auto_1=tslib_1.__importDefault(require("./auto")),HorizontalFlexLayout=function(e){var t=e.className,a=e.style,i=e.topClassName,l=void 0===i?"":i,i=e.topStyle,r=void 0===i?{}:i,i=e.rightClassName,o=void 0===i?"":i,i=e.rightStyle,d=void 0===i?{}:i,i=e.bottomClassName,n=void 0===i?"":i,i=e.bottomStyle,s=void 0===i?{}:i,i=e.leftClassName,_=void 0===i?"":i,i=e.leftStyle,u=void 0===i?{}:i,i=e.mainClassName,c=void 0===i?"":i,i=e.mainStyle,f=void 0===i?{}:i,i=e.mainAutoWrapClassName,m=void 0===i?"":i,i=e.mainAutoStyle,v=void 0===i?{}:i,i=e.mainWrapClassName,p=void 0===i?"":i,i=e.mainWrapStyle,y=void 0===i?{}:i,b=e.renderTop,x=e.renderRight,N=e.renderBottom,E=e.renderLeft,h=e.renderMain,i=e.topProps,g=void 0===i?{}:i,i=e.rightProps,q=void 0===i?{}:i,i=e.bottomProps,C=void 0===i?{}:i,i=e.leftProps,P=void 0===i?{}:i,i=e.mainProps,S=void 0===i?{}:i,i=e.mainAutoWrapProps,D=void 0===i?{}:i;return react_1.default.createElement(flexlayout_1.default,{className:(void 0===t?"":t)||"",style:(void 0===a?{}:a)||{},direction:"horizontal"},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!E},function(){return react_1.default.createElement(fixed_1.default,tslib_1.__assign({className:_||"",style:u||{},fit:!0},P||{}),E)}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!h},function(){return react_1.default.createElement(auto_1.default,tslib_1.__assign({className:m||"",style:v||{},fit:!0,autoFixed:!0},D||{}),react_1.default.createElement(flexlayout_1.default,{direction:"vertical",className:p||"",style:y||{}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!b},function(){return react_1.default.createElement(fixed_1.default,tslib_1.__assign({className:l||"",style:r||{},fit:!0},g||{}),b)}),react_1.default.createElement(auto_1.default,tslib_1.__assign({autoFixed:!0,fit:!0,className:c||"",style:f||{}},S||{}),h),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!N},function(){return react_1.default.createElement(fixed_1.default,tslib_1.__assign({className:n||"",style:s||{},fit:!0},C||{}),N)})))}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!x},function(){return react_1.default.createElement(fixed_1.default,tslib_1.__assign({className:o||"",style:d||{},fit:!0},q||{}),x)}))};exports.default=HorizontalFlexLayout;
//# sourceMappingURL=horizontalFlexLayout.js.map
