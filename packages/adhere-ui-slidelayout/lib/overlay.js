"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var l=Object.getOwnPropertyDescriptor(t,r);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,l)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),slidelayout_1=require("./slidelayout"),useSlide_1=__importDefault(require("./useSlide")),selectorPrefix="adhere-ui-slidelayout-overlay",Overlay=function(n,e){var t=n.className,t=void 0===t?"":t,r=n.style,r=void 0===r?{}:r,l=n.zIndex,l=void 0===l?9999:l,i=n.direction,i=void 0===i?"left":i,u=n.onAfterShow,o=n.onAfterClose,c=n.children,a=(0,react_1.useRef)(null),s=(0,react_1.useRef)({init:{left:function(){return(0,slidelayout_1.slider)(a.current,"-100%","0","0","0")},right:function(){var e;return(0,slidelayout_1.slider)(a.current,"".concat(null==(e=null==(e=a.current)?void 0:e.parentElement)?void 0:e.offsetWidth,"px"),"0","0","0")},top:function(){return(0,slidelayout_1.slider)(a.current,"0","-100%","0","0")},bottom:function(){var e;return(0,slidelayout_1.slider)(a.current,"0","".concat(null==(e=null==(e=a.current)?void 0:e.parentElement)?void 0:e.offsetHeight,"px"),"0","0")}},show:{left:function(e){(0,slidelayout_1.slider)(a.current,"0","0","0","".concat(d(e),"ms"),u),f.current&&(f.current.style.display="block")},right:function(e){var t;(0,slidelayout_1.slider)(a.current,"".concat((null==(t=a.current)?void 0:t.parentElement).offsetWidth-a.current.offsetWidth,"px"),"0","0","".concat(d(e),"ms"),u),f.current&&(f.current.style.display="block")},top:function(e){(0,slidelayout_1.slider)(a.current,"0","0","0","".concat(d(e),"ms"),u),f.current&&(f.current.style.display="block")},bottom:function(e){var t;(0,slidelayout_1.slider)(a.current,"0","".concat((null==(t=a.current)?void 0:t.parentElement).offsetHeight-a.current.offsetHeight,"px"),"0","".concat(d(e),"ms"),u),f.current&&(f.current.style.display="block")}},close:{left:function(e){(0,slidelayout_1.slider)(a.current,"-100%","0","0","".concat(d(e),"ms"),o),f.current&&(f.current.style.display="none")},right:function(e){var t;(0,slidelayout_1.slider)(a.current,"".concat((null==(t=a.current)?void 0:t.parentElement).offsetWidth,"px"),"0","0","".concat(d(e),"ms"),o),f.current&&(f.current.style.display="none")},top:function(e){var t;(0,slidelayout_1.slider)(a.current,"0","-".concat((null==(t=a.current)?void 0:t.parentElement).offsetHeight,"px"),"0","".concat(d(e),"ms"),o),f.current&&(f.current.style.display="none")},bottom:function(e){var t;(0,slidelayout_1.slider)(a.current,"0","".concat((null==(t=a.current)?void 0:t.parentElement).offsetHeight,"px"),"0","".concat(d(e),"ms"),o),f.current&&(f.current.style.display="none")}}}),s=(0,useSlide_1.default)(n,a,s),d=s.getDuration,f=s.maskEl;return(0,react_1.useEffect)(function(){function r(){var e,t;n.collapse||null!=(t=null==(e=null==(e=null==a?void 0:a.current)?void 0:e.classList)?void 0:e.add)&&t.call(e,"".concat(selectorPrefix,"-hide"))}var e,t;return null!=(t=null==(e=null==a?void 0:a.current)?void 0:e.addEventListener)&&t.call(e,"transitionend",r),function(){var e,t;null!=(t=null==(e=null==a?void 0:a.current)?void 0:e.removeEventListener)&&t.call(e,"transitionend",r)}}),(0,react_1.useEffect)(function(){var e,t;n.collapse&&null!=(t=null==(e=null==(e=null==a?void 0:a.current)?void 0:e.classList)?void 0:e.remove)&&t.call(e,"".concat(selectorPrefix,"-hide"))},[n.collapse]),(0,react_1.useImperativeHandle)(e,function(){return{getEl:function(){return a.current}}}),react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,i,t||""),style:__assign(__assign({},r||{}),{zIndex:l}),ref:a},c)};exports.default=(0,react_1.memo)((0,react_1.forwardRef)(Overlay));
//# sourceMappingURL=overlay.js.map
