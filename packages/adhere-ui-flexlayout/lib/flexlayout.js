"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,o){void 0===o&&(o=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,a)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0,__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_ui_configprovider_1=__importDefault(require("@baifendian/adhere-ui-configprovider")),Auto_1=__importDefault(require("./Auto")),BackLayout_1=__importDefault(require("./BackLayout")),Context_1=require("./Context"),Fixed_1=__importDefault(require("./Fixed")),HorizontalFlexLayout_1=__importDefault(require("./HorizontalFlexLayout")),ScrollLayout_1=__importStar(require("./ScrollLayout")),TRBLC=__importStar(require("./TRBLC")),ToolBarLayout_1=__importDefault(require("./ToolBarLayout")),Util_1=require("./Util"),VerticalFlexLayout_1=__importDefault(require("./VerticalFlexLayout")),InternalFlexLayout=(exports.selectorPrefix="adhere-ui-flex-layout",(0,react_1.memo)((0,react_1.forwardRef)(function(r,e){var t=r.className,o=void 0===t?"":t,t=r.style,a=void 0===t?{}:t,t=r.direction,l=void 0===t?"vertical":t,u=r.gutter,t=r.children,i=__rest(r,["className","style","direction","gutter","children"]),n=(0,react_1.useContext)(adhere_ui_configprovider_1.default.Context).media,c=(0,react_1.useCallback)(function(){return{}},[]),_=(0,react_1.useCallback)(function(){var e=0,t=0,t=(Array.isArray(u)?1===u.length?(e=u[0],t=u[0]):2===u.length&&(e=u[0],t=u[1]):t=e=u,(0,Util_1.getValueWithUnit)(t/2,n));return{rowGap:(0,Util_1.getValueWithUnit)(e,n),marginLeft:"-".concat(t),marginRight:"-".concat(t)}},[u]),f=(0,react_1.useCallback)(function(){var e;return null==(e=new Map([["horizontal",_],["vertical",c]]).get(l))?void 0:e()},[l,_,c]),s=(0,react_1.useMemo)(function(){return(0,classnames_1.default)(exports.selectorPrefix,o,"".concat(exports.selectorPrefix,"-").concat(l))},[o,l]),y=(0,react_1.useMemo)(function(){var e=null!=a?a:{},t="gutter"in r?f():{};return __assign(__assign({},e),t)},[a,u]);return react_1.default.createElement(Context_1.FlexContext.Provider,{value:{gutter:u,direction:l,children:t}},react_1.default.createElement("div",__assign({ref:e},i,{className:s,style:y}),t))}))),FlexLayout=InternalFlexLayout;FlexLayout.displayName="FlexLayout",FlexLayout.selectorPrefix=exports.selectorPrefix,FlexLayout.Context=Context_1.FlexContext,FlexLayout.Fixed=Fixed_1.default,FlexLayout.Auto=Auto_1.default,FlexLayout.HorizontalFlexLayout=HorizontalFlexLayout_1.default,FlexLayout.VerticalFlexLayout=VerticalFlexLayout_1.default,FlexLayout.ToolBarLayout=ToolBarLayout_1.default,FlexLayout.BackLayout=BackLayout_1.default,FlexLayout.ScrollLayout=ScrollLayout_1.default,FlexLayout.useScrollLayout=ScrollLayout_1.useScrollLayout,FlexLayout.ScrollLayoutContext=ScrollLayout_1.ScrollLayoutContext,FlexLayout.TRBLC=TRBLC,exports.default=FlexLayout;
//# sourceMappingURL=FlexLayout.js.map
