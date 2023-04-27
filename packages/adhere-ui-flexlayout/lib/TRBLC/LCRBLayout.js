"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var l=Object.getOwnPropertyDescriptor(t,r);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,l)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(r[l[a]]=e[l[a]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),omit_js_1=__importDefault(require("omit.js")),react_1=__importDefault(require("react")),auto_1=__importDefault(require("../auto")),fixed_1=__importDefault(require("../fixed")),flexlayout_1=__importStar(require("../flexlayout")),LCRBLayout=function(e){var t=e.lProps,r=e.rProps,a=e.cProps,l=e.bProps,o=e.autoWrapProps,n=e.autoInnerProps,e=__rest(e,["lProps","rProps","cProps","bProps","autoWrapProps","autoInnerProps"]),u=(0,omit_js_1.default)(t,["render"]),i=(0,omit_js_1.default)(r,["render"]),_=(0,omit_js_1.default)(a,["render"]),s=(0,omit_js_1.default)(l,["render"]);return react_1.default.createElement(flexlayout_1.default,__assign({},e||{},{className:(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-lcrb-layout"),null==e?void 0:e.className),direction:"vertical"}),react_1.default.createElement(auto_1.default,__assign({},o||{},{fit:!1}),react_1.default.createElement(flexlayout_1.default,__assign({},n||{},{className:(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc-layout-auto-inner"),null==o?void 0:o.className),direction:"horizontal"}),react_1.default.createElement(fixed_1.default,__assign({},u||{}),null==(e=null==t?void 0:t.render)?void 0:e.call(t)),react_1.default.createElement(auto_1.default,__assign({},_||{}),null==(n=null==a?void 0:a.render)?void 0:n.call(a)),react_1.default.createElement(fixed_1.default,__assign({},i||{}),null==(o=null==r?void 0:r.render)?void 0:o.call(r)))),react_1.default.createElement(fixed_1.default,__assign({},s||{}),null==(u=null==l?void 0:l.render)?void 0:u.call(l)))};exports.default=LCRBLayout;
//# sourceMappingURL=LCRBLayout.js.map
