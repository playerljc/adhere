"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_ui_configprovider_1=__importDefault(require("@baifendian/adhere-ui-configprovider")),Context_1=require("./Context"),Hooks_1=require("./Hooks"),Util_1=require("./Util"),selectorPrefix="adhere-ui-flex-layout-auto",Auto=(0,react_1.memo)((0,react_1.forwardRef)(function(e,t){var r=e.children,o=e.className,n=void 0===o?"":o,o=e.style,i=void 0===o?{}:o,o=e.autoFixed,a=void 0===o||o,o=e.fit,u=void 0===o||o,o=__rest(e,["children","className","style","autoFixed","fit"]),c=(0,react_1.useContext)(adhere_ui_configprovider_1.default.Context).media,e=(0,react_1.useContext)(Context_1.FlexContext),l=e.gutter,s=void 0===l?0:l,_=e.direction,f=e.children,d=(0,Hooks_1.useGap)(s),l=(0,react_1.useMemo)(function(){var e;return(0,classnames_1.default)(selectorPrefix,n,((e={})["".concat(selectorPrefix,"-auto-fixed")]=a,e["".concat(selectorPrefix,"-fit")]=u,e["".concat(selectorPrefix,"-gap")]=d,e))},[n,a,u]),e=(0,react_1.useMemo)(function(){var e=null!=i?i:{},t=d?(0,Util_1.getGridStyle)({gutter:s,span:null,children:f,direction:_,media:c}):{};return __assign(__assign({},e),t)},[i,s]);return react_1.default.createElement("div",__assign({ref:t},o,{className:l,style:e}),r)}));Auto.displayName="Auto",exports.default=Auto;
//# sourceMappingURL=Auto.js.map
