"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&("get"in i?t.__esModule:!i.writable&&!i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,i)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),auto_1=__importDefault(require("./auto")),fixed_1=__importDefault(require("./fixed")),flexlayout_1=__importDefault(require("./flexlayout")),HorizontalFlexLayout=function(e){var t=e.className,t=void 0===t?"":t,a=e.style,a=void 0===a?{}:a,r=e.topClassName,i=void 0===r?"":r,r=e.topStyle,n=void 0===r?{}:r,r=e.rightClassName,l=void 0===r?"":r,r=e.rightStyle,o=void 0===r?{}:r,r=e.bottomClassName,u=void 0===r?"":r,r=e.bottomStyle,s=void 0===r?{}:r,r=e.leftClassName,d=void 0===r?"":r,r=e.leftStyle,_=void 0===r?{}:r,r=e.mainClassName,c=void 0===r?"":r,r=e.mainStyle,f=void 0===r?{}:r,r=e.mainAutoWrapClassName,m=void 0===r?"":r,r=e.mainAutoStyle,p=void 0===r?{}:r,r=e.mainWrapClassName,v=void 0===r?"":r,r=e.mainWrapStyle,y=void 0===r?{}:r,h=e.renderTop,g=e.renderRight,b=e.renderBottom,x=e.renderLeft,N=e.renderMain,r=e.topProps,E=void 0===r?{}:r,r=e.rightProps,O=void 0===r?{}:r,r=e.bottomProps,P=void 0===r?{}:r,r=e.leftProps,D=void 0===r?{}:r,r=e.mainProps,M=void 0===r?{}:r,r=e.mainAutoWrapProps,S=void 0===r?{}:r,e=(0,react_1.useMemo)(function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!x},function(){return react_1.default.createElement(fixed_1.default,__assign({className:d||"",style:_||{},fit:!0},D||{}),x)})},[x,d,_,D]),r=(0,react_1.useMemo)(function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!N},function(){return react_1.default.createElement(auto_1.default,__assign({className:(0,classnames_1.default)(m),style:p||{},fit:!0,autoFixed:!0},S||{}),react_1.default.createElement(flexlayout_1.default,{direction:"vertical",className:(0,classnames_1.default)(v),style:y||{}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!h},function(){return react_1.default.createElement(fixed_1.default,__assign({className:(0,classnames_1.default)(i),style:n||{},fit:!0},E||{}),h)}),react_1.default.createElement(auto_1.default,__assign({autoFixed:!0,fit:!0,className:(0,classnames_1.default)(c),style:f||{}},M||{}),N),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!b},function(){return react_1.default.createElement(fixed_1.default,__assign({className:(0,classnames_1.default)(u),style:s||{},fit:!0},P||{}),b)})))})},[N,m,p,S,v,y,h,i,n,E,c,f,M,b,u,s,P]),j=(0,react_1.useMemo)(function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!g},function(){return react_1.default.createElement(fixed_1.default,__assign({className:(0,classnames_1.default)(l),style:o||{},fit:!0},O||{}),g)})},[g,l,o,O]);return react_1.default.createElement(flexlayout_1.default,{className:(0,classnames_1.default)(t),style:a||{},direction:"horizontal"},e,r,j)};exports.default=(0,react_1.memo)(HorizontalFlexLayout);
//# sourceMappingURL=horizontalFlexLayout.js.map
