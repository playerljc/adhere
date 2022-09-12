import React,{useEffect,useLayoutEffect,useRef}from"react";import classNames from"classnames";import Swiper from"swiper";var selectorPrefix="adhere-ui-swipeout",SwipeOut=function(r){var e=r.className,t=void 0===e?"":e,n=r.style,i=void 0===n?{}:n,s=r.contentClassName,a=void 0===s?"":s,o=r.contentStyle,c=void 0===o?{}:o,l=r.beforeClassName,u=void 0===l?"":l,f=r.beforeStyle,e=void 0===f?{}:f,n=r.afterClassName,s=void 0===n?"":n,o=r.afterStyle,l=void 0===o?{}:o,f=r.before,n=r.after,o=r.beforeShow,d=void 0!==o&&o,o=r.afterShow,m=void 0!==o&&o,o=r.direction,v=void 0===o?"horizontal":o,o=r.duration,S=void 0===o?0:o,o=r.children,p=useRef(null),w=useRef(),N=useRef(new Map([[[!0,!0].toString(),1],[[!1,!1].toString(),1],[[!0,!1].toString(),0],[[!1,!0].toString(),2]]));function g(e,t){r[e]&&r[e](t)}return useLayoutEffect(function(){var e;w.current||(e=N.current.get([d,m].toString()),w.current=new Swiper(p.current,{init:!1,initialSlide:e,direction:v,slidesPerView:"auto",centeredSlides:!1,spaceBetween:0}),w.current.on("init",function(){return g("onInit")}),w.current.on("slideChangeTransitionStart",function(){return g("onSlideChangeTransitionStart",w.current.activeIndex)}),w.current.on("slideChangeTransitionEnd",function(){return g("onSlideChangeTransitionEnd",w.current.activeIndex)}),w.current.init())},[]),useEffect(function(){w.current.slideTo(N.current.get([d,m].toString()),S)},[d,m,S]),useEffect(function(){return w.current&&w.current.changeDirection(v)},[v]),React.createElement("div",{className:classNames(selectorPrefix,"swiper-container",t||""),style:i||{},ref:p},React.createElement("div",{className:"swiper-wrapper"},React.createElement("div",{className:classNames("swiper-slide",selectorPrefix+"-before",u||""),style:e||{}},null==f?void 0:f()),React.createElement("div",{className:classNames("swiper-slide",selectorPrefix+"-content",a||""),style:c||{}},o),React.createElement("div",{className:classNames("swiper-slide",selectorPrefix+"-after",s||""),style:l||{}},null==n?void 0:n())))};export default SwipeOut;
//# sourceMappingURL=swipeout.js.map
