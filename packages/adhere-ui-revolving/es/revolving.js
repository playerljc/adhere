import classNames from"classnames";import React,{forwardRef,memo,useEffect,useImperativeHandle,useRef}from"react";import Swiper from"swiper";import RevolvingItem from"./item";var selectorPrefix="adhere-ui-revolving",Revolving=function(e,r){var t=e.className,t=void 0===t?"":t,o=e.style,o=void 0===o?{}:o,n=e.classNameWrapper,n=void 0===n?"":n,i=e.styleWrapper,i=void 0===i?{}:i,l=e.children,a=e.speed,s=void 0===a?1e3:a,a=e.delay,c=void 0===a?1e3:a,a=e.direction,u=void 0===a?"top":a,a=e.loop,v=void 0===a||a,a=e.stopOnLastSlide,p=void 0!==a&&a,a=e.listeners,d=void 0===a?{}:a,f=useRef(null),e=useRef(null),m=useRef();function R(){m.current.autoplay.start()}function y(){m.current.autoplay.stop()}function g(){return m.current.autoplay.running}return useImperativeHandle(r,function(){return{start:R,stop:y,isRunning:g}}),useEffect(function(){var e;m.current&&("destory"in m.current&&m.current.destory instanceof Function&&m.current.destory(),m.current=null),m.current=new Swiper(f.current,{allowTouchMove:!1,direction:"left"===(e=u)||"right"===e?"horizontal":"vertical",loop:v,speed:s,autoplay:{delay:c,stopOnLastSlide:p,reverseDirection:"right"===u||"bottom"===u},on:d})},[s,c,u,v,p,d]),React.createElement("div",{className:classNames(selectorPrefix,"swiper-container",null!=t?t:""),style:null!=o?o:{},ref:f},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-wrapper"),"swiper-wrapper",null!=n?n:""),style:null!=i?i:{},ref:e},l))},RevolvingHOC=memo(forwardRef(Revolving));RevolvingHOC.Item=RevolvingItem;export default RevolvingHOC;
//# sourceMappingURL=revolving.js.map
