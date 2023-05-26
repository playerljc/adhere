"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,o){void 0===o&&(o=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,a)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0,__importDefault(require("classnames"))),react_1=__importStar(require("react")),TRBLC=__importStar(require("./TRBLC")),auto_1=__importDefault(require("./auto")),backLayout_1=__importDefault(require("./backLayout")),context_1=require("./context"),fixed_1=__importDefault(require("./fixed")),horizontalFlexLayout_1=__importDefault(require("./horizontalFlexLayout")),scrollLayout_1=__importStar(require("./scrollLayout")),toolBarLayout_1=__importDefault(require("./toolBarLayout")),verticalFlexLayout_1=__importDefault(require("./verticalFlexLayout")),FlexLayout=(exports.selectorPrefix="adhere-ui-flexlayout",function(r,e){function o(){return{}}function a(){Array.isArray(i)?1===i.length?(e=i[0],t=i[0]):2===i.length&&(e=i[0],t=i[1]):t=e=i;var e,t="".concat(t/2,"px");return{rowGap:"".concat(e,"px"),marginLeft:"-".concat(t),marginRight:"-".concat(t)}}var t=r.className,l=void 0===t?"":t,t=r.style,u=void 0===t?{}:t,t=r.direction,n=void 0===t?"vertical":t,i=r.gutter,t=r.children,c=__rest(r,["className","style","direction","gutter","children"]),_=(0,react_1.useMemo)(function(){return(0,classnames_1.default)(exports.selectorPrefix,l,"".concat(exports.selectorPrefix,"-").concat(n))},[l,n]),s=(0,react_1.useMemo)(function(){var e=u||{},t="gutter"in r?null==(t=new Map([["horizontal",a],["vertical",o]]).get(n))?void 0:t():{};return __assign(__assign({},e),t)},[u,i]);return react_1.default.createElement(context_1.FlexContext.Provider,{value:{gutter:i,direction:n,children:t}},react_1.default.createElement("div",__assign({ref:e},c,{className:_,style:s}),t))}),MemoWrap=(0,react_1.memo)((0,react_1.forwardRef)(FlexLayout));MemoWrap.selectorPrefix=exports.selectorPrefix,MemoWrap.Context=context_1.FlexContext,MemoWrap.Fixed=fixed_1.default,MemoWrap.Auto=auto_1.default,MemoWrap.HorizontalFlexLayout=horizontalFlexLayout_1.default,MemoWrap.VerticalFlexLayout=verticalFlexLayout_1.default,MemoWrap.ToolBarLayout=toolBarLayout_1.default,MemoWrap.BackLayout=backLayout_1.default,MemoWrap.ScrollLayout=scrollLayout_1.default,MemoWrap.useScrollLayout=scrollLayout_1.useScrollLayout,MemoWrap.ScrollLayoutContext=scrollLayout_1.ScrollLayoutContext,MemoWrap.TRBLC=TRBLC,exports.default=MemoWrap;
//# sourceMappingURL=flexlayout.js.map
