"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,l){void 0===l&&(l=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,l,a)}:function(e,t,r,l){e[l=void 0===l?r:l]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),omit_js_1=__importDefault(require("omit.js")),react_1=__importStar(require("react")),auto_1=__importDefault(require("../auto")),fixed_1=__importDefault(require("../fixed")),flexlayout_1=__importStar(require("../flexlayout")),TBLCRLayout=function(e){var t=e.wrapClassName,r=e.wrapStyle,l=e.autoWrapProps,a=e.autoInnerProps,o=e.tProps,n=e.lProps,u=e.rProps,i=e.cProps,c=e.bProps,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","tProps","lProps","rProps","cProps","bProps"]),s=(0,omit_js_1.default)(o,["render"]),_=(0,omit_js_1.default)(c,["render"]),f=(0,omit_js_1.default)(n,["render"]),d=(0,omit_js_1.default)(u,["render"]),p=(0,omit_js_1.default)(i,["render"]),m=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-no-autofix")]=i&&"autoFixed"in i&&!i.autoFixed,e),t)},[i]),x=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc-auto"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-no-autofix")]=l&&"autoFixed"in l&&!l.autoFixed,e),null==l?void 0:l.className)},[l]),y=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-horizontal-flex-layout"),"".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner-no-autofix")]=a&&"autoFixed"in a&&!a.autoFixed,e),null==a?void 0:a.className)},[a]);return react_1.default.createElement("div",{className:m,style:null!=r?r:{}},react_1.default.createElement(flexlayout_1.default,__assign({},null!=e?e:{},{className:(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-tblcr-layout"),null==e?void 0:e.className),direction:"vertical"}),react_1.default.createElement(fixed_1.default,__assign({},null!=s?s:{}),null==(m=null==o?void 0:o.render)?void 0:m.call(o)),react_1.default.createElement(auto_1.default,__assign({},null!=l?l:{},{fit:!1,className:x}),react_1.default.createElement(flexlayout_1.default,__assign({},null!=a?a:{},{className:y,direction:"horizontal"}),react_1.default.createElement(fixed_1.default,__assign({},null!=f?f:{}),null==(r=null==n?void 0:n.render)?void 0:r.call(n)),react_1.default.createElement(auto_1.default,__assign({},null!=p?p:{}),null==(e=null==i?void 0:i.render)?void 0:e.call(i)),react_1.default.createElement(fixed_1.default,__assign({},null!=d?d:{}),null==(s=null==u?void 0:u.render)?void 0:s.call(u)))),react_1.default.createElement(fixed_1.default,__assign({},null!=_?_:{}),null==(m=null==c?void 0:c.render)?void 0:m.call(c))))};exports.default=TBLCRLayout;
//# sourceMappingURL=TBLCRLayout.js.map
