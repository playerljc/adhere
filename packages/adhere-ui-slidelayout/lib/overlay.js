"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),slidelayout_1=require("./slidelayout"),useSlide_1=__importDefault(require("./useSlide")),selectorPrefix="adhere-ui-slidelayout-overlay",Overlay=function(e){var t=e.className,t=void 0===t?"":t,r=e.style,r=void 0===r?{}:r,n=e.zIndex,n=void 0===n?9999:n,l=e.direction,l=void 0===l?"left":l,i=e.onAfterShow,u=e.onAfterClose,s=e.children,o=react_1.useRef(null),a=react_1.useRef({init:{left:function(){return slidelayout_1.slider(o.current,"-100%","0","0","0")},right:function(){var e;return slidelayout_1.slider(o.current,(null==(e=null==(e=o.current)?void 0:e.parentElement)?void 0:e.offsetWidth)+"px","0","0","0")},top:function(){return slidelayout_1.slider(o.current,"0","-100%","0","0")},bottom:function(){var e;return slidelayout_1.slider(o.current,"0",(null==(e=null==(e=o.current)?void 0:e.parentElement)?void 0:e.offsetHeight)+"px","0","0")}},show:{left:function(e){slidelayout_1.slider(o.current,"0","0","0",c(e)+"ms",i),d.current&&(d.current.style.display="block")},right:function(e){var t;slidelayout_1.slider(o.current,(null==(t=o.current)?void 0:t.parentElement).offsetWidth-o.current.offsetWidth+"px","0","0",c(e)+"ms",i),d.current&&(d.current.style.display="block")},top:function(e){slidelayout_1.slider(o.current,"0","0","0",c(e)+"ms",i),d.current&&(d.current.style.display="block")},bottom:function(e){var t;slidelayout_1.slider(o.current,"0",(null==(t=o.current)?void 0:t.parentElement).offsetHeight-o.current.offsetHeight+"px","0",c(e)+"ms",i),d.current&&(d.current.style.display="block")}},close:{left:function(e){slidelayout_1.slider(o.current,"-100%","0","0",c(e)+"ms",u),d.current&&(d.current.style.display="none")},right:function(e){var t;slidelayout_1.slider(o.current,(null==(t=o.current)?void 0:t.parentElement).offsetWidth+"px","0","0",c(e)+"ms",u),d.current&&(d.current.style.display="none")},top:function(e){var t;slidelayout_1.slider(o.current,"0","-"+(null==(t=o.current)?void 0:t.parentElement).offsetHeight+"px","0",c(e)+"ms",u),d.current&&(d.current.style.display="none")},bottom:function(e){var t;slidelayout_1.slider(o.current,"0",(null==(t=o.current)?void 0:t.parentElement).offsetHeight+"px","0",c(e)+"ms",u),d.current&&(d.current.style.display="none")}}}),e=useSlide_1.default(e,o,a),c=e.getDuration,d=e.maskEl;return react_1.default.createElement("div",{className:classnames_1.default(selectorPrefix,l,t||""),style:__assign(__assign({},r||{}),{zIndex:n}),ref:o},s)};exports.default=react_1.memo(Overlay);
//# sourceMappingURL=overlay.js.map
