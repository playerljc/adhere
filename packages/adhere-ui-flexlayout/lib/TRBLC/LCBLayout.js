"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,a,l){void 0===l&&(l=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&("get"in r?t.__esModule:!r.writable&&!r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,l,r)}:function(e,t,a,l){e[l=void 0===l?a:l]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=function(e,t){var a={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),omit_js_1=__importDefault(require("omit.js")),react_1=__importStar(require("react")),auto_1=__importDefault(require("../auto")),fixed_1=__importDefault(require("../fixed")),flexlayout_1=__importStar(require("../flexlayout")),LCBLayout=function(e,t){var a=e.wrapClassName,l=e.wrapStyle,r=e.autoWrapProps,o=e.autoInnerProps,n=e.lProps,u=e.lSplit,i=e.cProps,c=e.bProps,s=e.bSplit,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","lProps","lSplit","cProps","bProps","bSplit"]),_=(0,omit_js_1.default)(n,["children"]),f=(0,omit_js_1.default)(i,["children"]),d=(0,omit_js_1.default)(c,["children"]),p=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-no-autofix")]=i&&"autoFixed"in i&&!i.autoFixed,e),null!=a?a:"")},[i]),m=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc-auto"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-no-autofix")]=r&&"autoFixed"in r&&!r.autoFixed,e),null!=(e=null==r?void 0:r.className)?e:"")},[r]),x=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-horizontal-flex-layout"),"".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner-no-autofix")]=o&&"autoFixed"in o&&!o.autoFixed,e),null!=(e=null==o?void 0:o.className)?e:"")},[o]);return react_1.default.createElement("div",{ref:t,className:p,style:null!=l?l:{}},react_1.default.createElement(flexlayout_1.default,__assign({},null!=e?e:{},{className:(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-lcb-layout"),null!=(t=null==e?void 0:e.className)?t:""),direction:"vertical"}),react_1.default.createElement(auto_1.default,__assign({},null!=r?r:{},{fit:!1,className:m}),react_1.default.createElement(flexlayout_1.default,__assign({},null!=o?o:{},{className:x,direction:"horizontal"}),react_1.default.createElement(fixed_1.default,__assign({},null!=_?_:{}),null==n?void 0:n.children),u,react_1.default.createElement(auto_1.default,__assign({},null!=f?f:{}),null==i?void 0:i.children))),s,react_1.default.createElement(fixed_1.default,__assign({},null!=d?d:{}),null==c?void 0:c.children)))};exports.default=(0,react_1.memo)((0,react_1.forwardRef)(LCBLayout));
//# sourceMappingURL=LCBLayout.js.map
