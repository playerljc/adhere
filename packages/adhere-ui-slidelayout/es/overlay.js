var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)};import React,{useRef}from"react";import classNames from"classnames";import{slider}from"./slidelayout";import useSlide from"./useSlide";var selectorPrefix="adhere-ui-slidelayout-overlay",Overlay=function(e){var r=e.className,t=void 0===r?"":r,n=e.style,i=void 0===n?{}:n,l=e.zIndex,s=void 0===l?9999:l,r=e.direction,n=void 0===r?"left":r,o=e.onAfterShow,u=e.onAfterClose,l=e.children,c=useRef(null),r=useRef({init:{left:function(){return slider(c.current,"-100%","0","0","0")},right:function(){var e;return slider(c.current,(null===(e=null===(e=c.current)||void 0===e?void 0:e.parentElement)||void 0===e?void 0:e.offsetWidth)+"px","0","0","0")},top:function(){return slider(c.current,"0","-100%","0","0")},bottom:function(){var e;return slider(c.current,"0",(null===(e=null===(e=c.current)||void 0===e?void 0:e.parentElement)||void 0===e?void 0:e.offsetHeight)+"px","0","0")}},show:{left:function(e){slider(c.current,"0","0","0",a(e)+"ms",o),d.current&&(d.current.style.display="block")},right:function(e){var r;slider(c.current,(null===(r=c.current)||void 0===r?void 0:r.parentElement).offsetWidth-c.current.offsetWidth+"px","0","0",a(e)+"ms",o),d.current&&(d.current.style.display="block")},top:function(e){slider(c.current,"0","0","0",a(e)+"ms",o),d.current&&(d.current.style.display="block")},bottom:function(e){var r;slider(c.current,"0",(null===(r=c.current)||void 0===r?void 0:r.parentElement).offsetHeight-c.current.offsetHeight+"px","0",a(e)+"ms",o),d.current&&(d.current.style.display="block")}},close:{left:function(e){slider(c.current,"-100%","0","0",a(e)+"ms",u),d.current&&(d.current.style.display="none")},right:function(e){var r;slider(c.current,(null===(r=c.current)||void 0===r?void 0:r.parentElement).offsetWidth+"px","0","0",a(e)+"ms",u),d.current&&(d.current.style.display="none")},top:function(e){var r;slider(c.current,"0","-"+(null===(r=c.current)||void 0===r?void 0:r.parentElement).offsetHeight+"px","0",a(e)+"ms",u),d.current&&(d.current.style.display="none")},bottom:function(e){var r;slider(c.current,"0",(null===(r=c.current)||void 0===r?void 0:r.parentElement).offsetHeight+"px","0",a(e)+"ms",u),d.current&&(d.current.style.display="none")}}}),r=useSlide(e,c,r),a=r.getDuration,d=r.maskEl;return React.createElement("div",{className:classNames(selectorPrefix,n,t||""),style:__assign(__assign({},i||{}),{zIndex:s}),ref:c},l)};export default Overlay;
//# sourceMappingURL=overlay.js.map
