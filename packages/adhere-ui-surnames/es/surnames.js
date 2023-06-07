import classNames from"classnames";import React,{forwardRef,memo,useCallback,useImperativeHandle,useLayoutEffect,useRef}from"react";import Util from"@baifendian/adhere-util";var selectorPrefix="adhere-ui-surnames",DURATION=100,Surnames=function(e,H){var t=e.position,n=void 0===t?"right":t,t=e.className,t=void 0===t?"":t,r=e.style,r=void 0===r?{}:r,c=e.indexes,o=void 0===c?[]:c,c=e.dataSource,u=void 0===c?[]:c,l=e.onScroll,i=e.onBeforeScroll,s=useRef(null),a=useRef(null),f=useRef(null),c=useRef(null),d=useRef(null),m=useRef(),v=useRef(!1),p=useRef(!1),h=useRef(!1),x=useRef(0),g=useRef(0),y=useRef(""),E=useRef([]);function R(){return"left"===n||"right"===n?"vertical":"horizontal"}function w(){"vertical"===R()?(s.current.style.height="".concat(d.current.offsetHeight+50,"px"),s.current.style.width="100%"):s.current.style.height="100%"}var e=useCallback(function(){return u.map(function(t){var e=o.find(function(e){return e.index===t.index});return React.createElement("div",{key:t.index,className:"".concat(selectorPrefix,"-group")},React.createElement("a",{className:"".concat(selectorPrefix,"-group-title"),"data-name":t.index},null!=e&&e.renderTitle?e.renderTitle(t):null==e?void 0:e.index),React.createElement("div",{className:"".concat(selectorPrefix,"-group-inner")},null!=e&&e.renderContent?null==e?void 0:e.renderContent(t):null))})},[u,o]),z=useCallback(function(){return o.map(function(e){return React.createElement("a",{key:e.index,className:"".concat(selectorPrefix,"-index-item"),"data-name":e.index},e.renderIndex?e.renderIndex(e):e.index)})},[o]);function T(){var e,t=null==(e=d.current)?void 0:e.querySelectorAll(".".concat(selectorPrefix,"-index-item"));E.current=[];for(var n=0;n<t.length;n++){var r=t[n],c=r.dataset.name,o=r.getBoundingClientRect();E.current.push({name:c,top:o.top,bottom:o.bottom,left:o.left,right:o.right,offsetTop:r.offsetTop,offsetLeft:r.offsetLeft,width:r.offsetWidth,height:r.offsetHeight})}}function L(e){var t=e.target;e.preventDefault(),v.current||(v.current=!0,m.current.style.display="block",N(t.dataset.name))}function P(e,t){e=function(e,t){for(var n,r=R(),c="vertical"===r?t-x.current:e-g.current,o=E.current.find(function(e){return e.name===y.current}),u=0,a=E.current.length-1;u<=a&&u<=E.current.length-1&&a<=E.current.length-1;){var l,i=E.current[l=a+u>>1],s=void 0,f=void 0,d=void 0,d="vertical"===r?(s=o.top+c,o.bottom,f=i.top,i.bottom):(s=o.left+c,o.right,f=i.left,i.right);if(f<=s&&s<=d){n=i;break}s<f?a=l-1:u=1+l}return n||null}(e,t);e&&(a.current.innerText=e.name,a.current.style.display="block","vertical"===R()?(t=e.offsetTop+Math.floor(e.height/2),a.current.style.transform="translate3d(0,".concat(t,"px,0)")):(t=e.offsetLeft+e.width,a.current.style.transform="translate3d(".concat(t,"px,0,0)")),b(e.name))}function N(n,e){void 0===e&&(e=100);var t=null==(t=f.current)?void 0:t.querySelector(".".concat(selectorPrefix,"-group-title[data-name='").concat(n,"']")),r=null==(u=f.current)?void 0:u.scrollTop,c=r,o=t.offsetTop,u=screen.updateInterval,a=s.current.scrollHeight/((DURATION|e)/(u||16.7)+((DURATION|e)%(u||16.7)!=0?1:0));i&&i(n),"undefined"!=typeof window&&window.requestAnimationFrame(function e(){function t(){v.current=!1,p.current=!1,m.current.style.display="none",l&&l(n)}r<o?o<c+a?c=o:c+=a:c-a<o?c=o:c-=a,f.current.scrollTop=c,r<o?o<=c?t():"undefined"!=typeof window&&window.requestAnimationFrame(e):c<=o?t():"undefined"!=typeof window&&window.requestAnimationFrame(e)})}function b(e){var t;f.current.scrollTop=(null==(t=f.current)?void 0:t.querySelector(".".concat(selectorPrefix,"-group-title[data-name='").concat(e,"']"))).offsetTop,l&&l(e)}function k(e){e.preventDefault(),e.stopPropagation(),L(e)}function D(e){e.preventDefault();var t=e.changedTouches[0].pageY,n=e.changedTouches[0].pageX,e=e.target,e=Util.getTopDom(e,"".concat(selectorPrefix,"-index-item"));y.current=e.dataset.name,P(n,t)}function C(){a.current.style.display="none",a.current.innerText="",a.current.style.transform="translate3d(0,0,0)"}function A(e){e.preventDefault(),x.current=e.pageY,g.current=e.pageX;e=e.target,e=Util.getTopDom(e,"".concat(selectorPrefix,"-index-item"));y.current=null==e?void 0:e.dataset.name,p.current=!0}function I(e){if(!p.current)return!1;h.current=!0,e.preventDefault();var t=e.pageY;P(e.pageX,t)}function S(){p.current=!1,h.current=!1,a.current.style.display="none",a.current.innerText="",a.current.style.transform="translate3d(0,0,0)"}function U(e){if(h.current)return p.current=!1,h.current=!1,a.current.style.display="none",a.current.innerText="",!(a.current.style.transform="translate3d(0,0,0)");e.preventDefault(),L(e)}function q(){w(),T()}return useImperativeHandle(H,function(){return{scrollToAnimation:N,scrollTo:b}}),useLayoutEffect(function(){var e;return(e=document.createElement("div")).innerHTML="<div class='".concat(selectorPrefix,"-mask'></div>"),m.current=e.firstElementChild,document.body.appendChild(m.current),w(),T(),function(){var e;null!=(e=null==(e=m.current)?void 0:e.parentElement)&&e.removeChild(m.current)}},[]),useLayoutEffect(function(){var e;return Util.isTouch()?(null!=(e=d.current)&&e.addEventListener("click",k),null!=(e=d.current)&&e.addEventListener("touchmove",D),null!=(e=d.current)&&e.addEventListener("touchend",C)):(null!=(e=d.current)&&e.addEventListener("mousedown",A),null!=(e=d.current)&&e.addEventListener("mousemove",I),null!=(e=d.current)&&e.addEventListener("mouseleave",S),null!=(e=d.current)&&e.addEventListener("mouseup",U),"undefined"!=typeof window&&window.addEventListener("resize",q)),w(),T(),function(){var e;null!=(e=d.current)&&e.removeEventListener("click",k),null!=(e=d.current)&&e.removeEventListener("touchmove",D),null!=(e=d.current)&&e.removeEventListener("touchend",C),null!=(e=d.current)&&e.removeEventListener("mousedown",A),null!=(e=d.current)&&e.removeEventListener("mousemove",I),null!=(e=d.current)&&e.removeEventListener("mouseleave",S),null!=(e=d.current)&&e.removeEventListener("mouseup",U),"undefined"!=typeof window&&window.removeEventListener("resize",q)}}),React.createElement("div",{className:classNames(selectorPrefix,"".concat(selectorPrefix,"-config-position-").concat(n),null!=t?t:""),style:null!=r?r:{},ref:s},React.createElement("div",{className:"".concat(selectorPrefix,"-highlighted"),ref:a}),React.createElement("div",{className:"".concat(selectorPrefix,"-content"),ref:f},e()),React.createElement("div",{className:"".concat(selectorPrefix,"-index"),ref:c},React.createElement("div",{className:"".concat(selectorPrefix,"-index-inner"),ref:d},z())))};export default memo(forwardRef(Surnames));
//# sourceMappingURL=surnames.js.map
