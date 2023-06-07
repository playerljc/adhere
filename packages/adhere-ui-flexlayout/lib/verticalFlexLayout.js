"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,l)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=function(e,t){var a={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]]);return a},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),auto_1=__importDefault(require("./auto")),fixed_1=__importDefault(require("./fixed")),flexlayout_1=__importDefault(require("./flexlayout")),VerticalFlexLayout=function(e){var t=e.className,t=void 0===t?"":t,a=e.style,a=void 0===a?{}:a,r=e.topClassName,l=void 0===r?"":r,r=e.topStyle,n=void 0===r?{}:r,r=e.rightClassName,o=void 0===r?"":r,r=e.rightStyle,i=void 0===r?{}:r,r=e.bottomClassName,u=void 0===r?"":r,r=e.bottomStyle,s=void 0===r?{}:r,r=e.leftClassName,d=void 0===r?"":r,r=e.leftStyle,c=void 0===r?{}:r,r=e.mainClassName,_=void 0===r?"":r,r=e.mainStyle,f=void 0===r?{}:r,r=e.mainAutoWrapClassName,m=void 0===r?"":r,r=e.mainAutoStyle,p=void 0===r?{}:r,r=e.mainWrapClassName,y=void 0===r?"":r,r=e.mainWrapStyle,v=void 0===r?{}:r,g=e.renderTop,b=e.renderRight,h=e.renderBottom,N=e.renderLeft,O=e.renderMain,r=e.topProps,P=void 0===r?{}:r,r=e.rightProps,x=void 0===r?{}:r,r=e.bottomProps,S=void 0===r?{}:r,r=e.leftProps,C=void 0===r?{}:r,r=e.mainProps,E=void 0===r?{}:r,r=e.mainAutoWrapProps,j=void 0===r?{}:r,r=(e.children,__rest(e,["className","style","topClassName","topStyle","rightClassName","rightStyle","bottomClassName","bottomStyle","leftClassName","leftStyle","mainClassName","mainStyle","mainAutoWrapClassName","mainAutoStyle","mainWrapClassName","mainWrapStyle","renderTop","renderRight","renderBottom","renderLeft","renderMain","topProps","rightProps","bottomProps","leftProps","mainProps","mainAutoWrapProps","children"])),e=(0,react_1.useMemo)(function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!g},function(){return react_1.default.createElement(fixed_1.default,__assign({className:(0,classnames_1.default)(l),style:null!=n?n:{},fit:!0},null!=P?P:{}),g)})},[g,l,n,P]),M=(0,react_1.useMemo)(function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!O},function(){return react_1.default.createElement(auto_1.default,__assign({className:(0,classnames_1.default)(m),style:null!=p?p:{},fit:!0,autoFixed:!0},null!=j?j:{}),react_1.default.createElement(flexlayout_1.default,{direction:"horizontal",className:(0,classnames_1.default)(y),style:null!=v?v:{}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!N},function(){return react_1.default.createElement(fixed_1.default,__assign({className:(0,classnames_1.default)(d),style:null!=c?c:{},fit:!0},null!=C?C:{}),N)}),react_1.default.createElement(auto_1.default,__assign({autoFixed:!0,fit:!0,className:(0,classnames_1.default)(_),style:null!=f?f:{}},null!=E?E:{}),O),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!b},function(){return react_1.default.createElement(fixed_1.default,__assign({className:(0,classnames_1.default)(o),style:null!=i?i:{},fit:!0},null!=x?x:{}),b)})))})},[O,m,p,j,y,v,N,d,c,C,_,f,E,b,o,i,x]),D=(0,react_1.useMemo)(function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!h},function(){return react_1.default.createElement(fixed_1.default,__assign({className:(0,classnames_1.default)(u),style:null!=s?s:{},fit:!0},null!=S?S:{}),h)})},[h,u,s,S]);return react_1.default.createElement(flexlayout_1.default,__assign({},r,{className:(0,classnames_1.default)(t),style:null!=a?a:{},direction:"vertical"}),e,M,D)};exports.default=VerticalFlexLayout;
//# sourceMappingURL=verticalFlexLayout.js.map
