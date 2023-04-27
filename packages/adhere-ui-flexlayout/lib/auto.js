"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),context_1=require("./context"),hooks_1=require("./hooks"),util_1=require("./util"),selectorPrefix="adhere-ui-flexlayout-auto",Auto=function(e){var t=e.children,r=e.className,o=void 0===r?"":r,r=e.style,n=void 0===r?{}:r,r=e.autoFixed,i=void 0===r||r,r=e.fit,a=void 0===r||r,r=__rest(e,["children","className","style","autoFixed","fit"]),e=(0,react_1.useContext)(context_1.FlexContext),u=e.gutter,c=void 0===u?0:u,l=e.direction,s=e.children,_=(0,hooks_1.useGap)(c),u=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)(selectorPrefix,o,((e={})["".concat(selectorPrefix,"-autoFixed")]=i,e["".concat(selectorPrefix,"-fit")]=a,e["".concat(selectorPrefix,"-gap")]=_,e))},[o,i,a]),e=(0,react_1.useMemo)(function(){var e=n||{},t=_?(0,util_1.getGridStyle)({gutter:c,span:null,children:s,direction:l}):{};return __assign(__assign({},e),t)},[n,c]);return react_1.default.createElement("div",__assign({},r,{className:u,style:e}),t)};exports.default=(0,react_1.memo)(Auto);
//# sourceMappingURL=auto.js.map
