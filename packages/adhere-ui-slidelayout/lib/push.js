"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,l){void 0===l&&(l=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,l,n)}:function(e,t,r,l){e[l=void 0===l?r:l]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),slidelayout_1=require("./slidelayout"),useSlide_1=__importDefault(require("./useSlide")),selectorPrefix="adhere-ui-slidelayout-push",Push=function(l,e){var t=l.masterClassName,t=void 0===t?"":t,r=l.masterStyle,r=void 0===r?{}:r,n=l.className,n=void 0===n?"":n,s=l.style,s=void 0===s?{}:s,i=l.slaveClassName,i=void 0===i?"":i,a=l.slaveStyle,a=void 0===a?{}:a,c=l.zIndex,c=void 0===c?9999:c,u=l.direction,u=void 0===u?"left":u,o=l.slide,d=l.master,f=l.onAfterShow,_=l.onAfterClose,v=(0,react_1.useRef)(null),p=(0,react_1.useRef)(null),m=(0,react_1.useRef)(null),y=(0,react_1.useRef)({init:{left:function(){p.current.style.left="0",m.current.style.left="".concat(p.current.offsetWidth,"px"),(0,slidelayout_1.slider)(v.current,"-".concat(p.current.offsetWidth,"px"),"0","0","0")},right:function(){p.current.style.right="0",m.current.style.right="".concat(p.current.offsetWidth,"px"),(0,slidelayout_1.slider)(v.current,"".concat(p.current.offsetWidth,"px"),"0","0","0")}},show:{left:function(e){(0,slidelayout_1.slider)(v.current,"0","0","0","".concat(h(e),"ms"),f),g.current&&(g.current.style.display="block")},right:function(e){(0,slidelayout_1.slider)(v.current,"0","0","0","".concat(h(e),"ms"),f),g.current&&(g.current.style.display="block")}},close:{left:function(e){(0,slidelayout_1.slider)(v.current,"-".concat(p.current.offsetWidth,"px"),"0","0","".concat(h(e),"ms"),_),g.current&&(g.current.style.display="none")},right:function(e){(0,slidelayout_1.slider)(v.current,"".concat(p.current.offsetWidth,"px"),"0","0","".concat(h(e),"ms"),_),g.current&&(g.current.style.display="none")}}}),y=(0,useSlide_1.default)(l,p,y),h=y.getDuration,g=y.maskEl;return(0,react_1.useEffect)(function(){function r(){var e,t;l.collapse||null!=(t=null==(e=null==(e=null==p?void 0:p.current)?void 0:e.classList)?void 0:e.add)&&t.call(e,"".concat(selectorPrefix,"-hide"))}var e,t;return null!=(t=null==(e=null==v?void 0:v.current)?void 0:e.addEventListener)&&t.call(e,"transitionend",r),function(){var e,t;null!=(t=null==(e=null==v?void 0:v.current)?void 0:e.removeEventListener)&&t.call(e,"transitionend",r)}}),(0,react_1.useEffect)(function(){var e,t;l.collapse&&null!=(t=null==(e=null==(e=null==p?void 0:p.current)?void 0:e.classList)?void 0:e.remove)&&t.call(e,"".concat(selectorPrefix,"-hide"))},[l.collapse]),(0,react_1.useEffect)(function(){var e,t;l.collapse||null!=(t=null==(e=null==(e=null==p?void 0:p.current)?void 0:e.classList)?void 0:e.add)&&t.call(e,"".concat(selectorPrefix,"-hide"))},[]),(0,react_1.useImperativeHandle)(e,function(){return{getEl:function(){return v.current}}}),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-master"),t||""),style:__assign(__assign({},r||{}),{zIndex:c-1}),ref:v},react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,u,n||""),style:__assign(__assign({},s||{}),{zIndex:c}),ref:p},o),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-slave"),i||""),style:__assign(__assign({},a||{}),{zIndex:c-2}),ref:m},d))};exports.default=(0,react_1.memo)((0,react_1.forwardRef)(Push));
//# sourceMappingURL=push.js.map
