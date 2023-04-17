"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.gridCount=void 0,__importDefault(require("classnames"))),react_1=__importStar(require("react")),context_1=require("./context"),hooks_1=require("./hooks"),util_1=require("./util"),selectorPrefix="adhere-ui-flexlayout-fixed",Fixed=(exports.gridCount=24,function(t){var r=t.className,e=t.children,n=t.style,o=t.fit,a=t.span,i=__rest(t,["className","children","style","fit","span"]),c=(0,react_1.useContext)(context_1.FlexContext),s=c.gutter,u=void 0===s?0:s,l=c.direction,_=c.children,f=(0,hooks_1.useGrid)(t),d=(0,hooks_1.useGap)(u),s=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)(selectorPrefix,r,((e={})["".concat(selectorPrefix,"-fit")]=o,e["".concat(selectorPrefix,"-col-").concat(t.span)]=f,e["".concat(selectorPrefix,"-gap")]=d,e))},[r,t.span,o]),c=(0,react_1.useMemo)(function(){var e=n||{},t=f?(0,util_1.getGridStyle)({gutter:u,span:a,children:_,direction:l}):{};return __assign(__assign({},e),t)},[n,u]);return react_1.default.createElement("div",__assign({className:s,style:c},i),e)});exports.default=(0,react_1.memo)(Fixed);
//# sourceMappingURL=fixed.js.map
