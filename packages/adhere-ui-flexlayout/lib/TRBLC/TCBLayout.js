"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var l=Object.getOwnPropertyDescriptor(t,r);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,l)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(r[l[a]]=e[l[a]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),omit_js_1=__importDefault(require("omit.js")),react_1=__importStar(require("react")),Auto_1=__importDefault(require("../Auto")),Fixed_1=__importDefault(require("../Fixed")),FlexLayout_1=__importDefault(require("../FlexLayout")),FlexLayout_2=require("../FlexLayout"),TCBLayout=(0,react_1.memo)((0,react_1.forwardRef)(function(e,t){var r=e.wrapClassName,a=e.wrapStyle,l=e.tProps,o=e.tSplit,u=e.cProps,n=e.bProps,i=e.bSplit,e=__rest(e,["wrapClassName","wrapStyle","tProps","tSplit","cProps","bProps","bSplit"]),c=(0,omit_js_1.default)(l,["children"]),_=(0,omit_js_1.default)(u,["children"]),s=(0,omit_js_1.default)(n,["children"]),f=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)("".concat(FlexLayout_2.selectorPrefix,"-trblc"),((e={})["".concat(FlexLayout_2.selectorPrefix,"-trblc-no-autofix")]=u&&"autoFixed"in u&&!u.autoFixed,e),null!=r?r:"")},[u]);return react_1.default.createElement("div",{ref:t,className:f,style:null!=a?a:{}},react_1.default.createElement(FlexLayout_1.default,__assign({},null!=e?e:{},{className:(0,classnames_1.default)("".concat(FlexLayout_2.selectorPrefix,"-tc-layout"),null!=(t=null==e?void 0:e.className)?t:""),direction:"vertical"}),react_1.default.createElement(Fixed_1.default,__assign({},null!=c?c:{}),null==l?void 0:l.children),o,react_1.default.createElement(Auto_1.default,__assign({},null!=_?_:{}),null==u?void 0:u.children),i,react_1.default.createElement(Fixed_1.default,__assign({},null!=s?s:{}),null==n?void 0:n.children)))}));TCBLayout.displayName="TCBLayout",exports.default=TCBLayout;
//# sourceMappingURL=TCBLayout.js.map
