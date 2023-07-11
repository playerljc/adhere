"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var l=Object.getOwnPropertyDescriptor(t,r);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,l)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(r[l[a]]=e[l[a]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),omit_js_1=__importDefault(require("omit.js")),react_1=__importStar(require("react")),auto_1=__importDefault(require("../auto")),fixed_1=__importDefault(require("../fixed")),flexlayout_1=__importStar(require("../flexlayout")),CRBLayout=function(e){var t=e.wrapClassName,r=e.wrapStyle,a=e.autoWrapProps,l=e.autoInnerProps,o=e.rProps,n=e.cProps,u=e.bProps,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","rProps","cProps","bProps"]),c=(0,omit_js_1.default)(o,["render"]),i=(0,omit_js_1.default)(n,["render"]),s=(0,omit_js_1.default)(u,["render"]),_=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-no-autofix")]=n&&"autoFixed"in n&&!n.autoFixed,e),null!=t?t:"")},[n]),f=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc-auto"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-no-autofix")]=a&&"autoFixed"in a&&!a.autoFixed,e),null!=(e=null==a?void 0:a.className)?e:"")},[a]),d=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-horizontal-flex-layout"),"".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner-no-autofix")]=l&&"autoFixed"in l&&!l.autoFixed,e),null!=(e=null==l?void 0:l.className)?e:"")},[l]);return react_1.default.createElement("div",{className:_,style:null!=r?r:{}},react_1.default.createElement(flexlayout_1.default,__assign({},null!=e?e:{},{className:(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-crb-layout"),null!=(_=null==e?void 0:e.className)?_:""),direction:"vertical"}),react_1.default.createElement(auto_1.default,__assign({},null!=a?a:{},{fit:!1,className:f}),react_1.default.createElement(flexlayout_1.default,__assign({},null!=l?l:{},{className:d,direction:"horizontal"}),react_1.default.createElement(auto_1.default,__assign({},null!=i?i:{}),null==(r=null==n?void 0:n.render)?void 0:r.call(n)),react_1.default.createElement(fixed_1.default,__assign({},null!=c?c:{}),null==(e=null==o?void 0:o.render)?void 0:e.call(o)))),react_1.default.createElement(fixed_1.default,__assign({},null!=s?s:{}),null==(_=null==u?void 0:u.render)?void 0:_.call(u))))};exports.default=CRBLayout;
//# sourceMappingURL=CRBLayout.js.map
