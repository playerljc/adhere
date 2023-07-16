"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,l=1,r=arguments.length;l<r;l++)for(var a in t=arguments[l])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,l,r){void 0===r&&(r=l);var a=Object.getOwnPropertyDescriptor(t,l);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[l]}}),Object.defineProperty(e,r,a)}:function(e,t,l,r){e[r=void 0===r?l:r]=t[l]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)"default"!==l&&Object.prototype.hasOwnProperty.call(e,l)&&__createBinding(t,e,l);return __setModuleDefault(t,e),t},__rest=function(e,t){var l={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(l[a[r]]=e[a[r]]);return l},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),omit_js_1=__importDefault(require("omit.js")),react_1=__importStar(require("react")),auto_1=__importDefault(require("../auto")),fixed_1=__importDefault(require("../fixed")),flexlayout_1=__importStar(require("../flexlayout")),LTCBLayout=function(e){var t=e.wrapClassName,l=e.wrapStyle,r=e.autoWrapProps,a=e.autoInnerProps,o=e.lProps,n=e.lSplit,u=e.tProps,i=e.tSplit,c=e.bProps,s=e.bSplit,_=e.cProps,e=__rest(e,["wrapClassName","wrapStyle","autoWrapProps","autoInnerProps","lProps","lSplit","tProps","tSplit","bProps","bSplit","cProps"]),f=(0,omit_js_1.default)(o,["render"]),d=(0,omit_js_1.default)(u,["render"]),p=(0,omit_js_1.default)(c,["render"]),m=(0,omit_js_1.default)(_,["render"]),x=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-no-autofix")]=_&&"autoFixed"in _&&!_.autoFixed,e),null!=t?t:"")},[_]),y=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc-auto"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-no-autofix")]=r&&"autoFixed"in r&&!r.autoFixed,e),null!=(e=null==r?void 0:r.className)?e:"")},[r]),b=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner"),((e={})["".concat(flexlayout_1.selectorPrefix,"-trblc-auto-inner-no-autofix")]=a&&"autoFixed"in a&&!a.autoFixed,e),null!=(e=null==a?void 0:a.className)?e:"")},[a]);return react_1.default.createElement("div",{className:x,style:null!=l?l:{}},react_1.default.createElement(flexlayout_1.default,__assign({},null!=e?e:{},{className:(0,classnames_1.default)("".concat(flexlayout_1.selectorPrefix,"-ltcb-layout"),null!=(x=null==e?void 0:e.className)?x:""),direction:"horizontal"}),react_1.default.createElement(fixed_1.default,__assign({},null!=f?f:{}),null==(l=null==o?void 0:o.render)?void 0:l.call(o)),n,react_1.default.createElement(auto_1.default,__assign({},null!=r?r:{},{fit:!1,className:y}),react_1.default.createElement(flexlayout_1.default,__assign({},null!=a?a:{},{className:b,direction:"vertical"}),react_1.default.createElement(fixed_1.default,__assign({},null!=d?d:{}),null==(e=null==u?void 0:u.render)?void 0:e.call(u)),i,react_1.default.createElement(auto_1.default,__assign({},null!=m?m:{}),null==(x=null==_?void 0:_.render)?void 0:x.call(_)),s,react_1.default.createElement(fixed_1.default,__assign({},null!=p?p:{}),null==(f=null==c?void 0:c.render)?void 0:f.call(c))))))};exports.default=LTCBLayout;
//# sourceMappingURL=LTCBLayout.js.map
