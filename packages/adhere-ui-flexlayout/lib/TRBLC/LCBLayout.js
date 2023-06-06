"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,l)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=function(e,t){var a={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]]);return a},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),omit_js_1=__importDefault(require("omit.js")),react_1=__importStar(require("react")),auto_1=__importDefault(require("../auto")),fixed_1=__importDefault(require("../fixed")),flexlayout_1=__importStar(require("../flexlayout")),LCBLayout=function(e){var t=e.wrapClassName,a=e.wrapStyle,r=e.autoWrapProps,l=e.autoInnerProps,o=e.lProps,n=e.cProps,u=e.bProps,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","lProps","cProps","bProps"]),c=(0,omit_js_1.default)(o,["render"]),i=(0,omit_js_1.default)(n,["render"]),s=(0,omit_js_1.default)(u,["render"]),_=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-no-autofix")]=n&&"autoFixed"in n&&!n.autoFixed,e),t)},[n]),f=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc-auto"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-no-autofix")]=r&&"autoFixed"in r&&!r.autoFixed,e),null==r?void 0:r.className)},[r]),d=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-horizontal-flex-layout"),"".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner-no-autofix")]=l&&"autoFixed"in l&&!l.autoFixed,e),null==l?void 0:l.className)},[l]);return react_1.default.createElement("div",{className:_,style:null!=a?a:{}},react_1.default.createElement(flexlayout_1.default,__assign({},null!=e?e:{},{className:(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-lcb-layout"),null==e?void 0:e.className),direction:"vertical"}),react_1.default.createElement(auto_1.default,__assign({},null!=r?r:{},{fit:!1,className:f}),react_1.default.createElement(flexlayout_1.default,__assign({},null!=l?l:{},{className:d,direction:"horizontal"}),react_1.default.createElement(fixed_1.default,__assign({},null!=c?c:{}),null==(_=null==o?void 0:o.render)?void 0:_.call(o)),react_1.default.createElement(auto_1.default,__assign({},null!=i?i:{}),null==(a=null==n?void 0:n.render)?void 0:a.call(n)))),react_1.default.createElement(fixed_1.default,__assign({},null!=s?s:{}),null==(e=null==u?void 0:u.render)?void 0:e.call(u))))};exports.default=LCBLayout;
//# sourceMappingURL=LCBLayout.js.map
