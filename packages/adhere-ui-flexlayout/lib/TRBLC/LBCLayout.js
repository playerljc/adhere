"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,l)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=function(e,t){var a={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]]);return a},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),omit_js_1=__importDefault(require("omit.js")),react_1=__importStar(require("react")),auto_1=__importDefault(require("../auto")),fixed_1=__importDefault(require("../fixed")),flexlayout_1=__importStar(require("../flexlayout")),LBCLayout=function(e,t){var a=e.wrapClassName,r=e.wrapStyle,l=e.autoWrapProps,o=e.autoInnerProps,n=e.lProps,u=e.lSplit,i=e.bProps,c=e.bSplit,s=e.cProps,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","lProps","lSplit","bProps","bSplit","cProps"]),_=(0,omit_js_1.default)(n,["children"]),f=(0,omit_js_1.default)(i,["children"]),d=(0,omit_js_1.default)(s,["children"]),p=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-no-autofix")]=s&&"autoFixed"in s&&!s.autoFixed,e),null!=a?a:"")},[s]),m=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc-auto"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-no-autofix")]=l&&"autoFixed"in l&&!l.autoFixed,e),null!=(e=null==l?void 0:l.className)?e:"")},[l]),x=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner-no-autofix")]=o&&"autoFixed"in o&&!o.autoFixed,e),null!=(e=null==o?void 0:o.className)?e:"")},[o]);return react_1.default.createElement("div",{ref:t,className:p,style:null!=r?r:{}},react_1.default.createElement(flexlayout_1.default,__assign({},null!=e?e:{},{className:(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-lbc-layout"),null!=(t=null==e?void 0:e.className)?t:""),direction:"horizontal"}),react_1.default.createElement(fixed_1.default,__assign({},null!=_?_:{}),null==n?void 0:n.children),u,react_1.default.createElement(auto_1.default,__assign({},null!=l?l:{},{fit:!1,className:m}),react_1.default.createElement(flexlayout_1.default,__assign({},null!=o?o:{},{className:x,direction:"vertical"}),react_1.default.createElement(auto_1.default,__assign({},null!=d?d:{}),null==s?void 0:s.children),c,react_1.default.createElement(fixed_1.default,__assign({},null!=f?f:{}),null==i?void 0:i.children)))))};exports.default=(0,react_1.memo)((0,react_1.forwardRef)(LBCLayout));
//# sourceMappingURL=LBCLayout.js.map
