"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,l=1,a=arguments.length;l<a;l++)for(var r in t=arguments[l])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,l,a){void 0===a&&(a=l);var r=Object.getOwnPropertyDescriptor(t,l);r&&("get"in r?t.__esModule:!r.writable&&!r.configurable)||(r={enumerable:!0,get:function(){return t[l]}}),Object.defineProperty(e,a,r)}:function(e,t,l,a){e[a=void 0===a?l:a]=t[l]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)"default"!==l&&Object.prototype.hasOwnProperty.call(e,l)&&__createBinding(t,e,l);return __setModuleDefault(t,e),t},__rest=function(e,t){var l={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(l[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(l[r[a]]=e[r[a]]);return l},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),omit_js_1=__importDefault(require("omit.js")),react_1=__importStar(require("react")),auto_1=__importDefault(require("../auto")),fixed_1=__importDefault(require("../fixed")),flexlayout_1=__importStar(require("../flexlayout")),LTCBLayout=function(e,t){var l=e.wrapClassName,a=e.wrapStyle,r=e.autoWrapProps,o=e.autoInnerProps,n=e.lProps,u=e.lSplit,i=e.tProps,c=e.tSplit,s=e.bProps,_=e.bSplit,f=e.cProps,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","lProps","lSplit","tProps","tSplit","bProps","bSplit","cProps"]),d=(0,omit_js_1.default)(n,["children"]),p=(0,omit_js_1.default)(i,["children"]),m=(0,omit_js_1.default)(s,["children"]),x=(0,omit_js_1.default)(f,["children"]),y=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-no-autofix")]=f&&"autoFixed"in f&&!f.autoFixed,e),null!=l?l:"")},[f]),b=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc-auto"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-no-autofix")]=r&&"autoFixed"in r&&!r.autoFixed,e),null!=(e=null==r?void 0:r.className)?e:"")},[r]),P=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner-no-autofix")]=o&&"autoFixed"in o&&!o.autoFixed,e),null!=(e=null==o?void 0:o.className)?e:"")},[o]);return react_1.default.createElement("div",{ref:t,className:y,style:null!=a?a:{}},react_1.default.createElement(flexlayout_1.default,__assign({},null!=e?e:{},{className:(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-ltcb-layout"),null!=(t=null==e?void 0:e.className)?t:""),direction:"horizontal"}),react_1.default.createElement(fixed_1.default,__assign({},null!=d?d:{}),null==n?void 0:n.children),u,react_1.default.createElement(auto_1.default,__assign({},null!=r?r:{},{fit:!1,className:b}),react_1.default.createElement(flexlayout_1.default,__assign({},null!=o?o:{},{className:P,direction:"vertical"}),react_1.default.createElement(fixed_1.default,__assign({},null!=p?p:{}),null==i?void 0:i.children),c,react_1.default.createElement(auto_1.default,__assign({},null!=x?x:{}),null==f?void 0:f.children),_,react_1.default.createElement(fixed_1.default,__assign({},null!=m?m:{}),null==s?void 0:s.children)))))};exports.default=(0,react_1.memo)((0,react_1.forwardRef)(LTCBLayout));
//# sourceMappingURL=LTCBLayout.js.map
