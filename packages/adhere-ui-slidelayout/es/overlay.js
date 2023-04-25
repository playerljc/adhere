var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};import classNames from"classnames";import React,{forwardRef,memo,useEffect,useImperativeHandle,useRef}from"react";import{slider}from"./slidelayout";import useSlide from"./useSlide";var selectorPrefix="adhere-ui-slidelayout-overlay",Overlay=function(n,e){var t=n.className,t=void 0===t?"":t,r=n.style,r=void 0===r?{}:r,l=n.zIndex,l=void 0===l?9999:l,c=n.direction,c=void 0===c?"left":c,o=n.onAfterShow,i=n.onAfterClose,u=n.children,s=useRef(null),a=useRef({init:{left:function(){return slider(s.current,"-100%","0","0","0")},right:function(){var e;return slider(s.current,"".concat(null==(e=null==(e=s.current)?void 0:e.parentElement)?void 0:e.offsetWidth,"px"),"0","0","0")},top:function(){return slider(s.current,"0","-100%","0","0")},bottom:function(){var e;return slider(s.current,"0","".concat(null==(e=null==(e=s.current)?void 0:e.parentElement)?void 0:e.offsetHeight,"px"),"0","0")}},show:{left:function(e){slider(s.current,"0","0","0","".concat(d(e),"ms"),o),f.current&&(f.current.style.display="block")},right:function(e){var t;slider(s.current,"".concat((null==(t=s.current)?void 0:t.parentElement).offsetWidth-s.current.offsetWidth,"px"),"0","0","".concat(d(e),"ms"),o),f.current&&(f.current.style.display="block")},top:function(e){slider(s.current,"0","0","0","".concat(d(e),"ms"),o),f.current&&(f.current.style.display="block")},bottom:function(e){var t;slider(s.current,"0","".concat((null==(t=s.current)?void 0:t.parentElement).offsetHeight-s.current.offsetHeight,"px"),"0","".concat(d(e),"ms"),o),f.current&&(f.current.style.display="block")}},close:{left:function(e){slider(s.current,"-100%","0","0","".concat(d(e),"ms"),i),f.current&&(f.current.style.display="none")},right:function(e){var t;slider(s.current,"".concat((null==(t=s.current)?void 0:t.parentElement).offsetWidth,"px"),"0","0","".concat(d(e),"ms"),i),f.current&&(f.current.style.display="none")},top:function(e){var t;slider(s.current,"0","-".concat((null==(t=s.current)?void 0:t.parentElement).offsetHeight,"px"),"0","".concat(d(e),"ms"),i),f.current&&(f.current.style.display="none")},bottom:function(e){var t;slider(s.current,"0","".concat((null==(t=s.current)?void 0:t.parentElement).offsetHeight,"px"),"0","".concat(d(e),"ms"),i),f.current&&(f.current.style.display="none")}}}),a=useSlide(n,s,a),d=a.getDuration,f=a.maskEl;return useEffect(function(){function r(){var e,t;n.collapse||null!=(t=null==(e=null==(e=null==s?void 0:s.current)?void 0:e.classList)?void 0:e.add)&&t.call(e,"".concat(selectorPrefix,"-hide"))}var e,t;return null!=(t=null==(e=null==s?void 0:s.current)?void 0:e.addEventListener)&&t.call(e,"transitionend",r),function(){var e,t;null!=(t=null==(e=null==s?void 0:s.current)?void 0:e.removeEventListener)&&t.call(e,"transitionend",r)}}),useEffect(function(){var e,t;n.collapse&&null!=(t=null==(e=null==(e=null==s?void 0:s.current)?void 0:e.classList)?void 0:e.remove)&&t.call(e,"".concat(selectorPrefix,"-hide"))},[n.collapse]),useImperativeHandle(e,function(){return{getEl:function(){return s.current}}}),React.createElement("div",{className:classNames(selectorPrefix,c,t||""),style:__assign(__assign({},r||{}),{zIndex:l}),ref:s},u)};export default memo(forwardRef(Overlay));
//# sourceMappingURL=overlay.js.map
