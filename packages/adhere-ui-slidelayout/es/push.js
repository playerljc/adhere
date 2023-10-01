var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};import classNames from"classnames";import React,{forwardRef,memo,useEffect,useImperativeHandle,useRef}from"react";import{slider}from"./slidelayout";import useSlide from"./useSlide";var selectorPrefix="adhere-ui-slide-layout-push",Push=function(l,e){var t=l.masterClassName,t=void 0===t?"":t,n=l.masterStyle,n=void 0===n?{}:n,r=l.className,r=void 0===r?"":r,s=l.style,s=void 0===s?{}:s,c=l.slaveClassName,c=void 0===c?"":c,i=l.slaveStyle,i=void 0===i?{}:i,a=l.zIndex,a=void 0===a?9999:a,o=l.direction,o=void 0===o?"left":o,u=l.slide,f=l.master,d=l.onAfterShow,v=l.onAfterClose,m=useRef(null),p=useRef(null),h=useRef(null),y=useRef({init:{left:function(){p.current.style.left="0",h.current.style.left="".concat(p.current.offsetWidth,"px"),slider(m.current,"-".concat(p.current.offsetWidth,"px"),"0","0","0")},right:function(){p.current.style.right="0",h.current.style.right="".concat(p.current.offsetWidth,"px"),slider(m.current,"".concat(p.current.offsetWidth,"px"),"0","0","0")}},show:{left:function(e){slider(m.current,"0","0","0","".concat(g(e),"ms"),d),x.current&&(x.current.style.display="block")},right:function(e){slider(m.current,"0","0","0","".concat(g(e),"ms"),d),x.current&&(x.current.style.display="block")}},close:{left:function(e){slider(m.current,"-".concat(p.current.offsetWidth,"px"),"0","0","".concat(g(e),"ms"),v),x.current&&(x.current.style.display="none")},right:function(e){slider(m.current,"".concat(p.current.offsetWidth,"px"),"0","0","".concat(g(e),"ms"),v),x.current&&(x.current.style.display="none")}}}),y=useSlide(l,p,y),g=y.getDuration,x=y.maskEl;return useEffect(function(){function n(){var e,t;l.collapse||null!=(t=null==(e=null==(e=null==p?void 0:p.current)?void 0:e.classList)?void 0:e.add)&&t.call(e,"".concat(selectorPrefix,"-hide"))}var e,t;return null!=(t=null==(e=null==m?void 0:m.current)?void 0:e.addEventListener)&&t.call(e,"transitionend",n),function(){var e,t;null!=(t=null==(e=null==m?void 0:m.current)?void 0:e.removeEventListener)&&t.call(e,"transitionend",n)}}),useEffect(function(){var e,t;l.collapse&&null!=(t=null==(e=null==(e=null==p?void 0:p.current)?void 0:e.classList)?void 0:e.remove)&&t.call(e,"".concat(selectorPrefix,"-hide"))},[l.collapse]),useEffect(function(){var e,t;l.collapse||null!=(t=null==(e=null==(e=null==p?void 0:p.current)?void 0:e.classList)?void 0:e.add)&&t.call(e,"".concat(selectorPrefix,"-hide"))},[]),useImperativeHandle(e,function(){return{getEl:function(){return m.current}}}),React.createElement("div",{className:classNames("".concat(selectorPrefix,"-master"),null!=t?t:""),style:__assign(__assign({},null!=n?n:{}),{zIndex:a-1}),ref:m},React.createElement("div",{className:classNames(selectorPrefix,o,null!=r?r:""),style:__assign(__assign({},null!=s?s:{}),{zIndex:a}),ref:p},u),React.createElement("div",{className:classNames("".concat(selectorPrefix,"-slave"),null!=c?c:""),style:__assign(__assign({},null!=i?i:{}),{zIndex:a-2}),ref:h},f))};export default memo(forwardRef(Push));
//# sourceMappingURL=push.js.map
