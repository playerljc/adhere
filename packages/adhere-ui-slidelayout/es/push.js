var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};import React,{useRef}from"react";import classNames from"classnames";import{slider}from"./slidelayout";import useSlide from"./useSlide";var selectorPrefix="adhere-ui-slidelayout-push",Push=function(e){var t=e.masterClassName,s=void 0===t?"":t,r=e.masterStyle,n=void 0===r?{}:r,i=e.className,l=void 0===i?"":i,a=e.style,c=void 0===a?{}:a,o=e.slaveClassName,u=void 0===o?"":o,f=e.slaveStyle,t=void 0===f?{}:f,r=e.zIndex,i=void 0===r?9999:r,a=e.direction,o=void 0===a?"left":a,f=e.slide,r=e.master,d=e.onAfterShow,m=e.onAfterClose,y=useRef(null),h=useRef(null),p=useRef(null),a=useRef({init:{left:function(){h.current.style.left="0",p.current.style.left=h.current.offsetWidth+"px",slider(y.current,"-"+h.current.offsetWidth+"px","0","0","0")},right:function(){h.current.style.right="0",p.current.style.right=h.current.offsetWidth+"px",slider(y.current,h.current.offsetWidth+"px","0","0","0")}},show:{left:function(e){slider(y.current,"0","0","0",v(e)+"ms",d),_.current&&(_.current.style.display="block")},right:function(e){slider(y.current,"0","0","0",v(e)+"ms",d),_.current&&(_.current.style.display="block")}},close:{left:function(e){slider(y.current,"-"+h.current.offsetWidth+"px","0","0",v(e)+"ms",m),_.current&&(_.current.style.display="none")},right:function(e){slider(y.current,h.current.offsetWidth+"px","0","0",v(e)+"ms",m),_.current&&(_.current.style.display="none")}}}),a=useSlide(e,h,a),v=a.getDuration,_=a.maskEl;return React.createElement("div",{className:classNames(selectorPrefix+"-master",s||""),style:__assign(__assign({},n||{}),{zIndex:i-1}),ref:y},React.createElement("div",{className:classNames(selectorPrefix,o,l||""),style:__assign(__assign({},c||{}),{zIndex:i}),ref:h},f),React.createElement("div",{className:classNames(selectorPrefix+"-slave",u||""),style:__assign(__assign({},t||{}),{zIndex:i-2}),ref:p},r))};export default Push;
//# sourceMappingURL=push.js.map
